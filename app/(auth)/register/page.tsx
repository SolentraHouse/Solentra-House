import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/components/forms/AuthShell";
import { AuthForm } from "@/components/forms/AuthForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Create account",
  description: "Create a Solentra House account to purchase services and manage engagements.",
  path: "/register",
  noIndex: true,
});

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create Account"
      subtitle="Register to access your Solentra workspace"
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-emerald-200 hover:text-white transition-colors"
          >
            Sign In
          </Link>
        </>
      }
    >
      <AuthForm mode="register" />
    </AuthShell>
  );
}
