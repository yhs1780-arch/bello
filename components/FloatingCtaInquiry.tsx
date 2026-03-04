"use client";

import Link from "next/link";
import { ClipboardCheck } from "lucide-react";

/** '무료 진단 신청' 플로팅 CTA (FloatingRight 내부에서 사용) */
export function FloatingCtaInquiry() {
  return (
    <Link
      href="#consulting-form"
      className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm sm:text-base shadow-lg border border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl break-keep bg-white/10 text-white hover:bg-white/15 border-white/20 shrink-0"
    >
      <ClipboardCheck className="w-5 h-5 shrink-0" />
      <span className="whitespace-nowrap">무료 진단 신청</span>
    </Link>
  );
}
