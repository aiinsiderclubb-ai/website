import { JsonLd } from "@/components/JsonLd";
import CoursesContent from "@/app/courses/CoursesContent";

const coursesJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Chat-Bot Development (ChatGPT & n8n)",
    description:
      "From zero to a niche-ready bot for services, e-commerce or healthcare. Practice on real tasks with templates and guidance. Includes a quick sales playbook.",
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
      validFrom: "2024-09-15",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P3W",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AI Voice Agent (Vapi.ai & Whisper)",
    description:
      "Design scenarios, wire real-time actions and take your voice agent to production for services, healthcare or sales.",
    provider: {
      "@type": "Organization",
      name: "AI Insider",
      url: "https://insiderai.it.com",
    },
    offers: {
      "@type": "Offer",
      price: "39",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      validFrom: "2024-09-08",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P2W",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Personal ChatBot Mentorship",
    description:
      "1-on-1 mentorship to create and monetize your first chatbot. Personal guidance, direct feedback, a revenue playbook and unlimited support.",
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
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      duration: "P2W",
    },
  },
];

export default function LocaleCoursesPage() {
  return (
    <>
      <JsonLd data={coursesJsonLd as unknown as Record<string, unknown>[]} />
      <CoursesContent />
    </>
  );
}
