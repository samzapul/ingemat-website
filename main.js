/* ============================================================
   INGE&MAT — Main JS
   Smooth scroll + active nav tracking + i18n
   ============================================================ */

import { initLanguageFromUrlOrStorage, setLanguage, applyLanguageToLinks } from './js/lang-utils.js';

const NAV_H = 68;

/* ── TRANSLATIONS ──────────────────────────────────────────── */
const translations = {
  en: {
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

    'hero.line1': 'Engineering Precision',
    'hero.line2': 'Global Sourcing',
    'hero.btn1':  'View Solutions',
    'hero.btn2':  'View Products',

    'eng.lead': '<span class="hm-line">Infrastructure doesn\'t begin with concrete.</span><span class="hm-line">It begins with the right materials.</span>',
    'eng.sub':  'From coastal defenses and stabilized foundations to industrial pipelines and marine infrastructure, INGE&MAT supplies the engineering systems that make modern infrastructure possible.',

    'proj.eyebrow': 'Featured Work',
    'proj.heading': "The World's Toughest Projects",
    'proj.cta':     'Explore Solution',
    'proj.soon':    'Coming Soon',
    'proj.c1.title': 'Coastal Protection',
    'proj.c1.desc':  'Protecting shorelines through integrated geosynthetics, amorphous gabions and steel systems.',
    'proj.c2.title': 'Ground Stabilization',
    'proj.c2.desc':  'Transforming weak ground into reliable foundations for heavy infrastructure.',
    'proj.c3.title': 'Oil, Gas & Mining',
    'proj.c3.desc':  'Engineering industrial infrastructure while respecting the Colombian landscape.',
    'proj.c4.title': 'Marine Infrastructure',
    'proj.c4.desc':  'Ports, terminals and waterfront structures engineered for long-term performance.',
    'proj.c5.title': 'Mining & Heavy Industry',
    'proj.c5.desc':  "Infrastructure supporting the world's most demanding industrial operations.",

    'sys.heading': 'One Project.<br>Many Materials.',
    'sys.sub':     'Every engineering solution combines multiple material technologies working together.',
    'sys.coastal': 'Coastal Protection',
    'sys.ground':  'Ground Stabilization',
    'sys.ogm':     'Oil, Gas & Mining',
    'sys.mat.geotextiles': 'Geotextiles',
    'sys.mat.gabions':     'Gabions',
    'sys.mat.steel':       'Steel',
    'sys.mat.geocells':    'Geocells',
    'sys.mat.geogrids':    'Geogrids',
    'sys.mat.steelpipe':   'Steel Pipe',
    'sys.mat.drainage':    'Drainage',
    'sys.hint': 'Hover a solution or a material to see how they connect.',

    'mat.eyebrow': 'What We Supply',
    'mat.heading': 'Engineering Materials',
    'mat.p1.title': 'Steel',
    'mat.p1.line':  'API 5L Steel Pipes',
    'mat.p1.sub':   'Engineered for critical infrastructure.',
    'mat.p1.btn':   'Explore Steel',
    'mat.p2.title': 'Geosynthetics',
    'mat.p2.sub':   'Engineered ground improvement.',
    'mat.p2.btn':   'Explore Geosynthetics',
    'mat.p3.title': 'Amorphous Gabions',
    'mat.p3.sub':   'Flexible coastal protection systems.',
    'mat.p3.btn':   'Explore Gabions',

    'ind.eyebrow':  'Where We Work',
    'ind.heading':  'Industries We Serve',
    'ind.energy':   'Energy',
    'ind.mining':   'Mining',
    'ind.marine':   'Marine',
    'ind.transport':'Transportation',
    'ind.water':    'Water',
    'ind.industrial':'Industrial',

    'why.eyebrow': 'Why Partner With Us',
    'why.heading': 'Why Engineers Choose INGE&MAT',
    'why.c1.title': 'Engineering Support',
    'why.c1.desc':  'Direct technical collaboration from specification to installation.',
    'why.c2.title': 'Certified Materials',
    'why.c2.desc':  'Every product manufactured and tested to international standards.',
    'why.c3.title': 'Reliable Supply Chains',
    'why.c3.desc':  'A global manufacturing network built for on-time delivery.',
    'why.c4.title': 'Technical Documentation',
    'why.c4.desc':  'Complete datasheets, certifications and installation guides for every project.',
    'why.c5.title': 'Global Manufacturing Network',
    'why.c5.desc':  'Access to specialized producers across multiple continents.',
    'why.c6.title': 'Long-Term Performance',
    'why.c6.desc':  'Materials selected and engineered to perform for decades, not years.',

    'insight.eyebrow': 'Project Stories',
    'insight.heading': 'Engineering Insights',
    'insight.tag.coastal': 'Coastal Protection',
    'insight.tag.ground':  'Ground Stabilization',
    'insight.tag.ogm':     'Oil, Gas & Mining',
    'insight.c1.title': 'Wave Energy Dissipation',
    'insight.c1.desc':  'How porous gabion armor absorbs and redirects hydraulic energy along the shoreline.',
    'insight.c2.title': 'Working Platform Construction',
    'insight.c2.desc':  'Turning weak, saturated ground into a stable foundation for heavy equipment.',
    'insight.c3.title': 'Pipeline Installation',
    'insight.c3.desc':  'Precision welding and burial practices that place critical infrastructure beneath the landscape.',
    'insight.c4.title': 'Industrial Corridors',
    'insight.c4.desc':  'Surveying and route planning across some of the most demanding terrain in the Andes.',

    'how.eyebrow': 'Process',
    'how.heading': 'From Specification to Site',
    'how.s1.title': 'Engineering',
    'how.s1.desc':  'Understanding the technical demands of your project.',
    'how.s2.title': 'Material Selection',
    'how.s2.desc':  'Matching proven material technologies to site conditions.',
    'how.s3.title': 'Manufacturing',
    'how.s3.desc':  'Sourced from certified manufacturers across our global network.',
    'how.s4.title': 'Global Supply',
    'how.s4.desc':  'Logistics coordinated from factory to site, anywhere in Latin America.',
    'how.s5.title': 'Technical Support',
    'how.s5.desc':  'Engineering guidance through specification, installation and beyond.',
    'how.s6.title': 'Project Success',
    'how.s6.desc':  'Infrastructure that performs reliably for decades.',

    'fcta.heading': 'The materials<br>behind<br>great engineering.',
    'fcta.body':    'Every successful infrastructure project begins long before construction starts. It begins with selecting the right materials. INGE&MAT supplies engineered solutions trusted across coastal, industrial, transportation, marine, mining and energy infrastructure throughout Latin America.',
    'fcta.btn1':    'Explore Solutions',
    'fcta.btn2':    'Explore Products',

    'res.eyebrow': 'Technical Documentation',
    'res.heading': 'Downloadable Resources',
    'res.subtext': 'Access our complete library of technical documents, product catalogs, and case studies. All documents are updated quarterly and available for immediate download.',
    'pdf1.title':  'Company Brochure 2024',
    'pdf1.desc':   "Complete overview of INGE&MAT's product range, global capabilities, and engineering philosophy.",
    'pdf2.title':  'Technical Product Catalog',
    'pdf2.desc':   'Detailed specifications, tolerances, load ratings, and installation guides for all anchoring systems.',
    'pdf3.title':  'Capabilities Sheet',
    'pdf3.desc':   'Summary of manufacturing capabilities, certifications, quality benchmarks, and delivery timelines.',
    'pdf4.title':  'Infrastructure Case Study',
    'pdf4.desc':   'Documented case study of a large-scale slope stabilization project using INGE&MAT anchor systems.',
    'pdf.download': 'Download',

    'contact.eyebrow': 'Contact',
    'contact.heading': 'Let\'s Talk About Your Project',
    'contact.body':    'Our engineering team is available to discuss project specifications, technical requirements, and custom sourcing solutions.',
    'form.title':    'Request a Quote',
    'form.name':     'Full Name',
    'form.email':    'Email Address',
    'form.company':  'Company / Organisation',
    'form.message':  'Project details or inquiry...',
    'form.submit':   'Send Enquiry',

    'footer.sub':            'Structural Engineering · Global Sourcing',
    'footer.privacy':        'Privacy Policy',
    'footer.terms':          'Terms of Service',
    'footer.sustainability': 'Sustainability',
    'footer.copy':           '© 2024 INGE&MAT. All rights reserved.',
  },
  es: {
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

    'hero.line1': 'Precisión en Ingeniería',
    'hero.line2': 'Abastecimiento Global',
    'hero.btn1':  'Ver Soluciones',
    'hero.btn2':  'Ver Productos',

    'eng.lead': '<span class="hm-line">La infraestructura no comienza con concreto.</span><span class="hm-line">Comienza con los materiales correctos.</span>',
    'eng.sub':  'Desde defensas costeras y cimentaciones estabilizadas hasta ductos industriales e infraestructura marina, INGE&MAT suministra los sistemas de ingeniería que hacen posible la infraestructura moderna.',

    'proj.eyebrow': 'Trabajo Destacado',
    'proj.heading': 'Los Proyectos Más Exigentes del Mundo',
    'proj.cta':     'Explorar Solución',
    'proj.soon':    'Próximamente',
    'proj.c1.title': 'Protección Costera',
    'proj.c1.desc':  'Protegiendo litorales mediante geosintéticos, gaviones amorfos y sistemas de acero integrados.',
    'proj.c2.title': 'Estabilización de Suelos',
    'proj.c2.desc':  'Transformando suelos débiles en cimentaciones confiables para infraestructura pesada.',
    'proj.c3.title': 'Petróleo, Gas y Minería',
    'proj.c3.desc':  'Ingeniería de infraestructura industrial respetando el paisaje colombiano.',
    'proj.c4.title': 'Infraestructura Marina',
    'proj.c4.desc':  'Puertos, terminales y estructuras costeras diseñadas para un desempeño duradero.',
    'proj.c5.title': 'Minería e Industria Pesada',
    'proj.c5.desc':  'Infraestructura que respalda las operaciones industriales más exigentes del mundo.',

    'sys.heading': 'Un Proyecto.<br>Muchos Materiales.',
    'sys.sub':     'Cada solución de ingeniería combina múltiples tecnologías de materiales trabajando en conjunto.',
    'sys.coastal': 'Protección Costera',
    'sys.ground':  'Estabilización de Suelos',
    'sys.ogm':     'Petróleo, Gas y Minería',
    'sys.mat.geotextiles': 'Geotextiles',
    'sys.mat.gabions':     'Gaviones',
    'sys.mat.steel':       'Acero',
    'sys.mat.geocells':    'Geoceldas',
    'sys.mat.geogrids':    'Geomallas',
    'sys.mat.steelpipe':   'Tubería de Acero',
    'sys.mat.drainage':    'Drenaje',
    'sys.hint': 'Pase el cursor sobre una solución o un material para ver cómo se conectan.',

    'mat.eyebrow': 'Lo Que Suministramos',
    'mat.heading': 'Materiales de Ingeniería',
    'mat.p1.title': 'Acero',
    'mat.p1.line':  'Tuberías de Acero API 5L',
    'mat.p1.sub':   'Diseñado para infraestructura crítica.',
    'mat.p1.btn':   'Explorar Acero',
    'mat.p2.title': 'Geosintéticos',
    'mat.p2.sub':   'Mejoramiento de suelos diseñado con ingeniería.',
    'mat.p2.btn':   'Explorar Geosintéticos',
    'mat.p3.title': 'Gaviones Amorfos',
    'mat.p3.sub':   'Sistemas flexibles de protección costera.',
    'mat.p3.btn':   'Explorar Gaviones',

    'ind.eyebrow':  'Dónde Trabajamos',
    'ind.heading':  'Industrias que Atendemos',
    'ind.energy':   'Energía',
    'ind.mining':   'Minería',
    'ind.marine':   'Marina',
    'ind.transport':'Transporte',
    'ind.water':    'Agua',
    'ind.industrial':'Industrial',

    'why.eyebrow': 'Por Qué Trabajar con Nosotros',
    'why.heading': 'Por Qué los Ingenieros Eligen INGE&MAT',
    'why.c1.title': 'Soporte de Ingeniería',
    'why.c1.desc':  'Colaboración técnica directa desde la especificación hasta la instalación.',
    'why.c2.title': 'Materiales Certificados',
    'why.c2.desc':  'Cada producto fabricado y probado bajo estándares internacionales.',
    'why.c3.title': 'Cadenas de Suministro Confiables',
    'why.c3.desc':  'Una red de fabricación global diseñada para entregas puntuales.',
    'why.c4.title': 'Documentación Técnica',
    'why.c4.desc':  'Fichas técnicas, certificaciones y guías de instalación completas para cada proyecto.',
    'why.c5.title': 'Red de Fabricación Global',
    'why.c5.desc':  'Acceso a productores especializados en múltiples continentes.',
    'why.c6.title': 'Desempeño a Largo Plazo',
    'why.c6.desc':  'Materiales seleccionados y diseñados para funcionar durante décadas, no años.',

    'insight.eyebrow': 'Historias de Proyectos',
    'insight.heading': 'Perspectivas de Ingeniería',
    'insight.tag.coastal': 'Protección Costera',
    'insight.tag.ground':  'Estabilización de Suelos',
    'insight.tag.ogm':     'Petróleo, Gas y Minería',
    'insight.c1.title': 'Disipación de Energía de Oleaje',
    'insight.c1.desc':  'Cómo la armadura porosa de gaviones absorbe y redirige la energía hidráulica a lo largo del litoral.',
    'insight.c2.title': 'Construcción de Plataformas de Trabajo',
    'insight.c2.desc':  'Convirtiendo suelo débil y saturado en una base estable para equipo pesado.',
    'insight.c3.title': 'Instalación de Ductos',
    'insight.c3.desc':  'Prácticas de soldadura de precisión y enterrado que ubican infraestructura crítica bajo el terreno.',
    'insight.c4.title': 'Corredores Industriales',
    'insight.c4.desc':  'Topografía y planificación de ruta en algunos de los terrenos más exigentes de los Andes.',

    'how.eyebrow': 'Proceso',
    'how.heading': 'De la Especificación a la Obra',
    'how.s1.title': 'Ingeniería',
    'how.s1.desc':  'Comprendiendo las exigencias técnicas de su proyecto.',
    'how.s2.title': 'Selección de Materiales',
    'how.s2.desc':  'Emparejando tecnologías de materiales probadas con las condiciones del sitio.',
    'how.s3.title': 'Fabricación',
    'how.s3.desc':  'Abastecido por fabricantes certificados en nuestra red global.',
    'how.s4.title': 'Suministro Global',
    'how.s4.desc':  'Logística coordinada desde fábrica hasta obra, en cualquier lugar de América Latina.',
    'how.s5.title': 'Soporte Técnico',
    'how.s5.desc':  'Acompañamiento de ingeniería durante la especificación, instalación y más allá.',
    'how.s6.title': 'Éxito del Proyecto',
    'how.s6.desc':  'Infraestructura que funciona de forma confiable durante décadas.',

    'fcta.heading': 'Los materiales<br>detrás de<br>la gran ingeniería.',
    'fcta.body':    'Todo proyecto de infraestructura exitoso comienza mucho antes de iniciar la construcción. Comienza con la selección de los materiales correctos. INGE&MAT suministra soluciones de ingeniería confiables para infraestructura costera, industrial, de transporte, marina, minera y energética en toda América Latina.',
    'fcta.btn1':    'Explorar Soluciones',
    'fcta.btn2':    'Explorar Productos',

    'res.eyebrow': 'Documentación Técnica',
    'res.heading': 'Recursos Descargables',
    'res.subtext': 'Acceda a nuestra biblioteca completa de documentos técnicos, catálogos de productos y estudios de caso. Todos los documentos se actualizan trimestralmente y están disponibles para descarga inmediata.',
    'pdf1.title':  'Brochure de la Empresa 2024',
    'pdf1.desc':   'Resumen completo de la gama de productos, capacidades globales y filosofía de ingeniería de INGE&MAT.',
    'pdf2.title':  'Catálogo Técnico de Productos',
    'pdf2.desc':   'Especificaciones detalladas, tolerancias, clasificaciones de carga y guías de instalación para todos los sistemas de anclaje.',
    'pdf3.title':  'Ficha de Capacidades',
    'pdf3.desc':   'Resumen de capacidades de fabricación, certificaciones, estándares de calidad y plazos de entrega.',
    'pdf4.title':  'Estudio de Caso de Infraestructura',
    'pdf4.desc':   'Caso documentado de un proyecto de estabilización de taludes a gran escala utilizando sistemas de anclaje INGE&MAT.',
    'pdf.download': 'Descargar',

    'contact.eyebrow': 'Contacto',
    'contact.heading': 'Hablemos de su proyecto',
    'contact.body':    'Nuestro equipo de ingeniería está disponible para discutir especificaciones de proyectos, requerimientos técnicos y soluciones de abastecimiento a medida.',
    'form.title':    'Solicitar Cotización',
    'form.name':     'Nombre Completo',
    'form.email':    'Correo Electrónico',
    'form.company':  'Empresa / Organización',
    'form.message':  'Detalles del proyecto o consulta...',
    'form.submit':   'Enviar Consulta',

    'footer.sub':            'Ingeniería Estructural · Abastecimiento Global',
    'footer.privacy':        'Política de Privacidad',
    'footer.terms':          'Términos de Servicio',
    'footer.sustainability': 'Sostenibilidad',
    'footer.copy':           '© 2024 INGE&MAT. Todos los derechos reservados.',
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

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-es', lang === 'es');

  document.getElementById('lang-en').classList.toggle('lang-active', lang === 'en');
  document.getElementById('lang-es').classList.toggle('lang-active', lang === 'es');

  currentLang = lang;
  setLanguage(lang);
  applyLanguageToLinks(lang);
}

document.getElementById('lang-toggle').addEventListener('click', (e) => {
  const next = currentLang === 'en' ? 'es' : 'en';
  applyLang(next);
});

applyLang(initLanguageFromUrlOrStorage());

/* ── EMAILJS CONTACT FORM ──────────────────────────────────── */
const ejs = window.emailjs;
ejs.init({ publicKey: '2lC9rNTrRbzwaB9SV' });

document.getElementById('form-submit').addEventListener('click', () => {
  const name     = document.getElementById('form-name').value.trim();
  const email    = document.getElementById('form-email').value.trim();
  const company  = document.getElementById('form-company').value.trim();
  const message  = document.getElementById('form-message').value.trim();
  const feedback = document.getElementById('form-feedback');
  const btn      = document.getElementById('form-submit');

  if (!name || !email || !message) {
    feedback.textContent = currentLang === 'es'
      ? 'Por favor completa nombre, correo y mensaje.'
      : 'Please fill in your name, email and message.';
    feedback.className = 'form-feedback form-feedback--error';
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    feedback.textContent = currentLang === 'es'
      ? 'Por favor ingresa un correo electrónico válido.'
      : 'Please enter a valid email address.';
    feedback.className = 'form-feedback form-feedback--error';
    return;
  }

  btn.disabled = true;
  btn.textContent = currentLang === 'es' ? 'Enviando…' : 'Sending…';

  ejs.send('service_1sj6tgr', 'template_ale0gq9', {
    name:    name,
    email:   email,
    company: company || '—',
    message: message,
  }).then(() => {
    feedback.textContent = currentLang === 'es'
      ? '¡Mensaje enviado! Te contactaremos pronto.'
      : 'Message sent! We\'ll be in touch soon.';
    feedback.className = 'form-feedback form-feedback--success';
    btn.textContent = currentLang === 'es' ? 'Enviado' : 'Sent';
    document.getElementById('form-name').value    = '';
    document.getElementById('form-email').value   = '';
    document.getElementById('form-company').value = '';
    document.getElementById('form-message').value = '';
  }).catch((err) => {
    console.error('EmailJS error:', err);
    feedback.textContent = currentLang === 'es'
      ? 'No se pudo enviar el mensaje. Por favor inténtalo de nuevo o escríbenos por WhatsApp.'
      : 'The message could not be sent. Please try again or reach us on WhatsApp.';
    feedback.className = 'form-feedback form-feedback--error';
    btn.disabled = false;
    btn.textContent = currentLang === 'es' ? 'Enviar Consulta' : 'Send Enquiry';
  });
});

/* ── NAV TRANSPARENCY ON SCROLL ───────────────────────────── */
const navEl = document.getElementById('nav');
function updateNav() {
  navEl.classList.toggle('nav--scrolled', window.scrollY > 80);
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── SMOOTH SCROLL ─────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_H;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── ACTIVE NAV TRACKING ───────────────────────────────────── */
/* DOM order matters: about (S1) precedes solutions (S2) precedes
   capabilities (S6) on the redesigned homepage. */
const sectionIds = ['hero', 'about', 'solutions', 'capabilities', 'resources', 'contact'];
const linkMap = {
  hero:         document.getElementById('nl-home'),
  solutions:    document.getElementById('nl-solutions'),
  capabilities: document.getElementById('nl-capabilities'),
  about:        document.getElementById('nl-about'),
  contact:      document.getElementById('nl-contact'),
};

function setActive(id) {
  Object.entries(linkMap).forEach(([key, el]) => {
    if (!el) return;
    el.classList.toggle('active', key === id);
  });
}

function onScroll() {
  const scrollY = window.scrollY + NAV_H + 40;
  let current = 'hero';
  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });
  setActive(current);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── MOBILE MENU ───────────────────────────────────────────── */
(function () {
  const hamburger  = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  function closeMenu() {
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
  });

  /* Accordion triggers */
  mobileMenu.querySelectorAll('.nav-mobile-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sub  = btn.nextElementSibling;
      const open = btn.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      sub.classList.toggle('is-open', open);
    });
  });

  /* Close menu when a link is tapped */
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });
})();
