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
      'cs.pagerPrev': '← Previous Project',
      'cs.pagerNext': 'Next Project →',
      'cs.boardHint': 'Scroll to zoom · Drag to pan',
      'cs.boardHintDrag': 'Drag to pan · Use the mouse wheel to zoom',

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
      'cs2.label': 'Case Study 02',
      'cs2.title': 'Mi Belenus — Belenus Clinic',
      'cs2.excerpt': "Designed a mobile app that turned Belenus Clinic's manual, phone-based booking process into a guided self-service experience — from treatment booking to session history and gifting.",
      'cs2.viewCase': 'View Case Study',
      'cs2.role': 'UX/UI Designer',
      'cs2.timeline': '3 months',
      'cs2.team': '2 UX/UI Designers',
      'cs2.industry': 'Healthcare / Aesthetic Clinics',
      'cs2.challengeP1': "Belenus Clinic offered laser and aesthetic treatments across multiple locations, but booking a session depended entirely on phone calls or WhatsApp messages handled by clinic staff, with no way for patients to check availability or track their treatments.",
      'cs2.challengeP2': "The project needed a mobile application that gave patients full control over booking, confirming, tracking and gifting sessions — without adding friction to the clinic's existing operations.",
      'cs2.learnings': 'Designing Mi Belenus from scratch showed that mapping the full manual process before touching any UI was the real design work — simplicity and clear next steps mattered more than showing every clinical detail.',
      // CS2 body — goals
      'cs2.ug1': 'Book a treatment without calling the clinic',
      'cs2.ug2': 'Check session history and remaining treatments',
      'cs2.ug3': 'Confirm or cancel an appointment in a few taps',
      'cs2.ug4': 'Gift a session to someone else',
      'cs2.bg1': 'Reduce manual booking workload for clinic staff',
      'cs2.bg2': "Give patients self-service access to their treatments",
      'cs2.bg3': 'Support gifted sessions as a growth channel',
      'cs2.bg4': 'Build a scalable foundation for future digital services',
      // CS2 body — process
      'cs2.proc1Title': 'Discovery',
      'cs2.proc1Desc': 'Interviews with clinic staff and administrators to map the existing manual booking process and identify recurring friction points.',
      'cs2.proc2Title': 'Flow Mapping',
      'cs2.proc2Desc': 'A complete wireflow covering every path through the app — booking, confirmation, cancellation, history and gifting.',
      'cs2.proc3Title': 'UI Design',
      'cs2.proc3Desc': 'A calm, trustworthy visual system built on a documented color and type system, applied consistently across the full flow.',
      'cs2.proc4Title': 'Prototype',
      'cs2.proc4Desc': 'A connected, testable prototype linking every screen from onboarding to treatment confirmation.',
      // CS2 body — deliverables (shown in the "results" grid)
      'cs2.res1Num': 'Booking',
      'cs2.res1Desc': 'Complete end-to-end appointment flow',
      'cs2.res2Num': 'History',
      'cs2.res2Desc': 'Session tracking and treatment management',
      'cs2.res3Num': 'Gifting',
      'cs2.res3Desc': 'Built-in flow to send sessions to someone else',
      'cs2.res4Num': 'Scalable',
      'cs2.res4Desc': 'Design foundation ready for future services',

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

      // ── Mi Belenus — Belenus Clinic ──────────────────────────────
      'mb.chip1': 'Case Study 02',
      'mb.chip2': 'Healthcare / Aesthetic Clinics',
      'mb.heroTitle': 'Mi Belenus',
      'mb.heroLogline': 'Creating a mobile app that streamlined appointment booking and improved access to aesthetic treatments.',
      'mb.heroSummary': 'Mi Belenus was designed as a mobile application that centralizes appointment booking, treatment management and customer services into a single digital experience. The project focused on simplifying complex user journeys while creating a scalable foundation for future digital services.',
      'mb.metaRoleVal': 'UX/UI Designer',
      'mb.metaTimelineVal': '3 months',
      'mb.metaTeamVal': '2 UX/UI Designers',
      'mb.metaIndustryVal': 'Healthcare / Aesthetic Clinics',
      'mb.scroll': 'Scroll',
      // S02
      'mb.s02chip': '02 · At a glance',
      'mb.s02stat1title': 'Problem',
      'mb.s02stat1desc': 'Belenus Clinic managed appointment booking manually through phone calls and WhatsApp, making it difficult for patients to check availability, manage sessions or keep track of gifted treatments.',
      'mb.s02stat2title': 'Objective',
      'mb.s02stat2desc': 'Design a mobile application that let patients book, confirm and manage their treatments independently, while building a scalable foundation for future digital services.',
      'mb.s02stat3title': 'Approach',
      'mb.s02stat3desc': 'Combined stakeholder interviews, end-to-end flow mapping and iterative UI design to turn a fragmented manual process into a guided, self-service mobile experience.',
      'mb.s02stat4title': 'Deliverable',
      'mb.s02stat4desc': 'A complete, development-ready booking application — from onboarding to treatment confirmation — built on a scalable design system.',
      // S03 — Challenge
      'mb.s03p1': 'Belenus Clinic offered laser and aesthetic treatments across multiple locations, but booking a session depended entirely on phone calls or WhatsApp messages handled by clinic staff.',
      'mb.s03p2': "Patients had no way to check real-time availability, confirm or cancel a session, track how many treatments they had left, or gift a session to someone else. Every request added manual work for the clinic team and uncertainty for the patient.",
      'mb.s03p3': "The challenge was to design a mobile application that gave patients full control over their treatments — booking, confirming, tracking and gifting sessions — without adding friction to the clinic's existing operations.",
      // S04 — Discovery
      'mb.s04name': 'Discovery',
      'mb.s04p1': 'Before designing any screen, we needed to understand the full manual booking process — how appointments were requested, confirmed and tracked, and where patients and staff experienced the most friction.',
      'mb.s04p2': "Working closely with Belenus Clinic's team, we mapped the existing booking journey end-to-end and translated it into a detailed wireflow covering every state: onboarding, treatment selection, scheduling, confirmation, cancellation, session history and gifting.",
      'mb.s04p3': 'This discovery phase became the backbone of the project — every screen in the final application was traced back to a specific step in that flow.',
      // S05 — Research
      'mb.s05name': 'Research',
      'mb.s05p1': "The research phase focused on translating an informal, person-dependent process into a structured digital flow that patients could follow on their own.",
      'mb.s05p2': "We found that patients didn't need every clinical detail up front — they needed clear next steps: which treatments were available, when, and how to confirm or change a booking without calling the clinic.",
      'mb.s05p3': "This reframed the project from digitizing a form into designing a guided, self-service booking journey.",
      'mb.s05i1title': 'Stakeholder Interviews',
      'mb.s05i1desc': 'Sessions with clinic staff and administrators surfaced the most common booking requests, cancellations and exceptions handled manually every day.',
      'mb.s05i2title': 'Flow Mapping',
      'mb.s05i2desc': 'We mapped every step of the existing booking process, from first contact to session completion, to identify what could be self-served in-app.',
      'mb.s05i3title': 'Competitive Benchmark',
      'mb.s05i3desc': 'We reviewed booking patterns from healthcare and wellness apps to identify familiar, trustworthy interaction models for scheduling and cancellations.',
      'mb.s05i4title': 'Content & Edge Cases',
      'mb.s05i4desc': 'We catalogued edge cases — expired sessions, gifted treatments, multi-clinic preferences — that the flow needed to support from day one.',
      'mb.s05callout': "The real challenge wasn't building a booking form.<br>It was replacing a phone call with a flow patients could trust.",
      // S06 — User Flow
      'mb.s06name': 'User Flow',
      'mb.s06p1': 'We translated the discovery findings into a complete wireflow covering every path through the application: authentication and registration, treatment booking, confirmation and cancellation, session history, gifting and account management.',
      'mb.s06p2': 'Mapping the flow before designing any interface let the team validate edge cases early — like what happens when a session expires, or when a patient wants to gift a treatment to someone who isn\'t registered yet — without the cost of reworking finished screens.',
      'mb.s06p3': 'This flow became the shared reference for design and development throughout the project, keeping every screen traceable back to a specific step in the patient journey.',
      // S07 — Visual Design
      'mb.s07name': 'Visual Design',
      'mb.s07intro': 'With the flow validated, we defined a visual language built around clarity and trust — an important quality for a healthcare-adjacent product where patients are managing bookings and personal data.',
      'mb.s07p1title': "Guide, Don't Overwhelm",
      'mb.s07p1desc': 'Every screen surfaces one clear next action, keeping treatment and scheduling details progressive rather than upfront.',
      'mb.s07p2title': 'Consistent Patterns',
      'mb.s07p2desc': 'Booking, confirming and cancelling all follow the same visual and interaction pattern, so patients only need to learn it once.',
      'mb.s07p3title': 'Built for Trust',
      'mb.s07p3desc': 'A calm color palette, clear typography and predictable navigation reinforce confidence in a healthcare context.',
      'mb.s07p4title': 'Ready to Scale',
      'mb.s07p4desc': 'Reusable components and a documented color and type system allow the product to grow with new treatments and services.',
      'mb.s07panel1label': 'Brand & Design System',
      'mb.s07panel1desc': 'The palette pairs a soft rose primary with a deep navy accent, paired with Roboto and Rubik for a calm, trustworthy feel appropriate for a healthcare product.',
      'mb.s07panel2label': 'Onboarding & Access',
      'mb.s07panel2desc': "A short, illustrated onboarding introduces the app's core value — free gifted sessions and always-on access to the clinic — before asking patients to register.",
      'mb.s07panel3label': 'Booking & Scheduling',
      'mb.s07panel3desc': 'The booking flow surfaces treatment details and available time slots first, with a calendar view that makes availability immediately clear.',
      'mb.s07callout': 'The visual system had to do two jobs at once: feel as calm and reassuring as the clinic itself, and stay simple enough to scale to every future treatment.',
      // S08 — Prototype
      'mb.s08name': 'Prototype',
      'mb.s08title': 'A connected, testable experience',
      'mb.s08intro': 'The final prototype connects every screen mapped in the wireflow into a working, testable experience — from onboarding to treatment confirmation.',
      'mb.s08o1title': 'Self-Service Booking',
      'mb.s08o1desc': 'Patients can check availability and confirm a session end-to-end without contacting the clinic.',
      'mb.s08o2title': 'Clear Session Tracking',
      'mb.s08o2desc': "Active, upcoming and expired sessions are always visible, reducing uncertainty about what's left to use.",
      'mb.s08o3title': 'Built-In Gifting',
      'mb.s08o3desc': 'Patients can send a treatment session to someone else directly from the app.',
      'mb.s08o4title': 'Consistent Navigation',
      'mb.s08o4desc': 'A persistent bottom navigation keeps booking, profile, contact and gifting always one tap away.',
      // S09 — Deliverables
      'mb.s09name': 'Deliverables',
      'mb.s09title': 'A complete, development-ready mobile experience',
      'mb.s09intro': 'Instead of a single feature, the project shipped as a full patient journey — ready for engineering handoff and built to support future treatments and services.',
      'mb.s09d1title': 'Complete Booking Flow',
      'mb.s09d1desc': 'End-to-end appointment booking — from treatment selection to confirmation — fully mapped and designed for self-service.',
      'mb.s09d2title': 'Treatment Management',
      'mb.s09d2desc': 'Patients can view, add or remove treatments from a booking before confirming a session.',
      'mb.s09d3title': 'Session History',
      'mb.s09d3desc': 'A dedicated history view shows completed, upcoming and cancelled sessions at a glance.',
      'mb.s09d4title': 'Gift Sessions',
      'mb.s09d4desc': 'A built-in flow lets patients send a treatment session to someone else directly from the app.',
      'mb.s09d5title': 'Scalable Design Foundation',
      'mb.s09d5desc': 'A documented component library and flow architecture ready to support new treatments, clinics and services.',
      'mb.s09callout': 'Instead of a single feature, the project delivered a complete, reusable foundation the clinic can keep building on.',
      // S10 — Learnings
      'mb.s10name': 'Learnings',
      'mb.s10title': 'What we took away',
      'mb.s10intro': 'Designing Mi Belenus from scratch — with no existing digital product to reference — reshaped how we approached flow, scope and trust.',
      'mb.s10l1title': 'Map before you design.',
      'mb.s10l1desc': 'Documenting the full flow before touching UI prevented costly rework later and kept every screen grounded in a real use case.',
      'mb.s10l2title': 'Simplicity builds trust.',
      'mb.s10l2desc': 'In a healthcare-adjacent product, reducing steps and surfacing clear next actions mattered more than showing every detail.',
      'mb.s10l3title': 'Design for the whole lifecycle.',
      'mb.s10l3desc': "Treatments don't end at booking — planning for session history, expiration and gifting from the start avoided gaps later.",
      'mb.s10callout': 'The biggest takeaway: a booking flow is only as good as the process it replaces — understanding that process was the real design work.',
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
      'cs.pagerPrev': '← Proyecto Anterior',
      'cs.pagerNext': 'Próximo Proyecto →',
      'cs.boardHint': 'Desplaza para hacer zoom · Arrastra para mover',
      'cs.boardHintDrag': 'Arrastra para desplazarte · Usa la rueda para hacer zoom',

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
      'cs2.label': 'Caso de estudio 02',
      'cs2.title': 'Mi Belenus — Clínica Belenus',
      'cs2.excerpt': 'Diseño de una app móvil que transformó el proceso manual y telefónico de reservas de Clínica Belenus en una experiencia guiada de autogestión —desde la reserva de tratamientos hasta el historial de sesiones y el regalo de sesiones.',
      'cs2.viewCase': 'Ver caso de estudio',
      'cs2.role': 'Diseñador UX/UI',
      'cs2.timeline': '3 meses',
      'cs2.team': '2 Diseñadores UX/UI',
      'cs2.industry': 'Salud / Clínicas estéticas',
      'cs2.challengeP1': 'Clínica Belenus ofrecía tratamientos láser y estéticos en múltiples sucursales, pero reservar una sesión dependía completamente de llamadas telefónicas o mensajes de WhatsApp gestionados por el personal de la clínica, sin que los pacientes pudieran consultar disponibilidad ni hacer seguimiento a sus tratamientos.',
      'cs2.challengeP2': 'El proyecto necesitaba una aplicación móvil que diera a los pacientes control total sobre reservar, confirmar, hacer seguimiento y regalar sesiones, sin agregar fricción a la operación existente de la clínica.',
      'cs2.learnings': 'Diseñar Mi Belenus desde cero mostró que mapear el proceso manual completo antes de tocar la UI fue el verdadero trabajo de diseño: la simplicidad y los pasos siguientes claros importaron más que mostrar cada detalle clínico.',
      // CS2 body — goals
      'cs2.ug1': 'Reservar un tratamiento sin llamar a la clínica',
      'cs2.ug2': 'Revisar el historial de sesiones y tratamientos restantes',
      'cs2.ug3': 'Confirmar o anular una cita en pocos toques',
      'cs2.ug4': 'Regalar una sesión a otra persona',
      'cs2.bg1': 'Reducir la carga de trabajo manual de reservas para el personal',
      'cs2.bg2': 'Dar a los pacientes acceso de autogestión a sus tratamientos',
      'cs2.bg3': 'Impulsar el regalo de sesiones como canal de crecimiento',
      'cs2.bg4': 'Construir una base escalable para futuros servicios digitales',
      // CS2 body — process
      'cs2.proc1Title': 'Descubrimiento',
      'cs2.proc1Desc': 'Entrevistas con el personal y administradores de la clínica para mapear el proceso de reserva manual existente e identificar puntos de fricción recurrentes.',
      'cs2.proc2Title': 'Mapeo de Flujo',
      'cs2.proc2Desc': 'Un wireflow completo que cubre cada camino dentro de la app: reserva, confirmación, anulación, historial y regalo de sesiones.',
      'cs2.proc3Title': 'Diseño UI',
      'cs2.proc3Desc': 'Un sistema visual sereno y confiable construido sobre un sistema documentado de color y tipografía, aplicado de forma consistente en todo el flujo.',
      'cs2.proc4Title': 'Prototipo',
      'cs2.proc4Desc': 'Un prototipo conectado y evaluable que vincula cada pantalla desde el onboarding hasta la confirmación del tratamiento.',
      // CS2 body — deliverables (mostrados en la grilla de "resultados")
      'cs2.res1Num': 'Reserva',
      'cs2.res1Desc': 'Flujo completo de reserva de citas de principio a fin',
      'cs2.res2Num': 'Historial',
      'cs2.res2Desc': 'Seguimiento de sesiones y gestión de tratamientos',
      'cs2.res3Num': 'Regalo',
      'cs2.res3Desc': 'Flujo integrado para enviar sesiones a otra persona',
      'cs2.res4Num': 'Escalable',
      'cs2.res4Desc': 'Base de diseño preparada para futuros servicios',

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

      // ── Mi Belenus — Clínica Belenus ─────────────────────────────
      'mb.chip1': 'Caso de estudio 02',
      'mb.chip2': 'Salud / Clínicas estéticas',
      'mb.heroTitle': 'Mi Belenus',
      'mb.heroLogline': 'Creando una aplicación móvil que simplificó la reserva de tratamientos y mejoró el acceso a los servicios de estética.',
      'mb.heroSummary': 'Mi Belenus fue concebida como una aplicación móvil que centraliza la reserva de tratamientos, la gestión de sesiones y los servicios para pacientes en una sola experiencia digital. El proyecto se enfocó en simplificar recorridos complejos y construir una base escalable para futuros servicios digitales.',
      'mb.metaRoleVal': 'Diseñador UX/UI',
      'mb.metaTimelineVal': '3 meses',
      'mb.metaTeamVal': '2 Diseñadores UX/UI',
      'mb.metaIndustryVal': 'Salud / Clínicas estéticas',
      'mb.scroll': 'Desplaza',
      // S02
      'mb.s02chip': '02 · De un vistazo',
      'mb.s02stat1title': 'Problema',
      'mb.s02stat1desc': 'Clínica Belenus gestionaba la reserva de citas de forma manual, por teléfono y WhatsApp, lo que dificultaba que los pacientes consultaran disponibilidad, gestionaran sus sesiones o hicieran seguimiento a tratamientos regalados.',
      'mb.s02stat2title': 'Objetivo',
      'mb.s02stat2desc': 'Diseñar una aplicación móvil que permitiera a los pacientes reservar, confirmar y gestionar sus tratamientos de forma independiente, construyendo a la vez una base escalable para futuros servicios digitales.',
      'mb.s02stat3title': 'Enfoque',
      'mb.s02stat3desc': 'Combinamos entrevistas con stakeholders, mapeo de flujo de principio a fin y diseño UI iterativo para transformar un proceso manual y fragmentado en una experiencia móvil guiada de autogestión.',
      'mb.s02stat4title': 'Entregable',
      'mb.s02stat4desc': 'Una aplicación de reservas completa y lista para desarrollo —desde el onboarding hasta la confirmación del tratamiento— construida sobre un sistema de diseño escalable.',
      // S03 — Desafío
      'mb.s03p1': 'Clínica Belenus ofrecía tratamientos láser y estéticos en múltiples sucursales, pero reservar una sesión dependía completamente de llamadas telefónicas o mensajes de WhatsApp gestionados por el personal de la clínica.',
      'mb.s03p2': 'Los pacientes no tenían forma de consultar disponibilidad en tiempo real, confirmar o anular una sesión, revisar cuántos tratamientos les quedaban, o regalar una sesión a otra persona. Cada solicitud generaba trabajo manual para el equipo de la clínica e incertidumbre para el paciente.',
      'mb.s03p3': 'El desafío era diseñar una aplicación móvil que diera a los pacientes control total sobre sus tratamientos —reservar, confirmar, hacer seguimiento y regalar sesiones— sin agregar fricción a la operación existente de la clínica.',
      // S04 — Descubrimiento
      'mb.s04name': 'Descubrimiento',
      'mb.s04p1': 'Antes de diseñar cualquier pantalla, necesitábamos entender el proceso completo de reserva manual: cómo se solicitaban, confirmaban y hacían seguimiento las citas, y dónde experimentaban más fricción pacientes y personal.',
      'mb.s04p2': 'Trabajando junto al equipo de Clínica Belenus, mapeamos de principio a fin el recorrido de reserva existente y lo tradujimos en un wireflow detallado que cubría cada estado: onboarding, selección de tratamiento, agendamiento, confirmación, anulación, historial de sesiones y regalo de sesiones.',
      'mb.s04p3': 'Esta fase de descubrimiento se convirtió en la columna vertebral del proyecto: cada pantalla de la aplicación final se pudo trazar hasta un paso específico de ese flujo.',
      // S05 — Investigación
      'mb.s05name': 'Investigación',
      'mb.s05p1': 'La fase de investigación se enfocó en traducir un proceso informal y dependiente de una persona en un flujo digital estructurado que los pacientes pudieran seguir por sí solos.',
      'mb.s05p2': 'Descubrimos que los pacientes no necesitaban todos los detalles clínicos de inmediato; necesitaban pasos siguientes claros: qué tratamientos estaban disponibles, cuándo, y cómo confirmar o cambiar una reserva sin llamar a la clínica.',
      'mb.s05p3': 'Esto redefinió el proyecto: de digitalizar un formulario a diseñar un recorrido de reserva guiado y de autogestión.',
      'mb.s05i1title': 'Entrevistas con Stakeholders',
      'mb.s05i1desc': 'Sesiones con el personal y administradores de la clínica revelaron las solicitudes de reserva, anulaciones y excepciones más comunes gestionadas manualmente cada día.',
      'mb.s05i2title': 'Mapeo de Flujo',
      'mb.s05i2desc': 'Mapeamos cada paso del proceso de reserva existente, desde el primer contacto hasta la finalización de la sesión, para identificar qué podía autogestionarse en la app.',
      'mb.s05i3title': 'Benchmark Competitivo',
      'mb.s05i3desc': 'Revisamos patrones de reserva de aplicaciones de salud y bienestar para identificar modelos de interacción familiares y confiables para agendar y anular.',
      'mb.s05i4title': 'Contenido y Casos Límite',
      'mb.s05i4desc': 'Catalogamos casos límite —sesiones vencidas, tratamientos regalados, preferencias de múltiples clínicas— que el flujo debía soportar desde el primer día.',
      'mb.s05callout': 'El verdadero desafío no era construir un formulario de reserva.<br>Era reemplazar una llamada telefónica por un flujo en el que los pacientes pudieran confiar.',
      // S06 — Flujo de Usuario
      'mb.s06name': 'Flujo de Usuario',
      'mb.s06p1': 'Tradujimos los hallazgos de la investigación en un wireflow completo que cubría cada camino dentro de la aplicación: autenticación y registro, reserva de tratamientos, confirmación y anulación, historial de sesiones, regalo de sesiones y gestión de cuenta.',
      'mb.s06p2': 'Mapear el flujo antes de diseñar cualquier interfaz permitió al equipo validar casos límite desde temprano —como qué ocurre cuando una sesión vence, o cuando un paciente quiere regalar un tratamiento a alguien que aún no está registrado— sin el costo de rehacer pantallas ya terminadas.',
      'mb.s06p3': 'Este flujo se convirtió en la referencia compartida para diseño y desarrollo durante todo el proyecto, manteniendo cada pantalla trazable hasta un paso específico del recorrido del paciente.',
      // S07 — Diseño Visual
      'mb.s07name': 'Diseño Visual',
      'mb.s07intro': 'Con el flujo validado, definimos un lenguaje visual construido en torno a la claridad y la confianza —una cualidad importante para un producto vinculado a la salud, donde los pacientes gestionan reservas y datos personales.',
      'mb.s07p1title': 'Guiar, no Abrumar',
      'mb.s07p1desc': 'Cada pantalla presenta una única acción clara a seguir, manteniendo los detalles de tratamientos y horarios de forma progresiva en lugar de mostrarlos todos de inmediato.',
      'mb.s07p2title': 'Patrones Consistentes',
      'mb.s07p2desc': 'Reservar, confirmar y anular siguen el mismo patrón visual y de interacción, de modo que los pacientes solo necesitan aprenderlo una vez.',
      'mb.s07p3title': 'Diseñado para Generar Confianza',
      'mb.s07p3desc': 'Una paleta de colores serena, tipografía clara y una navegación predecible refuerzan la confianza en un contexto de salud.',
      'mb.s07p4title': 'Preparado para Escalar',
      'mb.s07p4desc': 'Componentes reutilizables y un sistema documentado de color y tipografía permiten que el producto crezca con nuevos tratamientos y servicios.',
      'mb.s07panel1label': 'Marca y Sistema de Diseño',
      'mb.s07panel1desc': 'La paleta combina un rosa principal suave con un acento azul marino profundo, junto a Roboto y Rubik, para transmitir una sensación serena y confiable, apropiada para un producto de salud.',
      'mb.s07panel2label': 'Onboarding y Acceso',
      'mb.s07panel2desc': 'Un onboarding breve e ilustrado presenta el valor central de la app —sesiones gratis regaladas y acceso permanente a la clínica— antes de pedirle al paciente que se registre.',
      'mb.s07panel3label': 'Reserva y Agendamiento',
      'mb.s07panel3desc': 'El flujo de reserva muestra primero los detalles del tratamiento y los horarios disponibles, con una vista de calendario que deja la disponibilidad clara de inmediato.',
      'mb.s07callout': 'El sistema visual debía cumplir dos funciones a la vez: sentirse tan sereno y tranquilizador como la propia clínica, y ser lo suficientemente simple como para escalar a cada futuro tratamiento.',
      // S08 — Prototipo
      'mb.s08name': 'Prototipo',
      'mb.s08title': 'Una experiencia conectada y evaluable',
      'mb.s08intro': 'El prototipo final conecta cada pantalla mapeada en el wireflow en una experiencia funcional y evaluable —desde el onboarding hasta la confirmación del tratamiento.',
      'mb.s08o1title': 'Reserva de Autogestión',
      'mb.s08o1desc': 'Los pacientes pueden consultar disponibilidad y confirmar una sesión de principio a fin sin contactar a la clínica.',
      'mb.s08o2title': 'Seguimiento Claro de Sesiones',
      'mb.s08o2desc': 'Las sesiones activas, próximas y vencidas siempre están visibles, reduciendo la incertidumbre sobre lo que queda por usar.',
      'mb.s08o3title': 'Regalo de Sesiones Integrado',
      'mb.s08o3desc': 'Los pacientes pueden enviar una sesión de tratamiento a otra persona directamente desde la app.',
      'mb.s08o4title': 'Navegación Consistente',
      'mb.s08o4desc': 'Una navegación inferior persistente mantiene reservar, perfil, contacto y regalar siempre a un toque de distancia.',
      // S09 — Entregables
      'mb.s09name': 'Entregables',
      'mb.s09title': 'Una experiencia móvil completa y lista para desarrollo',
      'mb.s09intro': 'En lugar de una sola funcionalidad, el proyecto se entregó como un recorrido de paciente completo —listo para el traspaso a desarrollo y preparado para futuros tratamientos y servicios.',
      'mb.s09d1title': 'Flujo de Reserva Completo',
      'mb.s09d1desc': 'Reserva de citas de principio a fin —desde la selección del tratamiento hasta la confirmación— completamente mapeada y diseñada para autogestión.',
      'mb.s09d2title': 'Gestión de Tratamientos',
      'mb.s09d2desc': 'Los pacientes pueden ver, agregar o quitar tratamientos de una reserva antes de confirmar una sesión.',
      'mb.s09d3title': 'Historial de Sesiones',
      'mb.s09d3desc': 'Una vista de historial dedicada muestra de un vistazo las sesiones completadas, próximas y anuladas.',
      'mb.s09d4title': 'Regalo de Sesiones',
      'mb.s09d4desc': 'Un flujo integrado permite a los pacientes enviar una sesión de tratamiento a otra persona directamente desde la app.',
      'mb.s09d5title': 'Base de Diseño Escalable',
      'mb.s09d5desc': 'Una librería de componentes documentada y una arquitectura de flujo preparadas para soportar nuevos tratamientos, clínicas y servicios.',
      'mb.s09callout': 'En lugar de una sola funcionalidad, el proyecto entregó una base completa y reutilizable sobre la cual la clínica puede seguir construyendo.',
      // S10 — Aprendizajes
      'mb.s10name': 'Aprendizajes',
      'mb.s10title': 'Lo que nos llevamos',
      'mb.s10intro': 'Diseñar Mi Belenus desde cero —sin un producto digital existente como referencia— transformó nuestra forma de abordar el flujo, el alcance y la confianza.',
      'mb.s10l1title': 'Mapea antes de diseñar.',
      'mb.s10l1desc': 'Documentar el flujo completo antes de tocar la UI evitó retrabajo costoso más adelante y mantuvo cada pantalla fundamentada en un caso de uso real.',
      'mb.s10l2title': 'La simplicidad genera confianza.',
      'mb.s10l2desc': 'En un producto vinculado a la salud, reducir pasos y mostrar acciones claras importó más que exhibir cada detalle.',
      'mb.s10l3title': 'Diseña para todo el ciclo de vida.',
      'mb.s10l3desc': 'Los tratamientos no terminan al reservar: planificar desde el inicio el historial de sesiones, el vencimiento y el regalo de sesiones evitó vacíos más adelante.',
      'mb.s10callout': 'El mayor aprendizaje: un flujo de reserva es tan bueno como el proceso que reemplaza —entender ese proceso fue el verdadero trabajo de diseño.',
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