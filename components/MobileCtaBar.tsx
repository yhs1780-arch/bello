"use client";

import Link from "next/link";

/** 모바일 전용 하단 고정 CTA 바 */
export function MobileCtaBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] bg-[#FFD600] border-t border-black/10">
      <Link
        href="#consulting-form"
        data-cta="mobile_free_strategy_report"
        className="block w-full py-3.5 rounded-xl font-bold text-center text-[#0B0F1A] hover:bg-black/5 transition-colors"
      >
        지금 무료 전략 받기 →
      </Link>
    </div>
  );
}
