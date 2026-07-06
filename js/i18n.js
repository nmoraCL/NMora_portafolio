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
      'meta.title': 'Nicolás Mora — UX/UI Designer',
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
      'hero.overline': 'UX/UI Designer',
      'hero.title': 'I design digital products<br class="d-none d-md-block">that help people<br class="d-none d-md-block">make better decisions.',
      'hero.sub': 'I transform complex products into clear, intuitive experiences by combining UX strategy, research and measurable business outcomes.',
      'hero.cta1': 'View Case Studies',
      'hero.cta2': 'Get in Touch',
      'hero.stat1': 'Years of Experience',
      'hero.stat2': 'Years in UX/UI',
      'hero.stat3': 'Users Impacted',

      // About
      'about.label': 'About',
      'about.title': 'Design is<br>how it <em>works</em>.',
      'about.lead': 'My work focuses on simplifying complex products — improving usability, reducing friction, and aligning user needs with business goals.',
      'about.p1': "Over the past decade I've worked with teams across fintech, payments and digital products to ship experiences that are clearer, more usable and more effective. I work across the full design process: from research and strategy to interaction design and delivery.",
      'about.p2': 'My approach is grounded in user research and informed by business context. I collaborate closely with product managers, engineers and stakeholders to ensure design decisions translate into measurable outcomes — not just polished interfaces.',
      'about.v1Title': 'User-Centered',
      'about.v1Desc': 'Grounded in research and usability testing — every decision reflects real behaviors, not assumptions.',
      'about.v2Title': 'Business-Aware',
      'about.v2Desc': 'I connect design decisions to KPIs and business goals, ensuring each improvement has a clear impact on the metrics that matter.',
      'about.v3Title': 'Systems Thinker',
      'about.v3Desc': 'I design with scale in mind — building reusable components, design systems and interaction patterns that teams can keep building on.',

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
      'cs.viewCase': 'Explore Project',
      'cs.nextProject': 'Next Project',
      'cs.back': '← Back to Portfolio',

      // CS1 — Transbank
      'cs1.label': 'Case Study 01',
      'cs1.title': 'Product Comparator — Transbank',
      'cs1.excerpt': "Redesigned Transbank's Product Comparator to simplify how businesses evaluate payment solutions through user research, UX strategy and iterative design, improving discoverability, reducing cognitive load and increasing conversion.",
      'cs1.viewCase': 'View Case Study',
      'cs1.role': 'UX/UI Designer',
      'cs1.timeline': '6 months',
      'cs1.team': 'UX/UI Designer · UX Researcher · CRO Specialist · Developer',
      'cs1.industry': 'Digital Payments',
      'cs1.challengeP1': "Transbank's growing portfolio of payment solutions made it difficult for businesses to evaluate and compare options. The existing comparator was information-heavy, hard to navigate and focused on technical specs rather than helping businesses make confident decisions.",
      'cs1.challengeP2': 'The redesign needed to simplify the comparison experience, improve discoverability, and reduce the friction that was preventing businesses from selecting the right payment solution.',
      'cs1.learnings': 'Simplifying the comparison experience proved more effective than adding more information. The most impactful improvements came from restructuring how content was presented — prioritizing what users needed to make a decision over what the product team assumed they should know.',
      // CS1 body — goals
      'cs1.ug1': 'Evaluate payment options with less effort',
      'cs1.ug2': 'Compare products without switching pages',
      'cs1.ug3': 'Find the right solution faster',
      'cs1.ug4': 'Feel confident before choosing',
      'cs1.bg1': 'Improve product discoverability',
      'cs1.bg2': 'Reduce decision-making friction',
      'cs1.bg3': 'Increase conversion on payment solutions',
      'cs1.bg4': 'Build a scalable comparison framework',
      // CS1 body — process
      'cs1.proc1Title': 'Discovery',
      'cs1.proc1Desc': 'Customer interviews, behavioral analytics and competitive benchmarking to understand how businesses evaluated payment solutions and where friction appeared in the decision process.',
      'cs1.proc2Title': 'Research & Analysis',
      'cs1.proc2Desc': 'Usability testing of the existing comparator, Hotjar analysis and analytics review to identify specific drop-off points, discoverability issues and decision-making barriers.',
      'cs1.proc3Title': 'Design Iterations',
      'cs1.proc3Desc': 'Three design rounds — from a technical comparison table to a decision-focused experience — each validated against research findings and business feedback.',
      'cs1.proc4Title': 'Validation',
      'cs1.proc4Desc': 'Usability testing of the final redesign against the existing comparator, measuring improvements in task completion, cognitive load and confidence before selection.',
      // CS1 body — results
      'cs1.res1Desc': 'Estimated increase in conversion rate',
      'cs1.res2Desc': 'Better product discoverability',
      'cs1.res3Desc': 'Increase in engagement with the Product Comparator',
      'cs1.res4Num': 'Scalable',
      'cs1.res4Desc': 'Comparison framework for future product launches',

      // CS2 — Coming Soon
      'cs2.label': 'Coming Soon',
      'cs2.title': 'Next Case Study',
      'cs2.excerpt': 'Currently in progress. Check back soon.',
      'cs2.role': '',
      'cs2.timeline': '',
      'cs2.team': '',
      'cs2.industry': '',

      // CS3 — Coming Soon
      'cs3.label': 'Coming Soon',
      'cs3.title': 'Next Case Study',
      'cs3.excerpt': 'Currently in progress. Check back soon.',
      'cs3.role': '',
      'cs3.timeline': '',
      'cs3.team': '',
      'cs3.industry': '',

      // Process
      'process.label': 'Methodology',
      'process.title': 'Design Process',
      'process.desc': 'A structured, adaptable framework for turning ambiguity into clarity.',
      'process.s1Title': 'Discover',
      'process.s1Desc': 'Understand the problem space through user research, stakeholder interviews and competitive analysis. Identify unmet needs and real opportunity areas.',
      'process.s2Title': 'Define',
      'process.s2Desc': 'Synthesize research into actionable insights. Define success metrics, map user journeys and align the team around a shared direction.',
      'process.s3Title': 'Ideate',
      'process.s3Desc': 'Explore multiple directions through sketching and wireframing. Diverge before converging — the right solution is rarely the first one.',
      'process.s4Title': 'Design',
      'process.s4Desc': 'Build the solution with attention to hierarchy and consistency. Create design systems, interaction patterns and production-ready deliverables.',
      'process.s5Title': 'Validate',
      'process.s5Desc': 'Test with real users. Run usability tests, measure against success metrics and iterate until the experience meets the quality bar.',
      'process.s6Title': 'Optimize',
      'process.s6Desc': "Design doesn't end at launch. Monitor analytics, gather feedback and improve the experience continuously based on real-world data.",

      // Experience
      'exp.label': 'Career',
      'exp.title': 'Professional<br>Experience',
      'exp.t1Date': 'Feb 2023 — Present',
      'exp.t1Role': 'UX/UI Designer',
      'exp.t1Desc': 'Responsible for designing and optimizing digital experiences across Transbank\'s ecosystem, improving usability, conversion and product clarity through UX strategy, research, CRO and design systems.',
      'exp.t2Role': 'Motion Graphics Designer',
      'exp.t2Desc': 'Created digital content, animations and visual assets for marketing campaigns, working across multiple brands and formats.',
      'exp.t3Role': 'Motion Graphic Designer',
      'exp.t3Desc': 'Developed motion graphics and digital marketing assets for multiple brands, building a solid foundation in visual communication and digital production.',

      // Testimonials
      'test.label': 'Kind Words',
      'test.title': 'What People Say',
      'test.q1': "“Nicolás doesn't just design interfaces — he solves business problems through design. His work on our platform directly contributed to a 40% increase in user retention.”",
      'test.q2': "“One of the most thoughtful designers I've worked with. He brings structure to ambiguity and always grounds his decisions in user research and data.”",
      'test.q3': "“Nicolás transformed our MVP from a functional prototype into a product investors fell in love with. His design was instrumental in closing our seed round.”",

      // Contact
      'contact.label': 'Get in Touch',
      'contact.title': "Have a product challenge?<br>Let\'s talk.",
      'contact.desc': "Open to conversations with product teams, companies and recruiters looking for a UX/UI designer who combines research, strategy and design to deliver measurable results.",
      'contact.cta': '<i class="bi bi-envelope me-2"></i>Let\'s talk about your project',

      // Footer
      'footer.copy': 'Designed & built by Nicolás Mora',
      'footer.top': 'Back to top <i class="bi bi-arrow-up-short"></i>',

      // ── Transbank — Product Comparator ──────────────────────────
      'tb.chip1': 'Case Study 01',
      'tb.chip2': 'Digital Payments',
      'tb.heroTitle': 'Product<br>Comparator',
      'tb.heroLogline': "Helping businesses make confident payment decisions by redesigning Transbank's product comparison experience.",
      'tb.heroSummary': 'Transbank redesigned its Product Comparator to simplify how businesses evaluate payment solutions. Through user research, behavioral analysis and multiple design iterations, we transformed a feature-heavy comparison tool into a decision-focused experience that improved discoverability, reduced cognitive load and increased conversion by an estimated 11.5%.',
      'tb.metaRoleVal': 'UX/UI Designer',
      'tb.metaTimelineVal': '6 months',
      'tb.metaTeamVal': 'UX/UI Designer<br>UX Researcher<br>CRO Specialist<br>Developer',
      'tb.metaIndustryVal': 'Digital Payments',
      'tb.scroll': 'Scroll',
      // S02
      'tb.s02chip': '02 · At a glance',
      'tb.s02stat1title': 'Problem',
      'tb.s02stat1desc': "Businesses struggled to understand which payment solution best fit their needs. Product information was fragmented, difficult to compare, and overloaded with technical details.",
      'tb.s02stat2title': 'Objective',
      'tb.s02stat2desc': "Redesign the comparison experience to help businesses make faster, more confident purchasing decisions while supporting Transbank's commercial goals.",
      'tb.s02stat3title': 'Approach',
      'tb.s02stat3desc': 'Combined user interviews, behavioral analytics, Hotjar insights, competitive benchmarking, CRO recommendations and iterative UX/UI design.',
      'tb.s02stat4title': 'Impact',
      'tb.s02stat4desc': "Delivered a simplified comparison experience that improved product discoverability, reduced decision-making friction and contributed to an estimated 6% increase in conversion.",
      // S03
      'tb.s03p1': "Transbank's growing portfolio of payment solutions made it increasingly difficult for businesses to understand which product best suited their needs.",
      'tb.s03p2': 'Although detailed product information was available, it was distributed across multiple pages and focused heavily on technical specifications rather than helping customers make informed decisions. As a result, comparing alternatives required unnecessary effort, creating friction during the evaluation process and reducing confidence before purchase.',
      'tb.s03p3': "The challenge was to transform the Product Comparator from an information-heavy catalog into a decision-making tool that helped businesses quickly identify the right solution while supporting Transbank's commercial objectives.",
      // S04
      'tb.s04name': 'Discovery',
      'tb.s04p1': 'Before exploring solutions, we needed to understand how businesses evaluated payment products, where uncertainty appeared during the decision-making process, and what information truly influenced their choice.',
      'tb.s04p2': 'During a three-week discovery phase, we combined qualitative and quantitative methods to build a complete picture of the customer journey. This included customer interviews, analytics review, behavioral analysis, competitive benchmarking, and collaborative sessions with Marketing, CRO, and Development.',
      'tb.s04p3': 'Rather than validating assumptions, the goal was to uncover the real barriers preventing businesses from confidently selecting the right payment solution.',
      // S05
      'tb.s05name': 'Research',
      'tb.s05p1': 'The research phase helped us identify the main sources of friction in the product selection journey. We analyzed how users accessed the comparator, how they interpreted product information, and what prevented them from confidently choosing a solution.',
      'tb.s05p2': 'The findings showed that users valued comparison, but the experience needed to be easier to find, easier to scan, and more focused on decision-making. Customers were not looking for every technical detail upfront; they needed the right information at the right moment.',
      'tb.s05p3': 'This shifted the project from a visual redesign into a product evolution focused on reducing uncertainty.',
      'tb.s05i1title': 'Customer Interviews',
      'tb.s05i1desc': '20+ interviews helped us understand how businesses evaluated payment solutions and what information influenced their purchase decision.',
      'tb.s05i2title': 'Usability Testing',
      'tb.s05i2desc': 'The first redesigned version was tested against the existing comparator to identify what improved, what created friction, and what needed to change.',
      'tb.s05i3title': 'Behavioral Analysis',
      'tb.s05i3desc': 'Analytics and Hotjar helped us review navigation patterns, drop-offs, discoverability issues, and interaction behavior across the product journey.',
      'tb.s05i4title': 'Competitive Benchmark',
      'tb.s05i4desc': 'We reviewed comparison patterns from digital products and e-commerce experiences to identify clearer ways of presenting product differences.',
      'tb.s05callout': "Research revealed that the problem wasn't a lack of information.<br>It was the way information supported decision-making.",
      // S06
      'tb.s06name': 'Key Insights',
      'tb.s06title': "Our research revealed that the biggest challenge wasn't the amount of information available — it was how that information supported decision-making.",
      'tb.s06intro': 'Across interviews, usability testing, analytics, and behavioral analysis, five recurring patterns consistently emerged.',
      'tb.s06i1title': 'Finding the comparator was the first challenge.',
      'tb.s06i1desc': "Many users didn't know a comparison tool existed or struggled to find it within the website.",
      'tb.s06i1impl': '<span>Design implication</span> — Increase discoverability by integrating the comparator into key navigation points and product journeys.',
      'tb.s06i2title': "More information didn't create better decisions.",
      'tb.s06i2desc': 'Users appreciated detailed specifications, but too much technical information increased cognitive load and slowed decision-making.',
      'tb.s06i2impl': '<span>Design implication</span> — Prioritize essential information first and progressively disclose technical details only when needed.',
      'tb.s06i3title': 'Customers thought in business needs, not product names.',
      'tb.s06i3desc': 'Businesses described what they wanted to achieve instead of searching for a specific payment terminal.',
      'tb.s06i3impl': '<span>Design implication</span> — Organize the experience around customer scenarios rather than a flat product catalog.',
      'tb.s06i4title': 'Comparing products required unnecessary effort.',
      'tb.s06i4desc': 'Important information was distributed across multiple pages, forcing users to remember details while switching between products.',
      'tb.s06i4impl': '<span>Design implication</span> — Centralize product comparison into a single, consistent experience.',
      'tb.s06i5title': 'Confidence mattered more than completeness.',
      'tb.s06i5desc': "Users weren't looking to become product experts — they simply wanted enough information to feel confident choosing the right solution.",
      'tb.s06i5impl': '<span>Design implication</span> — Design for confident decision-making instead of information density.',
      'tb.s06callout': 'Research fundamentally changed our perspective.<br>The goal was no longer to help users compare products.<br>The goal became helping businesses make confident decisions.',
      // S07
      'tb.s07name': 'Design Principles',
      'tb.s07intro': 'The research findings were translated into a set of design principles that guided every iteration of the Product Comparator. These principles helped the team make consistent design decisions throughout the project.',
      'tb.s07p1title': 'Design for Decisions',
      'tb.s07p1desc': 'Every screen should help users choose the right payment solution — not simply present information.',
      'tb.s07p2title': 'Reduce Cognitive Load',
      'tb.s07p2desc': 'Prioritize the most relevant information first and progressively reveal technical details only when necessary.',
      'tb.s07p3title': 'Compare with Confidence',
      'tb.s07p3desc': 'Enable users to evaluate products side by side using clear, consistent criteria.',
      'tb.s07p4title': 'Support Every Stage of the Journey',
      'tb.s07p4desc': 'Whether users were exploring products for the first time or comparing their final options, the experience should provide the right level of guidance.',
      'tb.s07p5title': 'Balance User Needs and Business Goals',
      'tb.s07p5desc': 'Every design decision should improve customer confidence while supporting product discoverability and commercial objectives.',
      'tb.s07callout': 'These principles became the foundation for every iteration, allowing the Product Comparator to evolve from an information-heavy catalog into a guided decision-making experience.',
      // S08
      'tb.s08name': 'Product Evolution',
      'tb.s08intro': 'Rather than delivering a single redesign, the Product Comparator evolved through multiple iterations. Each version responded to research findings, usability testing, and business feedback, gradually shifting the experience from an information-heavy comparison tool into a guided decision-making product.',
      'tb.s08v1label': 'First Iteration',
      'tb.s08v1desc': '<strong>Technical Comparison.</strong> The first version focused on presenting complete technical specifications in a traditional comparison table. While comprehensive, users needed to scan large amounts of information before identifying the most suitable payment solution.',
      'tb.s08v2label': 'Second Iteration',
      'tb.s08v2desc': '<strong>Product Discovery.</strong> The second iteration introduced product cards and improved visual hierarchy, making exploration easier while reducing the initial complexity of the comparison experience.',
      'tb.s08v3label': 'Final Iteration',
      'tb.s08v3desc': '<strong>Decision-Focused Experience.</strong> The final redesign prioritized decision-making by surfacing only the most relevant information first, while keeping detailed specifications accessible when users needed them.',
      'tb.s08callout': 'Each iteration answered a different question.<br>Version 1 proved comparison was valuable.<br>Version 2 showed where complexity appeared.<br>Version 3 transformed those learnings into a simpler, more effective product experience.',
      // S09
      'tb.s09name': 'Results',
      'tb.s09title': 'The redesign delivered measurable improvements for both the business and its customers.',
      'tb.s09intro': 'By simplifying the comparison experience and focusing on decision-making, the Product Comparator became easier to discover, easier to understand, and more effective at supporting product selection.',
      'tb.s09stat1': 'Estimated increase in conversion rate',
      'tb.s09stat2': 'Better product discoverability across the website',
      'tb.s09stat3': 'Increase in engagement with the Product Comparator',
      'tb.s09stat4title': 'Scalable',
      'tb.s09stat4': 'Comparison framework for future product launches',
      'tb.s09o1title': 'Faster Product Evaluation',
      'tb.s09o1desc': 'Businesses could assess and compare payment solutions more quickly than before.',
      'tb.s09o2title': 'Reduced Cognitive Load',
      'tb.s09o2desc': 'Simplified presentation reduced mental effort during the comparison process.',
      'tb.s09o3title': 'Greater Confidence',
      'tb.s09o3desc': 'Users felt more assured when choosing the right payment solution for their business.',
      'tb.s09o4title': 'Simpler Navigation',
      'tb.s09o4desc': 'Fewer unnecessary steps between discovery and decision reduced friction across the journey.',
      'tb.s09callout': "The project demonstrated that improving decision-making was more valuable than simply providing more information. By reducing uncertainty, we created a better experience for users while supporting Transbank's commercial objectives.",
      // S10
      'tb.s10name': 'Final Deliverable',
      'tb.s10title': 'Final Product',
      'tb.s10desc': 'The final Product Comparator experience consolidated multiple research findings, usability improvements and business goals into a decision-focused experience that helps businesses compare payment solutions faster and with greater confidence.',
      'tb.s10cta': 'View Interactive Prototype <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>',
      // S11
      'tb.s11name': 'Impact & Learnings',
      'tb.s11title': 'What changed',
      'tb.s11intro': 'The redesign helped reposition the Product Comparator as a decision-support tool, improving how businesses discover, compare and choose Transbank payment solutions.',
      'tb.s11impactLabel': 'Impact',
      'tb.s11i1title': 'Business',
      'tb.s11i1desc': 'Created a scalable comparison framework for future product launches.',
      'tb.s11i2title': 'Customers',
      'tb.s11i2desc': 'Reduced uncertainty by making payment solutions easier to understand and compare.',
      'tb.s11i3title': 'Design',
      'tb.s11i3desc': 'Shifted the experience from information-heavy comparison to decision-first product design.',
      'tb.s11learningsLabel': 'Learnings',
      'tb.s11l1title': 'Research drives better decisions.',
      'tb.s11l1desc': 'Early user research helped the team focus on real customer barriers instead of assumptions.',
      'tb.s11l2title': 'Iteration creates stronger products.',
      'tb.s11l2desc': 'Each version revealed new opportunities to simplify the experience.',
      'tb.s11l3title': 'Clarity beats completeness.',
      'tb.s11l3desc': 'The most valuable solution was not showing more information, but helping users make better decisions with less effort.',
      'tb.s11callout': 'The biggest takeaway: great product experiences are built through research, collaboration and continuous refinement.',
      // Next project
      'tb.nextTitle': 'Help Center Optimization',
      'tb.nextDesc': 'Improving self-service through search, content strategy and user-centered support journeys.',
      'tb.nextCta': 'Explore Case <i class="bi bi-arrow-right" aria-hidden="true"></i>',
    },

    /* ============================================================
       SPANISH
       ============================================================ */
    es: {
      // Meta
      'meta.title': 'Nicolás Mora — Diseñador UX/UI',
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
      'hero.overline': 'Diseñador UX/UI',
      'hero.title': 'Diseño productos digitales<br class="d-none d-md-block">que ayudan a las personas<br class="d-none d-md-block">a <em>decidir mejor</em>.',
      'hero.sub': 'Transformo productos complejos en experiencias claras e intuitivas combinando estrategia UX, investigación y resultados de negocio medibles.',
      'hero.cta1': 'Ver Casos de Estudio',
      'hero.cta2': 'Contáctame',
      'hero.stat1': 'Años de experiencia',
      'hero.stat2': 'años en UX / UI',
      'hero.stat3': 'Usuarios impactados',

      // About
      'about.label': 'Sobre mí',
      'about.title': 'El diseño es<br>cómo <em>funciona</em>.',
      'about.lead': 'Mi trabajo se enfoca en simplificar productos complejos — mejorando la usabilidad, reduciendo la fricción y alineando las necesidades del usuario con los objetivos del negocio.',
      'about.p1': 'Durante la última década he trabajado con equipos en fintech, pagos y productos digitales para crear experiencias más claras, más usables y más efectivas. Trabajo en todo el proceso de diseño: desde la investigación y estrategia hasta el diseño de interacción y la entrega.',
      'about.p2': 'Mi enfoque se basa en la investigación de usuarios e informado por el contexto de negocio. Colaboro estrechamente con product managers, ingenieros y stakeholders para asegurar que las decisiones de diseño se traduzcan en resultados medibles — no solo en interfaces pulidas.',
      'about.v1Title': 'Centrado en el Usuario',
      'about.v1Desc': 'Fundamentado en investigación y pruebas de usabilidad — cada decisión refleja comportamientos reales, no suposiciones.',
      'about.v2Title': 'Visión de Negocio',
      'about.v2Desc': 'Conecto las decisiones de diseño con KPIs y objetivos del negocio, asegurando que cada mejora tenga un impacto claro en las métricas que importan.',
      'about.v3Title': 'Pensamiento Sistémico',
      'about.v3Desc': 'Diseño pensando en escala — creando componentes reutilizables, design systems y patrones de interacción que los equipos pueden seguir construyendo.',

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
      'cs.viewCase': 'Explorar Proyecto',
      'cs.nextProject': 'Próximo Proyecto',
      'cs.back': '← Volver al Portafolio',

      // CS1 — Transbank
      'cs1.label': 'Caso de estudio 01',
      'cs1.title': 'Comparador de productos — Transbank',
      'cs1.excerpt': 'Rediseño del Comparador de productos de Transbank para simplificar cómo las empresas evalúan soluciones de pago mediante investigación, estrategia UX y diseño iterativo, mejorando la descubribilidad, reduciendo la carga cognitiva e incrementando la conversión.',
      'cs1.viewCase': 'Ver caso de estudio',
      'cs1.role': 'UX/UI Designer',
      'cs1.timeline': '6 meses',
      'cs1.team': 'UX/UI Designer · UX Researcher · CRO Specialist · Developer',
      'cs1.industry': 'Pagos digitales',
      'cs1.challengeP1': 'El creciente portafolio de soluciones de pago de Transbank dificultaba que las empresas evaluaran y compararan opciones. El comparador existente era denso en información, difícil de navegar y centrado en especificaciones técnicas en lugar de ayudar a las empresas a decidir con confianza.',
      'cs1.challengeP2': 'El rediseño debía simplificar la experiencia de comparación, mejorar la descubribilidad y reducir la fricción que impedía a las empresas seleccionar la solución de pago adecuada.',
      'cs1.learnings': 'Simplificar la experiencia de comparación resultó más efectivo que agregar más información. Las mejoras de mayor impacto vinieron de reestructurar cómo se presentaba el contenido — priorizando lo que los usuarios necesitaban para tomar una decisión.',
      // CS1 body — goals
      'cs1.ug1': 'Evaluar opciones de pago con menos esfuerzo',
      'cs1.ug2': 'Comparar productos sin cambiar de página',
      'cs1.ug3': 'Encontrar la solución adecuada más rápido',
      'cs1.ug4': 'Sentirse seguro antes de elegir',
      'cs1.bg1': 'Mejorar la descubribilidad de los productos',
      'cs1.bg2': 'Reducir la fricción en la toma de decisiones',
      'cs1.bg3': 'Aumentar la conversión en soluciones de pago',
      'cs1.bg4': 'Construir un framework de comparación escalable',
      // CS1 body — process
      'cs1.proc1Title': 'Descubrimiento',
      'cs1.proc1Desc': 'Entrevistas con clientes, analítica conductual y benchmarking competitivo para entender cómo las empresas evaluaban soluciones de pago y dónde aparecía la fricción en el proceso de decisión.',
      'cs1.proc2Title': 'Investigación y Análisis',
      'cs1.proc2Desc': 'Pruebas de usabilidad del comparador existente, análisis de Hotjar y revisión de analytics para identificar puntos de abandono específicos, problemas de descubribilidad y barreras en la toma de decisiones.',
      'cs1.proc3Title': 'Iteraciones de Diseño',
      'cs1.proc3Desc': 'Tres rondas de diseño — desde una tabla de comparación técnica hasta una experiencia orientada a la decisión — cada una validada con hallazgos de investigación y feedback del negocio.',
      'cs1.proc4Title': 'Validación',
      'cs1.proc4Desc': 'Pruebas de usabilidad del rediseño final frente al comparador existente, midiendo mejoras en la completitud de tareas, carga cognitiva y confianza antes de la selección.',
      // CS1 body — results
      'cs1.res1Desc': 'Incremento estimado en la tasa de conversión',
      'cs1.res2Desc': 'Mayor descubribilidad de productos',
      'cs1.res3Desc': 'Más interacción con el Comparador de productos',
      'cs1.res4Num': 'Escalable',
      'cs1.res4Desc': 'Framework de comparación preparado para futuros lanzamientos',

      // CS2 — Próximamente
      'cs2.label': 'Próximamente',
      'cs2.title': 'Próximo Caso de Estudio',
      'cs2.excerpt': 'En desarrollo. Vuelve pronto.',
      'cs2.role': '',
      'cs2.timeline': '',
      'cs2.team': '',
      'cs2.industry': '',

      // CS3 — Próximamente
      'cs3.label': 'Próximamente',
      'cs3.title': 'Próximo Caso de Estudio',
      'cs3.excerpt': 'En desarrollo. Vuelve pronto.',
      'cs3.role': '',
      'cs3.timeline': '',
      'cs3.team': '',
      'cs3.industry': '',

      // Process
      'process.label': 'Metodología',
      'process.title': 'Proceso de Diseño',
      'process.desc': 'Un framework estructurado y adaptable para convertir la ambigüedad en claridad.',
      'process.s1Title': 'Descubrir',
      'process.s1Desc': 'Comprender el espacio del problema mediante investigación, entrevistas con stakeholders y análisis competitivo. Identificar necesidades reales y áreas de oportunidad.',
      'process.s2Title': 'Definir',
      'process.s2Desc': 'Sintetizar hallazgos en insights accionables. Definir métricas de éxito, mapear journeys y alinear al equipo en una dirección compartida.',
      'process.s3Title': 'Idear',
      'process.s3Desc': 'Explorar múltiples direcciones mediante bocetos y wireframes. Divergir antes de converger — la solución correcta raramente es la primera.',
      'process.s4Title': 'Diseñar',
      'process.s4Desc': 'Construir la solución con atención a la jerarquía y consistencia. Crear design systems, patrones de interacción y entregables listos para producción.',
      'process.s5Title': 'Validar',
      'process.s5Desc': 'Testear con usuarios reales. Ejecutar pruebas de usabilidad, medir contra métricas de éxito e iterar hasta alcanzar el estándar de calidad.',
      'process.s6Title': 'Optimizar',
      'process.s6Desc': 'El diseño no termina en el lanzamiento. Monitorear analytics, recopilar feedback y mejorar continuamente la experiencia basándose en datos reales.',

      // Experience
      'exp.label': 'Carrera',
      'exp.title': 'Experiencia<br>Profesional',
      'exp.t1Date': 'Feb 2023 — Presente',
      'exp.t1Role': 'Diseñador UX/UI',
      'exp.t1Desc': 'Responsable del diseño y optimización de experiencias digitales en el ecosistema de Transbank, mejorando la usabilidad, la conversión y la comprensión de productos mediante estrategia UX, investigación, CRO y design systems.',
      'exp.t2Role': 'Diseñador de Motion Graphics',
      'exp.t2Desc': 'Creé contenido digital, animaciones y assets visuales para campañas de marketing, trabajando con múltiples marcas y formatos.',
      'exp.t3Role': 'Diseñador de Motion Graphics',
      'exp.t3Desc': 'Desarrollé motion graphics y assets de marketing digital para múltiples marcas, construyendo una sólida base en comunicación visual y producción digital.',

      // Testimonials
      'test.label': 'Testimonios',
      'test.title': 'Lo que Dicen',
      'test.q1': '“Nicolás no solo diseña interfaces — resuelve problemas de negocio a través del diseño. Su trabajo en nuestra plataforma contribuyó directamente a un aumento del 40% en la retención de usuarios.”',
      'test.q2': '“Uno de los diseñadores más reflexivos con los que he trabajado. Aporta estructura a la ambigüedad y siempre fundamenta sus decisiones en investigación de usuarios y datos.”',
      'test.q3': '“Nicolás transformó nuestro MVP de un prototipo funcional a un producto del que los inversores se enamoraron. Su diseño fue instrumental para cerrar nuestra ronda semilla.”',

      // Contact
      'contact.label': 'Contacto',
      'contact.title': '¿Tienes un desafío de producto?<br>Hablemos.',
      'contact.desc': 'Disponible para conversaciones con equipos de producto, empresas y reclutadores que buscan un diseñador UX/UI que combina investigación, estrategia y diseño para generar resultados medibles.',
      'contact.cta': '<i class="bi bi-envelope me-2"></i>Hablemos de tu proyecto',

      // Footer
      'footer.copy': 'Diseñado y construido por Nicolás Mora',
      'footer.top': 'Volver arriba <i class="bi bi-arrow-up-short"></i>',

      // ── Transbank — Comparador de Productos ─────────────────────
      'tb.chip1': 'Caso de estudio 01',
      'tb.chip2': 'Pagos digitales',
      'tb.heroTitle': 'Comparador<br>de productos',
      'tb.heroLogline': 'Ayudamos a empresas a elegir con confianza rediseñando la experiencia de comparación de productos de Transbank.',
      'tb.heroSummary': 'Transbank rediseñó su Comparador de Productos para simplificar cómo las empresas evalúan soluciones de pago. A través de investigación de usuarios, análisis conductual e iteraciones de diseño, transformamos una herramienta cargada de información en una experiencia orientada a la decisión que mejoró la descubribilidad, redujo la carga cognitiva e incrementó la conversión en un 11.5% estimado.',
      'tb.metaRoleVal': 'Diseñador UX/UI',
      'tb.metaTimelineVal': '6 meses',
      'tb.metaTeamVal': 'Diseñador UX/UI<br>UX Researcher<br>Especialista CRO<br>Developer',
      'tb.metaIndustryVal': 'Pagos digitales',
      'tb.scroll': 'Desplaza',
      // S02
      'tb.s02chip': '02 · De un vistazo',
      'tb.s02stat1title': 'Problema',
      'tb.s02stat1desc': 'Las empresas tenían dificultades para identificar qué solución de pago se adaptaba mejor a sus necesidades. La información del producto estaba fragmentada, era difícil de comparar y estaba sobrecargada de detalles técnicos.',
      'tb.s02stat2title': 'Objetivo',
      'tb.s02stat2desc': 'Rediseñar la experiencia de comparación para ayudar a las empresas a tomar decisiones de compra más rápidas y con mayor confianza, apoyando los objetivos comerciales de Transbank.',
      'tb.s02stat3title': 'Enfoque',
      'tb.s02stat3desc': 'Combinamos entrevistas con usuarios, analítica conductual, insights de Hotjar, benchmarking competitivo, recomendaciones de CRO y diseño UX/UI iterativo.',
      'tb.s02stat4title': 'Impacto',
      'tb.s02stat4desc': 'Entregamos una experiencia de comparación simplificada que mejoró la descubribilidad de productos, redujo la fricción en la toma de decisiones y contribuyó a un incremento estimado del 6% en la conversión.',
      // S03
      'tb.s03p1': 'El creciente portafolio de soluciones de pago de Transbank dificultaba cada vez más que las empresas identificaran el producto que mejor se adaptaba a sus necesidades.',
      'tb.s03p2': 'Aunque había información detallada disponible, estaba distribuida en múltiples páginas y se centraba en especificaciones técnicas en lugar de ayudar a los clientes a tomar decisiones informadas. Esto hacía que comparar alternativas requiriera un esfuerzo innecesario, generando fricción durante la evaluación y reduciendo la confianza antes de la compra.',
      'tb.s03p3': 'El desafío era transformar el Comparador de Productos de un catálogo cargado de información en una herramienta de toma de decisiones que ayudara a las empresas a identificar rápidamente la solución adecuada, apoyando los objetivos comerciales de Transbank.',
      // S04
      'tb.s04name': 'Descubrimiento',
      'tb.s04p1': 'Antes de explorar soluciones, necesitábamos entender cómo las empresas evaluaban los productos de pago, dónde surgía la incertidumbre durante el proceso de decisión y qué información realmente influía en su elección.',
      'tb.s04p2': 'Durante una fase de descubrimiento de tres semanas, combinamos métodos cualitativos y cuantitativos para construir una imagen completa del journey del cliente. Esto incluyó entrevistas con clientes, revisión de analíticas, análisis conductual, benchmarking competitivo y sesiones colaborativas con los equipos de Marketing, CRO y Desarrollo.',
      'tb.s04p3': 'En lugar de validar supuestos, el objetivo era descubrir las barreras reales que impedían a las empresas elegir con confianza la solución de pago adecuada.',
      // S05
      'tb.s05name': 'Investigación',
      'tb.s05p1': 'La fase de investigación nos ayudó a identificar las principales fuentes de fricción en el proceso de selección de productos. Analizamos cómo los usuarios accedían al comparador, cómo interpretaban la información y qué les impedía elegir una solución con confianza.',
      'tb.s05p2': 'Los hallazgos mostraron que los usuarios valoraban la comparación, pero la experiencia necesitaba ser más fácil de encontrar, más fácil de escanear y más orientada a la toma de decisiones. Los clientes no buscaban todos los detalles técnicos de inmediato; necesitaban la información correcta en el momento adecuado.',
      'tb.s05p3': 'Esto transformó el proyecto de un rediseño visual a una evolución del producto enfocada en reducir la incertidumbre.',
      'tb.s05i1title': 'Entrevistas con Clientes',
      'tb.s05i1desc': 'Más de 20 entrevistas nos ayudaron a entender cómo las empresas evaluaban las soluciones de pago y qué información influía en su decisión de compra.',
      'tb.s05i2title': 'Pruebas de Usabilidad',
      'tb.s05i2desc': 'La primera versión rediseñada fue evaluada frente al comparador existente para identificar qué mejoró, qué generó fricción y qué debía cambiar.',
      'tb.s05i3title': 'Análisis Conductual',
      'tb.s05i3desc': 'Analytics y Hotjar nos permitieron revisar patrones de navegación, abandonos, problemas de descubribilidad y comportamiento de interacción a lo largo del journey del producto.',
      'tb.s05i4title': 'Benchmark Competitivo',
      'tb.s05i4desc': 'Revisamos patrones de comparación de productos digitales y e-commerce para identificar formas más claras de presentar las diferencias entre productos.',
      'tb.s05callout': 'La investigación reveló que el problema no era la falta de información.<br>Era la forma en que esa información apoyaba la toma de decisiones.',
      // S06
      'tb.s06name': 'Hallazgos Clave',
      'tb.s06title': 'Nuestra investigación reveló que el mayor desafío no era la cantidad de información disponible, sino cómo esa información apoyaba la toma de decisiones.',
      'tb.s06intro': 'A través de entrevistas, pruebas de usabilidad, analíticas y análisis conductual, emergieron de forma consistente cinco patrones recurrentes.',
      'tb.s06i1title': 'Encontrar el comparador era el primer obstáculo.',
      'tb.s06i1desc': 'Muchos usuarios desconocían que existía una herramienta de comparación o tenían dificultades para encontrarla dentro del sitio web.',
      'tb.s06i1impl': '<span>Implicación de diseño</span> — Aumentar la descubribilidad integrando el comparador en los puntos clave de navegación y los journeys de producto.',
      'tb.s06i2title': 'Más información no mejoraba las decisiones.',
      'tb.s06i2desc': 'Los usuarios valoraban las especificaciones detalladas, pero demasiada información técnica aumentaba la carga cognitiva y ralentizaba la toma de decisiones.',
      'tb.s06i2impl': '<span>Implicación de diseño</span> — Priorizar primero la información esencial y revelar los detalles técnicos de forma progresiva, solo cuando sea necesario.',
      'tb.s06i3title': 'Los clientes pensaban en necesidades de negocio, no en nombres de productos.',
      'tb.s06i3desc': 'Las empresas describían lo que querían lograr en lugar de buscar un terminal de pago específico.',
      'tb.s06i3impl': '<span>Implicación de diseño</span> — Organizar la experiencia en torno a escenarios del cliente, no en un catálogo plano de productos.',
      'tb.s06i4title': 'Comparar productos requería un esfuerzo innecesario.',
      'tb.s06i4desc': 'La información importante estaba distribuida en múltiples páginas, lo que obligaba a los usuarios a recordar detalles al cambiar entre productos.',
      'tb.s06i4impl': '<span>Implicación de diseño</span> — Centralizar la comparación de productos en una experiencia única y coherente.',
      'tb.s06i5title': 'La confianza importaba más que la completitud.',
      'tb.s06i5desc': 'Los usuarios no buscaban convertirse en expertos en el producto; simplemente querían información suficiente para sentirse seguros al elegir la solución adecuada.',
      'tb.s06i5impl': '<span>Implicación de diseño</span> — Diseñar para la toma de decisiones con confianza, no para la densidad de información.',
      'tb.s06callout': 'La investigación cambió fundamentalmente nuestra perspectiva.<br>El objetivo ya no era ayudar a los usuarios a comparar productos.<br>El objetivo pasó a ser ayudar a las empresas a tomar decisiones con confianza.',
      // S07
      'tb.s07name': 'Principios de Diseño',
      'tb.s07intro': 'Los hallazgos de la investigación se tradujeron en un conjunto de principios de diseño que guiaron cada iteración del Comparador de Productos. Estos principios ayudaron al equipo a tomar decisiones de diseño consistentes a lo largo del proyecto.',
      'tb.s07p1title': 'Diseñar para Decidir',
      'tb.s07p1desc': 'Cada pantalla debe ayudar a los usuarios a elegir la solución de pago adecuada, no simplemente presentar información.',
      'tb.s07p2title': 'Reducir la Carga Cognitiva',
      'tb.s07p2desc': 'Priorizar primero la información más relevante y revelar los detalles técnicos de forma progresiva, solo cuando sea necesario.',
      'tb.s07p3title': 'Comparar con Confianza',
      'tb.s07p3desc': 'Permitir a los usuarios evaluar productos en paralelo utilizando criterios claros y consistentes.',
      'tb.s07p4title': 'Acompañar en Cada Etapa del Proceso',
      'tb.s07p4desc': 'Tanto si los usuarios exploraban productos por primera vez como si comparaban sus opciones finales, la experiencia debía ofrecer el nivel de orientación adecuado.',
      'tb.s07p5title': 'Equilibrar Necesidades del Usuario y Objetivos de Negocio',
      'tb.s07p5desc': 'Cada decisión de diseño debía mejorar la confianza del cliente apoyando la descubribilidad del producto y los objetivos comerciales.',
      'tb.s07callout': 'Estos principios se convirtieron en la base de cada iteración, permitiendo que el Comparador de Productos evolucionara de un catálogo sobrecargado de información a una experiencia guiada de toma de decisiones.',
      // S08
      'tb.s08name': 'Evolución del Producto',
      'tb.s08intro': 'En lugar de entregar un único rediseño, el Comparador de Productos evolucionó a través de múltiples iteraciones. Cada versión respondió a hallazgos de investigación, pruebas de usabilidad y feedback del negocio, transformando gradualmente la experiencia de una herramienta de comparación cargada de información a un producto guiado de toma de decisiones.',
      'tb.s08v1label': 'Primera Iteración',
      'tb.s08v1desc': '<strong>Comparación técnica.</strong> La primera versión se centraba en presentar especificaciones técnicas completas en una tabla de comparación tradicional. Aunque era exhaustiva, los usuarios debían analizar grandes cantidades de información antes de identificar la solución de pago más adecuada.',
      'tb.s08v2label': 'Segunda Iteración',
      'tb.s08v2desc': '<strong>Exploración de productos.</strong> La segunda iteración introdujo tarjetas de producto y mejoró la jerarquía visual, facilitando la exploración y reduciendo la complejidad inicial de la experiencia de comparación.',
      'tb.s08v3label': 'Iteración Final',
      'tb.s08v3desc': '<strong>Experiencia orientada a la decisión.</strong> El rediseño final priorizó la toma de decisiones mostrando primero solo la información más relevante, mientras mantenía las especificaciones detalladas accesibles cuando los usuarios las necesitaban.',
      'tb.s08callout': 'Cada iteración respondió a una pregunta diferente.<br>La versión 1 demostró que la comparación era valiosa.<br>La versión 2 mostró dónde aparecía la complejidad.<br>La versión 3 transformó esos aprendizajes en una experiencia más simple y efectiva.',
      // S09
      'tb.s09name': 'Resultados',
      'tb.s09title': 'El rediseño generó mejoras medibles tanto para el negocio como para sus clientes.',
      'tb.s09intro': 'Al simplificar la experiencia de comparación y enfocarse en la toma de decisiones, el Comparador de Productos se volvió más fácil de encontrar, más fácil de entender y más efectivo para apoyar la selección de productos.',
      'tb.s09stat1': 'Incremento estimado en la tasa de conversión',
      'tb.s09stat2': 'Mejor descubribilidad de productos en el sitio web',
      'tb.s09stat3': 'Incremento en el engagement con el Comparador de Productos',
      'tb.s09stat4title': 'Escalable',
      'tb.s09stat4': 'Marco de comparación para futuros lanzamientos de productos',
      'tb.s09o1title': 'Evaluación de Productos Más Ágil',
      'tb.s09o1desc': 'Las empresas podían evaluar y comparar soluciones de pago con mayor rapidez que antes.',
      'tb.s09o2title': 'Menor Carga Cognitiva',
      'tb.s09o2desc': 'La presentación simplificada redujo el esfuerzo mental durante el proceso de comparación.',
      'tb.s09o3title': 'Mayor Confianza',
      'tb.s09o3desc': 'Los usuarios se sentían más seguros al elegir la solución de pago adecuada para su negocio.',
      'tb.s09o4title': 'Navegación Simplificada',
      'tb.s09o4desc': 'Menos pasos innecesarios entre el descubrimiento y la decisión redujo la fricción a lo largo del journey.',
      'tb.s09callout': 'El proyecto demostró que mejorar la toma de decisiones era más valioso que simplemente proporcionar más información. Al reducir la incertidumbre, creamos una mejor experiencia para los usuarios apoyando los objetivos comerciales de Transbank.',
      // S10
      'tb.s10name': 'Entregable Final',
      'tb.s10title': 'Producto Final',
      'tb.s10desc': 'La experiencia final del Comparador de Productos consolidó múltiples hallazgos de investigación, mejoras de usabilidad y objetivos de negocio en una experiencia orientada a la decisión que ayuda a las empresas a comparar soluciones de pago con mayor rapidez y confianza.',
      'tb.s10cta': 'Ver Prototipo Interactivo <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>',
      // S11
      'tb.s11name': 'Impacto & Aprendizajes',
      'tb.s11title': 'Qué cambió',
      'tb.s11intro': 'El rediseño ayudó a reposicionar el Comparador de Productos como una herramienta de apoyo a la decisión, mejorando cómo las empresas descubren, comparan y eligen soluciones de pago de Transbank.',
      'tb.s11impactLabel': 'Impacto',
      'tb.s11i1title': 'Negocio',
      'tb.s11i1desc': 'Se creó un framework de comparación escalable para futuros lanzamientos de productos.',
      'tb.s11i2title': 'Clientes',
      'tb.s11i2desc': 'Se redujo la incertidumbre haciendo que las soluciones de pago fueran más fáciles de entender y comparar.',
      'tb.s11i3title': 'Diseño',
      'tb.s11i3desc': 'La experiencia evolucionó de una comparación cargada de información a un diseño de producto que prioriza la decisión.',
      'tb.s11learningsLabel': 'Aprendizajes',
      'tb.s11l1title': 'La investigación impulsa mejores decisiones.',
      'tb.s11l1desc': 'La investigación temprana con usuarios ayudó al equipo a centrarse en las barreras reales de los clientes en lugar de suposiciones.',
      'tb.s11l2title': 'La iteración crea productos más sólidos.',
      'tb.s11l2desc': 'Cada versión reveló nuevas oportunidades para simplificar la experiencia.',
      'tb.s11l3title': 'La claridad supera a la completitud.',
      'tb.s11l3desc': 'La solución más valiosa no era mostrar más información, sino ayudar a los usuarios a tomar mejores decisiones con menos esfuerzo.',
      'tb.s11callout': 'El mayor aprendizaje: las grandes experiencias de producto se construyen a través de la investigación, la colaboración y la mejora continua.',
      // Next project
      'tb.nextTitle': 'Optimización del Centro de Ayuda',
      'tb.nextDesc': 'Mejorando la autogestión a través de búsqueda, estrategia de contenido y journeys de soporte centrados en el usuario.',
      'tb.nextCta': 'Ver Caso <i class="bi bi-arrow-right" aria-hidden="true"></i>',
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