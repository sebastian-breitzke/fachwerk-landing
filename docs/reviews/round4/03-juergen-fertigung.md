# Jürgen Brandt — Produktionsleiter (Stahlberg Werke)

**Erster Eindruck (30 Sekunden):** „baut. wartet. trägt." — das liest sich wie einer, der weiß, dass Software in der Produktion nicht schick sein muss, sondern am Montag um sechs auch noch läuft. Kein bunter Baukasten, kein „Zukunft der Arbeit"-Geschwurbel. Die Marquee-Zeile mit „Modbus/TCP" zwischen SAP und Postgres hat mich festgenagelt — das schreibt keiner rein, der das nicht ernst meint. Beim Fertigungs-Szenario bleibe ich hängen: Temperaturabweichung sperrt die Charge, on-premise neben SPS, Tablet am Band, Deploy „On-Premise · Air-Gap". Das ist meine Sprache. Pricing habe ich zuerst gelesen, wie immer.

**Was landet (jetzt besser):**
- Pricing-Logik ist endlich ehrlich: „Scope entscheidet, nicht Umsatz." Mit 70 Mio Umsatz wäre ich nach altem Raster wahrscheinlich Core gewesen — aber mit SPS, Air-Gap und SAP-Kopplung ist Platform die richtige Schublade. Das ist jetzt sauber begründet, nicht nur Preisschild-Strafe.
- Der Satz unter der Pricing-Tabelle („eine 150-Mio-Firma mit fokussiertem Scope kann Core sein") macht klar: ihr habt euch Gedanken gemacht, statt nur Umsatz-Klassen abzustempeln. Das glaube ich eher.
- Drei Tiers statt zwei. Ich sehe Starter und denke: „Für den Azubi-Versuch nicht meine Liga, macht aber Sinn dass es existiert." Ich weiß jetzt, wo ich stehe.
- Fertigungs-Szenario ist explizit fiktiv markiert. Gut. Ein Fake-Referenzkunde mit glänzendem Logo hätte mich sofort abgeschreckt. Jetzt ist das klar eine Illustration — „so könnte es bei euch aussehen". Das nehme ich.
- Stahlberg-Mockup: Schichtleiter, Halle 2, Charge gesperrt mit +3.8°C und „KW12 Werkzeug" als Begründung. Das ist nicht gestellt — das riecht nach jemandem, der schonmal in einer Halle stand.
- Air-Gap-Tag in Deploy. Zwei Worte, aber sie sagen mir: ihr wisst, dass bei uns nicht jedes Byte raus darf.
- Säulen-Tags sind jetzt funktional lesbar („Ausführung mit Audit-Trail", „alles was läuft — mit Owner und Version"). Vorher waren die eher Poesie. Jetzt weiß ich, was hinter jeder Säule steht.
- „Code gehört dir, ein Repo pro Kunde" — das ist der Satz, den mein IT-Admin lesen muss. Kein Vendor-Gefängnis.

**Was immer noch stolpert:**
- IEC 62443 steht nirgends. TISAX auch nicht. Für Fertigung ist das keine Kür — ohne das komme ich im IT-Security-Review nicht durch. „Air-Gap" als Tag reicht nicht; ich will irgendwo den Satz lesen, dass ihr wisst, was IEC 62443-3-3 für Zonen-Trennung bedeutet. Wenn ihr das nicht könnt, sagt es — wenn ihr das könnt, schreibt es hin.
- SPS steht zweimal, Modbus steht zweimal. Siemens S7 konkret — nirgends. Rockwell / AB — nirgends. OPC UA — nirgends. „SPS" als Wort allein ist Marketing. Ich will wissen, ob ihr S7-1500 könnt oder nur „SPS" in einer Präsentation.
- On-Premise-Tier kostet 80–150k Launch + 15–35k/Monat. Das ist ehrlich und ich glaube es sogar. Aber: wer betreibt das Ding im Werk, wenn das Netz 3 Tage weg ist? Wer patcht das? Wer macht den IEC 62443-konformen Rollout? Die Betriebs-Story für Air-Gap fehlt. Cloud-Updates sind einfach — on-prem ist Arbeit.
- „~14 h / Woche gespart" beim NordWare-Szenario. Bei uns fehlt eine Zahl. Was spart das Stahlberg-Szenario? Ich vergleiche im Kopf mit meinem Ausschuss-Monat, aber gebt mir einen Anker.
- „6-Wochen-Proof-of-Value" klingt Mittelstand-typisch ambitioniert. Bei On-Prem neben SPS sehe ich eher 10–12 Wochen realistisch, weil allein die Netzfreigabe 4 Wochen dauert. Sagt das lieber ehrlich.
- „Multi-Site" steht im Platform-Tier — aber was heißt das konkret bei 3 Werken, die alle eigene SPS-Welten haben? Eine Instanz zentral, Agents am Standort? Bleibt vage.
- Die Zoo-Tabelle zeigt „Schichtleiter-Cockpit · Stahlberg · v3.1 · ◐ review". Schön, dass ich Vorkomme — aber „review" als Health-Status ohne Erklärung wirkt zufällig. Lieber „OK" oder eine erklärte Warnung.

**Neu hinzugekommenes Feedback:**
- Der Hero-Claim „baut. wartet. trägt." ist stark — aber „trägt" ist mir fast der wichtigste. In der Fertigung ist „trägt" das einzige, was zählt. Wenn ihr das ernst meint, zeigt mir irgendwo eine Zahl: wie alt ist euer ältester laufender Flow? Betriebsstabilität wird nicht durch Marketing bewiesen, sondern durch Laufzeit.
- „Im Dialog mit den Machern in deiner Firma — nicht im Warten auf die IT" — Vorsicht. In meiner Welt ist die IT nicht der Feind. Der Fachbereich, der an der IT vorbeiklickt, ist genau der Grund, warum wir die Excel-Hölle haben. Ich verstehe was gemeint ist, aber der Ton klingt zu sehr nach „Fachbereich-Empowerment gegen die IT" — und mein IT-Admin liest die Seite auch.
- Die fünf Säulen sind jetzt verständlich, aber der zentrale Knoten „Betrieb" ist am wichtigsten für mich. Prominenter machen? Das ist die Säule, an der Fertigung entscheidet, ob eure Platform trägt.
- Die Sackgassen-Tabelle ist ehrlich. „Dienstleister: Lebenslang beim Partner" — das haben bei uns Generationen von Geschäftsführern erlebt. Guter Punkt, bleibt stehen.
- AI + Code-Sektion: das Flow-Beispiel ist Rechnungseingang, Finanz-Thema. Für einen Produktionsleiter wäre ein Fertigungs-Flow als Illustration stärker (Sensor → Klassifikation → SAP-Sperre → AI-Muster-Erklärung). Aber: ich verstehe die Logik auch so.

**Buche ich ein Erstgespräch?** Ja — aber mit meinem IT-Leiter im CC, nicht allein. Grund: Pricing-Logik ist jetzt nachvollziehbar, das Szenario trifft meinen Schmerz fast wörtlich, und der „Erstgespräch direkt mit dem Architekten" ist genau das, was ich will — kein Sales-Ping-Pong. Was ich im Gespräch klären will: IEC 62443-Konformität, konkrete SPS-Protokolle (S7, OPC UA), Betriebs-Modell für Air-Gap, und was passiert, wenn Sebastian unter einen Bus kommt. Letzte Frage ist ernst, nicht zynisch.

**Bewertung:** 8/10 (Vergleich: vorher 6/10)

Die Scope-Logik auflösen war der größte Sprung — vorher fühlte ich mich vom Pricing diskriminiert, jetzt fühlt es sich gerechtfertigt an. Die Fertigungs-Konkretheit (Air-Gap, SPS im Mockup, Charge-Sperre als Szenario) hebt die Seite über die üblichen Mittelstand-Plattform-Claims. Was 2 Punkte kostet: IEC 62443 fehlt, SPS-Protokolle bleiben abstrakt, und die Betriebs-Story für On-Prem ist dünn. Das sind keine Deal-Breaker, sondern die Punkte, die das Gespräch füllen werden.

**Eine konkrete Änderung:** Fügt dem Stahlberg-Szenario-Meta einen fünften Eintrag hinzu: `['Security', 'IEC 62443 · TISAX-Pfad']`. Zwei Wörter. Sagt meinem IT-Security mehr als drei Marketing-Absätze. Wenn ihr das nicht könnt, streicht „On-Premise / Multi-Site" aus dem Platform-Tier, weil ohne IEC 62443 kauft das kein seriöser Fertiger.
