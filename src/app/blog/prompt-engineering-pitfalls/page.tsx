import BlogPost from "@/components/shared/BlogPost";

export default function PromptEngineeringPitfallsPost() {
  return (
    <BlogPost
      emoji="🧩"
      badge="Guide"
      badgeColor="bg-[#0ea5e9]/20 text-[#38bdf8]"
      title="Prompt Engineering Pitfalls"
      subtitle="The hidden failure modes that make prompts brittle in production, and the patterns we use to keep them stable."
      date="August 2024"
      readTime="7 min"
      tags={["Prompts", "Schemas", "Validation", "Guardrails"]}
      relatedPosts={[
        { title: "Evaluating LLM Systems", href: "/blog/evaluating-llm", sub: "Quality, safety, cost control" },
        { title: "RAG that Actually Works", href: "/blog/rag-that-actually-works", sub: "Chunking, cache, evals" },
        { title: "Shipping AI Agents", href: "/blog/ai-agents-production", sub: "Observability, retries, tool safety" },
      ]}
    >
      <h2>Most Prompt Bugs Aren&apos;t Obvious</h2>
      <p>
        Prompt issues rarely fail loudly. More often, they degrade slowly: the model becomes verbose,
        starts inventing fields, ignores edge cases, or behaves inconsistently across seemingly similar inputs.
        That&apos;s why prompt engineering should be treated like software design, not like copywriting.
      </p>

      <h2>Four Common Pitfalls</h2>
      <h3>1. Hidden State in the Conversation</h3>
      <p>
        Long conversations accumulate accidental context. The model may anchor on earlier assumptions that are no longer true.
        Reset system instructions when the task changes, and keep state explicit in structured fields instead of freeform chat history.
      </p>

      <h3>2. Ambiguous Output Shape</h3>
      <p>
        If you say “return JSON”, the model will often still improvise. Define exact keys, required fields,
        and allowed values. Then validate the result against a schema before any downstream tool uses it.
      </p>

      <h3>3. Mixing Policy with Task Instructions</h3>
      <p>
        Prompts become fragile when safety rules, style rules, and task goals are blended together.
        Split them into layers: system policy, task definition, output schema, and examples.
      </p>

      <h3>4. No Adversarial Testing</h3>
      <p>
        A prompt that works on clean examples may collapse when users are vague, emotional, sarcastic, or malicious.
        Test with edge cases early, not after launch.
      </p>

      <h2>Patterns That Hold Up Better</h2>
      <ul>
        <li>Use explicit schemas for any machine-consumed output</li>
        <li>Add short positive and negative examples</li>
        <li>Prefer checklist-style constraints over long prose rules</li>
        <li>Separate extraction, reasoning, and action into different steps</li>
        <li>Evaluate prompts weekly against a saved test set</li>
      </ul>

      <h2>Production Rule of Thumb</h2>
      <p>
        If a prompt triggers tools, touches customer data, or affects revenue, it needs the same rigor as application code:
        versioning, tests, review, and rollback.
      </p>
    </BlogPost>
  );
}
