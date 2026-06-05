export const siteConfig = {
  name: "Solentra House",
  legalName: "Solentra House",
  tagline: "Digital Growth, Mapped Clearly.",
  description:
    "Digital growth and communications agency for European startups, e-commerce, and SMEs. Audit, communications, acquisition, and campaigns in a 90-day window.",
  hero: {
    headlineLine1: "Digital Growth, Mapped Clearly.",
    headlineLine2: "From Audit to Measurable Action.",
    subtitle:
      "Solentra House helps founders, CMOs, and marketing leads at European SMEs and e-commerce brands audit their digital presence, sharpen communications, build acquisition funnels, and launch campaigns with a clear 90-day direction.",
    primaryCta: "Ask a question",
    secondaryCta: "Explore Services",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://solentrahouse.xyz",
  contact: {
    support: process.env.CONTACT_TO_EMAIL || "support@solentrahouse.xyz",
    business: "business@solentrahouse.xyz",
    legal: "legal@solentrahouse.xyz",
    billing: "billing@solentrahouse.xyz",
    phone: "+44 20 *** ****",
  },
  address: {
    line1: "71-75 Shelton Street",
    line2: "Covent Garden",
    city: "London",
    postcode: "WC2H 9JQ",
    country: "United Kingdom",
  },
  registration: {
    number: "[REGISTRATION_NUMBER - PENDING]",
    jurisdiction: "United Kingdom (England and Wales)",
  },
  legal: {
    supervisoryAuthority: "Information Commissioner's Office (ICO)",
    supervisoryAuthorityUrl: "https://ico.org.uk",
    governingLaw: "England and Wales",
    dpoEmail: null as string | null,
  },
  social: {
    twitter: null as string | null,
  },
} as const;

export type SiteConfig = typeof siteConfig;
