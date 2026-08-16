# Sumit Kumar Singh — Portfolio

Personal portfolio site for Sumit Kumar Singh, Technical Program Manager & Mobile Delivery Leader.

Live: https://sumitksingh.singh-sumitkr14.workers.dev/

## Stack

- **React 19** + **Vite** — build tooling
- **Plain CSS** with CSS custom properties for theming (light/dark mode, no CSS framework)
- **lucide-react** — icons
- **jsPDF** + **html2canvas** — in-browser "Export Profile PDF" feature (dynamically imported, not part of the initial bundle)
- **oxlint** — linting

## Architecture

The `src/` folder follows a loose clean-architecture split:

```
src/
  data/
    sources/        # static content (projects, experience, skills, testimonials, etc.)
    repositories/    # thin data-access layer over the sources
  domain/
    usecases/        # business logic that repositories are consumed through
  presentation/
    viewmodels/       # hooks that wire use-cases to view state
    views/
      components/      # UI components, one .jsx + .css pair each
      hooks/            # shared UI hooks (scroll reveal, typed text, etc.)
  theme/              # ThemeContext (light/dark toggle, persisted to localStorage)
  utils/              # PDF export, shared icon map
```

Content lives in `src/data/sources/mockData.js` — update this file to change what's shown on the site (projects, experience, skills, stats, testimonials, certifications, quotes).

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Notes

- Dark/light theme is controlled via a `data-theme` attribute on `<html>`, driven by `src/theme/ThemeContext.jsx`, with all colors defined as CSS variables in `src/index.css`.
- Icons referenced by name in content data (e.g. `iconStr: 'Calendar'`) are resolved through `src/utils/iconMap.js` — this uses explicit named imports from `lucide-react` rather than a wildcard import, so the bundler can tree-shake unused icons out of the production build.
