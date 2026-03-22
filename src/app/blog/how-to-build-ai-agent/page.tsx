import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "How to Build an AI Agent from Scratch (2026) — Complete Tutorial",
  description:
    "Step-by-step guide to building your first AI agent. Learn about tools, memory, planning, orchestration with n8n and LangChain. Real examples, no fluff. Works without coding.",
  keywords: [
    "how to build AI agent",
    "build AI agent",
    "create AI agent",
    "AI agent tutorial",
    "AI agent from scratch",
    "AI agent without coding",
    "autonomous AI agent",
    "AI agent n8n",
    "LangChain agent tutorial",
    "AI agent for business",
  ],
  openGraph: {
    title: "How to Build an AI Agent from Scratch (2026) | AI Insider",
    description:
      "Complete step-by-step guide to building AI agents. Tools, memory, planning, orchestration. Real examples with n8n and OpenAI.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/how-to-build-ai-agent",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Build an AI Agent from Scratch (2026) — Complete Tutorial",
  description:
    "Step-by-step guide to building your first AI agent with tools, memory and real-world integrations.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-02-01",
  dateModified: "2026-03-10",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/how-to-build-ai-agent" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI agent is an autonomous system that uses a large language model (LLM) to plan, make decisions, and take actions to complete a goal. Unlike a simple chatbot, an AI agent can use tools (search, APIs, databases), remember past interactions, and break complex tasks into sub-steps.",
      },
    },
    {
      "@type": "Question",
      name: "How do I build an AI agent without coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can build AI agents without coding using n8n's AI Agent node, which provides a visual interface for connecting LLMs with tools, memory, and APIs. Simply drag and drop nodes to define what your agent can do and how it should behave.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to build an AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main cost is LLM API usage. GPT-4o-mini costs approximately $0.15 per 1M input tokens — most agents spend $5–50/month in API costs depending on usage volume. n8n is free for self-hosted setups.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between an AI chatbot and an AI agent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A chatbot responds to messages in a conversation. An AI agent can take actions: search the web, read and write to databases, call APIs, send emails, book appointments, and execute multi-step plans autonomously. Agents are significantly more capable but also more complex to build.",
      },
    },
  ],
};

export default function HowToBuildAIAgent() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="🤖"
        badge="Tutorial"
        badgeColor="bg-purple-500/20 text-purple-400"
        title="How to Build an AI Agent from Scratch (2026)"
        subtitle="A complete, practical guide to creating your first autonomous AI agent. Covers architecture, tools, memory and real deployment — with and without code."
        date="February 2026"
        readTime="16 min"
        tags={["AI Agents", "n8n", "OpenAI", "Automation", "LLM"]}
        relatedPosts={[
          { title: "n8n Tutorial for Beginners", href: "/blog/n8n-beginners-guide", sub: "The complete n8n guide" },
          { title: "Shipping AI Agents to Production", href: "/blog/ai-agents-production", sub: "Observability, guardrails, retries" },
          { title: "RAG That Actually Works", href: "/blog/rag-that-actually-works", sub: "Build a reliable knowledge base" },
        ]}
      >
        <h2>What is an AI Agent?</h2>
        <p>
          An AI agent is an autonomous system powered by a large language model (LLM) that can <strong>plan, decide, and act</strong> to
          achieve a goal. The key difference from a simple chatbot: agents have access to <em>tools</em> and can take real-world actions.
        </p>
        <p>
          A chatbot answers questions. An AI agent can search the web for current data, read your CRM, send emails,
          book calendar appointments, and execute multi-step plans — all without human intervention.
        </p>

        <h2>The 4 Core Components of an AI Agent</h2>

        <h3>1. Brain (LLM)</h3>
        <p>
          The large language model is the "thinking" layer. GPT-4o, Claude 3.5 Sonnet, or Gemini 1.5 Pro — all work well.
          The LLM reads your instructions, decides which tools to use, and generates responses.
          For most business agents, GPT-4o-mini is the best cost/performance balance.
        </p>

        <h3>2. Tools</h3>
        <p>
          Tools are functions the agent can call. Examples:
        </p>
        <ul>
          <li><strong>search_web(query)</strong> — get current information from Google</li>
          <li><strong>read_crm(customer_id)</strong> — fetch customer data from HubSpot</li>
          <li><strong>send_email(to, subject, body)</strong> — send emails autonomously</li>
          <li><strong>create_calendar_event(title, time)</strong> — book appointments</li>
          <li><strong>query_database(sql)</strong> — read/write from databases</li>
        </ul>
        <p>
          The LLM decides which tool to call based on the user's request and the tool descriptions you provide.
        </p>

        <h3>3. Memory</h3>
        <p>
          Agents need memory to maintain context. Three types:
        </p>
        <ul>
          <li><strong>Short-term (conversation buffer)</strong> — last N messages in the chat</li>
          <li><strong>Long-term (vector store)</strong> — semantic search over past interactions</li>
          <li><strong>Episodic (structured store)</strong> — specific facts about the user or business</li>
        </ul>

        <h3>4. Orchestration</h3>
        <p>
          The system that manages the agent loop: receive input → think → select tool → execute tool → observe result → repeat.
          This loop continues until the agent has enough information to give a final answer.
        </p>

        <h2>Build Your First AI Agent in n8n (No Code)</h2>
        <p>
          n8n's AI Agent node handles the orchestration loop automatically. Here's how to build a customer support agent in 15 minutes:
        </p>

        <h3>Step 1: Open n8n and Create a New Workflow</h3>
        <p>
          Click <strong>+ New Workflow</strong>. Add a <strong>Webhook</strong> trigger node.
          Copy the webhook URL — this is where your frontend will send messages.
        </p>

        <h3>Step 2: Add the AI Agent Node</h3>
        <p>
          Add an <strong>AI Agent</strong> node. Connect it to your Webhook trigger.
          In the configuration, set:
        </p>
        <ul>
          <li><strong>Chat Model</strong>: OpenAI GPT-4o-mini</li>
          <li><strong>System Prompt</strong>: "You are a helpful customer support agent for [Your Business]. Always be polite, concise, and escalate to a human if you cannot resolve the issue."</li>
          <li><strong>Input</strong>: <code>{'{{$json.message}}'}</code></li>
        </ul>

        <h3>Step 3: Add Tools</h3>
        <p>
          Connect tool nodes to your AI Agent. Start with these two:
        </p>
        <ul>
          <li><strong>HTTP Request</strong> node — call your product database API</li>
          <li><strong>Google Sheets</strong> node — read your FAQ spreadsheet</li>
        </ul>
        <p>
          For each tool, write a clear description so the LLM knows when to use it:
          "Use this tool to look up product information by product ID or name."
        </p>

        <h3>Step 4: Add Memory</h3>
        <p>
          Add a <strong>Simple Memory</strong> node connected to your AI Agent.
          Set the session key to <code>{'{{$json.user_id}}'}</code> so each user gets their own conversation history.
          Memory window: 10 messages (enough for most conversations).
        </p>

        <h3>Step 5: Test and Deploy</h3>
        <p>
          Activate the workflow. Test by sending POST requests to your webhook:
        </p>
        <pre><code>{`curl -X POST https://your-n8n.com/webhook/agent \\\n  -H "Content-Type: application/json" \\\n  -d '{"message": "What is your return policy?", "user_id": "user_123"}'`}</code></pre>

        <h2>Agent Patterns for Business</h2>

        <h3>Pattern 1: Lead Qualification Agent</h3>
        <p>
          A Telegram or web chat bot that qualifies inbound leads. Tools: CRM lookup, calendar availability check,
          appointment booking. Result: qualified leads automatically moved through your pipeline with zero human effort.
          <strong>Typical result: 3× increase in conversion from lead to demo.</strong>
        </p>

        <h3>Pattern 2: E-Commerce Support Agent</h3>
        <p>
          Handles order status, returns, product questions. Tools: order database, returns API, knowledge base.
          Resolves 75–85% of tickets automatically.
          <strong>Typical result: 40% reduction in support costs.</strong>
        </p>

        <h3>Pattern 3: Content Research Agent</h3>
        <p>
          Given a topic, the agent searches multiple sources, extracts key information, and produces a structured brief.
          Tools: web search, YouTube transcript fetcher, news API, competitor analysis.
          Turns a 3-hour research task into 5 minutes.
        </p>

        <h3>Pattern 4: Internal Knowledge Agent</h3>
        <p>
          Answers employee questions by searching internal documentation, Notion pages, and Confluence.
          Replaces "where do I find X?" Slack messages. RAG-powered with automatic document indexing.
        </p>

        <h2>Common Mistakes When Building AI Agents</h2>

        <h3>1. Too Many Tools</h3>
        <p>
          Start with 2–3 tools. More tools = more confusion for the LLM = more hallucination.
          Add tools incrementally as you test and see where the agent gets stuck.
        </p>

        <h3>2. Vague System Prompts</h3>
        <p>
          "Be helpful" is not a system prompt. Good system prompts define: persona, scope (what the agent CANNOT do),
          output format, escalation rules, and tone. The more specific, the better.
        </p>

        <h3>3. No Guardrails</h3>
        <p>
          Agents need safety rails. Always add: content moderation checks, output validation,
          rate limiting per user, and a fallback "escalate to human" path for anything the agent isn't confident about.
        </p>

        <h3>4. Ignoring Costs</h3>
        <p>
          Monitor token usage from day one. Set up alerts when costs exceed thresholds.
          For high-volume use cases, consider caching common responses or using GPT-4o-mini instead of GPT-4o
          (10× cheaper, adequate for most support and qualification tasks).
        </p>

        <h2>From Agent to Business: Monetizing Your Skills</h2>
        <p>
          Building AI agents is a lucrative freelance skill. Current market rates:
        </p>
        <ul>
          <li>Basic support chatbot: €500–€1,500 one-time</li>
          <li>Lead qualification agent: €1,000–€3,000 one-time + €200/month maintenance</li>
          <li>Custom AI agent for enterprise: €5,000–€20,000+</li>
          <li>Monthly retainer (agent management + improvements): €500–€2,000/month</li>
        </ul>
        <p>
          The most in-demand niches: healthcare (appointment booking), real estate (lead qualification),
          e-commerce (support + upsell), and professional services (intake automation).
        </p>

        <h2>What to Build Next</h2>
        <p>
          Once you've built your first agent, expand it with:
        </p>
        <ul>
          <li><strong>Voice interface</strong> — add Vapi.ai to give your agent a phone number and voice</li>
          <li><strong>RAG knowledge base</strong> — connect Pinecone so your agent knows your entire product catalog</li>
          <li><strong>Multi-agent system</strong> — a supervisor agent that delegates to specialized sub-agents</li>
          <li><strong>Analytics</strong> — track resolution rate, escalation rate, and user satisfaction</li>
        </ul>
      </BlogPost>
    </>
  );
}
