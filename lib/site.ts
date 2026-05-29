/**
 * Configuração central do site Editify.
 * Edite aqui pra atualizar links, números, depoimentos e dados do fundador.
 */

export const SOLUTIONS = [
  {
    id: "treinamento",
    name: "Treinamento Editify",
    tagline: "Aprenda a editar e a viver disso",
    description:
      "Do primeiro corte ao primeiro contrato. O método completo pra você dominar a edição e transformar isso em renda real — mesmo começando do zero.",
    cta: "Conhecer o treinamento",
    href: "https://lp.treinamento.editify.com.br",
    verb: "Aprenda",
    badge: "O carro-chefe",
    available: true,
  },
  {
    id: "comunidade",
    name: "Comunidade Editify",
    tagline: "Você não edita mais sozinho",
    description:
      "Onde os editores se conectam, trocam projeto, dão feedback e crescem juntos. A galera que entende o que você faz — e te puxa pra cima.",
    cta: "Entrar na comunidade",
    href: "https://comunidade.editify.com.br",
    verb: "Conecte",
    badge: null,
    available: true,
  },
  {
    id: "contratar",
    name: "Contratar Editify",
    tagline: "Editores prontos pra entregar",
    description:
      "Precisa de edição profissional? Contrate editores formados pela Editify. Pra criadores e empresas que querem vídeo bom sem dor de cabeça.",
    cta: "Contratar um editor",
    href: "https://contratar.editify.com.br",
    verb: "Trabalhe",
    badge: null,
    available: true,
  },
] as const;

export const STATS = [
  { value: "+1.000", label: "editores formados" },
  { value: "4.92", label: "avaliação média", star: true },
  { value: "R$15.860", label: "salário médio dos alunos" },
  { value: "+R$2,2M", label: "movimentados no mercado" },
] as const;

/** Transformações reais de alunos (antes → depois) */
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

export const FOUNDER = {
  name: "Erick Julrich",
  role: "Fundador da Editify",
  photo: "/founder.jpg",
  // headline curta de autoridade
  headline: "Saí da escola aos 17 pra editar vídeo. Hoje formo quem faz o mesmo.",
  bio: [
    "Em 2 meses editando, bati R$20.000/mês. Virei diretor de uma agência gringa que faturou mais de R$1 milhão e abri a minha própria, que fez R$450 mil em 6 meses.",
    "No total, já movimentei mais de R$2,2 milhões no mercado de edição. Criei a Editify pra ser o que eu queria ter tido no começo: a prova de que edição de vídeo é profissão de verdade — e o caminho pra viver dela.",
  ],
  founderStats: [
    { value: "R$2,2M+", label: "movimentados no mercado" },
    { value: "+1.000", label: "editores formados" },
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

export const BRAND_SOCIALS = FOUNDER.socials;

/** Avatares reais de alunos pro marquee de prova social */
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
