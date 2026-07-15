# Live Tickets — prototype

RTL Hebrew, mobile-first **secondary-market ticketing** prototype: Israelis buying tickets to
events **abroad** (concerts, sports). Single-file vanilla-JS SPA. Design language: brand pink
`#ed1860`, radical price transparency, trust on every step, guest-first.

## Run / preview
- Dev server: launch config **`live-tickets`** on **port 4399** (runs `server.mjs`; server root serves
  `flow.html`). Open `http://localhost:4399/flow.html`. The launch config lives one level up in
  `../output/.claude/launch.json` (its `cwd` is this repo), so run new conversations from the `output/`
  directory to pick it up — or copy that entry into a repo-local `.claude/launch.json`.
- ⚠️ No system Node. Standalone Node at `~/.local/node`, `gh` at `~/.local/bin` — add to `PATH`.
  Never run bare `node`/`npm`; start the preview via the launch config, not `node server.mjs` by hand.

## Architecture — read this before editing
- **`desktop.html`** — standalone **desktop navigation** demo (separate link from the mobile prototype;
  open `/desktop.html`). Self-contained vanilla HTML/CSS/JS port of the Claude Design "Live Tickets Nav"
  (RTL mega-menus: music, destinations, holidays, support, search, account). Not wired into `flow.html`.
  **Nav order (RTL):** `כדורגל · ספורט · מוזיקה והופעות · יעדים · ראש השנה 2026`. `כדורגל` is its own
  top-level tab (rail `לפי ליגה`); `ספורט`'s `לפי ענף` starts at `כדורסל` (no football).
  Both use one shared cascade shell (`NAV` model + `buildShell`/`casCat`/`casMid`/`casReset`):
  **default = rail (right) + hot topics (left), middle empty — no category pre-selected**; hover a rail
  item → middle fills + left clears; hover a middle item → left fills (right→middle→left); mouse-out →
  back to default. Mirrored on mobile by `flow.html`'s `categoriesDrawer()` (`D.drawer.football`/
  `footballHot`/`sportsHot`), where every level carries a **`לכל ה…` CTA** (the touch stand-in for
  clicking a level's header on desktop).
- **`flow.html`** (~3500 lines) *is the whole app (mobile prototype).* One global `state` object + `render()`
  (rebuilds `#app.innerHTML`) + one delegated `wire()` that dispatches on `data-act`
  (`const a = e.target.closest('[data-act]'); act = a.getAttribute('data-act')`).
  `set(patch)` merges state and re-renders; `go(page)` navigates (resets scroll, closes overlays).
- **`flow.v5.css`** — all styles. **`index.html`** — redirect stub → `flow.html`.
- Legacy/standalone (NOT the live app, edit only if asked): `homepage.html`, `screens/*.html`,
  `design-system/styleguide.html`. **`backups/`** — historical snapshots, never edit.

## Page routing (`state.page` → render fn)
`0` home · `1` category · `2` lobby · `3` event — mobile `pageEventSel()` (map + drawer) /
desktop `pageEventDesk()` · `9` AI search · `10` seat `pageOrder()`/`pageSeatDesk()` ·
`11` checkout `pageCheckout()`/`pageCheckoutDesk()` · `12` confirm · `13-16` split payment ·
`17` edge states · `18` account gate.
Desktop = `state.desktop` (`matchMedia('(min-width:1000px)')`); two-pane `.wide` layout only on
pages **3 / 10 / 11**. Below 640px the app fills the screen; otherwise it's a 375px phone frame.

## Conventions (do not break)
- **RTL Hebrew** throughout. Match the existing design language and components — no restyle unless asked.
- **Desktop must equal mobile** in content + function (shared render fns / the one filter sheet).
- Prices always shown fees-inclusive → **"כולל עמלות"**. Never a bare number.
- **Do NOT use** "אישור מיידי" (instant confirmation) or "ביטול כולל מילואים" — cancellation is an
  optional paid add-on at checkout, not included.
- Trust strip wording: **`אחריות 100% · מחירים כולל עמלות · תשלום מאובטח`**.
- Event-page filter set (starter, in the `p3FilterSheet` drawer, one "סינון" button on both platforms):
  **כמות · מחיר · אזור/יציע · ישיבה יחד**. Deferred (do NOT add until data confirmed): front row,
  obstructed-view, accessibility, aisle, covered/shaded.
- "ישיבה יחד" filter = surfaces listings offering the **paid adjacency guarantee**
  (`listing.sitTogetherGuaranteeAvailable`); the charge is a checkout add-on, not applied in the filter.

## Deploy — GitHub Pages (repo `yaeli-byte/live-tickets-prototype`, `main` = production)
- ⚠️ **CACHE-BUST (bump BOTH to the same N):** on any HTML/CSS change bump `?v=N` in
  (1) the `flow.v5.css?v=N` link inside `flow.html`, **and** (2) the `flow.html?v=N` redirect inside
  `index.html` (both the `<meta http-equiv=refresh>` and the `<a href>`). Bumping only the CSS leaves a
  stale site — the root redirect pins the old `flow.html`.
- **Just `git push`** — do NOT manually trigger a Pages build (a second concurrent build fails and the
  CDN keeps serving the stale one). `.nojekyll`, `noindex` meta on every page, and `robots.txt` are
  committed to keep the prototype out of search.
- "Change missing on the live site" is almost always browser cache → verify with `curl`, check in incognito.

## Current status (2026-07)
- **Deployed:** pass A/B/B-mod + the "הצג עוד"/FAQ-merge/legal-strip updates are pushed and live at **`?v=39`**.
  `desktop.html` (standalone desktop nav) is also deployed (separate link).
- Next deploy: bump `?v=` in `flow.html` + `index.html` to the same new N, then push (see cache-bust rule above).
- Placeholder copy awaiting finals: `[[LEGAL HEADER — נוסח סופי יתקבל]]` (site header) and
  `[[18+ LEGAL — נוסח סופי]]` (event page). Replace when final legal copy arrives.
- Deeper context: personal memory files `live-tickets-*`, and the PRD / feature-spec artifacts.
