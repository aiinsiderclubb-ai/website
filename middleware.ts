import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ["en", "uk"] as const;

function isAdminPath(pathname: string) {
  return (
    pathname === "/admin" ||
    pathname.startsWith("/admin/") ||
    pathname.startsWith("/api/admin")
  );
}

function hasLocalePrefix(pathname: string) {
  return SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

function shouldBypass(pathname: string) {
  return (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/icon.svg" ||
    PUBLIC_FILE.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    // Admin auth temporarily disabled in edge middleware to avoid Vercel crashes.
    // Protect /admin via Vercel deployment protection or re-enable once stable.
    if (isAdminPath(pathname) || shouldBypass(pathname) || hasLocalePrefix(pathname)) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/uk" : `/uk${pathname}`;
    return NextResponse.redirect(url, 308);
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!_next|api|favicon\\.ico|robots\\.txt|sitemap\\.xml|icon\\.svg|.*\\..*).*)"],
};
