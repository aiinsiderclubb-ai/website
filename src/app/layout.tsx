import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/context/i18n-context";
import { ThemeProvider } from "@/context/theme-context";
import { JsonLd } from "@/components/JsonLd";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import RouteProgress from "@/components/RouteProgress";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Insider — AI Automation Education Platform",
    template: "%s | AI Insider",
  },
  description:
    "Join 6,000+ entrepreneurs mastering AI automation. Practical courses on ChatBots, Voice Agents, n8n workflows and business automation. Build real AI skills with industry experts.",
  keywords: [
    "AI automation",
    "AI courses",
    "chatbot development",
    "voice agents",
    "n8n workflows",
    "business automation",
    "artificial intelligence education",
    "AI tools for business",
    "machine learning courses",
    "AI community",
    "Vapi AI",
    "ChatGPT courses",
    "AI entrepreneur",
  ],
  authors: [{ name: "AI Insider" }],
  creator: "AI Insider",
  publisher: "AI Insider",
  metadataBase: new URL("https://insiderai.it.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "ru": "/",
      "uk": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://insiderai.it.com",
    siteName: "AI Insider",
    title: "AI Insider — AI Automation Education Platform",
    description:
      "Join 6,000+ entrepreneurs mastering AI automation. Practical courses on ChatBots, Voice Agents and n8n workflows.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Insider — AI Automation Education Platform",
    description:
      "Join 6,000+ entrepreneurs mastering AI automation. Practical courses on ChatBots, Voice Agents and n8n workflows.",
    creator: "@aiinsider",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Insider",
  url: "https://insiderai.it.com",
  logo: "https://insiderai.it.com/logo.png",
  description:
    "AI automation education platform — practical courses on ChatBots, Voice Agents, n8n workflows and business automation.",
  sameAs: [
    "https://t.me/+qjwWJz7aLR1hMDQ0",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: "https://insiderai.it.com/b2b",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Insider",
  url: "https://insiderai.it.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://insiderai.it.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head />
      <body className="font-body antialiased">
        <RouteProgress />
        <GoogleAnalytics />
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <ThemeProvider>
          <I18nProvider>
            {children}
            <CookieBanner />
            <MobileStickyCTA />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
