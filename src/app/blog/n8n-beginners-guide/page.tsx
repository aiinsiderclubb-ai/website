import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "n8n Tutorial for Beginners: Complete Guide to Workflow Automation (2026)",
  description:
    "Learn n8n from scratch. This complete beginner's guide covers installation, your first workflow, AI integrations, webhooks, error handling and real automation examples. Free & open-source.",
  keywords: [
    "n8n tutorial",
    "n8n for beginners",
    "n8n automation",
    "n8n workflow tutorial",
    "learn n8n",
    "n8n getting started",
    "n8n guide",
    "workflow automation tutorial",
    "n8n examples",
    "n8n AI automation",
  ],
  openGraph: {
    title: "n8n Tutorial for Beginners: Complete Guide (2026) | AI Insider",
    description:
      "The most complete n8n beginner guide. Setup, first workflow, AI integrations, webhooks and real examples. Start automating in under 30 minutes.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/n8n-beginners-guide",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "n8n Tutorial for Beginners: Complete Guide to Workflow Automation (2026)",
  description:
    "Learn n8n from scratch — installation, first workflow, AI integrations, webhooks and real automation examples.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-01-15",
  dateModified: "2026-03-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/n8n-beginners-guide" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is n8n?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "n8n is an open-source workflow automation platform that lets you connect apps, APIs and services without writing code. It runs locally or in the cloud and supports 400+ integrations including OpenAI, Telegram, Google Sheets, HubSpot and more.",
      },
    },
    {
      "@type": "Question",
      name: "Is n8n free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. n8n is free and open-source for self-hosting. A cloud version starts at $20/month. For most individuals and small teams, the self-hosted version on a $5 VPS is completely free.",
      },
    },
    {
      "@type": "Question",
      name: "Is n8n better than Zapier or Make?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For developers and power users, n8n is generally preferred — it's open-source, self-hostable, has no execution limits on self-hosted plans, and supports advanced branching and custom code nodes. Zapier and Make are easier for complete beginners but cost more at scale.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to know how to code to use n8n?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Most n8n workflows can be built without any code using visual nodes. For advanced use cases, you can add JavaScript expressions, but it's optional.",
      },
    },
  ],
};

export default function N8nBeginnersGuide() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="🔧"
        badge="Complete Guide"
        badgeColor="bg-[#0ea5e9]/20 text-[#38bdf8]"
        title="n8n Tutorial for Beginners: Complete Guide to Workflow Automation (2026)"
        subtitle="Everything you need to go from zero to your first automated workflow. Setup, nodes, AI integrations, webhooks and real examples — no code required."
        date="January 2026"
        readTime="14 min"
        tags={["n8n", "Automation", "Beginners", "No-code", "AI workflows"]}
        relatedPosts={[
          { title: "Building Robust n8n Workflows", href: "/blog/n8n-workflows", sub: "Error handling, retries, dead-letter queues" },
          { title: "How to Build an AI Agent", href: "/blog/how-to-build-ai-agent", sub: "From zero to production-ready agent" },
          { title: "AI Chatbot for Business", href: "/blog/ai-chatbot-business-guide", sub: "Build and sell chatbots step by step" },
        ]}
      >
        <h2>What is n8n?</h2>
        <p>
          n8n (pronounced "n-eight-n") is an open-source workflow automation tool that lets you connect apps, automate repetitive tasks,
          and build AI-powered pipelines — all without writing a single line of code. Think of it as a Zapier alternative that you
          can host yourself, customize fully, and use for free.
        </p>
        <p>
          As of 2026, n8n has over 400 native integrations: OpenAI, Telegram, Google Sheets, HubSpot, Slack, Notion, Stripe, Twilio,
          and hundreds more. It also has a built-in Code node for JavaScript when you need something custom.
        </p>
        <p>
          <strong>Why n8n over Zapier or Make.com?</strong> Three main reasons: it's open-source and self-hostable (free),
          it has no execution limits on self-hosted plans, and it handles complex branching logic and AI agent orchestration
          that simpler tools can't match.
        </p>

        <h2>How to Install n8n (3 methods)</h2>

        <h3>Method 1: n8n Cloud (easiest, paid)</h3>
        <p>
          Go to <strong>n8n.io</strong> and sign up for a cloud account. Free trial available. Best if you want to start
          immediately without any server setup. Paid plans from $20/month.
        </p>

        <h3>Method 2: Docker (recommended for self-hosting)</h3>
        <p>
          If you have Docker installed, run n8n locally with a single command:
        </p>
        <pre><code>{`docker run -it --rm \\\n  --name n8n \\\n  -p 5678:5678 \\\n  -v ~/.n8n:/home/node/.n8n \\\n  docker.n8n.io/n8nio/n8n`}</code></pre>
        <p>
          Then open <strong>http://localhost:5678</strong> in your browser. Your workflows are saved in <code>~/.n8n</code>.
        </p>

        <h3>Method 3: VPS server (production)</h3>
        <p>
          For a production setup, rent a $5–$10/month VPS (DigitalOcean, Hetzner, or Vultr), install Docker, and run n8n
          with a domain and SSL. This gives you a permanent, always-on automation server.
        </p>

        <h2>n8n Interface: Key Concepts</h2>

        <h3>Nodes</h3>
        <p>
          Every action in n8n is a <strong>node</strong>. There are three types:
        </p>
        <ul>
          <li><strong>Trigger nodes</strong> — start a workflow (Webhook, Schedule, Gmail, Telegram)</li>
          <li><strong>Action nodes</strong> — do something (HTTP Request, OpenAI, Google Sheets, Send Email)</li>
          <li><strong>Logic nodes</strong> — control flow (IF, Switch, Merge, Loop)</li>
        </ul>

        <h3>Workflows</h3>
        <p>
          A workflow is a chain of nodes connected by edges. Data flows from left to right, passing through each node
          as JSON objects. Each node receives items, processes them, and passes results to the next node.
        </p>

        <h3>Expressions</h3>
        <p>
          You can reference data from previous nodes using expressions: <code>{'{{$json.email}}'}</code> or
          <code>{'{{$node["HTTP Request"].json.result}}'}</code>. This makes workflows dynamic without code.
        </p>

        <h2>Your First n8n Workflow: Telegram Bot in 10 Minutes</h2>
        <p>
          Let's build something real: a Telegram bot that receives a message and replies with a ChatGPT response.
        </p>

        <h3>Step 1: Create a Telegram Bot</h3>
        <p>
          Open Telegram and message <strong>@BotFather</strong>. Send <code>/newbot</code>, follow the prompts,
          and copy your bot token.
        </p>

        <h3>Step 2: Add Telegram Trigger in n8n</h3>
        <p>
          In n8n, click <strong>+ Add node</strong>, search for "Telegram Trigger", and select it.
          Configure it with your bot token and set the trigger to "Message".
        </p>

        <h3>Step 3: Add OpenAI Node</h3>
        <p>
          Add an <strong>OpenAI</strong> node after the trigger. Set operation to "Message a Model",
          model to "gpt-4o-mini", and for the prompt use an expression:
          <code>{'{{$json.message.text}}'}</code>
        </p>

        <h3>Step 4: Reply via Telegram</h3>
        <p>
          Add a <strong>Telegram</strong> action node. Set operation to "Send Message",
          chat ID to <code>{'{{$("Telegram Trigger").item.json.message.chat.id}}'}</code>,
          and text to <code>{'{{$json.choices[0].message.content}}'}</code>.
        </p>

        <h3>Step 5: Activate and Test</h3>
        <p>
          Click <strong>Activate</strong> in the top right. Send your bot a message on Telegram.
          Within 1–2 seconds, it should reply with a GPT-4o-mini response. Congratulations — you just built an AI bot!
        </p>

        <h2>5 Most Useful n8n Workflow Patterns</h2>

        <h3>1. Lead Capture → CRM → Notification</h3>
        <p>
          Trigger: Webhook from contact form → Action: Create/update contact in HubSpot →
          Action: Send Slack or Telegram notification to sales team. This alone saves 2–3 hours per week for most businesses.
        </p>

        <h3>2. Scheduled AI Content Generation</h3>
        <p>
          Trigger: Schedule (daily at 8am) → Action: Read topics from Google Sheets →
          Action: Generate post with OpenAI → Action: Publish to Telegram/Twitter/LinkedIn.
          Fully automated content pipeline.
        </p>

        <h3>3. AI Email Triage</h3>
        <p>
          Trigger: Gmail (new email) → Action: Classify intent with OpenAI →
          Logic: IF "support request" → create Notion task. IF "sales inquiry" → notify sales team.
          Handles 80% of incoming email without human attention.
        </p>

        <h3>4. Voice Transcription Pipeline</h3>
        <p>
          Trigger: Webhook with audio file URL → Action: Transcribe with Whisper →
          Action: Summarize with GPT-4o → Action: Save to Google Sheets + notify via Telegram.
        </p>

        <h3>5. AI Support Bot with RAG</h3>
        <p>
          Trigger: Telegram message → Action: Search Pinecone for relevant context →
          Action: Build prompt with context + user question → Action: Generate answer with OpenAI →
          Action: Reply in Telegram. Full retrieval-augmented generation in n8n.
        </p>

        <h2>Error Handling in n8n</h2>
        <p>
          Production workflows need robust error handling. Three things to set up immediately:
        </p>
        <ul>
          <li><strong>Retry on fail</strong> — enable on API nodes (3 retries, 5s delay)</li>
          <li><strong>Error workflow</strong> — a separate workflow that runs when the main one fails (sends you a Telegram alert)</li>
          <li><strong>Continue on error</strong> — for non-critical nodes that shouldn't break the whole flow</li>
        </ul>

        <h2>n8n AI Nodes: The Power Tools</h2>
        <p>
          n8n has dedicated AI nodes that make building LLM applications much easier than raw HTTP requests:
        </p>
        <ul>
          <li><strong>AI Agent</strong> — autonomous agent with tools and memory</li>
          <li><strong>Chat Memory Manager</strong> — maintain conversation history</li>
          <li><strong>Vector Store</strong> — connect to Pinecone, Supabase, or in-memory store</li>
          <li><strong>Document Loader</strong> — load PDFs, websites, Google Docs into your knowledge base</li>
          <li><strong>Text Splitter</strong> — chunk documents for RAG pipelines</li>
        </ul>

        <h2>n8n vs Make vs Zapier: Which Should You Choose?</h2>

        <table>
          <thead>
            <tr><th>Feature</th><th>n8n</th><th>Make</th><th>Zapier</th></tr>
          </thead>
          <tbody>
            <tr><td>Price (free tier)</td><td>✅ Free self-hosted</td><td>✅ 1,000 ops/mo</td><td>✅ 100 tasks/mo</td></tr>
            <tr><td>Self-hosting</td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td></tr>
            <tr><td>AI/LLM nodes</td><td>✅ Native</td><td>⚠️ Limited</td><td>⚠️ Limited</td></tr>
            <tr><td>Complexity</td><td>⚠️ Medium</td><td>✅ Low</td><td>✅ Lowest</td></tr>
            <tr><td>Custom code</td><td>✅ JavaScript</td><td>⚠️ Limited</td><td>❌ No</td></tr>
          </tbody>
        </table>

        <p>
          <strong>Our recommendation:</strong> Start with n8n. The learning curve is worth it — you get unlimited executions,
          full control, and a platform that scales from simple Zaps to full AI agent orchestration.
        </p>

        <h2>Next Steps</h2>
        <p>
          Now that you understand n8n basics, here's what to build next:
        </p>
        <ul>
          <li>Build a client-facing chatbot (our <strong>AI Chatbot Development</strong> course covers this in 3 weeks)</li>
          <li>Connect an AI voice agent using Vapi.ai and n8n</li>
          <li>Build a RAG pipeline with Pinecone for document Q&A</li>
          <li>Automate your entire content pipeline from topics to published posts</li>
        </ul>
        <p>
          The best way to learn n8n is to automate something you actually do manually today.
          Pick one repetitive task, build a workflow for it, and iterate from there.
        </p>
      </BlogPost>
    </>
  );
}
