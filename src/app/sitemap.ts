import { MetadataRoute } from "next";

const BASE = "https://insiderai.it.com";
const LOCALES = ["en", "ru", "uk"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/courses", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/courses/chatbot", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/courses/voice", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/courses/mentorship", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/community", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/reviews", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/b2b", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/ai-studio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const pillarBlogPaths = [
    { path: "/blog/n8n-beginners-guide", date: "2026-01-15" },
    { path: "/blog/how-to-build-ai-agent", date: "2026-02-01" },
    { path: "/blog/ai-chatbot-business-guide", date: "2026-02-10" },
    { path: "/blog/voice-ai-agent-guide", date: "2026-02-20" },
    { path: "/blog/n8n-vs-make", date: "2026-03-01" },
  ];

  const standardBlogPaths = [
    { path: "/blog/n8n-workflows", date: "2024-08-01" },
    { path: "/blog/ai-agents-production", date: "2024-08-10" },
    { path: "/blog/voice-agents-vapi", date: "2024-08-20" },
    { path: "/blog/rag-that-actually-works", date: "2024-09-01" },
    { path: "/blog/evaluating-llm", date: "2024-09-10" },
    { path: "/blog/prompt-engineering-pitfalls", date: "2024-09-15" },
    { path: "/blog/lead-qualification", date: "2024-10-01" },
    { path: "/blog/website-in-5-minutes-gpt5", date: "2025-01-10" },
    { path: "/blog/one-person-mini-startup", date: "2025-02-01" },
    { path: "/blog/youtube-shorts-autopilot", date: "2025-03-01" },
    { path: "/blog/veed-ai-playground", date: "2025-04-01" },
    { path: "/blog/google-vids-ai-editor", date: "2025-05-01" },
  ];

  const buildAlternates = (path: string) => ({
    languages: Object.fromEntries(
      LOCALES.map(locale => [locale, `${BASE}/${locale}${path === "/" ? "" : path}`])
    ) as Record<string, string>,
  });

  const staticEntries: MetadataRoute.Sitemap = staticPaths.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map(locale => ({
      url: `${BASE}/${locale}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: buildAlternates(path),
    }))
  );

  const pillarEntries: MetadataRoute.Sitemap = pillarBlogPaths.flatMap(({ path, date }) =>
    LOCALES.map(locale => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(date),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: buildAlternates(path),
    }))
  );

  const standardBlogEntries: MetadataRoute.Sitemap = standardBlogPaths.flatMap(({ path, date }) =>
    LOCALES.map(locale => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(date),
      changeFrequency: "monthly" as const,
      priority: 0.75,
      alternates: buildAlternates(path),
    }))
  );

  return [...staticEntries, ...pillarEntries, ...standardBlogEntries];
}
