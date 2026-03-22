import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "ru", "uk"] as const;
const DEFAULT_LOCALE = "en";

function detectLocale(request: NextRequest): string {
  // 1. Cookie takes priority
  const cookieLang = request.cookies.get("lang")?.value;
  if (cookieLang && LOCALES.includes(cookieLang as never)) return cookieLang;

  // 2. Accept-Language header
  const acceptLang = request.headers.get("accept-language") || "";
  if (acceptLang.toLowerCase().includes("uk") || acceptLang.toLowerCase().includes("ua")) return "uk";
  if (acceptLang.toLowerCase().includes("ru")) return "ru";
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if already has locale prefix
  const hasLocale = LOCALES.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  // Skip system paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.startsWith("/opengraph-image")
  ) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const newUrl = new URL(
    `/${locale}${pathname === "/" ? "" : pathname}${request.nextUrl.search}`,
    request.url
  );
  return NextResponse.redirect(newUrl, { status: 308 }); // 308 = permanent redirect
}

export const config = {
  matcher: ["/((?!_next|api|favicon\\.ico|.*\\..*).*)"],
};
