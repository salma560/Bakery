# Family Bakery

A modern, responsive landing page for **Family Bakery** — an artisan bakery website built with HTML, Tailwind CSS, and JavaScript.

## Live Demo

Open `index.html` in your browser, or visit the deployed site if GitHub Pages is enabled.

## Features

- **Responsive design** — works on mobile, tablet, and desktop
- **Sticky navigation** — smooth scrolling with mobile hamburger menu
- **Hero section** — full-screen banner with call-to-action buttons
- **About section** — bakery story with founder details
- **Location section** — address, opening hours, and phone number
- **Product showcase** — artisan breads, bagels, and cookies with hover effects
- **Contact form** — name, email, and message fields with submit feedback
- **Scroll animations** — fade-in effects as sections enter the viewport
- **Professional footer** — social media links and copyright

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| Tailwind CSS | Utility-first styling (via CDN) |
| JavaScript | Navigation, animations, form handling |
| Google Fonts | Cormorant Garamond & DM Sans |

## Project Structure

```
Bakery/
├── index.html          # Main HTML file
├── css/
│   └── custom.css      # Custom styles (hero background, animations)
├── src/
│   ├── main.js         # JavaScript (nav, scroll, form)
│   └── input.css       # Tailwind source (for local build)
├── images/             # Bakery photos
├── package.json        # npm scripts for Tailwind build
└── README.md
```

## Getting Started

### Option 1 — Open directly (no install)

1. Clone the repository:
   ```bash
   git clone https://github.com/salma560/Bakery.git
   ```
2. Open `index.html` in your browser.

### Option 2 — Local dev server

```bash
npm install
npm start
```

### Option 3 — Tailwind build (optional)

If you prefer a compiled CSS file instead of the CDN:

```bash
npm install
npm run dev    # watch mode
npm run build  # production build
```

## Sections

| Section | Description |
|---|---|
| Hero | Welcome banner with background image and CTA buttons |
| Stats | Key numbers (30+ years, 50+ varieties, etc.) |
| About | Bakery history and founders |
| Location | Address, hours, and contact details |
| Products | Three product cards with images |
| Contact | Contact form and map image |
| Footer | Brand info and social links |

## Author

**Salma** — [@salma560](https://github.com/salma560)

## License

This project is open source and available for educational purposes.
