/* ============================================================
   OIL, GAS & MINING — Cinematic Experience
   Same pinned-scroll / image-sequence / glass-card architecture
   as Coastal Protection and Ground Stabilization, own story and
   visual identity: industrial construction giving way to
   Colombian Andean landscape restoration.
   ============================================================ */

import { initNavScroll, initMobileMenu } from './js/nav-utils.js';
import { initLanguageFromUrlOrStorage, setLanguage, applyLanguageToLinks } from './js/lang-utils.js';

const gsap          = window.gsap;
const ScrollTrigger  = window.ScrollTrigger;
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

    'ogm.ch1.h1':      'OIL, GAS<br>&amp; MINING',
    'ogm.ch1.tagline': 'Engineering Industrial Infrastructure',
    'ogm.ch1.sub':     'Integrated pipeline systems connecting energy, mining and industrial operations across the Colombian Andes.',
    'ogm.ch1.scroll':  'Scroll to explore',

    'ogm.ch2.h2':   'The Challenge',
    'ogm.ch2.body': 'Every industrial corridor must cross rivers, mountains and environmentally sensitive terrain before resources can reach the industries that depend on them.',

    'ogm.ch3.h2':   'Plan',
    'ogm.ch3.body': 'Every successful pipeline project begins with precise surveying, route optimization and environmental planning.',

    'ogm.ch4.h2':   'Steel',
    'ogm.ch4.tag':  'API 5L Steel Pipe',
    'ogm.ch4.body': 'High-performance transmission steel pipe engineered for demanding industrial infrastructure.',
    'ogm.ch4.btn':  'Explore Steel',

    'ogm.ch5.h2':   'Connect',
    'ogm.ch5.body': 'Individual pipe sections become one continuous transmission system through precision welding and quality-controlled construction.',

    'ogm.ch6.h2':   'Install',
    'ogm.ch6.body': 'World-class installation practices place critical infrastructure beneath the landscape with maximum precision.',

    'ogm.ch7.h3':    'Restore',
    'ogm.ch7.body1': 'The engineering disappears.',
    'ogm.ch7.body2': 'The landscape remains.',

    'ogm.ch8.h2':    'Coexist',
    'ogm.ch8.body1': 'The corridor is restored.',
    'ogm.ch8.body2': 'Nature recovers.',
    'ogm.ch8.body3': 'Infrastructure quietly performs beneath the surface.',

    'ogm.ch9.h1':   'Enable',
    'ogm.ch9.body': 'Reliable pipeline infrastructure supports responsible energy, mining and industrial operations while respecting the surrounding ecosystem.',
    'ogm.ch9.btn':  'View Steel Products',

    'ogm.tl.1': 'Intro',    'ogm.tl.2': 'Challenge', 'ogm.tl.3': 'Plan',
    'ogm.tl.4': 'Steel',    'ogm.tl.5': 'Connect',   'ogm.tl.6': 'Install',
    'ogm.tl.7': 'Restore',  'ogm.tl.8': 'Coexist',   'ogm.tl.9': 'Enable',

    'ogm.apps.eyebrow': 'Where We Operate',
    'ogm.apps.h2':      'Industrial Infrastructure Applications',
    'ogm.apps.lead':    'Pipeline systems supporting energy, mining and heavy industry across demanding environments.',

    'ogm.app1.title': 'Transmission Pipelines',
    'ogm.app1.desc':  'High-pressure pipeline systems for long-distance transportation of oil, gas and industrial fluids.',
    'ogm.app2.title': 'Mining Infrastructure',
    'ogm.app2.desc':  'Pipeline systems supporting mining operations, slurry transport and industrial process facilities.',
    'ogm.app3.title': 'Industrial Corridors',
    'ogm.app3.desc':  'Integrated infrastructure connecting remote industrial operations with processing facilities and logistics networks.',
    'ogm.app4.title': 'River Crossings',
    'ogm.app4.desc':  'Pipeline crossings engineered to safely traverse rivers and environmentally sensitive waterways.',
    'ogm.app5.title': 'Mountain Pipelines',
    'ogm.app5.desc':  'Transmission systems designed for steep terrain and complex Andean topography.',
    'ogm.app6.title': 'Industrial Facilities',
    'ogm.app6.desc':  'Pipeline networks supporting terminals, compressor stations and processing plants.',

    'ogm.sys.eyebrow': 'The Material System',
    'ogm.sys.h2':      'Integrated Pipeline Systems',
    'ogm.sys.lead':    'Multiple engineering layers working together to deliver safe, durable and environmentally responsible infrastructure.',

    'ogm.diag.surface':    'Surface',
    'ogm.diag.vegetation': 'Restored Native Vegetation',
    'ogm.diag.backfill':   'Backfill',
    'ogm.diag.geotextile': 'Protective Geotextile',
    'ogm.diag.pipe':       'API 5L Steel Pipeline',
    'ogm.diag.pipe.tag':   'Transmission',
    'ogm.diag.bedding':    'Engineered Bedding',
    'ogm.diag.ground':     'Natural Ground',

    'ogm.prod1.title': 'Steel Pipes',
    'ogm.prod1.role':  'Transmission',
    'ogm.prod1.desc':  'API 5L steel pipeline systems engineered for high-pressure industrial applications.',
    'ogm.prod1.link':  'Explore Steel',
    'ogm.prod2.title': 'Geosynthetics',
    'ogm.prod2.role':  'Protection',
    'ogm.prod2.desc':  'Protective geotextiles separate, cushion and safeguard buried infrastructure.',
    'ogm.prod2.link':  'Explore Geosynthetics',
    'ogm.prod3.title': 'Drainage Systems',
    'ogm.prod3.role':  'Performance',
    'ogm.prod3.desc':  'Integrated drainage solutions preserving long-term stability of buried infrastructure.',
    'ogm.prod3.link':  'Explore Drainage',

    'ogm.cap.eyebrow': 'What We Deliver',
    'ogm.cap.h2':      'Engineering Capabilities',
    'ogm.cap.lead':    'From route engineering to long-term performance — one integrated infrastructure service.',

    'ogm.cap1.title': 'Pipeline Route Engineering',
    'ogm.cap1.body':  'Corridor surveying, terrain analysis and route optimization across sensitive Andean landscapes.',
    'ogm.cap2.title': 'Transmission System Design',
    'ogm.cap2.body':  'Pressure-rated pipeline design engineered to API 5L standards for long-distance transmission.',
    'ogm.cap3.title': 'River Crossing Engineering',
    'ogm.cap3.body':  'Specialized crossing design safeguarding pipeline integrity through rivers and waterways.',
    'ogm.cap4.title': 'Industrial Corridor Development',
    'ogm.cap4.body':  'Integrated corridor planning connecting remote operations with processing and logistics infrastructure.',
    'ogm.cap5.title': 'Material Supply',
    'ogm.cap5.body':  'Manufacturing, QA and delivery of API 5L steel pipe and protective geosynthetics to site.',
    'ogm.cap6.title': 'Construction Support',
    'ogm.cap6.body':  'Technical oversight of welding, trenching and burial to ensure quality-controlled installation.',
    'ogm.cap7.title': 'Environmental Restoration',
    'ogm.cap7.body':  'Corridor reinstatement and native vegetation recovery once construction is complete.',
    'ogm.cap8.title': 'Long-Term Infrastructure Performance',
    'ogm.cap8.body':  'Ongoing monitoring and maintenance planning to ensure decades of reliable operation.',

    'ogm.adv.eyebrow': 'Engineering Outcomes',
    'ogm.adv.h2':      'Technical Advantages',
    'ogm.adv1': 'API-Compliant Steel',
    'ogm.adv2': 'Long-Term Corrosion Resistance',
    'ogm.adv3': 'Environmentally Responsible Installation',
    'ogm.adv4': 'Minimal Surface Disturbance',
    'ogm.adv5': 'Reliable Long-Distance Transmission',
    'ogm.adv6': 'Integrated Engineering Support',

    'ogm.cta.eyebrow': 'Start a Project',
    'ogm.cta.h2':      'Engineering Progress.<br>Respecting Nature.',
    'ogm.cta.body':    'INGE&MAT delivers complete industrial infrastructure systems that transport the resources the world depends on while preserving the landscapes where they operate.',
    'ogm.cta.btn1':    'Request Engineering Support',
    'ogm.cta.btn2':    'View Steel Products',

    'footer.products':       'Products',
    'footer.solutions':      'Solutions',
    'footer.geosynthetics':  'Geosynthetics',
    'footer.steel':          'Steel',
    'footer.gabions':        'Amorphous Gabions',
    'footer.privacy':        'Privacy Policy',
    'footer.terms':          'Terms of Service',
    'footer.sustainability': 'Sustainability',
    'footer.copy':           '© 2026 INGE&MAT. All rights reserved.',
  },
  es: {
    'nav.home': 'Inicio', 'nav.solutions': 'Soluciones', 'nav.products': 'Productos',
    'nav.capabilities': 'Capacidades', 'nav.about': 'Nosotros', 'nav.contact': 'Contacto',
    'nav.enquire': 'Cotizar', 'nav.sub.coastal': 'Protección Costera',
    'nav.sub.ground': 'Estabilización de Suelos', 'nav.sub.mining': 'Petróleo, Gas y Minería',
    'nav.sub.steel': 'Aceros', 'nav.sub.geosyn': 'Geosintéticos',
    'nav.sub.rocks': 'Gaviones Amorfos',

    'ogm.ch1.h1':      'PETRÓLEO, GAS<br>Y MINERÍA',
    'ogm.ch1.tagline': 'Ingeniería de Infraestructura Industrial',
    'ogm.ch1.sub':     'Sistemas de ductos integrados que conectan operaciones energéticas, mineras e industriales a través de los Andes colombianos.',
    'ogm.ch1.scroll':  'Desplácese para explorar',

    'ogm.ch2.h2':   'El Desafío',
    'ogm.ch2.body': 'Todo corredor industrial debe cruzar ríos, montañas y terrenos ambientalmente sensibles antes de que los recursos lleguen a las industrias que dependen de ellos.',

    'ogm.ch3.h2':   'Planificar',
    'ogm.ch3.body': 'Todo proyecto de ductos exitoso comienza con topografía precisa, optimización de ruta y planificación ambiental.',

    'ogm.ch4.h2':   'Acero',
    'ogm.ch4.tag':  'Tubería de Acero API 5L',
    'ogm.ch4.body': 'Tubería de acero de transmisión de alto desempeño diseñada para infraestructura industrial exigente.',
    'ogm.ch4.btn':  'Explorar Acero',

    'ogm.ch5.h2':   'Conectar',
    'ogm.ch5.body': 'Las secciones individuales de tubería se convierten en un sistema de transmisión continuo mediante soldadura de precisión y construcción con control de calidad.',

    'ogm.ch6.h2':   'Instalar',
    'ogm.ch6.body': 'Prácticas de instalación de clase mundial ubican la infraestructura crítica bajo el terreno con máxima precisión.',

    'ogm.ch7.h3':    'Restaurar',
    'ogm.ch7.body1': 'La ingeniería desaparece.',
    'ogm.ch7.body2': 'El paisaje permanece.',

    'ogm.ch8.h2':    'Coexistir',
    'ogm.ch8.body1': 'El corredor está restaurado.',
    'ogm.ch8.body2': 'La naturaleza se recupera.',
    'ogm.ch8.body3': 'La infraestructura funciona silenciosamente bajo la superficie.',

    'ogm.ch9.h1':   'Habilitar',
    'ogm.ch9.body': 'La infraestructura de ductos confiable respalda operaciones responsables de energía, minería e industria, respetando el ecosistema circundante.',
    'ogm.ch9.btn':  'Ver Productos de Acero',

    'ogm.tl.1': 'Apertura',    'ogm.tl.2': 'Desafío',    'ogm.tl.3': 'Planificar',
    'ogm.tl.4': 'Acero',       'ogm.tl.5': 'Conectar',   'ogm.tl.6': 'Instalar',
    'ogm.tl.7': 'Restaurar',   'ogm.tl.8': 'Coexistir',  'ogm.tl.9': 'Habilitar',

    'ogm.apps.eyebrow': 'Dónde Operamos',
    'ogm.apps.h2':      'Aplicaciones de Infraestructura Industrial',
    'ogm.apps.lead':    'Sistemas de ductos que respaldan energía, minería e industria pesada en entornos exigentes.',

    'ogm.app1.title': 'Ductos de Transmisión',
    'ogm.app1.desc':  'Sistemas de ductos de alta presión para el transporte a larga distancia de petróleo, gas y fluidos industriales.',
    'ogm.app2.title': 'Infraestructura Minera',
    'ogm.app2.desc':  'Sistemas de ductos que respaldan operaciones mineras, transporte de pulpa e instalaciones de proceso industrial.',
    'ogm.app3.title': 'Corredores Industriales',
    'ogm.app3.desc':  'Infraestructura integrada que conecta operaciones industriales remotas con instalaciones de procesamiento y redes logísticas.',
    'ogm.app4.title': 'Cruces de Ríos',
    'ogm.app4.desc':  'Cruces de ductos diseñados para atravesar de forma segura ríos y cuerpos de agua ambientalmente sensibles.',
    'ogm.app5.title': 'Ductos de Montaña',
    'ogm.app5.desc':  'Sistemas de transmisión diseñados para terrenos escarpados y topografía andina compleja.',
    'ogm.app6.title': 'Instalaciones Industriales',
    'ogm.app6.desc':  'Redes de ductos que respaldan terminales, estaciones de compresión y plantas de procesamiento.',

    'ogm.sys.eyebrow': 'El Sistema de Materiales',
    'ogm.sys.h2':      'Sistemas de Ductos Integrados',
    'ogm.sys.lead':    'Múltiples capas de ingeniería que trabajan juntas para ofrecer infraestructura segura, duradera y ambientalmente responsable.',

    'ogm.diag.surface':    'Superficie',
    'ogm.diag.vegetation': 'Vegetación Nativa Restaurada',
    'ogm.diag.backfill':   'Relleno',
    'ogm.diag.geotextile': 'Geotextil de Protección',
    'ogm.diag.pipe':       'Ducto de Acero API 5L',
    'ogm.diag.pipe.tag':   'Transmisión',
    'ogm.diag.bedding':    'Cama de Apoyo Diseñada',
    'ogm.diag.ground':     'Suelo Natural',

    'ogm.prod1.title': 'Tuberías de Acero',
    'ogm.prod1.role':  'Transmisión',
    'ogm.prod1.desc':  'Sistemas de ductos de acero API 5L diseñados para aplicaciones industriales de alta presión.',
    'ogm.prod1.link':  'Explorar Acero',
    'ogm.prod2.title': 'Geosintéticos',
    'ogm.prod2.role':  'Protección',
    'ogm.prod2.desc':  'Los geotextiles de protección separan, amortiguan y protegen la infraestructura enterrada.',
    'ogm.prod2.link':  'Explorar Geosintéticos',
    'ogm.prod3.title': 'Sistemas de Drenaje',
    'ogm.prod3.role':  'Desempeño',
    'ogm.prod3.desc':  'Soluciones de drenaje integradas que preservan la estabilidad a largo plazo de la infraestructura enterrada.',
    'ogm.prod3.link':  'Explorar Drenaje',

    'ogm.cap.eyebrow': 'Lo Que Ofrecemos',
    'ogm.cap.h2':      'Capacidades de Ingeniería',
    'ogm.cap.lead':    'Desde la ingeniería de ruta hasta el desempeño a largo plazo — un servicio de infraestructura integrado.',

    'ogm.cap1.title': 'Ingeniería de Ruta de Ductos',
    'ogm.cap1.body':  'Topografía de corredor, análisis de terreno y optimización de ruta en paisajes andinos sensibles.',
    'ogm.cap2.title': 'Diseño de Sistemas de Transmisión',
    'ogm.cap2.body':  'Diseño de ductos clasificados por presión, diseñados según estándares API 5L para transmisión a larga distancia.',
    'ogm.cap3.title': 'Ingeniería de Cruces de Río',
    'ogm.cap3.body':  'Diseño especializado de cruces que protege la integridad del ducto a través de ríos y cuerpos de agua.',
    'ogm.cap4.title': 'Desarrollo de Corredores Industriales',
    'ogm.cap4.body':  'Planificación integrada de corredores que conecta operaciones remotas con infraestructura de procesamiento y logística.',
    'ogm.cap5.title': 'Suministro de Materiales',
    'ogm.cap5.body':  'Fabricación, control de calidad y entrega en sitio de tubería de acero API 5L y geosintéticos de protección.',
    'ogm.cap6.title': 'Soporte de Construcción',
    'ogm.cap6.body':  'Supervisión técnica de soldadura, zanjado y enterrado para garantizar una instalación con control de calidad.',
    'ogm.cap7.title': 'Restauración Ambiental',
    'ogm.cap7.body':  'Reinstauración del corredor y recuperación de vegetación nativa una vez finalizada la construcción.',
    'ogm.cap8.title': 'Desempeño de Infraestructura a Largo Plazo',
    'ogm.cap8.body':  'Monitoreo continuo y planificación de mantenimiento para garantizar décadas de operación confiable.',

    'ogm.adv.eyebrow': 'Resultados de Ingeniería',
    'ogm.adv.h2':      'Ventajas Técnicas',
    'ogm.adv1': 'Acero Conforme a Normas API',
    'ogm.adv2': 'Resistencia a la Corrosión a Largo Plazo',
    'ogm.adv3': 'Instalación Ambientalmente Responsable',
    'ogm.adv4': 'Mínima Alteración Superficial',
    'ogm.adv5': 'Transmisión Confiable a Larga Distancia',
    'ogm.adv6': 'Soporte de Ingeniería Integrado',

    'ogm.cta.eyebrow': 'Iniciar un Proyecto',
    'ogm.cta.h2':      'Progreso en Ingeniería.<br>Respeto por la Naturaleza.',
    'ogm.cta.body':    'INGE&MAT entrega sistemas completos de infraestructura industrial que transportan los recursos de los que depende el mundo, preservando los paisajes donde operan.',
    'ogm.cta.btn1':    'Solicitar Soporte de Ingeniería',
    'ogm.cta.btn2':    'Ver Productos de Acero',

    'footer.products':       'Productos',
    'footer.solutions':      'Soluciones',
    'footer.geosynthetics':  'Geosintéticos',
    'footer.steel':          'Acero',
    'footer.gabions':        'Gaviones Amorfos',
    'footer.privacy':        'Política de Privacidad',
    'footer.terms':          'Términos de Servicio',
    'footer.sustainability': 'Sostenibilidad',
    'footer.copy':           '© 2026 INGE&MAT. Todos los derechos reservados.',
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
   Chapters 1–6 are the industrial build; 7–9 are the
   restoration arc — the accent color shifts gold → green.
══════════════════════════════════════════════════════════ */
const CHAPTERS = [
  { id: 1, frame: 1, start: 0.000, end: 0.099, labelKey: 'ogm.tl.1' },
  { id: 2, frame: 2, start: 0.099, end: 0.198, labelKey: 'ogm.tl.2' },
  { id: 3, frame: 3, start: 0.198, end: 0.296, labelKey: 'ogm.tl.3' },
  { id: 4, frame: 4, start: 0.296, end: 0.395, labelKey: 'ogm.tl.4' },
  { id: 5, frame: 5, start: 0.395, end: 0.494, labelKey: 'ogm.tl.5' },
  { id: 6, frame: 6, start: 0.494, end: 0.593, labelKey: 'ogm.tl.6' },
  { id: 7, frame: 7, start: 0.593, end: 0.691, labelKey: 'ogm.tl.7' },
  { id: 8, frame: 8, start: 0.691, end: 0.790, labelKey: 'ogm.tl.8' },
  { id: 9, frame: 9, start: 0.790, end: 0.889, labelKey: 'ogm.tl.9' },
];
const RESTORE_PHASE_STARTS_AT = 7;

/* ══════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════ */
let currentChapter = null;
let activeCardEl   = null;
let generation     = 0;
let floatTween     = null;
let cinemaScrollTrigger = null;

/* Con prefers-reduced-motion activo, las tarjetas del hero aparecen y
   desaparecen sin animación (ver animateCardIn / animateCardOut). */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ══════════════════════════════════════════════════════════
   DOM REFS
══════════════════════════════════════════════════════════ */
const frames       = document.querySelectorAll('.ogm-frame');
const progressFill = document.getElementById('ogm-progress-fill');
const tlLabelEl    = document.getElementById('ogm-tl-label');
const tlDots       = document.querySelectorAll('.ogm-tl-dot');
const cinemaEl     = document.getElementById('ogm-cinema');

let IS_MOBILE = window.innerWidth < 768;

const frameMap = {};
frames.forEach(img => { frameMap[+img.dataset.frame] = img; });

const cardMap = {};
CHAPTERS.forEach(ch => {
  const el = document.getElementById(`card-ogm${ch.id}`);
  if (el) cardMap[ch.id] = el;
});

/* ══════════════════════════════════════════════════════════
   GSAP PERCENTAGE POSITIONING
   Only for cards that truly use left/top: 50%.
══════════════════════════════════════════════════════════ */
function getPercentPos(el) {
  if (!el) return {};
  if (el.classList.contains('ogm-card--center')) return { xPercent: -50, yPercent: -50 };
  if (el.classList.contains('ogm-card--left-mid') ||
      el.classList.contains('ogm-card--right-mid'))  return { yPercent: -50 };
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
   ACCENT PHASE — gold (industrial) → green (restoration)
══════════════════════════════════════════════════════════ */
let lastPhase = null;
function updatePhase(chId) {
  const phase = chId >= RESTORE_PHASE_STARTS_AT ? 'restore' : 'industrial';
  if (phase === lastPhase) return;
  lastPhase = phase;
  if (cinemaEl) cinemaEl.setAttribute('data-phase', phase);
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

  if (prefersReducedMotion) {
    // Sin animación: la tarjeta aparece directamente, sin float idle.
    gsap.set(el, { opacity: 1, y: 0, filter: 'blur(0px)', ...pct });
    el.style.visibility = 'visible';
    el.classList.add('is-visible');
    return;
  }

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

  if (prefersReducedMotion) {
    // Sin animación: la tarjeta se oculta directamente.
    el.style.visibility = 'hidden';
    el.classList.remove('is-visible');
    gsap.set(el, { opacity: 0, x: 0, y: 0, filter: 'blur(0px)', ...pct });
    if (onComplete) onComplete();
    return;
  }

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
  const dot = document.querySelector(`.ogm-tl-dot[data-ch="${ch.id}"]`);
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

  // Si la tarjeta anterior nunca llegó a mostrarse (un scroll rápido en
  // cascada la reemplazó antes de que su propia animación de entrada
  // arrancara), no tiene sentido pagar los ~0.55s de la animación de
  // salida sobre un elemento invisible: eso es lo que acumulaba el
  // retraso y hacía sentir que la tarjeta correcta "no aparecía".
  // Saltamos directo a mostrar la nueva.
  const prevWasVisible = prevEl && prevEl.classList.contains('is-visible');

  if (prevWasVisible) {
    animateCardOut(prevEl, () => {
      if (generation !== gen) return;
      animateCardIn(nextEl);
    });
  } else {
    if (prevEl) { gsap.killTweensOf(prevEl); prevEl.style.visibility = 'hidden'; }
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
  updatePhase(ch.id);
  updateTimeline(ch);
  switchChapter(ch);
}

/* ══════════════════════════════════════════════════════════
   SCROLL-SETTLE SAFETY NET
   Fallback para scroll muy rápido: si algún tick de onUpdate se
   pierde y la tarjeta que corresponde a la posición actual del
   scroll nunca llegó a mostrarse, este mecanismo la resincroniza
   ~120ms después de que el scroll (o un resize) se detiene.
   No acumula tarjetas: sigue mostrando solo la del capítulo
   correcto, igual que updateCinema() — nunca dos a la vez.
══════════════════════════════════════════════════════════ */
let settleTimer = null;
function syncToScrollPosition() {
  if (!cinemaScrollTrigger) return;
  updateCinema(cinemaScrollTrigger.progress);
}
function scheduleSettleSync() {
  clearTimeout(settleTimer);
  settleTimer = setTimeout(syncToScrollPosition, 120);
}

/* ══════════════════════════════════════════════════════════
   CINEMA INIT
══════════════════════════════════════════════════════════ */
function initCinema() {
  const section = document.getElementById('ogm-cinema');
  if (!section) return;

  Object.values(cardMap).forEach(applyPercentPos);
  showFrame(1);
  updatePhase(1);

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

  cinemaScrollTrigger = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate(self) { updateCinema(self.progress); },
  });

  window.addEventListener('scroll', scheduleSettleSync, { passive: true });
  window.addEventListener('resize', scheduleSettleSync);

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
      syncToScrollPosition();
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
  const cinema = document.getElementById('ogm-cinema');
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

  window.addEventListener('load', () => { ScrollTrigger.refresh(); syncToScrollPosition(); });
});
