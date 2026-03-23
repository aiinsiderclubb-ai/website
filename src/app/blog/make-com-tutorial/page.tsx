import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Make.com Tutorial for Beginners: Complete Guide (2026)",
  description:
    "Master Make.com (formerly Integromat) in this complete beginner guide. Scenarios, modules, filters, AI integrations and real automation examples.",
  keywords: [
    "make.com tutorial beginners",
    "make com guide 2026",
    "integromat tutorial",
    "make.com automation",
    "learn make.com",
    "make.com scenarios",
    "make.com openai integration",
    "make.com vs zapier",
    "make com free plan",
    "make.com workflow tutorial",
  ],
  openGraph: {
    title: "Make.com Tutorial for Beginners: Complete Guide (2026) | AI Insider",
    description:
      "Complete Make.com beginner guide — scenarios, modules, AI integrations and real automation examples.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/make-com-tutorial",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Make.com Tutorial for Beginners: Complete Guide (2026)",
  description:
    "Master Make.com in this complete beginner guide. Scenarios, modules, filters, AI integrations and real automation examples.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-03-15",
  dateModified: "2026-03-20",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/make-com-tutorial" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Make.com (Integromat) free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Make.com has a free plan with 1,000 operations per month and 2 active scenarios (automations). This is enough to test and run simple automations. Paid plans start at $10.59/month for 10,000 operations and unlimited scenarios. Make's free plan is significantly more generous than Zapier's 100 tasks/month.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Make.com and n8n?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Make.com is a cloud-only visual automation tool with a beautiful interface and good integration library. n8n is open-source, self-hostable, has native AI agent nodes, and supports custom JavaScript code. Make is easier for beginners building simple workflows; n8n is better for advanced AI automation, complex logic, and cost-sensitive high-volume use cases.",
      },
    },
    {
      "@type": "Question",
      name: "What is an 'operation' in Make.com?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An operation is one module execution within a scenario run. A scenario with 5 modules that runs 100 times/month uses 500 operations. Unlike Zapier which counts 'tasks' per workflow completion, Make counts each module separately — making it cheaper for scenarios with many modules but more expensive for scenarios that run very frequently with few modules.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use Make.com or n8n?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use Make.com if you're a complete beginner who wants beautiful visuals and has straightforward automation needs. Use n8n if you're building AI agents, need self-hosting for data privacy, want custom JavaScript, or are building high-volume automations where costs matter. Many professionals use both — Make for client-simple workflows, n8n for complex AI systems.",
      },
    },
  ],
};

export default function MakeComTutorial() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="🔗"
        badge="Beginner Tutorial"
        badgeColor="bg-[#7c3aed]/20 text-[#a78bfa]"
        title="Make.com Tutorial for Beginners: Complete Guide (2026)"
        subtitle="From zero to automating your first workflow. Scenarios, modules, routers, AI integrations — with two real examples you can copy."
        date="March 2026"
        readTime="13 min"
        tags={["Make.com", "Integromat", "Automation", "No-code", "Tutorial"]}
        relatedPosts={[
          { title: "Zapier vs Make vs n8n", href: "/blog/zapier-vs-make-vs-n8n", sub: "Definitive 2026 comparison" },
          { title: "n8n Tutorial for Beginners", href: "/blog/n8n-beginners-guide", sub: "When you&apos;re ready to level up" },
          { title: "n8n vs Make", href: "/blog/n8n-vs-make", sub: "Detailed feature comparison" },
        ]}
      >
        <h2>What is Make.com?</h2>
        <p>
          Make.com (formerly known as Integromat until 2022) is a visual automation platform that lets you
          connect apps and build automated workflows — called &quot;scenarios&quot; — without writing code.
          Think of it as a flowchart where each shape is an app or action, and data flows between them.
        </p>
        <p>
          What sets Make.com apart from other automation tools is its visual canvas. You can see exactly how
          data flows through your automation, branch into multiple paths, and handle complex logic — all
          visually, without any linear limitations.
        </p>
        <ul>
          <li><strong>1,500+ app integrations</strong> — Google Workspace, Slack, HubSpot, Salesforce, and more</li>
          <li><strong>Visual scenario builder</strong> — the most intuitive interface in the category</li>
          <li><strong>Operations-based pricing</strong> — often 3–5x cheaper than Zapier for complex workflows</li>
          <li><strong>Data stores</strong> — built-in key-value storage for state management between runs</li>
        </ul>

        <h2>Make vs Zapier vs n8n: Quick Comparison</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Make.com</th>
              <th>Zapier</th>
              <th>n8n</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Free tier</td><td>1,000 ops/mo</td><td>100 tasks/mo</td><td>Unlimited</td></tr>
            <tr><td>Paid from</td><td>$10.59/mo</td><td>$29.99/mo</td><td>$20/mo</td></tr>
            <tr><td>Visual interface</td><td>Excellent</td><td>Good</td><td>Good</td></tr>
            <tr><td>AI capabilities</td><td>Via HTTP</td><td>Basic</td><td>Native nodes</td></tr>
            <tr><td>Learning curve</td><td>Low</td><td>Very low</td><td>Medium</td></tr>
          </tbody>
        </table>
        <p>
          Make is the best choice for visual learners who need more power than Zapier but aren&apos;t
          ready for n8n&apos;s complexity. See our full{" "}
          <a href="/blog/zapier-vs-make-vs-n8n">Zapier vs Make vs n8n comparison</a> for the detailed breakdown.
        </p>

        <h2>Account Setup and Free Plan</h2>
        <p>
          Getting started with Make.com is free:
        </p>
        <ol>
          <li>Go to <strong>make.com</strong> and click &quot;Get started free&quot;</li>
          <li>Create an account with email or Google</li>
          <li>You&apos;re in! No credit card required for the free plan</li>
        </ol>
        <p>
          Free plan limits: 1,000 operations/month, 2 active scenarios, minimum 15-minute scheduled intervals.
          This is enough to automate a couple of workflows and learn the platform thoroughly before committing.
        </p>

        <h2>Creating Your First Scenario</h2>
        <p>
          A &quot;scenario&quot; is Make&apos;s word for an automation workflow. Let&apos;s build a simple
          one: when someone fills out a Google Form, add them to a Google Sheet and send them a welcome email.
        </p>
        <ol>
          <li>Click <strong>Create a new scenario</strong></li>
          <li>Click the + button in the canvas to add your first module</li>
          <li>Search for <strong>Google Forms</strong> and select &quot;Watch Responses&quot;</li>
          <li>Connect your Google account</li>
          <li>Select your form</li>
          <li>Click the + after the Google Forms module and add <strong>Google Sheets</strong> → &quot;Add a Row&quot;</li>
          <li>Map the form fields to your spreadsheet columns</li>
          <li>Click + again and add <strong>Gmail</strong> → &quot;Send an Email&quot;</li>
          <li>Use form response data to personalize the email</li>
          <li>Click <strong>Run Once</strong> to test, then <strong>Scheduling</strong> to activate</li>
        </ol>

        <h2>Understanding Modules and Bundles</h2>
        <p>
          In Make, everything is a <strong>module</strong>. Each module performs one action:
        </p>
        <ul>
          <li><strong>Trigger modules</strong> (lightning bolt icon) — start the scenario. Examples: Watch Gmail for new emails, Watch a Webhook, Schedule.</li>
          <li><strong>Action modules</strong> — do something. Examples: Create Row in Sheet, Send Slack message, HTTP Request.</li>
          <li><strong>Search modules</strong> — look something up. Examples: Search HubSpot contact, Find Google Drive file.</li>
        </ul>
        <p>
          A <strong>bundle</strong> is one item of data processed through the scenario. If your trigger
          finds 5 new form responses, that creates 5 bundles — and all subsequent modules run 5 times,
          once for each bundle. This is counted as 5 operations per module.
        </p>

        <h2>Filters and Routes</h2>
        <p>
          Make&apos;s most powerful features are filters and routes — they let you branch your automation
          based on conditions.
        </p>

        <h3>Filters</h3>
        <p>
          Click the wrench icon between two modules to add a filter. Only bundles matching the condition
          pass through. Example: only process emails from a specific domain, only process orders over €100.
        </p>

        <h3>Routers</h3>
        <p>
          A router splits your data flow into multiple paths. Add a router module (from the + button),
          then connect multiple branches. Each branch has its own filter. Example:
        </p>
        <ul>
          <li>Branch 1: If inquiry type = &quot;Support&quot; → Create Zendesk ticket</li>
          <li>Branch 2: If inquiry type = &quot;Sales&quot; → Add to HubSpot pipeline</li>
          <li>Branch 3: Fallback → Send to general inbox</li>
        </ul>

        <h2>Error Handling</h2>
        <p>
          Production scenarios need error handling. In Make, click the module → Advanced settings → Add
          an error handler:
        </p>
        <ul>
          <li><strong>Resume</strong> — skip the error and continue with the next bundle</li>
          <li><strong>Ignore</strong> — ignore the error completely (use cautiously)</li>
          <li><strong>Break</strong> — stop the scenario and mark as incomplete for retry</li>
          <li><strong>Rollback</strong> — undo all changes in the current run (for transactional scenarios)</li>
        </ul>

        <h2>Make + AI: OpenAI and Claude Integrations</h2>
        <p>
          Make connects to AI models primarily through the <strong>HTTP module</strong> or dedicated
          OpenAI module:
        </p>
        <h3>Using the OpenAI Module</h3>
        <ol>
          <li>Search for <strong>OpenAI (ChatGPT)</strong> in the module list</li>
          <li>Select <strong>Create a Completion</strong></li>
          <li>Connect your OpenAI API key</li>
          <li>Set model (gpt-4o-mini), temperature, and your prompt</li>
          <li>Use the response text in subsequent modules</li>
        </ol>

        <h3>Example: AI-Powered Slack Notification</h3>
        <pre><code>{`Trigger: Gmail - Watch Emails (every 15 min)
Filter: Email is NOT from internal domain
↓
Module: OpenAI - Create Completion
  Model: gpt-4o-mini
  Prompt: "Summarize this email in one sentence:
           Subject: {{subject}}
           From: {{from}}
           Body: {{snippet}}"
↓
Module: Slack - Send a Message
  Channel: #inbox-alerts
  Message: "📧 New email from {{from}}
            Summary: {{openai_response}}
            Subject: {{subject}}"`}</code></pre>

        <h2>Real Example 1: Lead Capture to CRM</h2>
        <p>
          Build a scenario that processes new leads from your website contact form:
        </p>
        <ol>
          <li><strong>Webhook trigger</strong> — receives form submission data</li>
          <li><strong>OpenAI</strong> — classify lead type (enterprise/SMB/individual) based on company name and message</li>
          <li><strong>Router</strong> — split by lead type</li>
          <li><strong>Branch: Enterprise</strong> → Create HubSpot deal in Enterprise pipeline + Slack notification to sales</li>
          <li><strong>Branch: SMB</strong> → Add to HubSpot contacts + Add to email nurture sequence</li>
          <li><strong>All branches</strong> → Send confirmation email to lead</li>
        </ol>

        <h2>Real Example 2: Slack Notification Bot</h2>
        <p>
          Get daily summaries of key business metrics in Slack:
        </p>
        <pre><code>{`Schedule: Daily 9am
↓
Module: Google Sheets - Get Multiple Rows
  Read: Yesterday's orders, revenue, support tickets
↓
Module: OpenAI - Create Completion
  "Generate a brief business summary in emoji format:
   Orders: {{orders}}
   Revenue: {{revenue}}
   Support tickets: {{tickets}}
   Write as a daily briefing (3 bullet points max)"
↓
Module: Slack - Send a Message
  Channel: #daily-briefing
  Message: 📊 Daily Business Summary\n{{openai_response}}`}</code></pre>

        <h2>Pricing Guide</h2>
        <ul>
          <li><strong>Free:</strong> 1,000 ops, 2 active scenarios, 15-min minimum scheduling</li>
          <li><strong>Core ($10.59/mo):</strong> 10,000 ops, unlimited scenarios, 1-min scheduling</li>
          <li><strong>Pro ($18.82/mo):</strong> 10,000 ops + custom apps, real-time triggers, priority execution</li>
          <li><strong>Teams ($34.12/mo):</strong> 10,000 ops + team features, shared connections</li>
          <li><strong>Enterprise (custom):</strong> Dedicated infrastructure, SLA, custom limits</li>
        </ul>

        <h2>When to Upgrade to n8n</h2>
        <p>
          Make.com is excellent for most automation needs, but consider switching to or adding n8n when:
        </p>
        <ul>
          <li>You need to build AI agents with memory and tool use</li>
          <li>Your operation count exceeds 50,000/month (cost becomes significant)</li>
          <li>You need custom JavaScript logic</li>
          <li>GDPR or data sovereignty requires on-premise processing</li>
          <li>You&apos;re building complex, multi-step AI pipelines</li>
        </ul>
        <p>
          Many professionals use both platforms — Make for visual client-facing workflows, n8n for AI-heavy
          backend processing. Learn n8n properly with our{" "}
          <a href="/en/courses/chatbot">AI Chatbot course (€59)</a> and you&apos;ll have the perfect
          combination for any automation project.
        </p>
      </BlogPost>
    </>
  );
}
