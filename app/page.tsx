"use client";

import { HeroSliderTrustBar } from "@/components/landing/HeroSliderTrustBar";
import { PlatformMarquee } from "@/components/landing/PlatformMarquee";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { CaseSection } from "@/components/landing/CaseSection";
import { PlatformFilterSection } from "@/components/landing/PlatformFilterSection";
import { ServiceCategorySection } from "@/components/landing/ServiceCategorySection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";
import { ConsultingForm } from "@/components/ConsultingForm";
import { FaqSection } from "@/components/landing/FaqSection";
import { CompanyIntroSection } from "@/components/landing/CompanyIntroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1120] overflow-x-hidden max-w-full w-full">
      <HeroSliderTrustBar />
      <PlatformMarquee />
      <ProblemSection />
      <SolutionSection />
      <CaseSection />
      <PlatformFilterSection />
      <ServiceCategorySection />
      <ProcessSection />
      <TestimonialMarquee />
      <ConsultingForm />
      <FaqSection />
      <CompanyIntroSection />
    </div>
  );
}
