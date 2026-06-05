import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import {
  sendContactAutoReply,
  sendInternalContactNotification,
} from "@/lib/email";

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

function extractTopic(message: string): string | null {
  const match = message.match(/^Topic:\s*([^.]+)\./i);
  return match ? match[1].trim() : null;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }
  const data = parsed.data;

  if (data.honeypot && data.honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip");
  const captchaOk = await verifyTurnstile(data.turnstileToken, ip);
  if (!captchaOk) {
    return NextResponse.json({ error: "Captcha verification failed" }, { status: 403 });
  }

  // Persist to Supabase if configured
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const supabase = createSupabaseAdminClient();
      await supabase.from("contact_requests").insert({
        name: data.name,
        email: data.email,
        company: data.company || null,
        topic: extractTopic(data.message),
        message: data.message,
        ip,
        user_agent: req.headers.get("user-agent") ?? null,
      });
    } catch (err) {
      console.warn("[contact] supabase insert failed:", err);
    }
  }

  if (!process.env.RESEND_API_KEY) {
    console.warn("[contact] RESEND_API_KEY not set, skipping email send");
    return NextResponse.json({ ok: true, note: "[EMAIL_NOT_CONFIGURED]" });
  }

  // Fire both in parallel: internal notification + customer auto-reply.
  const topic = extractTopic(data.message);
  const [internalResult, autoReplyResult] = await Promise.all([
    sendInternalContactNotification({
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
    }),
    sendContactAutoReply(data.email, data.name, topic),
  ]);

  if (internalResult.error) {
    return NextResponse.json({ error: "Email send failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, autoReply: !autoReplyResult.error });
}
