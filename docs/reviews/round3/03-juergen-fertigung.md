# Jürgen Brandt — Produktionsleiter (Stahlberg Werke)

**Erster Eindruck (30 Sekunden):**
Durchgestrichenes „Vibe Coding", „Low-Code", dann „Fachwerk: befähigt". Netter Gag, aber ich bin Produktionsleiter, kein Developer. „Maßgeschneiderte Software auf solidem Rohbau" — okay, klingt nach Handwerk, das nehme ich. Dann aber sofort: „Katalog statt Zoo", „Rohbau statt Baukasten", „AI + Code koppelbar". Ich scrolle und sehe fünf Säulen mit lateinischen Paragraphen (§ 01, § 02 …). Das ist Architekten-Sprache, keine Fertigungs-Sprache. Mein erster Reflex: noch so eine Berater-Plattform, die „alles kann". Ich scrolle weiter, ob irgendwo was Konkretes zu SPS, Modbus oder Schichtübergabe steht.

**Was landet:**
- Bei den Sackgassen die Zeile „Sicherheit — Lisas Laptop, Max' API-Key" — das beschreibt genau den Schatten-IT-Wildwuchs, den ich bei uns in der QS habe. Excel auf privaten Notebooks, Makros ohne Eigentümer.
- On-Premise-Kachel: „Bei dir auf dem Metall. Bis runter zu SPS, Modbus/TCP, lokalen Datenbanken. Kein Byte verlässt dein Netz." Das ist die erste Zeile, die Fertigung versteht. Air-Gapped als Tag dazu — ja, das brauche ich für Linie 3.
- Der StahlbergWerke-Use-Case: „Temperaturabweichung sperrt die Charge direkt im ERP", „Charge freigeben · Wartung verschieben · QS eskalieren". Das ist konkret. Genau der Schmerz: SPS merkt was, ERP kriegt's nicht mit, QS sieht's zwei Schichten später.
- AI-Flow-Beispiel mit „3-Way-Match" und „SAP-Posting auditierbar" — zeigt, dass jemand verstanden hat, wie ein Buchungspfad aussieht. Determinismus wo nötig. Das Wort „auditierbar" taucht mehrfach auf, das ist für QS und Audit wichtig.
- „Ein eigenes Dev-Team auf Mittelstands-Umsatz skaliert nicht" — stimmt. Wir haben drei IT-Leute, davon einer ERP-Admin. Niemand baut mir eine Maschinenanbindung nebenbei.

**Was verwirrt / geht vorbei:**
- „Werkstatt, Katalog, Betrieb, Speicher, Wissen" — fünf Säulen, die alle gleich wichtig aussehen. Ich weiß nach dem Block nicht, ob „Werkstatt" jetzt ein Tool für meine Instandhaltung oder eine Entwicklungsumgebung ist. Die Doppelbelegung mit echten Werkhallen-Begriffen ist irritierend.
- „Katalog statt Zoo" — ich verstehe die Metapher, aber in meiner Welt ist ein Katalog ein Ersatzteilkatalog. Das Wort führt bei mir in die falsche Richtung.
- „Tragwerk", „Statik", „Rohbau", „Fachwerk" — die Bau-Metaphorik ist konsequent, aber nach dem dritten Mal frage ich mich, was eigentlich konkret geliefert wird. Ist das eine Plattform, ein Framework, eine Beratung?
- „Proof-of-Value" im Primär-CTA. Ich hätte lieber „Erstgespräch" oder „Machbarkeits-Check Linie 3". PoV klingt nach Berater-Deutsch.
- 6 Wochen Bootstrap — bei uns in der Fertigung ist das die Zeit, die Siemens braucht, um einen SPS-Techniker zu schicken. Wie soll das on-prem funktionieren, wenn die Integration zu unserer S7-1500 erst mal netzwerkseitig freigegeben werden muss? Die Seite behauptet es, belegt es nicht.
- Die fünf Säulen als SVG mit Balken und Knoten — optisch nett, aber ich kann daraus nicht ableiten, was der Nutzen für meine Schichtleiter ist.
- „80–200 Mio. Umsatz" Platform-Tier — wir liegen bei 280 Mitarbeitern wahrscheinlich eher bei 60–80 Mio. Bin ich Core? Dann bekomme ich laut Text Cloud-Standard, aber on-prem und SPS-Anbindung sind laut Preis-Note immer Platform. Also muss ich trotzdem 80–150k Launch-Fee stemmen, obwohl ich vom Umsatz her Core bin. Das ist ein Widerspruch, der mir aufstößt.

**Was fehlt für ein Kauf-/Gesprächssignal:**
- Eine konkrete Aussage zu SPS-Protokollen: S7, OPC UA, Modbus/TCP — welche genau? „Modbus/TCP" steht da, aber keine S7/Profinet. Für Siemens-Shops das erste, was ich prüfe.
- Eine Referenz oder ein anonymisiertes Beispiel mit echter Linie, echter Charge, echtem Ergebnis (Ausschuss-Quote runter um X%, Schichtübergabe-Zeit halbiert). Der StahlbergWerke-Case ist offensichtlich fiktiv — das Mock-Screenshot-Gefühl ist zu sauber.
- Redundanz, Ausfallverhalten: Wenn Fachwerk on-prem ausfällt, läuft meine Linie weiter? Wie ist der Watchdog, wer wird alarmiert? Das interessiert mich mehr als die Hero-Slideshow.
- Integration zu SAP: wir haben SAP ERP klassisch, kein S/4. Welcher Adapter, welche BAPIs, welche iDocs? „SAP-Posting auditierbar" ist Marketing, kein Integrations-Commitment.
- Was passiert mit meinen Schichtleitern bei Rollout? Training, Dokumentation auf Deutsch, Support-Rufnummer in meiner Zeitzone?
- Ein Preis für „SPS-Anbindung einer Linie" als Einstieg. 80–150k ohne Scope fühlt sich wie „wir reden erst beim Termin" an. Ich will vor dem Termin wissen, ob das überhaupt in meinem Rahmen ist.
- IT-Sicherheit/Compliance: IEC 62443? TISAX, falls Automotive? BSI-Grundschutz? Nichts davon auf der Seite.

**Buche ich ein Erstgespräch?** Ja, knapp — aber nicht euphorisch.

Grund: Der StahlbergWerke-Use-Case und die On-Premise-Kachel treffen meinen Schmerz genau. Jemand hat zumindest verstanden, dass SPS und ERP nicht miteinander reden und dass QS zu spät kommt. Die Sprache „Air-Gap", „Modbus/TCP", „bis runter zu SPS" beweist, dass der Autor schon mal in einer Werkhalle war — nicht nur in einem Co-Working.

Was mich trotzdem zögern lässt: zu viel Metaphern-Sprache („Rohbau", „Tragwerk", „Katalog"), zu wenig harte Technik-Nachweise (welche SPS-Protokolle genau? welche SAP-Version? welche Referenz?). Und der Preis-Widerspruch zwischen Umsatz-Tier und „On-Prem ist immer Platform" kostet Vertrauen.

Ich buche — weil ich ohnehin keinen besseren Kandidaten habe und weil der Gesprächspartner laut CTA direkt der Architekt ist, nicht ein Sales. Ein Architekt kann mir in zehn Minuten sagen, ob S7-1500 geht oder nicht. Dann weiß ich Bescheid.

**Bewertung:** 6/10

Solide Seite für die richtige Zielgruppe — aber die Zielgruppe ist eher IT-Leiter/CIO, nicht Produktionsleiter. Für mich als Fertigungs-Mann zu viel Architektur-Sprache, zu wenig Shopfloor-Sprache. Der StahlbergWerke-Case rettet die Seite, ohne den wäre ich bei 4.

**Eine konkrete Änderung:**

Im StahlbergWerke-Use-Case die Systeme-Liste ehrlich und vollständig machen. Aus „SPS · SAP · QS-System" muss werden: „S7-1500 / S7-300 über OPC UA · SAP ECC 6.0 iDoc · Excel-QS-Ablösung". Dazu ein zweiter Satz im Body: „Wir reden mit Siemens-SPS direkt — OPC UA Server oder S7comm. Modbus/TCP für Drittmaschinen. Kein Gateway-Zoo."

Das ist der Satz, der bei einem Produktionsleiter den Unterschied zwischen „noch eine Beraterseite" und „die haben's verstanden" macht. Protokoll-Namen sind in der Fertigung, was „GoBD-konform" in der Buchhaltung ist: das Shibboleth, das zeigt, ob jemand dazugehört.
