import { JsonLd } from "@/components/JsonLd";
import VoiceContent from "@/app/courses/voice/VoiceContent";

const voiceJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Voice Agent (Vapi.ai & Whisper)",
    description:
      "Build production-ready AI voice agents using Vapi.ai and n8n. Design scenarios, wire real-time actions, and deploy for services, healthcare or sales. 4 sessions, 8+ templates.",
    url: "https://insiderai.it.com/courses/voice",
    provider: {
      "@type": "Organization",
      name: "AI Insider",
      url: "https://insiderai.it.com",
    },
    offers: {
      "@type": "Offer",
      price: "39",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      category: "Online Course",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "94",
      bestRating: "5",
      worstRating: "1",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P2W",
      courseWorkload: "PT2H",
    },
  },
];

export default function LocaleVoicePage() {
  return (
    <>
      <JsonLd data={voiceJsonLd as unknown as Record<string, unknown>[]} />
      <VoiceContent />
    </>
  );
}
