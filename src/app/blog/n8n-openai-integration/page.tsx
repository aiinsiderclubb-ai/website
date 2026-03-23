import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "n8n + OpenAI Integration: Build AI-Powered Workflows (2026)",
  description:
    "Step-by-step guide to connecting n8n with OpenAI API. Build chatbots, text processors, image generators and AI agents with zero code.",
  keywords: [
    "n8n openai integration",
    "n8n chatgpt",
    "n8n openai node",
    "n8n ai workflow",
    "openai n8n tutorial",
    "n8n gpt-4",
    "n8n ai automation",
    "connect openai to n8n",
    "n8n function calling",
    "n8n ai agent",
  ],
  openGraph: {
    title: "n8n + OpenAI Integration: Build AI-Powered Workflows (2026) | AI Insider",
    description:
      "Connect n8n to OpenAI in minutes. Build chatbots, text processors and AI agents — no code required.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/n8n-openai-integration",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "n8n + OpenAI Integration: Build AI-Powered Workflows (2026)",
  description:
    "Step-by-step guide to connecting n8n with OpenAI API. Build chatbots, text processors, image generators and AI agents with zero code.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-01-20",
  dateModified: "2026-03-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/n8n-openai-integration" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I connect n8n to OpenAI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to n8n Settings → Credentials → Add New Credential → OpenAI API. Paste your OpenAI API key from platform.openai.com. Once saved, you can use the OpenAI node in any workflow by selecting the credential. The connection takes under 2 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Which OpenAI models work best in n8n?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GPT-4o-mini is the best balance of cost and quality for most automation tasks. Use GPT-4o for complex reasoning and structured output. For image generation, use DALL-E 3. For embeddings and RAG pipelines, use text-embedding-3-small which is fast and cheap.",
      },
    },
    {
      "@type": "Question",
      name: "Can n8n do function calling with OpenAI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. n8n's AI Agent node supports tool use (function calling) natively. You define tools as sub-nodes — HTTP Request, Google Sheets, Send Email — and the AI decides when and how to call them based on the user's request. This enables building fully autonomous AI agents.",
      },
    },
    {
      "@type": "Question",
      name: "How much does running OpenAI in n8n cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs depend on usage. GPT-4o-mini costs $0.15 per million input tokens — a typical customer support interaction uses 500-1000 tokens, meaning roughly $0.00015 per message. For 10,000 messages/month, you'd pay about $1.50 in API costs. Always set usage limits in OpenAI's dashboard to avoid surprises.",
      },
    },
  ],
};

export default function N8nOpenAIIntegration() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="🤖"
        badge="Integration Guide"
        badgeColor="bg-[#0ea5e9]/20 text-[#38bdf8]"
        title="n8n + OpenAI Integration: Build AI-Powered Workflows (2026)"
        subtitle="Connect n8n to the OpenAI API and build chatbots, processors and AI agents — step by step, zero code."
        date="January 2026"
        readTime="12 min"
        tags={["n8n", "OpenAI", "AI Workflows", "Automation", "ChatGPT"]}
        relatedPosts={[
          { title: "n8n Tutorial for Beginners", href: "/blog/n8n-beginners-guide", sub: "Complete guide to workflow automation" },
          { title: "How to Build an AI Agent", href: "/blog/how-to-build-ai-agent", sub: "From zero to production-ready agent" },
          { title: "AI Chatbot for Business", href: "/blog/ai-chatbot-business-guide", sub: "Build and sell chatbots step by step" },
        ]}
      >
        <h2>What You Need Before Starting</h2>
        <p>
          Connecting n8n to OpenAI is one of the most powerful combinations in modern automation. You get the logic and
          connectivity of n8n combined with the intelligence of GPT-4o, DALL-E, Whisper and Embeddings — all without
          writing a single line of Python or JavaScript.
        </p>
        <p>Before you start, make sure you have:</p>
        <ul>
          <li><strong>n8n installed</strong> — either self-hosted via Docker or n8n Cloud account</li>
          <li><strong>OpenAI API key</strong> — create one at platform.openai.com (requires a paid account)</li>
          <li><strong>Basic n8n knowledge</strong> — understand what nodes and workflows are (see our <a href="/blog/n8n-beginners-guide">n8n Beginner Guide</a>)</li>
          <li><strong>A use case in mind</strong> — chatbot, text processor, image generator, or AI agent</li>
        </ul>
        <blockquote>
          <strong>Pro tip:</strong> Set a monthly spending limit in OpenAI&apos;s dashboard before you start. Go to
          platform.openai.com → Settings → Billing → Usage limits. Start with $10–$20 to avoid surprises.
        </blockquote>

        <h2>Step 1: Adding OpenAI Credentials in n8n</h2>
        <p>
          Before using any OpenAI node, you need to store your API key as a credential in n8n. This is done once and
          reused across all workflows.
        </p>
        <ol>
          <li>Open n8n and go to <strong>Settings → Credentials</strong></li>
          <li>Click <strong>Add Credential</strong> and search for &quot;OpenAI&quot;</li>
          <li>Select <strong>OpenAI API</strong></li>
          <li>Paste your API key (starts with <code>sk-...</code>)</li>
          <li>Click <strong>Save</strong> — n8n encrypts and stores it securely</li>
        </ol>
        <p>
          Now every OpenAI node in your workspace can use this credential. You never have to paste the key again.
        </p>

        <h2>Step 2: The OpenAI Node — Core Operations</h2>
        <p>
          The n8n OpenAI node supports multiple operations. Here are the most important ones:
        </p>

        <h3>Chat Completions (most common)</h3>
        <p>
          This calls the GPT-4o, GPT-4o-mini or o3 models. It&apos;s what you use for chatbots, text classification,
          summarization, translation and almost every NLP task.
        </p>
        <ul>
          <li><strong>Operation:</strong> Message a Model</li>
          <li><strong>Model:</strong> gpt-4o-mini (or gpt-4o for complex tasks)</li>
          <li><strong>Messages:</strong> System message + User message</li>
          <li><strong>Output:</strong> <code>choices[0].message.content</code></li>
        </ul>

        <h3>Image Generation (DALL-E 3)</h3>
        <p>
          Generate images from text descriptions. Use this for product mockups, social media images, or creative assets.
        </p>
        <ul>
          <li><strong>Operation:</strong> Generate an Image</li>
          <li><strong>Model:</strong> dall-e-3</li>
          <li><strong>Prompt:</strong> Your text description</li>
          <li><strong>Size:</strong> 1024x1024, 1792x1024 (landscape), or 1024x1792 (portrait)</li>
        </ul>

        <h3>Audio Transcription (Whisper)</h3>
        <p>
          Convert audio files to text. Essential for voice message processing, podcast transcription, and meeting notes.
        </p>

        <h3>Embeddings</h3>
        <p>
          Convert text to vectors for semantic search and RAG pipelines. Use <code>text-embedding-3-small</code> for
          most use cases — it&apos;s fast, cheap, and performs excellently.
        </p>

        <h2>Building a Chat Completions Workflow</h2>
        <p>
          Let&apos;s build the most fundamental n8n + OpenAI workflow: a text processor that takes input and returns
          an AI-generated response.
        </p>

        <h3>Workflow: Summarize Any Text</h3>
        <ol>
          <li>Add a <strong>Manual Trigger</strong> node (for testing)</li>
          <li>Add a <strong>Set</strong> node with a field: <code>text = &quot;Your long article goes here...&quot;</code></li>
          <li>Add an <strong>OpenAI</strong> node:
            <ul>
              <li>Operation: Message a Model</li>
              <li>Model: gpt-4o-mini</li>
              <li>System message: <code>You are a concise summarizer. Always respond in 3 bullet points.</code></li>
              <li>User message: <code>{`{{$json.text}}`}</code></li>
            </ul>
          </li>
          <li>The output <code>{`{{$json.choices[0].message.content}}`}</code> contains the summary</li>
        </ol>

        <p>
          This same pattern works for translation, sentiment analysis, keyword extraction, FAQ generation — any text
          transformation task you can think of.
        </p>

        <h2>Function Calling in n8n (Tool Use)</h2>
        <p>
          Function calling (now called &quot;tool use&quot;) lets the AI decide to call external functions based on the
          user&apos;s request. In n8n, this is implemented through the <strong>AI Agent</strong> node.
        </p>

        <h3>How the AI Agent Node Works</h3>
        <p>
          The AI Agent node has three slots:
        </p>
        <ul>
          <li><strong>Chat Model</strong> — connect an OpenAI Chat Model sub-node (GPT-4o)</li>
          <li><strong>Memory</strong> — connect a Simple Memory or Redis Memory for conversation history</li>
          <li><strong>Tools</strong> — connect any n8n nodes as callable tools (HTTP Request, Google Sheets, etc.)</li>
        </ul>

        <p>
          When a user asks &quot;What&apos;s the weather in Rome?&quot;, the agent decides to call the weather tool,
          gets the data, and incorporates it into a natural-language response. All of this happens automatically.
        </p>

        <pre><code>{`// Example tool definition for the AI Agent
// The agent receives this as a "tool" it can call:
{
  "name": "get_customer_info",
  "description": "Look up customer information by email address",
  "parameters": {
    "type": "object",
    "properties": {
      "email": {
        "type": "string",
        "description": "The customer's email address"
      }
    },
    "required": ["email"]
  }
}`}</code></pre>

        <h2>Building a Customer Support Bot</h2>
        <p>
          Here&apos;s a complete customer support bot workflow using n8n and OpenAI. This handles FAQ questions,
          escalates to humans when needed, and maintains conversation memory.
        </p>

        <h3>Architecture</h3>
        <ul>
          <li><strong>Trigger:</strong> Telegram Trigger or Webhook (from your website)</li>
          <li><strong>Memory:</strong> Simple Memory (last 10 messages per user)</li>
          <li><strong>Knowledge:</strong> HTTP Request tool to your FAQ API or Notion database</li>
          <li><strong>AI Agent:</strong> GPT-4o with system prompt + tools</li>
          <li><strong>Escalation:</strong> IF node — if AI confidence is low, notify human agent</li>
          <li><strong>Reply:</strong> Telegram/Webhook response node</li>
        </ul>

        <h3>System Prompt for Customer Support</h3>
        <pre><code>{`You are a helpful customer support agent for [Company Name].
Your job is to answer questions about our products and services.

Guidelines:
- Be friendly and concise
- If you don't know the answer, say so honestly
- Use the search_faq tool to look up relevant information
- If the customer is upset or the issue is complex,
  respond with "ESCALATE" to transfer to a human agent

Company info: [Insert your company details here]`}</code></pre>

        <blockquote>
          <strong>Real result:</strong> One of our students built this exact bot for an e-commerce client and
          reduced support tickets by 67% in the first month. The bot handled 340 conversations per week autonomously.
          Learn to build production-ready chatbots in our{" "}
          <a href="/en/courses/chatbot">AI Chatbot Development course (€59)</a>.
        </blockquote>

        <h2>Image Generation Workflow</h2>
        <p>
          Build a workflow that generates product images, social media visuals, or blog thumbnails on demand.
        </p>

        <h3>Workflow: Auto-Generate Blog Images</h3>
        <ol>
          <li><strong>Trigger:</strong> HTTP Webhook receiving blog post title and topic</li>
          <li><strong>OpenAI (GPT-4o-mini):</strong> Generate an optimized DALL-E prompt from the title</li>
          <li><strong>OpenAI (DALL-E 3):</strong> Generate the image using the refined prompt</li>
          <li><strong>HTTP Request:</strong> Upload the image URL to your CMS or S3 bucket</li>
          <li><strong>Response:</strong> Return the image URL to the caller</li>
        </ol>

        <pre><code>{`// Step 2 - Prompt optimization system message:
"Convert the blog title into a professional DALL-E prompt.
Style: photorealistic, modern tech aesthetic, 16:9 format.
No text in image. Return ONLY the prompt, nothing else."

// Step 2 - User message:
"Blog title: {{$json.title}}"`}</code></pre>

        <h2>Cost Optimization Tips</h2>
        <p>
          OpenAI costs can add up quickly if you&apos;re not careful. Here are the key optimizations:
        </p>

        <h3>1. Choose the Right Model</h3>
        <ul>
          <li><strong>GPT-4o-mini:</strong> Use for 80% of tasks — classification, summarization, simple chat. 10x cheaper than GPT-4o.</li>
          <li><strong>GPT-4o:</strong> Reserve for complex reasoning, code generation, or when output quality matters.</li>
          <li><strong>o3-mini:</strong> For math, logic and step-by-step reasoning tasks.</li>
        </ul>

        <h3>2. Optimize Your Prompts</h3>
        <ul>
          <li>Keep system prompts concise — every token costs money</li>
          <li>Use structured output (JSON mode) to avoid verbose AI responses</li>
          <li>For classification tasks, instruct the model to respond with a single word</li>
        </ul>

        <h3>3. Cache Common Responses</h3>
        <p>
          For FAQ bots, pre-generate answers for the top 50 questions and store them in a database. Only call OpenAI
          for questions that don&apos;t match existing answers. This can reduce costs by 70–80%.
        </p>

        <h3>4. Use Streaming for Better UX</h3>
        <p>
          Enable streaming responses so users see text appearing in real-time rather than waiting. This doesn&apos;t
          reduce cost but dramatically improves perceived performance.
        </p>

        <h2>Putting It All Together: Next Steps</h2>
        <p>
          You now have everything you need to build powerful AI workflows with n8n and OpenAI. The most important
          thing is to start with a real use case — pick something you do manually today and automate it.
        </p>
        <p>
          Common starting points:
        </p>
        <ul>
          <li>Email triage and auto-reply with GPT-4o-mini</li>
          <li>Customer FAQ bot for Telegram or your website</li>
          <li>Social media content generator with DALL-E 3</li>
          <li>Meeting transcription and summary pipeline with Whisper</li>
          <li>Lead qualification bot that scores and routes inquiries</li>
        </ul>
        <p>
          If you want to build client-facing chatbots and charge €500–€2,000 per project, our{" "}
          <a href="/en/courses/chatbot">AI Chatbot Development course</a> walks through the complete process from
          setup to delivery and pricing.
        </p>
      </BlogPost>
    </>
  );
}
