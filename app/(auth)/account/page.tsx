import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LogOut, ShieldCheck, User, CreditCard, LayoutDashboard, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = pageMetadata({
  title: "Account",
  description: "Your Solentra House account dashboard.",
  path: "/account",
  noIndex: true,
});

export const dynamic = "force-dynamic";

interface Purchase {
  id: string;
  service_id: string;
  product_name: string | null;
  price: string | null;
  currency: string | null;
  sale_timestamp: string | null;
}

export default async function AccountPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?redirect=/account");
  }

  const fullName =
    (user.user_metadata?.full_name as string | undefined) ?? user.email ?? "";
  const email = user.email ?? "";
  const phone = (user.user_metadata?.phone as string | undefined) ?? "";

  const { data: purchasesData } = await supabase
    .from("purchases")
    .select("id, service_id, product_name, price, currency, sale_timestamp")
    .eq("user_id", user.id)
    .order("sale_timestamp", { ascending: false });

  const purchases = (purchasesData ?? []) as Purchase[];
  const purchaseCount = purchases.length;

  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <header className="mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-sky-300">
          Account
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Welcome back
        </h1>
        <p className="mt-2 text-sm text-white/55">
          Manage your engagements, profile, and billing with {siteConfig.name}.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
        <DashCard icon={LayoutDashboard} title="Overview" accent="text-slate-300">
          <p className="text-sm text-white/80">{fullName}</p>
          <p className="text-xs text-white/55">{email}</p>
          <p className="mt-3 text-xs text-white/55">
            {purchaseCount === 0
              ? "No purchases yet."
              : `${purchaseCount} active engagement${purchaseCount === 1 ? "" : "s"}.`}
          </p>
          <Link
            href="/#services"
            className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white hover:underline"
          >
            Browse services <ArrowRight className="h-3 w-3" />
          </Link>
        </DashCard>

        <DashCard icon={User} title="Profile" accent="text-indigo-300">
          <p className="text-xs text-white/55">Name</p>
          <p className="text-sm text-white/90">{fullName || "[Add your name]"}</p>
          <p className="mt-3 text-xs text-white/55">Email</p>
          <p className="text-sm text-white/90">{email}</p>
          <p className="mt-3 text-xs text-white/55">Phone</p>
          <p className="text-sm text-white/90">{phone || "[Not provided]"}</p>
        </DashCard>

        <DashCard icon={ShieldCheck} title="Security" accent="text-emerald-300">
          <p className="text-xs text-white/55">Password</p>
          <p className="text-sm text-white/90">Managed by Supabase Auth</p>
          <Link
            href="/reset-password?from=account"
            className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-white hover:underline"
          >
            Change password <ArrowRight className="h-3 w-3" />
          </Link>
        </DashCard>

        <DashCard icon={CreditCard} title="Billing" accent="text-amber-300" className="lg:col-span-2">
          <p className="text-xs text-white/55">
            Purchase history is synced from Gumroad after each completed transaction.
          </p>
          {purchaseCount === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-white/15 bg-white/5 p-5">
              <p className="text-sm text-white/80">No purchases yet.</p>
              <p className="mt-1 text-xs text-white/55">
                When you buy a service, it will appear here with its receipt and start date.
              </p>
            </div>
          ) : (
            <ul className="mt-4 divide-y divide-white/10">
              {purchases.map((p) => (
                <li
                  key={p.id}
                  className="py-3 flex items-center justify-between gap-3 text-sm"
                >
                  <div>
                    <p className="text-white/90">{p.product_name ?? p.service_id}</p>
                    {p.sale_timestamp && (
                      <p className="text-xs text-white/50">
                        {new Date(p.sale_timestamp).toLocaleDateString("en-GB")}
                      </p>
                    )}
                  </div>
                  {p.price && (
                    <p className="text-white/90 font-mono text-xs">
                      {p.currency ? `${p.currency} ` : ""}
                      {p.price}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </DashCard>

        <DashCard icon={LogOut} title="Logout" accent="text-rose-300">
          <p className="text-xs text-white/55">
            End your session on this device.
          </p>
          <form action="/api/auth/logout" method="POST" className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-medium hover:bg-white/90 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              Log out
            </button>
          </form>
        </DashCard>
      </div>
    </section>
  );
}

function DashCard({
  icon: Icon,
  title,
  accent,
  className = "",
  children,
}: {
  icon: typeof User;
  title: string;
  accent: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`bg-white/8 backdrop-blur-md border border-white/15 rounded-2xl p-5 md:p-6 ${className}`}>
      <div className="flex items-center gap-2">
        <Icon className={`h-4 w-4 ${accent}`} />
        <p className="text-xs font-mono uppercase tracking-widest text-white/40">
          {title}
        </p>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
