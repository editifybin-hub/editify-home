"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* glow vermelho ambiente */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] max-w-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(227,6,19,0.16) 0%, rgba(227,6,19,0.05) 32%, transparent 62%)",
            filter: "blur(20px)",
          }}
        />
        {/* grade sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6 text-center pt-28 pb-20">
        <motion.span
          {...fadeUp(0.05)}
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-editify-accent" />
          A casa de quem edita vídeo
        </motion.span>

        <motion.h1
          {...fadeUp(0.15)}
          className="mt-7 font-[family-name:var(--font-display)] uppercase text-white leading-[0.92] tracking-[-0.01em] text-[clamp(2.75rem,9vw,6.5rem)]"
        >
          Edição de vídeo
          <br />
          não é hobby.
          <br />
          <span className="text-editify-accent">É carreira.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="mt-7 mx-auto max-w-[640px] text-[16px] sm:text-[19px] leading-relaxed text-editify-muted"
          style={{ textWrap: "balance" }}
        >
          A Editify é o ecossistema de quem leva edição a sério. Aqui você{" "}
          <span className="text-white font-semibold">aprende a editar</span>, se
          conecta com outros editores e é{" "}
          <span className="text-white font-semibold">
            contratado pra trabalhar
          </span>
          . Tudo num lugar só.
        </motion.p>

        <motion.div
          {...fadeUp(0.45)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#solucoes"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-editify-accent text-white font-bold text-[15px] uppercase tracking-wider px-8 py-[18px] rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(227,6,19,0.5)]"
            style={{ boxShadow: "0 12px 36px rgba(227,6,19,0.35)" }}
          >
            Ver o que a Editify faz
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#fundador"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-[18px] rounded-xl border border-white/12 text-white/80 font-medium text-[15px] hover:bg-white/5 hover:text-white transition-all"
          >
            Quem tá por trás
          </a>
        </motion.div>
      </div>
    </section>
  );
}
