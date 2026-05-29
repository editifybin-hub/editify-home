"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Números", href: "#numeros" },
  { label: "Jornada", href: "#jornada" },
  { label: "Fundador", href: "#fundador" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <header
        className="mx-auto max-w-6xl rounded-full transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(15,15,20,0.08)",
          boxShadow: scrolled ? "0 12px 40px rgba(15,15,20,0.08)" : "none",
        }}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-5 h-[56px] sm:h-[64px]">
          <a href="#top" aria-label="Editify" className="shrink-0 inline-flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/favicon.png" alt="Editify" width={32} height={32} className="h-8 w-8 object-contain" />
            <span
              className="text-[20px] font-bold leading-none text-ink"
              style={{ fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif", letterSpacing: "-0.02em" }}
            >
              Editify
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-ink/65 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#ecossistema"
            className="shrink-0 inline-flex items-center gap-2 text-ink text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.08em] px-4 sm:px-5 py-2.5 rounded-full border border-ink/15 hover:border-accent hover:text-accent transition-all duration-300"
          >
            Conhecer
          </a>
        </div>
      </header>
    </div>
  );
}
