import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

function getResend(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

// The sending domain is decoupled from siteConfig.url so emails work in
// local dev too. Override with EMAIL_FROM_DOMAIN if Resend uses a different
// verified domain than the user-facing site.
const EMAIL_DOMAIN = process.env.EMAIL_FROM_DOMAIN || "solentrahouse.xyz";

const FROM_NAME = siteConfig.name;
const FROM_ADDRESS = `noreply@${EMAIL_DOMAIN}`;
const FROM = `${FROM_NAME} <${FROM_ADDRESS}>`;
const REPLY_TO = `support@${EMAIL_DOMAIN}`;

const BRAND = {
  background: "#0a0a0a",
  surface: "#1a1a1a",
  border: "#2a2a2a",
  text: "#ffffff",
  textMuted: "#a3a3a3",
  textDim: "#737373",
  accent: "#A8C58F",
};

export interface RenderedEmail {
  subject: string;
  html: string;
  text: string;
  preheader: string;
}

interface EmailResult {
  ok?: boolean;
  skipped?: boolean;
  error?: string;
}

function escape(s: string): string {
  return s.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function shell(innerHtml: string, preheader: string): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="color-scheme" content="dark light" />
    <title>${siteConfig.name}</title>
  </head>
  <body style="margin:0;padding:0;background:${BRAND.background};color:${BRAND.text};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <span style="display:none;visibility:hidden;opacity:0;height:0;width:0;overflow:hidden;">${preheader}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BRAND.background};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:${BRAND.surface};border:1px solid ${BRAND.border};border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px 12px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="vertical-align:middle;">
                      <svg width="34" height="34" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="display:block;">
                        <circle cx="32" cy="32" r="20" stroke="${BRAND.text}" stroke-width="3" fill="none" />
                        <circle cx="20" cy="44" r="7" fill="${BRAND.accent}" />
                        <circle cx="44" cy="20" r="4" fill="#9AB8DC" />
                      </svg>
                    </td>
                    <td style="vertical-align:middle;padding-left:12px;font-size:16px;font-weight:600;color:${BRAND.text};letter-spacing:-0.3px;">
                      ${siteConfig.name}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 32px 32px;color:${BRAND.text};">
                ${innerHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px 32px;border-top:1px solid ${BRAND.border};font-size:12px;line-height:1.6;color:${BRAND.textDim};">
                ${siteConfig.address.line1}, ${siteConfig.address.city} ${siteConfig.address.postcode}, ${siteConfig.address.country}
                <br />
                Questions? <a href="mailto:${REPLY_TO}" style="color:${BRAND.textMuted};text-decoration:underline;">${REPLY_TO}</a>
                &middot; <a href="${siteConfig.url}/legal/privacy" style="color:${BRAND.textMuted};text-decoration:underline;">Privacy</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function button(label: string, href: string): string {
  return `<a href="${href}" style="display:inline-block;padding:12px 22px;background:${BRAND.text};color:${BRAND.background};text-decoration:none;border-radius:999px;font-weight:600;font-size:14px;">${label}</a>`;
}

// ============================================================
// 1. Welcome email - after successful registration
// ============================================================
export function renderWelcomeEmail(name?: string): RenderedEmail {
  const greeting = name ? `Hi ${name},` : "Hi there,";
  const accountUrl = `${siteConfig.url}/account`;
  const servicesUrl = `${siteConfig.url}/#services`;
  const preheader = `Your ${siteConfig.name} account is ready.`;

  const inner = `
    <h1 style="margin:0 0 16px 0;font-size:24px;font-weight:600;letter-spacing:-0.5px;color:${BRAND.text};">
      Welcome to ${siteConfig.name}.
    </h1>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:${BRAND.textMuted};">
      ${greeting} Your account is ready.
    </p>
    <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:${BRAND.textMuted};">
      You can now browse services, place orders, and track engagements from one place.
    </p>
    <p style="margin:0 0 8px 0;">
      ${button("Go to your account", accountUrl)}
    </p>
    <p style="margin:18px 0 0 0;font-size:13px;color:${BRAND.textDim};">
      Looking for a place to start? <a href="${servicesUrl}" style="color:${BRAND.textMuted};text-decoration:underline;">Browse services</a> - nine engagements scoped and priced upfront.
    </p>`;

  const text = [
    `Welcome to ${siteConfig.name}.`,
    "",
    `${greeting} Your account is ready.`,
    "",
    "You can now browse services, place orders, and track engagements from one place.",
    "",
    `Go to your account: ${accountUrl}`,
    `Browse services: ${servicesUrl}`,
    "",
    `Questions? Reply to this email or write to ${REPLY_TO}.`,
  ].join("\n");

  return {
    subject: `Welcome to ${siteConfig.name}`,
    html: shell(inner, preheader),
    text,
    preheader,
  };
}

export async function sendWelcomeEmail(to: string, name?: string): Promise<EmailResult> {
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set, skipping welcome email");
    return { skipped: true };
  }
  const { subject, html, text } = renderWelcomeEmail(name);
  const { error } = await resend.emails.send({
    from: FROM,
    to,
    replyTo: REPLY_TO,
    subject,
    html,
    text,
  });
  if (error) {
    console.error("[email] welcome email failed:", error);
    return { error: error.message };
  }
  return { ok: true };
}

// ============================================================
// 2. Contact form auto-reply - to the customer
// ============================================================
export function renderContactAutoReply(name: string, topic: string | null): RenderedEmail {
  const topicLine = topic
    ? `We received your request about <strong style="color:${BRAND.text};">${escape(topic)}</strong>.`
    : "We received your request.";
  const preheader = "Our team will reach out shortly.";

  const inner = `
    <h1 style="margin:0 0 16px 0;font-size:24px;font-weight:600;letter-spacing:-0.5px;color:${BRAND.text};">
      Thanks, ${escape(name)}.
    </h1>
    <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:${BRAND.textMuted};">
      ${topicLine} Our team will reach out shortly at this email address.
    </p>
    <p style="margin:0 0 24px 0;font-size:15px;line-height:1.6;color:${BRAND.textMuted};">
      Meanwhile, you can look through what we offer.
    </p>
    <p style="margin:0;">
      ${button("Browse services", `${siteConfig.url}/#services`)}
    </p>`;

  const text = [
    `Thanks, ${name}.`,
    "",
    topic ? `We received your request about ${topic}.` : "We received your request.",
    "Our team will reach out shortly at this email address.",
    "",
    `Meanwhile, you can browse services: ${siteConfig.url}/#services`,
    "",
    `Questions in the meantime? Reply to this email or write to ${REPLY_TO}.`,
  ].join("\n");

  return {
    subject: `We received your request - ${siteConfig.name}`,
    html: shell(inner, preheader),
    text,
    preheader,
  };
}

export async function sendContactAutoReply(
  to: string,
  name: string,
  topic: string | null,
): Promise<EmailResult> {
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set, skipping contact auto-reply");
    return { skipped: true };
  }
  const { subject, html, text } = renderContactAutoReply(name, topic);
  const { error } = await resend.emails.send({
    from: FROM,
    to,
    replyTo: REPLY_TO,
    subject,
    html,
    text,
  });
  if (error) {
    console.error("[email] contact auto-reply failed:", error);
    return { error: error.message };
  }
  return { ok: true };
}

// ============================================================
// 3. Internal notification - to the team inbox
// ============================================================
export function renderInternalContactNotification(opts: {
  name: string;
  email: string;
  company?: string;
  message: string;
}): RenderedEmail {
  const preheader = `From ${opts.name} (${opts.email})`;

  const inner = `
    <h1 style="margin:0 0 16px 0;font-size:20px;font-weight:600;color:${BRAND.text};">
      New contact form submission
    </h1>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;color:${BRAND.textMuted};">
      <tr><td style="padding:4px 16px 4px 0;color:${BRAND.textDim};">Name</td><td style="padding:4px 0;color:${BRAND.text};">${escape(opts.name)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:${BRAND.textDim};">Email</td><td style="padding:4px 0;color:${BRAND.text};"><a href="mailto:${opts.email}" style="color:${BRAND.text};">${escape(opts.email)}</a></td></tr>
      ${opts.company ? `<tr><td style="padding:4px 16px 4px 0;color:${BRAND.textDim};">Company</td><td style="padding:4px 0;color:${BRAND.text};">${escape(opts.company)}</td></tr>` : ""}
    </table>
    <hr style="border:0;border-top:1px solid ${BRAND.border};margin:20px 0;" />
    <p style="margin:0;white-space:pre-wrap;font-size:14px;line-height:1.6;color:${BRAND.textMuted};">${escape(opts.message)}</p>`;

  const text = [
    `Name: ${opts.name}`,
    `Email: ${opts.email}`,
    opts.company ? `Company: ${opts.company}` : null,
    "",
    "Message:",
    opts.message,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject: `New contact form submission from ${opts.name}`,
    html: shell(inner, preheader),
    text,
    preheader,
  };
}

export async function sendInternalContactNotification(opts: {
  name: string;
  email: string;
  company?: string;
  message: string;
}): Promise<EmailResult> {
  const resend = getResend();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set, skipping internal notification");
    return { skipped: true };
  }
  const destination = process.env.CONTACT_TO_EMAIL ?? REPLY_TO;
  const { subject, html, text } = renderInternalContactNotification(opts);
  const { error } = await resend.emails.send({
    from: FROM,
    to: destination,
    replyTo: opts.email,
    subject,
    html,
    text,
  });
  if (error) {
    console.error("[email] internal notification failed:", error);
    return { error: error.message };
  }
  return { ok: true };
}
