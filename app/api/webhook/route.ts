import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";
import { SERVICES } from "@/lib/services";

// TODO (recorded 2026-06-04 in LAUNCH-CHECKLIST.md #1):
// Gumroad Ping does NOT send our custom secret in headers.
// Refactor this route to validate by seller_id whitelist (env GUMROAD_SELLER_ID)
// or by calling Gumroad REST API with GUMROAD_ACCESS_TOKEN to verify the sale.
// This rewrite happens at Vercel deploy step, when the Ping URL is set in Gumroad.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface GumroadPing {
  seller_id?: string;
  product_id?: string;
  product_permalink?: string;
  permalink?: string;
  product_name?: string;
  email?: string;
  price?: string;
  currency?: string;
  order_number?: number | string;
  sale_id?: string;
  sale_timestamp?: string;
  test?: string;
  [key: string]: unknown;
}

function inferServiceId(permalink?: string, productName?: string): string | null {
  const lookup = `${permalink ?? ""} ${productName ?? ""}`.toLowerCase();
  for (const service of SERVICES) {
    if (lookup.includes(service.id) || lookup.includes(service.title.toLowerCase())) {
      return service.id;
    }
  }
  return null;
}

export async function POST(req: Request) {
  const secret = process.env.GUMROAD_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "[PAYMENT_NOT_CONFIGURED]", detail: "GUMROAD_WEBHOOK_SECRET not set" },
      { status: 503 },
    );
  }

  const provided =
    req.headers.get("x-gumroad-signature") ?? req.headers.get("authorization") ?? "";
  if (provided !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let payload: GumroadPing;
  try {
    const contentType = req.headers.get("content-type") ?? "";
    if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await req.formData();
      payload = Object.fromEntries(form.entries()) as unknown as GumroadPing;
    } else {
      payload = (await req.json()) as GumroadPing;
    }
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { error: "[DATABASE_NOT_CONFIGURED]", detail: "SUPABASE_SERVICE_ROLE_KEY not set" },
      { status: 503 },
    );
  }

  const supabase = createSupabaseAdminClient();
  const serviceId = inferServiceId(payload.product_permalink ?? payload.permalink, payload.product_name);

  let userId: string | null = null;
  if (payload.email) {
    const { data: users } = await supabase.auth.admin.listUsers();
    const match = users?.users?.find(
      (u) => u.email && payload.email && u.email.toLowerCase() === payload.email.toLowerCase(),
    );
    if (match) userId = match.id;
  }

  const { error } = await supabase.from("purchases").upsert(
    {
      user_id: userId,
      service_id: serviceId,
      gumroad_sale_id: payload.sale_id ?? null,
      gumroad_product_id: payload.product_id ?? null,
      gumroad_permalink: payload.product_permalink ?? payload.permalink ?? null,
      product_name: payload.product_name ?? null,
      price: payload.price ?? null,
      currency: payload.currency ?? null,
      customer_email: payload.email ?? null,
      sale_timestamp: payload.sale_timestamp ?? new Date().toISOString(),
      raw_payload: payload,
    },
    { onConflict: "gumroad_sale_id" },
  );

  if (error) {
    return NextResponse.json({ error: "Persistence failed", detail: error.message }, { status: 500 });
  }

  return NextResponse.json({
    received: true,
    saleId: payload.sale_id ?? null,
    serviceId,
    linkedUser: Boolean(userId),
  });
}
