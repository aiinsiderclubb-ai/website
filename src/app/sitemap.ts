import type { MetadataRoute } from "next";
import { absoluteUrl } from "@landing/lib/seo";

// Single source of truth for the blog post slugs surfaced in the sitemap.
export const blogSlugs = [
  "n8n-workflows",
  "evaluating-llm",
  "ai-agents-production",
  "prompt-engineering-pitfalls",
  "lead-qualification",
  "voice-agents-vapi",
  "rag-that-actually-works",
  "website-in-5-minutes-gpt5",
  "veed-ai-playground",
  "one-person-mini-startup",
  "google-vids-ai-editor",
  "youtube-shorts-autopilot",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/courses", priority: 0.9, changeFrequency: "weekly" },
    { path: "/courses/chatbot", priority: 0.8, changeFrequency: "monthly" },
    { path: "/courses/voice", priority: 0.8, changeFrequency: "monthly" },
    { path: "/courses/mentorship", priority: 0.8, changeFrequency: "monthly" },
    { path: "/b2b", priority: 0.9, changeFrequency: "monthly" },
    { path: "/community", priority: 0.8, changeFrequency: "weekly" },
    { path: "/reviews", priority: 0.7, changeFrequency: "weekly" },
    { path: "/case-studies", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ai-studio", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.8, changeFrequency: "daily" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ];

  const corePages: MetadataRoute.Sitemap = core.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: absoluteUrl(`/blog/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...corePages, ...blogPages];
}
