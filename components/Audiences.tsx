"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AUDIENCES } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Audiences() {
  const { editor, client } = AUDIENCES;

  return (
    <section className="relative py-24 sm:py-32" style={{ background: "#f5f5f7" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            Dois lados, uma casa
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Serve quem edita
            <br />
            <span className="text-accent">e quem contrata.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed">
            A mesma Editify que ensina o editor é a que entrega, pra quem
            contrata, um profissional pronto pra trabalhar. Os dois lados saem ganhando.
          </motion.p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          {/* Pro editor */}
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-[28px] p-8 sm:p-10"
            style={{ background: "var(--color-accent-soft)", border: "1px solid rgba(227,6,19,0.18)" }}
          >
            <span className="inline-flex items-center rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-1.5">
              {editor.tag}
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3.5vw,2.4rem)] leading-[1.02] uppercase text-ink">
              {editor.headline}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {editor.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-accent text-white shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-ink/80 leading-snug">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pro cliente */}
          <motion.div
            {...fadeUp(0.2)}
            className="rounded-[28px] p-8 sm:p-10 text-white"
            style={{ background: "linear-gradient(160deg, #1c1c26 0%, #0f0f14 70%)" }}
          >
            <span className="inline-flex items-center rounded-full bg-white text-ink text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-1.5">
              {client.tag}
            </span>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(1.7rem,3.5vw,2.4rem)] leading-[1.02] uppercase text-white">
              {client.headline}
            </h3>
            <ul className="mt-6 space-y-3.5">
              {client.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3">
                  <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-accent text-white shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] text-white/75 leading-snug">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
