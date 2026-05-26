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
  const categoryCopy: Record<TechCategory, string> = {
    ai: "Models, voice, retrieval and evaluation layers.",
    automation: "Workflow engines that connect prompts to actions.",
    integration: "CRM, messaging, payments and business systems.",
    infra: "Data, deployment and operating layer for production.",
  };
  const floatingTools = ["OpenAI", "n8n", "Vapi.ai", "HubSpot", "Supabase"];

  return (
    <section className="py-24 relative overflow-hidden border-t border-[var(--color-glass-border)]">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.28] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f97316]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center"
        >
          <div>
            <motion.span variants={fadeInUp} className="hud-badge mb-5">
              <CategoryIcon type="workflow" className="w-3.5 h-3.5 text-[#a855f7]" />
              {t.partners.badge}
            </motion.span>

            <motion.h2 variants={fadeInUp} className="hud-title text-3xl sm:text-4xl lg:text-5xl mb-4">
              {t.partners.title}
            </motion.h2>

            <motion.p variants={fadeInUp} className="hud-subtitle max-w-xl mb-8">
              {t.partners.subtitle}
            </motion.p>

            <motion.div className="grid sm:grid-cols-2 gap-3" variants={staggerContainer}>
              {categories.map((cat) => {
                const meta = CATEGORY_META[cat];
                const items = techStackItems.filter((item) => item.category === cat).slice(0, 3);
                return (
                  <motion.div
                    key={cat}
                    variants={fadeInUp}
                    className="hud-panel hud-frame rounded-2xl p-4"
                    style={{ "--card-glow": meta.glow } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${meta.gradient} text-white`}
                        style={{ boxShadow: `0 6px 16px ${meta.glow}` }}
                      >
                        <CategoryIcon type={meta.icon} className="w-4 h-4" />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-text-primary)]">
                          {categoryLabels[cat]}
                        </h3>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{items.map((i) => i.name).join(" / ")}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{categoryCopy[cat]}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="relative min-h-[440px] lg:min-h-[560px]">
            <div className="absolute inset-0 rounded-[2rem] border border-[var(--color-glass-border)] bg-[var(--color-bg-card)]/20 hud-grid opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.18),transparent_58%)]" />
            <div className="tech-knot-art" aria-hidden />

            {floatingTools.map((tool, i) => (
              <motion.span
                key={tool}
                variants={fadeInUp}
                className={`absolute hidden sm:inline-flex rounded-xl border border-white/10 bg-black/35 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur-md ${
                  i === 0
                    ? "left-8 top-16"
                    : i === 1
                    ? "right-10 top-24"
                    : i === 2
                    ? "left-4 bottom-32"
                    : i === 3
                    ? "right-8 bottom-24"
                    : "left-1/2 top-1/2 -translate-x-1/2"
                }`}
              >
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#f97316] shadow-[0_0_10px_#f97316]" />
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
