"use client";

import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";

export function SmartstoreMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="phone-frame w-[280px] sm:w-[300px] overflow-hidden"
    >
      <div className="h-6 bg-slate-800" />
      <div className="px-3 py-2 border-b border-slate-700/50 bg-green-900/20 flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-green-500/50 flex items-center justify-center">
          <ShoppingBag className="w-3.5 h-3.5 text-green-300" />
        </div>
        <span className="text-xs font-medium text-slate-200">스마트스토어</span>
      </div>
      <div className="p-3 bg-slate-900 min-h-[400px]">
        <div className="rounded-xl border border-slate-700/50 bg-slate-800/80 overflow-hidden">
          <div className="p-4 border-b border-slate-700/50">
            <div className="h-16 w-full rounded-lg bg-slate-700/60 mb-4" />
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">상품 평점</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="text-sm font-bold text-slate-100 ml-1">
                  5.0
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-emerald-500/10 border-t border-emerald-500/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center">
                <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-300">
                  평점 만점
                </div>
                <div className="text-[10px] text-slate-400">
                  실사용자 리뷰 기반
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
