/**
 * Configuração central do site Editify.
 * Edite aqui pra atualizar links, redes sociais e dados do fundador —
 * sem precisar mexer nos componentes.
 */

export const SOLUTIONS = [
  {
    id: "treinamento",
    name: "Treinamento Editify",
    tagline: "Aprenda a editar e a viver disso",
    description:
      "Do primeiro corte ao primeiro contrato. O passo a passo pra você dominar a edição e transformar isso em renda real — mesmo começando do zero.",
    cta: "Conhecer o treinamento",
    href: "https://lp.treinamento.editify.com.br",
    verb: "Aprenda",
    available: true,
  },
  {
    id: "comunidade",
    name: "Comunidade Editify",
    tagline: "Você não edita mais sozinho",
    description:
      "Onde os editores se conectam, trocam projeto, dão feedback e crescem juntos. A galera que entende o que você faz — e te empurra pra frente.",
    cta: "Entrar na comunidade",
    href: "https://comunidade.editify.com.br",
    verb: "Conecte",
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
    available: true,
  },
] as const;

/**
 * Dados do fundador. ⚠️ TROQUE os placeholders pelos seus dados reais:
 * - name: seu nome
 * - photo: coloque sua foto em /public/founder.jpg e ajuste o caminho
 * - socials: seus @ / URLs reais
 */
export const FOUNDER = {
  name: "Erick Ulrich",
  role: "Fundador da Editify",
  photo: "/founder.jpg", // TODO: adicionar foto em public/founder.jpg
  bio: [
    "Comecei editando vídeo no quarto, sem equipamento bom e sem ninguém pra ensinar o caminho das pedras.",
    "Criei a Editify pra ser o que eu queria ter tido lá no começo: um lugar que mostra que edição de vídeo não é hobby — é profissão. E que dá pra viver bem disso.",
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/editify", handle: "@editify" },
    { label: "YouTube", href: "https://youtube.com/@editify", handle: "@editify" },
    { label: "TikTok", href: "https://tiktok.com/@editify", handle: "@editify" },
  ],
} as const;

export const BRAND_SOCIALS = FOUNDER.socials;
