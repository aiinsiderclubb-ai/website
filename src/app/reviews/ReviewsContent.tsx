"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import PageLayout from "@landing/components/shared/PageLayout";
import { useTelegramStats } from "@landing/hooks/useTelegramStats";

const allReviews = [
  {
    initials: "CP",
    name: "Course participant",
    role: "Built a client-booking bot",
    category: "courses",
    badge: "ChatBot Course",
    badgeType: "course",
    quote: "I built a Telegram bot for a beauty salon with booking, Google Sheets sync and a simple demo. The course helped me package it and start outreach.",
    metrics: ["First demo shipped", "Google Sheets sync", "Client outreach started"],
  },
  {
    initials: "CM",
    name: "Community member",
    role: "n8n workflows & lead automation",
    category: "community",
    badge: "Telegram Member",
    badgeType: "community",
    quote: "The practical workflow examples were the most useful part. I finally understood how to connect forms, CRM updates and Telegram alerts into one flow.",
    metrics: ["20h/week saved", "CRM alerts", "Reusable workflow"],
  },
  {
    initials: "AS",
    name: "AI Insider student",
    role: "Voice agent prototype",
    category: "courses",
    badge: "Voice Agent",
    badgeType: "course",
    quote: "Short lessons, direct support and real templates made it much easier to ship a voice-agent demo instead of just watching theory.",
    metrics: ["7 days to demo", "Vapi.ai setup", "Support scripts ready"],
  },
  {
    initials: "MP",
    name: "Mentorship participant",
    role: "First automation offer",
    category: "mentorship",
    badge: "VIP Mentorship",
    badgeType: "vip",
    quote: "The mentorship helped me turn scattered ideas into one clear offer. We focused on a narrow niche, a demo and a simple sales script.",
    metrics: ["Clear offer", "Demo script", "Sales pipeline started"],
  },
  {
    initials: "FO",
    name: "Founder operator",
    role: "Internal ops automation",
    category: "success",
    badge: "Operations",
    badgeType: "success",
    quote: "We used the templates to automate lead intake, qualification and Telegram notifications. It removed a lot of repetitive admin work.",
    metrics: ["Lead intake automated", "Team alerts", "Less manual admin"],
  },
  {
    initials: "DS",
    name: "Digital specialist",
    role: "Client reporting workflows",
    category: "courses",
    badge: "Automation Systems",
    badgeType: "course",
    quote: "The value was in the details: retries, clean prompts, fallbacks and how to explain the workflow to a client without overcomplicating it.",
    metrics: ["Retry logic", "Cleaner prompts", "Client-ready explanation"],
  },
];

const filters = ["all", "courses", "community", "mentorship", "success"] as const;
type Filter = typeof filters[number];

const ratingBars = [
  { stars: "5 stars", pct: 89 },
  { stars: "4 stars", pct: 8 },
  { stars: "3 stars", pct: 2 },
  { stars: "2 stars", pct: 1 },
  { stars: "1 star", pct: 0 },
];

const badgeColors: Record<string, string> = {
  success: "bg-emerald-500/20 text-emerald-400",
  course: "bg-[#a855f7]/20 text-[#fb923c]",
  community: "bg-[#7c3aed]/20 text-[#a78bfa]",
  vip: "bg-amber-500/20 text-amber-400",
};

export default function ReviewsContent() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const stats = useTelegramStats();

  const filtered = activeFilter === "all" ? allReviews : allReviews.filter((r) => r.category === activeFilter);

  return (
    <PageLayout
      badge="Reviews"
      title="Real Stories from"
      titleHighlight="Real AI Professionals"
      subtitle="Don't just take our word for it. See how thousands of students and professionals transformed their careers with AI Insider training and community."
    >
      {/* Stats bar */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-3 gap-4 hud-panel hud-frame rounded-2xl p-6 sm:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { n: stats.graduatesFormatted, l: "Course Graduates" },
              { n: "4.9/5", l: "Average Rating" },
              { n: "98%", l: "Would Recommend" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-4xl font-display font-bold gradient-text">{s.n}</div>
                <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                  activeFilter === f
                    ? "bg-[#a855f7] text-white"
                    : "hud-panel text-[var(--color-text-secondary)] hover:border-white/20"
                }`}
              >
                {f === "all" ? "All Reviews" : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filtered.map((r) => (
                <motion.div
                  key={r.name}
                  variants={fadeInUp}
                  className="hud-panel hud-frame hud-scan rounded-2xl p-6 flex flex-col hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#f97316] flex items-center justify-center text-white font-bold text-sm">
                        {r.initials}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{r.name}</div>
                        <div className="text-[var(--color-text-muted)] text-xs">{r.role}</div>
                        <div className="text-yellow-400 text-xs mt-0.5">★★★★★</div>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${badgeColors[r.badgeType]}`}>
                      {r.badge}
                    </span>
                  </div>

                  <blockquote className="text-[var(--color-text-secondary)] text-sm italic mb-4 flex-grow">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>

                  <div className="flex flex-wrap gap-2">
                    {r.metrics.map((m) => (
                      <span key={m} className="text-xs bg-white/5 text-[var(--color-text-muted)] px-2 py-1 rounded-md">
                        {m}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-[var(--color-text-muted)] text-sm mt-8">
            Showing {filtered.length} selected reviews
          </p>
        </div>
      </section>

      {/* Overall rating */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="hud-panel hud-frame hud-scan rounded-2xl p-8 sm:p-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mb-10">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-display font-bold text-white mb-4">Overall Rating</h2>
                <div className="text-6xl font-display font-bold gradient-text">4.9</div>
                <div className="text-2xl text-yellow-400 mt-1">★★★★★</div>
                <p className="text-[var(--color-text-muted)] text-sm mt-1">Based on real student feedback and community notes</p>
              </div>
              <div className="space-y-3">
                {ratingBars.map((rb) => (
                  <div key={rb.stars} className="flex items-center gap-3">
                    <span className="text-xs text-[var(--color-text-muted)] w-12">{rb.stars}</span>
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#a855f7] to-[#f97316] rounded-full"
                        style={{ width: `${rb.pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-[var(--color-text-muted)] w-8">{rb.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-display font-bold text-white mb-2">Ready to Write Your Own Success Story?</h3>
              <p className="text-[var(--color-text-secondary)] mb-6">Join thousands of professionals who transformed their careers with AI automation</p>
              <a
                href="https://t.me/+qjwWJz7aLR1hMDQ0"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your AI Journey →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
