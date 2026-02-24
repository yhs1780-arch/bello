"use client";

import { motion } from "framer-motion";
import { Star, Image } from "lucide-react";

export function CoupangMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="phone-frame w-[280px] sm:w-[300px] overflow-hidden"
    >
      <div className="h-6 bg-slate-800" />
      <div className="px-3 py-2 border-b border-slate-700/50 bg-blue-900/20 flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-blue-500/50" />
        <span className="text-xs font-medium text-slate-200">쿠팡 베스트 리뷰</span>
      </div>
      <div className="p-3 bg-slate-900 min-h-[400px]">
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/80 overflow-hidden">
          <div className="p-3 border-b border-slate-700/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-xs text-slate-400">포토 리뷰 1,234건</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-slate-700/80 flex items-center justify-center"
                >
                  <Image className="w-6 h-6 text-slate-500" />
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 space-y-2">
            <div className="h-2.5 w-full rounded bg-slate-600" />
            <div className="h-2.5 w-4/5 rounded bg-slate-700" />
            <div className="flex gap-2 mt-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                실구매 인증
              </span>
              <span className="text-[10px] text-slate-500">1페이지 노출</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
