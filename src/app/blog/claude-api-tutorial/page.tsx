import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Claude API Tutorial: Build AI Apps with Anthropic (2026)",
  description:
    "Complete Claude API (Anthropic) tutorial. Messages API, system prompts, tool use, vision, document analysis — with code examples and comparison to OpenAI.",
  keywords: [
    "claude api tutorial",
    "anthropic claude api",
    "claude api python",
    "claude vs openai api",
    "claude 3.5 sonnet api",
    "anthropic api tutorial 2026",
    "claude messages api",
    "claude tool use",
    "claude vision api",
    "build ai app claude",
  ],
  openGraph: {
    title: "Claude API Tutorial: Build AI Apps with Anthropic (2026) | AI Insider",
    description:
      "Complete Claude API tutorial — Messages API, tool use, vision, document analysis and n8n integration.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/claude-api-tutorial",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Claude API Tutorial: Build AI Apps with Anthropic (2026)",
  description:
    "Complete Claude API tutorial. Messages API, system prompts, tool use, vision, document analysis — with code examples and comparison to OpenAI.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-03-18",
  dateModified: "2026-03-23",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/claude-api-tutorial" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Claude API better than OpenAI API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude excels at long-form writing, nuanced analysis, following complex multi-step instructions, and processing long documents (200K context). GPT-4o leads in multimodal tasks, DALL-E image generation integration, and has a larger ecosystem (Assistants API, fine-tuning). For pure text intelligence and instruction following, Claude 3.5 Sonnet is consistently rated higher by developers.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the Claude API cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude claude-sonnet-4-6 costs $3/million input tokens and $15/million output tokens. Claude Haiku costs $0.25/million input tokens — the most affordable high-quality model available. For comparison, a typical customer service chatbot interaction (1,000 tokens) costs $0.003 with Sonnet or $0.00025 with Haiku.",
      },
    },
    {
      "@type": "Question",
      name: "What is the context window of Claude?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Claude claude-opus-4-6 and claude-sonnet-4-6 both support a 200,000 token context window — equivalent to approximately 500 pages of text. This makes Claude ideal for processing long documents, entire codebases, book analysis, and multi-document synthesis where other models hit limits.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Claude API with n8n?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. n8n has a native Anthropic node that supports Claude through the Messages API. You can also use Claude as the Chat Model in n8n's AI Agent node, Memory Manager, and other LangChain-based nodes. Configure it in Settings → Credentials → Anthropic API, then select 'Claude' as the model in any AI node.",
      },
    },
  ],
};

export default function ClaudeAPITutorial() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="🧠"
        badge="API Tutorial"
        badgeColor="bg-[#7c3aed]/20 text-[#a78bfa]"
        title="Claude API Tutorial: Build AI Apps with Anthropic (2026)"
        subtitle="Complete guide to the Claude API — Messages, tool use, vision, document processing and a fair comparison to OpenAI."
        date="March 2026"
        readTime="14 min"
        tags={["Claude API", "Anthropic", "AI Development", "Tutorial", "LLM"]}
        relatedPosts={[
          { title: "OpenAI API Tutorial for Beginners", href: "/blog/openai-api-beginners-guide", sub: "Build your first AI app" },
          { title: "How to Build an AI Agent", href: "/blog/how-to-build-ai-agent", sub: "From zero to production agent" },
          { title: "RAG that Actually Works", href: "/blog/rag-that-actually-works", sub: "Chunking, cache, evals" },
        ]}
      >
        <h2>Why Claude for Your AI Applications</h2>
        <p>
          Anthropic&apos;s Claude is consistently ranked among the top AI models for code, writing, and
          complex instruction following. In 2026, Claude claude-opus-4-6 and claude-sonnet-4-6 are the
          preferred choice for many production applications, particularly where:
        </p>
        <ul>
          <li><strong>Long documents</strong> need to be processed (200K context window)</li>
          <li><strong>Complex, multi-step instructions</strong> must be followed precisely</li>
          <li><strong>Writing quality</strong> is a primary concern — Claude&apos;s output sounds more natural</li>
          <li><strong>Safety and refusal behavior</strong> needs to be predictable and calibrated</li>
          <li><strong>Code review and generation</strong> require deep code understanding</li>
        </ul>
        <p>
          You don&apos;t have to choose between Claude and OpenAI — many production applications use
          both, routing tasks to the best model for each use case.
        </p>

        <h2>Getting an API Key</h2>
        <p>
          To access the Claude API:
        </p>
        <ol>
          <li>Go to <strong>console.anthropic.com</strong> and create an account</li>
          <li>Navigate to <strong>API Keys</strong> and click &quot;Create Key&quot;</li>
          <li>Give it a name and copy the key (starts with <code>sk-ant-...</code>)</li>
          <li>Add a payment method to unlock full API access beyond free tier</li>
        </ol>
        <p>
          New accounts get $5 in free API credits — enough to test all the examples in this tutorial.
        </p>

        <h2>Understanding Claude Models in 2026</h2>
        <p>
          Anthropic&apos;s model lineup is organized around three tiers:
        </p>
        <ul>
          <li><strong>claude-opus-4-6</strong> — Flagship model. Best reasoning, writing, and complex tasks. $15/M input tokens. Use for your most demanding applications.</li>
          <li><strong>claude-sonnet-4-6</strong> — Best balance of capability and cost. $3/M input tokens. The workhorse for most production applications.</li>
          <li><strong>claude-haiku-4-5</strong> — Fastest and cheapest. $0.25/M input tokens. Perfect for high-volume tasks where speed matters more than depth.</li>
        </ul>
        <blockquote>
          <strong>Rule of thumb:</strong> Start with claude-sonnet-4-6 for most tasks. If output quality
          isn&apos;t sufficient, try claude-opus-4-6. If you need to reduce costs on high-volume operations,
          try claude-haiku-4-5.
        </blockquote>

        <h2>Messages API: The Basics</h2>
        <p>
          Claude uses the Messages API — similar to OpenAI&apos;s Chat Completions but with some differences.
        </p>
        <pre><code>{`import anthropic

client = anthropic.Anthropic(api_key="sk-ant-your-key")

message = client.messages.create(
    model="claude-sonnet-4-6-20250219",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain quantum entanglement simply."}
    ]
)

print(message.content[0].text)`}</code></pre>

        <h3>Key Differences from OpenAI</h3>
        <ul>
          <li><strong>No &quot;system&quot; role in messages</strong> — Claude uses a separate <code>system</code> parameter</li>
          <li><strong>Required <code>max_tokens</code></strong> — must specify max output tokens (OpenAI has a default)</li>
          <li><strong>Response format</strong> — <code>message.content[0].text</code> vs OpenAI&apos;s <code>choices[0].message.content</code></li>
        </ul>

        <h2>System Prompts and Instructions</h2>
        <p>
          Claude&apos;s system parameter is where you define the AI&apos;s role, constraints, and context.
          Claude is particularly good at following detailed, multi-part instructions:
        </p>
        <pre><code>{`message = client.messages.create(
    model="claude-sonnet-4-6-20250219",
    max_tokens=2048,
    system="""You are an expert code reviewer for Python applications.

Your review process:
1. Check for security vulnerabilities (SQL injection, XSS, auth issues)
2. Identify performance bottlenecks
3. Note style and readability issues
4. Suggest specific improvements

Format your response as:
## Security Issues (critical)
[issues if any]

## Performance Concerns
[issues if any]

## Code Quality
[issues if any]

## Recommended Changes
[specific code suggestions]""",
    messages=[
        {"role": "user", "content": f"Review this code:\n\n{code_to_review}"}
    ]
)`}</code></pre>

        <h2>Tool Use (Function Calling)</h2>
        <p>
          Claude supports tool use — the ability to call external functions and use the results in responses.
          This is how you build Claude-powered agents:
        </p>
        <pre><code>{`tools = [
    {
        "name": "get_stock_price",
        "description": "Get the current stock price for a given ticker symbol",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {
                    "type": "string",
                    "description": "Stock ticker symbol (e.g., AAPL, TSLA)"
                }
            },
            "required": ["ticker"]
        }
    }
]

response = client.messages.create(
    model="claude-sonnet-4-6-20250219",
    max_tokens=1024,
    tools=tools,
    messages=[
        {"role": "user", "content": "What's Apple's current stock price?"}
    ]
)

# Check if Claude wants to use a tool
if response.stop_reason == "tool_use":
    tool_use = next(b for b in response.content if b.type == "tool_use")
    tool_name = tool_use.name  # "get_stock_price"
    tool_input = tool_use.input  # {"ticker": "AAPL"}

    # Execute the tool
    result = get_stock_price(tool_input["ticker"])

    # Send result back to Claude
    final_response = client.messages.create(
        model="claude-sonnet-4-6-20250219",
        max_tokens=1024,
        tools=tools,
        messages=[
            {"role": "user", "content": "What's Apple's current stock price?"},
            {"role": "assistant", "content": response.content},
            {"role": "user", "content": [{
                "type": "tool_result",
                "tool_use_id": tool_use.id,
                "content": str(result)
            }]}
        ]
    )`}</code></pre>

        <h2>Vision: Analyzing Images</h2>
        <p>
          Claude can analyze images — screenshots, photos, diagrams, charts — with high accuracy:
        </p>
        <pre><code>{`import base64

# Read and encode image
with open("screenshot.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

message = client.messages.create(
    model="claude-sonnet-4-6-20250219",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/png",
                        "data": image_data,
                    },
                },
                {
                    "type": "text",
                    "text": "What errors or issues do you see in this screenshot?"
                }
            ],
        }
    ],
)

# Also supports URLs directly:
{
    "type": "image",
    "source": {
        "type": "url",
        "url": "https://example.com/chart.png"
    }
}`}</code></pre>

        <h2>Document Processing with PDFs</h2>
        <p>
          Claude&apos;s 200K context window makes it exceptional for document processing. Unlike
          RAG-based approaches, you can often pass entire documents directly:
        </p>
        <pre><code>{`import base64

# Encode PDF
with open("contract.pdf", "rb") as f:
    pdf_data = base64.standard_b64encode(f.read()).decode("utf-8")

response = client.messages.create(
    model="claude-sonnet-4-6-20250219",
    max_tokens=2048,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "base64",
                        "media_type": "application/pdf",
                        "data": pdf_data
                    }
                },
                {
                    "type": "text",
                    "text": """Analyze this contract and provide:
                    1. Key parties and their obligations
                    2. Payment terms
                    3. Termination conditions
                    4. Any unusual or risky clauses
                    Format as bullet points."""
                }
            ]
        }
    ]
)`}</code></pre>
        <p>
          This works for contracts, invoices, research papers, financial reports — any document where
          you need intelligent analysis. At 200K tokens, you can process documents up to ~500 pages.
        </p>

        <h2>Claude vs GPT-4o: Honest Comparison</h2>
        <p>
          Based on extensive testing across hundreds of use cases:
        </p>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Claude 3.5 Sonnet</th>
              <th>GPT-4o</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Long-form writing</td><td>Better</td><td>Good</td></tr>
            <tr><td>Code generation</td><td>Similar</td><td>Similar</td></tr>
            <tr><td>Document analysis</td><td>Better (200K ctx)</td><td>Good (128K ctx)</td></tr>
            <tr><td>Following instructions</td><td>Better</td><td>Good</td></tr>
            <tr><td>Image generation</td><td>N/A</td><td>Via DALL-E 3</td></tr>
            <tr><td>Pricing (Sonnet vs GPT-4o)</td><td>$3/M tokens</td><td>$2.5/M tokens</td></tr>
            <tr><td>Speed</td><td>Fast</td><td>Fast</td></tr>
            <tr><td>API ecosystem</td><td>Growing</td><td>More mature</td></tr>
          </tbody>
        </table>

        <h2>Streaming and Cost Optimization</h2>
        <pre><code>{`# Streaming responses
with client.messages.stream(
    model="claude-haiku-4-5-20250219",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Write a product description"}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)

# Cost optimization tips:
# 1. Use Haiku for high-volume, simple tasks (10x cheaper than Sonnet)
# 2. Cache system prompts using prompt caching (beta feature)
# 3. Use max_tokens wisely - don't set too high
# 4. For classification, use short prompts + constrained responses
# 5. Batch API for offline processing (50% discount)`}</code></pre>

        <h2>n8n Claude Integration</h2>
        <p>
          Claude is available natively in n8n — no custom HTTP requests needed:
        </p>
        <ol>
          <li>Go to <strong>Settings → Credentials → Add Credential</strong></li>
          <li>Search for <strong>Anthropic API</strong></li>
          <li>Paste your API key</li>
          <li>In any AI Agent or Chat Model node, select <strong>Anthropic Chat Model</strong></li>
          <li>Choose your model (claude-sonnet-4-6-20250219 for most cases)</li>
        </ol>
        <p>
          You can now build n8n workflows with Claude as the intelligence layer — all the automation
          power of n8n with the superior writing and analysis quality of Claude.
        </p>
        <blockquote>
          <strong>Practical tip:</strong> Use Claude claude-sonnet-4-6 for customer-facing chatbots where
          quality matters (better writing, fewer refusals on edge cases). Use GPT-4o-mini when you need
          a cheaper option for high-volume classification or processing tasks. Our{" "}
          <a href="/en/courses/chatbot">AI Chatbot course (€59)</a> covers both APIs and teaches you
          when to use each model for maximum quality and minimum cost.
        </blockquote>
      </BlogPost>
    </>
  );
}
