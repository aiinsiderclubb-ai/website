import { JsonLd } from "@/components/JsonLd";
import ReviewsContent from "@/app/reviews/ReviewsContent";

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
};

export default function LocaleReviewsPage() {
  return (
    <>
      <JsonLd data={reviewsJsonLd} />
      <ReviewsContent />
    </>
  );
}
