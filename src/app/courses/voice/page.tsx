import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import VoiceContent from "./VoiceContent";

export const metadata: Metadata = {
  title: "AI Voice Agent Course — Build with Vapi.ai & n8n | AI Insider",
  description:
    "Learn to build production-ready AI voice agents using Vapi.ai and n8n in 2 weeks. Real-time conversations, tool-calls, deployment playbooks. From €39. API keys included.",
  keywords: [
    "AI voice agent course",
    "Vapi AI course",
    "build voice AI agent",
    "Vapi.ai tutorial",
    "voice agent with n8n",
    "AI phone agent",
    "voice automation course",
    "Vapi course online",
    "voice AI for business",
    "how to build voice agent",
  ],
  openGraph: {
    title: "AI Voice Agent Course — Vapi.ai & n8n | AI Insider",
    description:
      "Build production-ready AI voice agents in 2 weeks. Real-time actions, Vapi.ai, n8n integration. Join from €39.",
    type: "website",
  },
  alternates: {
    canonical: "https://insiderai.it.com/courses/voice",
  },
};

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
    teaches: [
      "Build AI voice agents with Vapi.ai",
      "Connect Vapi to n8n for workflow automation",
      "Handle real-time conversations with barge-in support",
      "Deploy voice agents for healthcare, sales and services",
    ],
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Course participant" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Learned workflow logic and built a voice booking agent in 2 weeks. The templates saved me hours of setup.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Vapi AI voice agent course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A practical 2-week course where you learn to build real-time AI voice agents using Vapi.ai and n8n. You'll deploy a production-ready voice agent capable of handling inbound calls, appointments, and customer support.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need coding experience to build an AI voice agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The course uses Vapi.ai's no-code interface combined with n8n workflows. Basic computer skills are sufficient — no programming background required.",
        },
      },
      {
        "@type": "Question",
        name: "Is the voice latency suitable for real conversations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Vapi.ai is optimized for sub-500ms latency with barge-in support. The course covers optimization techniques to achieve natural conversation feel.",
        },
      },
      {
        "@type": "Question",
        name: "What stacks does the AI Voice Agent course use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vapi.ai for voice infrastructure, Whisper-based speech-to-text, n8n for workflow automation, plus integrations with Google Sheets, CRM systems, and email.",
        },
      },
      {
        "@type": "Question",
        name: "How long is the AI Voice Agent course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2 weeks, 4 intensive sessions. Flexible schedule — watch when convenient. Includes weekly tasks with mentor feedback.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://insiderai.it.com" },
      { "@type": "ListItem", position: 2, name: "Courses", item: "https://insiderai.it.com/courses" },
      { "@type": "ListItem", position: 3, name: "AI Voice Agent", item: "https://insiderai.it.com/courses/voice" },
    ],
  },
];

export default function VoiceCoursePage() {
  return (
    <>
      <JsonLd data={voiceJsonLd as unknown as Record<string, unknown>[]} />
      <VoiceContent />
    </>
  );
}
