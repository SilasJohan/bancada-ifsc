/* Banco de questões — IFSC Exame de Classificação (Técnico Integrado)
   Calibrado pela frequência real observada nas provas 2023.2 a 2026.2.
   Formato: {id, area, topico, nivel(1-3), enunciado, alts[5], correta(0-4), porque}
   area: mat | cie | gh | port                                                  */
window.BANCO = [

/* ===================== MATEMÁTICA ===================== */
{id:"M01",area:"mat",topico:"Conjuntos numéricos",nivel:2,
 enunciado:"Ana e Bia criaram um jogo: cada uma sorteia um número e vence quem tirar um número IRRACIONAL. Qual dos números abaixo é irracional?",
 alts:["√9","22/7","0,333… (dízima periódica)","√2","1,25"],correta:3,
 porque:"√2 = 1,41421356… não tem fim nem período, logo não pode ser escrito como fração de inteiros. √9 = 3 (inteiro), 22/7 é fração, 0,333… = 1/3 e 1,25 = 5/4 são todos racionais. Regra prática: raiz que não é exata → irracional."},

{id:"M02",area:"mat",topico:"Conjuntos numéricos",nivel:1,
 enunciado:"Quantos números primos existem entre 20 e 40?",
 alts:["3","4","5","6","7"],correta:1,
 porque:"São 23, 29, 31 e 37 → 4 números. Teste de primo até 40: basta checar divisibilidade por 2, 3 e 5. 21=3·7, 25=5², 27=3³, 33=3·11, 35=5·7, 39=3·13."},

{id:"M03",area:"mat",topico:"MMC e MDC",nivel:2,
 enunciado:"Dois ônibus saem juntos do terminal de Florianópolis às 8h. Um passa a cada 18 minutos e o outro a cada 24 minutos. A que horas eles voltarão a sair juntos pela primeira vez?",
 alts:["8h48","9h00","9h12","9h36","10h12"],correta:2,
 porque:"“Voltar a coincidir” = MMC. 18 = 2·3², 24 = 2³·3 → MMC = 2³·3² = 72 min = 1h12. 8h + 1h12 = 9h12. Dica: MMC é sempre ‘quando se encontram de novo’; MDC é sempre ‘maior pedaço igual’."},

{id:"M04",area:"mat",topico:"Notação científica",nivel:1,
 enunciado:"A espessura de uma trilha de placa de circuito impresso é de 0,00035 m. Em notação científica, esse valor é:",
 alts:["3,5 × 10⁻³ m","35 × 10⁻³ m","3,5 × 10⁻⁴ m","0,35 × 10⁻³ m","3,5 × 10⁴ m"],correta:2,
 porque:"Notação científica exige um único algarismo diferente de zero antes da vírgula. 0,00035 → mova a vírgula 4 casas para a direita → 3,5 e o expoente é −4. As opções B e D têm a mantissa fora do padrão (35 e 0,35)."},

{id:"M05",area:"mat",topico:"Probabilidade",nivel:2,
 enunciado:"No baralho de um jogo de cartas restam 40 cartas, das quais 12 são cartas de Energia. Comprando uma carta ao acaso, qual a probabilidade de sair uma Energia?",
 alts:["12%","20%","28%","30%","33%"],correta:3,
 porque:"P = casos favoráveis / casos possíveis = 12/40 = 0,30 = 30%. Cuidado com a pegadinha de responder 12% (confundir a quantidade com a porcentagem)."},

{id:"M06",area:"mat",topico:"Princípio multiplicativo",nivel:1,
 enunciado:"Para o primeiro dia de aula no IFSC, João separou 4 camisetas, 3 calças e 2 pares de tênis. De quantas maneiras diferentes ele pode se vestir?",
 alts:["9","12","18","24","36"],correta:3,
 porque:"Princípio multiplicativo: escolhas independentes se multiplicam. 4 × 3 × 2 = 24. Somar (4+3+2 = 9) é o erro clássico — some só quando as opções forem alternativas excludentes (‘ou’), multiplique quando forem etapas (‘e’)."},

{id:"M07",area:"mat",topico:"Pitágoras",nivel:1,
 enunciado:"Uma escada de 5 m está apoiada numa parede vertical, com o pé afastado 3 m da base da parede. A que altura da parede está o topo da escada?",
 alts:["2 m","3,5 m","4 m","4,5 m","8 m"],correta:2,
 porque:"A escada é a hipotenusa: 5² = 3² + h² → 25 − 9 = 16 → h = 4 m. O trio 3-4-5 é o mais cobrado de todos; decore também 5-12-13 e 6-8-10."},

{id:"M08",area:"mat",topico:"Relações métricas",nivel:3,
 enunciado:"Num triângulo retângulo os catetos medem 6 cm e 8 cm. Qual a medida da altura relativa à hipotenusa?",
 alts:["3,6 cm","4,0 cm","4,8 cm","5,0 cm","7,0 cm"],correta:2,
 porque:"Hipotenusa: √(6²+8²) = 10 cm. A relação métrica é a·h = b·c (hipotenusa × altura = produto dos catetos): 10·h = 48 → h = 4,8 cm. Outro caminho: a área vale 6·8/2 = 24 e também 10·h/2, logo h = 4,8."},

{id:"M09",area:"mat",topico:"Juros e porcentagem",nivel:2,
 enunciado:"Um capital de R$ 1.200,00 é aplicado a juros simples de 2% ao mês durante 5 meses. Qual o montante final?",
 alts:["R$ 1.224,00","R$ 1.260,00","R$ 1.320,00","R$ 1.332,00","R$ 1.440,00"],correta:2,
 porque:"Juros simples: J = C·i·t = 1200 × 0,02 × 5 = R$ 120,00. Montante = 1200 + 120 = R$ 1.320,00. Em juros simples a base nunca muda; se o enunciado disser ‘juros compostos’, aí sim cada mês incide sobre o saldo novo."},

{id:"M10",area:"mat",topico:"Escala e cartografia",nivel:2,
 enunciado:"Num mapa de escala 1:50.000, a distância entre dois pontos é de 4 cm. Qual a distância real entre eles?",
 alts:["200 m","500 m","2 km","5 km","20 km"],correta:2,
 porque:"1 cm no mapa = 50.000 cm reais = 500 m. Então 4 cm = 4 × 500 = 2.000 m = 2 km. O passo que derruba a maioria é esquecer de converter cm para m (divide por 100)."},

{id:"M11",area:"mat",topico:"Volume",nivel:2,
 enunciado:"Uma caixa d’água cilíndrica tem 2 m de diâmetro e 1,5 m de altura. Usando π ≈ 3, qual é sua capacidade aproximada em litros?",
 alts:["450 L","1.500 L","4.500 L","9.000 L","18.000 L"],correta:2,
 porque:"Raio = diâmetro/2 = 1 m. V = π·r²·h = 3 × 1² × 1,5 = 4,5 m³. Como 1 m³ = 1.000 L, temos 4.500 L. Duas pegadinhas numa questão só: usar o diâmetro como raio, e esquecer que 1 m³ = 1.000 L."},

{id:"M12",area:"mat",topico:"Expressões numéricas",nivel:2,
 enunciado:"Qual o valor da expressão 2³ + √36 − 5 × 2 ?",
 alts:["−2","0","4","8","14"],correta:2,
 porque:"Ordem das operações: primeiro potências e raízes (2³ = 8, √36 = 6), depois multiplicação (5×2 = 10), por último soma e subtração: 8 + 6 − 10 = 4."},

{id:"M13",area:"mat",topico:"Estatística",nivel:2,
 enunciado:"Nas quatro primeiras provas do ano, um estudante tirou 6,0 · 7,5 · 8,0 · 6,5. Quanto ele precisa tirar na quinta prova para que a média das cinco seja exatamente 7,0?",
 alts:["7,0","7,5","8,0","8,5","9,0"],correta:0,
 porque:"A soma precisa ser 5 × 7,0 = 35,0. Ele já tem 6,0+7,5+8,0+6,5 = 28,0. Falta 35,0 − 28,0 = 7,0. Método geral: soma desejada menos soma atual."},

{id:"M14",area:"mat",topico:"Desigualdades",nivel:2,
 enunciado:"O consumo mensal de energia de uma casa deve ficar entre 120 kWh e 180 kWh, incluindo os extremos. Qual intervalo representa corretamente essa condição?",
 alts:["]120, 180[","[120, 180]","[120, 180[","x < 120 ou x > 180","]120, 180]"],correta:1,
 porque:"“Incluindo os extremos” = intervalo fechado nos dois lados = [120, 180], ou 120 ≤ x ≤ 180. Colchete virado para dentro (ou parêntese) exclui o extremo; virado para fora inclui."},

{id:"M15",area:"mat",topico:"Leitura de gráfico",nivel:2,
 enunciado:"Um gráfico de setores mostra o destino do orçamento familiar: Moradia 30%, Alimentação 25%, Transporte 15%, Educação 10%, Outros 20%. Se a renda é de R$ 3.200,00, quanto vai para Transporte e Educação juntos?",
 alts:["R$ 320,00","R$ 480,00","R$ 640,00","R$ 800,00","R$ 960,00"],correta:3,
 porque:"Some as porcentagens primeiro: 15% + 10% = 25%. Depois 25% de 3.200 = 3.200/4 = R$ 800,00. Somar as fatias antes de calcular economiza uma conta inteira e reduz erro."},

/* ===================== CIÊNCIAS ===================== */
{id:"C01",area:"cie",topico:"Eletricidade",nivel:2,
 enunciado:"Um chuveiro elétrico de 5.500 W é usado 20 minutos por dia. Considerando 30 dias e a tarifa de R$ 0,80 por kWh, qual é o custo mensal aproximado?",
 alts:["R$ 22,00","R$ 33,00","R$ 44,00","R$ 55,00","R$ 88,00"],correta:2,
 porque:"Potência em kW: 5.500 W = 5,5 kW. Tempo: 20 min = 1/3 h, em 30 dias = 10 h. Energia = 5,5 × 10 = 55 kWh. Custo = 55 × 0,80 = R$ 44,00. A fórmula que resolve toda questão de conta de luz: E(kWh) = P(kW) × t(h)."},

{id:"C02",area:"cie",topico:"Eletricidade",nivel:2,
 enunciado:"Em um circuito, duas lâmpadas idênticas estão ligadas em SÉRIE a uma bateria. Se uma delas queimar, o que acontece com a outra?",
 alts:["Continua acesa com o mesmo brilho.","Continua acesa, porém mais forte.","Apaga, porque o circuito é interrompido.","Continua acesa, porém mais fraca.","Explode, por excesso de corrente."],correta:2,
 porque:"Em série há um único caminho para a corrente. Queimando uma lâmpada, o caminho abre e a corrente cessa em todo o circuito — a outra apaga. Em PARALELO cada lâmpada tem seu próprio caminho, então a outra continuaria acesa normalmente. Essa distinção série/paralelo é cobrada quase todo ano."},

{id:"C03",area:"cie",topico:"Propagação de calor",nivel:2,
 enunciado:"Uma caixa térmica mantém o lanche quente por horas. O principal princípio físico envolvido é:",
 alts:["A caixa gera calor continuamente.","As paredes isolantes dificultam a condução e a convecção, reduzindo a troca de calor com o ambiente.","A caixa transforma energia térmica em energia química.","O ar dentro da caixa é um bom condutor térmico.","A caixa impede totalmente a irradiação e o calor nunca sai."],correta:1,
 porque:"Isolante térmico não cria nem retém calor magicamente: ele apenas dificulta a transferência, tornando-a lenta. Por isso a caixa mantém tanto o quente quanto o frio. A alternativa E erra no ‘totalmente’ e ‘nunca’ — com tempo suficiente o equilíbrio térmico sempre chega."},

{id:"C04",area:"cie",topico:"Propagação de calor",nivel:1,
 enunciado:"Ao aquecer água numa panela no fogão, a água do fundo sobe e a de cima desce, formando um ciclo. Esse tipo de propagação de calor chama-se:",
 alts:["Condução","Convecção","Irradiação","Sublimação","Evaporação"],correta:1,
 porque:"Convecção = transporte de calor pelo MOVIMENTO do próprio fluido (líquido ou gás), porque o mais quente fica menos denso e sobe. Condução é por contato sem transporte de matéria (colher de metal esquentando); irradiação é por ondas eletromagnéticas e é a única que funciona no vácuo (o calor do Sol)."},

{id:"C05",area:"cie",topico:"Transformação de energia",nivel:2,
 enunciado:"Em uma usina hidrelétrica, qual é a sequência CORRETA de transformações de energia?",
 alts:["Química → térmica → elétrica","Potencial gravitacional → cinética → elétrica","Cinética → potencial → química","Elétrica → mecânica → térmica","Nuclear → térmica → elétrica"],correta:1,
 porque:"A água represada no alto tem energia potencial gravitacional; ao cair ela vira energia cinética; a turbina e o gerador convertem essa energia cinética em elétrica. A opção A descreve uma termelétrica a combustível e a E, uma usina nuclear."},

{id:"C06",area:"cie",topico:"Fontes de energia",nivel:2,
 enunciado:"Analise as afirmações sobre fontes de energia:\nI. A energia eólica é renovável e não emite gases de efeito estufa durante a geração.\nII. O carvão mineral é uma fonte renovável, pois se forma continuamente no solo.\nIII. A matriz elétrica brasileira é predominantemente hidrelétrica.\nEstá(ão) correta(s):",
 alts:["Apenas I","Apenas I e III","Apenas II e III","Apenas III","I, II e III"],correta:1,
 porque:"I é correta. II é falsa: carvão mineral leva milhões de anos para se formar, é fóssil e não renovável. III é correta: apesar do crescimento de eólica e solar, a hidrelétrica ainda é a maior parcela da matriz ELÉTRICA brasileira. Atenção: matriz elétrica (só eletricidade) ≠ matriz energética (inclui combustível de transporte)."},

{id:"C07",area:"cie",topico:"Estrutura atômica",nivel:2,
 enunciado:"Um átomo neutro possui número atômico Z = 17 e número de massa A = 35. Quantos prótons, nêutrons e elétrons ele possui, respectivamente?",
 alts:["17, 35 e 17","17, 18 e 17","35, 17 e 35","18, 17 e 18","17, 17 e 18"],correta:1,
 porque:"Z = número de prótons = 17. A = prótons + nêutrons, então nêutrons = A − Z = 35 − 17 = 18. Átomo NEUTRO tem elétrons = prótons = 17. Se o enunciado dissesse íon, aí sim mudaria: cátion perdeu elétron, ânion ganhou."},

{id:"C08",area:"cie",topico:"Estrutura atômica",nivel:2,
 enunciado:"O íon Ca²⁺ é formado a partir do átomo neutro de cálcio (Z = 20). Sobre esse íon, é correto afirmar que ele:",
 alts:["ganhou 2 prótons e tem 22 prótons.","perdeu 2 elétrons e tem 18 elétrons.","ganhou 2 elétrons e tem 22 elétrons.","perdeu 2 prótons e tem 18 prótons.","perdeu 2 nêutrons."],correta:1,
 porque:"Carga positiva significa falta de elétrons (o número de prótons NUNCA muda numa reação química — se mudasse, viraria outro elemento). Ca²⁺ perdeu 2 elétrons: 20 − 2 = 18 elétrons, com os mesmos 20 prótons. Regra: sinal + = cátion = perdeu elétron; sinal − = ânion = ganhou elétron."},

{id:"C09",area:"cie",topico:"Misturas e separação",nivel:2,
 enunciado:"Para separar uma mistura de areia e água, e depois obter a água pura sem sal dissolvido, os processos mais adequados são, nessa ordem:",
 alts:["Decantação e filtração","Filtração e destilação","Catação e peneiração","Destilação e centrifugação","Levigação e imantação"],correta:1,
 porque:"Areia é insolúvel e fica em suspensão → filtração (ou decantação) a separa. Já o sal está DISSOLVIDO, formando mistura homogênea: nenhum filtro segura, é preciso destilação (evaporar a água e condensá-la de volta). Regra: heterogênea → métodos mecânicos; homogênea → mudança de estado."},

{id:"C10",area:"cie",topico:"Transformações químicas",nivel:2,
 enunciado:"Qual das transformações abaixo é uma transformação QUÍMICA?",
 alts:["Derretimento de um cubo de gelo","Evaporação da água de uma poça","Enferrujamento de um portão de ferro","Dissolução de açúcar na água","Quebra de um copo de vidro"],correta:2,
 porque:"Transformação química cria substâncias NOVAS, com propriedades diferentes. A ferrugem (óxido de ferro) não é ferro: é substância nova → química. As demais são físicas, pois a substância continua a mesma, só muda de estado, de forma ou de dispersão. Indícios de reação química: mudança de cor permanente, liberação de gás, formação de precipitado, variação de calor."},

{id:"C11",area:"cie",topico:"Propriedades da matéria",nivel:1,
 enunciado:"Densidade é uma propriedade específica da matéria. Um bloco tem massa de 270 g e volume de 100 cm³. Sabendo que a densidade da água é 1 g/cm³, esse bloco:",
 alts:["flutua na água, pois sua densidade é 0,27 g/cm³.","afunda na água, pois sua densidade é 2,7 g/cm³.","flutua na água, pois sua densidade é 2,7 g/cm³.","afunda na água, pois sua densidade é 0,27 g/cm³.","fica suspenso no meio da água."],correta:1,
 porque:"d = m/V = 270/100 = 2,7 g/cm³. Como 2,7 > 1 (densidade da água), o bloco afunda. Regra: mais denso que o líquido afunda; menos denso flutua; igual fica suspenso. 2,7 g/cm³ é, por sinal, a densidade do alumínio."},

{id:"C12",area:"cie",topico:"Célula",nivel:2,
 enunciado:"Sobre as diferenças entre células procarióticas e eucarióticas, é correto afirmar que:",
 alts:["Apenas as procarióticas possuem material genético.","As procarióticas não possuem núcleo delimitado por membrana; seu material genético fica disperso no citoplasma.","As eucarióticas não possuem membrana plasmática.","Bactérias são eucarióticas e fungos são procarióticos.","Apenas as eucarióticas possuem ribossomos."],correta:1,
 porque:"‘Pro-carionte’ = antes do núcleo. Bactérias e arqueas são procariontes: têm DNA, mas solto no citoplasma (região chamada nucleoide), sem carioteca. Eucariontes (protistas, fungos, plantas, animais) têm núcleo delimitado e organelas membranosas. Ambos têm membrana plasmática, citoplasma, DNA e ribossomos — ribossomo não é organela membranosa e existe nos dois."},

{id:"C13",area:"cie",topico:"Fotossíntese",nivel:2,
 enunciado:"A equação simplificada da fotossíntese é: 6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂. Com base nela, é correto afirmar que:",
 alts:["a planta consome oxigênio e libera gás carbônico.","a energia luminosa é convertida em energia química armazenada na glicose.","a fotossíntese ocorre nas mitocôndrias.","o processo não depende de água.","a glicose produzida é liberada para a atmosfera."],correta:1,
 porque:"A fotossíntese é essencialmente uma conversão de energia luminosa em energia química (ligações da glicose), realizada nos cloroplastos. A alternativa A inverte com a respiração celular. C confunde cloroplasto (fotossíntese) com mitocôndria (respiração). D contraria a própria equação, onde H₂O é reagente."},

{id:"C14",area:"cie",topico:"Respiração celular",nivel:2,
 enunciado:"Considere o esquema: glicose + oxigênio → gás carbônico + água + ATP. Sobre esse processo, assinale a afirmativa CORRETA:",
 alts:["Ocorre apenas em células vegetais.","É a respiração celular aeróbica, e ocorre principalmente nas mitocôndrias.","Produz oxigênio como produto final.","Ocorre somente durante o sono.","Dispensa a presença de oxigênio."],correta:1,
 porque:"Esse é o resumo da respiração celular aeróbica, cuja maior parte ocorre nas mitocôndrias, produzindo ATP. Ela acontece em praticamente todos os seres vivos, inclusive nas plantas — que fazem fotossíntese DE DIA e respiram o tempo todo, dia e noite. O oxigênio aqui é reagente, não produto."},

{id:"C15",area:"cie",topico:"Vírus e imunidade",nivel:2,
 enunciado:"Por que uma vacina gera imunidade duradoura, enquanto um medicamento antiviral não?",
 alts:["A vacina mata todos os vírus do ambiente.","A vacina apresenta antígenos ao sistema imune, que produz anticorpos e células de memória.","A vacina é um antibiótico de longa duração.","A vacina altera o DNA de todas as células do corpo permanentemente.","O medicamento antiviral também gera memória imunológica."],correta:1,
 porque:"A vacina é imunização ATIVA: ela treina o sistema imune com antígenos (vírus inativado, atenuado, proteína ou mRNA que codifica a proteína), gerando anticorpos e sobretudo LINFÓCITOS DE MEMÓRIA — por isso a proteção dura. Um antiviral só combate a infecção presente e não deixa memória. Antibiótico, por sua vez, não age em vírus: só em bactérias."},

{id:"C16",area:"cie",topico:"ISTs",nivel:2,
 enunciado:"Sobre métodos contraceptivos e infecções sexualmente transmissíveis (ISTs), é correto afirmar:",
 alts:["A pílula anticoncepcional protege contra ISTs.","O preservativo (camisinha) é o único método que previne gravidez e ISTs simultaneamente.","O DIU protege contra HIV.","ISTs só são transmitidas por relação sexual com penetração.","A vacina contra HPV substitui o uso do preservativo."],correta:1,
 porque:"Métodos hormonais (pílula, injeção, implante) e o DIU atuam apenas na contracepção — não criam barreira contra microrganismos. Só a barreira física (camisinha masculina ou feminina) cumpre as duas funções. A vacina contra HPV protege contra alguns tipos do vírus HPV, mas não contra HIV, sífilis, gonorreia etc."},

{id:"C17",area:"cie",topico:"Genética",nivel:3,
 enunciado:"Em ervilhas, a cor amarela (V) é dominante sobre a verde (v). Cruzando duas plantas heterozigotas (Vv × Vv), qual a proporção esperada de descendentes com semente VERDE?",
 alts:["0%","25%","50%","75%","100%"],correta:1,
 porque:"Quadro de Punnett de Vv × Vv: VV, Vv, vV, vv → 3 amarelas : 1 verde. A verde é o fenótipo recessivo, que só aparece em homozigose (vv) = 1 em 4 = 25%. Decore essa proporção 3:1 — é a 1ª Lei de Mendel e é a forma mais cobrada dela."},

{id:"C18",area:"cie",topico:"Evolução",nivel:2,
 enunciado:"Sobre as teorias evolutivas, assinale a alternativa CORRETA:",
 alts:["Para Lamarck, as variações surgem ao acaso e o ambiente seleciona as vantajosas.","Para Darwin, o uso e desuso dos órgãos gera características que são transmitidas aos descendentes.","Para Darwin, existe variabilidade na população e o ambiente seleciona os indivíduos mais adaptados, que deixam mais descendentes.","A Teoria Sintética da Evolução rejeitou completamente as ideias de Darwin.","A evolução tem um objetivo final definido: produzir espécies perfeitas."],correta:2,
 porque:"As alternativas A e B trocaram os autores de lugar — é a pegadinha padrão. Lamarck: uso e desuso + herança dos caracteres adquiridos (refutada). Darwin: variabilidade preexistente + seleção natural. A Teoria Sintética (neodarwinismo) SOMOU genética e mutação ao darwinismo, não o rejeitou. E evolução não tem finalidade nem direção — é adaptação ao ambiente atual."},

{id:"C19",area:"cie",topico:"Astronomia",nivel:2,
 enunciado:"Um astronauta de 80 kg vai à Lua. Sobre sua massa e seu peso, é correto afirmar:",
 alts:["A massa diminui e o peso permanece igual.","A massa permanece 80 kg e o peso diminui, pois a gravidade lunar é cerca de 1/6 da terrestre.","Massa e peso diminuem na mesma proporção.","Massa e peso permanecem iguais.","A massa aumenta e o peso diminui."],correta:1,
 porque:"Massa é a quantidade de matéria — é a mesma em qualquer lugar do universo, medida em kg. Peso é uma FORÇA (P = m·g), medida em newtons, e depende da gravidade local. Na Lua g ≈ 1,6 m/s² (cerca de 1/6 dos 9,8 m/s² da Terra), então o peso cai para 1/6 e a massa continua 80 kg. Essa distinção cai com altíssima frequência."},

{id:"C20",area:"cie",topico:"Astronomia",nivel:2,
 enunciado:"Sobre a Lua, analise:\nI. A Lua tem luz própria.\nII. Vemos sempre a mesma face da Lua porque seu período de rotação é igual ao de translação ao redor da Terra.\nIII. As fases da Lua ocorrem por causa da sombra da Terra projetada sobre ela.\nEstá(ão) correta(s):",
 alts:["Apenas I","Apenas II","Apenas III","Apenas II e III","I, II e III"],correta:1,
 porque:"I é falsa: a Lua apenas REFLETE a luz do Sol. II é verdadeira — chama-se rotação sincronizada, e é por isso que existe um ‘lado oculto’. III é falsa e é o erro mais comum do país: as fases resultam da POSIÇÃO relativa Sol-Terra-Lua, que faz enxergarmos porções diferentes da metade iluminada. Sombra da Terra sobre a Lua é ECLIPSE lunar, que é raro; as fases acontecem todo mês."},

{id:"C21",area:"cie",topico:"Astronomia",nivel:1,
 enunciado:"A sucessão dos dias e das noites e a sucessão das estações do ano são causadas, respectivamente, por:",
 alts:["Translação da Terra e rotação da Terra.","Rotação da Terra e translação da Terra combinada à inclinação de seu eixo.","Rotação da Lua e translação da Lua.","Movimento do Sol ao redor da Terra e fases da Lua.","Inclinação do eixo e proximidade do Sol apenas."],correta:1,
 porque:"Rotação (~24 h em torno do próprio eixo) → dia e noite. Translação (~365 dias ao redor do Sol) + inclinação de 23,5° do eixo → estações. Note: NÃO é a distância ao Sol que causa as estações — o Brasil está no verão justamente quando a Terra está mais longe do Sol."},

{id:"C22",area:"cie",topico:"Ecologia",nivel:2,
 enunciado:"Sobre o efeito estufa, é correto afirmar que:",
 alts:["É um fenômeno exclusivamente artificial, causado pelo ser humano.","É um fenômeno natural essencial à vida, mas sua intensificação por gases de origem humana provoca o aquecimento global.","É causado pelo buraco na camada de ozônio.","Ocorre porque o CO₂ destrói a camada de ozônio.","Não tem relação com a queima de combustíveis fósseis."],correta:1,
 porque:"Sem efeito estufa natural a temperatura média da Terra seria cerca de −18 °C. O problema é a INTENSIFICAÇÃO por CO₂, metano e óxido nitroso de origem antrópica. E cuidado com a confusão mais cobrada da prova: efeito estufa (gases retêm calor) e buraco na camada de ozônio (CFCs destroem O₃ e deixam passar radiação UV) são problemas DIFERENTES, com causas diferentes."},

{id:"C23",area:"cie",topico:"Ecologia",nivel:2,
 enunciado:"Numa cadeia alimentar: capim → gafanhoto → sapo → cobra → gavião. O sapo ocupa a posição de:",
 alts:["Produtor","Consumidor primário","Consumidor secundário","Consumidor terciário","Decompositor"],correta:2,
 porque:"Produtor = capim (faz fotossíntese). Consumidor primário = gafanhoto (come o produtor). Consumidor secundário = sapo. Terciário = cobra. Quaternário = gavião. Conte sempre a partir do produtor, que é o nível 0 dessa contagem."},

{id:"C24",area:"cie",topico:"Mecânica",nivel:2,
 enunciado:"Uma alavanca é usada para levantar uma pedra. Aplicando a força a 1,2 m do apoio para erguer uma pedra que está a 0,3 m do apoio do outro lado, a força aplicada em relação ao peso da pedra é:",
 alts:["4 vezes maior","4 vezes menor","a mesma","2 vezes maior","1,5 vez menor"],correta:1,
 porque:"Equilíbrio de alavanca: F₁ × d₁ = F₂ × d₂. Com d da força = 1,2 m e d da carga = 0,3 m, a razão é 4. Quanto maior o braço da força, menor a força necessária: F = P × 0,3/1,2 = P/4, ou seja, 4 vezes menor. Esse é o princípio de todas as máquinas simples — elas reduzem a força, mas nunca o trabalho total."},

{id:"C25",area:"cie",topico:"Mecânica",nivel:2,
 enunciado:"Um ciclista percorre 12 km em 40 minutos. Sua velocidade média é de:",
 alts:["12 km/h","15 km/h","18 km/h","20 km/h","30 km/h"],correta:2,
 porque:"v = Δs/Δt. 40 min = 40/60 h = 2/3 h. v = 12 ÷ (2/3) = 12 × 3/2 = 18 km/h. O erro clássico é dividir 12 por 40 e responder 0,3. Sempre converta o tempo para a unidade que combina com a resposta pedida."},

{id:"C26",area:"cie",topico:"Corpo humano",nivel:2,
 enunciado:"Sobre o sistema circulatório humano, é correto afirmar que:",
 alts:["As artérias sempre transportam sangue rico em oxigênio.","As veias sempre transportam sangue rico em gás carbônico.","Artérias levam sangue do coração para o corpo, e veias trazem sangue de volta ao coração.","O coração humano possui apenas duas cavidades.","O sangue passa uma única vez pelo coração a cada volta completa."],correta:2,
 porque:"A definição correta é pelo SENTIDO do fluxo, não pelo tipo de sangue. As exceções derrubam A e B: a artéria pulmonar leva sangue venoso (pobre em O₂) do coração aos pulmões, e as veias pulmonares trazem sangue arterial (rico em O₂) de volta. O coração humano tem 4 cavidades e a circulação é dupla — o sangue passa duas vezes pelo coração a cada circuito completo."},

{id:"C27",area:"cie",topico:"Estados físicos",nivel:1,
 enunciado:"A passagem direta do estado sólido para o gasoso, sem passar pelo líquido, chama-se:",
 alts:["Fusão","Vaporização","Condensação","Sublimação","Solidificação"],correta:3,
 porque:"Sublimação: sólido → gasoso direto (naftalina, gelo-seco). O caminho inverso (gasoso → sólido) é chamado de ressublimação ou sublimação inversa. Os demais: fusão = sólido→líquido; vaporização = líquido→gasoso; condensação = gasoso→líquido; solidificação = líquido→sólido."},

{id:"C28",area:"cie",topico:"Equilíbrio térmico",nivel:2,
 enunciado:"Ao segurar uma barra de metal e um pedaço de madeira, ambos à mesma temperatura ambiente de 20 °C, o metal parece mais frio. Isso acontece porque:",
 alts:["O metal realmente está a uma temperatura menor.","O metal é melhor condutor térmico e retira calor da mão mais rapidamente.","A madeira gera calor.","O metal possui menos massa.","A madeira está acima da temperatura ambiente."],correta:1,
 porque:"Os dois estão a 20 °C — o termômetro confirmaria. O que a pele sente não é temperatura, e sim a TAXA com que o calor sai dela. O metal, bom condutor, puxa calor rápido e a sensação é de frio; a madeira, isolante, puxa devagar. É o mesmo motivo pelo qual o piso frio parece mais gelado que o tapete ao lado."},

/* ===================== GEOGRAFIA E HISTÓRIA ===================== */
{id:"G01",area:"gh",topico:"Escravidão e resistência",nivel:2,
 enunciado:"Sobre a resistência escrava no Brasil, é correto afirmar que:",
 alts:["Limitou-se às fugas para quilombos, sendo rara qualquer outra forma de oposição.","Foi praticamente inexistente, pois os escravizados aceitavam passivamente sua condição.","Manifestou-se de múltiplas formas, como quilombos, revoltas armadas, fugas, sabotagem do trabalho, preservação de práticas culturais e religiosas e ações judiciais por alforria.","Só passou a existir após a Lei Áurea, em 1888.","Foi conduzida exclusivamente por abolicionistas brancos das elites urbanas."],correta:2,
 porque:"Este é o tema mais recorrente da prova — cai todo ano, às vezes duas vezes. A historiografia atual enfatiza o PROTAGONISMO negro e a pluralidade das formas de resistência: dos quilombos (Palmares, Zumbi) às revoltas urbanas (Revolta dos Malês, 1835, na Bahia), passando pela resistência cultural (capoeira, candomblé, jongo), pela sabotagem cotidiana e pelas ações na justiça pedindo alforria. Qualquer alternativa que reduza, negue ou tire o protagonismo das pessoas escravizadas está errada."},

{id:"G02",area:"gh",topico:"Escravidão e resistência",nivel:2,
 enunciado:"O Quilombo dos Palmares, na região da Serra da Barriga (atual Alagoas), é correto afirmar que:",
 alts:["Foi um pequeno acampamento que durou poucos meses.","Foi a maior e mais duradoura comunidade de resistência de escravizados das Américas, existindo por quase um século e abrigando milhares de pessoas.","Foi fundado pela Coroa Portuguesa como colônia agrícola.","Reunia apenas pessoas nascidas na África.","Foi destruído pacificamente por meio de acordo."],correta:1,
 porque:"Palmares resistiu de cerca de 1600 a 1694 — quase cem anos — chegando a abrigar milhares de habitantes, entre africanos, afrodescendentes nascidos no Brasil, indígenas e até brancos pobres fugidos. Foi destruído militarmente pela expedição do bandeirante Domingos Jorge Velho. Zumbi, seu último líder, foi morto em 20 de novembro de 1695 — data hoje celebrada como Dia da Consciência Negra."},

{id:"G03",area:"gh",topico:"Abolicionismo",nivel:2,
 enunciado:"Coloque em ordem cronológica as leis do processo de abolição no Brasil:\n1. Lei Áurea · 2. Lei do Ventre Livre · 3. Lei Eusébio de Queirós · 4. Lei dos Sexagenários",
 alts:["1, 2, 3, 4","3, 2, 4, 1","2, 3, 1, 4","4, 3, 2, 1","3, 4, 2, 1"],correta:1,
 porque:"Eusébio de Queirós (1850) proibiu o tráfico transatlântico; Ventre Livre (1871) libertou os nascidos a partir dali; Sexagenários (1885) libertou os maiores de 60 anos; Lei Áurea (1888) aboliu a escravidão. Perceba o padrão: foram leis graduais e limitadas, feitas para adiar a abolição sob pressão externa (Inglaterra) e interna (abolicionistas e a própria resistência negra), e nenhuma delas previu qualquer reparação ou acesso à terra — raiz direta da desigualdade racial brasileira."},

{id:"G04",area:"gh",topico:"Santa Catarina",nivel:3,
 enunciado:"Sobre a Guerra do Contestado (1912–1916), assinale a alternativa CORRETA:",
 alts:["Foi um conflito entre Brasil e Argentina pela posse do oeste catarinense.","Foi um conflito no território disputado entre Santa Catarina e Paraná, envolvendo camponeses expulsos de suas terras pela construção da ferrovia São Paulo–Rio Grande e pela ação da Southern Brazil Lumber, com forte componente messiânico ligado aos monges João Maria e José Maria.","Foi uma revolta urbana ocorrida em Florianópolis contra o aumento de impostos.","Foi um movimento pacífico de reforma agrária conduzido pelo governo estadual.","Foi uma guerra religiosa entre imigrantes alemães e italianos."],correta:1,
 porque:"O tema catarinense mais cobrado. Elementos essenciais: (a) disputa de limites SC × PR; (b) a ferrovia São Paulo–Rio Grande e a concessão de terras à Brazil Railway, que expulsou posseiros; (c) a exploração madeireira da Southern Brazil Lumber; (d) o messianismo dos monges João Maria e José Maria e a organização em ‘cidades santas’ (redutos); (e) repressão militar violenta, com milhares de mortos. O limite entre os estados só foi fechado em 1916."},

{id:"G05",area:"gh",topico:"Santa Catarina",nivel:2,
 enunciado:"Sobre a formação populacional de Santa Catarina, é correto afirmar que:",
 alts:["O território era desabitado antes da chegada dos europeus.","Antes da colonização europeia o território já era habitado por povos originários, como os Xokleng, Kaingang e Guarani, e o litoral recebeu forte colonização açoriana no século XVIII, enquanto os vales e o oeste receberam imigrantes alemães, italianos e eslavos nos séculos XIX e XX.","A colonização foi exclusivamente alemã.","Não houve presença de africanos escravizados em Santa Catarina.","A imigração açoriana ocorreu no século XX, no oeste do estado."],correta:1,
 porque:"Estrutura para memorizar: povos originários (Xokleng, Kaingang, Guarani, e os sambaquianos no litoral) → açorianos no litoral a partir de 1748 (Florianópolis, Laguna, São José) → alemães no Vale do Itajaí a partir de 1829/1850 (Blumenau, Joinville) → italianos no sul e nos vales → poloneses, ucranianos e outros eslavos, além da ocupação do oeste por descendentes de gaúchos no século XX. E houve, sim, escravidão negra em SC, sobretudo na armação baleeira, na agricultura litorânea e no serviço urbano — negá-la é a pegadinha da alternativa D."},

{id:"G06",area:"gh",topico:"Santa Catarina",nivel:2,
 enunciado:"Associe corretamente as regiões catarinenses às suas principais atividades econômicas:",
 alts:["Vale do Itajaí: extração de carvão · Sul: têxtil · Oeste: turismo","Oeste: agroindústria de carnes (aves e suínos) · Vale do Itajaí: têxtil e vestuário · Sul: carvão e cerâmica · Norte (Joinville): metalmecânica","Norte: pesca artesanal · Oeste: siderurgia · Litoral: mineração","Todas as regiões têm a mesma base econômica agrícola.","Serra: indústria naval · Sul: agroindústria de aves"],correta:1,
 porque:"Mapa econômico de SC que resolve várias questões: OESTE (Chapecó, Concórdia) = agroindústria de aves e suínos, BRF/Aurora; VALE DO ITAJAÍ (Blumenau, Brusque) = têxtil e vestuário; NORTE (Joinville, Jaraguá) = metalmecânica e eletroeletrônica (WEG, Tupy); SUL (Criciúma, Tubarão) = carvão, cerâmica e plásticos, com passivo ambiental grave de drenagem ácida; SERRA (Lages, São Joaquim) = madeira, pecuária, maçã e turismo de inverno; LITORAL/GRANDE FLORIANÓPOLIS = serviços, turismo, tecnologia e maricultura (o maior produtor nacional de ostras e mexilhões)."},

{id:"G07",area:"gh",topico:"Nazifascismo",nivel:2,
 enunciado:"Sobre a ascensão do nazismo na Alemanha, é correto afirmar que:",
 alts:["Hitler chegou ao poder exclusivamente por um golpe militar armado em 1923.","Hitler chegou ao poder por vias legais, após o Partido Nazista obter votação expressiva, em um contexto de crise econômica, humilhação nacional pelo Tratado de Versalhes e divisão das forças democráticas e de esquerda.","O nazismo defendia abertamente a democracia parlamentar.","O nazismo não tinha componente racista.","A República de Weimar era economicamente estável quando Hitler assumiu."],correta:1,
 porque:"O ponto que a prova gosta de explorar é o paradoxo: a democracia de Weimar foi derrotada ‘por dentro’, pelas próprias regras. O Putsch da Cervejaria (1923) FRACASSOU e levou Hitler à prisão; foi então que ele mudou de estratégia para a via eleitoral. Fatores: humilhação de Versalhes, hiperinflação de 1923, Crise de 1929 e desemprego em massa, anticomunismo, antissemitismo e a divisão entre socialdemocratas e comunistas. Hitler foi nomeado chanceler em janeiro de 1933 e converteu o cargo em ditadura em seguida."},

{id:"G08",area:"gh",topico:"Era Vargas",nivel:2,
 enunciado:"Sobre a Era Vargas (1930–1945), é correto afirmar que:",
 alts:["Foi um período de plena liberdade de imprensa e eleições diretas regulares.","Combinou modernização econômica e criação de direitos trabalhistas (CLT, 1943) com forte centralização política, censura e repressão, especialmente durante o Estado Novo (1937–1945).","Vargas foi eleito presidente em 1930 por voto direto.","O Estado Novo foi um regime parlamentarista.","Não houve industrialização no período."],correta:1,
 porque:"A chave é a dupla face: de um lado CLT, salário mínimo, carteira de trabalho, voto feminino (1932), CSN e Vale do Rio Doce; de outro, o Estado Novo (golpe de 1937) com Congresso fechado, DIP fazendo censura e propaganda, e perseguição a opositores. Vargas chegou ao poder pela Revolução de 1930, não por eleição. Esse padrão ‘direitos sociais concedidos de cima + autoritarismo’ é o que a prova chama de populismo/trabalhismo."},

{id:"G09",area:"gh",topico:"Ditadura Militar",nivel:2,
 enunciado:"O Ato Institucional nº 5 (AI-5), de dezembro de 1968, durante a Ditadura Militar brasileira:",
 alts:["Restabeleceu as eleições diretas para presidente.","Foi o ato mais duro do regime: fechou o Congresso, suspendeu o habeas corpus para crimes políticos, permitiu cassações e instituiu a censura prévia, inaugurando os ‘anos de chumbo’.","Concedeu anistia aos presos políticos.","Criou o sistema pluripartidário.","Encerrou a ditadura militar."],correta:1,
 porque:"Linha do tempo mínima: 1964 golpe; 1968 AI-5 e endurecimento; 1969–74 ‘anos de chumbo’ com tortura sistemática e ‘milagre econômico’; 1974 início da abertura ‘lenta, gradual e segura’ de Geisel; 1979 Lei da Anistia e volta do pluripartidarismo; 1984 Diretas Já (emenda rejeitada); 1985 fim do regime; 1988 Constituição Cidadã; 1989 primeira eleição direta para presidente desde 1960. Confundir AI-5 com anistia é o erro mais comum."},

{id:"G10",area:"gh",topico:"Guerra Fria",nivel:2,
 enunciado:"Sobre a Guerra Fria (1947–1991), é correto afirmar que:",
 alts:["Foi um confronto militar direto e permanente entre EUA e URSS em seus próprios territórios.","Foi uma disputa geopolítica, econômica e ideológica entre o bloco capitalista liderado pelos EUA e o bloco socialista liderado pela URSS, marcada por corrida armamentista e espacial e por conflitos indiretos, como as guerras da Coreia, do Vietnã e do Afeganistão.","Terminou com a vitória militar da URSS.","Não teve nenhum reflexo na América Latina.","Envolvia apenas questões culturais, sem dimensão econômica."],correta:1,
 porque:"O nome ‘fria’ vem exatamente do fato de que as duas superpotências nunca se enfrentaram diretamente — o equilíbrio nuclear (destruição mútua assegurada) tornou isso inviável. A disputa se deu por procuração, em terceiros países. Marcos: Doutrina Truman e Plano Marshall (1947), OTAN (1949) × Pacto de Varsóvia (1955), Muro de Berlim (1961–1989), Crise dos Mísseis de Cuba (1962), corrida espacial, fim da URSS em 1991. Na América Latina, os reflexos foram diretos: apoio dos EUA a ditaduras militares, inclusive à de 1964 no Brasil."},

{id:"G11",area:"gh",topico:"Globalização",nivel:2,
 enunciado:"Sobre a globalização e os blocos econômicos, é correto afirmar que:",
 alts:["A globalização distribuiu a riqueza de forma igualitária entre todos os países.","A globalização intensificou os fluxos de mercadorias, capitais e informações, mas de forma desigual, aprofundando assimetrias entre países centrais e periféricos e entre regiões dentro de um mesmo país.","Os blocos econômicos eliminaram completamente as fronteiras nacionais.","O Mercosul é um bloco formado por países da Ásia.","A globalização reduziu a importância das empresas transnacionais."],correta:1,
 porque:"A tese central da geografia contemporânea (Milton Santos) é que a globalização é seletiva: ela conecta pontos rentáveis do território e ignora o resto, produzindo o que ele chamou de ‘globalização perversa’. Blocos principais: Mercosul (Brasil, Argentina, Uruguai, Paraguai + associados), União Europeia (integração mais profunda, com moeda única), USMCA (ex-Nafta), APEC. Integração econômica não apaga fronteira política — a UE é a que mais avançou nisso e ainda assim mantém Estados soberanos."},

{id:"G12",area:"gh",topico:"Mundo do trabalho",nivel:2,
 enunciado:"Sobre os impactos da automação e da inteligência artificial no mundo do trabalho, analise:\nI. Novas tecnologias eliminam alguns postos de trabalho e criam outros, exigindo requalificação.\nII. Os efeitos são iguais para todas as classes sociais e níveis de escolaridade.\nIII. A informalidade e a uberização são fenômenos associados à reestruturação recente do trabalho.\nEstá(ão) correta(s):",
 alts:["Apenas I","Apenas I e III","Apenas II","Apenas III","I, II e III"],correta:1,
 porque:"I e III são corretas. II é falsa: os efeitos são profundamente desiguais — trabalhadores de baixa escolaridade em tarefas repetitivas são os mais expostos, e a requalificação depende de acesso à educação, que também é desigual. A ‘uberização’ (trabalho por plataforma, sem vínculo formal nem direitos) é o exemplo brasileiro mais citado. Numa questão I/II/III, alternativa com ‘todos’, ‘sempre’, ‘igualmente’ quase sempre é a falsa."},

{id:"G13",area:"gh",topico:"Biomas brasileiros",nivel:2,
 enunciado:"Associe corretamente bioma e característica:",
 alts:["Cerrado: floresta equatorial densa e úmida","Caatinga: bioma exclusivamente brasileiro, semiárido, com vegetação xerófila adaptada à seca","Pantanal: o maior bioma brasileiro em área","Mata Atlântica: bioma intacto, com mais de 90% de cobertura original preservada","Pampa: floresta tropical de araucárias"],correta:1,
 porque:"Caatinga: único bioma exclusivamente brasileiro, no semiárido nordestino, vegetação xerófila (cactos, arbustos espinhosos, folhas caducas). Amazônia é o maior em área; Cerrado é o segundo, é savana com árvores tortuosas e raízes profundas, e é o ‘berço das águas’ do Brasil. Pantanal é o menor e é a maior planície alagável do mundo. Pampa são campos do Sul. A Mata Atlântica é o bioma mais devastado — restam cerca de 12% da cobertura original, e é justamente o bioma de Santa Catarina, o que torna esse dado prato cheio para a prova."},

{id:"G14",area:"gh",topico:"Questões ambientais",nivel:2,
 enunciado:"Sobre as queimadas na Amazônia e os chamados “rios voadores”, é correto afirmar que:",
 alts:["As queimadas não afetam o regime de chuvas em outras regiões do país.","A floresta libera vapor d’água pela evapotranspiração, e essas massas de umidade — os ‘rios voadores’ — são transportadas pelos ventos até o Centro-Oeste, Sudeste e Sul, de modo que o desmatamento amazônico compromete as chuvas dessas regiões.","Os ‘rios voadores’ são cursos d’água subterrâneos.","As queimadas são um fenômeno exclusivamente natural na Amazônia.","O desmatamento aumenta a umidade do ar na região."],correta:1,
 porque:"Uma árvore grande da Amazônia pode liberar centenas de litros de água por dia por evapotranspiração. Esse vapor é empurrado pelos ventos alísios, barrado pela Cordilheira dos Andes e desviado para o centro-sul do continente. Daí a conexão direta entre desmatamento amazônico e estiagem no Sudeste e no Sul — inclusive em Santa Catarina. As queimadas ali são majoritariamente antrópicas, ligadas à grilagem, à pecuária e à expansão agrícola, e não a incêndios naturais."},

{id:"G15",area:"gh",topico:"Povos originários",nivel:2,
 enunciado:"Sobre os povos originários do Brasil, é correto afirmar que:",
 alts:["Formam um grupo culturalmente homogêneo, com uma única língua.","São mais de 250 povos, falantes de mais de 150 línguas, com organizações sociais, territórios e cosmologias diversas, cujos direitos territoriais são garantidos pela Constituição de 1988.","Desapareceram completamente do território brasileiro.","Não possuem direitos territoriais reconhecidos em lei.","Vivem apenas na região amazônica."],correta:1,
 porque:"A diversidade é o ponto central e a alternativa que nega isso é sempre a errada. O artigo 231 da Constituição de 1988 reconhece aos indígenas ‘sua organização social, costumes, línguas, crenças e tradições, e os direitos originários sobre as terras que tradicionalmente ocupam’ — ‘originários’ significa anteriores ao próprio Estado brasileiro, o que é o argumento jurídico contra a tese do marco temporal. Em Santa Catarina vivem os Guarani, Kaingang e Xokleng (Laklãnõ)."},

{id:"G16",area:"gh",topico:"Direitos humanos",nivel:2,
 enunciado:"Sobre a Declaração Universal dos Direitos Humanos (1948), analise:\nI. Foi proclamada pela ONU no pós-Segunda Guerra Mundial.\nII. Seus direitos valem apenas para determinados grupos sociais.\nIII. Baseia-se nos princípios da universalidade, da indivisibilidade e da dignidade humana.\nEstá(ão) correta(s):",
 alts:["Apenas I","Apenas I e III","Apenas II e III","Apenas III","I, II e III"],correta:1,
 porque:"I e III corretas; II é falsa, e é exatamente o erro que a prova quer pegar: o adjetivo é UNIVERSAL — valem para todo ser humano, sem distinção de raça, sexo, religião, nacionalidade ou condição. A Declaração é resposta direta aos horrores do nazismo e do Holocausto. Políticas voltadas a grupos específicos (cotas, Lei Maria da Penha, Estatuto da Criança e do Adolescente) não contradizem a universalidade: são instrumentos de equidade para que o direito universal se realize de fato."},

{id:"G17",area:"gh",topico:"Cartografia",nivel:2,
 enunciado:"Numa carta topográfica, curvas de nível muito próximas umas das outras indicam:",
 alts:["Terreno plano","Terreno com declive acentuado","Presença de rio","Área urbanizada","Erro de projeção"],correta:1,
 porque:"Curva de nível une pontos de mesma altitude. Se muitas curvas se acumulam num espaço pequeno do mapa, a altitude varia muito numa distância horizontal curta → encosta íngreme. Curvas espaçadas → relevo suave. Curvas fechadas concêntricas → topo de morro (ou depressão, quando marcada com tracinhos internos)."},

{id:"G18",area:"gh",topico:"Colonização",nivel:2,
 enunciado:"O trecho da Carta de Pero Vaz de Caminha (1500) é frequentemente usado como “mito de fundação” do Brasil. A crítica historiográfica atual a esse uso aponta que:",
 alts:["A carta é um relato neutro e completo dos fatos.","A carta é um documento produzido do ponto de vista do colonizador europeu, que descreve os povos originários como ingênuos e disponíveis à catequese, invisibilizando sua história prévia e legitimando a ocupação do território.","A carta foi escrita por um indígena.","A carta comprova que o território estava vazio.","A carta não tem valor histórico algum."],correta:1,
 porque:"Todo documento histórico tem autor, intenção e destinatário — a carta foi escrita por um funcionário da Coroa, para o rei D. Manuel I, para justificar a empreitada. A leitura crítica não descarta a fonte (E está errada), mas pergunta quem fala, de onde e para quem. O ‘descobrimento’ pressupõe que só existe o que o europeu enxergou; por isso se prefere hoje falar em invasão, conquista ou encontro. Havia entre 2 e 5 milhões de pessoas no território."},

{id:"G19",area:"gh",topico:"Urbanização",nivel:2,
 enunciado:"Sobre a urbanização brasileira, é correto afirmar que:",
 alts:["Foi um processo lento e planejado, com infraestrutura prévia às ocupações.","Foi rápida e intensa a partir de meados do século XX, impulsionada pela industrialização e pela modernização do campo, resultando em metropolização, periferização e crescimento de áreas de risco.","O Brasil ainda é um país majoritariamente rural.","A urbanização ocorreu igualmente em todas as regiões e no mesmo ritmo.","Não gerou problemas ambientais urbanos."],correta:1,
 porque:"Em 1940 cerca de 31% da população era urbana; hoje passa de 85%. O motor foi duplo: industrialização atraindo (fator de atração) e mecanização do campo somada à concentração fundiária expulsando (fator de expulsão) — o êxodo rural. Como a cidade cresceu mais rápido que a infraestrutura, o resultado foi periferização, favelização, ocupação de encostas e margens de rio (daí os desastres em SC), e metropolização com conurbação."},

{id:"G20",area:"gh",topico:"Gênero e sociedade",nivel:2,
 enunciado:"Sobre a participação das mulheres no mundo do trabalho no Brasil, é correto afirmar que:",
 alts:["Já existe igualdade salarial plena entre homens e mulheres na mesma função.","Apesar do aumento da escolaridade e da participação feminina, persistem diferenças salariais, sub-representação em cargos de chefia e sobrecarga com o trabalho doméstico e de cuidado não remunerado.","As mulheres só passaram a trabalhar fora de casa no século XXI.","O voto feminino no Brasil foi conquistado em 1988.","A legislação brasileira não trata do assunto."],correta:1,
 porque:"Dados do IBGE mostram mulheres com escolaridade média MAIOR que a dos homens e ainda assim rendimento cerca de 20% menor, com a diferença crescendo nos cargos mais altos (‘teto de vidro’) e recaindo com mais força sobre mulheres negras. Marcos legais: voto feminino em 1932 (Código Eleitoral, consolidado na Constituição de 1934), Constituição de 1988 com igualdade formal, Lei Maria da Penha em 2006, lei do feminicídio em 2015, lei da igualdade salarial em 2023."},

/* ===================== LÍNGUA PORTUGUESA ===================== */
{id:"P01",area:"port",topico:"Figuras de linguagem",nivel:2,
 enunciado:"Em “A cidade inteira comentava o resultado do exame”, a figura de linguagem presente é:",
 alts:["Metáfora","Metonímia","Hipérbole","Eufemismo","Antítese"],correta:1,
 porque:"Metonímia é a substituição por proximidade ou relação lógica: ‘a cidade’ está no lugar dos ‘habitantes da cidade’ (continente pelo conteúdo). Metáfora seria comparação implícita por semelhança (‘ele é um leão’); hipérbole seria exagero intencional (‘morri de rir’); eufemismo suaviza (‘ele partiu’ por morreu); antítese opõe ideias (‘é fogo que arde sem se ver’)."},

{id:"P02",area:"port",topico:"Coesão",nivel:2,
 enunciado:"“O IFSC oferece cursos técnicos gratuitos; ______, a concorrência é alta.” A conjunção que melhor completa a lacuna, mantendo o sentido de consequência, é:",
 alts:["porém","embora","portanto","caso","apesar disso"],correta:2,
 porque:"‘Portanto’ é conclusivo: introduz a consequência do que foi dito. ‘Porém’ e ‘apesar disso’ marcariam oposição (o sentido ficaria invertido), ‘embora’ é concessivo e ‘caso’ é condicional. Numa questão de conectivo, identifique primeiro a RELAÇÃO lógica entre as orações (causa, consequência, oposição, condição, conclusão) e só depois escolha a palavra."},

{id:"P03",area:"port",topico:"Variação linguística",nivel:2,
 enunciado:"Sobre variação linguística e preconceito linguístico, é correto afirmar que:",
 alts:["Existe uma única forma correta de falar português, e as demais são erradas.","Todas as variedades do português brasileiro são estruturadas e possuem regras próprias; o preconceito linguístico é, na verdade, um preconceito social dirigido aos falantes de variedades estigmatizadas.","A norma-padrão é superior às outras variedades por natureza.","A variação linguística ocorre apenas entre regiões diferentes.","Quem fala uma variedade estigmatizada não consegue se comunicar com clareza."],correta:1,
 porque:"Tema explícito no conteúdo programático do IFSC. Toda variedade é sistemática e plenamente funcional para seus falantes. A norma-padrão é PRESTIGIADA por razões históricas e sociais, não por qualidade linguística intrínseca — e dominá-la é uma ferramenta de acesso, não uma prova de superioridade. A variação é diatópica (região), diastrática (grupo social), diafásica (situação, do formal ao informal) e diacrônica (tempo)."},

{id:"P04",area:"port",topico:"Concordância",nivel:2,
 enunciado:"Assinale a frase em que a concordância verbal está CORRETA:",
 alts:["Fazem cinco anos que estudo eletrônica.","Houveram muitos candidatos aprovados.","Havia muitos candidatos na sala.","Existe muitas oportunidades na área técnica.","Aconteceu vários problemas no circuito."],correta:2,
 porque:"‘Haver’ no sentido de EXISTIR é impessoal: fica sempre na 3ª pessoa do singular (havia, houve). Logo ‘houveram muitos’ está errado. ‘Fazer’ indicando tempo decorrido também é impessoal: ‘Faz cinco anos’. Mas atenção à armadilha: ‘existir’ e ‘acontecer’ NÃO são impessoais e concordam normalmente — o certo seria ‘existem muitas oportunidades’ e ‘aconteceram vários problemas’."},

{id:"P05",area:"port",topico:"Interpretação",nivel:2,
 enunciado:"Numa tirinha, um personagem pergunta: “Você não acha que estamos dependendo demais das máquinas?” e o outro responde, sem tirar os olhos do celular: “Deixa eu pesquisar isso.” O efeito de humor é construído por:",
 alts:["um erro gramatical proposital.","uma ironia situacional: a resposta confirma na prática exatamente a crítica que estava sendo questionada.","uma metáfora sobre máquinas.","uma hipérbole sobre o tempo de tela.","uma comparação entre pessoas e máquinas."],correta:1,
 porque:"O humor vem do descompasso entre o que o personagem diz e o que ele faz — ironia situacional. Método para questão de tirinha ou charge: identifique (1) a expectativa criada e (2) a quebra dessa expectativa; o humor e a crítica moram sempre na quebra, geralmente no último quadrinho. Não procure recurso gramatical onde o efeito é de sentido."},

{id:"P06",area:"port",topico:"Gêneros textuais",nivel:1,
 enunciado:"Um texto que apresenta instruções numeradas, verbos no imperativo, lista de materiais e finalidade prática pertence ao gênero:",
 alts:["Crônica","Manual de instruções","Editorial","Conto","Reportagem"],correta:1,
 porque:"Os três traços — lista de materiais, sequência numerada e verbos no imperativo (‘conecte’, ‘verifique’) — caracterizam textos injuntivos/instrucionais: manual, receita, bula, regulamento. Identificar gênero é sempre uma soma de três pistas: finalidade (para que serve), estrutura (como se organiza) e marcas linguísticas (tempo verbal, pessoa, vocabulário)."},

{id:"P07",area:"port",topico:"Ambiguidade",nivel:2,
 enunciado:"A frase “O professor falou com o aluno na sua sala” é ambígua porque:",
 alts:["apresenta erro de concordância.","o pronome possessivo ‘sua’ pode se referir tanto ao professor quanto ao aluno.","o verbo está no tempo errado.","falta vírgula antes de ‘com’.","o sujeito está oculto."],correta:1,
 porque:"Ambiguidade é a possibilidade de mais de uma leitura. O possessivo de 3ª pessoa (seu/sua) é a fonte clássica no português, porque serve a vários referentes. A correção se faz com ‘dele’ ou ‘dele próprio’: ‘na sala dele’, especificando. Outras fontes frequentes de ambiguidade: pronome relativo distante do antecedente e adjunto adverbial mal posicionado (‘vi o homem com o binóculo’)."},

{id:"P08",area:"port",topico:"Argumentação",nivel:2,
 enunciado:"Em um texto argumentativo, o trecho “Segundo dados do IBGE de 2024, 85% da população brasileira vive em áreas urbanas” constitui:",
 alts:["uma opinião pessoal do autor.","um argumento de autoridade apoiado em dado estatístico.","uma digressão sem função argumentativa.","uma falácia.","uma narração."],correta:1,
 porque:"O autor recorre a uma fonte reconhecida (IBGE) e a um dado numérico para sustentar sua tese: é argumento de autoridade combinado a argumento estatístico. Outros tipos que a prova cobra: exemplificação, comparação, causa e consequência, e argumento histórico. A diferença entre opinião e argumento está na sustentação — argumento sempre se apoia em algo verificável fora da própria opinião."},

{id:"P09",area:"port",topico:"Fonética",nivel:2,
 enunciado:"Assinale a palavra em que o número de LETRAS é maior que o número de FONEMAS:",
 alts:["casa","táxi","chuva","fixo","mar"],correta:2,
 porque:"Em ‘chuva’ há 5 letras, mas o dígrafo ‘ch’ representa um único fonema /ʃ/ → 4 fonemas. Dígrafos (ch, lh, nh, rr, ss, sc, qu, gu antes de e/i, e as vogais nasais como ‘am’, ‘en’) sempre produzem letras > fonemas. O contrário existe: em ‘táxi’ e ‘fixo’, a letra x representa dois fonemas /ks/, então fonemas > letras."},

{id:"P10",area:"port",topico:"Vozes verbais",nivel:2,
 enunciado:"A frase “Os alunos construíram o robô” na voz passiva fica:",
 alts:["O robô construiu os alunos.","O robô foi construído pelos alunos.","Os alunos foram construídos pelo robô.","Construíram-se os alunos.","O robô construía os alunos."],correta:1,
 porque:"Na conversão para a passiva analítica, o objeto direto (‘o robô’) vira sujeito, entra o verbo auxiliar ‘ser’ no mesmo tempo do verbo original (pretérito perfeito → foi), o verbo principal vai para o particípio (construído) e o sujeito antigo vira agente da passiva (‘pelos alunos’). Se a frase original não tiver objeto direto, ela não admite voz passiva — teste útil para eliminar alternativas."},

{id:"P11",area:"port",topico:"Regência",nivel:3,
 enunciado:"Assinale a alternativa em que o uso da crase está CORRETO:",
 alts:["Vou à pé até o câmpus.","Refiro-me à você.","Assisti à aula de eletrônica.","Cheguei à Florianópolis ontem.","Entreguei o trabalho à ele."],correta:2,
 porque:"Crase é a fusão da preposição ‘a’ com o artigo ‘a(s)’. O verbo assistir no sentido de ‘ver, presenciar’ exige a preposição a, e ‘aula’ é feminina e admite artigo → à aula. Nunca ocorre crase antes de palavra masculina (‘a pé’), de pronome pessoal (‘a você’, ‘a ele’) nem de nome de cidade que não admite artigo. Teste rápido: troque a palavra feminina por uma masculina — se aparecer ‘ao’, há crase (‘assisti ao filme’ → ‘assisti à aula’)."},

{id:"P12",area:"port",topico:"Intertextualidade",nivel:2,
 enunciado:"Uma campanha publicitária usa a frase “Ser ou não ser sustentável, eis a questão”. O recurso empregado é:",
 alts:["neologismo","intertextualidade com uma obra literária conhecida","pleonasmo","onomatopeia","silepse"],correta:1,
 porque:"É uma paródia do monólogo de Hamlet, de Shakespeare. Intertextualidade é o diálogo explícito ou implícito com outro texto, e depende do repertório do leitor para funcionar. Suas formas mais cobradas: citação, alusão, paráfrase (reescreve mantendo o sentido) e paródia (reescreve subvertendo, geralmente com humor ou crítica) — distinguir paráfrase de paródia é a pergunta clássica."},

{id:"P13",area:"port",topico:"Interpretação",nivel:3,
 enunciado:"Leia: “A tecnologia avançou tanto que hoje conseguimos nos comunicar com alguém do outro lado do mundo em segundos — e, ainda assim, muitas vezes não conversamos com quem está sentado ao nosso lado.” A ideia central do trecho é:",
 alts:["Elogiar o avanço tecnológico das comunicações.","Apontar um paradoxo: o aumento da conectividade técnica não garante — e pode até dificultar — a proximidade nas relações presenciais.","Defender o fim do uso de celulares.","Comparar velocidades de conexão de internet.","Criticar quem mora longe da família."],correta:1,
 porque:"O eixo do trecho é o conectivo ‘e, ainda assim’, que marca contraste e instala o paradoxo. A alternativa A capta só a primeira metade; C e E extrapolam, atribuindo ao texto uma defesa que ele não faz. Regra de ouro da interpretação no IFSC: a resposta certa é a que cabe INTEIRA dentro do texto — nem menos (parcial) nem mais (extrapolação)."},

{id:"P14",area:"port",topico:"Morfologia",nivel:2,
 enunciado:"Na frase “Ele chegou muito cedo à oficina”, as palavras “muito” e “cedo” são, respectivamente:",
 alts:["adjetivo e substantivo","advérbio e advérbio","pronome e adjetivo","substantivo e advérbio","conjunção e advérbio"],correta:1,
 porque:"‘Cedo’ é advérbio de tempo, modificando o verbo ‘chegou’. ‘Muito’ aqui é advérbio de intensidade, modificando outro advérbio (‘cedo’). Atenção: ‘muito’ é palavra camaleoa — em ‘muito livro’ é pronome indefinido (varia: muitos livros); em ‘muito cedo’ e ‘muito bonito’ é advérbio e fica invariável. Advérbio nunca varia em gênero ou número, e esse é o melhor teste."},

{id:"P15",area:"port",topico:"Coerência",nivel:2,
 enunciado:"Assinale o período em que há problema de COERÊNCIA:",
 alts:["Estudou bastante e foi aprovado no exame.","Choveu muito, por isso as ruas ficaram alagadas.","Ele é vegetariano, portanto come carne todos os dias.","Como estava cansado, foi dormir cedo.","Não estudou, mas mesmo assim foi bem na prova."],correta:2,
 porque:"Coerência é a compatibilidade lógica entre as ideias. Em C, o conectivo conclusivo ‘portanto’ liga duas informações que se contradizem — ser vegetariano e comer carne diariamente. Note que a frase está gramaticalmente perfeita: coesão (a costura formal) e coerência (o sentido) são coisas distintas, e a prova gosta de apresentar frases bem construídas mas logicamente impossíveis."}
];
