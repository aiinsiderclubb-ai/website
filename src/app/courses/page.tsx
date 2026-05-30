import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
import { breadcrumbJsonLd, absoluteUrl } from "@landing/lib/seo";
import CoursesContent from "./CoursesContent";

export const metadata: Metadata = {
  title: "AI Courses — ChatBot, Voice Agent & Mentorship",
  description:
    "Learn AI automation with hands-on courses. ChatBot development with ChatGPT & n8n (€59), Voice Agent with Vapi.ai (€39), Personal 1-on-1 mentorship (€299). API keys included.",
  keywords: [
    "AI courses",
    "chatbot development course",
    "voice agent course",
    "Vapi.ai course",
    "n8n automation course",
    "AI mentorship",
    "AI automation training",
    "ChatGPT course",
  ],
  alternates: { canonical: absoluteUrl("/courses") },
  openGraph: {
    title: "AI Courses — ChatBot, Voice Agent & Mentorship | AI Insider",
    description:
      "Hands-on AI automation courses. ChatBot (€59), Voice Agent (€39), VIP Mentorship (€299). API keys included. Join 100+ course graduates.",
    url: absoluteUrl("/courses"),
  },
};

const coursesJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Chat-Bot Development (ChatGPT & n8n)",
    description:
      "From zero to a niche-ready bot for services, e-commerce or healthcare. Practice on real tasks with templates and guidance. Includes a quick sales playbook.",
    provider: {
      "@type": "Organization",
      name: "AI Insider",
      url: "https://insiderai.it.com",
    },
    offers: {
      "@type": "Offer",
      price: "59",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2024-09-15",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P3W",
      instructor: { "@type": "Person", name: "Vladyslav Archer" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Voice Agent (Vapi.ai & Whisper)",
    description:
      "Design scenarios, wire real-time actions and take your voice agent to production for services, healthcare or sales.",
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
      validFrom: "2024-09-08",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P2W",
      instructor: { "@type": "Person", name: "Vladyslav Archer" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Personal ChatBot Mentorship",
    description:
      "1-on-1 mentorship to create and monetize your first chatbot. Personal guidance, direct feedback, a revenue playbook and unlimited support.",
    provider: {
      "@type": "Organization",
      name: "AI Insider",
      url: "https://insiderai.it.com",
    },
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P2W",
      instructor: { "@type": "Person", name: "Vladyslav Archer" },
    },
  },
];

const instructorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vladyslav Archer",
  jobTitle: "Founder & Lead Instructor",
  worksFor: { "@id": "https://insiderai.it.com/#organization" },
  knowsAbout: [
    "AI automation",
    "AI chatbots",
    "AI voice agents",
    "n8n workflows",
    "Vapi.ai",
    "ChatGPT",
  ],
  url: "https://insiderai.it.com/about",
};

export default function CoursesPage() {
  return (
    <>
      <JsonLd
        data={[
          ...(coursesJsonLd as unknown as Record<string, unknown>[]),
          instructorJsonLd,
          breadcrumbJsonLd([{ name: "Courses", path: "/courses" }]),
        ]}
      />
      <CoursesContent />
    </>
  );
}
