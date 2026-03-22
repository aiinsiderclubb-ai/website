import { JsonLd } from "@/components/JsonLd";
import MentorshipContent from "@/app/courses/mentorship/MentorshipContent";

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
  },
];

export default function LocaleMentorshipPage() {
  return (
    <>
      <JsonLd data={mentorshipJsonLd as unknown as Record<string, unknown>[]} />
      <MentorshipContent />
    </>
  );
}
