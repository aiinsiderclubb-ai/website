import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "WhatsApp AI Chatbot: Build with n8n + OpenAI (2026 Guide)",
  description:
    "Step-by-step tutorial to build a WhatsApp AI chatbot using n8n and OpenAI. Handle orders, answer FAQs, qualify leads — 1 billion users, zero apps needed.",
  keywords: [
    "whatsapp chatbot tutorial",
    "whatsapp ai chatbot n8n",
    "build whatsapp bot openai",
    "whatsapp business api chatbot",
    "whatsapp automation n8n",
    "whatsapp chatbot 2026",
    "meta whatsapp api tutorial",
    "whatsapp bot without code",
    "whatsapp ai integration",
    "whatsapp business chatbot",
  ],
  openGraph: {
    title: "WhatsApp AI Chatbot: Build with n8n + OpenAI (2026 Guide) | AI Insider",
    description:
      "Build a WhatsApp AI chatbot with n8n and OpenAI. Handles orders, FAQs and lead qualification.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/whatsapp-ai-chatbot",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "WhatsApp AI Chatbot: Build with n8n + OpenAI (2026 Guide)",
  description:
    "Step-by-step tutorial to build a WhatsApp AI chatbot using n8n and OpenAI. Handle orders, answer FAQs, qualify leads.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-03-05",
  dateModified: "2026-03-10",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/whatsapp-ai-chatbot" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a Meta Business Account to use WhatsApp Business API?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You need a Meta Business Manager account, a Facebook Business Page, and a verified phone number. The process takes 1–3 days for approval. You also need a dedicated phone number for the API (cannot be the same number you use personally). Some third-party providers like 360dialog or Twilio simplify this process.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the WhatsApp Business API cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meta charges per conversation (24-hour window): service conversations (user-initiated) are free in many regions. Business-initiated conversations vary by country — roughly $0.015–$0.08 per conversation. For a business receiving 500 WhatsApp messages/month, API costs are typically $5–$30/month, plus your n8n and OpenAI costs.",
      },
    },
    {
      "@type": "Question",
      name: "Can the WhatsApp bot remember previous conversations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Use n8n's Chat Memory Manager node keyed by the WhatsApp phone number. Store conversation history in Redis or a simple database. This gives each user a persistent context window, enabling multi-turn conversations that feel natural and context-aware across multiple sessions.",
      },
    },
    {
      "@type": "Question",
      name: "Can the bot handle images and voice notes sent via WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WhatsApp sends media as URLs in the webhook payload. For images, download the file and pass it to GPT-4o's vision API for analysis. For voice notes, download the audio file and transcribe it with OpenAI Whisper, then process the text with your chatbot flow. The n8n workflow handles all of this without code.",
      },
    },
  ],
};

export default function WhatsAppAIChatbot() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="📱"
        badge="Complete Tutorial"
        badgeColor="bg-emerald-500/20 text-emerald-400"
        title="WhatsApp AI Chatbot: Build with n8n + OpenAI (2026 Guide)"
        subtitle="1 billion users, no app downloads, 98% open rates. Build a full-featured WhatsApp AI bot — step by step."
        date="March 2026"
        readTime="14 min"
        tags={["WhatsApp", "Chatbot", "n8n", "OpenAI", "Messaging Automation"]}
        relatedPosts={[
          { title: "Build a ChatGPT Telegram Bot", href: "/blog/telegram-chatgpt-bot", sub: "AI Telegram bot in 30 minutes" },
          { title: "AI Customer Service Chatbot", href: "/blog/ai-customer-service-bot", sub: "Reduce support tickets by 60%" },
          { title: "n8n + OpenAI Integration", href: "/blog/n8n-openai-integration", sub: "Connect n8n to OpenAI API" },
        ]}
      >
        <h2>WhatsApp Business API Overview</h2>
        <p>
          WhatsApp is the world&apos;s most popular messaging app with 2+ billion users. Unlike Telegram
          or SMS, WhatsApp has a 98% message open rate and most users check it within minutes. For
          businesses, this makes WhatsApp the highest-engagement customer communication channel available.
        </p>
        <p>
          The WhatsApp Business API (now called Cloud API by Meta) allows businesses to:
        </p>
        <ul>
          <li>Send and receive messages programmatically</li>
          <li>Use message templates for outbound notifications</li>
          <li>Handle rich media (images, documents, audio, location)</li>
          <li>Build automated chatbot flows</li>
          <li>Integrate with CRMs and automation platforms like n8n</li>
        </ul>
        <blockquote>
          <strong>Business impact:</strong> Businesses using WhatsApp AI bots report 3–5x higher customer
          engagement compared to email, and response rates 10x higher than traditional web chatbots.
          This is the channel your clients&apos; customers are already using.
        </blockquote>

        <h2>Prerequisites</h2>
        <p>
          Before building, you&apos;ll need these accounts and assets:
        </p>
        <ul>
          <li><strong>Meta Business Manager account</strong> — business.facebook.com</li>
          <li><strong>Facebook Business Page</strong> — linked to your Business Manager</li>
          <li><strong>Verified phone number</strong> — not currently used on WhatsApp personal app</li>
          <li><strong>Meta App with WhatsApp product</strong> — created in developers.facebook.com</li>
          <li><strong>n8n instance</strong> — self-hosted or n8n Cloud</li>
          <li><strong>OpenAI API key</strong> — from platform.openai.com</li>
        </ul>

        <h2>Setting Up WhatsApp in Meta Developer Portal</h2>
        <ol>
          <li>Go to <strong>developers.facebook.com</strong> and create an App (Business type)</li>
          <li>Add the <strong>WhatsApp</strong> product to your app</li>
          <li>In WhatsApp → Getting Started, add a phone number</li>
          <li>Copy your <strong>Phone Number ID</strong> and <strong>WhatsApp Business Account ID</strong></li>
          <li>Generate a <strong>System User Access Token</strong> in Business Manager (permanent token, not 24h)</li>
          <li>In WhatsApp → Configuration, set your Webhook URL to your n8n webhook URL</li>
          <li>Subscribe to <strong>messages</strong> webhook field</li>
          <li>Verify the webhook with a token you define</li>
        </ol>
        <pre><code>{`# Webhook verification in n8n:
# WhatsApp will send a GET request with:
# ?hub.mode=subscribe
# ?hub.verify_token=YOUR_TOKEN
# ?hub.challenge=RANDOM_NUMBER
#
# Your n8n webhook must respond with hub.challenge
# Configure in Respond to Webhook node:
{{ $query['hub.challenge'] }}`}</code></pre>

        <h2>Setting Up WhatsApp in n8n</h2>
        <p>
          Add your WhatsApp credentials to n8n:
        </p>
        <ol>
          <li>Go to <strong>Settings → Credentials → Add Credential</strong></li>
          <li>Search for <strong>WhatsApp Business Cloud</strong></li>
          <li>Enter your Access Token, Phone Number ID, and WhatsApp Business Account ID</li>
          <li>Save the credential</li>
        </ol>

        <h2>Receiving and Parsing Messages</h2>
        <p>
          Create a new workflow with a <strong>Webhook</strong> trigger (POST method). WhatsApp sends
          message events in this format:
        </p>
        <pre><code>{`{
  "entry": [{
    "changes": [{
      "value": {
        "messages": [{
          "from": "15551234567",
          "type": "text",
          "text": { "body": "Hello, I need help with my order" },
          "timestamp": "1234567890"
        }]
      }
    }]
  }]
}`}</code></pre>
        <p>
          In n8n, use a <strong>Set</strong> node to extract the key fields:
        </p>
        <pre><code>{`// Extract message data
phone_number: {{$json.entry[0].changes[0].value.messages[0].from}}
message_text: {{$json.entry[0].changes[0].value.messages[0].text.body}}
message_type: {{$json.entry[0].changes[0].value.messages[0].type}}`}</code></pre>

        <h2>OpenAI Integration for Smart Replies</h2>
        <p>
          After extracting the message, add an <strong>AI Agent</strong> node with:
        </p>
        <ul>
          <li>Chat Model: OpenAI GPT-4o-mini</li>
          <li>Memory: Simple Memory with session key set to <code>{`{{$json.phone_number}}`}</code></li>
          <li>System Prompt: Your business context and personality</li>
          <li>User Input: <code>{`{{$json.message_text}}`}</code></li>
        </ul>
        <p>
          Then add a <strong>WhatsApp</strong> node to send the reply:
        </p>
        <pre><code>{`// WhatsApp send message configuration:
{
  "to": "{{phone_number}}",
  "type": "text",
  "text": {
    "body": "{{$json.output}}"
  }
}`}</code></pre>

        <h2>Handling Images and Voice Notes</h2>
        <p>
          WhatsApp users frequently send photos and voice messages. Here&apos;s how to handle each:
        </p>

        <h3>Image Processing</h3>
        <ol>
          <li>Check if <code>message_type === "image"</code></li>
          <li>Extract image ID: <code>{`{{$json.entry[0].changes[0].value.messages[0].image.id}}`}</code></li>
          <li>Download image URL via WhatsApp Media API: <code>{`https://graph.facebook.com/v18.0/{media_id}`}</code></li>
          <li>Pass the image URL to GPT-4o vision with the question &quot;What&apos;s in this image? Help the user based on what you see.&quot;</li>
        </ol>

        <h3>Voice Note Processing</h3>
        <ol>
          <li>Check if <code>message_type === "audio"</code></li>
          <li>Download the OGG audio file from WhatsApp</li>
          <li>Pass to OpenAI Whisper node for transcription</li>
          <li>Use the transcribed text as the chat input</li>
          <li>Optionally reply with both text and a voice note (using ElevenLabs TTS)</li>
        </ol>

        <h2>Building a Product Catalog Bot</h2>
        <p>
          For e-commerce, build a WhatsApp bot that lets customers browse products and place orders:
        </p>
        <ol>
          <li><strong>Welcome message</strong> — when new contact messages for first time</li>
          <li><strong>Quick reply buttons</strong> — &quot;Browse Products&quot;, &quot;Track Order&quot;, &quot;Get Support&quot;</li>
          <li><strong>Product search</strong> — AI understands natural language queries like &quot;show me red sneakers under €80&quot;</li>
          <li><strong>Product cards</strong> — WhatsApp supports media messages with product images</li>
          <li><strong>Order intent detection</strong> — &quot;I want to order 2 of those&quot; triggers order flow</li>
        </ol>
        <pre><code>{`// WhatsApp interactive message with buttons
{
  "type": "interactive",
  "interactive": {
    "type": "button",
    "body": {
      "text": "Welcome to ShopName! How can I help you today?"
    },
    "action": {
      "buttons": [
        {"type": "reply", "reply": {"id": "browse", "title": "Browse Products"}},
        {"type": "reply", "reply": {"id": "order_status", "title": "Track Order"}},
        {"type": "reply", "reply": {"id": "support", "title": "Get Help"}}
      ]
    }
  }
}`}</code></pre>

        <h2>Lead Qualification via WhatsApp</h2>
        <p>
          For B2B businesses, a WhatsApp lead qualification bot can replace traditional contact forms:
        </p>
        <ol>
          <li>User sends &quot;Hi, interested in your services&quot;</li>
          <li>Bot asks qualifying questions: company size, budget, timeline, specific needs</li>
          <li>After collecting answers, AI scores the lead (hot/warm/cold)</li>
          <li>Hot leads: immediate calendar booking link + notify sales team via Slack</li>
          <li>Warm leads: add to email nurture sequence + follow up in 3 days</li>
          <li>Cold leads: send useful content, check back in 30 days</li>
        </ol>
        <p>
          All data is automatically synced to your CRM (HubSpot, Pipedrive) via n8n. Sales reps see
          qualified leads with full conversation context before they even pick up the phone.
        </p>

        <h2>Order Processing Workflow</h2>
        <p>
          For restaurants or physical product businesses, build an end-to-end order bot:
        </p>
        <pre><code>{`Customer: "I'd like to order 2 margherita pizzas"
Bot: "Great choice! That's 2x Margherita (€10 each).
     Total: €20. Can I get your delivery address?"
Customer: "123 Main Street"
Bot: "Got it! Payment options:
     1. Cash on delivery
     2. Card via link"
Customer: "Cash please"
Bot: "Order confirmed! 🍕
     Order #847 — estimated delivery: 35-45 minutes
     We'll message you when the driver is on the way."

// n8n workflow sends order to kitchen system + driver app
// Customer receives delivery notifications automatically`}</code></pre>
        <p>
          This entire flow can be built in n8n without code using the WhatsApp node, OpenAI for
          natural language understanding, and HTTP Request to connect to your ordering system.
        </p>
        <blockquote>
          <strong>Ready to sell WhatsApp automation?</strong> Restaurants, clinics, and real estate
          agencies all have high WhatsApp usage and clear automation needs. Our{" "}
          <a href="/en/courses/chatbot">AI Chatbot course (€59)</a> includes a complete WhatsApp bot
          template with ordering logic, FAQ handling, and client delivery documentation.
        </blockquote>
      </BlogPost>
    </>
  );
}
