"use client";

import { useCallback } from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustLayer } from "@/components/sections/TrustLayer";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import type { ConsultingService } from "@/lib/services";

export default function HomePage() {
  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const onBuyClick = useCallback(
    (service: ConsultingService) => {
      if (service.priceValue === null) {
        scrollTo("contact");
        return;
      }
      if (typeof window !== "undefined") {
        window.location.href = `/checkout?service=${encodeURIComponent(service.id)}`;
      }
    },
    [scrollTo],
  );

  return (
    <>
      <Hero onPrimaryCta={() => scrollTo("contact")} onSecondaryCta={() => scrollTo("services")} />
      <TrustLayer />
      <HowItWorks />
      <Services onBuyClick={onBuyClick} />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
