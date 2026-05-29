"use client";

import { motion } from "framer-motion";
import { FOUNDER } from "@/lib/site";
import { socialIcon } from "./SocialIcons";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.6, delay },
});

export default function Founder() {
  return (
    <section id="fundador" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Foto */}
          <motion.div {...fadeUp(0)} className="relative">
            <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto lg:mx-0 rounded-[28px] overflow-hidden border border-line shadow-[0_30px_80px_rgba(15,15,20,0.15)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={FOUNDER.photo} alt={FOUNDER.name} className="absolute inset-0 w-full h-full object-cover" />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5"
                style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.82))" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-[family-name:var(--font-display)] text-[32px] leading-none uppercase text-white">
                  {FOUNDER.name}
                </p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/75">
                  {FOUNDER.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
              Quem construiu a casa
            </motion.p>
            <motion.h2
              {...fadeUp(0.08)}
              className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.98] tracking-[-0.01em] text-[clamp(1.85rem,4.5vw,3rem)]"
              style={{ textWrap: "balance" }}
            >
              {FOUNDER.headline}
            </motion.h2>

            <div className="mt-6 space-y-4 max-w-[560px]">
              {FOUNDER.bio.map((p, i) => (
                <motion.p key={i} {...fadeUp(0.16 + i * 0.08)} className="text-[15px] sm:text-[16px] leading-relaxed text-muted">
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div {...fadeUp(0.34)} className="mt-8 grid grid-cols-3 gap-4 max-w-[540px]">
              {FOUNDER.founderStats.map((st) => (
                <div key={st.label} className="rounded-2xl bg-white border border-line p-4">
                  <div className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.1rem)] leading-none text-accent">
                    {st.value}
                  </div>
                  <p className="mt-1.5 text-[11px] sm:text-[12px] text-muted leading-snug">{st.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.44)} className="mt-8 flex flex-wrap gap-3">
              {FOUNDER.socials.map((s) => {
                const Icon = socialIcon(s.label);
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-3 text-[14px] font-medium text-ink/75 hover:text-accent hover:border-accent/40 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {s.handle}
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
