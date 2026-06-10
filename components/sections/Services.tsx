"use client";

import { useState } from "react";
import { ChevronRight, Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES, type ConsultingService } from "@/lib/services";
import { ServiceAnimation } from "./ServiceAnimation";

const ICON_SPRITE_URL = "/service-icons/solentra-service-icons.png";

interface ServicesProps {
  onBuyClick: (service: ConsultingService) => void;
}

export function Services({ onBuyClick }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ConsultingService>(SERVICES[0]);

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-white/10"
    >
      <div className="mb-10 sm:mb-12">
        <span className="text-xs font-mono text-white/40 tracking-widest uppercase block mb-2">
          SERVICES
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Nine services, scoped and priced upfront.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
        <div className="lg:col-span-5 flex flex-col gap-3 lg:h-[760px] lg:overflow-y-auto lg:pr-2">
          {SERVICES.map((srv) => {
            const isActive = selectedService.id === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={cn(
                  "animated-border w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer backdrop-blur-md",
                  isActive
                    ? "bg-white/10 border-white/25"
                    : "bg-white/5 border-white/10 hover:bg-white/8",
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl border bg-white bg-no-repeat shadow-sm shrink-0",
                    isActive ? "border-white/40 ring-2 ring-white/20" : "border-white/20",
                  )}
                  style={{
                    backgroundImage: `url(${ICON_SPRITE_URL})`,
                    backgroundSize: "300% 300%",
                    backgroundPosition: srv.iconPosition,
                  }}
                  aria-hidden="true"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-white text-sm tracking-tight">
                      {srv.title}
                    </span>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform shrink-0",
                        isActive ? "text-white translate-x-1" : "text-white/30",
                      )}
                    />
                  </div>
                  <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded">
                      {srv.price}
                    </span>
                    <span className="text-[10px] font-mono text-white/55 bg-white/10 px-2 py-0.5 rounded">
                      {srv.duration}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7 lg:sticky lg:top-24 bg-white/8 backdrop-blur-md rounded-3xl border border-white/15 p-5 sm:p-6 md:p-8 min-h-[460px] flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/15 text-blue-300 border border-blue-400/30">
                {selectedService.category.toUpperCase()}
              </span>
              <span className="text-[11px] font-mono text-emerald-300 font-semibold bg-emerald-500/15 px-2 py-0.5 rounded">
                {selectedService.metrics}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-16 h-16 rounded-2xl border border-white/20 bg-white bg-no-repeat shadow-sm shrink-0"
                  style={{
                    backgroundImage: `url(${ICON_SPRITE_URL})`,
                    backgroundSize: "300% 300%",
                    backgroundPosition: selectedService.iconPosition,
                  }}
                  aria-hidden="true"
                />
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {selectedService.title}
                </h3>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <span className="block text-xl sm:text-2xl font-mono font-bold text-white">
                  {selectedService.price}
                </span>
                <span className="block text-[11px] font-mono text-white/50 mt-1">
                  {selectedService.duration}
                </span>
              </div>
            </div>

            <p className="text-white/65 text-sm leading-relaxed mb-6">
              {selectedService.fullDescription}
            </p>

            <ServiceAnimation service={selectedService} />

            <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-3">
              WHAT IS INCLUDED
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedService.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-white/75">
                  <div className="min-w-4 w-4 h-4 rounded-full bg-white text-neutral-950 flex items-center justify-center mt-0.5">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
            <button
              onClick={() => onBuyClick(selectedService)}
              className="px-5 py-2.5 rounded-full bg-white text-neutral-950 font-medium text-xs hover:scale-[1.03] duration-300 transition-transform cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Lock className="h-3 w-3" />
              <span>
                {selectedService.priceValue === null
                  ? "Request consultation"
                  : `Buy ${selectedService.title.split(" ")[0]}`}
              </span>
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
