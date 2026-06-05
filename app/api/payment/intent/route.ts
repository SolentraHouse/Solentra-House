import { NextResponse } from "next/server";
import { z } from "zod";
import { SERVICES, getGumroadUrl } from "@/lib/services";
import { createSupabaseServerClient, createSupabaseAdminClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const intentSchema = z.object({
  serviceId: z.string().min(1).max(100),
  name: z.string().trim().min(1).max(160),
  company: z.string().trim().max(200).optional(),
  notes: z.string().trim().max(5000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Acceptance of terms is required" }),
  }),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = intentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }
  const data = parsed.data;

  const service = SERVICES.find((s) => s.id === data.serviceId);
  if (!service || service.priceValue === null) {
    return NextResponse.json({ error: "Unknown service" }, { status: 404 });
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Authentication required" }, { status: 401 });
  }

  const gumroadUrl = getGumroadUrl(service.gumroadEnvVar);
  if (!gumroadUrl) {
    return NextResponse.json(
      {
        error: "[PAYMENT_NOT_CONFIGURED]",
        detail: `Set ${service.gumroadEnvVar} in environment variables.`,
      },
      { status: 503 },
    );
  }

  // Persist the intent (best-effort — do not block checkout if Supabase fails)
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      const admin = createSupabaseAdminClient();
      await admin.from("purchase_intents").insert({
        user_id: user.id,
        service_id: service.id,
        customer_name: data.name,
        customer_email: user.email,
        company: data.company || null,
        notes: data.notes || null,
        amount: service.priceValue,
        currency: "EUR",
        status: "pending",
      });
    } catch (err) {
      console.warn("[payment/intent] supabase insert failed:", err);
    }
  }

  // Append email prefill so Gumroad checkout already knows the customer.
  const checkoutUrl = new URL(gumroadUrl);
  if (user.email) checkoutUrl.searchParams.set("email", user.email);
  checkoutUrl.searchParams.set("wanted", "true");

  return NextResponse.json({ redirectUrl: checkoutUrl.toString() });
}
