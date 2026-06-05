import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { LogoFull } from "@/components/ui/Logo";

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "GDPR Policy", href: "/legal/gdpr" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Refund Policy", href: "/legal/refunds" },
];

const SITE_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-block text-white hover:opacity-90 transition-opacity">
              <LogoFull className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-md">
              {siteConfig.description}
            </p>
            <address className="mt-4 not-italic text-sm text-white/55 leading-relaxed">
              {siteConfig.address.line1}, {siteConfig.address.line2}
              <br />
              {siteConfig.address.city}, {siteConfig.address.postcode}
              <br />
              {siteConfig.address.country}
            </address>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40">
              Site
            </p>
            <ul className="mt-3 space-y-2">
              {SITE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40">
              Legal
            </p>
            <ul className="mt-3 space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center text-xs text-white/50">
          <div className="space-y-1">
            <p>
              &copy; {year} {siteConfig.legalName}. All rights reserved.
            </p>
            <p>
              Registered in {siteConfig.registration.jurisdiction}. Registration number:{" "}
              {siteConfig.registration.number}.
            </p>
          </div>
          <div className="space-y-1 md:text-right">
            <p>
              Support: <a className="hover:text-white" href={`mailto:${siteConfig.contact.support}`}>{siteConfig.contact.support}</a>
            </p>
            <p>
              Legal: <a className="hover:text-white" href={`mailto:${siteConfig.contact.legal}`}>{siteConfig.contact.legal}</a>
            </p>
            <p>Phone: {siteConfig.contact.phone}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
