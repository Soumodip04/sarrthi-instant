"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";
import { ChevronDown, HelpCircle, Search, Plus } from "lucide-react";

interface FAQProps {
  onOpenBooking: () => void;
}

export default function FAQ({ onOpenBooking }: FAQProps) {
  const [openId, setOpenId] = useState<string>("international-friction");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "General", "How We Work", "Payments & Safety", "SEO & Google"];

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#f1efe6] text-[#17162a] relative overflow-hidden border-t border-[rgba(23,22,42,0.12)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-2xl pb-6 border-b border-[rgba(23,22,42,0.12)]">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#8a6d1f] bg-[#e8a33d]/15 px-3.5 py-1 rounded-full border border-[#e8a33d]/30 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#2ba88f]" />
            <span>QUESTIONS</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#17162a] tracking-tight">
            Before You <br />
            <span className="text-[#8a6d1f]">Book The Call.</span>
          </h2>
          <p className="text-sm text-[#423f52] font-sans">
            Clear answers to the questions business owners ask before starting a project with us.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Categories */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#e8a33d] text-[#14131f] font-bold shadow-sm"
                    : "bg-[#e8e4d6] text-[#423f52] hover:text-[#17162a] border border-[rgba(23,22,42,0.1)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#423f52]/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#e8e4d6] border border-[rgba(23,22,42,0.12)] rounded-xl pl-9 pr-3.5 py-2 text-xs font-sans text-[#17162a] placeholder:text-[#423f52]/60 focus:outline-none focus:border-[#e8a33d]"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-[#e8e4d6] border-[#e8a33d]/60 shadow-md"
                    : "bg-[#e8e4d6]/60 border-[rgba(23,22,42,0.1)] hover:border-[rgba(23,22,42,0.2)]"
                }`}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#8a6d1f] uppercase font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#17162a]">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? "rotate-45 bg-[#e8a33d] text-[#14131f]" : "bg-[#f1efe6] text-[#2ba88f]"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 space-y-3.5 border-t border-[rgba(23,22,42,0.1)]">
                    <p className="text-sm text-[#423f52] font-sans leading-relaxed">
                      {item.answer}
                    </p>

                    {item.highlight && (
                      <div className="bg-[#f1efe6] border-l-2 border-[#2ba88f] p-3 rounded-r-xl text-xs font-sans text-[#17162a]">
                        <strong className="text-[#2ba88f] font-semibold">Key Point: </strong>
                        {item.highlight}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Help */}
        <div className="mt-8 text-center bg-[#e8e4d6] border border-[rgba(23,22,42,0.12)] p-6 sm:p-8 rounded-3xl space-y-3 shadow-sm">
          <div className="font-display font-bold text-lg text-[#17162a]">
            Have a question about your specific business?
          </div>
          <p className="text-xs sm:text-sm text-[#423f52] max-w-lg mx-auto font-sans leading-relaxed">
            Book a quick, friendly 15-minute chat with us to get free advice on your website and Google ranking.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs px-6 py-2.5 rounded-xl transition-all shadow-md"
          >
            <span>Book A Quick 15-Min Chat</span>
          </button>
        </div>
      </div>
    </section>
  );
}
