# Blind Review: Juergen Brandt -- Fertigung

**Persona:** Produktionsleiter, Stahlberg Werke GmbH, 280 MA
**Szenario:** Link von einem Kontakt bekommen

## 1. Erster Eindruck

Sieht erstmal schick aus. Technisch, aufgeraeumt, nicht so ein buntes Marketing-Feuerwerk wie die meisten Softwarebuden. Das Millimeterpapier im Hintergrund, die Monospace-Schrift -- das wirkt eher wie Ingenieur als wie Agentur. Finde ich erstmal sympathisch.

"Baut sich selbst." -- Okay, das ist ein steiler Einstieg. Mein erster Gedanke: Wer baut sich selbst? Was baut sich selbst? Ich musste erstmal scrollen, bis ich verstanden habe, wovon hier ueberhaupt die Rede ist. Die Headline ist mutig, aber fuer mich als Erstkontakt zu kryptisch. Ich bin Produktionsleiter, kein Raetselrater.

Der Untertitel klaert dann auf: "Automatisierungs- und Integrationsplattform". Gut. Aber "gebaut fuer Business-Anwender, nicht Entwickler" -- das klingt erstmal nach Low-Code-Tool, und davon habe ich schon genug gesehen, die am Ende doch wieder die IT brauchen.

## 2. Verstaendnis

Was ich nach dem Lesen beider Seiten verstanden habe:

Fachwerk ist eine Plattform, die Systeme miteinander verbindet und Prozesse automatisiert. Die Besonderheit soll sein, dass man dafuer keinen Entwickler braucht, und dass das System sich quasi selbst baut, wartet und repariert. AI kommt gezielt zum Einsatz, nicht ueberall.

Was ich NICHT verstanden habe:

- Wie genau beschreibe ich als "Business-Anwender" das, was ich brauche? Tippe ich das in natuerlicher Sprache ein? Klicke ich irgendwas zusammen? Gibt es eine Oberflaeche? Davon steht auf der Startseite nichts. Die Beispiel-Seite zeigt fertige Ergebnisse, aber nicht den Weg dorthin.
- "Baut sich selbst" -- heisst das, ich sage "Ich brauche die SPS-Daten im ERP" und dann passiert das einfach? Das waere grossartig, aber ich glaube das nicht, bevor ich es gesehen habe.
- Wo laeuft die Software konkret? Es steht "On-Premise, Cloud, Hybrid" -- aber was heisst das bei mir? Brauche ich einen Server? Einen Docker-Container? Mein IT-Team hat drei Leute, die haben andere Sachen zu tun.
- Was kostet das? Auf der ganzen Seite kein Wort dazu. "Kein Budget" steht da. Soll das heissen, es ist kostenlos? Oder dass ich kein grosses Budget brauche? Das ist unklar.

## 3. Relevanz

Jetzt wird es interessant. Auf der Beispiel-Seite habe ich den Reiter "Fertigung" gefunden. Und da muss ich sagen: Die kennen meine Probleme.

"Temperaturabweichung? Charge gesperrt, ERP informiert." -- Das ist GENAU das, was bei uns fehlt. Unsere Sensordaten an den Linien laufen in ein SCADA-System, aber bis das im SAP landet, ist die Charge laengst weiterverarbeitet. Letzte Woche hatten wir wieder so einen Fall, Rueckverfolgung ueber drei Schichten, hat zwei Tage gedauert.

"Fachwerk laeuft direkt im Werk -- lokal, im Firmennetz, hinter der Firewall. Es spricht mit Maschinen und SPS-Steuerungen, auch ueber aeltere Protokolle wie Raw TCP/IP oder Modbus." -- Das hat mich aufhorchen lassen. Das ist nicht das uebliche Cloud-Gelaber. Wir haben Maschinen fuer 3 Mio, die sprechen Modbus. Da will ich nichts in eine Cloud schieben.

Das Schichtleiter-Dashboard mit "Stahlberg Werke" als Firmenname -- clever gemacht. Das ist natuerlich fiktiv, aber es zeigt, dass die verstehen, was ein Schichtleiter am Band braucht. Nicht 15 Tabs im SAP, sondern: was laeuft, was steht, was muss ich entscheiden. Mit einem Klick Charge freigeben oder QS eskalieren. Das waere eine Welt besser als der Papierzettel, den meine Schichtleiter sich gerade uebergeben.

Die AI-Analyse mit "Abweichung tritt seit dem Werkzeugwechsel in KW 12 auf" -- so etwas wuerden wir manuell nie finden. Wir wuerden tage- oder wochenlang suchen, warum Linie 3 sporadisch aus der Toleranz laeuft, und am Ende war es der Werkzeugwechsel. Das ist der Punkt, wo AI fuer mich nicht Hype ist, sondern Werkzeug.

## 4. Vertrauen

Gemischt.

**Was Vertrauen schafft:**
- Fertigung wird offensichtlich verstanden. Das sind nicht die ueblichen E-Commerce-Leute, die glauben, eine Fabrik sei wie ein Webshop mit Metall.
- "Code wo Code reicht. AI wo AI zaehlt." -- Das ist die richtige Haltung. Meine Sensordaten muessen zuverlaessig ankommen, nicht "meistens, wenn die AI gerade Lust hat".
- On-Premise und Modbus erwaehnen -- das zeigt, dass die wissen, wie es in der echten Fertigung aussieht.
- Die Seite ist technisch sauber, kein Marketing-Blabla, keine Stock-Fotos von Leuten mit Helmen.

**Was mich skeptisch macht:**
- Im Footer steht "Ein Projekt von Sebastian Breitzke". Eine Person? Kein Unternehmen? Wenn das hier auf mein ERP zugreift und meine SPS-Steuerungen anspricht, brauche ich mehr als einen Freelancer. Was passiert, wenn der im Urlaub ist und meine Linie steht?
- Keine Referenzen, keine Fallstudien, keine Kundennamen. Ich sehe schoene Mockups, aber wurde das schon mal in einer echten Fertigung eingesetzt?
- Keine Zertifizierungen erwaehnt. In der Metallverarbeitung gibt es Normen, ISO-Anforderungen, Auditierbarkeit. Davon steht hier nichts.
- Die Versprechen sind sehr gross. "Baut sich selbst, wartet sich selbst, heilt sich selbst" -- wenn das so einfach waere, wuerden das alle machen. Ich bin 52, ich habe schon ein paar Wunderloesungen kommen und gehen sehen.

## 5. Naechster Schritt

Ich wuerde auf "Kontakt aufnehmen" klicken. Aber nicht wegen der Startseite -- wegen dem Fertigungsbeispiel. Mein konkreter Anlass waere: "Wir haben SPS-Daten, die nicht im ERP ankommen, und Qualitaetsprobleme, die wir zu spaet erkennen. Koennt ihr mir in 30 Minuten zeigen, wie das bei euch aussieht?"

Was mich davon abhalten koennte: Wenn die Kontaktseite ein Formular mit 15 Pflichtfeldern ist oder wenn da nur "Wir melden uns" steht. Ich will einen Termin, kein Newsletter-Abo.

Was ich mir wuenschen wuerde als naechsten Schritt: Eine Demo mit echten Daten. Nicht ein weiteres Mockup, sondern: zeigt mir, wie ihr an eine Siemens S7 rangeht und den Wert ins SAP schreibt. Das waere der Moment, wo aus Interesse ein Budget-Gespraech wird.

## 6. Unklarheiten

- **Wie sieht der Einstieg aus?** Kommt jemand vorbei? Brauche ich einen PoC? Was muss mein IT-Team tun?
- **Was kostet das konkret?** Lizenz? SaaS? Pro Maschine? Pro Linie? Pro Standort? "Kein Budget" ist keine Preisauskunft.
- **Welche SPS-Protokolle genau?** Modbus und Raw TCP/IP steht da. Was ist mit OPC-UA? Profinet? S7comm? Wir haben einen bunten Zoo.
- **ERP-Integration:** SAP wird nicht namentlich erwaehnt. Kann Fachwerk mit SAP sprechen? Ueber welche Schnittstelle -- RFC, IDoc, REST?
- **Datensicherheit:** Wo liegen meine Produktionsdaten? Wer hat Zugriff? Kann die AI meine Daten sehen, die ich nicht teilen will?
- **Ausfallsicherheit:** Wenn Fachwerk ausfaellt, laeuft meine Linie dann weiter? Oder steht alles?
- **Skalierung:** Wir haben 4 Linien an einem Standort. Was wenn wir auf 12 Linien an 3 Standorten gehen?
- **Team hinter dem Produkt:** Wer ausser Sebastian Breitzke arbeitet daran? Gibt es ein Team, einen Support, eine Roadmap?

## 7. Gesamturteil

Die Seite hat mich naeher drangebracht als 90% der Software-Webseiten, die ich normalerweise sehe. Der Fertigungsbereich auf der Beispielseite trifft meine echten Probleme -- SPS-Daten, Qualitaetssicherung, Schichtuebergabe. Das ist nicht aus dem Lehrbuch, das kommt von jemandem, der versteht, was in einer Halle passiert.

Aber zwischen "die verstehen mein Problem" und "die kriegen das bei uns installiert" ist noch eine Luecke. Die Startseite ist zu abstrakt fuer mich. "Baut sich selbst" ist ein Versprechen, das ich erstmal als Marketing einordne, bis mir jemand das Gegenteil beweist. Die Beispielseite dagegen hat konkrete Substanz -- die wuerde ich als Einstieg bevorzugen.

Was fehlt, ist der Beleg: Wer hat das schon im Einsatz? Was war das Ergebnis? Und vor allem: Wer steht dahinter, wenn es um 3 Mio Euro Maschinen geht und nicht um einen Webshop?

Ich rufe den Kontakt an, der mir den Link geschickt hat, und frage: "Kennst du die? Haben die das schon mal gemacht?" Wenn ja, klicke ich auf Kontakt. Wenn nein, speichere ich mir die Seite und schaue in einem halben Jahr nochmal.

**Kurz:** Guter Inhalt, richtiger Nerv getroffen bei Fertigung. Aber fuer eine Investitionsentscheidung brauche ich mehr als schoene Mockups -- ich brauche Beweise.
