# Web App

Portfolio and resume website for positioning as a `Senior Full-Stack Web Developer`.

## Stack

- TanStack Router + React 19
- TypeScript
- Tailwind CSS 4
- Content Collections (Markdown case studies)

## Tooling Notes

- `nitro@3.0.1-alpha.2` is kept because TanStack Start currently relies on Nitro in the app's Vite build pipeline.
- `motion` was removed because the site only used decorative entrance effects that are now handled with lightweight CSS.
- `@vitest/coverage-v8` was removed because coverage reporting is not part of the active scripts or review flow.

## Development

From repo root:

```bash
bun run dev
```

App-specific commands:

```bash
bun --cwd apps/web run dev
bun --cwd apps/web run build
```

## Content Locations

- Resume experience: `apps/web/src/features/about/data/experience.ts`
- Skills and services: `apps/web/src/features/home/data/`
- Project case studies: `apps/web/src/features/projects/content/`
- Downloadable CV: `apps/web/public/files/fullstack-resume.pdf`
