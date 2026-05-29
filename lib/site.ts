/**
 * Configuração central do site institucional da Editify (editify.com.br).
 * Esta é a página institucional de marca (ecossistema), sem foco em venda.
 * Copy pensada pra topo de funil: quem chega aqui não conhece nada.
 */

export const SINCE_YEAR = 2022;
export const YEARS_RUNNING = 4; // 2022 a 2026

/** Os 3 passos do ecossistema (aprende → cresce → trabalha). */
export const PILLARS = [
  {
    id: "treinamento",
    name: "Treinamento",
    domain: "treinamento.editify.com.br",
    href: "https://lp.treinamento.editify.com.br",
    step: "01",
    lead: "Primeiro, você aprende a editar.",
    blurb:
      "Um treinamento que ensina edição de vídeo do zero, mesmo se você nunca abriu um programa de edição na vida. Você aprende a editar bem e também a achar clientes e cobrar pelo seu trabalho.",
    metric: { value: "1.032", label: "pessoas já formadas" },
  },
  {
    id: "comunidade",
    name: "Comunidade",
    domain: "comunidade.editify.com.br",
    href: "https://comunidade.editify.com.br",
    step: "02",
    lead: "Aí você entra pra comunidade.",
    blurb:
      "Um grupo com mais de mil editores que se ajudam todo dia. Você mostra seus vídeos, recebe dicas de quem já manda bem, tira dúvidas e faz amizade com gente que tá na mesma que você.",
    metric: { value: "1.193", label: "editores na comunidade" },
  },
  {
    id: "contratar",
    name: "Contratar",
    domain: "contratar.editify.com.br",
    href: "https://contratar.editify.com.br",
    step: "03",
    lead: "E no fim, você acha clientes.",
    blurb:
      "Um site onde empresas e criadores de conteúdo procuram editores pra contratar. Você cria seu perfil, aparece pra eles e fecha o trabalho direto. O dinheiro cai inteiro pra você, sem ninguém ficar com uma parte.",
    metric: { value: "0%", label: "de comissão, você recebe tudo" },
  },
] as const;

/** Números do ecossistema (faixa vermelha de destaque). */
export const STATS = [
  { target: 4, label: "anos de jornada", since: "desde 2022" },
  { target: 1032, sep: true, label: "editores formados" },
  { target: 1193, sep: true, label: "na comunidade" },
  { target: 4.92, decimals: 2, label: "avaliação média", star: true },
] as const;

/** Os dois lados que o ecossistema atende. */
export const AUDIENCES = {
  editor: {
    tag: "Pra quem edita",
    headline: "Você aprende a editar e a viver disso.",
    points: [
      "Aprende a editar do zero, mesmo sem nunca ter feito",
      "Cresce junto com outros editores que te ajudam",
      "Consegue clientes sem ninguém ficar com parte do seu dinheiro",
      "Monta uma página pra mostrar seu trabalho e atrair clientes",
    ],
  },
  client: {
    tag: "Pra quem contrata",
    headline: "Você acha um bom editor sem dor de cabeça.",
    points: [
      "Encontra editores já treinados pela Editify",
      "Vê os trabalhos e as avaliações de cada um antes de fechar",
      "Fala direto com o editor, sem ninguém no meio",
      "Paga direto pra ele, sem pagar comissão nenhuma",
    ],
  },
} as const;

/** Linha do tempo da Editify (ajuste as datas se precisar). */
export const TIMELINE = [
  {
    year: "2022",
    title: "O começo",
    text: "A Editify começou como um treinamento pra ensinar gente comum a editar vídeo e ganhar dinheiro com isso.",
  },
  {
    year: "2023",
    title: "A comunidade",
    text: "Veio a comunidade: um lugar pros editores se conhecerem, trocarem dicas e crescerem juntos.",
  },
  {
    year: "2024",
    title: "O trabalho",
    text: "Chegou o Contratar e o Editfólio. Agora o editor formado consegue achar clientes e mostrar seu trabalho pra eles.",
  },
  {
    year: "Hoje",
    title: "Tudo junto",
    text: "Treinamento, comunidade e contratação no mesmo lugar, com mais de mil editores formados. E continua crescendo.",
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
    before: "R$12.000",
    after: "R$15.000",
    quote: "Já entrei com experiência, mas ainda assim aprendi muito.",
    featured: false,
  },
] as const;

export const FOUNDER = {
  name: "Erick Julrich",
  role: "Fundador da Editify",
  photo: "/founder.jpg",
  headline: "Saí da escola aos 17 pra editar vídeo. Hoje construo a casa de quem faz o mesmo.",
  bio: [
    "Em 2 meses editando, bati R$20.000 por mês. Virei diretor de uma agência gringa que faturou mais de R$1 milhão e abri a minha própria, que fez R$450 mil em 6 meses.",
    "No total, já movimentei mais de R$2,2 milhões editando e vendendo edição. Criei a Editify pra dar pras outras pessoas o que eu não tive quando comecei: um caminho completo pra aprender, crescer e viver de edição de vídeo.",
  ],
  founderStats: [
    { value: "R$2,2M+", label: "movimentados por mim no mercado" },
    { value: "R$1M+", label: "faturados na agência gringa" },
    { value: "17", label: "anos quando comecei" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/erickjulrich", handle: "@erickjulrich" },
    { label: "YouTube", href: "https://youtube.com/@erickjulrich", handle: "@erickjulrich" },
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
