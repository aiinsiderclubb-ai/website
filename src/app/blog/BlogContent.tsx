"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import PageLayout from "@/components/shared/PageLayout";

const posts = [
  {
    emoji: "🧰",
    initials: "TK",
    title: "Building Robust n8n Workflows",
    subtitle: "Retries, queues and error handling",
    badge: "Guide",
    badgeColor: "course",
    excerpt: "Patterns we use to make orchestrations reliable under load. Includes templates you can copy.",
    tags: ["Queue workers", "Dead-letter", "Alerts"],
    category: "automation",
    href: "/blog/n8n-workflows",
  },
  {
    emoji: "🧪",
    initials: "EV",
    title: "Evaluating LLM Systems",
    subtitle: "From prompts to business metrics",
    badge: "Playbook",
    badgeColor: "community",
    excerpt: "How we run evaluations to ensure quality, safety and cost control in production.",
    tags: ["Quality metrics", "Safety checks", "Cost tracking"],
    category: "technical",
    href: "/blog/evaluating-llm",
  },
  {
    emoji: "🤖",
    initials: "AG",
    title: "Shipping AI Agents to Production",
    subtitle: "Observability, retries, tool safety",
    badge: "Playbook",
    badgeColor: "success",
    excerpt: "We cover task decomposition, deterministic tools, guardrails and rollback plans.",
    tags: ["Traces", "Guardrails", "Retries"],
    category: "automation",
    href: "/blog/ai-agents-production",
  },
  {
    emoji: "🧩",
    initials: "PE",
    title: "Prompt Engineering Pitfalls",
    subtitle: "Brittleness and hidden state",
    badge: "Guide",
    badgeColor: "course",
    excerpt: "Simple guardrails to make prompts robust and testable across versions.",
    tags: ["Tests", "Schemas", "Context"],
    category: "technical",
    href: "/blog/prompt-engineering-pitfalls",
  },
  {
    emoji: "🧭",
    initials: "LQ",
    title: "Lead Qualification with LLMs",
    subtitle: "Routing, scoring, CRM sync",
    badge: "Case Study",
    badgeColor: "success",
    excerpt: "How we cut response time by 73% and doubled demo conversions.",
    tags: ["Scoring", "HubSpot", "SLAs"],
    category: "b2b",
    href: "/blog/lead-qualification",
  },
  {
    emoji: "🎙️",
    initials: "VA",
    title: "Voice Agents with Vapi",
    subtitle: "Latency, barge-in, grounding",
    badge: "Guide",
    badgeColor: "community",
    excerpt: "Design patterns for natural conversations and safe actions.",
    tags: ["RTT", "Whisper", "Guardrails"],
    category: "technical",
    href: "/blog/voice-agents-vapi",
  },
  {
    emoji: "📚",
    initials: "RG",
    title: "RAG that Actually Works",
    subtitle: "Chunking, cache, evals",
    badge: "Playbook",
    badgeColor: "course",
    excerpt: "How to avoid hallucinations and keep latency low at scale.",
    tags: ["Chunking", "Rerank", "Cache"],
    category: "technical",
    href: "/blog/rag-that-actually-works",
  },
  {
    emoji: "💻",
    initials: "G5",
    title: "Website in 5 Minutes with GPT-5",
    subtitle: "GPT-5 generates ready-made websites from a prompt",
    badge: "Guide",
    badgeColor: "course",
    excerpt: "OpenAI released a collection of website ideas that can be generated directly through GPT-5 — from mini-games to simple stores.",
    tags: ["GPT-5", "NoCode", "Prompting"],
    category: "tools",
    href: "/blog/website-in-5-minutes-gpt5",
  },
  {
    emoji: "🎥",
    initials: "VD",
    title: "VEED AI Playground",
    subtitle: "Video from text, subtitles, voice/face cloning",
    badge: "Guide",
    badgeColor: "community",
    excerpt: "Build 'wow' videos right in the browser: text-to-video generation, auto-subs, noise removal, face/voice and access to Veo 3, Minimax, Kling.",
    tags: ["Text→Video", "Voice/Face", "Browser"],
    category: "tools",
    href: "/blog/veed-ai-playground",
  },
  {
    emoji: "🚀",
    initials: "SO",
    title: "One Person with AI = Mini-Startup",
    subtitle: "How to launch a product without a team in 2025",
    badge: "Mindset",
    badgeColor: "community",
    excerpt: "In 2025, one person with AI covers the work of 5 specialists: website, texts, video, voice and automation.",
    tags: ["Cursor", "Runway", "ElevenLabs"],
    category: "tools",
    href: "/blog/one-person-mini-startup",
  },
  {
    emoji: "🎬",
    initials: "GV",
    title: "Google Vids: AI Video Editor",
    subtitle: "Gemini writes the script and edits for free",
    badge: "News",
    badgeColor: "community",
    excerpt: "Script, music, storyboard, editing and image generation. Free and in minutes.",
    tags: ["Script", "Music", "Edit"],
    category: "tools",
    href: "/blog/google-vids-ai-editor",
  },
  {
    emoji: "⚙️",
    initials: "YT",
    title: "YouTube → Shorts on Autopilot",
    subtitle: "Klap highlights + Blotato autopost + Telegram",
    badge: "Automation",
    badgeColor: "course",
    excerpt: "Send a link to Telegram — AI cuts shorts and posts them to TikTok/IG/YT Shorts automatically.",
    tags: ["Klap", "n8n", "Blotato"],
    category: "automation",
    href: "/blog/youtube-shorts-autopilot",
  },
];

const categories = ["all", "automation", "technical", "b2b", "tools"] as const;
type Category = typeof categories[number];

const badgeColors: Record<string, string> = {
  success: "bg-emerald-500/20 text-emerald-400",
  course: "bg-[#0ea5e9]/20 text-[#38bdf8]",
  community: "bg-[#7c3aed]/20 text-[#a78bfa]",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <PageLayout
      badge="Insights"
      title="AI Insider"
      titleHighlight="Blog"
      subtitle="Practical guides, tool deep-dives and case studies from real automation work."
    >
      {/* CTA row */}
      <div className="flex justify-center gap-4 pb-12 flex-wrap px-4">
        <a
          href="https://t.me/+qjwWJz7aLR1hMDQ0"
          className="px-8 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe on Telegram →
        </a>
      </div>

      {/* Search + Category filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)] pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search posts…"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            />
          </div>
          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                  activeCategory === c
                    ? "bg-[#0ea5e9] text-white"
                    : "glass border border-white/10 text-[var(--color-text-secondary)] hover:border-white/20"
                }`}
              >
                {c === "all" ? "All Posts" : c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-[var(--color-text-secondary)]">No posts found for &ldquo;{search}&rdquo;</p>
                <button onClick={() => { setSearch(""); setActiveCategory("all"); }} className="mt-4 text-[var(--color-accent)] text-sm hover:underline">
                  Clear filters
                </button>
              </motion.div>
            ) : (
            <motion.div
              key={activeCategory + search}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {filtered.map((post) => (
                <motion.div
                  key={post.title}
                  variants={fadeInUp}
                >
                <Link
                  href={(post as { href?: string }).href ?? "/blog"}
                  className="glass rounded-2xl p-6 border border-white/10 flex flex-col hover:-translate-y-1 transition-transform duration-300 cursor-pointer group block h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0ea5e9]/30 to-[#7c3aed]/30 border border-white/10 flex items-center justify-center text-lg">
                        {post.emoji}
                      </div>
                      <div>
                        <div className="text-[var(--color-text-muted)] text-xs">{post.subtitle}</div>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${badgeColors[post.badgeColor]}`}>
                      {post.badge}
                    </span>
                  </div>

                  <h3 className="text-white font-display font-bold mb-3 group-hover:text-[#38bdf8] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow italic">
                    &ldquo;{post.excerpt}&rdquo;
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/5 text-[var(--color-text-muted)] px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
                </motion.div>
              ))}
            </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="glass rounded-2xl p-10 border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Get New Posts in Telegram
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Join 5,742+ AI professionals getting daily tips, guides and tool discoveries in our community channel.
            </p>
            <a
              href="https://t.me/+qjwWJz7aLR1hMDQ0"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#7c3aed] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join AI Insider Telegram →
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
