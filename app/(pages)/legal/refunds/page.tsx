import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Refund Policy",
  description:
    "Conditions for refunds, the EU 14-day right of withdrawal, partial-refund calculations, and chargebacks.",
  path: "/legal/refunds",
});

export default function RefundsPage() {
  return (
    <LegalDoc
      title="Refund Policy"
      lastUpdated="2026-06-25"
      legalEmail={siteConfig.contact.legal}
    >
      <h2>1. Scope</h2>
      <p>
        This Policy covers paid digital services delivered by {siteConfig.legalName} (&quot;Solentra House&quot;, &quot;we&quot;). It applies alongside our{" "}
        <a href="/legal/terms">Terms of Service</a> and, for purchases made through Gumroad, alongside Gumroad&apos;s own refund handling. Where Gumroad&apos;s handling differs from this Policy, the option more favourable to you applies.
      </p>

      <h2>2. EU and UK right of withdrawal</h2>
      <p>
        If you are a consumer based in the European Union or the United Kingdom, you have the right to withdraw from a service contract within 14 days of purchase without giving any reason, under the EU Consumer Rights Directive (2011/83/EU) and the UK Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013.
      </p>
      <p>
        This right does not apply once a service has been fully performed, provided you expressly consented to performance starting within the 14-day withdrawal period and acknowledged that you would lose the right to withdraw once the service had been fully performed. We obtain that acknowledgement at the time of purchase.
      </p>
      <p>
        Business-to-business purchases are not covered by the consumer right of withdrawal.
      </p>

      <h2>3. Situations in which a full refund is granted</h2>
      <ul>
        <li>You request withdrawal within 14 days of purchase and we have not yet started delivery.</li>
        <li>We are unable to deliver the service as scoped and we cannot agree an alternative with you in writing.</li>
        <li>A duplicate or accidental purchase that has not yet been used.</li>
        <li>A technical fault on our side that prevents you from accessing the deliverable and that we cannot resolve within a reasonable period.</li>
      </ul>

      <h2>4. Situations in which a refund is not granted</h2>
      <ul>
        <li>The service has already been fully delivered (kick-off completed and final report or equivalent deliverable issued).</li>
        <li>You requested and received custom deliverables outside the published scope.</li>
        <li>The 14-day withdrawal window has passed and the service is in progress.</li>
        <li>The request relates to a result-based outcome (for example, the number of leads, ranking position, or revenue change) that we did not guarantee in writing.</li>
      </ul>

      <h2>5. Partial refunds</h2>
      <p>
        If a service is partially delivered when you request to end the engagement, a pro-rata refund is calculated as:
      </p>
      <p>
        <strong>refund</strong> = total fee paid - value of work completed at the date of the request.
      </p>
      <p>
        Value of work completed is assessed against the deliverables milestones listed on the service page or in the proposal. We provide a written breakdown with the refund decision.
      </p>

      <h2>6. How to request a refund</h2>
      <p>
        Email {siteConfig.contact.billing} with:
      </p>
      <ul>
        <li>Your order number or invoice reference.</li>
        <li>The email address used at purchase.</li>
        <li>The service purchased.</li>
        <li>A short description of the reason for the request.</li>
      </ul>
      <p>
        We acknowledge within 2 working days and provide a substantive decision within 5 working days.
      </p>

      <h2>7. How the refund is processed</h2>
      <p>
        Approved refunds are issued through the original payment method used at purchase:
      </p>
      <ul>
        <li>
          <strong>Gumroad purchases:</strong> the refund is processed by Gumroad, Inc. The timing of the credit on your statement depends on your bank or card issuer, typically 5-10 business days.
        </li>
        <li>
          <strong>SEPA / wire-transfer invoices:</strong> we refund by bank transfer to the originating account within 14 days of the approval decision.
        </li>
      </ul>
      <p>
        We do not charge an administrative fee for a valid refund. Currency conversion or transfer fees applied by your bank are not refundable by us.
      </p>

      <h2>8. Chargebacks</h2>
      <p>
        Please contact {siteConfig.contact.billing} before raising a chargeback with your bank or card issuer. Most disputes are resolved more quickly and at no additional cost when handled directly. Initiating a chargeback for a service that has been fully delivered may be treated as a breach of the{" "}
        <a href="/legal/terms">Terms of Service</a>; if the chargeback is upheld by your issuer despite full delivery, we reserve the right to recover the disputed amount and any related fees.
      </p>

      <h2>9. Appeals</h2>
      <p>
        If you disagree with a refund decision, you may appeal in writing to {siteConfig.contact.legal} within 14 days of receiving the decision. The appeal is reviewed by a senior staff member not involved in the original decision; we respond within 14 days of receiving the appeal.
      </p>

      <h2>10. Custom Digital Consultation</h2>
      <p>
        The Custom Digital Consultation is scoped after a free 30-minute discovery call. If we agree on a paid engagement, refund conditions specific to that engagement are defined in the written proposal we send before any invoice is issued and override the default conditions in this Policy.
      </p>

      <h2>11. Statutory rights</h2>
      <p>
        Nothing in this Policy excludes or restricts your statutory rights as a consumer, including under the UK Consumer Rights Act 2015 or the EU Consumer Rights Directive.
      </p>

      <h2>12. Contact</h2>
      <p>
        Refund requests: {siteConfig.contact.billing}. Appeals or other legal questions:{" "}
        {siteConfig.contact.legal}.
      </p>
    </LegalDoc>
  );
}
