# Web App

Portfolio and resume website for positioning as a `Senior Full-Stack Web Developer`.

## Stack

- TanStack Router + React 19
- TypeScript
- Tailwind CSS 4
- Content Collections (Markdown case studies)

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
