import { NextResponse } from "next/server";
import { forgotPasswordSchema } from "@/lib/validation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = forgotPasswordSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }
  const { email, turnstileToken } = parsed.data;

  const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip");
  const captchaOk = await verifyTurnstile(turnstileToken, ip);
  if (!captchaOk) {
    return NextResponse.json({ error: "Captcha verification failed" }, { status: 403 });
  }

  const supabase = await createSupabaseServerClient();
  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteConfig.url}/reset-password`,
  });
  // Always return ok to avoid leaking which emails are registered.
  return NextResponse.json({ ok: true });
}
