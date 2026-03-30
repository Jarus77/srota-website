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
vercel.json                 Sparkle headers and DMG file serving
```

## Notes

- `next.config.ts` uses `output: 'export'`, so this repo is set up for static hosting.
- Image optimization is disabled with `images.unoptimized: true`, which is required for static export.
- The app imports Google fonts through `next/font` in `src/app/layout.tsx`.
- Production builds require network access to fetch those fonts unless they are vendored locally.
- `vercel.json` defines Sparkle-specific headers for `appcast.xml` and direct DMG serving headers for `/downloads/*`.

## Sparkle Updates

Srota uses Sparkle with a stable appcast URL and a stable DMG URL hosted on `susrota.com`:

- Appcast: `https://susrota.com/appcast.xml`
- Download: `https://susrota.com/downloads/Srota.dmg`
- Release notes: `https://susrota.com/release-notes/<version>.html`

### Future release process

1. Copy the new signed `Srota.dmg` into `public/downloads/Srota.dmg`.
2. Optionally also copy the versioned file to `public/downloads/Srota-<version>.dmg` for archival downloads.
3. Record the exact DMG byte length and signed `sparkle:edSignature`.
4. Update `public/appcast.xml` with the new version, dates, enclosure metadata, and release notes URL.
5. Add `public/release-notes/<version>.html` if you want Sparkle release notes for that version.
6. Deploy the website so `susrota.com` serves the new appcast and DMG directly.

Old versioned DMGs can remain in `public/downloads/` if you want historical versions to stay accessible.

## Deploy

The site is a static export, but the Sparkle setup in this repo assumes Vercel so `vercel.json` can provide:

- `appcast.xml` cache-control headers
- direct hosting for `/downloads/Srota.dmg` and any versioned DMGs in `public/downloads/`

If you move to another host later, you will need equivalent static file serving and header rules there.
