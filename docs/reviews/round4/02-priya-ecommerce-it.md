# Priya Krishnan — IT-Leiterin (FreshBox GmbH)

**Erster Eindruck (30 Sekunden):**
„baut. wartet. trägt." — okay, das ist das erste Mal, dass mir hier jemand das Wort „wartet" hinschreibt. Das ist der Teil, der mich in Zapier-Hölle täglich kostet: nicht das Bauen, das Warten. Der Rest vom Hero klickt sauber — Rohbau, AI+Code, Katalog statt Zoo. Die drei Säulen-Tags sind funktional, nicht Buzzword-Bingo. Ich scrolle weiter, weil ich das Wort „Governance" gesehen habe und wissen will, ob das gemeint ist oder nur Deko. Nach 30 Sekunden bin ich nicht überzeugt, aber auch nicht genervt — das ist für diese Seite schon besser als beim letzten Mal.

**Was landet (jetzt besser):**
- „baut. wartet. trägt." — das ist für mich als IT-Leiterin der ehrlichste Claim auf der Seite. Wartung ist 60% meines Tages. Dass das Wort im Hero steht, ist ein Signal.
- Pricing in drei Tiers mit Scope-Logik statt Umsatz-Schwellen ist sauber gedacht. Ich kann mich selbst einordnen: FreshBox ist 20 Mio Umsatz, 12 SaaS-Tools, Zapier-Kleber — Core. Der Satz „häufig ab ~20 Mio Umsatz" trifft genau. Und dass Starter „Upgrade auf Core jederzeit möglich" sagt, nimmt mir die Angst, mich falsch zu committen.
- „Proof-of-Value voll anrechenbar" — das ist die erste Pricing-Seite seit langem, die nicht versucht, mich zu einem Vertrag zu locken, bevor ich weiß, ob das Ding in meiner Umgebung läuft. Respekt.
- „Vier fiktive Szenarien — keine Referenzkunden" ist die richtige Entscheidung. Beim letzten Mal hatte ich den Verdacht, dass hier logo-gefakte Case-Studies versteckt werden. Jetzt ist es sauber deklariert. Glaubwürdigkeit +1.
- Sackgassen-Tabelle: Zeile „Abhängigkeit" mit „Code gehört dir, ein Repo pro Kunde" ist Musik in meinen Ohren. Das ist der einzige Exit-Proof, den ich im Zweifel vor meine GF legen kann.
- Deploy-Sektion mit Cloud / On-Premise / Hybrid ist strukturell richtig. StackIT-Erwähnung gibt DSGVO-Relevanz ein konkretes Gesicht.

**Was immer noch stolpert:**
- **SSO, SCIM, RBAC, Audit, MFA — alles fehlt weiterhin explizit.** Ich sehe „Audit-Trail" in den Säulen (§01 Betrieb) und „Einheitlicher Rahmen, Audit-Trail" in der Sackgassen-Tabelle. Das ist zu wenig. Die erste konkrete Frage, die mein IT-Security-Kollege stellen wird: *„Unterstützt das SAML2/OIDC gegen Entra ID? SCIM-Provisioning? Rollen-basierte Rechte? Audit-Log-Retention in Jahren?"* Diese Seite beantwortet null davon. Das ist ein Deal-Killer, nicht ein Nice-to-have.
- **Secrets-Management** wird im Zoo-Abschnitt gezeigt („Secrets irgendwo" vs. „Zentrale Secrets, Rollen, Rechte"). Das ist gut, aber es ist ein Marketing-Bild, kein Technical Proof. Ich will wissen: HashiCorp Vault? AWS Secrets Manager? Eigenes KMS? Per-Tenant-Encryption? Ein Satz würde reichen.
- **Exit-Story** ist angedeutet („Code gehört dir, ein Repo pro Kunde") — aber nicht ausgespielt. Als Technical Buyer muss ich meiner CFO beantworten: *Wenn wir nach 18 Monaten kündigen — was läuft weiter? Wo? Wer hostet das Repo? Sind die Laufzeit-Dependencies (LLM-Zugang, Plattform-Runtime) offen oder proprietär?* Ohne das ist „Code gehört dir" ein PR-Satz.
- **GoBD** steht im Grünfeld-Case. Gut. Aber **DSGVO-AVV, Auftragsverarbeitung, TOMs, SOC-2 / ISO-27001 / BSI-C5** — kein Wort. Bei einer 20-Mio-Firma wie FreshBox ist das unsere Einkaufs-Checkliste. Wenn ihr diese Zertifizierungen (noch) nicht habt, schreibt das ehrlich hin. Wenn ihr sie habt, dann ist das ein Verkaufsargument.
- **Multi-Tenancy-Architektur:** „ein Repo pro Kunde" klingt nach Per-Tenant-Isolation. Das ist stark, wenn es stimmt — aber es steht nirgends erklärt. Laufen Instanzen getrennt? Shared Control Plane? Getrennte Datenbanken? Das ist genau der Satz, der mich in die Demo bringt.
- **Zapier-Problem wird nicht direkt adressiert.** Ich bin genau die Persona mit 12 SaaS-Tools und Zapier-Kleber — aber auf der Seite sehe ich SAP, Modbus, DATEV, Wodis. Kein Stripe, kein Klaviyo, kein Zendesk, kein Shopify (im Zielsystem-Sinne, nicht nur im Marquee). Ich erkenne mich in den Szenarien nicht vollständig wieder. NordWare trifft das Retouren-Problem, aber nicht das Subscription-/Abo-Problem.
- **Volumen-Abrechnung:** „Kein Seat-Pricing, keine Datenvolumen-Abrechnung" (Core-Tier) ist ein guter Satz. Aber wo ist die Grenze? Was kostet ein LLM-schwerer Flow? Die CFO wird fragen: *„Wo kippt das Modell?"* Platform sagt „15–35k / Monat". Das ist eine Spanne von 2,3×. Wovon hängt es ab? Ein Satz dazu fehlt.
- **Rolle der AI-Modelle:** Welche LLMs? Eigenes Hosting möglich (für On-Prem)? Azure OpenAI / Anthropic / Open Source? Bei regulierten Umgebungen („Platform") ist das eine Pflichtfrage. Nicht beantwortet.

**Neu hinzugekommenes Feedback:**
- **Drei-Tier-Pricing ist ein klarer Fortschritt.** Vorher war das binär-fühlend. Jetzt hat jeder Käufertyp einen Einstieg. Als IT-Leiterin freut mich besonders: Core-Tier sagt „Bootstrap durch Fachwerk in wenigen Tagen Beratung" — das ist ehrlich, ich muss nicht selbst bauen, ich muss auch nicht Platform-Budget freigeben.
- **Scope-first-Logik im Preis-Note** („Eine 150-Mio-Firma mit fokussiertem Scope kann Core sein") ist die richtige Botschaft. Entschärft die Angst, ins zu große Tier getrieben zu werden.
- **„Katalog oder Zoo?" als Zoo-Eyebrow** funktioniert. Ist provokant genug, um zu lesen. Bild im Kopf stimmt.
- **„Vier Szenarien" als fiktiv deklariert** — sauber. Nimmt der Seite die „wir-haben-Logos-die-wir-nicht-haben"-Note.
- **Säulen-Tags funktional** (§01 „Ausführung mit Audit-Trail" statt Buzzword) — macht das Tragwerk-Modell erstmal lesbar. Ich verstehe jetzt, was „Betrieb" heißt.
- **Gesundheit raus** — richtig. War nicht euer ICP. Zeigt, dass ihr Scope schärft statt aufzublähen. Das ist für mich als Technical Buyer ein positives Signal: Ihr wisst, was ihr nicht baut.
- **Was fehlt neu:** Mit der Tier-Logik wird das **Security-/Compliance-Loch schärfer sichtbar.** Core verkauft Aufsetzhilfe, Platform verkauft regulierte Umgebungen — aber was *genau* macht Platform „regulierungsfähig"? Ein Satz-Level mehr wäre nicht zu viel.

**Buche ich ein Erstgespräch?** **Ja — aber mit Vorbehalt.**

Ja, weil: Pricing ehrlich, PoV anrechenbar, Direkt-Kontakt zum Architekten (kein Sales-Theater), Scope-first-Logik spricht mich an, und „baut. wartet. trägt." trifft meinen tatsächlichen Schmerz. Die 6 Wochen bis zum PoV-Ergebnis kann ich meiner GF verkaufen.

Vorbehalt: Mein erstes Meeting wird zu 80% Security- und Compliance-Fragen sein (SSO, SCIM, Audit-Retention, AVV, Exit-Playbook, LLM-Hosting). Wenn Sebastian darauf nicht glaubwürdig antwortet, ist das Gespräch nach 30 Minuten vorbei. Die Seite hätte mir diese Last abnehmen können — stattdessen schickt sie mich ins Gespräch mit der Vermutung, dass das alles noch Work-in-Progress ist.

**Bewertung:** 8/10 (vorher 7/10)

+1 für: Drei-Tier-Pricing, Fiktiv-Deklaration, Säulen-Tags, Zoo-Eyebrow, „wartet" im Hero.
Nicht +2 weil: Security-/Compliance-Loch weiterhin offen. Genau der Teil, der bei meinem Kauf am meisten Gewicht hat, steht immer noch am wenigsten auf der Seite.

**Eine konkrete Änderung:**

Füge zwischen der Deploy-Sektion (§07) und Pricing (§08) eine kurze **„Governance & Sicherheit"-Sektion** ein — eine Zeile pro Punkt reicht, keine Marketing-Prosa:

```
§ Governance — was IT-Leitungen zuerst fragen
- Identity: SAML2 / OIDC (Entra ID, Okta, Keycloak) · SCIM-Provisioning
- Rollen: RBAC auf Flow-, Katalog- und Daten-Ebene
- Audit: vollständiges Event-Log, Retention konfigurierbar, exportierbar
- Secrets: zentrale Vault-Integration, keine Keys im Code, per-Tenant-Encryption
- Compliance: DSGVO-AVV, GoBD-Verfahrensdoku, TOMs auf Anfrage · ISO-27001 / SOC-2: [Status ehrlich benennen]
- Exit: dein Code, dein Repo, Laufzeit-Runbook — dokumentiert, nicht versprochen
- LLM-Hosting: Azure OpenAI (EU), Anthropic, oder eigenes Modell-Deployment für On-Prem
```

Das nimmt 80% der ersten 30 Minuten jedes Technical-Buyer-Gesprächs von der Agenda — und verschiebt das Gespräch dahin, wo ihr gewinnt: Architektur, Scope, PoV. Wenn eure Antwort auf einzelne Zeilen „noch nicht" lautet, schreibt „Roadmap" dahinter. Ehrlichkeit ist hier stärker als Hochglanz.
