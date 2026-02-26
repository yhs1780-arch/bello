"use client";

import { HeroSection } from "@/components/HeroSection";
import { InfiniteMarquee } from "@/components/InfiniteMarquee";
import { ComparisonTable } from "@/components/ComparisonTable";
import { DeviceTabSection } from "@/components/DeviceTabSection";
import { DataDrivenSection } from "@/components/DataDrivenSection";
import { HowWeWorkStepper } from "@/components/HowWeWorkStepper";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { ConsultingForm } from "@/components/ConsultingForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <InfiniteMarquee />
      <ComparisonTable />
      <DeviceTabSection />
      <DataDrivenSection />
      <HowWeWorkStepper />
      <TestimonialCarousel />
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center border-t border-white/5">
        <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-100 break-keep">
          원장님, 사장님의 진짜 비즈니스 파트너.
          <br className="block md:hidden" />
          <br className="hidden md:block" />
          BELLO와 함께하시겠습니까?
        </p>
      </section>
      <ConsultingForm />
    </div>
  );
}
