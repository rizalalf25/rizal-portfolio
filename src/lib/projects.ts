/**
 * REAL_PERSONAL — Selected real projects: personal products, research lab work,
 * and freelance delivery. Honest process metrics; no fictional employer ROI.
 */

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  domain: string;
  year: string;
  summary: string;
  outcome: string;
  tools: string[];
  metrics: ProjectMetric[];
  problem: string;
  approach: string;
  impact: ProjectMetric[];
};

export const projects: Project[] = [
  {
    slug: "alpharadar",
    title: "AlphaRadar — AI trading assistant",
    domain: "Markets · Product",
    year: "2025–2026",
    summary:
      "Multi-market AI trading assistant (IDX, global equities, crypto) with a paper-trading desk and daily briefs delivered via Hermes and Telegram.",
    outcome:
      "Shipped a personal decision system focused on signal hygiene, journal/PnL discipline, and multi-market data workflows—not live profit claims.",
    tools: ["TypeScript", "Python", "Telegram bots", "Data pipelines", "Hermes"],
    metrics: [
      { label: "Markets covered", value: "3" },
      { label: "Brief cadence", value: "Daily" },
    ],
    problem:
      "Retail and self-directed trading workflows drown in noise: fragmented market data across IDX, global equities, and crypto; ad-hoc notes instead of a trade journal; and no shared ritual for risk limits or signal review. I needed a system that forces process discipline before any live capital—signal hygiene, paper trading, and a daily brief I would actually open.",
    approach:
      "I designed AlphaRadar as a multi-market assistant with a paper-trading desk at the center. TypeScript and Python pipelines normalize market inputs; Hermes shapes daily briefs; Telegram bots deliver them where I already check messages. The product emphasis is journal and PnL tracking, explicit risk limits, and repeatable brief cadence—so analytics serve decision hygiene rather than hindsight storytelling.",
    impact: [
      { label: "Markets in one workflow", value: "IDX · Global · Crypto" },
      { label: "Daily briefs", value: "Delivered daily" },
      { label: "Trading mode", value: "Paper desk first" },
    ],
  },
  {
    slug: "kuanta",
    title: "Kuanta — quant finance for beginners",
    domain: "EdTech · Product",
    year: "2025–2026",
    summary:
      "Public webapp that teaches quantitative finance from math-zero for Indonesian learners—curriculum structure and product scoping over vanity MAU.",
    outcome:
      "Shipped a Next.js curriculum product that sequences math foundations into market-facing quant concepts for Indonesian learners.",
    tools: ["Next.js", "TypeScript", "Pedagogy design", "Curriculum scoping"],
    metrics: [
      { label: "Curriculum path", value: "Math → Quant" },
      { label: "Stack shipped", value: "Next.js" },
    ],
    problem:
      "Most quant-finance material assumes university math and English-first sources. Indonesian learners who want capital-markets literacy often bounce between fragmented tutorials with no coherent sequence from arithmetic and probability into portfolios, risk, and market microstructure. The gap was product and pedagogy—not another blog post.",
    approach:
      "I scoped Kuanta as a public Next.js/TypeScript webapp with an explicit curriculum spine: start at math-zero, progress into quantitative finance concepts with Indonesian learners in mind. Work covered module sequencing, learning-analytics hooks for future iteration, and ruthless product scoping so the first ship taught a path—not every topic at once.",
    impact: [
      { label: "Audience focus", value: "ID learners" },
      { label: "Entry level", value: "Math-zero" },
      { label: "Delivery", value: "Public webapp" },
    ],
  },
  {
    slug: "idx-agentic-research",
    title: "IDX agentic research workflow",
    domain: "Research · Agents",
    year: "2025–2026",
    summary:
      "Agent-assisted pipeline for scanning IDX filings and IR materials into structured research notes—speed with provenance, not hallucinated theses.",
    outcome:
      "Built a repeatable agentic research loop: source → extract → structured note, with human review before any investment judgment.",
    tools: ["TypeScript", "AI agents", "APIs", "Notion", "IDX / IR sources"],
    metrics: [
      { label: "Loop", value: "Source → Note" },
      { label: "Review gate", value: "Human-in-loop" },
    ],
    problem:
      "IDX research is filing-heavy: announcements, financials, and IR packs land faster than a solo analyst can normalize. Generic chatbots invent numbers; manual copy-paste into Notion does not scale. I needed an agentic workflow that accelerates extraction while keeping provenance and a hard human review gate.",
    approach:
      "I designed an IDX-focused agent loop in TypeScript: pull or paste primary materials, extract key fields into structured Notion snapshots, and flag gaps instead of filling them with model guesses. The metric of success is research throughput and note consistency—not predicted alpha. Agents draft; I decide.",
    impact: [
      { label: "Output shape", value: "Structured notes" },
      { label: "Provenance", value: "Primary filings" },
      { label: "Judgment", value: "Human final" },
    ],
  },
  {
    slug: "bmri-csa-lab",
    title: "CSA lab — BMRI fundamental analysis",
    domain: "Research · Learning",
    year: "2025–2026",
    summary:
      "Self-directed CSA Block 2 fundamental analysis using Bank Mandiri (BMRI) as the lab issuer—official filings turned into structured Notion snapshots.",
    outcome:
      "Built reusable bank-statement templates focused on NII, NIM, NPL, and related ratios from IR, OJK, and IDX sources.",
    tools: ["Excel", "Notion", "Financial statement analysis", "SQL (optional)"],
    metrics: [
      { label: "Lab issuer", value: "BMRI" },
      { label: "Source types", value: "IR · OJK · IDX" },
    ],
    problem:
      "CSA Block 2 fundamental analysis demands reading primary filings—not secondary summaries. Bank statements differ from industrial issuers: net interest income, NIM, NPL, and funding mix matter more than generic P/E storytelling. I needed a repeatable lab workflow that turns official IR, OJK, and IDX documents into structured snapshots I can revisit and compare.",
    approach:
      "I treated Bank Mandiri (BMRI) as the lab issuer for self-directed CSA work. Filings were read into Excel and Notion templates covering balance sheet and P&L lines specific to banks—NII, NIM, NPL, and related ratios—so each new period updates the same structure. Optional SQL sketches explore how the same snapshots could scale to multi-issuer screens later.",
    impact: [
      { label: "Templates", value: "BS + P&L bank" },
      { label: "Ratio focus", value: "NII · NIM · NPL" },
      { label: "Framing", value: "Learning / lab" },
    ],
  },
  {
    slug: "upwork-ai-agents",
    title: "Upwork Lane — AI agents & automation",
    domain: "Freelance · Automation",
    year: "2025–2026",
    summary:
      "Freelance niche in TypeScript AI agents and automation, hard-capped under 10 hours/week while building toward an investment-company goal.",
    outcome:
      "Practiced scoped delivery and reliability under a strict weekly hour budget—clients get working automations, calendar stays protected for product and markets work.",
    tools: ["TypeScript", "n8n", "AI agents", "APIs"],
    metrics: [
      { label: "Weekly cap", value: "<10h" },
      { label: "Focus", value: "Agents · APIs" },
    ],
    problem:
      "Freelance income can expand to fill every evening. I needed a lane that compounds skills I already use as a builder—TypeScript agents, n8n workflows, API glue—while enforcing a hard weekly cap so AlphaRadar, Kuanta, and capital-markets study stay first. The constraint is the product: scope, reliability, and delivery without invented revenue theater.",
    approach:
      "I positioned an Upwork niche around AI agents and automation in TypeScript, with n8n and external APIs as the delivery stack. Each engagement gets a written scope, explicit success checks, and a calendar hard-stop under 10 hours/week. Reliability beats feature sprawl: prefer smaller automations that run unattended over ambitious agents that need constant babysitting.",
    impact: [
      { label: "Hour discipline", value: "<10h / week" },
      { label: "Delivery style", value: "Scoped · reliable" },
      { label: "Toward", value: "Investment co. path" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
