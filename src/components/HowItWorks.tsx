"use client";

import { motion } from "framer-motion";
import { howItWorksChips } from "@landing/data/content";
import { getHowItWorks, type HowItWorksIcon } from "@landing/data/content";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { useI18n } from "@landing/context/i18n-context";

const STEP_STYLES: Record<
  HowItWorksIcon,
  { gradient: string; glow: string; accent: string }
> = {
  connect: {
    gradient: "from-[#22d3ee] to-[#a855f7]",
    glow: "rgba(34,211,238,0.32)",
    accent: "#22d3ee",
  },
  compose: {
    gradient: "from-[#a855f7] to-[#ec4899]",
    glow: "rgba(168,85,247,0.35)",
    accent: "#c084fc",
  },
  launch: {
    gradient: "from-[#fb923c] to-[#f97316]",
    glow: "rgba(249,115,22,0.35)",
    accent: "#fb923c",
  },
};

function StepIcon({ type, className }: { type: HowItWorksIcon; className?: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: className ?? "w-7 h-7",
  };

  if (type === "connect") {
    return (
      <svg {...props}>
        <path d="M12 22v-4" />
        <path d="M8 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4" />
        <path d="M16 18h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4" />
        <circle cx="12" cy="6" r="3" />
        <path d="M8 10H4" />
        <path d="M20 10h-4" />
      </svg>
    );
  }
  if (type === "compose") {
    return (
      <svg {...props}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h4M17 10.5v4M6.5 10v4M12 10v4" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <path d="M4.5 16.5c4-6 11-6 15 0" />
      <path d="M12 12V4" />
      <path d="M9 7l3-3 3 3" />
      <path d="M7 20h10" />
    </svg>
  );
}

function StepDiagram({ type }: { type: HowItWorksIcon }) {
  if (type === "connect") {
    return (
      <svg viewBox="0 0 120 48" className="w-full h-12 text-[var(--color-text-muted)]" aria-hidden>
        <circle cx="18" cy="24" r="8" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
        <text x="18" y="27" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.7">API</text>
        <circle cx="60" cy="24" r="10" fill="#a855f7" opacity="0.2" stroke="#a855f7" strokeWidth="1.2" />
        <text x="60" y="27" textAnchor="middle" fontSize="7" fill="#c084fc">n8n</text>
        <circle cx="102" cy="24" r="8" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1" />
        <text x="102" y="27" textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.7">CRM</text>
        <line x1="26" y1="24" x2="50" y2="24" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="70" y1="24" x2="94" y2="24" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    );
  }
  if (type === "compose") {
    return (
      <svg viewBox="0 0 120 48" className="w-full h-12" aria-hidden>
        <rect x="8" y="8" width="28" height="14" rx="3" fill="#a855f7" opacity="0.2" stroke="#a855f7" strokeWidth="1" />
        <text x="22" y="18" textAnchor="middle" fontSize="6" fill="#c084fc">prompt</text>
        <rect x="44" y="8" width="28" height="14" rx="3" fill="#ec4899" opacity="0.15" stroke="#ec4899" strokeWidth="1" />
        <text x="58" y="18" textAnchor="middle" fontSize="6" fill="#f472b6">flow</text>
        <rect x="80" y="8" width="28" height="14" rx="3" fill="#06b6d4" opacity="0.15" stroke="#06b6d4" strokeWidth="1" />
        <text x="94" y="18" textAnchor="middle" fontSize="6" fill="#22d3ee">tool</text>
        <path d="M22 22 L22 30 L58 30 L58 22" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.5" />
        <path d="M58 22 L58 30 L94 30 L94 22" stroke="#ec4899" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="60" cy="38" r="4" fill="#a855f7" opacity="0.4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 48" className="w-full h-12" aria-hidden>
      <path d="M12 36 L30 20 L48 28 L66 14 L84 22 L102 10" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="102" cy="10" r="4" fill="#f97316" opacity="0.5" />
      <rect x="8" y="38" width="104" height="6" rx="2" fill="currentColor" opacity="0.08" />
      <text x="60" y="43" textAnchor="middle" fontSize="6" fill="#fb923c" opacity="0.9">ROI ↑</text>
    </svg>
  );
}

export default function HowItWorks() {
  const { t, lang } = useI18n();
  const steps = getHowItWorks(lang);

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <motion.div className="absolute inset-0 bg-[var(--color-bg-secondary)]" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f97316]/45 to-transparent" aria-hidden />
      <div className="absolute left-[8%] top-24 h-20 w-20 rotate-45 border border-[#a855f7]/20 hidden md:block" aria-hidden />
      <div className="absolute right-[10%] bottom-24 h-16 w-16 rotate-45 border border-[#f97316]/20 hidden md:block" aria-hidden />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-badge text-[#c084fc] text-[11px] font-medium uppercase tracking-[0.2em] mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7]" />
            {t.howItWorks.badge}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4 tracking-tight"
          >
            {t.howItWorks.title}{" "}
            <span className="gradient-text">{t.howItWorks.titleHighlight}</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t.howItWorks.subtitle}
          </motion.p>
        </motion.div>

        {/* Desktop pipeline connector */}
        <div className="hidden md:flex items-center justify-center mb-8 px-8 max-w-4xl mx-auto" aria-hidden>
          {steps.map((_, i) => (
            <motion.div key={i} className="flex items-center flex-1">
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold border-2 shrink-0 ${
                  i === 0
                    ? "border-[#a855f7] bg-[#a855f7]/20 text-[#e9d5ff]"
                    : "border-[var(--color-glass-border)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)]"
                }`}
              >
                {i + 1}
              </div>
              {i < 2 && (
                <div className="flex-1 mx-2 h-px relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] opacity-40"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                    style={{ transformOrigin: "left" }}
                  />
                  <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-[#f97316]" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M4 2l4 4-4 4V2z" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12"
        >
          {steps.map((item, i) => {
            const style = STEP_STYLES[item.icon];
            return (
              <motion.article
                key={item.step}
                variants={fadeInUp}
                className="group relative rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-bg-card)]/80 glow-hover-card overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{ "--card-glow": style.glow } as React.CSSProperties}
              >
                <span
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${style.gradient} opacity-80`}
                />
                <span className="absolute top-3 right-4 text-5xl font-display font-bold step-number select-none pointer-events-none">
                  {item.step}
                </span>

                <div className="p-6 sm:p-7">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 bg-gradient-to-br ${style.gradient}`}
                    style={{ boxShadow: `0 8px 24px ${style.glow}` }}
                  >
                    <StepIcon type={item.icon} />
                  </motion.div>

                  <div className="mb-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[var(--color-glass-border)] px-3 py-2">
                    <StepDiagram type={item.icon} />
                  </div>

                  <h3 className="text-xl font-display font-bold text-[var(--color-text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{
                      __html: item.description.replace(
                        /\b(n8n|Vapi|GSheets|CRM|ROI)\b/g,
                        "<strong class='text-[var(--color-text-primary)]'>$1</strong>"
                      ),
                    }}
                  />

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.04)]"
                        style={{ color: style.accent }}
                      >
                        <span
                          className="w-1 h-1 rounded-full"
                          style={{ background: style.accent, boxShadow: `0 0 6px ${style.accent}` }}
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {howItWorksChips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-[var(--color-glass-border)] bg-[var(--color-bg-tertiary)]/60 text-[var(--color-text-secondary)] hover:border-[#a855f7]/40 hover:text-[var(--color-text-primary)] transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-sm bg-gradient-to-br from-[#a855f7] to-[#f97316] opacity-80" />
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
