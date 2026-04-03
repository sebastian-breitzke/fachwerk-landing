# Industry Examples Switcher

## Overview

Replace the current two logistics-focused examples with a pill-switcher that lets visitors pick their industry. Each industry shows two examples: an automated flow and an actionable UI/dashboard.

## Switcher UI

Headline: **"Deine Industrie?"**
Layout: Horizontal pill buttons below the headline.
Pills: E-Commerce | Fertigung | Gesundheit | Finanzen | Immobilien

Behavior:
- First pill active by default (E-Commerce)
- Click switches both examples below (flow + UI)
- No page reload, pure JS toggle
- Smooth transition (fade or slide)
- Mobile: pills wrap to 2-3 per row

## Structure Per Industry

Each industry has exactly two examples following the existing pattern:

1. **Flow-Beispiel** — automated process (integration, data routing, action)
   - Narrative intro (2-3 short paragraphs, concrete scenario)
   - Terminal-quote block showing the structured output
   - Punchline
   - KI involvement only where it adds real value, not everywhere

2. **UI-Beispiel** — actionable dashboard/interface
   - Narrative intro explaining why passive reports aren't enough
   - Terminal-quote block showing the dashboard structure (actions, not just data)
   - Punchline

## Industry Content

### 1. E-Commerce

**Flow: Automatische Kampagnen-Steuerung**
- Trigger: Retouren-Quote für ein Produkt steigt
- Fachwerk pausiert automatisch Facebook/Instagram Ads für das Produkt
- Benachrichtigung an Einkauf
- KI optional: Analysiert Retourengründe aus Bewertungen, schlägt Listing-Anpassung vor

**UI: Retouren-Cockpit**
- Produkte mit steigender Retouren-Quote
- Direkt Ads pausieren/starten
- Lieferanten-Ticket erstellen
- Alles aus einer Oberfläche

### 2. Fertigung / Produktion

**Flow: Maschinenanbindung + Qualitätsdaten**
- Trigger: Sensor meldet Temperaturabweichung an Linie 3
- Fachwerk korreliert mit letzter Chargenprüfung
- Erstellt automatisch Sperrung der Charge im ERP
- KI optional: Erkennt Muster — Abweichung tritt seit Werkzeugwechsel auf

**UI: Schichtleiter-Dashboard**
- Offene Qualitätsprobleme
- Maschinenstatus
- Direkte Freigabe oder Eskalation
- Tablet-optimiert am Band

### 3. Gesundheitswesen

**Flow: Befund-Routing**
- Trigger: Labor schickt Befund als HL7/PDF
- Fachwerk extrahiert Werte, ordnet Patient zu, routet an zuständigen Arzt
- Kritische Werte → sofortige Push-Benachrichtigung
- KI optional: Erkennt Muster im Befundverlauf, flaggt Verschlechterungstrend

**UI: Stations-Übersicht**
- Patienten mit offenen Befunden
- Kritische Werte hervorgehoben
- Direkt Rückruf oder Verordnung anstoßen

### 4. Finanzen / Buchhaltung

**Flow: Rechnungsabgleich**
- Trigger: Eingangsrechnung kommt per Mail
- Fachwerk gleicht mit Bestellung und Lieferschein ab
- Match → automatische Freigabe, Abweichung → Klärungsfall mit Kontext
- KI optional: Klassifiziert wiederkehrende Abweichungsmuster, schlägt Lieferantengespräch vor

**UI: Freigabe-Board**
- Offene Rechnungen
- Abweichungen mit Kontext
- One-Click-Freigabe oder Rückfrage an Lieferant

### 5. Immobilien / Hausverwaltung

**Flow: Schadensmeldung → Handwerker**
- Trigger: Mieter meldet Wasserschaden per Formular
- Fachwerk kategorisiert, prüft Versicherungsrelevanz, beauftragt Handwerker
- Mieter bekommt automatisch Terminvorschlag
- KI optional: Priorisiert nach Schadenschwere aus Fotobeschreibung

**UI: Objektmanager-Dashboard**
- Offene Vorgänge pro Objekt
- Status Handwerkeraufträge
- Direkt Mieter kontaktieren oder Versicherung melden

## Design Constraints

- Language: German only (English version later)
- No made-up numbers or statistics
- Du-Form throughout
- KI only where it makes sense, not as default sauce
- Terminal-quote blocks follow existing CSS pattern (`.terminal-quote`, `.tq-label`, `data-label`)
- Existing section-label / section-headline / example-intro / punchline structure stays

## Technical Approach

- Single HTML section replaces both current example sections
- Pills are buttons with `data-industry` attribute
- Each industry's content is a `div[data-content="industry-name"]` — show/hide via JS
- CSS: minimal additions (pill styles, active state, transition)
- JS: click handler toggles `display` or a class, ~15 lines
- No framework, no build step — stays static

## Navigation

- Nav link changes from referencing two separate examples to one "Beispiele" link pointing to the switcher section
- Mobile nav follows same change

## What This Replaces

- Example 01: "Tour-Dokumente in Minuten statt Stunden" (removed)
- Example 02: "Oberflächen, die arbeiten" (removed)
- Divider between examples (removed)
- The section headline and concept of "Oberflächen die arbeiten" gets absorbed into each industry's UI example
