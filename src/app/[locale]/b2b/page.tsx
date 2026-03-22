import { JsonLd } from "@/components/JsonLd";
import B2BContent from "@/app/b2b/B2BContent";

const b2bFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is our data protected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All data is encrypted at rest and in transit using AES-256. We implement zero-trust architecture with role-based access controls and comprehensive audit logging.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate with our existing CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we support all major CRMs: Salesforce, HubSpot, Pipedrive, Zoho. Custom integrations available via REST APIs and webhooks.",
      },
    },
  ],
};

const b2bServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AI Insider B2B",
  url: "https://insiderai.it.com/b2b",
  description:
    "Custom AI solutions for business: chatbots, voice agents, RAG assistants, lead qualification and CRM automation",
  serviceType: "AI Automation Solutions",
  areaServed: "Worldwide",
};

export default function LocaleB2BPage() {
  return (
    <>
      <JsonLd data={b2bFaqJsonLd} />
      <JsonLd data={b2bServiceJsonLd} />
      <B2BContent />
    </>
  );
}
