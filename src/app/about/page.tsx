import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
import { breadcrumbJsonLd } from "@landing/lib/seo";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About AI Insider — AI Automation Education Platform",
  description:
    "AI Insider trains 6,000+ practitioners in AI automation, chatbots, and voice agents. Built by practitioners, for practitioners — real workflows, real results.",
  openGraph: {
    title: "About AI Insider | AI Automation Education",
    description: "From a Telegram channel to 6,000+ trained professionals. Courses, mentorship, B2B and AI Content Studio.",
  },
  alternates: { canonical: "https://insiderai.it.com/about" },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Insider",
  url: "https://insiderai.it.com/about",
  description: "AI automation education platform with courses, community, and B2B services",
  foundingDate: "2023",
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[aboutJsonLd, breadcrumbJsonLd([{ name: "About", path: "/about" }])]} />
      <AboutContent />
    </>
  );
}
