"use client";

import React, { useState, useEffect } from "react";
import { Currency, CURRENCY_RATES } from "@/lib/utils";
import { ArrowUpRight, Check, Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  onOpenBooking: () => void;
}

export default function Navbar({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Live clocks for target international business locations
  const [londonTime, setLondonTime] = useState("");
  const [nyTime, setNyTime] = useState("");
  const [sydneyTime, setSydneyTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const updateClocks = () => {
      const now = new Date();
      setLondonTime(
        now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      setNyTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
      setSydneyTime(
        now.toLocaleTimeString("en-AU", {
          timeZone: "Australia/Sydney",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("growthsaarthi.startup@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const navLinks = [
    { label: "Our Work", href: "#work" },
    { label: "Free Check", href: "#audit" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "How It Works", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Operations HUD Ticker */}
      <div className="w-full bg-[#14131f] border-b border-white/[0.08] text-xs font-mono py-1.5 px-4 hidden md:block overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[#9a97ab] whitespace-nowrap gap-4">
          <div className="flex items-center gap-4 lg:gap-6 shrink-0">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#e8a33d] animate-studio-pulse shrink-0"></span>
              <span className="text-[#f1efe6] font-medium">STATUS:</span>
              <span className="text-[#e8a33d]">Taking New Projects (2 Spots Left)</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-3 lg:gap-4">
              <span className="flex items-center gap-1.5">
                <span className="text-white/40">London:</span>
                <span className="text-[#f1efe6]">{londonTime || "09:30"} GMT</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-white/40">New York:</span>
                <span className="text-[#f1efe6]">{nyTime || "04:30"} EST</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-white/40">Sydney:</span>
                <span className="text-[#f1efe6]">{sydneyTime || "19:30"} AEST</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5 text-white/60">
              <Globe className="w-3.5 h-3.5 text-[#2ba88f] shrink-0" />
              <span>US, UK, AU &amp; CA Hours</span>
            </div>
            <button
              onClick={copyEmail}
              className="text-[#e8a33d] hover:underline flex items-center gap-1 shrink-0"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#e8a33d]" />
                  <span className="text-white font-sans">Email Copied!</span>
                </>
              ) : (
                <span>growthsaarthi.startup@gmail.com</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`w-full transition-all duration-200 ${
          scrolled
            ? "bg-[#14131f] border-b border-white/[0.12] py-3 shadow-2xl"
            : "bg-[#14131f] border-b border-white/[0.08] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#201e30] border border-white/10 group-hover:border-[#e8a33d]/50 rounded-xl flex items-center justify-center transition-colors">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-none stroke-[#e8a33d] stroke-2"
              >
                <circle cx="12" cy="12" r="7" stroke="#e8a33d" strokeWidth="2"/>
                <path d="M12 2 L12 6" stroke="#2ba88f" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="1.8" fill="#e8a33d"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-[#f1efe6] group-hover:text-white transition-colors">
                Sarrthi <span className="text-[#f0c179]">Instant</span>
              </span>
              <span className="text-[11px] font-sans text-[#9a97ab]">
                Websites &amp; Google SEO
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#201e30] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-sans font-medium text-[#9a97ab] hover:text-[#f1efe6] hover:bg-white/[0.06] rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 bg-[#201e30] hover:bg-[#2a2740] border border-white/[0.08] text-xs font-sans font-medium px-3 py-2 rounded-xl text-[#f1efe6] transition-colors"
                title="Select preferred currency"
              >
                <span className="text-[#e8a33d] font-bold">
                  {CURRENCY_RATES[currentCurrency].symbol}
                </span>
                <span>{currentCurrency}</span>
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-[#201e30] border border-white/10 rounded-xl shadow-xl py-1 z-50">
                  {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        onCurrencyChange(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-sans flex items-center justify-between hover:bg-white/[0.07] ${
                        currentCurrency === curr
                          ? "text-[#e8a33d] font-bold"
                          : "text-[#9a97ab]"
                      }`}
                    >
                      <span>{CURRENCY_RATES[curr].label}</span>
                      {currentCurrency === curr && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#e8a33d] hover:bg-[#f0c179] text-[#14131f] font-sans font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
            >
              <span>Book A Free Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenBooking}
              className="bg-[#e8a33d] text-[#14131f] text-xs font-bold px-3 py-1.5 rounded-lg"
            >
              Free Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9a97ab] hover:text-white bg-[#201e30] border border-white/10 rounded-xl"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#14131f] border-b border-white/10 px-4 py-5 mt-3 space-y-4">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono pb-3 border-b border-white/10">
              <div className="bg-[#201e30] p-2.5 rounded-lg border border-white/5">
                <span className="text-white/40 block text-[10px]">London (GMT)</span>
                <span className="text-[#f1efe6] font-bold">{londonTime || "09:30"}</span>
              </div>
              <div className="bg-[#201e30] p-2.5 rounded-lg border border-white/5">
                <span className="text-white/40 block text-[10px]">New York (EST)</span>
                <span className="text-[#f1efe6] font-bold">{nyTime || "04:30"}</span>
              </div>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-sans text-[#9a97ab] hover:text-[#f0c179] hover:bg-white/[0.04] rounded-lg"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-sans text-[#9a97ab]">Currency:</span>
              <div className="flex gap-1.5">
                {(Object.keys(CURRENCY_RATES) as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      onCurrencyChange(curr);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2.5 py-1 text-xs font-sans rounded ${
                      currentCurrency === curr
                        ? "bg-[#e8a33d] text-[#14131f] font-bold"
                        : "bg-[#201e30] text-[#9a97ab]"
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#e8a33d] text-[#14131f] font-sans font-bold text-center py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <span>Book A Free 15-Min Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
