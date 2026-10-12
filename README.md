# Aswin M. — Power Platform & Business Intelligence Portfolio

A responsive Next.js portfolio for Power Platform and BI work. The site includes original dashboard mockups, illustrative case studies, and synthetic sample data; it does not require a backend, database, or environment variables.

## Pages

- `/` — introduction, selected projects, technologies, approach, and contact link.
- `/projects` — filterable project gallery.
- `/projects/[slug]` — illustrative case studies.
- `/skills` and `/about` — technology stack and professional approach.
- `/contact` — email and profile links.
- `/privacy` — confidentiality and demonstration-data note.

## Run locally

Requires Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run lint` and `npm run build` to check the project.

## Before publishing

1. Replace the example email, LinkedIn, and GitHub links in `app/contact/page.tsx`.
2. Review the site copy and keep project descriptions accurate. The included case studies are illustrative concepts, not claims of production deployments or measured business outcomes.
3. Use only sanitized, authorized assets and never include employer or client confidential information, credentials, or production URLs.

## Deploy

Import this repository into Vercel, keep the detected Next.js settings, and deploy. The current site needs no environment variables.