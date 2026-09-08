"use client";

import React from "react";
import { INTERNATIONAL_TRUST_PILLARS, TIMEZONE_HUBS } from "@/data/internationalOS";
import { Clock, Video, ShieldCheck, GitBranch, CheckCircle2, Globe2 } from "lucide-react";

export default function InternationalOS() {
  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-5 h-5 text-[#2ba88f]" />,
    Video: <Video className="w-5 h-5 text-[#2ba88f]" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#2ba88f]" />,
    GitBranch: <GitBranch className="w-5 h-5 text-[#2ba88f]" />,
  };

  return (
    <section id="why-us" className="py-24 bg-[#e8e4d6] text-[#17162a] relative overflow-hidden border-t border-[rgba(23,22,42,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl pb-6 border-b border-[rgba(23,22,42,0.12)]">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#8a6d1f] bg-[#e8a33d]/15 px-3 py-1 rounded-full border border-[#e8a33d]/30 uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5 text-[#2ba88f]" />
            <span>WORKING WITH US FROM ABROAD</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17162a] tracking-tight">
            Hiring Overseas, <br />
            <span className="text-[#8a6d1f]">Made Unremarkable.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#423f52] font-sans leading-relaxed">
            Hiring remotely can feel risky if you worry about time differences or slow replies. We make sure working with us feels as easy as having someone in the room next door.
          </p>
        </div>

        {/* Timezone Working Hubs Grid */}
        <div className="bg-[#f1efe6] border border-[rgba(23,22,42,0.12)] p-6 sm:p-7 rounded-3xl space-y-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-mono font-bold text-[#8a6d1f] uppercase tracking-wider">
                WE WORK IN YOUR LOCAL TIMEZONE
              </div>
              <div className="text-xs font-sans text-[#423f52]">
                Guaranteed 4–6 hours daily live overlap for instant communication
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#2ba88f] bg-[#2ba88f]/10 border border-[#2ba88f]/20 px-3 py-1.5 rounded-lg font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#2ba88f] animate-pulse" />
              <span>Fast Replies During Your Working Day</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {TIMEZONE_HUBS.map((hub, idx) => (
              <div
                key={idx}
                className="bg-[#e8e4d6] border border-[rgba(23,22,42,0.1)] hover:border-[#e8a33d] p-4 rounded-2xl space-y-1.5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{hub.flag}</span>
                  <span className="text-[10px] font-mono text-[#2ba88f] bg-[#2ba88f]/15 px-2 py-0.5 rounded border border-[#2ba88f]/30 font-bold">
                    Live Overlap
                  </span>
                </div>
                <div className="font-display font-bold text-base text-[#17162a]">
                  {hub.city}
                </div>
                <div className="text-xs font-sans text-[#423f52]">
                  {hub.activeHours}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Friction-Free Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {INTERNATIONAL_TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#f1efe6] border border-[rgba(23,22,42,0.12)] hover:border-[#e8a33d] p-6 sm:p-7 rounded-3xl space-y-4 transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#e8e4d6] border border-[rgba(23,22,42,0.1)] flex items-center justify-center">
                  {iconMap[pillar.icon]}
                </div>
                <span className="text-[11px] font-mono font-bold text-[#8a6d1f] bg-[#e8a33d]/15 px-2.5 py-1 rounded-md border border-[#e8a33d]/30">
                  {pillar.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-[#17162a] mb-0.5">
                  {pillar.title}
                </h3>
                <div className="text-xs font-sans text-[#423f52]">
                  {pillar.tagline}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#423f52] font-sans leading-relaxed">
                {pillar.description}
              </p>

              <div className="pt-2 space-y-2 border-t border-[rgba(23,22,42,0.08)]">
                {pillar.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs font-sans text-[#17162a]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2ba88f] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
