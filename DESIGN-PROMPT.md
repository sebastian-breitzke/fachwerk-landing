# Image Generation Prompt — Fachwerk Landing Page Entwürfe

Kopiere den folgenden Prompt und lade das Fachwerk-Logo-SVG als Attachment mit hoch.

---

## Prompt

Erstelle ein 3x3 Grid mit 9 verschiedenen Landing-Page-Entwürfen für "Fachwerk" — eine Automatisierungs- und Integrationsplattform für maßgeschneiderte Business-Software. Jeder Entwurf soll inhärent anders sein in Layout, visuellem Konzept und Komposition. Nicht 9 Variationen desselben Layouts, sondern 9 fundamental verschiedene Ansätze.

### Marke & Produkt

Fachwerk ist eine Plattform, die Business-Anwendern (nicht Entwicklern) erlaubt, maßgeschneiderte Software für ihre Prozesse zu bekommen. Das Produkt baut sich selbst, wartet sich selbst, heilt sich selbst. Zielgruppe: Entscheider, Logistikleiter, Disponenten.

### Farben (Light Theme — nur diese verwenden)

- Hintergrund: #f4f5f7 (helles Grau, fast Papier)
- Vordergrund/Text: #1a2030 (dunkles Blau-Grau)
- Primär/Akzent: #2a9080 (Teal)
- Muted: #e8eaee (helles Grau)
- Muted Text: #5a6270 (mittleres Grau)
- Border: #dfe2e6
- Erfolg: #4a7c59 (Grün)
- Fehler: #a65241 (Rot)
- Warnung: #b8860b (Gold)
- Info: #4a6fa5 (Blau)

### Typografie

- Body: IBM Plex Sans
- Headlines/Labels: Monospace, Uppercase, Letterpsacing 0.12em
- Kein kursiv, kein Script

### Design-Regeln (nicht verhandelbar)

- Keine abgerundeten Ecken. Überall scharfe Kanten. Border-radius: 0.
- Borders: 2px solid
- Schatten: hard offset, kein Blur (z.B. 4px 4px 0 rgba(0,0,0,0.12))
- Keine Gradients
- Keine Stock-Fotos, keine generischen Illustrationen
- Millimeterpapier-Grid als subtiler Hintergrund (dünne Teal-Linien im 20px-Raster)

### Visuelles Konzept: Fachwerk als Metapher

Das Fachwerkhaus ist der visuelle Anker. Ein Fachwerkhaus besteht aus einem Rahmen mit Balken, Streben und Gefachen — genau wie die Plattform aus "Bricks" (Bausteinen) besteht, die zusammen das Ganze ergeben. Nutze die Fachwerk-Struktur (Rahmen + Diagonalen + Kästchen/Gefache) als abstraktes grafisches Element. NICHT als niedliches Häuschen, sondern als technisches, architektonisches Pattern — wie ein Blueprint, eine technische Zeichnung, ein Konstruktionsplan.

Das Logo zeigt das Prinzip: ein Quadrat mit horizontalen, vertikalen und diagonalen Balken — die Essenz der Fachwerkstruktur. Hier ist das Logo als SVG:

```svg
<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <rect width="128" height="128" fill="#1e2430"/>
  <defs>
    <clipPath id="frame">
      <rect x="14" y="14" width="100" height="100"/>
    </clipPath>
  </defs>
  <g stroke="#5eead4" stroke-width="4" stroke-linecap="square" fill="none" clip-path="url(#frame)">
    <rect x="16" y="16" width="96" height="96"/>
    <line x1="16" y1="64" x2="112" y2="64"/>
    <line x1="64" y1="16" x2="64" y2="112"/>
    <line x1="16" y1="64" x2="64" y2="16"/>
    <line x1="64" y1="16" x2="112" y2="64"/>
    <line x1="16" y1="64" x2="64" y2="112"/>
    <line x1="64" y1="112" x2="112" y2="64"/>
  </g>
</svg>
```

Dieses Pattern kann als grafisches System über die ganze Seite gedacht werden: als Hintergrundstruktur, als Sektionsteiler, als Rahmen für Content-Blöcke.

### Content-Blöcke (in dieser Reihenfolge auf der Page)

1. **Hero:** "BAUT SICH SELBST. WARTET SICH SELBST. HEILT SICH SELBST." + Subline: Plattform für maßgeschneiderte Business-Software + Logo
2. **Problem:** "Maßgeschneiderte Software. In Stunden, nicht Monaten." — Warum bestehende Wege zu teuer und zu langsam sind
3. **Lösung:** "Dein Problem. Deine Lösung. Dein Tempo." — Was Fachwerk ist, für Business-Anwender gebaut
4. **Drei Säulen** (als Karten oder Spalten):
   - Baut sich selbst, wartet sich selbst, heilt sich selbst
   - Gebaut für Business, nicht für Entwickler
   - Code wo Code reicht. AI wo AI zählt.
5. **Konkretes Beispiel:** Tour-Dokumente-Szenario mit AI-Eskalation
6. **Banner:** "Live auf der LogiMat 2026"
7. **CTA:** Demo anfragen

### 9 verschiedene Ansätze — Ideen zur Differenzierung

1. Klassisch vertikal, großer Hero mit Fachwerk-Pattern als Hintergrundstruktur
2. Asymmetrisches Layout, Content links, große grafische Fachwerk-Struktur rechts
3. Horizontale Sektionen mit Fachwerk-Balken als Sektionsteiler
4. Dark-on-light Kontrast-Blöcke, wechselnde Hintergründe
5. Großes zentrales Fachwerk-Pattern das als Container für alle Content-Blöcke dient
6. Minimalistisch, viel Whitespace, nur Text und feine Linien
7. Magazine/Editorial Layout, mehrspaltig, technische Zeichnungs-Ästhetik
8. Full-bleed Hero mit animiertem Fachwerk-Grid-Aufbau (als Static dargestellt)
9. Modulares Brick-Grid wo jeder Content-Block ein "Brick" im Fachwerk ist

Jeder Entwurf zeigt die gesamte Page als scrollbares Mockup (nicht nur den Hero). Zeige genug Detail, dass man den Text lesen und das Layout verstehen kann.

Rendere alle 9 Entwürfe in einem 3x3 Grid in einem einzigen Bild. Nummeriere jeden Entwurf (1-9).
