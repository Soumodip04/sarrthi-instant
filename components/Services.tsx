"use client";

import React, { useState } from "react";
import { SERVICE_PILLARS } from "@/data/services";
import { ArrowUpRight, CheckCircle2, Layers, Zap, XCircle } from "lucide-react";

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const [activePillarId, setActivePillarId] = useState<string>("web-engineering");

  const activePillar = SERVICE_PILLARS.find((p) => p.id === activePillarId) || SERVICE_PILLARS[0];

  return (
    <section id="services" className="py-24 bg-[#f1efe6] text-[#17162a] relative overflow-hidden border-t border-[rgba(23,22,42,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(23,22,42,0.12)]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#8a6d1f] bg-[#e8a33d]/15 px-3.5 py-1 rounded-full border border-[#e8a33d]/30 uppercase tracking-wider">
              <span>WHAT WE DO</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17162a] tracking-tight">
              Two Disciplines. <br />
              <span className="text-[#8a6d1f]">One Growth Engine.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#423f52] max-w-md font-sans leading-relaxed">
            Most studios hand you a site and wish you luck. We build the site to convert, then stay on to make sure customers actually find you.
          </p>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICE_PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`text-left p-7 rounded-2xl border transition-all ${
                  isSelected
                    ? "bg-[#e8e4d6] border-[#e8a33d] shadow-lg ring-1 ring-[#e8a33d]/40"
                    : "bg-[#e8e4d6]/60 border-[rgba(23,22,42,0.12)] hover:border-[rgba(23,22,42,0.25)] hover:bg-[#e8e4d6]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-semibold text-[#8a6d1f] tracking-wide">
                    {pillar.badge}
                  </span>
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-[#e8a33d] text-[#14131f]"
                        : "bg-[rgba(23,22,42,0.06)] text-[#423f52]"
                    }`}
                  >
                    SERVICE {pillar.pillarNumber}
                  </span>
                </div>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#17162a] mb-2">
                  {pillar.title}
                </div>
                <div className="text-xs sm:text-sm text-[#423f52] font-sans leading-relaxed line-clamp-2">
                  {pillar.tagline}
                </div>
                <div className="mt-4 pt-3 border-t border-[rgba(23,22,42,0.1)] flex items-center justify-between text-xs font-sans">
                  <span className="text-[#423f52] font-medium">KEY RESULT:</span>
                  <span className="text-[#8a6d1f] font-bold font-mono">{pillar.outcomeMetric}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep-Dive Display */}
        <div className="bg-[#e8e4d6] border border-[rgba(23,22,42,0.12)] rounded-3xl p-6 sm:p-9 space-y-9 shadow-sm">
          {/* Top Overview Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-6 border-b border-[rgba(23,22,42,0.1)]">
            <div className="lg:col-span-8 space-y-2.5">
              <span className="text-xs font-mono font-bold text-[#8a6d1f] uppercase tracking-wider">
                {activePillar.badge}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#17162a]">
                {activePillar.title}
              </h3>
              <p className="text-sm sm:text-base text-[#423f52] font-sans leading-relaxed">
                {activePillar.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#f1efe6] border border-[rgba(23,22,42,0.12)] p-5 rounded-2xl space-y-1">
              <div className="text-xs font-mono text-[#8a6d1f] uppercase">TARGET BENCHMARK</div>
              <div className="font-display font-extrabold text-3xl text-[#17162a]">
                {activePillar.outcomeMetric}
              </div>
              <div className="text-xs font-sans text-[#423f52]">
                {activePillar.outcomeLabel}
              </div>
            </div>
          </div>

          {/* Deliverables Grid (4 Cards) */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#423f52] uppercase tracking-wider mb-5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#2ba88f]" />
              <span>WHAT IS INCLUDED IN THIS SERVICE</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {activePillar.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#f1efe6] border border-[rgba(23,22,42,0.1)] hover:border-[#e8a33d]/60 p-5 sm:p-6 rounded-2xl space-y-2.5 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-display font-bold text-base sm:text-lg text-[#17162a]">
                      {item.title}
                    </h5>
                    <span className="text-xs font-mono text-[#423f52]/60">0{idx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#423f52] font-sans leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-sans bg-[#e8e4d6] text-[#17162a] border border-[rgba(23,22,42,0.08)] px-2.5 py-0.5 rounded-md font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contrast: Generic Agency vs Sarrthi Instant */}
          <div className="bg-[#f1efe6] border border-[rgba(23,22,42,0.12)] rounded-2xl p-6 sm:p-7 space-y-5">
            <h4 className="text-xs font-mono font-bold text-[#17162a] uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#e8a33d]" />
              <span>HOW WE ARE DIFFERENT FROM TYPICAL AGENCIES</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activePillar.comparison.map((comp, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="bg-[#e8e4d6]/60 border border-red-500/20 p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-red-600 text-xs font-mono font-bold">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>TRADITIONAL AGENCIES</span>
                    </div>
                    <p className="text-xs text-[#423f52] font-sans leading-relaxed">
                      {comp.genericAgency}
                    </p>
                  </div>

                  <div className="bg-[#e8e4d6] border border-[#2ba88f]/40 p-4 rounded-xl space-y-1">
                    <div className="flex items-center gap-1.5 text-[#2ba88f] text-xs font-mono font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>THE SARRTHI INSTANT WAY</span>
                    </div>
                    <p className="text-xs text-[#17162a] font-sans font-medium leading-relaxed">
                      {comp.sarrthiWay}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[rgba(23,22,42,0.1)]">
            <div className="text-xs font-sans text-[#423f52]">
              Have questions about what type of website or SEO your business needs?
            </div>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>Schedule A Free 15-Min Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
