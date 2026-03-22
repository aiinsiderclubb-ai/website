import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import CommunityContent from "./CommunityContent";

export const metadata: Metadata = {
  title: "AI Automation Community — 12,000+ Experts on Telegram",
  description:
    "Join the most active AI automation community on Telegram. 12,000+ members, daily tips from experts, exclusive content, job board and free mini-courses. Free to join.",
  keywords: [
    "AI community Telegram",
    "AI automation community",
    "AI experts community",
    "machine learning community",
    "AI tools community",
    "ChatGPT community",
    "n8n community",
  ],
  openGraph: {
    title: "AI Automation Community — 12,000+ Experts | AI Insider",
    description:
      "Join 12,000+ AI automation professionals on Telegram. Daily tips, expert support, job board and exclusive content. Free forever.",
  },
};

const communityJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Insider Community",
  url: "https://insiderai.it.com/community",
  description: "The most active AI automation community on Telegram with 12,000+ members",
  memberOf: {
    "@type": "OnlineCommunity",
    name: "AI Insider Telegram Community",
    url: "https://t.me/+qjwWJz7aLR1hMDQ0",
    numberOfMembers: 12000,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2000",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function CommunityPage() {
  return (
    <>
      <JsonLd data={communityJsonLd} />
      <CommunityContent />
    </>
  );
}
