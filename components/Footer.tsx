import { FAMILY, FOUNDER } from "@/lib/site";
import { socialIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative" style={{ background: "#0f0f14" }}>
      {/* fecho de marca (sem CTA de venda) */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-20 sm:py-28 text-center">
        <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">Ecossistema Editify</p>
        <h2 className="mt-5 font-[family-name:var(--font-display)] uppercase text-white leading-[0.95] tracking-[-0.01em] text-[clamp(2.5rem,7vw,5rem)]">
          Feito por editores,
          <br />
          <span className="text-accent">pra editores.</span>
        </h2>
        <p className="mt-6 mx-auto max-w-[560px] text-[15px] sm:text-[16px] text-white/60 leading-relaxed">
          Treinamento, comunidade e contratação no mesmo lugar. A casa completa
          de quem edita vídeo no Brasil.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
          {FAMILY.map((f) => (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-white/80 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
            >
              {f.name}
            </a>
          ))}
        </div>
      </div>

      {/* barra legal */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-9 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.png" alt="Editify" width={28} height={28} className="h-7 w-7 object-contain" />
            <span
              className="text-[18px] font-bold leading-none text-white"
              style={{ fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif", letterSpacing: "-0.02em" }}
            >
              Editify
            </span>
          </div>

          <div className="flex items-center gap-3">
            {FOUNDER.socials.map((s) => {
              const Icon = socialIcon(s.label);
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-accent/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
        <p className="pb-9 text-center text-[12px] text-white/40 leading-relaxed px-4">
          © {year} Editify · CNPJ 53.169.343/0001-40 · desde 2022
          <br />
          A casa do editor de vídeo brasileiro.
        </p>
      </div>
    </footer>
  );
}
