"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import PageLayout from "@landing/components/shared/PageLayout";

const courses = [
  {
    level: "Beginner",
    price: "€59",
    duration: "3 weeks",
    title: "AI Chat-Bot Development",
    startDate: "Starts September 15",
    badge: "API keys included",
    description:
      "From zero to a niche-ready bot for services, e-commerce or healthcare. Practice on real tasks with templates and guidance. Includes a quick sales playbook.",
    features: ["Templates", "Support", "Sales playbook", "Real cases"],
    cta: "Enroll — €59",
    href: "/courses/chatbot",
    vip: false,
  },
  {
    level: "Intermediate",
    price: "€39",
    duration: "2 weeks",
    title: "AI Voice Agent (Vapi.ai & Whisper)",
    startDate: "Starts September 8",
    badge: "API keys included",
    description:
      "Design scenarios, wire real-time actions and take your agent to production for services, healthcare or sales.",
    features: ["Voice synthesis", "Realtime actions", "Templates", "Certificate"],
    cta: "Join — €39",
    href: "/courses/voice",
    vip: false,
  },
  {
    level: "VIP",
    price: "€299",
    duration: "2 weeks",
    title: "Personal ChatBot Mentorship",
    startDate: "Your First €1000",
    badge: "VIP Access",
    description:
      "1-on-1 mentorship to create and monetize your first chatbot. Personal guidance, direct feedback, a revenue playbook and unlimited support.",
    features: ["Personal mentor", "Direct communication", "Revenue playbook", "Unlimited support"],
    cta: "Get VIP Mentorship — €299",
    href: "https://t.me/vladyslavarcher?text=Привет!%20Интересует%20Personal%20ChatBot%20Mentorship%20(€299)",
    vip: true,
  },
];

const benefits = [
  {
    title: "Expert Instruction",
    desc: "Learn from industry professionals with years of AI experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2L3 7l9 5 9-5-9-5z" /><path d="M3 17l9 5 9-5" /><path d="M3 12l9 5 9-5" />
      </svg>
    ),
    gradient: "from-[#a855f7] to-[#7c3aed]",
    glow: "rgba(168,85,247,0.35)",
  },
  {
    title: "Lifetime Access",
    desc: "Once enrolled, the course content is yours forever — including all future updates.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
    gradient: "from-[#fb923c] to-[#f97316]",
    glow: "rgba(249,115,22,0.35)",
  },
  {
    title: "Community Support",
    desc: "Join an exclusive Telegram with 5,700+ AI builders and instant expert help.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" /><path d="M17 3.13A4 4 0 0 1 17 11.87" />
      </svg>
    ),
    gradient: "from-[#22d3ee] to-[#06b6d4]",
    glow: "rgba(34,211,238,0.35)",
  },
  {
    title: "Certificates",
    desc: "Industry-recognized certificates to back up your skills on LinkedIn and CV.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
      </svg>
    ),
    gradient: "from-[#ec4899] to-[#a855f7]",
    glow: "rgba(236,72,153,0.35)",
  },
  {
    title: "Real Projects",
    desc: "Build portfolio-worthy automation that ships to production — not slide demos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
    gradient: "from-[#f97316] to-[#facc15]",
    glow: "rgba(249,115,22,0.35)",
  },
  {
    title: "Money-Back Guarantee",
    desc: "Not satisfied? Get a 100% refund within the first 30 days. No questions asked.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    gradient: "from-[#34d399] to-[#06b6d4]",
    glow: "rgba(52,211,153,0.35)",
  },
];

export default function CoursesContent() {
  return (
    <PageLayout
      badge="Courses Hub"
      title="AI Courses"
      subtitle="Choose your path — Chat-Bot or Voice Agent. See next start dates and details."
      flowWaypoints={[
        { y: 18, label: "Programs", color: "#c084fc" },
        { y: 46, label: "What You Get", color: "#fb923c" },
        { y: 78, label: "Enroll", color: "#fbbf24" },
      ]}
    >
      {/* Courses Grid */}
      <section className="py-20 hud-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeInUp} className="hud-badge mb-4">
              Premium Training
            </motion.span>
            <motion.h2 variants={fadeInUp} className="hud-title text-3xl sm:text-4xl mb-4">
              Choose Your AI Mastery Path
            </motion.h2>
            <motion.p variants={fadeInUp} className="hud-subtitle max-w-2xl mx-auto">
              Exclusive courses designed by industry experts. From beginner to enterprise level.
              Limited enrollment — secure your spot today.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {courses.map((course) => (
              <motion.div
                key={course.title}
                variants={fadeInUp}
                className={`relative hud-frame hud-scan hud-panel rounded-2xl p-6 flex flex-col glow-hover-card transition-all duration-300 hover:-translate-y-1 ${
                  course.vip
                    ? "bg-gradient-to-br from-[#f97316]/20 to-[#f97316]/15 border-[#7c3aed]/40"
                    : "glass border-white/10"
                }`}
                style={{
                  "--card-glow": course.vip ? "rgba(249,115,22,0.35)" : "rgba(168,85,247,0.32)",
                } as React.CSSProperties}
              >
                {course.vip && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#f97316] to-[#a855f7] rounded-full text-white text-xs font-bold tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    course.level === "VIP"
                      ? "bg-[#7c3aed]/20 text-[#a78bfa]"
                      : course.level === "Intermediate"
                      ? "bg-[#a855f7]/20 text-[#fb923c]"
                      : "bg-green-500/20 text-green-400"
                  }`}>
                    {course.level}
                  </span>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{course.price}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">{course.duration}</div>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2">{course.title}</h3>
                <div className="flex gap-3 mb-3 flex-wrap">
                  <span className="text-xs text-[#c084fc]">{course.startDate}</span>
                  <span className="text-xs text-[var(--color-text-muted)]">• {course.badge}</span>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow">{course.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.features.map((f) => (
                    <span key={f} className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-md">
                      ✓ {f}
                    </span>
                  ))}
                </div>

                <a
                  href={course.href}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    course.vip
                      ? "bg-gradient-to-r from-[#f97316] to-[#a855f7] text-white hover:opacity-90"
                      : "bg-[#a855f7] hover:bg-[#9333ea] text-white"
                  }`}
                >
                  {course.cta}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 border-t border-white/5 overflow-hidden hud-grid">
        {/* Decorative gradient bar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-72 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent" />
        <div className="absolute top-[18%] left-[8%] h-16 w-16 border border-[#a855f7]/25 rotate-45 hidden md:block" />
        <div className="absolute bottom-[18%] right-[10%] h-20 w-20 border border-[#f97316]/25 rotate-45 hidden md:block" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeInUp} className="hud-badge mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_8px_#a855f7] animate-pulse-glow" />
              Every Enrollment
            </motion.span>
            <motion.h3 variants={fadeInUp} className="hud-title text-3xl sm:text-4xl lg:text-5xl mb-4">
              What You&apos;ll Get With{" "}
              <span className="gradient-text">Every Course</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="hud-subtitle max-w-2xl mx-auto">
              Six benefits included with every course — designed to take you from theory to production-ready skills.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {benefits.map((b, i) => (
              <motion.article
                key={b.title}
                variants={fadeInUp}
                className="group hud-frame hud-scan hud-panel relative rounded-2xl p-6 sm:p-7 overflow-hidden glow-hover-card transition-all duration-300 hover:-translate-y-1"
                style={{ "--card-glow": b.glow } as React.CSSProperties}
              >
                {/* Top gradient hairline */}
                <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${b.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                {/* Animated AI accent line */}
                <div
                  className="absolute top-3 right-4 h-px w-0 group-hover:w-20 transition-all duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${b.glow})` }}
                />

                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${b.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    style={{ boxShadow: `0 6px 20px ${b.glow}` }}
                  >
                    {b.icon}
                  </div>
                  <div className="flex-1 min-w-0 pt-1.5">
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-display font-semibold text-[var(--color-text-primary)] mb-2 leading-snug">
                  {b.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {b.desc}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hud-grid">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            className="hud-panel hud-frame hud-scan rounded-2xl p-10"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="hud-title text-2xl sm:text-3xl mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="hud-subtitle mb-8">
              Join thousands of successful AI professionals. Start your journey today and unlock unlimited earning potential.
            </p>
            <a
              href="https://t.me/vladyslavarcher?text=Здравствуйте!%20Хочу%20узнать%20больше%20о%20ваших%20курсах%20по%20AI%20автоматизации."
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Course Consultation →
            </a>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Have questions?{" "}
              <a href="https://t.me/vladyslavarcher" className="text-[#c084fc] hover:underline" target="_blank" rel="noopener noreferrer">
                Contact Course Manager @vladyslavarcher
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
