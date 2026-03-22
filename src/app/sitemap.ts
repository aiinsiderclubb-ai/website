import { MetadataRoute } from "next";

const BASE = "https://insiderai.it.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/courses`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/courses/chatbot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses/voice`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/courses/mentorship`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/community`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/b2b`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/ai-studio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const blogPosts: MetadataRoute.Sitemap = [
    "n8n-workflows",
    "evaluating-llm",
    "ai-agents-production",
    "voice-agents-vapi",
    "lead-qualification",
    "prompt-engineering-pitfalls",
    "rag-that-actually-works",
    "website-in-5-minutes-gpt5",
    "veed-ai-playground",
    "one-person-mini-startup",
    "google-vids-ai-editor",
    "youtube-shorts-autopilot",
  ].map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
