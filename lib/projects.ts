export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  categories: ("Power Apps" | "Power Automate" | "Power BI")[];
  eyebrow: string;
  summary: string;
  cardSolution: string;
  role: string;
  presentationNote: string;
  screenshots?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
    privacyMask?: boolean;
  }[];
  technologies: string[];
  theme: "violet" | "blue" | "aqua";
  problem: string;
  solution: string;
  contribution: string[];
  features: string[];
  architecture: string[];
  dataModel: string;
  implementation: string[];
  validation: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "compliance-management-portal",
    number: "01",
    title: "Compliance Management Portal",
    shortTitle: "Compliance Management Portal",
    categories: ["Power Apps", "Power Automate"],
    eyebrow: "POWER APPS · DATAVERSE · POWER AUTOMATE",
    summary: "A centralized Canvas App experience for tracking access credential rotation and compliance activities.",
    cardSolution: "App development and reporting support connected records, date validation, audit history and automated reminders.",
    role: "Power Platform development and reporting support",
    presentationNote: "The original layout is retained. Public copies use fictional records and show Aswin in the profile footer; dashboard totals remain point-in-time examples.",
    screenshots: [{
      src: "/projects/pam-compliance-overview-synthetic.png",
      alt: "Compliance Portal overview with summary cards, charts, redacted records, and a profile footer labeled Aswin.",
      width: 1329,
      height: 755,
      caption: "PAM and CIO Compliance overview with a synthetic profile footer.",
      privacyMask: true
    }, {
      src: "/projects/pam-credential-rotation-synthetic.png",
      alt: "Credential Rotation screen with fictional names and rotation IDs in the original table layout.",
      width: 1335,
      height: 753,
      caption: "Credential Rotation list with synthetic sample records.",
      privacyMask: true
    }, {
      src: "/projects/compliance-new-rotation.png",
      alt: "Compliance Portal Power Apps screen for creating a new credential rotation, with the original form layout and sample date fields.",
      width: 1334,
      height: 753,
      caption: "New credential rotation form, shown as supplied."
    }, {
      src: "/projects/pam-compliance-activities-synthetic.png",
      alt: "Compliance Activities screen with summary cards, filters, redacted records, and a profile footer labeled Aswin.",
      width: 1334,
      height: 751,
      caption: "Compliance Activities list with a synthetic profile footer.",
      privacyMask: true
    }],
    technologies: ["Power Apps", "Dataverse", "Power Automate", "Teams Adaptive Cards", "Power BI", "Power Fx"],
    theme: "violet",
    problem: "Teams needed a shared way to track privileged-access credential rotation and CIO compliance activities, keep target dates visible, and understand changes to a record.",
    solution: "The portal brings the two workstreams into searchable Canvas App experiences with create and edit flows, status-aware views, date validation, change history, attachment handling, summary metrics and automated reminders.",
    contribution: [
      "Contributed to Canvas App development and reporting support across both compliance workstreams",
      "Implemented planned-date and due-date validation, including a required reason when relevant dates change",
      "Added change history for previous and new dates, the reason, the person making the change and the timestamp",
      "Worked on reminder and completion-check workflows using Microsoft Teams Adaptive Cards"
    ],
    features: [
      "Separate credential-rotation and compliance-activity experiences",
      "Searchable and filterable records with create and edit workflows",
      "Validation that planned dates come before due dates",
      "Status-aware views, attachments and activity history",
      "Automated reminders and Teams Adaptive Card completion checks"
    ],
    architecture: ["Canvas App experiences", "Dataverse records", "Power Automate workflows", "Teams Adaptive Cards", "Power BI reporting views"],
    dataModel: "The portal tracks credential-rotation records and compliance activities. Its change history records the previous and new dates, the reason for a relevant change, who made it and when.",
    implementation: [
      "Validate planned and due dates before records are saved",
      "Require a reason when relevant dates are changed",
      "Trigger reminders before target dates and completion checks through Teams Adaptive Cards",
      "Present active, planned, overdue, in-progress and completed records in status-aware views"
    ],
    validation: [
      "Keep date rules visible and consistent across create and edit flows",
      "Make the reason, actor and timestamp available with each tracked date change",
      "Label recreated previews that use synthetic data"
    ],
    outcome: "The case study describes documented contributions without claiming deployment, adoption or business impact. Its original Power Apps screenshot is shown as supplied."
  },
  {
    slug: "health-compliance-analytics",
    number: "02",
    title: "Health & Compliance Analytics Dashboard",
    shortTitle: "Health & Compliance Analytics",
    categories: ["Power BI"],
    eyebrow: "POWER BI · DAX · DATA VALIDATION",
    summary: "An interactive Power BI report for KPI monitoring, risk visibility and operational reporting.",
    cardSolution: "The work covered report development, data validation and deployment support; public visuals use synthetic data.",
    role: "Power BI report development, data validation and deployment support",
    presentationNote: "Recreated report preview · Synthetic data · No verified impact metrics stated",
    technologies: ["Power BI", "DAX", "Power Query", "Dataverse", "SQL / PostgreSQL where applicable", "DirectQuery / semantic models"],
    theme: "blue",
    problem: "Stakeholders needed a consolidated view of key counts, severity and status instead of manually reviewing separate operational records.",
    solution: "The reporting experience brings KPI cards, planned-versus-overdue comparisons, risk and status breakdowns, category analysis, filters and detailed record views into interactive report pages.",
    contribution: [
      "Developed Power BI report pages and KPI measures for health and compliance reporting",
      "Validated data and supported model and report troubleshooting",
      "Supported deployment activities without claiming an unverified production outcome"
    ],
    features: [
      "KPI cards and planned-versus-overdue comparisons",
      "Severity, risk and status breakdowns",
      "Category analysis and environment-aware filtering",
      "Filters for status, severity, module and environment",
      "Drill-through and detailed record views where appropriate"
    ],
    architecture: ["Dataverse and applicable data sources", "Power Query", "DAX measures", "Interactive report pages", "Filters and detail views"],
    dataModel: "The reporting brief identifies Dataverse and, where applicable, SQL/PostgreSQL or semantic-model sources. Internal entity labels, production architecture and proprietary metric definitions are intentionally omitted.",
    implementation: [
      "Build KPI measures and report pages around status, risk and category views",
      "Use filters to explore the reporting dimensions described in the brief",
      "Support data validation and model/report troubleshooting during development"
    ],
    validation: [
      "Validate source data and report behavior during development",
      "Keep metric definitions and production-specific details private unless approved",
      "Use synthetic values in the recreated public dashboard"
    ],
    outcome: "The brief does not state verified adoption, performance or savings. The portfolio recreation uses synthetic values and does not make a deployment or business-impact claim."
  },
  {
    slug: "user-activity-analytics",
    number: "03",
    title: "User Activity Analytics Dashboard",
    shortTitle: "User Activity Analytics",
    categories: ["Power BI"],
    eyebrow: "POWER BI · DAX · USAGE ANALYTICS",
    summary: "A Power BI dashboard for exploring application usage across sessions, screens, users and time.",
    cardSolution: "The work covered dashboard design, DAX calculations and report validation; public example records are synthetic.",
    role: "Power BI dashboard design and DAX/report validation",
    presentationNote: "The overview uses fictional enterprise IDs and user names; report metrics remain point-in-time examples.",
    screenshots: [{
      src: "/projects/user-activity-dashboard-synthetic.png",
      alt: "Usage analytics report with fictional enterprise IDs and names in its activity tables and user chart.",
      width: 1135,
      height: 884,
      caption: "Usage analytics overview with synthetic user records.",
      privacyMask: true
    }],
    technologies: ["Power BI", "DAX", "Power Query", "Dataverse activity logs", "SQL / PostgreSQL where applicable"],
    theme: "aqua",
    problem: "Managers needed a clear way to review which screens are used, when activity peaks, and how session patterns change over time.",
    solution: "The report brings activity-log data into an interactive view of users, sessions, duration, screen usage and hourly or daily trends, with detailed activity records for further review.",
    contribution: [
      "Designed Power BI views for application usage patterns and activity details",
      "Developed DAX calculations for user, session and duration analysis",
      "Validated report behavior and calculation logic"
    ],
    features: [
      "User, session and average-duration KPI patterns",
      "Screen usage and top-user rankings",
      "Hourly activity distribution and session/time trends",
      "Daily comparisons and peak-activity views",
      "Time-range, status and screen filters with an activity detail table"
    ],
    architecture: ["Activity-log data", "Power Query", "DAX measures", "Usage report pages", "Synthetic detail records"],
    dataModel: "The analysis uses application activity logs to examine sessions, navigation screens and time. The public recreation uses fictional identities and synthetic values rather than real usage records.",
    implementation: [
      "Calculate user, session and duration measures with DAX",
      "Present activity by screen and across hourly and daily time periods",
      "Provide filters and detail views for further report exploration"
    ],
    validation: [
      "Validate DAX calculations and report behavior",
      "Keep real user identities and production usage details out of the public recreation",
      "Identify the hourly chart as an original screenshot rather than a synthetic preview"
    ],
    outcome: "The hourly chart is shown as supplied and its values are not presented as independently verified portfolio outcomes. The case study focuses on the documented dashboard design, DAX calculations and report validation."
  },
  {
    slug: "interview-operations-analytics",
    number: "04",
    title: "Interview Operations Analytics",
    shortTitle: "Interview Operations Analytics",
    categories: ["Power BI"],
    eyebrow: "SQL · POWER BI · DATA RECONCILIATION",
    summary: "Operational reporting for interview scheduling events and email-processing metrics.",
    cardSolution: "SQL inspection and data validation support consistent Power BI reporting across multiple source views.",
    role: "SQL/data validation and Power BI reporting",
    presentationNote: "Sanitized enterprise case study · Generic naming · Synthetic data · Internal metric definitions omitted",
    technologies: ["SQL", "PostgreSQL", "Power BI", "DAX", "DirectQuery", "Semantic models"],
    theme: "blue",
    problem: "Scheduling and email-processing metrics draw on several business entities and source views. Counts need to reconcile and use consistent definitions across those sources.",
    solution: "The reporting workflow uses SQL to inspect and validate source-view counts, then combines the relevant data in Power BI for operational analysis. The public case study uses generic labels and avoids production metric definitions.",
    contribution: [
      "Used SQL and data validation to inspect scheduling and email-processing sources",
      "Supported Power BI reporting and reconciliation across multiple views",
      "Reviewed metric edge cases such as missing scheduled slots and distinct event identifiers"
    ],
    features: [
      "Scheduling rows and unique event identifiers",
      "Scheduled-slot coverage",
      "Event-type breakdowns",
      "Email-processing outcome categories",
      "Reconciliation across source views"
    ],
    architecture: ["SQL source views", "Data validation and reconciliation", "Power BI model", "Operational report views"],
    dataModel: "The reporting work combines data from several source views and business entities. Internal database and view names, candidate information and exact production metric definitions are not included.",
    implementation: [
      "Inspect source views with SQL before combining report data",
      "Reconcile counts across data sources",
      "Account for missing scheduled slots and distinct scheduling identifiers"
    ],
    validation: [
      "Check that metrics reconcile across their source views",
      "Review edge cases before publishing aggregate reporting",
      "Keep candidate data and production definitions private"
    ],
    outcome: "The brief describes reporting and validation work but provides no verified operational impact figures. This generic case study presents the analysis approach without exposing candidate information or internal metric definitions."
  },
  {
    slug: "user-administration-app-ui",
    number: "05",
    title: "User Administration App UI",
    shortTitle: "User Administration App UI",
    categories: ["Power Apps"],
    eyebrow: "POWER APPS · CANVAS APP UI",
    summary: "Canvas App interface improvements for user-management views and role-oriented controls.",
    cardSolution: "The UI work focused on page layout, forms, navigation and iterative review with the project lead.",
    role: "Canvas App UI enhancements",
    presentationNote: "Sanitized enterprise case study · Generic app recreation · Fictional users · No employer branding",
    technologies: ["Power Apps Canvas Apps", "Power Fx", "Responsive layouts", "Dataverse where used"],
    theme: "violet",
    problem: "Administrators needed clear, consistent user-management views and controls presented according to the intended user roles.",
    solution: "The interface work refined page layout, form structure, navigation, role-oriented sections and visual consistency in response to stakeholder feedback.",
    contribution: [
      "Enhanced the Canvas App user interface for administrative tasks",
      "Refined page layout, forms, navigation and role-oriented sections",
      "Iterated on the interface with the project lead"
    ],
    features: [
      "Administrative dashboard layout",
      "User-list and add-user experiences",
      "Role-oriented interface elements",
      "Consistent spacing and typography",
      "Stakeholder-led review and refinement"
    ],
    architecture: ["Canvas App interface", "User-management views", "Role-oriented controls", "Stakeholder review"],
    dataModel: "This case study focuses on the interface contribution. It does not describe underlying records, access policies, employer details or integration architecture.",
    implementation: [
      "Refine the user-management page and form structure",
      "Improve navigation and role-oriented sections",
      "Use responsive layout and consistent visual patterns"
    ],
    validation: [
      "Review the interface iteratively with the project lead",
      "Align changes with stakeholder feedback",
      "Use fictional users and generic branding in the public recreation"
    ],
    outcome: "The source brief describes UI enhancement work but does not provide verified adoption or impact metrics. The portfolio preview is a generic recreation and does not include employer branding or real user data."
  },
  {
    slug: "hypercare-support-app",
    number: "06",
    title: "Hypercare Support App",
    shortTitle: "Hypercare Support App",
    categories: ["Power Apps"],
    eyebrow: "POWER APPS · SUPPORT QUERY INTAKE",
    summary: "A support-query experience for submitting requests and reviewing their status, assignment and history.",
    cardSolution: "The documented interface combines a structured intake form with searchable recent-query and tracking views.",
    role: "Power Apps project; individual responsibilities are not specified in the source document",
    presentationNote: "Source views remain in document order. Public copies use fictional names, ticket IDs and descriptions; aggregate totals remain point-in-time examples.",
    technologies: ["Power Apps"],
    theme: "violet",
    screenshots: [{
      src: "/projects/hypercare-query-form-redacted.png",
      alt: "Hypercare support app with a query submission form and an empty recent-query panel.",
      width: 1338,
      height: 751,
      caption: "Raise New Query form and Recent Queries panel.",
      privacyMask: true
    }, {
      src: "/projects/hypercare-query-overview-synthetic.png",
      alt: "Hypercare query overview with fictional query IDs, names, descriptions and status values.",
      width: 1134,
      height: 640,
      caption: "Query Overview with synthetic sample records.",
      privacyMask: true
    }],
    problem: "Support requests needed a consistent intake experience and a way to review the state and assignment of existing queries.",
    solution: "The documented app interface includes a query form for entity, title or category, description, comments and attachments, alongside recent-query and overview screens.",
    contribution: [
      "The supplied project document describes the app screens and workflow but does not identify individual implementation responsibilities."
    ],
    features: [
      "Structured support-query submission with optional comments and attachments",
      "Recent-query panel and query overview table",
      "Search and filters for submitter, assignee, state, source and date",
      "Status, incident-reference and assignment visibility"
    ],
    architecture: ["Power Apps interface", "Query intake form", "Searchable tracking views"],
    dataModel: "The screenshots show query and incident-reference fields. The source document does not identify backend connectors, data sources or automation rules.",
    implementation: [
      "Capture the fields shown in the documented query-submission flow",
      "Present existing requests with status, assignment and filtering controls"
    ],
    validation: [
      "Keep personal identities, incident references and ticket descriptions out of the public screenshots",
      "Do not infer backend services or automation from the interface alone"
    ],
    outcome: "The documentation describes the app and its visible workflow, but provides no verified deployment or impact measures. Screenshot values are point-in-time examples, not live service data."
  },
  {
    slug: "hypercare-operations-dashboard",
    number: "07",
    title: "Hypercare Operations Dashboard",
    shortTitle: "Hypercare Operations Dashboard",
    categories: ["Power BI"],
    eyebrow: "POWER BI · OPERATIONS REPORTING",
    summary: "Operations reporting for ticket volumes, status trends, category coverage and team activity.",
    cardSolution: "The documented views bring ticket KPIs, trend analysis, team workload and record-level detail into one reporting experience.",
    role: "Power BI project; individual responsibilities are not specified in the source document",
    presentationNote: "Source views remain in document order. Public copies use fictional names and ticket details; KPI totals remain point-in-time screenshot values.",
    technologies: ["Power BI"],
    theme: "blue",
    screenshots: [{
      src: "/projects/hypercare-operations-dashboard-synthetic.png",
      alt: "Hypercare operations report with ticket KPIs, category and team summaries, plus fictional assignees and ticket records.",
      width: 1134,
      height: 1090,
      caption: "Operations dashboard with synthetic assignees and ticket records.",
      privacyMask: true
    }, {
      src: "/projects/hypercare-team-activity-synthetic.png",
      alt: "OPS team activity report with fictional team names and sample workload measures.",
      width: 1134,
      height: 530,
      caption: "OPS Team Activity view with synthetic team names.",
      privacyMask: true
    }],
    problem: "Support operations needed reporting that could summarize ticket volume and status while allowing users to explore category, trend and team workload.",
    solution: "The documented report includes ticket KPIs, category coverage, ticket trends, a detailed ticket view and an OPS Team Activity view.",
    contribution: [
      "The supplied project document describes the report and its visuals but does not identify individual implementation responsibilities."
    ],
    features: [
      "Ticket totals and status breakdowns",
      "Category coverage and ticket trends",
      "Detailed ticket view with entity, state and assignment fields",
      "Team activity measures for rota, workload and time spent"
    ],
    architecture: ["Power BI report pages", "Ticket KPI and trend visuals", "Team activity and detail views"],
    dataModel: "The screenshots show ticket, assignment and team activity fields. Specific datasets, table names and refresh configuration are not documented.",
    implementation: [
      "Use entity, status, assignee and date filters to explore report views",
      "Compare summary, trend, ticket-detail and team-activity visuals"
    ],
    validation: [
      "Treat captured counts and dates as point-in-time examples",
      "Keep ticket text and employee identities out of public screenshots",
      "Do not infer data sources or refresh behavior from the visuals"
    ],
    outcome: "The source material documents report content but does not verify the figures as current operational results or state an individual role. No live-data, adoption or impact claim is made."
  },
  {
    slug: "workday-servicenow-ado-retry-app",
    number: "08",
    title: "Workday ServiceNow ADO Retry App",
    shortTitle: "ServiceNow ADO Retry App",
    categories: ["Power Apps"],
    eyebrow: "POWER APPS · RETRY WORKFLOW",
    summary: "An app interface for reviewing failed ServiceNow-to-Azure DevOps conversions, retry history and access administration.",
    cardSolution: "The documented screens cover retry history, configuration and user-access management without exposing internal configuration values.",
    role: "Power Apps project; individual responsibilities are not specified in the source document",
    presentationNote: "Public copies use fictional user names, enterprise IDs and retry details. The original layouts are retained; internal configuration values remain omitted.",
    technologies: ["Power Apps", "ServiceNow", "Azure DevOps"],
    theme: "violet",
    screenshots: [{
      src: "/projects/workday-retry-history-synthetic.png",
      alt: "ServiceNow ADO Retry overview with fictional incident IDs, team names and retry descriptions.",
      width: 1333,
      height: 745,
      caption: "Overview and Retry History with synthetic records.",
      privacyMask: true
    }, {
      src: "/projects/workday-ado-configuration-redacted.png",
      alt: "Azure DevOps configuration screen with internal values omitted.",
      width: 1332,
      height: 746,
      caption: "Azure DevOps configuration screen.",
      privacyMask: true
    }, {
      src: "/projects/workday-add-users.png",
      alt: "Add Users form with empty fields and no user records.",
      width: 1134,
      height: 638,
      caption: "Add Users form with an empty user list."
    }, {
      src: "/projects/workday-access-management-synthetic.png",
      alt: "Access-management screen with fictional enterprise IDs, northstar.example email addresses and team names.",
      width: 1134,
      height: 640,
      caption: "Admin Dashboard with synthetic user records.",
      privacyMask: true
    }],
    problem: "The documented application provides views for following conversion attempts, examining failures and maintaining related access settings.",
    solution: "The screenshots show an overview and retry-history table, Azure DevOps configuration fields, an add-user form and an access-management dashboard.",
    contribution: [
      "The supplied project document describes the app screens and workflow but does not identify individual implementation responsibilities."
    ],
    features: [
      "Retry overview with conversion status cards",
      "Searchable retry history and failure-detail fields",
      "Azure DevOps work-item configuration screen",
      "User-access management with role, team and status fields"
    ],
    architecture: ["Power Apps interface", "ServiceNow-to-Azure DevOps retry workflow", "Configuration and access-management screens"],
    dataModel: "The app documentation identifies ServiceNow and Azure DevOps in the workflow. Connector definitions, API behavior and authentication configuration are not specified.",
    implementation: [
      "Review retry outcomes and related failure details",
      "Expose configuration and access-management screens",
      "Keep deployment-specific values out of the public case study"
    ],
    validation: [
      "Redact ticket content, user details, internal URLs and configuration values",
      "Treat the displayed conversion counts as a point-in-time example",
      "Do not infer connector or authentication behavior from screenshots"
    ],
    outcome: "The project document describes visible app capabilities but does not identify an individual contribution or verify the snapshot metrics as a business outcome."
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
