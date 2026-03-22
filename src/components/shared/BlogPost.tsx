"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";

interface Tag {
  label: string;
}

interface BlogPostProps {
  emoji: string;
  badge: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  children: React.ReactNode;
  relatedPosts?: { title: string; href: string; sub: string }[];
}

export default function BlogPost({
  emoji,
  badge,
  badgeColor = "bg-[#0ea5e9]/20 text-[#38bdf8]",
  title,
  subtitle,
  date,
  readTime,
  tags,
  children,
  relatedPosts = [],
}: BlogPostProps) {
  const { t } = useI18n();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 pb-12 sm:pt-36 overflow-hidden">
          <div className="absolute inset-0" style={{ background: "var(--color-bg-primary)" }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.06)_0%,transparent_70%)]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">{t.nav.home}</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors">{t.nav.blog}</Link>
              <span>/</span>
              <span className="text-[var(--color-text-secondary)] truncate max-w-[200px]">{title}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border border-[var(--color-glass-border)]"
                  style={{ background: "var(--color-glass-bg)" }}>
                  {emoji}
                </div>
                <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${badgeColor}`}>{badge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6">{subtitle}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1.5">
                  <span>📅</span> {date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <span>⏱️</span> {readTime} read
                </span>
                <span>·</span>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] px-2 py-0.5 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Article */}
              <motion.article
                className="flex-1 min-w-0 prose-ai"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="glass border border-[var(--color-glass-border)] rounded-2xl p-6 sm:p-10">
                  {children}
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 border-t border-[var(--color-glass-border)]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              className="glass border border-[var(--color-glass-border)] rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <h2 className="text-xl font-display font-bold text-[var(--color-text-primary)] mb-2">
                Learn AI automation in practice
              </h2>
              <p className="text-[var(--color-text-secondary)] text-sm mb-6">
                Join 5,742+ professionals in our Telegram community for daily tips and exclusive content.
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <a href="https://t.me/+qjwWJz7aLR1hMDQ0" target="_blank" rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg,#0ea5e9,#7c3aed)" }}>
                  {t.nav.joinCommunity}
                </a>
                <Link href="/courses"
                  className="px-6 py-3 rounded-xl border border-[var(--color-glass-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm font-medium transition-all">
                  {t.nav.courses}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 border-t border-[var(--color-glass-border)]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-display font-bold text-[var(--color-text-primary)] mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.map((r) => (
                  <Link key={r.title} href={r.href}
                    className="glass border border-[var(--color-glass-border)] rounded-xl p-4 hover:border-[var(--color-accent-border)] transition-all group">
                    <h3 className="text-[var(--color-text-primary)] font-medium text-sm mb-1 group-hover:text-[var(--color-accent)] transition-colors">{r.title}</h3>
                    <p className="text-xs text-[var(--color-text-muted)]">{r.sub}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
