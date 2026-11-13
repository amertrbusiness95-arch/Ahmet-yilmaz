/* Cinematic portfolio — interactions */
(() => {
  // ============ Custom cursor ============
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    if (dot) dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  function tick() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  }
  tick();

  document.querySelectorAll('a, button, .case, .service, .tl-item, .float, .contact__email-btn').forEach(el => {
    el.addEventListener('mouseenter', () => ring?.classList.add('is-hover'));
    el.addEventListener('mouseleave', () => ring?.classList.remove('is-hover'));
  });

  // Disable cursor on touch
  if (matchMedia('(pointer: coarse)').matches) {
    document.body.style.cursor = 'auto';
    if (dot) dot.style.display = 'none';
    if (ring) ring.style.display = 'none';
  }

  // ============ Floating cards parallax ============
  const stage = document.querySelector('.hero__stage');
  const floats = document.querySelectorAll('.float, .portrait');

  if (stage) {
    let stageRect = stage.getBoundingClientRect();
    window.addEventListener('resize', () => stageRect = stage.getBoundingClientRect());

    let tx = 0, ty = 0;
    let cx = 0, cy = 0;

    document.addEventListener('mousemove', (e) => {
      stageRect = stage.getBoundingClientRect();
      const cxs = stageRect.left + stageRect.width / 2;
      const cys = stageRect.top + stageRect.height / 2;
      tx = (e.clientX - cxs) / window.innerWidth;
      ty = (e.clientY - cys) / window.innerHeight;
    });

    function floatTick() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;

      floats.forEach((el, i) => {
        const depth = parseFloat(el.dataset.depth || (i % 3 + 1) * 6);
        const sy = parseFloat(el.dataset.float || 0);
        const t = Date.now() / 1000;
        const fy = Math.sin(t * 0.8 + i) * (4 + sy);
        el.style.translate = `${cx * depth}px ${cy * depth + fy}px`;
      });
      requestAnimationFrame(floatTick);
    }
    floatTick();
  }

  // ============ Scroll reveals ============
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, .reveal-clip').forEach(el => io.observe(el));

  // Force-reveal anything already in-viewport on first frame (IO can be flaky for
  // above-the-fold inline/block spans like the hero title — guarantees they show).
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal, .reveal-clip').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
        el.classList.add('is-in');
        io.unobserve(el);
      }
    });
  });

  // ============ Stagger group children ============
  document.querySelectorAll('[data-stagger]').forEach(group => {
    const step = parseInt(group.dataset.stagger || '90', 10);
    [...group.children].forEach((child, i) => {
      child.style.setProperty('--rd', `${i * step}ms`);
    });
  });

  // ============ Year ticker ============
  const yEl = document.getElementById('year');
  if (yEl) yEl.textContent = new Date().getFullYear();

  // ============ Live time/loc ticker ============
  const tEl = document.getElementById('liveTime');
  function updateTime() {
    if (!tEl) return;
    const now = new Date();
    const istOptions = { timeZone: 'Europe/Istanbul', hour: '2-digit', minute: '2-digit', hour12: false };
    tEl.textContent = now.toLocaleTimeString('en-GB', istOptions) + ' IST';
  }
  updateTime();
  setInterval(updateTime, 30 * 1000);

  // ============ Magnet hover for buttons ============
  document.querySelectorAll('[data-magnet]').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.18;
      const y = (e.clientY - r.top - r.height / 2) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
  // ============ Tweaks panel ============
  const panel = document.getElementById('tweaksPanel');
  const closeBtn = document.getElementById('tweaksClose');
  const defaults = window.TWEAK_DEFAULTS || {};
  const state = { ...defaults };

  function applyTweaks(s) {
    document.documentElement.style.setProperty('--cyan', s.accent);
    document.body.classList.toggle('bg-black', s.bg === 'black');
    document.body.classList.toggle('bg-warm', s.bg === 'warm');
    document.body.classList.toggle('density-compact', s.density === 'compact');
    document.body.classList.remove('weight-light', 'weight-bold');
    if (s.weight === 'light') document.body.classList.add('weight-light');
    if (s.weight === 'bold') document.body.classList.add('weight-bold');
    document.body.classList.toggle('no-grain', !s.grain);
    document.body.classList.toggle('no-grid', !s.grid);
    document.body.classList.toggle('no-cursor', !s.cursor);
    syncPanelUI();
  }
  function syncPanelUI() {
    panel?.querySelectorAll('[data-tweak]').forEach(group => {
      const key = group.dataset.tweak;
      if (group.tagName === 'INPUT') {
        group.checked = !!state[key];
      } else {
        group.querySelectorAll('button').forEach(b => {
          b.classList.toggle('is-active', b.dataset.val === String(state[key]));
        });
      }
    });
  }
  function setTweak(key, val) {
    state[key] = val;
    applyTweaks(state);
    try { window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: val } }, '*'); } catch (e) {}
  }

  panel?.querySelectorAll('.tweaks__swatches, .tweaks__radio').forEach(group => {
    const key = group.dataset.tweak;
    group.addEventListener('click', e => {
      const btn = e.target.closest('button');
      if (!btn) return;
      setTweak(key, btn.dataset.val);
    });
  });
  panel?.querySelectorAll('input[type=checkbox][data-tweak]').forEach(input => {
    input.addEventListener('change', () => setTweak(input.dataset.tweak, input.checked));
  });

  // Edit-mode protocol — register listener BEFORE announcing
  window.addEventListener('message', (e) => {
    const t = e.data?.type;
    if (t === '__activate_edit_mode') { panel.hidden = false; }
    else if (t === '__deactivate_edit_mode') { panel.hidden = true; }
  });
  closeBtn?.addEventListener('click', () => {
    panel.hidden = true;
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
  });
  try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}

  applyTweaks(state);
})();
