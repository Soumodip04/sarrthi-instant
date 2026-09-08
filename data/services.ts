export interface ServicePillar {
  id: string;
  pillarNumber: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  outcomeMetric: string;
  outcomeLabel: string;
  accentColor: string;
  deliverables: {
    title: string;
    description: string;
    tech: string[];
  }[];
  whyItMatters: string[];
  comparison: {
    genericAgency: string;
    sarrthiWay: string;
  }[];
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "web-engineering",
    pillarNumber: "01",
    badge: "SERVICE 01 · WEBSITE DESIGN & BUILD",
    title: "Custom Website Design & Fast Development",
    tagline: "We build websites that look clean and modern, load in under 1 second, and make it effortless for customers to book or buy.",
    description:
      "Most agency websites are slow, bloated, and confusing for normal customers. We hand-craft clean, custom websites that open instantly on iPhones, Androids, and laptops, making your business look established and trusted.",
    outcomeMetric: "< 1 Second",
    outcomeLabel: "Lightning fast page loading on mobile and desktop",
    accentColor: "#e8a33d",
    deliverables: [
      {
        title: "Clean, Modern Custom Design",
        description: "Tailored to your brand. No generic templates. Designed so visitors immediately understand what you do and trust you.",
        tech: ["Custom Layout", "Mobile Optimized", "Easy Navigation"],
      },
      {
        title: "Super-Fast Page Speed",
        description: "Your pages open in the blink of an eye. Fast websites keep visitors happy and get higher rankings on Google.",
        tech: ["Instant Loading", "Zero Glitches", "Tested on 4G & 5G"],
      },
      {
        title: "Easy Customer Booking & Forms",
        description: "Simple online quote calculators, appointment schedulers, and contact forms that send inquiries directly to your email or WhatsApp.",
        tech: ["Instant Quote Tool", "Direct WhatsApp", "Email Alerts"],
      },
      {
        title: "You Own 100% of Your Website",
        description: "You get full ownership of your site, code, and graphics. No monthly builder lock-in or surprise fees.",
        tech: ["Full Ownership", "No Lock-in", "Easy Content Updates"],
      },
    ],
    whyItMatters: [
      "If a website takes more than 3 seconds to load, over 50% of customers leave and go to your competitor.",
      "A clean, fast website builds instant trust when cold prospects check your business online.",
      "Making it easy to contact you directly increases phone calls and inquiry form submissions.",
    ],
    comparison: [
      {
        genericAgency: "Slow WordPress template loaded with 40 plugins that crash often",
        sarrthiWay: "Custom-built, ultra-fast website that never crashes and opens in 0.6 seconds",
      },
      {
        genericAgency: "Takes 3 to 6 months with endless useless meetings",
        sarrthiWay: "Delivered in 21 days with short, clear video updates so you're never left in the dark",
      },
      {
        genericAgency: "Holds your domain or code hostage with monthly platform fees",
        sarrthiWay: "100% complete ownership handed over to you on launch day",
      },
    ],
  },
  {
    id: "revenue-seo",
    pillarNumber: "02",
    badge: "SERVICE 02 · GOOGLE SEO & SEARCH GROWTH",
    title: "Google Search & Local Business SEO",
    tagline: "We help your business rank at the top of Google so customers in your area find you when searching for your services.",
    description:
      "When people search on Google for what you offer, they are ready to hire or buy. We set up your Google Business profile, optimize your pages, and build helpful content so you appear on page 1 for the most profitable search terms in your city and country.",
    outcomeMetric: "3.4x More Leads",
    outcomeLabel: "Average increase in customer inquiries within 90 days",
    accentColor: "#2ba88f",
    deliverables: [
      {
        title: "Google Maps & Local Ranking Setup",
        description: "We optimize your business for Google Maps so local customers in your city call you first before competitors.",
        tech: ["Google Maps #1", "Local Citations", "Verified Reviews"],
      },
      {
        title: "High-Intent Keyword Targeting",
        description: "We identify the exact search terms paying clients type when they want to hire someone in your industry.",
        tech: ["Buyer Keywords", "Competitor Research", "Service Pages"],
      },
      {
        title: "Technical SEO & Speed Fixes",
        description: "We ensure Google's search crawlers can index every page of your website easily with zero broken links or errors.",
        tech: ["Google Search Console", "Zero Crawl Errors", "Clean Sitemap"],
      },
      {
        title: "Clear Monthly Reports & Direct Support",
        description: "Simple, easy-to-understand monthly video reports showing your Google ranking improvements and new calls received.",
        tech: ["Monthly Video Summary", "Direct Slack / WhatsApp", "Lead Tracking"],
      },
    ],
    whyItMatters: [
      "People searching on Google have active buying intent — they convert far better than social media ad clicks.",
      "Ranking on Google generates continuous customer inquiries every month without constantly paying for ads.",
      "Being on Page 1 establishes instant authority and credibility for your brand.",
    ],
    comparison: [
      {
        genericAgency: "Sends confusing 40-page PDF reports filled with useless jargon",
        sarrthiWay: "Clear, friendly 3-minute video updates focusing on real customer calls and rankings",
      },
      {
        genericAgency: "Charges $3,000/month with zero accountability or speed guarantees",
        sarrthiWay: "Transparent flat monthly pricing with dedicated direct communication",
      },
      {
        genericAgency: "Uses automated spam tactics that risk getting your site banned",
        sarrthiWay: "100% white-hat Google-approved methods that build long-term authority",
      },
    ],
  },
];
