"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "solentra-cookie-consent-v1";

type ConsentState = {
  analytics: boolean;
  necessary: true;
};

const DEFAULT_CONSENT: ConsentState = { analytics: false, necessary: true };

function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    return { necessary: true, analytics: Boolean(parsed.analytics) };
  } catch {
    return null;
  }
}

function writeConsent(value: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("solentra:consent", { detail: value }));
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const acceptAll = () => {
    writeConsent({ necessary: true, analytics: true });
    setOpen(false);
  };
  const rejectNonEssential = () => {
    writeConsent({ ...DEFAULT_CONSENT });
    setOpen(false);
  };
  const saveCustom = () => {
    writeConsent({ necessary: true, analytics });
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-modal="true"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-neutral-900/95 backdrop-blur-xl border border-white/15 rounded-3xl shadow-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
            <Cookie className="h-4 w-4 text-white/85" />
          </div>
          <p id="cookie-banner-title" className="text-base font-semibold text-white">
            Cookies on this site
          </p>
        </div>

        <p className="mt-4 text-sm text-white/70 leading-relaxed">
          We use strictly necessary cookies to run the site, plus optional analytics cookies only if you accept. Make a choice to continue. See our{" "}
          <Link href="/legal/cookies" className="underline hover:text-white">
            Cookie Policy
          </Link>
          .
        </p>

        {customize && (
          <div className="mt-5 space-y-3 text-sm rounded-2xl bg-white/5 border border-white/10 p-4">
            <label className="flex items-start gap-3 text-white/80">
              <input type="checkbox" checked readOnly className="mt-1 accent-white" />
              <span>
                <span className="font-medium text-white">Strictly necessary</span>
                <span className="block text-xs text-white/55 mt-0.5">
                  Required for the site to work. Always on.
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 text-white/80">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-1 accent-white"
              />
              <span>
                <span className="font-medium text-white">Analytics</span>
                <span className="block text-xs text-white/55 mt-0.5">
                  Google Analytics 4 and Microsoft Clarity. Helps us improve the site.
                </span>
              </span>
            </label>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-2">
          {!customize ? (
            <>
              <button
                onClick={acceptAll}
                className="flex-1 px-4 py-2.5 rounded-full bg-white text-neutral-950 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Accept all
              </button>
              <button
                onClick={rejectNonEssential}
                className="flex-1 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/85 text-sm font-medium hover:bg-white/15 transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={() => setCustomize(true)}
                className="px-4 py-2.5 rounded-full text-white/70 text-sm font-medium hover:text-white transition-colors"
              >
                Customize
              </button>
            </>
          ) : (
            <>
              <button
                onClick={saveCustom}
                className="flex-1 px-4 py-2.5 rounded-full bg-white text-neutral-950 text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Save preferences
              </button>
              <button
                onClick={rejectNonEssential}
                className="flex-1 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/85 text-sm font-medium hover:bg-white/15 transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={() => setCustomize(false)}
                className="px-4 py-2.5 rounded-full text-white/70 text-sm font-medium hover:text-white transition-colors"
              >
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
