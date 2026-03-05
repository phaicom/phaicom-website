# Phaicom Website

Personal portfolio and resume website in a Bun + Turbo monorepo.

## Overview

This repository powers a portfolio site focused on:

- Professional profile and resume
- Skills and services
- Detailed project case studies (Markdown-driven)

Main app location: `apps/web`

## Stack

- Bun `1.3.9`
- Turborepo
- React 19 + TanStack Router
- TypeScript
- Tailwind CSS 4
- Content Collections

## Monorepo Structure

- `apps/web` - portfolio website
- `scripts` - repo utility scripts

## Quick Start

```bash
bun install
bun run dev
```

## Root Scripts

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

## App Scripts (`apps/web`)

```bash
bun --cwd apps/web run dev
bun --cwd apps/web run build
```

## Portfolio Case Studies

Source folder: `apps/web/src/features/projects/content/`

- `the1.md` - The 1 Platform (Enterprise Loyalty)
- `hjem.md` - Hjem.no (Real Estate Marketplace)
- `hfm.md` - HFM (Global Trading Marketing Platform)
- `picross.md` - Picross (Nonogram Game + Solver)
- `backoffice-sbds.md`, `skywalk.md`, `tribe.md`

## Key Content Locations

- Resume data: `apps/web/src/features/about/data/experience.ts`
- Home data (skills/services): `apps/web/src/features/home/data/`
- Project content: `apps/web/src/features/projects/content/`
- Public assets: `apps/web/public/`
- Downloadable CV: `apps/web/public/files/fullstack-resume.pdf`

## Documentation

- App-specific docs: `apps/web/README.md`
