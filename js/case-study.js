document.addEventListener('DOMContentLoaded', () => {
  // ── Reading Progress Bar ──
  const bar = document.getElementById('csProgressBar');
  if (bar) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ── Scroll Cue — fade out after first scroll ──
  const scrollHint = document.querySelector('.cs-scroll-hint');
  if (scrollHint) {
    const hide = () => {
      if (window.scrollY > 80) {
        scrollHint.style.opacity = '0';
        scrollHint.style.pointerEvents = 'none';
        window.removeEventListener('scroll', hide);
      }
    };
    window.addEventListener('scroll', hide, { passive: true });
  }
});
