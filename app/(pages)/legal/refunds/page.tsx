import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Refund Policy",
  description: "Conditions for refunds on services purchased from Solentra House.",
  path: "/legal/refunds",
});

export default function RefundsPage() {
  return (
    <LegalDoc title="Refund Policy" lastUpdated="2026-05-28" legalEmail={siteConfig.contact.legal}>
      <h2>1. Scope</h2>
      <p>
        This policy covers paid digital services delivered by {siteConfig.legalName} (&quot;Solentra House&quot;). It applies alongside Gumroad&apos;s refund handling for purchases made through Gumroad.
      </p>

      <h2>2. EU right of withdrawal</h2>
      <p>
        If you are a consumer based in the European Union or the United Kingdom, you have the right to withdraw from a service contract within 14 days of purchase without giving any reason, under the EU Consumer Rights Directive and the UK Consumer Contracts Regulations.
      </p>
      <p>
        This right does not apply once a service has been fully performed, provided you expressly consented to performance starting within the withdrawal period and acknowledged that you would lose the right to withdraw once the service had been fully performed.
      </p>
      <p>
        For business-to-business purchases, the right of withdrawal does not apply.
      </p>

      <h2>3. Eligibility for a refund</h2>
      <p>A refund may be granted in the following situations:</p>
      <ul>
        <li>
          You request withdrawal within 14 days of purchase and we have not yet started delivering the service.
        </li>
        <li>
          We are unable to deliver the service as scoped and cannot agree on an alternative.
        </li>
        <li>
          A duplicate or accidental purchase that has not yet been used.
        </li>
      </ul>

      <h2>4. Non-refundable situations</h2>
      <ul>
        <li>
          The service has already been fully delivered (kick-off completed, audit completed, final report delivered, or the relevant equivalent for that service).
        </li>
        <li>
          You requested and received custom deliverables outside the standard scope.
        </li>
        <li>
          The 14-day withdrawal window has passed and the service is in progress.
        </li>
      </ul>

      <h2>5. Partial refunds</h2>
      <p>
        If a service is partially delivered when you request to end the engagement, we may issue a partial refund proportional to the work not yet completed. The exact amount is calculated based on the deliverables outstanding at the date of your request.
      </p>

      <h2>6. How to request a refund</h2>
      <p>
        Email {siteConfig.contact.billing} with your order number, the email used at purchase, the service purchased, and a short description of the reason. We respond within 5 working days with the decision and the next steps.
      </p>

      <h2>7. How the refund is processed</h2>
      <p>
        Approved refunds are issued through the original payment method used at purchase, via Gumroad. Gumroad processes the actual refund and the timing depends on your bank or card issuer. We do not charge an administrative fee.
      </p>

      <h2>8. Custom Digital Consultation</h2>
      <p>
        The Custom Digital Consultation is scoped after a free 30-minute discovery call. If we agree on a paid engagement following the call, refund conditions are defined in the written proposal we send before any invoice is issued.
      </p>

      <h2>9. Relationship with Gumroad</h2>
      <p>
        Gumroad, Inc. is the merchant of record for fixed-price service purchases. Where Gumroad&apos;s own refund handling differs from this policy, the policy that is more favourable to you applies. You may also raise a refund request directly with Gumroad according to their published procedure.
      </p>

      <h2>10. Contact</h2>
      <p>
        Refund requests: {siteConfig.contact.billing}. General legal questions: {siteConfig.contact.legal}.
      </p>
    </LegalDoc>
  );
}
