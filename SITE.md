# SITE.md

## Site Identity

- Site slug: solentra-house
- Repository path: sites/solentra-house
- Site name: Solentra House
- Domain: solentrahouse.xyz
- Site type: landing (Legal documents on separate routes)
- Status: ready for site-check
- SITE.md confirmed: yes
- Confirmed by: Client
- Confirmed date: 2026-05-28
- Build date: 2026-05-28
- Build status: PASS (npm run build, npx tsc --noEmit, npm run lint all green; 16 routes generated)

## Company Information

- Company name: Solentra House
- Company description: Solentra House is a digital growth and communications agency specializing in online positioning, customer acquisition support, and brand communications for modern businesses. The company primarily serves startups, e-commerce businesses, and SMEs operating in European markets. Through data-driven methodologies and structured execution processes, Solentra House helps clients improve online visibility, strengthen customer engagement, and increase operational efficiency across digital channels.
- Business type: Digital growth and communications agency (B2B)
- Registration number: [REGISTRATION_NUMBER — PENDING — required before launch, user approved]
- Registered address: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
- Public address: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
- Phone: +44 7916 685 492
- Contact emails:
  - support@solentrahouse.xyz — client questions, support
  - business@solentrahouse.xyz — partners, collaboration
  - legal@solentrahouse.xyz — legal questions, GDPR requests
  - billing@solentrahouse.xyz — payment questions
- Social links:
  - Twitter/X — planned, URL [PENDING — to be added when account is created]
  - No other channels at this stage

## Services

Currency: EUR. Default for all services unless overridden: Buy button = yes, AuthGate = yes, Payment form required = yes (fields: email, name, company, brief description, visible price, payment methods). Payments routed through Gumroad hosted checkout.

### 1. Solentra Scan — Digital Presence Audit
- Description: A comprehensive audit of the brand's current digital presence across all key channels. Designed for businesses that want a clear understanding of where they stand online before investing in growth campaigns.
- Price: €1 199 (fixed)
- Duration: 2-3 weeks
- Buy button required: yes
- AuthGate required: yes
- Payment form fields: name, email, company, brief description, visible price, payment methods
- Special notes: Gumroad URL via NEXT_PUBLIC_GUMROAD_SOLENTRA_SCAN_URL

### 2. Performance Analysis & Optimisation
- Description: In-depth analysis of digital performance across all channels with concrete recommendations. Ideal for businesses already running digital activities who want to maximise ROI from existing investments.
- Price: €1 799 (fixed)
- Duration: 2-3 weeks
- Buy button required: yes
- AuthGate required: yes
- Payment form fields: name, email, company, brief description, visible price, payment methods
- Special notes: Gumroad URL via NEXT_PUBLIC_GUMROAD_PERFORMANCE_OPTIMISATION_URL

### 3. Brand Communications Framework
- Description: A clear and consistent brand communications system across all digital channels. Best suited for businesses that struggle with inconsistent messaging or unclear brand voice across platforms.
- Price: €2 099 (fixed)
- Duration: 3 weeks
- Buy button required: yes
- AuthGate required: yes
- Payment form fields: name, email, company, brief description, visible price, payment methods
- Special notes: Gumroad URL via NEXT_PUBLIC_GUMROAD_BRAND_COMMUNICATIONS_URL

### 4. Digital Strategy Development
- Description: A structured digital strategy that aligns online activities with business goals. Ideal for startups and SMEs ready to move from ad-hoc digital activities to a coherent, results-oriented approach.
- Price: €2 599 (fixed)
- Duration: 3-4 weeks
- Buy button required: yes
- AuthGate required: yes
- Payment form fields: name, email, company, brief description, visible price, payment methods
- Special notes: Gumroad URL via NEXT_PUBLIC_GUMROAD_DIGITAL_STRATEGY_URL

### 5. Communications Planning Programme
- Description: Quarterly communications planning for consistent, strategic, and measurable digital communications. Designed for businesses moving from reactive to proactive content and campaign planning.
- Price: €2 899 (fixed)
- Duration: 3-4 weeks
- Buy button required: yes
- AuthGate required: yes
- Payment form fields: name, email, company, brief description, visible price, payment methods
- Special notes: Gumroad URL via NEXT_PUBLIC_GUMROAD_COMMUNICATIONS_PLANNING_URL

### 6. Customer Acquisition Funnel Setup
- Description: End-to-end design and setup of a customer acquisition funnel optimised for conversion. Designed for e-commerce and SMEs that want a structured system for turning digital traffic into paying customers.
- Price: €3 399 (fixed)
- Duration: 4-5 weeks
- Buy button required: yes
- AuthGate required: yes
- Payment form fields: name, email, company, brief description, visible price, payment methods
- Special notes: Gumroad URL via NEXT_PUBLIC_GUMROAD_ACQUISITION_FUNNEL_URL

### 7. Campaign Coordination & Launch
- Description: Coordination and launch of a full-scale digital campaign across multiple channels. Best for businesses preparing for a product launch, seasonal push, or market entry.
- Price: €3 899 (fixed)
- Duration: 5-6 weeks
- Buy button required: yes
- AuthGate required: yes
- Payment form fields: name, email, company, brief description, visible price, payment methods
- Special notes: Gumroad URL via NEXT_PUBLIC_GUMROAD_CAMPAIGN_LAUNCH_URL

### 8. Solentra Growth — Full Digital Support Programme
- Description: A comprehensive programme combining strategy, execution, and optimisation in a single engagement. Designed for businesses that need a dedicated digital partner to drive measurable growth across all channels.
- Price: €4 199 (fixed)
- Duration: 3 months
- Buy button required: yes
- AuthGate required: yes
- Payment form fields: name, email, company, brief description, visible price, payment methods
- Special notes: Gumroad URL via NEXT_PUBLIC_GUMROAD_SOLENTRA_GROWTH_URL

### 9. Custom Digital Consultation
- Description: A fully personalised consultation format for founders, marketing leads, and entrepreneurs. For unique digital challenges that do not fit standard packages.
- Price: Custom (free 30-min discovery call, then tailored proposal)
- Duration: based on client needs
- Buy button required: no — CTA is "Request consultation" (form submission)
- AuthGate required: yes (on submission)
- Payment form fields: name, email, company, situation/challenge description, preferred contact time — no price field, no payment methods (handled later after discovery)
- Special notes: no Gumroad URL; routes via /api/contact request flow with objective = "Custom Consultation"

## Pages And Sections

Site type: landing — Home is a single long page with all sections. Auth and Legal are separate routes.

Standard sections on Home (`/`) — order per agent/structures/landing-standard.md, adapted to brief and nova-consulting reference:

1. Header (sticky, MenuBar with Home / Services / About / FAQ / Contact / Legal entry points + Login/Register entry)
2. Hero — status pill "Digital Growth Studio", H1 "Digital Growth, Mapped Clearly. / From Audit to Measurable Action.", subtitle, primary CTA "Book Introductory Session", secondary CTA "Explore Services"
3. Trust layer — neutral / minimal (no fabricated logos or stats)
4. Services — 9 cards from Services data, each with Buy (or "Request consultation" for #9) + AuthGate
5. How it works / Our approach — 3-5 steps based on brief
6. Key benefits / Why Solentra — pulled from service descriptions and brief
7. About — short positioning section based on Section 2 company description
8. FAQ — generated per CONTENT-RULES (questions from brief + services + industry web search)
9. Contact — form (name, email, company, message) with Cloudflare Turnstile + consent checkbox
10. Final CTA block — repeats primary CTA
11. Footer — company info, contact emails, Twitter link (when available), legal links, social links

Separate routes:

- `/login` (mandatory)
- `/register` (mandatory)
- `/forgot-password` (mandatory)
- `/account` (mandatory, AuthGated)
- `/legal/privacy`
- `/legal/cookies`
- `/legal/gdpr`
- `/legal/terms`
- `/legal/refunds`
- `/not-found` (404)

Additional pages/sections: none beyond the above (no separate Pricing, Blog, Case Studies, Resources, Individual Service Pages)

Removed or changed standard pages/sections: none — Home/Services/About/FAQ/Contact remain as sections on the landing page (not separate routes); Legal split into 5 sub-routes

Section order / page structure notes:
- Booking modal (from nova-consulting reference) preserved as additional UI for the primary CTA, but mandatory /login, /register, /forgot-password routes remain
- Account dashboard sections: Overview, Profile, Security, Billing (Gumroad purchase history), Logout

## Design

- Design source type: ready design (working React/Vite implementation)
- Design source path or link: ../../nova-consulting/ (entry: nova-consulting/src/App.tsx)
- Existing site/template provided: yes
- Existing site/template role: implementation base (client explicit: "design and style must be 100% as on it")
- Explicit redesign requested: no
- Logo path: [LOGO_REQUIRED — to be placed in sites/solentra-house/public/]
- Favicon path: [FAVICON_REQUIRED — to be placed in sites/solentra-house/app/favicon.ico]
- Assets path: sites/solentra-house/public/ — copy service-icons sprite from nova-consulting/public/service-icons/solentra-service-icons.png
- Colors (extracted from nova-consulting/src/index.css @theme):
  - --color-brand-cream: #FDFCFB (page background)
  - --color-brand-cream-light: #FFFFFF (card background)
  - --color-brand-charcoal: #1A1A1A (primary text, primary button background)
  - --color-brand-muted: #737373 (secondary text)
  - --color-brand-accent: #262626 (accent surface)
  - --color-brand-accent-light: #F5F5F5 (subtle background)
  - Plus per-section accent hues used in MenuBar gradients (slate, sky, indigo, amber, emerald, rose) — preserve
- Fonts:
  - Sans: Inter (weights 300, 400, 500, 600, 750) — load via next/font
  - Mono: JetBrains Mono (weights 400, 500) — load via next/font
- Visual style notes: macOS / Mobbin aesthetic — minimal, premium, restrained, generous whitespace, rounded pill buttons, soft card shadows, glassy backdrop-blur navigation
- Specific design elements to reuse: MenuBar with flip-card hover animation, InteractiveGraphics component, service icon sprite (3x3 grid), nav-glow background aura, card-shadow utility, custom thin scrollbar
- Sections with custom design instructions: each section in nova-consulting/src/App.tsx is the reference for the corresponding section in the new build
- Design preservation rules: per agent/instructions/DESIGN-REFERENCE-RULES.md — preserve composition, typography, color system, spacing, buttons, cards, navigation, animations, density and tone; do not redesign
- Existing components/styles to keep: MenuBar.tsx, InteractiveGraphics.tsx, lib/utils.ts cn() helper, all @theme tokens, .nav-glow, .card-shadow, custom scrollbar
- Allowed design changes: only those required to (a) add mandatory sections/pages not present in reference (auth pages, account dashboard, separate legal routes, cookie banner, payment integration UI, captcha integration), (b) meet accessibility / responsive / SEO requirements, (c) translate Vite-specific code into Next.js App Router patterns

## Content

- Website language: English (American spelling)
- Tone: professional + premium + clear (per CONTENT-RULES section 3)
- Hero message: "Digital Growth, Mapped Clearly. / From Audit to Measurable Action." with subtitle "Solentra House helps founders and marketing teams audit their digital presence, sharpen communications, build acquisition funnels, and launch campaigns with a clear 90-day direction."
- Main CTA: "Book Introductory Session" (primary) / "Explore Services" (secondary)
- Company positioning: data-driven digital growth and communications agency for European startups, e-commerce, and SMEs
- Content notes: all hero, service, and section copy reused from nova-consulting; FAQ generated per CONTENT-RULES; no fabricated case studies, testimonials, team bios, or client logos
- Missing content: Open Graph image, logo, favicon, Twitter URL — all listed in BRIEF Section 15
- Content compliance status: pending — content compliance gate runs in site-build STEP 4A
- Content compliance issues: none recorded yet

## Forms

Contact form:

- Location: Contact section on landing
- Fields: name, email, company (optional), message
- Destination email: support@solentrahouse.xyz (via CONTACT_TO_EMAIL env var)
- Captcha required: yes (Cloudflare Turnstile)
- Consent checkbox required: yes

Auth forms:

- Format: separate pages (/login, /register, /forgot-password) — mandatory; existing booking modal from nova-consulting kept as additional UI but does not replace routes
- Login fields: email, password
- Register fields: name, email, password, GDPR consent checkbox
- Forgot password flow: email → reset link → new password form
- Captcha required: yes on all three

Service/payment request forms:

- Fields: name, email, company, brief description, visible price, payment methods (Custom Consultation: no price/methods, adds situation/challenge description and preferred contact time)
- Price display: yes (except Custom Consultation)
- Payment methods display: yes (cards, PayPal — whatever Gumroad supports for the seller)
- Consent checkbox required: yes
- Trust marks required: SSL logo, 3D Secure, Verified by Visa, MasterCard SecureCode (per SITE-REQUIREMENTS section "Payment Form Trust Marks")

## Auth And Account

- Mandatory auth routes required: yes
- Required auth routes: /login, /register, /forgot-password, /account
- Auth style: email + password (no Google or other OAuth at this stage)
- Google auth required: no
- AuthGate usage: every Buy button on Services + Request consultation submission + /account
- Protected routes/actions: /account, all Buy actions, Custom Consultation request submission
- Dashboard/account requirements: not empty, not "coming soon"; reflects real user state
- Default account sections required: Overview, Profile, Security, Billing, Logout
- Account overview: user name, user email, account status, primary action (Browse Services / Request consultation)
- Account profile fields: name, email, company (optional), country (optional)
- Account security actions: change password, password reset entry point
- Account billing/payment state: list of Gumroad purchases (via Gumroad API or webhook-populated table); if no purchases yet, empty state with link to Services
- Account requests/activity state: list of Custom Consultation requests submitted, with status
- Password change required: yes
- Logout required: yes

## Payment

- Payment required: yes
- Payment provider: Gumroad (overrides Stripe default)
- Payment mode: not configured — seller account + 8 product URLs pending
- Payment methods: handled by Gumroad hosted checkout (cards, PayPal, etc. per Gumroad seller config)
- Checkout/payment flow notes:
  - Authenticated user clicks Buy on a service
  - Site redirects to that service's Gumroad product URL
  - Gumroad handles checkout and returns customer to a confirmation page on the site
  - Optional: Gumroad ping/webhook hits /api/webhook to record purchase in account dashboard
- Refund model: one-off purchases per service; refunds per Refund Policy with explicit 14-day EU right of withdrawal where applicable; coordinate with Gumroad refund handling — clarify which party processes
- Billing notes: no subscriptions; Custom Consultation has separate billing flow agreed after discovery (off-platform invoice)
- Required env variables: NEXT_PUBLIC_GUMROAD_<SERVICE_ID>_URL ×8, GUMROAD_WEBHOOK_SECRET, GUMROAD_ACCESS_TOKEN

## Legal

- Legal jurisdiction: United Kingdom (England and Wales governing law)
- Privacy Policy required: yes
- Cookie Policy required: yes
- GDPR Policy required: yes
- Terms of Service required: yes
- Refund Policy required: yes
- Legal contact email: legal@solentrahouse.xyz
- Supervisory authority: ICO (Information Commissioner's Office, ico.org.uk)
- Legal notes:
  - UK GDPR + EU GDPR both apply (UK-registered, EU customer base)
  - Refund Policy must reflect 14-day right of withdrawal for EU B2C customers with explicit waiver clause for fully delivered services
  - Refund Policy must not conflict with Gumroad's refund handling — state which party processes
  - DPO not appointed (not required for company profile)
  - All 5 docs generated per LEGAL-RULES and end with [LEGAL REVIEW REQUIRED BEFORE PUBLISHING]

## Cookies And Tracking

- Cookie banner required: yes
- Cookie categories:
  - Strictly necessary (session, consent state) — always on
  - Analytics (Google Analytics 4, Microsoft Clarity) — opt-in
- Analytics tools: Google Analytics 4 + Microsoft Clarity
- Marketing/tracking tools: none
- Functional cookies: none at this stage
- Consent behavior notes: Accept all / Reject non-essential / Customize; choice persisted; analytics scripts blocked until consent

## SEO

- Primary keywords: digital growth agency, digital strategy consulting, customer acquisition funnel, brand communications agency, digital marketing audit
- Page titles: derived per page in site-build (Home, Services anchor, About anchor, FAQ anchor, Contact anchor, Legal sub-pages, Auth pages); each under 60 characters
- Meta descriptions: derived per page; each under 160 characters
- Canonical domain: NEXT_PUBLIC_SITE_URL env (set once domain confirmed)
- Open Graph image: [OG_IMAGE_REQUIRED — 1200x630, cream/charcoal palette]
- Organization schema required: yes
- LocalBusiness schema required: no (remote agency, no walk-in location)
- Review schema required: no (no real reviews)

## Integrations

- Email service: Resend
- Captcha provider: Cloudflare Turnstile
- Analytics: Google Analytics 4 + Microsoft Clarity
- Payment provider: Gumroad
- CRM: none
- Other third-party tools: none
- Required env variables:
  - NEXT_PUBLIC_SITE_URL
  - CONTACT_TO_EMAIL
  - RESEND_API_KEY
  - NEXT_PUBLIC_TURNSTILE_SITE_KEY
  - TURNSTILE_SECRET_KEY
  - NEXT_PUBLIC_GA_ID
  - NEXT_PUBLIC_CLARITY_PROJECT_ID
  - NEXT_PUBLIC_GUMROAD_SOLENTRA_SCAN_URL
  - NEXT_PUBLIC_GUMROAD_PERFORMANCE_OPTIMISATION_URL
  - NEXT_PUBLIC_GUMROAD_BRAND_COMMUNICATIONS_URL
  - NEXT_PUBLIC_GUMROAD_DIGITAL_STRATEGY_URL
  - NEXT_PUBLIC_GUMROAD_COMMUNICATIONS_PLANNING_URL
  - NEXT_PUBLIC_GUMROAD_ACQUISITION_FUNNEL_URL
  - NEXT_PUBLIC_GUMROAD_CAMPAIGN_LAUNCH_URL
  - NEXT_PUBLIC_GUMROAD_SOLENTRA_GROWTH_URL
  - GUMROAD_WEBHOOK_SECRET
  - GUMROAD_ACCESS_TOKEN
  - AUTH_SECRET
  - DATABASE_URL

## QA And Handoff

- Current QA status: not started (ready for site-check)
- Build status: PASS
  - npm install: 352 packages
  - npx tsc --noEmit: 0 errors
  - npm run build: 16 routes, all generated successfully
  - npm run lint: no ESLint warnings or errors
- Routes generated:
  - / (static, 13.7 kB)
  - /not-found (static)
  - /account, /login, /register, /forgot-password (static)
  - /legal, /legal/privacy, /legal/cookies, /legal/gdpr, /legal/terms, /legal/refunds (static)
  - /api/contact, /api/payment, /api/webhook, /api/auth/login, /api/auth/register, /api/auth/forgot-password, /api/auth/logout (dynamic)
  - /robots.txt, /sitemap.xml (static)
- Blockers: none from build perspective. All pending items are environment / asset / content tasks for launch.
- Approved exceptions:
  - Registration number not yet known — user approved building with placeholder until launch
  - Phone number partially masked — user approved during build until real number is provided
- Manual setup needed before launch (recorded in lib/site.ts and .env.example):
  - Purchase domain + configure DNS → set NEXT_PUBLIC_SITE_URL
  - Obtain registration number → replace placeholder in lib/site.ts
  - Provide real phone number → replace masked digits in lib/site.ts
  - Configure email addresses on domain → update lib/site.ts contacts
  - Create Twitter/X account → set siteConfig.social.twitter
  - Add logo (public/logo.svg)
  - Add favicon (app/favicon.ico)
  - Add Open Graph image (public/og-image.png, 1200x630)
  - Create Gumroad seller account + 8 product URLs → set 8 NEXT_PUBLIC_GUMROAD_*_URL env vars
  - Set Gumroad webhook secret + access token → GUMROAD_WEBHOOK_SECRET, GUMROAD_ACCESS_TOKEN
  - Choose database provider → set DATABASE_URL
  - Generate AUTH_SECRET (openssl rand -hex 32)
  - Provision Resend account + verified sender domain → set RESEND_API_KEY, confirm CONTACT_TO_EMAIL
  - Provision Cloudflare Turnstile site → set NEXT_PUBLIC_TURNSTILE_SITE_KEY, TURNSTILE_SECRET_KEY
  - Create Google Analytics 4 property → set NEXT_PUBLIC_GA_ID
  - Create Microsoft Clarity project → set NEXT_PUBLIC_CLARITY_PROJECT_ID
- Auth implementation status: scaffolding only. Routes return 503 with [API_KEY_REQUIRED: AUTH_PROVIDER] until AUTH_SECRET + DATABASE_URL are set and an auth provider (Auth.js, Lucia, custom) is wired in app/api/auth/*. Account page renders with [USER_NAME], [USER_EMAIL], [DATE] placeholders until session integration is complete.
- Payment readiness: not ready — Gumroad seller account, 8 product URLs, and (optional) webhook secret pending. /api/payment returns 503 [PAYMENT_NOT_CONFIGURED] if a Gumroad URL env var is unset.
- Captcha readiness: not ready — Turnstile keys pending. Forms still validate on server; captcha skip is allowed only when TURNSTILE_SECRET_KEY is unset (dev mode).
- Email readiness: not ready — RESEND_API_KEY pending. /api/contact returns ok with [EMAIL_NOT_CONFIGURED] note in dev when key is unset.
- Legal review status: PENDING — all 5 legal docs ship with [LEGAL REVIEW REQUIRED BEFORE PUBLISHING] notice. Must be reviewed by counsel before site goes live.
- Final notes:
  - Stack: Next.js 15 App Router + Tailwind v4 (CSS-based @theme tokens) + React 19 + TypeScript + Motion + Resend + Cloudflare Turnstile + Gumroad
  - Reference repo (nova-consulting/) preserved in parent project — not deleted; design tokens, copy, and service icon sprite imported into this build
  - Content compliance gate run during build: 0 issues remaining (em dashes converted to "-", "End-to-end" rephrased to "Full")
