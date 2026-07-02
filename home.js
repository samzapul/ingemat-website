/* ============================================================
   HOME — Storytelling interactions
   Scroll reveals, the material system diagram, and the
   industries hover backgrounds. Hero / nav / footer / resources
   / contact are untouched and have no logic here.
   ============================================================ */

const gsap = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════════════════════════
   GENERIC REVEALS — .hm-reveal fades/translates up once,
   .hm-line (manifesto heading) staggers in with it.
══════════════════════════════════════════════════════════ */
function initReveals() {
  const els = document.querySelectorAll('.hm-reveal');
  els.forEach((el, i) => {
    const reveal = () => {
      el.classList.add('is-visible');
      el.querySelectorAll('.hm-line').forEach((line) => line.classList.add('is-visible'));
    };
    if (ScrollTrigger) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: reveal,
      });
    } else {
      /* Fallback without GSAP: IntersectionObserver */
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { reveal(); io.disconnect(); }
        });
      }, { threshold: 0.15 });
      io.observe(el);
    }
  });
}

/* ══════════════════════════════════════════════════════════
   SECTION 3 — ONE PROJECT. MANY MATERIALS.
   Data-driven relationship diagram with animated SVG links.
══════════════════════════════════════════════════════════ */
const SYSTEM_RELATIONS = {
  coastal: ['geotextiles', 'gabions', 'steel'],
  ground:  ['geocells', 'geogrids', 'geotextiles'],
  ogm:     ['steelpipe', 'geotextiles', 'drainage'],
};

function initSystemDiagram() {
  const container = document.getElementById('hm-diagram');
  const svg = document.getElementById('hm-diagram-svg');
  if (!container || !svg) return;

  const solutionNodes = Array.from(container.querySelectorAll('.hm-node--solution'));
  const materialNodes = Array.from(container.querySelectorAll('.hm-node--material'));
  const allNodes = [...solutionNodes, ...materialNodes];

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const links = [];
  Object.entries(SYSTEM_RELATIONS).forEach(([solId, mats]) => {
    mats.forEach((matId) => {
      const path = document.createElementNS(SVG_NS, 'path');
      path.classList.add('hm-link');
      path.dataset.solution = solId;
      path.dataset.material = matId;
      svg.appendChild(path);
      links.push({ solId, matId, path });
    });
  });

  function buildLines() {
    const rect = container.getBoundingClientRect();
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);

    links.forEach(({ solId, matId, path }) => {
      const solEl = container.querySelector(`.hm-node--solution[data-node="${solId}"]`);
      const matEl = container.querySelector(`.hm-node--material[data-node="${matId}"]`);
      if (!solEl || !matEl) return;
      const sr = solEl.getBoundingClientRect();
      const mr = matEl.getBoundingClientRect();
      const x1 = sr.left + sr.width / 2 - rect.left;
      const y1 = sr.bottom - rect.top;
      const x2 = mr.left + mr.width / 2 - rect.left;
      const y2 = mr.top - rect.top;
      const midY = (y1 + y2) / 2;
      path.setAttribute('d', `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`);
    });
  }

  function clearHighlight() {
    allNodes.forEach((n) => n.classList.remove('is-active', 'is-dim'));
    links.forEach(({ path }) => path.classList.remove('is-active', 'is-dim'));
  }

  function highlightSolution(solId) {
    const mats = SYSTEM_RELATIONS[solId] || [];
    solutionNodes.forEach((n) => {
      const active = n.dataset.node === solId;
      n.classList.toggle('is-active', active);
      n.classList.toggle('is-dim', !active);
    });
    materialNodes.forEach((n) => {
      const active = mats.includes(n.dataset.node);
      n.classList.toggle('is-active', active);
      n.classList.toggle('is-dim', !active);
    });
    links.forEach(({ solId: s, path }) => {
      const active = s === solId;
      path.classList.toggle('is-active', active);
      path.classList.toggle('is-dim', !active);
    });
  }

  function highlightMaterial(matId) {
    const sols = Object.keys(SYSTEM_RELATIONS).filter((s) => SYSTEM_RELATIONS[s].includes(matId));
    materialNodes.forEach((n) => {
      const active = n.dataset.node === matId;
      n.classList.toggle('is-active', active);
      n.classList.toggle('is-dim', !active);
    });
    solutionNodes.forEach((n) => {
      const active = sols.includes(n.dataset.node);
      n.classList.toggle('is-active', active);
      n.classList.toggle('is-dim', !active);
    });
    links.forEach(({ matId: m, path }) => {
      const active = m === matId;
      path.classList.toggle('is-active', active);
      path.classList.toggle('is-dim', !active);
    });
  }

  solutionNodes.forEach((n) => {
    const id = n.dataset.node;
    n.addEventListener('mouseenter', () => highlightSolution(id));
    n.addEventListener('focus', () => highlightSolution(id));
    n.addEventListener('mouseleave', clearHighlight);
    n.addEventListener('blur', clearHighlight);
    n.addEventListener('click', () => highlightSolution(id));
  });
  materialNodes.forEach((n) => {
    const id = n.dataset.node;
    n.addEventListener('mouseenter', () => highlightMaterial(id));
    n.addEventListener('focus', () => highlightMaterial(id));
    n.addEventListener('mouseleave', clearHighlight);
    n.addEventListener('blur', clearHighlight);
    n.addEventListener('click', () => highlightMaterial(id));
  });

  requestAnimationFrame(buildLines);
  window.addEventListener('load', buildLines);

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildLines, 150);
  });
}

/* ══════════════════════════════════════════════════════════
   SECTION 5 — INDUSTRIES WE SERVE
   Hovering a word crossfades a full-bleed background image.
══════════════════════════════════════════════════════════ */
function initIndustries() {
  const bg = document.getElementById('hm-industries-bg');
  const words = document.querySelectorAll('.hm-industry-word');
  if (!bg || !words.length) return;

  words.forEach((word) => {
    const src = word.dataset.bg;
    const activate = () => {
      bg.style.backgroundImage = `url("${src}")`;
      bg.classList.add('is-active');
      words.forEach((w) => w.classList.toggle('is-active', w === word));
    };
    word.addEventListener('mouseenter', activate);
    word.addEventListener('focus', activate);
  });

  const list = document.querySelector('.hm-industries-list');
  if (list) {
    list.addEventListener('mouseleave', () => {
      bg.classList.remove('is-active');
      words.forEach((w) => w.classList.remove('is-active'));
    });
  }
}

/* ══════════════════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initReveals();
  initSystemDiagram();
  initIndustries();
});
