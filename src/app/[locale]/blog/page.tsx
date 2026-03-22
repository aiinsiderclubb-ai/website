import { JsonLd } from "@/components/JsonLd";
import BlogContent from "@/app/blog/BlogContent";

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "AI Insider Blog",
  url: "https://insiderai.it.com/blog",
  description: "Practical AI automation guides, playbooks and case studies",
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
  },
};

export default function LocaleBlogPage() {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      <BlogContent />
    </>
  );
}
