/* ============================================================
   GROUND STABILIZATION — Cinematic Experience
   Same pinned-scroll / image-sequence / glass-card architecture
   as Coastal Protection, own story and visual identity.
   ============================================================ */

import { initNavScroll, initMobileMenu } from './js/nav-utils.js';
import { initLanguageFromUrlOrStorage, setLanguage, applyLanguageToLinks } from './js/lang-utils.js';

const gsap          = window.gsap;
const ScrollTrigger = window.ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════════ */
const translations = {
  en: {
    'nav.home': 'Home', 'nav.solutions': 'Solutions', 'nav.products': 'Products',
    'nav.capabilities': 'Capabilities', 'nav.about': 'About', 'nav.contact': 'Contact',
    'nav.enquire': 'Enquire', 'nav.sub.coastal': 'Coastal Protection',
    'nav.sub.ground': 'Ground Stabilization', 'nav.sub.mining': 'Oil, Gas and Mining',
    'nav.sub.steel': 'Steel', 'nav.sub.geosyn': 'Geosynthetics',
    'nav.sub.rocks': 'Amorphous Gabions',

    'gst.ch1.eyebrow': 'Ground Engineering',
    'gst.ch1.h1':      'Ground<br>Stabilization',
    'gst.ch1.sub':     'Engineering weak ground into reliable infrastructure.',
    'gst.ch1.scroll':  'Scroll to explore',

    'gst.ch2.h2':   'Failure',
    'gst.ch2.body': 'Soft saturated subgrades cannot support heavy construction equipment.',

    'gst.ch3.h2':   'Prepare',
    'gst.ch3.body': 'Every successful stabilization project begins with accurate surveying, grading and construction planning.',

    'gst.ch4.badge': '01 — HDPE Geocells',
    'gst.ch4.h2':    'Confine',
    'gst.ch4.body':  'Cellular confinement transforms weak ground into a reinforced structural foundation.',
    'gst.ch4.btn':   'Explore HDPE Geocells',

    'gst.ch5.h2':   'Build',
    'gst.ch5.body': 'Aggregate progressively locks into the cellular confinement system creating a mechanically stabilized layer.',

    'gst.ch6.h2':   'Compact',
    'gst.ch6.body': 'The stabilized layer becomes a dense engineered working platform.',

    'gst.ch7.h3':    'Perform',
    'gst.ch7.body1': 'The engineering disappears.',
    'gst.ch7.body2': 'The performance remains.',

    'gst.ch8.h2':   'Proven',
    'gst.ch8.body': 'The same ground that failed now supports heavy construction traffic.',

    'gst.ch9.h1':   'Ground Stabilization',
    'gst.ch9.body': 'From access roads and working platforms to large-scale industrial infrastructure, INGE&MAT engineers complete ground stabilization systems combining geosynthetics and advanced solutions to improve bearing capacity, control settlement and ensure long-term performance.',
    'gst.ch9.btn':  'View Products',

    'gst.tl.1': 'Opening', 'gst.tl.2': 'Failure',  'gst.tl.3': 'Prepare',
    'gst.tl.4': 'Confine', 'gst.tl.5': 'Build',    'gst.tl.6': 'Compact',
    'gst.tl.7': 'Perform', 'gst.tl.8': 'Proven',   'gst.tl.9': 'Enable',

    'gst.apps.eyebrow': 'Where We Build',
    'gst.apps.h2':      'Featured Ground Stabilization Applications',
    'gst.apps.lead':    'Engineering solutions for roads, working platforms and heavy civil infrastructure.',

    'gst.app1.title': 'Working Platforms',
    'gst.app1.desc':  'Heavy-duty temporary platforms supporting cranes, piling rigs and heavy construction equipment over weak soils.',
    'gst.app2.title': 'Access Roads',
    'gst.app2.desc':  'Stabilized haul roads and construction access routes built over saturated or low-bearing-capacity ground.',
    'gst.app3.title': 'Industrial Yards',
    'gst.app3.desc':  'Mechanically stabilized logistics and storage areas designed for repeated heavy traffic.',
    'gst.app4.title': 'Wind Farm Access',
    'gst.app4.desc':  'Permanent and temporary access roads supporting turbine transport and installation.',
    'gst.app5.title': 'Mining Haul Roads',
    'gst.app5.desc':  'Ground stabilization systems for repeated heavy mining truck traffic.',
    'gst.app6.title': 'Pipeline Corridors',
    'gst.app6.desc':  'Stable construction corridors crossing wetlands and soft ground.',

    'gst.sys.eyebrow': 'The Material System',
    'gst.sys.h2':      'Integrated Ground Systems',
    'gst.sys.lead':    'Every stabilization system combines multiple engineering layers working together.',

    'gst.diag.truck':       'Heavy Truck',
    'gst.diag.aggregate':   'Aggregate Layer',
    'gst.diag.geocell':     'HDPE Geocell',
    'gst.diag.geocell.tag': 'Confinement',
    'gst.diag.geogrid':     'Geogrid',
    'gst.diag.geotextile':  'Nonwoven Geotextile',
    'gst.diag.subgrade':    'Weak Saturated Subgrade',

    'gst.prod1.title': 'HDPE Geocells',
    'gst.prod1.role':  'Confinement',
    'gst.prod1.desc':  'Contain aggregate. Increase bearing capacity. Reduce rutting.',
    'gst.prod1.link':  'Explore HDPE Geocells',
    'gst.prod2.title': 'Geogrids',
    'gst.prod2.role':  'Reinforcement',
    'gst.prod2.desc':  'Distribute loads. Increase stiffness. Reduce deformation.',
    'gst.prod2.link':  'Explore Geogrids',
    'gst.prod3.title': 'Nonwoven Geotextiles',
    'gst.prod3.role':  'Separation & Filtration',
    'gst.prod3.desc':  'Separate aggregate from weak soil. Prevent contamination. Improve drainage.',
    'gst.prod3.link':  'Explore Geotextiles',

    'gst.cap.eyebrow': 'What We Deliver',
    'gst.cap.h2':      'Engineering Capabilities',
    'gst.cap.lead':    'From bearing capacity assessment to long-term performance evaluation — one integrated engineering service.',

    'gst.cap1.title': 'Bearing Capacity Assessment',
    'gst.cap1.body':  'Site-specific subgrade evaluation to determine load-bearing performance and stabilization requirements.',
    'gst.cap2.title': 'Working Platform Design',
    'gst.cap2.body':  'Engineered platform thickness and material specification for cranes, piling rigs and heavy equipment.',
    'gst.cap3.title': 'Construction Access Design',
    'gst.cap3.body':  'Haul road and access corridor engineering for repeated heavy-vehicle traffic over soft ground.',
    'gst.cap4.title': 'Aggregate Optimization',
    'gst.cap4.body':  'Fill material selection and layer thickness calculated to minimize aggregate consumption without compromising performance.',
    'gst.cap5.title': 'Ground Improvement Strategy',
    'gst.cap5.body':  'Integrated confinement, reinforcement and separation strategy tailored to soil and hydrological conditions.',
    'gst.cap6.title': 'Installation Support',
    'gst.cap6.body':  'Technical oversight and quality assurance during geocell, geogrid and geotextile placement.',
    'gst.cap7.title': 'Long-Term Performance Evaluation',
    'gst.cap7.body':  'Ongoing monitoring of rutting, settlement and platform performance under operational loading.',

    'gst.adv.eyebrow': 'Engineering Outcomes',
    'gst.adv.h2':      'Technical Advantages',
    'gst.adv1': 'Reduced Rutting',
    'gst.adv2': 'Improved Bearing Capacity',
    'gst.adv3': 'Lower Aggregate Requirements*',
    'gst.adv4': 'Faster Construction',
    'gst.adv5': 'Extended Service Life',
    'gst.adv6': 'More Reliable Construction Logistics',
    'gst.adv.note': '*Project dependent.',

    'gst.cta.eyebrow': 'Start a Project',
    'gst.cta.h2':      'Build on Confidence.',
    'gst.cta.body':    "Every major infrastructure project begins with stable ground. INGE&MAT engineers complete stabilization systems that transform weak subgrades into reliable foundations for roads, working platforms and critical infrastructure.",
    'gst.cta.btn1':    'Request Engineering Support',
    'gst.cta.btn2':    'View Geosynthetics',

    'footer.privacy':        'Privacy Policy',
    'footer.terms':          'Terms of Service',
    'footer.sustainability': 'Sustainability',
    'footer.copy':           '© 2024 INGE&MAT. All rights reserved.',
  },
  es: {
    'nav.home': 'Inicio', 'nav.solutions': 'Soluciones', 'nav.products': 'Productos',
    'nav.capabilities': 'Capacidades', 'nav.about': 'Nosotros', 'nav.contact': 'Contacto',
    'nav.enquire': 'Cotizar', 'nav.sub.coastal': 'Protección Costera',
    'nav.sub.ground': 'Estabilización de Suelos', 'nav.sub.mining': 'Petróleo, Gas y Minería',
    'nav.sub.steel': 'Aceros', 'nav.sub.geosyn': 'Geosintéticos',
    'nav.sub.rocks': 'Gaviones Amorfos',

    'gst.ch1.eyebrow': 'Ingeniería de Suelos',
    'gst.ch1.h1':      'Estabilización<br>de Suelos',
    'gst.ch1.sub':     'Convirtiendo suelos débiles en infraestructura confiable.',
    'gst.ch1.scroll':  'Desplácese para explorar',

    'gst.ch2.h2':   'Falla',
    'gst.ch2.body': 'Las subrasantes blandas y saturadas no pueden soportar equipos de construcción pesados.',

    'gst.ch3.h2':   'Preparar',
    'gst.ch3.body': 'Todo proyecto de estabilización exitoso comienza con topografía precisa, nivelación y planificación de obra.',

    'gst.ch4.badge': '01 — Geoceldas HDPE',
    'gst.ch4.h2':    'Confinar',
    'gst.ch4.body':  'El confinamiento celular transforma el suelo débil en una base estructural reforzada.',
    'gst.ch4.btn':   'Explorar Geoceldas HDPE',

    'gst.ch5.h2':   'Construir',
    'gst.ch5.body': 'El agregado se traba progresivamente en el sistema de confinamiento celular, creando una capa mecánicamente estabilizada.',

    'gst.ch6.h2':   'Compactar',
    'gst.ch6.body': 'La capa estabilizada se convierte en una plataforma de trabajo densa y diseñada con precisión.',

    'gst.ch7.h3':    'Rendir',
    'gst.ch7.body1': 'La ingeniería desaparece.',
    'gst.ch7.body2': 'El desempeño permanece.',

    'gst.ch8.h2':   'Comprobado',
    'gst.ch8.body': 'El mismo suelo que falló ahora soporta tráfico pesado de construcción.',

    'gst.ch9.h1':   'Estabilización de Suelos',
    'gst.ch9.body': 'Desde caminos de acceso y plataformas de trabajo hasta infraestructura industrial de gran escala, INGE&MAT diseña sistemas completos de estabilización de suelos combinando geosintéticos y soluciones avanzadas para mejorar la capacidad portante, controlar asentamientos y garantizar el desempeño a largo plazo.',
    'gst.ch9.btn':  'Ver Productos',

    'gst.tl.1': 'Apertura',   'gst.tl.2': 'Falla',      'gst.tl.3': 'Preparar',
    'gst.tl.4': 'Confinar',   'gst.tl.5': 'Construir',  'gst.tl.6': 'Compactar',
    'gst.tl.7': 'Rendir',     'gst.tl.8': 'Comprobado', 'gst.tl.9': 'Habilitar',

    'gst.apps.eyebrow': 'Dónde Construimos',
    'gst.apps.h2':      'Aplicaciones Destacadas de Estabilización de Suelos',
    'gst.apps.lead':    'Soluciones de ingeniería para vías, plataformas de trabajo e infraestructura civil pesada.',

    'gst.app1.title': 'Plataformas de Trabajo',
    'gst.app1.desc':  'Plataformas temporales de alta resistencia que soportan grúas, equipos de pilotaje y maquinaria pesada sobre suelos débiles.',
    'gst.app2.title': 'Vías de Acceso',
    'gst.app2.desc':  'Vías de acarreo estabilizadas y rutas de acceso construidas sobre suelos saturados o de baja capacidad portante.',
    'gst.app3.title': 'Patios Industriales',
    'gst.app3.desc':  'Áreas logísticas y de almacenamiento mecánicamente estabilizadas, diseñadas para tráfico pesado repetitivo.',
    'gst.app4.title': 'Acceso a Parques Eólicos',
    'gst.app4.desc':  'Vías de acceso permanentes y temporales que soportan el transporte e instalación de aerogeneradores.',
    'gst.app5.title': 'Vías de Acarreo Minero',
    'gst.app5.desc':  'Sistemas de estabilización de suelos para tráfico repetitivo de camiones mineros pesados.',
    'gst.app6.title': 'Corredores de Ductos',
    'gst.app6.desc':  'Corredores de construcción estables que atraviesan humedales y suelos blandos.',

    'gst.sys.eyebrow': 'El Sistema de Materiales',
    'gst.sys.h2':      'Sistemas de Suelo Integrados',
    'gst.sys.lead':    'Todo sistema de estabilización combina múltiples capas de ingeniería trabajando en conjunto.',

    'gst.diag.truck':       'Camión Pesado',
    'gst.diag.aggregate':   'Capa de Agregado',
    'gst.diag.geocell':     'Geocelda HDPE',
    'gst.diag.geocell.tag': 'Confinamiento',
    'gst.diag.geogrid':     'Geomalla',
    'gst.diag.geotextile':  'Geotextil No Tejido',
    'gst.diag.subgrade':    'Subrasante Débil Saturada',

    'gst.prod1.title': 'Geoceldas HDPE',
    'gst.prod1.role':  'Confinamiento',
    'gst.prod1.desc':  'Contienen el agregado. Aumentan la capacidad portante. Reducen el ahuellamiento.',
    'gst.prod1.link':  'Explorar Geoceldas HDPE',
    'gst.prod2.title': 'Geomallas',
    'gst.prod2.role':  'Refuerzo',
    'gst.prod2.desc':  'Distribuyen las cargas. Aumentan la rigidez. Reducen la deformación.',
    'gst.prod2.link':  'Explorar Geomallas',
    'gst.prod3.title': 'Geotextiles No Tejidos',
    'gst.prod3.role':  'Separación y Filtración',
    'gst.prod3.desc':  'Separan el agregado del suelo débil. Previenen la contaminación. Mejoran el drenaje.',
    'gst.prod3.link':  'Explorar Geotextiles',

    'gst.cap.eyebrow': 'Lo Que Ofrecemos',
    'gst.cap.h2':      'Capacidades de Ingeniería',
    'gst.cap.lead':    'Desde la evaluación de capacidad portante hasta la evaluación de desempeño a largo plazo — un servicio de ingeniería integrado.',

    'gst.cap1.title': 'Evaluación de Capacidad Portante',
    'gst.cap1.body':  'Evaluación específica de la subrasante para determinar el desempeño portante y los requerimientos de estabilización.',
    'gst.cap2.title': 'Diseño de Plataformas de Trabajo',
    'gst.cap2.body':  'Espesor de plataforma diseñado y especificación de materiales para grúas, equipos de pilotaje y maquinaria pesada.',
    'gst.cap3.title': 'Diseño de Accesos de Construcción',
    'gst.cap3.body':  'Ingeniería de vías de acarreo y corredores de acceso para tráfico repetitivo de vehículos pesados sobre suelo blando.',
    'gst.cap4.title': 'Optimización de Agregados',
    'gst.cap4.body':  'Selección de material de relleno y espesor de capa calculados para minimizar el consumo de agregado sin comprometer el desempeño.',
    'gst.cap5.title': 'Estrategia de Mejoramiento de Suelos',
    'gst.cap5.body':  'Estrategia integrada de confinamiento, refuerzo y separación, adaptada a las condiciones del suelo e hidrológicas.',
    'gst.cap6.title': 'Soporte de Instalación',
    'gst.cap6.body':  'Supervisión técnica y aseguramiento de calidad durante la instalación de geoceldas, geomallas y geotextiles.',
    'gst.cap7.title': 'Evaluación de Desempeño a Largo Plazo',
    'gst.cap7.body':  'Monitoreo continuo del ahuellamiento, asentamiento y desempeño de la plataforma bajo carga operativa.',

    'gst.adv.eyebrow': 'Resultados de Ingeniería',
    'gst.adv.h2':      'Ventajas Técnicas',
    'gst.adv1': 'Menor Ahuellamiento',
    'gst.adv2': 'Mayor Capacidad Portante',
    'gst.adv3': 'Menor Requerimiento de Agregados*',
    'gst.adv4': 'Construcción Más Rápida',
    'gst.adv5': 'Mayor Vida Útil',
    'gst.adv6': 'Logística de Construcción Más Confiable',
    'gst.adv.note': '*Depende del proyecto.',

    'gst.cta.eyebrow': 'Iniciar un Proyecto',
    'gst.cta.h2':      'Construya con Confianza.',
    'gst.cta.body':    'Todo gran proyecto de infraestructura comienza con un suelo estable. INGE&MAT diseña sistemas completos de estabilización que transforman subrasantes débiles en bases confiables para vías, plataformas de trabajo e infraestructura crítica.',
    'gst.cta.btn1':    'Solicitar Soporte de Ingeniería',
    'gst.cta.btn2':    'Ver Geosintéticos',

    'footer.privacy':        'Política de Privacidad',
    'footer.terms':          'Términos de Servicio',
    'footer.sustainability': 'Sostenibilidad',
    'footer.copy':           '© 2024 INGE&MAT. Todos los derechos reservados.',
  },
};

/* ── LANGUAGE TOGGLE ───────────────────────────────────────── */
let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  const enEl = document.getElementById('lang-en');
  const esEl = document.getElementById('lang-es');
  if (enEl) enEl.classList.toggle('lang-active', lang === 'en');
  if (esEl) esEl.classList.toggle('lang-active', lang === 'es');
  document.body.classList.toggle('lang-es', lang === 'es');
  document.documentElement.lang = lang;
  setLanguage(lang);
  applyLanguageToLinks(lang);
  if (currentChapter) updateTimeline(currentChapter);
}

function initLang() {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.addEventListener('click', () => applyLang(currentLang === 'en' ? 'es' : 'en'));
  applyLang(initLanguageFromUrlOrStorage());
}

/* ══════════════════════════════════════════════════════════
   CHAPTER DEFINITIONS
   900vh total. Active chapters cover progress 0–0.889 (800vh).
   Progress 0.889–1.0 is the resting pause on the last frame.
══════════════════════════════════════════════════════════ */
const CHAPTERS = [
  { id: 1, frame: 1, start: 0.000, end: 0.099, labelKey: 'gst.tl.1' },
  { id: 2, frame: 2, start: 0.099, end: 0.198, labelKey: 'gst.tl.2' },
  { id: 3, frame: 3, start: 0.198, end: 0.296, labelKey: 'gst.tl.3' },
  { id: 4, frame: 4, start: 0.296, end: 0.395, labelKey: 'gst.tl.4' },
  { id: 5, frame: 5, start: 0.395, end: 0.494, labelKey: 'gst.tl.5' },
  { id: 6, frame: 6, start: 0.494, end: 0.593, labelKey: 'gst.tl.6' },
  { id: 7, frame: 7, start: 0.593, end: 0.691, labelKey: 'gst.tl.7' },
  { id: 8, frame: 8, start: 0.691, end: 0.790, labelKey: 'gst.tl.8' },
  { id: 9, frame: 9, start: 0.790, end: 0.889, labelKey: 'gst.tl.9' },
];

/* ══════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════ */
let currentChapter = null;
let activeCardEl   = null;
let generation     = 0;
let floatTween     = null;

/* ══════════════════════════════════════════════════════════
   DOM REFS
══════════════════════════════════════════════════════════ */
const frames       = document.querySelectorAll('.gst-frame');
const progressFill = document.getElementById('gst-progress-fill');
const tlLabelEl    = document.getElementById('gst-tl-label');
const tlDots       = document.querySelectorAll('.gst-tl-dot');

let IS_MOBILE = window.innerWidth < 768;

const frameMap = {};
frames.forEach(img => { frameMap[+img.dataset.frame] = img; });

const cardMap = {};
CHAPTERS.forEach(ch => {
  const el = document.getElementById(`card-gst${ch.id}`);
  if (el) cardMap[ch.id] = el;
});

/* ══════════════════════════════════════════════════════════
   GSAP PERCENTAGE POSITIONING
   Only for cards that truly use left/top: 50%.
══════════════════════════════════════════════════════════ */
function getPercentPos(el) {
  if (!el) return {};
  if (el.classList.contains('gst-card--center')) return { xPercent: -50, yPercent: -50 };
  if (el.classList.contains('gst-card--left-mid') ||
      el.classList.contains('gst-card--right-mid'))  return { yPercent: -50 };
  if (el.classList.contains('gst-card--center-lower')) return { xPercent: -50 };
  return {};
}

function applyPercentPos(el) {
  if (!el || IS_MOBILE) return;
  const pct = getPercentPos(el);
  if (Object.keys(pct).length) gsap.set(el, pct);
}

/* ══════════════════════════════════════════════════════════
   FRAME SWITCHING — instant, no CSS transition
══════════════════════════════════════════════════════════ */
let lastFrame = -1;
function showFrame(n) {
  if (n === lastFrame) return;
  lastFrame = n;
  frames.forEach(img => img.classList.remove('is-active'));
  if (frameMap[n]) frameMap[n].classList.add('is-active');
}

/* ══════════════════════════════════════════════════════════
   FLOATING MOTION — subtle 5px over 9s
══════════════════════════════════════════════════════════ */
function startFloat(el) {
  if (floatTween) floatTween.kill();
  floatTween = gsap.to(el, {
    y: '-=5',
    duration: 9,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
}

function stopFloat() {
  if (floatTween) { floatTween.kill(); floatTween = null; }
}

/* ══════════════════════════════════════════════════════════
   CARD ANIMATIONS — calm, vertical, cinematic
══════════════════════════════════════════════════════════ */
function animateCardIn(el) {
  if (!el) return;
  const pct = IS_MOBILE ? {} : getPercentPos(el);
  gsap.killTweensOf(el);
  gsap.fromTo(el,
    { opacity: 0, y: 22, filter: 'blur(8px)', ...pct },
    {
      opacity: 1, y: 0, filter: 'blur(0px)', ...pct,
      duration: 1.0,
      ease: 'power3.out',
      onStart()    { el.style.visibility = 'visible'; el.classList.add('is-visible'); },
      onComplete() { startFloat(el); },
    }
  );
}

function animateCardOut(el, onComplete) {
  if (!el) { if (onComplete) onComplete(); return; }
  stopFloat();
  gsap.killTweensOf(el);
  const pct = IS_MOBILE ? {} : getPercentPos(el);
  gsap.to(el, {
    opacity: 0,
    y: -16,
    filter: 'blur(6px)',
    ...pct,
    duration: 0.55,
    ease: 'power2.in',
    onComplete() {
      el.style.visibility = 'hidden';
      el.classList.remove('is-visible');
      gsap.set(el, { x: 0, y: 0, filter: 'blur(0px)', ...pct });
      if (onComplete) onComplete();
    },
  });
}

/* ══════════════════════════════════════════════════════════
   TIMELINE
══════════════════════════════════════════════════════════ */
function updateTimeline(ch) {
  tlDots.forEach(d => d.classList.remove('is-active'));
  const dot = document.querySelector(`.gst-tl-dot[data-ch="${ch.id}"]`);
  if (dot) dot.classList.add('is-active');
  if (tlLabelEl) {
    const label = (translations[currentLang] || translations.en)[ch.labelKey] || '';
    tlLabelEl.textContent = label;
  }
}

/* ══════════════════════════════════════════════════════════
   CHAPTER SWITCHING
══════════════════════════════════════════════════════════ */
function switchChapter(newCh) {
  if (newCh === currentChapter) return;

  const prevEl = activeCardEl;
  const nextEl = cardMap[newCh.id];
  const gen    = ++generation;

  currentChapter = newCh;
  activeCardEl   = nextEl;

  if (prevEl) {
    animateCardOut(prevEl, () => {
      if (generation !== gen) return;
      animateCardIn(nextEl);
    });
  } else {
    animateCardIn(nextEl);
  }
}

/* ══════════════════════════════════════════════════════════
   CINEMA UPDATE — fires on every scroll tick
══════════════════════════════════════════════════════════ */
function updateCinema(progress) {
  if (progressFill) progressFill.style.width = (progress * 100).toFixed(2) + '%';

  let ch = CHAPTERS[CHAPTERS.length - 1];
  for (let i = 0; i < CHAPTERS.length; i++) {
    if (progress < CHAPTERS[i].end) { ch = CHAPTERS[i]; break; }
  }

  showFrame(ch.frame);
  updateTimeline(ch);
  switchChapter(ch);
}

/* ══════════════════════════════════════════════════════════
   CINEMA INIT
══════════════════════════════════════════════════════════ */
function initCinema() {
  const section = document.getElementById('gst-cinema');
  if (!section) return;

  Object.values(cardMap).forEach(applyPercentPos);
  showFrame(1);

  const ch1 = cardMap[1];
  if (ch1) {
    currentChapter = CHAPTERS[0];
    activeCardEl   = ch1;
    ch1.style.visibility = 'visible';
    ch1.classList.add('is-visible');
    const pct = IS_MOBILE ? {} : getPercentPos(ch1);
    gsap.fromTo(ch1,
      { opacity: 0, y: 28, filter: 'blur(10px)', ...pct },
      { opacity: 1, y: 0,  filter: 'blur(0px)',  ...pct,
        duration: 1.2, ease: 'power3.out', delay: 0.5,
        onComplete() { startFloat(ch1); },
      }
    );
  }

  updateTimeline(CHAPTERS[0]);

  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate(self) { updateCinema(self.progress); },
  });

  /* Rotation / resize across the 768px boundary: mobile CSS pins cards
     with !important while desktop relies on GSAP xPercent — re-sync. */
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const wasMobile = IS_MOBILE;
      IS_MOBILE = window.innerWidth < 768;
      if (wasMobile !== IS_MOBILE) {
        Object.values(cardMap).forEach((el) => {
          gsap.set(el, { clearProps: 'transform' });
          applyPercentPos(el);
        });
      }
      ScrollTrigger.refresh();
    }, 200);
  });
}

/* ══════════════════════════════════════════════════════════
   AFTER-FILM REVEALS
══════════════════════════════════════════════════════════ */
function initAfterFilmReveals() {
  document.querySelectorAll('.af-reveal').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter() {
        gsap.to(el, {
          opacity: 1, y: 0,
          duration: 0.72,
          ease: 'power3.out',
          delay: (i % 3) * 0.07,
          onStart() { el.classList.add('is-visible'); },
        });
      },
    });
  });
}

/* ══════════════════════════════════════════════════════════
   NAV — transparent during cinema, solid after
══════════════════════════════════════════════════════════ */
function initNavBehavior() {
  const nav    = document.getElementById('nav');
  const cinema = document.getElementById('gst-cinema');
  if (!nav || !cinema) return;

  function setTransparent() {
    nav.style.cssText += ';background:transparent!important;border-bottom-color:transparent!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;';
  }
  function clearOverride() {
    nav.style.cssText = nav.style.cssText
      .replace(/background:[^;]+!important;/g, '')
      .replace(/border-bottom-color:[^;]+!important;/g, '')
      .replace(/backdrop-filter:[^;]+!important;/g, '')
      .replace(/-webkit-backdrop-filter:[^;]+!important;/g, '');
  }

  setTransparent();

  ScrollTrigger.create({
    trigger: cinema,
    start: 'bottom bottom',
    onEnter:     clearOverride,
    onLeaveBack: setTransparent,
  });
}

/* ══════════════════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileMenu();
  initNavBehavior();
  initCinema();
  initAfterFilmReveals();
  initLang();

  window.addEventListener('load', () => ScrollTrigger.refresh());
});
