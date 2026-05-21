# fachwerk.tech

Landing page for [Fachwerk](https://fachwerk.tech) — the platform for bespoke business automation.

## Structure

```
src/pages/          Astro routes
src/components/     Shared Astro components
src/i18n/           Landing page copy per locale
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
wrangler pages deploy dist --project-name=fachwerk-landing
```

## Fonts

IBM Plex Sans is self-hosted — no external requests to Google Fonts. DSGVO-compliant.

## Languages

- `/` — German (default, target audience: DACH business users)
- `/en/` — English

Language switcher in the nav bar. `hreflang` tags for SEO.
