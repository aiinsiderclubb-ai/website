import { JsonLd } from "@/components/JsonLd";
import AboutContent from "@/app/about/AboutContent";

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AI Insider",
  description: "The story and mission behind AI Insider — AI automation education platform",
  url: "https://insiderai.it.com/about",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    description:
      "AI automation education platform helping entrepreneurs build real AI skills with practical courses and community support.",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 5 },
    foundingDate: "2023",
  },
};

export default function LocaleAboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutContent />
    </>
  );
}
