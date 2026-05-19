"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageLayout from "@landing/components/shared/PageLayout";
import { useI18n } from "@landing/context/i18n-context";
import { siteConfig } from "@landing/data/content";

const SERVICE_ICONS = ["🎭", "🎬", "⚡", "🎨"];
const SERVICE_GRADIENTS = [
  "from-purple-500/20 to-pink-500/20",
  "from-blue-500/20 to-cyan-500/20",
  "from-orange-500/20 to-red-500/20",
  "from-green-500/20 to-emerald-500/20",
];

export default function AiStudioContent() {
  const { t } = useI18n();
  const s = t.aiContentStudio;

  const services = [
    { icon: SERVICE_ICONS[0], gradient: SERVICE_GRADIENTS[0], title: s.influencerLabel, sub: s.influencerSublabel, metric: "3M+", metricLabel: s.influencerMetricLabel },
    { icon: SERVICE_ICONS[1], gradient: SERVICE_GRADIENTS[1], title: s.videoLabel, sub: s.videoSublabel, metric: "500+", metricLabel: s.videoMetricLabel },
    { icon: SERVICE_ICONS[2], gradient: SERVICE_GRADIENTS[2], title: s.ugcLabel, sub: s.ugcSublabel, metric: "80%", metricLabel: s.ugcMetricLabel },
    { icon: SERVICE_ICONS[3], gradient: SERVICE_GRADIENTS[3], title: s.creativeLabel, sub: s.creativeSublabel, metric: "100+", metricLabel: s.creativeMetricLabel },
  ];

  const stats = [
    { value: "500+", label: s.statContentPerMonth },
    { value: "80%", label: s.statSavings },
    { value: "12+", label: s.statLanguages },
    { value: "3×", label: s.statEngagement },
  ];

  return (
    <PageLayout badge={s.badge} title={s.title} titleHighlight={s.titleHighlight} subtitle={s.subtitle}>
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-5 text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold gradient-text mb-1">{stat.value}</div>
                <p className="text-[11px] sm:text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          {services.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`glass-card rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${item.gradient} border border-[var(--color-glass-border)]`}>
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-display font-bold text-[var(--color-text-primary)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-5">{item.sub}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold gradient-text">{item.metric}</span>
                <span className="text-xs text-[var(--color-text-muted)] uppercase">{item.metricLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-[var(--color-glass-border)]">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/25 text-[#c084fc] text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse-glow" />
              {s.live}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] mb-3">{s.aiCreator}</h2>
            <p className="text-[var(--color-text-secondary)] mb-6">{s.createsContent}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/vladyslavarcher" target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white text-sm font-medium">{s.learnMore}</a>
              <a href={siteConfig.studioUrl} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full border border-[var(--color-glass-border)] text-[var(--color-text-primary)] text-sm font-medium hover:bg-[var(--color-glass-hover)]">{s.watchExamples}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[var(--color-text-secondary)] mb-6">{t.footer.aiInsiderStudio} — full production studio with AI influencers, video & UGC at scale.</p>
          <Link href="/b2b" className="text-[#c084fc] hover:underline text-sm font-medium">{t.caseStudiesPage.doneForYou} →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
