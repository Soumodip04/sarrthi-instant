export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  flag: string;
  avatarInitial: string;
  metricBadge: string;
  headline: string;
  quote: string;
  projectType: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "alistair-vance",
    name: "Alistair Vance",
    role: "Director of Growth",
    company: "Finova Capital",
    location: "London, United Kingdom",
    flag: "🇬🇧",
    avatarInitial: "AV",
    metricBadge: "£2.4M in New Deals Added",
    headline: "Faster, cleaner, and far more effective than the London agencies we used.",
    quote:
      "When we first connected, I was worried about working with an overseas studio. But Sarrthi Instant made the entire process seamless. The short video updates meant I always knew what was happening without having to attend long meetings. Their SEO setup took us to #1 on Google for commercial finance in the UK.",
    projectType: "Custom Website + Google SEO",
    verified: true,
  },
  {
    id: "marcus-thorne",
    name: "Marcus Thorne",
    role: "Head of Operations",
    company: "Apex Global Logistics",
    location: "Chicago, IL, United States",
    flag: "🇺🇸",
    avatarInitial: "MT",
    metricBadge: "4x More Quote Requests",
    headline: "The speed of our new site and the quote tool blew us away.",
    quote:
      "Our old website was slow and customers were abandoning it. Sarrthi built our new site with an instant quote calculator in under 4 weeks. Working with them in our US timezone was effortless &mdash; they were always available on Slack. Our online booking inquiries jumped by over 300%.",
    projectType: "Custom Business Website",
    verified: true,
  },
  {
    id: "elena-rostova",
    name: "Dr. Elena Rostova",
    role: "Founder",
    company: "Lumina Skin Science",
    location: "Sydney, NSW, Australia",
    flag: "🇦🇺",
    avatarInitial: "ER",
    metricBadge: "+214% Increase in Online Sales",
    headline: "Doubled our online sales within 2 weeks of launching.",
    quote:
      "Our online shop was slow and mobile customers were dropping off before checkout. Sarrthi redesigned and rebuilt the entire shop so pages open in under a second. They also added a simple 45-second Skin Quiz that customers love. Best investment we made this year.",
    projectType: "Fast Online Store + SEO",
    verified: true,
  },
  {
    id: "david-macintyre",
    name: "David MacIntyre",
    role: "Managing Partner",
    company: "Veritas Legal Group",
    location: "Toronto, ON, Canada",
    flag: "🇨🇦",
    avatarInitial: "DM",
    metricBadge: "92 New Clients in 90 Days",
    headline: "Clear, professional, and delivered real business growth.",
    quote:
      "In the legal industry, trust and reputation are everything. Sarrthi built an elegant, authoritative website that makes our firm look world-class. Their Google Maps optimization brought us 92 new retained clients in just 3 months. Highly recommended.",
    projectType: "Law Firm Website + Local SEO",
    verified: true,
  },
];
