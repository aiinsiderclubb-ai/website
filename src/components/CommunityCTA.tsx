"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { siteConfig } from "@landing/data/content";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { useI18n } from "@landing/context/i18n-context";

export default function CommunityCTA() {
  const { t } = useI18n();

  return (
    <section id="community" className="section-padding relative overflow-hidden hud-grid">
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 15%, rgba(168,85,247,0.18) 0%, rgba(168,85,247,0.06) 40%, transparent 75%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative text-center hud-frame hud-scan hud-panel rounded-[2rem] p-8 sm:p-10 md:p-12 overflow-hidden"
          style={{ "--card-glow": "rgba(168,85,247,0.35)" } as CSSProperties}
        >
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#22d3ee]/70 to-transparent" />

          <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md border border-cyan-400/30 bg-cyan-400/10 text-[10px] text-cyan-200 uppercase tracking-[0.14em]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse-glow" />
            Live community
          </div>

          <motion.span
            variants={fadeInUp}
            custom={0}
            className="hud-badge mb-6"
          >
            {t.communityCta.badge}
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="hud-title text-3xl sm:text-4xl lg:text-5xl mb-5"
          >
            {t.communityCta.title}{" "}
            <span className="gradient-text">{t.communityCta.titleHighlight}</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="hud-subtitle text-base sm:text-lg mb-8 max-w-2xl mx-auto"
          >
            {t.communityCta.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            custom={3}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left"
          >
            {[
              { n: "6,000+", l: "members" },
              { n: "24/7", l: "activity" },
              { n: "120+", l: "insights / week" },
              { n: "4.9/5", l: "community score" },
            ].map((kpi) => (
              <div key={kpi.l} className="hud-panel rounded-xl p-3 sm:p-3.5">
                <div className="text-lg sm:text-xl font-display font-bold gradient-text leading-none">{kpi.n}</div>
                <div className="text-[11px] sm:text-xs text-[var(--color-text-muted)] mt-1 uppercase tracking-wide">{kpi.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} custom={3}>
            <a
              href={siteConfig.telegram}
              className="group inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-gradient-to-r from-[#a855f7] via-[#7c3aed] to-[#f97316] text-white font-semibold rounded-xl hover:shadow-[0_0_34px_rgba(34,211,238,0.30)] transition-all duration-300 text-sm sm:text-base"
            >
              {t.communityCta.joinBtn}
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={4}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-7"
          >
            {[t.communityCta.label1, t.communityCta.label2, t.communityCta.label3, t.communityCta.label4].map(
              (label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
                >
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {label}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
