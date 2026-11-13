/* enhance.js — scroll motion layer (loads after script.js, touches nothing it owns)
   1. Alternating left/right entrances for card grids
   2. A few pixels of live horizontal drift while the page scrolls          */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  // ---- 1 · alternating entrance direction -------------------------------
  // Timeline nodes carry their side in the markup; everything else alternates
  // by index so each row enters from the opposite side of the one above it.
  [
    '.services__grid .service',
    '.behance-grid .bh-card',
    '.clients__featured .cl-feat'
  ].forEach((sel) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      if (el.classList.contains('mo-l') || el.classList.contains('mo-r')) return;
      el.classList.add(i % 2 ? 'mo-r' : 'mo-l');
    });
  });

  // ---- 2 · live scroll drift --------------------------------------------
  const drifters = Array.from(document.querySelectorAll('[data-drift]'));
  if (!drifters.length) return;

  let queued = false;

  function update() {
    const vh = window.innerHeight || 1;
    drifters.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;        // off-screen: skip
      const amp = parseFloat(el.dataset.drift) || 12;
      let p = (r.top + r.height / 2 - vh / 2) / vh;           // -1 … 1
      p = Math.max(-1, Math.min(1, p));
      el.style.setProperty('--drift', (p * amp).toFixed(1) + 'px');
    });
    queued = false;
  }

  function onScroll() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
})();
