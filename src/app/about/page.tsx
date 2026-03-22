import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About AI Insider — Our Mission & Story",
  description:
    "AI Insider was built to make practical AI automation education accessible to everyone. Meet the team behind 6,000+ trained professionals and discover our mission.",
  openGraph: {
    title: "About AI Insider — Our Mission & Story",
    description:
      "Built by practitioners, for practitioners. Discover the story behind AI Insider and our mission to democratize AI automation education.",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AI Insider",
  description: "The story and mission behind AI Insider — AI automation education platform",
  url: "https://insiderai.it.com/about",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    description:
      "AI automation education platform helping entrepreneurs build real AI skills with practical courses and community support.",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
    foundingDate: "2023",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutContent />
    </>
  );
}
