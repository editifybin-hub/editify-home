"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Users, Briefcase } from "lucide-react";
import { SOLUTIONS } from "@/lib/site";

const ICONS = {
  treinamento: GraduationCap,
  comunidade: Users,
  contratar: Briefcase,
} as const;

export default function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-editify-accent"
          >
            O que a Editify faz
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-white leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Três frentes,
            <br />
            <span className="text-editify-accent">um objetivo:</span> você.
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => {
            const Icon = ICONS[s.id];
            return (
              <motion.a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative flex flex-col rounded-[24px] p-7 sm:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(180deg, #101010 0%, #070707 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(227,6,19,0.22) 0%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-editify-accent/12 text-editify-accent">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {s.verb}
                  </span>
                </div>

                <h3 className="relative mt-6 font-[family-name:var(--font-display)] text-[26px] sm:text-[28px] leading-none uppercase text-white">
                  {s.name}
                </h3>
                <p className="relative mt-2 text-[15px] font-semibold text-white/85">
                  {s.tagline}
                </p>
                <p className="relative mt-3 text-[14px] leading-relaxed text-editify-muted flex-1">
                  {s.description}
                </p>

                <span className="relative mt-7 inline-flex items-center gap-1.5 text-[14px] font-bold text-white group-hover:text-editify-accent transition-colors">
                  {s.cta}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
