"use client";

import { useEffect, useRef } from "react";

const DEV_BYPASS_TOKEN = "dev-bypass";

interface TurnstileProps {
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        },
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

export function Turnstile({ onVerify }: TurnstileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!sitekey) {
      onVerify(DEV_BYPASS_TOKEN);
      return;
    }
    if (!ref.current) return;
    const renderWidget = () => {
      if (!window.turnstile || !ref.current) return;
      widgetIdRef.current = window.turnstile.render(ref.current, {
        sitekey,
        callback: (token) => onVerify(token),
        theme: "light",
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    }

    return () => {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [sitekey, onVerify]);

  if (!sitekey) {
    return (
      <p className="text-[10px] font-mono text-white/40">
        [CAPTCHA_NOT_CONFIGURED] dev bypass active
      </p>
    );
  }

  return <div ref={ref} />;
}
