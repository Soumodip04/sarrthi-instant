"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/process";
import { CheckCircle2, FastForward, ArrowUpRight } from "lucide-react";

interface ProcessProps {
  onOpenBooking: () => void;
}

export default function Process({ onOpenBooking }: ProcessProps) {
  return (
    <section id="process" className="py-24 bg-[#f1efe6] text-[#17162a] relative overflow-hidden border-t border-[rgba(23,22,42,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[rgba(23,22,42,0.12)]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#8a6d1f] bg-[#e8a33d]/15 px-3.5 py-1 rounded-full border border-[#e8a33d]/30 uppercase tracking-wider">
              <FastForward className="w-3.5 h-3.5 text-[#e8a33d]" />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#17162a] tracking-tight">
              No Mystery. <br />
              <span className="text-[#8a6d1f]">Here&apos;s Exactly What Happens.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#423f52] max-w-md font-sans leading-relaxed">
            A simple, organized process designed to save you time. No endless meetings, no technical headaches &mdash; just clear results.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#e8e4d6] border border-[rgba(23,22,42,0.12)] hover:border-[#e8a33d] p-6 rounded-3xl flex flex-col justify-between space-y-5 transition-all shadow-sm"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-[rgba(23,22,42,0.1)]">
                  <span className="font-display font-extrabold text-2xl text-[#17162a]/30">
                    {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-mono text-[#8a6d1f] bg-[#f1efe6] px-2.5 py-0.5 rounded-md border border-[rgba(23,22,42,0.1)] font-semibold">
                    {step.duration}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#8a6d1f] block uppercase tracking-wider mb-0.5">
                    {step.badge}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#17162a]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-[#423f52] font-sans leading-relaxed">
                  {step.summary}
                </p>

                {/* Deliverables */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono text-[#17162a]/60 uppercase font-semibold">
                    WHAT YOU GET:
                  </div>
                  {step.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-xs text-[#17162a] font-sans leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2ba88f] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client commitment */}
              <div className="pt-3 border-t border-[rgba(23,22,42,0.1)] text-xs font-sans">
                <div className="bg-[#f1efe6] p-2.5 rounded-xl text-[#17162a] border border-[rgba(23,22,42,0.08)]">
                  <span className="text-[#8a6d1f] block font-mono font-semibold text-[10px] uppercase mb-0.5">YOUR TIME NEEDED:</span>
                  {step.clientCommitment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Sprint Guarantee Bar */}
        <div className="bg-[#e8e4d6] border border-[#e8a33d]/40 p-6 sm:p-7 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="space-y-1">
            <div className="font-display font-bold text-lg text-[#17162a]">
              On-Time Launch Guarantee
            </div>
            <div className="text-xs text-[#423f52] font-sans">
              We stick to our agreed launch date so your business can start getting new customers on schedule.
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs px-6 py-3 rounded-xl transition-all shrink-0 shadow-md"
          >
            <span>Book A Quick Kickoff Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
