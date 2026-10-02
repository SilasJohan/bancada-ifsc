/* Verificador do banco de questões — rodar antes de todo deploy:
     node ferramentas/checa-banco.js
   Barra o vício que entrega a resposta sem saber o conteúdo:
     - a certa ser a alternativa mais longa (na prova real elas têm tamanho parecido);
     - a certa ser muito maior ou muito menor que a média das erradas;
     - id repetido, alternativa repetida, correta fora de 0–4, {X} no porque inválido.
   Matemática fica de fora da regra de tamanho: lá as alternativas são números.
     node ferramentas/checa-banco.js trecho.js   → confere só um trecho solto de objetos  */
global.window = {};
const arq = process.argv[2];
const B = arq ? eval("[" + require("fs").readFileSync(arq, "utf8") + "]")
              : (require("../dados/banco.js"), window.BANCO);

const erros = [], avisos = [], ids = new Set(), porArea = {};
for (const q of B) {
  const onde = q.id + " (" + q.area + ")";
  if (ids.has(q.id)) erros.push(onde + ": id repetido");
  ids.add(q.id);
  if (!Array.isArray(q.alts) || q.alts.length !== 5) { erros.push(onde + ": precisa de 5 alternativas"); continue; }
  if (!(q.correta >= 0 && q.correta <= 4)) erros.push(onde + ": correta fora de 0–4");
  if (new Set(q.alts).size !== 5) erros.push(onde + ": alternativa repetida");
  if (!q.porque || !q.enunciado || !q.topico) erros.push(onde + ": faltam campos");
  for (const m of (q.porque || "").matchAll(/\{([^}]*)\}/g))
    if (!/^[A-E]$/.test(m[1])) erros.push(onde + ": marcador {" + m[1] + "} inválido no porque");

  const a = porArea[q.area] = porArea[q.area] || {n: 0, maior: 0, razao: 0};
  a.n++;
  if (q.area === "mat") continue;
  const L = q.alts.map(s => s.length), c = L[q.correta];
  const outras = L.filter((_, i) => i !== q.correta);
  const media = outras.reduce((x, y) => x + y, 0) / 4;
  const razao = c / media;
  a.razao += razao;
  const maiorUnica = outras.every(x => x < c);
  if (maiorUnica) a.maior++;
  if (maiorUnica && c > Math.max(...outras) * 1.15)
    erros.push(onde + ": a certa é a mais longa com folga (" + c + " × " + Math.max(...outras) + " caracteres)");
  if (razao > 1.35 || razao < 0.6)
    erros.push(onde + ": certa com " + c + " caracteres contra média " + media.toFixed(0) + " das erradas (razão " + razao.toFixed(2) + ")");
}

console.log("área   questões   certa = mais longa   razão média certa/erradas");
for (const [k, a] of Object.entries(porArea)) {
  const pct = a.n ? Math.round(100 * a.maior / a.n) : 0;
  console.log(k.padEnd(6), String(a.n).padStart(8), (k === "mat" ? "—" : a.maior + " (" + pct + "%)").padStart(20),
    (k === "mat" ? "—" : (a.razao / a.n).toFixed(2)).padStart(16));
  /* ao acaso, a certa seria a mais longa em ~20% das questões (1 em 5) */
  if (k !== "mat" && pct > 30) erros.push(k + ": a certa é a mais longa em " + pct + "% das questões (máximo 30%)");
}
/* nas de afirmativas I/II/III, a combinação certa também não pode virar padrão */
const afirm = B.filter(q => q.area !== "mat" && q.alts && q.alts.some(s => /^Todos os itens/.test(s)));
if (afirm.length >= 10) {
  const conta = {};
  for (const q of afirm) { const k = q.alts[q.correta].replace(/[^IV,e ]|\b(e)\b/g, "").replace(/\s+/g, "") || "todos"; conta[k] = (conta[k] || 0) + 1; }
  const todos = afirm.filter(q => /^Todos/.test(q.alts[q.correta])).length;
  console.log("\nafirmativas I/II/III: " + afirm.length + " questões, " + todos + " com “Todos os itens” como resposta");
  if (todos < afirm.length * 0.1) avisos.push("“Todos os itens estão corretos” quase nunca é a resposta — vira pista");
  for (const [k, n] of Object.entries(conta))
    if (n > afirm.length * 0.35) avisos.push("a combinação " + k + " é a resposta em " + n + " de " + afirm.length + " questões de afirmativas");
}
for (const e of erros) console.log("ERRO  " + e);
for (const w of avisos) console.log("aviso " + w);
console.log(erros.length ? "\n" + erros.length + " problema(s)." : "\nBanco ok.");
process.exit(erros.length ? 1 : 0);
