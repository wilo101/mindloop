<div align="center">

# Mindloop

**A front-end concept — premium dark UI, motion, and editorial layout.**

[![License: MIT](https://img.shields.io/badge/License-MIT-0a0a0a?style=for-the-badge&labelColor=1a1a1a)](./LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[**Live site**](https://wilo101.github.io/mindloop/) · [**Source**](https://github.com/wilo101/mindloop)

<sub>Enable GitHub Pages from the `gh-pages` branch after the deploy workflow succeeds.</sub>

</div>

---

![Mindloop hero — full viewport landing](./screenshot.png)

Mindloop is a **UI / UX–only study**: a multi-route marketing shell for a newsletter-minded product. The focus is **visual hierarchy**—serif/sans pairing, glass UI, full-bleed media, and scroll-driven motion—not a production backend. There are **no real subscriptions** or data layer; scope is explicit in the interface badge.

---

## Interface

High-fidelity captures from the build. Each layout choice is meant to read as **one vertical rhythm**: navigation → focal message → supporting structure → closure.

### Hero — full viewport

![Hero — cosmic landscape, typography, glass subscribe](./docs/readme-hero.png)

**Design intent:** An immersive, surreal scene carries the brand so the hero never feels like a flat marketing strip. Center-locked copy, mixed **Instrument Serif** emphasis on *Inspired*, and a **liquid-glass** email bar keep attention on one column. The nav stays light (wordmark, anchors, social glyphs) so the landscape remains the hero.

### Solution — platform narrative

![Solution — headline, centerpiece visual, four-column features](./docs/readme-solution.png)

**Design intent:** A restrained **SOLUTION** kicker and a single large framed visual create breathing room before the grid. The headline splits **sans + italic serif** on *meaningful* to echo the hero. Four equal columns describe capability without cards-on-cards noise—typography and spacing do the structuring.

### Closing CTA & footer

![CTA — Journey headline, dual buttons, footer](./docs/readme-cta-footer.png)

**Design intent:** The closing band mirrors the hero’s drama with a metallic ribbon background and the same typographic rule (display sans + italic serif on *Journey*). **Primary / secondary** buttons are weighted differently but share radius and hover language. The footer stays quiet—copyright and legal links—so the CTA remains the last intentional beat.

---

## What this work demonstrates

- **Structure:** `layout` (shell, nav, footer, scroll reset, honesty badge) · `ui` primitives · `sections` composed into pages  
- **Routing:** React Router **v7** with `basename` from `import.meta.env.BASE_URL` for GitHub Pages  
- **Motion:** staggered reveals and scroll-linked opacity on long-form text  
- **Media:** ambient video in hero/solution; **HLS** in the CTA (`hls.js` + Safari fallback)  
- **Styling:** Tailwind **v4**, dark monochrome system, consistent spacing scale  
- **Shipping:** CI to **`gh-pages`**, SPA **404** fallback for deep links  

---

## Project layout

```text
src/
├── components/
│   ├── index.ts
│   ├── layout/       # PageShell, Navbar, Footer, ScrollToTop, ConceptScopeBadge
│   ├── ui/           # SocialIconLink, …
│   └── sections/     # Hero, SearchChanged, Mission, Solution, CTA
├── lib/
├── pages/
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
docs/
├── readme-hero.png
├── readme-solution.png
└── readme-cta-footer.png
public/
scripts/
  copy-spa-fallback.mjs
.github/workflows/
  deploy.yml
screenshot.png
```

---

## Stack

| Layer | Choice | Rationale |
|--------|--------|-----------|
| Build | **Vite** | Fast feedback and a predictable static output for Pages. |
| UI | **Tailwind CSS v4** | Tokenized spacing, radius, and color so sections stay visually coherent. |
| Motion | **Motion** | One system for entrance timelines and scroll-scrubbed copy. |
| Router | **React Router v7** | Client routes with a base path that matches the repo slug on Pages. |
| Stream | **hls.js** | HLS where MSE exists; native HLS where the browser supports it. |
| Icons | **lucide-react** | Crisp stroke icons aligned to the glass UI. |

---

## License

MIT — see [LICENSE](./LICENSE).

---

<div align="center">

<sub>Production check (GitHub Pages base path):</sub>

```powershell
$env:GITHUB_PAGES="true"; $env:GH_REPO_NAME="mindloop"; npm run build
```

</div>
