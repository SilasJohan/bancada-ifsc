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
| Domínio | `ifsc.sohan.sbs` (DNS na Cloudflare) |
| Servidor | `root@192.168.88.42`, SSH na porta 2222 (Debian 12, x86_64) |
| Pasta | `/var/www/bancada-ifsc` |
| nginx | porta **8800**, HTTP puro, só localhost e LAN |
| Exposição | **Cloudflare Tunnel** (`cloudflared` como serviço systemd) |

### Por que um túnel, e não port-forward

A operadora deste link (Directnet, AS28590) **descarta as portas 80 e 443 de entrada**.
Medido com `check-host.net` de 39 pontos do mundo: 0 alcançam a 443, 0 alcançam a 80, e
12 de 12 alcançam a 25565 (Minecraft) — ou seja, o roteador encaminha bem; é a operadora
que filtra as duas portas web.

Cuidado com um falso positivo que custou tempo: testar `https://200.152.8.138` **de dentro
da própria rede** funciona, porque o roteador faz hairpin NAT. Isso inclui qualquer
ferramenta que rode na sua máquina. Só um ponto de vista realmente externo (celular no 4G,
`check-host.net`) diz a verdade sobre a porta.

Com as duas portas mortas, "expor o nginx" não é uma opção. O `cloudflared` abre uma
conexão de **saída** para a Cloudflare e os visitantes chegam por ela:

```
visitante ──443──> Cloudflare <══túnel══ cloudflared (servidor) ──http──> nginx :8800
```

Consequências boas: nenhum port-forward (pode apagar os de 80/443 no roteador), IP
residencial escondido, IP dinâmico irrelevante, HTTPS gerido pela Cloudflare, e `http://`
também funciona. Nada de certbot — não há certificado no servidor.

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
sobrescrever é sempre seguro. O vhost do OpenMediaVault é o `default_server` da porta 80 e
não é tocado.

O único detalhe não óbvio no arquivo: `set_real_ip_from 127.0.0.1` + `real_ip_header
CF-Connecting-IP`. O cloudflared conecta de localhost e manda o IP do visitante nesse
header; confiar nele só vindo do loopback é o que impede alguém na LAN de forjar o IP no
log.

### O túnel

Criado no painel (Zero Trust → Networks → Tunnels), gerenciado remotamente: o roteamento
`ifsc.sohan.sbs → http://localhost:8800` fica na Cloudflare, e o registro DNS é um CNAME
para `<id>.cfargotunnel.com` que ela mesma cria. No servidor só existe o serviço:

```bash
systemctl status cloudflared      # deve estar active (running)
journalctl -u cloudflared -n 50   # logs; "Registered tunnel connection" = conectado
```

Trocar de servidor: instale o `cloudflared` (repositório apt `pkg.cloudflare.com`) e rode
`cloudflared service install <token>` com o token do túnel, que fica no painel.

### Acesso pela rede local

`http://192.168.88.42:8800` — sem DNS, sem Cloudflare, sem TLS. Útil quando a internet
está fora ou para testar antes de publicar.

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
