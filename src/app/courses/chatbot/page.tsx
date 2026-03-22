import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import ChatbotContent from "./ChatbotContent";

export const metadata: Metadata = {
  title: "AI Chatbot Development Course — Build & Sell Bots with n8n & ChatGPT",
  description:
    "Learn to build production-ready AI chatbots using n8n and ChatGPT in 3 weeks. 6 live sessions, 12+ templates, sales playbook included. Start earning from €59. API keys included.",
  keywords: [
    "AI chatbot development course",
    "build AI chatbot",
    "n8n chatbot tutorial",
    "ChatGPT chatbot course",
    "chatbot without coding",
    "AI automation course",
    "n8n course",
    "how to build AI chatbot",
    "chatbot for business",
    "AI bot development",
  ],
  openGraph: {
    title: "AI Chatbot Development Course — n8n & ChatGPT | AI Insider",
    description:
      "Build production-ready AI chatbots in 3 weeks. 6 sessions, 12+ templates, sales playbook. Join 6,000+ trained specialists from €59.",
    type: "website",
  },
  alternates: {
    canonical: "https://insiderai.it.com/courses/chatbot",
  },
};

const chatbotJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Chat-Bot Development (ChatGPT & n8n)",
    description:
      "Learn to build production-ready AI chatbots using n8n and ChatGPT. From zero to a niche-ready bot for services, e-commerce or healthcare. 6 live sessions, 12+ templates, sales playbook included.",
    url: "https://insiderai.it.com/courses/chatbot",
    provider: {
      "@type": "Organization",
      name: "AI Insider",
      url: "https://insiderai.it.com",
    },
    offers: {
      "@type": "Offer",
      price: "59",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      category: "Online Course",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P3W",
      courseWorkload: "PT2H",
    },
    teaches: [
      "Build AI chatbots with n8n and ChatGPT",
      "Design conversation flows and validation logic",
      "Integrate CRM, payments and webhooks",
      "Deploy and sell AI chatbots to clients",
    ],
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Course participant" },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Built a Telegram bot for beauty salons — booking, Google Sheets sync, fully customizable. Already found first clients. The course gave a powerful push.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is support included in the AI Chatbot course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, mentors answer in chat during the cohort and for 3 days after the course ends.",
        },
      },
      {
        "@type": "Question",
        name: "What will I build in the AI Chatbot Development course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A niche-ready AI chatbot customized to your use case, ready to demo to clients. Most participants finish with a fully functional bot for booking, lead qualification, or support.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to know how to code to build an AI chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No coding required. We use n8n, a no-code workflow automation tool, combined with ChatGPT APIs. All you need is a computer and enthusiasm to learn.",
        },
      },
      {
        "@type": "Question",
        name: "How long is the AI Chatbot course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "3 weeks, 6 sessions. You watch on your own schedule — video instructions are delivered each morning, with weekly mini-projects reviewed by mentors.",
        },
      },
      {
        "@type": "Question",
        name: "Do I get a certificate after completing the chatbot course?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you receive a digital AI Insider certificate of completion after finishing the course.",
        },
      },
      {
        "@type": "Question",
        name: "What is the refund policy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full refund available up to 7 days before the course start. Payment via card or PayPal. Company invoice available on request.",
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
      { "@type": "ListItem", position: 3, name: "AI Chat-Bot Development", item: "https://insiderai.it.com/courses/chatbot" },
    ],
  },
];

export default function ChatbotCoursePage() {
  return (
    <>
      <JsonLd data={chatbotJsonLd as unknown as Record<string, unknown>[]} />
      <ChatbotContent />
    </>
  );
}
