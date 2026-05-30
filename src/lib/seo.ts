import { sameAsLinks, siteConfig } from "@landing/data/content";

export const SITE_URL = siteConfig.url;

/** Build an absolute URL from a path ("/courses" -> "https://insiderai.it.com/courses"). */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type Crumb = { name: string; path: string };

/** schema.org BreadcrumbList for a page. Home is prepended automatically. */
export function breadcrumbJsonLd(crumbs: Crumb[]): Record<string, unknown> {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

/** Canonical Organization node, reused across pages and the homepage. */
export function organizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.name,
    url: SITE_URL,
    logo: absoluteUrl("/icon.svg"),
    description:
      "AI automation education platform — courses, community, B2B AI solutions and an AI content studio. Practitioner-led training in chatbots, voice agents and workflow automation.",
    foundingDate: siteConfig.foundingDate,
    founder: { "@type": "Person", name: siteConfig.founder },
    email: siteConfig.email,
    areaServed: { "@type": "GeoShape", name: "Worldwide" },
    sameAs: sameAsLinks,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      url: siteConfig.telegramManager,
      availableLanguage: ["English", "Russian", "Ukrainian"],
    },
  };
}

/** WebSite node with SearchAction (sitelinks search box eligibility). */
export function websiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: siteConfig.name,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
