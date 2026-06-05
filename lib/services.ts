export type ServiceCategory = "strategy" | "tech" | "operations";
export type IllustrationType = "chart" | "network" | "hierarchy" | "growth";

export interface ConsultingService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ServiceCategory;
  price: string;
  priceValue: number | null;
  duration: string;
  features: string[];
  metrics: string;
  illustrationType: IllustrationType;
  gumroadEnvVar: string | null;
  iconPosition: string;
}

export const SERVICES: ConsultingService[] = [
  {
    id: "solentra-scan",
    title: "Solentra Scan: Digital Presence Audit",
    shortDescription:
      "Know where you stand before you spend on growth.",
    fullDescription:
      "For founders and marketing leads deciding where to invest next. We score the current state across web, SEO, ads, social, and brand, and hand back a 90-day action plan.",
    category: "tech",
    price: "€1 199",
    priceValue: 1199,
    duration: "2-3 weeks",
    features: [
      "Kick-off session with the founder or marketing lead (60 minutes)",
      "Audit of website performance, SEO health, and user experience",
      "Analysis of social media presence and engagement metrics",
      "Review of existing digital advertising and conversion funnels",
      "Competitive benchmarking against 5 key competitors",
      "Assessment of brand consistency across channels",
      "Written report with findings and prioritised recommendations (20-25 pages)",
      "90-day digital action plan",
      "Results presentation session (60 minutes)",
    ],
    metrics: "Digital presence baseline",
    illustrationType: "network",
    gumroadEnvVar: "NEXT_PUBLIC_GUMROAD_SOLENTRA_SCAN_URL",
    iconPosition: "0% 0%",
  },
  {
    id: "performance-optimisation",
    title: "Performance Analysis & Optimisation",
    shortDescription:
      "Stop the leaks in the channels you already pay for.",
    fullDescription:
      "For teams running paid, organic, email, and social. We find the conversion drop-offs, the underperforming spend, and the quick wins worth pulling first.",
    category: "operations",
    price: "€1 799",
    priceValue: 1799,
    duration: "2-3 weeks",
    features: [
      "Audit of analytics setup and tracking accuracy",
      "Multi-channel performance review (paid ads, organic, email, social)",
      "Conversion rate analysis at each funnel stage",
      "Identification of underperforming areas and quick wins",
      "Benchmarking against industry standards",
      "Prioritised optimisation roadmap",
      "Custom dashboard setup recommendations",
      "Monthly reporting template",
      "Strategic recommendations session (90 minutes)",
    ],
    metrics: "ROI optimisation roadmap",
    illustrationType: "chart",
    gumroadEnvVar: "NEXT_PUBLIC_GUMROAD_PERFORMANCE_OPTIMISATION_URL",
    iconPosition: "50% 0%",
  },
  {
    id: "brand-communications",
    title: "Brand Communications Framework",
    shortDescription:
      "One voice across every channel and every team.",
    fullDescription:
      "For teams whose copy sounds different on LinkedIn than in email. We define the voice, the messaging framework, the channel guidelines, the templates, and the crisis principles.",
    category: "strategy",
    price: "€2 099",
    priceValue: 2099,
    duration: "3 weeks",
    features: [
      "Brand audit and current communications review",
      "Interviews with the team and selected clients (up to 5 people)",
      "Brand voice and tone definition",
      "Key messaging framework for different audience segments",
      "Communication guidelines for each digital channel",
      "Templates for social media, email, and website copy",
      "Crisis communication principles",
      "Training session for the marketing team (2 hours)",
    ],
    metrics: "Voice + templates + crisis kit",
    illustrationType: "hierarchy",
    gumroadEnvVar: "NEXT_PUBLIC_GUMROAD_BRAND_COMMUNICATIONS_URL",
    iconPosition: "100% 0%",
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy Development",
    shortDescription:
      "From ad-hoc activity to a 6-12 month plan with KPIs.",
    fullDescription:
      "For startups and SMEs replacing scattered digital tactics with a written strategy. Personas, channels, content pillars, customer journey, and the budget breakdown that supports them.",
    category: "strategy",
    price: "€2 599",
    priceValue: 2599,
    duration: "3-4 weeks",
    features: [
      "Strategic workshop with the leadership team (3 hours)",
      "Target audience research and persona development (up to 3 personas)",
      "Definition of digital objectives and KPIs",
      "Channel strategy (which platforms, why, and how)",
      "Content pillars and messaging framework",
      "Customer journey mapping across digital touchpoints",
      "Budget allocation recommendations",
      "6-12 month digital roadmap",
      "Final strategy document (30-40 pages)",
      "Presentation session for the team (90 minutes)",
    ],
    metrics: "6-12 month roadmap",
    illustrationType: "growth",
    gumroadEnvVar: "NEXT_PUBLIC_GUMROAD_DIGITAL_STRATEGY_URL",
    iconPosition: "0% 50%",
  },
  {
    id: "communications-planning",
    title: "Communications Planning Programme",
    shortDescription:
      "A 90-day editorial calendar your team can actually run.",
    fullDescription:
      "For teams reacting week to week instead of planning quarter to quarter. We set the themes, build the calendar, define the channel plans, and write down who ships what when.",
    category: "operations",
    price: "€2 899",
    priceValue: 2899,
    duration: "3-4 weeks",
    features: [
      "Communications audit and gap analysis",
      "Quarterly themes and content pillar definition",
      "Editorial calendar for the next 90 days",
      "Channel-specific content plans (social, email, blog, partnerships)",
      "Content production workflow and roles",
      "KPI framework for measuring communications impact",
      "Templates for briefs, calendars, and reports",
      "Two planning sessions with the marketing team (90 minutes each)",
      "Follow-up check-in session after 30 days",
    ],
    metrics: "90-day content plan",
    illustrationType: "hierarchy",
    gumroadEnvVar: "NEXT_PUBLIC_GUMROAD_COMMUNICATIONS_PLANNING_URL",
    iconPosition: "50% 50%",
  },
  {
    id: "acquisition-funnel",
    title: "Customer Acquisition Funnel Setup",
    shortDescription:
      "Turn traffic into customers without rebuilding the site.",
    fullDescription:
      "For e-commerce and SMEs with traffic that does not convert. We architect the full funnel: landing copy, lead magnets, email automation, retargeting, and the A/B testing plan for the first 90 days.",
    category: "tech",
    price: "€3 399",
    priceValue: 3399,
    duration: "4-5 weeks",
    features: [
      "Analysis of current acquisition channels and conversion rates",
      "Funnel architecture design (awareness, consideration, conversion, retention)",
      "Landing page recommendations and copy framework",
      "Lead magnet and offer strategy",
      "Email automation sequences (up to 3 sequences)",
      "Retargeting and remarketing setup recommendations",
      "Analytics and tracking implementation guidelines",
      "A/B testing roadmap for the first 90 days",
      "Three implementation support sessions (60 minutes each)",
    ],
    metrics: "Funnel + email + A/B plan",
    illustrationType: "network",
    gumroadEnvVar: "NEXT_PUBLIC_GUMROAD_ACQUISITION_FUNNEL_URL",
    iconPosition: "100% 50%",
  },
  {
    id: "campaign-launch",
    title: "Campaign Coordination & Launch",
    shortDescription:
      "One coordinated push across every channel that matters.",
    fullDescription:
      "For teams running a product launch, seasonal push, or market entry. We handle concept, channel mix, content calendar, creative briefs, launch coordination, and live monitoring through the campaign window.",
    category: "operations",
    price: "€3 899",
    priceValue: 3899,
    duration: "5-6 weeks",
    features: [
      "Campaign strategy session with stakeholders",
      "Campaign concept and creative direction",
      "Channel mix planning (paid social, search, email, content, partnerships)",
      "Content calendar for the entire campaign duration",
      "Creative briefs for designers and content producers",
      "Campaign launch coordination across teams",
      "Real-time performance monitoring during launch",
      "Weekly campaign reports and optimisation recommendations",
      "Post-campaign analysis and learnings document",
    ],
    metrics: "Multi-channel campaign launch",
    illustrationType: "chart",
    gumroadEnvVar: "NEXT_PUBLIC_GUMROAD_CAMPAIGN_LAUNCH_URL",
    iconPosition: "0% 100%",
  },
  {
    id: "solentra-growth",
    title: "Solentra Growth: Full Digital Support Programme",
    shortDescription:
      "Three months with a senior digital team on call.",
    fullDescription:
      "For teams that want a partner on the bench, not a one-off audit. Full presence audit, strategy, funnel build, 90 days of communications planning, weekly reviews, and an executive report every month.",
    category: "strategy",
    price: "€4 199",
    priceValue: 4199,
    duration: "3 months",
    features: [
      "Full digital presence audit (Solentra Scan package)",
      "Digital strategy development",
      "Customer acquisition funnel setup",
      "Communications planning for the entire 3-month period",
      "Weekly performance reviews and optimisation (12 sessions, 60 minutes each)",
      "Bi-weekly creative and campaign coordination support",
      "Custom performance dashboard",
      "Monthly executive reports",
      "Final strategy review and 6-month roadmap handover",
    ],
    metrics: "3-month growth programme",
    illustrationType: "growth",
    gumroadEnvVar: "NEXT_PUBLIC_GUMROAD_SOLENTRA_GROWTH_URL",
    iconPosition: "50% 100%",
  },
  {
    id: "custom-consultation",
    title: "Custom Digital Consultation",
    shortDescription:
      "When the challenge does not fit a standard package.",
    fullDescription:
      "For founders and marketing leads with a specific question, crisis, or hybrid need. Free 30-minute discovery call, then a written proposal with scope, deliverables, and price.",
    category: "strategy",
    price: "Custom",
    priceValue: null,
    duration: "Based on client needs",
    features: [
      "Free 30-minute discovery call to understand your situation and goals",
      "Written proposal with scope, deliverables, timeline, and price",
      "Flexible format: one-time consultation, short-term project, or extended advisory",
      "Direct access to a senior digital strategist",
      "Deliverables shaped around the specific challenge",
      "Optional follow-up sessions and implementation support",
      "Confidentiality agreement included by default",
    ],
    metrics: "Scoped after a free call",
    illustrationType: "growth",
    gumroadEnvVar: null,
    iconPosition: "100% 100%",
  },
];

export function getService(id: string): ConsultingService | undefined {
  return SERVICES.find((s) => s.id === id);
}

export function getGumroadUrl(envVar: string | null): string | null {
  if (!envVar) return null;
  const url = process.env[envVar];
  return url && url.length > 0 ? url : null;
}
