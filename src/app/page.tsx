"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AIContentStudio from "@/components/AIContentStudio";
import Courses from "@/components/Courses";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CommunityCTA from "@/components/CommunityCTA";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { JsonLd } from "@/components/JsonLd";

const CursorGlow = dynamic(() => import("@/components/CursorGlow"), {
  ssr: false,
});

const homepageFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually 1–3 days. The process is simple: connect your tools, configure your workflows, and launch. For enterprise setups, we provide a dedicated implementation plan.",
      },
    },
    {
      "@type": "Question",
      name: "Does it integrate with my CRM or spreadsheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support n8n, Vapi, Google Sheets, HubSpot and more through ready-made connectors. Custom integrations are also available.",
      },
    },
    {
      "@type": "Question",
      name: "What about security and compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We follow industry best practices: encryption, access control, audit logs, and rollback capabilities. Our approach aligns with GDPR and SOC2 standards.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I see courses and case studies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Browse our Courses page for training programs, our Case Studies page for real-world examples with real numbers, and the Blog for articles and guides.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homepageFaqJsonLd} />
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <AIContentStudio />
        <Courses />
        <TechStack />
        <Testimonials />
        <FAQ />
        <NewsletterSection />
        <CommunityCTA />
      </main>
      <Footer />
    </>
  );
}
