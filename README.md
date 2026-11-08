# Hossein's portfolio

Next.js App Router with React, JavaScript, and npm. The site is exported as static
HTML, CSS, JavaScript, fonts, and metadata assets in `out/`.

## Local checks

Use Node.js 22.x and the committed npm lockfile:

```sh
npm ci
npm run lint
npm run build
npm start
```

`npm start` previews the production export; run the build first. Use `npm run dev`
for development. There are no TypeScript source files or TypeScript configuration,
so a separate TypeScript check is not applicable.

The Vazirmatn font is downloaded by `next/font/google` at build time and served
locally with the exported site. Builds need access to Google Fonts.

## Vercel configuration

- Import `dreamservicesnet/hossein-portfolio` under the **DreamService** team.
- Use the **Next.js** framework preset and the repository root directory (`.`).
- Install command: `npm ci`.
- Build command: `npm run build`.
- Leave the output directory at the framework default; Next.js handles the existing
  `output: "export"` configuration and generates `out/`.
- Node.js: **22.x**, also declared in `package.json`.
- No application environment variables or server functions are required.
- Add `hosseinseyedzade.dreamservice.net` as the production domain and configure its
  DNS in Vercel. Canonical, Open Graph, and Twitter metadata use this HTTPS URL.

The favicon reuses the site's HS mark. The static social preview is available
at `/opengraph-image.png`. Keep `metadataBase` in `app/layout.js` in sync if the
production domain changes.

Security overrides in `package.json` select patched PostCSS, compression, and
TypeScript lint glob-matching dependencies. Keep them until the parent packages
resolve fixed versions themselves; rerun lint and build when changing them.
ESLint 9 is deprecated upstream but is supported by the Next.js 15 lint config.

Run `npm audit --registry=https://registry.npmjs.org` before release. Deployment,
team access, DNS, and HTTPS must be verified in the actual Vercel project; local
checks do not create a deployment.
