"use client";

import { Nav } from "@/components/landing/Nav";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustStatsBar } from "@/components/landing/TrustStatsBar";
import { PlatformMarquee } from "@/components/landing/PlatformMarquee";
import { PainSection } from "@/components/landing/PainSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { CaseSection } from "@/components/landing/CaseSection";
import { IndustryChannelSection } from "@/components/landing/IndustryChannelSection";
import { PlatformTabsSection } from "@/components/landing/PlatformTabsSection";
import { TimelineSection } from "@/components/landing/TimelineSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { ConsultingForm } from "@/components/ConsultingForm";
import { FaqSection } from "@/components/landing/FaqSection";
import { CompanyIntroSection } from "@/components/landing/CompanyIntroSection";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { ToastNotification } from "@/components/ToastNotification";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] overflow-x-hidden max-w-full w-full min-w-0">
      <Nav />
      <HeroSection />
      <PlatformMarquee />
      <TrustStatsBar />
      <PainSection />
      <SolutionSection />
      <CaseSection />
      <IndustryChannelSection />
      <PlatformTabsSection />
      <TimelineSection />
      <TestimonialsSection />
      <UnifiedCTASection />
      <ConsultingForm />
      <FaqSection />
      <CompanyIntroSection />
      <MobileCtaBar />
      <ToastNotification />
    </div>
  );
}
