# Su Casa Builders — Website

Marketing website for **Su Casa Builders LLC**, a general contractor based in Sierra Vista, Arizona.

## Tech Stack

- **React 19** + **Vite 8** (JSX only — no TypeScript)
- **React Router v7** — real URL routes with SPA fallback via `vercel.json`
- **react-helmet-async** — per-route `<title>`, meta description, canonical, and OG tags
- **react-snap** — static pre-rendering for crawler visibility
- **Inline styles only** — no Tailwind classes in active components
- **Fonts:** Manrope (headings/body) + DM Sans (Hero `<h1>`) via Google Fonts
- **Contact form:** Formspree (`SuCasaBuilder03@gmail.com`)

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:5173
npm run build      # generates sitemap.xml then runs vite build
npm run lint       # ESLint check
```

## Project Structure

```
src/
  components/     # One file per page section (About, Services, Projects, …)
  pages/          # Per-route page wrappers with Helmet metadata
  data/           # Content arrays consumed by components (services, projects, FAQs, …)
  hooks/          # Custom React hooks
  assets/
    icons/        # SVGs in active use; icons/unused/ for retired ones
    images/
      about/      # About section images
      core-values/
      cta/
      faq/
      footer/
      hero/
      process/
      projects/
      services/
      unused/     # Retired images — kept for reference, never deleted outright
scripts/
  generate-sitemap.js   # Runs before every build; writes public/sitemap.xml
public/
  sitemap.xml     # Auto-generated — do not edit by hand
  robots.txt
  favicon.svg
```

## Adding New Assets

| Asset type | Where it goes |
|---|---|
| New section image | `src/assets/images/<section-name>/` |
| Retired image | `src/assets/images/unused/` |
| Active icon | `src/assets/icons/` |
| Retired icon | `src/assets/icons/unused/` |

Use `kebab-case` filenames. When retiring an asset, move it to `unused/` — never delete outright.

## Deployment

Deployed to **Vercel**. Every push to the working branch triggers a preview deployment. The `vercel.json` SPA rewrite sends all unknown paths to `index.html`, and pre-rendered static shells are served directly to crawlers.

## Development Notes

- See **CLAUDE.md** for the full design system tokens, component conventions, and session history.
- Working branch: `claude/sharp-feynman-k3wtbt` — never push to `main` directly.
