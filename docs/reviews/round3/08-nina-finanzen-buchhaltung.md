# Nina Berger — Leiterin Finanzbuchhaltung (Norddeutsche Handelsgruppe)

**Erster Eindruck (30 Sekunden):**
Das Wording ist ungewohnt für eine Software-Seite — „Rohbau", „Statik", „Fachwerk". Ich verstehe die Metapher, aber ich brauche 20 Sekunden, bis ich geschnallt habe, dass es eigentlich um Integrationen und Automatisierung geht. Der Hero spricht nicht zu mir, sondern zu jemandem, der sich mit Low-Code und Vibe-Coding beschäftigt — das sind nicht meine Wörter. Positiv: ich sehe sehr schnell „SAP" und „DATEV" im Marquee und im Flow-Beispiel — das erdet mich. Und dass es einen eigenen Finanzen-Case gibt, lässt mich weiter scrollen.

**Was landet:**
- 3-Wege-Match explizit benannt — das ist mein Tagesgeschäft, und es steht genau so da, wie ich es im Kopf habe (Bestellung, Lieferschein, Rechnung).
- GoBD-konform wird genannt. Kein beiläufiges „compliant", sondern das richtige Label. Macht bei mir einen Unterschied.
- „Klärungsfall mit vollem Kontext, Lieferantenhistorie, Empfehlung" — das ist exakt das, was bei uns fehlt. Wir stapeln Klärungsfälle bis zum Monatsabschluss, weil keiner weiß, was der Lieferant beim letzten Mal gesagt hat.
- Auditierbar mit Revisionspfad — richtige Vokabel, nicht aufgeblasen.
- Mockup des Freigabe-Boards: realistisch aufgebaut. Rechnungsnummer, Lieferant, Betrag, Match-Zeilen mit ✓ / Δ, Abweichung in % und € — so sieht ein Freigabe-Screen bei uns aus, wenn er funktioniert. 0,4 % Preisabweichung auf Position 3 mit +56,88 € ist ein Detail, das mir zeigt: die haben verstanden, worum es geht.
- Der Flow „Eingangsrechnung prüfen" mit IMAP → LLM-Extraktion → SAP-Abfrage 3-Way-Match → LLM-Abweichungsbewertung → SAP-Posting ist plausibel. Deterministisch wo gebucht wird, AI wo interpretiert wird — das ist die richtige Aufteilung. Ich würde das so unterschreiben.
- „On-Premise" und „Cloud" nebeneinander — wichtig. Unsere IT wird nichts freigeben, was Rechnungsdaten ungefragt in die Cloud schiebt.

**Was verwirrt / geht vorbei:**
- Die ganze obere Hälfte der Seite (Hero, Problem, Plattform, Sackgassen, AI+Code, Katalog-statt-Zoo) ist für mich als Fachbereich irrelevantes IT-Rauschen. „Werkstatt, Katalog, Betrieb, Speicher, Wissen" — ich weiß nach dem Lesen immer noch nicht, was davon meine Buchhaltung betrifft. Das ist Sprache für IT-Leiter, nicht für mich.
- „Insel-Zoo", „Vibe Coding", „Rohbau gibt die Statik vor" — ich springe über die Metapher-Passagen hinweg. Irgendwann frage ich mich, ob ich überhaupt auf der richtigen Seite bin.
- Der Pricing-Sprung ist mein Hauptproblem. Core endet bei 80 Mio. Umsatz, Platform startet bei 80 Mio. Wir liegen bei ~100 Mio. Also Platform — aber die Beschreibung „Konzern-nah, Multi-Site, On-Premise, 10+ Automationen, Advisory" klingt größer als wir sind. Wir sind eine Firma, ein Standort, ein SAP, wollen erstmal einen Use-Case lösen. 80–150k Launch-Fee + 15–35k/Monat (also 180–420k/Jahr Subscription) ist für „wir wollen den Rechnungseingang automatisieren" zu viel. Ich hätte gern verstanden, wo ich da reinpasse, ohne vom Start weg ins Platform-Paket gezwungen zu werden.
- „Ein bezahlter 6-Wochen-Proof-of-Value ist auf die Launch-Fee voll anrechenbar" — gute Idee, aber ich sehe nirgends, was der PoV kostet. 15k? 40k? Ohne Zahl kann ich das nicht intern vertreten.
- SAP Business One wird nicht explizit genannt. Es steht „SAP", „SAP-Call", „SAP-Posting" — ich weiß aber nicht, ob ihr B1 schon angebunden habt oder nur S/4 und ECC. Das ist ein harter Entscheidungsfaktor.
- „Keine Datenvolumen-Abrechnung" steht beim Core-Tier. Bei Platform wird das nicht wiederholt. Heißt das, bei Platform wird nach Volumen abgerechnet? Bei 200 Lieferanten und geschätzt 25.000 Rechnungen/Jahr ist das für mich die wichtigste Frage überhaupt.
- Mandantenfähigkeit: wir haben mehrere Gesellschaften unter einem Dach (typisch Import/Export). Ob Fachwerk das kann, steht nirgends. „Ein Repo pro Kunde" klingt eher nach einer Instanz.
- Lieferantentracking / wiederkehrende Abweichungen über die Zeit — genau das was uns am meisten schmerzt, sehe ich nur angedeutet („Lieferantenhistorie"). Kein Screenshot, keine Zusage. Ich möchte sehen: „Lieferant X weicht in 34 % der Rechnungen um 0,5–1 % ab" — so was systematisch. Das Mockup zeigt nur einen einzelnen Fall.
- Klärungsfall-Workflow: „nachfordern, eskalieren" als Buttons sehe ich. Aber wie das danach läuft — Mail an den Lieferanten, Thread, Wiedervorlage, SLA — ist offen. Das ist bei uns der 80-%-Aufwand.
- Monatsabschluss: die Zahl „8 Tage statt 3" ist meine Zahl, nicht eure. Ich hätte gern ein Versprechen oder eine Referenz: „Kunde Y hat Monatsabschluss von 7 auf 4 Tage gebracht." Ohne Zahl bleibt's Marketing.
- „Direkt mit dem Architekten sprechen, keine Sales-Kette" — sympathisch, aber auch Warnsignal: ist das eine Ein-Mann-Bude? Wer macht Betrieb, wer macht Support, wenn der Architekt krank ist? Bei GoBD-relevanten Prozessen ist das eine ernste Frage.

**Was fehlt für ein Kauf-/Gesprächssignal:**
- Eine klare Aussage zu SAP Business One: „Ja, angebunden, hier ist ein Kunde mit B1."
- Mandantenfähigkeit: ja/nein, und wie abgebildet.
- Preismodell transparent für den Bereich 80–120 Mio. — entweder ein „Core Plus"-Tier, ein verlängerter Core-Scope, oder zumindest ein Satz: „Wenn ihr Platform-Umsatz habt, aber Core-Scope braucht, sprecht uns an, das geht."
- Proof-of-Value-Preis in einer Zahl.
- Eine Referenz mit Zahlen im Finanz-Kontext: „Kunde X, 150 Mio. Umsatz, 180 Lieferanten, Monatsabschluss von 9 auf 5 Tage, Klärungsquote von 18 % auf 7 %."
- Screenshot eines Lieferantenprofils mit Historie, wiederkehrenden Abweichungen, Trend. Nicht nur der Einzel-Case.
- Wie läuft der Klärungsfall? Mail-Thread, Statusübersicht, Wiedervorlage? Ein zweiter Screenshot würde mir das beantworten.
- Aussage zur Volumen-Abrechnung bei Platform: Flat oder nach Events?
- Kurzer Hinweis auf GoBD-Testat / Zertifizierung / Wirtschaftsprüfer-Testbarkeit. „GoBD-konform" als Claim reicht mir nicht — ich brauche die Verfahrensdokumentation.

**Buche ich ein Erstgespräch?** Ja — aber zögerlich, mit hoher Abbruch-Wahrscheinlichkeit im ersten Call.

Grund: der Finanz-Case ist der beste Teil der Seite. 3-Wege-Match, GoBD, Freigabe-Board, Klärungsfall-Kontext — das trifft meine Welt. Aber das Pricing-Framing zwingt mich in Platform, und ich gehe mit der Angst ins Gespräch, dass das am Ende eine 300k-€-Diskussion wird, die ich intern nicht durchbekomme. Wenn Sebastian im ersten Call nicht glaubhaft macht, dass ein sauber geschnittener Rechnungseingangs-PoV bei uns unter 50k startbar ist, bin ich raus. Der PoV-Preis und SAP B1 sind die beiden Killer-Fragen in den ersten 15 Minuten.

**Bewertung:** 6,5 / 10

Der Case ist stark, die Vokabeln sitzen, die Mockups sind fachlich realistisch. Aber: zu viel IT-Metaphorik oben drüber, Preis-Lücke bei meiner Unternehmensgröße, und die entscheidenden Buchhaltungs-Details (Mandanten, Lieferantenhistorie-Tracking, Klärungsfall-Workflow, Verfahrensdokumentation) sind nicht beantwortet. Fachlich nahe dran — kommerziell noch nicht abholbereit.

**Eine konkrete Änderung:**
Zweites Mockup im Grünfeld-Case ergänzen: ein **Lieferantenprofil** mit Abweichungs-Historie über 12 Monate. Spalten: Lieferant, Anzahl Rechnungen, Abweichungsquote, durchschnittliche Abweichung in %/€, häufigste Ursache, Trend. Das ist der Schmerz, den mir kein DATEV, kein SAP Business One und kein Konkurrenz-Tool heute löst. Wenn ich dieses Bild sehe, weiß ich sofort: die haben verstanden, dass mein Problem nicht der einzelne Fall ist, sondern das Muster über 200 Lieferanten hinweg. Das wäre der Screenshot, der mich zum Erstgespräch treibt — nicht mehr zögerlich, sondern mit konkreter Frage im Kopf.
