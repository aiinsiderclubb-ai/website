import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ["en", "uk"] as const;

function isAdminPath(pathname: string) {
  return (
    pathname === "/admin" ||
    pathname.startsWith("/admin/") ||
    pathname === "/api/admin" ||
    pathname.startsWith("/api/admin/")
  );
}

function hasLocalePrefix(pathname: string) {
  return SUPPORTED_LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="AI Insider Admin"',
    },
  });
}

function forbid() {
  return new NextResponse("Admin auth is not configured", { status: 403 });
}

function decodeBasicAuth(header: string): { user: string; pass: string } | null {
  if (!header.startsWith("Basic ")) return null;

  try {
    const decoded = atob(header.slice(6));
    const idx = decoded.indexOf(":");
    if (idx < 0) return { user: decoded, pass: "" };
    return { user: decoded.slice(0, idx), pass: decoded.slice(idx + 1) };
  } catch {
    return null;
  }
}

function checkBasicAuth(request: NextRequest) {
  const user = (process.env.ADMIN_BASIC_AUTH_USER || "").trim();
  const pass = (process.env.ADMIN_BASIC_AUTH_PASSWORD || "").trim();
  if (!user || !pass) return forbid();

  const credentials = decodeBasicAuth(request.headers.get("authorization") || "");
  if (!credentials || credentials.user !== user || credentials.pass !== pass) {
    return unauthorized();
  }

  return null;
}

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl;

    if (isAdminPath(pathname)) {
      const authResult = checkBasicAuth(request);
      if (authResult) return authResult;
      return NextResponse.next();
    }

    if (
      pathname.startsWith("/api") ||
      pathname.startsWith("/_next") ||
      pathname === "/robots.txt" ||
      pathname === "/sitemap.xml" ||
      pathname === "/icon.svg" ||
      PUBLIC_FILE.test(pathname)
    ) {
      return NextResponse.next();
    }

    if (hasLocalePrefix(pathname)) {
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
