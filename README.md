# Bristol First Aid Services — Website

Static HTML website for Bristol First Aid Services, delivered by Phil, a qualified HCPC-registered Paramedic.

## Structure

```
/
├── index.html          # Home page
├── about.html          # About Us / Phil
├── fa-level1.html      # First Aid at Work — Level 1
├── fa-level2.html      # First Aid at Work — Level 2
├── fa-level3.html      # First Aid at Work — Level 3
├── paediatric.html     # Paediatric First Aid
├── mental-health.html  # Mental Health First Aid
├── contact.html        # Contact & Booking
├── assets/
│   ├── style.css       # All shared styles
│   ├── main.js         # Shared JS (nav, form)
│   ├── icons.svg       # SVG icon sprite
│   ├── logo.webp       # Logo (WebP — modern browsers)
│   └── logo.jpg        # Logo (JPEG — fallback)
└── README.md
```

## Running Locally

Open any `.html` file directly in a browser, or serve with:

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch → main → / (root)**
4. Your site will be live at `https://<username>.github.io/<repo>/`

## To Do / Customise

- [ ] Replace `07700 000 000` with Phil's real phone number
- [ ] Replace `info@bristolfirstaid.co.uk` with real email address
- [ ] Connect contact form to a backend (e.g. [Formspree](https://formspree.io), [Netlify Forms](https://www.netlify.com/products/forms/))
- [ ] Add real testimonials / reviews
- [ ] Add Google Analytics or Plausible tracking
- [ ] Add a `favicon.ico` (can be generated from the logo)

## Design

- **Colours:** Forest green `#1B5E40`, Navy `#172648`, Cream `#F5F1E8`
- **Fonts:** DM Serif Display (headings) + DM Sans (body) via Google Fonts
- **Icons:** Lucide icon set (MIT licence) — embedded as SVG sprite, no external dependency

## Licence

All code: MIT. Logo and branding: &copy; Bristol First Aid Services.
