"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import PageLayout from "@/components/shared/PageLayout";
import { useI18n } from "@/context/i18n-context";

export default function CommunityPage() {
  const { t } = useI18n();

  const features = [
    {
      title: t.communityFeatures.f1Title,
      desc: t.communityFeatures.f1Desc,
      points: [t.communityFeatures.f1P1, t.communityFeatures.f1P2, t.communityFeatures.f1P3],
      primary: true,
    },
    {
      title: t.communityFeatures.f2Title,
      desc: t.communityFeatures.f2Desc,
      points: [t.communityFeatures.f2P1, t.communityFeatures.f2P2, t.communityFeatures.f2P3],
    },
    {
      title: t.communityFeatures.f3Title,
      desc: t.communityFeatures.f3Desc,
      points: [t.communityFeatures.f3P1, t.communityFeatures.f3P2, t.communityFeatures.f3P3],
    },
    {
      title: t.communityFeatures.f4Title,
      desc: t.communityFeatures.f4Desc,
      points: [t.communityFeatures.f4P1, t.communityFeatures.f4P2, t.communityFeatures.f4P3],
    },
    {
      title: t.communityFeatures.f5Title,
      desc: t.communityFeatures.f5Desc,
      points: [t.communityFeatures.f5P1, t.communityFeatures.f5P2, t.communityFeatures.f5P3],
    },
    {
      title: t.communityFeatures.f6Title,
      desc: t.communityFeatures.f6Desc,
      points: [t.communityFeatures.f6P1, t.communityFeatures.f6P2, t.communityFeatures.f6P3],
    },
  ];

  const stats = [
    { number: "5,742", label: t.communityStats.s1Label, growth: t.communityStats.s1Growth },
    { number: "356", label: t.communityStats.s2Label, growth: t.communityStats.s2Growth },
    { number: "89%", label: t.communityStats.s3Label, growth: t.communityStats.s3Growth },
    { number: "4.9/5", label: t.communityStats.s4Label, growth: t.communityStats.s4Growth },
  ];

  const testimonials = [
    { quote: t.communityTestimonials.t1Quote, author: t.communityTestimonials.t1Author, role: t.communityTestimonials.t1Role },
    { quote: t.communityTestimonials.t2Quote, author: t.communityTestimonials.t2Author, role: t.communityTestimonials.t2Role },
    { quote: t.communityTestimonials.t3Quote, author: t.communityTestimonials.t3Author, role: t.communityTestimonials.t3Role },
  ];
  return (
    <PageLayout
      badge={t.communityPage.badge}
      title={t.communityPage.title}
      titleHighlight={t.communityPage.titleHighlight}
      subtitle={t.communityPage.subtitle}
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
              { n: "5,742", l: t.communityPage.activeMembersLabel },
              { n: "350+", l: t.communityPage.dailyMessagesLabel },
              { n: "24/7", l: t.communityPage.supportLabel },
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
              {t.communityPage.joinBtn}
            </a>
          </motion.div>
          <p className="text-center text-sm text-[var(--color-text-muted)] mt-3">{t.communityPage.freeJoin}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium uppercase tracking-wider mb-4">
              {t.communityPage.benefitsBadge}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {t.communityPage.benefitsTitle}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              {t.communityPage.benefitsSubtitle}
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
            {t.communityPage.statsTitle}
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
              {t.communityPage.ctaTitle}
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              {t.communityPage.ctaSubtitle}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { title: t.communityPage.ctaLearnTitle, desc: t.communityPage.ctaLearnDesc },
                { title: t.communityPage.ctaNetworkTitle, desc: t.communityPage.ctaNetworkDesc },
                { title: t.communityPage.ctaEarnTitle, desc: t.communityPage.ctaEarnDesc },
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
              {t.communityPage.ctaJoinBtn}
            </a>
            <div className="flex justify-center gap-6 mt-4 text-xs text-[var(--color-text-muted)]">
              <span>{t.communityPage.ctaFreeForever}</span>
              <span>{t.communityPage.ctaInstantAccess}</span>
              <span>{t.communityPage.ctaPrivateSecure}</span>
              <span>{t.communityPage.ctaMobileFriendly}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
