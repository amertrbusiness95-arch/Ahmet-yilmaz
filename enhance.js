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

/* Marquee: each phrase lights up while it crosses the middle of the screen */
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const mq = document.querySelector('.marquee');
  if (!mq) return;
  const words = Array.from(mq.querySelectorAll('.mq'));
  let visible = false;
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; }).observe(mq);
  function tick() {
    if (visible) {
      const vw = window.innerWidth || 1;
      const mid = vw / 2;
      for (const w of words) {
        const r = w.getBoundingClientRect();
        if (r.right < 0 || r.left > vw) continue;
        const d = Math.abs(r.left + r.width / 2 - mid) / (vw / 2);
        w.style.setProperty('--lit', Math.max(0, 1 - d).toFixed(3));
      }
    }
    requestAnimationFrame(tick);
  }
  tick();
})();

/* Skills: bars fill and numbers count up when the block scrolls into view */
(() => {
  const box = document.querySelector('.skills');
  if (!box) return;
  const items = Array.from(box.querySelectorAll('.skill'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function run() {
    items.forEach((it, i) => {
      const fill = it.querySelector('.skill__fill');
      const num = it.querySelector('.skill__num b');
      const target = +it.dataset.val;
      if (reduce) { num.textContent = target; fill.style.width = target + '%'; return; }
      setTimeout(() => {
        fill.style.width = target + '%';
        const t0 = performance.now();
        const dur = 1600;
        const step = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          num.textContent = Math.round(target * e);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, i * 120);
    });
  }
  new IntersectionObserver((es, io) => {
    if (es[0].isIntersecting) { run(); io.disconnect(); }
  }, { threshold: 0.3 }).observe(box);
})();

/* About stats: 10+ and 8+ count up from zero when the row comes into view */
(() => {
  const wrap = document.querySelector('.about__stats-wrap');
  if (!wrap) return;
  const nums = Array.from(wrap.querySelectorAll('.stat .num'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = nums.map(el => {
    const t = el.firstChild;
    const v = parseInt(t.textContent, 10);
    return { t, v };
  });
  function run() {
    wrap.classList.add('is-in');
    if (reduce) return;
    targets.forEach(({ t, v }, i) => {
      if (isNaN(v)) return;
      t.textContent = '0';
      setTimeout(() => {
        const t0 = performance.now();
        const dur = 1400;
        const step = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          t.textContent = String(Math.round(v * e));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, i * 200);
    });
  }
  new IntersectionObserver((es, io) => {
    if (es[0].isIntersecting) { run(); io.disconnect(); }
  }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }).observe(wrap);
})();

/* Reveal fallback: show anything that is on screen but still hidden */
(() => {
  const rescue = () => {
    const vh = window.innerHeight || 1;
    document.querySelectorAll('.reveal:not(.is-in), .reveal-clip:not(.is-in)').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add('is-in');
    });
  };
  let q = false;
  const onScroll = () => { if (q) return; q = true; requestAnimationFrame(() => { rescue(); q = false; }); };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  setTimeout(rescue, 400);
})();

/* Nav: the pressed link stays lit in the site blue */
(() => {
  const links = Array.from(document.querySelectorAll('.nav__menu a'));
  links.forEach(a => a.addEventListener('click', () => {
    links.forEach(x => x.classList.remove('is-on'));
    a.classList.add('is-on');
  }));
})();

/* Click sound: a short soft "tak" on buttons and links, made in the browser (no file needed) */
(() => {
  let ctx = null;
  const tak = () => {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.setValueAtTime(1500, t);
      o.frequency.exponentialRampToValueAtTime(600, t + 0.06);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.16, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.085);
      o.connect(g).connect(ctx.destination);
      o.start(t);
      o.stop(t + 0.095);
    } catch (e) {}
  };
  document.addEventListener('pointerdown', (e) => {
    if (e.target.closest && e.target.closest('a, button, .btn, .cico, .nav__menu a')) tak();
  }, { passive: true });
})();
