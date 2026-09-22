# Rizal Alfiansyah — Portfolio

Personal portfolio site for **Rizal Alfiansyah**, a data analyst (~4 years experience) based in Jakarta. English-only copy covering selected analytics case studies, skills, about, and contact.

Built with **Next.js** (App Router), **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — intro, featured work, capabilities |
| `/projects` | Work index — four case studies |
| `/projects/[slug]` | Case study detail (problem → approach → tools → impact) |
| `/skills` | Methods and tooling |
| `/about` | Background and experience timeline |
| `/contact` | Email and outreach guidance |

## Case studies

1. **E-commerce retention & win-back** — cohort retention and gated win-back test
2. **Credit ops queue & SLA visibility** — overdue queue and collector SLAs
3. **Marketplace promo depth experiment** — promo A/B with margin guardrails
4. **Fulfillment late-delivery root cause** — stage-level latency attribution

Narratives are professional portfolio demos using generic domains (no claims of employment at famous brands).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Fonts: Geist (sans) + Source Serif 4 (display)

## Project layout

```
src/
  app/           # routes and layout
  components/    # Header, Footer, ProjectCard, etc.
  lib/           # projects, skills/site, about data
```

## Notes

- Site copy is English only.
- No secrets are required to run the site.
- Contact email / LinkedIn in `src/lib/skills.ts` can be updated to production values before deploy.
