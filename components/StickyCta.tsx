"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** 모바일(sm 이하)에서만 화면 최하단 고정 파란색 CTA 바(Sticky Bar) */
export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden pointer-events-none">
      <div className="pointer-events-auto border-t border-white/10 bg-slate-950/95 backdrop-blur-sm pt-3 -mt-3">
        <Link
          href="#consulting-form"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/30 border border-white/10 break-keep"
        >
          무료 매장 진단받기
          <ArrowRight className="w-5 h-5 shrink-0" />
        </Link>
      </div>
    </div>
  );
}
