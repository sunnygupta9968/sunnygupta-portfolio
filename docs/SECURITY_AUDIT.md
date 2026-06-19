# Security Audit

Audit date: 2026-06-19

## Scope

Source code, configuration, static assets, npm scripts, environment handling, and tracked-file candidates were reviewed for credentials and unsafe repository defaults.

## Findings

- No hardcoded API keys, access tokens, private keys, passwords, connection strings, or private service URLs were detected.
- Public portfolio contact details and social links are intentional public content, not authentication credentials.
- Deploy-specific public URLs now support `NEXT_PUBLIC_*` environment configuration with safe development fallbacks.
- `.env*`, certificates, private keys, local databases, logs, caches, deployment state, and editor state are excluded from Git.
- `.env.example` contains placeholders only.
- Client-visible environment variables are explicitly documented as non-secret.

## Ongoing Controls

- Keep secrets in deployment-provider secret storage and never prefix secrets with `NEXT_PUBLIC_`.
- Review Dependabot or `npm audit` findings before dependency upgrades.
- Enable GitHub secret scanning, push protection, and Dependabot alerts after publishing.
- Protect `main` and require the CI workflow before merging pull requests.

