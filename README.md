# fachwerk.tech

Landing page for [Fachwerk GPE](https://fachwerk.tech), powered by Gefüge.

## Structure

```
src/pages/          Astro routes
src/components/     Shared Astro components
src/styles/         Global and page-specific styles
src/assets/         Source images processed by Astro
public/             Static assets copied as-is
```

## Hosting

Static Astro build on **Cloudflare Pages**.

```bash
# Build
npm run build

# Deploy dist/
wrangler pages deploy dist --project-name=fachwerk-landing --branch=main
```

## Fonts

Geist Sans and Geist Mono are self-hosted. Font files and licenses are in
`public/fonts/`; loading them makes no requests to external font providers.

## Languages

- `/` — German (default, target audience: DACH business users)
- `/de/`, `/en/`, `/es/` — redirects to `/`

Legal pages remain under `/de/impressum/` and `/de/datenschutz/`.
The existing `/share/bdo-b5149cf09c57b337fbc03393/` page and its assets are preserved.

## Source

Layout, content and interactions are ported from `sebastian-breitzke/gefuege-landing`,
Commit `6903692ecf8d4cec77e86ee0a1a5428d780e1f94`. Fachwerk keeps its existing logo,
domain, contact details and legal pages. The source's draft banner and editorial
video/screenshot placeholders are omitted. The source repository is not a Deploy target.
