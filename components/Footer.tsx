import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0e0d16] pt-14 pb-10 text-[#9a97ab]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#201e30] border border-white/10 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-[#e8a33d] stroke-2"
                >
                  <circle cx="12" cy="12" r="7" stroke="#e8a33d" strokeWidth="2"/>
                  <path d="M12 2 L12 6" stroke="#2ba88f" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="1.8" fill="#e8a33d"/>
                </svg>
              </div>
              <span className="font-display font-bold text-lg text-[#f1efe6]">
                Sarrthi <span className="text-[#f0c179]">Instant</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#9a97ab] leading-relaxed max-w-sm">
              We build fast, modern websites and help businesses in the US, UK, Australia, and Canada rank on Google to get more calls, leads, and sales.
            </p>

            <div className="flex items-center gap-2 text-xs font-sans text-[#2ba88f] bg-[#2ba88f]/10 border border-[#2ba88f]/20 px-3 py-1.5 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-[#2ba88f] animate-pulse" />
              <span>Available for 2 new projects this month</span>
            </div>
          </div>

          {/* Nav Col 1: Services */}
          <div className="space-y-2.5 text-xs font-sans">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              OUR SERVICES
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#f0c179] transition-colors">
                  Custom Website Design &amp; Build
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f0c179] transition-colors">
                  Google SEO &amp; Maps Growth
                </a>
              </li>
              <li>
                <a href="#audit" className="hover:text-[#f0c179] transition-colors">
                  Free 30-Second Website Check
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#f0c179] transition-colors">
                  Fast Mobile Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Case Studies */}
          <div className="space-y-2.5 text-xs font-sans">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              RECENT WEBSITES
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="hover:text-[#f0c179] transition-colors flex items-center justify-between">
                  <span>Finova Capital</span>
                  <span className="text-[11px] text-white/40">🇬🇧 London</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#f0c179] transition-colors flex items-center justify-between">
                  <span>Apex Logistics</span>
                  <span className="text-[11px] text-white/40">🇺🇸 Chicago</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#f0c179] transition-colors flex items-center justify-between">
                  <span>Lumina Skincare</span>
                  <span className="text-[11px] text-white/40">🇦🇺 Sydney</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#f0c179] transition-colors flex items-center justify-between">
                  <span>Veritas Legal</span>
                  <span className="text-[11px] text-white/40">🇨🇦 Toronto</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: Why Us */}
          <div className="space-y-2.5 text-xs font-sans">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              WORKING WITH US
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#why-us" className="hover:text-[#f0c179] transition-colors">
                  Matching Timezone Hours
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#f0c179] transition-colors">
                  Short Video Walkthroughs
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#f0c179] transition-colors">
                  Stripe Local Invoicing
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#f0c179] transition-colors">
                  100% Full Website Ownership
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#78758b]">
          <div>
            &copy; {new Date().getFullYear()} Sarrthi Instant. All rights reserved.
          </div>

          <div className="flex items-center gap-3 text-white/40">
            <span>London 🇬🇧</span>
            <span>&middot;</span>
            <span>New York 🇺🇸</span>
            <span>&middot;</span>
            <span>Sydney 🇦🇺</span>
            <span>&middot;</span>
            <span>Toronto 🇨🇦</span>
          </div>

          <div className="text-xs text-[#9a97ab]">
            Fast, clean websites for growing businesses
          </div>
        </div>
      </div>
    </footer>
  );
}
