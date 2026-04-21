# Fachwerk.Personas

Status: Strategieentscheidung
Stand: 2026-04-22

> Kanonisches Set fiktiver Zielgruppen-Profile. Dient als Referenz für Claim-Tests, Persona-Reviews, Verkaufsgespräche und Produktentscheidungen. Wird bei Feedback-Runden und A/B-Claim-Tests aktiv genutzt.

## Zweck

Dieses Dokument ist Teil des Fachwerk-Canon. Die Personas werden verwendet, um:

1. Marketing-Claims und Website-Texte auf Zielgruppen-Resonanz zu testen
2. Produktentscheidungen gegen konkrete Nutzerprofile zu prüfen
3. Sales-Pitches und Demos persona-spezifisch vorzubereiten
4. Feature-Prioritäten an der realen Zielgruppe zu validieren

## Struktur

Jede Persona ist mit drei Dimensionen annotiert:

1. **Tier-Einordnung** — Starter / Core / Platform
2. **Rolle im Kaufprozess** — Champion (Schmerz-Träger) / Economic Buyer (Budget-Hoheit) / Technical Buyer (IT-Freigabe)
3. **Warum wir sie haben** — was diese Persona für Fachwerk-Kommunikation und Produkt-Entscheidungen abdeckt

## Mapping

Die Personas decken die typischen Einstiegs-Branchen aus `zielgruppe.md` ab: E-Commerce, Fertigung, Großhandel, Finanzen, Immobilien. Das Gesundheitswesen wurde aus dem ICP entfernt — entsprechende Personas wurden gestrichen (siehe unten).

Acht Personas sind **Branchen-Champions** mit konkretem Schmerz. Zwei sind **Rollen-Archetypen** (CEO, CFO), die firmenübergreifend als Economic Buyer im Buyer-Stack auftauchen.

## Referenzen

1. `docs/1-produkt/zielgruppe.md` — abstraktes ICP-Profil, Buyer-Stack
2. `docs/1-produkt/strategie.md` — Tier-Definition (Starter/Core/Platform), Preismodell
3. `docs/1-produkt/use-cases.md` — konkrete Anwendungsfälle pro Branche
4. `docs/1-produkt/produkt.md` — Leitclaims

---

## E-Commerce

### 1. Sandra Keller, 38

**Rolle:** Head of E-Commerce Operations
**Firma:** NordStyle GmbH — Online-Handel Outdoor-Bekleidung, 120 Mitarbeiter, ~50 Mio € Umsatz
**IT-Setup:** Shopify + Amazon/Otto Marketplace-Anbindungen, Meta Ads, Retourenportal, Warenwirtschaft
**IT-Team:** 2 Leute (ein Entwickler, ein Admin)

**Tier-Einordnung:** Core
**Rolle im Kaufprozess:** Champion
**Warum wir sie haben:** Archetyp des operativen Schmerz-Trägers im E-Commerce-Mittelstand. Kennt die Zahl hinter jedem Problem (Retourenquote, Ad-Spend, Marketplace-Sync). Entscheidet nicht allein — braucht CFO (Economic Buyer) und IT-Leiter (Technical Buyer) als Mit-Käufer.

**Schmerzpunkte:**
- Retouren-Abgleich zwischen Shop, Marktplätzen und Warenwirtschaft ist manuell
- Marketplace-Sync bricht regelmäßig, niemand merkt es sofort
- Werbebudgets laufen weiter für Produkte mit steigender Retourenquote
- Listing-Änderungen müssen auf 3 Plattformen separat gepflegt werden

**Typischer Satz:** „Bis wir merken dass ein Produkt Probleme hat, haben wir schon 2.000 Euro Werbebudget verbrannt."

**Passt zu Beispiel:** E-Commerce Flow (Kampagnen-Steuerung) + Retouren-Cockpit (NordWare UI)

---

### 2. Priya Krishnan, 31

**Rolle:** IT-Leiterin
**Firma:** FreshBox GmbH — D2C Food-Abo, 80 Mitarbeiter, ~20 Mio € Umsatz
**IT-Setup:** 12 SaaS-Tools (Stripe, Recharge, Klaviyo, Zendesk, Notion, Google Sheets, …), Zapier als Kleber
**IT-Team:** Priya + 1 Werkstudent

**Tier-Einordnung:** Core (Grenzbereich Starter, je nach Scope)
**Rolle im Kaufprozess:** Technical Buyer (kann zweitberuflich auch Champion sein, wenn sie Zapier-Chaos konsolidieren will)
**Warum wir sie haben:** Archetyp der IT-Leiterin mit Zapier-Chaos im jungen Mittelstand. Fragt als erstes nach SSO, SCIM, RBAC, Audit-Retention, Exit-Story. Wichtig für Fachwerk, weil ihr Nein das Ende jedes Deals ist — auch wenn der Champion begeistert ist. Testet die Seite auf technische Ehrlichkeit.

**Schmerzpunkte:**
- Subscription-Management ist Flickwerk aus Zapier + Google Sheets
- Jede Abteilung hat eigene Workarounds gebaut
- Zapier-Zaps brechen bei Volumen, niemand debuggt sie
- Priya verbringt 60% ihrer Zeit mit „warum geht X nicht" statt mit Architektur

**Typischer Satz:** „Ich hab 12 Tools und keines davon weiß was das andere tut."

**Passt zu Beispiel:** E-Commerce Flow (automatische Prozesse zwischen Systemen) + Retouren-Cockpit (zentrale actionable Oberfläche)

---

## Fertigung

### 3. Jürgen Brandt, 52

**Rolle:** Produktionsleiter
**Firma:** Stahlberg Werke GmbH — Metallverarbeitung, 280 Mitarbeiter, ~70 Mio € Umsatz
**IT-Setup:** SAP ERP, SPS-Steuerungen (Siemens), lokale Sensorsysteme, Excel für QS
**IT-Team:** 3 Leute (ERP-Admin, Netzwerk, Helpdesk)

**Tier-Einordnung:** Platform (wegen On-Prem + SPS, unabhängig vom Umsatz im Core-Bereich)
**Rolle im Kaufprozess:** Champion
**Warum wir sie haben:** Archetyp des Produktionsleiters, der die SPS-ERP-Kluft täglich spürt und im Ausschuss-Monat seinen Kopf hinhält. Prüft die Seite auf Fertigungs-Glaubwürdigkeit (S7, Modbus, SAP-Anbindung, Air-Gap). Testfall für die Scope-over-Revenue-Logik — sein Firma-Umsatz wäre Core, aber sein Scope zwingt in Platform.

**Schmerzpunkte:**
- SPS-Daten kommen nicht im ERP an — zwei Welten
- Qualitätsprobleme werden erst bei der Endkontrolle entdeckt, Chargen sind dann schon weiter
- Schichtübergabe per Papierzettel, Informationsverlust
- Maschinen für 3 Mio investiert, aber keine Transparenz über Auslastung

**Typischer Satz:** „Wir haben Maschinen für 3 Millionen, aber die reden nicht miteinander."

**Passt zu Beispiel:** Fertigung Flow (Maschinenanbindung, SPS, lokal im Werk) + Schichtleiter-Dashboard (Stahlberg Werke UI)

---

### 4. Rainer Vogt, 58

**Rolle:** Leiter Einkauf & Logistik
**Firma:** Hartmann Elektro GmbH — Elektro-Großhandel, 160 Mitarbeiter, ~80 Mio € Umsatz
**IT-Setup:** Branchensoftware (ERP), E-Mail, FTP-Server für Lieferanten-Daten, Excel
**IT-Team:** 1 IT-Admin + externer Dienstleister

**Tier-Einordnung:** Core (bei mehr Lieferanten-Schnittstellen oder Regulatorik → Platform)
**Rolle im Kaufprozess:** Champion
**Warum wir sie haben:** Archetyp des älteren pragmatischen Mittelstands-Leitenden ohne eigene IT-Abteilung. Zielgruppe für Handel/Großhandel-Szenario, das auf der Website aktuell nicht explizit als Case abgebildet ist. Liest Preise zuerst, glaubt keinen Marketing-Claims, will konkretes Beispiel aus seiner Welt. Wichtiger Test-Persona dafür, ob die Seite Nicht-Tech-affine Käufer mitnimmt.

**Schmerzpunkte:**
- 3.000 Artikel-Updates pro Woche von 40 Lieferanten — CSV, Excel, PDF, EDI, alles dabei
- Preise, Verfügbarkeiten, Artikelstammdaten werden manuell übertragen
- Bester Mitarbeiter macht seit 2 Jahren nur noch Datenpflege
- Fehlerquote bei manueller Eingabe liegt bei geschätzt 3-5%

**Typischer Satz:** „Mein bester Mann macht nichts anderes mehr als Daten von A nach B zu tippen."

**Passt zu Beispiel:** Finanzen Flow (3-Wege-Match, Klärungsfälle) + Freigabe-Board (Grünfeld & Partner UI — adaptierbar auf Lieferanten-Stammdaten)

---

## Finanzen

### 5. Michael Grünfeld, 56

**Rolle:** Inhaber / Geschäftsführer
**Firma:** Grünfeld & Partner — Steuerberatungsgesellschaft, 40 Mitarbeiter, ~6 Mio € Umsatz
**IT-Setup:** DATEV, DMS (Dokumentenmanagement), E-Mail, diverse Mandantenportale
**IT-Team:** keines (DATEV-Betreuer extern)

**Tier-Einordnung:** Starter (zu klein für Core, passt aber als Macher-Einstieg)
**Rolle im Kaufprozess:** Champion + Economic Buyer (alles in einer Person — klassische Einmann-Entscheidung)
**Warum wir sie haben:** Archetyp des Macher-Inhabers in kleinen Dienstleistern. Testet die Starter-Positionierung — fühlt er sich von der Seite angesprochen oder ausgeschlossen? Gleichzeitig wichtig: Dienstleister-Mittelstand mit 20–50 MA und eigener Fachtiefe ist potenziell ein großer Starter-Markt. Berufsrechts-Compliance (Verschwiegenheit nach §203 StGB) bleibt offener Punkt.

**Schmerzpunkte:**
- Rechnungseingang per Mail → manueller Abgleich in DATEV
- Mandanten-Dokumente in 4 verschiedenen Systemen verteilt
- Fristmanagement per Excel, Risiko bei Versäumnis
- „Digitalisierung" bedeutet: noch ein weiteres Tool einführen

**Typischer Satz:** „Jedes neue Tool verspricht Vereinfachung und erzeugt eine weitere Baustelle."

**Passt zu Beispiel:** Finanzen Flow (Rechnungsabgleich) + Freigabe-Board (Grünfeld & Partner UI)

---

### 6. Nina Berger, 41

**Rolle:** Leiterin Finanzbuchhaltung
**Firma:** Norddeutsche Handelsgruppe — Import/Export, 200 Mitarbeiter, ~120 Mio € Umsatz
**IT-Setup:** SAP Business One, Excel, E-Mail, Lieferantenportale
**IT-Team:** 2 Leute (SAP-Admin + Helpdesk)

**Tier-Einordnung:** Platform (wegen Scope: 200+ Lieferanten, 25.000 Rechnungen/Jahr, mehrere Gesellschaften, GoBD-Verfahrensdokumentation)
**Rolle im Kaufprozess:** Champion
**Warum wir sie haben:** Archetyp der Fach-Leitung mit SAP B1 und Mandantenfähigkeits-Anforderung. Prüft die Seite auf fachliche Tiefe (3-Wege-Match-Realismus, Klärungsfall-Workflow, GoBD-Verfahrensdoku). Anker für „Platform als Scope, nicht Größe" — ihr Umsatz ist im Platform-Bereich, aber manche ihrer Kollegen mit ähnlichem Scope wären umsatzmäßig noch Core.

**Schmerzpunkte:**
- Eingangsrechnungen von 200+ Lieferanten, Dreifach-Abgleich per Hand
- Wiederkehrende Abweichungen die niemand systematisch trackt
- Monatsabschluss dauert 8 Tage statt 3, weil Klärungsfälle aufgestaut werden
- Jede Rückfrage an Lieferanten geht per Mail, kein Tracking

**Typischer Satz:** „Wir haben 200 Lieferanten und bei jedem dritten stimmt irgendwas nicht. Aber wir merken es erst beim Monatsabschluss."

**Passt zu Beispiel:** Finanzen Flow (automatischer Rechnungsabgleich mit Klärungsfällen) + Freigabe-Board (Grünfeld & Partner UI)

---

## Immobilien

### 7. Thomas Dachstein, 48

**Rolle:** Geschäftsführer
**Firma:** Dachstein Hausverwaltung — 15 Mitarbeiter, 2.800 Wohneinheiten, ~1 Mio € Verwaltungsentgelt
**IT-Setup:** Hausverwaltungssoftware (Domus/Wodis), E-Mail, Telefon, WhatsApp (inoffiziell)
**IT-Team:** keines

**Tier-Einordnung:** Starter (Verwaltungs-Umsatz klein, Scope fokussiert, kein Consulting-Budget)
**Rolle im Kaufprozess:** Champion + Economic Buyer (Einmann-Entscheidung)
**Warum wir sie haben:** Archetyp der kleinen, inhabergeführten Hausverwaltung. Spannungsfeld: hohe Komplexität (2.800 WE, Multi-Channel), aber niedriges Budget. Testet, ob Starter als Einstieg für Verwaltungsbetriebe tragen kann — oder ob Fachwerk hier strukturell nicht passt, weil Verwaltung-ROI schwer messbar ist.

**Schmerzpunkte:**
- Schadensmeldungen kommen per Telefon, Mail und WhatsApp — kein zentraler Eingang
- Handwerkerkoordination komplett manuell, Terminbestätigungen per Telefon
- Nebenkostenabrechnungen dauern 3 Monate, weil Daten aus 5 Quellen zusammengesucht werden
- Versicherungsfälle: Copy-Paste zwischen Mieter-Mail, Hausverwaltungssoftware und Versicherungsportal

**Typischer Satz:** „Wir verwalten 2.800 Wohnungen, aber unsere Prozesse sind für 200 gemacht."

**Passt zu Beispiel:** Immobilien Flow (Schadensmeldung → Handwerker) + Objektmanager (Dachstein Verwaltung UI)

---

### 8. Elena Martens, 36

**Rolle:** Teamleiterin Objektbetreuung
**Firma:** Nordpark Immobilien GmbH — Eigener Bestand + Fremdverwaltung, 45 Mitarbeiter, 8.000 Wohneinheiten, ~30 Mio € Umsatz
**IT-Setup:** ERP (SAP RE), Mieterportal, Handwerkerportal, DMS, Excel
**IT-Team:** 2 Leute (ERP + Portal-Admin)

**Tier-Einordnung:** Core
**Rolle im Kaufprozess:** Champion (Elena braucht Rückendeckung von GF und IT-Leiter)
**Warum wir sie haben:** Archetyp der digital-affinen Fachleitung in der Immobilienbranche mit eigenem Bestand (nicht nur Verwaltung). Prüft Fristen-Tracking, SAP RE-Integration, Onboarding-Dokumentation. Jünger und digital-affiner als Thomas — zeigt, wie die gleiche Branche unterschiedliche Tier-Fits haben kann.

**Schmerzpunkte:**
- Mieterwechsel-Prozess hat 12 Schritte in 4 verschiedenen Systemen
- Wartungsverträge werden in Excel getrackt, Fristen werden verpasst
- Versicherungsfälle erfordern Copy-Paste zwischen 3 Portalen
- Neue Mitarbeiter brauchen 3 Monate Einarbeitung, weil niemand den Gesamtprozess kennt

**Typischer Satz:** „Jeder neue Mitarbeiter braucht 3 Monate bis er weiß wo was liegt. Das sagt alles über unsere Systeme."

**Passt zu Beispiel:** Immobilien Flow (automatisierte Prozesse über Systemgrenzen) + Objektmanager (Dachstein Verwaltung UI)

---

## Rollen-Archetypen (firmenübergreifend)

Die folgenden zwei Personas sind **Rollen-Archetypen**, die in jeder Core- oder Platform-Firma als Economic Buyer im Buyer-Stack auftauchen. Sie ergänzen die Champions und decken Einwände ab, die Champions nicht selbst bearbeiten.

### 9. Henning Kruse, 54 — CEO-Archetyp

**Rolle:** CEO / Geschäftsführender Gesellschafter (zweite Generation)
**Firma:** Kruse Industries GmbH — Maschinenbau-Zulieferer, 300 Mitarbeiter, ~85 Mio € Umsatz
**Kontext:** Inhabergeführt, AI-offen, hat Sebastian in einem CEO-Netzwerk kennengelernt

**Tier-Einordnung:** Platform
**Rolle im Kaufprozess:** Economic Buyer
**Warum wir sie haben:** Archetyp des Macher-CEOs im industriellen Mittelstand, der AI-Transformation strategisch treibt. Genau der Typ, den das Hero anspricht („Dann lass uns über dein teuerstes Prozess-Problem reden"). Er fragt nicht nach Features, er fragt nach Hebel. Liest Pricing, um die Größenordnung zu kalibrieren, nicht um auszurechnen. Testet die Strategie-Erzählung der Seite.

**Schmerzpunkte auf seiner Flughöhe:**
- „Ich sehe 5 Dashboards, 15 Reports — aber die eine Regel, die verletzt wurde, kommt beim Kaffee zur Sprache."
- „Wir sind beim Lieferkettenproblem schon drei Monate hinterher, wenn ich es höre."
- „Ich will nicht noch eine Dienstleister-Beziehung, ich will eigenen Hebel im Haus."
- „Mein CTO schafft nicht mal das aktuelle Budget durch die Woche, wie soll er die Transformation treiben?"

**Typischer Satz:** „Wenn wir das in sechs Wochen testen können, mach ich das. Aber nur, wenn ich danach weiß, wo ich stehe."

**Einwände, die er hat:**
- Ist das ein Ein-Mann-Bude-Risiko?
- Was passiert in Jahr 2, Jahr 5?
- Wie begründe ich das gegenüber dem Beirat / der Familie?
- Ist der Architekt wirklich direkt erreichbar, oder werde ich durchgereicht?

**Passt zu Beispiel:** Fertigung Flow (strategisch), cross-Use-Case — bewertet das Gesamtbild

---

### 10. Dr. Anna Reis, 45 — CFO-Archetyp

**Rolle:** CFO / Leitung Finanzen & Controlling
**Firma:** beliebig (Core/Platform-Kunde, typisch 60–150 Mio € Umsatz)
**Kontext:** Kommt aus Big-Four-Prüfungs-Background, trägt gegenüber GF/CEO die Budget-Hoheit

**Tier-Einordnung:** Core oder Platform (je nach Firma)
**Rolle im Kaufprozess:** Economic Buyer (Mit-Entscheider neben CEO)
**Warum wir sie haben:** Archetyp der CFO in einer Mittelstand-Firma, die den Business Case prüft, die Bilanzierung der Launch-Fee klärt und den ROI gegen die GF verantwortet. Sie fragt nach: Amortisation, Subscription-Committment-Risiko, Exit-Story, Vertrags-Klarheit. Ihr Einwand stoppt Deals auch gegen Champion-Begeisterung.

**Schmerzpunkte auf ihrer Flughöhe:**
- „Was bilanziere ich? Launch-Fee als Investition oder als Aufwand?"
- „Was ist die Kündigungsrealität? Wer hat meinen Code, wenn wir uns trennen?"
- „Wo kippt die Subscription in Volumen-Abrechnung, die ich nicht kontrollieren kann?"
- „Wer garantiert mir, dass das in drei Jahren noch da ist?"

**Typischer Satz:** „Zeig mir den Business Case in einer Zahl und was ich kündigen kann, wenn es nicht funktioniert."

**Einwände, die sie hat:**
- Ist die Launch-Fee bilanzierungsfähig oder laufender Aufwand?
- Wie läuft die Kündigungsklausel konkret (Frist, Ausstiegs-Playbook)?
- Welcher Teil des Subscription ist volumen- vs. nutzungsabhängig?
- GoBD-Konformität bei Finanzprozessen — belegbar per Verfahrensdokumentation?
- Business Case: was sparen wir konkret in Euro und Köpfen?

**Passt zu Beispiel:** Finanzen Flow (als inhaltlicher Anker), Pricing-Sektion (primärer Fokus), Deploy-Sektion (Exit-Story)

---

## Entfernte Personas (dokumentiert)

Die folgenden Personas wurden bewusst aus dem Canon entfernt:

- **Dr. Katharina Weiß (MedVita Klinik)** — Gesundheitswesen fällt aus dem ICP (siehe `zielgruppe.md`). Klinik-spezifische Regulatorik (HL7/FHIR/DICOM, §203 StGB, B3S, KRITIS) wird in Welle 1 und 2 nicht adressiert. Die Persona wird nicht aktiv getestet; Fachwerk ist für Kliniken aktuell nicht die richtige Lösung.
- **Marc Hübner (OrthoPraxis Verbund)** — Doppelte Ausschluss-Gründe: Gesundheitswesen raus aus ICP, plus deutlich unter Starter-Kapazität (8–12 Mio Umsatz, 5 Standorte, keine eigene IT, Regulatorik TI/KV/eAU).

## Buyer-Stack-Beispiele pro Firma

Für Vertriebsvorbereitung: Wer kauft mit wem zusammen?

| Firma / Champion | Champion | Economic Buyer | Technical Buyer |
| --- | --- | --- | --- |
| NordStyle (Sandra) | Sandra Keller | Anna Reis (CFO-Archetyp) | „FreshBox-IT-Leiterin"-Typ (Priya-adjazent) |
| FreshBox (Priya) | Priya Krishnan (auch Champion) | Gründer/GF (nicht profiliert) | Priya selbst |
| Stahlberg Werke (Jürgen) | Jürgen Brandt | Henning Kruse (CEO-Archetyp) | interner SAP-Admin (nicht profiliert) |
| Hartmann Elektro (Rainer) | Rainer Vogt | Inhaber (nicht profiliert) | externer IT-Dienstleister |
| Grünfeld (Michael) | Michael Grünfeld | Michael Grünfeld (dieselbe Person) | externer DATEV-Betreuer |
| Norddeutsche Handelsgruppe (Nina) | Nina Berger | Anna Reis (CFO-Archetyp) | SAP-Admin (nicht profiliert) |
| Dachstein (Thomas) | Thomas Dachstein | Thomas Dachstein (dieselbe Person) | keiner |
| Nordpark (Elena) | Elena Martens | GF (nicht profiliert) | interner ERP-Admin (nicht profiliert) |

Muster: Je kleiner die Firma, desto mehr verschmelzen die Rollen in einer Person (Starter-Modell). Je größer, desto ausdifferenzierter der Buyer-Stack (Platform-Modell).
