# Interstate Index

A static, multi-page reference atlas for the U.S. Interstate Highway System:
a searchable route database, a number decoder, a deep numbering guide, a system
history, a corridor map, and a detail page for every documented route.

The site is built by a tiny generator with **no npm dependencies and no framework**.
Output is plain static HTML committed to the repo, so Vercel serves it with no build
step.

## Project structure

```
data/
  routes.mjs     Single source of truth: rich route records + number-grid logic.
  content.mjs    Copy for the home, guide, history, map, faq, glossary, sources pages.
assets/
  styles.css     Design system (dark "control-room" theme).
  layout.mjs     Shared HTML shell: head, header, nav, footer (build time only).
  app.mjs        Browser logic for the database + decoder pages.
  ui.mjs         Shared client UI: mobile nav + scroll reveal.
generate.mjs     Static-site generator. Emits every .html page, sitemap, robots.
*.html, routes/  Generated output (committed).
```

## Editing content

1. Edit `data/routes.mjs` (route facts) or `data/content.mjs` (page copy).
2. Regenerate the site:

   ```powershell
   node generate.mjs
   ```

3. Commit the changed HTML along with the data change.

## Local preview

Internal links are extensionless to match Vercel's `cleanUrls`, so use a server
that resolves them:

```powershell
npx serve
```

Then visit the printed URL.

## Vercel

No build step. Import the repository, leave the build command empty, and Vercel
serves the committed static files. `vercel.json` enables `cleanUrls` so pages are
reached at `/database`, `/routes/I-95`, and so on.

## Data note

Mileage and year figures are rounded reference values organized from public route
logs and encyclopedic route lists. Verify against current FHWA, AASHTO, and state
DOT records before any planning, engineering, or legal use. See `/sources`.
