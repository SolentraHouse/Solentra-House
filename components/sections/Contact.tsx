"use client";

import { Mail, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { ContactRequestForm } from "@/components/forms/ContactRequestForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        <div className="lg:col-span-5">
          <span className="text-xs font-mono text-white/40 tracking-widest uppercase block mb-2">
            CONTACT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight mb-4">
            Talk to a Partner
          </h2>
          <p className="text-sm text-white/65 leading-relaxed mb-6">
            Send a request or reach the team directly by email. Our team will contact you shortly.
          </p>
          <div className="space-y-3 text-sm">
            <a
              href={`mailto:${siteConfig.contact.support}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-emerald-300" />
              {siteConfig.contact.support}
            </a>
            <a
              href={`mailto:${siteConfig.contact.business}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-blue-300" />
              {siteConfig.contact.business}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 text-amber-300" />
              {siteConfig.contact.phone}
            </a>
            <div className="flex items-center gap-3 text-white/80">
              <ShieldCheck className="h-4 w-4 text-blue-300" />
              Confidential intake available under NDA
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactRequestForm />
        </div>
      </div>
    </section>
  );
}
