import type { Metadata } from "next";
import { JsonLd } from "@landing/components/JsonLd";
import { breadcrumbJsonLd, absoluteUrl } from "@landing/lib/seo";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Student Reviews & Success Stories — 4.9/5 Rating",
  description:
    "Selected real feedback from AI Insider students and community members. 4.9/5 average rating across courses, mentorship and practical automation builds.",
  keywords: [
    "AI Insider reviews",
    "AI course reviews",
    "AI automation course testimonials",
    "ChatGPT course reviews",
    "n8n course reviews",
    "AI training reviews",
    "AI mentorship reviews",
  ],
  alternates: { canonical: absoluteUrl("/reviews") },
  openGraph: {
    title: "Reviews & Success Stories — 4.9/5 | AI Insider",
    description:
      "Selected real student feedback. 4.9/5 rating across AI automation courses, mentorship and community builds.",
    url: absoluteUrl("/reviews"),
  },
};

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AI Insider",
  url: "https://insiderai.it.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Course participant" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "I built a Telegram bot for a beauty salon with booking, Google Sheets sync and a simple demo.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Community member" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The practical workflow examples helped me connect forms, CRM updates and Telegram alerts into one flow.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mentorship participant" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The mentorship helped me turn scattered ideas into one clear offer, a demo and a simple sales script.",
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={[reviewsJsonLd, breadcrumbJsonLd([{ name: "Reviews", path: "/reviews" }])]} />
      <ReviewsContent />
    </>
  );
}
