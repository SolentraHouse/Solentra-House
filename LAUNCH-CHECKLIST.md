# Launch Checklist — Solentra House

> Living tracker for everything needed before going to production.
> ✅ = done · ⏳ = pending external action · 🔧 = needs code work · ❌ = blocker

---

## 🔧 Code-side TODOs

### 1. Gumroad webhook — refactor under real Gumroad scheme

**File:** [app/api/webhook/route.ts](app/api/webhook/route.ts)

**Issue:** Current code validates webhook via `x-gumroad-signature` HTTP header. Gumroad's Ping system does NOT send our custom secret in headers — it sends a POST with form data only.

**Recorded date:** 2026-06-04

**What to change:**
1. Stop checking custom header
2. Validate by `seller_id` matching our known seller (whitelist from env var `GUMROAD_SELLER_ID`)
3. Optionally cross-check `product_id` against our known 8 product IDs
4. Alternative: use Gumroad's REST API (with `GUMROAD_ACCESS_TOKEN`) to verify the sale exists before persisting

**Why not now:** Webhook is only reachable from public internet. Gumroad cannot POST to `http://localhost:3000`. Will be wired up at Vercel deploy step.

**Env vars currently set:**
- `GUMROAD_WEBHOOK_SECRET=b34902444be79345bdc904e72b06a9e582843451d84ac8ab782a936b2da37e2f` (kept for fallback / Gumroad's optional header support, but not the primary trust mechanism)
- `GUMROAD_ACCESS_TOKEN` — pending (need to generate from Gumroad → Settings → Advanced → Applications)
- `GUMROAD_SELLER_ID` — pending (visible in Gumroad → Settings → Profile, the numeric ID)

**Trigger to do this:** When deploying to Vercel and setting Ping URL to `https://solentrahouse.xyz/api/webhook` in Gumroad.

---

### 2. Custom Consultation — IBAN / Invoice flow

**Discussed:** 2026-06-04

**What's planned:** Replace current "Request consultation" CTA flow with proper IBAN/invoice path. Admin creates invoice → unique URL with IBAN + reference → user pays → admin marks paid. Add Public Offer document to legal section.

**Dependencies:**
- UK business bank account (Wise Business recommended) → IBAN + BIC
- Decision on admin UI scope (full admin page vs Supabase Dashboard manual rows)

**Status:** Not started. Will pick up after Gumroad + Vercel deploy stabilises.

---

## ⏳ External tasks (user-side)

### Domain / DNS

- [ ] Domain `solentrahouse.xyz` purchased ✅
- [ ] Domain on Cloudflare DNS (nameservers switched) — verify
- [ ] DNS A record / CNAME pointing to Vercel (set after Vercel project created)

### Vercel deploy

- [ ] Vercel account created
- [ ] Connect GitHub repo (push project there first)
- [ ] Add `solentrahouse.xyz` as production domain
- [ ] Copy all env vars from `.env.local` to Vercel project (Settings → Environment Variables)
- [ ] Override `NEXT_PUBLIC_SITE_URL=https://solentrahouse.xyz` for production env
- [ ] Verify build succeeds + site renders at prod URL

### Email

- [x] Resend account + API key
- [x] Resend domain `solentrahouse.xyz` verified
- [x] Welcome email wired (registration)
- [x] Contact auto-reply wired
- [x] Contact internal notification wired
- [x] Supabase SMTP set to Resend (password reset emails branded)
- [x] Reset password template customised in Supabase Dashboard
- [ ] Cloudflare Email Routing — `*@solentrahouse.xyz` → `solentrahouse@outlook.com`
  - Outlook destination verified
  - Catch-all rule active
- [ ] Test all 4 email flows end to end on prod URL

### Gumroad

- [x] Seller account created (`solentra4.gumroad.com`)
- [x] 8 products created with URLs added to `.env.local`
- [x] Webhook secret generated and stored
- [ ] Webhook (Ping URL) set in Gumroad → `https://solentrahouse.xyz/api/webhook` (after Vercel deploy)
- [ ] Generate `GUMROAD_ACCESS_TOKEN` (Settings → Advanced → Applications → New application)
- [ ] Get `GUMROAD_SELLER_ID` (numeric ID from Settings → Profile)
- [ ] Code refactor of `/api/webhook` per item #1 above
- [ ] Test a real purchase end to end and verify it appears in Supabase `purchases` table
- [ ] Test that the purchase appears in `/account` dashboard

### Supabase

- [x] Project created
- [x] Tables created (`purchases`, `purchase_intents`, `contact_requests`)
- [x] RLS policies active
- [x] Auth providers (email) enabled, confirmation disabled
- [x] Custom SMTP via Resend
- [x] Custom email templates (Reset Password)
- [ ] Production Site URL set to `https://solentrahouse.xyz`
- [ ] Redirect URLs include `https://solentrahouse.xyz/account` and `https://solentrahouse.xyz/reset-password`

### Cloudflare Turnstile

- [x] Site created
- [x] Site key + secret key added to `.env.local`
- [ ] Production hostname `solentrahouse.xyz` added to Turnstile widget Hostnames list

### Analytics

- [ ] Google Analytics 4 property created → `NEXT_PUBLIC_GA_ID`
- [ ] Microsoft Clarity project created → `NEXT_PUBLIC_CLARITY_PROJECT_ID`
- [ ] Verify they load only after cookie consent

### SEO

- [x] Sitemap generated
- [x] Robots.txt generated
- [x] OG image runtime generation
- [x] Favicon (SVG + apple-icon)
- [ ] Google Search Console — add `solentrahouse.xyz` property
- [ ] Verify domain ownership in GSC (DNS TXT or HTML file)
- [ ] Submit sitemap `https://solentrahouse.xyz/sitemap.xml` to GSC
- [ ] PageSpeed Insights — target ≥85 mobile, <3s load
- [ ] Test OG preview on https://www.opengraph.xyz/
- [ ] Run broken-link check on https://www.deadlinkchecker.com/

### Business data (replace placeholders)

- [ ] **Company registration number** (UK Companies House) → replace `[REGISTRATION_NUMBER - PENDING]` in `lib/site.ts`
- [ ] **Real phone number** → replace `+44 20 *** ****` in `lib/site.ts`
- [ ] **Twitter/X URL** (when account created) → update `siteConfig.social.twitter`
- [ ] **UK business bank IBAN** (needed for Custom Consultation IBAN flow)

### Legal

- [ ] **Legal review** of all 5 (soon 6 with Public Offer) legal documents by licensed UK solicitor or qualified GDPR consultant
- [ ] Remove `[LEGAL REVIEW REQUIRED BEFORE PUBLISHING]` notices after review

---

## ✅ Already complete

- Full site structure (Hero, TrustLayer, How It Works, Services, About, FAQ, Contact, Footer)
- Auth flow (login, register, forgot password, reset password)
- Account dashboard (with purchases, profile incl. phone, security, logout)
- 9 services with descriptions, prices, animations
- Checkout flow (intent persistence + Gumroad redirect)
- 3 email templates with brand-styled HTML
- Cookie banner (modal, blocks scroll)
- 5 legal pages (Privacy, Cookies, GDPR, Terms, Refund)
- Logo SVG (favicon, apple-icon, header, footer, auth shell)
- Dark glassmorphic theme with WebGL smokey background
- Turnstile captcha integration
- Supabase auth + database schema
- Resend transactional email module

---

Last reviewed: 2026-06-04
