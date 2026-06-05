# Solentra House

Digital growth and communications agency for European startups, e-commerce, and SMEs.

Production site for Solentra House. Built with Next.js App Router, Tailwind v4, TypeScript. Deploys to Vercel.

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (with `@theme` tokens)
- Motion (animations)
- Lucide React (icons)
- Resend (transactional email)
- Cloudflare Turnstile (captcha)
- Gumroad (hosted checkout)
- Google Analytics 4 + Microsoft Clarity (consent-gated)

## Setup

```bash
npm install
cp .env.example .env.local
# fill .env.local with real values
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.example` for the full list. The build runs without secrets — placeholders surface in dev only.

Required before production launch:

- Domain + DNS configured (`NEXT_PUBLIC_SITE_URL`)
- Resend API key (`RESEND_API_KEY`) + verified sender domain
- Contact destination email (`CONTACT_TO_EMAIL`)
- Cloudflare Turnstile keys (site + secret)
- GA4 measurement ID + Clarity project ID
- Auth secret + database URL
- 8 Gumroad product URLs (one per paid service)
- Optional: Gumroad webhook secret + access token

## Scripts

```bash
npm run dev         # local dev server on port 3000
npm run build       # production build
npm run start       # serve production build
npm run lint        # ESLint via next lint
npm run typecheck   # TypeScript only
```

## Deploy

Vercel. Push to main, connect repo, set env vars in the Vercel dashboard.

## Reference

Design is a Next.js port of [nova-consulting](../../nova-consulting/) (Vite + React 19). All design tokens, components, and copy preserved per `agent/instructions/DESIGN-REFERENCE-RULES.md`.

## Project structure

```
app/                    Next.js App Router routes
  layout.tsx            Root layout (fonts, metadata, header, footer)
  page.tsx              Landing page (Hero, Services, About, FAQ, Contact, etc.)
  not-found.tsx         404
  sitemap.ts            Public-page sitemap
  robots.ts             Indexing rules
  (auth)/               Login / Register / Forgot Password / Account
  (pages)/legal/        Privacy / Cookies / GDPR / Terms / Refund
  api/                  contact / payment / webhook
components/
  layout/               Header, Footer, MenuBar, CookieBanner
  sections/             Hero, Services, About, FAQ, Contact, etc.
  forms/                ContactForm, BookingModal
  ui/                   Button and primitives
lib/
  site.ts               Site config (name, domain, contacts)
  services.ts           Service data
  seo.ts                Metadata helpers
  validation.ts         Zod schemas
  utils.ts              cn() helper
public/                 Static assets (service icons sprite, logo, favicon, og)
styles/                 globals.css (Tailwind v4 @theme tokens)
```
