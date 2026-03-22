"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full section-badge text-[var(--color-text-muted)] text-xs tracking-wider uppercase mb-6"
          >
            What our students say
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4"
          >
            Real Results from{" "}
            <span className="gradient-text">Real People</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto"
          >
            Hear from professionals who have accelerated their careers and businesses with AI automation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -4 }}
              className={`glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                t.featured ? "border-[#0ea5e9]/20 md:scale-[1.02]" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--color-glass-border)] shrink-0 relative">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[var(--color-text-primary)] font-semibold text-sm">{t.name}</h3>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold gradient-text">{t.metric}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">{t.metricLabel}</span>
                </div>
              </div>

              <blockquote className="text-sm text-[var(--color-text-secondary)] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
