import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/validation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { siteConfig } from "@/lib/site";
import { sendWelcomeEmail } from "@/lib/email";

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
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }
  const { name, email, phone, password, turnstileToken } = parsed.data;

  const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip");
  const captchaOk = await verifyTurnstile(turnstileToken, ip);
  if (!captchaOk) {
    return NextResponse.json({ error: "Captcha verification failed" }, { status: 403 });
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name, phone },
      emailRedirectTo: `${siteConfig.url}/account`,
    },
  });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // Fire-and-forget welcome email — do not block the signup response.
  sendWelcomeEmail(email, name).catch((err) => {
    console.warn("[register] welcome email error (non-fatal):", err);
  });

  return NextResponse.json({ ok: true });
}
