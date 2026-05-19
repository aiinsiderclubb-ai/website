"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@landing/lib/motion";
import { useI18n } from "@landing/context/i18n-context";

const inputClass =
  "w-full rounded-xl border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.04)] px-4 py-3.5 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] transition-colors focus:outline-none focus:border-[#a855f7]/60 focus:ring-2 focus:ring-[#a855f7]/20";

interface Props {
  startDate: string;
  telegramHref: string;
}

export default function CourseBookingForm({ startDate, telegramHref }: Props) {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section className="relative py-20 border-t border-[var(--color-glass-border)]" id="apply">
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(100%,560px)] h-[280px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.12) 0%, transparent 70%)" }}
        aria-hidden
      />

      <motion.div
        className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative rounded-3xl overflow-hidden glass border border-[var(--color-glass-border)] glow-hover-card"
          style={{ "--card-glow": "rgba(168,85,247,0.25)" } as React.CSSProperties}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
          <motion.div
            className="absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)" }}
            aria-hidden
          />

          <motion.div className="relative p-8 sm:p-10 lg:p-12" variants={fadeInUp}>
            {submitted ? (
              <div className="text-center py-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#a855f7] to-[#f97316] text-3xl mb-5 shadow-[0_8px_32px_rgba(168,85,247,0.35)]">
                  ✓
                </div>
                <h3 className="text-2xl font-display font-bold text-[var(--color-text-primary)] mb-2">
                  Application Sent!
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm max-w-sm mx-auto">
                  We&apos;ll reply within 24 hours to confirm your spot.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c084fc] border border-[#a855f7]/30 bg-[#a855f7]/10 mb-4">
                    Enrollment
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-2">
                    {t.coursePage.secureSpot}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm max-w-md mx-auto leading-relaxed">
                    Fill the form — we&apos;ll reply within 24 hours. Or message us on Telegram.
                  </p>
                </div>

                <div className="flex items-start gap-3 mb-7 p-4 rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-500/10 to-orange-500/5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-lg">
                    🎫
                  </span>
                  <p className="text-sm text-amber-200/90 leading-snug pt-1.5">
                    {t.coursePage.earlyBird} —{" "}
                    <code className="font-mono font-bold text-amber-300 bg-amber-500/15 px-2 py-0.5 rounded-md">
                      AIINSIDER10
                    </code>{" "}
                    <span className="text-amber-400/70">(limited)</span>
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="sr-only">Your name</span>
                      <input
                        type="text"
                        placeholder="Your name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className="sr-only">Email</span>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="sr-only">Phone</span>
                      <input
                        type="tel"
                        placeholder="Phone (optional)"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="sr-only">Message</span>
                    <textarea
                      rows={4}
                      placeholder="Anything we should know?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </label>

                  <motion.div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm bg-gradient-to-r from-[#a855f7] to-[#f97316] shadow-[0_4px_24px_rgba(168,85,247,0.35)] hover:shadow-[0_6px_32px_rgba(168,85,247,0.45)] hover:opacity-95 transition-all"
                    >
                      {t.coursePage.applyNow} — {startDate}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden>
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <a
                      href={telegramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:border-[#a855f7]/40 hover:text-[var(--color-text-primary)] hover:bg-white/[0.03] text-sm font-medium transition-all"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#38bdf8]" aria-hidden>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                      </svg>
                      {t.common.messageTelegram}
                    </a>
                  </motion.div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
