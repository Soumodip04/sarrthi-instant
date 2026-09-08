"use client";

import React, { useState, useMemo } from "react";
import { Currency, formatCurrency } from "@/lib/utils";
import { Calculator, Check, ArrowUpRight, Clock } from "lucide-react";

interface ScopeEstimatorProps {
  currentCurrency: Currency;
  onOpenBooking: () => void;
}

export default function ScopeEstimator({
  currentCurrency,
  onOpenBooking,
}: ScopeEstimatorProps) {
  const [projectType, setProjectType] = useState<"build" | "redesign" | "seo" | "fullstack">("build");
  const [scopeSize, setScopeSize] = useState<"focused" | "standard" | "scale">("standard");
  const [hasCalculator, setHasCalculator] = useState(true);
  const [hasLocalSEO, setHasLocalSEO] = useState(true);
  const [hasFastTrack, setHasFastTrack] = useState(false);

  // Calculate dynamic price in USD base
  const calculation = useMemo(() => {
    let basePrice = 2800;
    let days = 18;

    if (projectType === "build") {
      basePrice = 2800;
      days = 18;
    } else if (projectType === "redesign") {
      basePrice = 2400;
      days = 14;
    } else if (projectType === "seo") {
      basePrice = 1800;
      days = 14;
    } else if (projectType === "fullstack") {
      basePrice = 4500;
      days = 25;
    }

    if (scopeSize === "focused") {
      basePrice -= 400;
      days -= 4;
    } else if (scopeSize === "scale") {
      basePrice += 1200;
      days += 7;
    }

    if (hasCalculator) basePrice += 450;
    if (hasLocalSEO) basePrice += 500;
    if (hasFastTrack) {
      basePrice += 750;
      days = Math.max(10, Math.round(days * 0.7));
    }

    return {
      priceUSD: basePrice,
      estimatedDays: days,
    };
  }, [projectType, scopeSize, hasCalculator, hasFastTrack, hasLocalSEO]);

  return (
    <section className="py-24 bg-[#e8e4d6] text-[#17162a] relative overflow-hidden border-t border-[rgba(23,22,42,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#8a6d1f] bg-[#e8a33d]/15 px-3.5 py-1 rounded-full border border-[#e8a33d]/30 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#e8a33d]" />
            <span>INSTANT PROJECT ESTIMATOR</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17162a] tracking-tight">
            Estimate Your Project Cost &amp; <br />
            <span className="text-[#8a6d1f]">Timeline in Real-Time.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#423f52] font-sans">
            Choose what you need below to see an instant timeline and estimated cost in your local currency.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#f1efe6] border border-[rgba(23,22,42,0.12)] p-6 sm:p-8 rounded-3xl space-y-7 shadow-sm">
            {/* Step 1: Project Objective */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono font-bold text-[#8a6d1f] uppercase tracking-wider block">
                1. WHAT ARE YOU LOOKING FOR?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: "build", label: "New Custom Website", sub: "Fast, modern website built from scratch" },
                  { id: "redesign", label: "Website Redesign & Speedup", sub: "Make existing site fast & modern" },
                  { id: "seo", label: "Google SEO Growth Setup", sub: "Get found by local & online searchers" },
                  { id: "fullstack", label: "Full Package (Website + SEO)", sub: "Complete custom website & Google rankings" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as any)}
                    className={`text-left p-4 rounded-xl border text-xs transition-all ${
                      projectType === type.id
                        ? "bg-[#e8e4d6] border-[#e8a33d] text-[#17162a] shadow-sm font-semibold ring-1 ring-[#e8a33d]/40"
                        : "bg-[#f1efe6] border-[rgba(23,22,42,0.1)] text-[#423f52] hover:border-[rgba(23,22,42,0.25)] hover:bg-[#e8e4d6]/50"
                    }`}
                  >
                    <div className="font-display font-bold text-sm text-[#17162a] mb-0.5">
                      {type.label}
                    </div>
                    <div className="text-[11px] font-sans text-[#423f52] leading-snug">{type.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Surface Area / Scope Size */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono font-bold text-[#8a6d1f] uppercase tracking-wider block">
                2. HOW MANY PAGES DO YOU NEED?
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "focused", label: "1–3 Pages", desc: "Landing page / simple site" },
                  { id: "standard", label: "4–8 Pages", desc: "Standard business site" },
                  { id: "scale", label: "10+ Pages", desc: "Large multi-page site" },
                ].map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setScopeSize(size.id as any)}
                    className={`text-left p-3.5 rounded-xl border text-xs transition-all ${
                      scopeSize === size.id
                        ? "bg-[#e8e4d6] border-[#e8a33d] text-[#17162a] font-semibold ring-1 ring-[#e8a33d]/40"
                        : "bg-[#f1efe6] border-[rgba(23,22,42,0.1)] text-[#423f52] hover:border-[rgba(23,22,42,0.25)]"
                    }`}
                  >
                    <div className="font-display font-bold text-xs text-[#17162a] mb-0.5">
                      {size.label}
                    </div>
                    <div className="text-[11px] font-sans text-[#423f52]">{size.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Optional Features */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono font-bold text-[#8a6d1f] uppercase tracking-wider block">
                3. OPTIONAL ADD-ONS
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={() => setHasCalculator(!hasCalculator)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-xs transition-all ${
                    hasCalculator
                      ? "bg-[#e8e4d6] border-[#e8a33d] text-[#17162a] font-semibold"
                      : "bg-[#f1efe6] border-[rgba(23,22,42,0.1)] text-[#423f52]"
                  }`}
                >
                  <span className="font-sans font-medium">Instant Online Quote / Price Calculator</span>
                  {hasCalculator && <Check className="w-4 h-4 text-[#2ba88f]" />}
                </button>

                <button
                  onClick={() => setHasLocalSEO(!hasLocalSEO)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-xs transition-all ${
                    hasLocalSEO
                      ? "bg-[#e8e4d6] border-[#e8a33d] text-[#17162a] font-semibold"
                      : "bg-[#f1efe6] border-[rgba(23,22,42,0.1)] text-[#423f52]"
                  }`}
                >
                  <span className="font-sans font-medium">Google Maps &amp; Local Business Setup</span>
                  {hasLocalSEO && <Check className="w-4 h-4 text-[#2ba88f]" />}
                </button>

                <button
                  onClick={() => setHasFastTrack(!hasFastTrack)}
                  className={`flex items-center justify-between p-3.5 rounded-xl border text-xs transition-all ${
                    hasFastTrack
                      ? "bg-[#e8e4d6] border-[#e8a33d] text-[#17162a] font-semibold"
                      : "bg-[#f1efe6] border-[rgba(23,22,42,0.1)] text-[#423f52]"
                  }`}
                >
                  <span className="font-sans font-medium">Priority Fast Delivery (10 Days)</span>
                  {hasFastTrack && <Check className="w-4 h-4 text-[#2ba88f]" />}
                </button>
              </div>
            </div>
          </div>

          {/* Real-Time Live Estimate HUD (5 cols) */}
          <div className="lg:col-span-5 bg-[#f1efe6] border border-[#e8a33d]/40 p-6 sm:p-8 rounded-3xl space-y-6 shadow-md relative">
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(23,22,42,0.1)]">
              <div className="text-xs font-mono font-bold text-[#8a6d1f] uppercase tracking-wider">
                ESTIMATED INVESTMENT
              </div>
              <span className="text-xs font-mono text-[#423f52] bg-[#e8e4d6] px-2.5 py-0.5 rounded-md border border-[rgba(23,22,42,0.08)]">
                Currency: {currentCurrency}
              </span>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-mono text-[#423f52]">
                ESTIMATED STARTING PRICE:
              </div>
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#17162a]">
                {formatCurrency(calculation.priceUSD, currentCurrency)}
                <span className="text-xs font-sans font-normal text-[#423f52] ml-2">
                  {projectType === "seo" ? "/ month" : "flat fee"}
                </span>
              </div>
            </div>

            {/* Timeline Breakdown */}
            <div className="bg-[#e8e4d6] border border-[rgba(23,22,42,0.08)] p-3.5 rounded-xl flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-2 text-[#423f52]">
                <Clock className="w-4 h-4 text-[#2ba88f]" />
                <span>Estimated Delivery Time:</span>
              </div>
              <span className="text-[#17162a] font-bold font-mono">
                {calculation.estimatedDays} Days
              </span>
            </div>

            {/* Inclusions summary */}
            <div className="space-y-2 text-xs font-sans text-[#423f52] pt-1">
              <div className="text-[11px] font-mono text-[#17162a] uppercase font-semibold">
                INCLUDED IN THIS ESTIMATE:
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#2ba88f]" />
                <span>Super fast mobile loading (under 1s)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#2ba88f]" />
                <span>100% full ownership of your website</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#2ba88f]" />
                <span>We work in your timezone with fast replies</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#2ba88f]" />
                <span>30 days of free support and warranty</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-3 border-t border-[rgba(23,22,42,0.1)] space-y-2.5">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <span>Discuss This Scope on a Free Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs font-sans text-[#423f52]">
                Free 15-min chat &middot; Zero obligation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
