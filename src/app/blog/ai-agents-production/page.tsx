import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";

export const metadata: Metadata = {
  title: "Shipping AI Agents to Production — Observability, Guardrails & Retries | AI Insider",
  description:
    "Practical guide to deploying AI agents in production. Covers tracing, guardrails, retry logic, cost control and monitoring patterns for LLM-powered systems.",
  keywords: ["AI agents production", "deploy AI agent", "LLM observability", "AI agent guardrails", "production AI system"],
  alternates: { canonical: "https://insiderai.it.com/blog/ai-agents-production" },
  openGraph: { title: "Shipping AI Agents to Production | AI Insider", type: "article" },
};

export default function AiAgentsProductionPost() {
  return (
    <BlogPost
      emoji="🤖"
      badge="Playbook"
      badgeColor="bg-emerald-500/20 text-emerald-400"
      title="Shipping AI Agents to Production"
      subtitle="Task decomposition, deterministic tools, guardrails and rollback plans — everything you need to go from prototype to production."
      date="September 2024"
      readTime="10 min"
      tags={["AI Agents", "Observability", "Guardrails", "Retries", "Production"]}
      relatedPosts={[
        { title: "Building Robust n8n Workflows", href: "/blog/n8n-workflows", sub: "Queues, DLQ, alerts" },
        { title: "Evaluating LLM Systems", href: "/blog/evaluating-llm", sub: "Quality, safety, cost control" },
        { title: "Voice Agents with Vapi", href: "/blog/voice-agents-vapi", sub: "Latency, barge-in, grounding" },
      ]}
    >
      <h2>Why Agents Fail in Production</h2>
      <p>
        Agents fail in the seams — not in the core LLM call, but in the transitions between steps.
        A tool returns unexpected JSON. An API rate-limits. The agent loses track of its goal after
        3 tool calls. These are the failure modes that don&apos;t show up in demos.
      </p>
      <p>
        Adopt <strong>trace-first debugging</strong>: every run produces a timeline with inputs, outputs, costs,
        and tool calls. This reduces mean-time-to-resolution (MTTR) dramatically when something goes wrong at 2am.
      </p>

      <h2>Architecture Principles</h2>

      <h3>1. Task Decomposition</h3>
      <p>
        Break complex tasks into small, verifiable sub-tasks. Each sub-task should have a clear success criterion
        the agent can check. &quot;Summarize this document&quot; is a good sub-task; &quot;Be helpful&quot; is not.
      </p>

      <h3>2. Deterministic Tools</h3>
      <p>
        Tools should be pure functions where possible. Same input → same output. Avoid side effects in read operations.
        Constrain outputs with JSON schemas — don&apos;t let the agent make up field names.
      </p>

      <h3>3. Sandbox Side-Effects</h3>
      <p>
        Write operations (sending emails, creating database records, making payments) should require explicit confirmation.
        Implement <em>compensating actions</em> for partial failures — if step 3 fails, you need to know how to undo steps 1 and 2.
      </p>

      <h3>4. Guardrails</h3>
      <p>
        Add input and output guardrails. Input guardrails check for prompt injection and off-topic requests.
        Output guardrails verify the response doesn&apos;t contain PII, harmful content, or hallucinated claims.
      </p>

      <h2>Observability Stack</h2>
      <p>Instrument every tool call with:</p>
      <ul>
        <li><strong>Input/output logging</strong> — what was the prompt, what came back</li>
        <li><strong>Latency</strong> — how long each step took</li>
        <li><strong>Token count</strong> — cost per step</li>
        <li><strong>Tool invocation count</strong> — detect infinite loops early</li>
        <li><strong>Error type</strong> — distinguish model errors from tool errors from network errors</li>
      </ul>

      <h2>Rollback Plans</h2>
      <p>For every write operation in your agent, answer these questions before deployment:</p>
      <ul>
        <li>What happens if this fails halfway through?</li>
        <li>Can we detect partial completion?</li>
        <li>What&apos;s the compensating action?</li>
        <li>Who gets notified if auto-rollback fails?</li>
      </ul>

      <h2>Production Checklist</h2>
      <ul>
        <li>✓ Tracing enabled for all tool calls</li>
        <li>✓ JSON schema validation on all tool inputs/outputs</li>
        <li>✓ Maximum tool call limit configured per run</li>
        <li>✓ Compensating actions documented for write operations</li>
        <li>✓ Human escalation path for high-stakes decisions</li>
        <li>✓ Separate staging environment with real data samples</li>
        <li>✓ Rollback procedure tested before going live</li>
      </ul>
    </BlogPost>
  );
}
