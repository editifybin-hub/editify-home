"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Timeline() {
  return (
    <section id="jornada" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            A jornada
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Três anos
            <br />
            <span className="text-accent">construindo a casa.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed">
            A Editify não nasceu ecossistema. Ela virou um — peça por peça, desde 2022.
          </motion.p>
        </div>

        {/* timeline horizontal (desktop) */}
        <div className="mt-16 hidden md:block relative">
          <div
            aria-hidden
            className="absolute top-[7px] left-0 right-0 h-0.5"
            style={{ background: "linear-gradient(90deg, var(--color-accent), rgba(227,6,19,0.15))" }}
          />
          <div className="grid grid-cols-4 gap-6">
            {TIMELINE.map((t, i) => (
              <motion.div key={t.year} {...fadeUp(0.1 + i * 0.1)} className="relative">
                <span className="block w-4 h-4 rounded-full bg-accent border-[3px] border-white" style={{ boxShadow: "0 0 0 3px rgba(227,6,19,0.15)" }} />
                <p className="mt-5 font-[family-name:var(--font-display)] text-[34px] leading-none text-ink">{t.year}</p>
                <h3 className="mt-2 text-[16px] font-bold text-ink">{t.title}</h3>
                <p className="mt-2 text-[14px] text-muted leading-relaxed pr-3">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* timeline vertical (mobile) */}
        <div className="mt-12 md:hidden relative pl-7">
          <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-0.5" style={{ background: "linear-gradient(180deg, var(--color-accent), rgba(227,6,19,0.15))" }} />
          <div className="space-y-8">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[28px] top-1 w-4 h-4 rounded-full bg-accent border-[3px] border-white" style={{ boxShadow: "0 0 0 3px rgba(227,6,19,0.15)" }} />
                <p className="font-[family-name:var(--font-display)] text-[30px] leading-none text-ink">{t.year}</p>
                <h3 className="mt-1.5 text-[16px] font-bold text-ink">{t.title}</h3>
                <p className="mt-1.5 text-[14px] text-muted leading-relaxed">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
