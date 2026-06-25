import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "What cookies and similar technologies Solentra House uses, what each does, how long they last, and how to control them.",
  path: "/legal/cookies",
});

export default function CookiesPage() {
  return (
    <LegalDoc
      title="Cookie Policy"
      lastUpdated="2026-06-25"
      legalEmail={siteConfig.contact.legal}
    >
      <h2>1. What this Policy covers</h2>
      <p>
        Cookies are small text files placed on your device by a website. We also use comparable technologies, including HTML local storage and session storage, to store small amounts of information in your browser. In this Policy we refer to all of these as &quot;cookies&quot;.
      </p>
      <p>
        This Policy explains the categories of cookies we use, what each cookie does, how long it lasts, and how you can control them. It should be read alongside our{" "}
        <a href="/legal/privacy">Privacy Policy</a>.
      </p>

      <h2>2. Categories of cookies on this site</h2>

      <h3>Strictly necessary</h3>
      <p>
        Required for the site to function. They cannot be disabled through our consent banner because the site cannot work without them. They cover consent preferences, authenticated session state on protected pages, and basic security signals.
      </p>

      <h3>Analytics (opt-in)</h3>
      <p>
        Loaded only if you accept the &quot;Analytics&quot; option in our cookie banner. We use Google Analytics 4 (Google Ireland Limited) and Microsoft Clarity (Microsoft Ireland Operations Limited) to understand how visitors use the site and where to improve it. IP addresses are anonymised. No analytics scripts load before consent is given.
      </p>

      <h2>3. Cookies used on this site</h2>
      <table className="text-xs mt-3 border border-white/10 rounded-xl overflow-hidden">
        <thead className="bg-white/5 text-left">
          <tr>
            <th className="px-3 py-2 font-semibold">Name</th>
            <th className="px-3 py-2 font-semibold">Provider</th>
            <th className="px-3 py-2 font-semibold">Purpose</th>
            <th className="px-3 py-2 font-semibold">Duration</th>
            <th className="px-3 py-2 font-semibold">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">solentra-cookie-consent-v1</td>
            <td className="px-3 py-2">Solentra House</td>
            <td className="px-3 py-2">Stores your consent choice (local storage)</td>
            <td className="px-3 py-2">12 months</td>
            <td className="px-3 py-2">Strictly necessary</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">sb-access-token, sb-refresh-token</td>
            <td className="px-3 py-2">Supabase</td>
            <td className="px-3 py-2">Authenticated session on /account and /checkout</td>
            <td className="px-3 py-2">Session / up to 7 days</td>
            <td className="px-3 py-2">Strictly necessary</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">cf_clearance</td>
            <td className="px-3 py-2">Cloudflare</td>
            <td className="px-3 py-2">Captcha verification and bot protection</td>
            <td className="px-3 py-2">30 days</td>
            <td className="px-3 py-2">Strictly necessary</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">_ga, _ga_*</td>
            <td className="px-3 py-2">Google Analytics 4</td>
            <td className="px-3 py-2">Distinguishes visitors and sessions</td>
            <td className="px-3 py-2">Up to 13 months</td>
            <td className="px-3 py-2">Analytics</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">_clck</td>
            <td className="px-3 py-2">Microsoft Clarity</td>
            <td className="px-3 py-2">Persists a Clarity user identifier</td>
            <td className="px-3 py-2">12 months</td>
            <td className="px-3 py-2">Analytics</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">_clsk</td>
            <td className="px-3 py-2">Microsoft Clarity</td>
            <td className="px-3 py-2">Throttles request rate per session</td>
            <td className="px-3 py-2">1 day</td>
            <td className="px-3 py-2">Analytics</td>
          </tr>
        </tbody>
      </table>

      <h2>4. How long cookies last</h2>
      <p>
        Cookies are either session cookies (deleted when you close the browser) or persistent cookies (remain for a defined period). Durations in the table above are maximums; some processors expire earlier.
      </p>

      <h2>5. Third-party privacy notices</h2>
      <p>
        Where we use third-party services, those parties may set their own cookies under their own policies:
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">
            Google privacy policy
          </a>
        </li>
        <li>
          <a href="https://privacy.microsoft.com/privacystatement" rel="noopener noreferrer" target="_blank">
            Microsoft privacy statement
          </a>
        </li>
        <li>
          <a href="https://www.cloudflare.com/privacypolicy/" rel="noopener noreferrer" target="_blank">
            Cloudflare privacy policy
          </a>
        </li>
        <li>
          <a href="https://supabase.com/privacy" rel="noopener noreferrer" target="_blank">
            Supabase privacy policy
          </a>
        </li>
        <li>
          <a href="https://app.gumroad.com/privacy" rel="noopener noreferrer" target="_blank">
            Gumroad privacy policy
          </a>
        </li>
        <li>
          <a href="https://resend.com/legal/privacy-policy" rel="noopener noreferrer" target="_blank">
            Resend privacy policy
          </a>
        </li>
        <li>
          <a href="https://vercel.com/legal/privacy-policy" rel="noopener noreferrer" target="_blank">
            Vercel privacy policy
          </a>
        </li>
      </ul>

      <h2>6. How to change your choice</h2>
      <p>
        You can change your cookie choice at any time:
      </p>
      <ul>
        <li>
          <strong>Reset on this site:</strong> open your browser&apos;s site storage settings for{" "}
          {siteConfig.url}, delete the key <span className="font-mono">solentra-cookie-consent-v1</span>, and reload the page. The consent banner reappears so you can choose again.
        </li>
        <li>
          <strong>Block or delete cookies globally:</strong> most browsers (Chrome, Safari, Firefox, Edge) let you block or delete cookies through their privacy settings. Blocking strictly necessary cookies may prevent parts of the site from working, including authenticated areas.
        </li>
      </ul>

      <h2>7. Do Not Track and Global Privacy Control</h2>
      <p>
        No common, standardised browser signal for cookie consent has been adopted at the time of this Policy. We do not currently respond to the legacy &quot;Do Not Track&quot; header, because no clear interpretation of the signal is agreed by industry or regulators. We do respect the choice you make in our cookie banner, which is the authoritative consent record on this site.
      </p>

      <h2>8. Updates to this Policy</h2>
      <p>
        We update this Policy when the cookies on the site change. The current version is identified by the &quot;Last updated&quot; date at the top of this page.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about cookies on this site: {siteConfig.contact.legal}.
      </p>
    </LegalDoc>
  );
}
