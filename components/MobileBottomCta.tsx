"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** 모바일 전용 화면 최하단 고정 CTA: "지금 무료 전략 받기" */
export function MobileBottomCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden pointer-events-none"
      aria-hidden
    >
      <div className="pointer-events-auto border-t border-white/10 bg-[#0B1120]/95 backdrop-blur-sm pt-3 -mt-3">
        <Link
          href="#consulting-form"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold shadow-lg border border-amber-400/30 break-keep"
        >
          지금 무료 전략 받기
          <ArrowRight className="w-5 h-5 shrink-0" />
        </Link>
      </div>
    </div>
  );
}
