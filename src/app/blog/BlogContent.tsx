"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@landing/lib/motion";
import PageLayout from "@landing/components/shared/PageLayout";

type Post = {
  slug: string;
  emoji: string;
  initials: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: "success" | "course" | "community";
  excerpt: string;
  tags: string[];
  category: "automation" | "technical" | "b2b" | "tools";
  date: string;
  readTime: string;
  featured?: boolean;
};

const posts: Post[] = [
  {
    slug: "n8n-workflows",
    emoji: "🧰",
    initials: "TK",
    title: "Building Robust n8n Workflows",
    subtitle: "Retries, queues and error handling",
    badge: "Guide",
    badgeColor: "course",
    excerpt: "Patterns we use to make orchestrations reliable under load. Includes templates you can copy.",
    tags: ["Queue workers", "Dead-letter", "Alerts"],
    category: "automation",
    date: "Aug 2024",
    readTime: "6 min",
    featured: true,
  },
  {
    slug: "lead-qualification",
    emoji: "🧭",
    initials: "LQ",
    title: "Lead Qualification with LLMs",
    subtitle: "Routing, scoring, CRM sync",
    badge: "Case Study",
    badgeColor: "success",
    excerpt: "How we cut response time by 73% and doubled demo conversions.",
    tags: ["Scoring", "HubSpot", "SLAs"],
    category: "b2b",
    date: "Aug 2024",
    readTime: "7 min",
  },
  {
    slug: "voice-agents-vapi",
    emoji: "🎙️",
    initials: "VA",
    title: "Voice Agents with Vapi",
    subtitle: "Latency, barge-in, grounding",
    badge: "Guide",
    badgeColor: "community",
    excerpt: "Design patterns for natural conversations and safe actions.",
    tags: ["RTT", "Whisper", "Guardrails"],
    category: "technical",
    date: "Aug 2024",
    readTime: "6 min",
  },
  {
    slug: "evaluating-llm",
    emoji: "🧪",
    initials: "EV",
    title: "Evaluating LLM Systems",
    subtitle: "From prompts to business metrics",
    badge: "Playbook",
    badgeColor: "community",
    excerpt: "How we run evaluations to ensure quality, safety and cost control in production.",
    tags: ["Quality", "Safety", "Cost"],
    category: "technical",
    date: "Aug 2024",
    readTime: "8 min",
  },
  {
    slug: "ai-agents-production",
    emoji: "🤖",
    initials: "AG",
    title: "Shipping AI Agents to Production",
    subtitle: "Observability, retries, tool safety",
    badge: "Playbook",
    badgeColor: "success",
    excerpt: "We cover task decomposition, deterministic tools, guardrails and rollback plans.",
    tags: ["Traces", "Guardrails", "Retries"],
    category: "automation",
    date: "Aug 2024",
    readTime: "7 min",
  },
  {
    slug: "prompt-engineering-pitfalls",
    emoji: "🧩",
    initials: "PE",
    title: "Prompt Engineering Pitfalls",
    subtitle: "Brittleness and hidden state",
    badge: "Guide",
    badgeColor: "course",
    excerpt: "Simple guardrails to make prompts robust and testable across versions.",
    tags: ["Tests", "Schemas", "Context"],
    category: "technical",
    date: "Aug 2024",
    readTime: "5 min",
  },
  {
    slug: "rag-that-actually-works",
    emoji: "📚",
    initials: "RG",
    title: "RAG that Actually Works",
    subtitle: "Chunking, cache, evals",
    badge: "Playbook",
    badgeColor: "course",
    excerpt: "How to avoid hallucinations and keep latency low at scale.",
    tags: ["Chunking", "Rerank", "Cache"],
    category: "technical",
    date: "Aug 2024",
    readTime: "7 min",
  },
  {
    slug: "website-in-5-minutes-gpt5",
    emoji: "💻",
    initials: "G5",
    title: "Website in 5 Minutes with GPT-5",
    subtitle: "Prompt-to-site workflow",
    badge: "Guide",
    badgeColor: "course",
    excerpt: "How prompt-driven site generation changes the speed of launching landing pages and MVPs.",
    tags: ["GPT-5", "NoCode", "MVP"],
    category: "tools",
    date: "Sep 2024",
    readTime: "5 min",
  },
  {
    slug: "veed-ai-playground",
    emoji: "🎥",
    initials: "VD",
    title: "VEED AI Playground",
    subtitle: "Video from text, subtitles, cloning",
    badge: "Guide",
    badgeColor: "community",
    excerpt: "Text-to-video generation, auto-subs, noise removal and voice/face cloning in the browser.",
    tags: ["Text→Video", "Voice", "Browser"],
    category: "tools",
    date: "Sep 2024",
    readTime: "5 min",
  },
  {
    slug: "one-person-mini-startup",
    emoji: "🚀",
    initials: "SO",
    title: "One Person with AI = Mini-Startup",
    subtitle: "Launch a product without a team",
    badge: "Mindset",
    badgeColor: "community",
    excerpt: "In 2025, one person with AI covers the work of 5 specialists: site, copy, video, voice and automation.",
    tags: ["Cursor", "Runway", "ElevenLabs"],
    category: "tools",
    date: "Sep 2024",
    readTime: "6 min",
  },
  {
    slug: "google-vids-ai-editor",
    emoji: "🎬",
    initials: "GV",
    title: "Google Vids: AI Video Editor",
    subtitle: "Gemini writes the script and edits",
    badge: "News",
    badgeColor: "community",
    excerpt: "Script, music, storyboard, editing and image generation — free and in minutes.",
    tags: ["Script", "Music", "Edit"],
    category: "tools",
    date: "Sep 2024",
    readTime: "5 min",
  },
  {
    slug: "youtube-shorts-autopilot",
    emoji: "⚙️",
    initials: "YT",
    title: "YouTube → Shorts on Autopilot",
    subtitle: "Klap highlights + autopost",
    badge: "Automation",
    badgeColor: "course",
    excerpt: "Send a link to Telegram — AI cuts shorts and posts them to TikTok/IG/YT Shorts automatically.",
    tags: ["Klap", "n8n", "Blotato"],
    category: "automation",
    date: "Sep 2024",
    readTime: "6 min",
  },
];

const categories = ["all", "automation", "technical", "b2b", "tools"] as const;
type Category = (typeof categories)[number];

const badgeColors: Record<Post["badgeColor"], string> = {
  success: "bg-emerald-500/15 text-emerald-300 border border-emerald-400/25",
  course: "bg-[#a855f7]/15 text-[#fb923c] border border-[#a855f7]/25",
  community: "bg-[#7c3aed]/20 text-[#a78bfa] border border-[#7c3aed]/25",
};

function PostCard({ post }: { post: Post }) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/40 hover:shadow-[0_18px_50px_-12px_rgba(168,85,247,0.35)]"
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#a855f7]/30 to-[#f97316]/25 border border-white/10 text-lg">
              {post.emoji}
            </div>
            <span className="text-xs text-[var(--color-text-muted)]">{post.subtitle}</span>
          </div>
          <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${badgeColors[post.badgeColor]}`}>
            {post.badge}
          </span>
        </div>

        <h3 className="mb-2 font-display text-lg font-bold text-[var(--color-text-primary)] transition-colors group-hover:text-[#fb923c]">
          {post.title}
        </h3>

        <p className="mb-4 flex-grow text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {post.excerpt}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-[var(--color-text-muted)]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4 text-xs text-[var(--color-text-muted)]">
          <span>{post.date} · {post.readTime} read</span>
          <span className="font-semibold text-[#c084fc] transition-transform duration-300 group-hover:translate-x-1">
            Read →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const featured = posts.find((p) => p.featured) ?? posts[0];
  const list = posts.filter((p) => p.slug !== featured.slug);
  const filtered = activeCategory === "all" ? list : list.filter((p) => p.category === activeCategory);

  return (
    <PageLayout
      badge="Insights"
      title="AI Insider"
      titleHighlight="Blog"
      subtitle="Practical guides, tool deep-dives and real automation case studies. Pick a topic and start reading."
    >
      {/* Featured post */}
      <section className="pt-4 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative grid overflow-hidden rounded-3xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] backdrop-blur-sm lg:grid-cols-[1.15fr_1fr]"
            >
              <div className="relative z-10 p-8 sm:p-10 lg:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#c084fc]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a855f7] shadow-[0_0_10px_#a855f7]" />
                  Featured
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-[var(--color-text-primary)] sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-secondary)]">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[var(--color-text-muted)]">
                  <span className={`rounded-full px-2.5 py-1 font-medium ${badgeColors[featured.badgeColor]}`}>
                    {featured.badge}
                  </span>
                  <span>{featured.date} · {featured.readTime} read</span>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[#fb923c] transition-transform duration-300 group-hover:translate-x-1">
                  Read the guide →
                </span>
              </div>

              <div className="relative min-h-[220px] overflow-hidden lg:min-h-full">
                <Image
                  src="/images/flow/ribbon-wave.png"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-105 [mask-image:linear-gradient(90deg,transparent,black_30%)]"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Subscribe + category filter */}
      <section className="pb-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-all ${
                  activeCategory === c
                    ? "bg-gradient-to-r from-[#a855f7] to-[#f97316] text-white"
                    : "border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] text-[var(--color-text-secondary)] hover:border-[#a855f7]/40"
                }`}
              >
                {c === "all" ? "All posts" : c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filtered.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] backdrop-blur-sm p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/flow/ribbon-stream.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-25 mix-blend-screen [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />
            <div className="relative z-10">
              <h2 className="mb-4 font-display text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
                Get new posts in Telegram
              </h2>
              <p className="mb-8 text-[var(--color-text-secondary)]">
                Join 6,000+ AI professionals getting daily tips, guides and tool discoveries in our community channel.
              </p>
              <a
                href="https://t.me/+qjwWJz7aLR1hMDQ0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#f97316] px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90"
              >
                Join AI Insider Telegram →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
