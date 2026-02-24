"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** 모바일(sm 이하)에서만 화면 최하단 고정 CTA */
export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 safe-area-pb sm:hidden pointer-events-none">
      <div className="pointer-events-auto">
        <Link
          href="/#consulting-form"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-lg shadow-blue-500/30 border border-white/10"
        >
          무료 매장 진단받기
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
