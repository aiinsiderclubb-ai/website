import type { Metadata } from "next";
import { I18nProvider } from "@/context/i18n-context";
import { ThemeProvider } from "@/context/theme-context";
import { JsonLd } from "@/components/JsonLd";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import RouteProgress from "@/components/RouteProgress";
import LangUpdater from "@/components/LangUpdater";
import type { Lang } from "@/i18n/translations";

const BASE = "https://insiderai.it.com";

const META: Record<Lang, { title: string; description: string; locale: string }> = {
  en: {
    title: "AI Insider — AI Automation Education Platform",
    description:
      "Join 6,000+ entrepreneurs mastering AI automation. Practical courses on ChatBots, Voice Agents, n8n workflows and business automation.",
    locale: "en_US",
  },
  ru: {
    title: "AI Insider — Платформа обучения AI автоматизации",
    description:
      "Присоединяйся к 6 000+ предпринимателям, осваивающим AI автоматизацию. Практические курсы по чат-ботам, голосовым агентам, n8n воркфлоу.",
    locale: "ru_RU",
  },
  uk: {
    title: "AI Insider — Платформа навчання AI автоматизації",
    description:
      "Приєднуйся до 6 000+ підприємців, які опановують AI автоматизацію. Практичні курси з чат-ботів, голосових агентів, n8n воркфлоу.",
    locale: "uk_UA",
  },
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "uk" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = (["en", "ru", "uk"].includes(locale) ? locale : "en") as Lang;
  const m = META[lang];

  return {
    title: { default: m.title, template: `%s | AI Insider` },
    description: m.description,
    authors: [{ name: "AI Insider" }],
    creator: "AI Insider",
    publisher: "AI Insider",
    metadataBase: new URL(BASE),
    alternates: {
      canonical: `${BASE}/${lang}`,
      languages: {
        en: `${BASE}/en`,
        ru: `${BASE}/ru`,
        uk: `${BASE}/uk`,
        "x-default": `${BASE}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: `${BASE}/${lang}`,
      siteName: "AI Insider",
      title: m.title,
      description: m.description,
      locale: m.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%232563eb'/><text x='50%25' y='54%25' text-anchor='middle' dominant-baseline='middle' fill='white' font-size='48' font-weight='700' font-family='Arial'>AI</text></svg>",
    },
    verification: {
      google: "FssjOblx7nbHTbP51suqX3HfaMfuP20-RqLJMYnw6sc",
    },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Insider",
  url: BASE,
  logo: `${BASE}/logo.png`,
  description:
    "AI automation education platform — practical courses on ChatBots, Voice Agents, n8n workflows.",
  sameAs: ["https://t.me/+qjwWJz7aLR1hMDQ0"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${BASE}/en/b2b`,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Insider",
  url: BASE,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/en/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (["en", "ru", "uk"].includes(locale) ? locale : "en") as Lang;

  return (
    <ThemeProvider>
      <I18nProvider initialLocale={lang}>
        <LangUpdater locale={lang} />
        <RouteProgress />
        <GoogleAnalytics />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {children}
        <CookieBanner />
        <MobileStickyCTA />
      </I18nProvider>
    </ThemeProvider>
  );
}
