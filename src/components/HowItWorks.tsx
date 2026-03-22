"use client";

import { motion } from "framer-motion";
import { howItWorks, howItWorksChips } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase mb-6"
          >
            How it works
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4"
          >
            Launch AI automation in{" "}
            <span className="gradient-text">3 steps</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto"
          >
            From idea to production with n8n, Vapi, Google Sheets and your CRM.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          className="flex items-center justify-center gap-0 mb-12"
        >
          {[1, 2, 3].map((n, i) => (
            <div key={n} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border ${
                i === 0
                  ? "bg-[#0ea5e9]/20 border-[#0ea5e9]/40 text-[#0ea5e9]"
                  : "bg-[var(--color-glass-bg)] border-[var(--color-glass-border)] text-[var(--color-text-muted)]"
              }`}>
                {n}
              </div>
              {i < 2 && (
                <div className="w-16 sm:w-24 h-px bg-[var(--color-glass-border)]" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {howItWorks.map((item, i) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300"
            >
              <div className="text-4xl font-display font-bold step-number mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">{item.title}</h3>
              <p
                className="text-sm text-[var(--color-text-secondary)] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: item.description
                    .replace(/\b(n8n|Vapi|GSheets|CRM)\b/g, "<strong>$1</strong>"),
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {howItWorksChips.map((chip) => (
            <span
              key={chip}
              className="px-4 py-2 rounded-full text-xs section-badge text-[var(--color-text-secondary)] hover:border-[var(--color-accent-border)] hover:text-[var(--color-text-primary)] transition-all duration-300 cursor-default"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
