/* ============================================================
   GEOSYNTHETICS SOLUTIONS PAGE — JS
   Mirrors the steel-solutions.js i18n / scroll-reveal mechanism,
   namespaced under gs.* keys.
   ============================================================ */

import { initNavScroll, initSmoothScroll, initMobileMenu } from './js/nav-utils.js';
import { initLanguageFromUrlOrStorage, setLanguage, applyLanguageToLinks } from './js/lang-utils.js';

/* ── TRANSLATIONS ──────────────────────────────────────────── */
const translations = {
  en: {
    /* — Shared meta — */
    'gs.meta.applications': 'Applications',
    'gs.meta.cta':          'Request Technical Datasheet',
    'gs.meta.view':         'View Solutions',

    /* — Breadcrumb — */
    'gs.crumb.products': 'Products',
    'gs.crumb.page':     'Geosynthetics',

    /* — Hero — */
    'gs.hero.h1':  'Geosynthetic Solutions for<br /><em>Resilient Ground Engineering</em>',
    'gs.hero.sub': 'Specialized geosynthetic systems engineered to reinforce soil, control erosion, and support drainage across infrastructure, geotechnical, and industrial projects.',
    'gs.hero.body':'INGE&MAT sources and delivers engineered geosynthetic solutions for infrastructure, hydraulic, transportation, environmental, mining, and construction projects — combining technical credibility with dependable project support.',
    'gs.hero.btn1':'Explore Solutions',
    'gs.hero.btn2':'Request a Quote',

    /* — Intro — */
    'gs.intro.eyebrow':'Geosynthetic Engineering',
    'gs.intro.h2':     'Specialized Solutions for Critical Ground Engineering',
    'gs.intro.p1':     'Geosynthetic systems play a defining role in how infrastructure performs over time — improving soil behavior, controlling erosion, supporting drainage, and reinforcing critical ground conditions across complex projects.',
    'gs.intro.p2':     'INGE&MAT operates as a specialized sourcing and solutions partner, supporting infrastructure, geotechnical, hydraulic, transportation, environmental, mining, and construction projects with engineered geosynthetic systems selected for performance and reliability.',

    /* — Solution families overview — */
    'gs.nav.eyebrow': 'Solution Portfolio',
    'gs.nav.h2':      'Geosynthetic Solution Families',
    'gs.nav.c1.title':'Soil Reinforcement Systems',
    'gs.nav.c1.desc': 'Reinforcement systems engineered to improve load distribution and long-term ground performance.',
    'gs.nav.c2.title':'Geotextile Solutions',
    'gs.nav.c2.desc': 'Woven and nonwoven fabrics for separation, filtration, drainage, and protection.',
    'gs.nav.c3.title':'Cellular Confinement Systems',
    'gs.nav.c3.desc': 'Three-dimensional confinement for soil stabilization and erosion control.',
    'gs.nav.c4.title':'Mining & Industrial Reinforcement',
    'gs.nav.c4.desc': 'Heavy-duty reinforcement built for demanding mining and industrial environments.',
    'gs.nav.c5.title':'Synthetic Fiber Solutions',
    'gs.nav.c5.desc': 'Fiber reinforcement that improves crack control and durability in concrete.',

    /* — Family 1 — Soil Reinforcement Systems (Section 01) — */
    'gs.f1.num':   'Section 01',
    'gs.f1.title': 'Soil Reinforcement Systems',
    'gs.f1.intro': 'High-performance reinforcement solutions designed to improve load distribution, structural stability, and long-term performance across infrastructure and geotechnical projects.',
    'gs.f1.p1.tag':  'Multi-Directional Support',
    'gs.f1.p1.name': 'Biaxial Reinforcement System',
    'gs.f1.p1.desc': 'Engineered reinforcement structure that distributes loads evenly in two directions, improving subgrade stability beneath roads, platforms, and paved surfaces.',
    'gs.f1.p2.tag':  'Directional Strength',
    'gs.f1.p2.name': 'Uniaxial Reinforcement System',
    'gs.f1.p2.desc': 'High-tensile reinforcement solution engineered for slopes, retaining structures, and applications requiring strength along a primary direction.',
    'gs.f1.p3.tag':  'Triangular Aperture Technology',
    'gs.f1.p3.name': 'Triaxial Reinforcement System',
    'gs.f1.p3.desc': 'Reinforcement system with a triangular aperture geometry that delivers multi-directional confinement and superior load distribution for unpaved roads and base layers.',
    'gs.f1.p4.tag':  'Combined Function Design',
    'gs.f1.p4.name': 'Composite Reinforcement System',
    'gs.f1.p4.desc': 'Layered reinforcement solution that combines structural support with filtration or separation performance for demanding ground-improvement applications.',

    /* — Family 2 — Geotextile Solutions (Section 02) — */
    'gs.f2.num':   'Section 02',
    'gs.f2.title': 'Geotextile Solutions',
    'gs.f2.intro': 'Engineered geosynthetic materials that support separation, filtration, drainage, reinforcement, and protection in civil and environmental applications.',
    'gs.f2.p1.tag':  'High-Strength Separation',
    'gs.f2.p1.name': 'Woven Geotextiles',
    'gs.f2.p1.desc': 'Tightly woven fabric engineered for soil separation and reinforcement in roadways, embankments, and load-bearing applications.',
    'gs.f2.p2.tag':  'Filtration & Drainage',
    'gs.f2.p2.name': 'Nonwoven Geotextiles',
    'gs.f2.p2.desc': 'Permeable fabric designed for filtration, drainage, and protection layers across drainage systems, erosion control, and civil works.',

    /* — Family 3 — Cellular Confinement Systems (Section 03) — */
    'gs.f3.num':   'Section 03',
    'gs.f3.title': 'Cellular Confinement Systems',
    'gs.f3.intro': 'Three-dimensional confinement solutions that help stabilize soil, improve load support, and control erosion in demanding site conditions.',
    'gs.f3.p1.tag':  'Standard Confinement',
    'gs.f3.p1.name': 'Smooth HDPE Geocell',
    'gs.f3.p1.desc': 'Three-dimensional honeycomb confinement system that stabilizes infill material for load support, slope protection, and channel lining applications.',
    'gs.f3.p2.tag':  'Enhanced Interlock',
    'gs.f3.p2.name': 'Textured HDPE Geocell',
    'gs.f3.p2.desc': 'Confinement system with a textured surface that increases interlock with infill material, improving performance in steep slopes and high-load applications.',

    /* — Family 4 — Mining & Industrial Reinforcement (Section 04) — */
    'gs.f4.num':   'Section 04',
    'gs.f4.title': 'Mining & Industrial Reinforcement',
    'gs.f4.intro': 'Specialized reinforcement solutions designed for mining and industrial environments where durability, safety, and performance are critical.',
    'gs.f4.p1.tag':  'Heavy-Duty Reinforcement',
    'gs.f4.p1.name': 'Mining Grid',
    'gs.f4.p1.desc': 'Robust reinforcement structure engineered for haul roads, waste rock stabilization, and high-stress industrial surfaces in mining operations.',

    /* — Family 5 — Synthetic Fiber Solutions (Section 05) — */
    'gs.f5.num':   'Section 05',
    'gs.f5.title': 'Synthetic Fiber Solutions',
    'gs.f5.intro': 'Advanced fiber reinforcement products designed to improve crack control, durability, and material performance in concrete and construction applications.',
    'gs.f5.p1.tag':  'Crack Control Technology',
    'gs.f5.p1.name': 'Polypropylene Fiber',
    'gs.f5.p1.desc': 'Synthetic micro-reinforcement fiber that improves crack control, toughness, and durability in concrete, mortar, and construction materials.',

    /* — Application tags — */
    'gs.app.road_subgrades':        'Road Subgrades',
    'gs.app.platforms':             'Platforms',
    'gs.app.paved_surfaces':        'Paved Surfaces',
    'gs.app.foundation_layers':     'Foundation Layers',
    'gs.app.slope_stabilization':   'Slope Stabilization',
    'gs.app.retaining_structures':  'Retaining Structures',
    'gs.app.embankments':           'Embankments',
    'gs.app.unpaved_roads':         'Unpaved Roads',
    'gs.app.base_layers':           'Base Layers',
    'gs.app.working_platforms':     'Working Platforms',
    'gs.app.ground_improvement':    'Ground Improvement',
    'gs.app.separation_reinforcement':'Separation & Reinforcement',
    'gs.app.roadways':              'Roadways',
    'gs.app.load_bearing_platforms':'Load-Bearing Platforms',
    'gs.app.drainage_systems':      'Drainage Systems',
    'gs.app.erosion_control':       'Erosion Control',
    'gs.app.civil_works':           'Civil Works',
    'gs.app.load_support':          'Load Support',
    'gs.app.slope_protection':      'Slope Protection',
    'gs.app.channel_lining':        'Channel Lining',
    'gs.app.steep_slopes':          'Steep Slopes',
    'gs.app.high_load_areas':       'High-Load Areas',
    'gs.app.haul_roads':            'Haul Roads',
    'gs.app.waste_rock':            'Waste Rock Stabilization',
    'gs.app.industrial_surfaces':   'Industrial Surfaces',
    'gs.app.concrete_reinforcement':'Concrete Reinforcement',
    'gs.app.mortar_applications':   'Mortar Applications',
    'gs.app.crack_control':         'Crack Control',

    /* — CTA — */
    'gs.cta.label': 'Start a Project',
    'gs.cta.h2':    'Need Geosynthetic Solutions for Your Next Project?',
    'gs.cta.body':  'Our technical team can help you identify the right geosynthetic systems for your project’s ground conditions, performance requirements, and timeline.',
    'gs.cta.btn1':  'Request a Quote',
    'gs.cta.btn2':  'Speak with an Expert',
    'gs.cta.stat1': 'Infrastructure projects supported across Latin America',
    'gs.cta.stat2': 'Countries within our global sourcing network',
    'gs.cta.stat3': '9001 certified quality management standards',

    /* — Footer (shared) — */
    'footer.privacy':        'Privacy Policy',
    'footer.terms':          'Terms of Service',
    'footer.sustainability': 'Sustainability',
    'footer.copy':           '© 2026 INGE&MAT. All rights reserved.',

    /* — Nav (shared) — */
    'nav.home':         'Home',
    'nav.solutions':    'Solutions',
    'nav.products':     'Products',
    'nav.capabilities': 'Capabilities',
    'nav.about':        'About',
    'nav.contact':      'Contact',
    'nav.enquire':      'Enquire',
    'nav.sub.coastal':   'Coastal Protection',
    'nav.sub.ground':    'Ground Stabilization',
    'nav.sub.mining':    'Oil, Gas and Mining',
    'nav.sub.steel':     'Steel',
    'nav.sub.geosyn':    'Geosynthetics',
    'nav.sub.rocks':     'Amorphous Gabions',
    'nav.sub.anchoring': 'Anchoring Systems',
  },

  es: {
    /* — Shared meta — */
    'gs.meta.applications': 'Aplicaciones',
    'gs.meta.cta':          'Solicitar Ficha Técnica',
    'gs.meta.view':         'Ver Soluciones',

    /* — Breadcrumb — */
    'gs.crumb.products': 'Productos',
    'gs.crumb.page':     'Geosintéticos',

    /* — Hero — */
    'gs.hero.h1':  'Soluciones Geosintéticas para<br /><em>una Ingeniería del Terreno Resiliente</em>',
    'gs.hero.sub': 'Sistemas geosintéticos especializados diseñados para reforzar el suelo, controlar la erosión y apoyar el drenaje en proyectos de infraestructura, geotecnia e industria.',
    'gs.hero.body':'INGE&MAT abastece y entrega soluciones geosintéticas de ingeniería para proyectos de infraestructura, hidráulica, transporte, medio ambiente, minería y construcción, combinando credibilidad técnica con un acompañamiento confiable al proyecto.',
    'gs.hero.btn1':'Explorar Soluciones',
    'gs.hero.btn2':'Solicitar Cotización',

    /* — Intro — */
    'gs.intro.eyebrow':'Ingeniería en Geosintéticos',
    'gs.intro.h2':     'Soluciones Especializadas para la Ingeniería del Terreno',
    'gs.intro.p1':     'Los sistemas geosintéticos cumplen un papel determinante en el desempeño de la infraestructura a lo largo del tiempo, mejorando el comportamiento del suelo, controlando la erosión, apoyando el drenaje y reforzando condiciones de terreno críticas en proyectos complejos.',
    'gs.intro.p2':     'INGE&MAT actúa como un socio especializado en abastecimiento y soluciones, apoyando proyectos de infraestructura, geotecnia, hidráulica, transporte, medio ambiente, minería y construcción con sistemas geosintéticos de ingeniería seleccionados por su desempeño y confiabilidad.',

    /* — Solution families overview — */
    'gs.nav.eyebrow': 'Portafolio de Soluciones',
    'gs.nav.h2':      'Familias de Soluciones Geosintéticas',
    'gs.nav.c1.title':'Sistemas de Refuerzo de Suelos',
    'gs.nav.c1.desc': 'Sistemas de refuerzo diseñados para mejorar la distribución de cargas y el comportamiento del terreno a largo plazo.',
    'gs.nav.c2.title':'Soluciones en Geotextiles',
    'gs.nav.c2.desc': 'Tejidos y no tejidos para separación, filtración, drenaje y protección.',
    'gs.nav.c3.title':'Sistemas de Confinamiento Celular',
    'gs.nav.c3.desc': 'Confinamiento tridimensional para estabilización de suelos y control de erosión.',
    'gs.nav.c4.title':'Refuerzo para Minería e Industria',
    'gs.nav.c4.desc': 'Refuerzo de servicio pesado para entornos mineros e industriales exigentes.',
    'gs.nav.c5.title':'Soluciones con Fibras Sintéticas',
    'gs.nav.c5.desc': 'Refuerzo con fibras que mejora el control de fisuración y la durabilidad del concreto.',

    /* — Family 1 — Sistemas de Refuerzo de Suelos (Sección 01) — */
    'gs.f1.num':   'Sección 01',
    'gs.f1.title': 'Sistemas de Refuerzo de Suelos',
    'gs.f1.intro': 'Soluciones de refuerzo de alto desempeño diseñadas para mejorar la distribución de cargas, la estabilidad estructural y el comportamiento a largo plazo en proyectos de infraestructura y geotecnia.',
    'gs.f1.p1.tag':  'Soporte Multidireccional',
    'gs.f1.p1.name': 'Sistema de Refuerzo Biaxial',
    'gs.f1.p1.desc': 'Estructura de refuerzo diseñada para distribuir cargas de manera uniforme en dos direcciones, mejorando la estabilidad de la subrasante bajo vías, plataformas y superficies pavimentadas.',
    'gs.f1.p2.tag':  'Resistencia Direccional',
    'gs.f1.p2.name': 'Sistema de Refuerzo Uniaxial',
    'gs.f1.p2.desc': 'Solución de refuerzo de alta resistencia a la tracción diseñada para taludes, estructuras de contención y aplicaciones que requieren resistencia en una dirección principal.',
    'gs.f1.p3.tag':  'Tecnología de Apertura Triangular',
    'gs.f1.p3.name': 'Sistema de Refuerzo Triaxial',
    'gs.f1.p3.desc': 'Sistema de refuerzo con geometría de apertura triangular que ofrece confinamiento multidireccional y una distribución de cargas superior para vías no pavimentadas y capas de base.',
    'gs.f1.p4.tag':  'Diseño de Función Combinada',
    'gs.f1.p4.name': 'Sistema de Refuerzo Compuesto',
    'gs.f1.p4.desc': 'Solución de refuerzo multicapa que combina soporte estructural con funciones de filtración o separación para aplicaciones exigentes de mejoramiento de suelos.',

    /* — Family 2 — Soluciones en Geotextiles (Sección 02) — */
    'gs.f2.num':   'Sección 02',
    'gs.f2.title': 'Soluciones en Geotextiles',
    'gs.f2.intro': 'Materiales geosintéticos diseñados para cumplir funciones de separación, filtración, drenaje, refuerzo y protección en aplicaciones civiles y ambientales.',
    'gs.f2.p1.tag':  'Separación de Alta Resistencia',
    'gs.f2.p1.name': 'Geotextiles Tejidos',
    'gs.f2.p1.desc': 'Tejido de alta densidad diseñado para funciones de separación y refuerzo de suelos en vías, terraplenes y aplicaciones que soportan carga.',
    'gs.f2.p2.tag':  'Filtración y Drenaje',
    'gs.f2.p2.name': 'Geotextiles No Tejidos',
    'gs.f2.p2.desc': 'Tejido permeable diseñado para funciones de filtración, drenaje y protección en sistemas de drenaje, control de erosión y obras civiles.',

    /* — Family 3 — Sistemas de Confinamiento Celular (Sección 03) — */
    'gs.f3.num':   'Sección 03',
    'gs.f3.title': 'Sistemas de Confinamiento Celular',
    'gs.f3.intro': 'Soluciones tridimensionales de confinamiento que ayudan a estabilizar el suelo, mejorar el soporte de cargas y controlar la erosión en condiciones exigentes.',
    'gs.f3.p1.tag':  'Confinamiento Estándar',
    'gs.f3.p1.name': 'Celda de Confinamiento HDPE Lisa',
    'gs.f3.p1.desc': 'Sistema tridimensional de confinamiento tipo panal que estabiliza el material de relleno para soporte de cargas, protección de taludes y revestimiento de canales.',
    'gs.f3.p2.tag':  'Interbloqueo Mejorado',
    'gs.f3.p2.name': 'Celda de Confinamiento HDPE Texturizada',
    'gs.f3.p2.desc': 'Sistema de confinamiento con superficie texturizada que incrementa el interbloqueo con el material de relleno, mejorando el desempeño en taludes pronunciados y aplicaciones de alta carga.',

    /* — Family 4 — Refuerzo para Minería e Industria (Sección 04) — */
    'gs.f4.num':   'Sección 04',
    'gs.f4.title': 'Refuerzo para Minería e Industria',
    'gs.f4.intro': 'Soluciones de refuerzo especializadas para entornos mineros e industriales donde la durabilidad, la seguridad y el desempeño son fundamentales.',
    'gs.f4.p1.tag':  'Refuerzo de Servicio Pesado',
    'gs.f4.p1.name': 'Malla para Minería',
    'gs.f4.p1.desc': 'Estructura de refuerzo robusta diseñada para vías de acarreo, estabilización de material estéril y superficies industriales de alto esfuerzo en operaciones mineras.',

    /* — Family 5 — Soluciones con Fibras Sintéticas (Sección 05) — */
    'gs.f5.num':   'Sección 05',
    'gs.f5.title': 'Soluciones con Fibras Sintéticas',
    'gs.f5.intro': 'Productos de refuerzo con fibras sintéticas diseñados para mejorar el control de fisuración, la durabilidad y el desempeño de materiales en concreto y construcción.',
    'gs.f5.p1.tag':  'Tecnología de Control de Fisuración',
    'gs.f5.p1.name': 'Fibra de Polipropileno',
    'gs.f5.p1.desc': 'Fibra sintética de microrrefuerzo que mejora el control de fisuración, la tenacidad y la durabilidad en concreto, mortero y materiales de construcción.',

    /* — Application tags — */
    'gs.app.road_subgrades':        'Subrasantes Viales',
    'gs.app.platforms':             'Plataformas',
    'gs.app.paved_surfaces':        'Superficies Pavimentadas',
    'gs.app.foundation_layers':     'Capas de Cimentación',
    'gs.app.slope_stabilization':   'Estabilización de Taludes',
    'gs.app.retaining_structures':  'Estructuras de Contención',
    'gs.app.embankments':           'Terraplenes',
    'gs.app.unpaved_roads':         'Vías No Pavimentadas',
    'gs.app.base_layers':           'Capas de Base',
    'gs.app.working_platforms':     'Plataformas de Trabajo',
    'gs.app.ground_improvement':    'Mejoramiento de Suelos',
    'gs.app.separation_reinforcement':'Separación y Refuerzo',
    'gs.app.roadways':              'Vías',
    'gs.app.load_bearing_platforms':'Plataformas de Carga',
    'gs.app.drainage_systems':      'Sistemas de Drenaje',
    'gs.app.erosion_control':       'Control de Erosión',
    'gs.app.civil_works':           'Obras Civiles',
    'gs.app.load_support':          'Soporte de Cargas',
    'gs.app.slope_protection':      'Protección de Taludes',
    'gs.app.channel_lining':        'Revestimiento de Canales',
    'gs.app.steep_slopes':          'Taludes Pronunciados',
    'gs.app.high_load_areas':       'Áreas de Alta Carga',
    'gs.app.haul_roads':            'Vías de Acarreo',
    'gs.app.waste_rock':            'Estabilización de Material Estéril',
    'gs.app.industrial_surfaces':   'Superficies Industriales',
    'gs.app.concrete_reinforcement':'Refuerzo de Concreto',
    'gs.app.mortar_applications':   'Aplicaciones de Mortero',
    'gs.app.crack_control':         'Control de Fisuración',

    /* — CTA — */
    'gs.cta.label': 'Iniciar un Proyecto',
    'gs.cta.h2':    '¿Necesita Soluciones Geosintéticas para su Próximo Proyecto?',
    'gs.cta.body':  'Nuestro equipo técnico puede ayudarle a identificar los sistemas geosintéticos adecuados para las condiciones del terreno, los requisitos de desempeño y los plazos de su proyecto.',
    'gs.cta.btn1':  'Solicitar Cotización',
    'gs.cta.btn2':  'Hablar con un Experto',
    'gs.cta.stat1': 'Proyectos de infraestructura apoyados en América Latina',
    'gs.cta.stat2': 'Países en nuestra red global de abastecimiento',
    'gs.cta.stat3': 'Gestión de calidad certificada ISO 9001',

    /* — Footer (shared) — */
    'footer.privacy':        'Política de Privacidad',
    'footer.terms':          'Términos de Servicio',
    'footer.sustainability': 'Sostenibilidad',
    'footer.copy':           '© 2026 INGE&MAT. Todos los derechos reservados.',

    /* — Nav (shared) — */
    'nav.home':         'Inicio',
    'nav.solutions':    'Soluciones',
    'nav.products':     'Productos',
    'nav.capabilities': 'Capacidades',
    'nav.about':        'Nosotros',
    'nav.contact':      'Contacto',
    'nav.enquire':      'Cotizar',
    'nav.sub.coastal':   'Protección Costera',
    'nav.sub.ground':    'Estabilización de Suelos',
    'nav.sub.mining':    'Petróleo, Gas y Minería',
    'nav.sub.steel':     'Aceros',
    'nav.sub.geosyn':    'Geosintéticos',
    'nav.sub.rocks':     'Gaviones Amorfos',
    'nav.sub.anchoring': 'Sistemas de Anclaje',
  },
};

/* ── LANGUAGE TOGGLE ───────────────────────────────────────── */
let currentLang = 'en';

function applyLang(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-es', lang === 'es');

  document.getElementById('lang-en').classList.toggle('lang-active', lang === 'en');
  document.getElementById('lang-es').classList.toggle('lang-active', lang === 'es');

  currentLang = lang;
  setLanguage(lang);
  applyLanguageToLinks(lang);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'es' : 'en');
});

applyLang(initLanguageFromUrlOrStorage());

/* ── NAV + SCROLL ──────────────────────────────────────────── */
initNavScroll();
initSmoothScroll();

/* ── SCROLL ANIMATIONS ─────────────────────────────────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll('.gs-fade').forEach((el) => observer.observe(el));

/* ── MOBILE MENU ───────────────────────────────────────────── */
initMobileMenu();
