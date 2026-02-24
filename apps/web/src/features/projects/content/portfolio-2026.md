---
title: Personal Portfolio (2026)
category: Frontend
techStack:
  - React
  - TanStack Start
  - Tailwind CSS
  - Framer Motion
  - TypeScript
featured: false
---

# Personal Portfolio (2026)

Modern developer portfolio built with TanStack Start, React, and Tailwind CSS. Focused on performance, SEO optimization, and clean UI system design.

## Project Overview

This portfolio website showcases my projects, skills, and experience as a full-stack developer. Built with modern web technologies, it emphasizes performance, accessibility, and user experience.

## Key Features

### 1. Performance-First Design

Optimized for speed and efficiency:

- Server-side rendering (SSR)
- Static generation where possible
- Optimized asset loading
- Minimal JavaScript bundle

### 2. SEO Optimization

Built for discoverability:

- Semantic HTML structure
- Open Graph meta tags
- Structured data (JSON-LD)
- Dynamic sitemap generation

### 3. Responsive Design

Works beautifully everywhere:

- Mobile-first approach
- Fluid typography
- Adaptive layouts
- Touch-friendly interactions

### 4. Dark Mode Support

Comfortable viewing in any environment:

- System preference detection
- Manual toggle option
- Smooth theme transitions
- Persistent preference storage

## Technical Architecture

### Technology Stack

- **TanStack Start** - Full-stack React framework
- **React 19** - UI library
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **TypeScript** - Type safety

### Project Structure

```
├── src/
│   ├── routes/           # File-based routing
│   ├── features/         # Feature-based modules
│   ├── shared/           # Reusable components
│   ├── config/           # Site configuration
│   └── styles/           # Global styles
├── public/               # Static assets
└── content/              # Markdown content
```

## Design System

### Color Palette

The site uses a carefully crafted color system:

- **Primary**: Purple tones for brand identity
- **Accent**: Complementary colors for highlights
- **Neutral**: Grays for text and backgrounds
- **Semantic**: Colors for success, warning, error states

### Typography

A clear typographic hierarchy:

| Element | Size     | Weight |
| ------- | -------- | ------ |
| H1      | 2.5rem   | 600    |
| H2      | 2rem     | 600    |
| H3      | 1.5rem   | 500    |
| Body    | 1rem     | 400    |
| Small   | 0.875rem | 400    |

### Component Library

Reusable components built with Tailwind:

- **Button** - Multiple variants and sizes
- **Card** - Content containers with hover effects
- **Badge** - Category and status indicators
- **Navigation** - Responsive header with mobile menu

## Performance Metrics

| Metric                   | Score  |
| ------------------------ | ------ |
| Lighthouse Performance   | 95+    |
| First Contentful Paint   | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift  | < 0.1  |

## Animation Strategy

Subtle, purposeful animations enhance UX:

- Page transitions with Framer Motion
- Scroll-triggered animations
- Hover micro-interactions
- Loading states

```tsx
// Example animation pattern
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {content}
</motion.div>
```

## Lessons Learned

Building this portfolio taught me:

- Designing for performance from the start
- Creating accessible, semantic markup
- Building a cohesive design system
- Balancing aesthetics with functionality

## Conclusion

This portfolio represents my approach to modern web development: clean code, thoughtful design, and attention to performance. It serves as both a showcase of my work and a demonstration of my technical capabilities.
