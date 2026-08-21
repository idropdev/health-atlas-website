# HealthAtlas — Handoff

> Onboarding doc for a fresh AI agent context window. Harness-agnostic.

## 1. Purpose

HealthAtlas is a static marketing/landing website for a healthcare data platform
("HealthAtlas") aimed at clinics and patients — pages cover the product, how it works,
security/compliance, an audience for clinics, an audience for patients, and standard
legal pages (privacy policy, terms of service). It is a pure front-end brochure site
(no backend, no auth, no database) built with React + Vite + Tailwind CSS, deployed to
GitHub Pages under the custom domain `healthatlas.health`.

**Note on repo identity:** the onboarding brief for this repo describes it as "primarily
a Dart/Flutter project" with a sibling `health-atlas-website` repo. That does not match
what is actually in this checkout — there is no `pubspec.yaml`, no `lib/` directory, and
no Flutter/Dart tooling anywhere. This repo, as it exists on disk, is a React/Vite/
Tailwind web project (`package.json` name: `healthatlas`). Treat this document as
describing the actual contents of `C:\Users\carlo\OneDrive\Documents\GitHub\HealthAtlas`,
not the Flutter app referenced in the brief — flag this mismatch to the repo owner before
assuming which codebase is the "real" HealthAtlas app.

## 2. Status

**Active.** Most recent commit: `32b46377` — "changes minimum" — 2026-03-03 (per
`git log -1 --format=%cd`). Current branch: `main`, clean working tree, up to date with
`origin/main`. The site is feature-complete for a v1 marketing site: all nav-linked pages
have real content (60–390 lines each), a GitHub Actions deploy workflow exists and
targets a live custom domain, and a local `npm run build` succeeds cleanly. One dead/
unused legacy file (`src/pages/Placeholders.jsx`) remains from an earlier scaffold stage
— see Section 9.

## 3. Stack

- **Language:** JavaScript (JSX), no TypeScript (type packages present as devDeps only,
  see below)
- **Framework:** React `^19.2.0` (`react`, `react-dom`), routed with
  `react-router-dom ^7.11.0`
- **Build tool:** Vite `^6.0.7` with `@vitejs/plugin-react ^4.3.4`
- **Styling:** Tailwind CSS `^3.4.17` via the classic PostCSS pipeline
  (`postcss ^8.5.6`, `autoprefixer ^10.4.23`, config in `tailwind.config.js`)
- **Icons:** `lucide-react ^0.562.0`
- **Lint:** ESLint `^9.39.1` (flat config) with `eslint-plugin-react-hooks ^7.0.1`,
  `eslint-plugin-react-refresh ^0.4.24`, `@eslint/js ^9.39.1`, `globals ^16.5.0`
- **Type packages (devDeps only, no `.ts`/`.tsx` files in repo):** `@types/react ^19.2.5`,
  `@types/react-dom ^19.2.3`
- **Tailwind v4 packages present but unused:** `@tailwindcss/vite ^4.1.18` and
  `@tailwindcss/postcss ^4.1.18` are listed in devDependencies and `@tailwindcss/vite` is
  imported in `vite.config.js`, but neither is actually wired into the build — see
  Section 7.
- All versions above are read directly from `package.json` (semver ranges as written
  there, not resolved/pinned versions).
- No `engines` field in `package.json`. CI (`.github/workflows/deploy.yml`) uses
  Node.js `20` via `actions/setup-node@v4`. Local check: `node -v` → `v22.12.0`.

## 4. Setup & Commands

Install:
```
npm install
```

Dev server (Vite, with HMR):
```
npm run dev
```

Production build (outputs to `dist/`, gitignored):
```
npm run build
```

Preview a production build locally:
```
npm run preview
```

Lint:
```
npm run lint
```

**Tests:** No test framework, test script, or test files exist anywhere in the repo.
There is no `npm test`/`npm run test` script in `package.json`. If tests are needed,
a framework (e.g. Vitest, since the project already uses Vite) must be added from
scratch.

**Platform targets:** Web only. There is no `android/`, `ios/`, `windows/`, or similar
platform directory — this is a browser-only Vite/React SPA, not a multi-platform app.

## 5. Architecture Map

```
index.html              Vite entry HTML, mounts #root
src/
  main.jsx               React root: wraps <App/> in <StrictMode> + <BrowserRouter>
  App.jsx                Defines all react-router-dom routes -> page components
  index.css               Tailwind directives, global styles, custom keyframes
  App.css                 Leftover from create-vite template (minimal use)
  assets/react.svg         Vite/React template asset
  components/
    Layout.jsx              Page shell: Navbar + <main> + Footer, used by every page
    Navbar.jsx               Top nav, mobile menu, scroll-aware styling
    Footer.jsx               Site footer
    Section.jsx              Reusable page-section wrapper (uses useScrollAnimation)
    Button.jsx               Shared button component (variants)
    Card.jsx                 Shared card component (uses useScrollAnimation)
    AppShowcase.jsx          Product screenshot showcase block
    LogoCarousel.jsx         Scrolling healthcare-partner logo strip
    ImageCompareSlider.jsx  (+ .css) Before/after image comparison slider
    ScrollToTop.jsx          Router-aware "scroll to top on navigate" helper
  hooks/
    useScrollAnimation.js    IntersectionObserver hook driving scroll-reveal animations
  pages/
    Home.jsx, HowItWorks.jsx, Product.jsx, Clinics.jsx, Patients.jsx, Security.jsx,
    About.jsx, Contact.jsx, PrivacyPolicy.jsx, TermsOfService.jsx
                             One file per route registered in App.jsx; all contain real
                             content (not placeholders)
    Placeholders.jsx         DEAD CODE — not imported by App.jsx, see Section 9
public/
  HealthAtlasLogo.svg, logo.png, logo-full.png, CNAME (healthatlas.health)
  healthcare_logos/          Partner/EHR-vendor logos (Epic, athenahealth, etc.) used by
                             LogoCarousel
  screens_imgs/               Product screenshot images used by AppShowcase
.github/workflows/deploy.yml  CI: build on push to main, deploy dist/ to GitHub Pages
graphify-out/                  Pre-built knowledge graph for this repo (see Section 10)
```

Skip for onboarding purposes: `node_modules/`, `dist/` (build output, gitignored),
`build_output.txt`/`error.log`/`error_final.log` at repo root (stray debug logs, see
Section 9).

## 6. Entry Points — Read These First

1. `src/App.jsx` — the full route map; fastest way to see every page the site has.
2. `src/main.jsx` — how the app boots (StrictMode + BrowserRouter + App).
3. `src/components/Layout.jsx` — the shell every page renders inside (Navbar/Footer).
4. `src/pages/Home.jsx` — the landing page, representative of the page-building pattern
   (Layout > Section > Card/Button composition) used across all pages.
5. `src/components/Section.jsx` and `src/hooks/useScrollAnimation.js` — the shared
   scroll-reveal mechanism used throughout the site (graphify flags these as the most
   connected nodes in the codebase, see `Layout()`/`Section()` in the god-node list).
6. `tailwind.config.js` — custom color tokens (`primary`, `secondary`, `accent`,
   `surface`) referenced throughout page/component class names.
7. `.github/workflows/deploy.yml` — how and where the site actually ships.

## 7. Conventions & Gotchas

- **Tailwind v3 vs v4 is in a half-migrated state.** The project runs on Tailwind v3
  (`tailwindcss ^3.4.17`) through the classic PostCSS pipeline (`postcss.config.js`
  registers `tailwindcss` + `autoprefixer`). However, devDependencies also include the
  Tailwind v4 packages `@tailwindcss/vite` and `@tailwindcss/postcss`, and
  `vite.config.js` imports `@tailwindcss/vite` — but never adds it to the `plugins`
  array, so it has no effect. Do not "helpfully" wire up the v4 plugin without
  understanding this is currently a v3 project; doing so previously broke the build (see
  `error_final.log`, which shows `Cannot apply unknown utility class 'bg-surface'` —
  a symptom of the v4 pipeline not seeing the v3-style `tailwind.config.js` color
  tokens). A plain `npm run build` on the current tree succeeds without issue.
- **No state management library, no data fetching, no backend.** Confirmed via search:
  no `fetch(`, `axios`, `firebase`, or `supabase` usage, and no `import.meta.env`/
  `process.env` references anywhere in `src/`. All content is static/hardcoded in JSX.
- **Routing is flat**, all routes declared directly in `src/App.jsx` (no nested/lazy
  routes, no route config file).
- **Custom domain deploy:** `public/CNAME` (and root `CNAME`) both contain
  `healthatlas.health` — GitHub Pages custom domain. Don't remove/rename these files
  without updating DNS expectations.
- Component styling is Tailwind utility classes almost exclusively; only
  `ImageCompareSlider.css` and `App.css`/`index.css` contain hand-written CSS
  (for the compare-slider drag mechanic and global/keyframe styles respectively).

## 8. External Dependencies & Environment

- **No external APIs, databases, or third-party backend services** are integrated —
  this is a static site with no runtime network calls beyond loading Google Fonts
  (`@import url('https://fonts.googleapis.com/...')` in `src/index.css`).
- **No environment variables** are read or required (no `.env` file, no `import.meta.env`
  usage found).
- **Deployment target:** GitHub Pages, via `.github/workflows/deploy.yml`, using the
  built-in `GITHUB_TOKEN`/OIDC permissions (`id-token: write`, `pages: write`) — no
  external secrets configured in the workflow.
- **Custom domain config file:** `CNAME` / `public/CNAME` (contains the domain name, not
  a secret).

## 9. Known Issues & TODOs

- No `TODO`/`FIXME`/`HACK`/`XXX` comments found anywhere in `src/`.
- **`src/pages/Placeholders.jsx` is dead code.** It defines placeholder versions
  ("Under Construction. Coming soon.") of `HowItWorks`, `Product`, `Security`, `About`,
  `Contact`, `Clinics`, and `Patients`, but `src/App.jsx` imports the real, fully-built
  versions of these pages from their own separate files (`src/pages/HowItWorks.jsx`,
  etc.) instead. `Placeholders.jsx` is not imported anywhere. It's safe to delete but
  has been left in place — worth confirming with the repo owner before removing.
- **Stray build/debug log files committed or left at repo root:** `build_output.txt` is
  tracked in git; `error.log` and `error_final.log` are present locally (untracked).
  These reference a different local path
  (`C:/Users/carlo/.gemini/antigravity/scratch/HealthAtlas`), i.e. they're leftovers
  from a prior debugging session in a different working copy, not evidence of a current
  build problem — a fresh `npm run build` in this repo succeeds. Consider deleting
  `build_output.txt` from the repo and adding `error*.log` to `.gitignore`.
- Tailwind v3/v4 dependency overlap described in Section 7 is unresolved cruft, not an
  active bug, but a likely source of confusion for a future contributor attempting a
  Tailwind v4 upgrade.
- No automated tests exist (see Section 4).

## 10. Fast Orientation for a New Agent

A graphify knowledge graph already exists at `graphify-out/` (built from commit
`32b46377`, 111 nodes / 191 edges). Use it before reading files by hand:

```
export PATH="$HOME/.local/bin:$PATH"
graphify query "<question>"          # scoped subgraph for a specific question
graphify god-nodes --top 15          # most-connected/architecturally central symbols
cat graphify-out/GRAPH_REPORT.md     # prebuilt summary: communities, god nodes, cycles
```

Check staleness first: `git rev-parse HEAD` and compare to the `Built from commit`
line in `GRAPH_REPORT.md` (currently `32b46377`); if HEAD has moved, run
`graphify update .` (no API cost) before trusting query results.

The single most useful first question for this repo:
**`graphify query "what calls useScrollAnimation and how does the Layout/Section/Card composition pattern work"`**
— this hook and the `Layout()`/`Section()`/`Card()`/`Button()` components are the four
most-connected nodes in the graph (per `GRAPH_REPORT.md`'s God Nodes list) and are the
pattern every page in `src/pages/` is built from, so understanding them first makes the
rest of the codebase self-explanatory.

Also worth an early read: the "Purpose" note in Section 1 above — before doing any work,
confirm with the repo owner whether this React/Vite site is in fact the repo they mean
when they say "HealthAtlas," since the onboarding brief describes a different
(Flutter/Dart) project.
