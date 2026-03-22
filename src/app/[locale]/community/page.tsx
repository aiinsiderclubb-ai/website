import { JsonLd } from "@/components/JsonLd";
import CommunityContent from "@/app/community/CommunityContent";

const communityJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Insider Community",
  url: "https://insiderai.it.com/community",
  description: "The most active AI automation community on Telegram with 12,000+ members",
  memberOf: {
    "@type": "OnlineCommunity",
    name: "AI Insider Telegram Community",
    url: "https://t.me/+qjwWJz7aLR1hMDQ0",
    numberOfMembers: 12000,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2000",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function LocaleCommunityPage() {
  return (
    <>
      <JsonLd data={communityJsonLd} />
      <CommunityContent />
    </>
  );
}
