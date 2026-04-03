# Fachwerk — Review-Personas

10 fiktive Zielgruppen-Profile, je 2 pro Branche. Mapping auf die 5 Branchen-Beispiele der Website (beispiele.html).

---

## E-Commerce

### 1. Sandra Keller, 38

**Rolle:** Head of E-Commerce Operations
**Firma:** NordStyle GmbH — Online-Handel Outdoor-Bekleidung, 120 Mitarbeiter
**IT-Setup:** Shopify + Amazon/Otto Marketplace-Anbindungen, Meta Ads, Retourenportal, Warenwirtschaft
**IT-Team:** 2 Leute (ein Entwickler, ein Admin)

**Schmerzpunkte:**
- Retouren-Abgleich zwischen Shop, Marktplätzen und Warenwirtschaft ist manuell
- Marketplace-Sync bricht regelmäßig, niemand merkt es sofort
- Werbebudgets laufen weiter für Produkte mit steigender Retourenquote
- Listing-Änderungen müssen auf 3 Plattformen separat gepflegt werden

**Typischer Satz:** "Bis wir merken dass ein Produkt Probleme hat, haben wir schon 2.000 Euro Werbebudget verbrannt."

**Passt zu Beispiel:** E-Commerce Flow (Kampagnen-Steuerung) + Retouren-Cockpit (NordWare UI)

---

### 2. Priya Krishnan, 31

**Rolle:** IT-Leiterin
**Firma:** FreshBox GmbH — D2C Food-Abo, 80 Mitarbeiter
**IT-Setup:** 12 SaaS-Tools (Stripe, Recharge, Klaviyo, Zendesk, Notion, Google Sheets, ...), Zapier als Kleber
**IT-Team:** Priya + 1 Werkstudent

**Schmerzpunkte:**
- Subscription-Management ist Flickwerk aus Zapier + Google Sheets
- Jede Abteilung hat eigene Workarounds gebaut
- Zapier-Zaps brechen bei Volumen, niemand debuggt sie
- Priya verbringt 60% ihrer Zeit mit "warum geht X nicht" statt mit Architektur

**Typischer Satz:** "Ich hab 12 Tools und keines davon weiß was das andere tut."

**Passt zu Beispiel:** E-Commerce Flow (automatische Prozesse zwischen Systemen) + Retouren-Cockpit (zentrale actionable Oberfläche)

---

## Fertigung

### 3. Jürgen Brandt, 52

**Rolle:** Produktionsleiter
**Firma:** Stahlberg Werke GmbH — Metallverarbeitung, 280 Mitarbeiter
**IT-Setup:** SAP ERP, SPS-Steuerungen (Siemens), lokale Sensorsysteme, Excel für QS
**IT-Team:** 3 Leute (ERP-Admin, Netzwerk, Helpdesk)

**Schmerzpunkte:**
- SPS-Daten kommen nicht im ERP an — zwei Welten
- Qualitätsprobleme werden erst bei der Endkontrolle entdeckt, Chargen sind dann schon weiter
- Schichtübergabe per Papierzettel, Informationsverlust
- Maschinen für 3 Mio investiert, aber keine Transparenz über Auslastung

**Typischer Satz:** "Wir haben Maschinen für 3 Millionen, aber die reden nicht miteinander."

**Passt zu Beispiel:** Fertigung Flow (Maschinenanbindung, SPS, lokal im Werk) + Schichtleiter-Dashboard (Stahlberg Werke UI)

---

### 4. Rainer Vogt, 58

**Rolle:** Leiter Einkauf & Logistik
**Firma:** Hartmann Elektro GmbH — Elektro-Großhandel, 160 Mitarbeiter
**IT-Setup:** Branchensoftware (ERP), E-Mail, FTP-Server für Lieferanten-Daten, Excel
**IT-Team:** 1 IT-Admin + externer Dienstleister

**Schmerzpunkte:**
- 3.000 Artikel-Updates pro Woche von 40 Lieferanten — CSV, Excel, PDF, EDI, alles dabei
- Preise, Verfügbarkeiten, Artikelstammdaten werden manuell übertragen
- Bester Mitarbeiter macht seit 2 Jahren nur noch Datenpflege
- Fehlerquote bei manueller Eingabe liegt bei geschätzt 3-5%

**Typischer Satz:** "Mein bester Mann macht nichts anderes mehr als Daten von A nach B zu tippen."

**Passt zu Beispiel:** Fertigung Flow (Datenintegration zwischen Systemen) + Schichtleiter-Dashboard (actionable Übersicht über Status)

---

## Gesundheit

### 5. Dr. Katharina Weiß, 44

**Rolle:** Klinikmanagerin
**Firma:** MedVita Klinik — Regionalkrankenhaus, 450 Mitarbeiter
**IT-Setup:** KIS (Krankenhausinformationssystem), Laborinformationssystem, PACS, Dienstplanungssoftware
**IT-Team:** 5 Leute (stark ausgelastet mit Wartung)

**Schmerzpunkte:**
- Laborbefunde landen im digitalen Postfach, nicht beim zuständigen Arzt
- Kritische Werte werden manchmal erst Stunden später gesehen
- Stationsschwester sucht 20 Minuten pro Patient in 3 verschiedenen Systemen
- Compliance-Druck: Datenschutz, Auditierbarkeit, Dokumentationspflichten

**Typischer Satz:** "Ein kritischer Befund darf nicht im Postfach warten. Aber genau das passiert."

**Passt zu Beispiel:** Gesundheit Flow (Befund-Routing) + Stations-Übersicht (MedVita Klinik UI)

---

### 6. Marc Hübner, 39

**Rolle:** Praxismanager
**Firma:** OrthoPraxis Verbund — 5 Standorte, 60 Mitarbeiter
**IT-Setup:** Praxisverwaltungssoftware (pro Standort unterschiedlich), E-Mail, Fax, Papier
**IT-Team:** keines (externer IT-Dienstleister für Hardware)

**Schmerzpunkte:**
- Befunde zwischen Standorten per Fax — ja, 2026, per Fax
- Terminplanung in 3 verschiedenen Systemen, keine standortübergreifende Sicht
- Abrechnungsdaten manuell zusammenführen für die KV-Abrechnung
- Jeder Standort ist eine IT-Insel

**Typischer Satz:** "Wir sind 5 Praxen, aber IT-mäßig 5 verschiedene Unternehmen."

**Passt zu Beispiel:** Gesundheit Flow (Datenrouting zwischen Systemen) + Stations-Übersicht (zentrale Übersicht mit Aktionen)

---

## Finanzen

### 7. Michael Grünfeld, 56

**Rolle:** Inhaber / Geschäftsführer
**Firma:** Grünfeld & Partner — Steuerberatungsgesellschaft, 40 Mitarbeiter
**IT-Setup:** DATEV, DMS (Dokumentenmanagement), E-Mail, diverse Mandantenportale
**IT-Team:** keines (DATEV-Betreuer extern)

**Schmerzpunkte:**
- Rechnungseingang per Mail → manueller Abgleich in DATEV
- Mandanten-Dokumente in 4 verschiedenen Systemen verteilt
- Fristmanagement per Excel, Risiko bei Versäumnis
- "Digitalisierung" bedeutet: noch ein weiteres Tool einführen

**Typischer Satz:** "Jedes neue Tool verspricht Vereinfachung und erzeugt eine weitere Baustelle."

**Passt zu Beispiel:** Finanzen Flow (Rechnungsabgleich) + Freigabe-Board (Grünfeld & Partner UI)

---

### 8. Nina Berger, 41

**Rolle:** Leiterin Finanzbuchhaltung
**Firma:** Norddeutsche Handelsgruppe — Import/Export, 200 Mitarbeiter
**IT-Setup:** SAP Business One, Excel, E-Mail, Lieferantenportale
**IT-Team:** 2 Leute (SAP-Admin + Helpdesk)

**Schmerzpunkte:**
- Eingangsrechnungen von 200+ Lieferanten, Dreifach-Abgleich (Bestellung/Lieferschein/Rechnung) per Hand
- Wiederkehrende Abweichungen die niemand systematisch trackt
- Monatsabschluss dauert 8 Tage statt 3, weil Klärungsfälle aufgestaut werden
- Jede Rückfrage an Lieferanten geht per Mail, kein Tracking

**Typischer Satz:** "Wir haben 200 Lieferanten und bei jedem dritten stimmt irgendwas nicht. Aber wir merken es erst beim Monatsabschluss."

**Passt zu Beispiel:** Finanzen Flow (automatischer Rechnungsabgleich mit Klärungsfällen) + Freigabe-Board (Grünfeld & Partner UI)

---

## Immobilien

### 9. Thomas Dachstein, 48

**Rolle:** Geschäftsführer
**Firma:** Dachstein Hausverwaltung — 15 Mitarbeiter, 2.800 Wohneinheiten
**IT-Setup:** Hausverwaltungssoftware (Domus/Wodis), E-Mail, Telefon, WhatsApp (inoffiziell)
**IT-Team:** keines

**Schmerzpunkte:**
- Schadensmeldungen kommen per Telefon, Mail und WhatsApp — kein zentraler Eingang
- Handwerkerkoordination komplett manuell, Terminbestätigungen per Telefon
- Nebenkostenabrechnungen dauern 3 Monate, weil Daten aus 5 Quellen zusammengesucht werden
- Versicherungsfälle: Copy-Paste zwischen Mieter-Mail, Hausverwaltungssoftware und Versicherungsportal

**Typischer Satz:** "Wir verwalten 2.800 Wohnungen, aber unsere Prozesse sind für 200 gemacht."

**Passt zu Beispiel:** Immobilien Flow (Schadensmeldung → Handwerker) + Objektmanager (Dachstein Verwaltung UI)

---

### 10. Elena Martens, 36

**Rolle:** Teamleiterin Objektbetreuung
**Firma:** Nordpark Immobilien GmbH — 45 Mitarbeiter, 8.000 Wohneinheiten
**IT-Setup:** ERP (SAP RE), Mieterportal, Handwerkerportal, DMS, Excel
**IT-Team:** 2 Leute (ERP + Portal-Admin)

**Schmerzpunkte:**
- Mieterwechsel-Prozess hat 12 Schritte in 4 verschiedenen Systemen
- Wartungsverträge werden in Excel getrackt, Fristen werden verpasst
- Versicherungsfälle erfordern Copy-Paste zwischen 3 Portalen
- Neue Mitarbeiter brauchen 3 Monate Einarbeitung, weil niemand den Gesamtprozess kennt

**Typischer Satz:** "Jeder neue Mitarbeiter braucht 3 Monate bis er weiß wo was liegt. Das sagt alles über unsere Systeme."

**Passt zu Beispiel:** Immobilien Flow (automatisierte Prozesse über Systemgrenzen) + Objektmanager (Dachstein Verwaltung UI)
