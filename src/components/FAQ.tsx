"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

function FAQItem({ item, isOpen, toggle }: {
  item: typeof faqItems[0];
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent-border)]">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
      >
        <span className="text-sm sm:text-base font-medium text-[var(--color-text-primary)] pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 rounded-full bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] flex items-center justify-center shrink-0"
        >
          <svg className="w-3.5 h-3.5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase mb-6"
          >
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4"
          >
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-[var(--color-text-secondary)] text-base"
          >
            Everything you need to know to get started.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-3"
        >
          {faqItems.map((item, i) => (
            <motion.div key={item.question} variants={fadeInUp} custom={i}>
              <FAQItem
                item={item}
                isOpen={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
