"use client";

import { motion } from "framer-motion";
import { techStackItems, type TechCategory } from "@landing/data/content";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { useI18n } from "@landing/context/i18n-context";

const CATEGORY_META: Record<
  TechCategory,
  { icon: string; gradient: string; glow: string }
> = {
  ai: {
    icon: "brain",
    gradient: "from-[#a855f7] to-[#7c3aed]",
    glow: "rgba(168,85,247,0.3)",
  },
  automation: {
    icon: "workflow",
    gradient: "from-[#22d3ee] to-[#06b6d4]",
    glow: "rgba(34,211,238,0.28)",
  },
  integration: {
    icon: "plug",
    gradient: "from-[#fb923c] to-[#f97316]",
    glow: "rgba(249,115,22,0.28)",
  },
  infra: {
    icon: "server",
    gradient: "from-[#34d399] to-[#06b6d4]",
    glow: "rgba(52,211,153,0.28)",
  },
};

function CategoryIcon({ type, className }: { type: string; className?: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: className ?? "w-4 h-4",
  };

  switch (type) {
    case "brain":
      return (
        <svg {...props}>
          <path d="M12 5a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3 3 3 0 0 0 3 3h1a3 3 0 0 0 3-3V8a3 3 0 0 0 3-3z" />
          <path d="M12 5a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3V8a3 3 0 0 1-3-3z" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M9 6h6M12 9v6" />
        </svg>
      );
    case "plug":
      return (
        <svg {...props}>
          <path d="M12 22v-3" />
          <path d="M9 19H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3" />
          <path d="M15 19h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-3" />
          <path d="M9 5V3M15 5V3" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M6 21h12M9 17v4M15 17v4" />
        </svg>
      );
  }
}

export default function TechStack() {
  const { t } = useI18n();

  const categoryLabels: Record<TechCategory, string> = {
    ai: t.partners.catAi,
    automation: t.partners.catAutomation,
    integration: t.partners.catIntegration,
    infra: t.partners.catInfra,
  };

  const categories: TechCategory[] = ["ai", "automation", "integration", "infra"];

  return (
    <section className="py-20 relative overflow-hidden border-t border-[var(--color-glass-border)]">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-badge text-[#c084fc] text-[11px] font-medium uppercase tracking-[0.2em] mb-5"
          >
            <CategoryIcon type="workflow" className="w-3.5 h-3.5 text-[#a855f7]" />
            {t.partners.badge}
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-3"
          >
            {t.partners.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-text-secondary)] text-sm sm:text-base max-w-xl mx-auto"
          >
            {t.partners.subtitle}
          </motion.p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat) => {
            const items = techStackItems.filter((item) => item.category === cat);
            const meta = CATEGORY_META[cat];
            return (
              <motion.div
                key={cat}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
              >
                <motion.div className="flex items-center gap-3 mb-4">
                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${meta.gradient} text-white`}
                    style={{ boxShadow: `0 4px 12px ${meta.glow}` }}
                  >
                    <CategoryIcon type={meta.icon} className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-primary)]">
                    {categoryLabels[cat]}
                  </h3>
                  <span className="flex-1 h-px bg-gradient-to-r from-[var(--color-glass-border)] to-transparent" />
                </motion.div>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {items.map((item) => (
                    <motion.div
                      key={item.name}
                      variants={fadeInUp}
                      title={item.name}
                      className="group flex items-center gap-3 p-3 sm:p-4 rounded-xl border border-[var(--color-glass-border)] bg-[var(--color-bg-card)]/70 glow-hover-card transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                      style={{ "--card-glow": meta.glow } as React.CSSProperties}
                    >
                      <span
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white border border-white/10"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}33, ${item.color}66)`,
                          color: item.color === "#ffffff" || item.color === "#e8e8e8" ? "#1a103d" : "#fff",
                        }}
                      >
                        {item.abbr}
                      </span>
                      <span className="text-sm font-medium text-[var(--color-text-primary)] leading-tight group-hover:text-[#c084fc] transition-colors truncate">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact marquee for extra motion — recognizable logos by abbr */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-[var(--color-glass-border)]"
        >
          <div className="relative overflow-hidden py-2">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg-secondary)] to-transparent z-10 pointer-events-none" />
            <motion.div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg-secondary)] to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-x will-change-transform gap-3" style={{ width: "max-content" }}>
              {[...techStackItems, ...techStackItems].map((item, i) => (
                <span
                  key={`${item.name}-${i}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-glass-border)] bg-[var(--color-bg-tertiary)]/50 text-sm font-medium text-[var(--color-text-secondary)] shrink-0"
                >
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold"
                    style={{
                      background: `${item.color}22`,
                      color: item.color === "#ffffff" ? "#c084fc" : item.color,
                    }}
                  >
                    {item.abbr}
                  </span>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
