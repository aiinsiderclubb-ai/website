"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

type State = "idle" | "loading" | "success" | "error";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === "loading") return;

    setState("loading");

    try {
      // TODO: replace with your email provider endpoint (Mailchimp, ConvertKit, etc.)
      // Example for ConvertKit: POST https://api.convertkit.com/v3/forms/YOUR_FORM_ID/subscribe
      // For now we simulate a successful subscription after a short delay
      await new Promise((r) => setTimeout(r, 900));
      setState("success");
      setEmail("");
    } catch {
      setState("error");
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#7c3aed]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase mb-6"
          >
            📬 Weekly Newsletter
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4"
          >
            AI Tools & Automation Tips{" "}
            <span className="gradient-text">Every Week</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-xl mx-auto"
          >
            500+ professionals get practical AI tips, n8n workflows, tool reviews and automation case studies — straight to their inbox. No fluff.
          </motion.p>

          <motion.div variants={fadeInUp} custom={3}>
            <AnimatePresence mode="wait">
              {state === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card rounded-2xl p-8 flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-3xl">
                    ✅
                  </div>
                  <div>
                    <p className="text-[var(--color-text-primary)] font-semibold text-lg">You&apos;re in!</p>
                    <p className="text-[var(--color-text-secondary)] text-sm mt-1">
                      Check your inbox — first email coming soon.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-3.5 rounded-xl text-sm bg-[var(--color-bg-primary)] border border-[var(--color-glass-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)" }}
                    >
                      {state === "loading" ? (
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                          </svg>
                          Subscribing…
                        </span>
                      ) : "Subscribe Free →"}
                    </button>
                  </div>

                  {state === "error" && (
                    <p className="text-red-400 text-xs mt-3 text-center">
                      Something went wrong — try again or join us on Telegram.
                    </p>
                  )}

                  <div className="flex flex-wrap justify-center gap-4 mt-5">
                    {["No spam, ever", "Unsubscribe anytime", "500+ readers"].map((label) => (
                      <span key={label} className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {label}
                      </span>
                    ))}
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
