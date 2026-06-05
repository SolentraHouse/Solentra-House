"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { FloatingAuthInput } from "@/components/ui/FloatingAuthInput";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type Status = "idle" | "loading" | "error" | "success";

export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const fromAccount = searchParams.get("from") === "account";

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setError(null);

    const fd = new FormData(e.currentTarget);
    const password = String(fd.get("password") || "");
    const confirmPassword = String(fd.get("confirmPassword") || "");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Request failed");
      }
      setStatus("success");

      if (fromAccount) {
        setTimeout(() => {
          window.location.href = "/account";
        }, 1500);
      } else {
        // Email recovery flow — sign out so user signs in with new password.
        const supabase = createSupabaseBrowserClient();
        await supabase.auth.signOut();
        setTimeout(() => {
          window.location.href = "/login?reset=1";
        }, 1500);
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Request failed");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 border border-emerald-300/30 text-emerald-200">
          <Check className="h-5 w-5" />
        </div>
        <p className="mt-4 text-base font-semibold text-white">Password updated.</p>
        <p className="mt-2 text-sm text-white/70">
          {fromAccount
            ? "Redirecting to your account…"
            : "Sign in with your new password…"}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <FloatingAuthInput
        id="reset_password"
        name="password"
        type="password"
        label="New Password"
        icon="lock"
        required
        minLength={8}
        autoComplete="new-password"
      />
      <FloatingAuthInput
        id="reset_confirm_password"
        name="confirmPassword"
        type="password"
        label="Confirm New Password"
        icon="lock"
        required
        minLength={8}
        autoComplete="new-password"
      />

      {error && <p className="text-xs text-rose-300 text-center">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-neutral-950 hover:bg-neutral-100 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Set new password
        <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </button>

      <p className="text-center text-xs text-white/55">
        <Link href={fromAccount ? "/account" : "/login"} className="hover:text-white underline">
          {fromAccount ? "Back to account" : "Back to sign in"}
        </Link>
      </p>
    </form>
  );
}
