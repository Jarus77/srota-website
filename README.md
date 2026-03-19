# Srota Website

Marketing site for Srota, a macOS voice dictation app focused on on-device transcription, privacy, and Hinglish support.

This repo is a Next.js App Router project and replaces the older plain HTML/CSS/JS landing page setup.

## Stack

- Next.js 15
- React 19
- TypeScript
- App Router
- Static export via `output: 'export'`

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

The app runs locally at:

```text
http://127.0.0.1:3000
```

## Production Build

Create a production build and static export:

```bash
npm run build
```

This project is configured to export static files from Next.js. On a successful build, the generated site is written to `out/`.

## Project Structure

```text
src/app/
  layout.tsx                Root layout, fonts, metadata
  page.tsx                  Landing page composition
  globals.css               Global styles, theme, responsive rules
  components/
    Nav.tsx
    Hero.tsx
    TrustStrip.tsx
    Features.tsx
    ProductShowcase.tsx
    HowItWorks.tsx
    WorksAnywhere.tsx
    HinglishDemo.tsx
    Privacy.tsx
    DownloadCTA.tsx
public/
  logo.png
  screenshot-dashboard.png
  screenshot-menubar.png
  video/
```

## Notes

- `next.config.ts` uses `output: 'export'`, so this repo is set up for static hosting.
- Image optimization is disabled with `images.unoptimized: true`, which is required for static export.
- The app imports Google fonts through `next/font` in `src/app/layout.tsx`.
- Production builds require network access to fetch those fonts unless they are vendored locally.

## Deploy

Any static host that can serve the contents of `out/` will work.
