export interface ProcessStep {
  stepNumber: string;
  badge: string;
  title: string;
  duration: string;
  summary: string;
  deliverables: string[];
  clientCommitment: string;
  tools: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    badge: "DAYS 1–4 · DISCOVERY",
    title: "Quick Chat & Strategy",
    duration: "4 Days",
    summary:
      "We have a friendly 30-minute chat to understand your business, what services you sell, who your ideal customers are, and what your competitors are doing.",
    deliverables: [
      "Review your current website speed and issues",
      "Find the best Google search keywords for your business",
      "Plan out the pages and structure of your new site",
      "Clear timeline and schedule locked in",
    ],
    clientCommitment: "1x 30-minute kickoff call + your logo/images",
    tools: ["Google Meet", "Keyword Research", "Figma"],
  },
  {
    stepNumber: "02",
    badge: "DAYS 5–10 · DESIGN",
    title: "Custom Design & Walkthrough",
    duration: "6 Days",
    summary:
      "We design a clean, modern preview of your website. We record a short 3-minute video walking you through every section so you can give feedback easily.",
    deliverables: [
      "Custom visual design for mobile, tablet, and desktop",
      "Clear, persuasive copywriting that turns visitors into calls",
      "Custom graphics, badges, and quote forms",
      "Short video walkthrough for your quick review",
    ],
    clientCommitment: "Watch a 3-min video + tell us what you think",
    tools: ["Figma Preview", "Video Walkthrough"],
  },
  {
    stepNumber: "03",
    badge: "DAYS 11–20 · BUILD",
    title: "Building Your Fast Website",
    duration: "10 Days",
    summary:
      "We build your website with clean, lightning-fast code. We optimize it so it loads in under 1 second and set up all Google SEO tags so search engines love it.",
    deliverables: [
      "Custom-coded fast website with zero bloat",
      "Guaranteed under 1-second loading speed on phones",
      "Complete Google SEO tags & Google Maps setup",
      "Working contact forms, WhatsApp links, and quote tools",
    ],
    clientCommitment: "Zero meetings needed &mdash; we handle all the heavy lifting",
    tools: ["Fast Web Code", "Google Search Setup", "Tested on Phones"],
  },
  {
    stepNumber: "04",
    badge: "DAYS 21–25 · LAUNCH",
    title: "Testing, Launch & Handover",
    duration: "5 Days",
    summary:
      "We test every button on iPhones, Androids, and computers, connect your domain name, make the website live for the world, and send you simple video instructions.",
    deliverables: [
      "Tested on 10+ real mobile phones and laptops",
      "Domain connected smoothly with zero downtime",
      "Submitted to Google so pages get indexed quickly",
      "100% full ownership handover + simple video guide",
    ],
    clientCommitment: "Final approval + celebrate your new launch!",
    tools: ["Live Launch", "Google Submission", "Video Guide"],
  },
];
