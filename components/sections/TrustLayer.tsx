"use client";

import { motion } from "motion/react";
import { Globe2, Tag, Clock, MessageCircle } from "lucide-react";

const PILLARS = [
  { icon: Globe2, label: "EU focus", caption: "Startups, e-commerce, SMEs across Europe." },
  { icon: Tag, label: "From €1 199", caption: "Fixed scope, fixed price per package." },
  { icon: Clock, label: "2 weeks to 3 months", caption: "Audit, strategy, or full programme." },
  { icon: MessageCircle, label: "Or custom", caption: "30-min discovery call when no package fits." },
];

export function TrustLayer() {
  return (
    <section
      aria-label="Solentra at a glance"
      className="max-w-6xl mx-auto px-4 md:px-8 py-10 sm:py-12 md:py-16"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="animated-border bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 md:p-6"
            >
              <Icon className="h-5 w-5 text-white/90" />
              <p className="mt-4 text-sm font-semibold text-white">
                {pillar.label}
              </p>
              <p className="mt-1 text-xs text-white/60 leading-relaxed">
                {pillar.caption}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
