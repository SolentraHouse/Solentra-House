import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Solentra House collects, uses, stores, secures, and protects personal data under UK and EU GDPR.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      lastUpdated="2026-06-25"
      legalEmail={siteConfig.contact.legal}
    >
      <h2>1. Controller and contact</h2>
      <p>
        {siteConfig.legalName} (&quot;Solentra House&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is the data controller for personal data processed through {siteConfig.url} and during client engagements.
      </p>
      <ul>
        <li>
          <strong>Company number:</strong> {siteConfig.registration.number} ({siteConfig.registration.jurisdiction})
        </li>
        <li>
          <strong>Registered office:</strong> {siteConfig.address.line1},{" "}
          {siteConfig.address.line2}, {siteConfig.address.city}{" "}
          {siteConfig.address.postcode}, {siteConfig.address.country}
        </li>
        <li>
          <strong>Privacy contact:</strong> {siteConfig.contact.legal}
        </li>
      </ul>
      <p>
        A Data Protection Officer is not appointed because our processing does not meet the thresholds of UK GDPR Article 37(1) or EU GDPR Article 37(1). The {siteConfig.contact.legal} mailbox is monitored for all privacy matters.
      </p>

      <h2>2. Categories of personal data we collect</h2>
      <ul>
        <li>
          <strong>Identification and contact data</strong> you submit through the contact form, registration form, or service request form: full name, email address, phone number, company name (optional), and message content.
        </li>
        <li>
          <strong>Account data</strong> created when you register: name, email, phone, securely hashed password (we never see the plain text), account creation timestamp.
        </li>
        <li>
          <strong>Purchase data</strong> received from Gumroad after a completed transaction: order number, product purchased, price paid, sale timestamp, and the email address used at checkout.
        </li>
        <li>
          <strong>Communication and engagement data</strong>: records of emails, briefs, deliverables, and meeting notes created during the engagement.
        </li>
        <li>
          <strong>Analytics data</strong> (only with consent): aggregated page views, session interactions, device and browser type, country derived from IP, collected by Google Analytics 4 and Microsoft Clarity with IP anonymisation.
        </li>
        <li>
          <strong>Technical data</strong> required to serve the site: IP address (for security and captcha verification) and strictly necessary cookies.
        </li>
      </ul>
      <p>
        We do not knowingly collect special category data (health, religious belief, biometric data, sexual orientation) or data about children under the age of 18.
      </p>

      <h2>3. Lawful bases and purposes</h2>
      <ul>
        <li>
          <strong>Performance of a contract</strong> (UK/EU GDPR Article 6(1)(b)): to respond to enquiries, deliver services, manage your account, process payments, send transactional emails (welcome, password reset, purchase confirmations).
        </li>
        <li>
          <strong>Legal obligation</strong> (Article 6(1)(c)): to keep accounting and tax records, to respond to lawful requests from authorities, to comply with sanctions screening.
        </li>
        <li>
          <strong>Consent</strong> (Article 6(1)(a)): to load analytics scripts, to send any optional newsletter.
        </li>
        <li>
          <strong>Legitimate interest</strong> (Article 6(1)(f)): to protect the site from abuse via captcha, rate limiting, and basic server logs; to keep records needed to defend or bring legal claims. We have weighed these interests against your rights and freedoms.
        </li>
      </ul>

      <h2>4. Retention periods</h2>
      <ul>
        <li>Contact form submissions: 24 months from receipt.</li>
        <li>Account data: for the lifetime of the account, plus 30 days after a verified deletion request.</li>
        <li>Purchase, invoicing, and accounting records: 6 years from the end of the financial year (UK statutory retention).</li>
        <li>Engagement deliverables and notes: 6 years from the end of the engagement.</li>
        <li>Analytics data: 14 months in Google Analytics 4 standard retention.</li>
        <li>Server logs containing IP addresses: 30 days.</li>
        <li>Marketing consent records (if any): until consent is withdrawn plus 3 years.</li>
      </ul>

      <h2>5. Processors and recipients</h2>
      <p>We share personal data with the following processors, each bound by a data processing agreement:</p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> (United States) - hosting and content delivery for the site.
        </li>
        <li>
          <strong>Supabase, Inc.</strong> (United States, EU hosting region) - authentication and database for account and engagement records.
        </li>
        <li>
          <strong>Resend Inc.</strong> (United States) - transactional email delivery (contact form, welcome, password reset, purchase confirmations).
        </li>
        <li>
          <strong>Cloudflare, Inc.</strong> (United States, edge in EU) - captcha verification (Turnstile), DNS, and DDoS protection.
        </li>
        <li>
          <strong>Gumroad, Inc.</strong> (United States) - payment processing. Gumroad is an independent controller for the card and billing data it collects at checkout.
        </li>
        <li>
          <strong>Google Ireland Limited</strong> - Google Analytics 4 (only with consent).
        </li>
        <li>
          <strong>Microsoft Ireland Operations Limited</strong> - Microsoft Clarity (only with consent).
        </li>
      </ul>
      <p>
        We do not sell personal data and do not share it with marketing or advertising partners.
      </p>

      <h2>6. International transfers</h2>
      <p>
        Some of our processors are established in the United States. Where personal data is transferred outside the United Kingdom or the European Economic Area, we rely on one or more of the following safeguards as applicable to the destination:
      </p>
      <ul>
        <li>The UK International Data Transfer Agreement (IDTA).</li>
        <li>The UK Addendum to the EU Standard Contractual Clauses.</li>
        <li>The European Commission Standard Contractual Clauses (2021/914).</li>
        <li>The EU-US Data Privacy Framework, where the processor is certified.</li>
      </ul>
      <p>
        You can request a copy of the relevant safeguards by emailing {siteConfig.contact.legal}.
      </p>

      <h2>7. Security measures</h2>
      <p>
        We apply organisational and technical measures appropriate to the risk, including:
      </p>
      <ul>
        <li>TLS 1.2 or higher for all data in transit between your browser, our site, and our processors.</li>
        <li>Encryption at rest for the account and engagement database (managed by Supabase under their AWS-region infrastructure).</li>
        <li>Row-Level Security policies that restrict each authenticated user to their own records.</li>
        <li>
          Authentication is provided by Supabase. Passwords are hashed using bcrypt with a per-user salt by Supabase&apos;s authentication service; plain-text passwords are never accessible to Solentra House.
        </li>
        <li>Card data is never stored or processed by us. All payment card data is handled by Gumroad (PCI DSS Level 1) or by the receiving bank for SEPA / wire-transfer invoices.</li>
        <li>Principle of least privilege for staff and contractor access, reviewed periodically.</li>
        <li>Captcha and rate limiting on public forms to deter automated abuse.</li>
        <li>Backups and disaster recovery handled by our hosting and database processors under their own controls.</li>
      </ul>

      <h2>8. Personal data breach</h2>
      <p>
        Where a personal data breach is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of it, as required by Article 33 UK/EU GDPR. Where the risk is high, we will also notify affected data subjects without undue delay.
      </p>

      <h2>9. Automated decision-making and profiling</h2>
      <p>
        We do not subject personal data to any automated decision-making, including profiling, that produces legal effects concerning you or similarly significantly affects you.
      </p>

      <h2>10. Your rights</h2>
      <p>Subject to applicable conditions you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Rectify inaccurate or incomplete personal data.</li>
        <li>Request erasure of personal data, subject to legal retention requirements.</li>
        <li>Restrict our processing in defined circumstances.</li>
        <li>Receive a portable copy of your data in a structured, commonly used, machine-readable format.</li>
        <li>Object to processing carried out on the basis of legitimate interest or for direct marketing.</li>
        <li>Withdraw consent at any time where processing is based on consent, without affecting the lawfulness of processing carried out before withdrawal.</li>
        <li>
          Lodge a complaint with the {siteConfig.legal.supervisoryAuthority} (
          <a href={siteConfig.legal.supervisoryAuthorityUrl} rel="noopener noreferrer" target="_blank">
            {siteConfig.legal.supervisoryAuthorityUrl}
          </a>
          ) if you are in the United Kingdom, or with your national supervisory authority if you are in the EEA.
        </li>
      </ul>

      <h2>11. How to exercise your rights</h2>
      <p>
        Email {siteConfig.contact.legal} with a clear description of your request and the email address you used with us. We respond within 30 calendar days. For complex requests we may extend this by up to a further 60 days and will tell you within the first 30 days if we do. We may ask for proof of identity before acting on the request, strictly to protect your data.
      </p>

      <h2>12. Cookies</h2>
      <p>
        For the categories of cookies we use, their purposes, durations, and how to control them, see the{" "}
        <a href="/legal/cookies">Cookie Policy</a>.
      </p>

      <h2>13. Changes to this policy</h2>
      <p>
        We update this policy when our processing changes. Material changes are notified to account holders by email at least 14 days before they take effect. The current version is identified by the &quot;Last updated&quot; date at the top of this page.
      </p>
    </LegalDoc>
  );
}
