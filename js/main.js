document.addEventListener('DOMContentLoaded', () => {
  // ── Scroll Reveal ──
  const reveals = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.style.animationDelay || '0s';
          entry.target.style.transitionDelay = delay;
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  reveals.forEach((el) => revealObserver.observe(el));

  // ── Navbar scroll state ──
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const NAV_OFFSET = 90; // fixed nav height + small buffer

  const activateNav = () => {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + scrollY;
      if (scrollY >= sectionTop - NAV_OFFSET) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  };

  window.addEventListener('scroll', activateNav, { passive: true });
  activateNav();

  // ── Close mobile nav on link click ──
  const navCollapse = document.getElementById('navbarNav');
  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse, {
    toggle: false,
  });
  document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        bsCollapse.hide();
      }
    });
  });
});