import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
import { breadcrumbJsonLd, absoluteUrl } from "@landing/lib/seo";
import { siteConfig } from "@landing/data/content";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact AI Insider — Courses, Mentorship & B2B AI",
  description:
    "Get in touch with AI Insider. Join our 6,000+ member Telegram community, message a manager directly, or email us about courses, mentorship and B2B AI projects.",
  keywords: ["contact AI Insider", "AI automation contact", "B2B AI proposal", "AI course support"],
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact AI Insider",
    description:
      "Reach AI Insider via Telegram or email — courses, mentorship and B2B AI automation projects.",
    url: absoluteUrl("/contact"),
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AI Insider",
  url: absoluteUrl("/contact"),
  mainEntity: {
    "@id": "https://insiderai.it.com/#organization",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        url: siteConfig.telegramManager,
        availableLanguage: ["English", "Russian", "Ukrainian"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        url: siteConfig.telegramManager,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[contactJsonLd, breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])]}
      />
      <ContactContent />
    </>
  );
}
