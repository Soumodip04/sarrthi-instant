export interface PricingTier {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  priceUSD: number;
  period: "one-time" | "per-month";
  isPopular?: boolean;
  timeline: string;
  idealFor: string;
  accentColor: string;
  included: string[];
  notIncluded: string[];
  ctaLabel: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "web-sprint",
    badge: "READY IN 2–3 WEEKS",
    title: "Complete Website Build",
    tagline: "A custom, fast website designed to make your business look trusted and turn visitors into paying customers.",
    priceUSD: 2800,
    period: "one-time",
    timeline: "14–21 Days",
    idealFor: "Small-to-medium businesses wanting a modern, fast website that outshines competitors.",
    accentColor: "#e8a33d",
    isPopular: true,
    included: [
      "Custom-designed website (no cheap templates)",
      "Loads in under 1 second on phones and computers",
      "Clear, persuasive copywriting that encourages calls and inquiries",
      "Mobile-friendly tested on iPhones, Androids, and tablets",
      "Working contact form, WhatsApp button & instant quote tool",
      "100% full ownership of your site & code handed over to you",
      "Basic Google search setup so your site gets indexed",
      "30 days of free support and bug fixes after launch",
    ],
    notIncluded: [
      "Monthly SEO content writing (available in SEO package)",
      "Paid advertising ad spend",
    ],
    ctaLabel: "Book Free Website Call",
  },
  {
    id: "seo-engine",
    badge: "MONTHLY GROWTH",
    title: "Monthly Google SEO Growth",
    tagline: "Climb Google rankings and get a steady stream of customer calls and leads every single month.",
    priceUSD: 1800,
    period: "per-month",
    timeline: "Monthly Service (No long lock-in)",
    idealFor: "Businesses looking to dominate local and national Google search results without paying for ads.",
    accentColor: "#2ba88f",
    included: [
      "Full review and fixes for all Google ranking blockers",
      "Google Maps profile optimization to get local calls",
      "Targeting the top search keywords buyers use in your area",
      "4x helpful, high-ranking service and guide pages per month",
      "Speed maintenance so your site stays lightning-fast",
      "Simple monthly 3-minute video report showing your progress",
      "Direct Slack / WhatsApp access with your dedicated developer",
    ],
    notIncluded: [
      "Complete website rebuild (included in Web Build)",
      "Unethical spam links (we only use safe, approved methods)",
    ],
    ctaLabel: "Apply for SEO Growth",
  },
  {
    id: "growth-partnership",
    badge: "ALL-IN-ONE PACKAGE",
    title: "Complete Website + SEO Package",
    tagline: "A brand-new custom website combined with ongoing Google SEO optimization to grow your business fast.",
    priceUSD: 4500,
    period: "one-time",
    timeline: "3–4 Weeks + 1st Month SEO",
    idealFor: "Growing companies and established businesses wanting the full customer-getting setup.",
    accentColor: "#6fc9b6",
    included: [
      "Everything in the Complete Website Build",
      "Full Google Maps & Local SEO setup for your city/country",
      "Multi-currency support (USD, GBP, AUD, EUR) if needed",
      "Interactive online quote calculators or booking tools",
      "Easy-to-use content manager so your team can edit text anytime",
      "60 days of free post-launch priority support",
      "Dedicated weekly check-ins with your lead developer",
    ],
    notIncluded: [
      "Third-party software subscription fees (if using external tools)",
    ],
    ctaLabel: "Book Full Package Call",
  },
];
