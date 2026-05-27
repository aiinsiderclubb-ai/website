import type { Lang } from "@landing/i18n/translations";

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

export const siteStats = {
  communityMembers: 6000,
  communityMembersLabel: "6,000+",
  graduates: 100,
  graduatesLabel: "100+",
  averageRoi: "340%",
  partners: "150+",
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
  { value: siteStats.graduatesLabel, labelKey: "specialists" as const },
  { value: siteStats.averageRoi, labelKey: "roi" as const },
  { value: siteStats.partners, labelKey: "partners" as const },
];

export const rotatingWords: Record<Lang, string[]> = {
  en: ["AI Automation", "ChatBots", "Voice Agents", "Business Growth"],
  ru: ["AI Автоматизацию", "ЧатБоты", "Голосовых Агентов", "Рост Бизнеса"],
  uk: ["AI Автоматизацію", "ЧатБоти", "Голосових Агентів", "Зростання Бізнесу"],
};

export const howItWorksChips = ["n8n", "Vapi.ai", "Google Sheets", "HubSpot"];

export type HowItWorksIcon = "connect" | "compose" | "launch";

export const getHowItWorks = (lang: Lang) => {
  const data = {
    en: [
      {
        step: "01",
        icon: "connect" as HowItWorksIcon,
        title: "Connect",
        description: "Plug into n8n, Vapi, GSheets and your CRM. Ready-made connectors, secure access.",
        tags: ["API", "CRM", "Sheets"],
      },
      {
        step: "02",
        icon: "compose" as HowItWorksIcon,
        title: "Compose",
        description: "Design flows, prompts and tools. Test with evals, add guardrails and retries for stability.",
        tags: ["Flows", "Prompts", "Guardrails"],
      },
      {
        step: "03",
        icon: "launch" as HowItWorksIcon,
        title: "Launch",
        description: "Ship to production with monitoring, alerts and rollback. Measure ROI and iterate weekly.",
        tags: ["Deploy", "Monitor", "ROI"],
      },
    ],
    ru: [
      {
        step: "01",
        icon: "connect" as HowItWorksIcon,
        title: "Подключение",
        description: "Связываешь инструменты — n8n, Vapi, GSheets и CRM. Готовые коннекторы, безопасный доступ.",
        tags: ["API", "CRM", "Таблицы"],
      },
      {
        step: "02",
        icon: "compose" as HowItWorksIcon,
        title: "Создание",
        description: "Проектируешь потоки, промпты и инструменты. Тестируешь, добавляешь защиту и повторные попытки.",
        tags: ["Потоки", "Промпты", "Защита"],
      },
      {
        step: "03",
        icon: "launch" as HowItWorksIcon,
        title: "Запуск",
        description: "Деплоишь с мониторингом, алертами и откатом. Измеряешь ROI и итерируешь еженедельно.",
        tags: ["Деплой", "Мониторинг", "ROI"],
      },
    ],
    uk: [
      {
        step: "01",
        icon: "connect" as HowItWorksIcon,
        title: "Підключення",
        description: "З'єднуєш інструменти — n8n, Vapi, GSheets і CRM. Готові конектори, безпечний доступ.",
        tags: ["API", "CRM", "Таблиці"],
      },
      {
        step: "02",
        icon: "compose" as HowItWorksIcon,
        title: "Створення",
        description: "Проєктуєш потоки, промпти та інструменти. Тестуєш, додаєш захист і повторні спроби.",
        tags: ["Потоки", "Промпти", "Захист"],
      },
      {
        step: "03",
        icon: "launch" as HowItWorksIcon,
        title: "Запуск",
        description: "Деплоїш з моніторингом, алертами та відкатом. Вимірюєш ROI і ітеруєш щотижня.",
        tags: ["Деплой", "Моніторинг", "ROI"],
      },
    ],
  };
  return data[lang];
};

export type TechCategory = "ai" | "automation" | "integration" | "infra";

export interface TechStackItem {
  name: string;
  abbr: string;
  category: TechCategory;
  color: string;
}

export const techStackItems: TechStackItem[] = [
  { name: "OpenAI", abbr: "AI", category: "ai", color: "#10a37f" },
  { name: "Anthropic", abbr: "An", category: "ai", color: "#d97757" },
  { name: "Mistral AI", abbr: "Mi", category: "ai", color: "#f97316" },
  { name: "Whisper AI", abbr: "Wh", category: "ai", color: "#06b6d4" },
  { name: "LangChain", abbr: "LC", category: "ai", color: "#1c3d5a" },
  { name: "Pinecone", abbr: "Pi", category: "ai", color: "#000000" },
  { name: "n8n", abbr: "n8", category: "automation", color: "#ea4b71" },
  { name: "Vapi.ai", abbr: "Va", category: "automation", color: "#7c3aed" },
  { name: "Make.com", abbr: "Mk", category: "automation", color: "#6d28d9" },
  { name: "Zapier", abbr: "Zp", category: "automation", color: "#ff4a00" },
  { name: "HubSpot", abbr: "HS", category: "integration", color: "#ff7a59" },
  { name: "Google Sheets", abbr: "GS", category: "integration", color: "#34a853" },
  { name: "Telegram Bot API", abbr: "TG", category: "integration", color: "#26a5e4" },
  { name: "Stripe", abbr: "St", category: "integration", color: "#635bff" },
  { name: "Twilio", abbr: "Tw", category: "integration", color: "#f22f46" },
  { name: "Supabase", abbr: "Sb", category: "infra", color: "#3ecf8e" },
  { name: "Vercel", abbr: "Ve", category: "infra", color: "#ffffff" },
  { name: "Notion", abbr: "No", category: "infra", color: "#e8e8e8" },
];

export const getCourses = (lang: Lang) => {
  const data = {
    en: [
      {
        title: "AI Chat-Bot Development",
        subtitle: "(ChatGPT & n8n)",
        level: "Beginner",
        levelKey: "beginner" as const,
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
        levelKey: "intermediate" as const,
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
        level: "VIP",
        levelKey: "vip" as const,
        price: "€299",
        duration: "2 weeks",
        startDate: "Build your first revenue stream",
        apiKeys: "1-on-1 guidance",
        description:
          "1-on-1 mentorship to create and monetize your first chatbot. Personal guidance, direct feedback, a revenue playbook and ongoing support.",
        features: ["Personal mentor", "Direct communication", "Revenue playbook", "Ongoing support"],
        href: "https://t.me/vladyslavarcher?text=Привет!%20Интересует%20Personal%20ChatBot%20Mentorship%20(€299)",
        ctaText: "Get Mentorship — €299",
        featured: true,
      },
    ],
    ru: [
      {
        title: "AI Chat-Bot Development",
        subtitle: "(ChatGPT & n8n)",
        level: "Beginner",
        levelKey: "beginner" as const,
        price: "€59",
        duration: "3 недели",
        startDate: "Скользящий набор — начни когда удобно",
        apiKeys: "API ключи включены",
        description:
          "От нуля до нишевого бота для сервисов, e-commerce или медицины. Практика на реальных задачах с шаблонами и наставничеством. Включает краткий плейбук по продажам.",
        features: ["Шаблоны", "Поддержка", "Плейбук по продажам", "Реальные кейсы"],
        href: "/courses/chatbot",
        ctaText: "Записаться — €59",
      },
      {
        title: "AI Voice Agent",
        subtitle: "(Vapi.ai & Whisper)",
        level: "Intermediate",
        levelKey: "intermediate" as const,
        price: "€39",
        duration: "2 недели",
        startDate: "Скользящий набор — начни когда удобно",
        apiKeys: "API ключи включены",
        description:
          "Проектируй сценарии, подключай реальные действия и выводи агента в продакшн для сервисов, медицины или продаж. API ключи для практики включены.",
        features: ["Голосовой синтез", "Действия в реальном времени", "Шаблоны", "Сертификат"],
        href: "/courses/voice",
        ctaText: "Присоединиться — €39",
      },
      {
        title: "Personal ChatBot Mentorship",
        subtitle: "",
        level: "VIP",
        levelKey: "vip" as const,
        price: "€299",
        duration: "2 недели",
        startDate: "Первый источник дохода",
        apiKeys: "Индивидуальное наставничество",
        description:
          "Индивидуальное менторство для создания и монетизации первого чатбота. Личное руководство, прямая обратная связь, плейбук по монетизации и поддержка.",
        features: ["Личный ментор", "Прямая коммуникация", "Плейбук монетизации", "Постоянная поддержка"],
        href: "https://t.me/vladyslavarcher?text=Привет!%20Интересует%20Personal%20ChatBot%20Mentorship%20(€299)",
        ctaText: "Получить менторство — €299",
        featured: true,
      },
    ],
    uk: [
      {
        title: "AI Chat-Bot Development",
        subtitle: "(ChatGPT & n8n)",
        level: "Beginner",
        levelKey: "beginner" as const,
        price: "€59",
        duration: "3 тижні",
        startDate: "Ковзний набір — почни коли зручно",
        apiKeys: "API ключі включені",
        description:
          "Від нуля до нішевого бота для сервісів, e-commerce або медицини. Практика на реальних задачах із шаблонами та наставництвом. Включає короткий плейбук з продажів.",
        features: ["Шаблони", "Підтримка", "Плейбук з продажів", "Реальні кейси"],
        href: "/courses/chatbot",
        ctaText: "Записатись — €59",
      },
      {
        title: "AI Voice Agent",
        subtitle: "(Vapi.ai & Whisper)",
        level: "Intermediate",
        levelKey: "intermediate" as const,
        price: "€39",
        duration: "2 тижні",
        startDate: "Ковзний набір — почни коли зручно",
        apiKeys: "API ключі включені",
        description:
          "Проєктуй сценарії, підключай реальні дії та виводь агента в продакшн для сервісів, медицини або продажів. API ключі для практики включені.",
        features: ["Голосовий синтез", "Дії в реальному часі", "Шаблони", "Сертифікат"],
        href: "/courses/voice",
        ctaText: "Приєднатись — €39",
      },
      {
        title: "Personal ChatBot Mentorship",
        subtitle: "",
        level: "VIP",
        levelKey: "vip" as const,
        price: "€299",
        duration: "2 тижні",
        startDate: "Перше джерело доходу",
        apiKeys: "Індивідуальне наставництво",
        description:
          "Індивідуальне менторство для створення та монетизації першого чатбота. Особисте керівництво, прямий зворотній зв'язок, плейбук з монетизації та підтримка.",
        features: ["Особистий ментор", "Пряма комунікація", "Плейбук монетизації", "Постійна підтримка"],
        href: "https://t.me/vladyslavarcher?text=Привет!%20Интересует%20Personal%20ChatBot%20Mentorship%20(€299)",
        ctaText: "Отримати менторство — €299",
        featured: true,
      },
    ],
  };
  return data[lang];
};

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

export const getTestimonials = (lang: Lang) => {
  const data = {
    en: [
      {
        name: "Course participant",
        role: "Built a client-booking bot",
        metric: "1st client",
        metricLabel: "after launch",
        quote:
          "I built a Telegram bot for beauty salons with booking, Google Sheets sync and a simple demo. The course helped me package it and start outreach.",
        featured: true,
      },
      {
        name: "Community member",
        role: "n8n workflows & lead automation",
        metric: "20h/week",
        metricLabel: "saved manually",
        quote:
          "The practical workflow examples were the most useful part. I finally understood how to connect forms, CRM updates and Telegram alerts into one flow.",
      },
      {
        name: "AI Insider student",
        role: "Voice agent prototype",
        metric: "7 days",
        metricLabel: "to working demo",
        quote:
          "Short lessons, direct support and real templates made it much easier to ship a voice-agent demo instead of just watching theory.",
      },
    ],
    ru: [
      {
        name: "Участник курса",
        role: "Собрал бота для записи клиентов",
        metric: "1-й клиент",
        metricLabel: "после запуска",
        quote:
          "Собрал Telegram-бота для салона красоты: запись, Google Sheets и демо для клиента. Курс помог упаковать решение и начать продажи.",
        featured: true,
      },
      {
        name: "Участник комьюнити",
        role: "n8n-воркфлоу и лиды",
        metric: "20ч/нед",
        metricLabel: "экономии ручной работы",
        quote:
          "Больше всего помогли практические схемы. Наконец понял, как связать формы, CRM и Telegram-уведомления в один поток.",
      },
      {
        name: "Студент AI Insider",
        role: "Прототип voice agent",
        metric: "7 дней",
        metricLabel: "до рабочего демо",
        quote:
          "Короткие уроки, поддержка и готовые шаблоны помогли собрать демо voice agent, а не просто смотреть теорию.",
      },
    ],
    uk: [
      {
        name: "Учасник курсу",
        role: "Зібрав бота для запису клієнтів",
        metric: "1-й клієнт",
        metricLabel: "після запуску",
        quote:
          "Зібрав Telegram-бота для салону краси: запис, Google Sheets і демо для клієнта. Курс допоміг упакувати рішення та почати продажі.",
        featured: true,
      },
      {
        name: "Учасник комʼюніті",
        role: "n8n-воркфлоу та ліди",
        metric: "20г/тиж",
        metricLabel: "економії ручної роботи",
        quote:
          "Найбільше допомогли практичні схеми. Нарешті зрозумів, як поєднати форми, CRM і Telegram-сповіщення в один потік.",
      },
      {
        name: "Студент AI Insider",
        role: "Прототип voice agent",
        metric: "7 днів",
        metricLabel: "до робочого демо",
        quote:
          "Короткі уроки, підтримка і готові шаблони допомогли зібрати демо voice agent, а не просто дивитися теорію.",
      },
    ],
  };
  return data[lang];
};

export const getFaqItems = (lang: Lang) => {
  const data = {
    en: [
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
    ],
    ru: [
      {
        question: "Как быстро я могу начать?",
        answer:
          "Обычно 1–3 дня. Процесс прост: подключи инструменты, настрой воркфлоу и запускай. Для корпоративных настроек предоставляем выделенный план внедрения.",
      },
      {
        question: "Интегрируется ли с CRM или таблицами?",
        answer:
          "Да. Поддерживаем n8n, Vapi, Google Sheets, HubSpot и другие через готовые коннекторы. Доступны и кастомные интеграции.",
      },
      {
        question: "Как обстоит дело с безопасностью и соответствием требованиям?",
        answer:
          "Следуем лучшим практикам отрасли: шифрование, контроль доступа, аудит-логи и возможность отката. Соответствует GDPR и SOC2.",
      },
      {
        question: "Где посмотреть курсы и кейсы?",
        answer:
          "Загляни на страницу /courses для учебных программ, /case-studies для реальных примеров с цифрами, и /blog для статей и гайдов.",
      },
    ],
    uk: [
      {
        question: "Як швидко я можу почати?",
        answer:
          "Зазвичай 1–3 дні. Процес простий: підключи інструменти, налаштуй воркфлоу і запускай. Для корпоративних налаштувань надаємо виділений план впровадження.",
      },
      {
        question: "Чи інтегрується з CRM або таблицями?",
        answer:
          "Так. Підтримуємо n8n, Vapi, Google Sheets, HubSpot та інші через готові конектори. Доступні й кастомні інтеграції.",
      },
      {
        question: "Що щодо безпеки та відповідності вимогам?",
        answer:
          "Дотримуємось найкращих практик галузі: шифрування, контроль доступу, аудит-логи та можливість відкату. Відповідає GDPR і SOC2.",
      },
      {
        question: "Де переглянути курси та кейси?",
        answer:
          "Зайди на сторінку /courses для навчальних програм, /case-studies для реальних прикладів із цифрами, та /blog для статей і гайдів.",
      },
    ],
  };
  return data[lang];
};

// Legacy exports for backward compatibility (used by some components without lang)
export const howItWorks = [
  {
    step: "01",
    title: "Connect",
    description: "Plug into n8n, Vapi, GSheets and your CRM. Ready-made connectors, secure access.",
  },
  {
    step: "02",
    title: "Compose",
    description: "Design flows, prompts and tools. Test with evals, add guardrails and retries for stability.",
  },
  {
    step: "03",
    title: "Launch",
    description: "Ship to production with monitoring, alerts and rollback. Measure ROI and iterate weekly.",
  },
];

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

export const testimonials = getTestimonials("en");

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
