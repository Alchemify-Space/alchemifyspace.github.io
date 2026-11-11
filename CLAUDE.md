# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Also read [AGENTS.md](AGENTS.md) for the project's code-style conventions. Where the two disagree, this file describes what the code actually does today.

## Commands

```bash
npm run dev          # dev server (localhost:3000)
npm run build        # static export -> dist/
npm run lint         # eslint (flat config, next core-web-vitals + typescript)
npx tsc --noEmit     # type check
npm run preview      # serve the built dist/ locally
npm run deploy       # next build && gh-pages -d dist -t  (publishes to gh-pages branch)
```

Don't run `npm run build` while `npm run dev` is running: the dev server keeps its Turbopack cache in `dist/dev/`, and a build wipes it, which crashes the dev server with "Failed to restore task data (corrupted database)". Fix: stop dev, `rm -rf dist/dev`, restart. The deploy script strips `dist/dev` and `dist/cache` before publishing.

No test runner is installed. The `npm test` commands in AGENTS.md are aspirational — don't assume they work.

## Architecture

Next.js 16 App Router + React 19 + Tailwind 4, **statically exported** to `dist/` and served from GitHub Pages at alchemify.space (custom domain via `public/CNAME`).

### Static export is the central constraint

`next.config.ts` sets `output: 'export'`, `distDir: 'dist'`, `trailingSlash: true`, `images.unoptimized`. That means:

- No server runtime: no route handlers, server actions, middleware, ISR, or dynamic rendering. The contact form is client-side only.
- Every dynamic route needs `generateStaticParams` (see [app/(marketing)/blog/[slug]/page.tsx](app/(marketing)/blog/[slug]/page.tsx)).
- Metadata files need `export const dynamic = "force-static"` — both [app/sitemap.ts](app/sitemap.ts) and [app/robots.ts](app/robots.ts) do this.
- Internal links carry trailing slashes (`/services/`, not `/services`) to match `trailingSlash: true`.
- `next/image` optimization is off, so `<Image>` is effectively a plain img with layout sizing.

**`dist/` is committed to git** (~300 files). Any build rewrites it and produces a large diff — expect that, and don't treat it as accidental noise or "clean it up" unprepared.

### Routing and layouts

- [app/layout.tsx](app/layout.tsx) — root layout: fonts (Space Grotesk → `--font-heading`, Inter → `--font-body`) and the site-wide `Metadata` object (title template, OG, Twitter, robots). Per-page metadata extends this.
- [app/(marketing)/layout.tsx](app/(marketing)/layout.tsx) — the `(marketing)` route group adds `Header`/`Footer` chrome. The header is `sticky`, so `<main>` needs no top padding. All public pages live in this group. Old `/services/` and `/portfolio/` are client-side redirects (`app/components/Redirect.tsx`) to `/agencies/` and `/products/`.
- Company facts and contact details live in [app/lib/site.ts](app/lib/site.ts); per-page metadata comes from `pageMetadata()` in [app/lib/seo.ts](app/lib/seo.ts) (canonical, og:url, default share card `public/images/og-image.png`). Structured data via `app/components/JsonLd.tsx`.
- Contact form ([app/components/ContactForm.tsx](app/components/ContactForm.tsx)) posts to Web3Forms when `NEXT_PUBLIC_WEB3FORMS_KEY` is set, else falls back to a prefilled `mailto:`. `NEXT_PUBLIC_BOOKING_URL` sets the "Book a call" target.

### Content / blog pipeline

Markdown files in [content/blog/](content/blog/) are the source of truth. [app/lib/posts.ts](app/lib/posts.ts) reads them with `fs` + `gray-matter` **at build time** and exposes `getAllPosts` / `getPostBySlug` / `getAllSlugs`. Rendering is `react-markdown` + `remark-gfm` inside a Tailwind `prose` block.

Adding a post = drop a `.md` file in `content/blog/`; the filename is the slug, and the sitemap, listing page, and static params all pick it up automatically. Required frontmatter: `title`, `excerpt`, `date` (ISO), `author`, `category`; optional `image`.

### Component locations

Two distinct directories, don't mix them:

- `app/components/` — site chrome (`Header`, `Footer`), app-specific.
- `components/ui/` — shadcn/ui only (`new-york` style, neutral base, lucide icons), configured in [components.json](components.json). Add via the shadcn CLI rather than hand-writing.

Path alias `@/*` maps to the **repo root**, so imports look like `@/app/lib/posts` and `@/components/ui/button`.

Note: `app/sections/` exists but is empty. Pages compose shared building blocks from [app/components/marketing.tsx](app/components/marketing.tsx) (`Container`, `SectionTitle`, `ButtonLink`, `Card`, `PageHero`, `CtaBand`, …) with page data as local arrays.

### Styling

Tailwind 4 with CSS-first config in [app/globals.css](app/globals.css): `@theme inline` maps shadcn tokens plus brand colors `--alchemify-deep-blue`, `--alchemify-orange`, `--alchemify-gold`, `--alchemify-purple`. (AGENTS.md references `--trucker-*` variables — those don't exist here.)

The Nov 2026 redesign uses a palette from the flask logo as `--color-brand-*` tokens (`bg-brand-indigo` #1e1b4b, `bg-brand-gold` #f5b942 for primary buttons with indigo text, `text-brand-purple` #6d28d9 for links, `text-brand-cyan` on dark, `bg-brand-mist` for alternate sections). Use these utilities in new code. The blog pages still use the same hexes inline; the old navy/orange (`#1a365d`/`#ed8936`) is retired.

### Server vs client components

Defaults are server components. Only these opt into `"use client"`: `Header` (active link + mobile sheet), `ContactForm`, `Redirect`, and the `accordion`/`sheet` UI primitives. All pages are server components. Keep new code server-side unless it needs state, effects or browser APIs.

## Legacy and reference directories

- `html-template/` — the original Bootstrap/jQuery static site being ported. Reference for markup and assets; not part of the build.
- `.agent/` — migration skills for this port (`html-to-nextjs`, `jquery-to-react`, `bootstrap-ui`, `tailwind-migration`, `shadcn-components`, …) plus `rules-nextjs.md`. Worth consulting when porting a page from `html-template/`.
- `dev-docs/` — PRD, migration task breakdowns, blog UI spec.
