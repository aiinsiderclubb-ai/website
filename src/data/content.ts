export const siteConfig = {
  name: "AI Insider",
  tagline: "Education Platform",
  url: "https://insiderai.it.com",
  studioUrl: "https://www.aiinsider.it.com/uk",
  telegram: "https://t.me/+qjwWJz7aLR1hMDQ0",
  email: "hello@aiinsider.com",
  mentorshipTelegram:
    "https://t.me/vladyslavarcher?text=Привет!%20Интересует%20Personal%20ChatBot%20Mentorship%20(€299)",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Community", href: "/community" },
  { label: "Reviews", href: "/reviews" },
  { label: "B2B", href: "/b2b" },
  { label: "Blog", href: "/blog" },
];

export const heroMetrics = [
  { value: "6,079+", label: "Specialists Trained" },
  { value: "340%", label: "Average ROI" },
  { value: "150+", label: "Partners" },
];

export const rotatingWords = [
  "AI Automation",
  "ChatBots",
  "Voice Agents",
  "Business Growth",
];

export const howItWorks = [
  {
    step: "01",
    title: "Connect",
    description:
      "Plug into n8n, Vapi, GSheets and your CRM. Ready-made connectors, secure access.",
  },
  {
    step: "02",
    title: "Compose",
    description:
      "Design flows, prompts and tools. Test with evals, add guardrails and retries for stability.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "Ship to production with monitoring, alerts and rollback. Measure ROI and iterate weekly.",
  },
];

export const howItWorksChips = ["n8n", "Vapi.ai", "Google Sheets", "HubSpot"];

export const courses = [
  {
    title: "AI Chat-Bot Development",
    subtitle: "(ChatGPT & n8n)",
    level: "Beginner",
    price: "€59",
    duration: "3 weeks",
    startDate: "Rolling enrollment — start anytime",
    apiKeys: "API keys included",
    description:
      "From zero to a niche-ready bot for services, e-commerce or healthcare. Practice on real tasks with templates and guidance. Includes a quick sales playbook.",
    features: ["Templates", "Support", "Sales playbook", "Real cases"],
    href: "/courses/chatbot",
    ctaText: "Enroll — €59",
  },
  {
    title: "AI Voice Agent",
    subtitle: "(Vapi.ai & Whisper)",
    level: "Intermediate",
    price: "€39",
    duration: "2 weeks",
    startDate: "Rolling enrollment — start anytime",
    apiKeys: "API keys included",
    description:
      "Design scenarios, wire real-time actions and take your agent to production for services, healthcare or sales. API keys for practice included.",
    features: ["Voice synthesis", "Realtime actions", "Templates", "Certificate"],
    href: "/courses/voice",
    ctaText: "Join — €39",
  },
  {
    title: "Personal ChatBot Mentorship",
    subtitle: "",
    level: "Advanced",
    price: "€299",
    duration: "2 weeks",
    startDate: "Build your first revenue stream",
    apiKeys: "1-on-1 guidance",
    description:
      "1-on-1 mentorship to create and monetize your first chatbot. Personal guidance, direct feedback, a revenue playbook and ongoing support.",
    features: [
      "Personal mentor",
      "Direct communication",
      "Revenue playbook",
      "Ongoing support",
    ],
    href: "https://t.me/vladyslavarcher?text=Привет!%20Интересует%20Personal%20ChatBot%20Mentorship%20(€299)",
    ctaText: "Get Mentorship — €299",
    featured: true,
  },
];

export const partners = [
  "n8n",
  "Vapi.ai",
  "OpenAI",
  "Anthropic",
  "LangChain",
  "Pinecone",
  "Supabase",
  "HubSpot",
  "Google Sheets",
  "Telegram Bot API",
  "Whisper AI",
  "Mistral AI",
  "Make.com",
  "Zapier",
  "Vercel",
  "Notion",
  "Stripe",
  "Twilio",
];

export const testimonials = [
  {
    name: "Michael Chen",
    role: "Senior AI Engineer, Google",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    metric: "+180%",
    metricLabel: "Income Increase",
    quote:
      "AI Insider's automation strategies helped me build systems that now generate passive income while I sleep. Pure game-changer.",
    featured: true,
  },
  {
    name: "Alex Rodriguez",
    role: "AI Startup Founder",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    metric: "$50k+",
    metricLabel: "Annual Revenue",
    quote:
      "Launched my first AI automation agency in 18 months using what I learned here. This community is incredibly valuable.",
  },
  {
    name: "Emma Williams",
    role: "Creative AI Director, Adobe",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    metric: "40k+",
    metricLabel: "Users Impacted",
    quote:
      "Leading Adobe's AI design revolution that powers creativity for millions worldwide.",
  },
];

export const faqItems = [
  {
    question: "How quickly can I get started?",
    answer:
      "Usually 1–3 days. The process is simple: connect your tools, configure your workflows, and launch. For enterprise setups, we provide a dedicated implementation plan.",
  },
  {
    question: "Does it integrate with my CRM or spreadsheets?",
    answer:
      "Yes. We support n8n, Vapi, Google Sheets, HubSpot and more through ready-made connectors. Custom integrations are also available.",
  },
  {
    question: "What about security and compliance?",
    answer:
      "We follow industry best practices: encryption, access control, audit logs, and rollback capabilities. Our approach aligns with GDPR and SOC2 standards.",
  },
  {
    question: "Where can I see courses and case studies?",
    answer:
      "Browse our /courses page for training programs, /case-studies for real-world examples with real numbers, and the /blog for articles and guides.",
  },
];
