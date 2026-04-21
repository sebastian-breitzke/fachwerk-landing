# Round 3 — Synthese

Blind-Reviews der 10 Personas gegen die aktuelle fachwerk.tech (Onepager, Stand 21.04.2026). Jede Persona hat ihr Profil gelesen, dann den Seiteninhalt (`home-de.ts` + `Home.astro`) und aus ihrer Perspektive bewertet. Keine Persona kannte die vorherigen Runden.

## Scores

| # | Persona | Branche | Score | Erstgespräch? |
|---|--------|--------|-------|----------------|
| 1 | Sandra Keller | E-Com Ops | 6/10 | Nein — will Referenz |
| 2 | Priya Krishnan | E-Com IT | 7/10 | Ja — hoher Diskursdruck |
| 3 | Jürgen Brandt | Fertigung | 6/10 | Ja, knapp |
| 4 | Rainer Vogt | Elektro-Großhandel | 6/10 | Ja, knapp |
| 5 | Katharina Weiß | Klinik | 4/10 | **Nein** |
| 6 | Marc Hübner | Arztpraxen-Verbund | 4/10 | **Nein** |
| 7 | Michael Grünfeld | Steuerberatung | 6/10 | Nein, knapp |
| 8 | Nina Berger | Buchhaltung Handel | 6,5/10 | Ja, zögerlich |
| 9 | Thomas Dachstein | Kleine HV | 5/10 | Eher Nein |
| 10 | Elena Martens | Große HV | 7,5/10 | Ja, mit Vorgeplänkel |

**Ø 5,8/10.** 5× Ja (3 davon zögerlich), 5× Nein.
Höchste Scores bei denen, die ins Pricing-Tier passen und technisch-affin sind (Priya, Elena). Niedrigste dort, wo Branche fehlt (Gesundheit) oder Firma unter der Tier-Schwelle liegt (Marc).

---

## Top-Themen — was alle (oder fast alle) sagen

### 1. Hero-Headline geht vorbei (7/10)
Sandra, Priya, Jürgen, Rainer, Marc, Michael, Thomas kippen über der Headline. „Vibe Coding" kennt niemand außerhalb von Tech-Twitter. Die Bau-Metaphorik („Rohbau", „Tragwerk", „Statik") ist konsistent, aber sie *erklärt nicht*, was das Ding tut. Nach 30 Sekunden wissen die meisten nicht, ob Fachwerk eine Software, eine Plattform oder eine Beratung ist.

**Fix (Impact ≫ Aufwand):** Ein Satz unter oder statt der Headline, der in Klartext sagt, was nach 6 Wochen läuft. Vorschlag (Priya-Sprache): „Wir bauen die Automationen zwischen deinen Systemen, die dein Dienstleister neun Monate abrechnen würde. Der Code läuft bei dir, der Code gehört dir."

### 2. Fünf-Säulen-Vokabular landet nicht (10/10)
Werkstatt / Katalog / Betrieb / Speicher / Wissen — *jede* Persona stolpert. Es ist Plattform-Architektur-Sprache, nicht Funktions-Sprache. Jürgen liest „Werkstatt" als Instandhaltung. Rainer liest „Katalog" als Ersatzteilkatalog. Sandra muss dreimal lesen, um „Betrieb = Runtime" zu verstehen.

**Fix:** Entweder Untertitel pro Säule in Kunden-Sprache („Betrieb — hier laufen deine automatisierten Prozesse, auditierbar"), oder die Säulen-Namen durchleuchten: Werkstatt → „Bauen", Betrieb → „Ausführung". Das kostet Markenidentität, aber sie ist aktuell Hürde.

### 3. Keine Referenzen, keine echten Zahlen (10/10)
Ausnahmslos alle: Die vier Use-Case-Firmen (NordWare, Stahlberg, Grünfeld, Dachstein) sind *offensichtlich* fiktiv. Die UI-Mockups sind zu sauber, die Namen klingen wie Namensgenerator. Einzige echte Zahl: „~14 h / Woche gespart" bei NordWare — und selbst die wird angezweifelt, weil kein Case-Kontext.

**Das ist das Nummer-1-Kauf-Hindernis, quer durch alle Personas.** Sandras Satz bringt's: „Ich frag meinen CTO, ob er die kennt. Wenn er sagt noch nie gehört — weg damit."

**Fix (hoher Aufwand, aber unumgänglich):** Mindestens eine echte Referenz, anonymisiert reicht. „Pilotkunde, Import/Export, 150 Mio €, Monatsabschluss von 9 auf 5 Tage." Oder, wenn ehrlich keine da sind: Banner „Welle 1 — wir suchen Pilotkunden, Referenz-Discount 30%". Das ist ehrlicher als Mockups als Beweis zu verkaufen.

### 4. Pricing-Tier-Kommunikation disqualifiziert unnötig (5/10)
Marc (8-10 Mio Umsatz), Thomas (kleine HV), Michael (5-7 Mio) lesen „20-80 Mio Core" und klappen zu. Die Seite sagt nirgends: „Wenn du kleiner bist, hier ist dein Weg" oder „Das ist bewusst — wir fokussieren diese Größe, weil…".

Gleichzeitig: Jürgen + Nina liegen zwischen den Tiers (60-120 Mio) und sind irritiert. On-Prem/Multi-Site zwingt immer ins Platform-Paket, auch bei Core-Umsatz — das ist ein *Widerspruch, der auffällt*.

**Fix:** Ein Absatz unter Pricing: „Unter 20 Mio Umsatz beraten wir nicht direkt — für euch lohnt sich das nicht. [Alternative: vielleicht Hinweis auf kleinere Lösungen/Partner.]" Und: Klärung für die 60-120-Mio-Zone, wie man dort einsteigt.

### 5. Gesundheit komplett leer (2/10 für Katharina + Marc)
Im Katalog-Mockup steht „MedVita · Triage-Eingang" — aber kein Use-Case, keine HL7/FHIR/DICOM in der System-Marquee, kein Wort zu §203 StGB, B3S, KRITIS. Katharina: „schnellste Disqualifikation für jemanden aus meiner Welt". Wenn Gesundheit Zielbranche ist (und der gelöschte MedVita-Mock ließ das vermuten), fehlt hier ein Branchen-Anker. Wenn nicht: den MedVita-Eintrag aus dem Katalog-Mockup rausnehmen — er erzeugt falsche Erwartung.

### 6. PoV-Preis ohne Zahl (6/10)
Nina, Rainer, Jürgen, Thomas, Elena, Michael fragen alle: „Was kostet der bezahlte 6-Wochen-PoV?" — die Seite sagt nur, er ist auf die Launch-Fee anrechenbar. Das ist gut, aber ohne Zahl kann niemand intern verkaufen.

**Fix (einfachster Gewinn):** Eine Zahl. „PoV: 12-20k. Voll anrechenbar auf die Launch-Fee." Ohne Zahl bleibt es Verhandlung — und Verhandlung ohne Vertrauen bedeutet Absage.

### 7. Architekten-Klumpenrisiko (3/10 — aber ernstes Signal)
Nina, Rainer, Jürgen: „Direkt mit dem Architekten" klingt sympathisch, aber auch wie Ein-Mann-Bude. Was passiert bei Krankheit, Bus-Faktor, Jahr 2, Jahr 5? Für GoBD-relevante oder Klinik-Prozesse ist das ein ernster Blocker.

**Fix:** Ein Satz zu Betrieb & Kontinuität. „Fachwerk-Team: N Engineers, Support-SLA X. Kundenerfolg über Y Jahre gesichert durch Z." Aktuelle Unschärfe lässt Fantasie und Angst wachsen.

### 8. Compliance / Security zu dünn (5/10)
Priya (SSO, SCIM, RBAC, Audit-Retention, SOC2/ISO), Katharina (§203 StGB, B3S, KRITIS), Michael (BDSG, Berufsgeheimnis), Elena (DSGVO bei 20.000+ Mietern), Jürgen (IEC 62443, TISAX). Jede Persona hat eigene Compliance-Anker — auf der Seite steht GoBD (1x), DSGVO (als Tag). Das reicht für niemanden.

**Fix:** Eigener kleiner Compliance-Block oder ein „Vertrauen & Governance"-Abschnitt: SSO ✓ · RBAC ✓ · Audit-Log ✓ · DSGVO-konform · AVV verfügbar · On-Prem = Air-Gapped möglich. Dann werden Branchenspezifika im Gespräch vertieft.

### 9. Branchenabdeckung schmal (Rainer, Katharina, Marc)
Vier Cases — E-Com (B2C-Retouren), Fertigung, Finanzen, Immobilien. Kein Großhandel/B2B-Stammdaten (Rainer: sein Kernschmerz). Kein Subscription-Stack (Priya). Kein Gesundheit (Katharina, Marc). Niemand kennt sich beim Fall „200+ Lieferanten, 25.000 Rechnungen/Jahr, Mandantenfähigkeit" wieder (Nina).

**Fix (mittlerer Aufwand):** Ein fünfter Case „B2B-Großhandel · Stammdaten-Harvester" und/oder „Subscription-Ops". Oder ein „Was wir sonst noch bauen"-Block mit zwei Zeilen pro Branche. Man muss nicht alles ausbauen — man muss signalisieren, dass man's versteht.

### 10. „1000-Prozesse-Problem" schreckt die Ehrlichen ab (Sandra, Elena)
Sandra: „Wir haben keine 1000 Prozesse. Wir haben vier, die mich nachts wachhalten." Die Zahl fühlt sich enterprisig an.

**Fix:** „Dein teuerstes Prozess-Problem" statt „1000-Prozesse-Problem". Weniger hyperbolisch, deutlich weniger distanzschaffend.

---

## Kleinere, aber wiederkehrende Punkte

- „Proof-of-Value" als Primär-CTA klingt nach Berater-Deutsch (Jürgen, Thomas). „Testprojekt" oder „6-Wochen-Pilot" wäre näher an der Sprache der Zielgruppe.
- Hero-Bildstrecke zeigt Marketing-Tools (Outreach Mail, Apps-Katalog) — suggeriert Marketing/Ops-Tool, nicht Back-Office. Passt für NordWare, führt für Klinik/Fertigung/Finanzen in die falsche Richtung.
- Exit-Story ist mehrfach gefragt: „Code gehört dir" — ja, aber läuft er ohne Fachwerk-Runtime? (Priya, Thomas)
- „Eine Wahrheit über alle Systeme" klingt nach Marketing-Claim und reduziert Glaubwürdigkeit (Katharina: „in meiner Welt stimmt das nie").
- Sackgassen-Tabelle kommt als vierter Block — mehrere Personas hätten die Abgrenzung im Hero gewollt (Sandra).
- § 01 / § 02 als Pillar-Nummerierung wirkt für Nicht-ITler wie „Latein-Paragraphen" (Marc).

---

## Priorisierte Fix-Liste (morgen-tauglich, low risk)

**Heute noch, 30 Minuten Arbeit:**
1. PoV-Preis als Zahl in Pricing-Sektion („PoV: 12-20k, voll anrechenbar").
2. „1000-Prozesse-Problem" → „teuerstes Prozess-Problem" im CTA-Titel.
3. MedVita-Zeile aus dem Katalog-Mockup löschen (sie erzeugt Erwartung ohne Deckung).
4. Unter Pricing: ein Satz zur Untergrenze („Unter 20 Mio Umsatz lohnt sich das gegenseitig nicht, klare Ansage.").
5. Compliance-Tags in die Deploy-Sektion: SSO · RBAC · Audit-Log · AVV.

**Kurzfristig (nächste Woche):**
6. Ein Untertitel im Hero, der in Klartext sagt, was nach 6 Wochen läuft.
7. Ein echter Referenz-Abschnitt. Wenn keine Referenz: „Welle 1"-Banner mit Discount.
8. Einen Satz zu Team-Größe / Bus-Faktor / Support-Kontinuität.
9. Fünfter Case „Großhandel-Stammdaten" oder „Subscription-Ops" — oder ein „Was wir sonst bauen"-Zusatz.

**Strategisch (wenn Gesundheit Zielbranche wird):**
10. Eigener Gesundheits-Case + HL7/FHIR/DICOM in Marquee + B3S/§203 in Compliance-Block. Sonst: MedVita aus Seite raus.

---

## Was gut landet (damit nichts kaputtrepariert wird)

- Die Problem-Sektion (6 Kacheln) — fast alle nicken. „Excel-Krücken wuchern", „Dienstleister dauert Monate" — präzise Sprache.
- Der konkrete NordWare-Case (Retouren → Ad-Spend-Pause) ist der stärkste Moment der Seite (Sandra, Priya).
- Pricing ist öffentlich ausgewiesen. Das überrascht positiv (mehrfach: „Respekt, keine 'Fordern Sie ein Angebot an'-Wand").
- „Code gehört dir, ein Repo pro Kunde" — zentrale Verkaufsaussage, funktioniert.
- Deploy-Optionen (Cloud/On-Prem/Hybrid) sind sauber artikuliert.
- Das Grünfeld-3-Wege-Match-Mockup trifft die Fach-Sprache erstaunlich gut (Nina: „das ist erkennbar jemand, der Buchhaltung versteht").
- Das Dachstein-Objekt-Cockpit mit Telefon/Mail/WhatsApp trifft (Thomas, Elena).

Diese Teile nicht umbauen. Der Rest ist Fine-Tuning — aber die Hero+Säulen-Kombination und die Referenz-Leere sind echte Blocker.
