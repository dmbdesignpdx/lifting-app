# Olympic Lifting Calculator

[![Netlify Status](https://api.netlify.com/api/v1/badges/aa09746e-d306-4d72-9d89-2cd049ee9cd9/deploy-status)](https://app.netlify.com/projects/olympic-lift/deploys)

A progressive web app for Olympic lifters. Enter your PRs for the Snatch, Clean & Jerk, Back Squat
and Front Squat, and get a table of working weights from 100% down to 50% in 5% steps.

Everything runs client-side. PRs are saved in your browser's `localStorage`; there is no backend.

## Getting Started

Requires [Bun](https://bun.sh).

```bash
bun i
bun run dev     # http://localhost:3000
```

| Command            | What it does                                      |
| ------------------ | ------------------------------------------------- |
| `bun run dev`      | Start the Next.js dev server                      |
| `bun run build`    | Production build                                  |
| `bun run start`    | Serve the production build                        |
| `bun run lint`     | Biome check                                       |
| `bun run format`   | Biome format (writes changes)                     |
| `bun test`         | Run tests affected by changes (`bun test --changed`) |
| `bun run test:watch` | Run tests in watch mode                         |
| `bun run comp Name -e section` | Scaffold a component and its test     |

## Stack

- [React 19](https://react.dev) with the React Compiler (`reactCompiler: true`), so no manual
  `useMemo` / `useCallback`
- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com), wired through `@tailwindcss/turbopack` rather than
  PostCSS
- [Bun](https://bun.sh) for installs and tests (happy-dom + Testing Library)
- [Biome](https://biomejs.dev) for linting and formatting

## How It Works

- `src/app/page.tsx` is the single client page.
- `src/hooks/use-lift-state.ts` wraps one `localStorage` key in `useSyncExternalStore` and holds the
  four lift PRs as JSON.
- `src/constants/index.ts` defines the lifts and the `PERCENTAGES` list; `src/lib/index.ts` has the
  `cn` helper and the percentage math (`getPercentage`, `getNewMax`).
- `src/content/` holds UI copy, labels, links and site metadata.
- `src/components/` contains the flat, kebab-case app components (`form`, `data`, `table`, `input`,
  `button`, `link`, `header`, `footer`).

## PWA and Next.js Features

- Web app manifest (`src/app/manifest.ts`), 192/512 icons, Open Graph image, `robots` and `sitemap`
- Cache Components (`cacheComponents: true`); `"use cache"` is used in the footer's current-year
  component
- `inlineCss` to reduce render-blocking stylesheet requests
- `globalNotFound` for a global 404 page and the experimental TypeScript CLI (`useTypeScriptCli`)
- Tailwind v4 CSS-first config, with logical utilities (`mbs-*`, `inline-*`) for writing-mode-aware
  layout

## Testing

Tests live in `src/__tests__/` and run with `bun test`, using happy-dom, Testing Library and
jest-dom matchers preloaded via `bunfig.toml`.
