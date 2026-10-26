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
npm run check
npm run build
```

## Content updates

Structured content lives in:

- `src/data/site.ts`
- `src/data/publications.ts`
- `src/data/projects.ts`
- `src/data/experience.ts`

These files are the single source of truth for profile text, publications, project disclosure status, and experience/education entries.

## Publication metadata policy

Only publish verified bibliographic metadata when an authoritative source is available. If verification is pending, list entries as reported metadata and avoid inventing DOI, volume, issue, or page data.

## Academic CV

The CV section intentionally displays a "CV forthcoming" notice until a verified PDF is ready.

## GitHub Pages deployment

1. Ensure repository **Settings → Pages** uses **GitHub Actions** as the source.
2. The workflow at `.github/workflows/deploy.yml` builds and deploys on pushes to `main`.
3. Manual deployment can be triggered via **Actions → Deploy to GitHub Pages → Run workflow**.
