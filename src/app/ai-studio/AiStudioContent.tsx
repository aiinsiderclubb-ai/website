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

      {/* What is an AI content studio (definition / direct answer) */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)]">
            What is an AI content studio?
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            An AI content studio is a production system that uses generative AI to create marketing
            content — video, virtual influencers, UGC-style ads and creative assets — at a volume and
            speed that traditional shoots, designers and editors cannot match. Instead of booking
            cameras, talent and post-production for every campaign, you describe what you need and the
            studio generates ready-to-publish variations across formats and languages.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            For marketing teams and founders, that means you can test ten ad angles in the time it used
            to take to ship one, localize content for a dozen markets without re-shooting, and keep a
            consistent brand look across every channel. AI Insider runs this as a managed service: we
            plug your brand guidelines, offers and product data into the pipeline, then deliver creatives
            on a predictable weekly cadence.
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-12 bg-[var(--color-bg-secondary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-3">
            What you can produce
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center max-w-2xl mx-auto mb-10">
            From always-on social content to performance ads, the studio covers the full creative funnel.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Virtual influencers", d: "Build a recurring AI persona that posts daily — face, voice and tone stay consistent across every clip." },
              { t: "Performance UGC ads", d: "Generate dozens of UGC-style hooks and variations for TikTok, Reels and Shorts, then iterate on the winners." },
              { t: "Product & explainer video", d: "Turn a product page or script into a polished video with voiceover, captions and on-brand visuals." },
              { t: "Localized campaigns", d: "Ship the same campaign in 12+ languages without re-shooting — voice, subtitles and copy adapt automatically." },
              { t: "Static & banner creative", d: "Produce on-brand ad creatives, thumbnails and social cards in batches for fast A/B testing." },
              { t: "Always-on content calendar", d: "Keep every channel fed with a predictable weekly drop of fresh, brand-safe content." },
            ].map((u) => (
              <motion.div
                key={u.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hud-frame hud-panel rounded-2xl p-6"
              >
                <h3 className="text-lg font-display font-bold text-[var(--color-text-primary)] mb-2">{u.t}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{u.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How pricing works */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)]">
            How does AI content studio pricing work?
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Pricing is based on output volume and complexity rather than hours, so your costs stay
            predictable as you scale. Most teams choose one of three engagement models:
          </p>
          <div className="space-y-4">
            {[
              { t: "Starter pack", d: "A one-off batch of creatives to validate the format — ideal for a single launch or ad test." },
              { t: "Monthly content engine", d: "A fixed monthly volume of video and creative drops on a weekly cadence, with brand guidelines baked in." },
              { t: "Done-for-you growth", d: "Full pipeline ownership: strategy, production, iteration on winners and reporting tied to your KPIs." },
            ].map((p) => (
              <div key={p.t} className="hud-frame hud-panel rounded-xl p-5">
                <h3 className="text-base font-display font-bold text-[var(--color-text-primary)] mb-1">{p.t}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Compared with a traditional agency or in-house team, an AI content studio typically cuts
            cost-per-asset by around 80% while increasing output, because the expensive parts — shoots,
            editing and revisions — are automated. We scope an exact quote after a short discovery call.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--color-text-primary)] text-center mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {[
              { q: "Is AI-generated content brand-safe?", a: "Yes. We lock the pipeline to your brand guidelines, approved messaging and product facts, and every batch goes through a review checkpoint before it is delivered or published." },
              { q: "Will the content look generic or 'AI'?", a: "No. We tune visuals, voice and pacing to your brand and benchmark against your best-performing content, so creatives match your look rather than a generic template." },
              { q: "How fast can we get the first creatives?", a: "A starter batch is usually delivered within a few days of the discovery call, once brand assets and references are in place." },
              { q: "Which platforms do you produce for?", a: "TikTok, Instagram Reels, YouTube Shorts, paid social, landing pages and email — in multiple aspect ratios and 12+ languages." },
              { q: "Do you only do content, or full campaigns?", a: "Both. You can use the studio purely for production, or hand over strategy, iteration and reporting with the done-for-you growth model." },
            ].map((f) => (
              <div key={f.q} className="hud-frame hud-panel rounded-xl p-5">
                <h3 className="text-base font-display font-bold text-[var(--color-text-primary)] mb-2">{f.q}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
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
