# Multi-Page Restructure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split `index.html` into three pages (Marketing, Beispiele, Kontakt) with shared cross-page navigation.

**Architecture:** Extract sections from the monolithic 1470-line `index.html` into three standalone HTML files. Each file carries its own inline CSS and JS. Navigation changes from anchor-links to page links. Delete English version.

**Tech Stack:** Vanilla HTML/CSS/JS, static site on Cloudflare Pages.

---

## File Structure

| File | Responsibility | Source lines |
|------|---------------|-------------|
| `index.html` | Marketing landing: Hero, Problem, Pillars, No-List, Deployment, Mini-CTA, Footer | Lines 719-801, 1374-1418 (content); Lines 10-674 (CSS — minus industry/example styles) |
| `beispiele.html` | Industry examples: Intro, Switcher, 5 Panels, Mini-CTA, Footer | Lines 801-1372 (content); Industry/example CSS + mockup styles |
| `kontakt.html` | Contact: Form, direct contact info, Footer | New content, shared base CSS |
| `en/` | Deleted entirely | — |

All three files share: CSS variables, fonts, nav, footer, reveal animation, responsive basics.

---

### Task 1: Create `beispiele.html`

This is the largest extraction — all industry content moves here.

**Files:**
- Create: `beispiele.html`
- Source: `index.html` lines 801-1372 (industry section + all panels), lines 10-674 (shared CSS + industry CSS + mockup CSS)

- [ ] **Step 1: Create `beispiele.html` with full structure**

Create `beispiele.html` containing:

1. **Head:** Same as current `index.html` head but:
   - Title: `Fachwerk — Beispiele`
   - Remove `<link rel="alternate" hreflang="en" ...>`
   - CSS: Include only shared styles (variables, fonts, grid, nav, footer, reveal, responsive) + industry-section + industry-pills + industry-panel + example + terminal-quote + punchline + all 5 mockup `<style>` blocks

2. **Nav:** Updated from anchor-links to page-links:
   ```html
   <nav>
     <!-- same logo SVG -->
     <div class="nav-links">
       <a href="/">Home</a>
       <a href="/beispiele.html" class="nav-active">Beispiele</a>
       <a href="/kontakt.html">Kontakt</a>
     </div>
     <!-- same hamburger -->
   </nav>
   <!-- Mobile menu with same page-links -->
   ```

3. **Sticky pill bar** directly after nav/mobile-menu, outside `.content`:
   ```html
   <div class="pill-bar" id="pill-bar">
     <div class="pill-bar-inner">
       <span class="pill-bar-label">Deine Industrie?</span>
       <div class="industry-pills">
         <!-- same 5 pills -->
       </div>
     </div>
   </div>
   ```

4. **Content:** Short intro section + industry-section (without the pills, since they're in the sticky bar) + all 5 panels + divider + mini-CTA + footer

5. **CSS for sticky pill bar:**
   ```css
   .pill-bar {
     position: sticky;
     top: 0;
     z-index: 90;
     background: var(--bg);
     border-bottom: 1px solid var(--border);
     padding: 0.7rem 8vw;
   }
   .pill-bar-inner {
     display: flex;
     align-items: center;
     gap: 1.5rem;
   }
   .pill-bar-label {
     font-family: var(--font-mono);
     font-weight: 600;
     font-size: 0.7rem;
     text-transform: uppercase;
     letter-spacing: 0.1em;
     color: var(--muted-text);
     white-space: nowrap;
   }
   ```

6. **CSS for nav-active:**
   ```css
   .nav-active { color: var(--primary) !important; }
   ```

7. **Mini-CTA at bottom** (replaces the full CTA):
   ```html
   <section class="logimat">
     <h2 class="logimat-headline">Klingt interessant?<br>Lass uns reden.</h2>
     <a href="/kontakt.html" class="cta-button">Kontakt aufnehmen</a>
   </section>
   ```

8. **Footer:** Same as current.

9. **JS:** Industry switcher + scroll reveal + mobile menu (no sticky observer needed — pill bar is CSS sticky).

- [ ] **Step 2: Verify `beispiele.html` opens correctly**

```bash
open beispiele.html
```

Check: pills are sticky at top, switching works, all 5 panels render, mini-CTA links to kontakt.html.

- [ ] **Step 3: Commit**

```bash
git add beispiele.html
git commit -m "feat: create beispiele.html with industry examples and sticky pill bar"
```

---

### Task 2: Slim down `index.html` to marketing page

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update `index.html`**

Keep:
- Head (update title, remove hreflang alternate link)
- CSS: shared styles + hero + section + pillars + no-list + logimat + CTA button + footer + reveal + responsive — **remove** all industry/example/terminal-quote/mockup CSS
- Nav: change to page-links (Home active, Beispiele, Kontakt) — remove EN link
- Mobile menu: same page-links
- Content sections: Hero, divider, Problem, divider, Pillars, divider, No-List, divider, Deployment, divider
- Replace full CTA with mini-CTA linking to `/kontakt.html`
- Footer: unchanged

Remove:
- Industry section (`<section class="industry-section">`)
- All 5 `<div class="industry-panel">` blocks
- All dividers between panels
- Industry switcher JS
- All mockup `<style>` blocks (nw-, sw-, medvita-, gp-, dachstein-)
- `<link rel="alternate" hreflang="en" ...>`

- [ ] **Step 2: Verify `index.html` opens correctly**

```bash
open index.html
```

Check: Hero, Problem, Pillars, No-List, Deployment, Mini-CTA, Footer all render. No broken references. Nav links work.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: slim index.html to marketing page with cross-page nav"
```

---

### Task 3: Create `kontakt.html`

**Files:**
- Create: `kontakt.html`

- [ ] **Step 1: Create `kontakt.html` with contact form and info**

Structure:

1. **Head:** Same shared head, title: `Fachwerk — Kontakt`

2. **Nav:** Same as other pages, "Kontakt" marked as active.

3. **Content:**
   ```html
   <div class="content">
     <section class="kontakt-section">
       <h1 class="kontakt-headline">Klingt interessant?<br>Lass uns reden.</h1>
       <p class="kontakt-intro">Du hast eine Idee, ein Problem, oder willst einfach wissen, ob Fachwerk zu dir passt? Schreib mir.</p>

       <div class="kontakt-grid">
         <form class="kontakt-form" action="mailto:sebastian@s16e.de" method="POST" enctype="text/plain">
           <label class="kontakt-label" for="name">Name</label>
           <input class="kontakt-input" type="text" id="name" name="Name" required>

           <label class="kontakt-label" for="email">E-Mail</label>
           <input class="kontakt-input" type="email" id="email" name="Email" required>

           <label class="kontakt-label" for="nachricht">Nachricht</label>
           <textarea class="kontakt-input kontakt-textarea" id="nachricht" name="Nachricht" rows="5" required></textarea>

           <button type="submit" class="cta-button">Nachricht senden</button>
         </form>

         <div class="kontakt-info">
           <h3 class="kontakt-info-title">Direkt erreichen</h3>
           <div class="kontakt-info-item">
             <span class="kontakt-info-label">E-Mail</span>
             <a href="mailto:sebastian@s16e.de">sebastian@s16e.de</a>
           </div>
           <div class="kontakt-info-item">
             <span class="kontakt-info-label">Telefon</span>
             <a href="tel:+491724290654">0172 4290654</a>
           </div>
           <div class="kontakt-info-item">
             <span class="kontakt-info-label">LinkedIn</span>
             <a href="https://www.linkedin.com/in/sebastian-breitzke/" target="_blank" rel="noopener">Sebastian Breitzke</a>
           </div>
           <div class="kontakt-info-item">
             <span class="kontakt-info-label">Web</span>
             <a href="https://s16e.de" target="_blank" rel="noopener">s16e.de</a>
           </div>
         </div>
       </div>
     </section>
   </div>
   ```

4. **CSS for contact page:**
   ```css
   .kontakt-section {
     min-height: 80vh;
     padding: 10rem 8vw 6rem;
     display: flex;
     flex-direction: column;
     justify-content: center;
   }
   .kontakt-headline {
     font-family: var(--font-mono);
     font-weight: 600;
     font-size: clamp(1.6rem, 4vw, 3rem);
     text-transform: uppercase;
     letter-spacing: 0.04em;
     line-height: 1.15;
     color: var(--fg);
     margin-bottom: 1.5rem;
   }
   .kontakt-intro {
     font-size: 1.05rem;
     color: var(--muted-text);
     max-width: 40rem;
     line-height: 1.8;
     margin-bottom: 3rem;
   }
   .kontakt-grid {
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 4rem;
     max-width: 52rem;
   }
   .kontakt-form {
     display: flex;
     flex-direction: column;
     gap: 0.5rem;
   }
   .kontakt-label {
     font-family: var(--font-mono);
     font-size: 0.7rem;
     font-weight: 600;
     text-transform: uppercase;
     letter-spacing: 0.1em;
     color: var(--muted-text);
     margin-top: 0.5rem;
   }
   .kontakt-input {
     font-family: var(--font-body);
     font-size: 0.95rem;
     padding: 0.7rem;
     border: 2px solid var(--border);
     background: #fff;
     color: var(--fg);
     outline: none;
     transition: border-color 0.15s;
   }
   .kontakt-input:focus {
     border-color: var(--primary);
   }
   .kontakt-textarea {
     resize: vertical;
     min-height: 8rem;
   }
   .kontakt-info {
     padding-top: 1.5rem;
   }
   .kontakt-info-title {
     font-family: var(--font-mono);
     font-weight: 600;
     font-size: 0.85rem;
     text-transform: uppercase;
     letter-spacing: 0.06em;
     color: var(--fg);
     margin-bottom: 2rem;
   }
   .kontakt-info-item {
     margin-bottom: 1.5rem;
   }
   .kontakt-info-label {
     display: block;
     font-family: var(--font-mono);
     font-size: 0.65rem;
     font-weight: 600;
     text-transform: uppercase;
     letter-spacing: 0.1em;
     color: var(--muted-text);
     margin-bottom: 0.3rem;
   }
   .kontakt-info-item a {
     font-size: 1rem;
     color: var(--fg);
     text-decoration: none;
     border-bottom: 1px solid var(--border);
     transition: border-color 0.15s;
   }
   .kontakt-info-item a:hover {
     border-color: var(--primary);
   }
   @media (max-width: 700px) {
     .kontakt-grid {
       grid-template-columns: 1fr;
       gap: 3rem;
     }
   }
   ```

5. **Footer:** Same as other pages.
6. **JS:** Scroll reveal + mobile menu only.

- [ ] **Step 2: Verify `kontakt.html` opens correctly**

```bash
open kontakt.html
```

Check: Form renders, mailto action works on submit, contact info displays, nav links work, mobile responsive.

- [ ] **Step 3: Commit**

```bash
git add kontakt.html
git commit -m "feat: create kontakt.html with form and direct contact info"
```

---

### Task 4: Delete English version

**Files:**
- Delete: `en/index.html`

- [ ] **Step 1: Delete en/ directory**

```bash
rm -rf en/
```

- [ ] **Step 2: Verify no references to en/ remain**

```bash
rg "en/" index.html beispiele.html kontakt.html
```

Should return no results (hreflang links already removed in Tasks 1-3).

- [ ] **Step 3: Commit**

```bash
git add -A en/
git commit -m "chore: remove English version (will rebuild later)"
```

---

### Task 5: Cross-page verification

- [ ] **Step 1: Open all three pages and verify navigation**

```bash
open index.html beispiele.html kontakt.html
```

Check per page:
- **index.html:** Hero → Problem → Pillars → No-List → Deployment → Mini-CTA → Footer. Nav: "Home" active. Beispiele/Kontakt links work.
- **beispiele.html:** Sticky pill bar visible. Switching industries works. Mini-CTA → kontakt.html. Nav: "Beispiele" active.
- **kontakt.html:** Form renders. Contact info present. Phone number: 0172 4290654. Nav: "Kontakt" active.
- **All pages:** Mobile hamburger works. Footer consistent. No broken styles or JS errors.

- [ ] **Step 2: Final commit if any fixes needed**
