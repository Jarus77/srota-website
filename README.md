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
  appcast.xml
  release-notes/
    0.1.2.html
  srota.png
  screenshot-dashboard.png
  screenshot-menubar.png
  video/
vercel.json                 Sparkle headers and DMG redirect
```

## Notes

- `next.config.ts` uses `output: 'export'`, so this repo is set up for static hosting.
- Image optimization is disabled with `images.unoptimized: true`, which is required for static export.
- The app imports Google fonts through `next/font` in `src/app/layout.tsx`.
- Production builds require network access to fetch those fonts unless they are vendored locally.
- `vercel.json` defines Sparkle-specific headers for `appcast.xml` and a stable redirect for `/downloads/Srota.dmg`.

## Sparkle Updates

Srota uses Sparkle with a stable appcast URL and a stable DMG URL hosted on `susrota.com`:

- Appcast: `https://susrota.com/appcast.xml`
- Download: `https://susrota.com/downloads/Srota.dmg`
- Release notes: `https://susrota.com/release-notes/<version>.html`

### Future release process

1. Upload the new signed `Srota.dmg` asset to the GitHub release for the target version.
2. Record the exact DMG byte length and signed `sparkle:edSignature`.
3. Update `public/appcast.xml` with the new version, dates, enclosure metadata, and release notes URL.
4. Add `public/release-notes/<version>.html` if you want Sparkle release notes for that version.
5. Update the redirect target in `vercel.json` so `/downloads/Srota.dmg` points at the current GitHub asset.
6. Deploy the website so `susrota.com` serves the new appcast and redirect.

Keep old GitHub release assets and old release-notes pages if you want historical versions to remain accessible.

## Deploy

The site is a static export, but the Sparkle setup in this repo assumes Vercel so `vercel.json` can provide:

- `appcast.xml` cache-control headers
- the stable `/downloads/Srota.dmg` redirect to the current GitHub release asset

If you move to another host later, you will need equivalent redirect and header rules there.
