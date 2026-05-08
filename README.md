# KB — Portfolio

A minimalistic, single page portfolio website built with Next.js 14, Tailwind CSS v4, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Styling**: Tailwind CSS v4 (CSS-first config) — nude/beige palette
- **Animation**: Framer Motion (scroll-triggered, stagger, page transitions)
- **Language**: TypeScript

## Features

- Custom animated cursor (dot + trailing ring, expands on hover)
- Animated hero with cycling word morphing
- Projects grid with beige card thumbnails, tech tags, and slide-in story modals
- About section with animated vertical timeline and interests strip
- Writing/blog section with slide-in full-read panel
- Resume section with skills grid and "Open to opportunities" CTA
- Auto-hiding nav on scroll down, reappears on scroll up
- Mobile-first responsive layout with animated hamburger menu
- Custom thin scrollbar, text selection styles, noise texture overlay

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All content lives in `src/data/index.ts` — update projects, blog posts, skills, timeline, and interests there.
