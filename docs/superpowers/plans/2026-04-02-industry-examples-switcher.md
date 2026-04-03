# Industry Examples Switcher — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the two logistics examples with a pill-switcher ("Deine Industrie?") showing 5 industries, each with a Flow + UI example.

**Architecture:** Single HTML section with pill buttons controlling visibility of 5 content panels via JS class toggle. CSS additions for pill styles + transition. All content stays in `index.html`.

**Tech Stack:** Vanilla HTML/CSS/JS (no build step, static site on Cloudflare Pages)

---

### Task 1: Add pill switcher CSS

**Files:**
- Modify: `index.html:310-393` (CSS section between EXAMPLE and NO-LIST comments)

- [ ] **Step 1: Replace the existing `.example` CSS block and add pill switcher + industry panel styles**

Replace lines 310-393 (from `/* EXAMPLE */` comment to end of `.punchline`) with:

```css
/* ═══════════════════════════════════════════════
   INDUSTRY SWITCHER + EXAMPLES
   ═══════════════════════════════════════════════ */
.industry-section {
  padding: 8rem 8vw 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.industry-question {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: clamp(1.6rem, 4vw, 3rem);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  line-height: 1.15;
  color: var(--fg);
  margin-bottom: 2.5rem;
}

.industry-pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 0;
}

.industry-pill {
  font-family: var(--font-mono);
  font-weight: 600;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.6rem 1.2rem;
  border: 2px solid var(--border);
  background: transparent;
  color: var(--muted-text);
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
}

.industry-pill:hover {
  border-color: var(--primary);
  color: var(--fg);
}

.industry-pill.active {
  border-color: var(--primary);
  background: var(--primary);
  color: #fff;
}

/* Industry content panels */
.industry-panel {
  display: none;
}

.industry-panel.active {
  display: block;
}

/* Examples within panels */
.example {
  min-height: 70vh;
  padding: 4rem 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.example-intro {
  font-size: 1.05rem;
  color: var(--muted-text);
  max-width: 40rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.example-intro em {
  font-style: normal;
  color: var(--fg);
  font-weight: 500;
}

.terminal-block {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.9;
  color: var(--fg);
  border-left: 2px solid var(--primary);
  padding: 2rem;
  margin: 2rem 0;
  max-width: 52rem;
  white-space: pre-wrap;
}

.terminal-block .prompt { color: var(--primary); }

.terminal-quote {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.9;
  color: var(--fg);
  padding: 2rem;
  border: 2px solid var(--primary);
  margin: 2rem 0;
  max-width: 52rem;
  white-space: pre-wrap;
  background: rgba(42, 144, 128, 0.03);
  box-shadow: 4px 4px 0 rgba(0,0,0,0.08);
  position: relative;
}

.terminal-quote strong { color: var(--fg); font-weight: 600; }
.terminal-quote .tq-label { color: var(--primary); font-weight: 600; }

.terminal-quote[data-label]::before {
  content: attr(data-label);
}

.terminal-quote::before {
  position: absolute;
  top: -0.65rem;
  left: 1rem;
  background: var(--primary);
  color: white;
  font-family: var(--font-mono);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.6rem;
  padding: 0.15rem 0.5rem;
}

.punchline {
  font-size: 1rem;
  color: var(--fg);
  font-weight: 500;
  max-width: 40rem;
  line-height: 1.8;
  margin-top: 2rem;
}
```

- [ ] **Step 2: Add responsive rules for the pill switcher**

In the `@media (max-width: 900px)` block (~line 527), change the `.example` reference:

Replace:
```css
.section, .pillars, .example, .logimat { padding: 5rem 6vw; }
```

With:
```css
.section, .pillars, .example, .logimat, .industry-section { padding: 5rem 6vw; }
```

In the `@media (max-width: 600px)` block (~line 606), add after `.nav-hamburger { display: flex; }`:

```css
.industry-pills { gap: 0.4rem; }
.industry-pill { font-size: 0.6rem; padding: 0.5rem 0.8rem; }
.example { padding: 3rem 6vw; }
```

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add CSS for industry pill switcher and example panels"
```

---

### Task 2: Replace HTML — switcher header + E-Commerce content

**Files:**
- Modify: `index.html:740-789` (the two existing example sections + divider between them)

- [ ] **Step 1: Remove old examples and add the switcher section with E-Commerce panel**

Replace everything from `<!-- EXAMPLE -->` (line 740) through the closing `</section>` of example 02 (line 788) and the following `<div class="divider"></div>` (line 790) with:

```html
  <!-- INDUSTRY EXAMPLES -->
  <section class="industry-section reveal" id="beispiel">
    <h2 class="industry-question">Deine Industrie?</h2>
    <div class="industry-pills">
      <button class="industry-pill active" data-industry="ecommerce">E-Commerce</button>
      <button class="industry-pill" data-industry="fertigung">Fertigung</button>
      <button class="industry-pill" data-industry="gesundheit">Gesundheit</button>
      <button class="industry-pill" data-industry="finanzen">Finanzen</button>
      <button class="industry-pill" data-industry="immobilien">Immobilien</button>
    </div>
  </section>

  <!-- E-Commerce -->
  <div class="industry-panel active" data-panel="ecommerce">
    <section class="example">
      <span class="section-label">// Flow</span>
      <h2 class="section-headline">Retouren-Quote steigt?<br>Ads stoppen automatisch.</h2>

      <p class="example-intro">Dein Shop meldet: <em>die Retouren-Quote bei einem Produkt steigt.</em> Bisher merkt das erst jemand, wenn die Marge längst im Keller ist — und die Werbeausgaben weiter laufen.</p>

      <p class="example-intro">Fachwerk erkennt den Trend, <em>pausiert automatisch die Kampagnen</em> bei Facebook und Instagram für das Produkt. Einkauf bekommt eine Benachrichtigung mit Kontext.</p>

      <p class="example-intro">Wenn es hilft, analysiert die AI die Retourengründe aus Bewertungen und schlägt eine Listing-Anpassung vor. <em>Nicht weil sie immer muss — sondern weil es hier Sinn ergibt.</em></p>

      <div class="terminal-quote" data-label="AUTOMATISIERUNG — KAMPAGNEN-STEUERUNG"><strong>Produkt SKU-4820</strong> · Retouren-Rate 18% (↑ von 6%)

<span class="tq-label">Aktion:</span>   Meta Ads pausiert (3 Kampagnen).
<span class="tq-label">Grund:</span>    Retourenquote über Schwellwert.
<span class="tq-label">Einkauf:</span>  Benachrichtigt, Ticket erstellt.</div>

      <div class="terminal-quote" data-label="AI-ANALYSE — OPTIONAL"><strong>Retourengründe</strong> · SKU-4820 · letzte 30 Tage

<span class="tq-label">Top-Grund:</span>  "Farbe weicht vom Bild ab" (63%)
<span class="tq-label">Empfehlung:</span> Produktfotos aktualisieren.
<span class="tq-label">Priorität:</span>  Hoch — Listing aktiv in 2 Märkten.</div>

      <p class="punchline">Keine verbrannten Werbebudgets. Keine Überraschungen bei der Monatsabrechnung. Fachwerk handelt, bevor der Schaden wächst.</p>
    </section>

    <div class="divider"></div>

    <section class="example">
      <span class="section-label">// Interface</span>
      <h2 class="section-headline">Retouren-Cockpit —<br>nicht nur Zahlen</h2>

      <p class="example-intro">Retouren-Reports hat jeder. Aber eine Oberfläche, die dir zeigt <em>was zu tun ist</em> — Ads pausieren, Lieferant kontaktieren, Listing ändern — das ist der Unterschied zwischen Daten und Handlungsfähigkeit.</p>

      <div class="terminal-quote" data-label="RETOUREN-COCKPIT — LIVE"><strong>Auffällige Produkte</strong> · 3 Artikel mit steigender Quote

<span class="tq-label">SKU-4820:</span>  18% Retouren · Ads pausiert · [Listing prüfen]
<span class="tq-label">SKU-1133:</span>  12% Retouren · Trend steigend · [Ads pausieren]  [Ignorieren]
<span class="tq-label">SKU-0917:</span>   9% Retouren · Lieferant-Problem · [Ticket an Lieferant]</div>

      <p class="punchline">Eine Oberfläche, die arbeitet. Nicht ein Dashboard, das du lesen und dann woanders handeln musst.</p>
    </section>
  </div>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: replace old examples with industry switcher + e-commerce content"
```

---

### Task 3: Add Fertigung panel

**Files:**
- Modify: `index.html` (insert after e-commerce panel closing `</div>`, before `<!-- NO-LIST -->` or next section)

- [ ] **Step 1: Add Fertigung industry panel HTML**

Insert directly after the closing `</div>` of the e-commerce panel:

```html

  <!-- Fertigung -->
  <div class="industry-panel" data-panel="fertigung">
    <section class="example">
      <span class="section-label">// Flow</span>
      <h2 class="section-headline">Temperaturabweichung?<br>Charge gesperrt, ERP informiert.</h2>

      <p class="example-intro">Ein Sensor an Linie 3 meldet eine Abweichung. <em>Bisher sieht das erst die Qualitätssicherung — Stunden später.</em> Die Charge ist längst weiterverarbeitet, Rückverfolgung wird zum Projekt.</p>

      <p class="example-intro">Fachwerk korreliert den Sensorwert mit der letzten Chargenprüfung, <em>sperrt die Charge automatisch im ERP</em> und benachrichtigt den Schichtleiter.</p>

      <p class="example-intro">Wenn ein Muster erkennbar ist, liefert die AI den Kontext: <em>"Abweichung tritt seit dem Werkzeugwechsel in KW 12 auf."</em> Nicht geraten — aus den Daten abgeleitet.</p>

      <div class="terminal-quote" data-label="AUTOMATISIERUNG — QUALITÄTSSICHERUNG"><strong>Linie 3</strong> · Temperaturabweichung erkannt

<span class="tq-label">Messwert:</span>  187°C (Soll: 175°C ± 5°C)
<span class="tq-label">Charge:</span>    CH-20260402-L3 gesperrt.
<span class="tq-label">ERP:</span>       Sperrung eingetragen, QS informiert.</div>

      <div class="terminal-quote" data-label="AI-ANALYSE — OPTIONAL"><strong>Musteranalyse</strong> · Linie 3 · letzte 6 Wochen

<span class="tq-label">Muster:</span>     Abweichung seit KW 12 (Werkzeugwechsel).
<span class="tq-label">Korrelation:</span> Neues Werkzeug + hohe Taktrate.
<span class="tq-label">Empfehlung:</span>  Werkzeugkalibrierung prüfen.</div>

      <p class="punchline">Kein stiller Qualitätsverlust. Keine Rückverfolgung über drei Schichten. Fachwerk greift ein, bevor die Charge das Werk verlässt.</p>
    </section>

    <div class="divider"></div>

    <section class="example">
      <span class="section-label">// Interface</span>
      <h2 class="section-headline">Schichtleiter-Dashboard —<br>am Band, nicht im Büro</h2>

      <p class="example-intro">Der Schichtleiter braucht kein BI-Tool mit Filterkaskaden. Er braucht auf dem Tablet am Band: <em>was läuft, was steht, wo muss ich entscheiden.</em></p>

      <div class="terminal-quote" data-label="SCHICHTLEITER — TABLET LINIE 1-4"><strong>Aktuelle Schicht</strong> · Frühschicht 06:00–14:00

<span class="tq-label">Linie 1:</span>  Läuft · Takt 98%
<span class="tq-label">Linie 2:</span>  Läuft · Takt 94%
<span class="tq-label">Linie 3:</span>  Charge gesperrt · [Freigeben]  [Eskalieren]
<span class="tq-label">Linie 4:</span>  Wartung geplant 10:00 · [Verschieben]  [Bestätigen]</div>

      <p class="punchline">Eine Oberfläche für Entscheidungen, nicht für Recherche. Direkt am Band, direkt actionable.</p>
    </section>
  </div>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add Fertigung industry panel"
```

---

### Task 4: Add Gesundheit panel

**Files:**
- Modify: `index.html` (insert after Fertigung panel closing `</div>`)

- [ ] **Step 1: Add Gesundheit industry panel HTML**

Insert directly after the closing `</div>` of the Fertigung panel:

```html

  <!-- Gesundheit -->
  <div class="industry-panel" data-panel="gesundheit">
    <section class="example">
      <span class="section-label">// Flow</span>
      <h2 class="section-headline">Kritischer Befund?<br>Sofort beim richtigen Arzt.</h2>

      <p class="example-intro">Labor schickt den Befund als HL7-Nachricht oder PDF. <em>Bisher landet der im Postfach.</em> Irgendwann schaut jemand drauf. Bei kritischen Werten kann "irgendwann" zu spät sein.</p>

      <p class="example-intro">Fachwerk extrahiert die Werte, ordnet den Patienten zu, <em>routet direkt an den zuständigen Arzt.</em> Kritische Werte lösen sofort eine Push-Benachrichtigung aus.</p>

      <p class="example-intro">Wenn der Befundverlauf auffällig ist, flaggt die AI einen Verschlechterungstrend — <em>nicht als Diagnose, sondern als Hinweis:</em> hier lohnt sich ein genauerer Blick.</p>

      <div class="terminal-quote" data-label="AUTOMATISIERUNG — BEFUND-ROUTING"><strong>Patient 2847</strong> · Laborbefund eingegangen

<span class="tq-label">Werte:</span>    Kalium 6.2 mmol/L (kritisch hoch)
<span class="tq-label">Routing:</span>  Dr. Weber (Nephrologie) · Push gesendet.
<span class="tq-label">Status:</span>   Befund zugeordnet, Akte aktualisiert.</div>

      <div class="terminal-quote" data-label="AI-ANALYSE — OPTIONAL"><strong>Verlaufsanalyse</strong> · Patient 2847 · letzte 8 Wochen

<span class="tq-label">Trend:</span>      Kalium steigend (4.8 → 5.5 → 6.2)
<span class="tq-label">Kontext:</span>    Medikation seit KW 10 umgestellt.
<span class="tq-label">Hinweis:</span>    Verschlechterungstrend — Rücksprache empfohlen.</div>

      <p class="punchline">Kein Befund, der im Postfach wartet. Kritische Werte sind sofort da, wo sie hingehören — beim richtigen Arzt, mit dem richtigen Kontext.</p>
    </section>

    <div class="divider"></div>

    <section class="example">
      <span class="section-label">// Interface</span>
      <h2 class="section-headline">Stations-Übersicht —<br>Handeln, nicht suchen</h2>

      <p class="example-intro">Die Stationsschwester braucht keine Patientenakte mit 40 Tabs. Sie braucht: <em>wer hat offene Befunde, was ist kritisch, was muss jetzt passieren.</em></p>

      <div class="terminal-quote" data-label="STATION 3B — OFFENE BEFUNDE"><strong>Aktuelle Patienten</strong> · 12 stationär

<span class="tq-label">Zimmer 301:</span>  Befund offen · Kalium kritisch · [Arzt rufen]
<span class="tq-label">Zimmer 304:</span>  Neuer Befund · unauffällig · [Zur Kenntnis]
<span class="tq-label">Zimmer 307:</span>  Verordnung fällig · [Verordnen]  [Verschieben]</div>

      <p class="punchline">Eine Oberfläche pro Station. Offene Befunde, kritische Werte, nächste Aktion — alles sichtbar, alles direkt.</p>
    </section>
  </div>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add Gesundheit industry panel"
```

---

### Task 5: Add Finanzen panel

**Files:**
- Modify: `index.html` (insert after Gesundheit panel closing `</div>`)

- [ ] **Step 1: Add Finanzen industry panel HTML**

Insert directly after the closing `</div>` of the Gesundheit panel:

```html

  <!-- Finanzen -->
  <div class="industry-panel" data-panel="finanzen">
    <section class="example">
      <span class="section-label">// Flow</span>
      <h2 class="section-headline">Rechnung passt nicht?<br>Klärungsfall mit Kontext.</h2>

      <p class="example-intro">Eingangsrechnung kommt per Mail. <em>Bisher: ausdrucken, Ordner raus, Bestellung suchen, Lieferschein suchen, vergleichen.</em> Bei Abweichungen beginnt das Telefonieren.</p>

      <p class="example-intro">Fachwerk gleicht automatisch mit Bestellung und Lieferschein ab. <em>Passt alles — Freigabe läuft automatisch.</em> Abweichung? Klärungsfall mit vollständigem Kontext an den Sachbearbeiter.</p>

      <p class="example-intro">Bei wiederkehrenden Abweichungen erkennt die AI das Muster: <em>"Lieferant X rechnet seit drei Monaten Frachtkosten ab, die nicht vereinbart sind."</em> Nicht geraten — aus den Daten.</p>

      <div class="terminal-quote" data-label="AUTOMATISIERUNG — RECHNUNGSABGLEICH"><strong>Rechnung #R-20260328</strong> · Lieferant Müller GmbH

<span class="tq-label">Bestellung:</span>  PO-8821 · Match.
<span class="tq-label">Lieferschein:</span> LS-4455 · Match.
<span class="tq-label">Betrag:</span>      Abweichung +142,00 € (Frachtkosten).
<span class="tq-label">Aktion:</span>      Klärungsfall erstellt, Sachbearbeiter informiert.</div>

      <div class="terminal-quote" data-label="AI-ANALYSE — OPTIONAL"><strong>Musteranalyse</strong> · Lieferant Müller GmbH · 6 Monate

<span class="tq-label">Muster:</span>      Frachtkosten-Aufschlag in 4 von 6 Rechnungen.
<span class="tq-label">Summe:</span>       568,00 € nicht vereinbarte Mehrkosten.
<span class="tq-label">Empfehlung:</span>  Konditionen mit Lieferant klären.</div>

      <p class="punchline">Kein manueller Abgleich. Keine vergessenen Abweichungen. Fachwerk prüft, was passt — und liefert Kontext, wo es nicht passt.</p>
    </section>

    <div class="divider"></div>

    <section class="example">
      <span class="section-label">// Interface</span>
      <h2 class="section-headline">Freigabe-Board —<br>ein Klick statt drei Systeme</h2>

      <p class="example-intro">Der Sachbearbeiter braucht keine Rechnungsliste zum Durchscrollen. Er braucht: <em>was ist offen, was weicht ab, was kann ich freigeben.</em></p>

      <div class="terminal-quote" data-label="FREIGABE-BOARD — EINGANGSRECHNUNGEN"><strong>Offene Rechnungen</strong> · 8 zur Prüfung

<span class="tq-label">#R-0328:</span>  Müller GmbH · +142 € Abweichung · [Klären]  [Freigeben]
<span class="tq-label">#R-0329:</span>  Schmidt AG · Match · [Freigeben]
<span class="tq-label">#R-0331:</span>  Weber KG · Lieferschein fehlt · [Nachfordern]  [Zurückstellen]</div>

      <p class="punchline">Freigeben, klären, nachfordern — alles aus einer Oberfläche. Kein Wechsel zwischen Mail, ERP und Excel.</p>
    </section>
  </div>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add Finanzen industry panel"
```

---

### Task 6: Add Immobilien panel

**Files:**
- Modify: `index.html` (insert after Finanzen panel closing `</div>`)

- [ ] **Step 1: Add Immobilien industry panel HTML**

Insert directly after the closing `</div>` of the Finanzen panel:

```html

  <!-- Immobilien -->
  <div class="industry-panel" data-panel="immobilien">
    <section class="example">
      <span class="section-label">// Flow</span>
      <h2 class="section-headline">Wasserschaden gemeldet?<br>Handwerker beauftragt.</h2>

      <p class="example-intro">Mieter meldet einen Wasserschaden über das Formular. <em>Bisher: Mail an die Hausverwaltung, die weiterleitet, die anruft, die wartet.</em> Tage vergehen. Schaden wächst.</p>

      <p class="example-intro">Fachwerk kategorisiert die Meldung, <em>prüft automatisch die Versicherungsrelevanz</em> und beauftragt den passenden Handwerker aus dem hinterlegten Pool. Mieter bekommt direkt einen Terminvorschlag.</p>

      <p class="example-intro">Bei Fotos in der Meldung schätzt die AI die Dringlichkeit ein: <em>stehendes Wasser = sofort, feuchter Fleck = regulär.</em> Priorisierung mit Grund, nicht nach Bauchgefühl.</p>

      <div class="terminal-quote" data-label="AUTOMATISIERUNG — SCHADENSMELDUNG"><strong>Objekt Rosenstraße 14</strong> · Wohnung 3 OG links

<span class="tq-label">Schaden:</span>     Wasserschaden Badezimmer.
<span class="tq-label">Versicherung:</span> Relevanz geprüft — meldepflichtig.
<span class="tq-label">Handwerker:</span>  Rohrbau Petersen beauftragt.
<span class="tq-label">Mieter:</span>      Terminvorschlag morgen 09:00 gesendet.</div>

      <div class="terminal-quote" data-label="AI-ANALYSE — OPTIONAL"><strong>Foto-Analyse</strong> · Schadensmeldung Wohnung 3 OG

<span class="tq-label">Erkennung:</span>   Stehendes Wasser, Deckenverformung.
<span class="tq-label">Dringlichkeit:</span> Hoch — sofortige Sperrung empfohlen.
<span class="tq-label">Empfehlung:</span>  Nachbarwohnung informieren (Wasserschaden von oben möglich).</div>

      <p class="punchline">Kein Ping-Pong zwischen Mieter, Verwaltung und Handwerker. Fachwerk handelt — vom Eingang der Meldung bis zum Terminvorschlag.</p>
    </section>

    <div class="divider"></div>

    <section class="example">
      <span class="section-label">// Interface</span>
      <h2 class="section-headline">Objektmanager —<br>alle Vorgänge, ein Blick</h2>

      <p class="example-intro">Der Verwalter braucht keine Excelliste pro Objekt. Er braucht: <em>was ist offen, wer kümmert sich, wo muss ich eingreifen.</em></p>

      <div class="terminal-quote" data-label="OBJEKTMANAGER — PORTFOLIO"><strong>Offene Vorgänge</strong> · 4 Objekte mit Handlungsbedarf

<span class="tq-label">Rosenstr. 14:</span>  Wasserschaden · Handwerker morgen · [Status]
<span class="tq-label">Birkenweg 7:</span>   Heizungsausfall · Techniker vor Ort · [Mieter informieren]
<span class="tq-label">Marktplatz 2:</span>  Nebenkostenabrechnung fällig · [Erstellen]  [Verschieben]
<span class="tq-label">Parkstr. 9:</span>    Mieterwechsel · Übergabe offen · [Termin planen]</div>

      <p class="punchline">Alle Objekte, alle Vorgänge, alle Aktionen — eine Oberfläche. Verwaltung, die verwaltet, statt zu suchen.</p>
    </section>
  </div>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: add Immobilien industry panel"
```

---

### Task 7: Add switcher JavaScript

**Files:**
- Modify: `index.html` (JS section at bottom, before `</script>`, ~line 849)

- [ ] **Step 1: Add the pill switcher click handler**

Insert before the `// Scroll reveal` line:

```javascript
// Industry switcher
document.querySelector('.industry-pills').addEventListener('click', (e) => {
  const pill = e.target.closest('.industry-pill');
  if (!pill) return;

  const industry = pill.dataset.industry;

  document.querySelectorAll('.industry-pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');

  document.querySelectorAll('.industry-panel').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.panel === industry);
  });
});
```

- [ ] **Step 2: Verify the reveal observer still picks up new sections**

The existing observer targets `.reveal` — the `.industry-section` has `reveal` on it. The `.example` sections inside panels don't need `reveal` individually since the parent panel show/hide controls their visibility. No changes needed.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add industry switcher JS toggle"
```

---

### Task 8: Remove the default `::before` content from `.terminal-quote`

**Files:**
- Modify: `index.html` (CSS)

- [ ] **Step 1: Update the terminal-quote `::before` rule**

The old default `content: 'AI-ANALYSE — E-MAIL AN DEN DISPONENTEN'` is no longer relevant. All terminal-quotes now use `data-label`. Change:

```css
.terminal-quote::before {
  content: 'AI-ANALYSE — E-MAIL AN DEN DISPONENTEN';
```

To:

```css
.terminal-quote::before {
  content: '';
```

This ensures any terminal-quote without a `data-label` doesn't show the old logistics text.

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "fix: remove old default terminal-quote label"
```

---

### Task 9: Clean up removed assets

**Files:**
- Check: `infinity-white.svg` (was used by SimpleChain banner, removed in earlier edit)

- [ ] **Step 1: Check if infinity-white.svg is referenced anywhere**

```bash
rg "infinity-white" index.html en/index.html
```

If no results, delete the file:

```bash
rm infinity-white.svg
```

- [ ] **Step 2: Commit if deleted**

```bash
git add -A infinity-white.svg
git commit -m "chore: remove unused infinity-white.svg"
```

---

### Task 10: Visual verification

- [ ] **Step 1: Open the page locally and verify**

```bash
open index.html
```

Check:
- Pills render in a row, E-Commerce is active by default
- Clicking each pill switches the content
- Each industry shows Flow + UI example
- Terminal-quote labels are correct per industry
- Mobile: pills wrap, content is readable
- No layout breakage in other sections

- [ ] **Step 2: Final commit if any fixes needed**
