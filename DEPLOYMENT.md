# Deployment Guide

This guide covers deploying your Astro blog to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [ ] Update site URL in `astro.config.mjs`
- [ ] Replace placeholder images (favicon, OG image, avatars)
- [ ] Update brand name and colors
- [ ] Test build locally: `npm run build`
- [ ] Test search functionality after build
- [ ] Update social media links in Footer
- [ ] Add your actual blog posts
- [ ] Set up analytics (optional)

## 🚀 Deployment Options

### Vercel (Recommended)

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Edge network (fast globally)
- Free tier available

**Steps:**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and you're done!

**Or use Vercel Dashboard:**

1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Astro
4. Click "Deploy"

### Netlify

**Why Netlify?**
- Simple drag-and-drop
- Built-in forms
- Free tier available

**Steps:**

1. Build locally:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag `dist/` folder to deploy

**Or connect Git:**

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click "Deploy"

### Cloudflare Pages

**Why Cloudflare Pages?**
- Excellent global CDN
- Generous free tier
- Great DDoS protection

**Steps:**

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 18 or 20
4. Deploy

### GitHub Pages

**Why GitHub Pages?**
- Free hosting for public repos
- Simple GitHub integration

**Steps:**

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 20
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. Enable GitHub Pages in repository settings
3. Push to main branch

### AWS S3 + CloudFront

**For advanced users who want full control**

1. Build:
```bash
npm run build
```

2. Create S3 bucket:
```bash
aws s3 mb s3://your-blog-name
```

3. Upload:
```bash
aws s3 sync dist/ s3://your-blog-name
```

4. Enable static website hosting in S3 console
5. Create CloudFront distribution pointing to S3
6. Configure custom domain (optional)

## 🌐 Custom Domain

### Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify

1. Go to Domain Settings
2. Add custom domain
3. Update DNS records

### Cloudflare Pages

1. Go to Custom domains
2. Add domain (if it's on Cloudflare, it's automatic!)

## 🔒 HTTPS

All recommended platforms provide automatic HTTPS certificates. No configuration needed!

## 📊 Post-Deployment

### Verify Deployment

1. Check homepage loads correctly
2. Test navigation between pages
3. Try searching with Pagefind
4. Test on mobile devices
5. Run Lighthouse audit

### Lighthouse Audit

```bash
npm install -g lighthouse

lighthouse https://yourdomain.com --view
```

Expected scores: All 100s! 🎉

### Submit to Search Engines

**Google:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Submit sitemap: `https://yourdomain.com/sitemap-index.xml`

**Bing:**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

## 🔄 Continuous Deployment

All platforms support automatic deployments:

1. Connect your Git repository
2. Any push to main branch triggers a new deployment
3. Preview deployments for pull requests (Vercel/Netlify)

## 🎯 Performance Optimization

### Enable Compression

Most platforms enable gzip/brotli automatically.

### Set Cache Headers

Create `public/_headers` (Netlify) or `vercel.json` (Vercel):

**Netlify:**
```
/fonts/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable
```

**Vercel:**
```json
{
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Image Optimization

1. Use WebP format
2. Compress images with [TinyPNG](https://tinypng.com)
3. Use appropriate sizes (no need for 4K images)

## 🐛 Troubleshooting

### Build Fails

1. Check Node version (should be 18 or 20)
2. Clear cache: `rm -rf node_modules package-lock.json && npm install`
3. Try building locally: `npm run build`

### Search Not Working

1. Ensure build command includes Pagefind: `npm run build`
2. Check `dist/pagefind/` directory exists after build
3. Verify SearchModal loads correct path

### Styles Not Loading

1. Check Tailwind configuration
2. Ensure global.css is imported
3. Clear browser cache

### 404 Errors

1. Check file paths (case-sensitive on most servers)
2. Verify pages exist in `src/pages/`
3. Check routing configuration

## 📈 Monitoring

### Uptime Monitoring

- [UptimeRobot](https://uptimerobot.com) - Free
- [Pingdom](https://www.pingdom.com) - Free tier

### Analytics

- Google Analytics
- Plausible (privacy-friendly)
- Cloudflare Web Analytics (free)

### Performance Monitoring

- [SpeedCurve](https://www.speedcurve.com)
- [Calibre](https://calibreapp.com)
- Chrome UX Report

## 💰 Cost Estimates

| Platform | Free Tier | Paid Starting |
|----------|-----------|---------------|
| Vercel | 100GB bandwidth | $20/month |
| Netlify | 100GB bandwidth | $19/month |
| Cloudflare Pages | Unlimited | $20/month for Pro features |
| GitHub Pages | Unlimited (public repos) | N/A |

For a blog with moderate traffic, **free tier is usually sufficient**!

## ✅ Final Checklist

Before going live:

- [ ] Domain configured
- [ ] HTTPS working
- [ ] All pages accessible
- [ ] Search functioning
- [ ] Mobile responsive
- [ ] Lighthouse score 90+
- [ ] Analytics set up
- [ ] Sitemap submitted
- [ ] Social sharing tested
- [ ] Backup configured

## 🎉 You're Live!

Congratulations on deploying your blog! 

Share your first post on social media and start building your audience.

---

Questions? Check [README.md](./README.md) or [GETTING_STARTED.md](./GETTING_STARTED.md)

