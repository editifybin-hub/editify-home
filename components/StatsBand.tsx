"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { STATS } from "@/lib/site";
import CountUp from "./CountUp";

export default function StatsBand() {
  return (
    <section
      id="numeros"
      aria-label="Números da Editify"
      className="relative overflow-hidden scroll-mt-24"
      style={{
        background: "linear-gradient(135deg, #e30613 0%, #b00510 55%, #7d0109 100%)",
      }}
    >
      {/* textura sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-[11px] font-bold tracking-[0.3em] uppercase text-white/70"
        >
          A Editify em números
        </motion.p>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="flex items-baseline justify-center gap-1.5">
                <span className="font-[family-name:var(--font-display)] text-white leading-none text-[clamp(2.75rem,7vw,4.5rem)]">
                  <CountUp
                    target={s.target}
                    prefix={"prefix" in s ? s.prefix : ""}
                    decimals={"decimals" in s ? s.decimals : 0}
                    sep={"sep" in s ? s.sep : false}
                  />
                </span>
                {"star" in s && s.star && (
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 -translate-y-1" style={{ color: "#FFD24A", fill: "#FFD24A" }} />
                )}
              </div>
              <p className="mt-2 text-[13px] sm:text-[14px] font-semibold text-white/85 uppercase tracking-wide">
                {s.label}
              </p>
              {"since" in s && s.since && (
                <p className="mt-0.5 text-[11px] text-white/55">{s.since}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
