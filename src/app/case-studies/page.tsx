import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
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

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={caseStudiesJsonLd} />
      <CaseStudiesContent />
    </>
  );
}
