import React from "react";
import { Globe } from "lucide-react";

export default function TrustMarquee() {
  const stats = [
    {
      value: "42+",
      label: "Websites Delivered",
      detail: "Across US, UK, Australia & Canada",
    },
    {
      value: "3.4x",
      label: "Average Traffic Growth",
      detail: "More calls and inquiries within 90 days",
    },
    {
      value: "< 1s",
      label: "Page Load Speed",
      detail: "Opens instantly on all mobile devices",
    },
    {
      value: "$14.8M+",
      label: "Client Revenue Generated",
      detail: "From customer calls, deals & sales",
    },
  ];

  const clientHubs = [
    { name: "Finova Capital", location: "London, UK", flag: "🇬🇧", tag: "Business Finance" },
    { name: "Apex Global Logistics", location: "Chicago, US", flag: "🇺🇸", tag: "Freight Transport" },
    { name: "Lumina Skin Science", location: "Sydney, AU", flag: "🇦🇺", tag: "Online Store" },
    { name: "Veritas Legal Group", location: "Toronto, CA", flag: "🇨🇦", tag: "Law Firm" },
    { name: "Vanguard Tech", location: "Austin, US", flag: "🇺🇸", tag: "Software" },
    { name: "Kensington Wealth", location: "London, UK", flag: "🇬🇧", tag: "Finance" },
  ];

  return (
    <section className="border-b border-[rgba(23,22,42,0.12)] bg-[#f1efe6] py-10 relative overflow-hidden text-[#17162a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric Quadrant */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-8 border-b border-[rgba(23,22,42,0.1)]">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-0.5">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#17162a] flex items-baseline gap-1">
                <span>{stat.value}</span>
                {i === 0 && <span className="text-[#e8a33d] text-xl">&middot;</span>}
                {i === 1 && <span className="text-[#2ba88f] text-xl">&middot;</span>}
                {i === 2 && <span className="text-[#e8a33d] text-xl">&middot;</span>}
                {i === 3 && <span className="text-[#2ba88f] text-xl">&middot;</span>}
              </div>
              <div className="font-sans font-bold text-sm text-[#17162a]">
                {stat.label}
              </div>
              <div className="font-sans text-xs text-[#423f52]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Global Client Trust Strip */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#e8e4d6] border border-[rgba(23,22,42,0.1)] flex items-center justify-center">
              <Globe className="w-4 h-4 text-[#2ba88f]" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-[#8a6d1f] uppercase tracking-wider">
                ACTIVE CLIENTS
              </div>
              <div className="text-[12px] font-sans text-[#423f52]">
                Direct collaboration across the UK, US, Australia &amp; Canada
              </div>
            </div>
          </div>

          {/* Hub Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {clientHubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-[#e8e4d6] border border-[rgba(23,22,42,0.12)] px-3.5 py-1.5 rounded-lg flex items-center gap-2 text-xs font-sans text-[#17162a]"
              >
                <span>{hub.flag}</span>
                <span className="font-semibold">{hub.name}</span>
                <span className="text-[#17162a]/30">&middot;</span>
                <span className="text-[11px] text-[#423f52]">{hub.location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
