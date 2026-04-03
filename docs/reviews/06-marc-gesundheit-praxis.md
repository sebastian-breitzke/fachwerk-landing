# Blind Review: Marc Hubner -- Praxismanagement

**Persona:** Praxismanager, OrthoPraxis Verbund, 5 Standorte, 60 MA
**Szenario:** Link von einem Kontakt bekommen

## 1. Erster Eindruck

Ich lande auf der Seite und denke erstmal: sieht schick aus. Technisch, sauber, ein bisschen wie eine Entwickler-Landingpage. "Baut sich selbst." -- okay, was baut sich selbst? Mein erster Reflex ist: das ist was fuer IT-Leute, nicht fuer mich. Ich hab ein Fax-Problem und eine Abrechnungstabelle, die drei Standorte nicht kennt. Ich brauche 5 Sekunden, um zu entscheiden, ob ich weiterscrolle oder den Tab schliesse. Die Animation rechts ist huebsch, sagt mir aber nichts.

Der Untertitel rettet es ein bisschen: "Automatisierungs- und Integrationsplattform. Gebaut fuer die Leute, die am besten wissen, was sie brauchen -- Business-Anwender, nicht Entwickler." Das trifft einen Nerv. Aber ich muss dafuer erstmal am "Baut sich selbst" vorbei, und das kostet mich fast.

## 2. Verstaendnis

Nach dem Scrollen durch die Startseite verstehe ich ungefaehr: es geht darum, dass verschiedene Systeme miteinander reden und Prozesse automatisiert werden, ohne dass ich ein Entwicklerteam brauche. Soweit, so gut -- das klingt erstmal nach dem, was ich suche.

Aber es bleibt abstrakt. "1000 Prozesse, die automatisiert werden muessten" -- ja, stimmt. "Maessgeschneiderte Software kann sich niemand leisten" -- genau mein Problem. Aber was macht Fachwerk *konkret* bei mir? Befunde zwischen Standorten? Terminplanung? Abrechnung? Ich weiss es nach der Startseite noch nicht.

Die drei Saeulen (baut sich selbst, fuer Business, Code wo Code reicht) verstehe ich konzeptionell. "AI wo AI zaehlt" ist ein guter Satz -- ich bin skeptisch gegenueber AI-Versprechen, aber dass es hier als Eskalationsstufe beschrieben wird, nicht als Allheilmittel, gefaellt mir. Das nimmt Druck raus.

"Kein Budget, kein Ping-Pong, kein Development-Team" -- das ist eine starke Liste. Wenn das stimmt. Genau da hake ich aber innerlich ein: klingt zu gut. Wer bezahlt das dann?

## 3. Relevanz

Ich klicke auf "Beispiele" und finde dort den Reiter "Gesundheit". Das ist der Moment, wo es fuer mich relevant wird.

Das Befund-Routing-Beispiel: Labor schickt Befund, Fachwerk ordnet zu, routet an den richtigen Arzt, kritische Werte loesen Push aus. Das ist *exakt* mein Problem, nur in einer Klinik-Variante statt Praxis-Variante. Bei uns kommen Befunde per Fax oder PDF-Mail, landen im allgemeinen Postfach, und irgendwann guckt jemand drauf. Wenn wir Pech haben, sieht es erst der Arzt am naechsten Tag.

Die Stations-Uebersicht (MedVita-Mockup) zeigt mir: offene Befunde, kritische Werte, Aktionen wie "Arzt rufen" oder "Verordnung anstoessen". Das ist nah an dem, was ich mir fuer unsere Standort-Uebersicht wuenschen wuerde. Statt fuenf verschiedene Systeme aufzumachen, alles an einem Ort.

Allerdings: das Beispiel ist eine Klinik mit Stationen. Wir sind fuenf orthopaeadische Praxen. Die Uebersetzung muss ich selber machen. Ich haette mir gewuenscht, dass es ein Beispiel gibt, das naeher an einer Praxis mit mehreren Standorten dran ist -- Terminplanung ueber Standorte, Befundaustausch zwischen Praxen, Abrechnungsdaten zusammenfuehren. Das sind meine Top-3-Probleme, und keins davon wird direkt angesprochen.

Das "Laeuft wo du es brauchst"-Segment auf der Startseite ist fuer mich relevant: On-Premise, hinter der Firewall, ohne Migration. Wir haben ein PVS (Praxisverwaltungssystem), das lokal laeuft, und unser externer Dienstleister wuerde durchdrehen, wenn er Cloud-Anbindungen konfigurieren muesste. Dass Fachwerk lokal laufen kann, ist ein echtes Argument.

## 4. Vertrauen

Hier wird es duenn. Im Footer steht "Ein Projekt von Sebastian Breitzke" mit Link zu s16e.de. Eine Person. Kein Team, kein Unternehmen, keine Referenzen.

Fuer mich als Praxismanager im Gesundheitswesen ist das ein Problem. Ich verwalte Patientendaten. Ich brauche:
- Datenschutz (DSGVO, Patientengeheimnis)
- Zuverlaessigkeit (wenn Befunde nicht ankommen, ist das kein "Bug", das ist potentiell gefaehrlich)
- Support (wenn Montag morgen was nicht laeuft, muss jemand erreichbar sein)
- Zertifizierungen oder zumindest nachvollziehbare Sicherheitsstandards

Nichts davon finde ich auf der Seite. Kein Wort zu Datenschutz im Gesundheitskontext. Kein Wort zu HL7/FHIR-Kompatibilitaet (das Beispiel erwaehnt HL7 einmal, aber nur in Klammern). Kein Wort zu Ausfallsicherheit oder Support-Modell.

Ich sehe auch keine Kunden, keine Referenzen, keine Fallstudien. Die Beispiele sind fiktiv (NordWare, Stahlberg Werke, MedVita Klinik). Das ist okay fuer eine erste Erklaerung, aber es gibt mir null Sicherheit, dass das in der Praxis funktioniert.

## 5. Naechster Schritt

Der CTA "Kontakt aufnehmen" ist klar und gut platziert. Aber wuerde ich klicken?

Ehrlich: wahrscheinlich nicht beim ersten Besuch. Mir fehlt zu viel Kontext. Ich wuerde die Seite meinem Kontakt zurueckschicken mit der Frage: "Kennst du jemanden, der das schon nutzt?" Wenn die Antwort Ja waere, wuerde ich nochmal kommen.

Was mich zum Klicken bringen wuerde:
- Ein konkretes Gesundheits-Beispiel, das naeher an meiner Realitaet ist (Multi-Standort-Praxis, nicht Klinik)
- Ein Satz dazu, wie Datenschutz und Patientendaten gehandhabt werden
- Irgendeine Form von Referenz oder Pilotprojekt -- auch ein anonymes "Praxis mit 4 Standorten, Befundzeiten von 48h auf 2h reduziert" wuerde reichen
- Ein konkretes Preismodell oder zumindest ein Rahmen ("kostenlose Analyse" oder "Pilot in 4 Wochen")

## 6. Unklarheiten

- **Was kostet das?** "Kein Budget" steht da -- heisst das kostenlos? Freemium? Pay-per-Use? Das ist eine mutige Aussage ohne Erklaerung. Ich verwalte Budgets, ich weiss, dass nichts umsonst ist.
- **Wer steht dahinter?** Eine Person reicht mir nicht fuer einen Bereich, in dem Patientendaten fliessen. Ich brauche mindestens ein Unternehmen mit Impressum, AV-Vertrag-Bereitschaft und Haftpflicht.
- **Wie funktioniert die Integration konkret?** Unser PVS ist von Medistar (CGM). Kann Fachwerk damit reden? Oder muss ich das selber rausfinden?
- **Datenschutz im Gesundheitswesen?** Kein einziges Wort zu DSGVO, Patientengeheimnis, Paragraph 203 StGB, Auftragsverarbeitung. Das ist fuer mich ein K.O.-Kriterium, wenn ich das nicht klaeren kann, bevor ich ueberhaupt mit jemandem rede.
- **Support und Betrieb?** Wer betreut das System? Unser externer IT-Dienstleister hat davon noch nie gehoert. Laeuft das neben unseren bestehenden Systemen oder ersetzt es was?
- **"Baut sich selbst" -- wirklich?** Ich beschreibe mein Problem, und Fachwerk baut die Loesung? Ohne technisches Wissen? Das klingt nach einem Versprechen, das ich erstmal sehen muss, bevor ich es glaube.

## 7. Gesamturteil

Die Seite trifft mein Problem erstaunlich genau -- auf einer konzeptionellen Ebene. "5 IT-Inseln verbinden", "Prozesse automatisieren ohne Entwicklerteam", "laeuft lokal" -- das ist alles richtig beschrieben. Das Gesundheits-Beispiel auf der Beispiele-Seite ist nah genug dran, dass ich denke: da hat jemand verstanden, wo der Schmerz liegt.

Aber die Seite schafft es nicht, mich vom Verstehen zum Handeln zu bringen. Dafuer fehlt:
1. **Konkretisierung fuer meine Realitaet** -- Praxisverbund, nicht Klinik
2. **Vertrauen** -- Datenschutz, Referenzen, Unternehmensstruktur
3. **Greifbarkeit** -- was passiert nach dem Klick auf "Kontakt"? Wie sieht ein Einstieg aus?

Die Tonalitaet gefaellt mir: direkt, kein Marketing-Blabla, keine Stockfotos von laechelnden Aerzten. Das ist ehrlich. Aber Ehrlichkeit allein reicht nicht, wenn ich Verantwortung fuer Patientendaten trage.

**Fazit:** Ich merke mir die Seite. Ich schliesse den Tab. Ich komme zurueck, wenn mein Kontakt mir sagt, dass das bei jemandem laeuft, den er kennt. Oder wenn die Seite mir in den naechsten Wochen einen konkreteren Grund gibt, das Kontaktformular auszufuellen.

Wahrscheinlichkeit, dass ich Kontakt aufnehme: **20-30%** -- nicht wegen der Idee (die ist gut), sondern weil mir die Sicherheit fehlt.
