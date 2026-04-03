# Blind Review: Dr. Katharina Weiß — Klinikmanagement

**Persona:** Klinikmanagerin, MedVita Klinik, 450 MA
**Szenario:** Link von einem Kontakt bekommen ("Schau dir das mal an, könnte was für euch sein")

## 1. Erster Eindruck

Technisch, clean, irgendwo zwischen Startup und Ingenieurbüro. Die Seite sieht nicht aus wie ein typischer Healthcare-IT-Anbieter — kein Stock-Foto von lächelnden Ärzten, keine "Wir digitalisieren das Gesundheitswesen"-Headline. Das ist erstmal weder gut noch schlecht, aber es fällt auf. Der Claim "Baut sich selbst" ist mutig, aber ich verstehe zunächst nicht, was sich selbst baut. Ich muss erst weiterscrollen, um das einzuordnen.

Die Seite duzt mich. In meinem Umfeld ist das unüblich. Es wirkt, als wäre die Seite für eine jüngere, tech-affine Zielgruppe gemacht — E-Commerce-Gründer vielleicht, nicht Klinikmanagement. Ist kein Dealbreaker, aber es erzeugt eine leichte Distanz.

Die Animation rechts oben sagt mir nichts. Sieht nach einem geometrischen Muster aus. Vermutlich das Logo, aber ich verbinde damit keinen Inhalt.

## 2. Verständnis

Nach dem Lesen der Startseite verstehe ich: Fachwerk ist eine Plattform, die Automatisierungen und Integrationen baut, und zwar so, dass Business-Anwender das selbst anstoßen können, ohne Entwickler. AI kommt gezielt zum Einsatz, nicht als Allheilmittel.

Das ist ein starkes Versprechen. Die Formulierung "Code wo Code reicht, AI wo AI zählt" gefällt mir — das zeigt, dass hier jemand mitdenkt, der weiß, dass AI allein kein stabiles System macht. Gerade im Klinikbetrieb, wo Zuverlässigkeit nicht verhandelbar ist, ist das ein relevanter Punkt.

Die Beispiele-Seite macht dann den eigentlichen Unterschied. Der Gesundheits-Tab trifft mein Szenario erstaunlich genau: Laborbefund kommt als HL7 oder PDF, landet im Postfach, kritische Werte werden zu spät gesehen. Das ist exakt unser Problem auf Station 3B. Die Stationsschwester sucht 20 Minuten in drei Systemen — KIS, Labor, Verordnung. Dass Fachwerk den Befund extrahiert, zuordnet und kritische Werte direkt per Push an den zuständigen Arzt routet, ist genau das, was wir brauchen.

Das Mockup der Stations-Übersicht mit "MedVita Klinik" als Beispiel ist ein nettes Detail. Die Aktionen "Arzt rufen", "Notfall-Labor", "Verordnen" — das sind reale Aktionen aus unserem Alltag. Das wirkt, als hätte jemand mit Leuten aus dem Klinikalltag gesprochen, nicht nur mit IT-Beratern.

## 3. Relevanz

Hoch, mit Einschränkungen.

Meine konkreten Schmerzpunkte und wie Fachwerk sie adressiert:

- **Befunde im Postfach statt beim Arzt:** Direkt adressiert. HL7-Parsing, Zuordnung, Routing an den zuständigen Arzt. Das wäre ein Riesengewinn.
- **Kritische Werte zu spät gesehen:** Push-Benachrichtigung bei Grenzwertüberschreitung. Genau richtig.
- **Stationsschwester sucht in 3 Systemen:** Die Stations-Übersicht konsolidiert offene Befunde, Verordnungen, Status — in einer Ansicht mit direkten Aktionen. Das spart pro Patient 15-20 Minuten.
- **Compliance und Dokumentation:** Nicht explizit adressiert. Das ist ein Problem.

Die AI-Analyse für Verlaufstrends ("Kalium steigend seit Medikationsumstellung") ist ein sinnvoller Zusatz, kein Gimmick. Der Hinweis "nicht als Diagnose, sondern als Hinweis" zeigt Verantwortungsbewusstsein. In einem regulierten Umfeld wie dem Klinikbetrieb ist diese Abgrenzung wichtig.

Was mir fehlt: Der Bezug zu On-Premise wird auf der Startseite erwähnt ("läuft lokal, hinter der Firewall"), aber im Gesundheitsbeispiel nicht explizit vertieft. Für eine Klinik ist das kein Nice-to-have, sondern Grundvoraussetzung. Patientendaten verlassen unser Netz nicht.

## 4. Vertrauen

Hier wird es dünn. Und das ist mein größtes Problem.

**Wer steht dahinter?** Im Footer steht "Ein Projekt von Sebastian Breitzke · s16e.de". Eine Einzelperson. Kein Team, kein Unternehmen, keine GmbH. Für eine E-Commerce-Automatisierung mag das reichen. Für eine Klinik mit 450 Mitarbeitern, Patientendaten und Audit-Pflichten ist das ein ernstes Warnsignal.

**Zertifizierungen:** Nichts. Kein ISO 27001. Kein ISO 13485. Keine DSGVO-Erklärung im Produktkontext (es gibt eine generische Datenschutzseite, aber die betrifft die Website, nicht das Produkt). Kein Hinweis auf ein Informationssicherheitskonzept. Kein AVV-Angebot. Keine Referenzarchitektur für regulierte Umgebungen.

**Medizinprodukteverordnung:** Wenn ein System Befunde routet, Werte klassifiziert und sogar Trends erkennt — wie positioniert sich Fachwerk regulatorisch? Ist das ein Medizinprodukt? Muss es eines sein? Diese Frage wird nicht einmal gestellt, geschweige denn beantwortet. Das beunruhigt mich.

**Referenzen und Case Studies:** Keine. Kein einziger Kundenname, kein Testimonial, keine Fallstudie. Ich weiß nicht, ob dieses Produkt überhaupt schon im Einsatz ist. Die Beispiele auf der Seite wirken durchdacht, aber es könnten reine Konzepte sein.

**SLA und Verfügbarkeit:** Keine Angaben. In einer Klinik brauche ich 99,9% Verfügbarkeit für kritische Systeme. Befund-Routing mit Ausfallzeiten ist inakzeptabel.

**IT-Team:** Ich habe 5 IT-Leute, die mit Wartung ausgelastet sind. Fachwerk verspricht "Kein Setup-Projekt", aber wie sieht die Integration mit unserem KIS (Orbis), dem Laborinformationssystem und der bestehenden HL7-Infrastruktur konkret aus? Das wird nicht erklärt.

## 5. Nächster Schritt

Trotz der Vertrauenslücken: Das Befund-Routing-Problem kostet uns potenziell Patientensicherheit. Das ist kein Effizienzthema, das ist ein Risikothema. Wenn Fachwerk liefern kann, was auf der Beispielseite steht, wäre das ein signifikanter Gewinn.

Mein nächster Schritt wäre: Kontaktseite öffnen und ein Gespräch anfragen. Aber nicht mit dem Ziel "wir kaufen das", sondern mit konkreten Fragen:

1. Läuft Fachwerk komplett on-premise? Verlassen Patientendaten jemals das Netz?
2. Wie positioniert sich die Plattform regulatorisch (MDR, Medizinprodukt)?
3. Gibt es ein ISMS? ISO 27001? AVV?
4. Gibt es Referenzkunden im Gesundheitswesen?
5. Wie sieht die Integration mit konkreten KIS-Systemen (Orbis, SAP ISH) und LIS aus?
6. Wie ist die Verfügbarkeit abgesichert?
7. Wer betreibt und wartet das System langfristig? Ist das ein Ein-Mann-Projekt?

Ich würde den Link auch an unseren IT-Leiter weiterleiten mit dem Kommentar: "Schau dir mal den Gesundheits-Tab auf der Beispielseite an. Inhaltlich trifft das genau unsere Probleme. Regulatorisch und organisatorisch habe ich Fragezeichen."

## 6. Unklarheiten

- **Produktreife:** Ist Fachwerk ein fertiges Produkt, ein Prototyp, oder eine Vision? Die Seite lässt mich im Unklaren.
- **Preismodell:** Kein Hinweis. "Kein Budget" steht auf der Startseite — was heißt das konkret? Kostenlos? Nutzungsbasiert? Das klingt nach Marketing, nicht nach Antwort.
- **Organisatorische Belastbarkeit:** Ein Projekt von einer Einzelperson. Was passiert, wenn Sebastian Breitzke krank wird? Urlaub? Aufhört? Für ein kritisches System in einer Klinik brauche ich mehr als einen Namen im Footer.
- **Audit-Trail:** Wenn Fachwerk Befunde routet und Aktionen auslöst — gibt es lückenlose Protokollierung? Wer hat wann was gesehen, wer hat wann welche Aktion ausgelöst? Für MDK-Prüfungen und interne Audits ist das Pflicht.
- **Rollentrennung:** Kann ich steuern, wer welche Aktionen ausführen darf? Pflege darf quittieren, aber nicht verordnen. Arzt darf verordnen. Stationsleitung sieht alles. Diese Granularität wird nicht erwähnt.
- **Bestehende Systemlandschaft:** Wir haben gewachsene Strukturen — Orbis, diverse Subsysteme, HL7-Schnittstellen. Die Seite sagt "verbindet alles miteinander". Das ist ein großes Versprechen. Ich brauche Substanz dahinter.
- **Datenschutz-Folgenabschätzung:** Bei der Verarbeitung von Gesundheitsdaten (Art. 9 DSGVO, besondere Kategorien) ist eine DSFA zwingend. Unterstützt Fachwerk das? Gibt es ein Verarbeitungsverzeichnis?

## 7. Gesamturteil

Die Seite schafft etwas, das viele Healthcare-IT-Anbieter nicht hinbekommen: Sie beschreibt meine Probleme, bevor ich sie erklären muss. Das Gesundheitsbeispiel ist nicht generisch, sondern trifft echte Klinik-Schmerzpunkte — vom HL7-Befund bis zur Stationsschwester, die in drei Systemen sucht. Die Trennung "Code wo Code reicht, AI wo AI zählt" ist klug formuliert und für mein Umfeld genau die richtige Botschaft.

Aber: Zwischen einem überzeugenden Beispiel auf einer Website und einem System, dem ich Patientendaten anvertraue, liegt eine erhebliche Distanz. Keine Zertifizierungen, keine erkennbare Organisation hinter dem Produkt, keine Referenzen, keine regulatorische Einordnung — das sind keine Kleinigkeiten, das sind harte Voraussetzungen in meiner Branche.

Ich würde ein Gespräch führen. Nicht, weil ich überzeugt bin, sondern weil das Problem real genug ist und die Beschreibung auf der Seite zeigt, dass hier jemand die Domäne versteht. Aber meine Erwartungshaltung ist: Wenn die Fragen aus Punkt 5 nicht substanziell beantwortet werden, ist das Thema nach einem Call erledigt.

**Bewertung: 6/10** — Inhaltlich stark, organisatorisch und regulatorisch nicht belastbar. Gesprächswürdig, aber weit entfernt von entscheidungsreif.
