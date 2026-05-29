import { SOLUTIONS, FOUNDER } from "@/lib/site";
import { socialIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* CTA final */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-20 sm:py-28 text-center">
        <h2 className="font-[family-name:var(--font-display)] uppercase text-white leading-[0.95] tracking-[-0.01em] text-[clamp(2.25rem,7vw,5rem)]">
          Bora levar sua edição
          <br />
          <span className="text-editify-accent">a sério?</span>
        </h2>
        <a
          href={SOLUTIONS[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center bg-editify-accent text-white font-bold text-[15px] uppercase tracking-wider px-9 py-[18px] rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(227,6,19,0.5)]"
          style={{ boxShadow: "0 12px 36px rgba(227,6,19,0.35)" }}
        >
          Começar pelo Treinamento
        </a>
      </div>

      {/* rodapé */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Editify"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="font-[family-name:var(--font-display)] text-[18px] tracking-tight text-white leading-none">
              EDITIFY
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {SOLUTIONS.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-white/60 hover:text-white transition-colors"
              >
                {s.name.replace("Editify", "").trim()}
              </a>
            ))}
          </nav>

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
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/12 text-white/70 hover:text-white hover:border-editify-accent/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
        <p className="pb-8 text-center text-[12px] text-white/35">
          © {year} Editify. Feito por editores, pra editores.
        </p>
      </div>
    </footer>
  );
}
