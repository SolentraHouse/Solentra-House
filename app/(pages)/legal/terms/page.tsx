import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms governing your use of the Solentra House website and services.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <LegalDoc title="Terms of Service" lastUpdated="2026-05-28" legalEmail={siteConfig.contact.legal}>
      <h2>1. Acceptance of terms</h2>
      <p>
        By using this website or purchasing a service from {siteConfig.legalName} (&quot;Solentra House&quot;, &quot;we&quot;), you accept these Terms of Service. If you do not accept them, do not use the site or purchase a service.
      </p>

      <h2>2. About us</h2>
      <p>
        {siteConfig.legalName} is registered at {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.postcode}, {siteConfig.address.country}. Registration number: {siteConfig.registration.number}. Contact: {siteConfig.contact.support}.
      </p>

      <h2>3. Services</h2>
      <p>
        We provide digital growth and communications services: digital strategy development, campaign coordination, communications planning, performance analysis, brand communications frameworks, customer acquisition funnel setup, digital presence audits, and full digital support programmes. The current list, scope, and pricing of each service is shown on the Services section of this site.
      </p>

      <h2>4. Purchases and payment</h2>
      <p>
        Fixed-price services are purchased through Gumroad, Inc., which acts as the merchant of record. By completing a purchase you also accept Gumroad&apos;s own terms. After purchase we contact you to schedule the kick-off session and deliver the engagement.
      </p>
      <p>
        The Custom Digital Consultation is scoped during a free discovery call and invoiced separately under a written proposal.
      </p>

      <h2>5. User obligations</h2>
      <p>You agree:</p>
      <ul>
        <li>To provide accurate information when contacting us, registering, or purchasing.</li>
        <li>Not to misuse the site, attempt to gain unauthorised access, or interfere with other users.</li>
        <li>Not to scrape, copy, or redistribute our content without permission.</li>
        <li>To use deliverables only for the business that purchased the engagement, unless we agree otherwise in writing.</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        The site, its design, code, and content are owned by {siteConfig.legalName} or our licensors. Deliverables produced during an engagement are licensed to you for use within your business once payment is complete. We retain ownership of underlying methodologies, frameworks, and templates.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        We provide services using reasonable skill and care. We are not liable for indirect or consequential loss, loss of profit, loss of business, or loss of data. Our total liability for any engagement is limited to the amount paid for that engagement. Nothing in these terms excludes or limits liability that cannot be excluded by law.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        We do not guarantee specific commercial outcomes, conversion rates, revenue figures, or rankings. The site is provided on an &quot;as is&quot; basis and we may change or suspend it without notice for maintenance, security, or commercial reasons.
      </p>

      <h2>9. Termination</h2>
      <p>
        You may end your account at any time by emailing {siteConfig.contact.support}. We may suspend or end your account if you breach these terms, if required by law, or to protect the site or other users. Termination does not affect rights that have already accrued.
      </p>

      <h2>10. Refunds</h2>
      <p>
        Refund conditions are set out in the <a href="/legal/refunds">Refund Policy</a>. They apply alongside Gumroad&apos;s own refund handling for purchases made through Gumroad.
      </p>

      <h2>11. Governing law and jurisdiction</h2>
      <p>
        These terms are governed by the laws of {siteConfig.legal.governingLaw}. Disputes are subject to the exclusive jurisdiction of the courts of {siteConfig.legal.governingLaw}.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms: {siteConfig.contact.legal}.
      </p>

      <h2>13. Changes to these terms</h2>
      <p>
        We may update these terms when our services change. Material changes are notified to account holders by email at least 14 days before they take effect. The current version is identified by the &quot;Last updated&quot; date at the top of this page.
      </p>
    </LegalDoc>
  );
}
