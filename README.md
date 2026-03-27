# Mindloop

![Hero screenshot](./screenshot.png)

Mindloop is a **front-end concept**: a dark, monochrome marketing site for a newsletter-style product—full-viewport hero video, “liquid glass” surfaces, scroll-driven typography, and secondary pages that share one typographic scale. I owned the UI structure, motion, routing, and responsive rhythm; there is **no backend or real subscriptions** (the live badge and copy state this clearly).

**Live:** [add your GitHub Pages URL after first deploy](https://example.com)

---

## Screen recordings / تسجيلات الشاشة

مسجّلات قصيرة من الواجهة (تعمل مباشرة في README على GitHub):

### الهيرو — Hero

<video src="https://raw.githubusercontent.com/wilo101/mindloop/main/docs/videos/hero.mp4" controls playsinline muted width="100%"></video>

[فتح الفيديو في صفحة الملف](./docs/videos/hero.mp4)

### منتصف الصفحة — Mid page

<video src="https://raw.githubusercontent.com/wilo101/mindloop/main/docs/videos/home-mid.mp4" controls playsinline muted width="100%"></video>

[فتح الفيديو](./docs/videos/home-mid.mp4)

### الفوتر — Footer

<video src="https://raw.githubusercontent.com/wilo101/mindloop/main/docs/videos/footer.mp4" controls playsinline muted width="100%"></video>

[فتح الفيديو](./docs/videos/footer.mp4)

---

## Screenshots

### Hero (full viewport)

![Hero](./docs/hero.png)

The hero anchors the brand with a **cinematic video field**, a soft bottom fade into the page background, and a **single focal column** (social proof row → headline → body → glass subscribe bar). Motion is staggered `fadeUp` so the eye reads top-to-bottom without competing animations. *Capture tip: export a still from the start of your scroll recording (hero section).*

### Mid-page (search + narrative band)

![Mid page](./docs/home-mid.png)

Below the fold, the layout shifts to **editorial rhythm**: a strong H2, three equal-width tiles on a grid, then the scroll-linked mission block. Spacing tightens intentionally so the mission video square reads as a **pause** before the word-by-word scroll interpolation. *Match to the middle section of your home recording.*

### Footer / closing CTA band

![Footer & CTA](./docs/footer-cta.png)

The shared **CTA** closes many routes: full-bleed stream, semi-opaque scrim, and paired primary/secondary buttons with the same hover scale as the hero. The **footer** is minimal—legal tone, border-only separation—so the CTA remains the last visual beat. *Match to the footer segment of your recording.*

---

## What this project exercises

- Component boundaries: **layout** (shell, nav, footer, scroll reset, scope badge) vs **ui** primitives vs **sections** composed on the home page
- **React Router v7** with a `basename` derived from `import.meta.env.BASE_URL` for GitHub Pages
- **Motion** for staggered reveals and scroll-scrubbed opacity on body copy
- **HLS** video in the CTA (`hls.js` with Safari fallback)
- **Tailwind v4** tokens and a consistent dark monochrome palette
- **CI deploy** to `gh-pages` with an SPA `404.html` fallback

---

## Project layout

```text
src/
├── components/
│   ├── index.ts          # barrel exports
│   ├── layout/           # PageShell, Navbar, Footer, ScrollToTop, ConceptScopeBadge
│   ├── ui/               # SocialIconLink, etc.
│   └── sections/         # Hero, SearchChanged, Mission, Solution, CTA
├── lib/                  # animations, cn helper
├── pages/                # route-level screens
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
public/
scripts/
  copy-spa-fallback.mjs   # index.html → 404.html for GitHub Pages
.github/workflows/
  deploy.yml
```

---

## Stack — why these choices

| Layer        | Choice              | Why |
|-------------|---------------------|-----|
| Tooling     | Vite                | Fast HMR and a predictable production build for a static deploy. |
| UI          | Tailwind CSS v4     | Tokens and utility rhythm for a consistent dark theme without hand-rolling CSS variables per component. |
| Motion      | Motion (ex-Framer)  | Staggered `fadeUp` and scroll-linked opacity for flagship sections without pulling in a second animation system. |
| Routing     | React Router v7     | Lightweight client routes; `basename` aligns with GitHub Pages subpaths. |
| Video (CTA) | hls.js              | Reliable HLS playback where MSE is available, with native HLS fallback on Safari. |
| Icons       | lucide-react        | Small, consistent stroke icons for the nav social actions. |

---

## License

MIT. See [LICENSE](./LICENSE).

---

### Before you publish

1. Add real screenshots: save `screenshot.png` at the repo root and place section shots under `docs/` (see paths above). Your recordings map cleanly to **hero / mid / footer** for still exports.
2. Replace the **Live** link in this file after GitHub Pages is enabled for the `gh-pages` branch (or adjust the workflow if you use the official Actions source).
3. Local production check (PowerShell):

```powershell
$env:GITHUB_PAGES="true"; $env:GH_REPO_NAME="your-repo-slug"; npm run build
```

Confirm asset paths in `dist/index.html` use `/your-repo-slug/...` then push to `main` or `master`.
