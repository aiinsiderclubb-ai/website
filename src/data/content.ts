import type { Lang } from "@/i18n/translations";

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
  { value: "6,079+", labelKey: "specialists" as const },
  { value: "340%", labelKey: "roi" as const },
  { value: "150+", labelKey: "partners" as const },
];

export const rotatingWords: Record<Lang, string[]> = {
  en: ["AI Automation", "ChatBots", "Voice Agents", "Business Growth"],
  ru: ["AI Автоматизацию", "ЧатБоты", "Голосовых Агентов", "Рост Бизнеса"],
  uk: ["AI Автоматизацію", "ЧатБоти", "Голосових Агентів", "Зростання Бізнесу"],
};

export const howItWorksChips = ["n8n", "Vapi.ai", "Google Sheets", "HubSpot"];

export const getHowItWorks = (lang: Lang) => {
  const data = {
    en: [
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
    ],
    ru: [
      {
        step: "01",
        title: "Подключение",
        description: "Связываешь инструменты — n8n, Vapi, GSheets и CRM. Готовые коннекторы, безопасный доступ.",
      },
      {
        step: "02",
        title: "Создание",
        description: "Проектируешь потоки, промпты и инструменты. Тестируешь, добавляешь защиту и повторные попытки.",
      },
      {
        step: "03",
        title: "Запуск",
        description: "Деплоишь с мониторингом, алертами и откатом. Измеряешь ROI и итерируешь еженедельно.",
      },
    ],
    uk: [
      {
        step: "01",
        title: "Підключення",
        description: "З'єднуєш інструменти — n8n, Vapi, GSheets і CRM. Готові конектори, безпечний доступ.",
      },
      {
        step: "02",
        title: "Створення",
        description: "Проєктуєш потоки, промпти та інструменти. Тестуєш, додаєш захист і повторні спроби.",
      },
      {
        step: "03",
        title: "Запуск",
        description: "Деплоїш з моніторингом, алертами та відкатом. Вимірюєш ROI і ітеруєш щотижня.",
      },
    ],
  };
  return data[lang];
};

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
    ],
    ru: [
      {
        name: "Michael Chen",
        role: "Старший AI-инженер, Google",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        metric: "+180%",
        metricLabel: "Рост дохода",
        quote:
          "Стратегии автоматизации AI Insider помогли мне выстроить системы, которые теперь генерируют пассивный доход пока я сплю. Настоящий прорыв.",
        featured: true,
      },
      {
        name: "Alex Rodriguez",
        role: "Основатель AI-стартапа",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
        metric: "$50k+",
        metricLabel: "Годовой доход",
        quote:
          "Запустил первое AI-агентство за 18 месяцев, используя знания отсюда. Это сообщество невероятно ценно.",
      },
      {
        name: "Emma Williams",
        role: "Креативный AI-директор, Adobe",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        metric: "40k+",
        metricLabel: "Пользователей охвачено",
        quote:
          "Руковожу AI-революцией в дизайне Adobe, которая питает творчество миллионов людей по всему миру.",
      },
    ],
    uk: [
      {
        name: "Michael Chen",
        role: "Старший AI-інженер, Google",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        metric: "+180%",
        metricLabel: "Зростання доходу",
        quote:
          "Стратегії автоматизації AI Insider допомогли мені побудувати системи, що тепер генерують пасивний дохід поки я сплю. Справжній прорив.",
        featured: true,
      },
      {
        name: "Alex Rodriguez",
        role: "Засновник AI-стартапу",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
        metric: "$50k+",
        metricLabel: "Річний дохід",
        quote:
          "Запустив перше AI-агентство за 18 місяців, використовуючи знання звідси. Ця спільнота неймовірно цінна.",
      },
      {
        name: "Emma Williams",
        role: "Креативний AI-директор, Adobe",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        metric: "40k+",
        metricLabel: "Користувачів охоплено",
        quote:
          "Керую AI-революцією в дизайні Adobe, що надихає творчість мільйонів людей у всьому світі.",
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
