"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import PageLayout from "@landing/components/shared/PageLayout";
import { useI18n } from "@landing/context/i18n-context";
import { siteConfig } from "@landing/data/content";

export default function AboutContent() {
  const { t } = useI18n();
  const p = t.aboutPage;
  const m = t.aboutMilestones;
  const v = t.aboutValues;

  const milestones = [
    { title: m.m1Title, desc: m.m1Desc },
    { title: m.m2Title, desc: m.m2Desc },
    { title: m.m3Title, desc: m.m3Desc },
    { title: m.m4Title, desc: m.m4Desc },
    { title: m.m5Title, desc: m.m5Desc },
  ];

  const values = [
    { title: v.v1Title, desc: v.v1Desc },
    { title: v.v2Title, desc: v.v2Desc },
    { title: v.v3Title, desc: v.v3Desc },
    { title: v.v4Title, desc: v.v4Desc },
  ];

  const stats = [
    { value: "6,079+", label: p.professionalsTrained },
    { value: "340%", label: p.avgClientRoi },
    { value: "150+", label: p.businessPartners },
    { value: "4.9/5", label: p.courseRating },
  ];

  return (
    <PageLayout badge={p.badge} title={p.title} titleHighlight={p.titleHighlight} subtitle={p.subtitle}>
      {/* Story */}
      <section className="section-padding relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span variants={fadeInUp} className="section-badge inline-flex px-3 py-1 rounded-full text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-4">
              {p.storyBadge}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-6">
              {p.storyTitle} <span className="gradient-text">{p.storyTitleHighlight}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">{p.storyP1}</motion.p>
            <motion.p variants={fadeInUp} className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">{p.storyP2}</motion.p>
            <motion.p variants={fadeInUp} className="text-[var(--color-text-secondary)] leading-relaxed">{p.storyP3}</motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 border border-[var(--color-glass-border)]"
          >
            <p className="text-lg text-[var(--color-text-primary)] italic leading-relaxed mb-6">&ldquo;{p.founderQuote}&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a855f7] to-[#f97316] flex items-center justify-center text-white font-bold text-sm">VA</div>
              <div>
                <p className="font-semibold text-[var(--color-text-primary)]">Vladyslav Archer</p>
                <p className="text-sm text-[var(--color-text-muted)]">{p.founderRole}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={siteConfig.telegram} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white text-sm font-medium hover:shadow-[0_0_24px_rgba(14,165,233,0.3)] transition-shadow">
                {p.joinCommunity}
              </a>
              <a href="https://t.me/vladyslavarcher" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-[var(--color-glass-border)] text-[var(--color-text-primary)] text-sm font-medium hover:bg-[var(--color-glass-hover)] transition-colors">
                {p.dmTelegram}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {milestones.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-8 pb-10 last:pb-0 border-l border-[var(--color-glass-border)] last:border-transparent"
            >
              <span className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-[#a855f7] ring-4 ring-[var(--color-bg-secondary)]" />
              <h3 className="font-display font-semibold text-[var(--color-text-primary)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <span className="section-badge inline-flex px-3 py-1 rounded-full text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-4">{p.valuesBadge}</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)]">
            {p.valuesTitle} <span className="gradient-text">{p.valuesTitleHighlight}</span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="py-20 bg-[var(--color-bg-secondary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {stats.map((s) => (
              <div key={s.label} className="text-center glass rounded-xl p-6 border border-[var(--color-glass-border)]">
                <div className="text-3xl font-display font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-text-primary)] mb-4">
              {p.ctaTitle} <span className="gradient-text">{p.ctaTitleHighlight}</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/courses" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white text-sm font-medium hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] transition-shadow">
                {p.viewCourses}
              </Link>
              <Link href="/case-studies" className="px-7 py-3.5 rounded-full border border-[var(--color-glass-border)] text-[var(--color-text-primary)] text-sm font-medium hover:bg-[var(--color-glass-hover)] transition-colors">
                {p.seeCaseStudies}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
