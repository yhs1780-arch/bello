"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** 플로팅 CTA: "무료 전략 받기" (FloatingRight 내부에서 사용) */
export function StickyCta() {
  return (
    <Link
      href="#consulting-form"
      className="flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold shadow-lg shadow-amber-500/30 border border-amber-400/30 hover:bg-[#FFE44D] hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_rgba(255,215,0,0.5)] transition-all duration-300 break-keep shrink-0"
      aria-label="무료 전략 받기"
    >
      무료 전략 받기
      <ArrowRight className="w-5 h-5 shrink-0" />
    </Link>
  );
}
