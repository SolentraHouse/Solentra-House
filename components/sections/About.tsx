"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/lib/site";

const POINTS = [
  {
    label: "Audit before action",
    body: "No engagement starts without a written baseline of where you stand today.",
  },
  {
    label: "Fixed scope, fixed price",
    body: "Every package has a defined deliverable, end date, and price in writing.",
  },
  {
    label: "Senior people only",
    body: "You speak directly with the strategist running your engagement, not a junior account manager.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-indigo-300">
            About {siteConfig.name}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
            We work in 90-day windows, not 12-month retainers.
          </h2>
          <p className="mt-5 text-base text-white/70 leading-relaxed">
            Most digital agencies sell ongoing time. We sell a written roadmap, a fixed scope, and a deadline. That changes how we plan, who we hire, and what we put in writing.
          </p>
          <p className="mt-3 text-base text-white/70 leading-relaxed">
            Engagements wrap in 2-6 weeks. The Growth programme runs for three months.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4"
        >
          {POINTS.map((point) => (
            <li
              key={point.label}
              className="animated-border bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 md:p-6"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                {point.label}
              </p>
              <p className="mt-2 text-sm md:text-base text-white/80 leading-relaxed">
                {point.body}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
