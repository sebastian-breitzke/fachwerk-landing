# Pricing-Vorschlag (Round 3 — final, deployed) — Fachwerk Tiers

> **Status nach Sebastian-Feedback (2026-04-26):** Round 2 verworfen, Round 3 deployed. Kernkorrekturen:
> - **Adapter-Liste komplett raus** — "es gibt keine Standard-Schnittstelle, jede Integration ist Custom"
> - **3 Tiers → 2 Tiers** (Core + Platform). Starter raus, dafür **Quick-Setup-Block** als Türöffner für Owner-Operator
> - **Multi-Tenancy als technische Trennung** zwischen Core (ohne) und Platform (mit)
> - **Umsatzangaben raus** (widersprachen "Scope entscheidet")
> - **"Mensch im Loop"** als Wertversprechen ergänzt (Hero-Sub)
>
> Diese Round 3 ist live auf fachwerk.tech (Commit `tbd`). Round 2-Inhalt bleibt unten als Doku, mit Korrekturen-Hinweisen.

---

# Round 3 — Was final deployed wurde

## Adapter-Story (statt Adapter-Liste)

**Wichtigste Erkenntnis:** Keine Liste "Top-15 inkludiert / Custom extra". Stattdessen ehrlicher Klartext:

> **Es gibt keine Standard-Schnittstelle.** Eine "Standard-SAP-Schnittstelle" hat in 20 Jahren niemand gesehen. Eine "Shopify-Anbindung" technisch ja — aber was du tatsächlich brauchst (Retouren-Codes mappen, Mandanten-Kontext einrechnen, deine Listing-Logik) ist immer Custom. Genau hier scheitert Low-Code im Mittelstand. Genau hier hast du Consultants, die jahrelang konfigurieren.
>
> **Fachwerks Hebel:** KI schreibt jede Integration custom für dich. One-Shot bei Standard-APIs (Shopify, GraphQL, SAP-RFC, DATEV-Connect). Deep bei Obskurem (Modbus über 30-Jahre-alten TCP-Stack). Du zahlst nicht für Adapter — du zahlst für die Plattform und die Zeit, die wir reinstecken.

Eingebaut in die "Wie Fachwerk baut"-Section (#how) als Lede.

## Tier-Struktur final (2 Tiers + Quick-Setup)

### **Quick-Setup** *(kein Tier — Buchung)*
- 2-5 Tage Sebastian buchen
- Single-User-Instanz auf Cloud-by-Fachwerk
- Tagessatz × Tage einmalig + Hosting
- Direkter Draht: sebastian@s16e.de · +49 172 4290654
- Auf Webseite als Block unter den 2 Tier-Karten — wertschätzend formuliert ("Owner-Operator, kleines Team, viel Hands-on?"), nicht "kleiner Macher"

### **Core** — Operative Plattform mit festem Team
- 15-40k € Setup + 3-8k €/Mo = 51-136k €/Jahr
- Cloud-gehostet (StackIT EU oder eigener Hoster)
- **Keine Multi-Tenancy** (eine Instanz, ein Team)
- Setup-Sprint mit Sebastian (Bootstrap durch Architekten — Aufsetzen ist immer Projekt)
- KI-generated Custom-Integrationen für deine Welt
- Quartals-Review · 4h-Response in Werkstatt-Zeiten
- Code in deinem Repo · keine Vendor-DSL

### **Platform** — Strategische Partnerschaft
- 80-150k € Setup + 15-35k €/Mo = 260-570k €/Jahr
- **Multi-Tenancy ja** — mehrere Teams · Mandanten · Country-Shops
- On-Prem · Hybrid · Air-Gap-fähig (SPS, Modbus, OPC UA)
- Sebastian als Architekt im Loop — strategische Begleitung
- 4-6 Advisory-Days/Jahr inklusive
- Quellcode-Escrow optional · 5J-Vertrag = 15 % Discount

## Differenzierung Core vs Platform: Multi-Tenancy

**Klarer technischer Schalter, keine Umsatz-Heuristik:**
- Brauchst du Multi-Tenant (Teams/Mandanten/Country-Shops)? → Platform
- Brauchst du On-Prem oder Hybrid? → Platform
- Brauchst du regulierte Compliance + Advisory? → Platform
- Festes Team, Cloud-Standard, dauerhafter Betrieb? → Core
- Single-Macher, fokussierter Scope? → Quick-Setup

## Was raus ist (gegen Round 2)

- ❌ Starter-Tier
- ❌ Adapter-Bibliothek-Liste ("Top-15 inkl.")
- ❌ Umsatzangaben in Tier-Subs
- ❌ "Mengen-Trigger Anzahl Automationen"
- ❌ Volumen-Staffel ("ab 11 Automationen +30 %")
- ❌ Bilanzierungs-Tabelle Aktivum/Aufwand-Anteile pro Tier
- ❌ Multi-Year-Discount detailliert kommuniziert
- ❌ Exit-Playbook detailliert auf Pricing-Seite

> **Begründung:** Das war alles Marketing-Mechanik. Sebastians Argument: "Wir müssen aufpassen, dass wir hier nicht so Bullshit-Bingo reinschmeißen, den jeder schreibt, sondern wirklich darauf gehen, was wir hier eigentlich bauen, produzieren und was ist der Wert von Fachwerk."

## Was im Wertversprechen explizit ist (neu im Hero-Sub)

> "Plus mich als Architekt: ich ordne deine Prozesse mit dir, du führst sie weiter — kein SaaS-Abo, sondern Plattform plus Mensch im Loop."

Sebastian als Teil der Value Proposition explizit, nicht als Bio im PoV-Block.

---

# Round 2 (verworfen — als Doku)

> Was folgt war der erste Vorschlag. Sebastian hat ihn überarbeitet. **Diese Sektion ist Historie, nicht Status.**

# Pricing-Vorschlag (Round 2) — Fachwerk Tiers

**Datum:** 2026-04-26
**Live-Stand:** Commit `e0c3533` (Story-Refactor v2)
**Live-URL:** https://fachwerk.tech/de/
**Methode:** 11 Persona-Reviews parallel + Web-Recherche zu vergleichbaren Pricings (iPaaS, Low-Code, Custom-DACH, AI-Coding-Tools)

---

# Executive Summary

Drei zentrale Pricing-Probleme aus den Reviews:

1. **Tier-Zuordnung unklar** — alle Personas fragen "bin ich Starter/Core/Platform?". "Scope entscheidet" reicht nicht. Es braucht Mengen-Trigger (Anzahl Automationen/Adapter/Tenants).
2. **Adapter-Kosten versteckt** — was ist im Preis (Shopify, SAP-RFC, DATEV) vs. Custom-Coding extra (Modbus-S7, proprietary-BI). Reviews durchgehend.
3. **Multi-Tenant-Logik fehlt** — Steuerberater (60 Mandanten), Hausverwalter (30 Objekte), D2C (6 Country-Shops) wissen nicht, wie sie skalieren.

Plus Strukturpunkte: PoV als eigener Vertrag, Bilanzierungs-Klartext, Exit-Playbook, Multi-Year-Discount, Volumen-Staffel zwischen Tiers, Vergleichs-Anker zu Marktstandards.

**Empfehlung:** Aktuelle Pricing-Ranges sind marktkonform (Custom-Software-Wartung 15-20% p.a. Faustregel trifft Starter; Core liegt zwischen Mendix-Einstieg und Workato Mid; Platform sitzt im Mulesoft-Enterprise-Korridor). Nicht die Zahlen ändern. **Die Mechanik klarer machen.**

---

# Marktanalyse

## Pricing-Tabelle Wettbewerber

| Anbieter | Tier | Pricing | Modell | Anmerkung |
|---|---|---|---|---|
| **iPaaS** | | | | |
| Workato | Enterprise | 84k–180k $/Jahr (typ.), 150–400k $ bei Volume | Tasks + Connectors, sales-led | Premium-Connectors (SAP, Oracle) extra |
| Mulesoft | Gold/Enterprise | ~1.250 $/vCore/Monat; Verträge 9,8k–258k $, oft 250–600k $/Jahr | vCore-basiert | Implementierung 2–3× Subscription |
| Boomi | Pro / Enterprise | Pro 550 $/Mo; Enterprise 20k–190k $/Jahr | Connection-basiert | Pay-as-you-go ab 99 $/Mo |
| Tray.ai | Enterprise | ab 36k $/Jahr | Tasks (Enterprise unlimited) | Sales-led ab Enterprise |
| Make.com | Free–Enterprise | 9 $/Mo (10k Credits) bis Custom | Operations/Credits | Enterprise nicht öffentlich |
| n8n Cloud | Starter–Business | 24 / 60 / 800 €/Mo | Workflow-Executions | Self-hosted (OSS) gratis |
| **Low-Code** | | | | |
| Mendix | Standard / Unlimited | 998 $/Mo pro App; 2.495 $/Mo Unlimited | Per-App + Per-User | TEI-Studie: 697k $ TCO über 3 Jahre |
| OutSystems | Enterprise | ab 36.300 $/Jahr (3 Runtimes, 100 Users) | Application Objects + Users | Höhere TCO als Mendix |
| Retool | Team / Business / Enterprise | 12 / 65 $ / Custom pro Builder + 7/18 $ End-User | Per-Seat (Builder + End-User) | Enterprise = SSO, Self-host, SLA |
| Superblocks | Enterprise | ~200 $/AI-Builder + 100 $/App | Per-Builder + Per-App | Vollständig sales-led |
| **AI-Coding** | | | | |
| Lovable | Pro / Business / Enterprise | 25 / 50 $/Mo / Custom | Credits, geteilt im Team | Kein etablierter Enterprise-Markt |
| Replit Agent | Core / Teams | 20–25 $/Mo + Usage (oft 100–300 $ effektiv) | Effort-basiert | Unvorhersehbare Kosten |
| **DACH** | | | | |
| DATEV Mittelstand | Faktura+RW | ab 54,60 €/Mo + Grundpaket | Modul + User | Wird Ende 2026 eingestellt |
| Lexware Office | Cloud | ab 33 €/Mo | Per-Seat-Subscription | Kein Mittelstand-Custom |
| DACH Custom-SW | Festpreis | 50k–200k+ € Projekt; Wartung 15–20% p.a. | Projekt + Retainer | Tagessatz 800–1.500 € |
| DACH Managed IT | Retainer | 500–5.000 €/Mo | Festpreis-Wartung | Plus 15–30 % Einsparung vs. T&M |

## Beobachtungen

- **Enterprise-iPaaS und Low-Code:** ausschließlich sales-led. Einstieg transparent (Mendix 998 $/App, Retool 12 $/Seat), Enterprise immer "Contact Sales".
- **Volume- vs. Seat-Pricing:** iPaaS dominiert mit Volume (Tasks, vCores, Connections). Low-Code mischt Per-App + Per-User. Retool reines Seat. AI-Coding Credit-basiert.
- **Implementation-Multiplikator:** bei Mulesoft, Workato, Boomi typischerweise 2–3× der Subscription-Kosten im ersten Jahr durch Implementierung. Fließt nirgends in Listenpreise.
- **Launch-Fee + monatlich:** in SaaS unüblich. In klassischer Custom-Software-Branche dagegen Standard (Projekt + Wartung 15–20 % p.a.). **Fachwerk hybridisiert** — sehr plausibel, klare Abgrenzung gegen iPaaS/Low-Code.
- **Wartung als % vom Projekt:** DACH-Standard 15–20 % p.a. Bei einem 60k-Projekt → 9–12k/Jahr Wartung = ~0,8–1k/Mo. Trifft genau die Starter-Range.

## Wo Fachwerk relativ liegt

- **Starter** (3–8k Launch + 0,5–1,5k/Mo = 9–26k/Jahr): trifft die Custom-Software-Wartungs-Faustregel präzise. Realistisch & glaubwürdig. Liegt **unter** Mendix-Einstieg, Workato Pro, Boomi Standard. Bewusste Untergrenze für Owner-Operator.
- **Core** (15–40k + 3–8k/Mo = 51–136k/Jahr): zwischen Mendix-Einstieg (~36k $) und Workato Mid-Enterprise (~84k $). Plausibler Mittelstand-Korridor.
- **Platform** (80–150k + 15–35k/Mo = 260–570k/Jahr): sitzt im Mulesoft/Workato-Enterprise-Bereich (250–600k $). Marktüblich für ernsthafte Plattform-Deals.

## Strategische Empfehlungen

1. **Tier-Logik mit Mengen-Trigger versehen** (z. B. "bis 3 Use-Cases", "bis 10 Integrationen") — sonst ist Selbstauswahl unmöglich.
2. **Wartungs-Argumentation einbauen:** "Was bei klassischer Custom-Software 15–20 % p.a. ist, ist bei uns inkludiert + Plattform" — direkter Anchor gegen Dienstleister-Vergleich.
3. **Platform-Tier "auf Anfrage" testen** — das aktuelle Range-Pricing (80–150k Launch) ist eine offene Flanke für Procurement.

---

# Cross-Cutting Findings aus den 11 Persona-Reviews

## Was alle Personas wollen

1. **Tier-Zuordnung greifbar** (Mengen-Trigger statt nur "Scope"):
   - Henning, Anna, Jonas, Sandra, Markus, Brandt, Grünfeld, Dachstein
2. **PoV-Anrechnung prominent + konkret** (welche Kosten, welcher Zeitrahmen):
   - Henning, Anna, Jonas, Sandra, Brandt
3. **Adapter-Klarheit** — was ist im Tier inkl., was kostet extra:
   - Thorsten, Brandt, Markus, Martina, Dachstein, Grünfeld
4. **Multi-Tenant/Multi-Site explizit** — keine Multiplikation der Launch-Fee:
   - Grünfeld (60 Mandanten), Dachstein (30 Objekte), Markus (6 Country-Shops)
5. **ROI-Belege pro Use-Case** — konkrete €/h gespart vs. Lizenz-Kosten:
   - Anna, Sandra, Markus, Brandt, Dachstein
6. **Volumen-Staffel zwischen Tiers** — was passiert bei 11+ Automationen:
   - Anna, Henning, Markus, Brandt
7. **Exit-Playbook konkret** — Code-Übergabe, Postgres-Dump, Übergangs-Sprint:
   - Anna, Martina, Thorsten, A5
8. **Bilanzierungs-Klartext** — Aktivum vs. Aufwand, Multi-Year-Rabatt-Logik:
   - Anna explizit
9. **Vergleichs-Anker** — DATEV-Add-ons, Klaviyo, Wodis-Lizenz, Mulesoft/Boomi:
   - Jonas (Klaviyo), Grünfeld (DATEV), Dachstein (Wodis), Markus (Mulesoft)
10. **Per-Flow oder Pay-as-you-go als Alternative** zum Pauschal-Monthly:
    - Henning, Jonas

## Tier-spezifische Findings

### Starter (Owner-Operator, 5–80 MA)
- Bergheim/Jonas: **realistisch, aber PoV-Anrechnung muss oben stehen**. "Community-Support, keine SLA" macht nervös → "Guides + Discord + E-Mail Mo–Fr" wäre ehrlicher.
- Grünfeld: **Multi-Mandanten-Frage ungeklärt** — passt 1× oder 60× ins Modell?
- Dachstein: **5 Flows nötig (Wodis + Telefon + Versicherer + WhatsApp + Mieterportal)** = nicht Starter, sondern Core. Tier-Zuordnung verwirrend.

### Core (Mittelstand 30–80 Mio, 80–250 MA)
- Sandra (NordStyle): **Pricing oben + ROI-Szenario** brauchen Anna (CFO) für Freigabe.
- Martina (IT-Leiterin): **Feature-Matrix nach Tier** (SSO/SCIM/RBAC) fehlt. Sie kann nicht Procurement starten ohne.
- Henning (CEO): würde Core für Pilot wählen, dann Platform für Programm. **Setup-Fee anrechenbar auf erste 6 Monate** wäre psychologisch stark.

### Platform (80+ Mio, On-Prem, regulierte Umgebungen)
- Brandt (Stahlberg): **SPS/Modbus-Adapter im Preis enthalten oder extra?** Hardware-Kosten? Wartungsverträge?
- Markus (Sommerfeld): **Multi-Country-Konfiguration** (6 Country-Shops) — included oder Add-on?
- Anna (CFO): **Volumen-Aufschläge** ab 11/16/21/51 Automationen sichtbar machen.
- Thorsten (SAP-Admin): **Update-Procedere**, **Vendor-Death-Plan**, **Quellcode-Escrow** — sonst kein Go.

---

# Pricing-Vorschlag (überarbeitet)

## Strukturelle Änderungen

### 1. Mengen-Trigger pro Tier sichtbar machen

| | Starter | Core | Platform |
|---|---|---|---|
| **Automationen** | bis 3 | 4–10 | 10+ |
| **Angebundene Systeme** | bis 5 (Standard) | bis 10 (Standard + bis 2 Custom) | unbegrenzt |
| **Tenants** (Mandanten/Objekte/Shops) | 1 | bis 5 | unbegrenzt |
| **Deployment** | Cloud-by-Fachwerk | Cloud-Standard (StackIT/eigener Hoster) | Cloud + On-Prem + Hybrid |
| **Bedienung** | Self-Service Werkstatt | Bootstrap durch Fachwerk + laufender Self-Service | Custom + Advisory-Slots |

### 2. Adapter-Bibliothek transparent

**Im Tier inkludiert (Top-15 Standard-Adapter):**
- E-Commerce: Shopify (REST + GraphQL), Meta Marketing API, Klaviyo, Stripe
- ERP/Finance: SAP-RFC, DATEV-Connect, proALPHA, Lexware
- Office: IMAP, Microsoft 365, Google Workspace
- Daten: Postgres, S3, BigQuery, REST/GraphQL-generic
- Immobilien: Wodis, iX-Haus

**Custom-Adapter (Aufwand-basiert, transparent gepreist):**
- **Standard-Custom** (REST/GraphQL ohne Doku, ~5 Tage): 5–10k einmalig
- **Legacy** (XML/SOAP/proprietary): 10–15k einmalig
- **Industrie/OT** (Modbus/TCP, OPC UA, S7): 15–25k einmalig — bei Platform-Tier 2 Adapter inkludiert
- **Sonderfall** (z. B. obskurer 30-Jahre-TCP-Stack): Aufwand-Schätzung im PoV, transparent

### 3. PoV als eigener Vertrag

**Discovery (Tag 1, kostenlos)**
- 60-min Call mit Sebastian Breitzke
- Wir gehen deinen teuersten Prozess durch

**PoV-Sprint (Tag 2–14, fest 12k €)**
- Architektur-Skizze + Build + Live-Test
- Ein konkreter Flow läuft live in deiner Umgebung
- Code in deinem Repo

**Decision Point (Tag 15)**
- Weiter → 12k voll anrechenbar auf Launch-Fee
- Nicht weiter → kein Folgeaufwand, du behältst Code + Doku

**Garantie:** Wenn der Flow am Tag 14 nicht produktionsreif läuft, zahlst du nichts.

### 4. Multi-Tenant-Logik (Branchen-spezifisch)

**Steuerberater / Wirtschaftsprüfer:**
- 1× Setup-Fee pro Kanzlei (nicht pro Mandant)
- Mandanten als Tenants in einer Instanz
- Betrieb skaliert mit Anzahl Automationen, nicht Anzahl Mandanten
- Beispiel Grünfeld (40 MA, 60 Mandanten): Core-Tier 1× = 18k Launch + 4k/Mo = 66k Jahr 1

**D2C / Multi-Country E-Commerce:**
- 1× Setup-Fee pro Mutterfirma
- Country-Shops als Tenants in einer Instanz, gemeinsame Logik + lokale Konfig
- Multi-Country-Konfigurator als Add-on im Platform-Tier inkl.
- Beispiel Sommerfeld (100 Mio, 6 Country): Platform-Tier = 100k Launch + 25k/Mo = 400k Jahr 1

**Hausverwaltung:**
- 1× Setup-Fee pro Verwaltung
- Objekte als Tenants
- Wodis/iX-Haus-Adapter im Core-Tier inkludiert
- Beispiel Dachstein (30 Objekte, 3.000 WE): Core-Tier = 25k Launch + 4k/Mo = 73k Jahr 1

### 5. Bilanzierung Launch-Fee (CFO-Klartext)

| Tier | Aktivum-Anteil | Aufwand-Anteil | Begründung |
|---|---|---|---|
| **Starter** | 0 % | 100 % | Self-Service, keine Asset-Bindung, Cloud-by-Fachwerk |
| **Core** | 50 % | 50 % | Software-Investition (Repo) + Bootstrap-Consulting |
| **Platform** | 70 % | 30 % | Custom-Code-Asset + Advisory-Anteil |

**Verfahrensdokumentation** auf Anfrage. Abschreibung: Software-Investition linear über 5 Jahre, Custom-Code im Platform-Tier 5–7 Jahre.

### 6. Multi-Year-Discount (Vertragsbindung)

- **1 Jahr:** Listenpreis
- **3 Jahre:** 10 % auf Monatsbetrieb (aber: jährliche Kündigung mit 6 Mo Frist möglich)
- **5 Jahre (nur Platform):** 15 % auf Monatsbetrieb + Quellcode-Escrow inkl.

### 7. Exit-Playbook

Bei Kündigung:
- Code im Repo bleibt dein Eigentum
- Postgres-Schema-Dump + Daten-Export auf S3 deiner Wahl
- 30 Tage Übergangs-Sprint (anrechenbar bei Wechsel zu zertifiziertem Betreiber)
- Quellcode-Escrow optional (Platform-Tier inkl. ab 5-Jahres-Vertrag)
- Transition-Support optional, 850 €/Tag

### 8. Vergleichs-Anker (auf Pricing-Seite kommunizieren)

> "**Custom-Software klassisch:** 50–200k Projekt + 15–20 % p.a. Wartung — Code beim Dienstleister, jeder Change ein Ticket.
> **iPaaS (Workato/Mulesoft/Boomi):** 36–600k $/Jahr — Vendor-Lock-in, kein Code, Implementierung 2–3× Subscription.
> **Low-Code (Mendix/OutSystems):** 36–200k $/Jahr Per-App + Per-User — Click-Plattform, Vendor-DSL.
> **Fachwerk:** Plattform + Custom-Code in deinem Repo, Code gehört dir, Code-Ownership wie Dienstleister, Plattform-Effizienz wie iPaaS, Geschwindigkeit wie KI."

---

## Tier-Definition (überarbeitet)

### Starter — Self-Service für Macher
- **Zielgruppe:** Owner-Operator, 5–80 MA, fokussierter Scope
- **Scope:** bis 3 Automationen, bis 5 Standard-Adapter, 1 Tenant
- **Setup:** 3–8k (PoV anrechenbar, fest 12k, also netto 0–4k Setup-Restkosten nach PoV)
- **Monatlich:** 0,5–1,5k
- **Jahres-TCO:** 9–26k (nach PoV-Anrechnung)
- **Deployment:** Cloud-by-Fachwerk auf StackIT (EU)
- **Support:** Discord-Community + E-Mail Mo–Fr (4h Response in Werkstatt-Zeiten)
- **Inkludiert:** Plattform-Zugang · Werkstatt-Dialog · Katalog · Top-15-Adapter · Audit-Trail · Doku + Onboarding-Videos
- **Bilanzierung:** 100 % laufender Aufwand
- **Upgrade:** auf Core jederzeit, Setup-Differenz proratiert

### Core — Fokussierter Scope mit Rückendeckung
- **Zielgruppe:** Mittelstand 30–80 Mio Umsatz, 80–250 MA
- **Scope:** 4–10 Automationen, bis 10 Standard-Adapter + bis 2 Custom-Adapter, bis 5 Tenants
- **Setup:** 15–40k (PoV anrechenbar, fest 12k)
- **Monatlich:** 3–8k
- **Jahres-TCO:** 51–136k
- **Deployment:** Cloud-Standard (StackIT oder dein Hoster)
- **Support:** 4h-Response (Werkstatt-Zeiten), 24h max., dedizierter Slack-Channel
- **Inkludiert:** alles aus Starter + 2 Custom-Adapter (Standard-Custom oder Legacy) + 3-5 Tage Bootstrap durch Fachwerk + Quartal-Review
- **Bilanzierung:** 50 % Aktivum (Software-Investition) + 50 % Aufwand (Bootstrap/Consulting)
- **Multi-Year:** 3 Jahre = 10 % auf Monatsbetrieb

### Platform — Custom-Scope, regulierte Umgebungen
- **Zielgruppe:** 80+ Mio Umsatz, On-Prem-Pflicht, Multi-Site, regulierte Branchen
- **Scope:** 10+ Automationen, unbegrenzte Adapter (inkl. 2 Industrie/OT-Adapter), unbegrenzte Tenants
- **Setup:** 80–150k (PoV anrechenbar, fest 12k)
- **Monatlich:** 15–35k
- **Jahres-TCO:** 260–570k
- **Deployment:** Cloud + On-Prem (Docker/K8s/Bare-Metal) + Hybrid (Werkstatt Cloud, Betrieb On-Prem)
- **Support:** 1h-Response, dedizierter Architekt + Slack + Telefon, 4-6 Advisory-Days/Jahr inkl.
- **Inkludiert:** alles aus Core + 2 Industrie/OT-Adapter (Modbus/OPC UA/SAP-RFC/etc.) + Multi-Country-Konfigurator + Custom-Compliance-Doku + Quellcode-Escrow optional
- **Bilanzierung:** 70 % Aktivum + 30 % Aufwand
- **Multi-Year:** 3 Jahre = 10 %, 5 Jahre = 15 % + Quellcode-Escrow inkl.
- **Hardware-Kosten:** dokumentiert separat (Server, Netzwerk-Isolation), nicht im Pricing

---

## Konkrete Use-Case-Pricing (6 Beispiele)

### Bergheim Living (E-Commerce Owner-Operator, 5 MA, 4 Mio €)
- **Tier:** Starter
- **Setup:** 5k Launch (PoV 12k davon 12k anrechenbar = 0 Restkosten nach PoV)
- **Monatlich:** 1k
- **Jahres-TCO:** ~17k
- **ROI-Anker:** "Spart ~14h/Woche manuelle Datenarbeit. Vergleich: Klaviyo (500 €/Mo) + Zapier (150 €/Mo) + 0,25 FTE Wartung (400 €/Mo) = ~1.050 €/Mo aber fragmentiert."

### NordStyle (E-Commerce Mittelstand, 30 Mio, ~120 MA)
- **Tier:** Core
- **Setup:** 22k Launch
- **Monatlich:** 5k
- **Jahres-TCO:** ~82k
- **ROI-Anker:** "Retouren-Quote-Steuerung verhindert ~26k €/Quartal verbranntes Werbebudget = 104k/Jahr. Payback: ~3,5 Monate."

### Sommerfeld Homegoods (D2C, 100 Mio, 6 Country-Shops)
- **Tier:** Platform
- **Setup:** 100k Launch (inkl. Multi-Country-Konfigurator + 2 Industrie-Adapter)
- **Monatlich:** 25k
- **Jahres-TCO:** ~400k
- **ROI-Anker:** "Forecasting + Lieferketten-Optimierung. Vergleich: Mulesoft Mid-Enterprise (~250k $/Jahr) + Custom-Coding (Implementierung 2-3× Sub) — bei Fachwerk transparent."

### Stahlberg Werke (Fertigung, 70 Mio, On-Prem)
- **Tier:** Platform
- **Setup:** 110k Launch (inkl. 2× SPS/Modbus-Adapter + On-Prem-Setup)
- **Monatlich:** 22k
- **Jahres-TCO:** ~374k
- **Hardware separat:** ~15-25k einmalig (Server, Netz-Isolation) — beim Kunden, nicht bei Fachwerk
- **ROI-Anker:** "Charge-Sperre verhindert ~100-200k Ausschuss-Kosten/Jahr. Plus: keine 'Schadensfall nach Auslieferung'-Fälle mehr."

### Grünfeld & Partner (Steuerberater, 40 MA, 60 Mandanten)
- **Tier:** Core (1× pro Kanzlei, alle Mandanten als Tenants)
- **Setup:** 18k Launch
- **Monatlich:** 4k
- **Jahres-TCO:** ~66k
- **ROI-Anker:** "Spart ~1 FTE in Buchhaltung. Vergleich: 1 FTE @ ~65k €/Jahr Salary + Lohnnebenkosten = 80k/Jahr."

### Dachstein Hausverwaltung (30 Objekte, 3.000 WE)
- **Tier:** Core
- **Setup:** 25k Launch (inkl. Wodis-Adapter)
- **Monatlich:** 4k
- **Jahres-TCO:** ~73k
- **ROI-Anker:** "Spart 1-1,5 FTE in Verwaltung (Multi-Channel-Eingang + Handwerker-Koordination + Nebenkosten-Abrechnung). Vergleich: Wodis-Lizenz allein ~4k €/Jahr — Fachwerk ergänzt nicht ersetzt."

---

## Pricing-Seite Kommunikations-Verbesserungen

### Was prominent rauf muss

1. **Tier-Mengen-Trigger als Tabelle** (oben in Pricing-Sektion)
2. **PoV-Box** (12k fest, anrechenbar) — direkt unter Tier-Vergleich
3. **Adapter-Liste** (Top-15 inkl., Custom-Range) — als ausklappbare Sektion
4. **3 Konkrete Beispiele** ("Wenn du wie X bist, zahlst du Y") — rechts neben Tier-Karten
5. **Bilanzierungs-Tabelle** (CFO-Frage adressiert)
6. **Vergleichs-Anker** (Custom-SW / iPaaS / Low-Code / Fachwerk)

### Was raus oder schlanker

- "häufig ab ~20 Mio Umsatz" — verwirrend neben "Scope entscheidet". Entweder das eine oder andere.
- "Kein Pricing-Theater" — wirkt defensiv. Stattdessen sofort Mengen-Trigger zeigen.

---

# Persona-Reviews (vollständig)

## Pricing-Research (Marktanalyse)

### Findings
Drei klare Marktsegmente: iPaaS (36k–600k $/Jahr, Enterprise sales-led), Low-Code (36k–200k $/Jahr, Per-App + Per-User), AI-Coding (Prosumer 20–50 $/Mo, kein etablierter Enterprise-Markt). DACH Custom-Software: 50–200k Projekt + Wartung 15–20 % p.a. Faustregel.

Fachwerk-Tiers liegen marktkonform: Starter unterbietet bewusst, Core trifft Mendix-Einstieg, Platform den iPaaS-Enterprise-Korridor.

### Pricing-Strukturen Beobachtungen
- Enterprise = sales-led ohne Public Pricing (Workato, Mulesoft, Tray Enterprise)
- Volume-Pricing dominiert iPaaS (Tasks, vCores)
- Per-Seat dominiert Low-Code/Retool
- Implementation-Multiplikator 2–3× Subscription bei klassischem iPaaS
- Wartungs-Faustregel DACH: 15–20 % p.a. → trifft genau Starter-Range

### Empfehlung für Fachwerk
- Mengen-Trigger sichtbar (sonst keine Selbstauswahl möglich)
- Wartungs-Argumentation einbauen (Anchor gegen Dienstleister-Vergleich)
- Platform "auf Anfrage" testen (Range-Pricing offene Flanke für Procurement)

---

## A1 — Henning Kruse, CEO-Archetyp

### Sieht
Hero spricht Macher-CEO direkt: „KI baut deinen Custom-Code". Problem-Sektion brutal ehrlich. 5-Säulen-Architektur sauber. „Neue Falle"-Sektion (Vibe-Coding-Zoo) trifft genau wo er nach 18 Monaten sitzt. Cases konkret (NordWare, StahlbergWerke, Grünfeld, Dachstein) — keine Vektor-DB-Demo, sondern Mittelstand.

### Stört
1. **Preis-Anhänger zu lang.** Erst 8 Absätze Erklärung, dann Tier-Karten.
2. **PoV ist klein.** Zu wenig Info unterhalb der Fold: Wie lange? Mit wem? Skalierbar?
3. **Tech-Stack-Kästen** (Elixir, Phoenix, etc.) für ihn völlig irrelevant.

### Fehlt
- **Echte Upsell-Logik:** was passiert in Monat 7?
- **Rollback / Fehlerfall:** wenn KI-Output falsch → wer haftet?
- **Go-Live-Support:** eine Woche Einsatz vor Ort?

### Verdict
**Y, aber nur wenn PoV konkret ist und keine "noch ein halbes Jahr und 100k zusätzlich"-Falle.** Die beste Reaktion ist: "Ich muss mit Sebastian reden, nicht mit dem Vertrieb."

### Top 3 Fixes
1. Pricing-Transparenz: "PoV 2 Wochen, Core ab 15k+3-8k/Mo, Platform ab 80k+15-35k/Mo, was ändert sich in Monat 13?"
2. CTA-Kasten unter Problem mit "6-Wochen-Test mit Code-Repo" + Sebastian-Telefon
3. Rollback-Zeile im Platform-Block

### Pricing-Take
**Würde Core (15k Launch + 3-8k/Mo) für Pilot wählen.** Wenn Pilot in 4 Wochen läuft → Platform für Programm.

**Was er ANDERS will:**
- **Pro-Auftrag-Fee statt Pro-Monat:** "40k für Rechnungsprüfung einmalig + 0,02 € pro Lauf"
- **Setup-Fee anrechenbar** auf erste 6 Monate (3 × 5k = 15k weg, ab Monat 7 normal)
- **Volumen-Cap oder Volumen-Rabatt:** wenn 100k Flows/Monat — wo ist die Grenze?

**Budget für 6 Monate Pilot:** 30k (15k Launch + 4 × 3,5k Monate). Wenn trägt: 80k + 20k/Mo für Programm OK.

---

## A2 — Dr. Anna Reis, CFO-Archetyp

### Sieht
Drei Pricing-Tiers. Vier konkrete Szenarien. Kernargument „KI wo sie hilft, Code wo es zählt". Kipp-Punkte sind brillanter Frame.

### Stört
- **Bilanzierung NULL.** Ist Launch-Fee Aktivierung (4-6 Jahre) oder Aufwand? BilMoG vs. HGB?
- **Kündigungsklausel NULL.** Frist? Transition-Playbook? Migrations-Kosten?
- **Volumen-Risiko VERSTECKT.** "Keine Seat-Lizenz, keine Datenvolumen-Abrechnung" — dann was? Flows? API-Calls?
- **Business-Case-Zahlen FEHLEN** (nur "~14h/Woche gespart"). Bei Platform 180-420k €/Jahr braucht es harten ROI.

### Fehlt
1. Vertragliche Eindeutigkeit (Frist, Ausstiegskosten, Code-Ownership)
2. GoBD-Konformität-Verfahrensdokumentation
3. Konkrete ROI-Bilder (FTE, Prozesskosten, Working-Capital)
4. Performance-SLA (99,5 % Verfügbarkeit dokumentiert)
5. Change-Management-Kosten (Training, Prozess-Audit)

### Verdict
**Zu Business-Theater.** Verkauft Rohbau, keine Fertigstellung. **Mein Top-Einwand:** Bei 100-Mio-Firma mit 180k €/Jahr brauche ich Business-Case-Modell konkret.

### Top 3 Fixes
1. „Bilanzierung & Verträge"-Sektion vor Pricing
2. GoBD-Zertifikat / Verfahrensdokumentation prominent
3. Business-Case-Rechner

### Pricing-Take
**Bilanzierungs-Logik:**
- **Starter:** 100 % Aufwand (kurze Bindung, Self-Service)
- **Core:** 50/50 Aktivum/Aufwand. Vertragl. Voraussetzung: 3-Jahres-Bindung
- **Platform:** 70/30. Abschreibung 5–7 Jahre linear. SLA muss explizit definiert sein.

**Volumen-Aufschläge erwarte ich:**
- Automationen 11–20: +30 %
- Automationen 21–50: +60 %
- Automationen 51+: +100 % oder Custom
- Multi-Site (Core → Platform): +40-50 %
- On-Prem (Cloud → On-Prem): +50-80 %

**Regel:** Scope kippt Tier. Nicht Umsatz, nicht Sitzanzahl. Scope = Art + Zahl der Integrations-Punkte + Regulierungs-Tiefe + Deployment-Ort.

---

## A3 — Martina Lorenz, IT-Leiterin E-Commerce

### Sieht
Hero kein SaaS-Blabla. 5-Säulen strukturiert. Branchen-Beispiele konkret. Tech-View ungewöhnlich für B2B. Elixir/OTP, Event Sourcing, Postgres, React 19 — wirkt nicht erfunden.

### Stört
1. **SSO/SCIM/RBAC = nicht sichtbar.** Erste Frage einer IT-Leiterin.
2. **Audit-Trail wird zu Tode geredet** — was praktisch? Format? Retention? DSGVO?
3. **„Kein Seat-Pricing" nicht ehrlich** — Starter hat „1-3 Automationen", das *sind* Grenzen.
4. **On-Premise nicht im Pricing.** Möglich für wen? Im Preis?
5. **User-Management im Betrieb unklar.**
6. **Datenhoheit dunkel** (Katalog Cloud, Betrieb on-Prem?)
7. **Preis-Bandbreiten zu groß** (3-8k Starter, 15-40k Core, 80-150k Platform). Worauf kommt's an?
8. **PoV-Bedingung Standard-Talk** — "10k davon auf 15k Launch-Fee anrechenbar"?
9. **Migrationspfad unsichtbar** (Zapier/iPaaS → Fachwerk: 3 Mo? 6 Mo?)

### Fehlt
- Feature-Matrix nach Tier (OIDC/SSO/SCIM/Multi-Tenant/On-Prem/HIPAA/SOC2/Custom-Adapter)
- Security-Checklist
- Exit-Story
- Konkrete Kosten für Häufiges (SAP-RFC-Adapter Setup? Shopify-Integration extra?)
- SLA/Support-Matrix

### Verdict
**Interessant, aber nicht reif für Evaluation.** Produkt für Technical Champions, nicht für IT-Leiter. Sebastian spricht Developer-Sprache, ich brauche Governance-Sprache.

### Top 3 Fixes
1. Feature-Matrix sichtbar
2. Konkrete Integrations-Liste mit Setup-Aufwand und Kosten
3. Exit-Szenario in Schrift

### Pricing-Take
- **Starter:** für 80-250 MA E-Commerce nicht realistisch (Single Dev mit viel Zeit-Profil).
- **Core (€20k Launch + €5k/Mo = €80k/Jahr):** das interessante Tier. **Setze ich voraus:**
  - OIDC/SSO gegen AD vorkonfiguriert
  - 5+ vorkonfigurierte Adapter (Shopify, SAP, DATEV, Modbus, REST-generic)
  - Fachwerk-Team macht 3-5 Tage Onboarding (im Preis)
  - Audit-Log-Export zu Syslog/S3 — nicht "Schreib einen Request"
- **Platform:** für 100+ MA oder regulierte Industrie. Für mich nicht in 3 Jahren realistisch.

**Wo Geld plötzlich kostet:**
1. Setup länger als 6 Wochen bei 5 Custom-SAP-Modulen → +€15k Custom-Setup
2. Audit ohne Zertifikat → +€5k Beratung
3. Multi-Tenant nicht für 15 Kunden gedacht (Reseller-Lücke)

---

## A4 — Thorsten Reuss, SAP-/OT-Admin Fertigung

### Sieht
On-Premise + Modbus/TCP + Air-Gap konkret im Tech-View. Hybrid-Szenario erklärt (mTLS-Tunnel, Split-Plane). Modbus + OPC UA + SAP-RFC als echte Adapter erwähnt.

### Stört
- **Audit-Trail abstrakt:** wo landen Logs On-Prem? Secrets-Rotation?
- **OTP-Process unter Supervision:** Failover? RTO/RPO?
- **SAP-RFC + Modbus im gleichen Flow:** Fehlerbehandlung? Timeout? Fallback?
- **„Air-Gap-fähig" ist Wort, nicht Plan.** Updates über externe Träger? Patches Off-Line?

### Fehlt
- **Konkrete SPS-Kommunikation:** S7 (Siemens) nicht erwähnt. Welche Hersteller?
- **Vendor-Death:** Quellcode-Escrow? Lizenz-Modell für Weitergabe?
- **Sicherheitsabstraktionen:** mTLS-Cert-Rotation? Modbus/TCP-Auth-Zusatzschicht? Vault-Integration?
- **Update-Mechanik:** Blue-Green? Canary? Mid-Run-Crash-Recovery?

### Verdict
**Respekt für technische Ehrlichkeit.** Aber spricht zu Machern, nicht Gatekeepern. Sagt „Das geht", sagt nicht „So konkret".

### Top 3 Fixes
1. Konkrete SPS/Modbus-Adapter mit Code-Beispiel
2. On-Prem Update-Strategie (Blue-Green, Canary, Health-Probes)
3. Vendor-Death-Plan im Pricing (Quellcode-Escrow)

### Pricing-Take
**80-150k Launch passt nicht zur Komplexität.** Für Cloud-Standard (Core) OK, aber dann brauche ich SPS-Integration nicht. **Für Platform (On-Prem + SPS + SAP) müssen alle SPS/Modbus-Adapter im Preis drin sein.** Wenn jeder Custom-Adapter Stundensatz extra → nicht transparent.

**Was MUSS sichtbar sein:**
1. „SPS/Modbus-Adapter inkl. oder Stundensatz?" — explizit
2. „Update-Fenster im Betrieb — SLAs?"
3. „Neue Schnittstelle (z. B. OPC UA) — Kosten?"
4. „Code/Schema/Repo gehört mir — unterschrieben?"

**Verdict zum Platform-Tier:** Ehrlich, aber Unklarheit ist Deal-Breaker.

---

## A5 — Externer IT-Dienstleister

### Sieht
Klares Messaging gegen Lock-in-Twist. Sebastian-Foundergeist „direkter Draht, keine Sales-Kette" perfekt für meinen Feind (Champion).

### Stört
- **Lock-in-Twist zurück auf mich:** Elixir/Phoenix/OTP kenne ich nicht. Wenn Kunde das braucht → braucht Elixir-Developer statt mich?
- **Preise vage:** Starter (~26k €/Jahr) kommt aus meinem Jahres-Pauschalbudget pro Kunde. Wer entscheidet einfacher Flow vs. Fachwerk?

### Fehlt
1. **Mein Support-Szenario:** wer ruft wen an? SLA für externen DL?
2. **Migration:** 5 Jahre alte DATEV-Workflows, SAP-Customizing, VBA-Makros → wie in Fachwerk? "Code gehört dir" hilft nur wenn ich Elixir kann.
3. **Trainer-Realität.** Self-Service heißt Kunde lernt Fachwerk. Was wenn pgvector falsch zeigt? Ich kann nicht debuggen.

### Verdict
**Fachwerk ersetzt mich nicht. Aber verschiebt mein Business an den Rand.** Bisher Gatekeeper, jetzt: "PoV mit Fachwerk — 2 Wochen, 3k Risk, dann sehen wir." Das ändert das Gespräch.

Zwei Szenarien:
- **Bad:** PoV gelingt → Sebastian externer Architekt → ich auf "Netzwerk-Admin + DATEV-Support" abgerutscht
- **Chance:** PoV flop wegen Legacy-SPS oder Code-Review-Aversion → ich wieder am Tisch

### Top 3 Fixes
1. **„Small Dienstleister-Paket"** — du als externer Partner führst Fachwerk ein, reviewst Flows, hältst Betrieb am Laufen — wir liefern Plattform, nicht Betreuung
2. SLA-Matrix für Support
3. Migration-Roadmap pro Stack (SAP+DATEV+Scanner-Workflow → Aufwand+Kosten)

### Pricing-Take
- **Starter (€26k/Jahr) realistisch für 5-Mio-Bude.** Aber: Pauschal-Dilemma — aus meinem Budget oder Kunden-zusätzlich?
- **Core (€36-96k/Jahr)** für 5-Mio-Bude OK wenn 3-4 teure Prozesse. Aber dann nicht mehr am Tisch.
- **Platform (180-420k)** Konzern-Liga, nicht meine Kunden.

**Meine echte Frage:** Wenn Fachwerk erfolgreich, mein Kunde happy — was tue ich dann? Bleibe ich IT-Partner oder bin ich überflüssig?

**Mein Move:** Fachwerk-Kurs machen, bevor Kunde fragt. Dann Enabler, nicht Bremser.

---

## Case 1 — Bergheim Living (Starter, E-Commerce Owner-Operator)

### Sieht
Hero-Headline trifft nicht direkt — Subtitle technisch. „PoV starten" CTA klar. Problem-Section trifft (06 „Chef sieht nichts" + 03 Low-Code-Sackgasse). NordWare-Szenario (Retouren-Quote → Meta-Budget) ist Traum. „3 Jahre Katalog oder Zoo?" trifft ins Mark.

### Stört
- **Pricing-Block zu leise.** Keine Antwort auf „wieviel kostet ein Retouren-Flow?" — 3k ausreichend oder Flow extra? „6-18k/Jahr" im Kleingedruckten.
- **„PoV anrechnen" begraben** im Kleintext.
- **„Keine SLA, Community-Support"** macht nervös bei Starter.
- **Hybrid-Deployment nicht erwähnt.**
- Sprung von „6-18k/Jahr" zu „80-150k Launch-Fee".

### Fehlt
- Konkrete Kosten-Szenarien („Retouren-Cockpit: 6 Wochen, ~5k Launch, ~800 €/Mo")
- Vergleich zu Klaviyo mit Jahres-ROI
- End-to-End-Timeline („6 Wochen PoV bis produktiv?")
- KI-Fallback-Strategie
- Wer von 5 MA bedient das?

### Verdict
**Interessant, aber zu abstrakt zum Unterschreiben.** PoV-Anrechnung ist Türöffner. **Meine Aktion:** LinkedIn zu Sebastian, nicht den Button. Zu wenig Klarheit.

### Top 3 Fixes
1. Pricing-Transparenz nach Szenarien (NordWare-Cockpit: 5-7k Launch + ~900 €/Mo, Klaviyo-Vergleich)
2. PoV-Anrechnung in Starter-CTA hochziehen
3. SLA + Governance + Fallback im Starter-Kontext

### Pricing-Take
**Trifft mich zu 60 %, sollte 90 % sein.** Pricing-Anker fehlen.

**Was anders haben wollen:**
1. **Per-Flow-Modell statt Tier-Lock:** „erste 2 Flows pauschal, jede weitere +500 €/Mo"
2. **Kap-Option für Safety:** „0,5-1,5k/Mo, max 18k/Jahr — kalkulierbar wie SaaS-Abo"
3. **PoV-Optionalität:** „Starter ohne PoV: −3k. Mit PoV: 5k voll auf Launch-Fee"

**Vergleich Klaviyo:** Klaviyo 500 + Zapier 150 + EA 400 = 1.050 €/Mo aber fragmentiert. Fachwerk 1,5k/Mo wäre teurer, aber ein Cockpit, replaysicher, eigene Logik. Bei 4 Mio Umsatz < 0,05 % des Budgets — nicht Preis-, sondern Vertrauens-Problem.

---

## Case 2 — NordStyle (Core, E-Commerce Mittelstand)

### Sieht
Plattform-Rohbau für Integrations-Chaos. 5-Säulen + Audit-Trail + Governance gegen Zoo. Solide für IT-Probleme. Use-Case spezifisch genug? Eher generisch.

### Stört
1. **Keine Business-Sprache für E-Commerce.** „Shadow-IT" und „Audit-Trail" — ich denke „Retourenquote × Warenwirtschaft × Werbebudget".
2. **PoV vs. Business Case:** mein CFO will Kalkulationstabelle: Baseline 8 % → mit Fachwerk 6,5 % → ersparte Ad-Spend 40K €/Jahr.
3. **Keine Marktplatz-Realität:** Shopify in Marquee, aber Retouren aus Shopify + Amazon + Otto?
4. **Tech-Vergleich fehlt:** warum nicht Zapier + Segment? Billiger, schneller, Standard.

### Fehlt
1. E-Commerce-Referenz-Flow konkret: Eingabe → Verarbeitung → Ausgabe → ROI
2. Integrations-Realität für Marketplace-Sync
3. Dienstleister-Differenzierung (Agenturen 2-5K €/Mo ohne Katalog-Governance)

### Verdict
**Zu generisch für mein Problem.** Das ist für IT-Leitung, nicht für mich. Mein Problem ist nicht „Integration wartbar halten", sondern „Geldverbrennung stoppen". Geschäftsfrage, keine Architektur-Frage.

### Top 3 Fixes
1. NordWare prominent in Hero-Slides (Retouren-Quote-Kurve → Budget-Pause)
2. Kipp-Punkte-Zeile „Retouren-Automation / Performance-Feedback-Loop"
3. Business-Case-Calculator (Eingabe Retourenquote → ersparte Ausgaben)

### Pricing-Take
**ROI-Story für CFO:**
- Baseline: 2.000 € Werbebudget verbrannt pro „bevor wir Anomalien erkennen"
- Mit Fachwerk: Erkennung < 4h → Pause
- Einsparung: 2.000 × 13 (Wo/Quartal) = 26.000 € pro Quartal = 104k/Jahr
- Kosten Core: 22k Launch + 5k/Mo = 82k/Jahr
- **Payback ~3,5 Monate. Dann ist Martina an Bord.**

**Was passt nicht für E-Commerce:**
1. „Single Source of Truth" — fünf konkurrierende Wahrheiten (Shop, Marketplaces, WaWi, Retouren-Portal, Fachwerk-Speicher)
2. „Deterministic + AI parallel" — bei Schwellenprüfung 100 % Genauigkeit (kein KI), Rest KI-OK. Messaging vermischt das.
3. OnPrem für E-Commerce Märchenland — alles Cloud-native. Sollte Cloud-Standard explizit empfohlen werden.

**Fazit:** Zahlen ehrlich, nicht überteuert. Problem: Mathematik-Brücke fehlt.

---

## Case 3 — Sommerfeld Homegoods (Platform, D2C ~100 Mio)

### Sieht
Spricht meine Sprache. Echte Schmerzpunkte aus Mittelstand. Konkrete Systeme (SAP, Shopify, DATEV). 5-Säulen architektonisch solide. „Katalog — sichtbar und wartbar" exakt was ich nicht habe. Pricing-Modell (Scope statt Seats) nachvollziehbar.

### Stört
1. **Supply-Chain-Spezifikation fehlt** — NordWare ist Performance-Marketing. Mein Case wäre Forecasting + 3-Bestellvorschläge (safe/risk/aggressive).
2. **SAP-RFC nur im Marquee** — Andrea (IT-Leiterin) fragt: Standard-RFC oder Custom-ABAP?
3. **Greyhound-Integration unsichtbar.**
4. **Multi-Country nur in Kipppunkten angedeutet.** 6 Länder-Shops mit Preisen/Specials/Verfügbarkeit — wie?

### Fehlt
1. Explizite D2C-Forecasting-Case
2. Betriebsmodell für SAP B1 + Shopify-Multi-Shop
3. Exit/Migration-Szenario konkret (3 IT-Leute Elixir-Code in 3 Mo weiterführen?)
4. **Pricing für Add-ons:** Multi-Country-Konfigurator? Advisory-Slot-Overages? Custom-Adapter für Greyhound + BigQuery?

### Verdict
**Fachwerk ist nicht für Standard-Workflows. Es ist für uns.** Aber für Vorstandsentscheidung brauche ich:
- Expliziten D2C-Forecasting-Case
- Konkrete SAP-B1-Integration
- Betriebsmodell für IT (wer patcht, Exit?)

### Top 3 Fixes
1. Case „Bestellmengen optimieren" mit Systemen + Flow + Voice (statt nur NordWare)
2. SAP-Integrationsdetail (RFC-Query → Postgres-View → Verfügbarkeits-Projection)
3. Betriebsmodell + Exit klar (Repo bei uns, Patches deine CI, 3-Tage-Übergabe-Sprint)

### Pricing-Take
**Mulesoft: ~10-50k €/Mo. Boomi: ~3-15k €/Mo. Fachwerk Platform: 80-150k Launch + 15-35k/Mo (180-420k Jahr 1).** An Boomi/Mulesoft-Grenzlinie, aber Argument besser („nicht Seats, nicht Datenvolumen — Scope").

**Wo ich Fragen stelle:**
1. Multi-Country-Setup im Launch enthalten oder per Land? Realistisch: 20-30k Country-Konfiguration extra.
2. Advisory-Slots & Change-Requests: monatlich? quartalsweise? Realistisch: 4-6 Days/Jahr inkl., Add-on 5k/Tag.
3. BI-System (BigQuery): „5+ angebundene Systeme" — BigQuery eine? Realistisch: BigQuery Standard (REST/GraphQL), proprietary BI = 10-15k Custom.

**Empfehlung:** Pricing-Note ergänzen um typische Zusatzkosten:
- Multi-Country-Konfigurator: 15-25k
- Custom-System-Adapter (>3 hinaus): 10-20k pro System
- Jährlich Scaling für neue Lieferanten-Integration: 10k

Macht nicht *billiger*, sondern *nachvollziehbar*.

---

## Case 4 — Stahlberg Werke (Platform, Fertigung)

### Sieht
Spricht meinen Alltag: SPS spricht nicht mit SAP, Qualität bei Endkontrolle. Use-Case „Temperaturabweichung sperrt Charge im ERP" passiert wöchentlich. Tablet-am-Band statt Papier — würde Ausschussquote brechen.

Deployment realistisch: On-Premise, Modbus/TCP, Air-Gap. Schichtleiter-Quote authentisch.

### Stört
1. **Kein Proof für „Sensor → Sperre → Kontext" in <6 Wochen.** SPS-Integration nicht click-and-play. Siemens S7-1500, Modbus/TCP über Gateways — ohne Custom-Adapter glaube ich nicht.
2. **„Air-Gap-fähig" Spruch, nicht Beleg.** Code-Updates Internet? Diagnostik?
3. **Stahlberg-UI zu wenig Tiefe.** Was wenn KI Abweichung falsch klassifiziert? Manueller Eingriff?

### Fehlt
1. Konkrete Adapter-Liste (welche Gateways tested, welche Custom)
2. Air-Gap-Testsuite („Diese Features funktionieren offline")
3. Fehlerfall-Demo (SPS-Daten korrupt → Recovery)
4. Kostensignal für Hybrid (Werkstatt+Katalog Cloud + Betrieb On-Prem)

### Verdict
**Seite für Menschen wie mich gebaut.** Spricht realen Schmerz. **Aber:** zu viel Promise, zu wenig Beleg. Glaubwürdigkeit: 7/10.

### Top 3 Fixes
1. „Stahlberg unter der Lupe" — Tech-Deep-Dive (S7 → Modbus-Gateway → Fachwerk-Adapter → SAP-RFC)
2. Air-Gap-Checkliste (Feature-Matrix offline/online, ISO27k-Bezug)
3. „Out-of-Spec trotz Flow" — Recovery-Szenario

### Pricing-Take
**180-420k €/Jahr für Platform — ehrlich, nicht Wucher.** On-Prem + SPS + Audit-Trail = Custom-Infrastruktur, kein SaaS-Standard.

**Aber:** Kostentransparenz fehlt. Ist 180k Software-Lizenz? Oder Lizenz + Server + Netzwerk-Isolation + Admin? CEO Henning fragt: „Berater-Dienstleister 2-3 Mio? Dann nehmen wir."

**Deal-Breaker nicht Höhe, sondern Unklarheit.**

**Was MUSS sichtbar:**
- Hardware-Kosten-Modell (Wer kauft Appliance?) — separat dokumentieren
- Wartungsverträge + Update-Kosten separat
- SPS-Adapter Fest oder Provision?

Dann CEO-ROI-Geschichte erzählbar: „PoV 2 Wochen, dann wisst ihr, ob 100k Ausschuss-Kosten gespart in nächstem Jahr. Payback 2 Jahre."

---

## Case 5 — Grünfeld & Partner (Starter/Core, Finanzen)

### Sieht
Rohbau statt Zoo. Freigabe-Board (3-Wege-Match) ist exakt sein Schmerz. „Auditierbare Ein-Klick-Aktionen" mit „vollem Revisionspfad" trifft. Branchen-Beispiel konkret. **Das glaubt er.**

### Stört
- **Architektur-Hürde** — Hero zu abstrakt. Er denkt nicht „KI schreibt Elixir-Module", sondern „Rechnung rein, Status raus, Freigabe zuverlässig".
- **DATEV-Betreuer im Hinterkopf** — wird gefragt. Messaging muss Self-Decide ermöglichen.
- **Compliance bleibt offen** — §203 StGB. Revisionssicherheit nicht optional. „Revisionspfad" zu vage.

### Fehlt
1. **40-MA-Einstieg klar** — passt das in Starter (1-3 Automationen) oder Core?
2. **Multi-Mandanten-Preismodell unklar** — 50-100 Mandanten. 1 Instanz für alle (shared catalog, separate tenants)? Pro Mandant = Multiplikator?

### Verdict
**Trifft Schmerzpunkt — nicht Geschäftsmodell.** Freigabe-Board überzeugend. Revisionspfad glaubhaft. Aber:
1. Nicht klar wieviel das für 50 Mandanten kostet
2. Wer baut? Sebastian persönlich?
3. DATEV-Betreuer Rauschen.

**Kaufsignal:** Wenn er *eine einzelne Mandanten-Rechnungsprüfung* live mit echten Belegen in DATEV sieht → er signiert.

### Top 3 Fixes
1. **Multi-Mandanten-Pricing explizit:** „Steuerberater & WP: ein Katalog pro Kanzlei, Mandanten als Tenants. Launch-Fee 1× (nicht pro Mandant)"
2. Grünfeld-Use-Case konkretisieren mit echtem DATEV-Layout
3. **Security & Compliance als Headline:** „Alle Runs revisionssicher archiviert, Export für Finanzbehörden vorbereitet. § 203 StGB, § 90 AStV-konform"

### Pricing-Take

**Multi-Mandanten ist der Knackpunkt:**
- **Pro Kanzlei (gut):** Launch-Fee 1×, Mandanten-Scale abgedeckt → konkurrenzfähig
- **Pro Mandant (schlecht):** Launch × 50 = 150-400k Einstieg → Game Over

**Vergleich DATEV-Add-ons:**
- DATEV Betriebssystem (~40-100k/Jahr für 40 MA) — sowieso bezahlt
- Fachwerk-Starter (18k/Jahr) ist Add-on. **Fair.**

**Hypothese:** Starter-Preis macht Sinn wenn Rechnungsfreigabe-Board 8h/Wo spart. Bei 40 MA × 150 €/h = 31k/Jahr Effekt. Starter (18k/Jahr) ROI in 4 Wochen. **Aber Fachwerk kommuniziert das nicht.**

**Empfehlung Tier-Zuordnung:**
- 1-2 Automationen mit fokussiertem Scope: Starter, ABER 1× pro Kanzlei nicht pro Mandant
- Komplett-Digitalisierung (Rechnungen + Fristen + Mandanten-Portal): Core (15-40k Launch)

---

## Case 6 — Dachstein Hausverwaltung (Starter/Core, Immobilien)

### Sieht
Dachstein-Use-Case stark gelabelt. Multi-Channel-Eingang trifft Problem. Aber Mockup-Theater statt Belege. „3 Monate Abrechnungen", „Handwerker-Termin" — *mein* Problem.

Messaging stark: „Rohbau statt Baukasten", „Katalog statt Zoo".

### Stört
- **Pricing-Verwirrung.** Starter (6-18k/Jahr) für 30 Objekte/3.000 WE? Maßstab? „1-3 Automationen" — pro Objekt oder gesamt?
- **Keine ROI-Kalkulation für Hausverwaltung.** Wodis-Lizenzen ~200-400 €/Mo. Fachwerk „oben drauf" — sagt nicht „Statt 15 Excel-Workarounds eine Lizenz + Fachwerk statt zwei Personen".
- **Case-Study fehlt ökonomische Wasserlinie** (4h/Wo manuelle Datenarbeit → 45 Min, ROI Salary-Kosten).

### Fehlt
1. Konkrete Zeitersparnisse für Hausverwaltung (Verwalterin 18h/Wo Copy-Paste → 3h/Wo)
2. Compliance-Aussagen für Immobilien (IDD Versicherungsrichtlinie, Mieterdaten-DSGVO, Auftragsverarbeitung)
3. Vergleich zu anderen Hausverwaltungs-Lösungen (Heine Schnittstelle, Mieter-Self-Service-Portale)
4. **Trial ohne PoV-Kosten** — kostenlose Demo-Umgebung mit Dachstein-Daten
5. Wodis-Integration konkret (API-Doku, 2-Tage-Connector)

### Verdict
**Kommuniziert intelligent für Architekten — für mich (Dachstein, 15 MA, keine IT) zu abstrakt.**
- ✓ Schmerz beschrieben
- ✓ Brancheneinstieg
- ✗ Keine Zahl „rechnet sich in 6 Monaten"
- ✗ Keine Compliance-Aussage
- ✗ Kein Vergleich Wodis + Fachwerk vs. Wodis + Excel vs. Konkurrenz

### Top 3 Fixes
1. Dachstein-Case mit konkretem ROI („Vera 18h/Wo → 3h/Wo. Betrag X in 7 Mo. Vera macht wieder Kundenbetreuung.")
2. Pricing-Transparenz für 30-Objekt-Verwaltung („Core 25k Launch inkl. Wodis-Adapter, 4k/Mo, ROI 6 Mo, Einsparung 1,5 FTE à 45k")
3. Immobilien-Compliance-Sektion (IDD, Mieterdaten-DSGVO+AV, Audit-Trail Handwerker-Bestätigung)

### Pricing-Take

**Starter unrealistisch.** Nicht wegen Geld (6-18k/Jahr im Rahmen), sondern weil 1-3 Automationen nicht teuersten Prozess lösen. Brauche 5 Flows:
- Wodis-Integration (echter Adapter)
- Telefonanlagen-Anbindung
- Versicherungsportal-Sync
- WhatsApp-Business
- Mieter-Portal

**→ Core, nicht Starter.**

**Core (25-40k Launch + 4-8k/Mo) realistisch wenn:**
1. PoV-Kosten (10-15k) anrechenbar
2. Adapter (Wodis, iX-Haus) vorgefertigt nicht custom
3. Erste 6 Automationen im Launch enthalten
4. „2 Wochen live" Betriebserfahrung

**Vergleich Wodis-Lizenz:**
- Wodis: ~4k/Jahr (pro Verwaltung, nicht WE-skaliert)
- Fachwerk Core: ~50k/Jahr zusätzlich
- Akzeptabel wenn:
  - 1 FTE (45k) gesparte Verwaltungszeit
  - Fehlerquoten -60 % (weniger Kulanz)
  - Mieter-Zufriedenheit hoch

**Faustregel für Hausverwaltung:**
- Small (<500 WE): Starter (6-18k) bei 1-2 engen Automationen
- Mid (500-3.000 WE): Core (36-96k/Jahr) Standard
- Large (3.000+ WE): Platform (180k+) bei Multi-Site/regulierte Umgebung

**Empfehlung:** Fachwerk sollte sagen „Du ersetzt kein Wodis, du ergänzt es. Mit 50k/Jahr hebelt das 1-2 Mitarbeiter-Jahre." Ehrlich. Überzeugend.
