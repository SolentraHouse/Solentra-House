import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms governing your use of the Solentra House website and services. UK Companies House registered.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      lastUpdated="2026-06-25"
      legalEmail={siteConfig.contact.legal}
    >
      <h2>1. About these terms</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) form a binding agreement between you and{" "}
        {siteConfig.legalName} (&quot;Solentra House&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). They govern your use of{" "}
        {siteConfig.url}, our service offerings, and any related communications. By using the site, registering an account, or purchasing a service, you confirm that you have read, understood, and accepted these Terms.
      </p>

      <h2>2. Company information</h2>
      <ul>
        <li>
          <strong>Legal name:</strong> {siteConfig.legalName}
        </li>
        <li>
          <strong>Company number:</strong> {siteConfig.registration.number}
        </li>
        <li>
          <strong>Jurisdiction of incorporation:</strong>{" "}
          {siteConfig.registration.jurisdiction}
        </li>
        <li>
          <strong>Registered office:</strong> {siteConfig.address.line1},{" "}
          {siteConfig.address.line2}, {siteConfig.address.city}{" "}
          {siteConfig.address.postcode}, {siteConfig.address.country}
        </li>
        <li>
          <strong>General contact:</strong> {siteConfig.contact.support}
        </li>
        <li>
          <strong>Legal and compliance:</strong> {siteConfig.contact.legal}
        </li>
      </ul>

      <h2>3. Definitions</h2>
      <ul>
        <li>
          <strong>Service</strong> means any package, deliverable, or consultation offered on the site or scoped under a written proposal.
        </li>
        <li>
          <strong>Client</strong> means the legal or natural person purchasing a Service.
        </li>
        <li>
          <strong>Deliverable</strong> means any audit report, roadmap, framework, plan, dashboard, asset, or document produced by us under an engagement.
        </li>
        <li>
          <strong>Engagement</strong> means the period from the kick-off session until the final Deliverable has been issued and accepted.
        </li>
      </ul>

      <h2>4. Eligibility and account registration</h2>
      <p>
        The site is intended for users aged 18 or over, acting on behalf of a business, founder, or marketing team. By registering an account you confirm that the information you provide is accurate, that you are authorised to bind the entity you represent, and that your use complies with applicable law in your jurisdiction.
      </p>
      <p>
        You are responsible for keeping your account credentials confidential. Notify us at {siteConfig.contact.support} if you suspect unauthorised access.
      </p>

      <h2>5. Services</h2>
      <p>
        Solentra House provides digital growth and communications services for European startups, e-commerce brands, and small-to-medium enterprises. The current catalogue, scope of each package, delivery timeline, and price is published on the Services section of the site and forms part of these Terms when you purchase.
      </p>
      <p>
        Scope is fixed at the date of purchase. Additional work outside the published scope is scoped and quoted separately in a written change order.
      </p>

      <h2>6. Payment terms</h2>
      <ul>
        <li>
          <strong>Currency:</strong> Fixed-price packages are charged in EUR through Gumroad. Custom Digital Consultation engagements may be invoiced in EUR or GBP by SEPA / wire transfer, as set out in the written proposal.
        </li>
        <li>
          <strong>Taxes:</strong> Prices shown are exclusive of any value added tax (VAT) or equivalent indirect taxes. Where VAT becomes chargeable, it will be added at the prevailing rate and shown on the invoice or order receipt.
        </li>
        <li>
          <strong>Payment timing:</strong> Fixed-price packages are payable in full at the point of purchase through Gumroad. Custom engagements follow the milestone schedule in the proposal (typically 50% on signature, 50% on delivery, unless otherwise agreed).
        </li>
        <li>
          <strong>Merchant of record:</strong> Gumroad, Inc. acts as the merchant of record for fixed-price purchases. By completing a Gumroad checkout you also accept Gumroad&apos;s terms of service.
        </li>
        <li>
          <strong>Late payment:</strong> Invoices not paid within 30 days of the invoice date accrue statutory interest under the Late Payment of Commercial Debts (Interest) Act 1998.
        </li>
      </ul>

      <h2>7. Delivery and acceptance</h2>
      <p>
        Delivery timelines per package are published on the Services section. We start the engagement on the date of the kick-off session and aim to deliver within the timeframe stated, subject to your timely provision of access, data, brand assets, and approvals where required.
      </p>
      <p>
        Deliverables are deemed accepted seven (7) calendar days after issue unless you notify us in writing of a defect or scope deviation within that period.
      </p>

      <h2>8. Refunds and chargebacks</h2>
      <p>
        Refund conditions, the EU 14-day right of withdrawal, and the partial-refund formula are set out in our{" "}
        <a href="/legal/refunds">Refund Policy</a>. We ask that you contact{" "}
        {siteConfig.contact.billing} before initiating a chargeback with your bank or card issuer so we can resolve the matter directly and avoid the dispute fees that chargebacks incur. Initiating a chargeback for a Service that has been fully delivered may be treated as a breach of these Terms.
      </p>

      <h2>9. Customer due diligence</h2>
      <p>
        Solentra House is committed to lawful business practices and reserves the right to perform reasonable customer due diligence before, during, or after an engagement. We may request information about the entity placing the order, beneficial ownership, the source of funds, or the intended use of Deliverables. We may decline or unwind a transaction where such information is not provided, where it raises a reasonable concern, or where completion would breach applicable law.
      </p>

      <h2>10. Restricted jurisdictions and sanctions compliance</h2>
      <p>
        Services are not available, and may not be ordered or used, where doing so would breach the trade and economic sanctions of the United Kingdom, the European Union, the United States, or the United Nations. This includes (without limitation) the Russian Federation, the Republic of Belarus, the Islamic Republic of Iran, the Democratic People&apos;s Republic of Korea, the Syrian Arab Republic, the Republic of Cuba, and the regions of Crimea, Donetsk, Luhansk, Zaporizhzhia, and Kherson under occupation. You represent that you, your entity, and your beneficial owners are not subject to any applicable sanctions list and that no Deliverable will be used to benefit a sanctioned party.
      </p>

      <h2>11. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Provide false, misleading, or incomplete information at any stage.</li>
        <li>Use the site or any Deliverable to launder proceeds of crime, finance terrorism, evade tax, or commit fraud.</li>
        <li>Attempt to gain unauthorised access to the site, our systems, or other users&apos; accounts.</li>
        <li>Scrape, reverse engineer, decompile, or copy site content for republication or commercial resale.</li>
        <li>Disrupt the site through automated requests, denial-of-service attacks, or malicious code.</li>
        <li>Use Deliverables outside the entity that purchased the Engagement without our prior written consent.</li>
      </ul>

      <h2>12. Intellectual property</h2>
      <p>
        The site, its design, code, brand assets, and content are owned by{" "}
        {siteConfig.legalName} or our licensors. Subject to payment in full, we grant you a non-exclusive, non-transferable licence to use each Deliverable for the internal business purposes of the entity that purchased the Engagement, in perpetuity. We retain ownership of the underlying methodologies, frameworks, templates, and know-how used to produce the Deliverable.
      </p>

      <h2>13. Confidentiality</h2>
      <p>
        Each party will keep the other&apos;s non-public information confidential and use it only to perform the Engagement. This obligation survives termination for three (3) years. Standard exceptions apply for information that is or becomes publicly available without breach, that the receiving party developed independently, or whose disclosure is required by law or a competent regulator.
      </p>

      <h2>14. Limitation of liability</h2>
      <p>
        We provide Services with reasonable skill and care. To the maximum extent permitted by law:
      </p>
      <ul>
        <li>
          Our aggregate liability for any Engagement, whether in contract, tort (including negligence), or otherwise, is limited to the total fees paid by you for that Engagement in the twelve (12) months preceding the event giving rise to the claim.
        </li>
        <li>
          We are not liable for indirect, incidental, special, or consequential loss, loss of profit, loss of revenue, loss of business opportunity, loss of goodwill, or loss of data.
        </li>
        <li>
          Nothing in these Terms limits liability for death or personal injury caused by negligence, for fraud, or for any other liability that cannot be excluded under applicable law.
        </li>
      </ul>

      <h2>15. Indemnification</h2>
      <p>
        You will indemnify and hold harmless {siteConfig.legalName}, its officers, employees, and contractors from any third-party claim arising from your breach of these Terms, your unlawful use of a Deliverable, or the inaccuracy of information you provide.
      </p>

      <h2>16. Disclaimers</h2>
      <p>
        Solentra House does not guarantee specific commercial outcomes, conversion rates, rankings, revenue figures, or returns on investment. The site is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We may change, suspend, or discontinue any part of the site or any Service with reasonable notice, except where immediate action is needed to address a security, legal, or operational issue.
      </p>

      <h2>17. Termination</h2>
      <p>
        Either party may terminate an Engagement for material breach that is not cured within fourteen (14) days of written notice. We may suspend or terminate access to the site or your account if you breach these Terms, if a competent authority requires us to, or to protect other users or our systems. Termination does not affect rights and obligations that have already accrued, including payment of fees for work performed up to the termination date.
      </p>

      <h2>18. Force majeure</h2>
      <p>
        Neither party is liable for failure or delay in performance caused by events beyond its reasonable control, including acts of God, war, terrorism, civil unrest, government action, sanctions, natural disasters, epidemic, failure of third-party services, or interruption of utility supply. The affected party will notify the other promptly and use reasonable efforts to resume performance.
      </p>

      <h2>19. Complaints procedure</h2>
      <p>
        We aim to acknowledge any complaint within five (5) working days and provide a substantive response within thirty (30) days. To raise a complaint, email {siteConfig.contact.support} with &quot;Complaint&quot; in the subject line and include your order number (if any), a description of the issue, and the outcome you are seeking. If the matter is not resolved, you may escalate to {siteConfig.contact.legal}. For consumer disputes that remain unresolved, the EU Online Dispute Resolution platform is available at{" "}
        <a href="https://ec.europa.eu/consumers/odr" rel="noopener noreferrer" target="_blank">
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <h2>20. General provisions</h2>
      <ul>
        <li>
          <strong>Entire agreement:</strong> These Terms, the documents they reference, and the proposal or order acknowledgement for your Engagement form the entire agreement between us on the subject matter and supersede any prior discussion or representation.
        </li>
        <li>
          <strong>Assignment:</strong> You may not assign or transfer your rights or obligations without our prior written consent. We may assign these Terms to a successor entity (for example on reorganisation) on notice to you.
        </li>
        <li>
          <strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions stay in effect.
        </li>
        <li>
          <strong>Waiver:</strong> A failure or delay in enforcing a right is not a waiver of that right.
        </li>
        <li>
          <strong>Third parties:</strong> Nothing in these Terms creates a right enforceable by any person other than you and us under the Contracts (Rights of Third Parties) Act 1999.
        </li>
        <li>
          <strong>Notices:</strong> Legal notices to us must be sent to {siteConfig.contact.legal}. Notices to you are sent to the email address on your account.
        </li>
      </ul>

      <h2>21. Governing law and jurisdiction</h2>
      <p>
        These Terms are governed by the laws of {siteConfig.legal.governingLaw}. The courts of {siteConfig.legal.governingLaw} have exclusive jurisdiction over any dispute arising out of or in connection with these Terms or the Services, except that nothing prevents either party from seeking injunctive relief in any court of competent jurisdiction.
      </p>

      <h2>22. Changes to these Terms</h2>
      <p>
        We may update these Terms when our services or applicable law change. Material changes are notified to account holders by email at least fourteen (14) days before they take effect. The current version is identified by the &quot;Last updated&quot; date at the top of this page. Continued use of the site or Services after that date constitutes acceptance of the updated Terms.
      </p>
    </LegalDoc>
  );
}
