# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Olympic Lifting Calculator": a client-side PR and percentage calculator for Olympic lifting. Next.js 16 (App Router) + React 19, Tailwind v4, TypeScript, Biome. Package manager is **bun**.

`AGENTS.md` warns this Next.js version has breaking changes from what you may know — read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code.

## Commands

```bash
bun i                  # install
bun run dev            # next dev (http://localhost:3000)
bun run build          # next build
bun run lint           # biome check
bun run format         # biome format --write
bun test               # NOTE: the script is `bun test --changed` (only tests affected by changes)
bun test src/__tests__/text-link.test.tsx   # single test file
bun run test:watch     # bun test --watch
bun run comp Name -e section   # scaffold src/components/name.tsx + a test (scripts/create-component)
```

## Architecture

- The whole app is one client page, `src/app/page.tsx`. It reads/writes the four lift PRs (`Snatch`, `Clean & Jerk`, `Back Squat`, `Front Squat`) through `useLocalStorage` in `src/hooks/use-lift-state.ts` — a `useSyncExternalStore` wrapper around a single `localStorage` key (`LOCAL_KEY`) holding a JSON `LiftState`. There is no backend; the form action just serializes `FormData` into that key.
- `src/constants/index.ts` is the source of truth: the `Lift` enum-like object, `LiftState`/`LiftType` types, `PERCENTAGES` (100 down to 50 in steps of 5), UI copy in `Label`, and site meta in `Meta`/`Url`. Derive from `LIFTS` rather than hardcoding lift names.
- `src/lib/index.ts` — `cn` (clsx + tailwind-merge) and the percentage math helpers (`getPercentage`, `getNewMax`, ...). `src/types/main.d.ts` holds shared types.
- `src/components/` — flat, kebab-case app components (`form`, `data`, `table`, `button`, ...). There is no `components/ui` directory currently, though `tsconfig` still aliases `ui/*` to it.
- `next.config.ts` enables `cacheComponents`, `partialPrefetching`, `typedRoutes`, `inlineCss`, `globalNotFound`, and the React Compiler (`reactCompiler: true`) — avoid manual `useMemo`/`useCallback` unless needed. Tailwind is wired through a Turbopack `*.css` loader (`@tailwindcss/turbopack`), not PostCSS. Tailwind styles use logical utilities (`mbs-*`, `inline-*`).
- Path aliases: `@/*` → `src/*`, `~/*` → repo root.

## Testing

Tests live in `src/__tests__/` (bun test, configured in `bunfig.toml`): happy-dom plus Testing Library and jest-dom matchers are preloaded, matcher types are in `src/types/matchers.d.ts`, timeout is 4s. Caveat: `bunfig.toml` preloads from `src/__tests__/setup/` but the directory on disk is `src/__tests__/_setup/` — fix the path if tests fail to preload. `test:ab` runs Playwright but no Playwright config exists yet.

## Style

Biome handles formatting and linting: 2-space indent, 100-col width, `x => ...` arrow params without parens, multiline JSX attributes, `useExhaustiveDependencies` off. Imports are organized in groups: packages (`// Theirs`), blank line, `@/` aliases (`// Ours`), blank line, relative. New words that trip the spellchecker go in `cspell.json`.
