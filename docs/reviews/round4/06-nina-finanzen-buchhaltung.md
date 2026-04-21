# Nina Berger — Leiterin Finanzbuchhaltung (Norddeutsche Handelsgruppe)

**Erster Eindruck (30 Sekunden):** Ich scrolle schnell durch. „baut. wartet. trägt." — ok, das ist kein Marketing-Gebrabbel, das ist eine Aussage. Bei „3-Wege-Match für den Rechnungseingang" bleibe ich hängen. Da steht genau mein Alltag: Rechnung, Bestellung, Lieferschein, Abweichung, Klärungsfall. Die Nennung GoBD an zwei Stellen (Szenario und CFO-Logik im Kopf) gibt mir das Signal, dass hier jemand den Unterschied zwischen „Rechnung buchen" und „Rechnung prüfbar buchen" kennt. Pricing: drei Tiers, klare Note darunter — ich weiß beim ersten Lesen, wo ich stehe.

**Was landet (jetzt besser):**
- Das Szenario „Grünfeld" trifft meinen Kern: 3-Wege-Match, Klärungsfall mit Lieferantenhistorie, GoBD-konforme Ein-Klick-Aktionen, Revisionspfad. Das sind die Wörter, die in meinem Kopf leben — nicht generisches „AP Automation".
- Der AI-Flow „Eingangsrechnung prüfen" (OCR → PO-Match → Abweichung bewerten → Buchen/Eskalieren) ist exakt die Schrittfolge, die ich im Kopf durchgehe. Dass Buchen explizit als Code („SAP-Posting · auditierbar") markiert ist und die Bewertung als AI, ist sauber — genau an der Stelle, wo ich AI nicht haben will, ist deterministischer Code.
- „Scope entscheidet, nicht Umsatz" mit konkreter Begründung (Multi-Site, On-Premise, reguliert) — ich muss nicht mehr raten, warum wir in welchem Tier sitzen.
- Fiktive Szenarien offen deklariert („keine Referenzkunden, sondern Illustrationen"). Besser als gefakte Logos. Das nehme ich ernst.

**Was immer noch stolpert:**
- **SAP Business One wird nicht genannt.** Im Flow steht „SAP-Abfrage" und „SAP-Posting", im Grünfeld-Szenario „DATEV · SAP · DMS". Ich fahre SAP B1, nicht S/4HANA. Für uns ist die Frage: versteht ihr die B1-Objekte (Einkaufsbestellung, Wareneingang, Eingangsrechnung) und die SDK/Service-Layer-Welt? Sonst ist „SAP" ein leeres Wort.
- **Keine Zahl zu meinem Scope.** 25.000 Rechnungen/Jahr, 200+ Lieferanten, mehrere Gesellschaften — wird das als Volumen getragen? Was ist die realistische Match-Quote, die ihr erreicht? Ohne Zahl kann ich das intern nicht verteidigen.
- **Mandantenfähigkeit fehlt explizit.** Wir haben mehrere Gesellschaften. Das Wort „Multi-Site" im Platform-Tier kann vieles heißen — ist das wirklich Mandantentrennung auf Datenebene, oder nur „läuft an mehreren Standorten"? Für Buchhaltung ist das der Unterschied zwischen „nutzbar" und „unbrauchbar".
- **GoBD-Verfahrensdokumentation** steht als Wort da („GoBD-konform", „auditierbar"), aber das ist kein Nachweis. Wer stellt die Verfahrensdoku? Ich? Ihr? Gemeinsam? Bei der nächsten Betriebsprüfung will ich das Dokument in der Hand haben, nicht neu schreiben.
- **Keine Referenzen, keine Zahlen aus echten Projekten.** „~14 h / Woche gespart" bei NordWare ist eine Zahl zu einem fiktiven Kunden — das ist ehrlich, aber es hilft mir nicht, das Risiko für meine Firma einzuschätzen. Wer hat das wirklich gemacht? Wellen-1-Discount suggeriert, ihr habt noch keine — dann sagt das so.
- **Platform-Preisspanne 80–150k Launch + 15–35k/Monat** = 260–570k im ersten Jahr. Für mich als Buchhaltungsleitung verteidigbar — wenn der Business Case sitzt. Aber kein Wort dazu, was ich konkret spare. Headcount? Abschlusstage? Fehlerquote? Ich brauche eine Zahl, um mit der CFO zu sprechen.

**Tier-Einordnung jetzt klarer?**
- Ja, deutlich klarer als vorher. Die Note „Scope entscheidet, nicht Umsatz" plus die Begründung in den Tier-Cards selbst („Multi-Site · On-Premise · SPS/Modbus · 5+ angebundene Systeme, Custom-Scope") führt mich ohne Interpretation zu Platform.
- Wir passen: 200+ Lieferanten (5+ Systeme angebunden), Mandantenfähigkeit (Multi-Site), GoBD-Verfahrensdoku (reguliert) — auch wenn „~80 Mio Umsatz" im Platform-Subtext mich kurz stolpern lässt (wir sind 120, also safe). Die 120 Mio landen hier sauber, ohne Ambivalenz.
- Hinweis: Der Hinweis „eine 150-Mio-Firma mit fokussiertem Scope kann Core sein" macht die Richtung klar. Scope zuerst. Gut.
- Ein Kollege bei 50 Mio mit 3 Gesellschaften und On-Prem-Anforderung würde jetzt auch verstehen, dass er Platform ist — das war vorher ambivalent.

**Buche ich ein Erstgespräch?**
Ja — aber mit klaren Fragen vorab. Der fachliche Anker sitzt (3-Wege-Match, Klärungsfall, GoBD-Sprache, Audit-Trail), das Tier-Modell ist jetzt belastbar, und „Erstgespräch direkt mit dem Architekten, kein Sales-Theater" reduziert meine Vorbereitungszeit. Ich würde nicht sofort einen Proof-of-Value zusagen — erst drei Fragen: SAP B1 SDK-Anbindung konkret? Mandantenfähigkeit auf Datenebene? Wer schreibt die Verfahrensdokumentation?

**Bewertung:** 7,5/10 (Vergleich: vorher 6,5/10)

Der Sprung kommt aus drei Quellen: Tier-Einordnung nicht mehr ambivalent (+0,5), fiktive Szenarien ehrlich deklariert statt als Pseudo-Referenzen (+0,3), Scope-first-Note explizit begründet (+0,2). Was 8+ verhindert: SAP B1 nicht benannt, keine Zahl zu Volumen/Match-Quote, Verfahrensdoku-Verantwortlichkeit offen, keine echten Referenzen. Alles adressierbar.

**Eine konkrete Änderung:**
Im Grünfeld-Szenario-Meta oder direkt im Fließtext einen Satz ergänzen: „Anbindung an SAP Business One, S/4HANA oder DATEV über produktive Konnektoren; Mandantentrennung auf Datenebene; Verfahrensdokumentation wird aus dem Katalog generiert." Das nimmt die drei Fragen, die ich als SAP-B1-Leitung mit Mandantenanforderung sonst stelle, vorweg — und hebt das Szenario vom fiktiven Steuerberater zum belastbaren Großhandels-Anker, der meinen 25.000-Rechnungen-Fall abdeckt.
