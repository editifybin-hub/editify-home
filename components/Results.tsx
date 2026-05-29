"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TRANSFORMATIONS, AVATARS } from "@/lib/site";

export default function Results() {
  // subconjunto duplicado pro loop contínuo do marquee (leve)
  const marqueeBase = AVATARS.slice(0, 32);
  const marquee = [...marqueeBase, ...marqueeBase];

  return (
    <section
      id="resultados"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden"
    >
      {/* glow vermelho lateral */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(227,6,19,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-editify-accent"
          >
            Não é promessa. É histórico.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-white leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Gente de verdade,
            <br />
            <span className="text-editify-accent">resultado de verdade.</span>
          </motion.h2>
        </div>

        {/* Banner destaque (Alexandre) */}
        {TRANSFORMATIONS.filter((t) => t.featured).map((t) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative mt-14 rounded-3xl overflow-hidden p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10"
            style={{
              background: "linear-gradient(120deg, #1a0305 0%, #0a0a0a 70%)",
              border: "1px solid rgba(227,6,19,0.4)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -left-10 w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(227,6,19,0.22) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />
            <div className="relative flex items-center gap-3 lg:w-48 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.avatar}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/10 bg-editify-surface"
              />
              <div>
                <p className="font-semibold text-white leading-tight">
                  {t.name}
                </p>
                <p className="text-[13px] text-editify-muted">{t.age} anos</p>
              </div>
            </div>

            <div className="relative flex items-baseline gap-3 flex-1">
              <span className="text-[15px] text-white/40 line-through">
                {t.before}
              </span>
              <ArrowRight className="w-5 h-5 text-editify-accent self-center" />
              <span className="font-[family-name:var(--font-display)] text-white leading-none text-[clamp(3rem,7vw,4.75rem)]">
                {t.after}
              </span>
              <span className="text-[14px] font-medium text-editify-muted">
                /mês
              </span>
            </div>

            <p className="relative text-editify-muted leading-relaxed text-[15px] sm:text-[16px] lg:max-w-[260px] lg:border-l lg:border-white/10 lg:pl-6">
              “{t.quote}”
            </p>
          </motion.div>
        ))}

        {/* 3 cards iguais */}
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {TRANSFORMATIONS.filter((t) => !t.featured).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden p-6 sm:p-7 flex flex-col"
              style={{
                background: "linear-gradient(180deg, #101010 0%, #070707 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/10 bg-editify-surface"
                />
                <div>
                  <p className="font-semibold text-white leading-tight text-[15px]">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-editify-muted">{t.age} anos</p>
                </div>
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-[13px] text-white/40 line-through">
                  {t.before}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-editify-accent self-center" />
                <span className="font-[family-name:var(--font-display)] text-white leading-none text-[clamp(1.9rem,4vw,2.5rem)]">
                  {t.after}
                </span>
                <span className="text-[12px] font-medium text-editify-muted">
                  /mês
                </span>
              </div>

              <p className="mt-4 text-[13px] leading-relaxed text-editify-muted">
                “{t.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee de avatares reais */}
      <div className="mt-16 sm:mt-20">
        <p className="text-center text-[13px] text-editify-muted mb-6">
          Junte-se a uma comunidade de editores que já tão na jornada
        </p>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex gap-3 w-max"
            style={{ animation: "editify-marquee 60s linear infinite" }}
          >
            {marquee.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt=""
                className="w-14 h-14 rounded-full object-cover border border-white/8 bg-editify-surface shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
