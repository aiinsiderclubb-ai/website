"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import PageLayout from "@/components/shared/PageLayout";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";

export default function CaseStudiesContent() {
  const { t } = useI18n();

  const cases = [
    {
      id: "ecommerce-support",
      tag: t.caseStudiesCases.c1Tag,
      tagColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
      emoji: "🛍️",
      title: t.caseStudiesCases.c1Title,
      client: t.caseStudiesCases.c1Client,
      timeline: t.caseStudiesCases.c1Timeline,
      stack: ["n8n", "ChatGPT API", "Telegram Bot", "Google Sheets"],
      challenge: t.caseStudiesCases.c1Challenge,
      solution: t.caseStudiesCases.c1Solution,
      results: [
        { metric: "40%", label: t.caseStudiesCases.c1R1Label },
        { metric: "2 min", label: t.caseStudiesCases.c1R2Label },
        { metric: "78%", label: t.caseStudiesCases.c1R3Label },
        { metric: "4.8★", label: t.caseStudiesCases.c1R4Label },
      ],
      quote: t.caseStudiesCases.c1Quote,
      author: t.caseStudiesCases.c1Author,
    },
    {
      id: "lead-qualification",
      tag: t.caseStudiesCases.c2Tag,
      tagColor: "bg-blue-500/15 text-blue-400 border-blue-500/20",
      emoji: "🎯",
      title: t.caseStudiesCases.c2Title,
      client: t.caseStudiesCases.c2Client,
      timeline: t.caseStudiesCases.c2Timeline,
      stack: ["n8n", "OpenAI GPT-4", "HubSpot", "Slack"],
      challenge: t.caseStudiesCases.c2Challenge,
      solution: t.caseStudiesCases.c2Solution,
      results: [
        { metric: "3×", label: t.caseStudiesCases.c2R1Label },
        { metric: "68%", label: t.caseStudiesCases.c2R2Label },
        { metric: "4 min", label: t.caseStudiesCases.c2R3Label },
        { metric: "+$180k", label: t.caseStudiesCases.c2R4Label },
      ],
      quote: t.caseStudiesCases.c2Quote,
      author: t.caseStudiesCases.c2Author,
    },
    {
      id: "voice-appointments",
      tag: t.caseStudiesCases.c3Tag,
      tagColor: "bg-purple-500/15 text-purple-400 border-purple-500/20",
      emoji: "🎙️",
      title: t.caseStudiesCases.c3Title,
      client: t.caseStudiesCases.c3Client,
      timeline: t.caseStudiesCases.c3Timeline,
      stack: ["Vapi.ai", "Whisper", "n8n", "Google Calendar", "Twilio"],
      challenge: t.caseStudiesCases.c3Challenge,
      solution: t.caseStudiesCases.c3Solution,
      results: [
        { metric: "80%", label: t.caseStudiesCases.c3R1Label },
        { metric: "24/7", label: t.caseStudiesCases.c3R2Label },
        { metric: "−14%", label: t.caseStudiesCases.c3R3Label },
        { metric: "€8,400", label: t.caseStudiesCases.c3R4Label },
      ],
      quote: t.caseStudiesCases.c3Quote,
      author: t.caseStudiesCases.c3Author,
    },
    {
      id: "content-pipeline",
      tag: t.caseStudiesCases.c4Tag,
      tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/20",
      emoji: "✍️",
      title: t.caseStudiesCases.c4Title,
      client: t.caseStudiesCases.c4Client,
      timeline: t.caseStudiesCases.c4Timeline,
      stack: ["n8n", "GPT-4o", "Make.com", "Notion", "Buffer"],
      challenge: t.caseStudiesCases.c4Challenge,
      solution: t.caseStudiesCases.c4Solution,
      results: [
        { metric: "500+", label: t.caseStudiesCases.c4R1Label },
        { metric: "1", label: t.caseStudiesCases.c4R2Label },
        { metric: "82%", label: t.caseStudiesCases.c4R3Label },
        { metric: "3×", label: t.caseStudiesCases.c4R4Label },
      ],
      quote: t.caseStudiesCases.c4Quote,
      author: t.caseStudiesCases.c4Author,
    },
  ];

  const stats = [
    { number: "40%+", label: t.caseStudiesStats.s1Label },
    { number: "3×", label: t.caseStudiesStats.s2Label },
    { number: "2–4 wk", label: t.caseStudiesStats.s3Label },
    { number: "150+", label: t.caseStudiesStats.s4Label },
  ];
  const [activeCase, setActiveCase] = useState<string | null>(null);

  return (
    <PageLayout
      badge={t.caseStudiesPage.badge}
      title={t.caseStudiesPage.title}
      titleHighlight={t.caseStudiesPage.titleHighlight}
      subtitle={t.caseStudiesPage.subtitle}
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
                {activeCase === c.id ? t.caseStudiesPage.showLess : t.caseStudiesPage.readFull}
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
                      {t.caseStudiesPage.challenge}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                      {c.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
                      {t.caseStudiesPage.solution}
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
            {t.caseStudiesPage.wantResults}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            {t.caseStudiesPage.buildTitle}{" "}
            <span className="gradient-text">{t.caseStudiesPage.buildTitleHighlight}</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
            {t.caseStudiesPage.buildSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-medium rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-all duration-300 text-sm"
            >
              {t.caseStudiesPage.learnSkills}
            </Link>
            <Link
              href="/b2b"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-[var(--color-glass-border)] text-[var(--color-text-primary)] font-medium rounded-full hover:bg-[var(--color-glass-bg)] transition-all duration-300 text-sm"
            >
              {t.caseStudiesPage.doneForYou}
            </Link>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
}
