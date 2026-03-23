import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "OpenAI API Tutorial for Beginners: Build Your First AI App (2026)",
  description:
    "Learn OpenAI API from scratch. Chat completions, function calling, embeddings, assistants API and image generation — with working code examples.",
  keywords: [
    "openai api tutorial beginners",
    "openai api guide 2026",
    "learn openai api",
    "openai api python tutorial",
    "chat completions api",
    "openai function calling",
    "openai embeddings tutorial",
    "openai assistants api",
    "gpt api tutorial",
    "openai api examples",
  ],
  openGraph: {
    title: "OpenAI API Tutorial for Beginners: Build Your First AI App (2026) | AI Insider",
    description:
      "OpenAI API from scratch — chat completions, function calling, embeddings and image generation.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/openai-api-beginners-guide",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "OpenAI API Tutorial for Beginners: Build Your First AI App (2026)",
  description:
    "Learn OpenAI API from scratch with working code examples. Chat completions, function calling, embeddings and image generation.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-02-25",
  dateModified: "2026-03-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/openai-api-beginners-guide" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get an OpenAI API key?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go to platform.openai.com, create an account, and navigate to API Keys under your account settings. Click 'Create new secret key', give it a name, and copy it immediately — it won't be shown again. You need to add a payment method to use the API beyond the initial free credits.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between GPT-4o and GPT-4o-mini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GPT-4o is the full flagship model with superior reasoning, vision, and complex task performance. GPT-4o-mini is 10x cheaper and nearly as capable for most practical tasks like chatbots, summarization, and classification. Use GPT-4o-mini for high-volume applications and GPT-4o when quality is critical.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the OpenAI API cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GPT-4o costs $2.50 per 1 million input tokens and $10 per 1 million output tokens. GPT-4o-mini costs $0.15 per 1 million input tokens. A typical chatbot conversation uses 500-1000 tokens, costing $0.00015 with GPT-4o-mini. For 10,000 conversations per month, expect $1.50-$3 in API costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use OpenAI API without coding experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Use n8n's OpenAI node to call the API visually without code. You configure the model, prompt, and parameters through a UI. For those who want to code, OpenAI provides Python and Node.js SDKs with simple function calls that require minimal programming knowledge.",
      },
    },
  ],
};

export default function OpenAIAPIBeginnersGuide() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="🔑"
        badge="API Tutorial"
        badgeColor="bg-[#0ea5e9]/20 text-[#38bdf8]"
        title="OpenAI API Tutorial for Beginners: Build Your First AI App (2026)"
        subtitle="From API key to working application. Chat completions, function calling, embeddings and more — with real code examples."
        date="February 2026"
        readTime="15 min"
        tags={["OpenAI API", "ChatGPT API", "Tutorial", "Beginners", "AI Development"]}
        relatedPosts={[
          { title: "n8n + OpenAI Integration", href: "/blog/n8n-openai-integration", sub: "Connect n8n to OpenAI without code" },
          { title: "How to Build an AI Agent", href: "/blog/how-to-build-ai-agent", sub: "From zero to production agent" },
          { title: "RAG that Actually Works", href: "/blog/rag-that-actually-works", sub: "Chunking, cache, evals" },
        ]}
      >
        <h2>Getting Your API Key</h2>
        <p>
          The OpenAI API requires an API key for authentication. Here&apos;s how to get one:
        </p>
        <ol>
          <li>Go to <strong>platform.openai.com</strong> and create an account</li>
          <li>Navigate to <strong>API Keys</strong> in the top navigation</li>
          <li>Click <strong>Create new secret key</strong></li>
          <li>Give it a descriptive name (e.g., &quot;Development&quot; or &quot;My App&quot;)</li>
          <li>Copy the key immediately — it starts with <code>sk-...</code></li>
        </ol>
        <blockquote>
          <strong>Security rule:</strong> Never paste your API key in public code, GitHub repos, or shared
          documents. Use environment variables. If a key is ever exposed, rotate it immediately in the dashboard.
        </blockquote>
        <p>
          Add a spending limit before you start (platform.openai.com → Settings → Billing → Usage limits).
          Set a hard monthly limit of $10–$20 while learning.
        </p>

        <h2>Understanding OpenAI Models in 2026</h2>
        <p>
          OpenAI has simplified its model lineup significantly. Here&apos;s what you need to know:
        </p>
        <ul>
          <li><strong>GPT-4o</strong> — Flagship multimodal model. Best quality, vision support, $2.50/M input tokens</li>
          <li><strong>GPT-4o-mini</strong> — Fast and cheap. Best for most production uses. $0.15/M input tokens</li>
          <li><strong>o3</strong> — Advanced reasoning model for math, science, complex logic. Slower and pricier.</li>
          <li><strong>o3-mini</strong> — Efficient reasoning model. Good balance for coding and analysis tasks.</li>
          <li><strong>DALL-E 3</strong> — Image generation. $0.04–$0.12 per image.</li>
          <li><strong>Whisper</strong> — Speech-to-text transcription. $0.006/minute.</li>
          <li><strong>text-embedding-3-small</strong> — Embeddings for RAG. $0.02/M tokens.</li>
        </ul>

        <h2>Chat Completions API: The Core</h2>
        <p>
          The Chat Completions API is the foundation of most OpenAI applications. Here&apos;s the simplest
          possible Python example:
        </p>
        <pre><code>{`from openai import OpenAI

client = OpenAI(api_key="sk-your-api-key")

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "What is the capital of France?"}
    ]
)

print(response.choices[0].message.content)
# Output: "The capital of France is Paris."`}</code></pre>

        <h3>Understanding Roles</h3>
        <p>
          The <code>messages</code> array contains messages with three possible roles:
        </p>
        <ul>
          <li><strong>system</strong> — Instructions for the model. Defines behavior, personality, and constraints.</li>
          <li><strong>user</strong> — The user&apos;s input message.</li>
          <li><strong>assistant</strong> — Previous model responses (for multi-turn conversations).</li>
        </ul>
        <pre><code>{`# Multi-turn conversation example
messages = [
    {"role": "system", "content": "You are a friendly cooking assistant."},
    {"role": "user", "content": "I have chicken, garlic, and lemon."},
    {"role": "assistant", "content": "Those are great ingredients! I'd recommend lemon garlic chicken..."},
    {"role": "user", "content": "How long should I cook it?"}
]

# GPT will use the full conversation history for context`}</code></pre>

        <h2>System Prompts: The Most Important Skill</h2>
        <p>
          Writing effective system prompts is what separates useful AI applications from useless ones.
          A good system prompt defines:
        </p>
        <ul>
          <li><strong>Role and personality</strong> — who the AI is and how it speaks</li>
          <li><strong>Context</strong> — what the AI knows about the business or use case</li>
          <li><strong>Constraints</strong> — what it should and shouldn&apos;t do</li>
          <li><strong>Output format</strong> — how responses should be structured</li>
        </ul>
        <pre><code>{`# Example: Customer support system prompt
SYSTEM = """You are a customer support agent for TechStore.
Your tone is friendly, professional, and concise.

You can help with:
- Order status and tracking
- Product questions
- Return and refund requests

Company info:
- Returns accepted within 30 days
- Free shipping on orders over €50
- Support hours: Mon-Fri 9am-6pm

If a question is outside your knowledge, say:
"I'll need to check with our team on that.
Can I get your email to follow up?"

Always respond in the same language as the user.
Keep responses under 150 words."""`}</code></pre>

        <h2>Streaming Responses</h2>
        <p>
          Streaming sends tokens as they&apos;re generated rather than waiting for the complete response.
          This dramatically improves perceived performance for chatbot applications.
        </p>
        <pre><code>{`# Streaming example
stream = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "Write a haiku about Python"}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="", flush=True)`}</code></pre>

        <h2>Function Calling (Tool Use)</h2>
        <p>
          Function calling lets the model request the execution of specific functions when it needs
          information it doesn&apos;t have. This is how you build AI agents that can look up data,
          perform calculations, or interact with APIs.
        </p>
        <pre><code>{`tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a city",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "The city name"
                    }
                },
                "required": ["city"]
            }
        }
    }
]

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[{"role": "user", "content": "What's the weather in Rome?"}],
    tools=tools,
    tool_choice="auto"
)

# Check if the model wants to call a function
if response.choices[0].message.tool_calls:
    tool_call = response.choices[0].message.tool_calls[0]
    function_name = tool_call.function.name  # "get_weather"
    arguments = json.loads(tool_call.function.arguments)  # {"city": "Rome"}

    # Execute the function and send result back
    weather_data = get_weather(arguments["city"])

    # Continue conversation with tool result
    messages.append(response.choices[0].message)
    messages.append({
        "role": "tool",
        "tool_call_id": tool_call.id,
        "content": str(weather_data)
    })`}</code></pre>

        <h2>Embeddings for Semantic Search</h2>
        <p>
          Embeddings convert text into numerical vectors that capture semantic meaning. Similar texts
          produce similar vectors — enabling semantic search, clustering, and RAG applications.
        </p>
        <pre><code>{`# Generate embeddings
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="The quick brown fox jumps over the lazy dog"
)

embedding = response.data[0].embedding
# Returns a list of 1536 floating point numbers

# Compare two texts with cosine similarity
from numpy import dot
from numpy.linalg import norm

def cosine_similarity(a, b):
    return dot(a, b) / (norm(a) * norm(b))

emb1 = get_embedding("What is machine learning?")
emb2 = get_embedding("How does AI work?")
emb3 = get_embedding("Best pasta recipe")

# emb1 and emb2 will be ~0.85 similar
# emb1 and emb3 will be ~0.3 similar`}</code></pre>

        <h2>Assistants API with File Uploads</h2>
        <p>
          The Assistants API is OpenAI&apos;s higher-level abstraction for building AI agents with
          persistent threads, file search, and code execution.
        </p>
        <pre><code>{`# Create an assistant with file search enabled
assistant = client.beta.assistants.create(
    name="Document Analyzer",
    instructions="You help users understand technical documentation.",
    tools=[{"type": "file_search"}],
    model="gpt-4o"
)

# Upload a file
with open("product_manual.pdf", "rb") as f:
    file = client.files.create(file=f, purpose="assistants")

# Create a thread and ask a question
thread = client.beta.threads.create()
message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="What are the safety warnings for Model X?",
    attachments=[{"file_id": file.id, "tools": [{"type": "file_search"}]}]
)

# Run the assistant
run = client.beta.threads.runs.create_and_poll(
    thread_id=thread.id,
    assistant_id=assistant.id
)`}</code></pre>

        <h2>Cost Management and Rate Limits</h2>
        <p>
          Understanding costs before building production systems is crucial:
        </p>
        <ul>
          <li><strong>Set hard spending limits</strong> in platform.openai.com → Billing → Usage limits</li>
          <li><strong>Log every API call</strong> with token counts — unexpected costs are always traced to one workflow</li>
          <li><strong>Cache responses</strong> for repeated identical queries (FAQ bots answer the same questions)</li>
          <li><strong>Use GPT-4o-mini</strong> for 90% of tasks and reserve GPT-4o for when it&apos;s truly needed</li>
          <li><strong>Batch requests</strong> when processing many items — the Batch API is 50% cheaper</li>
        </ul>

        <h2>Building a Simple Chatbot</h2>
        <p>
          Let&apos;s put it all together — a simple terminal chatbot that maintains conversation history:
        </p>
        <pre><code>{`from openai import OpenAI

client = OpenAI()
conversation_history = []
system_message = {
    "role": "system",
    "content": "You are a helpful assistant. Be concise."
}

def chat(user_input):
    conversation_history.append({
        "role": "user",
        "content": user_input
    })

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[system_message] + conversation_history,
        max_tokens=500
    )

    assistant_message = response.choices[0].message.content
    conversation_history.append({
        "role": "assistant",
        "content": assistant_message
    })

    return assistant_message

# Main loop
while True:
    user_input = input("You: ")
    if user_input.lower() == "quit":
        break
    response = chat(user_input)
    print(f"AI: {response}")`}</code></pre>
        <p>
          This is the foundation of every chatbot. From here, you can add system prompts for specific
          use cases, function calling for external data, streaming for better UX, and persistent
          storage for cross-session memory.
        </p>
        <p>
          To build this into a client-facing product without code using n8n, see our{" "}
          <a href="/blog/n8n-openai-integration">n8n + OpenAI integration guide</a>.
        </p>
      </BlogPost>
    </>
  );
}
