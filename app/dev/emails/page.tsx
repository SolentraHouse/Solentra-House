import { notFound } from "next/navigation";
import {
  renderWelcomeEmail,
  renderContactAutoReply,
  renderInternalContactNotification,
} from "@/lib/email";

export const dynamic = "force-dynamic";

export default function EmailPreviewPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const welcome = renderWelcomeEmail("Anna");
  const autoReply = renderContactAutoReply("Anna", "Digital strategy");
  const internal = renderInternalContactNotification({
    name: "Anna Petrenko",
    email: "anna@example.com",
    company: "Example Co.",
    message:
      "Topic: Digital strategy.\n\nDetails:\nWe are a 12-person SaaS team in Berlin. Launching our second product in Q3. Need a written 6-month digital strategy with KPIs.",
  });

  const samples = [
    {
      key: "welcome",
      label: "Welcome email",
      audience: "→ Sent to: NEW USER (right after registration)",
      trigger: "Trigger: user creates account on /register",
      data: welcome,
    },
    {
      key: "auto-reply",
      label: "Contact form auto-reply",
      audience: "→ Sent to: CUSTOMER (the person who filled the form)",
      trigger: "Trigger: someone submits the contact form on /#contact",
      data: autoReply,
    },
    {
      key: "internal",
      label: "Contact form notification",
      audience: "→ Sent to: YOUR TEAM (CONTACT_TO_EMAIL = solentrahouse@outlook.com)",
      trigger: "Trigger: same submission (sent in parallel with the customer auto-reply)",
      data: internal,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <header className="mb-10">
        <p className="text-xs font-mono uppercase tracking-widest text-amber-300">
          Dev tools
        </p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Email templates preview
        </h1>
        <p className="mt-3 text-sm text-white/55">
          Renders the actual HTML each template will produce. Visible only in development.
        </p>
      </header>

      <div className="space-y-12">
        {samples.map((sample) => (
          <article
            key={sample.key}
            className="bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl overflow-hidden"
          >
            <div className="px-6 md:px-8 py-5 border-b border-white/10">
              <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                {sample.label}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-white">
                Subject: {sample.data.subject}
              </h2>
              <p className="mt-2 text-sm text-emerald-300 font-medium">{sample.audience}</p>
              <p className="mt-1 text-xs text-white/55">{sample.trigger}</p>
              <p className="mt-2 text-[11px] font-mono text-white/40">
                preheader: &quot;{sample.data.preheader}&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="lg:col-span-2 bg-neutral-100">
                <iframe
                  title={`${sample.key}-html`}
                  srcDoc={sample.data.html}
                  className="w-full h-[640px] block border-0 bg-white"
                />
              </div>
              <div className="lg:col-span-1 p-5 md:p-6 bg-neutral-950">
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
                  Plain text version
                </p>
                <pre className="text-xs text-white/75 whitespace-pre-wrap leading-relaxed font-mono max-h-[600px] overflow-y-auto">
                  {sample.data.text}
                </pre>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-xs text-white/40">
        Sample data: Anna Petrenko / anna@example.com / Example Co. / topic = &quot;Digital strategy&quot;
      </p>
    </section>
  );
}
