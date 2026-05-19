"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { useI18n } from "@landing/context/i18n-context";

const CARD_ACCENTS = [
  { gradient: "from-[#a855f7] to-[#7c3aed]", glow: "rgba(168,85,247,0.32)", star: "#fbbf24" },
  { gradient: "from-[#fb923c] to-[#f97316]", glow: "rgba(249,115,22,0.28)", star: "#fbbf24" },
  { gradient: "from-[#22d3ee] to-[#06b6d4]", glow: "rgba(34,211,238,0.28)", star: "#fbbf24" },
  { gradient: "from-[#ec4899] to-[#a855f7]", glow: "rgba(236,72,153,0.28)", star: "#fbbf24" },
];

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill="#fbbf24" aria-hidden>
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.52L10 14.9l-4.94 2.6.94-5.52-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-16 h-16 opacity-[0.07]"} aria-hidden>
      <path d="M9 7H5a2 2 0 0 0-2 2v6h6V9H6c0-1.1.9-2 2-2h1V7zm10 0h-4a2 2 0 0 0-2 2v6h6V9h-3c0-1.1.9-2 2-2h1V7z" />
    </svg>
  );
}

export interface StudentReview {
  quote: string;
  author: string;
}

interface Props {
  reviews: StudentReview[];
}

export default function StudentReviewsSection({ reviews }: Props) {
  const { t } = useI18n();

  return (
    <section className="relative py-20 border-t border-[var(--color-glass-border)] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-72 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
      <div
        className="absolute top-1/3 right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none hidden md:block"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 65%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-badge text-[#c084fc] text-[11px] font-medium uppercase tracking-[0.2em] mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7] animate-pulse-glow" />
            ★ 5.0
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] tracking-tight"
          >
            {t.coursePage.studentFeedback.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t.coursePage.studentFeedback.split(" ").slice(-1)}</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {reviews.map((review, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <motion.figure
                key={i}
                variants={fadeInUp}
                className="group relative rounded-2xl p-6 sm:p-7 glass border border-[var(--color-glass-border)] glow-hover-card overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                style={{ "--card-glow": accent.glow } as React.CSSProperties}
              >
                <span className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${accent.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
                <QuoteIcon className="absolute top-4 right-4 w-14 h-14 text-[#a855f7]" />

                <div className="relative z-10 mb-4">
                  <Stars />
                </div>

                <blockquote className="relative z-10 text-[var(--color-text-secondary)] text-sm sm:text-[15px] leading-relaxed mb-6 min-h-[4.5rem]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <figcaption className="relative z-10 flex items-center gap-3 pt-4 border-t border-[var(--color-glass-border)]">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold bg-gradient-to-br ${accent.gradient}`}
                    style={{ boxShadow: `0 4px 12px ${accent.glow}` }}
                  >
                    {String.fromCharCode(65 + (i % 26))}
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-[var(--color-text-primary)]">
                      {t.coursePage.courseParticipant}
                    </span>
                    <span className="block text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5">
                      Verified
                    </span>
                  </div>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
