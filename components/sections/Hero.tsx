"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface HeroProps {
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
}

export function Hero({ onPrimaryCta, onSecondaryCta }: HeroProps) {
  return (
    <section
      id="hero"
      className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-28 pb-12 sm:pb-16 text-center"
    >
      <h1 className="text-[2rem] sm:text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-white mb-6 sm:mb-8 font-sans max-w-4xl mx-auto">
        {siteConfig.hero.headlineLine1}
        <br />
        <span className="text-white/55 font-light italic">
          {siteConfig.hero.headlineLine2}
        </span>
      </h1>

      <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 font-normal">
        {siteConfig.hero.subtitle}
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
        <button
          onClick={onPrimaryCta}
          className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-neutral-950 rounded-full font-medium text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl shadow-black/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{siteConfig.hero.primaryCta}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <button
          onClick={onSecondaryCta}
          className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 border border-white/20 text-white rounded-full font-medium text-sm hover:bg-white/15 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>{siteConfig.hero.secondaryCta}</span>
        </button>
      </div>
    </section>
  );
}
