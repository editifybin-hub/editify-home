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

        {/* Cards de transformação — featured grande + 3 menores */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {TRANSFORMATIONS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl overflow-hidden p-7 sm:p-8 flex flex-col ${
                t.featured ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-6"
              }`}
              style={{
                background: t.featured
                  ? "linear-gradient(160deg, #1a0305 0%, #0a0a0a 60%)"
                  : "linear-gradient(180deg, #101010 0%, #070707 100%)",
                border: t.featured
                  ? "1px solid rgba(227,6,19,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10 bg-editify-surface"
                />
                <div>
                  <p className="font-semibold text-white leading-tight">
                    {t.name}
                  </p>
                  <p className="text-[13px] text-editify-muted">
                    {t.age} anos
                  </p>
                </div>
              </div>

              <div
                className={`flex items-center gap-3 ${t.featured ? "mt-8" : "mt-6"}`}
              >
                <span className="text-[15px] text-white/40 line-through">
                  {t.before}
                </span>
                <ArrowRight className="w-4 h-4 text-editify-accent" />
                <span
                  className={`font-[family-name:var(--font-display)] text-white leading-none ${
                    t.featured
                      ? "text-[clamp(3rem,7vw,5rem)]"
                      : "text-[clamp(2rem,4vw,2.75rem)]"
                  }`}
                >
                  {t.after}
                  <span className="text-[14px] font-sans font-medium text-editify-muted">
                    /mês
                  </span>
                </span>
              </div>

              <p
                className={`mt-auto pt-6 text-editify-muted leading-relaxed ${
                  t.featured ? "text-[16px] sm:text-[17px]" : "text-[14px]"
                }`}
              >
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
