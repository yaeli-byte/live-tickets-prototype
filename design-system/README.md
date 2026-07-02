# Live Tickets — Design System

A shared design system **extracted from the homepage** (`../index.html`). The homepage was
left untouched; this folder is the reusable layer it (and future pages) can be built on.

```
design-system/
├── tokens.css          # CSS variables: colour, type, spacing, radii, shadows, sizing, z-index
├── components.css      # reusable .lt-* components, built entirely on the tokens
├── tailwind.theme.js   # optional — same tokens as a Tailwind theme.extend
├── styleguide.html     # living showcase of every token + component
└── README.md
```

## Usage

Plain HTML/CSS (matches the current homepage):

```html
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
```

Or with Tailwind:

```js
// tailwind.config.js
const lt = require('./design-system/tailwind.theme.js');
module.exports = { theme: { extend: lt.extend } };
```

Open **`styleguide.html`** in a browser to see the whole system rendered.

## Tokens

All values are `var(--lt-*)`. Categories: **colour** (brand / surfaces / text / lines),
**typography** (Rubik + Inter, 9→32px scale, weights 400–700), **spacing** (base-2, 4→36px
plus `--lt-gutter` / `--lt-rail-pad`), **radii** (4→14px, pill, circle), **shadows** (sm / card
/ lg / sheet / fab), **sizing** (`--lt-app-width`, `--lt-card`…) and **z-index**.

Change a value once in `tokens.css` and every component + the Tailwind theme update with it.

## Components

Each is a `.lt-` class in `components.css`. Mapping from the homepage's local classes:

| System component | `.lt-` class | Homepage origin |
|---|---|---|
| Trust strip | `.lt-trust-strip` | `.promo-strip` |
| Header | `.lt-header` `.lt-nav` `.lt-icon-btn` `.lt-logo` | `.header` `.nav` `.circle-btn` |
| Buttons | `.lt-btn` (`--primary/--accent/--spotify/--ghost`) | `.connect` `.build` |
| Search | `.lt-search` | `.search-box` |
| Section header | `.lt-section__head` `__title` `__link` | `.sec-head` `.sec-title` `.sec-link` |
| Rail | `.lt-rail` | `.hscroll` |
| Chip | `.lt-chip` (`--hot/--neutral/--ghost/--pill`) + `.lt-heart` | `.badge` + `.heart-btn` |
| Event card | `.lt-event-card` (+ `--featured`) | `.artist` / `.pop-card` |
| Event row | `.lt-event-row` | `.listcard` |
| Category tile | `.lt-category` | `.cat-card` |
| Avatar | `.lt-avatar` | testimonial avatar |
| Testimonial | `.lt-testimonial` | `.tcard` |
| Trust banner | `.lt-trust-banner` | Trustpilot footer content |
| Divider | `.lt-divider` | `.divider` |
| Footer | `.lt-footer` (`--image`) | `.footer` |
| **Bottom sheet** | `.lt-sheet` + `.lt-sheet-backdrop` | *new* |
| **WhatsApp** | `.lt-whatsapp` | *new* |

**New components** (`bottom sheet`, `WhatsApp FAB`; plus the `chip` variants and the standalone
`trust banner`) weren't on the homepage — they're built here in the same visual language to
complete the requested set. Toggle `.is-open` on the sheet + backdrop to open it. Inside a fixed
phone frame, add `.lt-scope-frame` on the frame so the fixed overlays pin to it instead of the viewport.

## RTL

Layout is **LTR** (element order controls left/right, matching the homepage/Figma) with
`unicode-bidi: plaintext` on text so Hebrew + Latin + numbers shape correctly. Scope it with
`.lt-root` on a wrapper, or add `.lt-rtl-text` to individual text elements.
