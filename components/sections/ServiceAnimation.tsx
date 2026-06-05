"use client";

import { motion } from "motion/react";
import type { ConsultingService } from "@/lib/services";

interface AnimationContent {
  label: string;
  title: string;
  nodes: string[];
  result: string;
}

const ANIMATION_CONTENT: Record<string, AnimationContent> = {
  "solentra-scan": {
    label: "AUDIT MAP",
    title: "Website, SEO, social, ads, and competitors are scanned into one action plan.",
    nodes: ["Website", "SEO", "Social", "Ads", "Competitors", "Brand"],
    result: "90-day action plan",
  },
  "performance-optimisation": {
    label: "PERFORMANCE LOOP",
    title:
      "Tracking, channel performance, funnel stages, and quick wins are connected into an optimisation roadmap.",
    nodes: ["Tracking", "Paid", "Organic", "Email", "Social", "Funnel"],
    result: "Monthly reporting template",
  },
  "brand-communications": {
    label: "MESSAGE SYSTEM",
    title:
      "Voice, audience messaging, channel rules, templates, and crisis principles are aligned.",
    nodes: ["Voice", "Audience", "Social", "Email", "Website", "Crisis"],
    result: "Brand communications framework",
  },
  "digital-strategy": {
    label: "STRATEGY ROADMAP",
    title:
      "Objectives, KPIs, personas, channels, content pillars, journey, and budget become a digital roadmap.",
    nodes: ["Goals", "KPIs", "Personas", "Channels", "Journey", "Budget"],
    result: "6-12 month strategy",
  },
  "communications-planning": {
    label: "90-DAY CALENDAR",
    title:
      "Quarterly themes, channel plans, workflows, KPIs, and reporting templates become one operating rhythm.",
    nodes: ["Themes", "Social", "Email", "Blog", "Partners", "Reports"],
    result: "Editorial calendar",
  },
  "acquisition-funnel": {
    label: "FUNNEL BUILD",
    title:
      "Awareness, consideration, conversion, retention, email automation, retargeting, and testing are structured.",
    nodes: ["Aware", "Consider", "Convert", "Retain", "Email", "Testing"],
    result: "Acquisition system",
  },
  "campaign-launch": {
    label: "LAUNCH CONTROL",
    title:
      "Strategy, creative direction, channel mix, content calendar, launch coordination, and reporting move together.",
    nodes: ["Concept", "Creative", "Paid", "Email", "Content", "Reports"],
    result: "Campaign launch pack",
  },
  "solentra-growth": {
    label: "GROWTH PROGRAMME",
    title:
      "Audit, strategy, funnel setup, communications planning, dashboards, weekly reviews, and executive reporting run as one programme.",
    nodes: ["Audit", "Strategy", "Funnel", "Content", "Dashboard", "Reviews"],
    result: "6-month handover roadmap",
  },
  "custom-consultation": {
    label: "CUSTOM SCOPE",
    title:
      "Discovery, proposal, senior strategist access, tailored deliverables, and optional implementation support are scoped around the challenge.",
    nodes: ["Discovery", "Scope", "Strategy", "Delivery", "Support", "NDA"],
    result: "Tailored engagement",
  },
};

export function ServiceAnimation({ service }: { service: ConsultingService }) {
  const visual = ANIMATION_CONTENT[service.id] ?? ANIMATION_CONTENT["custom-consultation"];
  const bars = [68, 42, 76, 58, 84];
  const calendar = ["Theme", "Social", "Email", "Blog", "Partner", "Report", "Review", "Next"];
  const funnel = ["Awareness", "Consideration", "Conversion", "Retention"];

  const renderVisual = () => {
    if (service.id === "solentra-scan") {
      return (
        <div className="grid grid-cols-3 gap-2">
          {visual.nodes.map((node, i) => (
            <motion.div
              key={node}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.07 }}
              className="relative min-h-20 rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <motion.span
                className="absolute inset-2 rounded-lg border border-dashed border-emerald-300"
                animate={{ opacity: [0.15, 0.75, 0.15] }}
                transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.12 }}
              />
              <span className="relative z-10 text-[10px] font-mono text-white/40">
                SCAN 0{i + 1}
              </span>
              <span className="relative z-10 block mt-5 text-xs font-bold text-white">
                {node}
              </span>
            </motion.div>
          ))}
        </div>
      );
    }

    if (service.id === "performance-optimisation") {
      return (
        <div className="h-44 rounded-xl border border-white/10 bg-white/5 p-4 flex items-end gap-3">
          {bars.map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end gap-2 h-full">
              <motion.div
                className="rounded-t-lg bg-white/85"
                initial={{ height: 12 }}
                animate={{ height: `${bar}%` }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              />
              <span className="text-[9px] font-mono text-white/40 text-center">
                CH{i + 1}
              </span>
            </div>
          ))}
        </div>
      );
    }

    if (service.id === "brand-communications") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {["Voice", "Audience", "Templates"].map((card, i) => (
            <motion.div
              key={card}
              className="rounded-xl border border-white/10 bg-white/5 p-4 min-h-32"
              initial={{ rotate: i === 0 ? -3 : i === 2 ? 3 : 0, y: 18, opacity: 0 }}
              animate={{ rotate: 0, y: 0, opacity: 1 }}
              transition={{ delay: i * 0.12 }}
            >
              <span className="text-[10px] font-mono text-blue-300">MESSAGE</span>
              <h4 className="text-sm font-bold text-white mt-2">{card}</h4>
              <motion.div
                className="mt-5 h-1.5 rounded-full bg-white/85"
                initial={{ width: "20%" }}
                animate={{ width: ["35%", "80%", "55%"] }}
                transition={{ repeat: Infinity, duration: 2.4, delay: i * 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      );
    }

    if (service.id === "digital-strategy") {
      return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="relative flex items-center justify-between">
            {["Now", "KPIs", "Channels", "Roadmap"].map((step, i) => (
              <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                <motion.div
                  className="h-10 w-10 rounded-full bg-white text-neutral-950 flex items-center justify-center text-xs font-bold"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: i * 0.25 }}
                >
                  {i + 1}
                </motion.div>
                <span className="text-[10px] font-mono text-white/55">{step}</span>
              </div>
            ))}
            <motion.div
              className="absolute left-6 right-6 top-5 h-0.5 bg-emerald-500"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>
      );
    }

    if (service.id === "communications-planning") {
      return (
        <div className="grid grid-cols-4 gap-2">
          {calendar.map((item, i) => (
            <motion.div
              key={item}
              className="rounded-xl border border-white/10 bg-white/5 p-3 h-20"
              initial={{ opacity: 0.35 }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.16 }}
            >
              <span className="text-[9px] font-mono text-white/40">D{i + 1}</span>
              <span className="block text-xs font-bold text-white/90 mt-3">{item}</span>
            </motion.div>
          ))}
        </div>
      );
    }

    if (service.id === "acquisition-funnel") {
      return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
          {funnel.map((stage, i) => (
            <motion.div
              key={stage}
              className="mx-auto rounded-xl bg-white text-neutral-950 py-3 text-center text-xs font-bold"
              style={{ width: `${100 - i * 16}%` }}
              initial={{ x: -18, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.12 }}
            >
              {stage}
            </motion.div>
          ))}
        </div>
      );
    }

    if (service.id === "campaign-launch") {
      return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          {["Brief", "Creative", "Launch", "Optimise", "Report"].map((step, i) => (
            <div key={step} className="flex items-center gap-3 mb-3 last:mb-0">
              <motion.div
                className="h-3 w-3 rounded-full bg-emerald-500"
                animate={{ scale: [1, 1.7, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.18 }}
              />
              <div className="flex-1 h-2 rounded-full bg-white/15 overflow-hidden">
                <motion.div
                  className="h-full bg-white/85"
                  initial={{ width: "0%" }}
                  animate={{ width: `${35 + i * 13}%` }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                />
              </div>
              <span className="w-16 text-[10px] font-mono text-white/55">{step}</span>
            </div>
          ))}
        </div>
      );
    }

    if (service.id === "solentra-growth") {
      return (
        <div className="relative h-48 rounded-xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center">
          <motion.div
            className="absolute h-32 w-32 rounded-full border border-dashed border-emerald-400"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
          />
          <motion.div
            className="absolute h-44 w-44 rounded-full border border-dashed border-blue-300"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          />
          <div className="relative z-10 h-20 w-20 rounded-full bg-white text-neutral-950 flex items-center justify-center text-xs font-bold text-center">
            Growth
            <br />
            System
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-xl border border-white/10 bg-white/5 p-4 grid grid-cols-3 gap-3">
        {["Discover", "Scope", "Deliver"].map((step, i) => (
          <motion.div
            key={step}
            className="rounded-xl bg-white/5 border border-white/10 p-4 min-h-28"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, delay: i * 0.2 }}
          >
            <span className="text-[10px] font-mono text-white/40">0{i + 1}</span>
            <span className="block text-sm font-bold text-white mt-8">{step}</span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div
      key={service.id}
      className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase block mb-1">
            {visual.label}
          </span>
          <p className="text-xs text-white/65 leading-relaxed max-w-xl">{visual.title}</p>
        </div>
        <span className="text-[10px] font-mono font-bold text-neutral-950 bg-white border border-white/20 rounded-full px-3 py-1 shrink-0">
          {visual.result}
        </span>
      </div>
      {renderVisual()}
    </div>
  );
}
