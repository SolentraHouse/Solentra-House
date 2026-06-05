"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    q: "What does the first call look like?",
    a: "A 30-minute call for the Custom Digital Consultation. For the fixed-price packages, the kick-off is at the start of the engagement and varies by service (60-minute call, 90-minute workshop, or 3-hour strategic session, listed on the service card). We review goals, channels, constraints, and the data already on the table, then send a short scope summary before any invoice.",
  },
  {
    q: "Which service should I start with?",
    a: "If you do not yet have a baseline of your digital presence, start with Solentra Scan (€1 199). If you already run active channels and want a clearer ROI roadmap, Performance Analysis & Optimisation (€1 799) is the better fit. If your situation does not match a standard package, book a Custom Digital Consultation.",
  },
  {
    q: "Do you work with companies outside the EU?",
    a: "European startups, e-commerce, and SMEs are our primary focus. We take work elsewhere on a case-by-case basis through the Custom Digital Consultation format.",
  },
  {
    q: "How long until I see something useful?",
    a: "First deliverables ship in 2-3 weeks for an audit, 3 weeks for a brand framework, 3-4 weeks for a strategy or communications planning programme, 4-6 weeks for a funnel or campaign launch. The Growth programme runs for three months with weekly progress reviews.",
  },
  {
    q: "How do I pay?",
    a: "Fixed-price packages are purchased through Gumroad. Payment happens at checkout, then we schedule the kick-off. For the Custom Digital Consultation, scope and price are agreed after the free discovery call and invoiced separately.",
  },
  {
    q: "What is your refund policy?",
    a: "The 14-day EU right of withdrawal applies for consumer purchases where the service has not started. For services already in delivery, refunds are partial and based on work completed. See the Refund Policy for the exact conditions.",
  },
  {
    q: "How is my data handled?",
    a: "We process personal data under UK GDPR and EU GDPR. We collect only what is needed to deliver the engagement, store it for the periods listed in the Privacy Policy, and never sell or share it with marketing partners.",
  },
  {
    q: "Can we work on an ongoing retainer?",
    a: "The Solentra Growth programme is the closest format: a three-month engagement with weekly reviews and bi-weekly creative coordination. For longer-term arrangements, the Custom Digital Consultation is the entry point.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <header className="mb-10 md:mb-14 text-center md:text-left">
        <p className="text-xs font-mono uppercase tracking-widest text-amber-300">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
          Questions we hear most often.
        </h2>
      </header>

      <ul className="space-y-3">
        {FAQS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <li
              key={item.q}
              className="animated-border bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full px-5 md:px-6 py-4 flex items-center justify-between gap-3 text-left"
              >
                <span className="text-sm md:text-base font-medium text-white">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-white/55 shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 md:px-6 pb-5 text-sm text-white/70 leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
