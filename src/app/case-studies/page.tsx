import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "AI Automation Case Studies — Real Results",
  description:
    "Real-world AI automation case studies: e-commerce bots that cut support costs 40%, lead qualification systems with 3× conversion, voice agents booking 80% of appointments automatically.",
  openGraph: {
    title: "AI Automation Case Studies — Real Results | AI Insider",
    description:
      "See how businesses use AI automation to cut costs, boost conversions and scale without hiring.",
  },
};

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Automation Case Studies",
  description: "Real-world results from AI automation implementations",
  url: "https://insiderai.it.com/case-studies",
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={caseStudiesJsonLd} />
      <CaseStudiesContent />
    </>
  );
}
