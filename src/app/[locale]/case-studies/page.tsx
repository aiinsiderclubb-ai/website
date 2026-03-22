import { JsonLd } from "@/components/JsonLd";
import CaseStudiesContent from "@/app/case-studies/CaseStudiesContent";

const caseStudiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AI Automation Case Studies",
  description: "Real-world results from AI automation implementations",
  url: "https://insiderai.it.com/case-studies",
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
  },
};

export default function LocaleCaseStudiesPage() {
  return (
    <>
      <JsonLd data={caseStudiesJsonLd} />
      <CaseStudiesContent />
    </>
  );
}
