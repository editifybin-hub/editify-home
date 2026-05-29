"use client";

import { Fragment } from "react";
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
    <section id="ecossistema" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            O ecossistema
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.94] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4.25rem)]"
          >
            Não é um curso.
            <br />
            <span className="text-accent">É um ecossistema.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed">
            Três frentes que se conectam e alimentam uma à outra. O editor{" "}
            <span className="text-ink font-semibold">aprende</span> no Treinamento,{" "}
            <span className="text-ink font-semibold">evolui</span> na Comunidade e é{" "}
            <span className="text-ink font-semibold">contratado</span> no Contratar.
            Quem chega no fim vira a prova viva pra quem tá começando.
          </motion.p>
        </div>

        {/* pilares conectados */}
        <div className="mt-14 flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-2.5">
          {PILLARS.map((p, i) => (
            <Fragment key={p.id}>
              <motion.a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp(0.1 + i * 0.12)}
                className="group relative flex-1 flex flex-col rounded-[26px] bg-white border border-line p-7 sm:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
                style={{ boxShadow: "0 10px 40px rgba(15,15,20,0.05)" }}
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-1" style={{ background: "var(--color-accent)" }} />

                <div className="flex items-start justify-between">
                  <span className="font-[family-name:var(--font-display)] text-[40px] leading-none text-ink/10">
                    {p.step}
                  </span>
                  <span className="rounded-full bg-soft border border-line text-muted text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1">
                    {p.serves}
                  </span>
                </div>

                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{p.role}</p>
                <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-[34px] leading-none uppercase text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-[12px] font-medium text-muted/80">{p.domain}</p>

                <p className="mt-4 text-[14px] leading-relaxed text-muted flex-1">{p.blurb}</p>

                <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,4vw,2.4rem)] leading-none text-accent">
                      {p.metric.value}
                    </div>
                    <p className="mt-1 text-[12px] text-muted">{p.metric.label}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[13px] font-bold text-ink group-hover:text-accent transition-colors">
                    Visitar
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </motion.a>

              {i < PILLARS.length - 1 && (
                <div aria-hidden className="hidden lg:flex items-center justify-center w-6 shrink-0">
                  <span className="text-ink/20 text-xl">→</span>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
