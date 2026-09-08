"use client";

import React, { useState } from "react";
import { Currency } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import ProjectVault from "@/components/ProjectVault";
import AuditTool from "@/components/AuditTool";
import Services from "@/components/Services";
import InternationalOS from "@/components/InternationalOS";
import Process from "@/components/Process";
import ScopeEstimator from "@/components/ScopeEstimator";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f1efe6] text-[#17162a] flex flex-col font-sans selection:bg-[#e8a33d] selection:text-[#14131f]">
      {/* 1. Global Navigation with Timezone HUD & Currency Switcher */}
      <Navbar
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Orchestrated Flow */}
      <main className="flex-grow">
        {/* 2. High-Conviction Hero Section (Dark Signature Section) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Verified Impact & Global Client Hubs (Light Section) */}
        <TrustMarquee />

        {/* 4. Strategic Service Pillars (Light Section) */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 5. Interactive Visual Project Vault - Selected Work (Dark Signature Section) */}
        <ProjectVault onOpenBooking={handleOpenBooking} />

        {/* 6. 30-Second Interactive Live Website Audit Tool (Light Section) */}
        <AuditTool onOpenBooking={handleOpenBooking} />

        {/* 7. The 4-Phase Delivery Sprint / Process (Light Section) */}
        <Process onOpenBooking={handleOpenBooking} />

        {/* 8. The International Friction-Free Operating System (Light Warm Accent Section) */}
        <InternationalOS />

        {/* 9. Verified International Founder Testimonials (Light Section) */}
        <Testimonials />

        {/* 10. Interactive Sprint Scope & Investment Estimator (Light Section) */}
        <ScopeEstimator
          currentCurrency={currency}
          onOpenBooking={handleOpenBooking}
        />

        {/* 11. Transparent Sprint Pricing & Inclusions (Light Section with Featured Dark Card) */}
        <Pricing
          currentCurrency={currency}
          onOpenBooking={handleOpenBooking}
        />

        {/* 12. Objection Handling FAQ Accordion (Light Section) */}
        <FAQ onOpenBooking={handleOpenBooking} />

        {/* 13. Conversion Hub, Direct Channels & Intake Form (Dark Signature Section) */}
        <ContactSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* 14. Studio Footer (Dark Signature Footer) */}
      <Footer />

      {/* 15. Interactive 15-Minute Strategy Call Scheduler Modal */}
      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
