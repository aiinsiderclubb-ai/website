"use client";
import { useI18n } from "@/context/i18n-context";

export function useLocalePath() {
  const { lang } = useI18n();
  return (path: string) => `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
}
