"use client";

import { motion } from "framer-motion";
import { partners } from "@/data/content";
import { fadeInUp } from "@/lib/motion";
import { useI18n } from "@/context/i18n-context";

export default function TechStack() {
  const { t } = useI18n();
  const doubled = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase">
            ⚙️ {t.partners.badge}
          </span>
        </motion.div>
      </div>

      <div className="relative overflow-hidden py-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg-secondary)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg-secondary)] to-transparent z-10" />

        <div className="flex animate-scroll-x" style={{ width: "max-content" }}>
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center px-8 py-3 mx-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-300 cursor-default shrink-0 font-medium"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
