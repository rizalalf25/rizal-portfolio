/**
 * Timeline reflects the real path: IR degree, self-taught markets literacy,
 * product building, and constrained freelance delivery.
 */

export const aboutIntro = `I am a data analyst building AI and quant systems for markets—tools that turn noisy data into a clear next action. AlphaRadar is my multi-market trading assistant; Kuanta teaches quantitative finance from math-zero for Indonesian learners; IDX and CSA lab work sharpen fundamental research.

I care less about vanity dashboards and more about process: signal hygiene, structured research, and shipping under real constraints.`;

export const aboutBackground = `An S1 in International Relations trained me to read incentives and write clearly under ambiguity. I am self-teaching capital-markets literacy through the CSA path and OJK/WMI preparation, while shipping products and a tightly capped freelance automation lane on the way toward building an investment company.`;

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  summary: string;
};

export const experienceTimeline: TimelineItem[] = [
  {
    period: "2025 — Present",
    title: "Data Analyst · Builder — AlphaRadar & Kuanta",
    org: "Independent products",
    summary:
      "Shipping AlphaRadar (AI trading assistant, paper desk, daily briefs) and Kuanta (quant-finance curriculum webapp for Indonesian learners from math-zero).",
  },
  {
    period: "2025 — Present",
    title: "Freelance — AI agents & automation",
    org: "Upwork (hard cap <10h/week)",
    summary:
      "TypeScript agents, n8n workflows, and API automation for clients—scoped delivery and reliability while protecting time for product and markets work.",
  },
  {
    period: "2024 — Present",
    title: "Self-taught CSA & IDX research",
    org: "CSA Block 2 · OJK / WMI path · IDX lab",
    summary:
      "Agentic IDX research workflows and fundamental analysis lab work (e.g. BMRI from IR/OJK/IDX filings into Notion/Excel snapshots) toward capital-markets credentials.",
  },
  {
    period: "Completed",
    title: "S1 Hubungan Internasional",
    org: "Undergraduate degree",
    summary:
      "International Relations foundation—research, writing, and reading institutional incentives—applied now to markets, products, and client communication.",
  },
];
