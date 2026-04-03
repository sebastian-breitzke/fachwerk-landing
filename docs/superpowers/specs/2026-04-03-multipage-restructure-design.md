# Multi-Page Restructure

## Overview

Split the single-page `index.html` into three separate pages: Marketing landing, Examples by industry, and Contact. Add cross-page navigation with sticky nav. Delete the English version.

## Pages

### `index.html` — Marketing/Landing

Sections from current page, in order:
- Hero (Logo, Headline, Subline)
- Problem
- Lösung / Pillars
- No-List ("Was du nicht brauchst")
- Deployment ("Läuft wo du es brauchst")
- Mini-CTA at bottom linking to /kontakt.html

### `beispiele.html` — Erlebe Fachwerk

- Short intro section (2-3 lines, what this page shows)
- Industry Switcher ("Deine Industrie?" + pills) — also functions as sticky bar
- 5 industry panels with Flow + UI-Mockup each (E-Commerce, Fertigung, Gesundheit, Finanzen, Immobilien)
- Mini-CTA at bottom linking to /kontakt.html

### `kontakt.html` — Kontakt

- Headline: "Klingt interessant? Lass uns reden."
- Contact form: Name, E-Mail, Nachricht fields — mailto-based submit (no backend)
- Direct contact info: E-Mail (sebastian@s16e.de), Telefon (0172 4290654), LinkedIn, s16e.de

## Navigation

Shared across all three pages:
- Sticky, transparent style (current behavior)
- Logo left, links right: Home, Beispiele, Kontakt
- Active page visually marked (e.g. color: var(--primary))
- Hamburger menu on mobile (current behavior)
- No anchor links within pages — navigation is between pages only

## Beispiele-Seite: Sticky Pill-Bar

- Separate narrow bar directly below the nav
- Sticky, stays visible while scrolling through panels
- "Deine Industrie?" label + pills inline
- Click switches the visible panel below

## Shared Assets

- CSS stays inline per page (no build step, static site)
- Common styles (nav, fonts, CSS variables, footer, reveal animation) duplicated in all three pages
- JS per page: nav logic everywhere, industry switcher + sticky pill bar only on beispiele.html

## What Gets Deleted

- `en/` directory (entire English version)
- All anchor-based nav links (#problem, #plattform, #beispiel, #kontakt)
- Old mobile menu anchor links

## Footer

All pages share the same footer:
- "Ein Projekt von Sebastian Breitzke · s16e.de"
- Same as current

## Mini-CTA Pattern

On index.html and beispiele.html, a compact CTA section at the bottom:
- Short headline
- Button linking to kontakt.html
- Consistent across both pages
