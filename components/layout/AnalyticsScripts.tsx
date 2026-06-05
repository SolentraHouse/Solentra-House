"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "solentra-cookie-consent-v1";

function readAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw) as { analytics?: boolean };
    return Boolean(parsed.analytics);
  } catch {
    return false;
  }
}

export function AnalyticsScripts() {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(readAnalyticsConsent());
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ analytics: boolean }>).detail;
      setConsent(Boolean(detail?.analytics));
    };
    window.addEventListener("solentra:consent", handler);
    return () => window.removeEventListener("solentra:consent", handler);
  }, []);

  if (!consent) return null;

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {clarityId && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${clarityId}");`}
        </Script>
      )}
    </>
  );
}
