# VendSmart Next.js Website

This is the Next.js version of the VendSmart Jacksonville vending machines website. It provides:

- **Instant page transitions** – No full page reloads, no blinking when navigating
- **Client-side routing** – Smooth, fast navigation between pages
- **Static export** – Deploys to GitHub Pages as static HTML

## Development

```bash
cd nextjs-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

Output goes to `out/` folder (static HTML, CSS, JS).

## Deployment

The site deploys to GitHub Pages via the `.github/workflows/deploy-nextjs.yml` workflow when you push to `main`.

## Migrating More Pages

To add a new page (e.g. `/services`):

1. Create `app/services/page.js`
2. Use the shared `Hero` component for the hero section
3. Add the page content
4. Add the route to the Nav/Footer components if needed

## Current Pages

- `/` – Home
- `/contact` – Contact form
- `/about-us` – About page

More pages can be migrated incrementally from the HTML files in the parent directory.
