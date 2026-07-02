/* ============================================================
   COASTAL PROTECTION — Cinematic Experience
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

    'cp.ch1.eyebrow': 'Coastal Engineering',
    'cp.ch1.h1':      'Coastal<br>Protection',
    'cp.ch1.sub':     'Integrated engineering systems designed to protect coastlines, infrastructure and marine assets.',
    'cp.ch1.scroll':  'Scroll to explore',

    'cp.ch2.h2':    'The Challenge',
    'cp.ch2.body1': 'Every coastline is constantly reshaped by waves, tides, currents and sediment transport.',
    'cp.ch2.body2': 'Without engineered protection, erosion gradually threatens critical infrastructure.',

    'cp.ch3.h2':   'Preparation',
    'cp.ch3.body': 'Every successful coastal engineering project begins with accurate surveying, grading and site preparation.',

    'cp.ch4.h2':   'Geotextiles',
    'cp.ch4.body': 'High-performance nonwoven geotextiles separate, filter and protect the underlying soil while allowing controlled water flow.',
    'cp.ch4.btn':  'Explore Geotextiles',

    'cp.ch5.h2':   'Amorphous Gabions',
    'cp.ch5.body': 'Flexible HDPE gabion systems conform naturally to the terrain while dissipating hydraulic energy and preventing scour.',
    'cp.ch5.btn':  'Explore Amorphous Gabions',

    'cp.ch6.h2':   'One Integrated System',
    'cp.ch6.body': 'Engineering performance comes from combining materials into one resilient system.',

    'cp.ch7.h3':   'Performance',
    'cp.ch7.body': 'Wave energy is absorbed, dissipated and redirected — while the shoreline remains protected.',

    'cp.ch8.h2':   'Beyond Shoreline<br>Protection',
    'cp.ch8.body': 'Coastal engineering naturally evolves into larger marine infrastructure projects.',

    'cp.ch9.h2':   'Steel Sheet Piles',
    'cp.ch9.body': 'Steel sheet piles provide vertical retention where coastal protection transitions into ports, flood barriers and marine retaining structures.',
    'cp.ch9.btn':  'Explore Steel',

    'cp.ch10.h2':   'Integrated Marine Engineering',
    'cp.ch10.li1':  'Gabions protect the toe.',
    'cp.ch10.li2':  'Geotextiles stabilize the foundation.',
    'cp.ch10.li3':  'Steel retains the structure.',
    'cp.ch10.body': 'Together they create resilient marine infrastructure.',

    'cp.ch11.h2':  'Built For Generations',
    'cp.ch11.li1': 'Designed for durability.',
    'cp.ch11.li2': 'Engineered for resilience.',
    'cp.ch11.li3': 'Integrated into the landscape.',

    'cp.ch12.complete': 'Engineering Complete.',

    'cp.ch13.h1':   'Coastal Protection',
    'cp.ch13.sub':  'Integrated Engineering Systems',
    'cp.ch13.body': 'From shoreline stabilization to marine infrastructure, INGE&MAT engineers complete coastal protection systems by combining geosynthetics, steel and advanced scour protection technologies.',
    'cp.ch13.btn2': 'View Products',

    'cp.tl.1':  'Opening',   'cp.tl.2':  'Challenge', 'cp.tl.3':  'Prepare',
    'cp.tl.4':  'Separate',  'cp.tl.5':  'Protect',   'cp.tl.6':  'One System',
    'cp.tl.7':  'Perform',   'cp.tl.8':  'Expand',    'cp.tl.9':  'Retain',
    'cp.tl.10': 'Integrate', 'cp.tl.11': 'Endure',    'cp.tl.12': 'Complete',
    'cp.tl.13': '',

    'cp.af.apps.eyebrow': 'Where We Work',
    'cp.af.apps.h2':   'Featured Coastal Applications',
    'cp.af.apps.lead': 'From sandy beaches to industrial ports — integrated engineering for every coastal environment.',
    'cp.af.app1.title': 'Shoreline Revetment',
    'cp.af.app1.desc':  'Gabion armor over geotextile separation layers stabilizes exposed sandy and rocky coastlines under sustained wave attack.',
    'cp.af.app1.tag1':  'Amorphous Gabions', 'cp.af.app1.tag2': 'Nonwoven Geotextile',
    'cp.af.app2.title': 'Scour Protection',
    'cp.af.app2.desc':  'Flexible gabion mattresses deployed around bridge piers, offshore foundations and quay walls prevent progressive seabed erosion.',
    'cp.af.app2.tag1':  'Amorphous Gabions Type S', 'cp.af.app2.tag2': 'Filter Geotextile',
    'cp.af.app3.title': 'Port & Harbor Defense',
    'cp.af.app3.desc':  'Sheet pile quay walls combined with gabion toe aprons and geotextile filters provide complete port protection under tidal loading.',
    'cp.af.app3.tag1':  'Steel Sheet Piles', 'cp.af.app3.tag2': 'Amorphous Gabions',
    'cp.af.app4.title': 'Coastal Road Embankments',
    'cp.af.app4.desc':  'Geocell-reinforced slopes clad with gabion armor protect road embankments from wave runup and hydraulic scour.',
    'cp.af.app4.tag1':  'Geocell Systems', 'cp.af.app4.tag2': 'Amorphous Gabions',
    'cp.af.app5.title': 'River Training Works',
    'cp.af.app5.desc':  'Delta bank protection and training wall stabilization using geotextile-backed gabion revetment to manage sediment and flow.',
    'cp.af.app5.tag1':  'Amorphous Gabions', 'cp.af.app5.tag2': 'Woven Geogrid',
    'cp.af.app6.title': 'Offshore Wind Foundations',
    'cp.af.app6.desc':  'Rock-filled gabion mattresses form permanent scour aprons around monopiles that flex with seabed settlement over the turbine\'s operational life.',
    'cp.af.app6.tag1':  'Amorphous Gabions Type S', 'cp.af.app6.tag2': 'Filter Geotextile',

    'cp.af.sys.eyebrow': 'The Material System',
    'cp.af.sys.h2':   'Integrated Coastal Systems',
    'cp.af.sys.lead': 'Three product families. One complete engineering system. Each material fulfills a specific hydraulic role.',
    'cp.af.sys1.title': 'Geosynthetics', 'cp.af.sys1.role': 'Foundation · Separation · Filtration',
    'cp.af.sys1.desc':  'Nonwoven and woven geotextiles, geogrids and geocells form the invisible foundation of every coastal system — separating materials, controlling drainage and reinforcing weak subgrades.',
    'cp.af.sys1.link':  'Explore Geosynthetics',
    'cp.af.sys2.title': 'Amorphous Gabions', 'cp.af.sys2.role': 'Armor · Energy Dissipation · Scour Control',
    'cp.af.sys2.desc':  'Flexible HDPE mesh systems filled with rock or concrete conform to irregular coastal geometry, absorb wave energy and prevent seabed scour without rigid concrete structures.',
    'cp.af.sys2.link':  'Explore Amorphous Gabions',
    'cp.af.sys3.title': 'Steel Sheet Piles', 'cp.af.sys3.role': 'Vertical Retention · Flood Barriers · Marine Walls',
    'cp.af.sys3.desc':  'Hot-rolled and cold-formed steel sheet piles deliver structural vertical retention where the coastal protection system transitions into ports, harbors, flood barriers and marine retaining walls.',
    'cp.af.sys3.link':  'Explore Steel',

    'cp.af.cap.eyebrow': 'What We Deliver', 'cp.af.cap.h2': 'Engineering Capabilities',
    'cp.af.cap.lead': 'From hydraulic analysis to long-term performance monitoring — one integrated engineering service.',
    'cp.af.cap1.title': 'Hydraulic & Wave Analysis',
    'cp.af.cap1.body':  'Site-specific wave climate characterization, current velocity profiling and extreme event design to applicable standards.',
    'cp.af.cap2.title': 'Scour Apron Design',
    'cp.af.cap2.body':  'Rock fill size, gabion thickness and apron geometry calculated for hydraulic stability under design-event conditions.',
    'cp.af.cap3.title': 'Material Specification',
    'cp.af.cap3.body':  'Product selection, fill material specification and interlayer compatibility verification for the complete coastal stack.',
    'cp.af.cap4.title': 'Supply & Logistics',
    'cp.af.cap4.body':  'Manufacturing, QA and delivery to site — pre-filled mattresses or flat-packed units depending on installation method.',
    'cp.af.cap5.title': 'Installation Supervision',
    'cp.af.cap5.body':  'Technical oversight and real-time quality assurance for above and below waterline placement accuracy.',

    'cp.af.stats.eyebrow': 'The Numbers', 'cp.af.stats.h2': 'Technical Advantages',
    'cp.af.stat1': 'Wave energy reduction through porous gabion armor',
    'cp.af.stat2': 'Year design life for correctly specified systems',
    'cp.af.stat3': 'Crane vessels required in most installations',
    'cp.af.stat4': 'Full apron coverage — no exposed edges to initiate failure',

    'cp.af.cta.eyebrow': 'Start a Project',
    'cp.af.cta.h2':   'Let\'s protect your coastline.',
    'cp.af.cta.body': 'Our engineers work from sea to structure — hydraulic assessment, materials specification and installation support in one integrated service.',
    'cp.af.cta.btn1': 'Request Technical Assistance', 'cp.af.cta.btn2': 'Talk to an Engineer',

    'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms of Service',
    'footer.sustainability': 'Sustainability', 'footer.copy': '© 2024 INGE&MAT. All rights reserved.',
  },

  es: {
    'nav.home': 'Inicio', 'nav.solutions': 'Soluciones', 'nav.products': 'Productos',
    'nav.capabilities': 'Capacidades', 'nav.about': 'Nosotros', 'nav.contact': 'Contacto',
    'nav.enquire': 'Cotizar', 'nav.sub.coastal': 'Protección Costera',
    'nav.sub.ground': 'Estabilización de Suelos', 'nav.sub.mining': 'Petróleo, Gas y Minería',
    'nav.sub.steel': 'Acero', 'nav.sub.geosyn': 'Geosintéticos',
    'nav.sub.rocks': 'Gaviones Amorfos',

    'cp.ch1.eyebrow': 'Ingeniería Costera',
    'cp.ch1.h1':      'Protección<br>Costera',
    'cp.ch1.sub':     'Sistemas de ingeniería integrados para proteger litorales, infraestructura y activos marinos.',
    'cp.ch1.scroll':  'Desplázate para explorar',

    'cp.ch2.h2':    'El Desafío',
    'cp.ch2.body1': 'Todo litoral es constantemente remodelado por olas, mareas, corrientes y transporte de sedimentos.',
    'cp.ch2.body2': 'Sin protección ingenieril, la erosión amenaza progresivamente la infraestructura crítica.',

    'cp.ch3.h2':   'Preparación',
    'cp.ch3.body': 'Todo proyecto exitoso de ingeniería costera comienza con levantamiento topográfico, nivelación y preparación del sitio.',

    'cp.ch4.h2':   'Geotextiles',
    'cp.ch4.body': 'Los geotextiles no tejidos de alto desempeño separan, filtran y protegen el suelo base permitiendo el flujo controlado del agua.',
    'cp.ch4.btn':  'Explorar Geotextiles',

    'cp.ch5.h2':   'Gaviones Amorfos',
    'cp.ch5.body': 'Los sistemas de gaviones HDPE flexibles se adaptan naturalmente al terreno mientras disiipan la energía hidráulica y previenen la socavación.',
    'cp.ch5.btn':  'Explorar Gaviones Amorfos',

    'cp.ch6.h2':   'Un Sistema Integrado',
    'cp.ch6.body': 'El desempeño ingenieril surge de combinar materiales en un sistema resiliente.',

    'cp.ch7.h3':   'Desempeño',
    'cp.ch7.body': 'La energía del oleaje es absorbida, disipada y redirigida — mientras el litoral permanece protegido.',

    'cp.ch8.h2':   'Más allá de la<br>Protección Costera',
    'cp.ch8.body': 'La ingeniería costera evoluciona naturalmente hacia proyectos de infraestructura marina de mayor escala.',

    'cp.ch9.h2':   'Tablestacas de Acero',
    'cp.ch9.body': 'Las tablestacas de acero proveen contención vertical donde la protección costera transita hacia puertos, barreras contra inundaciones y muros de contención marina.',
    'cp.ch9.btn':  'Explorar Acero',

    'cp.ch10.h2':   'Ingeniería Marina Integrada',
    'cp.ch10.li1':  'Los gaviones protegen el pie.',
    'cp.ch10.li2':  'Los geotextiles estabilizan la cimentación.',
    'cp.ch10.li3':  'El acero retiene la estructura.',
    'cp.ch10.body': 'Juntos crean infraestructura marina resiliente.',

    'cp.ch11.h2':  'Construido para Generaciones',
    'cp.ch11.li1': 'Diseñado para durar.',
    'cp.ch11.li2': 'Ingeniería para la resiliencia.',
    'cp.ch11.li3': 'Integrado en el paisaje.',

    'cp.ch12.complete': 'Ingeniería Completa.',

    'cp.ch13.h1':   'Protección Costera',
    'cp.ch13.sub':  'Sistemas de Ingeniería Integrados',
    'cp.ch13.body': 'Desde la estabilización del litoral hasta la infraestructura marina, INGE&MAT diseña sistemas completos de protección costera combinando geosintéticos, acero y tecnologías avanzadas de protección contra socavación.',
    'cp.ch13.btn2': 'Ver Productos',

    'cp.tl.1':  'Apertura',  'cp.tl.2':  'Desafío',   'cp.tl.3':  'Preparar',
    'cp.tl.4':  'Separar',   'cp.tl.5':  'Proteger',  'cp.tl.6':  'Un Sistema',
    'cp.tl.7':  'Actuar',    'cp.tl.8':  'Expandir',  'cp.tl.9':  'Retener',
    'cp.tl.10': 'Integrar',  'cp.tl.11': 'Perdurar',  'cp.tl.12': 'Completo',
    'cp.tl.13': '',

    'cp.af.apps.eyebrow': 'Dónde Trabajamos',
    'cp.af.apps.h2':   'Aplicaciones Costeras Destacadas',
    'cp.af.apps.lead': 'Desde playas de arena hasta puertos industriales — ingeniería integrada para cada entorno costero.',
    'cp.af.app1.title': 'Revestimiento de Litoral',
    'cp.af.app1.desc':  'Armadura de gaviones sobre capas separadoras de geotextil estabiliza litorales arenosos y rocosos bajo ataque sostenido de oleaje.',
    'cp.af.app1.tag1':  'Gaviones Amorfos', 'cp.af.app1.tag2': 'Geotextil No Tejido',
    'cp.af.app2.title': 'Protección contra Socavación',
    'cp.af.app2.desc':  'Colchonetas de gaviones flexibles instaladas alrededor de pilas de puentes y muelles previenen la erosión progresiva del lecho.',
    'cp.af.app2.tag1':  'Gaviones Amorfos Tipo S', 'cp.af.app2.tag2': 'Geotextil Filtrante',
    'cp.af.app3.title': 'Defensa Portuaria',
    'cp.af.app3.desc':  'Muros pantalla de tablestacas combinados con delantales de gaviones y filtros de geotextil proveen protección completa bajo carga mareal.',
    'cp.af.app3.tag1':  'Tablestacas de Acero', 'cp.af.app3.tag2': 'Gaviones Amorfos',
    'cp.af.app4.title': 'Terraplenes Viales Costeros',
    'cp.af.app4.desc':  'Taludes reforzados con geoceldas revestidos con armadura de gaviones protegen terraplenes viales del rebase de olas.',
    'cp.af.app4.tag1':  'Sistemas de Geocelda', 'cp.af.app4.tag2': 'Gaviones Amorfos',
    'cp.af.app5.title': 'Encauzamiento Fluvial',
    'cp.af.app5.desc':  'Protección de orillas de deltas y estabilización de muros de encauzamiento con revestimiento de gaviones sobre geotextil.',
    'cp.af.app5.tag1':  'Gaviones Amorfos', 'cp.af.app5.tag2': 'Geomalla Tejida',
    'cp.af.app6.title': 'Cimentaciones para Energía Eólica Marina',
    'cp.af.app6.desc':  'Colchonetas de gaviones rellenas de roca forman delantales permanentes alrededor de monopilotes que se adaptan al asentamiento del lecho.',
    'cp.af.app6.tag1':  'Gaviones Amorfos Tipo S', 'cp.af.app6.tag2': 'Geotextil Filtrante',

    'cp.af.sys.eyebrow': 'El Sistema de Materiales',
    'cp.af.sys.h2':   'Sistemas Costeros Integrados',
    'cp.af.sys.lead': 'Tres familias de productos. Un sistema de ingeniería completo. Cada material cumple un rol hidráulico específico.',
    'cp.af.sys1.title': 'Geosintéticos', 'cp.af.sys1.role': 'Cimentación · Separación · Filtración',
    'cp.af.sys1.desc':  'Geotextiles no tejidos y tejidos, geogrillas y geoceldas forman la cimentación invisible de todo sistema costero.',
    'cp.af.sys1.link':  'Explorar Geosintéticos',
    'cp.af.sys2.title': 'Gaviones Amorfos', 'cp.af.sys2.role': 'Armadura · Disipación de Energía · Control de Socavación',
    'cp.af.sys2.desc':  'Sistemas de malla HDPE flexibles rellenos de roca o concreto se adaptan a la geometría costera irregular y absorben energía del oleaje.',
    'cp.af.sys2.link':  'Explorar Gaviones Amorfos',
    'cp.af.sys3.title': 'Tablestacas de Acero', 'cp.af.sys3.role': 'Contención Vertical · Barreras contra Inundaciones · Muros Marinos',
    'cp.af.sys3.desc':  'Las tablestacas de acero proveen contención vertical estructural donde el sistema costero transita hacia puertos, marinas y barreras anti-inundación.',
    'cp.af.sys3.link':  'Explorar Acero',

    'cp.af.cap.eyebrow': 'Qué Entregamos', 'cp.af.cap.h2': 'Capacidades de Ingeniería',
    'cp.af.cap.lead': 'Desde análisis hidráulico hasta monitoreo de desempeño a largo plazo — un servicio de ingeniería integrado.',
    'cp.af.cap1.title': 'Análisis Hidráulico y de Oleaje',
    'cp.af.cap1.body':  'Caracterización del clima de olas específica del sitio y diseño ante eventos extremos según normas aplicables.',
    'cp.af.cap2.title': 'Diseño del Delantal Antisoavación',
    'cp.af.cap2.body':  'Tamaño del relleno, espesor del gavión y geometría del delantal calculados para estabilidad hidráulica.',
    'cp.af.cap3.title': 'Especificación de Materiales',
    'cp.af.cap3.body':  'Selección de productos y verificación de compatibilidad entre capas para la pila costera completa.',
    'cp.af.cap4.title': 'Suministro y Logística',
    'cp.af.cap4.body':  'Fabricación, control de calidad y entrega en sitio — colchonetas pre-rellenas o unidades planas.',
    'cp.af.cap5.title': 'Supervisión de Instalación',
    'cp.af.cap5.body':  'Supervisión técnica y aseguramiento de calidad en tiempo real sobre y bajo el nivel del agua.',

    'cp.af.stats.eyebrow': 'Los Números', 'cp.af.stats.h2': 'Ventajas Técnicas',
    'cp.af.stat1': 'Reducción de energía de oleaje mediante armadura porosa de gaviones',
    'cp.af.stat2': 'Años de vida de diseño para sistemas correctamente especificados',
    'cp.af.stat3': 'Grúas requeridas en la mayoría de las instalaciones',
    'cp.af.stat4': 'Cobertura total del delantal — sin bordes expuestos que inicien falla',

    'cp.af.cta.eyebrow': 'Iniciar un Proyecto',
    'cp.af.cta.h2':   'Protejamos su litoral.',
    'cp.af.cta.body': 'Nuestros ingenieros trabajan desde el mar hasta la estructura — evaluación hidráulica, especificación de materiales y soporte en un servicio integrado.',
    'cp.af.cta.btn1': 'Solicitar Asistencia Técnica', 'cp.af.cta.btn2': 'Hablar con un Ingeniero',

    'footer.privacy': 'Política de Privacidad', 'footer.terms': 'Términos de Servicio',
    'footer.sustainability': 'Sostenibilidad', 'footer.copy': '© 2024 INGE&MAT. Todos los derechos reservados.',
  },
};

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
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
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
   Progress 0.889–1.0 is the resting pause on Frame 13.
══════════════════════════════════════════════════════════ */
const CHAPTERS = [
  { id: 1,  frame: 1,  start: 0.000, end: 0.048, labelKey: 'cp.tl.1'  },
  { id: 2,  frame: 2,  start: 0.048, end: 0.138, labelKey: 'cp.tl.2'  },
  { id: 3,  frame: 3,  start: 0.138, end: 0.200, labelKey: 'cp.tl.3'  },
  { id: 4,  frame: 4,  start: 0.200, end: 0.316, labelKey: 'cp.tl.4'  },
  { id: 5,  frame: 5,  start: 0.316, end: 0.428, labelKey: 'cp.tl.5'  },
  { id: 6,  frame: 6,  start: 0.428, end: 0.516, labelKey: 'cp.tl.6'  },
  { id: 7,  frame: 7,  start: 0.516, end: 0.588, labelKey: 'cp.tl.7'  },
  { id: 8,  frame: 8,  start: 0.588, end: 0.658, labelKey: 'cp.tl.8'  },
  { id: 9,  frame: 9,  start: 0.658, end: 0.748, labelKey: 'cp.tl.9'  },
  { id: 10, frame: 10, start: 0.748, end: 0.800, labelKey: 'cp.tl.10' },
  { id: 11, frame: 11, start: 0.800, end: 0.844, labelKey: 'cp.tl.11' },
  { id: 12, frame: 12, start: 0.844, end: 0.864, labelKey: 'cp.tl.12' },
  { id: 13, frame: 13, start: 0.864, end: 0.889, labelKey: 'cp.tl.13' },
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
const frames       = document.querySelectorAll('.cp-frame');
const progressFill = document.getElementById('cinema-progress-fill');
const tlLabelEl    = document.getElementById('tl-label');
const tlDots       = document.querySelectorAll('.tl-dot');

let IS_MOBILE = window.innerWidth < 768;

const frameMap = {};
frames.forEach(img => { frameMap[+img.dataset.frame] = img; });

const cardMap = {};
CHAPTERS.forEach(ch => {
  const el = document.getElementById(`card-ch${ch.id}`);
  if (el) cardMap[ch.id] = el;
});

/* ══════════════════════════════════════════════════════════
   GSAP PERCENTAGE POSITIONING
   Only for cards that truly use left/top: 50%.
   cp-card--final-hero is now upper-left — no centering needed.
══════════════════════════════════════════════════════════ */
function getPercentPos(el) {
  if (!el) return {};
  if (el.classList.contains('cp-card--center')) return { xPercent: -50, yPercent: -50 };
  if (el.classList.contains('cp-card--left-mid') ||
      el.classList.contains('cp-card--right-mid'))  return { yPercent: -50 };
  if (el.classList.contains('cp-card--center-lower') ||
      el.classList.contains('cp-card--bottom-center')) return { xPercent: -50 };
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
   FLOATING MOTION — subtle 5px over 9s, Apple Vision Pro feel
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
   All cards enter from below, exit upward. No horizontal drift.
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
  const dot = document.querySelector(`.tl-dot[data-ch="${ch.id}"]`);
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
  const section = document.getElementById('cinema-section');
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
  const cinema = document.getElementById('cinema-section');
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
