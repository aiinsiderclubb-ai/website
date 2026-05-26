"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@landing/data/content";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { useI18n } from "@landing/context/i18n-context";

const perks = [
  { icon: "⚡", key: "label1" as const },
  { icon: "📡", key: "label2" as const },
  { icon: "🤝", key: "label3" as const },
  { icon: "🛡", key: "label4" as const },
];

export default function CommunityCTA() {
  const { t } = useI18n();

  return (
    <section id="community" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
      <div className="absolute inset-0 hud-grid opacity-40 pointer-events-none" />

      {/* Flow ribbons bleeding into section from bridges above */}
      <div className="absolute -top-32 left-[-10%] w-[55%] h-[280px] opacity-70 pointer-events-none hidden md:block">
        <Image src="/images/flow/ribbon-wave.png" alt="" fill className="object-contain object-left-top" sizes="50vw" />
      </div>
      <div className="absolute top-10 right-[-8%] w-[48%] h-[320px] opacity-60 pointer-events-none hidden lg:block">
        <Image src="/images/flow/ribbon-knot.png" alt="" fill className="object-contain object-right" sizes="45vw" />
      </div>
      <div className="absolute bottom-[-60px] left-[15%] w-[70%] h-[200px] opacity-50 pointer-events-none">
        <Image src="/images/flow/ribbon-stream.png" alt="" fill className="object-contain object-bottom" sizes="70vw" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* Outer glow ring */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] opacity-40 blur-sm" />

          <div className="relative hud-frame hud-scan rounded-3xl border border-[var(--color-glass-border)] bg-[var(--color-bg-card)]/90 backdrop-blur-md overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.2) 0%, transparent 65%)",
              }}
            />

            <div className="relative px-6 py-12 sm:px-12 sm:py-16 text-center">
              <motion.div variants={fadeInUp} className="flex justify-center mb-6">
                <span className="hud-badge">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7] animate-pulse-glow" />
                  {t.communityCta.badge}
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="hud-title text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight"
              >
                {t.communityCta.title}{" "}
                <span className="gradient-text block sm:inline">{t.communityCta.titleHighlight}</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="hud-subtitle text-base sm:text-lg max-w-xl mx-auto mb-10">
                {t.communityCta.subtitle}
              </motion.p>

              {/* Live stats strip */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-10"
              >
                {[
                  { n: "6,000+", l: "Members" },
                  { n: "24/7", l: "Support" },
                  { n: "350+", l: "Daily msgs" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="hud-panel rounded-xl px-3 py-3 border border-[var(--color-glass-border)]"
                    style={{ "--card-glow": "rgba(168,85,247,0.25)" } as React.CSSProperties}
                  >
                    <div className="text-lg sm:text-xl font-display font-bold gradient-text">{s.n}</div>
                    <div className="text-[10px] sm:text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5">
                      {s.l}
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-white font-semibold text-sm sm:text-base overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_56px_rgba(249,115,22,0.45)] transition-shadow duration-300"
                >
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#f97316]"
                    aria-hidden
                  />
                  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <span className="relative z-10">{t.communityCta.joinBtn}</span>
                  <svg
                    className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-2xl mx-auto"
              >
                {perks.map(({ icon, key }) => (
                  <div
                    key={key}
                    className="flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 hud-panel border border-[var(--color-glass-border)] text-xs text-[var(--color-text-secondary)]"
                  >
                    <span className="text-sm" aria-hidden>
                      {icon}
                    </span>
                    <span>{t.communityCta[key]}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
