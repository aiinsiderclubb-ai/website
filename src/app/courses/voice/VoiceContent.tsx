"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";

const program = [
  { day: "Day 1", title: "Voice Stack & Flows", desc: "Realtime constraints, barge-in, intent handling.", tags: ["Realtime", "Design"] },
  { day: "Day 2", title: "Tools & Actions", desc: "Secure tool-calls, guardrails and rollbacks.", tags: ["Guardrails", "Tools"] },
  { day: "Day 3", title: "Scenarios", desc: "Healthcare, services and sales cases with templates.", tags: ["Templates", "Cases"] },
  { day: "Day 4", title: "Deploy", desc: "Production setup, SLAs and monitoring.", tags: ["Deploy", "SLA"] },
];

const outline = [
  {
    block: "Block 1 — Foundations",
    items: ["Sign up in Vapi", "Connect to n8n", "Get voice, speech-to-text and generate answer"],
    note: "Manager review and feedback",
  },
  {
    block: "Block 2 — Customization",
    items: ["Scenarios and branching dialogs", "Connect TTS and return voice response", "Integrations: Google Sheets, CRM, email, etc."],
    note: "Tips from managers for customization",
  },
  {
    block: "Block 3 — Final",
    items: ["Assemble final Voice Agent and prepare to sell", "Record demo video, present the project", "Where to find clients and how to promote"],
    note: "Final agent check by managers before sales",
  },
];

const features = [
  { icon: "🎛️", title: "Realtime", desc: "Low-latency barge-in ready flows." },
  { icon: "🔐", title: "Guardrails", desc: "Safer tool-actions and rollbacks." },
  { icon: "🧪", title: "Case Studies", desc: "Proven scenarios and templates." },
  { icon: "📈", title: "To Production", desc: "Deployment playbooks and SLAs." },
];

const testimonials = [
  { quote: "Built a Telegram bot for beauty salons — booking, Google Sheets sync, fully customizable. Already found first clients. Support was amazing!", author: "Course participant" },
  { quote: "Love the peer help — you grasp material fast. Made a bot for a channel with info base. Everything works perfectly.", author: "Course participant" },
  { quote: "Learned workflow logic in n8n and built a client-booking bot. No longer fear the interface 🔥", author: "Course participant" },
  { quote: "Useful course without fluff — concise and to the point. Team always helped and answered quickly.", author: "Course participant" },
];

const faqs = [
  { q: "Is the voice latency low enough?", a: "Yes, we optimize barge-in and response times for a natural conversational feel." },
  { q: "Will I deploy a real agent?", a: "We guide you to a production-ready setup with monitoring and SLAs." },
  { q: "What stacks are used?", a: "Vapi.ai, Whisper-based pipelines, plus your preferred APIs." },
  { q: "What is the schedule?", a: "2 weeks / 4 sessions. Realtime labs with templates and weekly tasks." },
  { q: "Certificate?", a: "Yes, a digital AI Insider certificate after the final agent demo." },
  { q: "Payments and refunds", a: "Card/PayPal. Refund up to 7 days before start. Corporate invoice available." },
  { q: "Security of tool-calls", a: "We use scoped tokens, allow-lists and rollback plans; you'll learn these patterns." },
];

function Countdown({ targetDate }: { targetDate: string }) {
  const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });
  const { t } = useI18n();

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTime({ d: String(d).padStart(2, "0"), h: String(h).padStart(2, "0"), m: String(m).padStart(2, "0"), s: String(s).padStart(2, "0") });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

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

export default function VoiceContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--color-bg-primary)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.07)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#7c3aed]/[0.05] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">{t.nav.home}</Link>
              <span>/</span>
              <Link href="/courses" className="hover:text-[var(--color-accent)] transition-colors">{t.nav.courses}</Link>
              <span>/</span>
              <span className="text-[#a78bfa]">Voice Agent</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#a78bfa] text-xs font-medium uppercase tracking-wider mb-5">
                🎙️ Voice Course
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                AI Voice Agent
                <br />
                <span style={{ background: "linear-gradient(135deg, #a78bfa, #7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Cohort September 8
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-8 max-w-2xl">
                Natural conversations, real-time actions and deployment playbooks. Adapt it to your niche.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[["📅", `${t.common.startDate} Sep 8`],["⏱️","2 weeks"],["🔑", t.common.apiKeys],["💶","€39"]].map(([icon,label]) => (
                  <div key={label} className="glass border border-[var(--color-glass-border)] rounded-full px-4 py-2 flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span>{icon}</span><span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[var(--color-text-secondary)]">7 {t.common.spotsLeft}</span>
                </div>
                <a
                  href="#apply"
                  className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#0ea5e9)" }}
                >
                  {t.courses.join} — €39
                </a>
                <a
                  href="https://t.me/vladyslavarcher?text=Hello! I want to join AI Voice Agent (Sep 8, €39)."
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

        {/* Countdown */}
        <section className="py-12 border-y border-[var(--color-glass-border)]" style={{ background: "var(--color-glass-bg)" }}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-6">{t.coursePage.countdownTitle}</p>
            <Countdown targetDate="2025-09-08T09:00:00" />
          </div>
        </section>

        {/* What you'll get */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {t.coursePage.whatYouGet}
            </motion.h2>
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {[{ n: "4", l: "intensive sessions" }, { n: "8+", l: "templates" }, { n: "10h", l: "mentor support" }, { n: "1", l: "production agent" }].map((s) => (
                <motion.div key={s.l} variants={fadeInUp} className="glass border border-[var(--color-glass-border)] rounded-2xl p-6 text-center">
                  <div className="text-4xl font-display font-bold" style={{ background: "linear-gradient(135deg,#a78bfa,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.n}</div>
                  <div className="text-sm text-[var(--color-text-muted)] mt-2">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Course Outline */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {t.coursePage.outline}
            </motion.h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {["🗓 2 weeks / 4 sessions", "🕒 Flexible schedule", "🌅 Video instructions in the morning"].map((c) => (
                <span key={c} className="glass border border-[var(--color-glass-border)] rounded-full px-4 py-2 text-sm text-[var(--color-text-secondary)]">{c}</span>
              ))}
            </div>
            <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {outline.map((block, i) => (
                <motion.div key={block.block} variants={fadeInUp} className="glass border border-[var(--color-glass-border)] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg,#7c3aed,#0ea5e9)" }}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[var(--color-text-primary)] font-semibold mb-3">{block.block}</h3>
                      <ul className="space-y-1.5 mb-3">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                            <span className="text-[#a78bfa] mt-0.5">→</span> {item}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-[var(--color-text-muted)] border-t border-[var(--color-glass-border)] pt-2 mt-2">— {block.note}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <p className="text-sm text-[var(--color-text-muted)] mt-6 p-4 glass border border-[var(--color-glass-border)] rounded-xl">
              ⚠️ {t.coursePage.supportNote}
            </p>
          </div>
        </section>

        {/* Program */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-2">{t.coursePage.program}</h2>
              <p className="text-[var(--color-text-muted)] text-sm">2 weeks • 4 sessions • realtime voice agent to production</p>
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {program.map((p) => (
                <motion.div key={p.day} variants={fadeInUp} className="glass border border-[var(--color-glass-border)] rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-xs font-bold text-[#a78bfa] uppercase tracking-wider mb-2">{p.day}</div>
                  <h4 className="text-[var(--color-text-primary)] font-semibold mb-1">{p.title}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#7c3aed]/10 border border-[#7c3aed]/20 px-2 py-0.5 rounded-full text-[#a78bfa]">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Before / After */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {t.coursePage.beforeAfter}
            </motion.h2>
            <div className="grid grid-cols-2 gap-4">
              <motion.div className="rounded-2xl p-6 border border-red-500/20 bg-red-500/5" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h4 className="text-red-400 font-semibold mb-4">Before</h4>
                <ul className="space-y-2">
                  {["Manual calling", "No call scripts", "No tracking or SLAs"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="text-red-400">✗</span> {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="rounded-2xl p-6 border border-green-500/20 bg-green-500/5" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h4 className="text-green-400 font-semibold mb-4">After</h4>
                <ul className="space-y-2">
                  {["Automated calls", "Scripted flows", "Metrics & SLAs"].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="text-green-400">✓</span> {i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {features.map((f) => (
                <motion.div key={f.title} variants={fadeInUp} className="glass border border-[var(--color-glass-border)] rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform">
                  <div className="text-3xl mb-3">{f.icon}</div>
                  <h3 className="text-[var(--color-text-primary)] font-semibold mb-1 text-sm">{f.title}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {t.coursePage.studentFeedback}
            </motion.h2>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {testimonials.map((t2, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass border border-[var(--color-glass-border)] rounded-2xl p-6">
                  <div className="text-yellow-400 mb-3 text-sm">★★★★★</div>
                  <blockquote className="text-[var(--color-text-secondary)] text-sm italic mb-4">&ldquo;{t2.quote}&rdquo;</blockquote>
                  <div className="text-xs text-[var(--color-text-muted)]">{t.coursePage.courseParticipant}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              FAQ
            </motion.h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <motion.div key={f.q} className="glass border border-[var(--color-glass-border)] rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}>
                  <button className="w-full flex justify-between items-center px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span className="text-[var(--color-text-primary)] font-medium text-sm">{f.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} className="text-[#a78bfa] text-lg">⌄</motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-5 pb-4 text-sm text-[var(--color-text-secondary)]">
                        {f.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Form */}
        <section className="py-16 border-t border-[var(--color-glass-border)]" id="apply">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="glass border border-[var(--color-glass-border)] rounded-2xl p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-2">{t.common.applicationSent}</h3>
                  <p className="text-[var(--color-text-secondary)]">{t.common.applicationReply}</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-2 text-center">{t.coursePage.secureSpot}</h3>
                  <p className="text-[var(--color-text-secondary)] text-center mb-8 text-sm">{t.common.fillFormReply}</p>
                  <div className="flex items-center gap-2 mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <span className="text-amber-400 text-sm">🎫</span>
                    <p className="text-sm text-amber-300">{t.coursePage.earlyBird} — <span className="font-mono font-bold">AIINSIDER10</span></p>
                  </div>
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
                          className="glass border border-[var(--color-glass-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-border)] bg-transparent text-sm w-full"
                        />
                      ))}
                    </div>
                    <textarea rows={3} placeholder={t.common.anythingToKnow} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full glass border border-[var(--color-glass-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-border)] bg-transparent text-sm resize-none"
                    />
                    <div className="flex gap-3 flex-wrap">
                      <button type="submit" className="px-8 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                        style={{ background: "linear-gradient(135deg,#7c3aed,#0ea5e9)" }}>
                        {t.coursePage.applyNow} — Sep 8
                      </button>
                      <a href="https://t.me/vladyslavarcher?text=Hello! I want to join AI Voice Agent (Sep 8, €39)." target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl border border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-border)] hover:text-[var(--color-text-primary)] text-sm font-medium transition-all">
                        {t.common.messageTelegram}
                      </a>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Related reads */}
        <section className="py-16 border-t border-[var(--color-glass-border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-8">{t.coursePage.recommendedReads}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Voice Agents with Vapi", sub: "Latency, barge-in, grounding", href: "/blog/voice-agents-vapi" },
                { title: "Evaluating LLM Systems", sub: "Quality, safety, costs", href: "/blog/evaluating-llm" },
                { title: "Shipping AI Agents", sub: "Traces, retries, guardrails", href: "/blog/ai-agents-production" },
              ].map((r) => (
                <Link key={r.title} href={r.href} className="glass border border-[var(--color-glass-border)] rounded-xl p-5 hover:border-[#7c3aed]/40 transition-all group">
                  <h3 className="text-[var(--color-text-primary)] font-medium text-sm mb-1 group-hover:text-[#a78bfa] transition-colors">{r.title}</h3>
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
