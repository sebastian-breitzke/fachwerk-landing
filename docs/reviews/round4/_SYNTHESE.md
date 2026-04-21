# Round 4 — Synthese

Zweite Review-Runde mit überarbeiteten Personas (10 Stück: 8 Branchen-Champions + 2 Rollen-Archetypen CEO/CFO) gegen die aktualisierte Seite (Stand 22.04.2026, 00:08 deployt). Vorher: Round 3 am 21.04. abends.

## Was sich auf der Seite geändert hat (zwischen R3 und R4)

- **Hero**: Headline endet auf „baut. wartet. trägt." (statt „befähigt"), Sub neu mit drei Claims (was / für wen / in 3 Jahren)
- **Pricing**: Drei Tiers (Starter/Core/Platform) statt zwei. Scope-first-Logik. Budget-Anker. „Typisch"-Framing statt Wände.
- **Szenarien**: Explizit als „fiktiv, keine Referenzen" deklariert. Eyebrow „Vier Szenarien" statt „Vier Beispiele".
- **Säulen-Tags**: Funktional (z.B. „// Ausführung mit Audit-Trail") statt Tech-Zutaten
- **Zoo-Eyebrow**: Mit Zeitachse „In 3 Jahren: Katalog oder Zoo?"
- **Gesundheit raus**: MedVita aus Katalog-Mockup, keine Health-Cases mehr
- **Legal**: Swiss „ss" → Deutsches „ß" in Impressum/Datenschutz

## Scores & Verdikte

| # | Persona | Tier | Rolle | R3 | R4 | Δ | Verdikt R4 |
|---|--------|------|-------|----|----|----|------------|
| 1 | Sandra Keller | Core | Champion | 6 | **7,5** | +1,5 | Jein → Ja mit Vorbehalt |
| 2 | Priya Krishnan | Core | TB | 7 | **8** | +1 | Ja mit Vorbehalt |
| 3 | Jürgen Brandt | Platform | Champion | 6 | **8** | +2 | Ja, mit IT-Leiter im CC |
| 4 | Rainer Vogt | Core | Champion | 6 | **7** | +1 | Ja, vorsichtig |
| 5 | Michael Grünfeld | Starter | Champion+EB | 6 | **7,5** | +1,5 | Bedingt ja (Mail mit 2 Fragen) |
| 6 | Nina Berger | Platform | Champion | 6,5 | **7,5** | +1 | Ja, zögerlich → stärker |
| 7 | Thomas Dachstein | Starter | Champion+EB | 5 | **6,5** | +1,5 | Ja, mit spitzen Fragen |
| 8 | Elena Martens | Core | Champion | 7,5 | **8,5** | +1 | Starker Ja |
| 9 | Henning Kruse *(neu)* | Platform | CEO/EB | – | **7,5** | neu | Ja, vorsichtig |
| 10 | Dr. Anna Reis *(neu)* | Core/Platform | CFO/EB | – | **6** | neu | „Mit Agenda" — hört zu |

**Ø R4: 7,35/10** (R3: 5,8/10 → **+1,55 in einer Iteration**)
**8× Ja, 1× bedingt ja, 1× „mit Agenda" (CFO hört zu), 0× Nein** (R3: 5 Nein).

Stärkster Sprung: **Jürgen +2** (Scope-over-Revenue-Fix hat genau für ihn getragen).
Bemerkenswert: **Elena 8,5** — höchste Einzelnote, klarer Core-Fit mit neuem Firmenprofil (30 Mio, eigener Bestand).
Am härtesten: **Anna (CFO, 6)** — ihre Welt (Bilanzierung, Exit, Firma hinter Fachwerk) ist die am wenigsten adressierte.

---

## Was jetzt trägt — bitte nicht kaputtreparieren

1. **Hero „baut. wartet. trägt."** — mehrfach positiv genannt. Die drei Verben landen, wo „befähigt" leer geblieben war.
2. **Scope-first-Pricing** — der Jürgen-Widerspruch ist weg. Die Sätze „Scope entscheidet, nicht Umsatz" und „eine 150-Mio-Firma mit fokussiertem Scope kann Core sein" werden explizit zitiert.
3. **Drei Tiers** — nimmt Marc/Thomas/Michael die Abfuhr, öffnet das Feld. Pricing wirkt fair und durchdacht.
4. **Szenarien fiktiv-Disclaimer** — Ehrlichkeit wird gewürdigt, auch wenn sie das Referenz-Problem nicht löst.
5. **Säulen-Tags funktional** — „Ausführung mit Audit-Trail" statt „tickets · runs · queues · egress" macht die Säulen auf einen Blick lesbar.
6. **„Erstgespräch direkt mit dem Architekten, keine Sales-Kette"** — wird in 5 Reviews explizit als „Hauptgrund, warum ich den Hörer doch nehme" genannt. Stärkstes Conversion-Argument der Seite.
7. **Problem-Kacheln + Grünfeld-/NordWare-Szenarien** — treffen Fach-Sprache erstaunlich gut (besonders Nina).

---

## Die sechs Baustellen, die noch bleiben

### 1. Referenzen + echte Zahlen (10/10 erwähnen es)

Alle zehn Personas bringen es — das fiktiv-Framing ist ehrlich, aber es schließt die Lücke nicht. **„~14 h/Woche gespart"** ist die einzige Zahl und wird von Sandra, Anna, Henning direkt angegriffen (keine Kalibrierung: wie viele SKUs, welche Kampagnen, was ist der Stundensatz, wie amortisiert das).

**Fix-Optionen in aufsteigender Tiefe:**
- *Morgen (10 Min):* Fußnote zur 14-h-Zahl („Schätzung basiert auf X SKUs, Y Kampagnen, Z Retouren/Monat"). Oder: Zahl rausnehmen, bis sie belegbar ist.
- *Diese Woche:* Welle-1-Banner oben auf Pricing: **„Erste 3–5 Referenzkunden: 25% Rabatt + Case-Study-Co-Autorenschaft. Aktuell N Slots offen."** Sandra, Henning und Anna nennen das als den einen Fix, der Vertrauen ohne Referenz-Lüge schafft.
- *Mittel:* Eine echte Zahl aus einer echten (auch anonymisierten) Implementierung. Egal ob klein. Ein echter Satz wie „bei einem Mittelstands-Zulieferer, 250 MA, 8 Wochen: Ausschuss-Rate −12%" schlägt drei fiktive Mockups.

### 2. Security / Compliance / Governance als eigener Block

Genannt von **Priya, Anna, Jürgen, Michael, Henning**. Aktuell verstreut: „Audit-Trail" in Betrieb, „GoBD-konform" bei Grünfeld, „DSGVO" als Tag. Das reicht für keinen Technical Buyer und erst recht nicht für Anna (CFO).

**Was kommen muss (in einem kleinen Block zwischen Deploy und Pricing):**
- Identity: SSO/SAML/OIDC (gegen Entra ID, Google Workspace), SCIM-Provisioning
- Rechte: RBAC-Modell, Audit-Log-Retention in Jahren
- Secrets: zentrales Vault, Per-Tenant-Encryption
- Compliance: AVV + TOMs verfügbar, SOC 2 / ISO 27001 / BSI-C5 Status oder Roadmap-Flag („auf dem Weg")
- Branchen-Regulatorik: GoBD-Verfahrensdokumentation (bei Finanzen), §203 StGB (bei Steuer/Recht), IEC 62443 + TISAX (bei Fertigung)

Ehrlich gelabelt. Was noch nicht da ist: „Roadmap Q3 2026". Das ist glaubwürdiger als Schweigen.

### 3. Bus-Faktor / Team-Frage / Firma hinter Fachwerk

Genannt von **Henning, Anna, Jürgen, Rainer** — explizit als **blockierend** bei Henning („Wenn Sebastian da nicht sauber antwortet, ist der Deal tot").

Das „Erstgespräch direkt mit dem Architekten" ist gleichzeitig **stärkstes Verkaufsargument** und **schwerster Einwand**. Es signalisiert Kurzschluss-Anbahnung, aber auch Ein-Mann-Bude-Risiko.

**Was fehlt:**
- Ein kurzer Satz „Firma hinter Fachwerk" (Rechtsform, HR-Nummer, Team-Größe / Gründungsjahr)
- Continuity-Story: entweder „Team X Personen" oder „Escrow-Plan, Kontinuitäts-Regelung für den Bus-Fall"
- Anna fragt Rechtsform-Klarheit direkt — s16e · Sebastian Breitzke im Footer sagt nicht, ob Einzelunternehmen oder GmbH

### 4. PoV-Mechanik sichtbar machen

Genannt von **Sandra, Rainer, Jürgen, Michael, Henning**. „Proof-of-Value starten" ist Haupt-CTA — aber was konkret man kauft, steht nirgends.

**Fix (Pricing-Sektion, ein Block):**
> „**Proof-of-Value:** 6 Wochen, 15–20k (Core/Platform) bzw. 3–8k (Starter). Voll anrechenbar auf die Launch-Fee. Was du bekommst: ein produktionsreifer Flow plus Abschluss-Deck mit Ergebnis. Was wir brauchen: X Stunden pro Woche von einem Fach-Ansprechpartner, Zugang zu Y Systemen. Danach entscheidest du."

### 5. Starter-Paradox auflösen

**Thomas** zeigt den schärfsten Punkt: Starter-Beschreibung sagt „Self-Service, keine SLA, Macher legt selbst an" — aber das Dachstein-Szenario zeigt erkennbar eine Integration (Wodis, Versorgerportale, Multi-Channel). Das sind nicht 1–3 Self-Service-Automationen. Thomas fragt: „Bin ich wirklich Starter, oder werde ich nach dem Gespräch sanft nach Core verschoben?"

**Entweder**
- Starter ehrlicher beschreiben: *wirklich* klein (ein Flow, eine Integration), kein Dachstein-Niveau
- Oder Dachstein-Szenario auf zwei Flows reduzieren, passend zum Starter-Paket
- Oder einen **zweiten fiktiven Starter-Case** zeigen, der ins Starter-Paket passt („Einzelner Retouren-Workflow" oder „Fristen-Mahner")

### 6. CFO-Compliance-Items (Anna, 6/10)

Anna ist die härteste Einzelstimme und benennt die meisten offenen Vertrags- und Bilanzierungsthemen. Ihre Fragen sind nicht „Marketing"-Fragen, sondern echte Due-Diligence-Punkte:
- Launch-Fee: bilanzierungsfähig (Aktivierung) oder laufender Aufwand?
- Kündigungsklausel konkret: Frist, Mindestlaufzeit, Exit-Playbook als PDF
- Was treibt die 15–35k/Monat-Range (Compute, Automationen, Datenvolumen)?
- Firma hinter Fachwerk: Rechtsform, HR, D&B, Haftpflicht
- Sub-Auftragsverarbeiter, Datenstandort-Garantie, Pentest-Historie
- Business-Case-Rechenbeispiel in Euro pro Tier (Invest, Betrieb Jahr 1–3, Payback)

Das ist Platform-Deal-Gate. Bei 200–420k/Jahr fragt jeder CFO dasselbe.

---

## Branchen-spezifische Einzelpunkte (kleiner Hebel, große Wirkung)

- **Rainer (Großhandel)** — sein Fall (Stammdaten-Harvester, 40 Lieferanten, 8 Formate) fehlt weiterhin. Fünfter Szenario wäre der direkte Fix.
- **Jürgen (Fertigung)** — „SPS" und „Modbus" stehen da, **„S7", „OPC UA", „Rockwell"** fehlen. **IEC 62443** und **TISAX** fehlen komplett. Für Fertigungs-IT-Security-Review erforderlich.
- **Nina (Finanzen)** — „SAP" reicht nicht; **SAP Business One** muss namentlich. Mandantenfähigkeit ("Multi-Site" ist ambig). GoBD-Verfahrensdoku: wer liefert sie?
- **Elena (Immobilien)** — **SAP RE** namentlich fehlt. **Fristen-Tracking** als Claim fehlt ("Trinkwasser, Aufzug, Rauchwarnmelder: Fachwerk kennt deine Fristen").
- **Michael (Steuer)** — **§203 StGB** fehlt. „Lisas Excel-Makro" im Zoo-Mockup ist E-Com-Meme; „Lotte's Fristen-Excel" würde Kanzleien treffen.
- **Thomas (kleine HV)** — Starter-Paradox (siehe oben). ROI-Zahl bei Dachstein-Szenario fehlt (14-h-Zahl steht nur bei NordWare).

---

## Priorisierte Fix-Liste (für den nächsten Sprint)

### Heute/morgen, 60 Min Arbeit
1. **14-h-Zahl fussnotieren** oder entfernen (Kalibrierung fehlt)
2. **PoV-Block konkretisieren** in Pricing-Sektion (was kostet, was passiert, was ist Ergebnis)
3. **Welle-1-Discount sichtbar** auf Pricing („erste 3–5 Kunden: 25% Rabatt")
4. **Ein Satz „Firma hinter Fachwerk"** im Footer oder im CTA (Rechtsform, Gründungsjahr, Team-Status)

### Diese Woche, halber Tag
5. **Security-/Governance-Block** zwischen Deploy und Pricing (SSO/RBAC/Audit/AVV/Roadmap-Flags)
6. **Kündigungs-Zusage** in einem Satz in Pricing („6 Monate Frist, Code-Export Teil des Aufsetz-Deliverables")
7. **Branchen-Anker explizit nennen** — S7/OPC UA/SAP B1/SAP RE/§203 als Textnennungen in den jeweiligen Szenarien

### Mittelfristig (Content-Arbeit)
8. Ein fünftes Szenario „Großhandel Stammdaten-Harvester" (für Rainer-Typ)
9. Starter-Paradox auflösen — Dachstein-Szenario entweder ehrlich kleiner machen, oder zweiten kleinen Starter-Case zeigen
10. Erste echte Referenz (anonymisiert reicht) mit EINER konkreten Zahl — ersetzt die 14-h-Schätzung als Anker

---

## Einzelne Kommentare zum In-Kopf-Behalten

- **Sandra:** „Proof-of-Value in 6 Wochen — das steht nur im CTA. Es gehört in den Hero oder direkt ins Pricing. Versteckt ist das verschenkt."
- **Jürgen:** Das ist der Kunde, für den die Scope-over-Revenue-Logik erfunden wurde. Sie hat funktioniert. +2 Punkte in einer Runde zeigen es.
- **Elena:** höchste Einzelnote. Sie ist der archetypische Core-Käufer für die neue Positionierung.
- **Henning (CEO):** seine 7,5 bei *neuer* Persona ist ein starkes Signal — das Hero spricht ihn, er geht ins Gespräch. ABER: seine Go/No-Go-Frage ist Bus-Faktor. Wenn das nicht vorab geklärt ist, stirbt Platform-Pipeline im ersten Call.
- **Anna (CFO):** 6/10 ist kein Versagen — sie ist strukturell der schwierigste Buyer. Ihre Liste (Bilanz, Exit, Firma) ist der Platform-Due-Diligence-Standard. Wer den bedient, schließt Platform-Deals.

---

## Morgen-Empfehlung

Die Seite ist in einem sehr verkaufsfähigen Zustand. 8 Ja, 0 Nein bei 10 ernsthaft skeptischen Personas ist ein Sprung, den eine einzelne Iteration selten liefert. Die verbleibenden sechs Baustellen sind benannt und priorisiert.

**Wenn du morgen eine Stunde Zeit hast:** Punkte 1–4 oben. Das sind die vier Fixes, die den meisten Hebel haben und die niemand kontrovers findet.

**Wenn du morgen strategisch denken willst:** Punkte 5 + 6 (Security-Block + Kündigungs-Zusage) sind der Platform-Deal-Enabler. Ohne die ist Anna (CFO) ein permanenter Blocker — und sie hat überall im Mittelstand Geschwister.

**Was ich nicht anfassen würde**: Hero, Säulen-Tags, Scope-first-Pricing. Die tragen.

Alle zehn Einzel-Reviews liegen als Dateien neben dieser Synthese. Bei Bedarf Fokus-Lesen auf Anna (Due-Diligence-Denk-Modus) und Henning (CEO-Pitch-Test).
