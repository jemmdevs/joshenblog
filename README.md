# senri Dev Blog

A minimalist, high-performance blog built with Astro, Tailwind CSS, and Pagefind. Focused on web performance optimization and human-computer interaction.

![Astro](https://img.shields.io/badge/Astro-5.14-FF5D01?style=flat&logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)

## ✨ Features

- **🚀 Blazing Fast**: Built with Astro for optimal performance (100/100 Lighthouse scores)
- **🎨 Modern Design**: Inspired by Azuki's minimalist aesthetic
- **🔍 Instant Search**: Powered by Pagefind (~10KB), zero-JS until interaction
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **♿ Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **🎯 Type-Safe**: Content Collections with TypeScript validation
- **📝 Markdown/MDX**: Rich content with syntax highlighting
- **🎭 Zero JavaScript**: Static HTML by default, interactive islands where needed

## 🎨 Design

### Color Palette
- **Primary**: `#C62F41` (Azuki Red)
- **Background**: `#F5F5F5` (Light Gray)
- **Complementary**: Whites, Grays, Blacks

### Typography
- **Font**: Inter (Sans-serif)
- **Optimized**: For readability with proper line-height and spacing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd senriblog

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📦 Project Structure

```
senriblog/
├── public/                 # Static assets
│   └── favicon.svg
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   └── SearchModal.astro
│   ├── content/           # Content Collections
│   │   ├── config.ts     # Content schema definition
│   │   └── blog/         # Blog posts (Markdown)
│   │       ├── performance-optimization-web.md
│   │       ├── hci-principles-web-design.md
│   │       └── astro-static-site-generation.md
│   ├── layouts/          # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/            # Routes
│   │   ├── index.astro   # Homepage (blog list)
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       └── [...slug].astro  # Dynamic blog post pages
│   └── styles/
│       └── global.css    # Global styles
├── astro.config.mjs      # Astro configuration
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## 📝 Writing Content

### Creating a New Post

1. Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
date: 2025-10-22
author: "Your Name"
authorAvatar: "/avatars/your-avatar.jpg"
image: "/images/post-hero.jpg"
tags: ["performance", "web", "optimization"]
draft: false
---

Your content here...
```

2. The post will automatically appear on the homepage

### Content Schema

All posts must include:
- `title` (string): Post title
- `description` (string): Short description
- `date` (date): Publication date
- `author` (string): Author name
- `authorAvatar` (string, optional): Author avatar path
- `image` (string, optional): Hero image path
- `tags` (array, optional): Post tags
- `draft` (boolean, optional): Hide from production

## 🔍 Search Functionality

### How It Works

1. **Build Time**: Pagefind indexes all pages during build
2. **Zero-JS**: No JavaScript until user opens search
3. **Instant**: Results appear as you type
4. **Lightweight**: Only ~10KB initial load

### Usage

- Click the search icon in header
- Or press `Cmd/Ctrl + K`
- Start typing to search
- Press `ESC` to close

### Configuration

Pagefind automatically indexes all pages. To exclude content from search, add `data-pagefind-ignore` to any element.

## 🛠️ Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production (includes Pagefind indexing)
npm run build

# Preview production build locally
npm run preview
```

### Adding Components

Create new components in `src/components/`:

```astro
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<div>
  <h1>{title}</h1>
</div>
```

### Styling with Tailwind

Use Tailwind utility classes throughout your components:

```astro
<div class="bg-primary text-white p-4 rounded-lg hover:bg-primary/90">
  Content
</div>
```

## 🚢 Deployment

### Build

```bash
npm run build
```

This will:
1. Build the Astro site to `dist/`
2. Generate Pagefind search index
3. Optimize all assets

### Hosting Options

The built site can be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your repo
- **Cloudflare Pages**: Connect your repo
- **GitHub Pages**: Use GitHub Actions
- **Any static host**: Upload the `dist/` folder

### Environment Variables

For production, set:
```
SITE_URL=https://yourdomain.com
```

## ⚡ Performance Optimizations

### Built-in Optimizations

- ✅ Static HTML generation (zero JS by default)
- ✅ Automatic image optimization
- ✅ CSS minification and bundling
- ✅ Font preloading
- ✅ Lazy loading for images
- ✅ Pagefind loads only when needed

### Lighthouse Scores

Expected scores:
- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus visible indicators
- ✅ High contrast ratios (WCAG AA)
- ✅ Screen reader friendly
- ✅ Skip to content links

## 🎯 Key Features Breakdown

### Header
- Sticky navigation
- Mobile-responsive menu
- Search integration
- Clear hover states

### Search Modal
- Keyboard shortcuts (Cmd/Ctrl + K)
- ESC to close
- Real-time results
- Highlight matching text

### Blog Posts
- Hero sections with images
- Reading time estimates
- Author information
- Tag filtering
- Responsive typography
- Syntax highlighting for code

### Footer
- Quick links
- Social media links
- Newsletter signup (optional)
- Copyright information

## 🤝 Contributing

Feel free to submit issues or pull requests to improve this blog template!

## 📄 License

MIT License - feel free to use this template for your own blog.

## 🙏 Credits

- Design inspired by [Azuki](https://www.azuki.com/blog)
- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Search powered by [Pagefind](https://pagefind.app)

## 📧 Contact

For questions or suggestions, reach out through the contact page or open an issue.

---

Built with ❤️ by senri Dev
