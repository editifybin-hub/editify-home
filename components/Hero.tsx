"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PILLARS } from "@/lib/site";
import AvatarMarquee from "./AvatarMarquee";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-14 sm:pt-44 sm:pb-20">
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center">
        <motion.span
          {...fadeUp(0.05)}
          className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Ecossistema Editify · desde 2022
        </motion.span>

        <motion.h1
          {...fadeUp(0.15)}
          className="mt-7 font-[family-name:var(--font-display)] uppercase text-ink tracking-[-0.015em] flex flex-col items-center"
        >
          <span className="block leading-[0.9] text-[clamp(3rem,9vw,6.5rem)]">
            Edição de vídeos:
          </span>
          <span className="block leading-[1] mt-2 text-[clamp(1.65rem,4.6vw,3.25rem)]">
            o que era hobby <span className="text-accent">virou profissão</span>
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-7 mx-auto max-w-[640px] text-[clamp(1.05rem,2.4vw,1.45rem)] font-semibold text-ink leading-snug"
        >
          A Editify é um ecossistema inteiro que forma, conecta e emprega
          editores profissionais.
        </motion.p>

        {/* fluxo do ecossistema */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-[13px] sm:text-[14px]"
        >
          {PILLARS.map((p, i) => (
            <div key={p.id} className="inline-flex items-center gap-2.5">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white border border-line px-4 py-2 font-semibold text-ink hover:border-accent hover:-translate-y-0.5 transition-all duration-300"
                style={{ boxShadow: "0 4px 18px rgba(15,15,20,0.05)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {p.name}
              </a>
              {i < PILLARS.length - 1 && (
                <span className="text-ink/25 select-none">→</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.a
          {...fadeUp(0.55)}
          href="#numeros"
          className="mt-10 inline-flex items-center gap-2 text-[13px] font-semibold text-muted hover:text-accent transition-colors"
        >
          Conhece a Editify por dentro
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>

      {/* faixa de editores reais */}
      <motion.div {...fadeUp(0.7)} className="mt-14 sm:mt-20">
        <AvatarMarquee />
        <p className="mt-6 text-center text-[13px] sm:text-[14px] text-muted">
          A nova geração de editores de vídeo do Brasil já tá aqui dentro.
        </p>
      </motion.div>
    </section>
  );
}
