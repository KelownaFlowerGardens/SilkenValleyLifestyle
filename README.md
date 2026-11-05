# Silken Valley Lifestyle

Astro static site for Silken Valley Lifestyle, covering recipes, fitness, animal care, gardening, and good housekeeping.

## Requirements

- Node.js 18+ (Node 20+ recommended)
- npm

## Setup

```bash
cd "C:\Users\geosi\OneDrive\Desktop\OneDrive\Code\lifestyle-blog"
npm install
npm run dev
```

Open the local URL shown by Astro (usually `http://localhost:4321`).

## Structure

- `src/pages/` — home, category pages, and post routes
- `src/content/posts/` — Markdown blog posts
- `src/content/config.ts` — content collection schema
- `src/layouts/` — shared page layout
- `src/components/` — reusable UI components
- `public/styles/` — global styles
- `public/CNAME` — GitHub Pages custom domain (`silkenvalleylifestyle.ca`)

## Adding a post

Create a Markdown file in `src/content/posts/`:

```md
---
title: "Post title"
description: "Short summary."
pubDate: 2026-11-05
category: recipes
---

Post content here.
```

Valid categories: `recipes`, `fitness`, `animal-care`, `gardening`, `housekeeping`.

## Next steps

- Add post images and richer frontmatter (tags, hero image, author)
- Add category filtering/search
- Customize branding and deployment settings (`site` in `astro.config.mjs`)
