---
title: Picross
subtitle: Browser-Based Nonogram Game & Solver Engine
category: Frontend Architecture / Game Development
techStack:
  - Nuxt 3 (Vue 3)
  - TypeScript
  - Pinia
  - UnoCSS
  - Turbo + pnpm Monorepo
  - Custom Solver Engine (@picross/core)
featured: false
startDate: 2021-04-28
endDate: Present
websiteUrl: https://picross-git-main-phaicom.vercel.app
githubUrl: https://github.com/phaicom/picross
---

## Project Overview

**Picross** is a browser-based nonogram puzzle game that combines a responsive frontend experience with a deterministic + bounded-backtracking solver engine.

I built this project with a clear separation between UI, state management, and solver logic, so gameplay remains smooth while complex puzzle logic stays modular and testable.

The project focuses on:

- Interactive puzzle gameplay
- Real-time row/column validation
- Deterministic and replayable solving logic
- Controlled backtracking for harder boards
- Scalable monorepo architecture

![Picross Gameplay](/images/projects/picross-1.webp)

---

## Core Features

### 1. Interactive Puzzle Board

Players can:

- Fill and mark cells with multiple interaction modes
- Track progress through clue completion feedback
- Reset, continue, and retry puzzles quickly
- Solve built-in puzzle packs from easy to hard

The board interactions are connected to reactive state updates so each action immediately reflects on hints and completion status.

![Puzzle Board UI](/images/projects/picross-2.webp)

---

### 2. Real-Time Validation Strategy

To keep interaction fast, validation does not recompute the entire grid on every move.

Instead, the logic:

- Recalculates only the affected row and column
- Derives contiguous run segments
- Compares runs against clue indices
- Marks matching clues as completed in real time

This approach improves runtime efficiency and keeps gameplay responsive even on larger puzzles.

![Validation and Clues](/images/projects/picross-3.webp)

---

### 3. Deterministic + Backtracking Solver

The solver runs in two phases:

- Deterministic constraint propagation for guaranteed moves
- Bounded DFS backtracking when deterministic progress stalls

Preset-based limits (iterations, nodes, timeout, step count) prevent runaway solving and keep the solver predictable for UI playback.

![Solver Playback Demo](/images/projects/picross-g-1.gif)

---

## Technical Architecture

### Frontend Layer

- Nuxt 3 + Vue 3 for app and routing structure
- Pinia stores for reactive puzzle and pointer state
- TypeScript for strict domain modeling
- UnoCSS for utility-driven styling

### Engine & State Layer

- `@picross/core` as framework-independent solving engine
- `usePuzzleStore` for puzzle grid, solver lifecycle, and win detection
- `usePointerStore` for cell focus and interaction modes
- Shared puzzle types/data through monorepo packages

This separation keeps domain logic portable while preserving clear frontend boundaries.

---

## My Responsibilities

- Designed the puzzle interaction and state architecture
- Implemented incremental row/column validation logic
- Built deterministic + bounded-backtracking solver flow
- Integrated solver playback and status feedback into UI
- Structured monorepo packages for reusable puzzle engine logic
- Maintained type-safe contracts across app and engine layers

---

## Impact

This project demonstrates my ability to:

- Build game-like interactive web experiences with Vue/Nuxt
- Design performant reactive state workflows
- Integrate algorithmic problem-solving into frontend products
- Separate presentation from domain engine architecture
- Deliver maintainable, scalable code in a monorepo setup

---

## Summary

**Picross** highlights a balance between frontend UX and algorithmic engineering, combining responsive gameplay with a controlled, explainable solver system suitable for production-scale architecture.
