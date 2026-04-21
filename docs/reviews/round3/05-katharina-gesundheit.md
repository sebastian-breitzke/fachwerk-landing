# Dr. Katharina Weiß — Klinikmanagerin (MedVita Klinik)

**Erster Eindruck (30 Sekunden):**
Sieht sauber aus, klar strukturiert, für jemanden der aus dem ERP/Industrie-Kontext kommt offensichtlich gemacht. Ich lese „Maßgeschneiderte Software für den gehobenen Mittelstand" und scrolle weiter. Der Hero verspricht „Rohbau", „Katalog", „AI + Code koppelbar". Klingt nach Architektur-Denken — das ist gut. Aber: im Slideshow-Hero sehe ich „Outreach Mail", „Flows", „Research" — nichts was auch nur andeutet, dass hier jemand ein klinisches Setting verstehen würde. Erste Frage in meinem Kopf: „Ist das für uns überhaupt gemeint?"

**Was landet:**
- Die Einordnung „Standard passt nie, Individual dauert ewig" — das kenne ich aus dem KIS-Geschäft wörtlich. KIS deckt 80% ab, für die wichtigen 20% bauen wir Workarounds in Word-Vorlagen und Excel-Listen.
- „AI bleibt auditierbar. Jeder AI-Schritt hat definierte Ein- und Ausgaben, Logs, Modell-Versionen, Ergebnis-Historie." Das ist der erste Satz, bei dem ich stehenbleibe. Genau die Sprache, die ich gegenüber Datenschutzbeauftragtem und MDR/MPG-Auditor brauche.
- Die Deploy-Sektion mit On-Premise, Air-Gapped, „Kein Byte verlässt dein Netz" — das ist relevant. Wir dürfen Patientendaten nicht in die Cloud eines Anbieters kippen. Dass das überhaupt vorgesehen ist, hebt Fachwerk aus dem üblichen SaaS-Einerlei heraus.
- Das „Triage-Eingang · MedVita · v2.0 · ok" im Katalog-Mockup — Moment, steht da MedVita? Also wird an Klinik gedacht? Widersprüchlich zum Rest der Seite.
- Code gehört dem Kunden, ein Repo pro Kunde. Das ist ein Argument gegen Vendor-Lock-in, das ich gegenüber Geschäftsführung sofort platzieren kann.

**Was verwirrt / geht vorbei:**
- Gesundheit kommt als Branche nicht vor. Vier Use-Cases — E-Commerce, Fertigung, Finanzen, Immobilien. Kein Krankenhaus. Kein Labor. Kein KIS, kein PACS, kein LIS, kein HL7, kein FHIR, kein IHE-Profil. Die einzige klinische Spur ist „MedVita" im Katalog-Beispiel — ein UI-Artefakt ohne Substanz.
- Im Katalog-Mockup heißt die Zeile „Triage-Eingang". Für mich ist Triage ein konkreter Begriff aus der Notaufnahme. Hier wird er offenbar generisch für „Eingangsverteilung" benutzt. Das ist sprachlich unscharf und schürt meine Skepsis, dass hier Klinik wirklich verstanden wird.
- „Fachwerk läuft on-premise neben SPS und Modbus/TCP." Ja, schön für Stahlberg. Bei uns läuft nichts neben einer SPS. Neben uns läuft ein PACS-Archiv mit DICOM, ein LIS mit ASTM/LIS2, ein KIS mit HL7 v2. Nichts davon taucht auf der Seite auf.
- Compliance-Erwähnung: GoBD (Grünfeld). Kein DSGVO-Detail in dem Maß, das ich brauche (AVV, TOMs, Zweckbindung, Löschkonzepte), kein Wort zu §203 StGB, MDR/MPG, KRITIS, BSI-Grundschutz, B3S Krankenhaus. Für ein Krankenhaus ist das der Kern der Prüfungsliste — hier Leerstelle.
- „Zielkunde 20–200 Mio. Umsatz." Ein Regionalkrankenhaus mit 450 MA liegt meistens bei 60–120 Mio. Umsatz. Passt formal. Aber „nicht über 200 Mio." — größere Klinikverbünde sind raus. Wie das zu uns passt, muss ich mir selbst zusammenreimen.
- Die Hero-Bildstrecke ist E-Mail-Outreach, Research-Output, Apps-Katalog. Für mich visuell: das ist ein Marketing-/Ops-Tool. Nicht: klinisches Back-Office.
- „Eine Wahrheit, über alle Systeme hinweg." Reiner Marketing-Claim. In meiner Welt stimmt das nie — wir haben Fachverfahren, die konzeptionell nie die gleiche Wahrheit ergeben werden (KIS-Fall vs. DRG-Abrechnung vs. QS-Register).

**Was fehlt für ein Kauf-/Gesprächssignal:**
- Ein expliziter Branchen-Anker Gesundheit. Ein fünfter Use-Case: „Befund-Routing — kritischer Laborwert findet den zuständigen Arzt". Genau mein Schmerz, genau auf Seite 1 meines Problembriefings, und die Persona-Liste hinter den Kulissen scheint das ja vorgesehen zu haben (MedVita-UI-Mockup existiert). Warum ist das nicht auf der Landing Page?
- HL7 / FHIR / DICOM / IHE in der Marquee-Leiste der Systeme. Dort steht SAP, Shopify, Modbus, GraphQL. Kein einziges klinisches Protokoll. Das ist die schnellste Disqualifikation für jemanden aus meiner Welt.
- Ein Satz zu §203 StGB (Berufsgeheimnis), Auftragsverarbeitung, Datenschutzkonzept nach B3S. Ein Link zu einem Muster-AVV. Ein Satz „Wir haben X Kliniken im Proof-of-Value begleitet" — oder ehrlich „Gesundheit ist für uns Welle 2, wir suchen Pilotkunden".
- Klare Aussage zum Betrieb in medizinischen Kontexten: wie wird mit Patientenidentifikation (PID), mit Rollen-/Berechtigungsmodellen nach SNOMED/LOINC/HL7, mit Log-Aufbewahrung (10 Jahre für medizinische Dokumentation) umgegangen?
- Eine einzige Referenz — anonymisiert, als Case, als Zahl — die zeigt, dass Fachwerk im Krankenhaus funktioniert. Aktuell: keine Referenzen auf der Seite. Das ist für jeden Sektor ein Problem, für Gesundheit aber ein Ausschlusskriterium.

**Buche ich ein Erstgespräch?** Nein.

Begründung: Die Seite signalisiert mir an jeder Stelle „gehobener Mittelstand, gerne Fertigung, gerne E-Commerce, gerne Finanz/Immo". Gesundheit taucht nicht auf — bis auf ein Mockup-Element, das den Verdacht nährt, dass Klinik thematisch vorgedacht, aber nicht platziert wurde. Für mich gilt: wenn eine Plattform Krankenhaus-Anforderungen ernst nimmt, muss sie HL7/FHIR, MDR, §203 und Befund-Routing explizit benennen. Tut sie nicht. Die On-Premise/Auditierbarkeits-Argumente sind stark, reichen aber nicht, um Datenschutzbeauftragten, IT-Leiter und Ärztliche Direktion zu einem Erstgespräch zu bewegen — mit welchem Argument sollte ich Sebastians Kalendereintrag gegenüber meinem Team rechtfertigen? „Schaut mal, die haben SAP-Anbindung und machen 3-Wege-Match für Rechnungen." Das zieht in meinem Haus nicht.

Was die Entscheidung drehen würde: ein Use-Case „MedVita · Befund-Routing", HL7/FHIR in der Systemleiste, ein Satz zu §203 und MDR. Dann würde ich buchen — sofort.

**Bewertung:** 4/10

Die Plattform-Argumente (Rohbau, Katalog, Auditierbarkeit, On-Premise, Code gehört dem Kunden) sind fachlich stark und würden auch in einer Klinik tragen. Aber die Seite tut so, als gäbe es den Gesundheitsmarkt nicht. Für eine Persona wie mich ist das ein passives „nicht für dich gemeint". Kein Malus in der Substanz, ein Malus in der Adressierung.

**Eine konkrete Änderung:**
Fünfter Use-Case-Tab: **„05 · Gesundheit · MedVita"** mit Flow „Kritischer Laborwert → zuständiger Arzt → Eskalation nach 30 Min → Audit-Eintrag". Meta-Zeilen: `Systeme: KIS · LIS · PACS (HL7/FHIR)` · `Compliance: §203 · DSGVO · B3S` · `Deploy: On-Premise / Air-Gapped`. Und im Marquee „HL7" und „FHIR" ergänzen. Ab dem Moment ist die Seite für mich Gesprächspartner — vorher ist sie Deko.
