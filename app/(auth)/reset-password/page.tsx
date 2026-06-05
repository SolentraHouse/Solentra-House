import Link from "next/link";
import type { Metadata } from "next";
import { AuthShell } from "@/components/forms/AuthShell";
import { ResetPasswordForm } from "@/components/forms/ResetPasswordForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Set new password",
  description: "Set a new password for your Solentra House account.",
  path: "/reset-password",
  noIndex: true,
});

export const dynamic = "force-dynamic";

export default function ResetPasswordPage() {
  return (
    <AuthShell
      title="Set New Password"
      subtitle="Choose a new password for your account"
      footer={
        <>
          Changed your mind?{" "}
          <Link
            href="/account"
            className="font-bold text-emerald-200 hover:text-white transition-colors"
          >
            Back to account
          </Link>
        </>
      }
    >
      <ResetPasswordForm />
    </AuthShell>
  );
}
