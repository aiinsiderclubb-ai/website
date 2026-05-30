import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
import { organizationJsonLd, websiteJsonLd, SITE_URL } from "@landing/lib/seo";
import { getFaqItems, getHowItWorks } from "@landing/data/content";
import HomePage from "./HomePage";

export const metadata: Metadata = {
  title: "AI Insider — AI Automation Education Platform",
  description:
    "AI Insider trains 6,000+ people in AI automation — chatbots, voice agents and n8n workflows. Hands-on courses, an active community and B2B AI solutions.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "AI Insider — Master the Future of AI Automation",
    description:
      "Hands-on AI automation training: chatbots, voice agents and n8n workflows. Courses, community and B2B AI solutions for builders and businesses.",
    url: SITE_URL,
    type: "website",
  },
};

const faqItems = getFaqItems("en");
const steps = getHowItWorks("en");

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to launch AI automation in 3 steps",
  description:
    "Launch production AI automation by connecting your tools, composing flows and shipping to production with monitoring.",
  totalTime: "P3D",
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.description,
    url: `${SITE_URL}/#how-it-works`,
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: "AI Insider — AI Automation Education Platform",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "#faq"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          webPageJsonLd,
          howToJsonLd,
          faqJsonLd,
        ]}
      />
      <HomePage />
    </>
  );
}
