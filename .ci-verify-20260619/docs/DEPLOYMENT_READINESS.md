# Deployment Readiness

Audit date: 2026-06-19

## Application

- Next.js App Router production build configuration is present.
- TypeScript strict mode is enabled.
- Responsive images use `next/image` with explicit responsive `sizes`.
- Motion respects `prefers-reduced-motion`.
- Browser checks found no console errors or horizontal page overflow at the tested breakpoints.

## Discoverability

- Central metadata includes canonical, Open Graph, and Twitter card values.
- JSON-LD person data is included on the home page.
- `app/sitemap.ts` and `app/robots.ts` generate discovery files.
- Page language, viewport, theme color, description, keywords, and author metadata are configured.

## Delivery

- `.env.example` documents deploy-time public configuration.
- GitHub Actions installs exact dependencies, lints, typechecks, and builds on pushes and pull requests.
- Vercel and generic Node.js deployment instructions are documented in the README.

## Recommended GitHub Settings

- Set the repository description and topics listed in the README.
- Enable branch protection for `main` and require the `Lint, typecheck, and build` check.
- Enable Dependabot alerts, secret scanning, push protection, and private vulnerability reporting.
- Configure the production environment variables before the first deployment.

