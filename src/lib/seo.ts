import type { Metadata } from "next";
import type { Locale } from "./types";
import { siteSettings } from "./site-data";

/**
 * RFC 2606 reserved domain — guaranteed not to resolve to a real site.
 * Swap for the real domain (via NEXT_PUBLIC_SITE_URL) at the actual cobaltomx.com cutover.
 */
const PLACEHOLDER_SITE_URL = "https://cobalto-demo.example";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || PLACEHOLDER_SITE_URL;

/**
 * This is a pitch demo (see PLAN.md), not Cobalto's live site. Keep it out of search
 * results until they approve the project and it moves to their real domain — then flip
 * this on via NEXT_PUBLIC_SITE_INDEXABLE=true (build-time env var, no code change needed).
 */
export const isSitePublic = process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true";

export const robotsMetadata: Metadata["robots"] = isSitePublic
  ? { index: true, follow: true }
  : { index: false, follow: false };

const ogLocale: Record<Locale, string> = { es: "es_MX", en: "en_US" };

export function pageMetadata({
  locale,
  paths,
  title,
  description,
  image,
}: {
  locale: Locale;
  /** Equivalent URL path per locale, for canonical + hreflang alternates. */
  paths: Record<Locale, string>;
  title: string;
  description: string;
  image?: string | null;
}): Metadata {
  const canonical = paths[locale];
  const images = image ? [{ url: image }] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        es: paths.es,
        en: paths.en,
        "x-default": paths.es,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteSettings.companyName,
      locale: ogLocale[locale],
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export function localBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteUrl}/#business`,
    name: siteSettings.companyName,
    description: siteSettings.aboutText[locale],
    url: locale === "es" ? siteUrl : `${siteUrl}/en`,
    telephone: siteSettings.phone,
    email: siteSettings.email,
    image: `${siteUrl}/cobalto-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSettings.address,
      addressLocality: "Mérida",
      addressRegion: "Yucatán",
      addressCountry: "MX",
    },
    areaServed: "Yucatán, México",
    sameAs: [siteSettings.instagramUrl, siteSettings.facebookUrl],
  };
}
