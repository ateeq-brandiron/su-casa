# Su Casa Builders — Project Instructions

This file is living documentation. Update it whenever you discover a rule the hard way so the next session doesn't repeat the mistake.

---

## Git workflow

- **Working branch:** `claude/sharp-feynman-k3wtbt` — all development goes here. Never push directly to `main`.
- Create feature sub-branches off the working branch only if a change is large or experimental; merge back via rebase (no merge commits).
- Each commit must be scoped to **one logical change**. Commit message format:
  ```
  <area>: <why this change was needed, not just what it does>

  Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_<id>
  ```
  Examples of good messages:
  - `hero: swap background image to aerial house shot per Asana task`
  - `why-us: add bottom border hover effect per design feedback`
  - `data: extract services list to data file to decouple content from UI`
- Before pushing, always `git fetch origin claude/sharp-feynman-k3wtbt` and rebase onto it if it has moved. Never force-push over someone else's work.
- **Never create a PR** unless the user explicitly asks for one.

---

## Tech stack

- **Framework:** React 19 + Vite 8, JSX (no TypeScript — no `tsc`, lint with `npm run lint`)
- **Styling:** Inline styles only — no Tailwind classes in any active component. All new work uses inline styles.
- **Fonts:** Manrope (all body/headings), DM Sans (Hero `<h1>` only). Both loaded via Google Fonts in `index.html`.
- **Contact form:** Formspree endpoint `https://formspree.io/SuCasaBuilder03@gmail.com`. First submission triggers an email verification to that address — the owner must click the link once.

---

## Design system tokens

| Token | Value |
|---|---|
| Primary blue | `#245079` |
| Dark text | `#111827` |
| Body text | `#3C3C3C` |
| Label/secondary | `#374151` |
| Section padding (desktop) | `100px 75px` |
| Section padding (mobile) | `60px 24px` |
| Max width | `1440px`, centered with `margin: '0 auto'` |
| H2 | Manrope, 48px, weight 400–500, color #245079, line-height 130% |
| Body large | Manrope, 20px, weight 400, #3C3C3C, line-height 140% |
| Section label | Manrope, 0.7rem, weight 600, #374151, letter-spacing 0.18em, uppercase |

---

## Page section order (App.jsx)

```
Navbar → Hero → About → Services → WhyUs → CoreValues → Process → Projects → Testimonials → FAQ → CTA → Contact → Footer
```

---

## Component conventions

### Hover state
Always extract to a named sub-component with `useState(false)`. Never call `useState` inside a `.map()`.

```jsx
function ServiceCard({ svc }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} ...>
    </div>
  )
}
// then: {SERVICES.map(svc => <ServiceCard key={svc.slug} svc={svc} />)}
```

### Image swap on hover
Use two absolutely-positioned `<img>` tags cross-fading via opacity:

```jsx
<div style={{ position: 'relative', overflow: 'hidden', height }}>
  <img src={defaultSrc} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: hovered ? 0 : 1, transition: 'opacity 0.5s ease' }} />
  <img src={hoverSrc}   style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: hovered ? 1 : 0, transition: 'opacity 0.5s ease' }} />
</div>
```

### Mobile breakpoint
Each section handles its own responsive CSS via an inline `<style>` block at the bottom, targeting the section's `id`. Breakpoint is `max-width: 768px`. Example:

```jsx
<style>{`
  @media (max-width: 768px) {
    #services > div { padding: 60px 24px !important; grid-template-columns: 1fr !important; }
  }
`}</style>
```

---

## Structured content / data files

All repeating content lives in `src/data/` — not hardcoded in components. Each item has a stable `slug`. Files:

| File | Feeds |
|---|---|
| `src/data/services.js` | `Services.jsx` |
| `src/data/why-us.js` | `WhyUs.jsx` |
| `src/data/core-values.js` | `CoreValues.jsx` |
| `src/data/process.js` | `Process.jsx` |
| `src/data/testimonials.js` | `Testimonials.jsx` |
| `src/data/projects.js` | `Projects.jsx` |
| `src/data/faqs.js` | `FAQ.jsx` |

When adding a new item (e.g. a new project photo), add it to the data file first, then update the component import if needed.

---

## Asset rules

### Folder layout
```
src/assets/
  images/
    hero/           ← Hero.jsx images
    about/          ← About.jsx images
    services/       ← Services.jsx images
    projects/       ← Projects.jsx images
    process/        ← Process.jsx images
    core-values/    ← CoreValues.jsx images
    faq/            ← FAQ.jsx images
    cta/            ← CTA.jsx images
    footer/         ← Footer.jsx images
    unused/         ← images no longer referenced (kept, not deleted)
  icons/            ← SVG icons actively used by components
    unused/         ← SVG icons no longer referenced
  components/
    unused/         ← components not rendered in App.jsx (kept for reference)
```

**Rule:** Every new image goes into the section subfolder that matches the component using it. Name files in `kebab-case`. When retiring an image, move it to `unused/` — never delete outright.

### Active image inventory (as of Sep 2026)

| File | Used in | Notes |
|---|---|---|
| `hero/hero-bg.png` | Hero.jsx | Aerial house + mountains shot |
| `hero/hero-info-bg.png` | Hero.jsx | Background accent for info band |
| `hero/pattern-hero.png` | Hero.jsx | Geometric pattern, right side of info band |
| `hero/video-thumb.png` | Hero.jsx | Video player thumbnail |
| `about/about-top.png` | About.jsx | Left column top image (default) |
| `about/about-top-hover.png` | About.jsx | Left column top image (hover) |
| `about/about-bottom.png` | About.jsx | Left column bottom image (default) |
| `about/about-bottom-hover.png` | About.jsx | Left column bottom image (hover) |
| `services/general-contracting-card.png` | Services.jsx | Service card 1 default |
| `services/subcontracting-card.png` | Services.jsx | Service card 2 default |
| `services/special-projects-card.png` | Services.jsx | Service card 3 default |
| `services/general-contracting-hover.jpg` | Services.jsx | Service card 1 hover |
| `services/subcontracting-hover.jpg` | Services.jsx | Service card 2 hover |
| `services/special-projects-hover.jpg` | Services.jsx | Service card 3 hover |
| `services/pattern-services.png` | Services.jsx | Geometric pattern, right side |
| `core-values/core-values-default.webp` | CoreValues.jsx | Right column image (default) |
| `core-values/core-values-hover.webp` | CoreValues.jsx | Right column image (hover) |
| `process/process-bg.png` | Process.jsx | Full-bleed section background |
| `process/sketch-top-right.png` | Process.jsx | Architectural sketch, top-right |
| `process/cityscape-bottom-left.png` | Process.jsx | Cityscape graphic, bottom-left |
| `projects/paseo-venado.png` | Projects.jsx | Paseo Venado — default |
| `projects/paseo-venado-hover.png` | Projects.jsx | Paseo Venado — hover |
| `projects/the-canyons.png` | Projects.jsx | The Canyons — default |
| `projects/the-canyons-hover.png` | Projects.jsx | The Canyons — hover |
| `projects/the-oaks.png` | Projects.jsx | The Oaks — default |
| `projects/the-oaks-hover.png` | Projects.jsx | The Oaks — hover |
| `projects/jens.png` | Projects.jsx | Jens — default |
| `projects/jens-hover.png` | Projects.jsx | Jens — hover |
| `projects/project-5.png` | Projects.jsx | Project 5 — default |
| `projects/project-5-hover.png` | Projects.jsx | Project 5 — hover |
| `faq/faq-default.png` | FAQ.jsx | Left column image (default) |
| `faq/faq-hover.png` | FAQ.jsx | Left column image (hover) |
| `cta/cta-default.png` | CTA.jsx | Section background (default) |
| `cta/cta-hover.png` | CTA.jsx | Section background (hover) |
| `footer/footer-bg.png` | Footer.jsx | Footer background |

### Before adding or replacing an image
1. **Pick the right subfolder** — match the section component (e.g. a new About image → `about/`).
2. **Check for reuse:** `grep -r "filename" src/` across all components and data files.
3. **Naming:** Use `kebab-case` (e.g. `about-team-photo.jpg`). Avoid Figma export names with spaces or hash prefixes.
4. **When retiring an image:** Move it to `src/assets/images/unused/` rather than deleting it outright.

---

## Verification steps (required before marking any change done)

1. **Build check:** `npm run build` — must complete with no errors.
2. **Lint:** `npm run lint` — no new errors.
3. **Visual check:** For any UI change, start `npm run dev`, open the browser, navigate to the affected section, and confirm it renders correctly. Do not claim a visual change is done without actually seeing it.
4. **Mobile check:** Resize to <768px and verify the responsive styles hold.

---

## Pending Asana tasks (as of Sep 2026)

All assigned to Ateeq Asif, due Sep 4 2026.

| Task | Status | Notes |
|---|---|---|
| Su Casa - Hero Image | ✅ Done | hero/hero-bg.png wired |
| Su Casa - About Su Casa | ✅ Done | about/ images wired into About.jsx |
| Su Casa - Our Services | ✅ Done | services/ card + hover images wired |
| Su Casa - Why Choose Su Casa | ✅ Done | Bottom border + title color + icon fill on hover |
| Su Casa - Our Core Values | ✅ Done | core-values/ images wired into CoreValues.jsx |
| Su Casa - Our Process | ✅ Done | process/ bg + sketch + cityscape wired |
| Su Casa - Featured Projects | ✅ Done | projects/ images wired; plain = default, hover = text overlay |
| Su Casa - FAQs | ✅ Done | faq/ images wired into FAQ.jsx |
| Su Casa - CTA | ✅ Done | cta/ images wired into CTA.jsx |

**Pending client decisions (do not implement until answered):**
- What video will play in the Hero info-band video player?
- Where should Featured Projects images link to (dedicated pages, modal, or other)?

---

## Things that went wrong once — don't repeat

- **Tailwind vs inline styles:** `WhyChoose.jsx` is archived in `components/unused/` — it used Tailwind and was replaced by `WhyUs.jsx`. Don't re-introduce Tailwind in new components.
- **Missing icon imports:** `contact-phone.svg`, `contact-clock.svg`, `contact-location.svg` exist in `src/assets/icons/unused/` — they were referenced with wrong relative paths in an earlier Contact.jsx. Contact.jsx now uses inline SVGs instead.
- **useState in .map():** Caused a React hooks violation. Always extract to a named component first.
- **Hero arrow stroke color:** When the scroll button background was changed to white, the SVG stroke was still `stroke="white"` and became invisible. Always check SVG stroke/fill against the new background.
- **Branch confusion:** Session branches are ephemeral. Working branch is `claude/sharp-feynman-k3wtbt`.
- **git mv vs OS mv:** Using `mv` at the OS level means git tracks files as deleted + new-file (not rename). Always `git add -u` to stage deletions alongside the new files in the same commit.
