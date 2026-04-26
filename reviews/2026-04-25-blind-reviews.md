# Fachwerk Landing — Blind Reviews

**Datum:** 2026-04-25
**Stand:** Live nach Deploy von Commit `3f821d9` (Plan Y + Voice + Pricing Tech-Tier-Eskalation)
**Live-URL:** https://f8d766bb.fachwerk-landing.pages.dev/de/
**Methode:** 10 Sub-Agents parallel, jeweils geblindet auf eine Persona aus `docs/4-evidence/personas.md`. Jeder Agent las HTML via WebFetch + die i18n-Source-Files. Format: erste Person, max. 400 Wörter, struktur `Sieht / Stört / Fehlt / Verdict / Top 3 Fixes`.

---

## Top-Down (Eigenes Review, Sebastian-übergreifend)

### Doppelungen / Redundanz

- **Audit-Trail** taucht 5× auf: Plattform-Pillar "Betrieb", AI-Section-Eyebrow (Tech), AI-Point #1 (Tech), OTP-Spotlight, Pricing-Bullets. Im Hero-Bullet zusätzlich. → Konsolidieren auf 2 starke Stellen (Plattform-Pillar + AI-Point), aus Hero-Bullet könnte stattdessen ein anderer Wert.
- **Vendor-Lock-in / Lock-in** in: Hero-Headline (Macher: "SaaS-Lock-in"), Problem-Cell #1 (Macher), Sackgassen Row #5, Pricing-Note. → 4× ist zu viel. Sackgassen ist die "Tabelle" — dort lassen, andere kürzen.
- **Shadow-IT / Vibe-Coding** in: Hero-Eyebrow (Macher), Hero-Sub (Macher), Problem-Title (Macher), Problem-Lede (Macher), Zoo-Lede. → Im Macher-View 4× hintereinander hammered. Hero ODER Problem reicht, nicht beide.
- **"Rohbau / Tragwerk / Statik"** in: Hero-Sub (Business), Plattform-Title (beide), Sackgassen-Lede (Business), Plattform-Detail OTP. → Metapher mehrfach. Im Plattform-Title belassen — im Hero-Sub knapper.
- **"5 Säulen / 5 Bereiche / fünf Säulen"**: Plattform-Index-Caption "// fünf Säulen, eine Instanz", Plattform-Detail "Werkstatt baut, Katalog ordnet…", Marquee-Pillars-Liste, Lede. → Redundant. Index oder Detail kann raus.

### Längen, die unnötig sind

- **Kipp-Punkte (03b)** mit 5 Zeilen × "good when / kippt when" — fühlt sich nach Sebastian's Dictum redundant zur Sackgassen-Tabelle (03). Beide adressieren "Wann Fachwerk vs Alternative?". Sackgassen + Kipp nebeneinander = Doppel-Argumentation.
- **AI-Section** hat: 1 Lede + 3 Points (jeder ~50 Wörter) + Controlled-AI-Block (Eyebrow + Title + Lede + Path). Das ist sehr lang. Controlled-AI fühlt sich redundant zum Lede an ("Code filtert, AI sieht nur erlaubten Kontext").
- **Sackgassen-Lede + Sackgassen-Tabelle**: Lede sagt schon was die Tabelle dann zeigt. Lede kürzen auf 1 Satz.
- **Plattform-Detail (OTP-Spotlight in Tech)** ist okay knapp. Business hat keinen Detail-Block (gut so).
- **Cases-Body**: viele Cases haben 2 Paragraphen. Could be 1, mit Voice + Meta + Stack daneben.

### Inkonsistenzen

- **AI vs KI**: KI in DE Business, AI in DE Tech, AI in Vendor-Namen ("EU-AI-Act"). Konsistent durchgesetzt. Aber: AI-Schritt vs KI-Schritt verwirrt beim Toggle-Switch (gleicher Container, andere Vokabel). → bewusst akzeptieren oder nochmal review.
- **Pricing-Tier-Logik**: "Scope entscheidet, nicht Umsatz" — aber "häufig ab ~20 Mio Umsatz" / "häufig ab ~80 Mio Umsatz" als Hinweis. Doppelte Botschaft.
- **CTA**: 3 verschiedene Switch-Mechanismen (Nav-Icon, Hero-Text-Link, CTA-Bottom-Switch) — viel UI für eine Funktion.

---

## A1 — Henning Kruse, 54, CEO-Archetyp

## Sieht
Klares Positioning: Mittelstand sitzt zwischen Standardsoftware und echtem Custom-Code, und Fachwerk will die Lücke sein. Das resoniert. Die fünf Säulen sind keine Features, sondern ein durchdachter **Rahmen**. Nicht „wir haben eine API", sondern „wir haben eine Statik".

Die vier Use-Cases sind konkret und nicht erfunden — sie beschreiben Probleme, die ich kenne. Retouren-Quote steuert Werbebudget, 3-Wege-Match, Temperatur-Anomalie sperrt Charge.

Pricing ist ehrlich: Launch-Fee + Monthly, keine Seat-Lizenz, Scope entscheidet. Ich als 100-Mio-Firma könnte Starter sein, oder Core oder Platform — das hängt davon ab, was ich baue. Das ist **nicht** das typische SaaS-Gelaber „jeder Seat 99 Euro".

## Stört
1. **Audit-Trail-Betonung ist zu Compliance-fokussiert.** Ich (Henning, Macher) lese „Jeder Run = Event-Log, replay-fähig" und denke erst an DSFA und GoBD. Das ist relevant, aber nicht meine Flughöhe. Was mich interessiert: *Kann ich in 6 Wochen sehen, ob das funktioniert?*
2. **„Vibe Coding ist die neue Shadow-IT"** ist wahr und provokativ, aber zu defensiv. Du positionierst dich gegen etwas, statt für etwas.
3. **Pricing-Beispiel:** „häufig ab ~20 Mio Umsatz" ist seltsam.

## Fehlt
1. **Der Proof-of-Value konkret.** Was genau bauen wir in 6 Wochen? Kostet das extra? Wer sitzt bei mir im Haus?
2. **Go-Live-Realität.** Wie lange dauert es von „Proof-of-Value" bis „läuft in Produktion"?
3. **Wer der Typ ist, der mit mir sitzt.** Bist das du? Ich will nicht in eine weitere Dienstleister-Abhängigkeit.
4. **On-Premise ist eine Zeile.** Lauft ihr Fachwerk auf dem Metall bei mir?

## Verdict
**Y. Aber nur, wenn du eines packst:** Die Frage „Beweis mir in 6 Wochen für 20k, dass dein System mein teuerstes Process-Problem löst" muss beantwortbar sein. Wenn der PoV konkret ist und du nachher nicht sagtst „jetzt brauchen wir noch ein halbes Jahr und 100k zusätzlich", dann machen wir das.

## Top 3 Fixes
1. **PoV konkretisieren:** Schreib unter „Proof-of-Value": „6 Wochen = Euer Rechnungs-Flow aus SAP/DATEV bis Freigabe-Board, mit automatischen 3-Wege-Matches. Vollständig mit Launch-Fee verrechnet."
2. **Produktions-Timeline explizit machen:** „6 Wochen PoV + 2 Wochen Hardening + 2 Wochen Rollout = produktiv nach 10 Wochen."
3. **Die Person hinter der Architektur herausstellen:** Foto + Kurztext: „6 Jahre Elixir, 3 Implementierungen in mittelständischen SAP-Shops." Ich kaufe nicht Software, ich kaufe dich.

---

## A2 — Dr. Anna Reis, 45, CFO-Archetyp

## Sieht
Strukturiert. Drei Pricing-Tiers mit klarer Range. Vier konkrete Szenarien. Kernargument „KI wo sie hilft, Code wo es zählt". Audit-Trail, Katalog statt Zoo, Git-Repo statt Vendor-Lock-in. *Not bad.*

## Stört
- **Bilanzierung NULL.** „Ein bezahlter Proof-of-Value ist auf die Launch-Fee voll anrechenbar." — sagt mir nix. Ist die Launch-Fee Aktivierung (Immaterielle Vermögenswerte, 4-6 Jahre) oder Aufwand? BilMoG vs. HGB? SaaS-Bilanzierung ist Wissenschaft; ihr schweigt.
- **Kündigungsklausel NULL.** „Code gehört dir" — schön. Aber: Kündigungsfrist? Transition-Playbook? Was kostet die Migration raus?
- **Volumen-Risiko VERSTECKT.** „keine Seat-Lizenz, keine Datenvolumen-Abrechnung". Dann was? Flows? API-Calls? Wird das irgendwann abgerechnet?
- **Business-Case-Zahlen FEHLEN.** NordWare „~14 h / Woche gespart". Grünfeld: keine. Stahlberg: keine. Bei Platform-Tiers (180–420k €/Jahr) brauche ich harten ROI.

## Fehlt
1. **Vertragliche Eindeutigkeit**: Kündigungsfrist, Ausstiegskosten, Code-Ownership im Vertrag.
2. **GoBD-Konformität**: Verfahrensdokumentation, die ein Wirtschaftsprüfer signiert.
3. **Konkrete ROI-Bilder** für 100-Mio-Firma: FTE, Prozesskosten, Working-Capital.
4. **Performance-SLA**: 99,5 % Verfügbarkeit dokumentiert.
5. **Change-Management-Kosten**: Training, Prozess-Audit?

## Verdict
**Für mich als CFO ist diese Seite zu Business-Theater.** Emotionale Szenarien, ja. Aber: Bilanzierung, Kündigungsrecht, konkrete Kostenersparnisse — das sind meine Kriterien. Verkauft mir einen vielversprechenden Rohbau, keine Fertigstellung.

## Top 3 Fixes
1. **„Bilanzierung & Verträge"-Sektion** (vor Pricing): Launch-Fee als Aktivierung oder Aufwand? Kündigungsfrist, Transition-Playbook im Klartextvortrag.
2. **GoBD-Zertifikat** oder Verfahrensdokumentation prominent.
3. **Business-Case-Rechner**: Eingabe Prozesskosten → geschätzte Einsparungen + Break-Even.

---

## A3 — Martina Lorenz, 42, IT-Leiterin E-Commerce

## Sieht
**Business-View**: Kernmessage klar — weg vom Low-Code-Zoo, hin zu Git-basiertem Katalog. Vier Use-Cases verschieden genug, dass ich glaube, es könnte auch bei mir laufen.

**Tech-View**: Elixir/OTP + Postgres + React 19. Event Sourcing. pgvector. OpenTelemetry. Echte Substrate-Ansage. Git-backed Catalog mit CI-Gates und Owner — das spricht mich direkt an.

## Stört
- **Keine Spur von SSO, SCIM, RBAC** — Erste Frage einer IT-Leiterin. „Rollen" und „Rechte" steht da, aber nicht, *wie*. LDAP? Okta? Keycloak?
- **Audit-Retention unklar** — „Audit-Trail by default" — ja, was bedeutet das konkret? 90 Tage, 1 Jahr, on-premise nur? Wer triggert Compliance-Reports?
- **Exit-Story fehlt völlig** — Was passiert nach 2 Jahren, wenn ich gehen will? Kann ich Postgres-Daten dumpen? Migration-Aufwand?
- **Deployments nicht detailliert** — Unterstützt ihr SAP RFC oder nur REST? Adapter im Repo oder Custom-Coding?
- **Keine Retention-Policy für Event-Logs** — 10 Mio Events/Jahr ohne Snapshotting = Replay-Horror.

## Fehlt
- **Secrets Management**: Vault, Sealed Secrets, oder Fachwerk-eigenes?
- **Data Residency**: StackIT (EU) — aber Backups wo?
- **DR & Backup**: RTO/RPO-Ziele?
- **Multi-Tenant-Isolation**: Wenn 3 Teams gleichzeitig PR-en?
- **Vendor-Death-Szenario**: Läuft Fachwerk ohne Support?

## Verdict
Spricht mich technisch als ehrlich an — kein SaaS-Rauch. Aber als IT-Leiterin bin ich paranoid. Die Seite verkauft an meinen CEO (Katalog, Governance), aber zu wenig an mich. Ich bin nicht dein Champion — ich bin dein Blocker.

## Top 3 Fixes
1. **Security & Compliance-Tab**: SSO/SCIM, Secrets, Audit-Retention, DSGVO, GoBD, Exit-Plan. 5 Min Lesezeit, eine Seite.
2. **Integrations-Roadmap explizit**: „Heute: SAP-RFC, DATEV-Connect, Modbus. Roadmap Q2: Shopify GraphQL. Support-Level: ★★★ = Code im Repo, Regression-Tested."
3. **PoV-Agenda konkret**: „Woche 1: Stack Review + Secrets Setup. Woche 2–3: Erste Adapters. Woche 4–6: Prod-Run."

---

## A4 — Thorsten Reuss, 48, SAP-/OT-Admin Fertigung

*Review wurde durch User-Interrupt abgebrochen. Partieller Output:*

## Sieht
Fachwerk baut sich auf **Elixir/OTP + Postgres + React 19**. Dein Repo, dein Stack. OTP-Supervisor pro Flow, Event-Sourcing in Postgres, OpenTelemetry für Traces. Solide Mittelstands-Basis.

On-Premise konkret: Docker-Compose oder K8s-Helm, direkter Zugriff auf Modbus/TCP, luftgapfähig. **Modbus/TCP und OPC UA** als echte Adapter-Module erwähnt. Hybrid mit mTLS-Tunnel, Split-Plane.

## Stört
- **Audit-Trail bleibt abstrakt.** „Modell-ID, Prompt-Hash, Temperatur, Output, Token-Counts. Persistent." Aber: Wo landen Logs im On-Prem-Fall? Wie rotiert ihr Secrets?
- **„OTP-Process unter Supervision"** klingt toll, aber: Wie sieht Failover aus? Hot Standby? Cold Backup? RTO/RPO für Fertigung?
- **SAP-RFC + Modbus im gleichen Flow** — ihr sagt geht, aber keine Fehlerbehandlung, Timeout-Strategie, Fallback-Plan.
- **„Air-Gap-fähig"** ist ein Wort, nicht ein Plan. Updates über externe Träger? Patches im Off-Line-Betrieb?

## Fehlt
- **Konkrete SPS-Kommunikation.** S7 (Siemens) nicht erwähnt. Welche Hersteller funktionieren?
- **Vendor-Death.** Quellcode-Escrow? Lizenz-Modell für Weitergabe?
- **Sicherheitsabstraktionen** fehl. mTLS-Cert-Rotation? Modbus/TCP hat keine Auth — braucht ihr zusätzliche Schicht? Vault-Integration?
- **Update-Mechanik für Produktivbetrieb.** Blue-Green? Canary? Können Flows mid-run crashen?

## Verdict
**Respekt** für die technische Ehrlichkeit: OTP, Event-Log, dein eigener Code. Aber du sprichst zu Machern, nicht zu Gatekeepern wie mir. Die Seite sagt: „Das geht." Sie sagt nicht: „So geht's konkret."

## Top 3 Fixes
1. **Konkrete SPS/Modbus-Adapter** — Code-Beispiel für Modbus/TCP-Lesezugriff mit Timeout und Fallback.
2. **On-Prem Update-Strategie** — Blue-Green, Canary pro Flow, Health-Probes für Rollback.
3. **Vendor-Death-Plan in Pricing** — Quellcode-Escrow bei Treuhänder, übergibbar an zertifizierten Betreiber.

---

## A5 — Externer IT-Dienstleister (Starter-Technical-Buyer)

*Agent abgebrochen — kein Review.*

---

## Case 1 — Bergheim Living (Starter, E-Commerce Owner-Operator)

## Sieht
Ich bin Jonas — Inhaber, 39, Marketing-Hintergrund, 5 MA, Shopify + Klaviyo-Chaos.

- Headline trifft nicht direkt: „Vibe Coding / Low-Code / Fachwerk — baut wartet trägt" ist abstrakt. Subtitle ist präzise, aber zu technisch für Business-View.
- „Proof-of-Value starten" ist klarer CTA — gut.
- Problem-Section: 06 („Der Chef sieht nichts") und 03 (Low-Code = Sackgasse) treffen mich.
- Use-Cases konkret. NordWare-Szenario (Retouren-Quote → Meta-Budget) ist mein Traum.
- „3 Jahre: Katalog oder Zoo?" trifft ins Mark.

## Stört
- **Pricing-Block ist zu leise.** Keine Antwort auf „wieviel kostet ein tatsächlicher Retouren-Flow?" — ist 3k dafür ausreichend, oder kostet der Flow extra? „6–18k pro Jahr" im Kleingedruckten.
- **„Proof-of-Value anrechnen" begraben** im Kleintext.
- **„Keine SLA, Community-Support"** macht mich nervös bei Starter.
- **Hybrid-Deployment nicht erwähnt** für mich.
- Sprung von „6–18k/Jahr" zu „80–150k Launch-Fee".

## Fehlt
- **Konkrete Kosten-Szenarien**: „Retouren-Cockpit: ~6 Wochen, Launch ca. 5k, ~800 €/Monat".
- **Vergleich zu Klaviyo** mit Jahres-ROI.
- **Wie lange bis Go-Live?** End-to-End-Timeline.
- **KI-Fallback-Strategie** wenn ein Step haarsträubend wird.
- **Wer von meinen 5 Leuten bedient das?**

## Verdict
**Interessant, aber zu abstrakt zum Unterschreiben.** PoV-Anrechnung ist das Einzige, das mir Türe öffnet — muss oben stehen. **Meine nächste Aktion**: LinkedIn zu Sebastian, nicht den Button oben. Zu wenig Klarheit, um „PoV starten" zu klicken.

## Top 3 Fixes
1. **Pricing-Transparenz nach Szenarien**: „NordWare-Retouren-Cockpit: Launch 5–7k, Monat ~900 €, Vergleich Klaviyo spart 500 €/Monat".
2. **PoV-Anrechnung in den Starter-CTA hochziehen** — neben „Beispiele ansehen".
3. **SLA + Governance + Fallback** im Starter-Kontext: „Guides, Discord, E-Mail-Support Mo–Fr. Rollback per Git-Commit. Classic-Rule-Fallback ist 1 Checkbox."

---

## Case 2 — NordStyle (Core, E-Commerce Mittelstand)

## Sieht
Ich bin Sandra Keller, Head of E-Commerce Operations bei NordStyle. Mein Problem: Werbebudgets laufen weiter für Produkte mit steigender Retourenquote — 2k EUR Ad-Spend verbrannt bevor ich's merke.

Plattform-Rohbau für Integrations-Chaos. Fünf Säulen, Audit-Trail, Governance gegen den „Zoo aus 50 halbtoten Apps". Solide für IT-Probleme. Aber für mich? Die Seite spricht über Prozess-Automatisierung, nicht über meinen Use-Case spezifisch genug.

## Stört
1. **Keine Business-Sprache für E-Commerce**: Seite redet „Shadow-IT" und „Audit-Trail". Ich denke in „Retourenquote × Warenwirtschaft × Werbebudget-Pause".
2. **PoV vs. Business Case**: Mein CFO will Kalkulationstabelle: Baseline 8% → mit Fachwerk 6.5% → ersparte Ad-Spend 40K€/Jahr.
3. **Keine Marktplatz-Realität**: Shopify in Marquee, aber wie verarbeitet ihr Retouren-Rohdaten aus Shopify + Amazon + Otto?
4. **Tech-Vergleich fehlt**: Warum nicht Zapier + Segment? Billiger, schneller, Standard. Argument „zentraler Katalog" muss konkreter sein.

## Fehlt
1. **E-Commerce-Referenz-Flow konkret**: Eingabe → Verarbeitung → Ausgabe → ROI-Szenario.
2. **Integrations-Realität für Marketplace-Sync**: Wie wird Sync-Fehler erkannt, wer alertet, wer behält Historie?
3. **Dienstleister-Differenzierung**: Agenturen kosten 2–5K€/Monat, aber ohne Katalog-Governance. Fachwerk: „6 Wochen statt 6 Monate, Quellcode-Kontrolle".

## Verdict
**Zu generisch für mein Problem.** Das ist für IT-Leitung, nicht für mich. Mein Problem ist nicht „wie halte ich Integration wartbar", sondern „wie stoppe ich Geldverbrennung". Geschäftsfrage, keine Architektur-Frage.

## Top 3 Fixes
1. **NordWare-Beispiel prominent in Hero-Slides** (Retouren-Quote-Kurve → Budget-Pause).
2. **Kipp-Punkte**: Zeile „Retouren-Automation / Performance-Feedback-Loop" mit Wechsel-Schwellwert.
3. **Business-Case-Calculator**: Eingabe Baseline-Retourenquote → Output ersparte Ausgaben + Payback.

---

## Case 3 — Sommerfeld Homegoods (Platform, D2C ~100 Mio €)

## Sieht
Ich bin Markus Thalheim, Head of Supply Chain & Planning. Fünf Säulen klingen nach Architektur, nicht Baukasten-Bingo. Kontrolled-KI-Story löst mein Hauptproblem (kein Free-Agent-Chaos). Katalog-Gedanke hilft.

## Stört
- **Pricing-Tier „Platform" vage**: 80–150k Einstieg, 15–35k/Monat. Spanne 1.260–2.070k im Jahr 1. Bin ich Starter, Core oder Platform mit 4 integrierten Flows?
- **Keine Mention von On-Prem-Details**. SAP B1 Integration? Wer trägt Betrieb? Exit?
- **Use-Cases generic**: Eingangsrechnung-Beispiel könnte jedes ERP. Macht mir Angst: kann Fachwerk D2C-Forecasting wirklich, oder ist das zu spitz?
- **CEO-Features unscharf**: Mein Chef will „3 Bestellvorschläge am Morgen, 3 Klicks". Wie sieht Chief-Decision-UI aus?

## Fehlt
- **SAP B1-Tiefe**: Standard-RFC oder Custom-ABAP?
- **Multi-Shop-Konsistenz**: Shopify Plus + 6 Country-Shops + Localised Pricing.
- **Vendor Death Plan**: Insolvenz-Szenario.
- **Timeline**: 6 Wochen bis produktiv für Forecasting + Multi-Shop?
- **Advisory-Slots**: Sparring-Partner für Supply-Chain-Regeln?

## Verdict
**Vielversprechend, aber nicht dekidierbar.** Architektur passt. Aber verkauft Rohbau-Philosophie, nicht Sommerfeld-Lösungen. Klingt nach **Beratungsverkauf** — erst Design-Phase, dann Roadmap. Für 80k+ Einstieg brauche ich 3 D2C-Case-Studies mit messbarem ROI.

## Top 3 Fixes
1. **Platform-Tier konkretisieren**: Multi-Site-Forecasting als echte Case-Study mit Kosten, Timeline, Risiken.
2. **Advisory & Exit transparent machen**: Wer trägt Patch-Betrieb? Können wir selbst übernehmen?
3. **CEO-Feature-Prototyp**: Chief-Decision-UI als Screencast, nicht als Narrative.

---

## Case 4 — Stahlberg Werke (Platform, Fertigung)

## Sieht
Ich bin Jürgen Brandt, Produktionsleiter. SPS spricht nicht mit SAP, Qualitätsprobleme landen erst bei der Endkontrolle. Use-Case „Temperaturabweichung sperrt Charge im ERP" ist nicht erfunden — passiert wöchentlich.

Tablet am Band statt Papier-Schichtzettel, KI erklärt Abweichung im Kontext („seit KW 12 bei Werkzeugwechsel") — würde Ausschussquote brechen.

Deployment: „On-Premise, Modbus/TCP, Air-Gap" — nicht Marketing-Fluff. Schichtleiter-Quote ist authentisch.

## Stört
- **Kein Proof für „Sensor → Sperre → Kontext" in <6 Wochen.** SPS-Integration ist nicht click-and-play. Wir haben Siemens S7-1500, Modbus/TCP über lokale Gateways — wenn das ohne Custom-Adapter läuft, glaube ich noch nicht dran.
- **„Air-Gap-fähig" ist Spruch, nicht Beleg.** Brauche ich für Code-Updates Internet? Diagnostik? Log-Export?
- **Zu wenig Tiefe auf Stahlberg-UI.** Was wenn KI Abweichung falsch categorisiert? Audit-Trail? Manueller Eingriff? Screenshot zu clean.

## Fehlt
1. **Konkrete Adapter-Liste**: Modbus/TCP · OPC UA · SAP-RFC — welche Gateways tested? Beckhoff-Coupler zu S7?
2. **Air-Gap-Testsuite** als White-Paper: „Diese Features funktionieren offline".
3. **Fehlerfall-Demo**: Was wenn SPS-Daten korrupt? Recovery?
4. **Kostensignal für Hybrid**: Werkstatt + Katalog Cloud + Betrieb on-prem — Preis fehlt.

## Verdict
**Die Seite ist für Menschen wie mich gebaut.** Spricht realen Schmerz an. **Aber: zu viel Promise, zu wenig Beleg.** Air-Gap und Modbus/TCP sind Breaker. Glaubwürdigkeit: 7/10.

## Top 3 Fixes
1. **„Stahlberg unter der Lupe" — Tech-Deep-Dive**: Architektur-Skizze S7 → Modbus-Gateway → Fachwerk-Adapter → SAP-RFC, „Diese Calls brauchen Internet, diese nicht".
2. **Air-Gap-Checkliste**: Feature-Matrix offline/online, ISO27k-Bezug.
3. **„Out-of-Spec trotz Flow" — Recovery-Szenario**: Sensor-Rauschen, Schichtleiter setzt Flow zurück, Audit-Log.

---

## Case 5 — Grünfeld & Partner (Starter, Finanzen)

## Sieht
Ich bin Michael Grünfeld — 56, inhabergeführt, 40 Mitarbeiter, DATEV-Stack, alles revisionssicher.

**Grünfeld-Use-Case ist da** — genau mein Szenario: 3-Wege-Match, GoBD, Freigabe-Board. Mockups konkret: Betrag, Match-Status, Abweichung in EUR, drei klare Aktionen. Kein generisches Demo-Theater.

Business-View spricht meine Sprache: „GoBD-konforme Ein-Klick-Aktionen" · „jede Aktion auditierbar mit vollem Revisionspfad". Deployment-Optionen sind ernst (On-Premise, EU-souveräne Cloud, Hybrid).

## Stört
- **GoBD-Claim zu leicht**: „auditierbar gegen GoBD ohne dass du dafür extra etwas tun musst" — gefährlich. GoBD braucht **Nachvollziehbarkeit durch die Geschäftsvorfälle**, nicht nur technische Logs. Wenn KI eine Rechnung mit +0,4 % Abweichung freigab: *Wer haftet?*
- **DATEV-Anbindung abstrakt**: native DATEV-Connect-API oder HTML-Scraping? Welche Module (Bestellwesen? Eingangsrechnung? Fibu?)
- **Freigabe-Board zu optimistisch**: In der Praxis hat keine Rechnung „nur" eine Abweichung. Es sind 3 Dinge gleichzeitig.
- **Keine Rede von Lieferanten-Schmerzen**: Mein Problem ist nicht eine Rechnung, sondern 15 Lieferanten mit verschiedenen Eingangskanälen.

## Fehlt
- **Fristmanagement & Rückgriffsrecht**: Zahlungs-bis, Mängelrüge-bis, Reklamation-Verjährung. Persona sagt „Excel" — Fachwerk könnte helfen, sagt aber nichts.
- **Berufsgeheimnis (§203 StGB)**: Wenn KI Rechnungstext liest — wo landen Prompts? Anthropic? OpenAI? StackIT-Cloud reicht nicht aus.
- **Mandanten-Konsolidierung**: 60 parallele Flows mit 60 Freigabe-Regeln?

## Verdict
Spricht **echte Finanzbuchhaltungs-Schmerzen** an, nicht generisches KI-Spielzeug. Aber für meinen Ernst reicht das nicht — GoBD braucht eigene Sektion, DATEV-Integration muss klarer, Berufsgeheimnis-Sektion, Fristmanagement. **Interessant für Gespräch, aber nicht solide genug für Prüfer.**

## Top 3 Fixes
1. **GoBD-Deep-Dive**: Eigen-Sektion „Compliance & Audit" mit Log-Struktur, Replay-Beispiel, Modell-Tracking, FAQ zu Haftung.
2. **DATEV-Klarheit**: Statt „DATEV-Connect" — „DATEV-Connect-API mit Echtzeit-Sync" oder „XML-Import async".
3. **Fristmanagement als Story**: „Rechnungsfrist überschritten = automatisch eskaliert mit Begründung."

---

## Case 6 — Dachstein Hausverwaltung (Starter, Immobilien)

## Sieht
Ich bin CEO Dachstein, ~2.800 WE, Multi-Channel-Chaos, Wodis-System. „Katalog statt Zoo" — buchstäblich mein Problem. Five Pillars hört sich nach Systematik an, nicht weiterer Klick-Oberfläche. Audit-Trail und Event-Sourcing default ist relevant — Versicherungsfälle, Nebenkosten, Handwerker müssen revisionssicher sein.

„KI + Code koppelbar" ist exakt meine Hoffnung: keine *pure* halluzinierende KI-Agenten, aber auch nicht starre Mechanik.

## Stört
- **Wo bleibt die Wodis-Konkretisierung?** Marquee nennt Wodis, aber kein Use-Case sagt: „Das ist, wie Dachstein Schadensmeldungen einzieht, Handwerker koordiniert, Nebenkosten zusammenbaut." Dachstein ist offenbar Primer Use-Case — warum keine richtige Case Study?
- **Pricing diffus**: 15 Leute, 1M Verwaltungsentgelt — Starter oder Core? Niemand kann das vorab sagen. Brauche Scope-Fragebogen.
- Wirkt wie **„geht in die Werkstatt"-Plattform**, nicht wie **„löst mein konkretes Immobilien-Problem"-Lösung**.

## Fehlt
1. **Immobilien-Flow konkret**: Schadensmeldung (Mail/Tel/WhatsApp) → Ticket → Handwerker → Termin → Abschluss → Versicherung + Nebenkosten → Abrechnung.
2. **Wodis-/iX-Haus-Integrations-Vertrauen**: REST? DB-Zugriff? Custom-Middleware?
3. **Onboarding ohne IT-Team**: Self-Service-tauglich heißt was? Muss ich Code schreiben?
4. **Schnellgewinne in Monat 1**: nur „mehr Übersicht" oder echte Prozessautomation?

## Verdict
**Botschaft stimmt, Anwendung nicht.** Ihr positioniert auf Technologie + Philosophie, nicht auf Problemlösung. Als Mittelständler sehe ich „maßgeschneidert" + „Rohbau" und denke „teuer, lange, Leute die ich nicht habe". Das Gegenteil von dem, was ihr meint.

## Top 3 Fixes
1. **Dachstein-Use-Case als Live-Flow-Video**: 90 Sekunden, Schadensmeldung → Ticket → Handwerker → Bestätigung → Abrechnung.
2. **Wodis-Integration konkret**: „Fachwerk holt Objektdaten, Mietlisten, Kostenträger aus Wodis, spiegelt Schadensmeldungen zurück, bindet Handwerker-Daten." Oder ehrlich: noch nicht gebaut.
3. **PoV-Path klären**: 30-min Discovery → Flow in 2 Wochen → Live-Test → dann Core-Scope. Mit Timeline + Preis-Schwelle.

---

# Zusammenfassung der Personas — Cross-Cutting Findings

## Was für ALLE Personas durchschlägt
1. **Proof-of-Value muss konkretisiert werden.** Henning, Anna, Jonas, Sandra, Markus, Brandt — alle wollen wissen: Was genau in 6 Wochen, was kostet das, wie kommt's zu Produktion?
2. **Business-Case-Zahlen fehlen.** Anna explizit, Sandra implizit, Markus explizit. „~14h/Woche" reicht nicht für 80–420k €/Jahr.
3. **Vendor-Death / Exit / Lock-in-Garantie** ist bei allen Technical Buyers (Martina, Thorsten, A5, Markus) ungeklärt. „Code gehört dir" ist Spruch — Mechanik fehlt.
4. **Use-Cases bleiben Demo-Theater** (Sandra, Brandt, Dachstein). Konkrete Branchen-Tiefe fehlt: Multi-Channel-Sync, SPS-Adapter-Liste, Wodis-API-Reality.
5. **Pricing-Tier-Zuordnung unklar.** Henning, Jonas, Markus, Dachstein — alle fragen: bin ich Starter/Core/Platform? „Scope entscheidet" ohne Scope-Estimator hilft nicht.

## Was nur Tech-Buyers stört
- SSO/SCIM/RBAC fehlt komplett (Martina, A5)
- Audit-Retention-Policy abstrakt (Martina, Thorsten)
- DR/Backup/RTO-RPO null (Martina, Thorsten, Brandt)
- SAP-RFC, Modbus, OPC UA Tiefe fehlt (Thorsten, Markus, Brandt)

## Was nur Business-Buyers stört
- GoBD ist Wort, nicht Konzept (Anna, Grünfeld)
- Fristen, Bilanzierung, Kündigungsklausel fehlen (Anna, Grünfeld)
- Storytelling ohne FTE/ROI-Zahlen (Anna, Sandra, Markus)
- „Wer bist du als Architekt?"-Frage (Henning, Jonas, Dachstein)

## Top 5 Cross-Persona-Fixes (ich nach Priorität)
1. **PoV-Sektion konkret machen** — was, wie lange, was kostet's, wer macht es. Vor oder neben Pricing.
2. **„Wer bin ich?"-Sektion** — Sebastian als Architekt, Foto, Track-Record, direkter Zugang.
3. **Vendor-Death / Exit-Plan im Pricing** — was passiert wenn Fachwerk weg ist, Code-Escrow, Übergabe-Mechanik.
4. **Business-Case-Bausteine** — pro Use-Case 1 Zahl: FTE-Äquivalent, Euro-Sparen, ROI-Zeitfenster.
5. **Tech-Tabelle SSO/Audit/Backup** — Martina-Frage, Thorsten-Frage, A5-Frage. Eine Sektion = alle Tech-Buyers happy.

---

# Eigene Top-Down-Findings (unabhängig von Personas)

## Doppelungen, die kürzbar sind
- Audit-Trail in 5 Stellen → 2 (Pillar Betrieb + AI-Point)
- Vendor-Lock-in in 4 Stellen → 1 (Sackgassen-Tabelle)
- Shadow-IT/Vibe-Coding in 4 Stellen Macher-View → 1 (Hero ODER Problem)
- Tragwerk-Metapher in 3-4 Stellen → 1 (Plattform-Title)
- „5 Säulen"-Refrain in Index + Lede + Marquee → 1

## Längen, die unnötig sind
- Sackgassen + Kipp = doppelte „Wann Fachwerk vs Alternative?"-Argumentation. Eines reicht.
- AI-Section: 1 Lede + 3 Points + Controlled-AI-Block = zu viele Schichten. Controlled-AI ist redundant.
- Cases-Bodies: meist 2 Paragraphen mit Wiederholung. 1 reicht.

## Inkonsistenzen
- AI vs KI auch im Tech-View streng durchsetzen (oder bewusst akzeptieren)
- Pricing: „Scope entscheidet" + „häufig ab X Mio Umsatz" sind doppelte Botschaften
- 3 Switch-Mechanismen für eine Funktion — Nav-Icon ODER Hero-Link ODER CTA-Switch reicht

---

# Empfehlung: Nächste Iteration

**Wenn nur 3 Sachen geändert werden sollen, dann:**

1. **PoV-Sektion** mit konkretem Inhalt (was, wann, was kostet's) — adressiert Henning, Jonas, Sandra, Markus, Brandt, Dachstein.
2. **Sackgassen + Kipp zusammenfassen** zu einer Tabelle, AI-Section um Controlled-AI kürzen — adressiert Längen-Findings.
3. **Tech-Sektion „Security & Operations"** auf der Tech-View — adressiert Martina, Thorsten, A5.

**Längere Roadmap:**

- Dachstein- und Stahlberg-Use-Cases mit echtem Tiefen-Detail (Wodis-API, Modbus-Adapter)
- Business-Case-Calculator (Anna, Sandra, Markus)
- Sebastian-als-Person-Sektion (Henning, Jonas)
- Bilanzierung & Kündigungs-Klartext (Anna)
- GoBD-Deep-Dive (Grünfeld, Anna)
