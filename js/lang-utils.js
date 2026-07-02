/* ============================================================
   SHARED LANGUAGE UTILITIES
   Site-wide EN/ES persistence + propagation into internal links.
   Used by every page that supports language toggling.
   ============================================================ */

const STORAGE_KEY = 'site_lang';
const SUPPORTED = ['en', 'es'];

/* ── STORAGE ───────────────────────────────────────────────── */
export function getLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(stored) ? stored : 'en';
  } catch (e) {
    return 'en';
  }
}

export function setLanguage(lang) {
  if (!SUPPORTED.includes(lang)) return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* localStorage unavailable (e.g. private mode) — in-memory state still works */
  }
}

/* ── RESOLVE ACTIVE LANGUAGE ──────────────────────────────────
   Priority: URL ?lang= param  >  localStorage  >  default 'en'.
   Reconciles the winner back into localStorage so it survives
   onward navigation even if a later link drops the query param. */
export function initLanguageFromUrlOrStorage() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const lang = SUPPORTED.includes(urlLang) ? urlLang : getLanguage();
  setLanguage(lang);
  return lang;
}

/* ── PROPAGATE LANGUAGE INTO INTERNAL LINKS ───────────────────
   Rewrites same-origin page links (nav, buttons, CTAs, footer)
   to carry ?lang=es, preserving hash + existing query params.
   Leaves in-page anchors (#id), mailto:, tel:, external links,
   and file downloads (non-.html assets) untouched. */
export function applyLanguageToLinks(lang) {
  if (!SUPPORTED.includes(lang)) return;

  document.querySelectorAll('a[href]').forEach((a) => {
    const raw = a.getAttribute('href');
    if (!raw || raw.startsWith('#')) return;
    if (/^(mailto|tel|javascript):/i.test(raw)) return;
    if (a.hasAttribute('download')) return;

    let url;
    try {
      url = new URL(raw, window.location.href);
    } catch (e) {
      return;
    }

    if (url.origin !== window.location.origin) return;

    const ext = url.pathname.match(/\.([a-zA-Z0-9]+)$/);
    if (ext && ext[1].toLowerCase() !== 'html') return; /* skip PDFs, etc. */

    if (lang === 'en') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }

    a.setAttribute('href', url.pathname + url.search + url.hash);
  });
}
