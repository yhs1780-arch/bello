"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, ChevronUp, TrendingUp, Users, CheckCircle, Store } from "lucide-react";

const STATS = [
  { label: "월 관리 매장", value: "300+", icon: Store },
  { label: "평균 매출 상승", value: "280%", icon: TrendingUp },
  { label: "재계약률", value: "97%", icon: CheckCircle },
  { label: "누적 상담", value: "10,000+", icon: Users },
];

export function FloatingStatusBar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-20 left-4 z-50 sm:bottom-24 sm:left-6"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute bottom-full left-0 mb-2 w-64 rounded-xl glass-strong border border-white/10 shadow-xl overflow-hidden pointer-events-auto"
          >
            <p className="px-4 py-3 text-xs font-semibold text-slate-400 border-b border-white/5 break-keep flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#FFD700]" />
              실시간 효과 &amp; 현황
            </p>
            <ul className="py-3 px-4 space-y-3">
              {STATS.map(({ label, value, icon: Icon }) => (
                <li key={label} className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-2 text-slate-400 text-sm">
                    <Icon className="w-4 h-4 text-[#FFD700]/80 shrink-0" />
                    {label}
                  </span>
                  <span className="text-[#FFD700] font-bold text-sm tabular-nums">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-4 py-3 rounded-full glass-strong border border-white/10 shadow-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors break-keep"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <BarChart3 className="w-4 h-4 shrink-0 text-[#FFD700]" />
        <span>효과 &amp; 현황</span>
        <ChevronUp
          className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </motion.button>
    </div>
  );
}
