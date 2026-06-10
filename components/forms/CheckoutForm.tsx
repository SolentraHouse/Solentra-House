"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Lock, Loader2, ShieldCheck, CreditCard } from "lucide-react";
import { FloatingAuthInput } from "@/components/ui/FloatingAuthInput";
import type { ConsultingService } from "@/lib/services";

type Status = "idle" | "loading" | "error";

interface CheckoutFormProps {
  service: ConsultingService;
  initialName: string;
  initialEmail: string;
}

export function CheckoutForm({ service, initialName, initialEmail }: CheckoutFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      serviceId: service.id,
      name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      notes: String(fd.get("notes") || ""),
      consent: fd.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/payment/intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Checkout failed");
      }
      const { redirectUrl } = (await res.json()) as { redirectUrl: string };
      window.location.href = redirectUrl;
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Checkout failed");
    }
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-white/12 backdrop-blur-xl p-7 md:p-8">
      <div className="mb-7">
        <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest block mb-2">
          ORDER DETAILS
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Confirm and pay
        </h2>
      </div>

      <form onSubmit={onSubmit} className="space-y-7">
        <FloatingAuthInput
          id="checkout_name"
          name="name"
          type="text"
          label="Full name on invoice"
          icon="user"
          required
          autoComplete="name"
          defaultValue={initialName}
        />
        <FloatingAuthInput
          id="checkout_email"
          name="email"
          type="email"
          label="Email (your account)"
          icon="mail"
          required
          autoComplete="email"
          defaultValue={initialEmail}
          readOnly
        />
        <FloatingAuthInput
          id="checkout_company"
          name="company"
          type="text"
          label="Company name (optional)"
          icon="building"
          autoComplete="organization"
        />

        <div>
          <label
            htmlFor="checkout_notes"
            className="text-[10px] font-mono uppercase tracking-widest text-white/55 mb-2 block"
          >
            Anything we should know before kick-off? (optional)
          </label>
          <textarea
            id="checkout_notes"
            name="notes"
            rows={3}
            className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-base text-white placeholder:text-white/30 focus:border-emerald-300 focus:outline-none focus:ring-0 resize-none"
            placeholder="Context, deadlines, or specific focus..."
          />
        </div>

        <label className="flex items-start gap-2 text-xs text-white/65">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 accent-emerald-400"
          />
          <span>
            I accept the{" "}
            <Link href="/legal/terms" className="underline text-white/85 hover:text-white">
              Terms of Service
            </Link>
            ,{" "}
            <Link href="/legal/refunds" className="underline text-white/85 hover:text-white">
              Refund Policy
            </Link>
            , and{" "}
            <Link href="/legal/privacy" className="underline text-white/85 hover:text-white">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <div className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-xs text-white/65">
          <span className="flex items-center gap-2">
            <CreditCard className="h-3.5 w-3.5" />
            Card payment via Gumroad
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
            SSL · 3D Secure
          </span>
        </div>

        {error && <p className="text-xs text-rose-300 text-center">{error}</p>}

        <button
          type="submit"
          disabled={status === "loading"}
          className="group w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-neutral-950 hover:bg-neutral-100 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Lock className="h-4 w-4" />
          )}
          Pay {service.price} · Continue to secure checkout
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center text-xs text-white/55">
          Gumroad will process payment. You can review and confirm before charge.
        </p>
      </form>
    </div>
  );
}
