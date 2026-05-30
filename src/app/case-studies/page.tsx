import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
import { breadcrumbJsonLd } from "@landing/lib/seo";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "AI Automation Case Studies — Real Results, Real Numbers",
  description:
    "Real AI automation case studies: 40% support cost reduction, 3× lead conversion, 80% booking automation. E-commerce, SaaS, healthcare, and agency implementations.",
  openGraph: {
    title: "AI Automation Case Studies | AI Insider",
    description: "Real client implementations with measurable ROI — chatbots, voice agents, lead qualification, and content pipelines.",
  },
  alternates: { canonical: "https://insiderai.it.com/case-studies" },
};

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Insider Case Studies",
  url: "https://insiderai.it.com/case-studies",
  description: "Real-world AI automation implementations with measurable business results",
};

const caseArticles = [
  {
    headline: "AI Support Bot Cut Costs by 40%",
    about: "AI customer-support chatbot for an online fashion retailer",
    industry: "E-commerce",
  },
  {
    headline: "3× Lead Conversion with AI Qualification",
    about: "AI lead qualification and routing for a B2B SaaS startup",
    industry: "B2B SaaS",
  },
  {
    headline: "Voice Agent Automates 80% of Bookings",
    about: "AI voice agent for appointment booking across a 12-location medical clinic",
    industry: "Healthcare",
  },
  {
    headline: "500+ Content Pieces/Month — 1 Person",
    about: "AI content production pipeline for a digital marketing agency",
    industry: "Marketing",
  },
].map((c) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: c.headline,
  about: c.about,
  articleSection: "Case Study",
  url: "https://insiderai.it.com/case-studies",
  isPartOf: { "@type": "CollectionPage", url: "https://insiderai.it.com/case-studies" },
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: { "@id": "https://insiderai.it.com/#organization" },
}));

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          caseStudiesJsonLd,
          ...caseArticles,
          breadcrumbJsonLd([{ name: "Case Studies", path: "/case-studies" }]),
        ]}
      />
      <CaseStudiesContent />
    </>
  );
}
