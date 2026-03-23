import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Build a ChatGPT Telegram Bot with n8n — No Code (2026)",
  description:
    "Complete tutorial for building an AI Telegram bot using n8n and ChatGPT. Handle commands, remember context, send images — in 30 minutes.",
  keywords: [
    "telegram bot chatgpt n8n",
    "telegram chatgpt bot tutorial",
    "n8n telegram bot",
    "build telegram bot without code",
    "telegram ai bot 2026",
    "chatgpt telegram integration",
    "n8n telegram openai",
    "telegram bot no code",
    "telegram chatbot tutorial",
    "ai telegram bot",
  ],
  openGraph: {
    title: "Build a ChatGPT Telegram Bot with n8n — No Code (2026) | AI Insider",
    description:
      "Build a fully functional AI Telegram bot in 30 minutes using n8n and ChatGPT. No code required.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/telegram-chatgpt-bot",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Build a ChatGPT Telegram Bot with n8n — No Code (2026)",
  description:
    "Complete tutorial for building an AI Telegram bot using n8n and ChatGPT. Handle commands, remember context, send images — in 30 minutes.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-01-25",
  dateModified: "2026-03-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/telegram-chatgpt-bot" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to know coding to build a Telegram ChatGPT bot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. With n8n, you build the entire bot visually by connecting nodes. No Python, no JavaScript, no server configuration required. If you can use Notion or Trello, you can build this bot.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make my Telegram bot remember past conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In n8n, use the Chat Memory Manager node (Simple Memory) connected to the AI Agent. Configure it to store messages keyed by the Telegram chat ID. This gives each user their own conversation history, allowing multi-turn conversations with context.",
      },
    },
    {
      "@type": "Question",
      name: "Can the bot handle images and voice messages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For images, use OpenAI's vision capability — pass the image URL to GPT-4o and it can describe, analyze or answer questions about the image. For voice messages, use the Whisper transcription node to convert audio to text first, then process with GPT.",
      },
    },
    {
      "@type": "Question",
      name: "How do I deploy the bot so it runs 24/7?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Self-host n8n on a VPS (Hetzner, DigitalOcean, or Vultr start at $4-5/month). Run n8n with Docker Compose with the restart policy set to 'always'. Your bot will run continuously and survive server reboots. Alternatively, n8n Cloud handles hosting for you starting at $20/month.",
      },
    },
  ],
};

export default function TelegramChatGPTBot() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="✈️"
        badge="Complete Tutorial"
        badgeColor="bg-[#0ea5e9]/20 text-[#38bdf8]"
        title="Build a ChatGPT Telegram Bot with n8n — No Code (2026)"
        subtitle="A complete step-by-step tutorial to build an AI-powered Telegram bot in 30 minutes. Context memory, image support, voice messages included."
        date="January 2026"
        readTime="13 min"
        tags={["Telegram Bot", "n8n", "ChatGPT", "Automation", "No-code"]}
        relatedPosts={[
          { title: "n8n + OpenAI Integration", href: "/blog/n8n-openai-integration", sub: "Connect n8n to OpenAI API" },
          { title: "n8n Tutorial for Beginners", href: "/blog/n8n-beginners-guide", sub: "Complete guide to workflow automation" },
          { title: "Voice Agents with Vapi", href: "/blog/voice-agents-vapi", sub: "Build AI phone agents" },
        ]}
      >
        <h2>Why Telegram + n8n is the Perfect Combination</h2>
        <p>
          Telegram has over 900 million active users and one of the best bot APIs in the world. Bots are first-class
          citizens in Telegram — they can receive messages, send images, handle buttons, process voice notes, and even
          accept payments. Combined with n8n, you get a visual automation platform that makes building complex bot logic
          as easy as dragging and dropping nodes.
        </p>
        <p>
          Telegram bots built with n8n and ChatGPT are being used for:
        </p>
        <ul>
          <li>Customer support that handles 80% of inquiries automatically</li>
          <li>Personal AI assistants that remember your preferences</li>
          <li>Business tools that look up data, generate reports, and notify teams</li>
          <li>Lead qualification bots that qualify and route prospects</li>
          <li>Internal tools for companies — HR bots, IT support, knowledge bases</li>
        </ul>
        <blockquote>
          <strong>Time to build:</strong> This tutorial takes about 30 minutes from start to a working bot.
          No VPS needed for testing — you can run everything locally.
        </blockquote>

        <h2>Step 1: Create Your Telegram Bot with BotFather</h2>
        <p>
          Every Telegram bot starts with BotFather — Telegram&apos;s official bot management tool.
        </p>
        <ol>
          <li>Open Telegram and search for <strong>@BotFather</strong></li>
          <li>Start a conversation and send <code>/newbot</code></li>
          <li>Follow the prompts: enter a name (e.g., &quot;My AI Assistant&quot;) and a username (must end in &quot;bot&quot;, e.g., <code>my_ai_assistant_bot</code>)</li>
          <li>BotFather will give you an <strong>HTTP API token</strong> — copy it immediately</li>
          <li>Optionally set a description with <code>/setdescription</code> and a profile photo with <code>/setuserpic</code></li>
        </ol>
        <pre><code>{`Your bot token looks like this:
7312845691:AAF3g8_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Keep this secret! Anyone with this token can control your bot.`}</code></pre>

        <h2>Step 2: Set Up n8n and Add Telegram Credential</h2>
        <p>
          If you don&apos;t have n8n yet, the fastest way to start is with Docker:
        </p>
        <pre><code>{`docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -v ~/.n8n:/home/node/.n8n \\
  docker.n8n.io/n8nio/n8n`}</code></pre>
        <p>
          Then open <strong>http://localhost:5678</strong>. Now add the Telegram credential:
        </p>
        <ol>
          <li>Go to <strong>Settings → Credentials → Add Credential</strong></li>
          <li>Search for <strong>Telegram API</strong></li>
          <li>Paste your bot token and save</li>
        </ol>

        <h2>Step 3: Build the Webhook Trigger</h2>
        <p>
          Telegram bots work in two ways: polling (n8n asks Telegram for new messages every few seconds) or webhooks
          (Telegram sends messages to n8n instantly). Webhooks are faster and more efficient.
        </p>
        <p>
          For webhooks to work, n8n must be accessible from the internet. If you&apos;re running locally,
          use ngrok to create a public URL:
        </p>
        <pre><code>{`# Install ngrok and expose port 5678
ngrok http 5678

# You'll get a URL like:
# https://abc123.ngrok.io`}</code></pre>
        <p>
          In n8n, create a new workflow and add a <strong>Telegram Trigger</strong> node:
        </p>
        <ul>
          <li>Credential: your Telegram API credential</li>
          <li>Updates: select <strong>Message</strong></li>
          <li>Copy the webhook URL that n8n generates</li>
        </ul>
        <p>
          Register the webhook with Telegram by visiting:
        </p>
        <pre><code>{`https://api.telegram.org/bot{YOUR_TOKEN}/setWebhook?url={YOUR_N8N_WEBHOOK_URL}`}</code></pre>

        <h2>Step 4: Add the OpenAI Node</h2>
        <p>
          After the Telegram Trigger, add an <strong>OpenAI</strong> node:
        </p>
        <ul>
          <li><strong>Operation:</strong> Message a Model</li>
          <li><strong>Model:</strong> gpt-4o-mini</li>
          <li><strong>System Message:</strong> <code>You are a helpful assistant. Be concise and friendly.</code></li>
          <li><strong>User Message:</strong> <code>{`{{$json.message.text}}`}</code></li>
        </ul>
        <blockquote>
          <strong>Note:</strong> The expression <code>{`{{$json.message.text}}`}</code> extracts the user&apos;s
          message text from the Telegram webhook payload. Every message Telegram sends contains a <code>message</code>
          object with a <code>text</code> field.
        </blockquote>

        <h2>Step 5: Send the Reply Back to Telegram</h2>
        <p>
          Add a <strong>Telegram</strong> action node after OpenAI:
        </p>
        <ul>
          <li><strong>Operation:</strong> Send Message</li>
          <li><strong>Chat ID:</strong> <code>{`{{$("Telegram Trigger").item.json.message.chat.id}}`}</code></li>
          <li><strong>Text:</strong> <code>{`{{$json.choices[0].message.content}}`}</code></li>
        </ul>
        <p>
          Activate the workflow. Send your bot a message on Telegram — it should reply within 1–2 seconds with a
          GPT-4o-mini response. You&apos;ve just built an AI Telegram bot!
        </p>

        <h2>Adding Conversation Memory</h2>
        <p>
          The basic bot forgets context after each message. To enable multi-turn conversations, switch to the
          <strong>AI Agent</strong> node with memory:
        </p>
        <ol>
          <li>Replace the OpenAI node with an <strong>AI Agent</strong> node</li>
          <li>Connect a <strong>Chat Model</strong> sub-node (OpenAI GPT-4o-mini)</li>
          <li>Connect a <strong>Simple Memory</strong> sub-node</li>
          <li>Set <strong>Session ID</strong> to <code>{`{{$("Telegram Trigger").item.json.message.chat.id}}`}</code></li>
          <li>Set <strong>Prompt</strong> (chat input) to <code>{`{{$json.message.text}}`}</code></li>
        </ol>
        <p>
          Now each Telegram chat has its own memory. Ask the bot &quot;What&apos;s 2+2?&quot;, then ask &quot;Multiply
          that by 5&quot; — it remembers the context. This is what makes bots feel like real assistants.
        </p>

        <h2>Handling Images from Users</h2>
        <p>
          When a user sends a photo to your bot, the Telegram payload contains a <code>photo</code> array instead of
          a <code>text</code> field. Here&apos;s how to handle it:
        </p>
        <ol>
          <li>Add an <strong>IF</strong> node after the Telegram Trigger:
            <ul>
              <li>Condition: <code>{`{{$json.message.photo}}`}</code> exists</li>
            </ul>
          </li>
          <li>On the &quot;true&quot; branch: get the file URL via Telegram&apos;s getFile API, then pass the image URL to GPT-4o (not mini) with vision enabled</li>
          <li>On the &quot;false&quot; branch: standard text processing with GPT-4o-mini</li>
        </ol>
        <pre><code>{`// Get the largest photo from the array
// Telegram sends multiple sizes, last one is highest res
{{$json.message.photo[$json.message.photo.length - 1].file_id}}

// Telegram getFile endpoint
https://api.telegram.org/bot{TOKEN}/getFile?file_id={FILE_ID}

// Download URL format
https://api.telegram.org/file/bot{TOKEN}/{file_path}`}</code></pre>

        <h2>Handling Voice Messages</h2>
        <p>
          Voice notes are extremely common in Telegram. Processing them requires Whisper (OpenAI&apos;s speech-to-text):
        </p>
        <ol>
          <li>Detect voice message: <code>{`{{$json.message.voice}}`}</code> exists</li>
          <li>Download the OGG audio file using the Telegram getFile API</li>
          <li>Pass the audio to the <strong>OpenAI Whisper</strong> node (Transcribe Recording)</li>
          <li>Use the transcribed text as the user message for GPT</li>
        </ol>
        <p>
          This makes your bot accessible to people who prefer speaking over typing — a huge usability improvement,
          especially for mobile users.
        </p>

        <h2>Deploy to Production</h2>
        <p>
          When your bot is working locally, it&apos;s time to deploy it properly for 24/7 operation.
        </p>
        <h3>Option A: n8n Cloud ($20/month)</h3>
        <p>
          Sign up at n8n.io, import your workflow, and activate it. n8n handles hosting, SSL, and uptime.
          Best for non-technical users or when you want zero maintenance.
        </p>
        <h3>Option B: Self-hosted VPS ($4-5/month)</h3>
        <p>
          Rent a VPS from Hetzner (CX11 at €3.49/month) or DigitalOcean. Install Docker and run:
        </p>
        <pre><code>{`# docker-compose.yml for production n8n
version: "3.8"
services:
  n8n:
    image: docker.n8n.io/n8nio/n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=your-domain.com
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=https://your-domain.com/
    volumes:
      - ~/.n8n:/home/node/.n8n`}</code></pre>
        <p>
          Add Nginx as a reverse proxy with SSL from Let&apos;s Encrypt. Your bot will be live 24/7 for under €5/month.
        </p>
        <blockquote>
          <strong>Want to build and sell Telegram bots professionally?</strong> Our{" "}
          <a href="/en/courses/chatbot">AI Chatbot Development course (€59)</a> covers building, packaging and selling
          chatbot solutions to local businesses — with real client scripts and pricing templates.
        </blockquote>

        <h2>Common Bot Commands to Add</h2>
        <p>
          Improve UX by adding command handling. Use an <strong>IF</strong> or <strong>Switch</strong> node to route
          commands to different branches:
        </p>
        <ul>
          <li><code>/start</code> — welcome message and instructions</li>
          <li><code>/help</code> — list available commands</li>
          <li><code>/reset</code> — clear conversation memory</li>
          <li><code>/language</code> — switch response language</li>
        </ul>
        <pre><code>{`// Check if message starts with "/"
// In the IF node:
{{$json.message.text.startsWith('/')}}

// Get the command name:
{{$json.message.text.split(' ')[0].slice(1)}}`}</code></pre>
      </BlogPost>
    </>
  );
}
