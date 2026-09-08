"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { ShieldCheck, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f1efe6] text-[#17162a] relative overflow-hidden border-t border-[rgba(23,22,42,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="space-y-3 max-w-3xl pb-6 border-b border-[rgba(23,22,42,0.12)]">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#8a6d1f] bg-[#e8a33d]/15 px-3.5 py-1 rounded-full border border-[#e8a33d]/30 uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2ba88f]" />
            <span>WHAT CLIENTS SAY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17162a] tracking-tight">
            What Business Owners in London, <br />
            <span className="text-[#8a6d1f]">Chicago &amp; Sydney Say.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#423f52] font-sans leading-relaxed">
            Real feedback from business founders and directors who trusted us to build their websites and grow their Google rankings.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="bg-[#e8e4d6] border border-[rgba(23,22,42,0.12)] hover:border-[#e8a33d] p-7 rounded-3xl flex flex-col justify-between space-y-5 transition-all shadow-sm"
            >
              <div className="space-y-3.5">
                {/* Metric Impact Pill */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#8a6d1f] bg-[#f1efe6] px-3 py-1 rounded-md border border-[rgba(23,22,42,0.1)]">
                    {t.metricBadge}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#e8a33d] text-[#e8a33d]" />
                    ))}
                  </div>
                </div>

                <div className="font-display font-bold text-lg text-[#17162a]">
                  &ldquo;{t.headline}&rdquo;
                </div>

                <p className="text-sm text-[#423f52] font-sans leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[rgba(23,22,42,0.1)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f1efe6] border border-[rgba(23,22,42,0.12)] flex items-center justify-center font-display font-bold text-sm text-[#8a6d1f]">
                    {t.avatarInitial}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#17162a]">
                      {t.name}
                    </div>
                    <div className="text-xs font-sans text-[#423f52]">
                      {t.role} &middot; {t.company}
                    </div>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <span className="text-base">{t.flag}</span>
                  <span className="text-[11px] text-[#423f52] block">
                    {t.location.split(",")[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
