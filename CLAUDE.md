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
  images/         ← all images actively used by components
    unused/       ← images no longer referenced anywhere (kept, not deleted)
  icons/          ← SVG icons actively used by components
    unused/       ← SVG icons no longer referenced
  components/
    unused/       ← components not rendered in App.jsx (kept for reference)
```

### Active image inventory (as of Sep 2026)

| File | Used in | Notes |
|---|---|---|
| `Hero.png` | Hero.jsx | Updated Sep 2026 — aerial house + mountains shot |
| `hero-info-bg.png` | Hero.jsx (infoBg) | Background accent for info band |
| `pattern-hero.png` | Hero.jsx (patternImg) | Geometric pattern, right side of info band |
| `pattern-services.png` | Services.jsx (patternImg) | Geometric pattern, right side of services section |
| `Frame 2147223472.png` | Hero.jsx (videoThumb) | Video player thumbnail |
| `Frame1.png` | Services.jsx | Service card 1 default image |
| `Frame1-1.png` | Services.jsx | Service card 2 default image |
| `Frame1-2.png` | Services.jsx | Service card 3 default image |
| `service1.jpg` | Services.jsx | Service card 1 hover image |
| `service2.jpg` | Services.jsx | Service card 2 hover image |
| `service3.jpg` | Services.jsx | Service card 3 hover image |
| `Image Box 1.png` | About.jsx | About left column — top image (updated Sep 2026) |
| `Image Box 2.png` | About.jsx | About left column — bottom image (updated Sep 2026) |
| `Image Box 1 (1).png` | About.jsx | About top image hover state |
| `ImageBox.png` | CoreValues.jsx | Core values right image default |
| `Image Box (4).png` | CoreValues.jsx | Core values right image hover |
| `Process.png` | Process.jsx | Process section background |
| `Image1–5.png` | Projects.jsx | Project grid hover images |
| `HoverImage1–5.png` | Projects.jsx | Project grid default images |
| `source_20260507_094702.jpg` | FAQ.jsx | FAQ left column default image |
| `Image box (3).png` | FAQ.jsx | FAQ left column hover image |
| `CTA.png` | CTA.jsx | CTA section background |
| `CTA (1).png` | CTA.jsx | CTA section hover background |
| `Footer.png` | Footer.jsx | Footer background |

### Newly uploaded — not yet wired to components (Sep 2026)

| File | Likely purpose |
|---|---|
| `About.png` | New About section photo — wire into About.jsx |
| `service-card-1.png` | Replacement for Frame1.png (service card 1) |
| `service-card-2.png` | Replacement for Frame1-1.png (service card 2) |
| `service-card-3.png` | Replacement for Frame1-2.png (service card 3) |
| `Paseo.png` | New project image — Paseo Venado |
| `Canyons.png` | New project image |
| `Oaks.png` | New project image |
| `Jens.png` | New project image |

### Before adding or replacing an image
1. **Check for reuse:** `grep -r "ImageName" src/` across all components and data files.
2. **Check for byte-identical duplicates:**
   ```bash
   md5sum src/assets/images/*.{png,jpg} | sort | awk '{seen[$1]=seen[$1]" "$2} END {for(h in seen) if(seen[h]~/ .* /) print h,seen[h]}'
   ```
3. **Naming:** Use `kebab-case` for new images (e.g. `hero-house-aerial.jpg`). Avoid Figma export names with spaces or hash prefixes.
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
| Su Casa - Hero Image | ✅ Done | New Hero.png uploaded Sep 2026 |
| Su Casa - About Su Casa | Pending | About.png uploaded — wire into About.jsx |
| Su Casa - Our Services | Pending | service-card-1/2/3.png uploaded — replace Frame1.png etc. |
| Su Casa - Why Choose Su Casa | ✅ Done | Bottom border + title color + icon fill on hover |
| Su Casa - Our Core Values | Pending | New images + subtle background accent |
| Su Casa - Our Process | Pending | New graphic element |
| Su Casa - Featured Projects | Pending | Canyons/Jens/Oaks/Paseo.png uploaded — wire into Projects.jsx |
| Su Casa - FAQs | Pending | Updated FAQ section image |
| Su Casa - CTA | Pending | Updated CTA background image |

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
