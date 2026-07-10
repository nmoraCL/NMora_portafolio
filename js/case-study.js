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

  // ── Zoom/Pan Board — pinch, wheel, drag exploration of a large image ──
  document.querySelectorAll('.cs-board').forEach(initBoard);
});

function initBoard(board) {
  const viewport = board.querySelector('.cs-board-viewport');
  const img = board.querySelector('.cs-board-img');
  const hint = board.querySelector('.cs-board-hint');
  if (!viewport || !img) return;

  const MAX_SCALE_FACTOR = 5; // multiple of the "fit" scale
  let fitScale = 1;
  let minScale = 1;
  let maxScale = 5;
  let scale = 1;
  let x = 0;
  let y = 0;
  let ready = false;

  const pointers = new Map();
  let dragLast = null;
  let pinchStartDist = 0;
  let pinchStartScale = 1;

  function clampPan(nx, ny, s) {
    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    const iw = img.naturalWidth * s;
    const ih = img.naturalHeight * s;
    const minX = Math.min(0, vw - iw);
    const minY = Math.min(0, vh - ih);
    return {
      x: Math.max(minX, Math.min(0, nx)),
      y: Math.max(minY, Math.min(0, ny)),
    };
  }

  function apply() {
    img.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
  }

  function setScaleAt(newScale, cx, cy) {
    newScale = Math.max(minScale, Math.min(maxScale, newScale));
    const worldX = (cx - x) / scale;
    const worldY = (cy - y) / scale;
    const nx = cx - worldX * newScale;
    const ny = cy - worldY * newScale;
    scale = newScale;
    const clamped = clampPan(nx, ny, scale);
    x = clamped.x;
    y = clamped.y;
    apply();
  }

  function reset() {
    scale = fitScale;
    const vw = viewport.clientWidth;
    const iw = img.naturalWidth * scale;
    x = Math.min(0, (vw - iw) / 2);
    y = 0;
    apply();
  }

  function fadeHint() {
    if (hint) hint.classList.add('is-hidden');
  }

  function setup() {
    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    if (!vw || !vh || !img.naturalWidth) return;
    fitScale = vw / img.naturalWidth;
    minScale = fitScale;
    maxScale = fitScale * MAX_SCALE_FACTOR;
    ready = true;
    reset();
  }

  if (img.complete && img.naturalWidth) {
    setup();
  } else {
    img.addEventListener('load', setup, { once: true });
  }

  window.addEventListener('resize', () => {
    if (ready) setup();
  }, { passive: true });

  // Wheel — zoom centered on cursor
  viewport.addEventListener('wheel', (e) => {
    if (!ready) return;
    e.preventDefault();
    fadeHint();
    const rect = viewport.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const factor = Math.exp(-e.deltaY * 0.0016);
    setScaleAt(scale * factor, cx, cy);
  }, { passive: false });

  // Pointer drag — pan (and pinch when a 2nd pointer joins)
  viewport.addEventListener('pointerdown', (e) => {
    if (!ready) return;
    viewport.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    fadeHint();
    if (pointers.size === 1) {
      dragLast = { x: e.clientX, y: e.clientY };
      viewport.classList.add('is-grabbing');
    } else if (pointers.size === 2) {
      const pts = Array.from(pointers.values());
      pinchStartDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
      pinchStartScale = scale;
    }
  });

  viewport.addEventListener('pointermove', (e) => {
    if (!ready || !pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.size === 2) {
      const pts = Array.from(pointers.values());
      const rect = viewport.getBoundingClientRect();
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
      const midX = (pts[0].x + pts[1].x) / 2 - rect.left;
      const midY = (pts[0].y + pts[1].y) / 2 - rect.top;
      setScaleAt(pinchStartScale * (dist / pinchStartDist), midX, midY);
    } else if (pointers.size === 1 && dragLast) {
      const dx = e.clientX - dragLast.x;
      const dy = e.clientY - dragLast.y;
      dragLast = { x: e.clientX, y: e.clientY };
      const clamped = clampPan(x + dx, y + dy, scale);
      x = clamped.x;
      y = clamped.y;
      apply();
    }
  });

  function endPointer(e) {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinchStartDist = 0;
    if (pointers.size === 0) {
      dragLast = null;
      viewport.classList.remove('is-grabbing');
    } else if (pointers.size === 1) {
      const [remaining] = pointers.values();
      dragLast = { x: remaining.x, y: remaining.y };
    }
  }
  viewport.addEventListener('pointerup', endPointer);
  viewport.addEventListener('pointercancel', endPointer);
  viewport.addEventListener('pointerleave', (e) => {
    if (pointers.size === 1) endPointer(e);
  });

  // Double-click / double-tap — toggle between fit and 2.5x
  viewport.addEventListener('dblclick', (e) => {
    if (!ready) return;
    const rect = viewport.getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    fadeHint();
    const target = scale > fitScale * 1.2 ? fitScale : Math.min(maxScale, fitScale * 2.5);
    setScaleAt(target, cx, cy);
  });

  // Toolbar buttons
  const zoomIn = board.querySelector('[data-board-zoom-in]');
  const zoomOut = board.querySelector('[data-board-zoom-out]');
  const zoomReset = board.querySelector('[data-board-zoom-reset]');
  const stepZoom = (dir) => {
    if (!ready) return;
    fadeHint();
    const vw = viewport.clientWidth;
    const vh = viewport.clientHeight;
    setScaleAt(scale * (dir > 0 ? 1.4 : 1 / 1.4), vw / 2, vh / 2);
  };
  if (zoomIn) zoomIn.addEventListener('click', () => stepZoom(1));
  if (zoomOut) zoomOut.addEventListener('click', () => stepZoom(-1));
  if (zoomReset) zoomReset.addEventListener('click', () => { fadeHint(); reset(); });

  // Keyboard — +/- to zoom, arrows to pan, 0 to reset
  viewport.setAttribute('tabindex', '0');
  viewport.addEventListener('keydown', (e) => {
    if (!ready) return;
    const step = 60;
    switch (e.key) {
      case '+':
      case '=':
        fadeHint(); stepZoom(1); e.preventDefault(); break;
      case '-':
      case '_':
        fadeHint(); stepZoom(-1); e.preventDefault(); break;
      case '0':
        fadeHint(); reset(); e.preventDefault(); break;
      case 'ArrowUp': {
        const c = clampPan(x, y + step, scale); x = c.x; y = c.y; apply(); fadeHint(); e.preventDefault(); break;
      }
      case 'ArrowDown': {
        const c = clampPan(x, y - step, scale); x = c.x; y = c.y; apply(); fadeHint(); e.preventDefault(); break;
      }
      case 'ArrowLeft': {
        const c = clampPan(x + step, y, scale); x = c.x; y = c.y; apply(); fadeHint(); e.preventDefault(); break;
      }
      case 'ArrowRight': {
        const c = clampPan(x - step, y, scale); x = c.x; y = c.y; apply(); fadeHint(); e.preventDefault(); break;
      }
    }
  });
}
