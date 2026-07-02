/**
 * Live Tickets — Tailwind theme mapping (optional)
 * Same tokens as tokens.css, expressed as a Tailwind theme so you can use
 * either approach. Spread into your tailwind.config.js:
 *
 *   const lt = require('./design-system/tailwind.theme.js');
 *   module.exports = { theme: { extend: lt.extend } };
 *
 * These reference the CSS variables, so tokens.css stays the single source
 * of truth (change a value once, both systems update).
 */
module.exports = {
  extend: {
    colors: {
      primary:   'var(--lt-primary)',
      accent:    'var(--lt-accent)',
      link:      'var(--lt-link)',
      spotify:   'var(--lt-spotify)',
      whatsapp:  'var(--lt-whatsapp)',
      star:      'var(--lt-star)',
      ink:       'var(--lt-text)',
      muted:     'var(--lt-text-muted)',
      subtle:    'var(--lt-text-subtle)',
      page:      'var(--lt-bg-page)',
      surface:       'var(--lt-surface)',
      'surface-dark':   'var(--lt-surface-dark)',
      'surface-darker': 'var(--lt-surface-darker)',
      'surface-strip':  'var(--lt-surface-strip)',
      border:    'var(--lt-border)',
      line:      'var(--lt-line)',
    },
    fontFamily: {
      sans: ['Rubik', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      alt:  ['Inter', 'Rubik', 'sans-serif'],
    },
    fontSize: {
      badge:   'var(--lt-fs-badge)',   // 9
      '2xs':   'var(--lt-fs-2xs)',     // 10
      xs:      'var(--lt-fs-xs)',      // 11
      sm:      'var(--lt-fs-sm)',      // 12
      md:      'var(--lt-fs-md)',      // 13
      base:    'var(--lt-fs-base)',    // 14
      lg:      'var(--lt-fs-lg)',      // 15
      xl:      'var(--lt-fs-xl)',      // 16
      title:   'var(--lt-fs-title)',   // 22
      h3:      'var(--lt-fs-h3)',      // 24
      display: 'var(--lt-fs-display)', // 32
    },
    spacing: {
      1: 'var(--lt-sp-1)', 2: 'var(--lt-sp-2)', 3: 'var(--lt-sp-3)',
      4: 'var(--lt-sp-4)', 5: 'var(--lt-sp-5)', 6: 'var(--lt-sp-6)',
      7: 'var(--lt-sp-7)', 8: 'var(--lt-sp-8)', 9: 'var(--lt-sp-9)',
      gutter: 'var(--lt-gutter)', rail: 'var(--lt-rail-pad)',
    },
    borderRadius: {
      xs:  'var(--lt-r-xs)',  sm: 'var(--lt-r-sm)', md: 'var(--lt-r-md)',
      lg:  'var(--lt-r-lg)',  xl: 'var(--lt-r-xl)', '2xl': 'var(--lt-r-2xl)',
      pill:'var(--lt-r-pill)',
    },
    boxShadow: {
      sm:   'var(--lt-shadow-sm)',
      card: 'var(--lt-shadow-card)',
      lg:   'var(--lt-shadow-lg)',
      sheet:'var(--lt-shadow-sheet)',
      fab:  'var(--lt-shadow-fab)',
    },
    zIndex: {
      header: 'var(--lt-z-header)', fab: 'var(--lt-z-fab)',
      scrim:  'var(--lt-z-scrim)',  sheet: 'var(--lt-z-sheet)',
    },
  },
};
