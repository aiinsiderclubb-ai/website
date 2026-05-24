"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import PageLayout from "@landing/components/shared/PageLayout";
import SectionBridge from "@landing/components/SectionBridge";

type ColorScheme = {
  gradient: string;
  glow: string;
  text: string;
};

const COLORS: Record<string, ColorScheme> = {
  violet: { gradient: "from-[#a855f7] to-[#7c3aed]", glow: "rgba(168,85,247,0.35)", text: "#c084fc" },
  orange: { gradient: "from-[#fb923c] to-[#f97316]", glow: "rgba(249,115,22,0.35)", text: "#fb923c" },
  cyan: { gradient: "from-[#22d3ee] to-[#06b6d4]", glow: "rgba(34,211,238,0.35)", text: "#22d3ee" },
  pink: { gradient: "from-[#ec4899] to-[#a855f7]", glow: "rgba(236,72,153,0.35)", text: "#f472b6" },
  gold: { gradient: "from-[#facc15] to-[#f97316]", glow: "rgba(250,204,21,0.32)", text: "#fbbf24" },
  emerald: { gradient: "from-[#34d399] to-[#06b6d4]", glow: "rgba(52,211,153,0.32)", text: "#34d399" },
};

function Icon({ name, className }: { name: string; className?: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: className ?? "w-5 h-5",
  };
  switch (name) {
    case "lightning":
      return <svg {...props}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
    case "sparkle":
      return <svg {...props}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" /><path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9L19 14z" /></svg>;
    case "briefcase":
      return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
    case "wrench":
      return <svg {...props}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-2.6-2.6 2.4-2.4z" /></svg>;
    case "trophy":
      return <svg {...props}><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v5a5 5 0 0 1-10 0V4z" /><path d="M7 4H4v3a3 3 0 0 0 3 3" /><path d="M17 4h3v3a3 3 0 0 1-3 3" /></svg>;
    case "play":
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M10 9v6l5-3-5-3z" fill="currentColor" /></svg>;
    case "quote":
      return <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-5 h-5"}><path d="M9 7H5a2 2 0 0 0-2 2v6h6v-6H6c0-1.1.9-2 2-2h1V7zm10 0h-4a2 2 0 0 0-2 2v6h6v-6h-3c0-1.1.9-2 2-2h1V7z" /></svg>;
    default:
      return null;
  }
}

const features = [
  {
    title: "Instant Expert Help",
    desc: "Get answers to your AI questions within minutes from experienced practitioners who've solved similar challenges.",
    points: ["5min average response time", "50+ verified experts online", "Real solutions, not theory"],
    color: COLORS.violet,
    icon: "lightning",
    primary: true,
  },
  {
    title: "Exclusive Content & Resources",
    desc: "Daily tips, weekly case studies, and monthly deep-dives into cutting-edge AI tools and strategies.",
    points: ["Daily AI tool discoveries", "Weekly automation workflows", "Monthly expert sessions"],
    color: COLORS.orange,
    icon: "sparkle",
  },
  {
    title: "Business Opportunities",
    desc: "Connect with potential clients, partners, and collaborators. Many members found their dream jobs here.",
    points: ["Job board updates", "Partnership opportunities", "Client referrals"],
    color: COLORS.cyan,
    icon: "briefcase",
  },
  {
    title: "Tool Recommendations",
    desc: "Stay ahead with insider knowledge of the latest AI tools, often before they become mainstream.",
    points: ["Early access to tools", "Honest reviews & comparisons", "Setup tutorials & guides"],
    color: COLORS.pink,
    icon: "wrench",
  },
  {
    title: "Success Stories & Case Studies",
    desc: "Learn from real automation projects that generated significant ROI for businesses of all sizes.",
    points: ["Real revenue numbers", "Step-by-step breakdowns", "Replicable strategies"],
    color: COLORS.gold,
    icon: "trophy",
  },
  {
    title: "Free Mini-Courses",
    desc: "Regular bite-sized training sessions on specific AI topics, delivered right in the community.",
    points: ["Weekly mini-lessons", "Interactive Q&A sessions", "Downloadable resources"],
    color: COLORS.emerald,
    icon: "play",
  },
];

const stats = [
  { number: "5,742", label: "Total Members", growth: "+247 this week", color: COLORS.violet },
  { number: "356", label: "Messages Today", growth: "+23% vs yesterday", color: COLORS.orange },
  { number: "89%", label: "Active Weekly", growth: "Industry leading", color: COLORS.cyan },
  { number: "4.9/5", label: "Satisfaction", growth: "Based on 2,000+ reviews", color: COLORS.pink },
];

const testimonials = [
  {
    quote: "This community changed my career. Got my first AI automation client within 2 weeks of joining!",
    author: "Sarah M.",
    role: "Freelance AI Consultant",
    color: COLORS.violet,
  },
  {
    quote: "The daily tips alone are worth thousands. Implemented 3 automations that saved us 20 hours/week.",
    author: "Mike Chen",
    role: "Startup Founder",
    color: COLORS.orange,
  },
  {
    quote: "Best AI community on Telegram. Real experts, real advice, real results. Highly recommend!",
    author: "Elena Rodriguez",
    role: "Tech Director",
    color: COLORS.cyan,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function CommunityContent() {
  return (
    <PageLayout
      badge="Community"
      title="Join 5,742+ AI Automation"
      titleHighlight="Experts on Telegram"
      subtitle="Connect with like-minded entrepreneurs, get instant help from experts, and access exclusive content that's only shared in our private community."
    >
      {/* Top stats row */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 glass rounded-2xl p-6 sm:p-10 border border-[var(--color-glass-border)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { n: "5,742", l: "Active Members" },
              { n: "350+", l: "Daily Messages" },
              { n: "24/7", l: "Support Available" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-4xl font-display font-bold gradient-text">{s.n}</div>
                <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="https://t.me/+qjwWJz7aLR1hMDQ0"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#f97316] text-white font-semibold rounded-xl shadow-[0_0_28px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.45)] transition-shadow text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Telegram Channel →
            </a>
          </motion.div>
          <p className="text-center text-sm text-[var(--color-text-muted)] mt-3">
            Free to join · Instant access · Private community
          </p>
        </div>
      </section>

      <SectionBridge variant="violet-orange" curve="right" label="Benefits" />
      {/* Features Grid */}
      <section className="relative py-24 border-t border-white/5 overflow-hidden hud-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-72 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-[20%] left-[8%] h-16 w-16 border border-[#a855f7]/25 rotate-45 hidden md:block" />
        <div className="absolute bottom-[22%] right-[9%] h-20 w-20 border border-[#f97316]/25 rotate-45 hidden md:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-14" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
            <motion.span variants={fadeInUp} className="hud-badge mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7] animate-pulse-glow" />
              Benefits
            </motion.span>
            <motion.h2 variants={fadeInUp} className="hud-title text-3xl sm:text-4xl lg:text-5xl mb-4">
              Why 5,742+ Professionals Choose{" "}
              <span className="gradient-text">Our Community</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="hud-subtitle max-w-2xl mx-auto">
              More than just a chat group — it&apos;s your gateway to AI automation mastery and business success.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {features.map((f, i) => (
              <motion.article
                key={f.title}
                variants={fadeInUp}
                className={`group hud-frame hud-scan hud-panel relative rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  f.primary
                    ? "border-[var(--color-accent-border)] glow-hover-card"
                    : "glass border-[var(--color-glass-border)] glow-hover-card"
                }`}
                style={{
                  background: f.primary
                    ? "linear-gradient(160deg, rgba(168,85,247,0.18) 0%, rgba(249,115,22,0.08) 100%)"
                    : undefined,
                  "--card-glow": f.color.glow,
                } as React.CSSProperties}
              >
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${f.color.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                <div
                  className="absolute -top-2 right-4 h-px w-0 group-hover:w-20 transition-all duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${f.color.text})` }}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                      backgroundSize: "26px 26px",
                    }}
                  />
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${f.color.gradient} text-white transition-transform duration-300 group-hover:scale-110`}
                    style={{ boxShadow: `0 6px 20px ${f.color.glow}` }}
                  >
                    <Icon name={f.icon} />
                  </div>
                  <span className="block pt-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-display font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">{f.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">{f.desc}</p>

                <ul className="space-y-1.5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-[var(--color-text-secondary)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke={f.color.text} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mt-0.5 shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionBridge variant="orange-violet" curve="left" label="Live Pulse" />
      {/* Stats + Testimonials */}
      <section className="relative py-24 border-t border-white/5 overflow-hidden hud-grid">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="hud-badge mb-5 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_8px_#22d3ee] animate-pulse-glow" />
              Live Pulse
            </motion.span>
            <motion.h2 variants={fadeInUp} className="hud-title text-3xl sm:text-4xl lg:text-5xl">
              Active &amp; <span className="gradient-text">Growing</span> Community
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeInUp}
                className="group hud-frame hud-scan hud-panel relative overflow-hidden rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${s.color.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color.text}, transparent)` }}
                />
                <div
                  className={`text-3xl sm:text-4xl font-display font-bold bg-gradient-to-br ${s.color.gradient} bg-clip-text text-transparent leading-none`}
                >
                  {s.number}
                </div>
                <div className="text-sm text-[var(--color-text-primary)] mt-2 font-medium">{s.label}</div>
                <div className="text-[11px] text-[var(--color-text-muted)] mt-1">{s.growth}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((tm) => (
              <motion.figure
                key={tm.author}
                variants={fadeInUp}
                className="group hud-frame hud-scan hud-panel relative rounded-2xl p-6 sm:p-7 glow-hover-card overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ "--card-glow": tm.color.glow } as React.CSSProperties}
              >
                {/* Quote icon */}
                <div className={`absolute -top-2 -right-2 w-20 h-20 opacity-10 ${tm.color.text}`} style={{ color: tm.color.text }}>
                  <Icon name="quote" className="w-full h-full" />
                </div>
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${tm.color.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <blockquote className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{tm.quote}&rdquo;
                </blockquote>

                <figcaption className="flex items-center gap-3 relative z-10">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-br ${tm.color.gradient}`}
                    style={{ boxShadow: `0 4px 14px ${tm.color.glow}` }}
                  >
                    {initials(tm.author)}
                  </div>
                  <div>
                    <div className="text-[var(--color-text-primary)] font-semibold text-sm">{tm.author}</div>
                    <div className="text-[var(--color-text-muted)] text-xs">{tm.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionBridge variant="violet-orange" curve="right" label="Join" />
      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            className="relative hud-frame hud-scan hud-panel rounded-2xl p-10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />
            <div className="absolute top-4 left-4 h-10 w-10 border-l border-t border-[#a855f7]/30 pointer-events-none" />
            <div className="absolute bottom-4 right-4 h-10 w-10 border-r border-b border-[#f97316]/30 pointer-events-none" />

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-4">
                Ready to Join 5,742+ <span className="gradient-text">AI Experts?</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Get instant access to the most active AI automation community on Telegram. Free forever, no spam, real value.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { title: "Learn Daily", desc: "New AI tools, tips, and strategies shared every day" },
                  { title: "Network", desc: "Connect with entrepreneurs, developers, and business owners" },
                  { title: "Earn More", desc: "Members report average 40% income increase within 6 months" },
                ].map((b) => (
                  <div key={b.title} className="text-center">
                    <h4 className="text-[var(--color-text-primary)] font-semibold text-sm mb-1">{b.title}</h4>
                    <p className="text-[var(--color-text-muted)] text-xs">{b.desc}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://t.me/+qjwWJz7aLR1hMDQ0"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a855f7] via-[#c084fc] to-[#f97316] text-white font-semibold rounded-xl shadow-[0_0_28px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(249,115,22,0.45)] transition-shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join AI Insider Community Now →
              </a>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-4 text-xs text-[var(--color-text-muted)]">
                <span>Free forever</span>
                <span>Instant access</span>
                <span>Private &amp; secure</span>
                <span>Mobile friendly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
