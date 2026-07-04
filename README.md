# Resume Builders UK

SEO-optimised marketing site for the **Resume Builder & CV Maker** Android app.

**Domain:** [resumebuilders.uk](https://resumebuilders.uk)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, CV examples, video demo, install CTAs |
| `/features` | App features (ATS checker, AI, PDF export) |
| `/templates` | UK CV examples by job (14 funnel pages) |
| `/templates/[slug]` | Job-specific CV preview + web builder funnel |
| `/pricing` | Free vs Premium |
| `/blog` | UK CV & resume SEO articles |
| `/contact` | About & support |

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://resumebuilders.uk` |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play app link |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Support email |
| `NEXT_PUBLIC_GA_ID` | Optional Google Analytics 4 |

## Deploy to Cloudflare Pages

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `out` |
| Node version | 20+ |

### Custom domain

1. Cloudflare Pages → your project → **Custom domains**
2. Add **resumebuilders.uk** and **www.resumebuilders.uk**
3. Enable **Always Use HTTPS**
4. Redirect **www** → apex (or use Bulk Redirects)

### Environment variables (production)

```
NEXT_PUBLIC_SITE_URL=https://resumebuilders.uk
NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=europasscvmake.app.dev
NEXT_PUBLIC_SUPPORT_EMAIL=mwk.pkx@gmail.com
```

## SEO

- Auto-generated `sitemap.xml` and `robots.txt` on build
- Keyword redirects in `public/_redirects`
- JSON-LD: SoftwareApplication, FAQ, Video, BlogPosting, BreadcrumbList
- 14 job-intent CV funnel pages with analytics events

## Scripts

```bash
npm run dev      # Development
npm run build    # Static export to /out
npm run preview  # Serve /out locally
```
