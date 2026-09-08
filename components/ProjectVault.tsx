"use client";

import React, { useState } from "react";
import { ArrowUpRight, Laptop, Smartphone, CheckCircle2, Sparkles } from "lucide-react";

export interface VaultProject {
  id: string;
  title: string;
  client: string;
  category: string;
  location: string;
  flag: string;
  year: string;
  headline: string;
  description: string;
  url: string;
  keyMetric: {
    value: string;
    label: string;
  };
  metrics: { label: string; value: string }[];
  tags: string[];
  themeColor: string;
  mockup: {
    navbarTitle: string;
    heroHeadline: string;
    heroSubline: string;
    ctaText: string;
    featureTitle: string;
    stats: { label: string; val: string }[];
    uiAccent: string;
    badgeText: string;
  };
}

export const VAULT_PROJECTS: VaultProject[] = [
  {
    id: "finova",
    title: "Finova Capital",
    client: "Finova Capital",
    category: "Commercial Business Finance",
    location: "London, UK",
    flag: "🇬🇧",
    year: "2025",
    headline: "Got 148,000 Monthly Visitors on Google & £2.4M in New Deals",
    description:
      "We built a super-fast, clean website with an instant business loan calculator. Replaced their old slow website that was losing mobile visitors and helped them rank #1 on Google for commercial finance in the UK.",
    url: "finovacapital.co.uk",
    keyMetric: {
      value: "+148K / mo",
      label: "Google Search Visitors",
    },
    metrics: [
      { label: "Page Load Speed", value: "0.6 seconds" },
      { label: "Inquiry Growth", value: "+340% more leads" },
      { label: "Google Speed Score", value: "99 / 100" },
      { label: "Google Rankings", value: "#1 for 34 search terms" },
    ],
    tags: ["Custom Design", "Fast Website", "Google SEO", "Instant Loan Calculator"],
    themeColor: "#e8a33d",
    mockup: {
      navbarTitle: "FINOVA CAPITAL",
      badgeText: "Business Financing",
      heroHeadline: "Fast Commercial Finance to Grow Your Business",
      heroSubline: "Flexible funding from £100k to £5M with instant online estimates.",
      ctaText: "Check Your Rate in 2 Mins →",
      featureTitle: "Live Rate Calculator",
      stats: [
        { label: "Funding Provided", val: "£42.8M" },
        { label: "Decision Time", val: "4 Hours" },
        { label: "Starting APR", val: "4.85%" },
      ],
      uiAccent: "#e8a33d",
    },
  },
  {
    id: "apex",
    title: "Apex Global Logistics",
    client: "Apex Freight LLC",
    category: "Heavy Freight & Transport",
    location: "Chicago, USA",
    flag: "🇺🇸",
    year: "2025",
    headline: "4x More Online Quote Requests & Instant Mobile Loading",
    description:
      "Replaced a clunky PDF contact form with a simple 45-second shipping quote tool. Also helped them rank on Google across 18 major US transport hubs so shippers find them directly.",
    url: "apexlogisticshub.com",
    keyMetric: {
      value: "4.2x",
      label: "More Quote Requests",
    },
    metrics: [
      { label: "Mobile Speed", value: "0.58s load time" },
      { label: "Quote Completion", value: "7.6% (was 1.8%)" },
      { label: "Google Score", value: "100% Pass" },
      { label: "New Pipeline", value: "$3.8M USD" },
    ],
    tags: ["Fast Freight Website", "Instant Quote Tool", "Local US SEO", "Mobile Friendly"],
    themeColor: "#2ba88f",
    mockup: {
      navbarTitle: "APEX GLOBAL LOGISTICS",
      badgeText: "Nationwide Freight Transport",
      heroHeadline: "Reliable Heavy Freight Across All 48 US States",
      heroSubline: "Instant shipping rate estimates, on-time dispatch, and 24/7 shipment tracking.",
      ctaText: "Get Instant Shipping Estimate →",
      featureTitle: "Real-Time Route Estimator",
      stats: [
        { label: "Active Trucks", val: "2,400+" },
        { label: "On-Time Delivery", val: "99.4%" },
        { label: "Avg Response", val: "45 Sec" },
      ],
      uiAccent: "#2ba88f",
    },
  },
  {
    id: "lumina",
    title: "Lumina Skin Science",
    client: "Lumina Skin Labs",
    category: "Online Skincare Shop",
    location: "Sydney, Australia",
    flag: "🇦🇺",
    year: "2025",
    headline: "Doubled Online Sales with a Fast Shop & Routine Quiz",
    description:
      "Replaced a slow, glitchy online store with a clean, lightning-fast shopping experience. Added a 45-second Skin Routine Quiz that recommends products and doubled their checkout sales in 90 days.",
    url: "luminaskinscience.com.au",
    keyMetric: {
      value: "+214%",
      label: "Online Sales Growth",
    },
    metrics: [
      { label: "Store Speed", value: "0.7s (was 5.1s)" },
      { label: "Sales Conversion", value: "3.8% (was 1.9%)" },
      { label: "Average Order", value: "$112 AUD" },
      { label: "Google Rankings", value: "#1 on Google Australia" },
    ],
    tags: ["Online Store", "Fast Checkout", "Skin Quiz", "Google SEO"],
    themeColor: "#f0c179",
    mockup: {
      navbarTitle: "LUMINA SKIN SCIENCE",
      badgeText: "Dermatologist Formulated",
      heroHeadline: "Clinical Skincare for Clear, Radiant Skin",
      heroSubline: "Proven formulas backed by dermatologists to nourish and protect your skin daily.",
      ctaText: "Take Free 45s Skin Quiz →",
      featureTitle: "Personal Routine Finder",
      stats: [
        { label: "Active Formulas", val: "28 Products" },
        { label: "Customer Approval", val: "98.2%" },
        { label: "Average Rating", val: "4.9 / 5" },
      ],
      uiAccent: "#f0c179",
    },
  },
  {
    id: "veritas",
    title: "Veritas Legal Group",
    client: "Veritas Partners KC",
    category: "Corporate Law Practice",
    location: "Toronto, Canada",
    flag: "🇨🇦",
    year: "2025",
    headline: "Signed 92 High-Value Clients in 90 Days with Google Maps #1",
    description:
      "Built a professional, high-trust website for this Canadian law firm. Optimized their Google Maps profile so local business owners searching for corporate lawyers find them first.",
    url: "veritaslegalgroup.ca",
    keyMetric: {
      value: "92 Clients",
      label: "Signed in 90 Days",
    },
    metrics: [
      { label: "Average Retainer", value: "$28,000 CAD" },
      { label: "Google Maps Share", value: "#1 in Toronto" },
      { label: "Client Inquiries", value: "+440% increase" },
      { label: "Website Speed", value: "100 / 100" },
    ],
    tags: ["Law Firm Website", "Google Maps #1", "Client Booking Portal", "Mobile Ready"],
    themeColor: "#6fc9b6",
    mockup: {
      navbarTitle: "VERITAS LEGAL GROUP",
      badgeText: "Corporate & Business Law",
      heroHeadline: "Experienced Legal Counsel for Your Business",
      heroSubline: "Protecting your company assets and solving complex legal challenges with total discretion.",
      ctaText: "Book Confidential Consultation →",
      featureTitle: "Practice Area Directory",
      stats: [
        { label: "Case Success", val: "94.6%" },
        { label: "Assets Protected", val: "$180M+" },
        { label: "Senior Lawyers", val: "14 Partners" },
      ],
      uiAccent: "#6fc9b6",
    },
  },
];

interface ProjectVaultProps {
  onOpenBooking: () => void;
}

export default function ProjectVault({ onOpenBooking }: ProjectVaultProps) {
  const [selectedId, setSelectedId] = useState<string>("finova");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  const [viewMode, setViewMode] = useState<"visual" | "metrics">("visual");

  const project = VAULT_PROJECTS.find((p) => p.id === selectedId) || VAULT_PROJECTS[0];

  return (
    <section id="work" className="py-20 bg-[#14131f] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/[0.08]">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-sans text-[#f0c179] bg-[#e8a33d]/15 px-3 py-1 rounded-full border border-[#e8a33d]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR WORK &middot; REAL WEBSITES WE BUILT</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f1efe6] tracking-tight">
              Websites We&apos;ve Shipped. <br />
              <span className="text-[#f0c179]">Real Results for Real Businesses.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9a97ab] max-w-md font-sans leading-relaxed">
            Click any project below to see the website design, loading speed, and real customer growth we achieved for them.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {VAULT_PROJECTS.map((p) => {
            const isSelected = p.id === selectedId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "bg-[#201e30] border-[#e8a33d] shadow-xl ring-1 ring-[#e8a33d]/30"
                    : "bg-[#1a1928] border-white/[0.06] hover:border-white/20 hover:bg-[#201e30]"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-sans mb-1.5">
                  <span className="flex items-center gap-1.5 text-white/80">
                    <span>{p.flag}</span>
                    <span className="font-semibold truncate">{p.client}</span>
                  </span>
                  <span className="text-[#f0c179] font-bold">{p.keyMetric.value}</span>
                </div>
                <div className="font-display font-bold text-sm text-white truncate">
                  {p.title}
                </div>
                <div className="text-xs font-sans text-[#9a97ab] mt-0.5">
                  {p.location}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Showcase Frame */}
        <div className="bg-[#201e30] border border-white/[0.08] rounded-3xl p-6 sm:p-8 space-y-7 shadow-2xl">
          {/* Project Header Info */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3 text-xs font-sans">
                <span className="bg-white/10 text-white px-2.5 py-0.5 rounded-md font-semibold">
                  {project.flag} {project.location}
                </span>
                <span className="text-white/40">&middot;</span>
                <span className="text-[#9a97ab]">{project.category}</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                {project.headline}
              </h3>
              <p className="text-sm text-[#9a97ab] font-sans max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* View & Device Toggles */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Visual vs Metrics Toggle */}
              <div className="bg-[#2a2740] border border-white/10 p-1 rounded-xl flex items-center gap-1 text-xs font-sans">
                <button
                  onClick={() => setViewMode("visual")}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                    viewMode === "visual"
                      ? "bg-[#e8a33d] text-[#14131f] font-bold"
                      : "text-[#9a97ab] hover:text-white"
                  }`}
                >
                  Live Website View
                </button>
                <button
                  onClick={() => setViewMode("metrics")}
                  className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                    viewMode === "metrics"
                      ? "bg-[#e8a33d] text-[#14131f] font-bold"
                      : "text-[#9a97ab] hover:text-white"
                  }`}
                >
                  Speed &amp; Results
                </button>
              </div>

              {/* Desktop vs Mobile Toggle */}
              {viewMode === "visual" && (
                <div className="bg-[#2a2740] border border-white/10 p-1 rounded-xl flex items-center gap-1">
                  <button
                    onClick={() => setDeviceMode("desktop")}
                    className={`p-1.5 rounded-lg ${
                      deviceMode === "desktop"
                        ? "bg-white/20 text-white"
                        : "text-[#9a97ab] hover:text-white"
                    }`}
                    title="Desktop Preview"
                  >
                    <Laptop className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeviceMode("mobile")}
                    className={`p-1.5 rounded-lg ${
                      deviceMode === "mobile"
                        ? "bg-white/20 text-white"
                        : "text-[#9a97ab] hover:text-white"
                    }`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* MODE 1: VISUAL UI MOCKUP VIEWPORT */}
          {viewMode === "visual" && (
            <div className="space-y-6">
              {/* Browser Window Wrapper */}
              <div
                className={`mx-auto bg-[#14131f] border border-white/15 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
                  deviceMode === "desktop" ? "w-full" : "max-w-sm"
                }`}
              >
                {/* Browser Top Chrome Header */}
                <div className="bg-[#201e30] px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>

                  <div className="bg-[#14131f] border border-white/10 px-4 py-1 rounded-full text-[#9a97ab] text-xs truncate max-w-xs flex items-center gap-1.5">
                    <span className="text-[#2ba88f] font-bold">https://</span>
                    <span className="text-white">{project.url}</span>
                  </div>

                  <div className="text-[11px] font-sans text-[#2ba88f] font-bold bg-[#2ba88f]/10 border border-[#2ba88f]/30 px-2 py-0.5 rounded">
                    ⚡ 0.6s Load Time
                  </div>
                </div>

                {/* Simulated Website Interface */}
                <div className="p-6 sm:p-10 space-y-7 bg-gradient-to-b from-[#1c1a2c] to-[#14131f] min-h-[360px] text-white">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="font-display font-black text-sm flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: project.mockup.uiAccent }}
                      />
                      <span>{project.mockup.navbarTitle}</span>
                    </div>

                    <div className="hidden sm:flex items-center gap-4 text-xs font-sans text-white/70">
                      <span>Services</span>
                      <span>About</span>
                      <span>Reviews</span>
                      <span
                        className="px-3 py-1 rounded-full font-bold text-[#14131f]"
                        style={{ backgroundColor: project.mockup.uiAccent }}
                      >
                        Contact Us
                      </span>
                    </div>
                  </div>

                  {/* Hero */}
                  <div className="space-y-3.5 max-w-2xl py-3">
                    <div
                      className="inline-block text-xs font-sans font-semibold px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: `${project.mockup.uiAccent}40`,
                        color: project.mockup.uiAccent,
                        backgroundColor: `${project.mockup.uiAccent}15`,
                      }}
                    >
                      {project.mockup.badgeText}
                    </div>

                    <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                      {project.mockup.heroHeadline}
                    </h4>

                    <p className="text-xs sm:text-sm text-white/75 font-sans leading-relaxed">
                      {project.mockup.heroSubline}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        className="px-5 py-2.5 rounded-xl font-sans font-bold text-xs text-[#14131f] shadow-md flex items-center gap-1.5"
                        style={{ backgroundColor: project.mockup.uiAccent }}
                      >
                        <span>{project.mockup.ctaText}</span>
                      </button>

                      <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-sans flex items-center gap-1.5 text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2ba88f]" />
                        <span>Tested on All Devices</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
                    {project.mockup.stats.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-white/5 border border-white/5 p-3 rounded-xl space-y-0.5"
                      >
                        <div className="text-xs font-sans text-white/60">{st.label}</div>
                        <div
                          className="font-display font-bold text-lg"
                          style={{ color: project.mockup.uiAccent }}
                        >
                          {st.val}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* MODE 2: METRICS & VITALS VIEW */}
          {viewMode === "metrics" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2a2740] border border-white/[0.08] p-5 rounded-2xl space-y-1"
                  >
                    <div className="text-xs font-sans text-[#9a97ab]">{m.label}</div>
                    <div className="font-display font-bold text-xl text-[#f0c179]">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#201e30] border border-white/[0.08] p-6 rounded-2xl space-y-3">
                <div className="text-xs font-sans text-white font-bold uppercase tracking-wider">
                  WHAT WE INCLUDED IN THIS BUILD:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-sans bg-white/5 text-[#f1efe6] px-3.5 py-1 rounded-lg border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Card Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
            <div className="text-xs font-sans text-[#9a97ab]">
              Want a similar fast, customer-getting website for your business in 21 days?
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>Book A Free Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
