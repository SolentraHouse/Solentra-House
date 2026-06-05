import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Solentra House collects, uses, stores, and protects personal data under UK and EU GDPR.",
  path: "/legal/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDoc title="Privacy Policy" lastUpdated="2026-05-28" legalEmail={siteConfig.contact.legal}>
      <h2>1. Who we are</h2>
      <p>
        {siteConfig.legalName} (&quot;Solentra House&quot;, &quot;we&quot;, &quot;us&quot;) is the data controller for personal data processed
        through this website and during client engagements. Registered office:{" "}
        {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}{" "}
        {siteConfig.address.postcode}, {siteConfig.address.country}. Registration number:{" "}
        {siteConfig.registration.number}. Contact: {siteConfig.contact.legal}. A Data Protection Officer is not appointed because our processing does not meet the thresholds of UK GDPR Articles 37(1) or EU GDPR Article 37(1).
      </p>

      <h2>2. What data we collect</h2>
      <p>We collect the following categories of personal data:</p>
      <ul>
        <li>
          <strong>Identification and contact data</strong> you provide when submitting the contact form, booking modal, or service request form: name, email, company (optional), message content.
        </li>
        <li>
          <strong>Account data</strong> when you register: name, email, hashed password, account creation timestamp.
        </li>
        <li>
          <strong>Purchase data</strong> received from Gumroad after a completed transaction: order number, product purchased, price, sale timestamp, your billing email.
        </li>
        <li>
          <strong>Analytics data</strong>, only if you consent: anonymised page views, session interactions, device and browser type, country (Google Analytics 4 and Microsoft Clarity).
        </li>
        <li>
          <strong>Technical data</strong> needed to serve the site: IP address (for security and captcha verification), and strictly necessary cookies.
        </li>
      </ul>
      <p>We do not collect special category data (health, religious belief, biometric data, and similar).</p>

      <h2>3. Why we collect it</h2>
      <ul>
        <li>
          To respond to enquiries and deliver requested services (legal basis: contract performance).
        </li>
        <li>
          To create and manage your account (legal basis: contract performance).
        </li>
        <li>
          To process payments and keep accounting records (legal basis: contract performance, and legal obligation for accounting records).
        </li>
        <li>
          To send transactional emails (welcome, password reset, purchase confirmations) (legal basis: contract performance).
        </li>
        <li>
          To improve the site through analytics (legal basis: consent).
        </li>
        <li>
          To protect the site from abuse via captcha and rate limiting (legal basis: legitimate interest).
        </li>
      </ul>

      <h2>4. How long we keep it</h2>
      <ul>
        <li>Contact form submissions: 24 months from receipt.</li>
        <li>Account data: for the lifetime of the account, plus 30 days after deletion request.</li>
        <li>Purchase and accounting records: 6 years (UK statutory retention).</li>
        <li>Analytics data: 14 months in Google Analytics 4 standard retention.</li>
        <li>Server logs containing IP addresses: 30 days.</li>
      </ul>

      <h2>5. Who we share it with</h2>
      <p>Personal data is shared with the following processors:</p>
      <ul>
        <li>
          <strong>Resend Inc.</strong> for transactional email delivery (contact form, account emails).
        </li>
        <li>
          <strong>Cloudflare, Inc.</strong> for captcha verification (Turnstile) and content delivery.
        </li>
        <li>
          <strong>Gumroad, Inc.</strong> for payment processing on service purchases. Gumroad acts as the merchant of record and is an independent controller for payment processing.
        </li>
        <li>
          <strong>Google Ireland Limited</strong> for Google Analytics 4 (only with consent).
        </li>
        <li>
          <strong>Microsoft Ireland Operations Limited</strong> for Microsoft Clarity (only with consent).
        </li>
        <li>
          <strong>Vercel Inc.</strong> for hosting and serving the site.
        </li>
      </ul>

      <h2>6. International transfers</h2>
      <p>
        Some of our processors (Resend, Gumroad, Vercel, Microsoft Clarity) are based in the United States. Where personal data is transferred outside the United Kingdom or the European Economic Area, we rely on the UK International Data Transfer Agreement, the EU Standard Contractual Clauses, or another lawful transfer mechanism. You can request a copy of the relevant safeguards by emailing {siteConfig.contact.legal}.
      </p>

      <h2>7. Your rights</h2>
      <p>Under UK GDPR and EU GDPR you have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Rectify inaccurate or incomplete personal data.</li>
        <li>Request erasure of personal data (subject to legal retention requirements).</li>
        <li>Restrict our processing in certain circumstances.</li>
        <li>Receive a portable copy of your data.</li>
        <li>Object to processing carried out on the basis of legitimate interest.</li>
        <li>Withdraw consent at any time where processing is based on consent.</li>
        <li>Lodge a complaint with the {siteConfig.legal.supervisoryAuthority} (<a href={siteConfig.legal.supervisoryAuthorityUrl}>{siteConfig.legal.supervisoryAuthorityUrl}</a>).</li>
      </ul>

      <h2>8. How to exercise your rights</h2>
      <p>
        Email {siteConfig.contact.legal} with the request. We respond within 30 days. We may ask for proof of identity before acting on the request to protect your data.
      </p>

      <h2>9. Updates to this policy</h2>
      <p>
        We update this policy when our processing changes. Material changes are notified to account holders by email at least 14 days before they take effect. The current version is identified by the &quot;Last updated&quot; date at the top of this page.
      </p>
    </LegalDoc>
  );
}
