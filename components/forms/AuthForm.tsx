"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { FloatingAuthInput } from "@/components/ui/FloatingAuthInput";
import { Turnstile } from "@/components/ui/Turnstile";

type Mode = "login" | "register" | "forgot-password";

interface AuthFormProps {
  mode: Mode;
}

const ENDPOINTS: Record<Mode, string> = {
  login: "/api/auth/login",
  register: "/api/auth/register",
  "forgot-password": "/api/auth/forgot-password",
};

const SUBMIT_LABELS: Record<Mode, string> = {
  login: "Sign In",
  register: "Create Account",
  "forgot-password": "Send Reset Link",
};

export function AuthForm({ mode }: AuthFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setError(null);

    const fd = new FormData(e.currentTarget);

    if (mode === "register") {
      const password = String(fd.get("password") || "");
      const confirmPassword = String(fd.get("confirmPassword") || "");
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }

    setStatus("loading");

    const payload: Record<string, unknown> = {
      email: String(fd.get("email") || ""),
      turnstileToken,
    };
    if (mode !== "forgot-password") {
      payload.password = String(fd.get("password") || "");
    }
    if (mode === "register") {
      payload.name = String(fd.get("name") || "");
      payload.phone = String(fd.get("phone") || "");
      payload.consent = fd.get("consent") === "on";
    }

    try {
      const res = await fetch(ENDPOINTS[mode], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Request failed");
      }
      setStatus("success");
      if (mode === "login" || mode === "register") {
        window.location.href = "/account";
      }
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Request failed");
    }
  }

  if (status === "success" && mode === "forgot-password") {
    return (
      <p className="text-sm text-white/80 text-center">
        If an account exists for that email, a reset link has been sent. Check your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      {mode === "register" && (
        <FloatingAuthInput
          id="auth_name"
          name="name"
          type="text"
          label="Full Name"
          icon="user"
          required
          autoComplete="name"
        />
      )}
      <FloatingAuthInput
        id="auth_email"
        name="email"
        type="email"
        label="Email Address"
        icon="mail"
        required
        autoComplete={mode === "register" ? "email" : "username"}
      />
      {mode === "register" && (
        <FloatingAuthInput
          id="auth_phone"
          name="phone"
          type="tel"
          label="Phone Number"
          icon="phone"
          required
          autoComplete="tel"
        />
      )}
      {mode !== "forgot-password" && (
        <FloatingAuthInput
          id="auth_password"
          name="password"
          type="password"
          label="Password"
          icon="lock"
          required
          minLength={mode === "register" ? 8 : undefined}
          autoComplete={mode === "register" ? "new-password" : "current-password"}
        />
      )}
      {mode === "register" && (
        <FloatingAuthInput
          id="auth_confirm_password"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          icon="lock"
          required
          minLength={8}
          autoComplete="new-password"
        />
      )}

      {mode === "login" && (
        <div className="flex items-center justify-end -mt-3">
          <Link
            href="/forgot-password"
            className="text-xs text-white/60 hover:text-white transition-colors"
          >
            Forgot Password?
          </Link>
        </div>
      )}

      {mode === "register" && (
        <label className="flex items-start gap-2 text-xs text-white/65 -mt-3">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 accent-emerald-400"
          />
          <span>
            I consent to the processing of my personal data in line with the{" "}
            <Link href="/legal/privacy" className="underline text-white/90 hover:text-white">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      )}

      <Turnstile onVerify={setTurnstileToken} />

      {error && <p className="text-xs text-rose-300 text-center">{error}</p>}

      <button
        type="submit"
        disabled={status === "loading" || !turnstileToken}
        className="group w-full flex items-center justify-center gap-2 py-3 px-4 bg-white text-neutral-950 hover:bg-neutral-100 disabled:opacity-60 disabled:cursor-not-allowed rounded-xl font-bold text-sm focus:outline-none focus:ring-2 focus:ring-white/70 transition-all duration-300"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {SUBMIT_LABELS[mode]}
        <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
