import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import { AuthShell } from "@/components/forms/AuthShell";
import { AuthForm } from "@/components/forms/AuthForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Log in",
  description: "Log in to your Solentra House account.",
  path: "/login",
  noIndex: true,
});

interface LoginPageProps {
  searchParams: Promise<{ reset?: string }>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const showResetSuccess = params.reset === "1";

  return (
    <AuthShell
      title="Welcome Back"
      subtitle="Sign in to continue to Solentra House"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-emerald-200 hover:text-white transition-colors"
          >
            Create one
          </Link>
        </>
      }
    >
      {showResetSuccess && (
        <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-3">
          <Check className="h-4 w-4 text-emerald-200 mt-0.5 shrink-0" />
          <p className="text-xs text-emerald-100 leading-relaxed">
            Password updated. Sign in with your new password.
          </p>
        </div>
      )}
      <AuthForm mode="login" />
    </AuthShell>
  );
}
