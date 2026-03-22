import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import MentorshipContent from "./MentorshipContent";

export const metadata: Metadata = {
  title: "AI Chatbot Mentorship — 1-on-1 Coaching to First €1,000 | AI Insider",
  description:
    "Personal 1-on-1 AI mentorship program. Build your first chatbot and land your first client. Revenue playbook, unlimited support, mentor stays until you earn your first €1,000. From €299.",
  keywords: [
    "AI mentorship program",
    "AI chatbot mentorship",
    "1-on-1 AI coaching",
    "AI freelancing course",
    "how to make money with AI",
    "AI automation consulting",
    "AI business mentorship",
    "earn money with chatbots",
    "AI freelancer training",
  ],
  openGraph: {
    title: "AI Chatbot Mentorship — 1-on-1 to First €1,000 | AI Insider",
    description:
      "Personal AI mentorship. Build, monetize and land your first client with 1-on-1 guidance. Unlimited support until you earn your first €1,000.",
    type: "website",
  },
  alternates: {
    canonical: "https://insiderai.it.com/courses/mentorship",
  },
};

const mentorshipJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Personal ChatBot Mentorship — Your First €1,000",
    description:
      "1-on-1 mentorship to create and monetize your first AI chatbot. Personal guidance, direct feedback, a revenue playbook and unlimited support until you close your first paying client.",
    url: "https://insiderai.it.com/courses/mentorship",
    provider: {
      "@type": "Organization",
      name: "AI Insider",
      url: "https://insiderai.it.com",
    },
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      category: "VIP Mentorship",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "42",
      bestRating: "5",
      worstRating: "1",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P2W",
    },
    teaches: [
      "Build a production-ready AI chatbot from scratch",
      "Choose and validate a profitable niche",
      "Find and pitch clients for AI automation services",
      "Close your first €1,000 automation deal",
    ],
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Emma Williams" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "The personal mentorship was exactly what I needed. My mentor helped me land my first automation project and now I have a growing client base.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in the AI Chatbot Mentorship program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The VIP Mentorship includes personal 1-on-1 sessions with an AI automation expert, 7-day chat support, a revenue playbook with client outreach scripts, unlimited bot reviews, niche selection help, and mentor support until you close your first paying client.",
        },
      },
      {
        "@type": "Question",
        name: "How do I make money with AI chatbots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI chatbot freelancers charge €500–€3,000 per bot build, plus monthly maintenance fees. The mentorship provides a proven sales script to find clients in high-demand niches like beauty salons, clinics, real estate, and e-commerce.",
        },
      },
      {
        "@type": "Question",
        name: "Is the AI mentorship suitable for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The mentorship starts from zero — your mentor builds a personalized roadmap based on your experience level, goals and available time. No prior coding or AI knowledge required.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the AI mentorship last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The core program is 2 weeks with daily access to your mentor. Support continues until you land your first client, regardless of how long it takes.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://insiderai.it.com" },
      { "@type": "ListItem", position: 2, name: "Courses", item: "https://insiderai.it.com/courses" },
      { "@type": "ListItem", position: 3, name: "Personal Mentorship", item: "https://insiderai.it.com/courses/mentorship" },
    ],
  },
];

export default function MentorshipPage() {
  return (
    <>
      <JsonLd data={mentorshipJsonLd as unknown as Record<string, unknown>[]} />
      <MentorshipContent />
    </>
  );
}
