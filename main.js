/* ============================================================
   INGE&MAT — Main JS
   Smooth scroll + active nav tracking + i18n
   ============================================================ */

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
    'nav.sub.marine':    'Marine Infrastructure',
    'nav.sub.retaining': 'Retaining Structures',
    'nav.sub.mining':    'Mining & Energy',
    'nav.sub.steel':     'Steel',
    'nav.sub.geosyn':    'Geosynthetics',
    'nav.sub.rocks':     'Amorphous Gabions',
    'nav.sub.anchoring': 'Anchoring Systems',

    'hero.line1': 'Engineering Precision',
    'hero.line2': 'Global Sourcing',
    'hero.btn1':  'View Projects',
    'hero.btn2':  'Global Logistics',

    'solutions.eyebrow':  'Solutions',
    'solutions.heading':  'Solutions designed for<br />real infrastructure',
    'solutions.body':     'In Inge&Mat SAS we offer specialized solutions for infrastructure projects, including sheet piles, woven and non-woven geotextiles, anchoring systems, slope stabilization, and materials for oil & gas applications, port works, and critical structures. Each solution is selected and optimized based on project conditions, ensuring technical performance, cost efficiency, and reliability in execution.',

    'card.badge':  'Premium Spec',
    'card1.title': 'Anclajes de Alta Resistencia',
    'card1.desc':  'Engineering strength that defies environmental degradation. Our proprietary anchoring systems are forged for extreme conditions and tested to international load-bearing standards.',
    'card2.title': 'Gavión Amorfo',
    'card2.desc':  'Fluid structural solutions meeting rigid requirements. A breakthrough in erosion control and international landscaping — adaptive, durable, architecturally precise.',

    'cap.eyebrow':    'Core Capabilities',
    'cap.heading':    'Engineering &amp; Supply<br>Capabilities',
    'cap.body':       "We operate as an integration channel between international manufacturers and projects across Latin America, facilitating access to specialized solutions and ensuring their availability during critical execution phases. We have the capacity to articulate technical supply for sectors such as road infrastructure, geotechnics, maritime works, and energy, adapting each solution to the specific conditions of the project. Our structure allows us to respond quickly to complex technical requirements and serve projects at both regional and broader market levels, with a direct focus on performance and execution.",
    'cap.feat1':      'Fully compliant with all applicable technical and regulatory requirements established by the Agencia Nacional de Infraestructura (ANI), Colombia.',
    'cap.feat2':      'Established operational presence across Latin America, with the ability to support projects in multiple markets and technical contexts.',
    'cap.feat3':      'End-to-end support, from sourcing and logistics to on-site delivery and integration.',
    'cap.stat.label': 'PROJECTS SUPPORTED',
    'cap.stat.desc':  'Across infrastructure, geotechnical and energy sectors',

    'about.eyebrow': 'About INGE&MAT',
    'about.heading': "Engineering the Foundation of Tomorrow's Infrastructure",
    'about.body1':   'Founded on the principles of structural precision and global sourcing, INGE&MAT delivers advanced anchoring systems, gabion solutions, and engineered structural components to major infrastructure projects worldwide.',
    'about.body2':   'With over two decades of field experience, our team of structural engineers and logistics specialists ensures every component meets the highest international standards before it reaches your site.',
    'about.stat1':   'Years of engineering excellence',
    'about.stat2':   'Countries in our supply network',
    'about.stat3':   'Projects completed globally',
    'about.stat4':   '9001 certified quality management',

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
    'nav.sub.marine':    'Infraestructura Marina',
    'nav.sub.retaining': 'Estructuras de Contención',
    'nav.sub.mining':    'Minería y Energía',
    'nav.sub.steel':     'Aceros',
    'nav.sub.geosyn':    'Geosintéticos',
    'nav.sub.rocks':     'Gaviones Amorfos',
    'nav.sub.anchoring': 'Sistemas de Anclaje',

    'hero.line1': 'Precisión en Ingeniería',
    'hero.line2': 'Abastecimiento Global',
    'hero.btn1':  'Ver Proyectos',
    'hero.btn2':  'Logística Global',

    'solutions.eyebrow':  'Soluciones',
    'solutions.heading':  'Soluciones diseñadas para<br />infraestructura real',
    'solutions.body':     'En Inge&Mat SAS nos especializamos en soluciones para proyectos de infraestructura, incluyendo tablestacas, geotextiles tejidos y no tejidos, sistemas de anclaje, estabilización de taludes y materiales para aplicaciones en oil & gas, obras portuarias y estructuras críticas. Cada solución se selecciona y optimiza en función de las condiciones del proyecto, asegurando desempeño técnico, eficiencia en costos y confiabilidad en la ejecución.',

    'card.badge':  'Especificación Premium',
    'card1.title': 'Anclajes de Alta Resistencia',
    'card1.desc':  'Fortaleza de ingeniería que desafía la degradación ambiental. Nuestros sistemas de anclaje propietarios están forjados para condiciones extremas y probados según estándares internacionales de carga.',
    'card2.title': 'Gavión Amorfo',
    'card2.desc':  'Soluciones estructurales fluidas que cumplen requisitos rígidos. Un avance en el control de erosión y paisajismo internacional — adaptable, duradero, arquitectónicamente preciso.',

    'cap.eyebrow':    'Capacidades Principales',
    'cap.heading':    'Capacidades de<br>Ingeniería y Suministro',
    'cap.body':       'Operamos como canal de integración entre fabricantes internacionales y proyectos en América Latina, facilitando el acceso a soluciones especializadas y asegurando su disponibilidad en fases críticas de ejecución. Contamos con la capacidad de articular suministro técnico para sectores como infraestructura vial, geotecnia, obras marítimas y energía, adaptando cada solución a las condiciones específicas del proyecto. Nuestra estructura permite responder con rapidez a requerimientos técnicos complejos y atender proyectos tanto a nivel regional como en otros mercados, con un enfoque directo en desempeño y ejecución.',
    'cap.feat1':      'Cumplimiento total con los requisitos técnicos y normativos establecidos por la Agencia Nacional de Infraestructura (ANI), Colombia.',
    'cap.feat2':      'Presencia operativa consolidada en América Latina, con capacidad de apoyar proyectos en múltiples mercados y contextos técnicos.',
    'cap.feat3':      'Acompañamiento integral, desde el abastecimiento y la logística hasta la entrega en sitio y la integración.',
    'cap.stat.label': 'PROYECTOS APOYADOS',
    'cap.stat.desc':  'En sectores de infraestructura, geotecnia y energía',

    'about.eyebrow': 'Sobre INGE&MAT',
    'about.heading': 'Ingeniando la Base de la Infraestructura del Mañana',
    'about.body1':   'Fundada en los principios de precisión estructural y abastecimiento global, INGE&MAT suministra sistemas avanzados de anclaje, soluciones de gavión y componentes estructurales de ingeniería a los principales proyectos de infraestructura del mundo.',
    'about.body2':   'Con más de dos décadas de experiencia en campo, nuestro equipo de ingenieros estructurales y especialistas en logística garantiza que cada componente cumpla los más altos estándares internacionales antes de llegar a su obra.',
    'about.stat1':   'Años de excelencia en ingeniería',
    'about.stat2':   'Países en nuestra red de suministro',
    'about.stat3':   'Proyectos completados globalmente',
    'about.stat4':   'Gestión de calidad certificada ISO 9001',

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
}

document.getElementById('lang-toggle').addEventListener('click', (e) => {
  const next = currentLang === 'en' ? 'es' : 'en';
  applyLang(next);
});

applyLang('en');

/* ── CAROUSEL (infinite loop) ──────────────────────────────── */
(function () {
  const track   = document.getElementById('carousel-track');
  const outer   = document.getElementById('carousel-outer');
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');
  const GAP     = 24;
  const TRANS   = 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)';

  /* Clone all cards: [clones_back | originals | clones_front] */
  const originals = Array.from(track.children);
  const N = originals.length; // 7

  originals.forEach(c => track.appendChild(c.cloneNode(true)));
  originals.slice().reverse().forEach(c => track.prepend(c.cloneNode(true)));
  /* track now has 3*N = 21 cards; originals at indices N..2N-1 */

  let index = N + 2; /* start showing originals 2 & 3 */
  let loopLock = false;

  function cardW() { return track.children[0].offsetWidth; }

  function tx(i) {
    const w = cardW();
    return -(i * (w + GAP)) + w / 2 + GAP;
  }

  function setInstant(i) {
    track.style.transition = 'none';
    track.style.transform  = `translateX(${tx(i)}px)`;
  }

  function go(i) {
    if (loopLock) return;
    index = i;
    track.style.transition = TRANS;
    track.style.transform  = `translateX(${tx(index)}px)`;

    loopLock = true;
    setTimeout(() => {
      /* silent loop jump after transition ends */
      if (index >= 2 * N) {
        index -= N;
        setInstant(index);
      } else if (index < N) {
        index += N;
        setInstant(index);
      }
      requestAnimationFrame(() => requestAnimationFrame(() => {
        track.style.transition = TRANS;
        loopLock = false;
      }));
    }, 570);
  }

  btnPrev.addEventListener('click', () => go(index - 1));
  btnNext.addEventListener('click', () => go(index + 1));
  window.addEventListener('resize', () => { setInstant(index); });

  /* scroll wheel */
  outer.addEventListener('wheel', (e) => {
    e.preventDefault();
    if      (e.deltaX > 40 || e.deltaY > 40)  go(index + 1);
    else if (e.deltaX < -40 || e.deltaY < -40) go(index - 1);
  }, { passive: false });

  /* drag / touch */
  let startX = 0, startIdx = 0;

  function dragStart(x) { startX = x; startIdx = index; track.classList.add('dragging'); }
  function dragEnd(x) {
    if (!track.classList.contains('dragging')) return;
    track.classList.remove('dragging');
    const diff = startX - x;
    if      (diff >  60) go(startIdx + 1);
    else if (diff < -60) go(startIdx - 1);
    else go(startIdx);
  }

  outer.addEventListener('mousedown',  (e) => dragStart(e.clientX));
  window.addEventListener('mouseup',   (e) => dragEnd(e.clientX));
  outer.addEventListener('touchstart', (e) => dragStart(e.touches[0].clientX), { passive: true });
  outer.addEventListener('touchend',   (e) => dragEnd(e.changedTouches[0].clientX));

  /* init */
  requestAnimationFrame(() => setInstant(index));
})();

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
      ? `Error al enviar: ${err?.text || err?.message || JSON.stringify(err)}`
      : `Failed to send: ${err?.text || err?.message || JSON.stringify(err)}`;
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
const sectionIds = ['hero', 'solutions', 'capabilities', 'about', 'resources', 'contact'];
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
