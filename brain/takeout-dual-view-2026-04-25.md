# Takeout: Dual View — Business / Macher

**Datum:** 2026-04-25
**Kontext:** Fachwerk Landing Page (`~/projects/fachwerk-website`)
**Letzter Commit:** `2c7df59` — "Merge Why-page into homepage + Persona-Selector + fiktive Stimmen"

---

## Auftrag

Der bestehende 3er-Persona-Selector (Macher / Fachlich / Entscheider) mit additiven Insert-Blöcken wird **komplett ersetzt** durch einen binären View-Toggle: **Business** (default) vs **Macher**.

Vorbild: Shopify — zwei visuell distinkte Welten auf einer URL. Nicht additive Textblöcke, sondern ein **kompletter Theme-Switch** (Farben, Typografie, Sprache, Vibe).

---

## Architektur-Entscheidungen

### Ein HTML, ein DOM, zwei Erlebnisse

- `data-view="business"` oder `data-view="macher"` auf `<html>`
- CSS-Variablen-Override für den gesamten visuellen Switch
- JS tauscht Textinhalte aus dem i18n-Objekt
- **Kein** zweites HTML, **keine** zweite URL
- SEO: Crawler sieht immer Business (Default ohne JS)
- `localStorage` key: `fw-view` (ersetzt `fw-persona`)

### Zwei visuelle Welten

| Eigenschaft | Business (Default) | Macher |
|---|---|---|
| Background | `#faf5ea` (warm paper) | `#1a1f2b` (dark console) |
| Accent | `#e8a33d` (gold) | `#5eead4` (teal) |
| Headlines | Fraunces (serif) | IBM Plex Mono |
| Body | IBM Plex Sans | IBM Plex Sans (mit mehr Mono-Elementen) |
| Vibe | Vertrauen, Substanz, Editorial | Werkstatt, Konsole, Terminal |
| Sprache | Ergebnis, ROI, Investition | Architektur, Stack, Code-Ownership |

---

## Betroffene Dateien

| Datei | Änderung |
|---|---|
| `src/components/PersonaSelector.astro` | Ersetzen durch `ViewToggle.astro` (2 Buttons statt 3) |
| `src/components/Home.astro` | Toggle einbauen, `data-view-text` Attribute für Text-Swap |
| `src/styles/home.css` | `html[data-view="macher"]` CSS-Variablen-Override (~200 Zeilen), `.persona-insert` raus, `data-persona-show` raus |
| `src/i18n/home-de.ts` | Macher-Override-Objekt pro Sektion |
| `src/i18n/home-en.ts` | Macher-Override-Objekt pro Sektion |
| `src/i18n/home-es.ts` | Macher-Override-Objekt pro Sektion |
| `public/fw-home.js` | View-Switch-Logik, Text-Swap |

---

## Content-Plan pro Sektion

### Hero
- **Business:** "Maßgeschneiderte Software auf solidem Rohbau für den Mittelstand" (Status quo)
- **Macher:** "Ein Tragwerk für Custom-Software. Elixir · Phoenix · Postgres." — technisch, direkt, Architektur-Sprache

### Problem (01)
- **Business:** Kosten, Zeit, Abhängigkeit — CEO/CFO Pain (Status quo)
- **Macher:** Lock-in, fehlende Kontrolle, Shadow-IT, API-Key-Chaos auf Lisas Laptop

### Plattform (02)
- **Business:** 5 Säulen als Wertversprechen (Status quo)
- **Macher:** Architektur-Sprache, Timber-SVG prominenter, Stack-Details (Elixir/Phoenix, Postgres, Channels)

### Sackgassen (03)
- **Business:** Vergleichstabelle (Status quo — stark für Entscheider)
- **Macher:** Technische Tiefe — Vendor-Lock, API-Limits, Deployment-Constraints

### Kipp-Punkte (03b)
- **Business:** "Ab wann kippt es?" (Status quo)
- **Macher:** Gleich — diese Sektion funktioniert für beide

### AI + Code (04)
- **Business:** Risikominimierung, Compliance, GoBD (Status quo)
- **Macher:** Flow-Pipeline-Detail, Code-vs-AI pro Schritt, Modell-Versionen, Audit-Logs

### Katalog vs Zoo (05)
- **Business:** Governance, Übersicht, kein Zoo (Status quo)
- **Macher:** Versionierung, Git-like Mental Model, Owner-Konzept, Release-Historie

### Use Cases (06)
- **Business:** Outcome-fokussiert, fiktive Stimmen, "14h/Woche gespart" (Status quo)
- **Macher:** Gleiche 4 Cases, aber Tech-Stack + Integration betont ("SPS · Modbus/TCP · SAP-RFC")

### Deployment (07)
- **Business:** Cloud/On-Prem/Hybrid als Option (Status quo)
- **Macher:** Stack-Details: Docker, Caddy, Postgres, Air-Gap-Architektur

### Pricing (08)
- **Zahlen:** Identisch in beiden Views
- **Business:** "Launch-Fee", "Investition", "Jahresbudget"
- **Macher:** "Setup", "Stack", "dein Repo, dein Code"

### CTA (09)
- **Business:** "Proof-of-Value starten"
- **Macher:** "Architektur-Session buchen"

---

## Technische Umsetzung

### CSS-Switch (home.css)

```css
/* Macher-Override: dark console theme */
html[data-view="macher"] {
  --bg: #1a1f2b;
  --bg-2: #222837;
  --fg: #f4ede0;
  --fg-2: #fdfaf2;
  --muted: #a79d87;
  --line: #2d3546;
  --accent: oklch(78% 0.14 194);
  --accent-ink: oklch(94% 0.05 194);
  --ink: #f4ede0;
  --paper: #222837;
  /* Typografie: Mono-dominant */
  --font-head: 'IBM Plex Mono', monospace;
  --font-body: 'IBM Plex Sans', sans-serif;
}

/* Smooth transition */
html {
  transition: background-color 300ms, color 300ms;
}
```

### i18n-Struktur (home-de.ts)

```typescript
hero: {
  eyebrow: 'Maßgeschneiderte Software auf solidem Rohbau für den Mittelstand',
  headline: `<span class="strike">Vibe Coding</span>...`,
  // ... Business-Default wie gehabt

  macher: {
    eyebrow: 'Custom-Software auf solidem Tragwerk · Elixir · Phoenix · Postgres',
    headline: `<em>Fachwerk</em><span class="fw-punct">:</span><br>baut. wartet. trägt.<br><span class="mono-sub">// ein Rohbau, kein Baukasten</span>`,
    sub: `...`,
    ctaPrimary: 'Architektur-Session buchen',
  }
},
```

### Text-Swap (JS)

```javascript
function applyView(view) {
  document.documentElement.dataset.view = view;
  localStorage.setItem('fw-view', view);
  
  // Swap text content from i18n macher overrides
  document.querySelectorAll('[data-vt]').forEach(el => {
    const key = el.dataset.vt;
    const text = view === 'macher' && macherTexts[key]
      ? macherTexts[key]
      : businessTexts[key];
    if (text) el.innerHTML = text;
  });
}
```

### Home.astro: data-vt Attribute

```astro
<h1 class="hero-head" set:html={t.hero.headline} data-vt="hero.headline"></h1>
<p class="hero-sub" set:html={t.hero.sub} data-vt="hero.sub"></p>
```

---

## Aufräumen (entfernen)

- `.persona-insert` CSS-Block komplett
- `data-persona-show` CSS-Regeln
- `fw-persona` localStorage-Referenzen
- 3er-Pill-Buttons (Macher/Fachlich/Entscheider)
- Alles was `data-persona` referenziert

---

## Constraints

- `npm run build` muss bestehen
- Anti-AI-Slop: KEINE colored left-border cards, KEINE gradient cards
- DE/EN/ES synchronisiert halten
- Sektionsstruktur (9 Blöcke, gleiche Reihenfolge) bleibt identisch
- Canonical URL bleibt `/de/` — kein `/de/business/` vs `/de/macher/`

---

## Uncommitted Changes (aktueller Stand)

`git status` zeigt uncommittete Löschungen alter HTML-Dateien (beispiele.html, datenschutz.html, etc.) und kleine Änderungen an .gitignore, README.md, favicon.svg. Diese sollten vor dem Dual-View-Feature committet werden.

---

## Status

**Noch nicht implementiert.** Dieses Dokument ist der vollständige Bauplan für die Umsetzung in Claude Code.
