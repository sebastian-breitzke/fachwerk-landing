# Fachwerk Website

Static landing page for [fachwerk.tech](https://fachwerk.tech).

## Deployment

- **Hosting:** Cloudflare Pages
- **Project:** `fachwerk-landing`
- **Domains:** fachwerk.tech, www.fachwerk.tech, fachwerk-landing.pages.dev
- **Deploy command:** `npx wrangler pages deploy . --project-name=fachwerk-landing`
- **Git remote:** `origin` → `github.com:sebastian-breitzke/fachwerk-landing.git`
- **Branch:** `main`

Push + deploy:
```sh
git push origin main && npx wrangler pages deploy . --project-name=fachwerk-landing
```

## Structure

- `index.html` — German version (default)
- `en/index.html` — English version
- `fonts/` — IBM Plex Sans (self-hosted)
- `favicon.svg` — SVG favicon
