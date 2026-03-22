"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Lang, translations } from "@/i18n/translations";

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function I18nProvider({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLocale);
  const router = useRouter();
  const pathname = usePathname();

  const setLang = (l: Lang) => {
    // Save to cookie for middleware detection
    document.cookie = `lang=${l}; path=/; max-age=31536000; SameSite=Lax`;
    setLangState(l);
    // Navigate to same path with new locale prefix
    const pathWithoutLocale = pathname.replace(/^\/(en|ru|uk)/, "") || "/";
    router.push(`/${l}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`);
  };

  return (
    <I18nContext.Provider
      value={{ lang, setLang, t: translations[lang] as typeof translations.en }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
