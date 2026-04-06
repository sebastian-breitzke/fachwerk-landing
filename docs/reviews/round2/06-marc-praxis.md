# Blind Review Round 2: Marc Hubner -- Praxismanagement

**Persona:** Praxismanager, OrthoPraxis Verbund, 5 Standorte, 60 MA

## 1. Erster Eindruck (Startseite)

Ich komme auf die Seite, und mein erster Gedanke ist derselbe wie letztes Mal: sieht gut aus, aber nicht fuer mich gemacht. "Baut sich selbst." -- okay, was genau? Die SVG-Animation rechts ist technisch huebsch, aber sie erklaert mir nichts. Ich bin Praxismanager, kein Frontend-Entwickler.

Der Untertitel rettet es wieder: "Gebaut fuer die Leute, die am besten wissen, was sie brauchen -- Business-Anwender, nicht Entwickler." Den Satz mag ich. Aber er steht unter einer Headline, die erst mal an mir vorbeiredet.

Die Problem-Sektion ("Massgeschneiderte Software kann sich niemand leisten") trifft nach wie vor. Ich zahle unserem IT-Dienstleister gutes Geld dafuer, dass er unsere fuenf Standorte halbwegs am Laufen haelt, und trotzdem schicken wir Befunde per Fax. "1000 Prozesse, die automatisiert werden muessten" -- ja, davon habe ich 50, und drei davon kosten uns taeglich Nerven und Zeit.

Die drei Saeulen sind klar formuliert. "Code wo Code reicht. AI wo AI zaehlt." -- nach wie vor der beste Satz auf der ganzen Seite. Ich bin so muede von AI-Versprechen, dass mir das ehrlich vorkommt. Gut.

"Kein Budget. Kein Ping-Pong. Kein Development-Team." -- immer noch eine starke Liste. Aber "kein Budget" klingt in meinen Ohren nach: hier wird irgendwas verschwiegen. Was kostet der Spass? Dazu gleich mehr bei der Preise-Seite.

"Laeuft wo du es brauchst" -- On-Premise, hinter der Firewall, ohne Migration. Das ist fuer mich einer der wichtigsten Punkte. Unser PVS von CGM laeuft lokal, unser externer IT-Dienstleister wuerde bei einer Cloud-Migration erstmal drei Wochen lang Mails schreiben, bevor ueberhaupt was passiert.

**Fazit Startseite:** Konzeptionell trifft es. Emotional holt es mich nicht in den ersten drei Sekunden ab. Die Headline spricht Techies an, nicht mich.

## 2. Beispiele-Seite

Die Beispiele-Seite hat jetzt Branchen-Tabs: E-Commerce, Fertigung, Gesundheit, Finanzen, Immobilien. Gut, ich muss nicht mehr suchen. Ich klicke auf Gesundheit.

Das Befund-Routing-Beispiel ist weiterhin der Moment, wo bei mir ein Schalter umgelegt wird. "Labor schickt den Befund als HL7-Nachricht oder PDF. Bisher landet der im Postfach." Genau das passiert bei uns. Jeden Tag. An fuenf Standorten. Nur dass bei uns kein HL7 kommt, sondern ein Fax. Oder eine PDF per Mail, die im allgemeinen Postfach versauert.

Die Terminal-Boxen ("AUTOMATISIERUNG -- BEFUND-ROUTING" und "AI-ANALYSE -- OPTIONAL") sind gut lesbar und zeigen konkret, was passiert. Kalium 6.2, kritisch hoch, Push an den zustaendigen Arzt. Das ist verstaendlich, auch ohne technisches Vorwissen. Und dass die AI-Analyse als "optional" markiert ist, gefaellt mir -- kein Zwang, kein Overkill.

Das MedVita-Mockup (Stations-Uebersicht) zeigt mir: Zimmer, offene Befunde, kritische Werte, Aktionen wie "Arzt rufen" oder "Verordnen". Das ist visuell sofort greifbar. Aber es ist ein Klinik-Szenario. Ich bin kein Krankenhaus. Ich habe fuenf Praxen mit MFAs, Aerzten und Patienten, die zwischen Standorten pendeln. Mein Problem ist nicht "Zimmer 301 hat einen offenen Befund", sondern "der Befund vom Radiologen fuer Frau Mueller in der Filiale Linden liegt in der Filiale List im Postfach, und der Arzt in Linden weiss nichts davon."

Was ich vermisse -- und das war in Round 1 genauso: ein Beispiel, das naeher an einem Praxisverbund dran ist. Terminplanung ueber Standorte, Befundaustausch zwischen Filialen, Abrechnungsdaten zusammenfuehren. Das sind meine echten Schmerzpunkte.

Die Erwaehnungen von "HL7, FHIR oder proprietaere KIS-Schnittstelle wie Orbis, SAP IS-H oder iMedOne" zeigen, dass jemand sich mit Gesundheitssystemen beschaeftigt hat. Aber Orbis und IS-H sind Krankenhaussysteme. Ich brauche jemanden, der CGM Medistar oder Turbomed kennt. Kein Dealbreaker, aber es verstaerkt den Eindruck: das Beispiel ist fuer Kliniken, nicht fuer Praxen.

Der CTA am Ende ("30 Minuten fuer Gesundheitswesen") ist gut. Nicht aggressiv, konkret genug. "30 Minuten" ist eine Angabe, mit der ich was anfangen kann.

## 3. Preise-Seite

Das ist neu -- und das ist ein grosser Schritt nach vorne.

Drei Pakete: Betrieb (2.500 Euro/Monat), Betrieb + Werkstatt (4.500 Euro/Monat), Betrieb + Builder (7.500 Euro/Monat). Ich kann sofort einordnen, wo wir waeren: wahrscheinlich "Betrieb" oder "Betrieb + Werkstatt". Wir haben kein internes IT-Team, das selbst baut, also ist Builder erstmal raus.

Die Preise sind hoeher als ich erwartet haette, aber nicht unrealistisch. 2.500 Euro im Monat fuer drei produktive Automationen -- wenn eine davon unser Befundproblem loest, rechnet sich das nach zwei Monaten. Die Frage ist: was zaehlt als "Automation"? Befund-Routing, Terminabgleich, Abrechnungszusammenfuehrung -- sind das drei Automationen oder eine? Das muesste klarer sein.

"Bis 5.000 Geschaeftsfaelle/Monat" -- bei fuenf Praxen mit zusammen ca. 400 Patienten pro Woche kommen wir wahrscheinlich hin. Aber ich muesste nachrechnen. Was zaehlt als Geschaeftsfall? Die Preislogik unten erklaert es: "ein abgeschlossener Prozesslauf -- ein verarbeitetes Dokument, ein Sync-Lauf, eine automatisierte Entscheidung." Okay, das ist verstaendlich.

Die Launch-Kosten (ab 12.000 Euro fuer Betrieb) sind der Punkt, wo ich schlucke. Das ist ein Budget, das ich bei der Geschaeftsfuehrung begruenden muss. Der Hinweis "Fuer Erstkunden: Launch im Jahresvertrag integrierbar -- kein separates Budget noetig. Beispiel: Betrieb all-in ab 3.500 Euro/Monat" ist clever. Das kann ich besser verkaufen als eine einmalige Investition plus laufende Kosten.

Gut finde ich: "Kein Feature-Gating. Der Unterschied zwischen den Paketen ist Zugang und Befaehigung, nicht Funktionalitaet." Das ist eine klare Aussage.

Die Add-ons-Tabelle ist transparent und uebersichtlich. Ich sehe sofort, was mehr kostet. Kein Kleingedrucktes, keine Ueberraschungen.

**Was fehlt:** Ein konkretes Rechenbeispiel fuer eine Praxis oder einen Verbund. "Praxisverbund mit 5 Standorten, 3 Automationen, Jahresvertrag: so sieht das aus." Das wuerde mir helfen, intern zu argumentieren.

## 4. Kontakt-Seite

Einfach, klar, funktional. Formular mit Name, E-Mail, Nachricht. Daneben: E-Mail, Telefon, LinkedIn, Web.

Positiv: Telefonnummer ist direkt da. Kein "vereinbaren Sie einen Termin ueber Calendly". Ich kann einfach anrufen. Das ist fuer mich als Praxismanager, der zwischen zwei Standorten pendelt, wichtig.

Was mich stoert: "Schreib mir." Und dann steht da eine Person: Sebastian Breitzke, s16e.de. Es ist immer noch eine Person. Kein Unternehmen, kein Team, kein Impressum mit Firmenname und Haftung. Fuer mich als jemand, der ueber Patientendaten redet, ist das ein Problem. Ich brauche mindestens eine GmbH, eine AV-Vertrag-Bereitschaft und irgendeine Form von Haftung. "Schreib mir" klingt sympathisch, aber nicht wie jemand, mit dem ich einen Vertrag ueber 30.000 Euro Jahresvolumen mache.

Das `mailto:`-Formular ist technisch auch... naja. Es oeffnet meinen E-Mail-Client, statt die Nachricht direkt zu senden. Das wirkt provisorisch. Bei den Preisen, die auf der Preise-Seite stehen, erwarte ich ein Formular, das funktioniert.

## 5. Branchen-Seite

Das ist auch neu und beantwortet eine meiner Fragen aus Round 1: ist das wirklich branchenuebergreifend?

"Fachwerk ist nicht branchenspezifisch." -- okay, das ist eine mutige Aussage. Die Erklaerung dahinter ist gut: "Fachwerk baut deine Software -- massgeschneidert, integriert, automatisiert. Das funktioniert ueberall, wo Systeme nicht miteinander reden und Menschen Daten von A nach B tragen." Das trifft meine Situation praezise.

Die drei Karten (Integration, Automatisierung, Oberflaechen) sind verstaendlich und nuetzlich. "Dein ERP spricht nicht mit deinem CRM?" -- bei mir ist es "dein PVS spricht nicht mit deinem Radiologie-System", aber das Prinzip ist dasselbe.

Die Beispiel-Liste unten zeigt Gesundheitswesen: "Befunde routen, kritische Werte eskalieren, Stationsuebersicht." Das ist eine knappe, aber zutreffende Zusammenfassung. Was fehlt: die ambulante Seite. "Terminplanung ueber Standorte, Befundaustausch zwischen Praxen, Abrechnungszusammenfuehrung" -- mein Dreiklang taucht nirgends auf.

"Du beschreibst. Fachwerk baut." -- der Abschnitt am Ende. In meinen Worten, ohne technisches Wissen. Wenn das stimmt, waere das genau richtig. Aber nach wie vor: ich muss das glauben, bevor ich es sehen kann, und das Vertrauen ist noch nicht da.

"Deine Branche nicht dabei? Genau darum geht es." -- guter Satz. Damit adressieren sie das Problem, dass man sich nicht wiederfindet, elegant. Funktioniert bei mir tatsaechlich.

## 6. Verbesserungen seit Round 1

Einiges hat sich getan:

**Preise-Seite existiert jetzt.** Das war in Round 1 mein groesstes Fragezeichen: "Was kostet das? 'Kein Budget' steht da -- heisst das kostenlos?" Jetzt gibt es konkrete Zahlen, transparente Pakete und sogar einen All-in-Ansatz fuer Erstkunden. Grosser Fortschritt.

**Branchen-Seite existiert jetzt.** Die generische Positionierung wird erklaert. "Nicht branchenspezifisch" als Feature, nicht als Luecke. Das funktioniert besser als erwartet.

**Branchen-Tabs auf der Beispiele-Seite.** Ich muss nicht mehr scrollen und suchen -- ich klicke auf "Gesundheit" und bin da. Spart Zeit, reduziert Absprungrisiko.

**Immer noch offen:**

- **Datenschutz/Compliance im Gesundheitswesen:** Kein einziges Wort zu DSGVO im Praxiskontext, Paragraph 203 StGB, AV-Vertrag, Patientengeheimnis. In der Preise-Seite steht "DSGVO-konform" als Einzeiler im Trust-Absatz, aber das reicht nicht. Fuer mich als jemand mit Patientendaten ist das nach wie vor ein K.O.-Thema.

- **Referenzen/Social Proof:** Null. Keine Kunden, keine Piloten, keine anonymisierten Fallstudien. Die Beispiele sind weiterhin fiktiv (MedVita Klinik). Verstaendlich fuer eine junge Plattform, aber es fehlt mir immer noch die Sicherheit, dass das irgendwo laeuft.

- **Ein-Mann-Betrieb:** Kontaktseite zeigt eine Person. Die Preise-Seite zeigt professionelle Pakete mit Support-SLAs ("innerhalb 24h", "innerhalb 8h"). Wie liefert eine Person das? Das passt nicht zusammen.

- **Ambulanter Fokus fehlt:** Die Gesundheits-Beispiele sind weiterhin Klinik-orientiert (Stationen, Zimmer, Nephrologie). Praxisverbund mit MFAs und Fax-Befunden kommt nicht vor.

- **Kontaktformular ist immer noch `mailto:`:** Bei den Preisen, die jetzt auf der Seite stehen, erwarte ich ein richtiges Formular.

## 7. Gesamturteil

Die Seite ist deutlich besser als in Round 1. Die zwei groessten Luecken -- Preise und Branchenpositionierung -- sind geschlossen. Ich verstehe jetzt, was Fachwerk ist, was es kostet, und warum es branchenuebergreifend funktioniert. Die Beispiele-Seite mit Tabs ist schneller nutzbar. Die Preise sind transparent und realistisch.

Aber der Weg vom "Verstehen" zum "Handeln" ist fuer mich im Gesundheitsbereich immer noch zu weit. Datenschutz ist nicht nice-to-have, es ist Pflicht. Wenn ich meinem Geschaeftsfuehrer vorschlage, Patientendaten durch eine Plattform fliessen zu lassen, die von einer Einzelperson betrieben wird und auf der ganzen Website kein Wort zu Paragraph 203 oder AV-Vertrag steht, werde ich gefragt: "Marc, hast du das geprueft?"

Was mich zum Klicken bringen wuerde:
- Ein Absatz zum Datenschutz im Gesundheitswesen -- nicht legalistisch, aber substantiell
- Eine Referenz, auch anonymisiert ("Praxisverbund, 4 Standorte, Befundzeiten von 48h auf 2h")
- Ein Praxis-Beispiel statt nur Klinik (oder ein Hinweis, dass ambulante Szenarien genauso abgedeckt werden)
- Ein Kontaktformular, das funktioniert, nicht ein mailto:-Link

**Wahrscheinlichkeit, dass ich Kontakt aufnehme: 35-40%.** Das ist besser als die 20-30% aus Round 1. Die Preise-Seite und die Branchen-Seite haben geholfen. Aber solange Datenschutz und Social Proof fehlen, bleibt der Griff zum Telefon unsicher. Ich wuerde wahrscheinlich zuerst die Telefonnummer waehlen und im Gespraech die Compliance-Fragen stellen -- aber nur, wenn mein Kontakt mir vorher bestaetigt, dass der Typ weiss, wovon er redet.
