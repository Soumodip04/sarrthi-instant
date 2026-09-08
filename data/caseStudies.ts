export interface CaseStudy {
  id: string;
  badge: string;
  client: string;
  location: string;
  countryCode: "GB" | "US" | "AU" | "CA";
  flagEmoji: string;
  industry: string;
  timeline: string;
  heroHeadline: string;
  summary: string;
  primaryMetric: {
    value: string;
    label: string;
    sublabel: string;
  };
  keyStats: {
    label: string;
    before: string;
    after: string;
    change: string;
  }[];
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    lcp: string;
    fid: string;
    cls: string;
  };
  problem: string;
  solution: string[];
  techStack: string[];
  clientQuote: {
    text: string;
    author: string;
    role: string;
  };
  accentColor: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "finova-capital",
    badge: "B2B FINTECH · NEXT.JS & PROGRAMMATIC SEO",
    client: "Finova Capital",
    location: "London, United Kingdom",
    countryCode: "GB",
    flagEmoji: "🇬🇧",
    industry: "Cross-Border Commercial Finance",
    timeline: "6-Week Sprint + 6-Mo Retainer",
    heroHeadline: "From Zero Search Footprint to 148,000 Monthly High-Intent Visits & £2.4M Pipeline",
    summary:
      "Finova was burning £18k/month on LinkedIn Ads with a 1.2% landing page conversion rate. We re-engineered their entire digital ecosystem into an ultra-fast Next.js web application coupled with a 420-page programmatic technical SEO engine.",
    primaryMetric: {
      value: "+148K",
      label: "Monthly Organic Pipeline Visits",
      sublabel: "Ranked #1 for 34 high-ticket commercial finance keywords in the UK & EU",
    },
    keyStats: [
      { label: "Organic Monthly Traffic", before: "1,420", after: "148,600", change: "+10,360%" },
      { label: "High-Ticket Demo Requests", before: "4 / mo", after: "47 / mo", change: "+1,075%" },
      { label: "Largest Contentful Paint (LCP)", before: "4.8s", after: "0.62s", change: "-87%" },
      { label: "Cost Per Qualified Inbound Lead", before: "£420", after: "£46", change: "-89%" },
    ],
    lighthouse: {
      performance: 99,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      lcp: "0.62s",
      fid: "8ms",
      cls: "0.001",
    },
    problem:
      "A bloated legacy WordPress build on shared hosting was losing 64% of visitors before first paint. Commercial directors were dropping out of the 9-step application form, while competitors dominated organic search for high-ticket lending queries.",
    solution: [
      "Engineered an ultra-lean Next.js App Router application with static generation for sub-700ms global response times.",
      "Designed a frictionless 2-step financial qualification calculator that increased completion rates by 340%.",
      "Architected a programmatic SEO infrastructure generating 420+ hyper-targeted commercial lending guide pages with custom schema markup.",
      "Migrated infrastructure to Vercel Enterprise with Edge Middleware for instant geo-routed lending rates across the UK and Europe.",
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Edge", "Custom Financial Schema", "PostgreSQL"],
    clientQuote: {
      text: "Working with Sarrthi Instant felt sharper than any Mayfair agency we previously paid 5x more. The daily Loom screencasts and clean code handoff eliminated every friction point of hiring internationally.",
      author: "Alistair Vance",
      role: "Chief Commercial Officer, Finova Capital",
    },
    accentColor: "#D5F326",
  },
  {
    id: "apex-logistics",
    badge: "SUPPLY CHAIN · CUSTOM WEB APP & LOCAL/NATIONAL SEO",
    client: "Apex Global Logistics",
    location: "Chicago, IL, United States",
    countryCode: "US",
    flagEmoji: "🇺🇸",
    industry: "Heavy Freight & Multimodal Supply Chain",
    timeline: "4-Week Rapid Sprint",
    heroHeadline: "4.2x Instant Quote Conversion Lift and 0.58s Page Loads for Heavy Freight",
    summary:
      "Apex required an industrial-strength web platform that could handle instant lane rate estimation across 48 US states while establishing undisputed search dominance in high-yield Midwest freight corridors.",
    primaryMetric: {
      value: "4.2x",
      label: "Quote Request Conversion Lift",
      sublabel: "Average booking time reduced from 8 minutes to 45 seconds",
    },
    keyStats: [
      { label: "Quote Completion Rate", before: "1.8%", after: "7.6%", change: "+322%" },
      { label: "Core Web Vitals Pass Rate", before: "12%", after: "100%", change: "+733%" },
      { label: "Local 3-Pack Rankings (18 Hubs)", before: "Rank #14", after: "Rank #1-2", change: "Top 3" },
      { label: "Inbound Broker Pipeline", before: "$840K/yr", after: "$3.8M/yr", change: "+352%" },
    ],
    lighthouse: {
      performance: 98,
      accessibility: 98,
      bestPractices: 100,
      seo: 100,
      lcp: "0.58s",
      fid: "12ms",
      cls: "0.000",
    },
    problem:
      "Their previous website was an outdated template that broke on mobile, with a clunky PDF-based rate request system that led freight brokers to abandon inquiries and call competitor dispatchers instead.",
    solution: [
      "Built a bespoke interactive freight lane estimator with dynamic distance calculations and instant email dispatch alerts.",
      "Implemented location-based programmatic landing pages for 18 primary US distribution hubs with LocalBusiness geo-schemas.",
      "Optimized assets and critical CSS for 100% Core Web Vitals compliance on field 4G mobile devices.",
      "Integrated secure webhook routing into Apex's internal TMS (Transportation Management System).",
    ],
    techStack: ["Next.js React", "Tailwind CSS", "Mapbox GL", "Webhooks / TMS API", "Schema Graph API"],
    clientQuote: {
      text: "The speed of execution was remarkable. Having our Slack channel buzzing with real-time updates and zero timezone delays made it feel like Sarrthi was sitting in our Chicago headquarters.",
      author: "Marcus Thorne",
      role: "VP of Operations, Apex Global Freight",
    },
    accentColor: "#EE5D32",
  },
  {
    id: "lumina-skin",
    badge: "DTC E-COMMERCE · HEADLESS SHOPIFY & CONTENT CLUSTERS",
    client: "Lumina Skin Science",
    location: "Sydney, NSW, Australia",
    countryCode: "AU",
    flagEmoji: "🇦🇺",
    industry: "Clinical Cosmeceuticals & DTC",
    timeline: "5-Week Build + Scaling Retainer",
    heroHeadline: "+214% Organic E-Commerce Revenue and 18.2% Checkout Conversion Rate",
    summary:
      "A fast-scaling Australian clinical skincare brand scaling globally into the US and UK needed to escape Liquid theme bloat and build a high-conversion headless storefront with scientific search intent dominance.",
    primaryMetric: {
      value: "+214%",
      label: "Organic Revenue Year-Over-Year",
      sublabel: "AOV jumped from $74 to $112 via dynamic ingredient bundling",
    },
    keyStats: [
      { label: "Organic Monthly Revenue", before: "$32,000", after: "$100,500", change: "+214%" },
      { label: "Storefront Mobile Load Speed", before: "5.1s", after: "0.71s", change: "-86%" },
      { label: "Checkout Conversion Rate", before: "1.9%", after: "3.8%", change: "+100%" },
      { label: "Ingredient Search Rankings (AU/US)", before: "Page 4", after: "Page 1 (#1-3)", change: "+42 Pos" },
    ],
    lighthouse: {
      performance: 99,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      lcp: "0.71s",
      fid: "6ms",
      cls: "0.002",
    },
    problem:
      "Third-party Shopify app scripts were suffocating the site, causing heavy mobile input lag and 62% cart abandonment. High-intent search traffic for active clinical ingredients was being lost to multinational brands.",
    solution: [
      "De-coupled the frontend into a Headless Next.js storefront powered by Shopify Storefront GraphQL API.",
      "Engineered an interactive 45-second Skin Routine Diagnostic Quiz with direct-to-cart personalized bundles.",
      "Constructed a 60-article clinical ingredient taxonomy cluster capturing high-intent BOFU skincare search queries.",
      "Configured multi-currency checkout routing in AUD, USD, and GBP with localized tax and customs calculation.",
    ],
    techStack: ["Next.js Headless", "Shopify Storefront API", "Tailwind CSS", "Algolia Search", "Klaviyo Webhooks"],
    clientQuote: {
      text: "Our conversion rate literally doubled the week we pushed the new build live. Sarrthi didn't just build a site; they re-architected our entire customer acquisition economics.",
      author: "Dr. Elena Rostova",
      role: "Founder & Formulator, Lumina Skin Science",
    },
    accentColor: "#38E1FF",
  },
  {
    id: "veritas-legal",
    badge: "HIGH-TICKET PRACTICE · MULTI-LOCATION SEO & CRO",
    client: "Veritas Legal Group",
    location: "Toronto, ON, Canada",
    countryCode: "CA",
    flagEmoji: "🇨🇦",
    industry: "Corporate Restructuring & Litigation",
    timeline: "4-Week Sprint",
    heroHeadline: "Dominating Google 3-Pack in 14 Practice Hubs & Retaining 92 High-Value Clients in 90 Days",
    summary:
      "A boutique Canadian litigation and corporate insolvency firm transitioning from partner referrals to high-intent digital acquisition needed an authoritative web presence with ironclad local search capture.",
    primaryMetric: {
      value: "92",
      label: "Retained Inbound Clients (90 Days)",
      sublabel: "Average case retainer value exceeding $28,000 CAD",
    },
    keyStats: [
      { label: "High-Ticket Inbound Retainers", before: "6 / quarter", after: "92 / quarter", change: "+1,433%" },
      { label: "Google Maps 3-Pack Visibility", before: "8%", after: "89%", change: "+1,012%" },
      { label: "Time-on-Page for Practice Pages", before: "0:42s", after: "3:48s", change: "+442%" },
      { label: "Organic Search CTR", before: "2.1%", after: "8.7%", change: "+314%" },
    ],
    lighthouse: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      lcp: "0.52s",
      fid: "5ms",
      cls: "0.000",
    },
    problem:
      "Veritas had zero digital presence and relied on word-of-mouth. Competitors with inferior legal credentials were capturing seven-figure insolvency mandates simply by dominating search and offering transparent booking experiences.",
    solution: [
      "Crafted an authoritative, editorial legal web architecture combining high-trust typography with instant case evaluation booking.",
      "Deployed comprehensive LegalService schema markup with nested attorney credentials, practice area taxonomy, and court jurisdiction nodes.",
      "Optimized Google Business Profile and local citation matrix across the Greater Toronto Area and Ontario regional hubs.",
      "Implemented a secure, confidential client intake portal meeting strict Canadian PIPEDA compliance standards.",
    ],
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "LegalSchema Graph", "PIPEDA-Compliant Forms"],
    clientQuote: {
      text: "As legal practitioners, we are naturally skeptical of digital marketing claims. Sarrthi delivered with clinical precision, clear milestones, and measurable return on investment.",
      author: "David MacIntyre, KC",
      role: "Managing Partner, Veritas Legal Group",
    },
    accentColor: "#F4F3EE",
  },
];
