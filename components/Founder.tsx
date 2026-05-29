"use client";

import { motion } from "framer-motion";
import { FOUNDER } from "@/lib/site";
import { socialIcon } from "./SocialIcons";

export default function Founder() {
  return (
    <section
      id="fundador"
      className="relative py-24 sm:py-32 scroll-mt-24 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative order-first"
          >
            <div
              className="relative w-full aspect-[4/5] max-w-[420px] mx-auto lg:mx-0 rounded-[28px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #121212 0%, #070707 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FOUNDER.photo}
                alt={FOUNDER.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* fallback / overlay quando não há foto */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <span className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,4rem)] leading-[0.9] uppercase text-white/10">
                  {FOUNDER.name}
                </span>
              </div>
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)",
                }}
              />
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
              className="mt-4 font-[family-name:var(--font-display)] uppercase text-white leading-[0.96] tracking-[-0.01em] text-[clamp(2rem,5.5vw,3.5rem)]"
            >
              {FOUNDER.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-1 text-[14px] font-semibold uppercase tracking-[0.12em] text-white/50"
            >
              {FOUNDER.role}
            </motion.p>

            <div className="mt-6 space-y-4 max-w-[560px]">
              {FOUNDER.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="text-[16px] leading-relaxed text-editify-muted"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
