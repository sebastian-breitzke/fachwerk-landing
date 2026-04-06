# Blind Review Round 2: Juergen Brandt -- Fertigung
**Persona:** Produktionsleiter, Stahlberg Werke GmbH, 280 MA

## 1. Erster Eindruck (Startseite)

Die Seite sieht immer noch sauber aus. Technisch, aufgeraeumt, kein Marketing-Zirkus. Die Animation rechts neben der Headline -- das Fachwerk-Logo, das sich Stueck fuer Stueck zusammenbaut -- ist eine nette Idee. Passt zur Botschaft "Baut sich selbst", ohne aufdringlich zu sein.

"Baut sich selbst." -- Beim zweiten Mal lande ich schneller beim Kern, aber ich bleibe dabei: Fuer einen Erstkontakt ist das zu kryptisch. Wenn mir jemand den Link schickt und ich hab 30 Sekunden, dann muss ich sofort verstehen, was das hier ist. Der Untertitel klaert es dann ("Automatisierungs- und Integrationsplattform"), aber der Weg dahin kostet mich einen Moment, den ich nicht immer habe.

Positiv veraendert: Die Sektion "Laeuft wo du es brauchst" mit On-Premise, Cloud, Hybrid, hinter der Firewall. Das war letztes Mal eine meiner Hauptfragen -- wo laeuft das Ding? Jetzt steht es klar drin, und zwar ohne Migration und ohne Vendor-Lock-in. Fuer mich als Produktionsleiter mit Maschinen im Firmennetz ist das eine der wichtigsten Aussagen auf der ganzen Seite.

"Code wo Code reicht. AI wo AI zaehlt." -- Immer noch der Satz, der mich am meisten anspricht. Ich will keine AI, die meine SPS-Daten "interpretiert". Ich will zuverlaessigen Code, der die Daten zuverlaessig ins ERP schreibt. Und AI nur da, wo sie wirklich hilft -- Mustererkennung, Korrelation, sowas. Genau das steht hier.

Was mir fehlt: Irgendein Anhaltspunkt, dass das schon mal funktioniert hat. Ein Satz wie "im Einsatz bei X Unternehmen" oder ein Logo. Muss nicht viel sein. Aber "Baut sich selbst" plus null Referenzen ergibt bei mir immer noch: klingt gut, beweist nichts.

## 2. Beispiele-Seite

Hier wird es fuer mich wieder konkret. Die Tab-Navigation mit den Branchen ist praktisch -- ich klicke auf Fertigung und bin sofort in meiner Welt.

**Flow-Beispiel:** "Temperaturabweichung? Charge gesperrt, ERP informiert." -- Das ist nach wie vor genau mein Problem. Letzte Woche hatten wir wieder einen Fall, Linie 3, Temperatur aus der Toleranz, und bis das jemand im SAP gesehen hat, waren drei Chargen weiter. Die Darstellung hier trifft den Nerv: Messwert, Soll-Bereich, Charge gesperrt, QS informiert. Das ist genau der Ablauf, den ich mir wuensche.

Die Erwaehnung von Raw TCP/IP und Modbus bleibt ein starkes Signal. Wer Modbus erwaehnt, kennt echte Fertigungsumgebungen, nicht nur die PowerPoint-Version davon.

"Fachwerk laeuft direkt im Werk -- lokal, im Firmennetz, hinter der Firewall." -- Das ist auf der Startseite jetzt auch drin, und auf der Beispiele-Seite nochmal im Fertigungskontext. Gut. Kann man nicht oft genug sagen.

Die AI-Analyse mit "Abweichung seit Werkzeugwechsel KW 12" -- das waere fuer uns Gold wert. Wir suchen manchmal tagelang nach der Ursache einer Drift, und am Ende war es eine Kleinigkeit. Dass die AI hier als optionale Eskalation positioniert wird und nicht als Kernfunktion, macht es fuer mich glaubwuerdig.

**Schichtleiter-Dashboard (StahlbergWerke-Mockup):** Immer noch gut gemacht. Vier Linien, klare Status-Anzeige, Aktionen direkt dran. "Freigeben" und "QS eskalieren" fuer die gesperrte Linie 3, "Verschieben" und "Bestaetigen" fuer die geplante Wartung an Linie 4. Das ist genau das, was mein Schichtleiter am Tablet braucht. Nicht SAP-Transaktionen aufrufen, sondern: ein Knopf, eine Entscheidung.

Der Footer zeigt "Live -- SPS & ERP verbunden" und "Halle 2 -- Tablet T-041". Das ist ein Detail, das zeigt: Die denken an die Halle, nicht ans Buero. Der gruene Punkt pulsiert, als wuerde es live sein. Fuer ein Mockup vielleicht zu viel Inszenierung, aber es transportiert die Idee.

**Was besser geworden ist:** Die Texte sind konkreter als in meiner Erinnerung. "Ob SAP, proALPHA oder euer Branchen-ERP" -- das haette ich letztes Mal kritisiert, dass SAP nicht namentlich erwaehnt wird. Jetzt steht es drin. Gut.

**Was immer noch fehlt:** Ich will wissen, wie die an meine Siemens S7 rangehen. OPC-UA? S7comm? Das Protokoll-Thema bleibt vage bei "Raw TCP/IP und Modbus". Fuer ein erstes Gespraech reicht das. Fuer eine ernsthafte Evaluation nicht.

## 3. Preise-Seite

Das ist neu. Beim letzten Mal gab es keine Preisseite, und das war einer meiner Hauptkritikpunkte. "Kein Budget" auf der Startseite ohne jede Preisindikation -- das war fuer mich ein Vertrauens-Killer.

Jetzt gibt es drei Pakete:
- Betrieb: 2.500 EUR/Monat fuer bis zu 3 Automationen und 5.000 Geschaeftsfaelle
- Betrieb + Werkstatt: 4.500 EUR/Monat mit Werkstatt-Zugang fuer kleinere Aenderungen
- Betrieb + Builder: 7.500 EUR/Monat fuer volle Build-Rechte

Dazu Launch-Kosten: ab 12.000 EUR fuer Betrieb, ab 25.000 EUR fuer Werkstatt, ab 40.000 EUR fuer Builder.

Meine ehrliche Reaktion: Fuer das, was versprochen wird -- SPS-Anbindung, ERP-Integration, Qualitaetssicherungs-Automatisierung, Schichtleiter-Dashboard -- sind 2.500 bis 4.500 EUR im Monat nicht unvernuenftig. Wir zahlen fuer manchen SAP-Berater mehr pro Woche. Und der Launch ab 12.000 EUR ist ein ueberschaubares Risiko fuer einen PoC.

Was mir gefaellt: Die Preislogik-Sektion am Ende. "Abgerechnet wird nach Geschaeftsfaellen, nicht nach Tokens oder Features." Das ist ehrlich. Und: "Kein Feature-Gating. Der Unterschied zwischen den Paketen ist Zugang und Befaehigung, nicht Funktionalitaet." Das ist ein guter Satz. Kein kuenstliches Zurueckhalten von Features, um die naechsthoehere Stufe zu verkaufen.

Der Hinweis "Fuer Erstkunden: Launch im Jahresvertrag integrierbar -- kein separates Budget noetig. Beispiel: Betrieb all-in ab 3.500 EUR/Monat" -- clever. Das loest mein Problem, dass ich fuer ein Launch-Projekt ein separates Investitionsbudget brauche. Wenn das in die laufenden Kosten integriert wird, kann ich das aus dem Betriebsbudget finanzieren.

Was mir fehlt: Eine klarere Zuordnung, welches Paket fuer wen typisch ist. Ja, es steht "Typisch fuer: Teams mit kritischen Prozessen" beim Betrieb-Paket, aber fuer meine Situation -- 4 Linien, SPS-Anbindung, SAP-Integration -- wuerde ich gerne wissen, ob ich mit 3 Automationen auskomme oder ob das 7 oder 10 werden. Ein Rechenbeispiel waere hilfreich.

## 4. Kontakt-Seite

Kein Formular mit 15 Pflichtfeldern -- das war letztes Mal meine Sorge. Name, E-Mail, Nachricht. Drei Felder. Gut.

Daneben steht direkt: E-Mail, Telefon, LinkedIn, Web. Die Telefonnummer ist eine Mobilnummer -- das zeigt mir, dass da ein Mensch drangeht, kein Call-Center. Fuer den Erstkontext finde ich das gut. Fuer eine laengere Geschaeftsbeziehung wuerde ich mir irgendwann eine Firmennummer wuenschen, aber fuer den Einstieg passt es.

Was fehlt: Die Moeglichkeit, direkt einen Termin zu buchen. Calendly, Cal.com, irgendwas. "30 Minuten fuer Fertigung" steht auf der Beispiele-Seite als CTA -- aber wenn ich darauf klicke, lande ich auf dem Kontaktformular und muss erstmal schreiben. Ich will klicken und einen Termin haben. Huerden minimieren.

Auch fehlt ein Hinweis auf Reaktionszeit. Wenn ich das Formular abschicke -- melde sich jemand in 24 Stunden? In einer Woche? Das "mailto:" im Quellcode sagt mir, dass das eine direkte Mail wird. Okay, aber dann kommuniziert das auch so.

## 5. Branchen-Seite

Neu seit Round 1. "Fachwerk ist nicht branchenspezifisch." -- Das ist die richtige Positionierung. Nicht noch ein Branchen-Tool, sondern eine Plattform, die sich anpasst.

Die drei Saeulen -- Integration, Automatisierung, Oberflaechen -- sind klar aufgebaut. Jede erklaert in zwei Saetzen, was Fachwerk da tut. Keine Buzzwords, sondern konkretes Handwerk: "Dein ERP spricht nicht mit deinem CRM? [...] egal ob SAP, DATEV, Shopify, Salesforce oder deine selbstgebaute Access-Datenbank." Der Access-Datenbank-Zusatz bringt mich zum Schmunzeln -- wir haben tatsaechlich noch eine fuer die Werkzeugverwaltung.

Die Branchen-Beispiele listen Fertigung mit "SPS-Daten ins ERP, Qualitaetsprobleme sofort erkennen, Schichtuebergabe digital" -- das sind meine drei Kernprobleme in einem Satz. Gut getroffen.

"Du beschreibst. Fachwerk baut." -- Immer noch die Frage: Wie genau beschreibe ich? Tippe ich ein "Ich brauche die SPS-Daten im ERP" und dann passiert es? Die Beispiele-Seite zeigt Ergebnisse, aber den Weg dahin sehe ich nirgends. Ein kurzer Prozess-Abriss wuerde helfen: Discovery, Build, Handover -- das steht auf der Preisseite bei den Launch-Kosten, aber hier auf der Branchen-Seite kommt es nicht vor.

"AI schreibt den Code. AI ist nicht der Code." -- Guter Satz. Das macht den Unterschied klar zwischen "die AI entscheidet was passiert" (wuerde mich abschrecken) und "die AI baut die Loesung, aber was deployed wird, ist nachvollziehbar und testbar" (damit kann ich leben).

## 6. Verbesserungen seit Round 1

Was in Round 1 fehlte und jetzt da ist:

- **Preisseite:** War nicht vorhanden. Jetzt mit drei klaren Paketen, Launch-Kosten und Add-Ons. Das war mein groesster Kritikpunkt, und er ist geloest.
- **Branchen-Seite:** Gab es nicht. Jetzt eine eigene Seite, die erklaert, warum Fachwerk branchenunabhaengig funktioniert. Hilft bei der Einordnung.
- **On-Premise prominent:** War in Round 1 nur am Rande erwaehnt. Jetzt eine eigene Sektion "Laeuft wo du es brauchst" mit klarem Statement: On-Premise, Cloud, Hybrid, hinter der Firewall, ohne Migration.
- **SAP namentlich erwaehnt:** War letztes Mal nicht der Fall. Jetzt auf der Beispiele-Seite ("ob SAP, proALPHA oder euer Branchen-ERP") und auf der Preisseite ("SAP, DATEV, Salesforce, Shopify").
- **Preistransparenz statt "Kein Budget":** "Kein Budget" steht immer noch auf der Startseite, aber jetzt gibt es eine Preisseite, die das einordnet. Das Versprechen ist: kein separates Investitionsbudget noetig, weil der Launch in den Jahresvertrag integriert werden kann. Das ist ein valider Punkt.

Was in Round 1 fehlte und immer noch fehlt:

- **Referenzen/Fallstudien:** Null. Keine Kundennamen, keine Logos, kein "im Einsatz seit...". Das bleibt das groesste Vertrauensproblem.
- **Team hinter dem Produkt:** Immer noch "Ein Projekt von Sebastian Breitzke". Eine Person. Kein Wort ueber ein Team, eine Firma, eine Struktur. Wenn ich mein ERP und meine SPS anbinde, brauche ich die Gewissheit, dass das nicht an einer Person haengt.
- **Protokoll-Details:** Modbus und Raw TCP/IP erwaehnt. OPC-UA, Profinet, S7comm -- Fehlanzeige. Fuer eine Landingpage reicht das vielleicht. Aber fuer mich als Techniker, der weiss, was in seiner Halle steht, waere mehr Tiefe ein starkes Signal.
- **Ausfallsicherheit / Architektur:** Was passiert, wenn Fachwerk ausfaellt? Laeuft meine Linie weiter? Keine Aussage dazu.
- **Demo/PoC-Angebot:** Ich will sehen, wie das funktioniert. Nicht noch ein Mockup. Ein konkretes Angebot: "Wir zeigen dir in 30 Minuten deine SPS-Daten im Dashboard." Das fehlt.
- **Termin-Buchung:** Kontaktseite ist gut, aber ein Kalender-Link fuer direkte Terminbuchung waere eine deutliche Verbesserung.

## 7. Gesamturteil

Klarer Fortschritt gegenueber Round 1. Die Seite hat jetzt eine Preisseite, eine Branchen-Seite, und die On-Premise-Positionierung ist deutlich prominenter. Fuer mich als Produktionsleiter sind das die drei wichtigsten Verbesserungen.

Das Fertigungsbeispiel auf der Beispiele-Seite bleibt das staerkste Asset der ganzen Website. Wer das geschrieben hat, versteht, was in einer Halle passiert. Das StahlbergWerke-Dashboard transportiert genau die richtige Idee: wenige Informationen, klare Entscheidungen, am Band statt im Buero.

Die Preise sind nachvollziehbar. 2.500 EUR im Monat fuer laufenden Betrieb, Launch ab 12.000 EUR -- das ist ein kalkulierbares Risiko. Kein Vergleich mit einem 200.000 EUR MES-Projekt, das zwei Jahre dauert und am Ende trotzdem nicht an die SPS angebunden ist.

Was die Seite immer noch nicht schafft: mir das Vertrauen zu geben, dass das hier mehr ist als ein gutes Konzept. Keine Referenzen, keine Firma hinter dem Produkt, keine Demo. Ich bin naeher dran als beim letzten Mal, aber die Luecke zwischen "die verstehen mein Problem" und "die koennen das bei uns liefern" bleibt.

Mein naechster Schritt waere jetzt: Kontaktformular ausfuellen, Nachricht: "Wir sind Metallverarbeitung, 280 MA, 4 Linien, SPS ueber Modbus und S7, ERP ist SAP. SPS-Daten kommen nicht ins ERP, Qualitaetsprobleme erkennen wir zu spaet. Koennen wir reden?" Dann haengt alles davon ab, wie schnell und wie konkret die Antwort kommt.

**Kurz:** Deutlich besser als Round 1. Die Substanz war schon da, jetzt kommen Preistransparenz und Struktur dazu. Fuer eine Kontaktaufnahme reicht es. Fuer eine Investitionsentscheidung brauche ich immer noch einen Beweis -- eine Demo, eine Referenz, irgendetwas Greifbares.
