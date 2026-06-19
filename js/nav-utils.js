/* ============================================================
   SHARED NAV UTILITIES
   Used by every page that includes the shared nav markup.
   ============================================================ */

const NAV_H = 68;

/* ── NAV SCROLL BEHAVIOUR ──────────────────────────────────── */
export function initNavScroll() {
  const navEl = document.getElementById('nav');
  function updateNav() {
    navEl.classList.toggle('nav--scrolled', window.scrollY > 80);
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

/* ── SMOOTH SCROLL ─────────────────────────────────────────── */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id     = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_H;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ── MOBILE MENU ───────────────────────────────────────────── */
export function initMobileMenu() {
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
}
