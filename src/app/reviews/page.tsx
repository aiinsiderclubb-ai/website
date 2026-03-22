import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Student Reviews & Success Stories — 4.9/5 Rating",
  description:
    "1,847+ verified reviews from AI Insider students. 4.9/5 average rating. Real success stories: career changes, income growth, business automation. See how professionals transformed with AI.",
  keywords: [
    "AI Insider reviews",
    "AI course reviews",
    "AI automation course testimonials",
    "ChatGPT course reviews",
    "n8n course reviews",
    "AI training reviews",
    "AI mentorship reviews",
  ],
  openGraph: {
    title: "Reviews & Success Stories — 4.9/5 | AI Insider",
    description:
      "1,847+ verified student reviews. 4.9/5 rating. Real AI automation success stories from professionals worldwide.",
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
    reviewCount: "1847",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Michael Chen" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Started with zero AI knowledge 8 months ago. Now I'm earning $280K annually as an AI automation consultant.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Johnson" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The ChatBot Development course was exactly what I needed. Built 3 chatbots for our company that save us 25 hours per week!",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Emma Williams" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "The personal mentorship was life-changing. My mentor helped me land my first $5K automation project within 2 weeks.",
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewsJsonLd} />
      <ReviewsContent />
    </>
  );
}
