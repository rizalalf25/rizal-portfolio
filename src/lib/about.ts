/**
 * Experience entries use generic roles/domains for portfolio framing.
 * They are not claims of employment at named real brands.
 */

export const aboutIntro = `I turn messy operational data into decisions teams can act on. Over four years I have worked where product, ops, and finance meet—defining the right metric, testing what moves it, and telling the story so a non-analyst can decide in one meeting.

I care less about pretty charts and more about a clear before/after: what changed, by how much, and what we do next.`;

export const aboutBackground = `Training in International Relations taught me to read incentives and communicate under ambiguity—skills I use every week with cross-functional partners. I am currently deepening capital-markets literacy alongside the craft of analytics.`;

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  summary: string;
};

export const experienceTimeline: TimelineItem[] = [
  {
    period: "2023 — Present",
    title: "Data Analyst",
    org: "Product & growth analytics (marketplace / e-commerce)",
    summary:
      "Own retention and experimentation analytics: cohort models in dbt, Looker dashboards, and A/B readouts for CRM and category teams.",
  },
  {
    period: "2021 — 2023",
    title: "Operations Analyst",
    org: "Fintech & lending operations",
    summary:
      "Built overdue-queue visibility, SLA tracking, and weekly ops rituals that cut manual reconciles and days-past-due.",
  },
  {
    period: "2020 — 2021",
    title: "Junior Analyst",
    org: "Fulfillment & logistics analytics",
    summary:
      "Modeled stage-level delivery timelines, Power BI hub boards, and root-cause packs for warehouse and carrier reviews.",
  },
];
