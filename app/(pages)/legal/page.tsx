import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Legal",
  description: "Privacy Policy, Cookie Policy, GDPR Policy, Terms of Service, and Refund Policy.",
  path: "/legal",
});

const DOCS = [
  {
    title: "Terms of Service",
    href: "/legal/terms",
    description:
      "Contract between you and Solentra House: services, payment terms, refunds, sanctions, liability, governing law.",
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
    description:
      "Categories of personal data, lawful bases, processors, retention periods, security measures, and your rights.",
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookies",
    description:
      "Cookies and similar technologies, their purpose and duration, and how to change your consent at any time.",
  },
  {
    title: "GDPR Policy",
    href: "/legal/gdpr",
    description:
      "Your rights under UK and EU GDPR, our lawful bases at a glance, and how to file a request or complaint.",
  },
  {
    title: "Refund Policy",
    href: "/legal/refunds",
    description:
      "Conditions for full and partial refunds, the EU 14-day withdrawal right, chargebacks, and the appeals process.",
  },
];

export default function LegalIndexPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-rose-300">
          Legal
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Legal documentation
        </h1>
        <p className="mt-3 text-sm text-white/55">
          The five documents below govern your use of this site and our services. They are written in plain English and updated whenever our processing or service offering changes.
        </p>
      </header>

      <ul className="space-y-3">
        {DOCS.map((doc) => (
          <li key={doc.href}>
            <Link
              href={doc.href}
              className="group flex items-center justify-between gap-4 bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 md:p-6 hover:border-white/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Scale className="h-4 w-4 text-rose-300 mt-1 shrink-0" />
                <div>
                  <p className="text-base font-semibold text-white">
                    {doc.title}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{doc.description}</p>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
