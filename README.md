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

É estático puro — 228 KB, sem build, sem backend, sem banco. O único recurso externo são
as fontes do Google Fonts. Basta copiar a pasta e apontar o nginx para ela.

Os arquivos em `deploy/` já estão preenchidos para a instalação real:

| | |
|---|---|
| Domínio | `ifsc.sohan.sbs` |
| Servidor | `root@192.168.88.42`, SSH na porta 2222 (Debian 12) |
| Pasta | `/var/www/bancada-ifsc` |
| IP público | `200.152.8.138` (Directnet, AS28590) |

### Por que a Cloudflare está no meio

A operadora deste link **bloqueia a porta 80 de entrada**. Comprovação: uma porta sem
regra de encaminhamento no roteador responde `ECONNREFUSED`, e a 443 completa handshake
TLS normalmente — mas a 80 dá *timeout*, ou seja, o pacote é descartado antes de chegar.
Não é ajuste de roteador; é política da operadora.

Isso tem duas consequências:

1. **Nada de certbot.** O desafio HTTP-01 da Let's Encrypt precisa da porta 80. Em vez
   dele usamos um **Origin Certificate da Cloudflare**, válido por 15 anos, emitido a
   partir de um CSR gerado no próprio servidor — a chave privada nunca sai de lá.
2. **Quem atende `http://` é a Cloudflare**, não este nginx. Com o proxy ligado (nuvem
   laranja) o caminho é `visitante → Cloudflare:443 → servidor:443`.

De quebra, o IP residencial fica escondido e uma troca de IP dinâmico não derruba o site.

### Deploy do conteúdo

```bash
SSH_PORT=2222 ./deploy/deploy.sh root@192.168.88.42
```

O `--delete` deixa o servidor idêntico à sua pasta local. É esse o comando para republicar
depois de acrescentar questões.

### Instalar ou atualizar o nginx

```bash
scp -P 2222 deploy/nginx.conf root@192.168.88.42:/tmp/bancada-ifsc.conf
ssh -p 2222 root@192.168.88.42
mv /tmp/bancada-ifsc.conf /etc/nginx/sites-available/bancada-ifsc
ln -s /etc/nginx/sites-available/bancada-ifsc /etc/nginx/sites-enabled/   # só na 1ª vez
nginx -t && systemctl reload nginx
```

`deploy/nginx.conf` é a fonte da verdade — nada edita esse arquivo no servidor, então
sobrescrever é sempre seguro. (Foi por isso que evitamos `certbot --nginx`: ele reescreve
o arquivo no servidor, e o próximo `scp` apagaria o bloco TLS.)

Detalhes que o arquivo resolve e são fáceis de perder:

- **`set_real_ip_from` + `real_ip_header CF-Connecting-IP`** — sem isso todo acesso
  aparece no log com IP da Cloudflare em vez do IP de quem visitou.
- **`geo $realip_remote_addr`** — a lista de origens permitidas precisa olhar o IP de quem
  *abriu a conexão*. O padrão do `geo` é `$remote_addr`, que o `real_ip_header` já
  reescreveu para o visitante final; usar o padrão daria 403 em todo acesso legítimo.
- **`listen 443 ssl http2`** — no nginx 1.22 do Debian 12 o http2 é sufixo do `listen`.
  A diretiva `http2 on;` só existe a partir da 1.25.1.
- O vhost do OpenMediaVault é o `default_server` da porta 80 e não é tocado.

### Acesso pela rede local

`http://192.168.88.42:8800` — sem DNS, sem Cloudflare, sem TLS. Útil quando a internet
está fora ou para testar antes de publicar.

### Renovação do certificado

Não tem. O Origin Certificate vale 15 anos e o certificado que o visitante vê é gerenciado
pela Cloudflare. Se um dia sair da Cloudflare, aí sim volta a fazer sentido o certbot —
e nesse caso pelo desafio DNS-01, nunca HTTP-01, enquanto a porta 80 estiver bloqueada.

> O progresso de cada pessoa fica no `localStorage` do navegador dela. Publicar o site não
> junta nem compartilha progresso entre quem usa — cada dispositivo tem o seu.

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
