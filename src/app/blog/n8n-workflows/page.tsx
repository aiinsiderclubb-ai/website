import BlogPost from "@/components/shared/BlogPost";

export default function N8nWorkflowsPost() {
  return (
    <BlogPost
      emoji="🧰"
      badge="Guide"
      badgeColor="bg-[#0ea5e9]/20 text-[#38bdf8]"
      title="Building Robust n8n Workflows"
      subtitle="Retries, queues and error handling patterns for reliable AI orchestrations under load."
      date="August 2024"
      readTime="6 min"
      tags={["n8n", "Queue workers", "Dead-letter", "Error handling"]}
      relatedPosts={[
        { title: "Shipping AI Agents to Production", href: "/blog/ai-agents-production", sub: "Observability, guardrails, retries" },
        { title: "Evaluating LLM Systems", href: "/blog/evaluating-llm", sub: "Quality, safety, cost control" },
        { title: "Voice Agents with Vapi", href: "/blog/voice-agents-vapi", sub: "Latency, barge-in, grounding" },
      ]}
    >
      <h2>Why Reliability Matters in n8n</h2>
      <p>
        n8n is a powerful workflow automation tool, but like any distributed system, it can fail in unpredictable ways.
        API timeouts, temporary network blips, and downstream service outages are all common. Without proper error handling,
        these become production incidents that wake you up at 3am.
      </p>
      <p>
        Reliability in n8n starts with <strong>idempotent nodes</strong> and predictable retries.
        We separate critical steps into isolated queues with backoff strategies, use dead-letter queues for poison messages,
        and add circuit breakers around flaky APIs.
      </p>

      <h2>Key Tactics</h2>

      <h3>1. Idempotent Nodes</h3>
      <p>
        Every node that writes data should be safe to run multiple times. Use unique IDs from the source system
        as deduplication keys. If a webhook fires twice, your workflow shouldn&apos;t create two records.
      </p>

      <h3>2. Retry with Backoff</h3>
      <p>
        n8n supports native retry configuration. Set exponential backoff for external API calls:
        first retry at 5s, second at 30s, third at 2min. This prevents hammering a struggling service.
      </p>

      <h3>3. Dead-Letter Queues</h3>
      <p>
        Use a <strong>wait/continue</strong> pattern to checkpoint long flows. Persist state externally (e.g. in Google Sheets or
        a database) so you can replay failed runs without starting from scratch.
      </p>

      <h3>4. Alerting on Error Ratios</h3>
      <p>
        Don&apos;t just alert on individual failures — alert on <em>error ratios</em> and <em>latency percentiles</em>.
        A single failure is noise; 5% of executions failing is a signal.
      </p>

      <h2>Templates We Use</h2>
      <p>We include templates for the most common automation patterns:</p>
      <ul>
        <li><strong>Onboarding automation</strong> — trigger on sign-up, route by plan, send personalized email sequence</li>
        <li><strong>Lead routing</strong> — parse inbound webhook, enrich with Clearbit, route to correct Slack channel and CRM</li>
        <li><strong>Invoice reconciliation</strong> — compare Stripe charges against accounting records, flag mismatches</li>
        <li><strong>Content publishing</strong> — pull from Notion, transform, publish to multiple channels with retry on rate-limit</li>
      </ul>

      <h2>Recommended n8n Node Patterns</h2>
      <ul>
        <li>Use <code>IF</code> nodes to branch on error conditions, not just happy paths</li>
        <li>Add <code>Set</code> nodes to normalize data shape before downstream nodes</li>
        <li>Wrap external API calls in <code>Error Trigger</code> → Slack notification flows</li>
        <li>Keep individual workflows small and composable — chain them via webhooks</li>
      </ul>

      <h2>Production Checklist</h2>
      <ul>
        <li>✓ All write operations are idempotent</li>
        <li>✓ Retry limits configured on every HTTP node</li>
        <li>✓ Error notifications wired to Slack/email</li>
        <li>✓ Execution logs reviewed weekly</li>
        <li>✓ Dead-letter recovery procedure documented</li>
      </ul>
    </BlogPost>
  );
}
