# Cobalto Website Redesign — Plan

Status: **v1 demo built** (Spanish + English landing, project detail pages) — see §10
Owner: mdsanchez@gmail.com
Last updated: 2026-08-23

## 0. Context — this is a pitch, not a commission

You are **not** currently working for Cobalto — this site is being built speculatively, solo, to demo to them as a "here's what your site could look like" pitch, with the goal of selling them the redesign as a service afterward. That changes the brief in a few ways vs. a normal client project:

- No client relationship yet → no way to request real assets, testimonials, or higher-res project photos from them directly. Media stays limited to what's publicly visible (their current site + whatever Facebook shows without login).
- The demo needs to look genuinely impressive (it's the sales pitch itself), but the backend/infra behind it should stay lightweight — no point wiring up a production contact form or analytics for a site they haven't approved yet.
- Nothing here should be deployed to their real domain or presented as already live — it's a mockup/demo until they say yes.

## 1. Goals

- Primary: a polished, working demo good enough to convince Cobalto to hire this as a real project.
- Secondary: establish the visual/content template so that once they say yes, wiring up real infra (forms, analytics, real photos) is a fast follow-on, not a rebuild.
- Language: Spanish as primary (`/`), English as secondary (`/en`).

## 2. Decisions already made (from our discussion)

| Decision | Choice |
|---|---|
| Tech stack | Next.js + Sanity CMS |
| Site scope | Landing page + individual project detail pages |
| Media sourcing | Pull what's publicly visible (site + Facebook); Instagram is login-walled so little is available there. No client relationship yet, so this is the ceiling for this round. |
| Deployment | Vercel/Netlify preview now; point `cobaltomx.com` at it later, only if/when they say yes |
| Sanity instance | Reuse the existing project (`ms1siuvr` / `production` in `cobalto-sanity/`), cleaned up — not a new instance |
| Contact | WhatsApp CTA only, no form backend, for the demo |
| Analytics | None for the demo |
| Fonts | Simple, clean pairing — no custom typography deep-dive |
| Testimonials | Dropped from v1 — no real quotes to use yet |

## 3. Tech stack (proposed detail)

- **Framework:** Next.js (App Router), TypeScript
- **CMS:** Sanity — **reusing the existing project** (`projectId: ms1siuvr`, `dataset: production`) in `cobalto-sanity/`, rather than spinning up a new instance. We'll strip the leftover tutorial cruft (`schemas/pet.js`, the `sanity-plugin-tutorial` dev plugin) and add the real content types (below). Studio stays in `cobalto-sanity/`; the Next.js app in `cobalto-web/` reads from the same projectId/dataset via `@sanity/client`.
- **Styling:** Tailwind CSS
- **Images:** `next/image` + Sanity's image CDN/hotspot cropping
- **i18n:** simple locale routing (`/` = es, `/en/...` = en) with a language switcher — not pulling in a heavy i18n library unless content volume justifies it later
- **Contact:** WhatsApp deep-link button (`wa.me/529995270053`, their real public number) as the *only* CTA for the demo — no form service/backend wiring until they've actually signed off on the project. Simple to add later.
- **Analytics:** none for the demo — not worth wiring up before there's a real deployment to measure.
- **Fonts:** a clean, simple Google Font pairing (one for headings, system sans for body) — no deep custom-typography exploration for a pitch demo.
- **Hosting:** Vercel (pairs natively with Next.js) for a preview URL; domain cutover to `cobaltomx.com` is a later, separate step — only relevant once they've agreed to the project.

## 4. Site structure

**Spanish (`/`) — single scrolling landing page:**
1. Hero — tagline + primary CTA (WhatsApp/contact)
2. Servicios — construcción, remodelación/restauración, diseño arquitectónico (BIM/renders), mantenimiento
3. Proyectos destacados — grid, each card links to `/proyectos/[slug]`
4. Sobre nosotros / Valores — founding story, social & environmental responsibility angle
5. Townhouses — Chicxulub Puerto development highlight
6. Contacto — WhatsApp CTA, address, map embed (no form for the demo)

**Project detail pages:** `/proyectos/[slug]` — gallery, description, location, services used, year.

**English:** mirrored at `/en` and `/en/proyectos/[slug]` (or `/en/projects/[slug]`), secondary priority — built after Spanish content is finalized.

## 5. Content model (Sanity schemas)

- `siteSettings` — logo, brand colors, phone/WhatsApp, email, address, social links
- `service` — title, description (es/en), icon
- `project` — title, slug, category (construcción / remodelación / townhouse), location, cover image, gallery, description (es/en), year, related services

Testimonials and news/blog are out of scope for v1 — no real client quotes exist yet, and a blog adds ongoing content-maintenance burden. Both can be revisited if Cobalto signs off on the project.

## 6. Brand assets gathered so far

- **Name:** Cobalto, Arquitectura & Construcción (also seen as "& Diseño")
- **Founded:** 2022, Mérida, Yucatán — two partners; stated values around social/environmental responsibility, not purely profit-driven
- **Logo:** black circle mark, gold/amber roofline icon, white "COBALT" wordmark — real logo file exists locally at [cobalto-first/HTML/images/cobaltologo.png](../cobalto-first/HTML/images/cobaltologo.png); exact brand hex codes to be sampled from it
- **Contact:** +52 999 527 0053 (phone/WhatsApp), cobaltogrupo@gmail.com, Calle 60 #356, Mérida Centro
- **Services (from current site):** full builds foundation-to-keys, restoration of century-old properties, architectural design with BIM/photorealistic rendering, preventive/corrective maintenance, beachfront townhouses in Chicxulub Puerto
- **Voice:** professional, warm, benefit-driven Spanish (e.g. FB post "Renovación total que enamora")
- **Old site nav (reference, not binding):** Home | Proyectos | Servicios | Townhouses | Mantenimiento | Noticias

## 7. Known limitation to flag when pitching

Higher-res project photos beyond what's public will only come once Cobalto is actually a client — for the demo, expect visible gaps (e.g. thin Townhouses gallery) since Instagram is fully login-walled and Facebook only shows a little without logging in. Worth being upfront about this when pitching: "this is what we can do with public info alone — imagine it with your real project archive."

## 8. Phased build plan

0. Scaffold Next.js + Tailwind in `cobalto-web/`, initialize git here; clean up `cobalto-sanity/` (remove tutorial schema/plugin)
1. Define real Sanity schemas in `cobalto-sanity/`, seed with content gathered so far
2. Build Spanish landing page section by section, responsive
3. Build project detail page template
4. Add English (`/en`) mirror
5. Wire up WhatsApp CTA, SEO metadata, favicon
6. Deploy preview to Vercel, review together
7. (Only if/when Cobalto agrees) real contact form, analytics, testimonials, and domain cutover to `cobaltomx.com`

## 9. Existing folders — what happens to them

- `cobalto-first/` — left as-is (archive); its images/logo are a media source for the new site
- `cobalto-sanity/` — reused as the Sanity Studio backing the new site; tutorial cruft (`schemas/pet.js`, `sanity-plugin-tutorial`) gets removed and real schemas added
- `reference/` — generic tutorial repos, unrelated to Cobalto; left untouched
- `cobalto-web/` — new Next.js project, this plan lives here

## 10. Build status (2026-08-23)

v1 demo is built and running (`npm run dev` in `cobalto-web/`, or the "cobalto-web" preview config, port 3210). Covers:

- Spanish landing (`/`) and English landing (`/en`), sections: Hero, Servicios, Proyectos, Video, Nosotros, Townhouses, Contacto
- 5 real project detail pages (`/proyectos/[slug]`, `/en/projects/[slug]`): **Casa Santiago, Villas Chablé, Villa Bohá, Casa Rosa, Shanti (Isla Holbox)** — real names and real photos pulled from their live `/proyectos` and `/desarrollos` pages, not invented case studies
- Real brand assets: current logo and brand color (`#E29700`) sampled from it, hero background is a real twilight courtyard photo (Villas Chablé)
- Real Townhouses section: actual floor-plan render, real preventa price (**$5,900,000 MXN**), and the full real feature list (3 recámaras, 3.5 baños, rooftop con jacuzzi, chukum finishes, pet friendly, etc.) pulled from their `/projects-7` page
- A "Video" section embedding their real YouTube walkthrough (`Casa Residencial — proyecto de lujo en privada`, id `2ym5O9ZvXho`) via a click-to-load lite-embed (no iframe cost until clicked)
- Motion: Ken Burns zoom on the hero image, staggered fade-up on hero text, and scroll-triggered fade/slide-up reveals on every section (via a small dependency-free `Reveal` component using `IntersectionObserver`), all respecting `prefers-reduced-motion`
- WhatsApp CTA wired to their real number with locale-appropriate prefilled messages; mobile nav menu; responsive down to 375px
- `cobalto-sanity/` schemas rebuilt (`siteSettings`, `service`, `project`) replacing the tutorial boilerplate — not yet wired to the frontend (see below)

**Known gaps / next steps:**
- Content is static (`src/lib/site-data.ts`), not yet pulled from the live Sanity dataset — `src/lib/sanity.ts` is wired to the right project/dataset but no queries use it yet. Fine for a pitch demo; would need real wiring before a client hands over content.
- Didn't integrate the "Noticias" (news/blog) section — the site only has one article, and a blog adds ongoing content-maintenance burden not worth it for a pitch demo.
- Per-project descriptions on the 5 real projects are original copy we wrote from what's visible in the photos (their site has no per-project description text) — accurate to what's shown, not verbatim from anywhere.
