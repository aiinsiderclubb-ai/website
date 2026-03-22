import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";

export const metadata: Metadata = {
  title: "Voice Agents with Vapi.ai — Latency, Barge-In & Grounding | AI Insider",
  description:
    "Deep dive into building production voice agents with Vapi.ai. Covers STT/TTS latency optimization, barge-in handling, grounding with RAG, and real deployment patterns.",
  keywords: ["Vapi.ai tutorial", "voice agent latency", "AI voice agent", "build voice agent Vapi", "barge-in voice AI"],
  alternates: { canonical: "https://insiderai.it.com/blog/voice-agents-vapi" },
  openGraph: { title: "Voice Agents with Vapi.ai | AI Insider", type: "article" },
};

export default function VoiceAgentsVapiPost() {
  return (
    <BlogPost
      emoji="🎙️"
      badge="Guide"
      badgeColor="bg-[#7c3aed]/20 text-[#a78bfa]"
      title="Voice Agents with Vapi"
      subtitle="Latency, barge-in, grounding — design patterns for natural conversations and safe real-time actions."
      date="August 2024"
      readTime="7 min"
      tags={["Vapi", "Voice AI", "Whisper", "Realtime", "Guardrails"]}
      relatedPosts={[
        { title: "Shipping AI Agents to Production", href: "/blog/ai-agents-production", sub: "Observability, guardrails, retries" },
        { title: "Evaluating LLM Systems", href: "/blog/evaluating-llm", sub: "Quality, safety, cost control" },
        { title: "Lead Qualification with LLMs", href: "/blog/lead-qualification", sub: "Routing, scoring, CRM sync" },
      ]}
    >
      <h2>The Voice Latency Problem</h2>
      <p>
        Voice conversations are unforgiving. Humans expect responses within 500–800ms. Any delay longer than that
        feels broken. Traditional LLM pipelines — transcription → LLM → TTS — can easily take 2–4 seconds without optimization.
        Vapi solves much of this, but you still need to understand the tradeoffs.
      </p>
      <p>
        Keep round-trip time under <strong>600ms</strong> for natural feel. This means:
        using streaming TTS, streaming LLM output, and implementing intelligent end-of-turn detection.
      </p>

      <h2>Key Design Patterns</h2>

      <h3>Barge-In Handling</h3>
      <p>
        Users interrupt. Always. Your agent needs to detect when the user starts speaking mid-response,
        immediately stop the TTS stream, and process the new input. Vapi handles this at the infrastructure level,
        but your dialog flows need to be designed to gracefully handle interruption at any point.
      </p>

      <h3>Intent Handling Over Exact Matching</h3>
      <p>
        Voice input is messy — background noise, accents, partial sentences. Don&apos;t rely on exact string matching.
        Use intent classification with fuzzy matching and always ask for confirmation before taking irreversible actions.
      </p>

      <h3>Constrain Tool-Calls</h3>
      <p>
        Voice agents that can take actions (book appointments, update CRM, send emails) must be extremely conservative.
        Use <em>idempotent, reversible operations</em> only. Every action that has real-world consequences should
        require verbal confirmation from the user: &quot;I&apos;m going to book you for Tuesday at 3pm — does that sound right?&quot;
      </p>

      <h3>Grounding Responses</h3>
      <p>
        Ground every factual claim to a trusted source. If your voice agent answers questions about pricing, policies,
        or availability, it must pull from a live data source — not from the model&apos;s training data, which may be outdated.
      </p>

      <h2>Vapi-Specific Configuration</h2>
      <ul>
        <li><strong>STT model</strong>: Use <code>whisper-large-v3</code> for accuracy, <code>whisper-base</code> for speed</li>
        <li><strong>TTS voice</strong>: Choose voices with low first-token latency. Eleven Labs voices are high quality but slower</li>
        <li><strong>Interruption sensitivity</strong>: Tune based on use case — support calls need high sensitivity, interviews need low</li>
        <li><strong>Max duration</strong>: Always set a max call duration to prevent runaway costs</li>
        <li><strong>Fallback</strong>: Configure a human transfer number for when the agent can&apos;t help</li>
      </ul>

      <h2>Use Case Patterns</h2>

      <h3>Appointment Booking</h3>
      <p>
        Healthcare, beauty, home services. Agent asks for preferred time, checks availability via tool call (e.g. Calendly API),
        proposes slots, confirms verbally, books and sends SMS confirmation.
      </p>

      <h3>Inbound Sales Qualification</h3>
      <p>
        Ask the 5 qualification questions your sales team always asks. Score the lead. Route hot leads to a human immediately.
        Log everything to CRM. Saves 20 min of rep time per inbound call.
      </p>

      <h3>Customer Support Tier-1</h3>
      <p>
        Handle the top 10 most common support requests without human involvement. Escalate when confidence is low.
        Track escalation rate — if it&apos;s above 30%, expand the knowledge base.
      </p>

      <h2>Production Checklist</h2>
      <ul>
        <li>✓ P95 latency under 700ms measured end-to-end</li>
        <li>✓ Barge-in tested with concurrent speakers</li>
        <li>✓ All tool-calls require verbal confirmation</li>
        <li>✓ Human fallback number configured</li>
        <li>✓ Max call duration set</li>
        <li>✓ Call recordings stored and reviewed weekly</li>
      </ul>
    </BlogPost>
  );
}
