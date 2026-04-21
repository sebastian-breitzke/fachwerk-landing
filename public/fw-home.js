// Fachwerk landing — shared page behavior.
// Reads per-locale content from window.FW_HOME (set inline in each page).

(function () {
  const slides = document.querySelectorAll('.hr-slide');
  const dots = document.querySelectorAll('.hr-dot');
  const caption = document.getElementById('slide-caption');
  const fsBtn = document.getElementById('hr-fs');
  const lb = document.getElementById('hr-lightbox');
  const lbImg = document.getElementById('hr-lb-img');
  const lbClose = document.getElementById('hr-lb-close');
  const lbPrev = document.getElementById('hr-lb-prev');
  const lbNext = document.getElementById('hr-lb-next');
  if (!slides.length) return;

  let idx = 0;
  let timer;

  function show(n) {
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    const cap = slides[idx].getAttribute('data-caption');
    if (cap && caption) caption.textContent = cap;
    if (lb && lb.classList.contains('open')) {
      lbImg.src = slides[idx].dataset.full || slides[idx].src;
      lbImg.alt = slides[idx].alt;
    }
  }

  function schedule() {
    clearTimeout(timer);
    timer = setTimeout(() => { show(idx + 1); schedule(); }, 4500);
  }

  dots.forEach(d => d.addEventListener('click', () => {
    show(parseInt(d.dataset.i, 10));
    schedule();
  }));

  function openLb() {
    clearTimeout(timer);
    lbImg.src = slides[idx].dataset.full || slides[idx].src;
    lbImg.alt = slides[idx].alt;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLb() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    schedule();
  }
  if (fsBtn) fsBtn.addEventListener('click', openLb);
  slides.forEach(s => s.addEventListener('click', openLb));
  if (lbClose) lbClose.addEventListener('click', closeLb);
  if (lb) lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
  if (lbPrev) lbPrev.addEventListener('click', () => show(idx - 1));
  if (lbNext) lbNext.addEventListener('click', () => show(idx + 1));
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === 'ArrowRight') show(idx + 1);
  });

  schedule();
})();

(function () {
  const pillars = document.querySelectorAll('.pillar');
  const nodes = document.querySelectorAll('.pillar-node');
  const timber = document.querySelector('.timber');
  if (!pillars.length || !timber) return;
  function setActive(p) {
    pillars.forEach(el => el.classList.toggle('active', el.dataset.p === String(p)));
    nodes.forEach(n => {
      const match = n.dataset.p === String(p);
      n.querySelector('.node').classList.toggle('active', match);
      const lbl = n.querySelector('.node-label');
      if (lbl) lbl.classList.toggle('active', match);
    });
    timber.classList.remove('p-0', 'p-1', 'p-2', 'p-3', 'p-4');
    if (p !== null && p !== undefined) {
      timber.classList.add('hovering', 'p-' + p);
    }
  }
  setActive(2);
  pillars.forEach(el => {
    el.addEventListener('click', () => setActive(el.dataset.p));
  });
  nodes.forEach(n => {
    n.addEventListener('click', () => setActive(n.dataset.p));
    n.style.cursor = 'pointer';
  });
})();

(function () {
  const FW = window.FW_HOME || {};
  const USE_CASES = FW.useCases || {};
  const MT = FW.mock || {};

  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(c => {
        if (c == null) return;
        e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
    return e;
  }

  function renderPara(parts) {
    const p = document.createElement('p');
    parts.forEach(part => {
      if (typeof part === 'string') p.appendChild(document.createTextNode(part));
      else if (part.em) p.appendChild(el('em', null, part.em));
      else if (part.strong) p.appendChild(el('strong', null, part.strong));
    });
    return p;
  }

  function mockNord() {
    const t = MT.nord || {};
    const k = t.kpis || [];
    const a = t.alerts || [];
    return el('div', { class: 'uc-mock mk-nord' }, [
      el('div', { class: 'uc-mock-chrome' }, [
        el('span', null, t.chrome || ''),
        el('div', { class: 'dots' }, [el('span'), el('span'), el('span')]),
      ]),
      el('div', { class: 'uc-mock-body' }, [
        el('div', { class: 'kpi-row' }, [
          el('div', { class: 'kpi' }, [
            el('div', { class: 'lbl' }, (k[0] && k[0][0]) || ''),
            el('div', { class: 'val' }, (k[0] && k[0][1]) || ''),
            el('div', { class: 'delta', style: 'color:var(--muted)' }, (k[0] && k[0][2]) || ''),
          ]),
          el('div', { class: 'kpi warn' }, [
            el('div', { class: 'lbl' }, (k[1] && k[1][0]) || ''),
            el('div', { class: 'val' }, (k[1] && k[1][1]) || ''),
            el('div', { class: 'delta' }, (k[1] && k[1][2]) || ''),
          ]),
          el('div', { class: 'kpi' }, [
            el('div', { class: 'lbl' }, (k[2] && k[2][0]) || ''),
            el('div', { class: 'val' }, (k[2] && k[2][1]) || ''),
            el('div', { class: 'delta', style: 'color:var(--accent)' }, (k[2] && k[2][2]) || ''),
          ]),
        ]),
        el('div', { class: 'alerts' }, a.map((row, i) => {
          const cls = i === a.length - 1 ? 'alert ok' : 'alert warn';
          return el('div', { class: cls }, [
            el('span', { class: 'sku' }, row[0] || ''),
            el('span', { class: 'msg' }, row[1] || ''),
            el('span', { class: 'act' }, row[2] || ''),
          ]);
        })),
      ]),
    ]);
  }

  function mockStahl() {
    const t = MT.stahl || {};
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 300 60');
    svg.setAttribute('preserveAspectRatio', 'none');
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', '0'); line.setAttribute('y1', '42'); line.setAttribute('x2', '300'); line.setAttribute('y2', '42');
    line.setAttribute('stroke', 'var(--line-2)'); line.setAttribute('stroke-dasharray', '3 4');
    svg.appendChild(line);
    const poly = document.createElementNS(svgNS, 'polyline');
    poly.setAttribute('points', '0,46 20,38 40,44 60,34 80,44 100,40 120,45 140,36 160,43 180,46 200,8 220,16 240,46 260,40 280,43 300,44');
    poly.setAttribute('fill', 'none'); poly.setAttribute('stroke', 'var(--accent)'); poly.setAttribute('stroke-width', '2.2');
    poly.setAttribute('stroke-linejoin', 'round'); poly.setAttribute('stroke-linecap', 'round');
    svg.appendChild(poly);
    const circ = document.createElementNS(svgNS, 'circle');
    circ.setAttribute('cx', '200'); circ.setAttribute('cy', '8'); circ.setAttribute('r', '3.5'); circ.setAttribute('fill', 'var(--warn)');
    svg.appendChild(circ);
    const txt = document.createElementNS(svgNS, 'text');
    txt.setAttribute('x', '209'); txt.setAttribute('y', '7');
    txt.setAttribute('font-family', 'IBM Plex Mono'); txt.setAttribute('font-size', '7'); txt.setAttribute('fill', 'var(--warn)');
    txt.textContent = t.spcText || '';
    svg.appendChild(txt);

    const charges = t.charges || [];
    const chargeEls = charges.map((c, i) => {
      const cls = i === 0 ? 'charge block' : 'charge ok';
      return el('div', { class: cls }, [
        el('span', { class: 'id' }, c[0] || ''),
        el('span', { class: 'status' }, c[1] || ''),
        el('span', { class: 'btn-mini' }, c[2] || ''),
      ]);
    });

    return el('div', { class: 'uc-mock mk-stahl' }, [
      el('div', { class: 'uc-mock-chrome' }, [
        el('span', null, t.chrome || ''),
        el('div', { class: 'dots' }, [el('span'), el('span'), el('span')]),
      ]),
      el('div', { class: 'uc-mock-body' }, [
        el('div', { class: 'shift-head' }, [
          el('h6', null, t.h6 || ''),
          el('span', { class: 'time' }, t.time || ''),
        ]),
        el('div', { class: 'charge-row' }, chargeEls),
        el('div', { class: 'spc-trace' }, [svg]),
      ]),
    ]);
  }

  function makeFinding(cls, label, val, unit, flag) {
    const valSpan = el('span', { class: 'val' }, val + ' ');
    if (unit) valSpan.appendChild(el('span', { class: 'unit' }, unit));
    return el('div', { class: 'finding ' + cls }, [
      el('span', { class: 'label' }, label),
      el('span'),
      valSpan,
      el('span', { class: 'flag' }, flag),
    ]);
  }

  function mockMed() {
    const t = MT.med || {};
    const f = t.findings || [];
    return el('div', { class: 'uc-mock mk-med' }, [
      el('div', { class: 'uc-mock-chrome' }, [
        el('span', null, t.chrome || ''),
        el('div', { class: 'dots' }, [el('span'), el('span'), el('span')]),
      ]),
      el('div', { class: 'uc-mock-body' }, [
        el('div', { class: 'patient-head' }, [
          el('h6', null, t.h6 || ''),
          el('span', { class: 'id' }, t.id || ''),
        ]),
        el('div', { class: 'findings' }, [
          ...f.map(row => makeFinding(row[0], row[1], row[2], row[3], row[4])),
          el('div', { class: 'finding' }, [
            el('span', { class: 'label' }, t.routeLabel || ''),
            el('span', { style: 'font-family:IBM Plex Sans; color:var(--accent); font-size:0.7rem;' }, t.routeValue || ''),
            el('span'),
            el('span'),
          ]),
        ]),
      ]),
    ]);
  }

  function mockGruen() {
    const t = MT.gruen || {};
    const m = t.match || [];
    const actions = t.actions || [];
    return el('div', { class: 'uc-mock mk-gruen' }, [
      el('div', { class: 'uc-mock-chrome' }, [
        el('span', null, t.chrome || ''),
        el('div', { class: 'dots' }, [el('span'), el('span'), el('span')]),
      ]),
      el('div', { class: 'uc-mock-body' }, [
        el('div', { class: 'inv-head' }, [
          el('h6', null, t.h6 || ''),
          el('span', { class: 'num' }, t.num || ''),
        ]),
        el('div', { class: 'match-grid' }, m.map((row, i) => {
          const cls = i === m.length - 1 ? 'match warn' : 'match ok';
          return el('div', { class: cls }, [
            el('div', { class: 'lbl' }, row[0] || ''),
            el('div', { class: 'val' }, row[1] || ''),
          ]);
        })),
        el('div', { class: 'diff-row' }, [
          el('span', { class: 'diff-label' }, t.diffLabel || ''),
          el('span', null, t.diffText || ''),
          el('span', { class: 'amt warn' }, t.diffAmt || ''),
        ]),
        el('div', { class: 'action-row' }, actions.map((a, i) =>
          el('button', i === 0 ? { class: 'pr' } : null, a))),
      ]),
    ]);
  }

  function mockDach() {
    const t = MT.dach || {};
    const channels = t.channels || [];
    const threads = t.threads || [];
    return el('div', { class: 'uc-mock mk-dach' }, [
      el('div', { class: 'uc-mock-chrome' }, [
        el('span', null, t.chrome || ''),
        el('div', { class: 'dots' }, [el('span'), el('span'), el('span')]),
      ]),
      el('div', { class: 'uc-mock-body' }, [
        el('div', { class: 'obj-head' }, [
          el('h6', null, t.h6 || ''),
          el('div', { class: 'sub' }, t.sub || ''),
        ]),
        el('div', { class: 'channels' }, channels.map(c =>
          el('div', { class: c[2] ? 'channel hot' : 'channel' }, [
            el('div', { class: 'name' }, c[0] || ''),
            el('div', { class: 'count' }, c[1] || ''),
          ]))),
        el('div', { class: 'threads' }, threads.map((th, i) =>
          el('div', { class: i === 0 ? 'thread new' : 'thread' }, [
            el('span', { class: 'from' }, th[0] || ''),
            el('span', { class: 'preview' }, th[1] || ''),
            el('span', { class: 'time' }, th[2] || ''),
          ]))),
      ]),
    ]);
  }

  const MOCKS = { nord: mockNord, stahl: mockStahl, med: mockMed, gruen: mockGruen, dach: mockDach };

  function renderUseCase(key) {
    const uc = USE_CASES[key];
    if (!uc) return;
    const stage = document.getElementById('uc-stage');
    if (!stage) return;
    while (stage.firstChild) stage.removeChild(stage.firstChild);

    const copy = el('div', { class: 'uc-copy' }, [
      el('span', { class: 'uc-branch' }, uc.branch),
      el('h3', null, uc.title),
    ]);
    uc.body.forEach(parts => copy.appendChild(renderPara(parts)));
    const dl = el('dl', { class: 'uc-meta' });
    uc.meta.forEach(m => {
      dl.appendChild(el('div', null, [
        el('dt', null, m[0]),
        el('dd', null, m[1]),
      ]));
    });
    copy.appendChild(dl);

    stage.appendChild(copy);
    const mockFn = MOCKS[uc.mock];
    if (mockFn) stage.appendChild(el('div', null, mockFn()));

    document.querySelectorAll('.uc-tab').forEach(t => t.classList.toggle('active', t.dataset.uc === key));
  }

  document.querySelectorAll('.uc-tab').forEach(tab => {
    tab.addEventListener('click', () => renderUseCase(tab.dataset.uc));
  });

  const initial = (window.TWEAKS && window.TWEAKS.useCase) || Object.keys(USE_CASES)[0];
  if (initial) renderUseCase(initial);
})();
