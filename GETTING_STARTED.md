# Getting Started

## Prerequisites

- Node.js 18+ or 20+
- npm, pnpm, or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start the development server
npm run dev
```

Visit `http://localhost:4321` to see your blog.

## Building for Production

```bash
# Build the site with Pagefind indexing
npm run build
```

This will:
1. Generate static HTML files in `dist/`
2. Index all content with Pagefind for search
3. Optimize all assets

## Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable components
├── content/
│   └── blog/         # Your blog posts (Markdown)
├── layouts/          # Page layouts
├── pages/            # Routes (file-based routing)
└── styles/           # Global CSS
```

## Creating Your First Post

1. Create a new file in `src/content/blog/my-first-post.md`:

```markdown
---
title: "My First Post"
description: "This is my first blog post"
date: 2025-10-22
author: "Your Name"
tags: ["blogging", "first-post"]
---

# My First Post

This is the content of my first post!
```

2. The post will automatically appear on your homepage

## Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#C62F41',  // Your brand color
  background: '#F5F5F5',
}
```

### Site Info

Edit `src/layouts/BaseLayout.astro`:

```astro
const canonicalURL = new URL(Astro.url.pathname, 'https://yourdomain.com');
```

### Logo Text

Edit `src/components/Header.astro`:

```astro
<span class="text-white font-bold">YOUR BRAND</span>
```

## Adding Images

1. Place images in `public/images/`
2. Reference them in your posts:

```markdown
![Alt text](/images/my-image.jpg)
```

## Search Configuration

Search is automatically configured with Pagefind. It will:
- Index all pages during build
- Load only when users open search
- Provide instant results

No additional configuration needed!

## Deployment

### Vercel

```bash
vercel deploy
```

### Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Cloudflare Pages

1. Connect your Git repository
2. Build command: `npm run build`
3. Build output directory: `dist`

## Need Help?

Check the main [README.md](./README.md) for detailed documentation.

---

Happy blogging! 🚀

