import { NextResponse } from "next/server";
import { SERVICES, getGumroadUrl } from "@/lib/services";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const serviceId = url.searchParams.get("service");
  if (!serviceId) {
    return NextResponse.json({ error: "Missing service id" }, { status: 400 });
  }

  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) {
    return NextResponse.json({ error: "Unknown service" }, { status: 404 });
  }

  if (service.priceValue === null) {
    return NextResponse.redirect(new URL("/#contact", req.url));
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

  return NextResponse.redirect(gumroadUrl, { status: 302 });
}
