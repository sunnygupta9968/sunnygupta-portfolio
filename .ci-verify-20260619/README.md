# Sunny Gupta — Developer Portfolio

[![CI](https://github.com/sunnygupta9968/sunny-gupta-dev/actions/workflows/ci.yml/badge.svg)](https://github.com/sunnygupta9968/sunny-gupta-dev/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/license-MIT-F9C74F.svg)](LICENSE)

An interactive developer portfolio built with a retro-modern visual system. It presents projects, technical skills, achievements, education, and an engineering journey through responsive storytelling components.

## Features

- Responsive career roadmap with desktop, tablet, and mobile experiences
- Asymmetric project showcase with optimized Next.js images
- Animated, reduced-motion-safe engineering metrics
- Accessible navigation, focus states, semantic markup, sitemap, and robots metadata
- Responsive layouts from small mobile screens through wide desktop displays
- SEO, Open Graph, Twitter card, and structured person metadata

## Tech Stack

- [Next.js](https://nextjs.org/) and React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- npm

## Installation

Requirements: Node.js 20 or newer and npm 10 or newer.

```bash
git clone https://github.com/sunnygupta9968/sunny-gupta-dev.git
cd sunny-gupta-dev
npm ci
```

Copy the environment template and replace its public placeholder values:

```bash
cp .env.example .env.local
```

`NEXT_PUBLIC_*` values are shipped to the browser and must never contain secrets.

## Development Setup

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality and Build Commands

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Deployment

### Vercel

1. Import this repository into Vercel.
2. Use the detected Next.js framework preset.
3. Add the values from `.env.example` in Project Settings → Environment Variables.
4. Deploy. Vercel runs `npm run build` automatically.

### Other Node.js Platforms

Use Node.js 20+, run `npm ci && npm run build`, then start the production server with `npm run start`. Set the public environment variables before building because Next.js embeds `NEXT_PUBLIC_*` values at build time.

## Folder Structure

```text
app/                    Next.js App Router pages, metadata, and global styles
components/             Shared UI and portfolio section components
components/sections/    Page storytelling sections
components/ui/          Reusable presentation primitives
data/                   Typed portfolio content
hooks/                  Client-side React hooks
lib/                    Shared utilities
public/                 Static images and project illustrations
.github/workflows/      Continuous integration configuration
docs/                   Security and deployment audit reports
```

## Repository Metadata

Recommended description:

> Interactive developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion, showcasing projects, achievements, skills, and my engineering journey.

Recommended topics: `nextjs`, `portfolio`, `typescript`, `tailwindcss`, `framer-motion`, `react`, `developer-portfolio`, `personal-website`.

## License

Released under the [MIT License](LICENSE).

