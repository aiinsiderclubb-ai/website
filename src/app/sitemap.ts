import { MetadataRoute } from "next";

const BASE = "https://insiderai.it.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/courses/chatbot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/courses/voice`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/courses/mentorship`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/community`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/b2b`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/ai-studio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Pillar posts (highest priority — targeting competitive keywords)
  const pillarPosts: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/blog/n8n-beginners-guide`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/blog/how-to-build-ai-agent`,
      lastModified: new Date("2026-02-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/blog/ai-chatbot-business-guide`,
      lastModified: new Date("2026-02-10"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/voice-ai-agent-guide`,
      lastModified: new Date("2026-02-20"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/blog/n8n-vs-make`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Standard blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    { slug: "n8n-workflows", date: "2024-08-01" },
    { slug: "ai-agents-production", date: "2024-08-10" },
    { slug: "voice-agents-vapi", date: "2024-08-20" },
    { slug: "rag-that-actually-works", date: "2024-09-01" },
    { slug: "evaluating-llm", date: "2024-09-10" },
    { slug: "prompt-engineering-pitfalls", date: "2024-09-15" },
    { slug: "lead-qualification", date: "2024-10-01" },
    { slug: "website-in-5-minutes-gpt5", date: "2025-01-10" },
    { slug: "one-person-mini-startup", date: "2025-02-01" },
    { slug: "youtube-shorts-autopilot", date: "2025-03-01" },
    { slug: "veed-ai-playground", date: "2025-04-01" },
    { slug: "google-vids-ai-editor", date: "2025-05-01" },
  ].map(({ slug, date }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...pillarPosts, ...blogPosts];
}
