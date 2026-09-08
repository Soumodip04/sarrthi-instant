"use client";

import React from "react";
import { PRICING_TIERS } from "@/data/pricing";
import { Currency, formatCurrency } from "@/lib/utils";
import { ArrowUpRight, Check, X, ShieldCheck } from "lucide-react";

interface PricingProps {
  currentCurrency: Currency;
  onOpenBooking: () => void;
}

export default function Pricing({
  currentCurrency,
  onOpenBooking,
}: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-[#f1efe6] text-[#17162a] relative overflow-hidden border-t border-[rgba(23,22,42,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(23,22,42,0.12)]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#8a6d1f] bg-[#e8a33d]/15 px-3.5 py-1 rounded-full border border-[#e8a33d]/30 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2ba88f]" />
              <span>INVESTMENT</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17162a] tracking-tight">
              Straightforward Packages, <br />
              <span className="text-[#8a6d1f]">Fixed Pricing.</span>
            </h2>
          </div>
          <div className="text-right">
            <div className="text-xs font-mono text-[#423f52] uppercase">
              ALL PRICES DISPLAYED IN:
            </div>
            <div className="text-sm font-mono font-bold text-[#8a6d1f]">
              {currentCurrency} (Stripe Multi-Currency Invoicing)
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isPopular = tier.isPopular;
            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 flex flex-col justify-between space-y-6 border transition-all ${
                  isPopular
                    ? "bg-[#14131f] text-[#f1efe6] border-[#14131f] shadow-2xl relative lg:-translate-y-2.5"
                    : "bg-[#f1efe6] text-[#17162a] border-[rgba(23,22,42,0.14)] hover:border-[rgba(23,22,42,0.3)] shadow-sm"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e8a33d] text-[#14131f] text-[11px] font-mono font-bold uppercase px-3.5 py-0.5 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-5">
                  {/* Top Badge & Title */}
                  <div className="space-y-1.5">
                    <span className={`text-xs font-mono block uppercase font-semibold ${
                      isPopular ? "text-[#f0c179]" : "text-[#8a6d1f]"
                    }`}>
                      {tier.badge}
                    </span>
                    <h3 className={`font-display font-bold text-2xl ${
                      isPopular ? "text-[#f1efe6]" : "text-[#17162a]"
                    }`}>
                      {tier.title}
                    </h3>
                    <p className={`text-xs font-sans leading-relaxed ${
                      isPopular ? "text-[#9a97ab]" : "text-[#423f52]"
                    }`}>
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`pt-2 pb-3 border-y ${
                    isPopular ? "border-white/[0.08]" : "border-[rgba(23,22,42,0.08)]"
                  }`}>
                    <div className={`font-display font-extrabold text-3xl sm:text-4xl ${
                      isPopular ? "text-[#f1efe6]" : "text-[#17162a]"
                    }`}>
                      {formatCurrency(tier.priceUSD, currentCurrency)}
                      <span className={`text-xs font-sans font-normal ml-1.5 ${
                        isPopular ? "text-[#9a97ab]" : "text-[#423f52]"
                      }`}>
                        {tier.period === "per-month" ? "/ month" : "starting"}
                      </span>
                    </div>
                    <div className={`text-xs font-sans mt-1 ${
                      isPopular ? "text-[#9a97ab]" : "text-[#423f52]"
                    }`}>
                      Timeline: <strong className={isPopular ? "text-white font-medium" : "text-[#17162a] font-medium"}>{tier.timeline}</strong>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className={`p-3 rounded-xl text-xs font-sans ${
                    isPopular ? "bg-[#201e30] text-white/80" : "bg-[#e8e4d6] text-[#17162a]"
                  }`}>
                    <span className={`font-mono font-semibold block text-[10px] uppercase mb-0.5 ${
                      isPopular ? "text-[#f0c179]" : "text-[#8a6d1f]"
                    }`}>BEST SUITED FOR:</span>
                    {tier.idealFor}
                  </div>

                  {/* Inclusions List */}
                  <div className="space-y-2">
                    <div className={`text-[10px] font-mono uppercase font-semibold ${
                      isPopular ? "text-white/60" : "text-[#17162a]/60"
                    }`}>
                      WHAT&apos;S INCLUDED:
                    </div>
                    {tier.included.map((inc, iIdx) => (
                      <div key={iIdx} className={`flex items-start gap-2 text-xs font-sans leading-snug ${
                        isPopular ? "text-[#f1efe6]/90" : "text-[#17162a]"
                      }`}>
                        <Check className="w-4 h-4 text-[#2ba88f] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Exclusions */}
                  <div className={`space-y-1 pt-2 border-t ${
                    isPopular ? "border-white/[0.06]" : "border-[rgba(23,22,42,0.06)]"
                  }`}>
                    <div className={`text-[10px] font-mono uppercase ${
                      isPopular ? "text-white/40" : "text-[#17162a]/40"
                    }`}>
                      WHAT&apos;S NOT INCLUDED:
                    </div>
                    {tier.notIncluded.map((notInc, nIdx) => (
                      <div key={nIdx} className={`flex items-start gap-2 text-[11px] font-sans leading-snug ${
                        isPopular ? "text-[#9a97ab]/80" : "text-[#423f52]/80"
                      }`}>
                        <X className="w-3.5 h-3.5 text-red-500/60 shrink-0 mt-0.5" />
                        <span>{notInc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3 rounded-xl font-sans font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    isPopular
                      ? "bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] shadow-md"
                      : "bg-[#e8e4d6] hover:bg-[#ded9c8] text-[#17162a] border border-[rgba(23,22,42,0.12)] font-semibold"
                  }`}
                >
                  <span>{tier.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Strip */}
        <div className="bg-[#e8e4d6] border border-[rgba(23,22,42,0.12)] p-6 sm:p-7 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="space-y-0.5">
            <div className="font-display font-bold text-base sm:text-lg text-[#17162a]">
              Need something custom or have special requirements?
            </div>
            <div className="text-xs text-[#423f52] font-sans">
              We create custom scopes for multi-location businesses, online stores, and specialized platforms.
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#f1efe6] hover:bg-white border border-[rgba(23,22,42,0.14)] text-[#17162a] font-sans text-xs px-5 py-3 rounded-xl transition-all shrink-0 font-semibold"
          >
            <span>Discuss Custom Scope</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
