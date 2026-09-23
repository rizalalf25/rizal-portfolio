# Rizal Alfiansyah — Portfolio

Personal portfolio for **Rizal Alfiansyah**, a data analyst building AI/quant systems for markets (Jakarta). English-only copy covering selected **real** personal projects, skills, about, and contact.

Built with **Next.js** (App Router), **TypeScript**, and **Tailwind CSS**. Design: *market terminal × editorial* — near-black ink, hairline grid, one cyan signal color taken from the RA mark, Instrument Serif display type over Geist / Geist Mono.

Live: [https://rizal-portfolio-three.vercel.app](https://rizal-portfolio-three.vercel.app)

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — intro, featured work, capabilities |
| `/projects` | Work index — real case studies |
| `/projects/[slug]` | Case study detail (problem → approach → tools → impact) |
| `/skills` | Methods and tooling |
| `/about` | Background and timeline |
| `/contact` | Email and outreach guidance |

## Case studies (REAL_PERSONAL)

1. **AlphaRadar** — AI trading assistant (IDX / global / crypto), paper desk, daily briefs
2. **Kuanta** — quant-finance webapp from math-zero for Indonesian learners
3. **IDX agentic research** — agent-assisted filing → structured notes with human review
4. **CSA lab (BMRI)** — bank fundamental templates from IR/OJK/IDX filings
5. **Upwork Lane — AI agents & automation** — TypeScript agents under a &lt;10h/week cap

Honest process metrics only — no fictional employer ROI.

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
- Fonts: Instrument Serif (display) + Geist (sans) + Geist Mono (data / labels)
- Favicon / logo: square crop of `logo-ra.png` → `public/logo-mark.png`, `src/app/icon.png`
- No animation library: CSS keyframes + a tiny IntersectionObserver (`RevealObserver`) for scroll reveals; all motion respects `prefers-reduced-motion`
- Dynamic Open Graph image at `src/app/opengraph-image.tsx`

## Design system

Tokens live in `src/app/globals.css` (`--ink-*`, `--line`, `--fg`, `--signal`, `--up`, `--down`) and are exposed to Tailwind as `bg-ink-950`, `text-signal`, `border-line`, etc. Reusable pieces:

| Component | Use |
| --- | --- |
| `SectionHeading` | Numbered eyebrow + display title (accepts JSX for italic accents) |
| `ProjectCard` / `ProjectGlyph` | Case-study cards with a decorative line drawing per project |
| `ProjectsGrid` | Client-side filter chips on `/projects` |
| `HeroPanel`, `Marquee`, `CtaBand` | Home hero terminal, ticker strip, closing call-to-action |
| `LocalTime`, `CopyEmail` | Live Jakarta clock, copy-to-clipboard email |

Content still comes from `src/lib/*.ts` — edit copy there, not in the pages.

## Notes

- Site copy is English only.
- Contact: rizalalfiansyah1122@gmail.com · [LinkedIn](https://www.linkedin.com/in/rizal-alfiansyah)
