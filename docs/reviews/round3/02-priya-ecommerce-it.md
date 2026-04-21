# Priya Krishnan — IT-Leiterin (FreshBox GmbH)

**Erster Eindruck (30 Sekunden):**
Okay, weder Vibe-Coding noch Low-Code — schon mal sympathisch, weil das genau die zwei Schmerzpunkte sind, die bei uns auf dem Tisch liegen. Die Headline ist durchgestrichen, also weiß jemand, welche Gräben es gibt. "Maßgeschneiderte Software auf solidem Rohbau" — klingt nach Handwerk, nicht nach SaaS-Bingo. Aber: was genau *ist* Fachwerk? Ein Framework? Eine Plattform mit Runtime? Ein Dienstleister mit Methodik? Nach 30 Sekunden weiß ich das noch nicht. Die Slideshow rechts zeigt bunte UI-Screenshots — hilft beim "aha, das ist echt gebaut", löst aber nicht die Frage "was läuft da eigentlich".

**Was landet:**
- Die Sackgassen-Tabelle. Das ist das erste, was bei mir wirklich klickt. "Code gehört dir, ein Repo pro Kunde" — das ist die Zeile, die ich aus dem Screenshot ausschneiden und meinem Geschäftsführer zeigen würde. Lock-in ist bei uns nach zwei Jahren Zapier-Chaos das Trauma Nummer eins.
- "AI baut. AI arbeitet mit. AI bleibt auditierbar." Sauber getrennt. Besonders "kein Prompt zur Laufzeit, keine Halluzination im heißen Pfad" — das zeigt, dass da jemand operativen Betrieb verstanden hat, nicht nur Demo-Magie verkauft.
- Deploy-Optionen (Cloud / On-Prem / Hybrid) mit StackIT-Erwähnung. StackIT nennt niemand zufällig — das ist ein Signal an IT-Leute, die DSGVO ernst nehmen.
- Der Flow mit den abwechselnden Code/AI-Steps (Rechnungseingang). Das ist konkret genug, dass ich mir die Architektur vorstellen kann: IMAP → LLM → SAP → LLM → SAP. Das ist kein Prompt-Voodoo, das ist ein Workflow mit sauberen Interfaces.
- Pricing mit harter Obergrenze ("über 200 Mio. bedienen wir nicht"). Seltene Ehrlichkeit. Kein "enterprise ready for any scale"-Blabla.

**Was verwirrt / geht vorbei:**
- Die fünf Säulen heißen Werkstatt, Katalog, Betrieb, Speicher, Wissen. Cooler Sprachduktus, aber ich brauche dreimal Lesen, bis ich weiß: Werkstatt = IDE/Builder, Katalog = Registry, Betrieb = Runtime/Ops, Speicher = Data Lake, Wissen = RAG/KB. Warum steht das nicht in *einem* technischen Satz daneben? Ich bin IT, keine Bauherrin.
- "Jeder Flow erklärt sich selbst" — was heißt das? Auto-generierte Docs? LLM, das den Flow auf Nachfrage erklärt? Live-Introspection? Das ist Marketing-Prosa, die eine konkrete Fähigkeit verhüllt.
- Die Architektur-Frage bleibt offen. Was ist die Runtime? Node? Python? Welche Container? Kubernetes oder Docker-Compose? Welche DB-Engine ist "Speicher"? Postgres? Mongo? Was spricht das "Wissen" — pgvector, Qdrant, LanceDB? Für mich als IT-Leiterin ist das keine Nische, das ist die erste Frage nach "ist das ein Fit".
- "Ein Repo pro Kunde" — super, aber wer pflegt die Platform-Updates rüber in mein Repo? Wie läuft ein Upgrade? Merge-Hell? Plugin-System? Das ist die konkrete Folge-Frage, und sie wird nicht beantwortet.
- Security/Compliance ist erstaunlich dünn. DSGVO steht als Tag, GoBD wird im Grünfeld-Case erwähnt. Aber: SSO? SCIM? RBAC-Modell? Audit-Log-Retention? SOC2/ISO27001-Roadmap? Pentest? Als IT-Leiterin mit 12 Tools habe ich gelernt: ohne SSO keine Anschaffung, Punkt.
- Die Pricing-Tiers sind nach **Umsatz** geschnitten (20–80 Mio. Core, 80–200 Mio. Platform). FreshBox macht ~18 Mio. — bin ich dann zu klein? Oder rutsche ich in Core? Die Grenze ist hart ("nicht verhandelbar"), die Botschaft unklar.
- "Dialog mit Fachwerk, Rohbau trägt" in der Sackgassen-Tabelle — das suggeriert, der Fachbereich baut selbst mit. Aber dann kommt der Katalog mit Owner/Version/Health und Freigabe-Boards. Wer darf was? Governance-Modell fehlt komplett.
- Der Hero sagt "befähigt" — wen? Den Fachbereich? Die IT? Beides? In meinem Setup ist "Fachbereich baut Zap selbst" genau das Problem, das mir die Pager-Alerts beschert.

**Was fehlt für ein Kauf-/Gesprächssignal:**
- **Ein Architektur-Diagramm**, das zeigt: Wo läuft was, welche Komponenten, welche Daten gehen wohin. Nicht marketingschön — technisch ehrlich.
- **Ein Integrations-Beispiel aus meiner Welt.** Die vier Cases sind E-Commerce (aber B2C-Retouren, nicht Abo), Fertigung, Finanzen, Immobilien. Kein Subscription/SaaS-Stack. Wo ist Stripe? Recharge? Klaviyo? Zendesk? Ich muss den Transfer selbst machen, und das kostet Zugkraft.
- **Ein klares Statement zu SSO, RBAC, Audit-Logs.** Drei Bulletpoints würden reichen.
- **Technologie-Transparenz.** Stack offenlegen. Wer nichts dazu sagt, versteckt meist etwas.
- **Migrations-/Exit-Story.** "Code gehört dir" — schön, aber ohne Fachwerk-Plattform, tut der Code was? Ist das Repo ohne die Runtime lauffähig? Das entscheidet über Lock-in *tatsächlich*, nicht über das Owner-Label im Katalog.
- **Eine Referenz oder zumindest ein technisches Case-Detail** ("Kunde X, 40 Integrationen, 18 Monate produktiv, Runtime auf Kubernetes in eigener Cloud"). Aktuell sind alle Cases fiktive Firmen (NordWare, Stahlberg, Grünfeld, Dachstein — klingt wie Namensgenerator).
- **Proof-of-Value-Details.** Was liefert Fachwerk in 6 Wochen? Was liefere *ich*? Welche Ressourcen muss ich stellen? "15–40k Launch-Fee" — was ist drin, was kommt oben drauf?

**Buche ich ein Erstgespräch?** Ja — aber mit hohem Diskursdruck.
Warum ja: Die Haltung stimmt. Jemand hat operativen Betrieb gedacht, nicht nur Demo gebaut. "Ein Repo pro Kunde" und "auditierbare AI-Schritte" sind die zwei Sätze, für die ich 30 Minuten meiner Zeit gebe. Wenn das hält, was es verspricht, löst es bei mir Zapier *und* das Integrations-Flickwerk auf einen Schlag.
Warum mit Druck: Ich gehe mit einem Fragenkatalog rein (Stack, SSO, Upgrade-Pfad, Exit). Wenn der erste Satz "das klären wir im Projekt" ist, bin ich raus.

**Bewertung:** 7/10

Starke Positionierung, ehrliche Tonalität, saubere Problem-Analyse. Abzug für fehlende Architektur-Transparenz, dünne Security-Angaben und einen E-Commerce-Case, der B2C-Retouren statt Subscription zeigt — also meine Welt streift, aber nicht trifft.

**Eine konkrete Änderung:**
Pack unter die fünf Säulen (oder direkt in den AI+Code-Abschnitt) einen kleinen Tech-Block: *Runtime, Datenhaltung, Auth, Deployment-Targets, Audit/Log-Retention, Exit-Option.* Sechs Zeilen, Monospace, konkret. Das ist der Unterschied zwischen "klingt interessant" und "rufe ich heute noch meinen CTO an". IT-Leute glauben erst, wenn sie das Stack-Bild sehen.
