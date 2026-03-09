"use client";

import { HeroSliderTrustBar } from "@/components/landing/HeroSliderTrustBar";
import { PlatformMarquee } from "@/components/landing/PlatformMarquee";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { CaseSection } from "@/components/landing/CaseSection";
import { PlatformStrategySection } from "@/components/landing/PlatformStrategySection";
import { IndustryChannelSection } from "@/components/landing/IndustryChannelSection";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";
import { ConsultingForm } from "@/components/ConsultingForm";
import { FaqSection } from "@/components/landing/FaqSection";
import { CompanyIntroSection } from "@/components/landing/CompanyIntroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] overflow-x-hidden max-w-full w-full">
      <HeroSliderTrustBar />
      <PlatformMarquee />
      <ProblemSection />
      <SolutionSection />
      <CaseSection />
      <PlatformStrategySection />
      <IndustryChannelSection />
      <UnifiedCTASection />
      <ProcessSection />
      <TestimonialMarquee />
      <ConsultingForm />
      <FaqSection />
      <CompanyIntroSection />
    </div>
  );
}
