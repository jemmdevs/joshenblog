# Customization Guide

This guide will help you customize the blog to match your brand and preferences.

## 🎨 Branding

### Logo

**Location**: `src/components/Header.astro`

```astro
<div class="bg-primary px-3 py-1.5 rounded">
  <span class="text-white font-bold text-sm tracking-wider">YOUR BRAND</span>
</div>
```

Replace `SENRI` with your brand name.

### Colors

**Location**: `tailwind.config.js`

```javascript
colors: {
  primary: '#C62F41',     // Main brand color
  background: '#F5F5F5',  // Page background
}
```

Update these hex values to match your brand colors.

### Fonts

**Location**: `src/layouts/BaseLayout.astro`

Current font: **Inter**

To change:

1. Replace the Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

2. Update Tailwind config:
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 📝 Content

### Site Metadata

**Location**: `src/pages/index.astro` and all page files

```astro
<BaseLayout 
  title="Your Blog | Tagline"
  description="Your blog description"
>
```

### Site URL

**Location**: `astro.config.mjs`

```javascript
site: 'https://yourdomain.com'
```

### Author Information

**Location**: Blog post frontmatter

```markdown
---
author: "Your Name"
authorAvatar: "/avatars/your-avatar.jpg"
---
```

**Location**: `src/layouts/BlogPost.astro` (author bio)

```astro
<p class="text-gray-600">
  Your custom author bio here...
</p>
```

### Footer

**Location**: `src/components/Footer.astro`

Update:
- Brand description
- Links
- Social media URLs
- Copyright text

```astro
<p class="text-gray-600 text-sm mt-2 max-w-md">
  Your custom blog description
</p>
```

## 🎯 Navigation

**Location**: `src/components/Header.astro`

Add or remove navigation items:

```astro
<nav class="hidden md:flex items-center space-x-8">
  <a href="/about">ABOUT</a>
  <a href="/">ARTICLES</a>
  <a href="/projects">PROJECTS</a>
  <a href="/contact">CONTACT</a>
  <!-- Add more items here -->
</nav>
```

Don't forget to update the mobile menu too!

## 🖼️ Images

### Favicon

Replace `public/favicon.svg` with your own favicon.

### OG Image

Replace `public/og-image.jpg` with your social sharing image (1200x630px recommended).

### Blog Post Images

1. Add images to `public/images/`
2. Reference in frontmatter:

```markdown
---
image: "/images/your-hero-image.jpg"
---
```

### Author Avatars

1. Add avatars to `public/avatars/`
2. Reference in frontmatter:

```markdown
---
authorAvatar: "/avatars/your-avatar.jpg"
---
```

## 📄 Pages

### Creating New Pages

Create a new file in `src/pages/`:

```astro
---
// src/pages/new-page.astro
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="New Page" description="Description">
  <div class="container mx-auto px-4 py-16">
    <h1>Your Content</h1>
  </div>
</BaseLayout>
```

The page will be available at `/new-page`

### Removing Pages

Delete the corresponding file from `src/pages/`:
- `about.astro` → Removes /about
- `projects.astro` → Removes /projects
- `contact.astro` → Removes /contact

## 🏷️ Tags

### Creating Tag Pages

Create `src/pages/tags/[tag].astro`:

```astro
---
import { getCollection } from 'astro:content';
import BaseLayout from '../../layouts/BaseLayout.astro';
import PostCard from '../../components/PostCard.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const tags = [...new Set(posts.flatMap(post => post.data.tags))];
  
  return tags.map(tag => ({
    params: { tag },
    props: { 
      posts: posts.filter(post => post.data.tags.includes(tag))
    }
  }));
}

const { tag } = Astro.params;
const { posts } = Astro.props;
---

<BaseLayout title={`Posts tagged: ${tag}`}>
  <!-- Your tag page layout -->
</BaseLayout>
```

## 🎨 Styling

### Custom Styles

Add global styles to `src/styles/global.css`:

```css
@layer components {
  .my-custom-class {
    @apply bg-primary text-white p-4;
  }
}
```

### Tailwind Utilities

Use Tailwind classes directly in components:

```astro
<div class="bg-gradient-to-r from-primary to-red-600 p-8 rounded-xl">
  Content
</div>
```

### Prose Styles

Customize blog post content styles in `src/layouts/BlogPost.astro`:

```astro
<div class="prose 
  prose-headings:text-gray-900
  prose-a:text-primary
  prose-code:bg-gray-100
">
  <slot />
</div>
```

## 🔧 Advanced

### Adding Analytics

Add to `src/layouts/BaseLayout.astro` before `</head>`:

```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Newsletter Signup

Add to `src/components/Footer.astro`:

```astro
<form action="YOUR_NEWSLETTER_SERVICE" method="post">
  <input type="email" placeholder="Your email" />
  <button type="submit">Subscribe</button>
</form>
```

### Comments

Add Disqus, Giscus, or other comment systems to `src/layouts/BlogPost.astro`:

```astro
<!-- Giscus example -->
<script src="https://giscus.app/client.js"
  data-repo="your/repo"
  data-repo-id="YOUR_REPO_ID"
  data-category="General"
  data-category-id="YOUR_CATEGORY_ID"
  data-mapping="pathname"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="bottom"
  data-theme="light"
  data-lang="en"
  crossorigin="anonymous"
  async>
</script>
```

### Dark Mode

Add dark mode support:

1. Install dark mode plugin:
```bash
npm install @tailwindcss/forms
```

2. Update `tailwind.config.js`:
```javascript
export default {
  darkMode: 'class',
  // ...
}
```

3. Add toggle button in `src/components/Header.astro`

## 💡 Tips

1. **Keep it simple**: Don't over-customize. The default design is optimized for performance.
2. **Test on mobile**: Always check your changes on mobile devices.
3. **Check accessibility**: Use tools like Lighthouse to verify accessibility.
4. **Optimize images**: Compress images before adding them.
5. **Build regularly**: Run `npm run build` to catch any build-time errors.

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Pagefind Documentation](https://pagefind.app)

---

Need more help? Check the [README.md](./README.md) or open an issue!

