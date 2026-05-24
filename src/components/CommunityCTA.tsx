"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@landing/data/content";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { useI18n } from "@landing/context/i18n-context";

const ORBIT_NODES = [
  { angle: 0, color: "#a855f7", label: "n8n" },
  { angle: 60, color: "#22d3ee", label: "GPT" },
  { angle: 120, color: "#f97316", label: "Vapi" },
  { angle: 180, color: "#ec4899", label: "RAG" },
  { angle: 240, color: "#34d399", label: "API" },
  { angle: 300, color: "#fbbf24", label: "CRM" },
];

export default function CommunityCTA() {
  const { t } = useI18n();

  return (
    <section
      id="community"
      className="section-padding relative overflow-hidden"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-[var(--color-bg-primary)]" />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />
      {/* Aurora gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70"
        style={{
          background:
            "radial-gradient(45% 35% at 30% 40%, rgba(168,85,247,0.30) 0%, transparent 70%), radial-gradient(40% 30% at 70% 60%, rgba(249,115,22,0.22) 0%, transparent 70%), radial-gradient(35% 25% at 50% 90%, rgba(34,211,238,0.22) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Outer card */}
          <div className="relative rounded-[28px] overflow-hidden">
            {/* Animated neon border */}
            <div
              className="absolute inset-0 rounded-[28px] pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, rgba(168,85,247,0.7), rgba(34,211,238,0.6), rgba(249,115,22,0.7), rgba(168,85,247,0.7))",
                padding: 1,
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                  animation: "spin-slow 16s linear infinite",
              }}
            />

            {/* Inner panel with deep blur */}
            <div
              className="relative rounded-[28px] px-6 sm:px-12 py-14 sm:py-20 text-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,12,31,0.85) 0%, rgba(7,6,15,0.92) 100%)",
                backdropFilter: "blur(14px) saturate(140%)",
                WebkitBackdropFilter: "blur(14px) saturate(140%)",
                boxShadow:
                  "0 30px 80px rgba(124,58,237,0.18), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Corner brackets */}
              <span className="absolute top-4 left-4 h-6 w-6 border-l-2 border-t-2 border-[#a855f7]/60 rounded-tl-md" />
              <span className="absolute top-4 right-4 h-6 w-6 border-r-2 border-t-2 border-[#22d3ee]/60 rounded-tr-md" />
              <span className="absolute bottom-4 left-4 h-6 w-6 border-l-2 border-b-2 border-[#f97316]/60 rounded-bl-md" />
              <span className="absolute bottom-4 right-4 h-6 w-6 border-r-2 border-b-2 border-[#a855f7]/60 rounded-br-md" />

              {/* Status chip */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/[0.08] text-emerald-300 text-[10px] font-semibold uppercase tracking-[0.22em] mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Live · 6,000+ online
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-[var(--color-text-primary)] mb-5 tracking-tight leading-[1.05]"
              >
                {t.communityCta.title}{" "}
                <span className="gradient-text">{t.communityCta.titleHighlight}</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={fadeInUp}
                className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
              >
                {t.communityCta.subtitle}
              </motion.p>

              {/* Orbit visualisation */}
              <motion.div
                variants={fadeInUp}
                className="relative mx-auto mb-10 hidden sm:block"
                style={{ width: 320, height: 220 }}
              >
                {/* Outer ring */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto rounded-full border border-[#a855f7]/25"
                  style={{ width: 260, height: 260, marginTop: -130, animation: "spin-slow 28s linear infinite" }}
                />
                {/* Inner ring */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto rounded-full border border-[#22d3ee]/20"
                  style={{ width: 180, height: 180, marginTop: -90, animation: "spin-slow 18s linear infinite reverse" }}
                />

                {/* Center hub */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-sm tracking-tight"
                    style={{
                      background: "linear-gradient(135deg,#a855f7,#7c3aed 60%,#f97316)",
                      boxShadow: "0 0 40px rgba(168,85,247,0.6), 0 0 0 1px rgba(255,255,255,0.08) inset",
                    }}
                  >
                    AI
                  </div>
                </div>

                {/* Orbiting nodes */}
                {ORBIT_NODES.map((n, i) => {
                  const radius = i % 2 === 0 ? 130 : 90;
                  const x = 160 + Math.cos((n.angle * Math.PI) / 180) * radius;
                  const y = 110 + Math.sin((n.angle * Math.PI) / 180) * radius;
                  return (
                    <motion.div
                      key={n.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: x, top: y }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div
                        className="px-2.5 py-1 rounded-md text-[10px] font-bold backdrop-blur-md border"
                        style={{
                          color: n.color,
                          borderColor: `${n.color}55`,
                          background: `${n.color}14`,
                          boxShadow: `0 0 14px ${n.color}55`,
                        }}
                      >
                        {n.label}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* CTA buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-sm overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg,#a855f7 0%,#7c3aed 50%,#f97316 100%)",
                    boxShadow: "0 10px 32px rgba(168,85,247,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset",
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.communityCta.joinBtn}
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {/* Shimmer */}
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                    }}
                  />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-white/15 text-[var(--color-text-primary)] text-sm font-medium hover:border-[#a855f7]/40 hover:bg-white/[0.03] transition-all"
                >
                  See how it works
                </a>
              </motion.div>

              {/* Trust labels */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs text-[var(--color-text-muted)]"
              >
                {[t.communityCta.label1, t.communityCta.label2, t.communityCta.label3, t.communityCta.label4].map(
                  (label) => (
                    <span key={label} className="flex items-center gap-2">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42L8.5 12.085l6.79-6.795a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {label}
                    </span>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
