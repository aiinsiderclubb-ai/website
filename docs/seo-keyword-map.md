# AI Insider — SEO Keyword Map & Content Plan

Living document for Phase 3 (content & ranking) and Phase 4 (measurement).
Domain: https://insiderai.it.com · Geography: **global** (areaServed: Worldwide).

---

## 1. Pillar pages (money pages)

Each pillar is an existing high-value page that should rank for its head term and
act as the hub for a topic cluster. Supporting blog posts link **up** to the pillar;
the pillar links **down** to supporting posts.

| Pillar page | Primary keyword | Secondary keywords | Status |
|-------------|-----------------|--------------------|--------|
| `/b2b` | ai automation for business | ai chatbot for business, ai voice agent for business, rag assistant, lead qualification ai | Definitions + FAQPage schema live |
| `/courses` | ai automation course | ai chatbot course, voice agent course, n8n course, learn ai automation | Course + Person schema live |
| `/courses/chatbot` | ai chatbot development course | build ai chatbot, n8n chatbot, chatgpt chatbot course | Course + FAQ schema live |
| `/courses/voice` | ai voice agent course | vapi.ai course, build voice agent | Course schema live |
| `/case-studies` | ai automation case studies | ai automation results, ai roi case study | Article schema per case live |

---

## 2. Topic clusters (blog)

Goal per pillar: 3–5 supporting posts, each answering one specific question and
linking to the pillar with a descriptive anchor.

### Cluster A — AI automation / n8n  → links to `/b2b`, `/courses`
- ✅ Building Robust n8n Workflows (`/blog/n8n-workflows`)
- ✅ Shipping AI Agents to Production (`/blog/ai-agents-production`)
- ✅ YouTube → Shorts on Autopilot (`/blog/youtube-shorts-autopilot`)
- ⬜ **What is n8n used for?** (definition/long-tail) — target "what is n8n used for"
- ⬜ **How to integrate ChatGPT with HubSpot** — target integration long-tail

### Cluster B — Voice agents  → links to `/b2b`, `/courses/voice`
- ✅ Voice Agents with Vapi (`/blog/voice-agents-vapi`)
- ⬜ **How much does an AI voice agent cost?** — high-intent long-tail
- ⬜ **AI receptionist vs human receptionist** — comparison
- ⬜ **Vapi.ai vs Retell vs Bland** — comparison

### Cluster C — LLM engineering  → links to `/courses`, `/b2b`
- ✅ RAG that Actually Works (`/blog/rag-that-actually-works`)
- ✅ Evaluating LLM Systems (`/blog/evaluating-llm`)
- ✅ Prompt Engineering Pitfalls (`/blog/prompt-engineering-pitfalls`)
- ✅ Lead Qualification with LLMs (`/blog/lead-qualification`)
- ⬜ **What is RAG (retrieval-augmented generation)?** — definition

### Cluster D — AI content / solo builders  → links to `/courses`, `/b2b`
- ✅ Website in 5 Minutes with GPT-5 (`/blog/website-in-5-minutes-gpt5`)
- ✅ VEED AI Playground (`/blog/veed-ai-playground`)
- ✅ Google Vids: AI Video Editor (`/blog/google-vids-ai-editor`)
- ✅ One Person with AI = Mini-Startup (`/blog/one-person-mini-startup`)

---

## 3. Long-tail / question targets (AEO)

These map to direct-answer paragraphs and FAQ schema already added, plus future posts:

- how much does an ai voice agent cost  → `/b2b` (direct answer live)
- what is ai automation for business     → `/b2b` (direct answer live)
- what is an ai voice agent              → `/b2b` (direct answer live)
- what is an ai automation course        → `/courses` (direct answer live)
- do i need to code for ai automation    → `/courses` (direct answer live)
- what is n8n used for                   → new post (Cluster A)
- how to integrate chatgpt with hubspot  → new post (Cluster A)

---

## 4. Internal linking rules

1. Every blog post links to **one pillar** with a descriptive anchor
   (e.g. "AI automation for business", not "click here").
2. Every pillar links to **2–3 supporting posts** in its cluster.
3. Cross-link related posts via the existing `relatedPosts` prop on `BlogPost`.
4. Footer + nav already expose all pillars; keep them there.

---

## 5. Phase 4 — Measurement (ongoing)

- **Search Console**: submit `https://insiderai.it.com/sitemap.xml`, monitor
  Coverage/Indexing and the Performance report for pillar queries.
- **Rich Results Test**: validate Organization, WebSite, FAQPage, HowTo, Course,
  BlogPosting, BreadcrumbList after each deploy.
- **PageSpeed Insights / Core Web Vitals**: track LCP, CLS, INP on `/`, `/b2b`, `/courses`.
- **Rank tracking**: pillar queries (table §1) + long-tail (§3); review every 2 weeks.

---

## 6. Open items for the owner (not code)

- Fill `siteConfig.social` (LinkedIn, X, YouTube, Instagram) → auto-feeds `sameAs`.
- Confirm the public contact email in `siteConfig.email` is a monitored mailbox.
- Replace generic case-study client labels with real names/logos where permission allows.
