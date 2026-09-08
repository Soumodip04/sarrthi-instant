"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, TrendingUp, Copy, Check, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("growthsaarthi.startup@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-[#14131f] text-[#f1efe6] border-b border-white/[0.08]">
      {/* Background Radial Atmosphere from Example */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(560px_420px_at_82%_8%,rgba(232,163,61,0.18),transparent_60%),radial-gradient(480px_420px_at_6%_92%,rgba(43,168,143,0.16),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Friendly Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 bg-[#201e30] border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-sans text-[#f1efe6]">
            <span className="w-2 h-2 rounded-full bg-[#e8a33d] animate-pulse" />
            <span className="text-white/70">Trusted by businesses in:</span>
            <span className="text-[#f0c179] font-bold">UK 🇬🇧 &middot; US 🇺🇸 &middot; Australia 🇦🇺 &middot; Canada 🇨🇦</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-sans text-[#9a97ab] bg-[#201e30] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2ba88f]" />
            <span>Matching Working Hours in Your Timezone</span>
          </div>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Clear, High-Contrast Positioning */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-tight text-[#f1efe6]">
                We build fast, clean websites that{" "}
                <span className="text-[#f0c179] underline decoration-[#2ba88f]/60 decoration-2 underline-offset-8">
                  get you more customers.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#9a97ab] font-sans leading-relaxed pt-1 max-w-2xl">
                Custom website design, super-fast loading speeds, and Google SEO setup. We make it simple for small &amp; medium businesses to look professional, rank higher on Google, and turn website visitors into paying clients.
              </p>
            </div>

            {/* Simple Benefits Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5 bg-[#201e30] border border-white/[0.08] p-4 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#e8a33d] shrink-0 mt-0.5" />
                <div className="text-xs font-sans text-[#f1efe6]/90">
                  <strong className="text-white block text-sm font-semibold mb-0.5">Super Fast Loading</strong>
                  Opens in under 1 second so mobile visitors never leave.
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-[#201e30] border border-white/[0.08] p-4 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#2ba88f] shrink-0 mt-0.5" />
                <div className="text-xs font-sans text-[#f1efe6]/90">
                  <strong className="text-white block text-sm font-semibold mb-0.5">Get Found on Google</strong>
                  Full SEO setup so customers searching your services find you.
                </div>
              </div>
            </div>

            {/* CTA Cluster */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-98"
                >
                  <span>Book A Free 15-Min Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/[0.05] border border-white/20 hover:border-white/40 text-[#f1efe6] font-sans text-xs font-semibold px-6 py-3.5 rounded-full transition-all"
                >
                  <span>See Websites We&apos;ve Built</span>
                  <span className="text-[#e8a33d]">&darr;</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs font-sans text-[#9a97ab]">
                <span className="text-[#f0c179] font-medium flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Free call:</span>
                </span>
                <span>We check your current website speed and give you free tips to get more clients.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Proof HUD Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#201e30] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl relative space-y-6">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2ba88f] animate-ping" />
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                    REAL CLIENT RESULTS
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#f0c179] bg-[#e8a33d]/15 px-2.5 py-0.5 rounded-full font-semibold border border-[#e8a33d]/25">
                  Last 90 Days
                </span>
              </div>

              {/* Big Growth Metric */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-4xl sm:text-5xl text-[#6fc9b6]">
                    +186%
                  </span>
                  <TrendingUp className="w-6 h-6 text-[#2ba88f]" />
                </div>
                <div className="text-xs sm:text-sm font-sans text-[#f1efe6]/90 font-medium">
                  Average Google Search Growth
                </div>
                <p className="text-xs text-[#9a97ab] font-sans">
                  For our active business clients across the UK, USA, Australia, and Canada.
                </p>
              </div>

              {/* 3 Quick Result Indicators */}
              <div className="grid grid-cols-3 gap-2.5 pt-1">
                <div className="bg-[#2a2740] p-3 rounded-xl space-y-0.5 border border-white/5">
                  <div className="text-[11px] font-mono text-[#9a97ab]">Speed</div>
                  <div className="font-display font-bold text-base text-[#6fc9b6]">0.6s</div>
                  <div className="text-[10px] text-white/50">Load Time</div>
                </div>

                <div className="bg-[#2a2740] p-3 rounded-xl space-y-0.5 border border-white/5">
                  <div className="text-[11px] font-mono text-[#9a97ab]">Google</div>
                  <div className="font-display font-bold text-base text-[#f0c179]">#1 Rank</div>
                  <div className="text-[10px] text-white/50">Local Maps</div>
                </div>

                <div className="bg-[#2a2740] p-3 rounded-xl space-y-0.5 border border-white/5">
                  <div className="text-[11px] font-mono text-[#9a97ab]">Delivery</div>
                  <div className="font-display font-bold text-base text-[#f1efe6]">21 Days</div>
                  <div className="text-[10px] text-white/50">Kickoff to Live</div>
                </div>
              </div>

              {/* Direct Quick Contact Trigger */}
              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-xs font-sans text-[#9a97ab]">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#e8a33d]" />
                  <span>Email us anytime:</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-[#e8a33d] hover:underline flex items-center gap-1 font-medium font-mono"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#2ba88f]" />
                      <span className="text-[#2ba88f] font-sans">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>growthsaarthi.startup@gmail.com</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
