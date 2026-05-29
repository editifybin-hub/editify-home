/**
 * Configuração central do site institucional da Editify (editify.com.br).
 * Esta é a página de MARCA / ecossistema — não é landing de venda.
 * Edite aqui pra atualizar números, pilares, jornada e dados do fundador.
 */

export const SINCE_YEAR = 2022;
export const YEARS_RUNNING = 3; // desde 2022

/** Os 3 pilares do ecossistema (treinamento → comunidade → contratar). */
export const PILLARS = [
  {
    id: "treinamento",
    name: "Treinamento",
    domain: "treinamento.editify.com.br",
    href: "https://lp.treinamento.editify.com.br",
    step: "01",
    role: "Onde começa",
    serves: "pro editor",
    blurb:
      "A formação que pega quem nunca abriu um editor e devolve um profissional que vive disso. Do primeiro corte ao primeiro contrato.",
    metric: { value: "+1.000", label: "editores formados" },
  },
  {
    id: "comunidade",
    name: "Comunidade",
    domain: "comunidade.editify.com.br",
    href: "https://comunidade.editify.com.br",
    step: "02",
    role: "Onde evolui",
    serves: "pro editor",
    blurb:
      "A casa onde ninguém edita sozinho: estúdios em voz, crítica de corte, ligas de faturamento e XP que vira recompensa de verdade.",
    metric: { value: "1.100", label: "editores na casa" },
  },
  {
    id: "contratar",
    name: "Contratar",
    domain: "contratar.editify.com.br",
    href: "https://contratar.editify.com.br",
    step: "03",
    role: "Onde trabalha",
    serves: "editor + cliente",
    blurb:
      "O marketplace que liga o editor formado direto ao cliente. Sem agência no meio, sem comissão: o preço cai inteiro no PIX do editor.",
    metric: { value: "0%", label: "de comissão" },
  },
] as const;

/** Números do ecossistema (faixa vermelha de destaque). */
export const STATS = [
  { target: 3, label: "anos de jornada", since: "desde 2022" },
  { target: 1000, prefix: "+", sep: true, label: "editores formados" },
  { target: 1100, sep: true, label: "na comunidade" },
  { target: 4.92, decimals: 2, label: "avaliação média", star: true },
] as const;

/** Os dois lados que o ecossistema atende. */
export const AUDIENCES = {
  editor: {
    tag: "Pro editor",
    headline: "Vira profissional e nunca mais edita sozinho.",
    points: [
      "Aprende a editar do zero e a cobrar pelo que vale",
      "Evolui numa comunidade que puxa você pra cima",
      "É contratado direto, sem agência levando sua margem",
      "Monta um portfólio verificado que o cliente confia",
    ],
  },
  client: {
    tag: "Pro cliente",
    headline: "Acha o editor certo sem passar por agência.",
    points: [
      "Encontra editor formado e avaliado pela própria casa",
      "Vê portfólio, estrelas e histórico reais antes de fechar",
      "Fala direto com o editor, sem intermediário no caminho",
      "Paga o preço cheio pro editor — 0% de comissão",
    ],
  },
} as const;

/** Linha do tempo da Editify (confira/ajuste as datas se precisar). */
export const TIMELINE = [
  {
    year: "2022",
    title: "O primeiro corte",
    text: "A Editify nasce com o Treinamento — edição de vídeo tratada como profissão de verdade, não passatempo.",
  },
  {
    year: "2023",
    title: "Ninguém edita sozinho",
    text: "Nasce a Comunidade: estúdios em voz, crítica de corte e uma galera inteira na mesma jornada.",
  },
  {
    year: "2024",
    title: "Do talento ao trabalho",
    text: "Chegam o Contratar e o Editfólio. O editor formado vira contratável, com portfólio verificado na frente do cliente.",
  },
  {
    year: "Hoje",
    title: "Um ecossistema",
    text: "Treinamento, comunidade e contratação conectados. Mais de mil editores formados — e a casa só cresce.",
  },
] as const;

/** Resultados reais de alunos (prova de histórico). */
export const TRANSFORMATIONS = [
  {
    name: "Alexandre",
    age: 18,
    avatar: "/avatars/Alexandre.png",
    before: "R$3.500",
    after: "R$35.000",
    quote: "Passei a delegar, vender com estratégia e escalar de verdade.",
    featured: true,
  },
  {
    name: "Jonatas",
    age: 19,
    avatar: "/avatars/Jonatas.png",
    before: "R$0",
    after: "R$10.000",
    quote: "A Editify me salvou. Em 5 meses mudei o rumo da minha vida.",
    featured: false,
  },
  {
    name: "Vitor",
    age: 22,
    avatar: "/avatars/Vitor.png",
    before: "R$2.200",
    after: "R$12.000",
    quote: "Nos meus primeiros dias com o treinamento eu já fechei clientes.",
    featured: false,
  },
  {
    name: "Marlon",
    age: 21,
    avatar: "/avatars/Marlon.png",
    before: "R$1.500",
    after: "R$15.000",
    quote: "Já entrei com experiência, mas ainda assim aprendi muito.",
    featured: false,
  },
] as const;

/** Métricas de resultado (seção de provas). */
export const RESULT_STATS = [
  { value: "R$15.860", label: "salário médio dos alunos" },
  { value: "4.92", label: "nota média, de 5" },
  { value: "+1.000", label: "formados e contando" },
] as const;

export const FOUNDER = {
  name: "Erick Julrich",
  role: "Fundador da Editify",
  photo: "/founder.jpg",
  headline: "Saí da escola aos 17 pra editar vídeo. Hoje construo a casa de quem faz o mesmo.",
  bio: [
    "Em 2 meses editando, bati R$20.000/mês. Virei diretor de uma agência gringa que faturou mais de R$1 milhão e abri a minha própria, que fez R$450 mil em 6 meses.",
    "No total, já movimentei mais de R$2,2 milhões no mercado de edição. Criei a Editify pra ser o que eu queria ter tido no começo: a prova de que edição de vídeo é profissão de verdade — e o ecossistema inteiro pra viver dela.",
  ],
  founderStats: [
    { value: "R$2,2M+", label: "movimentados por mim no mercado" },
    { value: "R$1M+", label: "faturados na agência gringa" },
    { value: "17", label: "anos quando comecei" },
  ],
  socials: [
    {
      label: "Instagram",
      href: "https://instagram.com/erickjulrich",
      handle: "@erickjulrich",
    },
    {
      label: "YouTube",
      href: "https://youtube.com/@erickjulrich",
      handle: "@erickjulrich",
    },
  ],
} as const;

/** Toda a família de produtos (rodapé). */
export const FAMILY = [
  { name: "Treinamento", href: "https://lp.treinamento.editify.com.br" },
  { name: "Comunidade", href: "https://comunidade.editify.com.br" },
  { name: "Contratar", href: "https://contratar.editify.com.br" },
  { name: "Editfólio", href: "https://folio.editify.com.br" },
  { name: "Aula Zero", href: "https://aulazero.editify.com.br" },
] as const;

export const BRAND_SOCIALS = FOUNDER.socials;

/** Avatares reais de editores pro marquee de prova social. */
export const AVATARS = [
  "_g.o.s.webp", "_medeiros.webp", "acerola7435.webp", "alexandre051473.webp",
  "allis_69.webp", "alvesdrj.webp", "andersonbarbozaa.webp", "arth.editor.webp",
  "beza1.webp", "bielzin7456.webp", "birijien.webp", "boluhh.webp",
  "brumviews.webp", "brunabuenobb.webp", "cabeca7270.webp", "cauaiuri.webp",
  "cesa.r.webp", "curi8526.webp", "danieldaveiga.webp", "danielonframe.webp",
  "dosanjos4343.webp", "edupaz5957.webp", "enrikproducer.webp", "enzommachado.webp",
  "erickjulrich.webp", "eudiscardoso.webp", "felipeoliveira.editor.webp",
  "frame_scharlau.webp", "g.silv7.webp", "gabicas.webp", "gabrieledito_69249.webp",
  "gordinbolologg.webp", "guiiferreiras.webp", "hashiramalukas.webp",
  "igorlidar.webp", "jaumdaskebra.webp", "jcut_editor.webp", "jeffersonslima.webp",
  "jg.edita.webp", "juanpablo_49899.webp", "julioopadua.webp", "junioneri..webp",
  "kayque_editor.webp", "kingskarlet.webp", "kirch3819.webp", "leodamiao.webp",
  "luatelles9369.webp", "lucasfelipe0420.webp", "lucasseifert.webp",
  "luccagarcez.webp", "lugoon.webp", "luissky777.webp", "luizfernando6037.webp",
  "lukassousa0235.webp", "lukaz.light781.webp", "lukinnhass.webp", "luukzl1.webp",
  "marcellonsf.webp", "marissonjoaquim.webp", "maxwell103000.webp", "meinsk.webp",
  "mleplayer.webp", "naelsonrodrigues.webp", "neexxzz.webp", "nf_nathanfq.webp",
  "noquezin.aep.webp", "nozzymitadas.webp", "o.marcoantoniovital.webp",
  "odanielmarquess.webp", "oeditorofficial.webp", "ogay463.webp", "okawelimah.webp",
  "omestre_.webp", "pablo.editpro.webp", "ppaulo3278.webp", "ppedronso06.webp",
  "raul_oeditor.webp", "rickyn_.webp", "rizzovini447.webp", "rufas1606.webp",
  "s0dre1.webp", "sadtimeliner.webp", "samuelss23.webp", "samueltessaro_.webp",
  "samukanoise.webp", "santoxx99.webp", "sathes.webp", "shoge_b.webp",
  "silvaogt.webp", "tuwhity_ofc.webp", "vifilsk.webp", "viniciusjp1233.webp",
  "vitorhugo022.webp", "well.visuals.webp", "wesley_editor.webp", "weslley7120.webp",
  "whytheush.webp", "willian008..webp", "wiuneves.webp", "wolfjin2.webp", "zlyoz.webp",
].map((f) => `/avatars2/${f}`);
