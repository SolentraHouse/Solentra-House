"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    n: "01",
    title: "Kick-off",
    body: "A 60-minute call with the founder or marketing lead. Goals, channels, constraints, and the data already on the table.",
  },
  {
    n: "02",
    title: "Audit & benchmark",
    body: "Over 2-3 weeks we score your digital presence and benchmark it against 5 direct competitors. Where the leaks are, where the gains are.",
  },
  {
    n: "03",
    title: "90-day roadmap",
    body: "A 20-25 page report with prioritised actions, owners, KPIs, and the metrics that will tell us it worked.",
  },
  {
    n: "04",
    title: "Execute or hand over",
    body: "Optional weekly reviews while your team runs the plan. Or we run the whole programme under Solentra Growth.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <header className="max-w-2xl mb-10 md:mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-indigo-300">
          Our approach
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
          A structured, four-step process. No mystery, no theatrics.
        </h2>
      </header>

      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {STEPS.map((step, idx) => (
          <motion.li
            key={step.n}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: idx * 0.05 }}
            className="animated-border bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-6"
          >
            <p className="text-xs font-mono text-white/40">{step.n}</p>
            <p className="mt-4 text-base font-semibold text-white">
              {step.title}
            </p>
            <p className="mt-2 text-sm text-white/65 leading-relaxed">
              {step.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
