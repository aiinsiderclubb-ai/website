import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
import AiStudioContent from "./AiStudioContent";

export const metadata: Metadata = {
  title: "AI Content Studio — Influencers, Video & UGC at Scale",
  description:
    "AI Content Studio: virtual influencers, AI video production, UGC ads and creatives — without shoots, designers or content bottlenecks. 500+ pieces/month.",
  openGraph: {
    title: "AI Content Studio | AI Insider",
    description: "AI influencers, video production, UGC ads and creative studio for marketing teams.",
  },
  alternates: { canonical: "https://insiderai.it.com/ai-studio" },
};

const studioJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Insider Content Studio",
  url: "https://insiderai.it.com/ai-studio",
  provider: { "@type": "Organization", name: "AI Insider" },
  description: "AI influencers, video production, UGC content and creative assets for marketing teams",
};

export default function AiStudioPage() {
  return (
    <>
      <JsonLd data={studioJsonLd} />
      <AiStudioContent />
    </>
  );
}
