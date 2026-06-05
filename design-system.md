# Solentra House — Design System

Extracted from the nova-consulting reference (`../../nova-consulting/`).
Preserved per `agent/instructions/DESIGN-REFERENCE-RULES.md` (no redesign).

## Aesthetic direction

macOS / Mobbin editorial. Minimal, premium, restrained. Cream backgrounds, near-black ink, soft shadows, rounded pill controls, glassy nav with backdrop blur, generous whitespace, large editorial display headings, color used sparingly as per-section accents.

## Colors

Brand neutrals (from `nova-consulting/src/index.css` `@theme`):

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-cream` | `#FDFCFB` | Page background |
| `--color-brand-cream-light` | `#FFFFFF` | Card / surface background |
| `--color-brand-charcoal` | `#1A1A1A` | Primary text, primary button bg |
| `--color-brand-muted` | `#737373` | Secondary text, supporting copy |
| `--color-brand-accent` | `#262626` | Accent surface |
| `--color-brand-accent-light` | `#F5F5F5` | Subtle surface, hover background |

Per-section accent hues used in MenuBar gradients and section highlights:

- Home — slate
- Services — sky
- About — indigo
- FAQ — amber
- Contact — emerald
- Legal — rose

These are applied through Tailwind's built-in color scale (`slate-*`, `sky-*`, `indigo-*`, `amber-*`, `emerald-*`, `rose-*`) — no new tokens needed.

## Typography

| Family | Source | Weights | Usage |
|---|---|---|---|
| Inter | next/font/google | 300, 400, 500, 600, 750 | Body, headings, UI |
| JetBrains Mono | next/font/google | 400, 500 | Status pills, technical labels |

Type scale (mobile → desktop):

- Display H1 — `text-4xl md:text-6xl` (~36px → 60px) — `font-semibold tracking-tight leading-[1.1]`
- H2 section — `text-3xl md:text-4xl` — `font-semibold tracking-tight`
- H3 card — `text-xl md:text-2xl` — `font-semibold`
- Body — `text-base md:text-lg` — `font-normal leading-relaxed`
- Caption / mono — `text-xs` — `font-mono uppercase tracking-widest`

## Spacing rhythm

- Section vertical padding: `py-16 md:py-24 lg:py-28`
- Container max width: `max-w-6xl mx-auto px-4 md:px-8`
- Hero container narrower: `max-w-5xl mx-auto px-6`
- Card padding: `p-6 md:p-8`
- Inline gaps: `gap-4` mobile, `gap-6 md:gap-8` desktop

## Radius

- Pill buttons: `rounded-full`
- Cards: `rounded-2xl`
- Status pills: `rounded-full`
- Inputs: `rounded-xl`
- Nav container: `rounded-2xl`

## Shadows

- `card-shadow` utility (in globals.css): `0 4px 20px -2px rgba(0,0,0,0.03), 0 2px 10px -2px rgba(0,0,0,0.02)`
- Primary button: `shadow-xl shadow-neutral-200/50`

## Buttons

Primary — pill, charcoal background, white text, subtle hover scale:
```
px-8 py-4 bg-neutral-900 text-white rounded-full font-medium text-sm
hover:scale-[1.02] active:scale-[0.98] transition-transform
shadow-xl shadow-neutral-200/50
```

Secondary — pill, white background, neutral border, subtle hover:
```
px-8 py-4 bg-white border border-neutral-200 text-neutral-750 rounded-full font-medium text-sm
hover:bg-neutral-50 transition-colors shadow-sm
```

## Navigation

Glassy floating MenuBar — `bg-white/70 backdrop-blur-xl border border-neutral-200/50 shadow-lg rounded-2xl`. Each item has a 3D flip animation on hover and a colored gradient glow keyed to the section's accent hue.

## Status pill

Small `rounded-full` pill, accent surface, monospaced caption with pulsing dot indicator and Sparkles icon. Used in Hero only.

## Cards

- `bg-white rounded-2xl border border-neutral-200/50 card-shadow` for service cards
- Hover: subtle lift via `hover:shadow-lg transition-shadow`

## Motion

- Page-load reveal: staggered fade + 15-20px upward translate (delays 0.0s, 0.1s, 0.2s, 0.3s)
- Hover micro-interactions on buttons: `scale-[1.02]`
- MenuBar item: 3D rotateX flip, 600px perspective, spring transition (stiffness 110, damping 18)
- Avoid scattered micro-interactions — focus on the one page-load reveal

## Scrollbar

Thin, quiet custom scrollbar via `::-webkit-scrollbar` — width 6px, transparent track, `rgba(0,0,0,0.08)` thumb.

## Accessibility constraints

- Minimum tap target: 44×44
- Visible focus ring on all interactive elements (Tailwind `focus-visible:ring-2 focus-visible:ring-neutral-900/20`)
- Color contrast: charcoal-on-cream passes WCAG AA at all sizes
- No information conveyed by color alone — section icons accompany the accent hue

## Sync matrix

| Token / asset | Lives in |
|---|---|
| Color hex values | `styles/globals.css` (`@theme`) |
| Font loading | `app/layout.tsx` (next/font) |
| Font fallbacks | `styles/globals.css` (`@theme --font-*`) |
| Spacing scale | Tailwind defaults — no custom override |
| Utilities (`card-shadow`, `nav-glow`) | `styles/globals.css` |
| Scrollbar | `styles/globals.css` |
| Service icon sprite | `public/service-icons/solentra-service-icons.png` |
| Logo | `public/logo.svg` (pending) |
| Favicon | `app/favicon.ico` (pending) |
| Open Graph image | `public/og-image.png` (pending) |
