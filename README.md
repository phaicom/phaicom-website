# Phaicom Website

Personal portfolio and resume website, built as a monorepo with a web app in `apps/web`.

## Overview

This project is focused on presenting:

- Professional profile as a Senior Full-Stack Web Developer
- Resume and experience highlights
- Skills and service offerings
- Project case studies from Markdown content

## Tech Stack

- Bun (workspace package manager)
- Turbo (monorepo task runner)
- React 19 + TanStack Router
- TypeScript
- Tailwind CSS 4
- Content Collections (Markdown-driven content)

## Project Structure

- `apps/web` - main website application
- `scripts` - utility scripts (e.g., image optimization)

## Prerequisites

- Bun `1.3.9` (as defined in `package.json`)

## Getting Started

Install dependencies (from repo root):

```bash
bun install
```

Run development mode for the workspace:

```bash
bun run dev
```

## Available Scripts (Root)

```bash
bun run dev
bun run build
bun run test
bun run lint
bun run lint:fix
bun run fmt
bun run fmt:check
bun run optimize:images
```

## App-Specific Commands

```bash
bun --cwd apps/web run dev
bun --cwd apps/web run build
```

## Key Content Locations

- Resume experience: `apps/web/src/features/about/data/experience.ts`
- Skills and services: `apps/web/src/features/home/data/`
- Project case studies: `apps/web/src/features/projects/content/`
- Downloadable CV: `apps/web/public/files/fullstack-resume.pdf`

## Additional App Docs

Detailed app-level notes are available in:

- `apps/web/README.md`
