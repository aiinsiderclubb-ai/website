"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageLayout from "@landing/components/shared/PageLayout";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import { siteConfig } from "@landing/data/content";

const channels = [
  {
    icon: "💬",
    title: "Telegram community",
    desc: "Join 6,000+ builders. Ask questions, share workflows and get fast peer help — free forever.",
    cta: "Join the channel",
    href: siteConfig.telegram,
    external: true,
  },
  {
    icon: "🤝",
    title: "Talk to a manager",
    desc: "Direct line for course, mentorship and B2B questions. We usually reply within a few hours.",
    cta: "Message on Telegram",
    href: siteConfig.telegramManager,
    external: true,
  },
  {
    icon: "✉️",
    title: "Email",
    desc: "Prefer email? Reach out for partnerships, B2B proposals and anything that needs a paper trail.",
    cta: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: true,
  },
];

export default function ContactContent() {
  return (
    <PageLayout
      badge="Contact"
      title="Talk to"
      titleHighlight="AI Insider"
      subtitle="Questions about courses, mentorship or a B2B project? Pick the channel that suits you — we respond fast."
    >
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {channels.map((c) => (
              <motion.a
                key={c.title}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                variants={fadeInUp}
                className="hud-frame hud-panel rounded-2xl p-6 glow-hover-card transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="text-3xl mb-4">{c.icon}</div>
                <h2 className="text-lg font-display font-bold text-[var(--color-text-primary)] mb-2">
                  {c.title}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-grow">
                  {c.desc}
                </p>
                <span className="text-sm font-semibold gradient-text break-all">{c.cta} →</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hud-frame hud-panel rounded-2xl p-8 mt-8 text-center"
          >
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-text-primary)] mb-3">
              Planning a B2B AI project?
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-6">
              Tell us about your use case and we&apos;ll send a scoped proposal within 24 hours —
              chatbots, voice agents, RAG assistants or end-to-end automation.
            </p>
            <Link
              href="/b2b"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#a855f7] to-[#f97316] hover:opacity-90 transition-opacity"
            >
              Explore B2B solutions →
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
