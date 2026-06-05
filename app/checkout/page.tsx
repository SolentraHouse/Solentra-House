import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Check, Clock, Tag } from "lucide-react";
import { CheckoutForm } from "@/components/forms/CheckoutForm";
import { SERVICES } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = pageMetadata({
  title: "Checkout",
  description: "Confirm your order and proceed to secure payment.",
  path: "/checkout",
  noIndex: true,
});

export const dynamic = "force-dynamic";

interface CheckoutPageProps {
  searchParams: Promise<{ service?: string }>;
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const { service: serviceId } = await searchParams;
  const service = SERVICES.find((s) => s.id === serviceId);

  if (!service || service.priceValue === null) {
    redirect("/#services");
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login?redirect=${encodeURIComponent(`/checkout?service=${serviceId}`)}`);
  }

  const fullName = (user.user_metadata?.full_name as string | undefined) ?? "";
  const email = user.email ?? "";

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <Link
        href="/#services"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-white/55 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to services
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <aside className="lg:col-span-5 space-y-6">
          <header>
            <p className="text-xs font-mono uppercase tracking-widest text-sky-300">
              Checkout
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              You are purchasing
            </h1>
          </header>

          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/8 backdrop-blur-md p-6 md:p-7 space-y-5">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/15 text-blue-300 border border-blue-400/30">
              {service.category.toUpperCase()}
            </span>

            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {service.title}
            </h2>

            <p className="text-sm text-white/65 leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 bg-emerald-500/15 border border-emerald-400/20 px-3 py-1 rounded-full">
                <Tag className="h-3 w-3" />
                {service.price}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                <Clock className="h-3 w-3" />
                {service.duration}
              </span>
            </div>

            <div className="pt-2 border-t border-white/10">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/45 mb-3">
                WHAT IS INCLUDED
              </p>
              <ul className="space-y-2">
                {service.features.slice(0, 5).map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-white/75"
                  >
                    <div className="min-w-4 w-4 h-4 rounded-full bg-white text-neutral-950 flex items-center justify-center mt-0.5">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
                {service.features.length > 5 && (
                  <li className="text-xs text-white/50 pl-6">
                    +{service.features.length - 5} more deliverables
                  </li>
                )}
              </ul>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-7">
          <CheckoutForm
            service={service}
            initialName={fullName}
            initialEmail={email}
          />
        </div>
      </div>
    </section>
  );
}
