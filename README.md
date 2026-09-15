# Srinivas Polanki — Personal Developer Portfolio

A single-page, minimal, content-first developer portfolio built with Next.js.

## Tech Stack
- Next.js (App Router, Static Export)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```bash
npm run build
```
The static output is generated in the `out/` directory. This project uses `output: "export"` in `next.config.ts`.

## Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the website to GitHub Pages whenever changes are pushed to the `main` branch.

### Custom Domain
The project is fully compatible with custom domains since it generates standard static HTML/JS/CSS files without depending on a Node.js server. Configure your custom domain via the repository settings in GitHub.
