"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroMetrics, rotatingWords, siteConfig } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useI18n } from "@/context/i18n-context";
import dynamic from "next/dynamic";

const NeuralBackground = dynamic(() => import("./NeuralBackground"), {
  ssr: false,
});

function RotatingText() {
  const { lang } = useI18n();
  const words = rotatingWords[lang];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-block h-[1.1em] overflow-hidden align-bottom min-w-[200px] sm:min-w-[300px]">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 gradient-text"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: i === idx ? "0%" : i === (idx - 1 + words.length) % words.length ? "-100%" : "100%",
            opacity: i === idx ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function AnimatedCounter({ target }: { target: string }) {
  const [display, setDisplay] = useState(target);
  const numericPart = target.replace(/[^0-9]/g, "");
  const prefix = target.match(/^[^0-9]*/)?.[0] || "";
  const suffixPart = target.match(/[^0-9]*$/)?.[0] || "";

  useEffect(() => {
    if (!numericPart) return;
    const finalNum = parseInt(numericPart);
    const duration = 2000;
    const steps = 60;
    const increment = finalNum / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), finalNum);
      setDisplay(`${prefix}${current.toLocaleString()}${suffixPart}`);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericPart, prefix, suffixPart]);

  return <span>{display}</span>;
}

export default function Hero() {
  const { t } = useI18n();

  const metricLabels: Record<string, string> = {
    specialists: t.metrics.specialists,
    roi: t.metrics.roi,
    partners: t.metrics.partners,
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <NeuralBackground />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9]/[0.04] rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7c3aed]/[0.04] rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} custom={0} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse-glow" />
              {t.hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-[var(--color-text-primary)]">{t.hero.title1}</span>
            <br />
            <RotatingText />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-lg sm:text-xl text-[var(--color-text-secondary)] font-light leading-relaxed mb-8 max-w-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={3}
            className="grid grid-cols-3 gap-4 sm:gap-8 mb-10 max-w-lg"
          >
            {heroMetrics.map((metric) => (
              <div key={metric.labelKey} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-1">
                  <AnimatedCounter target={metric.value} />
                </div>
                <div className="text-[11px] sm:text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                  {metricLabels[metric.labelKey]}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={4}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/courses"
              className="group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white font-medium rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-all duration-300 text-sm"
            >
              {t.hero.exploreCourses}
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={siteConfig.telegram}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[var(--color-glass-border)] text-[var(--color-text-primary)] font-medium rounded-full hover:bg-[var(--color-glass-bg)] hover:border-[var(--color-accent-border)] transition-all duration-300 text-sm"
            >
              {t.hero.joinCommunity}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] text-xs"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
