"use client";

import { motion } from "framer-motion";

const STEPS = [
  { n: "01", verb: "Aprende", text: "a editar de verdade e a cobrar por isso" },
  { n: "02", verb: "Conecta", text: "com editores que tão na mesma jornada" },
  { n: "03", verb: "Trabalha", text: "com clientes reais e constrói carreira" },
];

export default function Manifesto() {
  return (
    <section className="relative py-24 sm:py-32 border-y border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-bold tracking-[0.3em] uppercase text-editify-accent text-center"
        >
          O ecossistema
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-5 text-center font-[family-name:var(--font-display)] uppercase text-white leading-[0.98] tracking-[-0.01em] text-[clamp(2rem,5.5vw,3.75rem)]"
        >
          Ninguém vira pro <span className="text-editify-accent">do dia pra noite.</span>
          <br className="hidden sm:block" />
          Mas tem um caminho.
        </motion.h2>

        <div className="mt-14 grid gap-px sm:grid-cols-3 rounded-3xl overflow-hidden border border-white/[0.07] bg-white/[0.04]">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="bg-editify-bg p-8 sm:p-9 flex flex-col gap-4"
            >
              <span className="font-[family-name:var(--font-display)] text-[44px] leading-none text-white/15">
                {s.n}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-[28px] leading-none uppercase text-white">
                {s.verb}
              </h3>
              <p className="text-[15px] leading-relaxed text-editify-muted">
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-[15px] sm:text-[16px] text-editify-muted max-w-[560px] mx-auto"
          style={{ textWrap: "balance" }}
        >
          A Editify existe pra cada uma dessas etapas. Você escolhe por onde
          começar.
        </motion.p>
      </div>
    </section>
  );
}
