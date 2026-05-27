"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { siteConfig } from "@landing/data/content";
import { useTelegramStats } from "@landing/hooks/useTelegramStats";

const weeklyDrops = [
  { count: "3", label: "workflow templates", detail: "n8n, Telegram alerts, CRM sync" },
  { count: "2", label: "tool breakdowns", detail: "what to use, when, and why" },
  { count: "1", label: "mini lesson", detail: "short practical implementation guide" },
  { count: "1", label: "community case", detail: "real build notes from members" },
];

export default function TelegramProof() {
  const stats = useTelegramStats();

  return (
    <section className="relative py-20 overflow-hidden border-t border-[var(--color-glass-border)]">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute inset-0 hud-grid opacity-25 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-center"
        >
          <div>
            <motion.span variants={fadeInUp} className="hud-badge mb-5">
              Telegram proof
            </motion.span>
            <motion.h2 variants={fadeInUp} className="hud-title text-3xl sm:text-4xl lg:text-5xl mb-4">
              Inside the AI Insider channel this week
            </motion.h2>
            <motion.p variants={fadeInUp} className="hud-subtitle max-w-xl mb-7">
              The channel is not just announcements. It is where we publish practical workflows, tool notes, mini lessons and community builds.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <span className="hud-panel rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)]">
                <strong>{stats.formatted}</strong> Telegram members
              </span>
              <span className="hud-panel rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)]">
                <strong>{stats.graduatesFormatted}</strong> course graduates
              </span>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="hud-panel hud-frame rounded-3xl p-5 sm:p-6">
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {weeklyDrops.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-bg-card)]/60 p-4">
                  <div className="text-3xl font-display font-bold gradient-text">{item.count}</div>
                  <div className="text-sm font-semibold text-[var(--color-text-primary)] mt-1">{item.label}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">{item.detail}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-dashed border-[var(--color-accent-border)] bg-[var(--color-glass-bg)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Drop real Telegram screenshots into <code className="text-[var(--color-text-primary)]">public/images/telegram-wall/</code> and we can turn this into a proof carousel.
              </p>
            </div>

            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f97316] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Join the Telegram channel
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
