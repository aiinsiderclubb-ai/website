"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import PageLayout from "@/components/shared/PageLayout";

const courses = [
  {
    level: "Beginner",
    price: "€59",
    duration: "3 weeks",
    title: "AI Chat-Bot Development",
    startDate: "Rolling enrollment",
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
    startDate: "Rolling enrollment",
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
    href: "/courses/mentorship",
    vip: true,
  },
];

const benefits = [
  { title: "Expert Instruction", desc: "Learn from industry professionals with years of AI experience" },
  { title: "Lifetime Access", desc: "Once enrolled, access course content forever including updates" },
  { title: "Community Support", desc: "Join exclusive Telegram with 5,700+ AI enthusiasts and experts" },
  { title: "Certificates", desc: "Industry-recognized certificates to boost your professional profile" },
  { title: "Real Projects", desc: "Build portfolio-worthy projects that impress employers" },
  { title: "Money-Back Guarantee", desc: "Not satisfied? Get 100% refund within first 30 days" },
];

export default function CoursesPage() {
  return (
    <PageLayout
      badge="Courses Hub"
      title="AI Courses"
      subtitle="Choose your path — Chat-Bot or Voice Agent. See next start dates and details."
    >
      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-4">
              Premium Training
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Choose Your AI Mastery Path
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
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
                className={`relative rounded-2xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0ea5e9]/10 ${
                  course.vip
                    ? "bg-gradient-to-br from-[#7c3aed]/20 to-[#0ea5e9]/10 border-[#7c3aed]/40"
                    : "glass border-white/10"
                }`}
              >
                {course.vip && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] rounded-full text-white text-xs font-bold tracking-wider uppercase">
                    Most Popular
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    course.level === "VIP"
                      ? "bg-[#7c3aed]/20 text-[#a78bfa]"
                      : course.level === "Intermediate"
                      ? "bg-[#0ea5e9]/20 text-[#38bdf8]"
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
                  <span className="text-xs text-[#0ea5e9]">{course.startDate}</span>
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

                <Link
                  href={course.href}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    course.vip
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#0ea5e9] text-white hover:opacity-90"
                      : "bg-[#0ea5e9] hover:bg-[#0284c7] text-white"
                  }`}
                >
                  {course.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What You&apos;ll Get With Every Course
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeInUp} className="glass rounded-xl p-6 border border-white/8">
                <h4 className="text-white font-semibold mb-2">{b.title}</h4>
                <p className="text-[var(--color-text-secondary)] text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-4">
              Why AI Insider?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)]">
              AI Insider vs Other Options
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-[var(--color-text-muted)] font-medium w-1/3">Feature</th>
                  <th className="py-4 px-4 text-center rounded-t-xl" style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.15) 0%, rgba(124,58,237,0.15) 100%)", border: "1px solid rgba(14,165,233,0.25)", borderBottom: "none" }}>
                    <span className="gradient-text font-bold">AI Insider</span>
                  </th>
                  <th className="py-4 px-4 text-center text-[var(--color-text-muted)] font-medium">YouTube / Free</th>
                  <th className="py-4 px-4 text-center text-[var(--color-text-muted)] font-medium">Freelancer / Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Structured curriculum", "✅", "❌", "N/A"],
                  ["Hands-on projects", "✅", "🔶 Sometimes", "✅"],
                  ["1-on-1 support", "✅ Mentorship", "❌", "✅ Expensive"],
                  ["Community (6,000+)", "✅", "❌", "❌"],
                  ["Always up-to-date", "✅", "🔶 Varies", "✅"],
                  ["Certificate", "✅", "❌", "❌"],
                  ["Cost", "€39–€299", "Free", "€500–€5,000+"],
                  ["Time to first result", "1–3 weeks", "Months", "Depends"],
                ].map(([feature, ai, yt, agency], i) => (
                  <tr
                    key={feature}
                    className={i % 2 === 0 ? "bg-[var(--color-glass-bg)]" : ""}
                  >
                    <td className="py-3.5 px-4 text-[var(--color-text-secondary)] font-medium rounded-l-lg">{feature}</td>
                    <td className="py-3.5 px-4 text-center font-medium text-[var(--color-text-primary)]" style={{ borderLeft: "1px solid rgba(14,165,233,0.2)", borderRight: "1px solid rgba(14,165,233,0.2)" }}>{ai}</td>
                    <td className="py-3.5 px-4 text-center text-[var(--color-text-muted)]">{yt}</td>
                    <td className="py-3.5 px-4 text-center text-[var(--color-text-muted)] rounded-r-lg">{agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            className="glass rounded-2xl p-10 border border-white/10"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Join thousands of successful AI professionals. Start your journey today and unlock unlimited earning potential.
            </p>
            <a
              href="https://t.me/vladyslavarcher?text=Здравствуйте!%20Хочу%20узнать%20больше%20о%20ваших%20курсах%20по%20AI%20автоматизации."
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Course Consultation →
            </a>
            <p className="mt-4 text-sm text-[var(--color-text-muted)]">
              Have questions?{" "}
              <a href="https://t.me/vladyslavarcher" className="text-[#0ea5e9] hover:underline" target="_blank" rel="noopener noreferrer">
                Contact Course Manager @vladyslavarcher
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
