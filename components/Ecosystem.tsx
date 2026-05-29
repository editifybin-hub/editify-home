"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PILLARS } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Ecosystem() {
  return (
    <section id="ecossistema" className="relative py-28 sm:py-36 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* cabeçalho */}
        <div className="max-w-2xl">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            Como a Editify funciona
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.92] tracking-[-0.01em] text-[clamp(2.75rem,8vw,5.5rem)]"
          >
            Tudo em
            <br />
            <span className="text-accent">três passos.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-6 text-[16px] sm:text-[18px] text-muted leading-relaxed">
            São três partes que trabalham juntas. Uma leva pra outra, do seu
            primeiro vídeo até você viver de edição.
          </motion.p>
        </div>

        {/* passos */}
        <div className="relative mt-20 sm:mt-28">
          {/* trilho que conecta os passos (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[35px] top-10 bottom-10 w-[3px] rounded-full"
            style={{ background: "linear-gradient(180deg, var(--color-accent), rgba(227,6,19,0.12))" }}
          />

          <div className="space-y-16 sm:space-y-24">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.id}
                {...fadeUp(0.05)}
                className="relative grid lg:grid-cols-[112px_1fr] gap-6 lg:gap-14 items-start"
              >
                {/* número */}
                <div className="relative z-10">
                  <span
                    className="flex items-center justify-center w-[72px] h-[72px] rounded-2xl bg-accent text-white font-[family-name:var(--font-display)] text-[40px] leading-none"
                    style={{ boxShadow: "0 0 0 8px rgba(227,6,19,0.08), 0 18px 40px rgba(227,6,19,0.28)" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* conteúdo */}
                <div className="lg:pt-1">
                  <h3 className="font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.005em] text-[clamp(2rem,5vw,3.4rem)]">
                    {p.lead}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="inline-flex items-center gap-2 text-[15px] font-bold text-ink">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {p.name}
                    </span>
                    <span className="text-[13px] text-muted">{p.domain}</span>
                  </div>

                  <p className="mt-5 max-w-2xl text-[16px] sm:text-[18px] text-muted leading-relaxed">
                    {p.blurb}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-5">
                    <div>
                      <div className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3.25rem)] leading-none text-accent">
                        {p.metric.value}
                      </div>
                      <p className="mt-1.5 text-[13px] sm:text-[14px] text-muted">{p.metric.label}</p>
                    </div>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[14px] font-bold text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Visitar {p.name}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
