"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import Header from "@landing/components/Header";
import Footer from "@landing/components/Footer";
import Link from "next/link";
import { useI18n } from "@landing/context/i18n-context";
import StudentReviewsSection from "@landing/components/courses/StudentReviewsSection";
import CourseBookingForm from "@landing/components/courses/CourseBookingForm";

const program = [
  { day: "Day 1", title: "Basics & Setup", desc: "Tools, templates and quick wins.", tags: ["Setup", "Templates"] },
  { day: "Day 2", title: "Flows & Prompts", desc: "Conversation planning and validation.", tags: ["Flows", "Validation"] },
  { day: "Day 3", title: "Integrations", desc: "CRM, payments and webhooks.", tags: ["CRM", "Webhooks"] },
  { day: "Day 4", title: "Sales Playbook", desc: "Positioning, offers and demo script.", tags: ["Playbook", "Demo"] },
  { day: "Day 5", title: "Testing", desc: "Edge cases, analytics and fixes.", tags: ["QA", "Metrics"] },
  { day: "Day 6", title: "Launch", desc: "Deployment and first client outreach.", tags: ["Deploy", "Outreach"] },
];

const outline = [
  { block: "Block 1 — Foundations", items: ["Set up environment, connect the bot", "Teach the bot to reply and save data"], note: "Manager review and feedback" },
  { block: "Block 2 — Customization", items: ["Adapt to your use-case, add logic and integrations", "Practical tips from managers for customization"], note: "Personalized advice from managers" },
  { block: "Block 3 — Final", items: ["Assemble the final project and submit", "Learn how to present and sell"], note: "Final bot check before sales" },
];

const features = [
  { icon: "🧩", title: "Templates", desc: "Kickstart with best-practice templates." },
  { icon: "🤝", title: "Support", desc: "Direct help from instructors in chat." },
  { icon: "🧾", title: "Sales Playbook", desc: "Guide to package and sell your bot." },
  { icon: "🧪", title: "Real Cases", desc: "Practice on real business problems." },
];

const testimonials = [
  { quote: "Built a Telegram bot for beauty salons — booking, Google Sheets sync, fully customizable. Already found first clients. The course gave a powerful push 🔥", author: "Course participant" },
  { quote: "Love the peer help — you grasp material fast. Made a bot for a Telegram channel with an info base. Everything works perfectly.", author: "Course participant" },
  { quote: "Learned the basics of n8n and assembled a client-booking bot. I understand workflow logic now and no longer fear n8n's UI.", author: "Course participant" },
  { quote: "Useful course, no fluff — concise and to the point. Thanks for support and quick answers.", author: "Course participant" },
];

const faqs = [
  { q: "Is support included?", a: "Yes, mentors answer in chat during the cohort." },
  { q: "Do I get templates?", a: "We give templates and checklists to accelerate delivery." },
  { q: "What will I build?", a: "A niche bot customized to your case, ready to demo to clients." },
  { q: "What is the schedule?", a: "3 weeks / 6 sessions. Watch when convenient; weekly mini-project with mentor review." },
  { q: "Certificate?", a: "Yes, a digital certificate of completion from AI Insider." },
  { q: "Payments and refunds", a: "Card/PayPal. Refund up to 7 days before start. Company invoice on request." },
];

function Countdown({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) { setTime({ d: "00", h: "00", m: "00", s: "00" }); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ d: String(d).padStart(2,"0"), h: String(h).padStart(2,"0"), m: String(m).padStart(2,"0"), s: String(s).padStart(2,"0") });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const { t } = useI18n();
  const labels = [t.coursePage.days, t.coursePage.hours, t.coursePage.minutes, t.coursePage.seconds];
  const vals = [time.d, time.h, time.m, time.s];

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {vals.map((v, i) => (
        <div key={i} className="glass border border-white/10 rounded-2xl px-5 py-4 text-center min-w-[72px]">
          <div className="text-3xl sm:text-4xl font-display font-bold gradient-text">{v}</div>
          <div className="text-xs text-[var(--color-text-muted)] mt-1">{labels[i]}</div>
        </div>
      ))}
    </div>
  );
}

export default function ChatbotContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--color-bg-primary)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.07)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#a855f7]/[0.05] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">{t.nav.home}</Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-[var(--color-accent)] transition-colors">{t.nav.courses}</Link>
              <span>/</span>
              <span className="text-[var(--color-accent)]">Chat-Bot</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/25 text-[#c084fc] text-xs font-medium uppercase tracking-wider mb-5">
                🤖 AI Course
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                AI Chat-Bot Development
                <br />
                <span className="gradient-text">Cohort September 15</span>
              </h1>
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl">
                From zero to a niche-ready bot. Real practice with templates and guidance. Includes a quick sales playbook.
              </p>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[["📅","Starts September 15"],["⏱️","3 weeks"],["🔑","API keys included"],["💶","€59"]].map(([icon,label]) => (
                  <div key={label} className="glass border border-[var(--color-glass-border)] rounded-full px-4 py-2 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span>{icon}</span><span>{label}</span>
                  </div>
                ))}
              </div>

              {/* Spots + CTA */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[var(--color-text-secondary)]">9 {t.common.spotsLeft}</span>
                </div>
                <a
                  href="#apply"
                  className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-[0_0_24px_rgba(14,165,233,0.4)]"
                  style={{ background: "linear-gradient(135deg,#a855f7,#f97316)" }}
                >
                  Enroll — €59
                </a>
                <a
                  href="https://t.me/vladyslavarcher?text=Hello! I want to enroll in AI Chat-Bot (Sep 15, €59)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl border border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-border)] text-sm font-medium transition-all"
                >
                  {t.common.contactManager}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Countdown ── */}
        <section className="py-12 border-y border-[var(--color-glass-border)]" style={{ background: "var(--color-glass-bg)" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-6">{t.coursePage.countdownTitle}</p>
            <Countdown targetDate="2025-09-15T09:00:00" />
          </div>
        </section>

        {/* ── What you'll get metrics ── */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              {t.coursePage.whatYouGet}
            </motion.h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {[
                { n: "6", l: "live sessions" },
                { n: "12+", l: "templates & checklists" },
                { n: "20h", l: "mentor support" },
                { n: "1", l: "niche-ready bot" },
              ].map((s) => (
                <motion.div
                  key={s.l}
                  variants={fadeInUp}
                  className="glass border border-[var(--color-glass-border)] rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-display font-bold gradient-text">{s.n}</div>
                  <div className="text-sm text-[var(--color-text-muted)] mt-2">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Course Outline ── */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              {t.coursePage.outline}
            </motion.h2>

            {/* Format chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["🗓 3 weeks / 6 sessions", "🕒 Flexible schedule — watch when convenient", "🌅 Video instructions arrive in the morning"].map((c) => (
                <span key={c} className="glass border border-[var(--color-glass-border)] rounded-full px-4 py-2 text-sm text-[var(--color-text-secondary)]">{c}</span>
              ))}
            </div>

            <motion.div
              className="space-y-4"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {outline.map((block, i) => (
                <motion.div
                  key={block.block}
                  variants={fadeInUp}
                  className="glass border border-[var(--color-glass-border)] rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a855f7] to-[#f97316] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[var(--color-text-primary)] font-semibold mb-3">{block.block}</h3>
                      <ul className="space-y-1.5 mb-3">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                            <span className="text-[var(--color-accent)] mt-0.5">→</span> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-[var(--color-text-muted)] border-t border-[var(--color-glass-border)] pt-2 mt-2">
                        — {block.note}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-sm text-[var(--color-text-muted)] mt-6 p-4 glass border border-[var(--color-glass-border)] rounded-xl">
              ⚠️ Active manager support continues for 3 days after the course. We recommend not postponing — lessons are short but dense.
            </p>
          </div>
        </section>

        {/* ── Program Day by Day ── */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-2">{t.coursePage.program}</h2>
              <p className="text-[var(--color-text-muted)] text-sm">3 weeks • 6 sessions • from zero to niche-ready</p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {program.map((p, i) => (
                <motion.div
                  key={p.day}
                  variants={fadeInUp}
                  className="glass border border-[var(--color-glass-border)] rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-2">{p.day}</div>
                  <h4 className="text-[var(--color-text-primary)] font-semibold mb-1">{p.title}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] px-2 py-0.5 rounded-full text-[var(--color-text-muted)]">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Before / After ── */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              {t.coursePage.beforeAfter}
            </motion.h2>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="rounded-2xl p-6 border border-red-500/20 bg-red-500/5"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                <h4 className="text-red-400 font-semibold mb-4">Before</h4>
                <ul className="space-y-2">
                  {["Manual lead qualification", "No structured flows", "Slow response time"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="text-red-400">✗</span> {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="rounded-2xl p-6 border border-green-500/20 bg-green-500/5"
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              >
                <h4 className="text-green-400 font-semibold mb-4">After</h4>
                <ul className="space-y-2">
                  {["Automated intake", "Clear scripted flows", "Fast 24/7 replies"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="text-green-400">✓</span> {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={fadeInUp}
                  className="glass border border-[var(--color-glass-border)] rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform"
                >
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="text-[var(--color-text-primary)] font-semibold mb-1 text-sm">{f.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <StudentReviewsSection reviews={testimonials} />

        {/* ── FAQ ── */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              FAQ
            </motion.h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <motion.div
                  key={f.q}
                  className="glass border border-[var(--color-glass-border)] rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
                >
                  <button
                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-[var(--color-text-primary)] font-medium text-sm">{f.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} className="text-[var(--color-accent)] text-lg">⌄</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-5 pb-4 text-sm text-[var(--color-text-secondary)]"
                      >
                        {f.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CourseBookingForm
          startDate="Sep 15"
          telegramHref="https://t.me/vladyslavarcher?text=Hello! I want to enroll in AI Chat-Bot (Sep 15, €59)."
        />

        {/* ── Related reads ── */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-8">{t.coursePage.recommendedReads}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Prompt Engineering Pitfalls", sub: "Schemas, self-checks, eval sets", href: "/blog" },
                { title: "Shipping AI Agents to Production", sub: "Observability, guardrails, retries", href: "/blog" },
                { title: "Robust n8n Workflows", sub: "Queues, DLQ, alerts", href: "/blog" },
              ].map((r) => (
                <Link
                  key={r.title}
                  href={r.href}
                  className="glass border border-[var(--color-glass-border)] rounded-xl p-5 hover:border-[var(--color-accent-border)] transition-all group"
                >
                  <h3 className="text-[var(--color-text-primary)] font-medium text-sm mb-1 group-hover:text-[var(--color-accent)] transition-colors">{r.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{r.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
