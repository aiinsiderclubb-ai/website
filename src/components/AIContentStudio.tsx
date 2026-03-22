"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const SERVICES = [
  {
    id: "influencer",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "#7c3aed",
    colorBg: "rgba(124,58,237,0.15)",
    label: "AI-інфлюенсери",
    sublabel: "Віртуальні персонажі для бренду",
    metric: "3M+",
    metricLabel: "підписників",
    preview: {
      engagement: "+340%",
      content: "500+",
      savings: "80%",
    },
  },
  {
    id: "video",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="16" height="14" rx="2" />
        <path d="M18 7l4-2v10l-4-2" />
      </svg>
    ),
    color: "#0ea5e9",
    colorBg: "rgba(14,165,233,0.15)",
    label: "AI-відео",
    sublabel: "Відео без камер і команд",
    metric: "500+",
    metricLabel: "відео/міс",
    preview: {
      engagement: "+210%",
      content: "500+",
      savings: "70%",
    },
  },
  {
    id: "ugc",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: "#f97316",
    colorBg: "rgba(249,115,22,0.15)",
    label: "AI UGC",
    sublabel: "UGC-реклама у масштабі",
    metric: "80%",
    metricLabel: "економія",
    preview: {
      engagement: "+180%",
      content: "200+",
      savings: "80%",
    },
  },
  {
    id: "creative",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    color: "#22c55e",
    colorBg: "rgba(34,197,94,0.15)",
    label: "AI Креативна студія",
    sublabel: "Креативи та банери без дизайнерів",
    metric: "100+",
    metricLabel: "креативів/міс",
    preview: {
      engagement: "+120%",
      content: "100+",
      savings: "90%",
    },
  },
];

const BOTTOM_STATS = [
  { value: "10x", label: "контенту" },
  { value: "80%", label: "економія" },
  { value: "10+", label: "мов" },
];

function PhoneMockup({ activeService }: { activeService: typeof SERVICES[0] }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow behind phone */}
      <div
        className="absolute w-64 h-64 rounded-full blur-[80px] transition-all duration-700"
        style={{ background: `${activeService.color}22` }}
      />

      {/* Phone frame */}
      <motion.div
        key={activeService.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-[220px] sm:w-[260px] rounded-[36px] overflow-hidden"
        style={{
          background: "#111",
          border: "2px solid rgba(255,255,255,0.12)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
          aspectRatio: "9/19",
        }}
      >
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-20" />

        {/* Video content area */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient background simulating video */}
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `linear-gradient(160deg, ${activeService.color}33 0%, #0a0a0a 60%, #1a0a2e 100%)`,
            }}
          />

          {/* Simulated person silhouette */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-56 opacity-30"
            style={{
              background: `radial-gradient(ellipse at center bottom, ${activeService.color}55 0%, transparent 70%)`,
            }}
          />

          {/* LIVE badge */}
          <div className="absolute top-8 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[10px] font-bold text-white tracking-wider">НАЖИВО</span>
          </div>

          {/* Username */}
          <div className="absolute top-8 right-4 px-2.5 py-1 rounded-full z-10"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}>
            <span className="text-[10px] text-white/80">@ai_influencer</span>
          </div>

          {/* Play/pause control */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            </div>
          </div>

          {/* Active service tag */}
          <div className="absolute bottom-28 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full z-10"
            style={{ background: activeService.color, boxShadow: `0 0 12px ${activeService.color}88` }}>
            <span className="text-[10px] font-bold text-white">{activeService.label.split(" ")[0]} {activeService.label.split(" ")[1] || ""}</span>
          </div>

          {/* Bottom info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)" }}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold"
                style={{ background: activeService.color }}>
                AI
              </div>
              <div>
                <div className="text-white text-[11px] font-semibold">AI-креатор</div>
                <div className="text-white/50 text-[9px]">2.5М підписників</div>
              </div>
            </div>
            <p className="text-white/60 text-[9px]">Створює контент 24/7 без перерв</p>
          </div>
        </div>
      </motion.div>

      {/* Floating stats card */}
      <motion.div
        key={`stats-${activeService.id}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="absolute -right-2 sm:-right-8 top-16 w-36 rounded-2xl p-3"
        style={{
          background: "rgba(15,15,15,0.95)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-5 h-5 rounded-lg flex items-center justify-center text-white"
            style={{ background: activeService.color }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
            </svg>
          </div>
          <span className="text-[10px] text-white font-semibold">AI-інфлюенсер</span>
        </div>

        <div className="text-[8px] text-white/40 uppercase tracking-wider mb-2">Показники</div>
        <div className="space-y-1.5">
          {[
            { label: "Залучення", value: activeService.preview.engagement, color: "#22c55e" },
            { label: "Контент/міс", value: activeService.preview.content, color: "white" },
            { label: "Економія", value: activeService.preview.savings, color: activeService.color },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between">
              <span className="text-[9px] text-white/50">{row.label}</span>
              <span className="text-[10px] font-bold" style={{ color: row.color }}>{row.value}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-2.5 flex flex-wrap gap-1">
          {SERVICES.map((s) => (
            <span
              key={s.id}
              className="text-[8px] px-1.5 py-0.5 rounded-md font-medium transition-all"
              style={{
                background: s.id === activeService.id ? activeService.color : "rgba(255,255,255,0.06)",
                color: s.id === activeService.id ? "white" : "rgba(255,255,255,0.4)",
              }}
            >
              {s.label.replace("AI ", "AI ")}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Dots indicator */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SERVICES.map((s, i) => (
          <div
            key={s.id}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: s.id === activeService.id ? "16px" : "6px",
              background: s.id === activeService.id ? activeService.color : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AIContentStudio() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = SERVICES[activeIdx];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)]" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 rounded-full pointer-events-none transition-all duration-700"
        style={{ background: `radial-gradient(circle, ${activeService.color}08 0%, transparent 70%)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} custom={0} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full section-badge text-[var(--color-text-muted)] text-xs font-medium tracking-wider uppercase">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: activeService.color }}
                />
                AI Контент-Студія
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--color-text-primary)] leading-tight mb-4"
            >
              AI-контент{" "}
              <span className="gradient-text">для маркетингу</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8 max-w-lg"
            >
              AI-інфлюенсери, відеопродакшн, UGC-реклама та креативи — без зйомок, дизайнерів та контентних &ldquo;затичок&rdquo;
            </motion.p>

            {/* Service list */}
            <motion.div variants={fadeInUp} custom={3} className="space-y-3 mb-8">
              {SERVICES.map((service, i) => (
                <button
                  key={service.id}
                  onClick={() => setActiveIdx(i)}
                  className="w-full text-left group transition-all duration-300"
                >
                  <div
                    className="flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300"
                    style={{
                      background: i === activeIdx
                        ? `${service.color}15`
                        : "var(--color-glass-bg)",
                      border: `1px solid ${i === activeIdx ? service.color + "40" : "var(--color-glass-border)"}`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                        style={{ background: service.colorBg, color: service.color }}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <div
                          className="text-sm font-semibold transition-colors"
                          style={{ color: i === activeIdx ? service.color : "var(--color-text-primary)" }}
                        >
                          {service.label}
                        </div>
                        <div className="text-xs text-[var(--color-text-muted)]">{service.sublabel}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <div className="text-right">
                        <span
                          className="text-sm font-bold"
                          style={{ color: i === activeIdx ? service.color : "var(--color-text-secondary)" }}
                        >
                          {service.metric}
                        </span>
                        <span className="text-xs text-[var(--color-text-muted)] ml-1">{service.metricLabel}</span>
                      </div>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{ color: i === activeIdx ? service.color : "var(--color-text-muted)" }}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} custom={4} className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/ai-studio"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)]"
                style={{ background: "linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)" }}
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
                <span className="relative">Дізнатись більше</span>
                <svg className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-glass-border)] hover:border-[var(--color-accent-border)] transition-all duration-300">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.2)" }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#7c3aed" }}>
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
                Дивитись приклади
              </button>
            </motion.div>

            {/* Bottom stats */}
            <motion.div variants={fadeInUp} custom={5} className="flex items-center gap-6">
              {BOTTOM_STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold text-[var(--color-text-primary)]">{s.value}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Phone mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end pr-12 lg:pr-16"
          >
            <AnimatePresence mode="wait">
              <PhoneMockup key={activeIdx} activeService={activeService} />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
