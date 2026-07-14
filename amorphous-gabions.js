/* ============================================================
   AMORPHOUS GABIONS PAGE — JS
   Mirrors the steel-solutions.js / geosynthetics.js i18n /
   scroll-reveal mechanism, namespaced under ag.* keys.
   ============================================================ */

import { initNavScroll, initSmoothScroll, initMobileMenu } from './js/nav-utils.js';
import { initLanguageFromUrlOrStorage, setLanguage, applyLanguageToLinks } from './js/lang-utils.js';

/* ── TRANSLATIONS ──────────────────────────────────────────── */
const translations = {
  en: {
    /* — Breadcrumb — */
    'ag.crumb.products': 'Products',
    'ag.crumb.page':     'Amorphous Gabions',

    /* — Hero — */
    'ag.hero.h1':  'Amorphous Gabions',
    'ag.hero.sub': 'Flexible scour protection and hydraulic stabilization systems designed for marine, coastal, river, and infrastructure applications.',
    'ag.hero.body':'Engineered to adapt to complex terrain and dynamic hydraulic environments while providing durable, efficient, and environmentally integrated protection.',
    'ag.hero.btn1':'Request Technical Information',
    'ag.hero.btn2':'Talk to an Engineer',

    /* — Section 02: What are Amorphous Gabions — */
    'ag.intro.eyebrow': 'Hydraulic Engineering Solutions',
    'ag.intro.h2':      'What Are Amorphous Gabions?',
    'ag.intro.p1':      'Amorphous gabions are flexible containment units filled with stone or crushed concrete, engineered by INGE&amp;MAT to adapt naturally to the terrain they protect rather than forcing the terrain to conform to a rigid structure.',
    'ag.intro.li1':     'Flexible containment units that conform to irregular surfaces',
    'ag.intro.li2':     'Filled with stone or crushed concrete for mass and permeability',
    'ag.intro.li3':     'Designed to adapt naturally to uneven and dynamic terrain',
    'ag.intro.li4':     'Suitable for both dry installation and underwater placement',
    'ag.intro.li5':     'Purpose-built for hydraulic and marine protection works',

    /* — Section 03: Key Advantages — */
    'ag.adv.eyebrow': 'Why Engineers Choose This System',
    'ag.adv.h2':      'Key Advantages',
    'ag.adv.sub':     'A flexible alternative to rigid armoring systems, engineered for performance across the most demanding hydraulic environments.',
    'ag.adv.1.title': 'Hydraulic Performance',
    'ag.adv.1.desc':  'High scour protection performance and energy dissipation characteristics.',
    'ag.adv.2.title': 'Terrain Adaptability',
    'ag.adv.2.desc':  'Conforms naturally to uneven riverbeds, coastlines, and underwater surfaces.',
    'ag.adv.3.title': 'Rapid Installation',
    'ag.adv.3.desc':  'Mechanized installation with reduced labor requirements.',
    'ag.adv.4.title': 'Environmental Integration',
    'ag.adv.4.desc':  'Supports vegetation growth, aquatic habitats, and ecosystem development.',
    'ag.adv.5.title': 'Marine Durability',
    'ag.adv.5.desc':  'Designed for long-term performance in aggressive marine environments.',
    'ag.adv.6.title': 'Flexible Deployment',
    'ag.adv.6.desc':  'Suitable for dry installations and underwater placement.',

    /* — Section 04: Applications — */
    'ag.app.eyebrow':         'Applications',
    'ag.app.h2':              "Engineered for the World's Most Demanding Environments",
    'ag.app.sub':             'Amorphous gabions deliver flexible, high-performance protection for infrastructure and natural landscapes, above or below the waterline.',
    'ag.app.featuredLabel':   'Featured Applications',
    'ag.app.additionalLabel': 'Additional Applications',
    'ag.app.1.title': 'Offshore Wind Foundations',
    'ag.app.1.desc':  'Scour protection for monopile and jacket foundations in offshore wind farms.',
    'ag.app.2.title': 'Scour Protection',
    'ag.app.2.desc':  'Hydraulic protection against erosion around structures exposed to currents and waves.',
    'ag.app.3.title': 'Port & Marine Infrastructure',
    'ag.app.3.desc':  'Stabilization and protection systems for docks, breakwaters, and marine terminals.',
    'ag.app.4.title': 'Riverbank Protection',
    'ag.app.4.desc':  'Flexible reinforcement that conforms to riverbank geometry and resists erosive flow.',
    'ag.app.5.title': 'Coastal Protection',
    'ag.app.5.desc':  'Wave energy dissipation and shoreline stabilization for exposed coastlines.',
    'ag.app.6.title': 'Pipeline Ballast',
    'ag.app.6.desc':  'Submerged ballast and protection systems for subsea and onshore pipeline crossings.',
    'ag.app.7.title': 'Emergency Stabilization Works',
    'ag.app.7.desc':  'Rapid-deployment protection for urgent erosion and failure response.',
    'ag.app.8.title': 'Beach Stabilization',
    'ag.app.8.desc':  'Sediment retention and shoreline reinforcement for recreational and protected beaches.',
    'ag.app.9.title': 'Bridge Pier Protection',
    'ag.app.9.desc':  'Scour control around piers and abutments exposed to channel flow.',
    'ag.app.10.title':'Hydraulic Infrastructure',
    'ag.app.10.desc': 'Protection systems for spillways, channels, and water control structures.',

    /* — Section 05: Product Variants — */
    'ag.var.eyebrow': 'Product Range',
    'ag.var.h2':      'Product Variants',
    'ag.var.sub':     'Two engineered formulations selected by application, environmental exposure, and hydraulic demand.',
    'ag.var.1.num':   'Variant 01',
    'ag.var.1.name':  'EcoGreen',
    'ag.var.1.desc':  'Environmentally integrated solution manufactured using recycled polyester fibers.',
    'ag.var.1.li1':   'Ecological integration',
    'ag.var.1.li2':   'Vegetation support',
    'ag.var.1.li3':   'Habitat creation',
    'ag.var.1.li4':   'Long-term environmental compatibility',
    'ag.var.2.num':   'Variant 02',
    'ag.var.2.name':  'Type S',
    'ag.var.2.desc':  'Heavy-duty version designed for marine and high-energy hydraulic environments.',
    'ag.var.2.li1':   'Offshore applications',
    'ag.var.2.li2':   'Severe hydraulic conditions',
    'ag.var.2.li3':   'Enhanced durability',
    'ag.var.2.li4':   'Reduced abrasion',
    'ag.var.cta':     'Request Technical Datasheet',

    /* — Section 06: Technical Performance — */
    'ag.perf.eyebrow':'Engineered Performance',
    'ag.perf.h2':     'Technical Performance',
    'ag.perf.sub':    'Performance characteristics presented visually — built for demanding hydraulic and marine service conditions.',
    'ag.perf.1.title':'Durability',
    'ag.perf.1.desc': 'Engineered to withstand long-term mechanical stress, abrasion, and continuous wet/dry exposure.',
    'ag.perf.2.title':'UV Resistance',
    'ag.perf.2.desc': 'Stabilized materials formulated to resist degradation from prolonged sunlight exposure.',
    'ag.perf.3.title':'Marine Performance',
    'ag.perf.3.desc': 'Designed for sustained performance in saltwater and aggressive marine environments.',
    'ag.perf.4.title':'Impact Resistance',
    'ag.perf.4.desc': 'Resilient construction absorbs impact from waves, debris, and dynamic loading.',
    'ag.perf.5.title':'Hydraulic Performance',
    'ag.perf.5.desc': 'High energy dissipation characteristics reduce scour and turbulence around structures.',
    'ag.perf.6.title':'Service Life',
    'ag.perf.6.desc': 'Built for long-term field performance with minimal degradation over decades of service.',
    'ag.perf.7.title':'Current Resistance Performance',
    'ag.perf.7.desc': 'Maintains structural integrity under sustained current and high-velocity flow conditions.',

    /* — Section 07: Comparison — */
    'ag.cmp.eyebrow': 'The Technical Case',
    'ag.cmp.h2':      'Amorphous Gabions vs. Conventional Gabions',
    'ag.cmp.sub':     'A direct, side-by-side look at how flexible containment systems compare to traditional wire-mesh gabions.',
    'ag.cmp.col.ag':  'Amorphous Gabions',
    'ag.cmp.col.conv':'Conventional Gabions',
    'ag.cmp.1.crit':  'Flexibility',
    'ag.cmp.1.ag':    'Conforms naturally to irregular terrain and underwater contours.',
    'ag.cmp.1.conv':  'Rigid rectangular geometry with limited adaptability.',
    'ag.cmp.2.crit':  'Durability',
    'ag.cmp.2.ag':    'High resistance to abrasion, UV, and marine exposure.',
    'ag.cmp.2.conv':  'Prone to wire corrosion and mesh degradation over time.',
    'ag.cmp.3.crit':  'Hydraulic Behavior',
    'ag.cmp.3.ag':    'Engineered for high energy dissipation and scour resistance.',
    'ag.cmp.3.conv':  'Lower energy dissipation; rigid edges prone to undermining.',
    'ag.cmp.4.crit':  'Installation Speed',
    'ag.cmp.4.ag':    'Mechanized placement with reduced labor and equipment needs.',
    'ag.cmp.4.conv':  'Labor-intensive assembly and wire mesh filling.',
    'ag.cmp.5.crit':  'Maintenance',
    'ag.cmp.5.ag':    'Minimal long-term maintenance requirements.',
    'ag.cmp.5.conv':  'Periodic wire inspection and mesh repair required.',
    'ag.cmp.6.crit':  'Environmental Integration',
    'ag.cmp.6.ag':    'Supports vegetation growth and aquatic habitat development.',
    'ag.cmp.6.conv':  'Limited ecological integration.',
    'ag.cmp.7.crit':  'Safety',
    'ag.cmp.7.ag':    'No exposed wire or sharp mesh edges.',
    'ag.cmp.7.conv':  'Wire mesh exposure presents handling and long-term safety risks.',
    'ag.cmp.8.crit':  'Terrain Adaptation',
    'ag.cmp.8.ag':    'Adapts to uneven, sloped, and underwater surfaces.',
    'ag.cmp.8.conv':  'Requires graded, prepared surfaces for proper placement.',

    /* — Section 08: Environmental Benefits — */
    'ag.eco.eyebrow':'A Different Kind of Protection',
    'ag.eco.h2':     'Environmental Benefits',
    'ag.eco.li1':    'Creates the conditions for natural ecosystem development',
    'ag.eco.li2':    'Supports aquatic habitat development within the structure itself',
    'ag.eco.li3':    'Enables vegetation establishment across exposed surfaces',
    'ag.eco.li4':    'Reduces environmental impact compared to rigid armoring systems',
    'ag.eco.li5':    'Delivers long-term ecological integration with the surrounding landscape',

    /* — Section 10: Proven Track Record — */
    'ag.track.eyebrow':'Proven At Scale',
    'ag.track.h2':     'Proven Track Record',
    'ag.track.1.num':  '17,000+',
    'ag.track.1.label':'Reference Installations',
    'ag.track.2.num':  '700,000+',
    'ag.track.2.label':'Units Installed',
    'ag.track.3.num':  '30 Years',
    'ag.track.3.label':'UV Durability Potential',
    'ag.track.4.num':  'Decades',
    'ag.track.4.label':'Of Proven Hydraulic Performance',

    /* — Section 11: Final CTA — */
    'ag.cta.label': 'Start a Project',
    'ag.cta.h2':    "Let's Discuss Your Project",
    'ag.cta.body':  'Our technical team can help you evaluate whether amorphous gabion systems are the right fit for your hydraulic, marine, or infrastructure protection challenge.',
    'ag.cta.btn1':  'Request Technical Information',
    'ag.cta.btn2':  'Request a Quote',
    'ag.cta.btn3':  'Talk to an Engineer',

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
    /* — Breadcrumb — */
    'ag.crumb.products': 'Productos',
    'ag.crumb.page':     'Gaviones Amorfos',

    /* — Hero — */
    'ag.hero.h1':  'Gaviones Amorfos',
    'ag.hero.sub': 'Sistemas flexibles de protección contra socavación y estabilización hidráulica diseñados para aplicaciones marinas, costeras, fluviales y de infraestructura.',
    'ag.hero.body':'Diseñados para adaptarse a terrenos complejos y entornos hidráulicos dinámicos, proporcionando una protección duradera, eficiente y ambientalmente integrada.',
    'ag.hero.btn1':'Solicitar Información Técnica',
    'ag.hero.btn2':'Hablar con un Ingeniero',

    /* — Section 02 — */
    'ag.intro.eyebrow': 'Soluciones de Ingeniería Hidráulica',
    'ag.intro.h2':      '¿Qué Son los Gaviones Amorfos?',
    'ag.intro.p1':      'Los gaviones amorfos son unidades de contención flexibles rellenas con piedra o concreto triturado, diseñadas por INGE&amp;MAT para adaptarse naturalmente al terreno que protegen, en lugar de obligar al terreno a ajustarse a una estructura rígida.',
    'ag.intro.li1':     'Unidades de contención flexibles que se adaptan a superficies irregulares',
    'ag.intro.li2':     'Rellenas con piedra o concreto triturado para masa y permeabilidad',
    'ag.intro.li3':     'Diseñadas para adaptarse naturalmente a terrenos irregulares y dinámicos',
    'ag.intro.li4':     'Adecuadas para instalación en seco y colocación bajo el agua',
    'ag.intro.li5':     'Desarrolladas específicamente para obras de protección hidráulica y marina',

    /* — Section 03 — */
    'ag.adv.eyebrow': 'Por Qué los Ingenieros Eligen Este Sistema',
    'ag.adv.h2':      'Ventajas Clave',
    'ag.adv.sub':     'Una alternativa flexible a los sistemas de protección rígidos, diseñada para un desempeño confiable en los entornos hidráulicos más exigentes.',
    'ag.adv.1.title': 'Desempeño Hidráulico',
    'ag.adv.1.desc':  'Alto desempeño en protección contra socavación y características de disipación de energía.',
    'ag.adv.2.title': 'Adaptabilidad al Terreno',
    'ag.adv.2.desc':  'Se adapta naturalmente a lechos de río irregulares, costas y superficies submarinas.',
    'ag.adv.3.title': 'Instalación Rápida',
    'ag.adv.3.desc':  'Instalación mecanizada con menores requerimientos de mano de obra.',
    'ag.adv.4.title': 'Integración Ambiental',
    'ag.adv.4.desc':  'Favorece el crecimiento de vegetación, hábitats acuáticos y el desarrollo de ecosistemas.',
    'ag.adv.5.title': 'Durabilidad Marina',
    'ag.adv.5.desc':  'Diseñado para un desempeño de largo plazo en entornos marinos agresivos.',
    'ag.adv.6.title': 'Despliegue Flexible',
    'ag.adv.6.desc':  'Apto para instalaciones en seco y colocación bajo el agua.',

    /* — Section 04 — */
    'ag.app.eyebrow':         'Aplicaciones',
    'ag.app.h2':              'Diseñados para los Entornos Más Exigentes del Mundo',
    'ag.app.sub':             'Los gabiones amorfos ofrecen protección flexible y de alto rendimiento para infraestructura y entornos naturales, sobre o bajo el nivel del agua.',
    'ag.app.featuredLabel':   'Aplicaciones Destacadas',
    'ag.app.additionalLabel': 'Aplicaciones Adicionales',
    'ag.app.1.title': 'Cimentaciones para Eólicas Marinas',
    'ag.app.1.desc':  'Protección contra socavación para cimentaciones monopilote y tipo jacket en parques eólicos marinos.',
    'ag.app.2.title': 'Protección Contra Socavación',
    'ag.app.2.desc':  'Protección hidráulica contra la erosión en estructuras expuestas a corrientes y oleaje.',
    'ag.app.3.title': 'Infraestructura Portuaria y Marina',
    'ag.app.3.desc':  'Sistemas de estabilización y protección para muelles, rompeolas y terminales marítimas.',
    'ag.app.4.title': 'Protección de Riberas',
    'ag.app.4.desc':  'Refuerzo flexible que se adapta a la geometría de la ribera y resiste el flujo erosivo.',
    'ag.app.5.title': 'Protección Costera',
    'ag.app.5.desc':  'Disipación de energía de oleaje y estabilización de la línea de costa en zonas expuestas.',
    'ag.app.6.title': 'Lastre para Ductos',
    'ag.app.6.desc':  'Sistemas de lastre y protección sumergida para cruces de ductos submarinos y terrestres.',
    'ag.app.7.title': 'Obras de Estabilización de Emergencia',
    'ag.app.7.desc':  'Protección de despliegue rápido para respuesta urgente ante erosión y fallas.',
    'ag.app.8.title': 'Estabilización de Playas',
    'ag.app.8.desc':  'Retención de sedimentos y refuerzo de la línea costera en playas recreativas y protegidas.',
    'ag.app.9.title': 'Protección de Pilas de Puente',
    'ag.app.9.desc':  'Control de socavación en pilas y estribos expuestos al flujo del canal.',
    'ag.app.10.title':'Infraestructura Hidráulica',
    'ag.app.10.desc': 'Sistemas de protección para aliviaderos, canales y estructuras de control de agua.',

    /* — Section 05 — */
    'ag.var.eyebrow': 'Gama de Productos',
    'ag.var.h2':      'Variantes de Producto',
    'ag.var.sub':     'Dos formulaciones diseñadas según la aplicación, la exposición ambiental y la demanda hidráulica.',
    'ag.var.1.num':   'Variante 01',
    'ag.var.1.name':  'EcoGreen',
    'ag.var.1.desc':  'Solución ambientalmente integrada fabricada con fibras de poliéster reciclado.',
    'ag.var.1.li1':   'Integración ecológica',
    'ag.var.1.li2':   'Soporte a la vegetación',
    'ag.var.1.li3':   'Creación de hábitat',
    'ag.var.1.li4':   'Compatibilidad ambiental a largo plazo',
    'ag.var.2.num':   'Variante 02',
    'ag.var.2.name':  'Type S',
    'ag.var.2.desc':  'Versión de servicio pesado diseñada para entornos marinos e hidráulicos de alta energía.',
    'ag.var.2.li1':   'Aplicaciones offshore',
    'ag.var.2.li2':   'Condiciones hidráulicas severas',
    'ag.var.2.li3':   'Durabilidad mejorada',
    'ag.var.2.li4':   'Abrasión reducida',
    'ag.var.cta':     'Solicitar Ficha Técnica',

    /* — Section 06 — */
    'ag.perf.eyebrow':'Desempeño Diseñado',
    'ag.perf.h2':     'Desempeño Técnico',
    'ag.perf.sub':    'Características de desempeño presentadas de forma visual, diseñadas para condiciones de servicio hidráulico y marino exigentes.',
    'ag.perf.1.title':'Durabilidad',
    'ag.perf.1.desc': 'Diseñado para soportar esfuerzo mecánico de largo plazo, abrasión y exposición continua a ciclos de humedad y secado.',
    'ag.perf.2.title':'Resistencia UV',
    'ag.perf.2.desc': 'Materiales estabilizados formulados para resistir la degradación por exposición prolongada al sol.',
    'ag.perf.3.title':'Desempeño Marino',
    'ag.perf.3.desc': 'Diseñado para un desempeño sostenido en agua salada y entornos marinos agresivos.',
    'ag.perf.4.title':'Resistencia al Impacto',
    'ag.perf.4.desc': 'Construcción resiliente que absorbe el impacto de oleaje, escombros y cargas dinámicas.',
    'ag.perf.5.title':'Desempeño Hidráulico',
    'ag.perf.5.desc': 'Altas características de disipación de energía que reducen la socavación y la turbulencia alrededor de estructuras.',
    'ag.perf.6.title':'Vida de Servicio',
    'ag.perf.6.desc': 'Diseñado para un desempeño de largo plazo en campo con degradación mínima durante décadas de servicio.',
    'ag.perf.7.title':'Resistencia a Corrientes',
    'ag.perf.7.desc': 'Mantiene la integridad estructural bajo condiciones sostenidas de corriente y flujo de alta velocidad.',

    /* — Section 07 — */
    'ag.cmp.eyebrow': 'El Caso Técnico',
    'ag.cmp.h2':      'Gaviones Amorfos vs. Gaviones Convencionales',
    'ag.cmp.sub':     'Una comparación directa, lado a lado, de cómo los sistemas de contención flexible se comparan con los gaviones de malla metálica tradicionales.',
    'ag.cmp.col.ag':  'Gaviones Amorfos',
    'ag.cmp.col.conv':'Gaviones Convencionales',
    'ag.cmp.1.crit':  'Flexibilidad',
    'ag.cmp.1.ag':    'Se adapta naturalmente a terrenos irregulares y contornos submarinos.',
    'ag.cmp.1.conv':  'Geometría rectangular rígida con adaptabilidad limitada.',
    'ag.cmp.2.crit':  'Durabilidad',
    'ag.cmp.2.ag':    'Alta resistencia a la abrasión, UV y exposición marina.',
    'ag.cmp.2.conv':  'Propenso a la corrosión del alambre y degradación de la malla con el tiempo.',
    'ag.cmp.3.crit':  'Comportamiento Hidráulico',
    'ag.cmp.3.ag':    'Diseñado para alta disipación de energía y resistencia a la socavación.',
    'ag.cmp.3.conv':  'Menor disipación de energía; bordes rígidos propensos a la socavación.',
    'ag.cmp.4.crit':  'Velocidad de Instalación',
    'ag.cmp.4.ag':    'Colocación mecanizada con menores requerimientos de mano de obra y equipo.',
    'ag.cmp.4.conv':  'Ensamblaje intensivo en mano de obra y relleno de malla metálica.',
    'ag.cmp.5.crit':  'Mantenimiento',
    'ag.cmp.5.ag':    'Requerimientos de mantenimiento mínimos a largo plazo.',
    'ag.cmp.5.conv':  'Requiere inspección periódica del alambre y reparación de la malla.',
    'ag.cmp.6.crit':  'Integración Ambiental',
    'ag.cmp.6.ag':    'Favorece el crecimiento de vegetación y el desarrollo de hábitat acuático.',
    'ag.cmp.6.conv':  'Integración ecológica limitada.',
    'ag.cmp.7.crit':  'Seguridad',
    'ag.cmp.7.ag':    'Sin exposición de alambre ni bordes de malla cortantes.',
    'ag.cmp.7.conv':  'La exposición de la malla metálica presenta riesgos de manejo y seguridad a largo plazo.',
    'ag.cmp.8.crit':  'Adaptación al Terreno',
    'ag.cmp.8.ag':    'Se adapta a superficies irregulares, inclinadas y submarinas.',
    'ag.cmp.8.conv':  'Requiere superficies niveladas y preparadas para una colocación adecuada.',

    /* — Section 08 — */
    'ag.eco.eyebrow':'Un Tipo de Protección Diferente',
    'ag.eco.h2':     'Beneficios Ambientales',
    'ag.eco.li1':    'Crea las condiciones para el desarrollo natural de ecosistemas',
    'ag.eco.li2':    'Favorece el desarrollo de hábitat acuático dentro de la propia estructura',
    'ag.eco.li3':    'Permite el establecimiento de vegetación sobre las superficies expuestas',
    'ag.eco.li4':    'Reduce el impacto ambiental en comparación con sistemas de protección rígidos',
    'ag.eco.li5':    'Genera una integración ecológica de largo plazo con el paisaje circundante',

    /* — Section 10 — */
    'ag.track.eyebrow':'Probado a Gran Escala',
    'ag.track.h2':     'Trayectoria Comprobada',
    'ag.track.1.num':  '17,000+',
    'ag.track.1.label':'Instalaciones de Referencia',
    'ag.track.2.num':  '700,000+',
    'ag.track.2.label':'Unidades Instaladas',
    'ag.track.3.num':  '30 Años',
    'ag.track.3.label':'Potencial de Durabilidad UV',
    'ag.track.4.num':  'Décadas',
    'ag.track.4.label':'De Desempeño Hidráulico Comprobado',

    /* — Section 11 — */
    'ag.cta.label': 'Iniciar un Proyecto',
    'ag.cta.h2':    'Hablemos de su Proyecto',
    'ag.cta.body':  'Nuestro equipo técnico puede ayudarle a evaluar si los sistemas de gaviones amorfos son la solución adecuada para su desafío hidráulico, marino o de protección de infraestructura.',
    'ag.cta.btn1':  'Solicitar Información Técnica',
    'ag.cta.btn2':  'Solicitar Cotización',
    'ag.cta.btn3':  'Hablar con un Ingeniero',

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
document.querySelectorAll('.ag-fade').forEach((el) => observer.observe(el));

/* ── MOBILE MENU ───────────────────────────────────────────── */
initMobileMenu();
