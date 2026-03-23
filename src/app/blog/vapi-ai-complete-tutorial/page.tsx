import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Vapi.ai Tutorial: Build Voice AI Agents from Scratch (2026)",
  description:
    "Complete Vapi.ai tutorial. Create your first AI phone agent, configure voices, handle interruptions, integrate with CRMs and deploy to production.",
  keywords: [
    "vapi ai tutorial",
    "vapi.ai guide",
    "build voice ai agent",
    "vapi ai phone agent",
    "vapi tutorial 2026",
    "voice ai agent tutorial",
    "ai phone agent vapi",
    "vapi assistant setup",
    "vapi n8n integration",
    "voice ai for business",
  ],
  openGraph: {
    title: "Vapi.ai Tutorial: Build Voice AI Agents from Scratch (2026) | AI Insider",
    description:
      "Complete Vapi.ai tutorial — build your first AI phone agent in under an hour.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/vapi-ai-complete-tutorial",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vapi.ai Tutorial: Build Voice AI Agents from Scratch (2026)",
  description:
    "Complete Vapi.ai tutorial. Create your first AI phone agent, configure voices, handle interruptions, integrate with CRMs and deploy to production.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-02-15",
  dateModified: "2026-03-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/vapi-ai-complete-tutorial" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Vapi.ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vapi.ai is a developer platform for building real-time AI voice agents. It handles all the technical complexity of voice AI — speech-to-text, language model integration, text-to-speech, and phone infrastructure — so you can focus on building the conversation logic. Used for AI receptionists, sales agents, customer support, and scheduling automation.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Vapi.ai cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vapi charges $0.05–$0.12 per minute of voice AI usage, depending on the model and voice provider you choose. A typical 3-minute customer service call costs $0.15–$0.36. For a business handling 100 calls/day at 3 minutes each, expect $450–$1,080/month in Vapi costs — still cheaper than a human receptionist.",
      },
    },
    {
      "@type": "Question",
      name: "Can Vapi integrate with my CRM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vapi supports tool calls (function calling) that let your AI agent call external APIs during a conversation. You can connect it to HubSpot, Salesforce, Google Calendar, or any system with an API. Use n8n webhooks as the middleware to handle the logic without custom code.",
      },
    },
    {
      "@type": "Question",
      name: "How do I handle interruptions in Vapi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vapi handles barge-in (interruptions) automatically through its real-time transcription layer. Configure the 'interruptionsEnabled' setting to true and set 'numWordsToInterruptAssistant' to the number of consecutive words before pausing. For natural conversations, setting this to 2-3 words works well.",
      },
    },
  ],
};

export default function VapiAICompleteTutorial() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="📞"
        badge="Complete Tutorial"
        badgeColor="bg-[#0ea5e9]/20 text-[#38bdf8]"
        title="Vapi.ai Tutorial: Build Voice AI Agents from Scratch (2026)"
        subtitle="Build a fully functional AI phone agent in under an hour. Voices, interruptions, tool calls, CRM integration — all covered."
        date="February 2026"
        readTime="14 min"
        tags={["Vapi.ai", "Voice AI", "Voice Agent", "AI Phone Agent", "Tutorial"]}
        relatedPosts={[
          { title: "Voice Agents with Vapi", href: "/blog/voice-agents-vapi", sub: "Latency, barge-in, grounding" },
          { title: "Voice AI Agent Guide", href: "/blog/voice-ai-agent-guide", sub: "Complete guide to voice AI agents" },
          { title: "n8n + OpenAI Integration", href: "/blog/n8n-openai-integration", sub: "Connect n8n to OpenAI API" },
        ]}
      >
        <h2>What is Vapi.ai?</h2>
        <p>
          Vapi.ai is a real-time voice AI platform that lets you build AI phone agents without managing the
          underlying infrastructure. It handles the complete voice pipeline: receiving phone calls, transcribing
          speech in real-time (Deepgram), passing to the language model (GPT-4o, Claude, or others), and
          converting the response back to speech (ElevenLabs, OpenAI TTS, or Cartesia).
        </p>
        <p>
          All of this happens in under 500ms, creating the natural conversation flow that makes voice AI actually
          usable for real business applications.
        </p>

        <h2>Use Cases That Generate Real Revenue</h2>
        <p>
          Understanding the business applications helps you choose the right configuration:
        </p>
        <ul>
          <li><strong>AI Receptionist:</strong> Answers calls, qualifies inquiries, books appointments in Google Calendar — 24/7, no sick days</li>
          <li><strong>Outbound Sales Agent:</strong> Calls leads from a list, qualifies them, and books demos with human reps</li>
          <li><strong>Customer Support:</strong> Handles Tier-1 support (tracking, FAQs, basic troubleshooting)</li>
          <li><strong>Appointment Reminders:</strong> Calls patients/clients before appointments to confirm or reschedule</li>
          <li><strong>Survey and Feedback Collection:</strong> Calls customers after service delivery to collect NPS scores</li>
        </ul>
        <blockquote>
          <strong>Revenue potential:</strong> A dental practice paying €800/month for an AI receptionist that
          handles scheduling, reminders, and FAQs is a straightforward sale when the alternative is a
          part-time receptionist at €1,500–€2,000/month. Our{" "}
          <a href="/en/courses/voice">Voice Agent course (€39)</a> covers exactly how to build and sell this.
        </blockquote>

        <h2>Account Setup and First Call</h2>
        <p>
          Getting started with Vapi takes about 10 minutes:
        </p>
        <ol>
          <li>Go to <strong>vapi.ai</strong> and create an account</li>
          <li>Add a payment method (you get $10 in free credits to start)</li>
          <li>Go to <strong>Dashboard → Assistants → Create Assistant</strong></li>
          <li>Configure the basic settings (name, model, voice)</li>
          <li>Click <strong>Test Call</strong> to speak to your assistant in the browser</li>
        </ol>

        <h2>Configuring Your Assistant</h2>
        <p>
          The assistant configuration is where you define how your voice agent behaves. Here are the key settings:
        </p>

        <h3>System Prompt (First Messages)</h3>
        <p>
          This is the most important configuration. The system prompt defines the agent&apos;s personality,
          knowledge, and behavior. Here&apos;s an example for a dental receptionist:
        </p>
        <pre><code>{`You are Sarah, a friendly receptionist for Smile Dental Clinic.
Your job is to:
1. Greet callers warmly and ask how you can help
2. Book, reschedule, or cancel appointments
3. Answer common questions about services and pricing
4. Collect patient information for new patients

Clinic information:
- Hours: Monday-Friday 9am-6pm, Saturday 10am-3pm
- Address: 123 Main Street, Dublin
- Services: General dentistry, whitening, implants, orthodontics
- New patient exam: €85

Keep responses concise — this is a phone call, not a text message.
Always confirm appointment details before ending the call.`}</code></pre>

        <h3>Voice Selection</h3>
        <p>
          Vapi supports multiple TTS providers. Our recommendations:
        </p>
        <ul>
          <li><strong>ElevenLabs voices</strong> — highest quality, most natural. Use for client-facing agents.</li>
          <li><strong>Cartesia Sonic</strong> — ultra-low latency (&lt;100ms). Best for fast, responsive conversations.</li>
          <li><strong>OpenAI TTS</strong> — good quality, fast, and cost-effective. Good middle ground.</li>
          <li><strong>PlayHT</strong> — good quality with many voice options and languages.</li>
        </ul>

        <h3>Language Model Settings</h3>
        <ul>
          <li><strong>Model:</strong> GPT-4o-mini for most cases (fast, cheap). GPT-4o for complex reasoning.</li>
          <li><strong>Temperature:</strong> 0.3–0.5 for consistent, professional responses. 0.7+ for more creative agents.</li>
          <li><strong>Max tokens:</strong> 150–250 for phone conversations. Longer responses feel unnatural on calls.</li>
        </ul>

        <h2>Handling Real-Time Interruptions</h2>
        <p>
          Natural conversations require barge-in support — the ability for callers to interrupt the agent
          while it&apos;s speaking. Vapi handles this through its transcription layer.
        </p>
        <pre><code>{`// Vapi assistant configuration (JSON)
{
  "model": {
    "provider": "openai",
    "model": "gpt-4o-mini",
    "temperature": 0.4,
    "maxTokens": 200
  },
  "voice": {
    "provider": "elevenlabs",
    "voiceId": "21m00Tcm4TlvDq8ikWAM"
  },
  "transcriber": {
    "provider": "deepgram",
    "language": "en",
    "model": "nova-2"
  },
  "conversation": {
    "interruptionsEnabled": true,
    "numWordsToInterruptAssistant": 2,
    "silenceTimeoutSeconds": 30
  }
}`}</code></pre>

        <h2>Tool Calls: Connecting to External Systems</h2>
        <p>
          Tool calls (function calling) let your voice agent access real data during the conversation.
          When the agent needs to check availability or book an appointment, it calls a function which
          returns real data from your backend.
        </p>

        <h3>Example: Booking an Appointment</h3>
        <pre><code>{`// Tool definition in Vapi
{
  "name": "check_availability",
  "description": "Check available appointment slots",
  "parameters": {
    "type": "object",
    "properties": {
      "date": {
        "type": "string",
        "description": "Date to check, format YYYY-MM-DD"
      },
      "service_type": {
        "type": "string",
        "description": "Type of dental service needed"
      }
    },
    "required": ["date"]
  },
  "server": {
    "url": "https://your-n8n.com/webhook/check-availability"
  }
}`}</code></pre>

        <p>
          The <code>server.url</code> points to an n8n webhook. When the AI agent calls this tool, n8n
          receives the parameters, queries Google Calendar or your booking system, and returns available
          slots as JSON. The agent then speaks the results naturally.
        </p>

        <h2>Integrating with n8n for CRM Updates</h2>
        <p>
          After a call, Vapi sends a webhook with the full call summary, transcript, and any data collected
          during tool calls. Use n8n to process this data:
        </p>
        <ol>
          <li>In Vapi Dashboard, go to <strong>Settings → Webhooks</strong></li>
          <li>Add your n8n webhook URL as the <strong>End of Call Report</strong> webhook</li>
          <li>In n8n, create a workflow with a Webhook trigger</li>
          <li>Parse the call data (customer name, phone, appointment booked, etc.)</li>
          <li>Create or update contact in HubSpot/Salesforce/Airtable</li>
          <li>Send confirmation SMS or email if needed</li>
        </ol>

        <h2>Transcription and Call Recording</h2>
        <p>
          Vapi automatically transcribes and records every call (if enabled). The end-of-call report
          includes:
        </p>
        <ul>
          <li><strong>Full transcript</strong> — every word spoken by agent and caller</li>
          <li><strong>Call summary</strong> — AI-generated summary of what was discussed</li>
          <li><strong>Structured data</strong> — information extracted via tool calls</li>
          <li><strong>Sentiment analysis</strong> — caller satisfaction indicators</li>
          <li><strong>Duration and cost</strong> — for billing and analytics</li>
        </ul>

        <h2>Cost Breakdown</h2>
        <p>
          Understanding costs is essential for pricing client projects correctly:
        </p>
        <ul>
          <li><strong>Vapi platform:</strong> ~$0.05/minute base cost</li>
          <li><strong>LLM (GPT-4o-mini):</strong> ~$0.01–$0.02/minute</li>
          <li><strong>Voice (ElevenLabs):</strong> ~$0.03–$0.05/minute</li>
          <li><strong>Transcription (Deepgram):</strong> ~$0.005/minute</li>
          <li><strong>Phone number:</strong> ~$1.15/month per number + $0.015/minute</li>
        </ul>
        <p>
          Total: approximately <strong>$0.10–$0.15 per minute</strong> for a production voice agent with
          premium voice quality. A 3-minute call costs $0.30–$0.45.
        </p>

        <h2>Deploying with a Real Phone Number</h2>
        <p>
          To receive actual phone calls, you need to provision a phone number:
        </p>
        <ol>
          <li>Go to <strong>Phone Numbers</strong> in Vapi Dashboard</li>
          <li>Click <strong>Buy Phone Number</strong> — choose your country and area code</li>
          <li>Assign the number to your assistant</li>
          <li>Test by calling the number from your phone</li>
        </ol>
        <p>
          For outbound calling campaigns, use Vapi&apos;s Calls API to programmatically initiate calls
          from a list — perfect for appointment reminders or follow-up sequences triggered by n8n.
        </p>
        <blockquote>
          <strong>Next step:</strong> If you want to build voice AI agents professionally and charge
          €1,500–€4,000 per project, our complete{" "}
          <a href="/en/courses/voice">Voice Agent course (€39)</a> covers everything from this tutorial
          plus advanced topics: multi-language support, sentiment escalation, and client delivery frameworks.
        </blockquote>
      </BlogPost>
    </>
  );
}
