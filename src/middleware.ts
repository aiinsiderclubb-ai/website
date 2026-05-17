import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "ru", "uk"] as const;
type Locale = (typeof LOCALES)[number];
const DEFAULT_LOCALE: Locale = "en";

function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

function detectLocale(request: NextRequest): Locale {
  const cookieLang = request.cookies.get("lang")?.value;
  if (isLocale(cookieLang)) return cookieLang;

  const acceptLang = (request.headers.get("accept-language") || "").toLowerCase();
  if (acceptLang.includes("uk") || acceptLang.includes("ua")) return "uk";
  if (acceptLang.includes("ru")) return "ru";
  return DEFAULT_LOCALE;
}

function shouldBypass(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.startsWith("/opengraph-image")
  );
}

function hasLocalePrefix(pathname: string): boolean {
  return LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function middleware(request: NextRequest) {
  try {
    const { pathname, search } = request.nextUrl;

    if (shouldBypass(pathname) || hasLocalePrefix(pathname)) {
      return NextResponse.next();
    }

    const locale = detectLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    url.search = search;

    return NextResponse.redirect(url, 308);
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon\\.ico|.*\\..*).*)"],
};
