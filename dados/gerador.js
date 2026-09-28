/* Geradores infinitos de Matemática — um por arquétipo recorrente na prova do IFSC.
   Cada gerador devolve {topico, enunciado, alts[5], correta, porque}.
   Os distratores são erros REAIS (esquecer de converter, usar diâmetro como raio,
   somar em vez de multiplicar), não números aleatórios.                              */
(function () {
  const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const brl = v => "R$ " + v.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2});
  const num = v => Number(v.toFixed(2)).toLocaleString("pt-BR", {maximumFractionDigits: 2});

  /* monta as 5 alternativas: valor correto + distratores, sem repetir, embaralhado */
  function montar(correto, distratores, fmt) {
    const vistos = new Set([correto.toFixed(4)]);
    const lista = [correto];
    for (const d of distratores) {
      if (lista.length >= 5) break;
      if (d == null || !isFinite(d) || d <= 0) continue;
      if (vistos.has(d.toFixed(4))) continue;
      vistos.add(d.toFixed(4)); lista.push(d);
    }
    let guard = 0;
    while (lista.length < 5 && guard++ < 60) {
      const d = correto * (1 + (ri(-40, 40) / 100));
      const r = Math.round(d * 100) / 100;
      if (r > 0 && !vistos.has(r.toFixed(4))) { vistos.add(r.toFixed(4)); lista.push(r); }
    }
    lista.sort((a, b) => a - b);
    return {alts: lista.map(fmt), correta: lista.indexOf(correto)};
  }

  const G = [];

  /* ---- ARQUÉTIPO 1a: área de terreno/sala + quantos cabem ---- */
  G.push(function areaQuantosCabem() {
    const c = ri(8, 16), l = ri(5, 10);
    const faixa = pick([1.2, 1.5, 2]);
    const prof = pick([0, 1.5, 2]);
    const areaTotal = c * l;
    const areaProf = prof * l;
    const util = areaTotal - areaProf;
    const n = Math.floor(util / faixa);
    const ctx = pick([
      ["uma sala de aula do IFSC", "estudantes"],
      ["um laboratório de eletrônica", "bancadas de trabalho"],
      ["um auditório do câmpus", "cadeiras"]
    ]);
    const {alts, correta} = montar(n, [
      Math.floor(areaTotal / faixa),          // esqueceu de tirar a área do professor
      Math.floor(util / faixa) + 1,           // arredondou para cima
      Math.floor((areaTotal - prof * c) / faixa), // usou o comprimento no lugar da largura
      Math.floor(util / (faixa * 2))
    ], v => v + "");
    return {
      topico: "Área em contexto",
      enunciado: `${ctx[0].charAt(0).toUpperCase() + ctx[0].slice(1)} é um retângulo de ${c} m de comprimento por ${l} m de largura. ` +
        (prof ? `Uma faixa retangular de ${num(prof)} m de comprimento, ocupando toda a largura da sala, é reservada e não pode ser usada. ` : "") +
        `Sabendo que cada um dos ${ctx[1]} exige ${num(faixa)} m² (já incluída a área de circulação), qual é a quantidade máxima que cabe no espaço?`,
      alts, correta,
      porque: `Área total = ${c} × ${l} = ${areaTotal} m². ` +
        (prof ? `Área reservada = ${num(prof)} × ${l} = ${num(areaProf)} m² (a faixa ocupa toda a LARGURA, então multiplica pela largura). Área útil = ${areaTotal} − ${num(areaProf)} = ${num(util)} m². ` : "") +
        `Quantidade = ${num(util)} ÷ ${num(faixa)} = ${num(util / faixa)} → como não existe fração de ${ctx[1]}, arredonda-se para BAIXO: ${n}.`
    };
  });

  /* ---- ARQUÉTIPO 1b: volume de cilindro / capacidade em litros ---- */
  G.push(function volumeCilindro() {
    const d = pick([2, 4, 6, 1, 3]);
    const h = pick([0.5, 1, 1.5, 2, 2.5]);
    const r = d / 2;
    const v = 3 * r * r * h;          // π ≈ 3
    const litros = v * 1000;
    const {alts, correta} = montar(litros, [
      3 * d * d * h * 1000,           // usou o diâmetro como raio
      v,                              // esqueceu de converter m³ → L
      3 * r * r * h * 100,            // converteu errado
      2 * 3 * r * h * 1000            // usou a fórmula do perímetro
    ], v => num(v) + " L");
    return {
      topico: "Volume e capacidade",
      enunciado: `Uma caixa d’água cilíndrica tem ${num(d)} m de diâmetro e ${num(h)} m de altura. Usando π ≈ 3, qual é a sua capacidade, em litros?`,
      alts, correta,
      porque: `Primeiro: o enunciado dá o DIÂMETRO, então r = ${num(d)} ÷ 2 = ${num(r)} m. V = π·r²·h = 3 × ${num(r)}² × ${num(h)} = ${num(v)} m³. Como 1 m³ = 1.000 L, a capacidade é ${num(litros)} L. As duas armadilhas da questão são usar o diâmetro como raio e esquecer a conversão para litros.`
    };
  });

  /* ---- ARQUÉTIPO 2: porcentagem — à vista x parcelado ---- */
  G.push(function aVistaParcelado() {
    const etiqueta = pick([1200, 1800, 2400, 3000, 3600]);
    const desc = pick([10, 12, 15, 20, 25]);
    const vista = etiqueta * (1 - desc / 100);
    const parcelas = pick([6, 8, 10, 12]);
    const valorParcela = Math.round((etiqueta * pick([1, 1.05, 1.1])) / parcelas / 5) * 5;
    const totalParc = valorParcela * parcelas;
    const dif = Math.abs(totalParc - vista);
    const {alts, correta} = montar(dif, [
      Math.abs(totalParc - etiqueta),
      etiqueta * desc / 100,
      Math.abs(etiqueta - vista) + totalParc - etiqueta,
      dif / 2
    ], brl);
    return {
      topico: "Porcentagem e finanças",
      enunciado: `Uma loja anuncia um notebook por ${brl(etiqueta)}. Há duas formas de pagamento: à vista, com ${desc}% de desconto, ou em ${parcelas} parcelas de ${brl(valorParcela)}. Qual é a diferença entre o total pago nas duas formas?`,
      alts, correta,
      porque: `À vista: ${brl(etiqueta)} × (1 − ${desc / 100}) = ${brl(vista)}. Parcelado: ${parcelas} × ${brl(valorParcela)} = ${brl(totalParc)}. Diferença = ${brl(totalParc)} − ${brl(vista)} = ${brl(dif)}. Atalho: aplicar desconto de ${desc}% é multiplicar por ${num(1 - desc / 100)} direto, em vez de calcular o desconto e subtrair — uma conta a menos, um erro a menos.`
    };
  });

  /* ---- ARQUÉTIPO 3: regra de três / proporção ---- */
  G.push(function regraDeTres() {
    const modo = pick(["direta", "inversa"]);
    if (modo === "direta") {
      const maq = ri(2, 6), pecas = ri(30, 120), hFonte = ri(2, 6);
      const maq2 = maq + ri(1, 4);
      const res = pecas / maq * maq2;
      const {alts, correta} = montar(res, [pecas * maq / maq2, pecas + maq2, res / 2, pecas * maq2], v => num(v) + " peças");
      return {
        topico: "Regra de três",
        enunciado: `Em uma oficina, ${maq} máquinas idênticas produzem ${pecas} peças em ${hFonte} horas. Mantendo o mesmo ritmo e o mesmo tempo, quantas peças produziriam ${maq2} máquinas?`,
        alts, correta,
        porque: `Grandezas DIRETAMENTE proporcionais: mais máquinas, mais peças. ${maq} máquinas → ${pecas} peças, logo 1 máquina → ${num(pecas / maq)} peças. Com ${maq2} máquinas: ${num(pecas / maq)} × ${maq2} = ${num(res)} peças. Sempre confira o sentido antes de montar a proporção: se uma grandeza cresce e a outra decresce, a regra é inversa e você deve multiplicar cruzado ao contrário.`
      };
    }
    const op = ri(3, 8), dias = ri(6, 20);
    const op2 = op + ri(1, 6);
    const res = op * dias / op2;
    const {alts, correta} = montar(res, [dias * op2 / op, dias - (op2 - op), dias, res * 2], v => num(v) + " dias");
    return {
      topico: "Regra de três",
      enunciado: `Uma equipe de ${op} operários monta um painel elétrico em ${dias} dias. Mantendo o mesmo ritmo de trabalho, em quantos dias ${op2} operários fariam o mesmo serviço?`,
      alts, correta,
      porque: `Grandezas INVERSAMENTE proporcionais: mais operários, menos dias. O total de trabalho é constante: ${op} × ${dias} = ${op * dias} operários-dia. Com ${op2} operários: ${op * dias} ÷ ${op2} = ${num(res)} dias. O teste que nunca falha: a resposta tem que ser MENOR que ${dias}; se deu maior, você montou a proporção no sentido errado.`
    };
  });

  /* ---- ARQUÉTIPO 4: leitura de gráfico / tabela ---- */
  G.push(function leituraGrafico() {
    const cats = ["Estudo", "Sono", "Lazer", "Transporte", "Refeições"];
    let vals = [ri(3, 7), ri(7, 9), ri(2, 5), ri(1, 3), ri(1, 3)];
    const soma = vals.reduce((a, b) => a + b, 0);
    if (soma > 24) vals[1] -= (soma - 24);
    const tot = vals.reduce((a, b) => a + b, 0);
    const outras = 24 - tot;
    const i = ri(0, 2), j = (i + 2) % 5;
    const res = vals[i] + vals[j];
    const barras = cats.map((c, k) => `${c.padEnd(12, ".")} ${"█".repeat(vals[k])} ${vals[k]} h`).join("\n");
    const {alts, correta} = montar(res, [Math.abs(vals[i] - vals[j]), vals[i], vals[j], res + outras], v => v + " horas");
    return {
      topico: "Leitura de gráfico",
      enunciado: `O gráfico de barras abaixo mostra como um estudante distribui as horas do seu dia. As demais ${outras} h estão em “Outros”.\n\n${barras}\n\nQuantas horas somadas ele dedica a ${cats[i]} e ${cats[j]}?`,
      alts, correta,
      porque: `Leia os dois valores direto no gráfico e some: ${cats[i]} = ${vals[i]} h e ${cats[j]} = ${vals[j]} h, logo ${vals[i]} + ${vals[j]} = ${res} h. Em questão de gráfico, sublinhe no enunciado QUAIS categorias são pedidas antes de olhar para os números — o erro mais comum não é de conta, é ler a barra errada.`
    };
  });

  /* ---- ARQUÉTIPO 5: sistema de 2 equações do 1º grau disfarçado ---- */
  G.push(function sistemaDisfarcado() {
    const cen = pick([
      {a: "kg de tomate", b: "pé de alface", loc: "na feira"},
      {a: "resistor", b: "capacitor", loc: "na loja de componentes"},
      {a: "caderno", b: "caneta", loc: "na papelaria"}
    ]);
    const x = ri(3, 12), y = ri(2, 9);          // preços unitários
    const q1a = ri(2, 4), q1b = ri(1, 3);
    let q2a = ri(1, 4), q2b = ri(1, 4);
    if (q1a * q2b - q2a * q1b === 0) q2b = q2b + 1;   // garante sistema possível e determinado
    const t1 = q1a * x + q1b * y, t2 = q2a * x + q2b * y;
    const res = x + y;
    const {alts, correta} = montar(res, [x, y, Math.abs(x - y), res + 1, res - 1, 2 * res], brl);
    return {
      topico: "Sistema do 1º grau",
      enunciado: `${cen.loc.charAt(0).toUpperCase() + cen.loc.slice(1)}, Manoela comprou ${q1a} ${cen.a}${q1a > 1 ? "s" : ""} e ${q1b} ${cen.b}${q1b > 1 ? "s" : ""} e pagou ${brl(t1)}. No dia seguinte, aos mesmos preços, comprou ${q2a} ${cen.a}${q2a > 1 ? "s" : ""} e ${q2b} ${cen.b}${q2b > 1 ? "s" : ""} e pagou ${brl(t2)}. Quanto custaria comprar 1 ${cen.a} e 1 ${cen.b}?`,
      alts, correta,
      porque: `Chame de x o preço de 1 ${cen.a} e de y o preço de 1 ${cen.b}:\n  ${q1a}x + ${q1b}y = ${num(t1)}\n  ${q2a}x + ${q2b}y = ${num(t2)}\nResolvendo, x = ${brl(x)} e y = ${brl(y)}, logo x + y = ${brl(res)}.\nATALHO que o IFSC adora: quando a pergunta é por x + y, às vezes basta somar ou subtrair as duas equações e dividir — não precisa isolar cada variável. Sempre teste esse atalho antes de partir para a substituição.`
    };
  });

  /* ---- ARQUÉTIPO 6a: conversão de unidades de tempo ---- */
  G.push(function conversaoTempo() {
    const dias = pick([1.4, 2.3, 2.9, 3.6, 1.75, 4.25]);
    const d = Math.floor(dias);
    const restoH = (dias - d) * 24;
    const h = Math.floor(restoH);
    const min = Math.round((restoH - h) * 60);
    const certo = `${d} dias, ${h} horas e ${min} minutos`;
    const errados = [
      `${d} dias, ${h} horas e ${Math.round((dias - d) * 100)} minutos`,
      `${d} dias, ${h + 1} horas e ${min} minutos`,
      `${d} dias, ${Math.round(restoH)} horas e 0 minutos`,
      `${d} dias, ${h} horas e ${Math.max(1, min - 10)} minutos`
    ];
    const lista = [certo]; const vistos = new Set([certo]);
    for (const e of errados) if (!vistos.has(e) && lista.length < 5) {vistos.add(e); lista.push(e);}
    for (let k = 1; lista.length < 5; k++) { const e = `${d} dias, ${h} horas e ${min + k * 7} minutos`; if (!vistos.has(e)) {vistos.add(e); lista.push(e);} }
    lista.sort(() => Math.random() - 0.5);
    return {
      topico: "Conversão de unidades",
      enunciado: `Considerando que 1 dia equivale a 24 horas, 1 hora a 60 minutos e 1 minuto a 60 segundos, ${num(dias)} dias equivalem a:`,
      alts: lista, correta: lista.indexOf(certo),
      porque: `Separe a parte inteira da decimal. Parte inteira: ${d} dias. Parte decimal: ${num(dias - d)} dia × 24 = ${num(restoH)} h → são ${h} horas inteiras e sobra ${num(restoH - h)} h. Essa sobra × 60 = ${min} min. Resultado: ${certo}.\nO erro que a prova espera é tratar a casa decimal como se já fosse minuto (${num(dias - d)} virar "${Math.round((dias - d) * 100)} minutos"). Decimal de dia não é hora e decimal de hora não é minuto — cada passo exige uma multiplicação.`
    };
  });

  /* ---- ARQUÉTIPO 6b: consumo de água/energia com conversão ---- */
  G.push(function consumoConta() {
    const tipo = pick(["agua", "energia"]);
    if (tipo === "agua") {
      const lmin = pick([6, 8, 9, 12]);
      const minBanho = pick([8, 10, 15, 20]);
      const banhos = pick([1, 2]);
      const dias = 30;
      const tarifa = pick([5.5, 6.5, 7.2, 8]);
      const litros = lmin * minBanho * banhos * dias;
      const m3 = litros / 1000;
      const custo = m3 * tarifa;
      const {alts, correta} = montar(custo, [litros * tarifa, custo / banhos, custo * 1000 / 100, litros / tarifa], brl);
      return {
        topico: "Conversão de unidades",
        enunciado: `Um chuveiro consome ${lmin} litros de água por minuto. Uma pessoa toma ${banhos} banho${banhos > 1 ? "s" : ""} de ${minBanho} minutos por dia, ao longo de ${dias} dias. Sabendo que a companhia cobra ${brl(tarifa)} por metro cúbico e que 1 m³ = 1.000 L, qual será o custo desse consumo?`,
        alts, correta,
        porque: `Consumo total = ${lmin} L/min × ${minBanho} min × ${banhos} banho(s) × ${dias} dias = ${num(litros)} L. Converta: ${num(litros)} ÷ 1.000 = ${num(m3)} m³. Custo = ${num(m3)} × ${brl(tarifa)} = ${brl(custo)}.\nA armadilha é multiplicar a tarifa pelos LITROS em vez dos metros cúbicos — o resultado sai 1.000 vezes maior. Sempre confira se a unidade da tarifa bate com a unidade do consumo antes de multiplicar.`
      };
    }
    const w = pick([800, 1200, 1500, 2200, 3500, 5500]);
    const hdia = pick([0.25, 0.5, 1, 2, 3]);
    const dias = 30;
    const tarifa = pick([0.65, 0.75, 0.8, 0.95]);
    const kwh = (w / 1000) * hdia * dias;
    const custo = kwh * tarifa;
    const {alts, correta} = montar(custo, [w * hdia * dias * tarifa, custo / dias, kwh, custo * 2], brl);
    return {
      topico: "Conversão de unidades",
      enunciado: `Um aparelho de ${num(w)} W é utilizado ${num(hdia)} hora(s) por dia, durante ${dias} dias. Com a tarifa de ${brl(tarifa)} por kWh, qual é o custo mensal de energia desse aparelho?`,
      alts, correta,
      porque: `Converta a potência para quilowatts: ${num(w)} W ÷ 1.000 = ${num(w / 1000)} kW. Energia = potência × tempo = ${num(w / 1000)} × ${num(hdia)} × ${dias} = ${num(kwh)} kWh. Custo = ${num(kwh)} × ${brl(tarifa)} = ${brl(custo)}.\nGuarde esta fórmula, porque ela resolve toda questão de conta de luz do IFSC: E(kWh) = P(kW) × t(h). O erro fatal é esquecer de dividir os watts por 1.000.`
    };
  });

  /* ---- ARQUÉTIPO 7: fração de um total ---- */
  G.push(function fracoesKit() {
    const n = pick([12, 18, 20, 24, 30]);
    const f = pick([[1, 2], [1, 3], [2, 3], [3, 4], [1, 4], [5, 6]]);
    const g = pick([[1, 2], [1, 3], [2, 3], [1, 6]]);
    const a = n * f[0] / f[1], b = n * g[0] / g[1];
    const res = a + b;
    const {alts, correta} = montar(res, [Math.abs(a - b), a, b, n * (f[0] + g[0]) / (f[1] + g[1])], v => num(v) + " unidades");
    return {
      topico: "Frações",
      enunciado: `Uma pousada montou ${n} kits de lanche. Cada kit leva ${f[0]}/${f[1]} de um pão caseiro e ${g[0]}/${g[1]} de um queijo colonial. No total, quantas unidades de pão e de queijo foram consumidas somadas?`,
      alts, correta,
      porque: `Pães: ${n} × ${f[0]}/${f[1]} = ${num(a)}. Queijos: ${n} × ${g[0]}/${g[1]} = ${num(b)}. Total = ${num(a)} + ${num(b)} = ${num(res)}.\nMultiplicar um inteiro por fração é multiplicar pelo numerador e dividir pelo denominador — e, quando dá para simplificar antes (${n} com ${f[1]}), a conta fica de cabeça. Não some as frações entre si: os kits consomem os dois itens ao mesmo tempo.`
    };
  });

  /* ---- ARQUÉTIPO 8: Pitágoras em contexto ---- */
  G.push(function pitagorasContexto() {
    const trio = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17]]);
    const k = pick([1, 1, 2]);
    const [a, b, c] = trio.map(v => v * k);
    const modo = pick(["hip", "cat"]);
    const ctx = pick([
      ["Uma antena é sustentada por um cabo esticado do topo até um ponto no chão", "antena", "cabo"],
      ["Uma escada está apoiada em uma parede vertical", "parede", "escada"],
      ["Uma rampa de acesso liga o chão ao patamar de entrada do câmpus", "patamar", "rampa"]
    ]);
    if (modo === "hip") {
      const {alts, correta} = montar(c, [a + b, Math.abs(b - a), Math.sqrt(b * b - a * a), c + 1], v => num(v) + " m");
      return {
        topico: "Pitágoras",
        enunciado: `${ctx[0]}. A altura ${"do " + ctx[1]} é de ${a} m e a distância horizontal até a base é de ${b} m. Qual é o comprimento ${"da " + ctx[2]}?`,
        alts, correta,
        porque: `A ${ctx[2]} é a HIPOTENUSA (o lado oposto ao ângulo reto, sempre o maior). c² = ${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c} → c = ${c} m.\nO distrator ${a + b} é quem simplesmente somou os lados: a hipotenusa é sempre MENOR que a soma dos catetos e MAIOR que cada um deles — use isso para eliminar alternativas antes mesmo de calcular.`
      };
    }
    const {alts, correta} = montar(a, [c - b, Math.sqrt(c * c + b * b), c + b, a + 1], v => num(v) + " m");
    return {
      topico: "Pitágoras",
      enunciado: `${ctx[0]}. ${"A " + ctx[2]} mede ${c} m e sua base está a ${b} m de distância do ponto de apoio. Que altura ${"o " + ctx[1]} alcança?`,
      alts, correta,
      porque: `Aqui a incógnita é um CATETO, então a fórmula é subtração: a² = c² − b² = ${c * c} − ${b * b} = ${a * a} → a = ${a} m.\nO distrator ${c - b} é de quem subtraiu os lados direto, sem elevar ao quadrado. Regra: procurando a hipotenusa, some os quadrados; procurando um cateto, subtraia o quadrado do outro cateto do quadrado da hipotenusa.`
    };
  });

  window.GERADORES = G;
  window.gerarQuestao = function (idx) {
    const f = (idx == null) ? pick(G) : G[idx % G.length];
    const q = f();
    q.area = "mat"; q.nivel = 2; q.id = "GEN:" + f.name + ":" + Math.random().toString(36).slice(2, 8);
    q.gerada = true;
    return q;
  };
})();
