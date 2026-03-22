import BlogPost from "@/components/shared/BlogPost";

export default function EvaluatingLLMPost() {
  return (
    <BlogPost
      emoji="🧪"
      badge="Playbook"
      badgeColor="bg-[#7c3aed]/20 text-[#a78bfa]"
      title="Evaluating LLM Systems"
      subtitle="From prompts to business metrics — how we run evaluations to ensure quality, safety and cost control in production."
      date="August 2024"
      readTime="8 min"
      tags={["LLM", "Evals", "Quality", "Safety", "Cost tracking"]}
      relatedPosts={[
        { title: "Building Robust n8n Workflows", href: "/blog/n8n-workflows", sub: "Queues, DLQ, alerts" },
        { title: "Shipping AI Agents to Production", href: "/blog/ai-agents-production", sub: "Observability, guardrails, retries" },
        { title: "Lead Qualification with LLMs", href: "/blog/lead-qualification", sub: "Routing, scoring, CRM sync" },
      ]}
    >
      <h2>Why Evals Are Non-Negotiable</h2>
      <p>
        You can&apos;t improve what you don&apos;t measure. LLM systems are probabilistic by nature — small prompt changes
        can have large, unexpected effects on output quality, cost, and safety. Without a systematic evaluation framework,
        you&apos;re flying blind.
      </p>
      <p>
        Production evals must connect model behavior directly to business KPIs. We blend automatic metrics with
        <strong> human-in-the-loop</strong> spot checks on high-value segments.
      </p>

      <h2>Our Evaluation Loop</h2>

      <h3>Step 1: Define Task Rubric</h3>
      <p>
        Before writing a single eval, define what &quot;good&quot; means for your task. For a customer support bot,
        that might be: relevant answer, correct tone, no hallucinated policy details, and response under 150 words.
        Write explicit pass/fail rules for each dimension.
      </p>

      <h3>Step 2: Build a Diverse Eval Set</h3>
      <p>
        Generate diverse eval sets with synthetic augmentation. Cover happy paths, edge cases, adversarial inputs,
        and domain-specific jargon. Aim for 100–500 examples minimum before going to production.
      </p>

      <h3>Step 3: Score Automatically + Human Audit</h3>
      <p>
        Use programmatic judges (regex, classifier models, GPT-4 as judge) for the bulk of evaluation.
        Add human audits on the 10% of cases with the lowest confidence scores and on random samples weekly.
      </p>

      <h3>Step 4: Track Cost/Performance Drift Weekly</h3>
      <p>
        Log every production request with metadata: model version, input/output tokens, latency, and a quality score.
        Set up dashboards to track drift over time. Cost surprises usually mean prompt bloat or increased usage — catch them early.
      </p>

      <h2>Metrics We Track</h2>
      <ul>
        <li><strong>Relevance score</strong> — does the response address the actual question?</li>
        <li><strong>Faithfulness</strong> — is every claim grounded in the provided context (for RAG)?</li>
        <li><strong>Toxicity</strong> — automated screening for harmful content</li>
        <li><strong>Latency P50/P95/P99</strong> — user experience depends on tail latencies</li>
        <li><strong>Cost per request</strong> — track against budget weekly</li>
        <li><strong>Task completion rate</strong> — did the user actually get what they needed?</li>
      </ul>

      <h2>Common Pitfalls</h2>
      <ul>
        <li>Eval set that&apos;s too narrow — only covers cases you already handle well</li>
        <li>Using the same model to judge itself (biased results)</li>
        <li>Not versioning eval sets — can&apos;t compare results across model updates</li>
        <li>Optimizing for eval metrics at the expense of real user satisfaction</li>
      </ul>

      <h2>Tools We Recommend</h2>
      <ul>
        <li><strong>PromptFoo</strong> — open-source LLM evaluation framework</li>
        <li><strong>LangSmith</strong> — tracing + evaluation from LangChain team</li>
        <li><strong>RAGAS</strong> — specifically for RAG pipeline evaluation</li>
        <li><strong>Custom rubric + GPT-4 judge</strong> — for nuanced task-specific evaluation</li>
      </ul>
    </BlogPost>
  );
}
