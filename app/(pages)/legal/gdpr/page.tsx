import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "GDPR Policy",
  description:
    "Your rights under UK and EU GDPR, the lawful bases on which Solentra House processes personal data, and how to exercise them.",
  path: "/legal/gdpr",
});

export default function GdprPage() {
  return (
    <LegalDoc
      title="GDPR Policy"
      lastUpdated="2026-06-25"
      legalEmail={siteConfig.contact.legal}
    >
      <p>
        {siteConfig.legalName} (&quot;Solentra House&quot;) processes personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and Regulation (EU) 2016/679 (EU GDPR). This page summarises our compliance position and how you can exercise your rights. For the full description of what data we collect, why, how long we keep it, and which processors are involved, see the{" "}
        <a href="/legal/privacy">Privacy Policy</a>.
      </p>

      <h2>1. Controller</h2>
      <p>
        {siteConfig.legalName}, company number {siteConfig.registration.number} ({siteConfig.registration.jurisdiction}), registered office {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.postcode}, {siteConfig.address.country}. Privacy contact: {siteConfig.contact.legal}.
      </p>

      <h2>2. Lawful bases at a glance</h2>
      <table className="text-xs mt-3 border border-white/10 rounded-xl overflow-hidden">
        <thead className="bg-white/5 text-left">
          <tr>
            <th className="px-3 py-2 font-semibold">Processing activity</th>
            <th className="px-3 py-2 font-semibold">Lawful basis</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2">Responding to enquiries and delivering services</td>
            <td className="px-3 py-2">Contract (Art. 6(1)(b))</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2">Account creation and management</td>
            <td className="px-3 py-2">Contract (Art. 6(1)(b))</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2">Payment processing and accounting records</td>
            <td className="px-3 py-2">Contract + Legal obligation (Art. 6(1)(b), (c))</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2">Transactional email (welcome, password reset, receipts)</td>
            <td className="px-3 py-2">Contract (Art. 6(1)(b))</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2">Analytics and product improvement</td>
            <td className="px-3 py-2">Consent (Art. 6(1)(a))</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2">Captcha, rate limiting, security logs</td>
            <td className="px-3 py-2">Legitimate interest (Art. 6(1)(f))</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2">Sanctions and AML screening</td>
            <td className="px-3 py-2">Legal obligation (Art. 6(1)(c))</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Your rights</h2>
      <ul>
        <li>The right of access to your personal data.</li>
        <li>The right to rectification of inaccurate or incomplete data.</li>
        <li>The right to erasure, subject to statutory retention.</li>
        <li>The right to restriction of processing in defined circumstances.</li>
        <li>The right to data portability in a structured, machine-readable format.</li>
        <li>The right to object to processing based on legitimate interest or for direct marketing.</li>
        <li>The right to withdraw consent at any time where processing is based on consent.</li>
        <li>The right not to be subject to a decision based solely on automated processing that produces legal effects (we do not carry out such processing).</li>
      </ul>

      <h2>4. How to submit a request</h2>
      <p>
        Email {siteConfig.contact.legal} with a description of your request and the email address you used with us. We respond within 30 calendar days. We may extend by up to a further 60 days for complex requests and will tell you within the first 30 days if we do. We may ask for proof of identity before acting on the request, strictly to protect your data.
      </p>

      <h2>5. Personal data breach</h2>
      <p>
        Where a breach is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority within 72 hours of becoming aware of it (Art. 33). Where the risk is high, we will also notify affected data subjects without undue delay (Art. 34).
      </p>

      <h2>6. International transfers</h2>
      <p>
        Where personal data is transferred outside the United Kingdom or the European Economic Area we rely on the UK International Data Transfer Agreement, the UK Addendum to the EU Standard Contractual Clauses, the European Commission Standard Contractual Clauses (2021/914), or the EU-US Data Privacy Framework where the recipient is certified. The list of our processors and their locations is in the Privacy Policy.
      </p>

      <h2>7. Supervisory authorities</h2>
      <p>
        If you are based in the United Kingdom, you may lodge a complaint with the{" "}
        {siteConfig.legal.supervisoryAuthority} at{" "}
        <a href={siteConfig.legal.supervisoryAuthorityUrl} rel="noopener noreferrer" target="_blank">
          {siteConfig.legal.supervisoryAuthorityUrl}
        </a>
        .
      </p>
      <p>
        If you are based in the European Economic Area, you may lodge a complaint with the supervisory authority in your country of residence. National authorities are listed by the European Data Protection Board at{" "}
        <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" rel="noopener noreferrer" target="_blank">
          edpb.europa.eu/about-edpb/about-edpb/members_en
        </a>
        .
      </p>

      <h2>8. Further information</h2>
      <p>
        Full processing detail, retention periods, processor list, and security measures are in the{" "}
        <a href="/legal/privacy">Privacy Policy</a>. Cookie-related processing is described in the{" "}
        <a href="/legal/cookies">Cookie Policy</a>.
      </p>
    </LegalDoc>
  );
}
