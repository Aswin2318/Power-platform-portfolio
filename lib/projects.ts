export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  categories: ("Power Apps" | "Power Automate" | "Power BI")[];
  eyebrow: string;
  summary: string;
  cardSolution: string;
  technologies: string[];
  theme: "violet" | "blue" | "aqua";
  problem: string;
  solution: string;
  contribution: string[];
  features: string[];
  architecture: string[];
  dataModel: string;
  implementation: string[];
  testing: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "enterprise-compliance-portal",
    number: "01",
    title: "AIS Compliance Portal",
    shortTitle: "AIS Compliance Portal",
    categories: ["Power Apps", "Power Automate"],
    eyebrow: "POWER APPS · POWER AUTOMATE",
    summary: "A clearer way to track compliance activity, deadlines and follow-ups in one workspace.",
    cardSolution: "Canvas App patterns, structured Dataverse records and workflow-based reminders work together in this illustrative concept.",
    technologies: ["Power Apps", "Dataverse", "Power Automate", "Power Fx"],
    theme: "violet",
    problem: "Compliance work often spans deadlines, status updates and follow-ups. This demo explores how one clear workspace could help people record activity consistently and surface the items that need attention.",
    solution: "A responsive Canvas App concept backed by Dataverse, with a companion Power Automate workflow pattern for reminders and status notifications. The focus is a simple, role-aware experience and traceable changes.",
    contribution: ["Shaped the illustrative Canvas App information architecture and key record flows", "Defined Dataverse relationship and change-history patterns", "Designed validation and reminder workflow concepts using Power Fx and Power Automate"],
    features: ["Role-aware landing views and record actions", "Date validation and clear status indicators", "Change-comment and history patterns", "Reminder and completion-check workflow concept", "Filterable activity list with attention states"],
    architecture: ["Canvas App", "Dataverse tables", "Power Automate flows", "Notifications"],
    dataModel: "Illustrative entities include Compliance Activity, Activity Status, Category, Owner and Change History. Lookup relationships keep status and ownership consistent while the history table preserves a readable record of significant changes.",
    implementation: ["Power Fx validation before a record is submitted", "Dataverse lookup relationships for consistent categorisation", "Flow trigger pattern for upcoming due dates and status transitions", "Controlled status choices to make reporting more reliable"],
    testing: ["Validate required fields and invalid date combinations", "Test role-aware views with representative demo roles", "Exercise status transitions and record-history updates", "Review reminder logic with synthetic dates and records"],
    outcome: "This is an illustrative portfolio concept, not a production deployment. It demonstrates a design approach for connecting app UX, data structure and automation in a traceable workflow."
  },
  {
    slug: "health-compliance-analytics",
    number: "02",
    title: "AIS Health and Compliance Analytics",
    shortTitle: "AIS Health & Compliance Analytics",
    categories: ["Power BI"],
    eyebrow: "POWER BI · DAX · DATA MODELLING",
    summary: "A concise analytical view for reviewing compliance status, severity and activities needing attention.",
    cardSolution: "A Power BI-style report uses a clear star-schema approach and transparent KPI definitions to keep analysis understandable.",
    technologies: ["Power BI", "DAX", "Power Query", "Dataverse", "SQL"],
    theme: "blue",
    problem: "Operational information can be difficult to interpret when status, severity, ownership and time are stored across different tables or views. This demo explores a concise report pattern for reviewing priority and trend.",
    solution: "A dark, accessible Power BI-style dashboard mockup powered by a simple star-schema approach. KPI definitions, status logic and date logic are designed to be inspectable rather than opaque.",
    contribution: ["Modelled an illustrative activity fact table and supporting dimensions", "Outlined DAX measure patterns for status, completion and overdue activity", "Designed a report hierarchy that moves from overview to detailed exploration"],
    features: ["KPI cards with documented definitions", "Severity and status breakdowns", "Completion and overdue trend patterns", "Date, category and status filter concepts", "Drill-down-friendly report layout"],
    architecture: ["Source tables", "Power Query", "Star schema", "DAX measures", "Power BI report"],
    dataModel: "The illustrative model uses a central Activity fact table linked to Date, Status, Severity, Category and Owner dimensions. This shape keeps measures focused and supports consistent slicing across report pages.",
    implementation: ["Power Query transformation patterns for clean types and keys", "Date dimension for period analysis", "DAX measure patterns for completion, overdue and status counts", "Report-page layout that separates overview from detail exploration"],
    testing: ["Reconcile sample totals against a controlled source extract", "Test measures across date and status filter combinations", "Check empty and incomplete demo records", "Review visual labels and number formats for clarity"],
    outcome: "All dashboard values and charts are synthetic. The case study focuses on a repeatable method for modelling, validating and communicating operational data—not on unverified business results."
  },
  {
    slug: "user-activity-analytics",
    number: "03",
    title: "Hypercare User Activity Analytics",
    shortTitle: "Hypercare User Activity Analytics",
    categories: ["Power BI"],
    eyebrow: "POWER BI · POSTGRESQL · DAX",
    summary: "A synthetic activity dashboard for exploring session patterns, screen usage and time spent.",
    cardSolution: "PostgreSQL-style event modelling and Power BI measures demonstrate how validation can support trustworthy usage analysis.",
    technologies: ["Power BI", "PostgreSQL", "SQL", "DAX"],
    theme: "aqua",
    problem: "Product and application events are more useful when they can be validated, grouped and explored across time, screens and user sessions. This demo examines the analytical patterns involved.",
    solution: "An illustrative Power BI dashboard connected to a PostgreSQL-style event model. The design highlights practical checks for timestamp quality, duration units and session logic before visualising trends.",
    contribution: ["Defined the illustrative event, user and screen dimensional model", "Outlined SQL validation patterns for timestamps and event records", "Designed DAX calculation patterns for users, sessions and elapsed time"],
    features: ["User and session count patterns", "Screen-usage and time-spent analysis", "Hourly activity trends", "Data-quality validation checks", "Date and screen filter concepts"],
    architecture: ["Event data", "PostgreSQL views", "Power Query", "DAX measures", "Power BI report"],
    dataModel: "The synthetic model centers on event records with timestamps, session identifiers and screen names. Supporting Date, User and Screen dimensions make time-based exploration and consistent grouping easier.",
    implementation: ["SQL view patterns for typed, consistently named events", "Duration and timestamp validation before loading", "DAX measures for distinct users, sessions and elapsed time", "Hourly bucket logic for an understandable usage trend"],
    testing: ["Compare sample event counts before and after transformation", "Check duplicate events and missing timestamps", "Validate duration calculations against controlled records", "Test report totals with screen and period filters"],
    outcome: "This is a synthetic demonstration. Its value is the technical reasoning around event quality and analytical definitions, rather than a claim about real product usage or business impact."
  }
];

export const allTechnologies = [
  { icon: "◈", name: "Power Apps", detail: "Canvas Apps · Power Fx · responsive layouts", group: "Power Platform" },
  { icon: "↗", name: "Power Automate", detail: "Notifications · approvals · workflows", group: "Power Platform" },
  { icon: "◉", name: "Dataverse", detail: "Tables · relationships · security concepts", group: "Power Platform" },
  { icon: "▥", name: "Power BI", detail: "DAX · Power Query · data modelling", group: "Business Intelligence" },
  { icon: "⌘", name: "SQL & PostgreSQL", detail: "Queries · views · validation", group: "Data" },
  { icon: "</>", name: "Development & AI", detail: "TypeScript · Next.js · AI-assisted solution exploration", group: "Development" }
];
