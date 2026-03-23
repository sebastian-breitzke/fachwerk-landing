# fachwerk.tech

Landing page for [Fachwerk](https://fachwerk.tech) — the platform for bespoke business automation.

## Structure

```
index.html          German landing page (default)
en/index.html       English landing page
impressum.html      Legal notice (German law)
datenschutz.html    Privacy policy (DSGVO)
favicon.svg         SVG favicon (Fachwerk logo)
fonts/              Self-hosted IBM Plex Sans (300/400/500/600)
```

## Hosting

Static site on **Cloudflare Pages**.

```bash
# Deploy
wrangler pages deploy . --project-name=fachwerk-landing
```

## Fonts

IBM Plex Sans is self-hosted — no external requests to Google Fonts. DSGVO-compliant.

## Languages

- `/` — German (default, target audience: DACH business users)
- `/en/` — English

Language switcher in the nav bar. `hreflang` tags for SEO.
