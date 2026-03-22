"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function CommunityCTA() {
  return (
    <section id="community" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0ea5e9]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase mb-6"
          >
            Community
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-6"
          >
            Join Our Growing{" "}
            <span className="gradient-text">Community</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-xl mx-auto"
          >
            Connect with 6,000+ professionals learning and building with AI automation.
            Get access to resources, discussions, and support.
          </motion.p>

          <motion.div variants={fadeInUp} custom={3}>
            <a
              href={siteConfig.telegram}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white font-medium rounded-full hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-all duration-300 text-sm"
            >
              Join AI Insider Community
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            custom={4}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {["Free to join", "Expert content", "Active community", "No spam"].map(
              (label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]"
                >
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {label}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
