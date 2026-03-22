import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "AI Automation Blog — Guides, Playbooks & Case Studies",
  description:
    "Practical AI automation guides: n8n workflows, voice agents with Vapi, RAG systems, prompt engineering, lead qualification with LLMs. Expert insights for developers and business owners.",
  keywords: [
    "AI automation blog",
    "n8n tutorial",
    "n8n workflow guide",
    "voice agent Vapi tutorial",
    "RAG tutorial",
    "prompt engineering guide",
    "AI agents production",
    "LLM evaluation",
    "AI automation guide",
    "ChatGPT automation",
  ],
  openGraph: {
    title: "AI Automation Blog — Guides & Playbooks | AI Insider",
    description:
      "Practical guides on n8n workflows, voice agents, RAG, prompt engineering. Real automation case studies and playbooks.",
  },
};

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
  blogPost: [
    {
      "@type": "BlogPosting",
      headline: "Building Robust n8n Workflows",
      description: "Patterns we use to make orchestrations reliable under load. Includes templates you can copy.",
      url: "https://insiderai.it.com/blog/n8n-workflows",
      keywords: "n8n, workflow automation, queue workers, error handling",
    },
    {
      "@type": "BlogPosting",
      headline: "Voice Agents with Vapi",
      description: "Design patterns for natural conversations and safe actions.",
      url: "https://insiderai.it.com/blog/voice-agents-vapi",
      keywords: "Vapi, voice agent, Whisper, AI voice",
    },
    {
      "@type": "BlogPosting",
      headline: "RAG that Actually Works",
      description: "How to avoid hallucinations and keep latency low at scale.",
      url: "https://insiderai.it.com/blog/rag-that-actually-works",
      keywords: "RAG, retrieval augmented generation, vector database, LLM",
    },
    {
      "@type": "BlogPosting",
      headline: "Shipping AI Agents to Production",
      description: "We cover task decomposition, deterministic tools, guardrails and rollback plans.",
      url: "https://insiderai.it.com/blog/ai-agents-production",
      keywords: "AI agents, production, guardrails, observability",
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogJsonLd} />
      <BlogContent />
    </>
  );
}
