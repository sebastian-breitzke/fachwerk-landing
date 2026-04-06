# Blind Review Round 2: Dr. Katharina Weiß — Klinikmanagement
**Persona:** Klinikmanagerin, MedVita Klinik, 450 MA

## 1. Erster Eindruck (Startseite)

Die Seite hat sich optisch nicht verändert — immer noch clean, technisch, die geometrische Animation rechts. Mein erster Gedanke ist derselbe wie beim letzten Mal: Das sieht nicht nach Healthcare-IT aus. Kein Deloitte-Look, kein Stock-Foto mit Stethoskop. Das ist erstmal nicht schlecht — die meisten Healthcare-IT-Anbieter-Seiten sehen austauschbar aus und sagen nichts.

"Baut sich selbst" als Claim verstehe ich jetzt besser, weil ich die Seite schon kenne. Aber für einen Erstbesucher aus dem Klinikumfeld bleibt das kryptisch. Die Erklärung darunter — "Automatisierungs- und Integrationsplattform, gebaut für Business-Anwender, nicht Entwickler" — macht es klarer, aber man muss schon bewusst lesen. In meinem Alltag hab ich dafür 10 Sekunden, nicht 30.

Was ich gut finde: "Code wo Code reicht. AI wo AI zählt." Das ist nach wie vor die stärkste Aussage auf der Seite. In einem Umfeld, wo gerade jeder "AI" draufschreibt, ist das eine differenzierende Positionierung. Für mich als Klinikmanagerin, die sich um Zuverlässigkeit sorgt, ist das beruhigend.

Das Duzen stört mich weniger als beim ersten Mal. Es ist konsistent, nicht kumpelhaft. Ich kann damit leben, auch wenn meine Ärzte beim Weiterleiten vielleicht die Stirn runzeln.

Die Deployment-Sektion "Läuft wo du es brauchst" mit On-Premise, Hybrid, "Hinter der Firewall" — das war beim letzten Mal schon da, und es ist immer noch der richtige Punkt. Patientendaten verlassen unser Netz nicht. Dass das explizit steht, ist gut. Allerdings vermisse ich immer noch den expliziten Bezug zum Gesundheitswesen an dieser Stelle. "Hinter der Firewall" ist für eine Klinik das Minimum, nicht das Feature.

## 2. Beispiele-Seite

Hier passiert für mich nach wie vor das Wesentliche. Die Branchen-Tabs oben — ich gehe direkt auf "Gesundheit". Das ist mein Einstieg, und er funktioniert.

**Flow-Beispiel:** "Kritischer Befund? Sofort beim richtigen Arzt." Das trifft mein Problem exakt. Labor schickt HL7 oder PDF, landet im Postfach, irgendwann schaut jemand drauf. Dass Fachwerk hier explizit HL7, FHIR und konkrete KIS-Systeme (Orbis, SAP IS-H, iMedOne) nennt, zeigt Domänenwissen. Das ist kein generisches "wir verbinden alles". Das sind die Systeme, die in deutschen Kliniken stehen.

Die Terminal-Boxen mit dem Befund-Routing — Kalium 6.2, kritisch hoch, Push an Dr. Weber in der Nephrologie — das ist ein Szenario, das bei uns letzte Woche genauso hätte passieren können. Der AI-Hinweis mit dem Verlaufstrend (Kalium steigend seit Medikationsumstellung) und die Einordnung "nicht als Diagnose, sondern als Hinweis" — das ist genau die richtige Tonalität. In einem regulierten Umfeld kann man nicht sagen "die AI diagnostiziert". Der Satz "Rücksprache empfohlen" ist die korrekte Eskalation.

**Mockup (MedVita Klinik):** Das Stations-Dashboard ist nach wie vor das stärkste Element. "Station 3B — Offene Befunde", Zimmer 301 mit "Kalium kritisch" und dem Button "Arzt rufen". Zimmer 307 mit "Verordnung fällig" und "Schmerzmedikation überfällig". Das sind reale Situationen, die ich auf unserer Station jeden Tag sehe. Die Aktionen "Arzt rufen", "Notfall-Labor", "Verordnen", "Zur Kenntnis" — das sind die Handlungsoptionen, die Pflege und Ärzte tatsächlich brauchen. Nicht 40 Tabs in einer Patientenakte, sondern: was muss jetzt passieren?

Neu bewerte ich die Punchline unter dem Mockup: "Alle Daten bleiben im Kliniknetz. DSGVO-konform, auditierbar, auf Wunsch on-premise." Das adressiert drei meiner Kernfragen. Beim letzten Mal hatte ich bemängelt, dass der On-Premise-Bezug im Gesundheitsbeispiel nicht vertieft wird — er steht hier, wenn auch nur in einem Satz. Besser als nichts, aber für mein Sicherheitsbedürfnis dünn.

Der CTA am Ende — "30 Minuten für Gesundheitswesen" — ist spezifisch. Nicht "Demo buchen", nicht "Jetzt starten". Sondern ein Gesprächsangebot mit Branchenbezug. Das senkt die Schwelle.

## 3. Preise-Seite

Die gab es beim letzten Mal nicht — das war eine meiner Hauptkritikpunkte. "Kein Budget" stand auf der Startseite, aber was das konkret heißt, war unklar. Jetzt gibt es drei Pakete:

- **Betrieb (2.500 EUR/Monat):** Bis 3 Automationen, 5.000 Geschäftsfälle, Diagnosen und Bugfixes, 24h Support. Für ein Befund-Routing an einer Station wäre das vermutlich der Einstieg.
- **Betrieb + Werkstatt (4.500 EUR/Monat):** Zusätzlich eigene Diagnosen und kleine Änderungen. Klingt nach dem, was meine IT braucht, wenn sie selbst schauen will, warum ein Befund nicht geroutet wurde.
- **Betrieb + Builder (7.500 EUR/Monat):** Eigene Power User bauen Automationen. Bei 5 IT-Leuten, die mit Wartung ausgelastet sind, sehe ich uns hier nicht sofort — aber perspektivisch.

Die Launch-Kosten (ab 12.000 EUR für Betrieb) sind realistisch für ein Integrationsprojekt. Kein Low-Code-Tool, das man "mal eben" startet, aber auch kein sechsstelliges Beratungsprojekt. Dass der Launch im Jahresvertrag integrierbar ist ("all-in ab 3.500 EUR/Monat") macht es budgetierbar.

Die Preislogik — Abrechnung nach Geschäftsfällen, nicht nach Tokens oder Features — ist für mich nachvollziehbar. Ein Geschäftsfall = ein verarbeiteter Befund, ein Sync-Lauf. Das kann ich meiner Geschäftsführung erklären.

Was fehlt: SLA-Definitionen. "Support innerhalb 24h" steht da, aber Verfügbarkeitsgarantien nicht. Für ein System, das kritische Laborbefunde routet, brauche ich 99,9% Uptime. Das ist nicht verhandelbar. "Innerhalb 24h" reicht nicht, wenn um 3 Uhr nachts ein Kaliumwert von 7.0 im Postfach liegen bleibt, weil das System down ist.

Die Add-ons-Tabelle ist transparent. Volumenband, zusätzliche User, Advisory — das sind Hebel, die ich verstehe. Kein überraschendes Upselling.

"Immer dabei" listet: Audit-Trail, Secrets Management, Monitoring, On-Premise/Cloud/Hybrid. Der Audit-Trail war ein offener Punkt aus meinem letzten Review. Dass er in jedem Paket enthalten ist, adressiert meine Compliance-Anforderung direkt. Gut. Aber "Audit-Trail" als Bullet Point ist nicht dasselbe wie eine belastbare Dokumentation, die mein QM-Team und der MDK akzeptieren. Ich will sehen, was da protokolliert wird.

## 4. Kontakt-Seite

Schlichtes Formular, direkte Kontaktdaten: E-Mail, Telefon, LinkedIn. "Schreib mir" — direkt, persönlich. Es ist klar, dass man mit einer Person spricht, nicht mit einem Vertriebsteam.

Für mich ist das ein zweischneidiges Schwert. Einerseits schätze ich die Direktheit. Kein "Füllen Sie das Formular aus und wir melden uns in 3-5 Werktagen." Andererseits bestätigt es, was mich seit Round 1 beschäftigt: Das ist ein Ein-Mann-Projekt. Für ein Erstgespräch ist das kein Problem. Für eine langfristige Geschäftsbeziehung mit Patientendaten-Verantwortung brauche ich mehr Substanz dahinter.

Die mailto-Action des Formulars ist technisch simpel — keine Formularverarbeitung, kein CRM im Hintergrund. Das unterstreicht den pragmatischen Ansatz, kann aber auch als "noch nicht soweit" gelesen werden.

## 5. Branchen-Seite

Die gab es beim letzten Mal nicht. "Fachwerk ist nicht branchenspezifisch" als Headline — ehrlich, aber für mich zunächst kontraintuitiv. Ich suche ja gerade branchenspezifische Kompetenz. Die Erklärung darunter löst das auf: Fachwerk baut keine Standard-Software für eine Branche, sondern maßgeschneiderte Automatisierung. Das ergibt Sinn. Mein KIS-Wildwuchs ist ja gerade das Ergebnis davon, dass Standard-Healthcare-Software unsere Prozesse nicht abbildet.

Die drei Karten — Integration, Automatisierung, Oberflächen — geben mir ein mentales Modell, in das ich meine Probleme einordnen kann. Befund-Routing = Integration + Automatisierung. Stations-Dashboard = Oberfläche. Das hilft.

Die Branchenliste unter "Beispiele" nennt Gesundheitswesen mit "Befunde routen, kritische Werte eskalieren, Stationsübersicht." Das ist eine korrekte Zusammenfassung, aber Kurzform. Der Mehrwert liegt auf der Beispiele-Seite, nicht hier. Die Branchen-Seite ist ein Überblick, nicht der Überzeugungspunkt.

"Du beschreibst. Fachwerk baut." ist ein starker Closer. Und der Nachsatz "AI schreibt den Code. AI ist nicht der Code." — das adressiert meine Angst vor einer Black Box. Was deployed wird, ist nachvollziehbar und testbar. In einem regulierten Umfeld ist das ein Muss.

## 6. Verbesserungen seit Round 1

Mein Round 1 hatte sieben konkrete Fragezeichen. Hier der Abgleich:

**Adressiert:**
- **Preismodell:** Jetzt vorhanden. Drei Pakete, transparente Add-ons, Launch-Kosten. "Kein Budget" auf der Startseite ergibt jetzt Sinn — der Launch ist im Jahresvertrag integrierbar. Klare Verbesserung.
- **Audit-Trail:** Wird jetzt in "Immer dabei" auf der Preisseite als inkludiert genannt. Dass das explizit steht, ist ein Fortschritt. Tiefe fehlt noch — was genau wird protokolliert? Aber die Richtung stimmt.
- **Branchenverständnis:** Die Branchen-Seite gibt Kontext, warum Fachwerk branchenübergreifend funktioniert. Keine Branchenexpertise vorgetäuscht, sondern ein ehrliches "wir passen uns an". Das ist konsistent.

**Nicht adressiert (offen geblieben):**
- **Zertifizierungen (ISO 27001, ISO 13485):** Kein Hinweis. Für mich nach wie vor eine harte Voraussetzung.
- **MDR-Positionierung:** Wenn ein System Befunde klassifiziert und Trends erkennt, stellt sich die regulatorische Frage. Die wird nach wie vor nicht gestellt.
- **Referenzen/Case Studies:** Null. Kein Kundenname, kein Testimonial. Ich weiß immer noch nicht, ob das Produkt im Einsatz ist.
- **SLA/Verfügbarkeit:** Die Preisseite nennt Support-Reaktionszeiten (24h/8h/4h), aber keine Verfügbarkeitsgarantien. Für kritische Systeme im Klinikalltag ein Loch.
- **Organisatorische Belastbarkeit:** Immer noch "Ein Projekt von Sebastian Breitzke". Für ein Gespräch reicht das. Für einen Vertrag nicht.
- **Rollentrennung/Berechtigungen:** Nicht adressiert. Pflege darf quittieren, Arzt darf verordnen — diese Granularität bleibt offen.
- **DSFA-Unterstützung:** Keine Erwähnung.

**Neuer Fortschritt:**
- Die Branchen-Seite als Ganzes ist ein Zugewinn. Sie gibt Kontext, den die Startseite allein nicht liefert.
- "Deterministische Runtime mit Audit-Trail" auf der Preisseite ist ein starkes technisches Signal. Das sagt mir: Nicht alles ist AI-basiert, es gibt reproduzierbare, nachvollziehbare Abläufe. Im Healthcare-Kontext relevant.
- Die Preistransparenz allein hebt die Seite über 80% der Healthcare-IT-Anbieter hinaus, die "auf Anfrage" als Preismodell haben.

## 7. Gesamturteil

Die Seite ist besser geworden. Die Preisseite und die Branchen-Seite schließen zwei der Lücken, die mich beim letzten Mal am meisten gestört haben. Ich weiß jetzt, was es kostet, und ich verstehe den Plattform-Ansatz besser.

Inhaltlich bleibt das Gesundheitsbeispiel das stärkste Argument. Die Kombination aus realem Klinikalltag (HL7-Befund, Kalium kritisch, Stationsschwester sucht in drei Systemen) und konkreten Aktionen (Arzt rufen, Notfall-Labor, Verordnen) zeigt Domänenwissen, das man nicht vortäuschen kann. Das Mockup mit "MedVita Klinik" ist immer noch das überzeugendste Element der gesamten Seite.

Meine Kernprobleme sind aber nach wie vor nicht gelöst: Keine Zertifizierungen, keine regulatorische Einordnung, keine Referenzen, keine SLA-Garantien, keine erkennbare Organisation jenseits einer Einzelperson. Das sind keine Wünsche — das sind Voraussetzungen, die mein Einkauf, mein Datenschutzbeauftragter und mein QM-Team stellen werden, bevor überhaupt ein Pilotprojekt gestartet werden kann.

Die Preistransparenz und der Audit-Trail-Hinweis sind Signale, dass hier pragmatisch gedacht wird. Die Branchen-Seite zeigt Selbstbewusstsein: "Wir machen keine Branchenlösung, wir passen uns an." Das ist eine ehrliche Positionierung, und in meinem Umfeld, wo jeder zweite Anbieter behauptet, Healthcare zu "verstehen", ist diese Ehrlichkeit erfrischend.

Mein nächster Schritt wäre derselbe wie beim letzten Mal: Gespräch anfragen. Aber jetzt mit einer konkreteren Erwartung. Ich weiß, was es kostet (Betrieb ab 2.500 EUR/Monat, realistisch mit Launch eher 3.500 EUR all-in). Ich weiß, dass Audit-Trail und On-Premise Standard sind. Meine Fragen für das Gespräch sind fokussierter:

1. Wie sieht der Audit-Trail konkret aus? Was wird protokolliert, wie lange, in welchem Format?
2. Gibt es ein ISMS oder den Weg zu ISO 27001?
3. Regulatorische Einordnung: Medizinprodukt ja/nein?
4. Referenzkunden, mindestens ein Pilotprojekt im regulierten Umfeld?
5. Was passiert, wenn die Plattform ausfällt — Fallback, SLA, Eskalation?
6. Wie sieht Rollentrennung aus (Pflege vs. Arzt vs. Stationsleitung)?

Ich werde den Link an meinen IT-Leiter weiterleiten, diesmal mit dem Zusatz: "Da gibt es jetzt eine Preisseite und konkretere Infos. Inhaltlich passt das auf unsere Probleme. Schau es dir an und sag mir, ob du ein Gespräch mitführen willst."

**Bewertung: 7/10** — Merkbare Verbesserung durch Preistransparenz, Branchen-Seite und Audit-Trail-Signal. Inhaltlich weiterhin stark. Regulatorisch und organisatorisch bleiben die harten Fragen offen. Gesprächswürdig, jetzt mit konkreterem Rahmen.
