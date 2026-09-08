export interface FAQItem {
  id: string;
  category: "General" | "Payments & Safety" | "How We Work" | "SEO & Google";
  question: string;
  answer: string;
  highlight?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "international-friction",
    category: "General",
    question: "Why should we work with you instead of a local agency in London, NYC, or Sydney?",
    answer:
      "Most local Western agencies charge $15,000–$30,000 because they have expensive downtown offices and account managers. When you work with Sarrthi Instant, you talk directly with senior developers who build your site. You get a faster, cleaner website at a transparent flat rate, with working hours matching your timezone and short video updates so you're never left waiting.",
    highlight: "Direct communication with the builder, fast 21-day delivery, and 40–60% lower costs.",
  },
  {
    id: "timezone-communication",
    category: "How We Work",
    question: "How do we communicate and handle the time difference?",
    answer:
      "We structure our work shifts around your local business hours (US EST/PST, UK GMT, and Australian AEST). You have a direct Slack or WhatsApp channel with us for fast questions during your day. For every design review, we record a simple 3-minute video walkthrough so you can watch it whenever you have time without needing long meetings.",
    highlight: "Daily live overlap in your timezone + short 3-min video walkthroughs.",
  },
  {
    id: "payment-contracts",
    category: "Payments & Safety",
    question: "How are payments handled and do I own my website completely?",
    answer:
      "You pay safely in your local currency (USD $, GBP £, or AUD A$) via Stripe using credit card or direct bank transfer. Payments are split into a simple 50% deposit to start and 50% only after you approve the completed site before launch. You receive 100% full legal ownership of your website, code, and graphics.",
    highlight: "100% full ownership + simple 50/50 payment via Stripe in your currency.",
  },
  {
    id: "tech-stack-choice",
    category: "General",
    question: "Do you build on WordPress or something better?",
    answer:
      "WordPress is often slow, gets bogged down with 40+ plugins, and crashes frequently. We build modern, custom websites that open in under 1 second on phones and never crash. If you have an existing WordPress site, we can easily migrate all your content and improve your speed dramatically without losing any Google rankings.",
    highlight: "Fast, modern websites that load in 0.6 seconds and never crash.",
  },
  {
    id: "seo-timeline",
    category: "SEO & Google",
    question: "How soon will I see results from my new website and Google SEO?",
    answer:
      "Your website benefits start on Day 1: your pages load in under a second, mobile visitors stop bouncing, and inquiry forms start working immediately. Google SEO improvements and ranking increases generally climb over 60–90 days as Google indexes your new pages and local business tags.",
    highlight: "Instant website speed on launch day; Google rankings build steadily over 60–90 days.",
  },
  {
    id: "post-launch-support",
    category: "How We Work",
    question: "What happens after the website is launched? Do you provide support?",
    answer:
      "Yes! Every website comes with 30 days of free post-launch support and warranty. We monitor your site, fix any unexpected issues, and give you a simple video guide showing how to update text and images. After 30 days, you can manage it easily yourself or continue with our monthly support.",
    highlight: "30 days of free support and video guide included with every project.",
  },
];
