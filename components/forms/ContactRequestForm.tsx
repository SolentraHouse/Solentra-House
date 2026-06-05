"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingAuthInput } from "@/components/ui/FloatingAuthInput";
import { Turnstile } from "@/components/ui/Turnstile";

const FOCUS_OPTIONS = [
  "Digital strategy",
  "Audit",
  "Brand communications",
  "Customer acquisition",
  "Campaign launch",
  "Growth programme",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [focus, setFocus] = useState<string>("");
  const [submittedEmail, setSubmittedEmail] = useState<string>("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    if (!focus) {
      setError("Please choose a topic.");
      return;
    }
    setStatus("loading");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const description = focus === "Other" ? String(fd.get("description") || "") : "";
    const message = description
      ? `Topic: ${focus}.\n\nDetails:\n${description}`
      : `Topic: ${focus}.`;

    const payload = {
      name: String(fd.get("name") || ""),
      email,
      company: String(fd.get("company") || ""),
      message,
      consent: fd.get("consent") === "on",
      turnstileToken,
      honeypot: String(fd.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Submission failed");
      }
      setSubmittedEmail(email);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  if (status === "success") {
    return (
      <div className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-white/12 backdrop-blur-xl p-8 md:p-10 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/15 border border-emerald-300/30 text-emerald-200">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
          Request received.
        </h3>
        <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm mx-auto">
          Our team will contact you shortly at{" "}
          <span className="text-white font-medium">{submittedEmail}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-white/12 backdrop-blur-xl p-7 md:p-8">
      <div className="mb-7">
        <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mb-2">
          SEND A REQUEST
        </span>
        <h3 className="text-2xl font-bold tracking-tight text-white">
          Tell us what you need
        </h3>
      </div>

      <form onSubmit={onSubmit} className="space-y-7">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden"
        />

        <FloatingAuthInput
          id="contact_name"
          name="name"
          type="text"
          label="Name"
          icon="user"
          required
          autoComplete="name"
        />
        <FloatingAuthInput
          id="contact_email"
          name="email"
          type="email"
          label="Email"
          icon="mail"
          required
          autoComplete="email"
        />
        <FloatingAuthInput
          id="contact_company"
          name="company"
          type="text"
          label="Company name (optional)"
          icon="building"
          autoComplete="organization"
        />

        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/55 mb-3">
            What is this about?
          </p>
          <div className="flex flex-wrap gap-2">
            {FOCUS_OPTIONS.map((opt) => {
              const isActive = focus === opt;
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setFocus(opt)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
                    isActive
                      ? "bg-white text-neutral-950 border-white"
                      : "bg-white/5 text-white/75 border-white/15 hover:bg-white/10 hover:text-white",
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {focus === "Other" && (
          <div>
            <label
              htmlFor="contact_description"
              className="text-[10px] font-mono uppercase tracking-widest text-white/55 mb-2 block"
            >
              Tell us more
            </label>
            <textarea
              id="contact_description"
              name="description"
              rows={4}
              required
              className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-emerald-300 focus:outline-none focus:ring-0 resize-none"
              placeholder="A short description of your situation..."
            />
          </div>
        )}

        <label className="flex items-start gap-2 text-xs text-white/65">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 accent-emerald-400"
          />
          <span>
            I consent to the processing of my personal data in line with the{" "}
            <Link href="/legal/privacy" className="underline text-white/85 hover:text-white">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <Turnstile onVerify={setTurnstileToken} />

        {error && <p className="text-xs text-rose-300">{error}</p>}

        <button
          type="submit"
          disabled={status === "loading" || !turnstileToken || !focus}
          className="group w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-neutral-950 hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          Send request
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}
