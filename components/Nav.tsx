"use client";

import { useEffect, useState } from "react";
import { ChevronDown, GraduationCap, Users, Briefcase } from "lucide-react";
import { SOLUTIONS } from "@/lib/site";

const ICONS = {
  treinamento: GraduationCap,
  comunidade: Users,
  contratar: Briefcase,
} as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <header
        className="mx-auto max-w-6xl rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(12,12,12,0.8)" : "rgba(12,12,12,0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: scrolled
            ? "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(227,6,19,0.06)"
            : "none",
        }}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-5 h-[58px] sm:h-[64px]">
          <a
            href="#top"
            aria-label="Editify"
            className="shrink-0 inline-flex items-center gap-2.5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Editify"
              width={36}
              height={36}
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
            />
            <span className="font-[family-name:var(--font-display)] text-[20px] sm:text-[22px] tracking-tight text-white leading-none">
              EDITIFY
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {/* Soluções dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="inline-flex items-center gap-1 text-[14px] font-medium text-white/70 hover:text-white transition-colors">
                Soluções
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>
              {open && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[320px]">
                  <div
                    className="rounded-2xl p-2 border border-white/10"
                    style={{
                      background: "rgba(14,14,14,0.96)",
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
                    }}
                  >
                    {SOLUTIONS.map((s) => {
                      const Icon = ICONS[s.id];
                      return (
                        <a
                          key={s.id}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 rounded-xl p-3 hover:bg-white/5 transition-colors"
                        >
                          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-editify-accent/12 text-editify-accent shrink-0">
                            <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                          </span>
                          <span>
                            <span className="block text-[14px] font-semibold text-white leading-tight">
                              {s.name}
                            </span>
                            <span className="block text-[12px] text-editify-muted leading-snug mt-0.5">
                              {s.tagline}
                            </span>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#resultados"
              className="text-[14px] font-medium text-white/70 hover:text-white transition-colors"
            >
              Resultados
            </a>
            <a
              href="#fundador"
              className="text-[14px] font-medium text-white/70 hover:text-white transition-colors"
            >
              Fundador
            </a>
          </nav>

          <a
            href={SOLUTIONS[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center bg-editify-accent text-white text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] px-4 sm:px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,6,19,0.6)] hover:-translate-y-px"
            style={{ boxShadow: "0 8px 24px rgba(227,6,19,0.3)" }}
          >
            Começar
          </a>
        </div>
      </header>
    </div>
  );
}
