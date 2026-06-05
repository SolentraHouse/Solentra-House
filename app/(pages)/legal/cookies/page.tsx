import type { Metadata } from "next";
import { LegalDoc } from "@/components/sections/LegalDoc";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description: "What cookies Solentra House uses on this site, what they do, and how to control them.",
  path: "/legal/cookies",
});

export default function CookiesPage() {
  return (
    <LegalDoc title="Cookie Policy" lastUpdated="2026-05-28" legalEmail={siteConfig.contact.legal}>
      <h2>1. What cookies are</h2>
      <p>
        Cookies are small text files placed on your device by a website. We also use comparable technologies such as local storage. Together we refer to these as &quot;cookies&quot; in this policy.
      </p>

      <h2>2. Categories of cookies on this site</h2>

      <h3>Strictly necessary</h3>
      <p>
        Required to run the site. They cannot be disabled because the site cannot function without them. These cover your consent preferences, session state on protected pages, and basic security signals.
      </p>

      <h3>Analytics (opt-in)</h3>
      <p>
        Used only if you accept analytics in our cookie banner. We use Google Analytics 4 (Google Ireland Limited) and Microsoft Clarity (Microsoft Ireland Operations Limited) to understand how visitors use the site and where to improve it. IP addresses are anonymised. No analytics scripts load before consent.
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
            <td className="px-3 py-2">Stores your consent choice</td>
            <td className="px-3 py-2">12 months</td>
            <td className="px-3 py-2">Strictly necessary</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">solentra-session</td>
            <td className="px-3 py-2">Solentra House</td>
            <td className="px-3 py-2">Authenticated session on /account</td>
            <td className="px-3 py-2">Session</td>
            <td className="px-3 py-2">Strictly necessary</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">cf_clearance</td>
            <td className="px-3 py-2">Cloudflare</td>
            <td className="px-3 py-2">Captcha and bot protection</td>
            <td className="px-3 py-2">30 days</td>
            <td className="px-3 py-2">Strictly necessary</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">_ga, _ga_*</td>
            <td className="px-3 py-2">Google Analytics 4</td>
            <td className="px-3 py-2">Distinguishes visitors and sessions</td>
            <td className="px-3 py-2">13 months</td>
            <td className="px-3 py-2">Analytics</td>
          </tr>
          <tr className="border-t border-white/10">
            <td className="px-3 py-2 font-mono">_clck, _clsk</td>
            <td className="px-3 py-2">Microsoft Clarity</td>
            <td className="px-3 py-2">Stores session interaction data</td>
            <td className="px-3 py-2">12 months / 1 day</td>
            <td className="px-3 py-2">Analytics</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Third parties</h2>
      <p>
        Where we use third-party services, those parties may set their own cookies. Their policies are linked below:
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/privacy">Google privacy policy</a>
        </li>
        <li>
          <a href="https://privacy.microsoft.com/privacystatement">Microsoft privacy statement</a>
        </li>
        <li>
          <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare privacy policy</a>
        </li>
        <li>
          <a href="https://app.gumroad.com/privacy">Gumroad privacy policy</a>
        </li>
      </ul>

      <h2>5. How to control cookies</h2>
      <p>
        You can change your choice at any time by clearing the consent value from your browser&apos;s site storage. Most browsers also let you block or delete cookies through their settings. Blocking strictly necessary cookies may prevent parts of the site from working.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions about cookies on this site: {siteConfig.contact.legal}.
      </p>
    </LegalDoc>
  );
}
