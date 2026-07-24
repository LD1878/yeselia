# Yeselia & Co.

Lawyer-led luxury real estate on the Costa del Sol.

A production-ready marketing website for **Yeselia & Co.**, built with Next.js 15 (App Router), TypeScript and Tailwind CSS. Static export enabled for GitHub Pages.

Serious properties. Serious buyers. Complete legal certainty.

## Stack

- **Next.js 15** App Router
- **TypeScript** (strict)
- **Tailwind CSS v4** with brand design tokens
- **Framer Motion** for subtle reveals only
- **next/image** (unoptimised for static export)
- **Instrument Serif** + **Inter** via `next/font`

## Getting started

### Requirements

- Node.js 20+ (22 recommended)
- npm 10+

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build (static export)

```bash
npm run build
```

Output is written to the `out/` directory.

### Preview the export

```bash
npm start
```

### Lint and format

```bash
npm run lint
npm run format
```

## Project structure

```
app/                 # App Router pages and layouts
components/
  forms/             # Contact and valuation forms
  layout/            # Header, Footer, JSON-LD
  property/          # Cards, filters, gallery
  ui/                # Logo, Button, fields, primitives
lib/
  data/              # Properties and insights content
  i18n.ts            # Multilingual hooks (EN primary, ES ready)
  schema.ts          # JSON-LD builders
  seo.ts             # Metadata helpers
  site.ts            # Site config and navigation
public/              # Static assets
.github/workflows/   # GitHub Pages deployment
```

## Design system

Primary palette is pure greyscale with a single accent:

| Token       | Value     | Use                                      |
| ----------- | --------- | ---------------------------------------- |
| `--black`   | `#0A0A0A` | Text, primary surfaces                   |
| `--white`   | `#FFFFFF` | Backgrounds                              |
| `--grey-*`  | 50-900    | Hierarchy, borders, muted text           |
| `--purple`  | `#5C2D91` | Logo period, small marks, hover/focus    |

Typography:

- Headings: Instrument Serif
- Body and UI: Inter

Logo: wordmark **Yeselia & Co.** with a solid purple full stop after “Co”, implemented as an SVG component (`components/ui/Logo.tsx`).

## Pages

| Route                    | Purpose                                      |
| ------------------------ | -------------------------------------------- |
| `/`                      | Home                                         |
| `/properties/`           | Collection with filters                      |
| `/properties/[slug]/`    | Single property                              |
| `/buy/`                  | Buy with Yeselia                             |
| `/sell/`                 | Sell with Yeselia + valuation form           |
| `/about/`                | Practice and credentials                     |
| `/insights/`             | Guides index                                 |
| `/insights/[slug]/`      | Long-form guide                              |
| `/contact/`              | Contact form and details                     |

## Environment variables

| Variable                 | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | Canonical site URL (default `https://yeselia.com`)                          |
| `NEXT_PUBLIC_BASE_PATH`  | Base path for GitHub project pages, e.g. `/yeselia`. Leave empty for root.  |

Example for a project site at `https://username.github.io/yeselia/`:

```bash
NEXT_PUBLIC_BASE_PATH=/yeselia
NEXT_PUBLIC_SITE_URL=https://username.github.io/yeselia
```

## Deploy to GitHub Pages

### One-time repository setup

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Optional: under **Settings → Secrets and variables → Actions → Variables**, add:
   - `NEXT_PUBLIC_BASE_PATH` = `/your-repo-name` (omit for `username.github.io` user sites or custom domains at root)
   - `NEXT_PUBLIC_SITE_URL` = your full public URL

### Automatic deploy

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the static export and deploys to Pages.

### Manual local build for Pages

```bash
export NEXT_PUBLIC_BASE_PATH=/yeselia   # if needed
export NEXT_PUBLIC_SITE_URL=https://username.github.io/yeselia
npm run build
# Upload the contents of out/ as the Pages artifact, or serve locally:
npx serve out
```

### Custom domain

1. Add a `CNAME` file in `public/` with your domain (or configure in repo Pages settings).
2. Leave `NEXT_PUBLIC_BASE_PATH` empty.
3. Set `NEXT_PUBLIC_SITE_URL` to `https://yourdomain.com`.

## Multilingual readiness

English is implemented throughout. Spanish strings and hooks live in `lib/i18n.ts`. Routing for `/es/...` can be added later without rewriting page content patterns.

## Forms

Forms are front-end complete with refined validation UX and a calm success state. Wire `onSubmit` to your preferred endpoint (Formspree, serverless function, CRM) when a backend is available. The static export has no server actions by design.

## SEO

- Per-page metadata and Open Graph via `lib/seo.ts`
- JSON-LD for `RealEstateAgent`, `Person`, `RealEstateListing`, `Article` and breadcrumbs
- Semantic HTML, accessible labels, focus states and skip link

## Brand voice

Calm, precise, confident. Never salesy. Written for high-net-worth international clients and serious property owners.

## Licence

Private. All rights reserved by Yeselia & Co.
