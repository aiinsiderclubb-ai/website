import type { Metadata } from "next";
import BlogPost from "@landing/components/shared/BlogPost";

export const metadata: Metadata = {
  title: "YouTube → Shorts on Autopilot — Klap + n8n + Blotato | AI Insider",
  description:
    "Build an automated pipeline that clips long-form YouTube videos into Shorts and auto-publishes to TikTok, Reels and YT Shorts using n8n, Klap and Blotato.",
  keywords: ["YouTube Shorts automation", "Klap", "n8n", "Blotato", "content repurposing"],
  alternates: { canonical: "https://insiderai.it.com/blog/youtube-shorts-autopilot" },
  openGraph: { title: "YouTube → Shorts on Autopilot | AI Insider", type: "article" },
};

export default function YoutubeShortsAutopilotPost() {
  return (
    <BlogPost
      emoji="⚙️"
      badge="Automation"
      badgeColor="bg-[#a855f7]/20 text-[#fb923c]"
      title="YouTube → Shorts on Autopilot"
      slug="youtube-shorts-autopilot"
      subtitle="A practical pipeline for clipping long-form content and distributing it automatically across short-form channels."
      date="September 2024"
      readTime="6 min"
      tags={["Klap", "n8n", "Blotato", "Shorts", "Distribution"]}
      relatedPosts={[
        { title: "VEED AI Playground", href: "/blog/veed-ai-playground", sub: "Fast browser-based video workflows" },
        { title: "One Person with AI = Mini-Startup", href: "/blog/one-person-mini-startup", sub: "Automate repetitive ops" },
        { title: "Building Robust n8n Workflows", href: "/blog/n8n-workflows", sub: "Queues, retries, alerts" },
      ]}
    >
      <h2>Why Repurposing Wins</h2>
      <p>
        Most teams already have enough content. The real bottleneck is distribution. A single long-form video can produce
        multiple Shorts, Reels, and clips if the extraction and publishing flow is automated correctly.
      </p>

      <h2>Pipeline Structure</h2>
      <ol>
        <li>Detect a new long-form video URL</li>
        <li>Send it to a clipping tool such as Klap</li>
        <li>Approve or lightly edit the selected moments</li>
        <li>Push the outputs into an autopublishing layer</li>
        <li>Log every post and status update to Telegram or Sheets</li>
      </ol>

      <h2>What Makes It Reliable</h2>
      <ul>
        <li>Approval checkpoints before auto-posting</li>
        <li>Retry logic for failed uploads</li>
        <li>Per-platform captions, not one generic caption everywhere</li>
        <li>Status logging for every asset</li>
      </ul>

      <h2>Best Practice</h2>
      <p>
        Keep automation heavy on the backend, but keep editorial review lightweight and fast.
        That balance gives scale without letting low-quality clips flood your channels.
      </p>
    </BlogPost>
  );
}
