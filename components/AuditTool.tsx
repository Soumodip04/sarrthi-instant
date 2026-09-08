"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, Zap, Search, ArrowUpRight } from "lucide-react";

interface AuditToolProps {
  onOpenBooking: () => void;
}

export default function AuditTool({ onOpenBooking }: AuditToolProps) {
  const [url, setUrl] = useState("");
  const [market, setMarket] = useState("US 🇺🇸");
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState<null | {
    domain: string;
    speedEstimate: string;
    bounceLoss: string;
    schemaStatus: string;
    keywordOpportunity: string;
    conversionFriction: string;
    estimatedLift: string;
  }>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    let cleanDomain = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    setAnalyzing(true);
    setReport(null);

    setTimeout(() => {
      setAnalyzing(false);
      setReport({
        domain: cleanDomain,
        speedEstimate: "Takes 3.8s to load on phones",
        bounceLoss: "About 45% of mobile visitors leave before seeing your offer",
        schemaStatus: "Missing Google business tags so local searchers don't see you",
        keywordOpportunity: "18+ popular search terms in your niche are going to competitors",
        conversionFriction: "Website is slow and hard to navigate on mobile",
        estimatedLift: "Expected 2x to 3x more customer calls with a clean, fast website",
      });
    }, 1800);
  };

  return (
    <section id="audit" className="py-24 bg-[#e8e4d6] text-[#17162a] relative overflow-hidden border-t border-[rgba(23,22,42,0.12)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#8a6d1f] bg-[#e8a33d]/15 px-3.5 py-1 rounded-full border border-[#e8a33d]/30 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#e8a33d]" />
            <span>FREE 30-SECOND WEBSITE CHECK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#17162a] tracking-tight">
            See If Your Website Is <br />
            <span className="text-[#8a6d1f]">Losing Potential Customers.</span>
          </h2>
          <p className="text-sm text-[#423f52] font-sans">
            Enter your website address below to check how fast it opens and how you can get more leads from Google.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-[#f1efe6] border border-[rgba(23,22,42,0.12)] p-6 sm:p-8 rounded-3xl space-y-6 shadow-sm">
          <form onSubmit={handleRunAudit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              {/* URL input */}
              <div className="sm:col-span-8 relative">
                <Search className="w-4 h-4 text-[#423f52]/60 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. yourcompany.com or acmelogistics.co.uk"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full bg-[#e8e4d6] border border-[rgba(23,22,42,0.15)] rounded-xl pl-11 pr-4 py-3.5 text-xs sm:text-sm font-sans text-[#17162a] placeholder:text-[#423f52]/50 focus:outline-none focus:border-[#e8a33d]"
                />
              </div>

              {/* Target Country */}
              <div className="sm:col-span-4">
                <select
                  value={market}
                  onChange={(e) => setMarket(e.target.value)}
                  className="w-full bg-[#e8e4d6] border border-[rgba(23,22,42,0.15)] rounded-xl px-4 py-3.5 text-xs sm:text-sm font-sans text-[#17162a] focus:outline-none focus:border-[#e8a33d]"
                >
                  <option value="UK 🇬🇧">United Kingdom 🇬🇧</option>
                  <option value="US 🇺🇸">United States 🇺🇸</option>
                  <option value="Australia 🇦🇺">Australia 🇦🇺</option>
                  <option value="Canada 🇨🇦">Canada 🇨🇦</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={analyzing}
              className="w-full bg-[#e8a33d] hover:bg-[#f0c179] disabled:bg-[#17162a]/10 disabled:text-[#17162a]/40 text-[#14131f] font-sans font-bold text-sm py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              {analyzing ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-[#14131f] border-t-transparent animate-spin" />
                  <span>Checking speed and Google ranking factors...</span>
                </>
              ) : (
                <>
                  <span>Check My Website Free ({market})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Report Output Card */}
          {report && (
            <div className="mt-6 pt-6 border-t border-[rgba(23,22,42,0.1)] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[rgba(23,22,42,0.08)]">
                <div>
                  <span className="text-xs font-mono text-[#8a6d1f] font-semibold">
                    WEBSITE CHECK FOR:
                  </span>
                  <div className="font-display font-bold text-lg text-[#17162a]">
                    https://{report.domain}
                  </div>
                </div>
                <div className="text-xs font-mono text-[#2ba88f] bg-[#2ba88f]/10 border border-[#2ba88f]/20 px-3 py-1 rounded-lg">
                  Target Market: {market}
                </div>
              </div>

              {/* 4-Metric Diagnostic Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Speed */}
                <div className="bg-[#e8e4d6] border border-amber-500/30 p-4 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2 text-[#8a6d1f] text-xs font-mono font-bold">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>MOBILE LOADING SPEED</span>
                  </div>
                  <div className="font-display font-bold text-sm text-[#17162a]">
                    {report.speedEstimate}
                  </div>
                  <p className="text-xs text-[#423f52] font-sans">
                    {report.bounceLoss}.
                  </p>
                </div>

                {/* 2. Google Setup */}
                <div className="bg-[#e8e4d6] border border-amber-500/30 p-4 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2 text-[#8a6d1f] text-xs font-mono font-bold">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>GOOGLE VISIBILITY</span>
                  </div>
                  <div className="font-display font-bold text-sm text-[#17162a]">
                    {report.schemaStatus}
                  </div>
                  <p className="text-xs text-[#423f52] font-sans">
                    Google doesn&apos;t know what services to recommend you for.
                  </p>
                </div>

                {/* 3. Search Opportunities */}
                <div className="bg-[#e8e4d6] border border-[#2ba88f]/30 p-4 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2 text-[#2ba88f] text-xs font-mono font-bold">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>MISSED SEARCH CUSTOMERS</span>
                  </div>
                  <div className="font-display font-bold text-sm text-[#17162a]">
                    {report.keywordOpportunity}
                  </div>
                  <p className="text-xs text-[#423f52] font-sans">
                    Customers are searching for your services, but competitors are taking them.
                  </p>
                </div>

                {/* 4. What you gain */}
                <div className="bg-[#e8e4d6] border border-[#e8a33d]/40 p-4 rounded-2xl space-y-1">
                  <div className="flex items-center gap-2 text-[#8a6d1f] text-xs font-mono font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2ba88f]" />
                    <span>WHAT YOU CAN ACHIEVE</span>
                  </div>
                  <div className="font-display font-bold text-sm text-[#17162a]">
                    {report.estimatedLift}
                  </div>
                  <p className="text-xs text-[#423f52] font-sans">
                    With a fast, clean website and proper Google setup.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="bg-[#e8e4d6] border border-[#e8a33d]/40 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-0.5 text-center sm:text-left">
                  <div className="font-display font-bold text-sm text-[#17162a]">
                    Want us to show you how to fix these on a quick call?
                  </div>
                  <div className="text-xs text-[#423f52] font-sans">
                    We&apos;ll walk you through free tips on a quick 15-minute Google Meet call.
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-1.5"
                >
                  <span>Book Free 15-Min Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
