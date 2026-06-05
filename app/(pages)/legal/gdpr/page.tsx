import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "GDPR Policy",
  description: "Your rights under UK and EU GDPR and how to exercise them with Solentra House.",
  path: "/legal/gdpr",
});

export default function GdprPage() {
  return (
    <LegalDoc title="GDPR Policy" lastUpdated="2026-05-28" legalEmail={siteConfig.contact.legal}>
      <p>
        {siteConfig.legalName} processes personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the EU General Data Protection Regulation (EU GDPR).
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>The right of access to your personal data.</li>
        <li>The right to rectify inaccurate or incomplete personal data.</li>
        <li>The right to erasure of your personal data, subject to legal retention requirements.</li>
        <li>The right to restrict our processing of your personal data.</li>
        <li>The right to data portability.</li>
        <li>The right to object to processing based on legitimate interest or for direct marketing.</li>
        <li>The right to withdraw consent at any time where processing is based on consent.</li>
        <li>The right not to be subject to automated decision-making producing legal effects.</li>
      </ul>

      <h2>How to submit a request</h2>
      <p>
        Email {siteConfig.contact.legal} with a description of your request and the email address you used with us. We respond within 30 days. We may extend this by up to a further 60 days for complex requests and will tell you if we do. We may ask for proof of identity before acting on the request to protect your data.
      </p>

      <h2>Supervisory authority</h2>
      <p>
        If you are based in the United Kingdom, you have the right to lodge a complaint with the {siteConfig.legal.supervisoryAuthority} at <a href={siteConfig.legal.supervisoryAuthorityUrl}>{siteConfig.legal.supervisoryAuthorityUrl}</a>.
      </p>
      <p>
        If you are based in the European Economic Area, you have the right to lodge a complaint with the supervisory authority in your country of residence. The European Data Protection Board lists national authorities at <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en">edpb.europa.eu</a>.
      </p>

      <h2>Further information</h2>
      <p>
        For details on what data we collect, why, how long we keep it, and which processors are involved, see the <a href="/legal/privacy">Privacy Policy</a>.
      </p>
    </LegalDoc>
  );
}
