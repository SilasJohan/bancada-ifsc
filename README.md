# Bancada IFSC

Site de treino para o **Exame de Classificação do IFSC** — Curso Técnico Integrado em
Eletrônica, Câmpus Florianópolis-Centro, prova de **29/11/2026**.

O método completo está em [METODO.md](METODO.md). Este diretório é o app.

## O que tem dentro

| Aba | O que faz |
|---|---|
| Painel | Contagem regressiva, nota projetada, domínio por área, réplica da grade de respostas do caderno oficial |
| Treino do dia | Sessão de 10 questões com repetição espaçada (Leitner, caixas de 1/2/4/8/16 dias) |
| Drill de matemática | Geradores infinitos dos 10 arquétipos que se repetem nas provas — números novos a cada clique |
| Simulado | 28 questões na ordem oficial (7+7+7+7) com cronômetro de 4h, correção e revisão questão a questão |
| Caderno de erro | Tópicos ordenados por prejuízo, com sessão de revisão só dos erros |
| Mapa do edital | Anexo V ordenado por frequência real nas provas de 2023.2 a 2026.2 |
| **Dossiê** | Os 52 tópicos do edital em três camadas de profundidade — o que saber em detalhe, a armadilha de cada um e o teste de fogo em voz alta |
| Plano de 66 dias | Calendário semanal, links das provas oficiais em PDF e o protocolo do dia da prova |

Progresso salvo em `localStorage` — fica no navegador, por dispositivo. Zerar só pelo
botão na barra lateral.

## De onde vêm as questões

São **questões originais**, escritas para este repositório — não são cópias das provas do
IFSC. O que foi copiado é o *comportamento* da banca: estrutura de 28 questões em 7+7+7+7,
cinco alternativas, enunciado com contexto do cotidiano catarinense, formato "analise as
afirmativas I/II/III", e os mesmos arquétipos e pegadinhas que se repetem de 2023.2 a
2026.2.

As de matemática nem são fixas — `dados/gerador.js` monta números novos a cada clique, e
os distratores são **erros reais** (usar diâmetro como raio, esquecer de converter
unidade), não números aleatórios. Isso impede decorar resposta: só resta aprender o
caminho.

As provas oficiais continuam sendo o padrão-ouro para simulado cronometrado — os links
estão na aba *Plano de 66 dias* e no fim deste arquivo.

## Rodar

Abrir `index.html` direto no navegador já funciona (os dados são arquivos `.js`, não
`fetch`, justamente para não esbarrar em CORS no `file://`).

Para servir localmente:

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Colocar no GitHub

O repositório já está inicializado localmente. Para publicar:

```bash
gh auth login                                    # só na primeira vez
gh repo create bancada-ifsc --private --source=. --push
```

Troque `--private` por `--public` se quiser que outros candidatos usem. Sendo público,
dá para servir direto pelo GitHub Pages, sem servidor nenhum:

```bash
gh repo edit --enable-pages --pages-branch main
# fica em https://<seu-usuario>.github.io/bancada-ifsc/
```

Depois, o ciclo normal:

```bash
git add -A && git commit -m "novas questões de ciências" && git push
```

## Hospedar no seu servidor

É estático puro — sem build, sem backend, sem dependência externa além das fontes do
Google Fonts. Basta copiar a pasta.

```bash
rsync -av --delete ./ usuario@servidor:/var/www/bancada-ifsc/
```

Nginx:

```nginx
server {
    listen 80;
    server_name bancada.seudominio.com.br;
    root /var/www/bancada-ifsc;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}
```

Depois rode `certbot --nginx -d bancada.seudominio.com.br` para o HTTPS.

## Adicionar questões

Edite `dados/banco.js` e acrescente objetos ao array:

```js
{id:"C29", area:"cie", topico:"Eletricidade", nivel:2,
 enunciado:"…",
 alts:["…","…","…","…","…"], correta:2,
 porque:"Explique o raciocínio E o erro que a alternativa errada representa."}
```

`area` é `mat`, `cie`, `gh` ou `port`. `correta` é o índice de 0 a 4. O `id` precisa ser
único — ele é a chave do agendamento da repetição espaçada.

Para um novo arquétipo de matemática, adicione uma função a `G` em `dados/gerador.js`.
Ela deve devolver `{topico, enunciado, alts, correta, porque}`, e os distratores devem
ser **erros reais** (esquecer de converter unidade, usar diâmetro como raio), não números
aleatórios — é o que transforma a alternativa errada em aprendizado.

## Editar o Dossiê

`dados/dominio.js` é uma lista de objetos, um por tópico:

```js
{area:"cie", tier:"nucleo", topico:"Nome do tópico",
 freq:"~1 por prova, em todas",
 saber:["item 1", "item 2 com <code>fórmula</code>"],
 armadilha:"O erro específico que a banca explora aqui.",
 fogo:"Pergunta para responder em voz alta, sem olhar."}
```

`tier` é `nucleo` (cai toda prova), `orbita` (cai em ~metade) ou `cauda` (está no edital
mas quase não cai). `saber` aceita `<b>` e `<code>`. O critério para promover um tópico de
camada é frequência observada nas provas, não a sua intuição sobre importância.

## Fontes oficiais

- [Edital 01/DEING/2026-2 — Técnicos Integrados](https://www.ifsc.edu.br/documents/d/ingresso/edital-01_2026_2_tecnico_integrado_prova) (Anexo V: conteúdo programático · Anexo III: desempate)
- [Provas e gabaritos](https://www.ifsc.edu.br/provas-e-gabaritos)
- [Estatísticas dos processos seletivos](https://www.ifsc.edu.br/estatisticas-dos-processos-seletivos)
- [Calendário de inscrições](https://www.ifsc.edu.br/calendario-de-inscricoes)
