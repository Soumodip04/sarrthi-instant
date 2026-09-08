export interface TimezoneHub {
  city: string;
  country: string;
  flag: string;
  timezone: string;
  utcOffset: string;
  activeHours: string;
  status: "Active" | "Standby" | "Online";
}

export const TIMEZONE_HUBS: TimezoneHub[] = [
  {
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    timezone: "GMT / BST",
    utcOffset: "UTC+1",
    activeHours: "08:00 – 17:00 London Time",
    status: "Active",
  },
  {
    city: "New York",
    country: "United States (EST)",
    flag: "🇺🇸",
    timezone: "EST / EDT",
    utcOffset: "UTC-4",
    activeHours: "09:00 – 18:00 New York Time",
    status: "Active",
  },
  {
    city: "Sydney",
    country: "Australia",
    flag: "🇦🇺",
    timezone: "AEST",
    utcOffset: "UTC+10",
    activeHours: "09:00 – 17:00 Sydney Time",
    status: "Active",
  },
  {
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    timezone: "EST",
    utcOffset: "UTC-4",
    activeHours: "09:00 – 17:00 Toronto Time",
    status: "Active",
  },
];

export interface TrustPillar {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  icon: string;
  badge: string;
}

export const INTERNATIONAL_TRUST_PILLARS: TrustPillar[] = [
  {
    number: "01",
    badge: "SAME TIMEZONE WORKING HOURS",
    title: "4–6 Hours Daily Overlap with UK, US & Australian Hours",
    tagline: "You never have to wait 24 hours for a response.",
    description:
      "We structure our working schedule around your local business hours. Whether you are in London, New York, Chicago, or Sydney, you get fast, live answers and rapid updates throughout your working day.",
    details: [
      "Direct Slack / WhatsApp channel with quick replies during your day",
      "Calls scheduled conveniently at a time that works for you",
      "Fast same-day updates and quick turnarounds",
    ],
    icon: "Clock",
  },
  {
    number: "02",
    badge: "CLEAR VIDEO UPDATES",
    title: "Short 3-Minute Video Walkthroughs (No Long Meetings Needed)",
    tagline: "You always see exactly what we've built without wasting your time.",
    description:
      "For every design and update, we record a quick 3-minute video showing you the screens and how they work. You can watch it on your phone or laptop whenever you have time, without needing to sit through endless meetings.",
    details: [
      "Quick 3-minute video explanations for all designs and milestones",
      "Simple visual checklist showing what's done and what's next",
      "Zero confusing technical jargon &mdash; just clear human communication",
    ],
    icon: "Video",
  },
  {
    number: "03",
    badge: "SIMPLE LOCAL PAYMENTS",
    title: "Invoiced in USD, GBP, or AUD via Stripe with 100% Full Ownership",
    tagline: "Pay safely in your local currency with zero foreign fees.",
    description:
      "Pay securely using standard credit card or direct bank transfer via Stripe in USD ($), GBP (£), or AUD (A$). Every project comes with a simple agreement legally transferring 100% of all website ownership to you.",
    details: [
      "Pay safely in USD ($), GBP (£), or AUD (A$) with standard Stripe protection",
      "Clear milestone-based payment (50% to start / 50% only after you approve)",
      "Standard agreement transferring 100% full intellectual property to you",
    ],
    icon: "ShieldCheck",
  },
  {
    number: "04",
    badge: "YOU OWN EVERYTHING",
    title: "100% Full Ownership of Your Website &mdash; Zero Lock-in",
    tagline: "You own every single line of code, graphic, and domain record.",
    description:
      "Unlike traditional agencies that try to lock you into their proprietary hosting or hold your domain hostage, we hand over everything cleanly. You get full access and easy instructions so you are always in complete control.",
    details: [
      "All website files and graphics handed over to you completely",
      "Easy video guide showing your team how to edit text and images",
      "30 days of free post-launch support and bug fixes included",
    ],
    icon: "GitBranch",
  },
];
