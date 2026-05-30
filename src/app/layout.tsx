import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@landing/context/i18n-context";
import { ThemeProvider } from "@landing/context/theme-context";
import SiteBackground from "@landing/components/SiteBackground";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insiderai.it.com"),
  title: "AI Insider — AI Automation Education Platform",
  description:
    "Join 6,000+ entrepreneurs building the future with AI automation. Courses, community and B2B AI solutions — chatbots, voice agents and workflow automation.",
  applicationName: "AI Insider",
  openGraph: {
    type: "website",
    siteName: "AI Insider",
    locale: "en_US",
    url: "https://insiderai.it.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Insider — AI Automation Education Platform",
    description:
      "Courses, community and B2B AI solutions — chatbots, voice agents and workflow automation.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${syne.variable}`}>
      <head>
        <meta name="google-site-verification" content="FssjOblx7nbHTbP51suqX3HfaMfuP20-RqLJMYnw6sc" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
      </head>
      <body className="font-body antialiased relative" suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider>
            <SiteBackground />
            <div className="relative z-10">{children}</div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
