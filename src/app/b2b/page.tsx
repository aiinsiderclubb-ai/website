import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import B2BContent from "./B2BContent";

export const metadata: Metadata = {
  title: "B2B AI Solutions — Chatbots, Voice Agents & RAG Systems",
  description:
    "Custom AI solutions for business: chatbots for sales & support, voice agents, RAG assistants, lead qualification with CRM sync. GDPR compliant, ROI-driven. Get proposal in 24h.",
  keywords: [
    "B2B AI solutions",
    "AI chatbot for business",
    "voice agent business",
    "RAG assistant",
    "lead qualification AI",
    "CRM automation AI",
    "AI business automation",
    "enterprise AI",
    "n8n automation B2B",
  ],
  openGraph: {
    title: "B2B AI Solutions — Chatbots, Voice Agents & RAG | AI Insider",
    description:
      "Custom AI for business: chatbots, voice agents, RAG, lead qualification. GDPR compliant. Fast delivery. Get your proposal in 24h.",
  },
};

const b2bFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is our data protected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All data is encrypted at rest and in transit using AES-256. We implement zero-trust architecture with role-based access controls and comprehensive audit logging.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with our existing CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we support all major CRMs: Salesforce, HubSpot, Pipedrive, Zoho. Custom integrations available via REST APIs and webhooks.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical implementation timeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple chatbots: 2-3 weeks. Complex voice agents with CRM integration: 4-6 weeks. We provide weekly progress updates.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer 24/7 monitoring, monthly performance reviews, and quarterly optimization sessions. SLA-backed response times.",
      },
    },
  ],
};

const b2bServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AI Insider B2B",
  url: "https://insiderai.it.com/b2b",
  description: "Custom AI solutions for business: chatbots, voice agents, RAG assistants, lead qualification and CRM automation",
  serviceType: "AI Automation Solutions",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "B2B AI Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chatbots for Sales & Support" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Voice Agents" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RAG Assistants" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lead Qualification" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Process Automation" } },
    ],
  },
};

export default function B2BPage() {
  return (
    <>
      <JsonLd data={b2bFaqJsonLd} />
      <JsonLd data={b2bServiceJsonLd} />
      <B2BContent />
    </>
  );
}
