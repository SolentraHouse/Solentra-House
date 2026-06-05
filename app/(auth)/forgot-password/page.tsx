import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/components/forms/AuthShell";
import { AuthForm } from "@/components/forms/AuthForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Forgot password",
  description: "Request a password reset link for your Solentra House account.",
  path: "/forgot-password",
  noIndex: true,
});

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Recover Password"
      subtitle="Enter your email and we will send a reset link"
      footer={
        <>
          Remembered it?{" "}
          <Link
            href="/login"
            className="font-bold text-emerald-200 hover:text-white transition-colors"
          >
            Back to Sign In
          </Link>
        </>
      }
    >
      <AuthForm mode="forgot-password" />
    </AuthShell>
  );
}
