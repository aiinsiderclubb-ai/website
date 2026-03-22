"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import PageLayout from "@/components/shared/PageLayout";
import Link from "next/link";

const cases = [
  {
    id: "ecommerce-support",
    tag: "E-commerce",
    tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    emoji: "🛍️",
    title: "AI Support Bot Cut Costs by 40%",
    client: "Online Fashion Retailer",
    timeline: "3 weeks to deploy",
    stack: ["n8n", "ChatGPT API", "Telegram Bot", "Google Sheets"],
    challenge:
      "The client's support team was drowning in 500+ repetitive tickets per day — order status, returns, sizing questions. Response time averaged 18 hours. They couldn't scale hiring fast enough.",
    solution:
      "We built an AI support bot on Telegram integrated with their Shopify store via n8n. The bot handles order lookups, returns initiation, and FAQ in 3 languages. Complex issues escalate to a human with full conversation context.",
    results: [
      { metric: "40%", label: "Support cost reduction" },
      { metric: "2 min", label: "Avg response time (was 18h)" },
      { metric: "78%", label: "Tickets resolved automatically" },
      { metric: "4.8★", label: "Customer satisfaction" },
    ],
    quote:
      "We went from drowning in tickets to handling double the volume with the same team. The bot pays for itself every month.",
    author: "Head of Operations",
  },
  {
    id: "lead-qualification",
    tag: "SaaS / Sales",
    tagColor: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    emoji: "🎯",
    title: "3× Lead Conversion with AI Qualification",
    client: "B2B SaaS Startup",
    timeline: "2 weeks to deploy",
    stack: ["n8n", "OpenAI GPT-4", "HubSpot", "Slack"],
    challenge:
      "Sales reps were spending 60% of their time on leads that never converted. Inbound volume was high but quality was inconsistent. Manual qualification took 2–3 days per lead.",
    solution:
      "Automated lead scoring pipeline: when a lead fills the form, an AI agent enriches the data (LinkedIn, company info), scores fit on 12 criteria, and routes hot leads to sales within minutes. Cold leads get a nurture sequence.",
    results: [
      { metric: "3×", label: "Lead-to-demo conversion" },
      { metric: "68%", label: "Less time on cold leads" },
      { metric: "4 min", label: "Avg qualification time (was 2–3 days)" },
      { metric: "+$180k", label: "Additional ARR in 6 months" },
    ],
    quote:
      "Our reps now only talk to people who actually want to buy. Pipeline quality went through the roof.",
    author: "VP of Sales",
  },
  {
    id: "voice-appointments",
    tag: "Healthcare",
    tagColor: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    emoji: "🎙️",
    title: "Voice Agent Automates 80% of Bookings",
    client: "Private Medical Clinic (12 locations)",
    timeline: "4 weeks to deploy",
    stack: ["Vapi.ai", "Whisper", "n8n", "Google Calendar", "Twilio"],
    challenge:
      "Receptionists were handling 300+ booking calls per day. 35% of calls came after hours. No-show rate was 22% due to lack of automated reminders. Staff burnout was high.",
    solution:
      "A 24/7 AI voice agent handles inbound booking calls, answers FAQs, reschedules and cancels appointments. Integrated with Google Calendar across all 12 locations. Sends SMS reminders at 48h and 2h before appointment.",
    results: [
      { metric: "80%", label: "Bookings handled automatically" },
      { metric: "24/7", label: "Availability (was 9am–6pm)" },
      { metric: "−14%", label: "No-show rate reduction" },
      { metric: "€8,400", label: "Monthly labor cost saved" },
    ],
    quote:
      "Patients love that they can book at midnight. Our staff now focus on the patients in front of them, not the phone.",
    author: "Clinic Director",
  },
  {
    id: "content-pipeline",
    tag: "Marketing Agency",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/20",
    emoji: "✍️",
    title: "500+ Content Pieces/Month — 1 Person",
    client: "Digital Marketing Agency",
    timeline: "1 week to deploy",
    stack: ["n8n", "GPT-4o", "Make.com", "Notion", "Buffer"],
    challenge:
      "The agency was managing content for 15 clients. Creating, adapting, scheduling and reporting on 300+ posts per month required 4 full-time content managers. Margins were thin.",
    solution:
      "An AI content pipeline: client briefs go into Notion → n8n triggers GPT-4o to draft posts in the correct tone/language → human reviews in 2 minutes → auto-scheduled in Buffer → performance reports generated weekly automatically.",
    results: [
      { metric: "500+", label: "Pieces produced monthly" },
      { metric: "1", label: "Person managing the pipeline" },
      { metric: "82%", label: "Time saved on content creation" },
      { metric: "3×", label: "Client capacity increase" },
    ],
    quote:
      "We went from struggling with 15 clients to comfortably handling 45 with better output quality. AI Insider's training was the catalyst.",
    author: "Agency Founder",
  },
];

const stats = [
  { number: "40%+", label: "Average cost reduction" },
  { number: "3×", label: "Average ROI improvement" },
  { number: "2–4 wk", label: "Typical deployment time" },
  { number: "150+", label: "Implementations delivered" },
];

export default function CaseStudiesContent() {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  return (
    <PageLayout
      badge="Case Studies"
      title="Real Results from"
      titleHighlight="Real Projects"
      subtitle="Every case study is a real implementation — real client, real stack, real numbers. No demos, no mock data."
    >
      {/* Stats strip */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeInUp}
            custom={i}
            className="glass-card rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold gradient-text mb-1">{s.number}</div>
            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Case study cards */}
      <div className="space-y-8">
        {cases.map((c, i) => (
          <motion.div
            key={c.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={i}
            className="glass-card rounded-3xl overflow-hidden"
          >
            {/* Card header */}
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] flex items-center justify-center text-2xl shrink-0">
                    {c.emoji}
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mb-1 ${c.tagColor}`}>
                      {c.tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)]">
                      {c.title}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 text-right shrink-0">
                  <span className="text-xs text-[var(--color-text-muted)]">{c.client}</span>
                  <span className="text-xs text-[var(--color-accent)]">⚡ {c.timeline}</span>
                </div>
              </div>

              {/* Results grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {c.results.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-xl p-4 text-center"
                    style={{ background: "var(--color-glass-bg)", border: "1px solid var(--color-glass-border)" }}
                  >
                    <div className="text-2xl font-bold gradient-text mb-0.5">{r.metric}</div>
                    <div className="text-[10px] text-[var(--color-text-muted)] leading-tight">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Stack chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {c.stack.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs font-medium section-badge text-[var(--color-text-muted)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Expand toggle */}
              <button
                onClick={() => setActiveCase(activeCase === c.id ? null : c.id)}
                className="flex items-center gap-2 text-sm text-[var(--color-accent)] font-medium hover:opacity-80 transition-opacity"
              >
                {activeCase === c.id ? "Show less" : "Read full case study"}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${activeCase === c.id ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Expanded detail */}
            {activeCase === c.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-[var(--color-glass-border)] px-8 sm:px-10 py-8"
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                      The Challenge
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                      The Solution
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="rounded-2xl p-6" style={{ background: "var(--color-accent-glow)", border: "1px solid var(--color-accent-border)" }}>
                  <p className="text-[var(--color-text-primary)] text-sm italic leading-relaxed mb-3">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">— {c.author}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="glass-card rounded-3xl p-10 sm:p-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase mb-6">
            Want similar results?
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            Let&apos;s Build Your{" "}
            <span className="gradient-text">Automation Story</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
            Learn the exact skills used in these case studies — or let us build it for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-medium rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-all duration-300 text-sm"
            >
              Learn the Skills →
            </Link>
            <Link
              href="/b2b"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[var(--color-glass-border)] text-[var(--color-text-primary)] font-medium rounded-full hover:bg-[var(--color-glass-bg)] transition-all duration-300 text-sm"
            >
              Done-for-You Service
            </Link>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
}
