"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)] relative overflow-hidden px-4">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0ea5e9]/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#7c3aed]/[0.05] rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center max-w-xl"
      >
        {/* Big 404 */}
        <div
          className="text-[10rem] sm:text-[14rem] font-display font-bold leading-none select-none mb-2"
          style={{
            background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0.18,
          }}
        >
          404
        </div>

        {/* Logo + headline */}
        <div className="flex items-center justify-center gap-3 mb-6 -mt-8 sm:-mt-14">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm">
            AI
          </div>
          <span className="text-[var(--color-text-primary)] font-semibold">AI Insider</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
          This page got lost in{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            the neural network
          </span>
        </h1>

        <p className="text-[var(--color-text-secondary)] mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Quick links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-medium rounded-full hover:shadow-[0_0_24px_rgba(14,165,233,0.35)] transition-all duration-300 text-sm"
          >
            ← Back to Home
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-glass-border)] text-[var(--color-text-primary)] font-medium rounded-full hover:bg-[var(--color-glass-bg)] hover:border-[var(--color-accent-border)] transition-all duration-300 text-sm"
          >
            Browse Courses
          </Link>
        </div>

        {/* Helpful links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          {[
            { label: "Blog", href: "/blog" },
            { label: "Community", href: "/community" },
            { label: "Reviews", href: "/reviews" },
            { label: "AI Studio", href: "/ai-studio" },
            { label: "B2B", href: "/b2b" },
            { label: "Case Studies", href: "/case-studies" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2.5 rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-accent)] text-center transition-colors"
              style={{ background: "var(--color-glass-bg)", border: "1px solid var(--color-glass-border)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
