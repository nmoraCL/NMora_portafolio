/* ============================================================
   i18n — Lightweight Translation Engine
   ============================================================ */
const I18n = (() => {
  const STORAGE_KEY = 'portfolio-lang';
  const DEFAULT_LANG = 'en';
  const SUPPORTED = ['en', 'es'];

  /* ── Translation Dictionaries ── */
  const translations = {
    /* ============================================================
       ENGLISH
       ============================================================ */
    en: {
      // Meta
      'meta.title': 'Nicolás Mora — Senior UX/UI Designer',
      'meta.description': 'Senior UX/UI Designer — Crafting intuitive digital experiences that drive measurable business outcomes.',

      // Nav
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.caseStudies': 'Case Studies',
      'nav.process': 'Process',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',
      'nav.cta': "Let's Talk",

      // Hero
      'hero.availability': 'Based in Chile · Available for Remote & Global Projects',
      'hero.overline': 'Senior UX/UI Designer',
      'hero.title': 'I design digital products<br class="d-none d-md-block"> that people <em>actually</em> love<br class="d-none d-md-block"> to use.',
      'hero.sub': 'Turning complex problems into elegant, intuitive experiences.<br class="d-none d-md-block"> 10+ years helping startups and enterprises ship products that<br class="d-none d-md-block"> drive engagement, conversion, and lasting business impact.',
      'hero.cta1': 'View Case Studies',
      'hero.cta2': 'Get in Touch',
      'hero.stat1': 'Years Experience',
      'hero.stat2': 'Projects Shipped',
      'hero.stat3': 'Clients Worldwide',

      // About
      'about.label': 'About',
      'about.title': 'Design is<br>how it <em>works</em>.',
      'about.lead': "I don't just push pixels — I solve problems. Every interface I design starts with understanding the people who will use it and the business outcomes it needs to deliver.",
      'about.p1': "Over the past decade, I've worked across fintech, SaaS, healthcare, and e-commerce — collaborating with product managers, engineers, and stakeholders to ship experiences that move metrics. My approach bridges user empathy with business strategy: I dig into research, challenge assumptions, and design systems that scale.",
      'about.p2': "I believe the best design is invisible. It reduces friction, builds trust, and makes complex workflows feel effortless. Whether I'm redesigning a checkout flow or architecting a design system from scratch, I focus on clarity, consistency, and measurable impact.",
      'about.v1Title': 'User-Centered',
      'about.v1Desc': 'Every decision is grounded in research, testing, and real user behavior — not assumptions.',
      'about.v2Title': 'Business-Aware',
      'about.v2Desc': 'Good design delivers results. I tie every design decision to KPIs, conversion, and growth.',
      'about.v3Title': 'Systems Thinker',
      'about.v3Desc': 'I build scalable design systems and component libraries that maintain consistency at scale.',

      // Skills
      'skills.label': 'Expertise',
      'skills.title': 'Skills & Capabilities',
      'skills.desc': 'A comprehensive toolkit built over 10+ years of designing digital products.',
      'skills.uxTitle': 'UX Design',
      'skills.uiTitle': 'UI Design',
      'skills.prodTitle': 'Product & Strategy',
      'skills.toolsTitle': 'Tools',

      // Case Studies — shared
      'cs.label': 'Selected Work',
      'cs.title': 'Featured Case Studies',
      'cs.desc': 'Deep dives into projects where design drove measurable business outcomes.',
      'cs.metaRole': 'Role',
      'cs.metaTimeline': 'Timeline',
      'cs.metaTeam': 'Team',
      'cs.metaIndustry': 'Industry',
      'cs.challenge': 'The Challenge',
      'cs.goals': 'Goals',
      'cs.process': 'Process',
      'cs.results': 'Results',
      'cs.learnings': 'Key Learnings',
      'cs.userGoals': 'User Goals',
      'cs.bizGoals': 'Business Goals',

      // CS1 — FinFlow
      'cs1.label': 'Case Study 01',
      'cs1.title': 'FinFlow — Redesigning the Future of Business Banking',
      'cs1.excerpt': 'A complete UX overhaul of a B2B fintech platform that increased user activation by 47% and reduced onboarding drop-off by 62%.',
      'cs1.role': 'Lead UX/UI Designer',
      'cs1.timeline': '6 months',
      'cs1.team': '2 Designers, 4 Engineers, 1 PM',
      'cs1.industry': 'Fintech / B2B SaaS',
      'cs1.challengeP1': "FinFlow's legacy platform suffered from a convoluted onboarding flow and a dashboard built by engineers without UX oversight. 68% of trial users abandoned during setup, and the average time-to-value was 14 days — far too long for a competitive fintech market.",
      'cs1.challengeP2': 'The company needed a ground-up redesign that would reduce friction, accelerate activation, and position them against emerging competitors like Mercury and Brex.',
      'cs1.learnings': "The biggest win wasn't the visual redesign — it was simplifying the information architecture. Removing 75% of navigation items and introducing progressive disclosure transformed a product that felt overwhelming into one that felt intuitive. The lesson: when in doubt, subtract.",

      // CS2 — HealWise
      'cs2.label': 'Case Study 02',
      'cs2.title': 'HealWise — Reimagining Telehealth for Accessibility',
      'cs2.excerpt': 'Designed an accessible telehealth platform that achieved WCAG 2.1 AA compliance and increased appointment completion rates by 35% among users 65+.',
      'cs2.role': 'Senior UX Designer',
      'cs2.timeline': '4 months',
      'cs2.team': '1 Designer, 3 Engineers, 1 PM, 1 Researcher',
      'cs2.industry': 'Healthcare / Telehealth',
      'cs2.challengeP1': "HealWise's existing telehealth app was failing its most critical demographic: elderly and less tech-savvy patients. The appointment booking flow had a 52% abandonment rate among users over 65, and the video consultation interface generated constant support calls due to confusing controls.",
      'cs2.challengeP2': "Accessibility was not an afterthought — it was the core design constraint. The platform needed to serve patients with low vision, motor impairments, and limited digital literacy without compromising the experience for other users.",
      'cs2.learnings': "Designing for accessibility improved the experience for everyone — not just the target demographic. The simplified flows, clearer hierarchy, and larger touch targets reduced errors and increased satisfaction scores across all user segments. Inclusive design isn't a constraint; it's a competitive advantage.",

      // CS3 — Cartly
      'cs3.label': 'Case Study 03',
      'cs3.title': 'Cartly — Conversion-Driven E-Commerce Redesign',
      'cs3.excerpt': 'Redesigned the mobile checkout experience for a D2C brand, lifting mobile conversion by 28% and reducing cart abandonment by 41%.',
      'cs3.role': 'UX/UI Design Lead',
      'cs3.timeline': '3 months',
      'cs3.team': '2 Designers, 5 Engineers, 1 PM',
      'cs3.industry': 'E-Commerce / D2C',
      'cs3.challengeP1': "Cartly, a fast-growing D2C brand, was seeing 73% of their traffic from mobile but converting at only 1.2% — well below the 3% industry benchmark. Analytics revealed that the checkout flow was the primary bottleneck: a 5-page desktop-first design that hadn't been optimized for mobile users.",
      'cs3.challengeP2': 'With $2.4M in monthly revenue at stake, even a small conversion improvement would have a significant bottom-line impact.',
      'cs3.learnings': "The single biggest conversion lever was trust — not speed. While the streamlined flow reduced friction, the addition of security badges, real-time validation, and transparent pricing had the largest measurable impact on completion rates. Users don't abandon because checkout is slow; they abandon because they don't feel safe.",

      // Process
      'process.label': 'Methodology',
      'process.title': 'Design Process',
      'process.desc': 'A structured, adaptable framework for turning ambiguity into clarity.',
      'process.s1Title': 'Discover',
      'process.s1Desc': 'Understand the problem space through user research, stakeholder interviews, data analysis, and competitive benchmarking. Identify unmet needs and opportunity areas.',
      'process.s2Title': 'Define',
      'process.s2Desc': 'Synthesize research into actionable insights. Frame the problem, define success metrics, map user journeys, and align stakeholders around a shared vision.',
      'process.s3Title': 'Ideate',
      'process.s3Desc': 'Explore multiple directions through sketching, wireframing, and collaborative workshops. Diverge before converging — the best solutions come from unexpected places.',
      'process.s4Title': 'Design',
      'process.s4Desc': 'Craft the solution with attention to hierarchy, consistency, and delight. Build design systems, define interaction patterns, and create pixel-perfect deliverables.',
      'process.s5Title': 'Validate',
      'process.s5Desc': 'Test with real users. Run usability tests, gather feedback, measure against success metrics, and iterate until the experience meets the quality bar.',
      'process.s6Title': 'Optimize',
      'process.s6Desc': "Design doesn't end at launch. Monitor analytics, run A/B tests, gather user feedback, and continuously improve the experience based on real-world data.",

      // Experience
      'exp.label': 'Career',
      'exp.title': 'Professional<br>Experience',
      'exp.t1Date': '2022 — Present',
      'exp.t1Role': 'Senior UX/UI Designer',
      'exp.t1Desc': 'Leading product design for a B2B SaaS platform serving 200K+ users. Established the design system, introduced user research practices, and drove a redesign that increased user engagement by 38%.',
      'exp.t2Role': 'UX/UI Designer',
      'exp.t2Desc': 'Designed digital products for clients across fintech, healthcare, and e-commerce. Led end-to-end design for 15+ projects, collaborating closely with cross-functional teams.',
      'exp.t3Role': 'UX Designer',
      'exp.t3Desc': 'Joined as the first designer for an early-stage startup. Built the product design function from scratch, defining processes, tools, and design culture.',
      'exp.t4Role': 'UI Designer',
      'exp.t4Desc': 'Started my career designing websites and mobile apps for small businesses and startups. Developed a strong foundation in visual design, typography, and front-end development.',

      // Testimonials
      'test.label': 'Kind Words',
      'test.title': 'What People Say',
      'test.q1': "“Nicolás doesn't just design interfaces — he solves business problems through design. His work on our platform directly contributed to a 40% increase in user retention.”",
      'test.q2': "“One of the most thoughtful designers I've worked with. He brings structure to ambiguity and always grounds his decisions in user research and data.”",
      'test.q3': "“Nicolás transformed our MVP from a functional prototype into a product investors fell in love with. His design was instrumental in closing our seed round.”",

      // Contact
      'contact.label': 'Get in Touch',
      'contact.title': "Let's build something<br><em>great</em> together.",
      'contact.desc': "I'm always open to discussing new projects, design challenges, and opportunities to create meaningful impact.",
      'contact.cta': '<i class="bi bi-envelope me-2"></i>Let\'s talk about your project',

      // Footer
      'footer.copy': 'Designed & built by Nicolás Mora',
      'footer.top': 'Back to top <i class="bi bi-arrow-up-short"></i>',
    },

    /* ============================================================
       SPANISH
       ============================================================ */
    es: {
      // Meta
      'meta.title': 'Nicolás Mora — Diseñador UX/UI Senior',
      'meta.description': 'Diseñador UX/UI Senior — Creando experiencias digitales intuitivas que generan resultados de negocio medibles.',

      // Nav
      'nav.about': 'Sobre mí',
      'nav.skills': 'Habilidades',
      'nav.caseStudies': 'Casos de Estudio',
      'nav.process': 'Proceso',
      'nav.experience': 'Experiencia',
      'nav.contact': 'Contacto',
      'nav.cta': 'Hablemos',

      // Hero
      'hero.availability': 'Basado en Chile · Disponible para proyectos remotos y globales',
      'hero.overline': 'Diseñador UX/UI Senior',
      'hero.title': 'Diseño productos digitales<br class="d-none d-md-block"> que la gente <em>realmente</em><br class="d-none d-md-block"> disfruta usar.',
      'hero.sub': 'Transformando problemas complejos en experiencias elegantes e intuitivas.<br class="d-none d-md-block"> +10 años ayudando a startups y empresas a lanzar productos que<br class="d-none d-md-block"> impulsan engagement, conversión e impacto de negocio.',
      'hero.cta1': 'Ver Casos de Estudio',
      'hero.cta2': 'Contáctame',
      'hero.stat1': 'Años de Experiencia',
      'hero.stat2': 'Proyectos Entregados',
      'hero.stat3': 'Clientes en el Mundo',

      // About
      'about.label': 'Sobre mí',
      'about.title': 'El diseño es<br>cómo <em>funciona</em>.',
      'about.lead': 'No solo muevo píxeles — resuelvo problemas. Cada interfaz que diseño parte de comprender a las personas que la usarán y los resultados de negocio que debe generar.',
      'about.p1': 'Durante la última década, he trabajado en fintech, SaaS, salud y e-commerce — colaborando con product managers, ingenieros y stakeholders para crear experiencias que mueven métricas. Mi enfoque conecta la empatía con el usuario y la estrategia de negocio: investigo, cuestiono supuestos y diseño sistemas que escalan.',
      'about.p2': 'Creo que el mejor diseño es invisible. Reduce la fricción, genera confianza y hace que flujos complejos se sientan naturales. Ya sea rediseñando un checkout o creando un design system desde cero, me enfoco en claridad, consistencia e impacto medible.',
      'about.v1Title': 'Centrado en el Usuario',
      'about.v1Desc': 'Cada decisión se basa en investigación, testing y comportamiento real — no en suposiciones.',
      'about.v2Title': 'Visión de Negocio',
      'about.v2Desc': 'El buen diseño genera resultados. Conecto cada decisión de diseño con KPIs, conversión y crecimiento.',
      'about.v3Title': 'Pensamiento Sistémico',
      'about.v3Desc': 'Construyo design systems escalables y librerías de componentes que mantienen la consistencia a escala.',

      // Skills
      'skills.label': 'Experiencia',
      'skills.title': 'Habilidades y Capacidades',
      'skills.desc': 'Un conjunto de herramientas integral construido en +10 años diseñando productos digitales.',
      'skills.uxTitle': 'Diseño UX',
      'skills.uiTitle': 'Diseño UI',
      'skills.prodTitle': 'Producto y Estrategia',
      'skills.toolsTitle': 'Herramientas',

      // Case Studies — shared
      'cs.label': 'Trabajo Seleccionado',
      'cs.title': 'Casos de Estudio Destacados',
      'cs.desc': 'Análisis profundos de proyectos donde el diseño impulsó resultados de negocio medibles.',
      'cs.metaRole': 'Rol',
      'cs.metaTimeline': 'Duración',
      'cs.metaTeam': 'Equipo',
      'cs.metaIndustry': 'Industria',
      'cs.challenge': 'El Desafío',
      'cs.goals': 'Objetivos',
      'cs.process': 'Proceso',
      'cs.results': 'Resultados',
      'cs.learnings': 'Aprendizajes Clave',
      'cs.userGoals': 'Objetivos del Usuario',
      'cs.bizGoals': 'Objetivos de Negocio',

      // CS1 — FinFlow
      'cs1.label': 'Caso de Estudio 01',
      'cs1.title': 'FinFlow — Rediseñando el Futuro de la Banca Empresarial',
      'cs1.excerpt': 'Una renovación completa de UX de una plataforma fintech B2B que incrementó la activación de usuarios en un 47% y redujo el abandono en onboarding en un 62%.',
      'cs1.role': 'Diseñador UX/UI Líder',
      'cs1.timeline': '6 meses',
      'cs1.team': '2 Diseñadores, 4 Ingenieros, 1 PM',
      'cs1.industry': 'Fintech / B2B SaaS',
      'cs1.challengeP1': 'La plataforma legacy de FinFlow sufría de un flujo de onboarding confuso y un dashboard construido por ingenieros sin supervisión UX. El 68% de los usuarios de prueba abandonaban durante la configuración, y el tiempo promedio hasta el valor era de 14 días — demasiado largo para un mercado fintech competitivo.',
      'cs1.challengeP2': 'La empresa necesitaba un rediseño desde cero que redujera la fricción, acelerara la activación y los posicionara frente a competidores emergentes como Mercury y Brex.',
      'cs1.learnings': 'El mayor logro no fue el rediseño visual — fue simplificar la arquitectura de información. Eliminar el 75% de los ítems de navegación e introducir divulgación progresiva transformó un producto abrumador en uno intuitivo. La lección: ante la duda, simplifica.',

      // CS2 — HealWise
      'cs2.label': 'Caso de Estudio 02',
      'cs2.title': 'HealWise — Reimaginando la Telemedicina Accesible',
      'cs2.excerpt': 'Diseñé una plataforma de telemedicina accesible que logró cumplimiento WCAG 2.1 AA y aumentó las tasas de finalización de citas en un 35% entre usuarios mayores de 65 años.',
      'cs2.role': 'Diseñador UX Senior',
      'cs2.timeline': '4 meses',
      'cs2.team': '1 Diseñador, 3 Ingenieros, 1 PM, 1 Investigador',
      'cs2.industry': 'Salud / Telemedicina',
      'cs2.challengeP1': 'La aplicación de telemedicina existente de HealWise estaba fallando con su demografía más crítica: pacientes mayores y con menor experiencia tecnológica. El flujo de reserva de citas tenía una tasa de abandono del 52% entre usuarios mayores de 65, y la interfaz de videoconsulta generaba constantes llamadas de soporte por controles confusos.',
      'cs2.challengeP2': 'La accesibilidad no fue un agregado posterior — fue la restricción central de diseño. La plataforma necesitaba servir a pacientes con baja visión, limitaciones motoras y alfabetización digital limitada sin comprometer la experiencia para otros usuarios.',
      'cs2.learnings': 'Diseñar para accesibilidad mejoró la experiencia para todos — no solo para el grupo objetivo. Los flujos simplificados, la jerarquía más clara y los objetivos táctiles más grandes redujeron errores y aumentaron la satisfacción en todos los segmentos. El diseño inclusivo no es una restricción; es una ventaja competitiva.',

      // CS3 — Cartly
      'cs3.label': 'Caso de Estudio 03',
      'cs3.title': 'Cartly — Rediseño de E-Commerce Orientado a Conversión',
      'cs3.excerpt': 'Rediseñé la experiencia de checkout móvil para una marca D2C, aumentando la conversión móvil en un 28% y reduciendo el abandono de carrito en un 41%.',
      'cs3.role': 'Líder de Diseño UX/UI',
      'cs3.timeline': '3 meses',
      'cs3.team': '2 Diseñadores, 5 Ingenieros, 1 PM',
      'cs3.industry': 'E-Commerce / D2C',
      'cs3.challengeP1': 'Cartly, una marca D2C en rápido crecimiento, recibía el 73% de su tráfico desde móvil pero convertía apenas al 1.2% — muy por debajo del benchmark de 3% de la industria. Los analytics revelaron que el flujo de checkout era el principal cuello de botella: un diseño de 5 páginas pensado para desktop sin optimizar para móvil.',
      'cs3.challengeP2': 'Con $2.4M en ingresos mensuales en juego, incluso una pequeña mejora en la conversión tendría un impacto significativo en el resultado final.',
      'cs3.learnings': 'La mayor palanca de conversión fue la confianza — no la velocidad. Si bien el flujo simplificado redujo la fricción, la adición de sellos de seguridad, validación en tiempo real y precios transparentes tuvo el mayor impacto medible en las tasas de finalización. Los usuarios no abandonan porque el checkout es lento; abandonan porque no se sienten seguros.',

      // Process
      'process.label': 'Metodología',
      'process.title': 'Proceso de Diseño',
      'process.desc': 'Un framework estructurado y adaptable para convertir la ambigüedad en claridad.',
      'process.s1Title': 'Descubrir',
      'process.s1Desc': 'Comprender el espacio del problema a través de investigación de usuarios, entrevistas con stakeholders, análisis de datos y benchmarking competitivo. Identificar necesidades no cubiertas y áreas de oportunidad.',
      'process.s2Title': 'Definir',
      'process.s2Desc': 'Sintetizar la investigación en insights accionables. Enmarcar el problema, definir métricas de éxito, mapear journeys de usuario y alinear a los stakeholders en una visión compartida.',
      'process.s3Title': 'Idear',
      'process.s3Desc': 'Explorar múltiples direcciones mediante bocetos, wireframes y talleres colaborativos. Divergir antes de converger — las mejores soluciones vienen de lugares inesperados.',
      'process.s4Title': 'Diseñar',
      'process.s4Desc': 'Construir la solución con atención a la jerarquía, consistencia y detalle. Crear design systems, definir patrones de interacción y entregar diseños pixel-perfect.',
      'process.s5Title': 'Validar',
      'process.s5Desc': 'Testear con usuarios reales. Ejecutar pruebas de usabilidad, recopilar feedback, medir contra métricas de éxito e iterar hasta alcanzar el estándar de calidad.',
      'process.s6Title': 'Optimizar',
      'process.s6Desc': 'El diseño no termina en el lanzamiento. Monitorear analytics, ejecutar tests A/B, recopilar feedback y mejorar continuamente la experiencia basándose en datos reales.',

      // Experience
      'exp.label': 'Carrera',
      'exp.title': 'Experiencia<br>Profesional',
      'exp.t1Date': '2022 — Presente',
      'exp.t1Role': 'Diseñador UX/UI Senior',
      'exp.t1Desc': 'Liderando diseño de producto para una plataforma SaaS B2B con +200K usuarios. Establecí el design system, introduje prácticas de investigación de usuarios e impulsé un rediseño que incrementó el engagement en un 38%.',
      'exp.t2Role': 'Diseñador UX/UI',
      'exp.t2Desc': 'Diseñé productos digitales para clientes en fintech, salud y e-commerce. Lideré el diseño end-to-end de +15 proyectos, colaborando estrechamente con equipos multidisciplinarios.',
      'exp.t3Role': 'Diseñador UX',
      'exp.t3Desc': 'Me incorporé como el primer diseñador en una startup en etapa temprana. Construí la función de diseño de producto desde cero, definiendo procesos, herramientas y cultura de diseño.',
      'exp.t4Role': 'Diseñador UI',
      'exp.t4Desc': 'Comencé mi carrera diseñando sitios web y apps móviles para pequeñas empresas y startups. Desarrollé una sólida base en diseño visual, tipografía y desarrollo front-end.',

      // Testimonials
      'test.label': 'Testimonios',
      'test.title': 'Lo que Dicen',
      'test.q1': '“Nicolás no solo diseña interfaces — resuelve problemas de negocio a través del diseño. Su trabajo en nuestra plataforma contribuyó directamente a un aumento del 40% en la retención de usuarios.”',
      'test.q2': '“Uno de los diseñadores más reflexivos con los que he trabajado. Aporta estructura a la ambigüedad y siempre fundamenta sus decisiones en investigación de usuarios y datos.”',
      'test.q3': '“Nicolás transformó nuestro MVP de un prototipo funcional a un producto del que los inversores se enamoraron. Su diseño fue instrumental para cerrar nuestra ronda semilla.”',

      // Contact
      'contact.label': 'Contacto',
      'contact.title': 'Construyamos algo<br><em>increíble</em> juntos.',
      'contact.desc': 'Siempre estoy abierto a discutir nuevos proyectos, desafíos de diseño y oportunidades para crear impacto significativo.',
      'contact.cta': '<i class="bi bi-envelope me-2"></i>Hablemos de tu proyecto',

      // Footer
      'footer.copy': 'Diseñado y construido por Nicolás Mora',
      'footer.top': 'Volver arriba <i class="bi bi-arrow-up-short"></i>',
    },
  };

  /* ── Detect initial language ── */
  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;

    const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    return browserLang === 'es' ? 'es' : DEFAULT_LANG;
  }

  /* ── Apply translations to DOM ── */
  function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.setAttribute('lang', lang);
    document.title = dict['meta.title'] || document.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.description'] || '');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (value === undefined) return;

      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    // Update switcher buttons
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* ── Init ── */
  function init() {
    const lang = detectLang();
    applyLang(lang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-lang');
        if (target && SUPPORTED.includes(target)) {
          applyLang(target);
        }
      });
    });
  }

  return { init, applyLang, detectLang };
})();

document.addEventListener('DOMContentLoaded', () => {
  I18n.init();
});