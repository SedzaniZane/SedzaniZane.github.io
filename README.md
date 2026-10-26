# SedzaniZane.github.io

Personal academic website and research portfolio for Sedzani Ndouvhada.

## Stack

- [Astro](https://astro.build/) (static output for GitHub Pages)
- TypeScript
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

## Build and type check

```bash
npm run build
npm run check
```

## Content updates

Structured content lives in:

- `src/data/site.ts`
- `src/data/publications.ts`
- `src/data/projects.ts`
- `src/data/experience.ts`

Update these files to add verified publications, project repositories, and timeline details.

## GitHub Pages deployment

1. Ensure repository **Settings → Pages** uses **GitHub Actions** as the source.
2. The workflow at `.github/workflows/deploy.yml` builds and deploys on pushes to `main`.
3. Manual deployment can be triggered via **Actions → Deploy to GitHub Pages → Run workflow**.

