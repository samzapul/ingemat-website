/* ============================================================
   STEEL SOLUTIONS PAGE — JS
   ============================================================ */

const NAV_H = 68;

/* ── TRANSLATIONS ──────────────────────────────────────────── */
const translations = {
  en: {
    /* — Shared meta — */
    'ss.meta.applications': 'Applications',
    'ss.meta.grades':       'Available Grades',
    'ss.meta.standards':    'Standards',
    'ss.meta.cta':          'Request Technical Datasheet',
    'ss.meta.cta.discuss':  'Discuss Requirements',
    'ss.meta.view':         'View Products',

    /* — Breadcrumb — */
    'ss.crumb.products': 'Products',
    'ss.crumb.page':     'Steel Solutions',

    /* — Hero — */
    'ss.hero.h1':  'Steel Solutions for<br /><em>Critical Infrastructure</em>',
    'ss.hero.sub': 'High-performance steel systems engineered for marine infrastructure, deep foundations, energy projects, transportation networks, industrial facilities, and large-scale construction.',
    'ss.hero.body':'INGE&MAT delivers specialized steel solutions designed to meet the demands of modern infrastructure projects. From pipeline systems and structural steel to marine piling and retaining structures, we provide engineered materials that combine reliability, durability, and performance in the most demanding environments.',
    'ss.hero.btn1':'Explore Products',
    'ss.hero.btn2':'Request a Quote',

    /* — Intro — */
    'ss.intro.eyebrow':'Engineering Materials',
    'ss.intro.h2':     'Engineering-Grade Steel Systems',
    'ss.intro.p1':     'Steel remains one of the most critical materials in modern infrastructure. Whether supporting deep foundations, retaining waterfront structures, transporting energy resources, or forming the framework of industrial facilities, steel systems must perform under demanding conditions for decades.',
    'ss.intro.p2':     'At INGE&MAT, we provide a comprehensive portfolio of steel products selected for structural integrity, durability, and project reliability. Our solutions support projects across transportation, marine construction, energy infrastructure, industrial facilities, water management, and heavy civil engineering.',

    /* — Product nav — */
    'ss.nav.eyebrow': 'Product Portfolio',
    'ss.nav.h2':      'Steel Product Lines',
    'ss.nav.c1.title':'Seamless Steel Pipe',
    'ss.nav.c1.desc': 'API 5L line pipe and oilfield casing for pressure-critical transmission and energy applications.',
    'ss.nav.c2.title':'Welded Steel Pipe',
    'ss.nav.c2.desc': 'ERW, API 5L welded, and EFW pipe for industrial, utility, and energy infrastructure projects.',
    'ss.nav.c3.title':'Structural Steel Beams',
    'ss.nav.c3.desc': 'Heavy-duty pipe piles and structural tubing for foundations, bridges, and marine infrastructure.',
    'ss.nav.c4.title':'Sheet Piles',
    'ss.nav.c4.desc': 'Sheet piles, H-beams, wide flange sections, and channels for construction and retention systems.',
    'ss.nav.c5.title':'Steel Structures',
    'ss.nav.c5.desc': 'Prefabricated buildings and industrial stair systems engineered for rapid deployment and durability.',
    'ss.nav.c6.title':'Steel Grating & Fabrication',
    'ss.nav.c6.desc': 'Industrial grating systems and custom fabricated steel components for demanding project environments.',

    /* — Section 1 — Seamless — */
    'ss.s1.num':   'Section 01',
    'ss.s1.title': 'Seamless Steel Pipe',
    'ss.s1.intro': 'Manufactured without longitudinal welds, seamless steel pipes provide exceptional strength, pressure resistance, and reliability for critical transmission and industrial applications.',
    'ss.s1.p1.tag':  'API 5L',
    'ss.s1.p1.name': 'API 5L Seamless Line Pipe',
    'ss.s1.p1.desc': 'High-performance seamless carbon steel pipe designed for oil, gas, water transmission, and industrial pipeline systems. Manufactured without welded seams, these pipes provide superior pressure resistance, structural integrity, and long-term reliability in critical infrastructure environments.',
    'ss.s1.p2.tag':  'API 5CT',
    'ss.s1.p2.name': 'API 5CT Oilfield Casing Pipe',
    'ss.s1.p2.desc': 'Engineered for demanding drilling operations, oilfield casing pipes are designed to withstand high pressures, corrosive environments, and mechanical stresses associated with exploration and production activities.',

    /* — Section 2 — Welded — */
    'ss.s2.num':   'Section 02',
    'ss.s2.title': 'Welded Steel Pipe',
    'ss.s2.intro': 'Welded steel pipes provide a versatile and cost-effective solution for industrial, structural, utility, and energy applications while maintaining excellent mechanical performance.',
    'ss.s2.p1.tag':  'ERW',
    'ss.s2.p1.name': 'ERW Carbon Steel Pipe',
    'ss.s2.p1.desc': 'Electric Resistance Welded pipe designed for construction, utilities, mechanical systems, and infrastructure applications requiring dependable performance and efficient installation.',
    'ss.s2.p2.tag':  'API 5L — Welded',
    'ss.s2.p2.name': 'API 5L Welded Line Pipe',
    'ss.s2.p2.desc': 'Engineered for long-distance fluid transportation systems, these pipes provide strength, consistency, and reliability for oil, gas, and water transmission projects.',
    'ss.s2.p3.tag':  'EFW',
    'ss.s2.p3.name': 'EFW Steel Pipe',
    'ss.s2.p3.desc': 'Electric Fusion Welded pipe designed for industrial processing facilities, refineries, boilers, and pressure-service applications where large diameters and structural performance are required.',

    /* — Section 3 — Structural Pipe — */
    'ss.s3.num':   'Section 03',
    'ss.s3.title': 'Structural Steel Pipe',
    'ss.s3.intro': 'Load-bearing structural pipe systems engineered for deep foundations, marine construction, and major infrastructure projects demanding maximum structural performance.',
    'ss.s3.p1.tag':  'Foundation Systems',
    'ss.s3.p1.name': 'Structural Pipe Piles',
    'ss.s3.p1.desc': 'Heavy-duty steel pipe piles engineered for deep foundation systems and major infrastructure projects. Designed to transfer structural loads efficiently in marine, bridge, transportation, and offshore applications.',
    'ss.s3.p2.tag':  'Structural Tubing',
    'ss.s3.p2.name': 'Square Structural Tubing',
    'ss.s3.p2.desc': 'Precision structural tubing designed for commercial, industrial, and infrastructure applications requiring dimensional consistency and high load-bearing capacity.',

    /* — Section 4 — Structural Steel — */
    'ss.s4.num':   'Section 04',
    'ss.s4.title': 'Structural Steel Systems',
    'ss.s4.intro': 'Sheet piling, beams, channels, and wide flange sections engineered for construction, retention, and heavy infrastructure projects worldwide.',
    'ss.s4.p1.tag':  'Earth Retention',
    'ss.s4.p1.name': 'Sheet Piles',
    'ss.s4.p1.desc': 'Steel sheet piling systems designed for earth retention, waterfront structures, excavation support, flood protection, and marine construction. Available in a range of standard profiles to match project-specific structural requirements.',
    'ss.s4.p2.tag':  'Structural Sections',
    'ss.s4.p2.name': 'H-Beams',
    'ss.s4.p2.desc': 'Structural steel beams engineered to support heavy loads while maintaining exceptional structural efficiency and long-term performance across building, bridge, and infrastructure applications.',
    'ss.s4.p3.tag':  'Structural Sections',
    'ss.s4.p3.name': 'U-Channels',
    'ss.s4.p3.desc': 'Hot-rolled structural channels used in framing systems, support structures, foundations, and industrial applications requiring reliable load distribution and dimensional precision.',
    'ss.s4.p4.tag':  'High-Capacity Sections',
    'ss.s4.p4.name': 'Wide Flange Beams',
    'ss.s4.p4.desc': 'High-capacity structural sections designed for demanding construction and infrastructure applications where superior load distribution and structural efficiency are required.',

    /* — Section 5 — Structures — */
    'ss.s5.num':   'Section 05',
    'ss.s5.title': 'Steel Structures',
    'ss.s5.intro': 'Custom-engineered prefabricated steel structures and industrial stair systems designed for rapid deployment, long-term durability, and demanding project environments.',
    'ss.s5.p1.tag':  'Prefabricated Structures',
    'ss.s5.p1.name': 'Prefabricated Steel Buildings',
    'ss.s5.p1.desc': 'Custom-engineered steel structures designed for industrial, logistics, commercial, and infrastructure projects requiring rapid deployment and long-term durability. Each structure is designed and fabricated according to project-specific requirements and load conditions.',
    'ss.s5.p2.tag':  'Industrial Access',
    'ss.s5.p2.name': 'Industrial Steel Stair Systems',
    'ss.s5.p2.desc': 'Galvanized steel stair systems designed for industrial facilities, ports, energy installations, and commercial structures requiring durability and corrosion resistance in demanding operational environments.',

    /* — Section 6 — Grating — */
    'ss.s6.num':   'Section 06',
    'ss.s6.title': 'Steel Grating & Fabrication',
    'ss.s6.intro': 'Heavy-duty grating systems and custom fabricated steel components for industrial platforms, energy facilities, and project-specific structural requirements.',
    'ss.s6.p1.tag':  'Industrial Grating',
    'ss.s6.p1.name': 'Steel Grating',
    'ss.s6.p1.desc': 'Heavy-duty galvanized grating systems designed for industrial platforms, trench covers, walkways, and maintenance access systems requiring structural strength and corrosion resistance.',
    'ss.s6.p2.tag':  'Precision Grating',
    'ss.s6.p2.name': 'Press-Locked Grating',
    'ss.s6.p2.desc': 'Precision-manufactured grating offering exceptional strength, clean aesthetics, and dimensional consistency for industrial and architectural projects where performance and appearance are both priorities.',
    'ss.s6.p3.tag':  'Custom Engineering',
    'ss.s6.p3.name': 'Custom Steel Fabrication',
    'ss.s6.p3.desc': 'Custom-fabricated steel components manufactured according to project specifications, including cutting, welding, bending, and engineered structural assemblies for critical applications.',

    /* — Application tags — */
    'ss.app.oil_gas_pipelines':  'Oil & Gas Pipelines',
    'ss.app.water_transmission': 'Water Transmission',
    'ss.app.energy_infra':       'Energy Infrastructure',
    'ss.app.industrial_process': 'Industrial Process Systems',
    'ss.app.oil_wells':          'Oil Wells',
    'ss.app.gas_wells':          'Gas Wells',
    'ss.app.petroleum_prod':     'Petroleum Production',
    'ss.app.drilling':           'Drilling Operations',
    'ss.app.utility_networks':   'Utility Networks',
    'ss.app.construction':       'Construction',
    'ss.app.water_systems':      'Water Systems',
    'ss.app.mechanical_infra':   'Mechanical Infrastructure',
    'ss.app.oil_pipelines':      'Oil Pipelines',
    'ss.app.gas_pipelines':      'Gas Pipelines',
    'ss.app.water_pipelines':    'Water Pipelines',
    'ss.app.energy_projects':    'Energy Projects',
    'ss.app.refineries':         'Refineries',
    'ss.app.industrial_plants':  'Industrial Plants',
    'ss.app.power_gen':          'Power Generation',
    'ss.app.processing':         'Processing Facilities',
    'ss.app.ports':              'Ports',
    'ss.app.bridges':            'Bridges',
    'ss.app.deep_foundations':   'Deep Foundations',
    'ss.app.offshore':           'Offshore Infrastructure',
    'ss.app.buildings':          'Buildings',
    'ss.app.ind_facilities':     'Industrial Facilities',
    'ss.app.equip_structures':   'Equipment Structures',
    'ss.app.infra_supports':     'Infrastructure Supports',
    'ss.app.retaining_walls':    'Retaining Walls',
    'ss.app.cofferdams':         'Cofferdams',
    'ss.app.flood_protection':   'Flood Protection',
    'ss.app.marine_infra':       'Marine Infrastructure',
    'ss.app.ind_structures':     'Industrial Structures',
    'ss.app.infrastructure':     'Infrastructure',
    'ss.app.structural_frames':  'Structural Frames',
    'ss.app.equip_foundations':  'Equipment Foundations',
    'ss.app.infra_projects':     'Infrastructure Projects',
    'ss.app.commercial_bldgs':   'Commercial Buildings',
    'ss.app.warehouses':         'Warehouses',
    'ss.app.transport_infra':    'Transportation Infrastructure',
    'ss.app.manufacturing':      'Manufacturing Facilities',
    'ss.app.logistics':          'Logistics Centers',
    'ss.app.ind_buildings':      'Industrial Buildings',
    'ss.app.walkways':           'Walkways',
    'ss.app.trench_covers':      'Trench Covers',
    'ss.app.energy_facilities':  'Energy Facilities',
    'ss.app.arch_floors':        'Architectural Floors',
    'ss.app.mezzanines':         'Mezzanines',
    'ss.app.ind_access':         'Industrial Access',
    'ss.app.marine_decks':       'Marine Decks',
    'ss.app.custom_eng':         'Custom Engineering Works',

    /* — Industries — */
    'ss.ind.eyebrow':   'Market Coverage',
    'ss.ind.h2':        'Industries We Serve',
    'ss.ind.1.label':   'Marine Infrastructure',
    'ss.ind.1.desc':    'Sheet piles, pipe piles, and structural steel for waterfront and coastal projects.',
    'ss.ind.2.label':   'Ports & Harbors',
    'ss.ind.2.desc':    'Structural systems for quay walls, berths, and marine terminal foundations.',
    'ss.ind.3.label':   'Oil & Gas',
    'ss.ind.3.desc':    'API-grade seamless and welded pipe for upstream and downstream operations.',
    'ss.ind.4.label':   'Energy',
    'ss.ind.4.desc':    'Steel systems for power generation, renewables, and transmission infrastructure.',
    'ss.ind.5.label':   'Transportation',
    'ss.ind.5.desc':    'Bridge foundations, structural sections, and pipe systems for road and rail projects.',
    'ss.ind.6.label':   'Water Infrastructure',
    'ss.ind.6.desc':    'Line pipe and structural steel for water treatment, transmission, and retention systems.',
    'ss.ind.7.label':   'Industrial Facilities',
    'ss.ind.7.desc':    'Structural steel, grating, and prefabricated systems for industrial plant construction.',
    'ss.ind.8.label':   'Mining',
    'ss.ind.8.desc':    'Heavy-duty steel solutions for mine infrastructure, processing facilities, and retaining systems.',
    'ss.ind.9.label':   'Heavy Civil Construction',
    'ss.ind.9.desc':    'Structural sections and pipe systems for large-scale earthworks and civil infrastructure.',

    /* — CTA — */
    'ss.cta.label': 'Start a Project',
    'ss.cta.h2':    'Need Steel Solutions for Your Next Project?',
    'ss.cta.body':  'Our engineering team can help identify the most suitable steel systems for your project requirements, specifications, and performance objectives.',
    'ss.cta.btn1':  'Request a Quote',
    'ss.cta.btn2':  'Speak with an Expert',
    'ss.cta.stat1': 'Infrastructure projects supported across Latin America',
    'ss.cta.stat2': 'Countries within our global sourcing network',
    'ss.cta.stat3': '9001 certified quality management standards',

    /* — Footer — */
    'footer.privacy':        'Privacy Policy',
    'footer.terms':          'Terms of Service',
    'footer.sustainability': 'Sustainability',
    'footer.copy':           '© 2024 INGE&MAT. All rights reserved.',

    /* — Nav — */
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
  },

  es: {
    /* — Shared meta — */
    'ss.meta.applications': 'Aplicaciones',
    'ss.meta.grades':       'Grados Disponibles',
    'ss.meta.standards':    'Normas',
    'ss.meta.cta':          'Solicitar Ficha Técnica',
    'ss.meta.cta.discuss':  'Consultar Requerimientos',
    'ss.meta.view':         'Ver Productos',

    /* — Breadcrumb — */
    'ss.crumb.products': 'Productos',
    'ss.crumb.page':     'Soluciones en Acero',

    /* — Hero — */
    'ss.hero.h1':  '<span style="white-space:nowrap">Soluciones en Acero para</span><br /><em>Infraestructura Crítica</em>',
    'ss.hero.sub': 'Sistemas de acero de alto rendimiento diseñados para infraestructura marina, cimentaciones profundas, proyectos energéticos, redes de transporte, instalaciones industriales y construcción a gran escala.',
    'ss.hero.body':'INGE&MAT suministra soluciones especializadas en acero diseñadas para satisfacer las exigencias de los proyectos de infraestructura modernos. Desde sistemas de tuberías y acero estructural hasta pilotes marinos y estructuras de contención, proveemos materiales de ingeniería que combinan confiabilidad, durabilidad y desempeño en los entornos más exigentes.',
    'ss.hero.btn1':'Explorar Productos',
    'ss.hero.btn2':'Solicitar Cotización',

    /* — Intro — */
    'ss.intro.eyebrow':'Materiales de Ingeniería',
    'ss.intro.h2':     'Sistemas de Acero de Grado Ingeniería',
    'ss.intro.p1':     'El acero sigue siendo uno de los materiales más críticos en la infraestructura moderna. Ya sea para soportar cimentaciones profundas, contener estructuras costeras, transportar recursos energéticos o conformar el marco de instalaciones industriales, los sistemas de acero deben desempeñarse en condiciones exigentes durante décadas.',
    'ss.intro.p2':     'En INGE&MAT ofrecemos un portafolio integral de productos de acero seleccionados por su integridad estructural, durabilidad y confiabilidad en proyectos. Nuestras soluciones apoyan proyectos en transporte, construcción marina, infraestructura energética, instalaciones industriales, gestión del agua e ingeniería civil pesada.',

    /* — Product nav — */
    'ss.nav.eyebrow': 'Portafolio de Productos',
    'ss.nav.h2':      'Líneas de Productos de Acero',
    'ss.nav.c1.title':'Tubería Sin Costura',
    'ss.nav.c1.desc': 'Tubería de línea API 5L y revestimiento para transmisión a presión crítica y aplicaciones energéticas.',
    'ss.nav.c2.title':'Tubería Soldada',
    'ss.nav.c2.desc': 'Tubería ERW, API 5L soldada y EFW para proyectos industriales, de servicios e infraestructura energética.',
    'ss.nav.c3.title':'Vigas de Acero Estructural',
    'ss.nav.c3.desc': 'Pilotes de tubería y perfiles estructurales para cimentaciones, puentes e infraestructura marina.',
    'ss.nav.c4.title':'Tablaestacas',
    'ss.nav.c4.desc': 'Tablestacas, vigas H, perfiles de ala ancha y canales para sistemas de construcción y contención.',
    'ss.nav.c5.title':'Estructuras de Acero',
    'ss.nav.c5.desc': 'Edificios prefabricados y escaleras industriales diseñados para despliegue rápido y durabilidad.',
    'ss.nav.c6.title':'Rejillas y Fabricación',
    'ss.nav.c6.desc': 'Sistemas de rejilla industrial y componentes fabricados a medida para entornos de proyecto exigentes.',

    /* — Section 1 — */
    'ss.s1.num':   'Sección 01',
    'ss.s1.title': 'Tubería de Acero Sin Costura',
    'ss.s1.intro': 'Fabricadas sin costuras longitudinales, las tuberías de acero sin costura ofrecen resistencia excepcional, resistencia a la presión y confiabilidad para aplicaciones críticas de transmisión e industria.',
    'ss.s1.p1.tag':  'API 5L',
    'ss.s1.p1.name': 'Tubería Sin Costura API 5L',
    'ss.s1.p1.desc': 'Tubería de acero al carbono sin costura de alto desempeño, diseñada para sistemas de transmisión de petróleo, gas, agua e industria. Fabricada sin costuras soldadas, ofrece superior resistencia a la presión, integridad estructural y confiabilidad a largo plazo en entornos de infraestructura crítica.',
    'ss.s1.p2.tag':  'API 5CT',
    'ss.s1.p2.name': 'Tubería de Revestimiento API 5CT',
    'ss.s1.p2.desc': 'Diseñada para operaciones de perforación exigentes, esta tubería soporta altas presiones, entornos corrosivos y esfuerzos mecánicos asociados con actividades de exploración y producción.',

    /* — Section 2 — */
    'ss.s2.num':   'Sección 02',
    'ss.s2.title': 'Tubería de Acero Soldada',
    'ss.s2.intro': 'Las tuberías de acero soldadas ofrecen una solución versátil y rentable para aplicaciones industriales, estructurales, de servicios y energéticas, manteniendo un excelente desempeño mecánico.',
    'ss.s2.p1.tag':  'ERW',
    'ss.s2.p1.name': 'Tubería de Acero al Carbono ERW',
    'ss.s2.p1.desc': 'Tubería soldada por resistencia eléctrica diseñada para construcción, servicios públicos, sistemas mecánicos y aplicaciones de infraestructura que requieren desempeño confiable e instalación eficiente.',
    'ss.s2.p2.tag':  'API 5L — Soldada',
    'ss.s2.p2.name': 'Tubería de Línea Soldada API 5L',
    'ss.s2.p2.desc': 'Diseñada para sistemas de transporte de fluidos de larga distancia, estas tuberías brindan resistencia, consistencia y confiabilidad en proyectos de transmisión de petróleo, gas y agua.',
    'ss.s2.p3.tag':  'EFW',
    'ss.s2.p3.name': 'Tubería de Acero EFW',
    'ss.s2.p3.desc': 'Tubería soldada por fusión eléctrica diseñada para instalaciones de procesamiento industrial, refinerías, calderas y aplicaciones a presión donde se requieren grandes diámetros y alto desempeño estructural.',

    /* — Section 3 — */
    'ss.s3.num':   'Sección 03',
    'ss.s3.title': 'Tubería de Acero Estructural',
    'ss.s3.intro': 'Sistemas de tubería estructural portante diseñados para cimentaciones profundas, construcción marina y grandes proyectos de infraestructura que exigen máximo desempeño estructural.',
    'ss.s3.p1.tag':  'Sistemas de Cimentación',
    'ss.s3.p1.name': 'Pilotes de Tubería Estructural',
    'ss.s3.p1.desc': 'Pilotes de tubería de acero de servicio pesado diseñados para sistemas de cimentación profunda y grandes proyectos de infraestructura. Transfieren cargas estructurales eficientemente en aplicaciones marinas, de puentes, transporte y costa afuera.',
    'ss.s3.p2.tag':  'Tubería Estructural',
    'ss.s3.p2.name': 'Tubería Estructural Cuadrada',
    'ss.s3.p2.desc': 'Tubería estructural de precisión diseñada para aplicaciones comerciales, industriales y de infraestructura que requieren consistencia dimensional y alta capacidad portante.',

    /* — Section 4 — */
    'ss.s4.num':   'Sección 04',
    'ss.s4.title': 'Sistemas de Acero Estructural',
    'ss.s4.intro': 'Tablestacas, vigas, canales y perfiles de ala ancha diseñados para proyectos de construcción, contención e infraestructura pesada en todo el mundo.',
    'ss.s4.p1.tag':  'Contención de Tierras',
    'ss.s4.p1.name': 'Tablestacas',
    'ss.s4.p1.desc': 'Sistemas de tablestacas de acero para contención de tierras, estructuras costeras, soporte de excavaciones, protección contra inundaciones y construcción marina. Disponibles en perfiles estándar para cumplir los requisitos estructurales del proyecto.',
    'ss.s4.p2.tag':  'Perfiles Estructurales',
    'ss.s4.p2.name': 'Vigas H',
    'ss.s4.p2.desc': 'Vigas de acero estructural diseñadas para soportar cargas pesadas manteniendo excepcional eficiencia estructural y desempeño a largo plazo en edificación, puentes e infraestructura.',
    'ss.s4.p3.tag':  'Perfiles Estructurales',
    'ss.s4.p3.name': 'Perfiles U',
    'ss.s4.p3.desc': 'Canales estructurales laminados en caliente utilizados en sistemas de encuadre, estructuras de soporte, cimentaciones y aplicaciones industriales que requieren distribución de carga confiable y precisión dimensional.',
    'ss.s4.p4.tag':  'Perfiles de Alta Capacidad',
    'ss.s4.p4.name': 'Vigas de Ala Ancha',
    'ss.s4.p4.desc': 'Perfiles estructurales de alta capacidad diseñados para aplicaciones exigentes de construcción e infraestructura donde se requiere distribución de carga superior y eficiencia estructural.',

    /* — Section 5 — */
    'ss.s5.num':   'Sección 05',
    'ss.s5.title': 'Estructuras de Acero',
    'ss.s5.intro': 'Estructuras de acero prefabricadas personalizadas y sistemas de escaleras industriales diseñados para despliegue rápido, durabilidad a largo plazo y entornos de proyecto exigentes.',
    'ss.s5.p1.tag':  'Estructuras Prefabricadas',
    'ss.s5.p1.name': 'Edificios de Acero Prefabricado',
    'ss.s5.p1.desc': 'Estructuras de acero diseñadas a medida para proyectos industriales, logísticos, comerciales y de infraestructura que requieren despliegue rápido y durabilidad a largo plazo. Cada estructura se diseña y fabrica según los requisitos y condiciones de carga específicos del proyecto.',
    'ss.s5.p2.tag':  'Acceso Industrial',
    'ss.s5.p2.name': 'Escaleras Industriales de Acero',
    'ss.s5.p2.desc': 'Sistemas de escaleras de acero galvanizado para instalaciones industriales, puertos, instalaciones energéticas y estructuras comerciales que requieren durabilidad y resistencia a la corrosión en entornos operativos exigentes.',

    /* — Section 6 — */
    'ss.s6.num':   'Sección 06',
    'ss.s6.title': 'Rejillas y Fabricación en Acero',
    'ss.s6.intro': 'Sistemas de rejilla de servicio pesado y componentes de acero fabricados a medida para plataformas industriales, instalaciones energéticas y requisitos estructurales específicos del proyecto.',
    'ss.s6.p1.tag':  'Rejilla Industrial',
    'ss.s6.p1.name': 'Rejilla de Acero',
    'ss.s6.p1.desc': 'Sistemas de rejilla galvanizada de servicio pesado para plataformas industriales, cubiertas de zanjas, pasarelas y sistemas de acceso para mantenimiento que requieren resistencia estructural y a la corrosión.',
    'ss.s6.p2.tag':  'Rejilla de Precisión',
    'ss.s6.p2.name': 'Rejilla Prensada',
    'ss.s6.p2.desc': 'Rejilla fabricada con precisión que ofrece resistencia excepcional, estética limpia y consistencia dimensional para proyectos industriales y arquitectónicos donde el desempeño y la apariencia son prioritarios.',
    'ss.s6.p3.tag':  'Ingeniería a Medida',
    'ss.s6.p3.name': 'Fabricación de Acero a Medida',
    'ss.s6.p3.desc': 'Componentes de acero fabricados a medida según las especificaciones del proyecto, incluyendo corte, soldadura, doblado y ensamblajes estructurales para aplicaciones críticas.',

    /* — Application tags — */
    'ss.app.oil_gas_pipelines':  'Oleoductos y Gasoductos',
    'ss.app.water_transmission': 'Transmisión de Agua',
    'ss.app.energy_infra':       'Infraestructura Energética',
    'ss.app.industrial_process': 'Sistemas de Proceso Industrial',
    'ss.app.oil_wells':          'Pozos de Petróleo',
    'ss.app.gas_wells':          'Pozos de Gas',
    'ss.app.petroleum_prod':     'Producción de Petróleo',
    'ss.app.drilling':           'Operaciones de Perforación',
    'ss.app.utility_networks':   'Redes de Servicios',
    'ss.app.construction':       'Construcción',
    'ss.app.water_systems':      'Sistemas de Agua',
    'ss.app.mechanical_infra':   'Infraestructura Mecánica',
    'ss.app.oil_pipelines':      'Oleoductos',
    'ss.app.gas_pipelines':      'Gasoductos',
    'ss.app.water_pipelines':    'Tuberías de Agua',
    'ss.app.energy_projects':    'Proyectos Energéticos',
    'ss.app.refineries':         'Refinerías',
    'ss.app.industrial_plants':  'Plantas Industriales',
    'ss.app.power_gen':          'Generación de Energía',
    'ss.app.processing':         'Instalaciones de Proceso',
    'ss.app.ports':              'Puertos',
    'ss.app.bridges':            'Puentes',
    'ss.app.deep_foundations':   'Cimentaciones Profundas',
    'ss.app.offshore':           'Infraestructura Costa Afuera',
    'ss.app.buildings':          'Edificios',
    'ss.app.ind_facilities':     'Instalaciones Industriales',
    'ss.app.equip_structures':   'Estructuras de Equipos',
    'ss.app.infra_supports':     'Soportes de Infraestructura',
    'ss.app.retaining_walls':    'Muros de Contención',
    'ss.app.cofferdams':         'Ataguías',
    'ss.app.flood_protection':   'Protección contra Inundaciones',
    'ss.app.marine_infra':       'Infraestructura Marina',
    'ss.app.ind_structures':     'Estructuras Industriales',
    'ss.app.infrastructure':     'Infraestructura',
    'ss.app.structural_frames':  'Marcos Estructurales',
    'ss.app.equip_foundations':  'Fundaciones de Equipos',
    'ss.app.infra_projects':     'Proyectos de Infraestructura',
    'ss.app.commercial_bldgs':   'Edificios Comerciales',
    'ss.app.warehouses':         'Bodegas',
    'ss.app.transport_infra':    'Infraestructura de Transporte',
    'ss.app.manufacturing':      'Plantas de Manufactura',
    'ss.app.logistics':          'Centros Logísticos',
    'ss.app.ind_buildings':      'Edificios Industriales',
    'ss.app.walkways':           'Pasarelas',
    'ss.app.trench_covers':      'Cubiertas de Zanjas',
    'ss.app.energy_facilities':  'Instalaciones Energéticas',
    'ss.app.arch_floors':        'Pisos Arquitectónicos',
    'ss.app.mezzanines':         'Entrepisos',
    'ss.app.ind_access':         'Acceso Industrial',
    'ss.app.marine_decks':       'Cubiertas Marinas',
    'ss.app.custom_eng':         'Obras de Ingeniería a Medida',

    /* — Industries — */
    'ss.ind.eyebrow':   'Cobertura de Mercado',
    'ss.ind.h2':        'Industrias que Atendemos',
    'ss.ind.1.label':   'Infraestructura Marina',
    'ss.ind.1.desc':    'Tablestacas, pilotes y acero estructural para proyectos costeros y de borde marítimo.',
    'ss.ind.2.label':   'Puertos y Muelles',
    'ss.ind.2.desc':    'Sistemas estructurales para muros de atraque, cargaderos y cimentaciones de terminales.',
    'ss.ind.3.label':   'Petróleo y Gas',
    'ss.ind.3.desc':    'Tubería sin costura y soldada grado API para operaciones upstream y downstream.',
    'ss.ind.4.label':   'Energía',
    'ss.ind.4.desc':    'Sistemas de acero para generación de energía, renovables e infraestructura de transmisión.',
    'ss.ind.5.label':   'Transporte',
    'ss.ind.5.desc':    'Cimentaciones de puentes, perfiles estructurales y tuberías para proyectos viales y ferroviarios.',
    'ss.ind.6.label':   'Infraestructura Hídrica',
    'ss.ind.6.desc':    'Tubería de línea y acero estructural para tratamiento, transmisión y retención de agua.',
    'ss.ind.7.label':   'Instalaciones Industriales',
    'ss.ind.7.desc':    'Acero estructural, rejillas y sistemas prefabricados para construcción de plantas industriales.',
    'ss.ind.8.label':   'Minería',
    'ss.ind.8.desc':    'Soluciones de acero de servicio pesado para infraestructura minera, procesamiento y contención.',
    'ss.ind.9.label':   'Construcción Civil Pesada',
    'ss.ind.9.desc':    'Perfiles estructurales y tuberías para movimientos de tierra a gran escala e infraestructura civil.',

    /* — CTA — */
    'ss.cta.label': 'Iniciar un Proyecto',
    'ss.cta.h2':    '¿Necesita Soluciones en Acero para su Próximo Proyecto?',
    'ss.cta.body':  'Nuestro equipo de ingeniería puede ayudarle a identificar los sistemas de acero más adecuados para los requisitos, especificaciones y objetivos de desempeño de su proyecto.',
    'ss.cta.btn1':  'Solicitar Cotización',
    'ss.cta.btn2':  'Hablar con un Experto',
    'ss.cta.stat1': 'Proyectos de infraestructura apoyados en América Latina',
    'ss.cta.stat2': 'Países en nuestra red global de abastecimiento',
    'ss.cta.stat3': 'Gestión de calidad certificada ISO 9001',

    /* — Footer — */
    'footer.privacy':        'Política de Privacidad',
    'footer.terms':          'Términos de Servicio',
    'footer.sustainability': 'Sostenibilidad',
    'footer.copy':           '© 2024 INGE&MAT. Todos los derechos reservados.',

    /* — Nav — */
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
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'es' : 'en');
});

applyLang('en');

/* ── NAV SCROLL BEHAVIOUR ──────────────────────────────────── */
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
document.querySelectorAll('.ss-fade').forEach((el) => observer.observe(el));

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

  mobileMenu.querySelectorAll('.nav-mobile-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sub  = btn.nextElementSibling;
      const open = btn.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      sub.classList.toggle('is-open', open);
    });
  });

  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });
})();
