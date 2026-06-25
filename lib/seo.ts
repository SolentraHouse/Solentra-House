import type { Metadata } from "next";
import { siteConfig } from "./site";

export interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function pageMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: PageMetaOptions): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationSchema() {
  const sameAs = [siteConfig.social.twitter].filter(
    (v): v is string => typeof v === "string" && v.length > 0,
  );
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      postalCode: siteConfig.address.postcode,
      addressCountry: "GB",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contact.support,
      telephone: siteConfig.contact.phone,
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}
