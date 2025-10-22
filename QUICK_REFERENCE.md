# Quick Reference Guide

## 🚀 Common Commands

### Development
```bash
# Start dev server
npm run dev

# Dev server will be at
# http://localhost:4321
```

### Building
```bash
# Build for production (includes Pagefind)
npm run build

# Preview production build
npm run preview
```

### Content Management
```bash
# Create new post
# Just create: src/content/blog/my-post.md

# Post template:
---
title: "Post Title"
description: "Brief description"
date: 2025-10-22
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here...
```

## 📂 File Locations

### To Customize
- **Logo**: `src/components/Header.astro` (line 11)
- **Colors**: `tailwind.config.js` (lines 6-9)
- **Site URL**: `astro.config.mjs` (line 8)
- **Footer**: `src/components/Footer.astro`
- **Navigation**: `src/components/Header.astro` (lines 18-30)

### To Add Content
- **Blog posts**: `src/content/blog/*.md`
- **Images**: `public/images/`
- **Avatars**: `public/avatars/`
- **Favicon**: `public/favicon.svg`

### To Edit Pages
- **Homepage**: `src/pages/index.astro`
- **About**: `src/pages/about.astro`
- **Projects**: `src/pages/projects.astro`
- **Contact**: `src/pages/contact.astro`

## 🎨 Style Customization

### Change Primary Color
```javascript
// tailwind.config.js
colors: {
  primary: '#YOUR_COLOR',
}
```

### Change Font
```astro
<!-- src/layouts/BaseLayout.astro -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700&display=swap" />
```

```javascript
// tailwind.config.js
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## 🔍 Search Configuration

Search works automatically after build. No configuration needed!

```bash
# Build includes Pagefind indexing
npm run build

# Search features:
# - Click search icon
# - Press Cmd/Ctrl + K
# - Type to search
# - ESC to close
```

## 📝 Writing Posts

### Frontmatter Fields
```yaml
title: string (required)
description: string (required)
date: YYYY-MM-DD (required)
author: string (required)
authorAvatar: /avatars/image.jpg (optional)
image: /images/hero.jpg (optional)
tags: [array] (optional)
draft: true/false (optional)
```

### Markdown Features
- **Headings**: `# H1`, `## H2`, `### H3`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Links**: `[text](url)`
- **Images**: `![alt](/images/image.jpg)`
- **Code**: `` `inline` `` or triple backticks for blocks
- **Lists**: `- item` or `1. item`
- **Quotes**: `> quote`

## 🚢 Quick Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
# Drag dist/ folder after:
npm run build
```

### GitHub Pages
```bash
# Push to main with workflow file
git add .
git commit -m "Deploy"
git push
```

## 🐛 Troubleshooting

### Dev server not starting
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build fails
```bash
# Check Node version (need 18+)
node --version

# Clear Astro cache
rm -rf .astro
npm run build
```

### Search not working
```bash
# Make sure you built first
npm run build

# Then preview
npm run preview
```

### Styles not loading
```bash
# Check Tailwind is running
# Restart dev server
```

## 📊 Performance Check

```bash
# Install Lighthouse
npm install -g lighthouse

# After building and deploying
lighthouse https://yoursite.com --view
```

## 🔧 Common Tasks

### Add Navigation Item
Edit `src/components/Header.astro`:
```astro
<a href="/new-page">NEW PAGE</a>
```

### Add Social Link
Edit `src/components/Footer.astro`:
```astro
<a href="https://twitter.com/you">Twitter</a>
```

### Change Hero Text
Edit `src/pages/index.astro`:
```astro
<h1>Your Custom Headline</h1>
```

### Create New Page
```bash
# Create file
# src/pages/new-page.astro

# Will be available at
# /new-page
```

## 📱 Testing

### Mobile
```bash
# Dev server accessible on network
npm run dev

# Then visit from phone:
# http://YOUR_IP:4321
```

### Lighthouse
```bash
lighthouse http://localhost:4321 --view
```

### Accessibility
- Use keyboard to navigate
- Test with screen reader
- Check color contrast
- Verify focus indicators

## 💡 Tips

1. **Hot Reload**: Changes auto-reload in dev mode
2. **Type Safety**: Content Collections validate frontmatter
3. **Search Index**: Auto-generated on build
4. **Image Optimization**: Use WebP format
5. **Build Time**: Should be < 30 seconds

## 🔗 Useful Links

- [Astro Docs](https://docs.astro.build)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org)
- [Pagefind Docs](https://pagefind.app)

## 📞 Getting Help

1. Check [README.md](./README.md)
2. Check [GETTING_STARTED.md](./GETTING_STARTED.md)
3. Check [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
4. Check [Astro Discord](https://astro.build/chat)

## ⌨️ Keyboard Shortcuts

- `Cmd/Ctrl + K` - Open search
- `ESC` - Close search/modals
- `Tab` - Navigate (should work everywhere)
- `Enter` - Activate buttons/links

---

Keep this file handy for quick reference! 📌

