"use client";

import { motion } from "framer-motion";
import { FOUNDER } from "@/lib/site";
import { socialIcon } from "./SocialIcons";

export default function Founder() {
  return (
    <section
      id="fundador"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0c0c0c 0%, #050505 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* glow vermelho atrás da foto */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(227,6,19,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="relative w-full aspect-[4/5] max-w-[440px] mx-auto lg:mx-0 rounded-[28px] overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FOUNDER.photo}
                alt={FOUNDER.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 100%)",
                }}
              />
              {/* nome sobre a foto */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-[family-name:var(--font-display)] text-[32px] leading-none uppercase text-white">
                  {FOUNDER.name}
                </p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-editify-accent">
                  {FOUNDER.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-editify-accent"
            >
              Quem tá por trás
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-4 font-[family-name:var(--font-display)] uppercase text-white leading-[0.98] tracking-[-0.01em] text-[clamp(1.85rem,4.5vw,3rem)]"
              style={{ textWrap: "balance" }}
            >
              {FOUNDER.headline}
            </motion.h2>

            <div className="mt-6 space-y-4 max-w-[560px]">
              {FOUNDER.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.16 + i * 0.1 }}
                  className="text-[15px] sm:text-[16px] leading-relaxed text-editify-muted"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Números de autoridade */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-8 grid grid-cols-3 gap-4 max-w-[520px]"
            >
              {FOUNDER.founderStats.map((st) => (
                <div
                  key={st.label}
                  className="rounded-2xl bg-white/[0.03] border border-white/8 p-4"
                >
                  <div className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,3vw,2.25rem)] leading-none text-editify-accent">
                    {st.value}
                  </div>
                  <p className="mt-1.5 text-[11px] sm:text-[12px] text-editify-muted leading-snug">
                    {st.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {FOUNDER.socials.map((s) => {
                const Icon = socialIcon(s.label);
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[14px] font-medium text-white/80 hover:text-white hover:border-editify-accent/50 hover:bg-editify-accent/10 transition-all"
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
