"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TRANSFORMATIONS } from "@/lib/site";
import AvatarMarquee from "./AvatarMarquee";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, delay },
});

export default function Results() {
  const featured = TRANSFORMATIONS.find((t) => t.featured);
  const rest = TRANSFORMATIONS.filter((t) => !t.featured);

  return (
    <section id="resultados" className="relative py-24 sm:py-32 scroll-mt-24" style={{ background: "#f5f5f7" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            Resultados reais
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            O que acontece
            <br />
            <span className="text-accent">com quem entra.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed">
            Hoje, quem passa pela Editify ganha em média{" "}
            <span className="text-ink font-semibold">R$15.860</span> por mês
            editando vídeo. Aqui estão alguns dos alunos e quanto eles faturam.
          </motion.p>
        </div>

        {/* destaque */}
        {featured && (
          <motion.div
            {...fadeUp(0.1)}
            className="relative mt-14 rounded-3xl overflow-hidden p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 bg-white border border-line"
            style={{ boxShadow: "0 20px 60px rgba(15,15,20,0.06)" }}
          >
            <div className="relative flex items-center gap-3 lg:w-48 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featured.avatar} alt={featured.name} className="w-14 h-14 rounded-full object-cover border border-line bg-soft" />
              <div>
                <p className="font-semibold text-ink leading-tight">{featured.name}</p>
                <p className="text-[13px] text-muted">{featured.age} anos</p>
              </div>
            </div>

            <div className="relative flex items-baseline gap-3 flex-1">
              <span className="text-[15px] text-muted/60 line-through">{featured.before}</span>
              <ArrowRight className="w-5 h-5 text-accent self-center" />
              <span className="font-[family-name:var(--font-display)] text-ink leading-none text-[clamp(3rem,7vw,4.75rem)]">
                {featured.after}
              </span>
              <span className="text-[14px] font-medium text-muted">/mês</span>
            </div>

            <p className="relative text-muted leading-relaxed text-[15px] sm:text-[16px] lg:max-w-[260px] lg:border-l lg:border-line lg:pl-6">
              “{featured.quote}”
            </p>
          </motion.div>
        )}

        {/* demais */}
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {rest.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp(i * 0.1)}
              className="rounded-3xl p-6 sm:p-7 flex flex-col bg-white border border-line"
            >
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-line bg-soft" />
                <div>
                  <p className="font-semibold text-ink leading-tight text-[15px]">{t.name}</p>
                  <p className="text-[12px] text-muted">{t.age} anos</p>
                </div>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-[13px] text-muted/60 line-through">{t.before}</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent self-center" />
                <span className="font-[family-name:var(--font-display)] text-ink leading-none text-[clamp(1.9rem,4vw,2.5rem)]">
                  {t.after}
                </span>
                <span className="text-[12px] font-medium text-muted">/mês</span>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-muted">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* marquee */}
      <div className="mt-16 sm:mt-20">
        <AvatarMarquee reverse size={52} />
        <p className="mt-6 text-center text-[13px] text-muted">
          Alguns dos editores que já fazem parte da Editify.
        </p>
      </div>
    </section>
  );
}
