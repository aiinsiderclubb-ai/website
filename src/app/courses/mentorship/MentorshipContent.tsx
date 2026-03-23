"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";

const steps = [
  { n: "01", title: "Discovery Call", desc: "We discuss your goals, niche, and timeline. Build a personal roadmap." },
  { n: "02", title: "First Bot Build", desc: "Your mentor guides you step-by-step through your first working chatbot." },
  { n: "03", title: "Monetization", desc: "Sales script, first outreach, landing page review, and pricing strategy." },
  { n: "04", title: "First €1000", desc: "Close your first client with mentor support throughout the deal." },
];

const includes = [
  { icon: "🧑‍💼", title: "Personal Mentor", desc: "1-on-1 sessions with a practising AI automation expert" },
  { icon: "💬", title: "Direct Communication", desc: "Chat access 7 days a week for questions and reviews" },
  { icon: "📋", title: "Revenue Playbook", desc: "Proven script to find, pitch and close automation clients" },
  { icon: "♾️", title: "Unlimited Support", desc: "Reviews of your bots, pitches, and client conversations" },
  { icon: "🎯", title: "Niche Selection", desc: "We find your best-fit niche based on skills and market demand" },
  { icon: "🏆", title: "First Deal Help", desc: "Mentor stays with you until you close your first paying client" },
];

export default function MentorshipContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--color-bg-primary)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.07)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/[0.05] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">{t.nav.home}</Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-[var(--color-accent)] transition-colors">{t.nav.courses}</Link>
              <span>/</span>
              <span className="text-amber-400">VIP Mentorship</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-wider mb-5">
                👑 VIP Program
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                Personal ChatBot Mentorship
                <br />
                <span style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Your First €1,000
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl">
                1-on-1 mentorship to create and monetize your first chatbot. Personal guidance, direct feedback, a revenue playbook and unlimited support.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[["👑", t.mentorshipPage.vipAccess],["⏱️","2 weeks"],["♾️", t.mentorshipPage.unlimitedSupport],["💶","€299"]].map(([icon,label]) => (
                  <div key={label} className="glass border border-amber-500/20 rounded-full px-4 py-2 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span>{icon}</span><span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://t.me/vladyslavarcher?text=Привет!%20Интересует%20Personal%20ChatBot%20Mentorship%20(€299)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-[0_0_24px_rgba(245,158,11,0.4)]"
                  style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)" }}
                >
                  {t.mentorshipPage.getVip}
                </a>
                <a href="#apply"
                  className="px-6 py-3.5 rounded-xl border border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-amber-500/30 text-sm font-medium transition-all">
                  {t.mentorshipPage.applyVip}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Outcome metrics */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {[
                { n: "€1,000", l: t.mentorshipPage.targetFirstMonth },
                { n: "1-on-1", l: t.mentorshipPage.personalSessions },
                { n: "7/7", l: t.mentorshipPage.supportDays },
                { n: "∞", l: t.mentorshipPage.botReviews },
              ].map((s) => (
                <motion.div key={s.l} variants={fadeInUp} className="glass border border-amber-500/20 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold" style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.n}</div>
                  <div className="text-sm text-[var(--color-text-muted)] mt-2">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4-step journey */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-12"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {t.mentorshipPage.journeyTitle}
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, i) => (
                <motion.div key={step.n} variants={fadeInUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  className="glass border border-[var(--color-glass-border)] hover:border-amber-500/30 rounded-2xl p-6 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-display font-bold text-amber-500/30">{step.n}</div>
                    <div>
                      <h3 className="text-[var(--color-text-primary)] font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {t.mentorshipPage.whatsIncluded}
            </motion.h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {includes.map((inc) => (
                <motion.div key={inc.title} variants={fadeInUp} className="glass border border-[var(--color-glass-border)] hover:border-amber-500/30 rounded-2xl p-6 transition-all">
                  <div className="text-3xl mb-3">{inc.icon}</div>
                  <h3 className="text-[var(--color-text-primary)] font-semibold mb-2">{inc.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{inc.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonial highlight */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div className="rounded-2xl p-8 sm:p-10 text-center border border-amber-500/20"
              style={{ background: "linear-gradient(135deg,rgba(245,158,11,0.05),rgba(239,68,68,0.05))" }}
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="text-amber-400 text-xl mb-4">★★★★★</div>
              <blockquote className="text-lg text-[var(--color-text-primary)] italic mb-4">
                &ldquo;The personal mentorship was life-changing. My mentor helped me land my first $5K automation project within 2 weeks. Now I have a waiting list of clients!&rdquo;
              </blockquote>
              <p className="text-[var(--color-text-muted)] text-sm">Emma Williams — Freelance AI Consultant</p>
            </motion.div>
          </div>
        </section>

        {/* Apply */}
        <section className="py-16 border-t border-[var(--color-glass-border)]" id="apply">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="glass border border-amber-500/20 rounded-2xl p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">👑</div>
                  <h3 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-2">{t.mentorshipPage.applicationReceived}</h3>
                  <p className="text-[var(--color-text-secondary)]">{t.mentorshipPage.mentorReach}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-2 text-center">{t.mentorshipPage.applyTitle}</h3>
                  <p className="text-[var(--color-text-secondary)] text-center mb-8 text-sm">{t.mentorshipPage.applySubtitle}</p>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: "name", placeholder: t.common.yourName, type: "text" },
                        { name: "email", placeholder: "Email", type: "email" },
                        { name: "phone", placeholder: t.common.phoneOptional, type: "tel", optional: true },
                      ].map((f) => (
                        <input key={f.name} type={f.type} placeholder={f.placeholder} required={!f.optional}
                          value={form[f.name as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                          className="glass border border-[var(--color-glass-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-amber-500/40 bg-transparent text-sm w-full"
                        />
                      ))}
                    </div>
                    <textarea rows={3} placeholder={t.mentorshipPage.tellGoals}
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full glass border border-[var(--color-glass-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-amber-500/40 bg-transparent text-sm resize-none"
                    />
                    <div className="flex gap-3 flex-wrap">
                      <button type="submit" className="px-8 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                        style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)" }}>
                        {t.mentorshipPage.applyBtn}
                      </button>
                      <a href="https://t.me/vladyslavarcher?text=Привет!%20Интересует%20Personal%20ChatBot%20Mentorship%20(€299)"
                        target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:border-amber-500/30 text-sm font-medium transition-all">
                        {t.common.messageTelegram}
                      </a>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
