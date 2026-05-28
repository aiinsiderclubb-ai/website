"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { siteConfig } from "@landing/data/content";
import { useTelegramStats } from "@landing/hooks/useTelegramStats";

const weeklyDrops = [
  { count: "3", label: "workflow templates", detail: "n8n, Telegram alerts, CRM sync" },
  { count: "2", label: "tool breakdowns", detail: "what to use, when, and why" },
  { count: "1", label: "mini lesson", detail: "short practical implementation guide" },
  { count: "1", label: "community case", detail: "real build notes from members" },
];

const telegramScreenshots = [
  {
    src: "/images/telegram-wall/Screenshot%202026-05-28%20at%2011.59.45.png",
    alt: "AI Insider Telegram channel screenshot",
  },
  {
    src: "/images/telegram-wall/Screenshot%202026-05-28%20at%2011.59.56.png",
    alt: "Telegram proof screenshot from AI Insider community",
  },
  {
    src: "/images/telegram-wall/Screenshot%202026-05-28%20at%2012.00.11.png",
    alt: "AI Insider Telegram content screenshot",
  },
  {
    src: "/images/telegram-wall/Screenshot%202026-05-28%20at%2012.00.48.png",
    alt: "AI Insider Telegram activity screenshot",
  },
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

            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-bg-card)]/60 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-text-muted)]">Telegram wall</p>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Real screenshots from the channel</h3>
                </div>
                <span className="rounded-full border border-[var(--color-accent-border)] px-3 py-1 text-xs text-[var(--color-text-muted)]">
                  {telegramScreenshots.length} proofs
                </span>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:thin]">
                {telegramScreenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.src}
                    className="relative h-[340px] w-[220px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
                    style={{ transform: `rotate(${index % 2 === 0 ? "-1.5deg" : "1.5deg"})` }}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
                  </div>
                ))}
              </div>
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
