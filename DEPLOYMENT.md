# Silken Valley Lifestyle

## Local
```bash
cd "C:\Users\geosi\OneDrive\Desktop\OneDrive\Code\lifestyle-blog"
npm install
npm run dev
```

## GitHub Pages (custom domain)
- Live URL (after DNS + Pages): `https://silkenvalleylifestyle.ca`
- `astro.config.mjs` site is set to `https://silkenvalleylifestyle.ca`.
- `public/CNAME` contains `silkenvalleylifestyle.ca`.
- Workflow: `.github/workflows/deploy.yml` deploys on push to `main`.
- In GitHub: **Settings → Pages → Source = GitHub Actions**, set custom domain to `silkenvalleylifestyle.ca`.
- Add the DNS records GitHub shows at your registrar; enable HTTPS once verified.

## Content
- Add posts in `src/content/posts/*.md` with frontmatter: `title`, `description`, `pubDate`, `category` (`recipes|fitness|animal-care|gardening|housekeeping`).
- Profile image: `public/SilkenR.jpeg` (used by the header brand).
