"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, Clock, Check, ArrowRight, Sparkles, Globe } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState("Tue, Aug 25");
  const [selectedTime, setSelectedTime] = useState("14:30 EST");
  const [selectedTz, setSelectedTz] = useState("America/New_York (EST)");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    goals: "Custom Website Build",
  });

  if (!isOpen) return null;

  const dates = [
    { label: "Mon, Aug 24", slots: 4 },
    { label: "Tue, Aug 25", slots: 3 },
    { label: "Wed, Aug 26", slots: 5 },
    { label: "Thu, Aug 27", slots: 2 },
    { label: "Fri, Aug 28", slots: 4 },
  ];

  const timeSlots = [
    "09:30 EST (14:30 London)",
    "11:00 EST (16:00 London)",
    "14:30 EST (19:30 London)",
    "16:00 EST (21:00 London)",
    "17:30 EST (22:30 London)",
  ];

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#201e30] border border-[#e8a33d]/40 w-full max-w-xl rounded-3xl p-6 sm:p-7 relative shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#9a97ab] hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-8">
          <div className="inline-flex items-center gap-2 text-xs font-sans text-[#f0c179] bg-[#e8a33d]/15 px-3 py-0.5 rounded-full border border-[#e8a33d]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#e8a33d]" />
            <span>FREE 15-MINUTE CALL</span>
          </div>
          <h3 className="font-display font-bold text-2xl text-white">
            Schedule A Free Chat
          </h3>
          <p className="text-xs font-sans text-[#9a97ab]">
            Friendly 15-min chat with our lead builder &middot; Zero sales pressure
          </p>
        </div>

        {/* STEP 1: DATE & TIME SELECTOR */}
        {step === 1 && (
          <div className="space-y-5">
            {/* Timezone Selector */}
            <div className="flex items-center justify-between text-xs font-sans bg-[#2a2740] p-3 rounded-xl border border-white/5">
              <span className="text-[#9a97ab] flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#2ba88f]" />
                <span>Your Timezone:</span>
              </span>
              <select
                value={selectedTz}
                onChange={(e) => setSelectedTz(e.target.value)}
                className="bg-transparent text-white font-sans focus:outline-none"
              >
                <option value="America/New_York (EST)" className="bg-[#201e30]">
                  New York (EST)
                </option>
                <option value="Europe/London (GMT)" className="bg-[#201e30]">
                  London (GMT)
                </option>
                <option value="Australia/Sydney (AEST)" className="bg-[#201e30]">
                  Sydney (AEST)
                </option>
                <option value="America/Los_Angeles (PST)" className="bg-[#201e30]">
                  Los Angeles (PST)
                </option>
              </select>
            </div>

            {/* Date Picker Strip */}
            <div className="space-y-2">
              <label className="text-xs font-sans text-[#9a97ab] uppercase font-semibold">
                1. PICK A CONVENIENT DAY
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {dates.map((d, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(d.label)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      selectedDate === d.label
                        ? "bg-[#2a2740] border-[#e8a33d] text-white shadow-md"
                        : "bg-[#1a1928] border-white/[0.06] text-[#9a97ab] hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-display font-bold text-white">
                      {d.label.split(",")[0]}
                    </div>
                    <div className="text-[11px] font-sans text-white/50">
                      {d.label.split(",")[1]}
                    </div>
                    <div className="text-[10px] font-sans text-[#f0c179] mt-0.5">
                      {d.slots} open
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-2">
              <label className="text-xs font-sans text-[#9a97ab] uppercase font-semibold">
                2. PICK A TIME SLOT
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {timeSlots.map((time, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-xl border text-left text-xs font-sans flex items-center justify-between transition-all ${
                      selectedTime === time
                        ? "bg-[#2a2740] border-[#e8a33d] text-white shadow-md"
                        : "bg-[#1a1928] border-white/[0.06] text-[#9a97ab] hover:border-white/20"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#e8a33d]" />
                      <span>{time}</span>
                    </span>
                    {selectedTime === time && <Check className="w-4 h-4 text-[#2ba88f]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Proceed to details */}
            <button
              onClick={() => setStep(2)}
              className="w-full bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <span>Next: Enter Contact Info</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: CLIENT DETAILS FORM */}
        {step === 2 && (
          <form onSubmit={handleBookingConfirm} className="space-y-3.5">
            <div className="bg-[#2a2740] p-3 rounded-xl border border-[#e8a33d]/30 flex items-center justify-between text-xs font-sans">
              <div>
                <span className="text-[#9a97ab]">Selected Time:</span>
                <span className="text-[#f0c179] font-bold ml-1.5">
                  {selectedDate} @ {selectedTime}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-white/50 hover:text-white underline font-medium"
              >
                Change
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-sans text-[#9a97ab]">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#e8a33d]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-sans text-[#9a97ab]">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="jordan@business.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#e8a33d]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-sans text-[#9a97ab]">Website (if you have one)</label>
              <input
                type="url"
                placeholder="https://yourbusiness.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#e8a33d]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-sans text-[#9a97ab]">What are you looking for?</label>
              <select
                value={formData.goals}
                onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                className="w-full bg-[#2a2740] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-sans text-white focus:outline-none focus:border-[#e8a33d]"
              >
                <option value="Complete Custom Website Build">Complete Custom Website Build ($2.8k)</option>
                <option value="Monthly Google SEO Growth">Monthly Google SEO Growth ($1.8k/mo)</option>
                <option value="Full Package (Website + SEO)">Full Package (Website + SEO) ($4.5k)</option>
                <option value="Website Speed Check & Questions">Free Website Check &amp; Questions</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md mt-3"
            >
              <span>Confirm Free 15-Min Call</span>
              <Check className="w-4 h-4 text-[#14131f]" />
            </button>
          </form>
        )}

        {/* STEP 3: CONFIRMATION RECEIPT */}
        {step === 3 && (
          <div className="bg-[#201e30] border border-[#e8a33d]/50 p-7 rounded-2xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#e8a33d]/20 text-[#e8a33d] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 text-[#2ba88f]" />
            </div>

            <div className="space-y-0.5">
              <h4 className="font-display font-bold text-xl text-white">
                Call Confirmed!
              </h4>
              <p className="text-xs font-sans text-[#f0c179] font-semibold">
                {selectedDate} @ {selectedTime} ({selectedTz})
              </p>
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#9a97ab] max-w-md mx-auto leading-relaxed">
              We have sent a Google Meet invitation to <strong className="text-white">{formData.email || "your email"}</strong>. We look forward to speaking with you!
            </p>

            <button
              onClick={onClose}
              className="bg-[#e8a33d] text-[#14131f] font-sans font-bold text-xs px-6 py-2.5 rounded-xl"
            >
              Back To Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
