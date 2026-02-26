"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";

/** 챗봇 버튼 위에 배치되는 '무료 진단 신청' 플로팅 CTA */
export function FloatingCtaInquiry() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-20 right-6 z-[60] sm:bottom-24"
    >
      <Link
        href="#consulting-form"
        className="flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm sm:text-base shadow-lg border border-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl break-keep bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 shadow-blue-500/40"
      >
        <ClipboardCheck className="w-5 h-5 shrink-0" />
        <span className="whitespace-nowrap">무료 진단 신청</span>
      </Link>
    </motion.div>
  );
}
