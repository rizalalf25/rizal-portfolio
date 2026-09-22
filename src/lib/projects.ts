/**
 * INTERNAL: All four case studies are FICTIONAL / generic portfolio demos.
 * Do not present as employment at named real brands. Safe for recruiter review
 * when framed as illustrative project work.
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
    slug: "ecommerce-retention",
    title: "E-commerce retention & win-back",
    domain: "E-commerce",
    year: "2024",
    summary:
      "Cohort retention model and a gated win-back test that paid back without blanket discounts.",
    outcome:
      "Raised 90-day repeat purchase rate by clarifying which cohorts were leaking—and which win-back offers actually paid back.",
    tools: ["SQL", "Python", "dbt", "Looker"],
    metrics: [
      { label: "90-day retention", value: "+8%" },
      { label: "Win-back ROI", value: "2.4×" },
    ],
    problem:
      "A multi-category online retailer saw first-order volume grow while 90-day repeat purchase stalled. Marketing still spent on broad discount blasts; product and CRM could not agree which cohorts were worth saving. Leadership needed a shared definition of retention and a testable playbook—not another vanity dashboard.",
    approach:
      "I rebuilt retention in dbt from order and session events (first purchase date, order rank, category mix). In Looker I shipped cohort grids by acquisition channel and first category, then diagnosed drop-offs between order 1→2 and 2→3. With CRM I designed a gated win-back experiment (timing × offer depth) with guardrails on discount margin and unsubscribe rate. Weekly reviews translated the charts into one decision: who gets an offer, who gets content-only, who is left alone.",
    impact: [
      { label: "90-day retention", value: "+8%" },
      { label: "Win-back campaign ROI", value: "2.4×" },
      { label: "Discount cost per recovered order", value: "−31%" },
    ],
  },
  {
    slug: "fintech-credit-ops",
    title: "Credit ops queue & SLA visibility",
    domain: "Fintech",
    year: "2023",
    summary:
      "One prioritized overdue queue for collectors—replacing spreadsheet handoffs and weekly surprise SLA breaches.",
    outcome:
      "Cut average days-past-due on the collection queue by giving ops a single prioritized view instead of spreadsheet handoffs.",
    tools: ["SQL", "dbt", "Tableau", "Excel"],
    metrics: [
      { label: "Avg days past due", value: "−22%" },
      { label: "SLA breach rate", value: "−35%" },
    ],
    problem:
      "A consumer lending ops team tracked overdue accounts across email exports, a core banking extract, and three team spreadsheets. Supervisors could not see which cases breached SLA until end of week. Collectors cherry-picked easy accounts; high-balance risk sat untouched. Finance and ops argued over whose numbers were “right.”",
    approach:
      "I modeled a daily overdue snapshot in dbt (balance, days past due, product, collector assignment, last contact). In Tableau I built a queue board with SLA clocks, aging buckets, and capacity vs backlog. Threshold alerts flagged accounts idle >N days or approaching regulatory touch limits. I ran a two-week shadow period against the old spreadsheets to reconcile definitions, then trained leads on a 15-minute stand-up ritual using the same board.",
    impact: [
      { label: "Average days past due", value: "−22%" },
      { label: "Accounts past SLA", value: "−35%" },
      { label: "Hours/week on manual reconciles", value: "−6 hrs" },
    ],
  },
  {
    slug: "marketplace-pricing-test",
    title: "Marketplace promo depth experiment",
    domain: "Marketplace",
    year: "2023",
    summary:
      "Promo-depth A/B that lifted GMV while holding contribution margin flat—and killed a deeper cut that looked good on top-line alone.",
    outcome:
      "Found a promo depth that lifted GMV without eroding contribution margin—then stopped a deeper discount that looked good on top-line alone.",
    tools: ["Python", "SQL", "Excel", "A/B testing"],
    metrics: [
      { label: "GMV", value: "+4.2%" },
      { label: "Contribution margin", value: "held flat" },
    ],
    problem:
      "Category managers on a two-sided marketplace kept deepening flash promos because GMV moved. Finance warned that contribution margin was slipping, but nobody had a clean experiment isolating promo depth from seasonality and inventory effects. The ask: prove which discount band grew profitable demand.",
    approach:
      "I designed a stratified A/B test on selected SKU clusters (control vs −10% vs −20% promo depth), with CUPED-style covariates from prior period GMV and stockouts as a guardrail. Analysis in Python covered uplift, confidence intervals, and heterogeneous effects by price tier. I packaged a one-pager for category and finance: recommended band, kill criteria, and a simple Excel simulator for future promo calendars.",
    impact: [
      { label: "GMV (winning variant)", value: "+4.2%" },
      { label: "Contribution margin", value: "0 pp change" },
      { label: "Deep-discount variant vs control", value: "−1.1 pp margin" },
    ],
  },
  {
    slug: "ops-fulfillment-sla",
    title: "Fulfillment late-delivery root cause",
    domain: "Operations",
    year: "2022",
    summary:
      "Stage-level late-delivery attribution so hubs fixed pick/pack delays instead of arguing with carriers.",
    outcome:
      "Reduced late deliveries by pinning delays to specific warehouse steps—and giving ops a board that matched how they actually work a shift.",
    tools: ["SQL", "dbt", "Power BI", "Python"],
    metrics: [
      { label: "Late delivery rate", value: "−18%" },
      { label: "Ops fire-drill escalations", value: "−40%" },
    ],
    problem:
      "A regional fulfillment network missed on-time delivery targets for three consecutive months. Leadership saw a single “late %” number; warehouse managers blamed carriers; carriers blamed pick delays. There was no shared decomposition of where minutes were lost between order release and handoff.",
    approach:
      "I built an event timeline model in dbt (release → pick → pack → dock → carrier scan) and attributed lateness to the first breached stage. Power BI showed hub-level heatmaps, stage SLA breach rates, and daypart patterns. A short Python notebook estimated impact of fixing the top two stages vs hiring more outbound capacity. Ops adopted a daily “top late stages” review; I documented metric definitions so finance and ops stopped debating the denominator.",
    impact: [
      { label: "Late delivery rate", value: "−18%" },
      { label: "Escalations to leadership", value: "−40%" },
      { label: "Time to identify root stage", value: "same-day" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
