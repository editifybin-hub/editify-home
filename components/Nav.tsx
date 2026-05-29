"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Soluções", href: "#solucoes" },
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
        className="mx-auto max-w-6xl rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(14,14,14,0.72)" : "rgba(14,14,14,0.4)",
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

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#solucoes"
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
