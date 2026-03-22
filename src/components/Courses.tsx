"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/data/content";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function Courses() {
  return (
    <section id="courses" className="section-padding relative overflow-hidden">
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
            Courses
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4"
          >
            Build Real{" "}
            <span className="gradient-text">AI Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto"
          >
            Practical courses designed by industry practitioners. From fundamentals to advanced implementation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              variants={fadeInUp}
              custom={i}
              whileHover={{ y: -6 }}
              className={`group glass-card rounded-2xl overflow-hidden transition-all duration-500 flex flex-col ${
                course.featured
                  ? "border-[#0ea5e9]/30 ring-1 ring-[#0ea5e9]/10"
                  : ""
              }`}
            >
              {course.featured && (
                <div className="bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-center py-1.5 text-xs font-semibold text-white tracking-wider uppercase">
                  VIP
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${
                    course.level === "Beginner"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : course.level === "Intermediate"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  }`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">{course.duration}</span>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-[var(--color-text-primary)]">{course.price}</span>
                </div>

                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
                  {course.title}
                  {course.subtitle && (
                    <>
                      <br />
                      <span className="text-sm font-normal text-[var(--color-text-muted)]">{course.subtitle}</span>
                    </>
                  )}
                </h3>

                <div className="flex flex-col gap-1.5 mb-4 mt-3">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                    <span className="text-xs text-[var(--color-text-secondary)]">{course.startDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]/70" />
                    <span className="text-xs text-[var(--color-text-secondary)]">{course.apiKeys}</span>
                  </div>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.features.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 rounded-lg text-[10px] section-badge text-[var(--color-text-muted)]"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <Link
                  href={course.href}
                  className={`block text-center py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    course.featured
                      ? "bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white hover:shadow-[0_0_24px_rgba(14,165,233,0.3)]"
                      : "card-btn-secondary"
                  }`}
                >
                  {course.ctaText}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
