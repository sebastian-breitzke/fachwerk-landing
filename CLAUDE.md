# Fachwerk Website

Astro-based multi-page site for [fachwerk.tech](https://fachwerk.tech). DE + EN.

## Dev

```sh
portless fachwerk-landing npm run dev
```

Opens at: `https://fachwerk-landing.localhost`

## Build

```sh
npm run build
```

Output: `dist/`

## Deploy

- **Hosting:** Cloudflare Pages
- **Project:** `fachwerk-landing`
- **Domains:** fachwerk.tech, www.fachwerk.tech, fachwerk-landing.pages.dev
- **Git remote:** `origin` → `github.com:sebastian-breitzke/fachwerk-landing.git`
- **Branch:** `main`

```sh
git push origin main && npx wrangler pages deploy dist/ --project-name=fachwerk-landing
```

## Structure

```
src/
  layouts/Base.astro        — shared layout (nav, footer, css, js)
  components/
    Nav.astro               — consistent nav, language switcher
    Footer.astro            — s16e footer
    MiniCta.astro           — reusable CTA section
    IndustryTabs.astro      — sticky tab bar (beispiele page)
    mockups/                — 5 UI mockup components (NordWare, StahlbergWerke, MedVita, Gruenfeld, Dachstein)
  styles/global.css         — shared CSS (variables, fonts, nav, footer, etc.)
  pages/
    de/                     — German pages (default locale)
    en/                     — English pages
  i18n/                     — translation strings (de.json, en.json)
public/
  fonts/                    — IBM Plex Sans + Euclid (self-hosted)
  favicon.svg
```
