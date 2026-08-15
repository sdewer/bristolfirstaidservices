# Bristol First Aid Services — Website

Static HTML website for Bristol First Aid Services, delivered by Phil, a qualified HCPC-registered Paramedic.

**Live at:** https://bristolfirstaidservices.co.uk

## Structure

```
/
├── index.html          # Home page
├── about.html          # About Us / Phil
├── fa-level1.html      # First Aid at Work — Level 1 (1 Day)
├── fa-level2.html      # First Aid Requalification — Level 2 (2 Days)
├── fa-level3.html      # First Aid at Work — Level 3 (3 Days)
├── paediatric.html     # Paediatric First Aid (2 Days, Ofsted-compliant)
├── mental-health.html  # Mental Health First Aid (2 Days, MHFA England)
├── contact.html        # Contact & Booking
├── robots.txt          # Crawler rules, points to sitemap.xml
├── sitemap.xml         # Sitemap for search engines
├── assets/
│   ├── style.css       # All shared styles
│   ├── main.js         # Shared JS (nav, contact form)
│   ├── logo.png         # Primary logo (transparent PNG)
│   ├── logo.webp        # WebP logo for modern browsers
│   └── icons.svg        # Legacy — no longer used; icons are inlined per page
└── README.md
```

## Running Locally

Open any `.html` file directly in a browser, or serve with:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

The live site is deployed via **Cloudflare Pages**, connected to this repo's `main` branch:

1. Push to `main` (e.g. via GitHub Desktop)
2. Cloudflare Pages picks up the push automatically and redeploys — no build command needed, this is a plain static site (build output = repo root)
3. Custom domain (`bristolfirstaidservices.co.uk`) is attached directly in the Cloudflare Pages project, with DNS managed in the same Cloudflare account

GitHub Pages is **not** used for the live site (no custom domain is set under the repo's Settings → Pages), so it doesn't conflict with Cloudflare Pages.

## Contact Form

The form on `contact.html` posts to [Formspree](https://formspree.io/f/xbgraobo) via an AJAX call in `assets/main.js`. Confirmed working and live. See `CLAUDE.md` for the full field breakdown and setup notes.

## SEO

`robots.txt` and `sitemap.xml` are included at the repo root and submitted to Google Search Console. Every page has a unique `<title>` and meta description, a canonical link, and `LocalBusiness` structured data (JSON-LD); the five course pages also have `Course` and `FAQPage` structured data plus a visible FAQ section. See `CLAUDE.md` for the full breakdown and the Search Console troubleshooting notes.

## To Do / Customise

- [ ] Add a `favicon.ico` (generate from the logo)
- [ ] Add real testimonials / reviews
- [ ] Add Google Analytics or Plausible tracking
- [ ] Add Open Graph meta tags for social sharing previews
- [ ] Resolve the `fa-level2.html` nav label ("Level 2" vs "Requalification" — see `CLAUDE.md`)
- [ ] Set up and optimise Google Business Profile

## Design

- **Colours:** Forest green `#1B5E40`, Navy `#172648`, Cream `#F5F1E8`
- **Fonts:** DM Serif Display (headings) + DM Sans (body) via Google Fonts
- **Icons:** Lucide icon set (MIT licence) — inlined as SVG in each page, no external dependency

## Licence

All code: MIT. Logo and branding: &copy; Bristol First Aid Services.
