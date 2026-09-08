"use client";

import React, { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudies";
import { ArrowUpRight, CheckCircle2, ChevronRight, Gauge, Layers, LineChart, Quote, ShieldCheck, Zap } from "lucide-react";

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export default function CaseStudies({ onOpenBooking }: CaseStudiesProps) {
  const [selectedId, setSelectedId] = useState<string>("finova-capital");
  const [activeTab, setActiveTab] = useState<"metrics" | "blueprint" | "receipt">("metrics");

  const study = CASE_STUDIES.find((c) => c.id === selectedId) || CASE_STUDIES[0];

  return (
    <section id="work" className="py-24 bg-[#0B0D12] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Graphic Lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#38E1FF] bg-[#38E1FF]/10 px-3 py-1 rounded-full border border-[#38E1FF]/20">
              <LineChart className="w-3.5 h-3.5" />
              <span>PERFORMANCE RECEIPTS &middot; REAL DATA</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F4F3EE] tracking-tight">
              Case Studies With <br />
              <span className="text-[#D5F326]">Measurable Bottom-Line ROI.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9B9EAA] max-w-md font-sans">
            No vague promises. Every project we ship is backed by verifiable Lighthouse telemetry, organic search growth, and pipeline attribution.
          </p>
        </div>

        {/* Case Study Selector Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
          {CASE_STUDIES.map((c) => {
            const isSelected = c.id === selectedId;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-[#161822] border-[#D5F326] shadow-lg shadow-black/80 ring-1 ring-[#D5F326]/30"
                    : "bg-[#0F1117] border-white/[0.06] hover:border-white/20 hover:bg-[#13151D]"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <span>{c.flagEmoji}</span>
                    <span className="truncate">{c.client}</span>
                  </span>
                  <span className="text-[#D5F326] font-bold">{c.primaryMetric.value}</span>
                </div>
                <div className="font-display font-bold text-sm text-[#F4F3EE] truncate">
                  {c.industry}
                </div>
                <div className="text-[11px] font-mono text-[#8E92A4] mt-1">
                  {c.location}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Showcase Canvas */}
        <div className="bg-[#12141C] border border-white/[0.08] rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl">
          {/* Case Header Meta */}
          <div className="space-y-4 pb-8 border-b border-white/[0.08]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">{study.flagEmoji}</span>
                <span className="font-display font-bold text-xl text-white">
                  {study.client}
                </span>
                <span className="text-white/20">&middot;</span>
                <span className="text-xs font-mono text-[#8E92A4] bg-white/5 px-2.5 py-1 rounded border border-white/5">
                  {study.location}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#D5F326] bg-[#D5F326]/10 px-3 py-1 rounded-full border border-[#D5F326]/20">
                <span>{study.timeline}</span>
              </div>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F4F3EE] leading-snug">
              {study.heroHeadline}
            </h3>

            <p className="text-base text-[#9B9EAA] font-sans leading-relaxed max-w-4xl">
              {study.summary}
            </p>

            {/* Interactive Inspection Tabs */}
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActiveTab("metrics")}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === "metrics"
                    ? "bg-[#D5F326] text-[#090A0E] font-bold"
                    : "bg-[#171A24] text-[#8E92A4] hover:text-white border border-white/5"
                }`}
              >
                <Gauge className="w-3.5 h-3.5" />
                <span>1. Telemetry &amp; Before/After</span>
              </button>

              <button
                onClick={() => setActiveTab("blueprint")}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === "blueprint"
                    ? "bg-[#D5F326] text-[#090A0E] font-bold"
                    : "bg-[#171A24] text-[#8E92A4] hover:text-white border border-white/5"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>2. Engineering Blueprint</span>
              </button>

              <button
                onClick={() => setActiveTab("receipt")}
                className={`px-4 py-2 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === "receipt"
                    ? "bg-[#D5F326] text-[#090A0E] font-bold"
                    : "bg-[#171A24] text-[#8E92A4] hover:text-white border border-white/5"
                }`}
              >
                <Quote className="w-3.5 h-3.5" />
                <span>3. Client Verification</span>
              </button>
            </div>
          </div>

          {/* TAB 1: METRICS & LIGHTHOUSE TELEMETRY */}
          {activeTab === "metrics" && (
            <div className="space-y-8">
              {/* Primary Key Metrics Quad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {study.keyStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#171A24] border border-white/[0.06] p-5 rounded-2xl space-y-3"
                  >
                    <div className="text-xs font-mono text-[#8E92A4]">
                      {stat.label}
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div className="text-xs font-mono line-through text-red-400/80">
                        {stat.before}
                      </div>
                      <span className="text-xs font-mono text-white/30">&rarr;</span>
                      <div className="text-xl font-mono font-bold text-[#D5F326]">
                        {stat.after}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/[0.04] text-[11px] font-mono text-emerald-400 font-bold">
                      {stat.change} Impact
                    </div>
                  </div>
                ))}
              </div>

              {/* Lighthouse & Core Web Vitals Panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0E1017] border border-white/[0.08] p-6 sm:p-8 rounded-2xl items-center">
                <div className="lg:col-span-4 space-y-3">
                  <span className="text-[11px] font-mono text-[#8E92A4] uppercase tracking-wider">
                    PRODUCTION LIGHTHOUSE SCORES
                  </span>
                  <div className="font-display font-bold text-2xl text-white">
                    100% Core Web Vitals Guaranteed
                  </div>
                  <p className="text-xs text-[#8E92A4] font-sans">
                    Measured directly against Google Chrome User Experience (CrUX) field benchmarks.
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#171A24] border border-emerald-500/20 p-4 rounded-xl text-center">
                    <div className="text-2xl font-mono font-extrabold text-[#D5F326]">
                      {study.lighthouse.performance}
                    </div>
                    <div className="text-[10px] font-mono text-[#8E92A4] uppercase mt-1">
                      Performance
                    </div>
                  </div>
                  <div className="bg-[#171A24] border border-emerald-500/20 p-4 rounded-xl text-center">
                    <div className="text-2xl font-mono font-extrabold text-[#38E1FF]">
                      {study.lighthouse.seo}
                    </div>
                    <div className="text-[10px] font-mono text-[#8E92A4] uppercase mt-1">
                      SEO Score
                    </div>
                  </div>
                  <div className="bg-[#171A24] border border-emerald-500/20 p-4 rounded-xl text-center">
                    <div className="text-2xl font-mono font-extrabold text-white">
                      {study.lighthouse.accessibility}
                    </div>
                    <div className="text-[10px] font-mono text-[#8E92A4] uppercase mt-1">
                      Accessibility
                    </div>
                  </div>
                  <div className="bg-[#171A24] border border-emerald-500/20 p-4 rounded-xl text-center">
                    <div className="text-2xl font-mono font-extrabold text-[#EE5D32]">
                      {study.lighthouse.lcp}
                    </div>
                    <div className="text-[10px] font-mono text-[#8E92A4] uppercase mt-1">
                      LCP Speed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROBLEM & ENGINEERING BLUEPRINT */}
          {activeTab === "blueprint" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Problem */}
                <div className="lg:col-span-5 bg-[#161822] border border-red-500/20 p-6 rounded-2xl space-y-3">
                  <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                    THE BOTTLENECK &amp; FRICTION
                  </div>
                  <p className="text-sm text-[#C4C7D4] font-sans leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="lg:col-span-7 bg-[#161822] border border-[#D5F326]/30 p-6 rounded-2xl space-y-3">
                  <div className="text-xs font-mono font-bold text-[#D5F326] uppercase tracking-wider">
                    WHAT WE ARCHITECTED &amp; DEPLOYED
                  </div>
                  <ul className="space-y-2 text-sm text-[#C4C7D4] font-sans">
                    {study.solution.map((sol, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D5F326] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-[#0E1017] border border-white/[0.06] p-5 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-[#8E92A4] uppercase tracking-wider">
                  TECHNOLOGIES IN BLUEPRINT:
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-[#1A1D28] text-white px-3 py-1 rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CLIENT RECEIPT & QUOTE */}
          {activeTab === "receipt" && (
            <div className="bg-[#171A24] border border-[#D5F326]/30 p-8 sm:p-10 rounded-2xl space-y-6">
              <Quote className="w-8 h-8 text-[#D5F326]/60" />
              <blockquote className="font-display font-medium text-xl sm:text-2xl text-[#F4F3EE] leading-relaxed">
                &ldquo;{study.clientQuote.text}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-base text-white">
                    {study.clientQuote.author}
                  </div>
                  <div className="text-xs font-mono text-[#8E92A4]">
                    {study.clientQuote.role} &middot; {study.client} ({study.location})
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Client Sign-off</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
            <div className="text-xs font-mono text-[#8E92A4]">
              Ready to see similar results for your business?
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#D5F326] hover:bg-[#E2FF38] text-[#090A0E] font-display font-bold text-sm px-6 py-3 rounded-xl transition-all"
            >
              <span>Book Project Scoping Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
