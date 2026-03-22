import { JsonLd } from "@/components/JsonLd";
import ChatbotContent from "@/app/courses/chatbot/ChatbotContent";

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
  },
];

export default function LocaleChatbotPage() {
  return (
    <>
      <JsonLd data={chatbotJsonLd as unknown as Record<string, unknown>[]} />
      <ChatbotContent />
    </>
  );
}
