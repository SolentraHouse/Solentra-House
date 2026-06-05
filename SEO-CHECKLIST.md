# SEO Checklist — Solentra House

> Tracking file for SEO completion. Mark items as you complete them.
> ✅ = done in code · ⏳ = waiting on launch / external action · ❌ = blocker

---

## Базові SEO

- [x] **Title tag для кожної сторінки** (унікальний, до 60 символів) ✅
  - Implemented via `lib/seo.ts` → `pageMetadata({ title })` helper
  - Pattern: `%s | Solentra House`
  - All current pages well under 60 chars (longest: 33 chars)

- [x] **Meta description для кожної сторінки** (до 160 символів) ✅
  - Implemented via `pageMetadata({ description })`
  - Home description = `siteConfig.description` (156 chars)
  - All inner pages have unique descriptions

- [x] **Alt теги на всіх зображеннях** ✅
  - Service icon sprite: `aria-hidden="true"` (decorative — title text provides context)
  - Logo SVGs: `aria-label="Solentra House"` / `"Solentra House mark"`
  - No raw `<img>` tags in codebase
  - OG image alt: `"Solentra House - Digital Growth, Mapped Clearly."`

- [x] **Canonical URL на кожній сторінці** ✅
  - Implemented via `pageMetadata({ path })` → `alternates: { canonical: \`${siteConfig.url}${path}\` }`
  - Root layout: `alternates: { canonical: "/" }` for home

- [x] **Schema Markup** ✅
  - **Organization** — present, injected via JSON-LD `<script>` in `app/layout.tsx`
    - Includes: name, legalName, url, description, address (PostalAddress), contactPoint
  - **LocalBusiness** — intentionally NOT added (remote agency, no walk-in location, per BRIEF Section 12)
  - **Review** — intentionally NOT added (no real reviews — using fake testimonials is forbidden by CONTENT-RULES)
  - Source: `lib/seo.ts` → `organizationSchema()`

- [x] **Sitemap.xml** — згенерований ✅
  - File: `app/sitemap.ts` → served at `/sitemap.xml`
  - Includes: `/`, `/legal`, `/legal/{privacy,cookies,gdpr,terms,refunds}`
  - Auth, account, checkout, API routes excluded (correctly noindex)
  - Uses `NEXT_PUBLIC_SITE_URL` env var

- [ ] **Sitemap відправлений в Google Search Console** ⏳ (user action after launch)
  - Steps:
    1. https://search.google.com/search-console → Add property
    2. Verify domain ownership (DNS TXT or HTML file)
    3. Sitemaps → submit `https://yourdomain.com/sitemap.xml`

- [x] **Robots.txt** ✅
  - File: `app/robots.ts` → served at `/robots.txt`
  - Disallow: `/api/`, `/account`, `/login`, `/register`, `/forgot-password`, `/reset-password`, `/checkout`
  - Allow: `/`
  - Includes sitemap reference

- [ ] **Швидкість завантаження** — ціль < 3 sec на мобільному (PageSpeed 85+) ⏳ (user test after launch)
  - Test tool: https://pagespeed.web.dev
  - **Potential bottleneck:** SmokeyBackground WebGL canvas runs continuously
  - **If score < 85:** consider lazy-loading or replacing with static CSS gradient

- [ ] **Всі сторінки індексуються** (перевірити в GSC) ⏳ (user verifies 1-7 days post-launch)
  - GSC → Pages → check 7 URLs from sitemap show as "Indexed"

- [ ] **Немає broken links** ⏳ (user runs after launch)
  - Test tool: https://www.deadlinkchecker.com/
  - Internal links currently work — all routes in sitemap return 200

- [x] **OG теги** (og:title, og:description, og:image) ✅
  - Auto-generated OG image: `app/opengraph-image.tsx` → 1200×630 PNG
  - Includes: logo mark + tagline "Digital Growth, Mapped Clearly." + city + domain
  - Twitter card: `summary_large_image`
  - Per-page OG via `pageMetadata` helper inherits + customises title/description

---

## Pending перед launch (technical setup)

- [ ] **Production domain configured** — set `NEXT_PUBLIC_SITE_URL` in `.env.local` to real domain
  - Automatically updates: sitemap URLs, robots.txt host, canonical URLs, OG URL, Twitter URLs
- [ ] **DNS configured + SSL** — Cloudflare or hosting provider
- [ ] **OG preview tested** — https://www.opengraph.xyz/ after deploy
- [ ] **SERP preview tested** — https://serpsim.com/ to see how Google will render

---

## Optional improvements (post-launch)

- [ ] Per-service landing pages (currently all 9 services on one section). If SEO needs grow:
  - Create `app/services/[service-slug]/page.tsx` with dedicated meta + content
  - Add to sitemap
  - Higher long-tail keyword coverage

- [ ] Blog / case studies (when content exists). Currently excluded per BRIEF (no fabricated content).

---

Last reviewed: 2026-06-01
