# The University Museum of Bergen - 200 Years Jubilee

This is a project for the exhibition "The University Museum of Bergen - 200 Years Jubilee" at the University Museum of Bergen.

## Tech Stack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). [Nextra](https://nextra.site) is used for markdown-based pages.

- [Next.js](https://nextjs.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Shadcn UI](https://ui.shadcn.com)
- [Nextra](https://nextra.site)
- [Vercel](https://vercel.com)

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Nextra](https://nextra.site/) - documentation for Nextra.

## TODO

- [x] Add `robots.txt` to the project.
- [x] Init shadcn in the project.
- [x] Add `Icon` component from `@tabler/icons-react` to the project.
- [x] Port `Work` component from `exhibition-landsloven-nextra` to this project.
- [ ] When `clover-iiif` is updated to a version that is compatible with the latest version of `next.js`, use the prefetch strategy for the `Work` component.
- [ ] Add content to the project.
- [ ] Add other necessary components from `exhibition-landsloven-nextra` to this project.
- [ ] Add design from Haltenbanken
- [x] Add `sitemap.xml` to the project.
- [ ] Explore [Canopy-IIIF](https://github.com/canopy-iiif/canopy-iiif), that can add automatic views on IIIF collections and manifests. The `canopy-experiment` branch is a starting point.

## Clover-IIIF workaround

NB! `clover-iiif` is pegged to `2.12.0` as later versions are not compatible with the latest version of `next.js`. it is also necessary  to override the version of `react` and `react-dom` to `19.0.0` in the `package.json` file. As well as `openseadragon` to `5.0.1`. See [this issue](https://github.com/samvera-labs/clover-iiif/issues/291) for more information.

```json
"overrides": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "openseadragon": "^5.0.1"
  }
```

## Sitemap

The sitemap is generated using the `sitemap.ts` file and serves a `/sitemap.xml` route. It does not work in dev useing Turbopack. In production it works, `npm run build && npm run start`, and using `npm run dev:webpack` works. See [this issue](https://github.com/shuding/nextra/issues/4274) for Nextra implementation details.

Checking the sitemaps in the browser:

```bash
npm run dev:webpack
curl -s http://localhost:3000/sitemap.xml | xmllint --format -
```