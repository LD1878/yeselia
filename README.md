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

## Live site

**https://yeselia.com**

GitHub Pages is configured to deploy from the `main` branch root with the custom domain `yeselia.com`. The static export is published to the repository root (`index.html`, `_next/`, route folders, `CNAME`) with an empty `basePath` so assets resolve as `/_next/...`.

### Automatic deploy

Push changes under `app/`, `components/`, `lib/`, or related config to `main`. The workflow in `.github/workflows/deploy.yml`:

1. Builds the Next.js static export with empty `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL=https://yeselia.com`
2. Copies the `out/` contents to the branch root (including `CNAME` from `public/`)
3. Commits and pushes the published site (no deploy loop: only source paths trigger the workflow)

You can also run the workflow manually from the Actions tab (`workflow_dispatch`).

### Manual local build for Pages

```bash
# Root domain / custom domain (default)
export NEXT_PUBLIC_BASE_PATH=
export NEXT_PUBLIC_SITE_URL=https://yeselia.com
npm run build
cp -a out/. .
# Commit the published files, or preview with:
npx serve out
```

### Project-pages path (optional)

If you ever need to serve from a GitHub project subpath again (e.g. `username.github.io/yeselia/`):

1. Set `NEXT_PUBLIC_BASE_PATH=/yeselia` and matching `NEXT_PUBLIC_SITE_URL` in the workflow.
2. Remove or stop relying on the custom-domain `CNAME`.

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
