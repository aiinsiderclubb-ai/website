"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/content";

const values = [
  {
    emoji: "🛠️",
    title: "Practice over theory",
    desc: "Every lesson is built around a real task you can deploy. We don't teach concepts — we teach you to ship.",
  },
  {
    emoji: "🤝",
    title: "Community-first",
    desc: "The best way to learn AI is with 6,000+ people asking the same questions, sharing the same wins.",
  },
  {
    emoji: "⚡",
    title: "Speed matters",
    desc: "AI moves fast. Our curriculum is updated constantly — what was cutting-edge last month may be outdated today.",
  },
  {
    emoji: "🎯",
    title: "ROI-obsessed",
    desc: "Every course, every lesson is designed to generate a measurable return for your time and money.",
  },
];

const milestones = [
  { year: "2023", title: "Founded", desc: "Started as a Telegram channel sharing n8n automation tips." },
  { year: "2024 Q1", title: "First Course", desc: "Launched AI Chat-Bot Development course. 200 enrolled in week 1." },
  { year: "2024 Q3", title: "Voice Agents", desc: "Added Vapi.ai course. Community grew to 3,000+ members." },
  { year: "2025", title: "6,000+ Trained", desc: "Expanded to mentorship, B2B consulting and the AI Studio." },
  { year: "2026", title: "AI Studio", desc: "Launched the AI Content Studio service for marketing teams." },
];

const teamStats = [
  { value: "6,000+", label: "Professionals trained" },
  { value: "340%", label: "Average client ROI" },
  { value: "150+", label: "Business partners" },
  { value: "4.9★", label: "Course rating" },
];

export default function AboutContent() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-20 sm:pt-36 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#0ea5e9]/[0.05] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.04)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={fadeInUp}
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium tracking-wider uppercase mb-6"
              >
                About AI Insider
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                custom={1}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[var(--color-text-primary)] mb-6 leading-tight"
              >
                Built by Practitioners,{" "}
                <span className="gradient-text">for Practitioners</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto"
              >
                AI Insider started with a simple belief: the best way to learn AI automation is to build something real — not watch another YouTube video.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-[var(--color-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamStats.map((s, i) => (
                <motion.div
                  key={s.label}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
                  <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-[var(--color-bg-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase mb-6">
                  The Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-6">
                  From a Telegram channel to{" "}
                  <span className="gradient-text">6,000+ trained</span>
                </h2>
                <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                  <p>
                    AI Insider was founded in 2023 when it became clear that most &ldquo;AI education&rdquo; online was either too academic, too shallow, or a year behind the actual tools people needed.
                  </p>
                  <p>
                    We started sharing practical n8n automation tips on Telegram — real workflows, real results, no gatekeeping. The community grew faster than expected, which told us one thing: people were hungry for <em>practical</em> knowledge.
                  </p>
                  <p>
                    Today AI Insider is a full education platform with courses, mentorship, B2B consulting and an AI Content Studio. Every piece of curriculum comes from real client work — if we haven&apos;t shipped it in production, we don&apos;t teach it.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} custom={1} className="space-y-4">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-[var(--color-accent)] shrink-0"
                        style={{ background: "var(--color-accent-glow)", border: "1px solid var(--color-accent-border)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 mt-2 bg-[var(--color-glass-border)]" />
                      )}
                    </div>
                    <div className="pb-6">
                      <div className="text-xs text-[var(--color-accent)] font-medium mb-1">{m.year}</div>
                      <div className="text-[var(--color-text-primary)] font-semibold text-sm mb-1">{m.title}</div>
                      <div className="text-[var(--color-text-secondary)] text-sm">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-[var(--color-bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <motion.span variants={fadeInUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase mb-6">
                What We Believe
              </motion.span>
              <motion.h2 variants={fadeInUp} custom={1} className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)]">
                Our <span className="gradient-text">Core Values</span>
              </motion.h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="glass-card rounded-2xl p-6"
                >
                  <div className="text-3xl mb-4">{v.emoji}</div>
                  <h3 className="text-[var(--color-text-primary)] font-semibold mb-2">{v.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="section-padding bg-[var(--color-bg-primary)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 sm:p-12 text-center"
            >
              <motion.div variants={fadeInUp} custom={0}>
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)" }}>
                  V
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">Vladyslav</h2>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-6">Founder, AI Insider</p>
                <blockquote className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-2xl mx-auto italic mb-8">
                  &ldquo;I built AI Insider because I kept seeing talented people stuck on theory. The gap between &lsquo;I understand AI&rsquo; and &lsquo;I can build with AI&rsquo; is enormous — and it&rsquo;s the gap we close.&rdquo;
                </blockquote>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={siteConfig.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)" }}
                  >
                    Join the Community
                  </a>
                  <a
                    href="https://t.me/vladyslavarcher"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] border border-[var(--color-glass-border)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-border)] transition-all"
                  >
                    DM on Telegram
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[var(--color-bg-secondary)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={fadeInUp} custom={0} className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-6">
                Ready to join{" "}
                <span className="gradient-text">6,000+ practitioners?</span>
              </motion.h2>
              <motion.div variants={fadeInUp} custom={1} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-medium rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-all duration-300 text-sm"
                >
                  View Courses →
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-[var(--color-glass-border)] text-[var(--color-text-primary)] font-medium rounded-full hover:bg-[var(--color-glass-bg)] transition-all duration-300 text-sm"
                >
                  See Case Studies
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
