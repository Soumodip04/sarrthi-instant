"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowUpRight, Check, Copy, Mail, MessageSquare, ShieldCheck, Sparkles, Send } from "lucide-react";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    budget: "$2,500 – $5,000",
    timeline: "This Month",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("growthsaarthi.startup@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-[#14131f] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-sans text-[#f0c179] bg-[#e8a33d]/15 px-3.5 py-1 rounded-full border border-[#e8a33d]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#e8a33d]" />
            <span>LET&apos;S TALK ABOUT YOUR PROJECT</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#f1efe6] tracking-tight">
            Ready To Get A Fast Website That <br />
            <span className="text-[#f0c179]">Brings You More Customers?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9a97ab] font-sans">
            Pick a time on our calendar for a friendly chat, or send a message below and we&apos;ll get right back to you.
          </p>
        </div>

        {/* 2-Column Conversion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels & Calendar Card (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Instant Calendar Booking Card */}
            <div className="bg-[#201e30] border border-[#e8a33d]/40 p-6 sm:p-7 rounded-3xl space-y-4 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold text-[#f0c179] uppercase">
                  FASTEST OPTION: LIVE CALENDAR
                </span>
                <span className="text-[10px] font-sans text-[#2ba88f] bg-[#2ba88f]/10 px-2 py-0.5 rounded-md border border-[#2ba88f]/30">
                  Slots Open
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Book A Free 15-Min Call
                </h3>
                <p className="text-xs text-[#9a97ab] font-sans leading-relaxed">
                  Pick a convenient time directly on our calendar. We&apos;ll check your website and share practical tips to get you more calls and sales.
                </p>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
              >
                <span>Pick A Time On The Calendar</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] font-sans text-white/50 text-center">
                Automatically shows times in your local timezone
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="bg-[#201e30] border border-white/[0.08] p-6 sm:p-7 rounded-3xl space-y-3.5">
              <div className="text-xs font-sans font-bold text-white uppercase tracking-wider">
                OR CONTACT US DIRECTLY
              </div>

              <div className="space-y-2.5 text-xs font-sans">
                {/* Email Copy Box */}
                <div className="flex items-center justify-between bg-[#2a2740] p-3 rounded-xl border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-[#f1efe6]/90">
                    <Mail className="w-4 h-4 text-[#e8a33d]" />
                    <span>growthsaarthi.startup@gmail.com</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs text-[#e8a33d] hover:underline flex items-center gap-1 font-medium"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#2ba88f]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                {/* WhatsApp Quick Link */}
                <a
                  href="https://wa.me/447400000000?text=Hi%20Sarrthi%20Instant,%20I'm%20interested%20in%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#2a2740] hover:bg-[#34304e] p-3 rounded-xl border border-white/[0.06] text-[#f1efe6]/90 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#2ba88f]" />
                    <span>Chat on WhatsApp</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
                </a>
              </div>

              <div className="pt-1 text-xs font-sans text-[#9a97ab] flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2ba88f]" />
                <span>Zero sales pressure &middot; Just helpful advice</span>
              </div>
            </div>
          </div>

          {/* Direct Scope Intake Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#201e30] border border-white/[0.08] p-6 sm:p-7 rounded-3xl space-y-5">
            <div className="border-b border-white/[0.08] pb-3">
              <span className="text-xs font-sans font-bold text-[#f0c179] uppercase">
                SEND A MESSAGE
              </span>
              <h3 className="font-display font-bold text-xl text-[#f1efe6] mt-0.5">
                Tell Us About Your Business
              </h3>
            </div>

            {submitted ? (
              <div className="bg-[#2a2740] border border-[#e8a33d]/50 p-8 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#e8a33d]/20 text-[#e8a33d] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 text-[#2ba88f]" />
                </div>
                <h4 className="font-display font-bold text-2xl text-white">
                  Message Received!
                </h4>
                <p className="text-xs sm:text-sm font-sans text-[#9a97ab] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We will review your message and reply with preliminary ideas within 4 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-sans text-[#e8a33d] underline pt-2 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-sans text-[#9a97ab]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-[#e8a33d]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-sans text-[#9a97ab]">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@yourbusiness.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-[#e8a33d]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-sans text-[#9a97ab]">
                    Current Website (if you have one)
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourbusiness.com"
                    value={formState.website}
                    onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                    className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-[#e8a33d]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-sans text-[#9a97ab]">Estimated Budget</label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#e8a33d]"
                    >
                      <option value="$2,500 – $5,000">$2,500 – $5,000 (Complete Website)</option>
                      <option value="$1,800/mo">$1,800/mo (Monthly Google SEO)</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000 (Full Package)</option>
                      <option value="Not Sure Yet">Not Sure Yet / Let&apos;s Discuss</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-sans text-[#9a97ab]">When would you like to start?</label>
                    <select
                      value={formState.timeline}
                      onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                      className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#e8a33d]"
                    >
                      <option value="This Month">Immediately (This Month)</option>
                      <option value="Next Month">Next Month</option>
                      <option value="Just Exploring">Just Exploring Ideas</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-sans text-[#9a97ab]">
                    Tell us briefly what you want to achieve
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. We need a modern, fast website that helps us get more local inquiries and rank better on Google."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#2a2740] border border-white/10 rounded-xl p-3.5 text-xs sm:text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:border-[#e8a33d]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-sm py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>Send Message &amp; Get Free Review</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
