import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
import { breadcrumbJsonLd, absoluteUrl } from "@landing/lib/seo";
import AiStudioContent from "./AiStudioContent";

export const metadata: Metadata = {
  title: "AI Content Studio — Influencers, Video & UGC at Scale",
  description:
    "AI Content Studio: virtual influencers, AI video production, UGC ads and creatives — without shoots, designers or content bottlenecks. 500+ pieces/month, 12+ languages.",
  keywords: [
    "AI content studio",
    "AI video production",
    "virtual influencer",
    "UGC ads AI",
    "AI marketing content",
    "AI content at scale",
  ],
  openGraph: {
    title: "AI Content Studio | AI Insider",
    description: "AI influencers, video production, UGC ads and creative studio for marketing teams.",
    url: absoluteUrl("/ai-studio"),
  },
  alternates: { canonical: "https://insiderai.it.com/ai-studio" },
};

const studioJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Insider Content Studio",
  url: "https://insiderai.it.com/ai-studio",
  serviceType: "AI Content Production",
  provider: { "@id": "https://insiderai.it.com/#organization" },
  areaServed: { "@type": "GeoShape", name: "Worldwide" },
  description: "AI influencers, video production, UGC content and creative assets for marketing teams",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Content Studio Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Virtual Influencers" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Performance UGC Ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product & Explainer Video" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Localized Campaigns" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Static & Banner Creative" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Always-on Content Calendar" } },
    ],
  },
};

const studioFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI-generated content brand-safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We lock the pipeline to your brand guidelines, approved messaging and product facts, and every batch goes through a review checkpoint before it is delivered or published.",
      },
    },
    {
      "@type": "Question",
      name: "Will the content look generic or 'AI'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We tune visuals, voice and pacing to your brand and benchmark against your best-performing content, so creatives match your look rather than a generic template.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can we get the first creatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A starter batch is usually delivered within a few days of the discovery call, once brand assets and references are in place.",
      },
    },
    {
      "@type": "Question",
      name: "Which platforms do you produce for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TikTok, Instagram Reels, YouTube Shorts, paid social, landing pages and email — in multiple aspect ratios and 12+ languages.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only do content, or full campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. You can use the studio purely for production, or hand over strategy, iteration and reporting with the done-for-you growth model.",
      },
    },
  ],
};

export default function AiStudioPage() {
  return (
    <>
      <JsonLd
        data={[
          studioJsonLd,
          studioFaqJsonLd,
          breadcrumbJsonLd([{ name: "AI Studio", path: "/ai-studio" }]),
        ]}
      />
      <AiStudioContent />
    </>
  );
}
