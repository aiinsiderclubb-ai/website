"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import PageLayout from "@/components/shared/PageLayout";

const features = [
  {
    title: "Instant Expert Help",
    desc: "Get answers to your AI questions within minutes from experienced practitioners who've solved similar challenges.",
    points: ["5min average response time", "50+ verified experts online", "Real solutions, not theory"],
    primary: true,
  },
  {
    title: "Exclusive Content & Resources",
    desc: "Daily tips, weekly case studies, and monthly deep-dives into cutting-edge AI tools and strategies.",
    points: ["Daily AI tool discoveries", "Weekly automation workflows", "Monthly expert sessions"],
  },
  {
    title: "Business Opportunities",
    desc: "Connect with potential clients, partners, and collaborators. Many members found their dream jobs here.",
    points: ["Job board updates", "Partnership opportunities", "Client referrals"],
  },
  {
    title: "Tool Recommendations",
    desc: "Stay ahead with insider knowledge of the latest AI tools, often before they become mainstream.",
    points: ["Early access to tools", "Honest reviews & comparisons", "Setup tutorials & guides"],
  },
  {
    title: "Success Stories & Case Studies",
    desc: "Learn from real automation projects that generated significant ROI for businesses of all sizes.",
    points: ["Real revenue numbers", "Step-by-step breakdowns", "Replicable strategies"],
  },
  {
    title: "Free Mini-Courses",
    desc: "Regular bite-sized training sessions on specific AI topics, delivered right in the community.",
    points: ["Weekly mini-lessons", "Interactive Q&A sessions", "Downloadable resources"],
  },
];

const stats = [
  { number: "5,742", label: "Total Members", growth: "+247 this week" },
  { number: "356", label: "Messages Today", growth: "+23% vs yesterday" },
  { number: "89%", label: "Active Weekly", growth: "Industry leading" },
  { number: "4.9/5", label: "Satisfaction", growth: "Based on 2,000+ reviews" },
];

const testimonials = [
  {
    quote: "This community changed my career. Got my first AI automation client within 2 weeks of joining!",
    author: "Sarah M.",
    role: "Freelance AI Consultant",
  },
  {
    quote: "The daily tips alone are worth thousands. Implemented 3 automations that saved us 20 hours/week.",
    author: "Mike Chen",
    role: "Startup Founder",
  },
  {
    quote: "Best AI community on Telegram. Real experts, real advice, real results. Highly recommend!",
    author: "Elena Rodriguez",
    role: "Tech Director",
  },
];

export default function CommunityPage() {
  return (
    <PageLayout
      badge="Community"
      title="Join 5,742+ AI Automation"
      titleHighlight="Experts on Telegram"
      subtitle="Connect with like-minded entrepreneurs, get instant help from experts, and access exclusive content that's only shared in our private community."
    >
      {/* Stats row */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-8 glass rounded-2xl p-6 sm:p-10 border border-white/10"
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Telegram Channel →
            </a>
          </motion.div>
          <p className="text-center text-sm text-[var(--color-text-muted)] mt-3">Free to join · Instant access · Private community</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-4">
              Benefits
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Why 5,742+ Professionals Choose Our Community
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              More than just a chat group — it&apos;s your gateway to AI automation mastery and business success.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  f.primary
                    ? "bg-gradient-to-br from-[#0ea5e9]/20 to-[#7c3aed]/10 border-[#0ea5e9]/30"
                    : "glass border-white/10 hover:border-white/20"
                }`}
              >
                <h3 className="text-lg font-display font-bold text-white mb-2">{f.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">{f.desc}</p>
                <div className="space-y-1">
                  {f.points.map((p) => (
                    <div key={p} className="text-xs text-[#38bdf8]">• {p}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl font-display font-bold text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Active & Growing Community
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="glass rounded-xl p-6 border border-white/10 text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold gradient-text">{s.number}</div>
                <div className="text-sm text-white mt-1 font-medium">{s.label}</div>
                <div className="text-xs text-[#0ea5e9] mt-1">{s.growth}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((t) => (
              <motion.div key={t.author} variants={fadeInUp} className="glass rounded-xl p-6 border border-white/10">
                <p className="text-[var(--color-text-secondary)] text-sm italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.author}</div>
                  <div className="text-[var(--color-text-muted)] text-xs">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            className="glass rounded-2xl p-10 border border-white/10"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Ready to Join 5,742+ AI Automation Experts?
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
                  <h4 className="text-white font-semibold text-sm mb-1">{b.title}</h4>
                  <p className="text-[var(--color-text-muted)] text-xs">{b.desc}</p>
                </div>
              ))}
            </div>
            <a
              href="https://t.me/+qjwWJz7aLR1hMDQ0"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join AI Insider Community Now →
            </a>
            <div className="flex justify-center gap-6 mt-4 text-xs text-[var(--color-text-muted)]">
              <span>Free forever</span>
              <span>Instant access</span>
              <span>Private & secure</span>
              <span>Mobile friendly</span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
