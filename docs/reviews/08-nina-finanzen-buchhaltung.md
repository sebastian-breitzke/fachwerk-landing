# Blind Review: Nina Berger — Finanzbuchhaltung

**Persona:** Leiterin Finanzbuchhaltung, Norddeutsche Handelsgruppe, 200 MA
**Szenario:** Link von einem Kontakt bekommen

## 1. Erster Eindruck

Die Seite sieht technisch und sauber aus. Fast ein bisschen zu technisch — "Baut sich selbst" als Headline sagt mir als Buchhalterin erstmal gar nichts. Ich denke an Software-Entwicklung, nicht an mein Problem mit 200 Lieferantenrechnungen. Das Millimeterpapier-Design und die Monospace-Schrift verstärken den Eindruck: das ist von Entwicklern für Entwickler gemacht. Dabei steht weiter unten "Gebaut für Business, nicht für Entwickler" — aber das merke ich erst, wenn ich weiterscrolle. Und ob ich das tue, ist die Frage.

Der Subtext unter der Headline hat mich dann doch gehalten: "Automatisierungs- und Integrationsplattform" — das ist schon eher meine Sprache. "Business-Anwender, nicht Entwickler" — okay, ich lese weiter.

## 2. Verständnis

Ich habe nach dem Lesen beider Seiten verstanden: Fachwerk soll Prozesse automatisieren, die heute manuell laufen. Es gleicht Daten zwischen Systemen ab, handelt automatisch wenn alles passt, und eskaliert mit Kontext wenn nicht. Die AI kommt nur dort zum Einsatz, wo sie Mehrwert bringt.

Was ich konkret verstanden habe:
- Eingangsrechnungen werden automatisch mit Bestellung und Lieferschein abgeglichen (das Finanzen-Beispiel trifft exakt meinen Alltag)
- Bei Abweichungen wird ein Klarungsfall mit vollständigem Kontext erstellt
- Wiederkehrende Muster bei Lieferanten werden erkannt (das mit den nicht vereinbarten Frachtkosten — das kenne ich von mindestens drei unserer Lieferanten)
- Es gibt eine Art Freigabe-Board statt dem heutigen Springen zwischen SAP, Mail und Excel

Was ich nicht verstanden habe: Wie kommt Fachwerk an meine Daten? Liest es meine Mails? Hängt es an SAP? Braucht es Schnittstellen, die erst gebaut werden müssen? Das bleibt komplett offen.

## 3. Relevanz

Hoch — das Finanzen-Beispiel beschreibt fast 1:1 meinen Alltag. Dreifach-Abgleich per Hand, Abweichungen die niemand trackt, Rückfragen per Mail ohne System. Mein Team verbringt geschätzt 60% der Zeit mit dem manuellen Abgleich von Bestellung, Lieferschein und Rechnung. Bei 200 Lieferanten und hunderten Rechnungen pro Monat ist das ein Vollzeitjob nur fürs Vergleichen.

Der Punkt mit den wiederkehrenden Abweichungen hat mich am meisten angesprochen. Wir haben Lieferanten, die seit Monaten Positionen abrechnen, die nicht vereinbart sind. Das fällt einzeln nicht auf, weil jede Rechnung für sich bearbeitet wird. Die 568 Euro aus dem Beispiel — bei uns sind das vermutlich fünfstellige Beträge pro Jahr, die wir nicht systematisch erkennen.

Auch der Monatsabschluss wäre relevant. Wenn der Rechnungseingang automatisiert läuft und Klärungsfälle sofort bearbeitet statt gesammelt werden, könnte ich mir vorstellen, dass wir die 8 Tage deutlich reduzieren. Aber das wird nirgends direkt adressiert.

## 4. Vertrauen

Gemischt. Die Beispiele sind konkret und glaubwürdig — kein Marketing-Blabla, sondern Szenarien die ich wiedererkennen kann. Die Trennung zwischen Automatisierung und optionaler AI-Analyse gefällt mir. Ich will nicht, dass eine AI meine Rechnungen freigibt. Aber dass sie mir sagt "dieser Lieferant rechnet seit drei Monaten Frachtkosten ab, die nicht vereinbart waren" — das ist hilfreich.

Was mein Vertrauen senkt:

- **Kein Wort zu SAP.** Wir arbeiten mit SAP. Jede Software, die in meiner Welt relevant sein will, muss mit SAP reden können. Das wird nirgends erwähnt. Nicht auf der Startseite, nicht bei den Beispielen. Unter "Läuft wo du es brauchst" steht On-Premise, Cloud, Hybrid — aber kein Wort zu konkreten Systemen.

- **Kein Pricing.** "Kein Budget" steht auf der Startseite. Was heißt das? Ist es kostenlos? Gibt es eine Testphase? Ich kann nicht zu meinem Geschäftsführer gehen und sagen "die Website sagt, wir brauchen kein Budget." Der will eine Zahl.

- **Kein einziger Referenzkunde.** Kein Erfahrungsbericht, keine Branche, kein "im Einsatz bei X Unternehmen". Die Beispiele sind fiktiv (NordWare, Grünfeld & Partner, Stahlberg Werke). Für eine Leiterin Finanzbuchhaltung, die nachweisen muss dass eine Investition sich lohnt, ist das zu dünn.

- **Ein Projekt von Sebastian Breitzke.** Das steht im Footer. Eine Person. Keine GmbH, kein Team, keine Firma. Wer macht den Support, wenn es Probleme gibt? Wer garantiert, dass das System morgen noch läuft? Bei einer Finanzbuchhaltung geht es um buchhalterische Korrektheit und Revisionssicherheit — das kann ich nicht von einem Solo-Projekt abhängig machen.

- **Datenschutz und Compliance.** Rechnungsdaten, Lieferantendaten, Bestelldaten — das ist hochsensibel. Es gibt keinen Hinweis auf Zertifizierungen, DSGVO-Konformität bei AI-Verarbeitung, oder wo meine Daten verarbeitet werden. Für GoBD-relevante Prozesse brauche ich Nachweise.

## 5. Nächster Schritt

Ich würde auf "Kontakt aufnehmen" klicken — aber mit einer konkreten Frage, nicht als Kaufinteressentin. Meine Fragen wären:

1. Funktioniert Fachwerk mit SAP ERP (bzw. S/4HANA)?
2. Was kostet es — monatlich, pro Nutzer, pro Transaktion?
3. Wer steht dahinter, gibt es ein Team oder ist das eine Ein-Mann-Operation?
4. Gibt es einen Referenzkunden im Bereich Finanzbuchhaltung?
5. Wie sieht es mit GoBD-Konformität und Revisionssicherheit aus?
6. Wo werden meine Rechnungsdaten verarbeitet, speziell bei der AI-Analyse?

Wenn ich auf die Kontaktseite komme und da steht nur ein Formular ohne Telefonnummer, würde mich das weiter bremsen. Ich will nicht zwei Wochen auf eine Mail warten.

## 6. Unklarheiten

- **Was genau ist Fachwerk technisch?** Eine Software die ich installiere? Ein Cloud-Service? Eine Plattform auf der jemand etwas für mich konfiguriert? "Baut sich selbst" klingt, als würde die Software sich selbst zusammenbauen — aber wer startet den Prozess? Muss ich etwas beschreiben? In einem Chat? In einem Formular?
- **"Kein Code schreiben, kein technisches Vorwissen nötig"** — das klingt gut, aber wie beschreibe ich dann meinen Dreifach-Abgleich-Prozess? Rede ich mit einer AI? Klicke ich etwas zusammen? Wird mir das vorgefertigt geliefert?
- **On-Premise vs. Cloud:** Unsere IT (2 Leute) hat keine Kapazität für eine lokale Installation und Wartung. Gleichzeitig will mein Geschäftsführer nichts in der Cloud. Diese Spannung wird nicht aufgelöst.
- **Skalierung und Grenzen:** 200 Lieferanten, tausende Rechnungen pro Jahr. Schafft Fachwerk das? Gibt es Volumengrenzen?
- **Wie funktioniert die "automatische Freigabe"?** Bei uns braucht jede Rechnung ab 500 Euro eine Freigabe durch den Abteilungsleiter. Kann Fachwerk solche Regeln abbilden? Oder gibt es nur die Automatik "Match = Freigabe"?
- **Das Freigabe-Board im Beispiel** zeigt "Grünfeld & Partner" — das klingt nach einer Kanzlei oder Beratung, nicht nach einem Handelsunternehmen mit 200 Mitarbeitern. Das Beispiel ist nah dran, aber nicht exakt meine Welt.

## 7. Gesamturteil

Die Seite hat mich inhaltlich abgeholt — speziell das Finanzen-Beispiel auf der Beispiele-Seite. Der automatische Dreifach-Abgleich und die Mustererkennung bei Lieferantenabweichungen sind genau die Probleme, die mich jeden Tag Zeit kosten. Die Idee, dass nicht alles über AI läuft, sondern der Großteil harter Code ist und AI nur als Eskalationsstufe kommt, finde ich überraschend vernünftig für eine Seite die AI im Programm hat.

Aber: Für eine Entscheiderin in der Finanzbuchhaltung fehlen mir die harten Fakten. Kein Preis, keine Referenzen, keine SAP-Erwähnung, keine Compliance-Aussage, keine erkennbare Unternehmensstruktur. Die Seite erzeugt Interesse, aber nicht genug Vertrauen für einen konkreten nächsten Schritt jenseits einer unverbindlichen Kontaktaufnahme.

Ich würde den Link nicht an meinen Geschäftsführer weiterleiten — noch nicht. Dafür bräuchte ich: einen Preis, einen Referenzkunden, und eine klare Aussage zu SAP und Compliance. Ich würde aber selbst Kontakt aufnehmen, weil das Problem real genug ist, um nachzufragen.

**Kernaussage:** Interessant, trifft mein Problem, aber zu vage für jemanden der Zahlen und Nachweise braucht.
