"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase } from "lucide-react";

const STEPS = [
  {
    n: "01",
    verb: "Aprende",
    text: "Você domina a edição de verdade e aprende a cobrar pelo seu trabalho.",
    Icon: GraduationCap,
    solution: "Treinamento",
  },
  {
    n: "02",
    verb: "Conecta",
    text: "Entra numa comunidade de editores que tá na mesma jornada que você.",
    Icon: Users,
    solution: "Comunidade",
  },
  {
    n: "03",
    verb: "Trabalha",
    text: "É contratado por clientes reais e constrói uma carreira de verdade.",
    Icon: Briefcase,
    solution: "Contratar",
  },
];

export default function Manifesto() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* glow vermelho ambiente pra tirar o preto chapado */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[1100px] h-[700px] max-w-full"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(227,6,19,0.16) 0%, rgba(227,6,19,0.04) 38%, transparent 68%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-editify-accent/30 bg-editify-accent/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase text-editify-accent"
          >
            O caminho
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 font-[family-name:var(--font-display)] uppercase text-white leading-[0.95] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4.25rem)]"
            style={{ textWrap: "balance" }}
          >
            Ninguém vira profissional da noite pro dia.{" "}
            <span className="text-editify-accent">Mas tem um caminho.</span>
          </motion.h2>
        </div>

        {/* Stepper */}
        <div className="relative mt-16 sm:mt-20">
          {/* linha conectora (desktop) */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[34px] left-[16%] right-[16%] h-px"
            style={{
              background:
                "linear-gradient(90deg, rgba(227,6,19,0.1), rgba(227,6,19,0.6), rgba(227,6,19,0.1))",
            }}
          />

          <div className="grid gap-6 lg:gap-8 sm:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.12 + i * 0.14 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* node numerado */}
                <div className="relative z-10 flex items-center justify-center w-[68px] h-[68px] rounded-full bg-editify-accent shrink-0"
                  style={{
                    boxShadow:
                      "0 0 0 6px rgba(227,6,19,0.12), 0 12px 30px rgba(227,6,19,0.35)",
                  }}
                >
                  <span className="font-[family-name:var(--font-display)] text-[26px] leading-none text-white">
                    {s.n}
                  </span>
                </div>

                {/* card */}
                <div
                  className="mt-6 w-full rounded-3xl p-7 sm:p-8 flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(180deg, #161616 0%, #0a0a0a 100%)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-editify-accent/12 text-editify-accent">
                    <s.Icon className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-[30px] leading-none uppercase text-white">
                    {s.verb}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-editify-muted">
                    {s.text}
                  </p>
                  <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                    {s.solution}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
