"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function BabitalkGangnamMockup() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center flex-wrap">
      {/* Babitalk style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="phone-frame w-[260px] sm:w-[280px] overflow-hidden"
      >
        <div className="h-6 bg-slate-800" />
        <div className="px-3 py-2 border-b border-slate-700/50 bg-violet-900/20 flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-violet-500/50" />
          <span className="text-xs font-medium text-slate-200">바비톡 베스트</span>
        </div>
        <div className="p-3 bg-slate-900 min-h-[360px]">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="mb-3 p-3 rounded-xl bg-slate-800/80 border border-slate-700/50"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-[10px] text-slate-400">실사용자 인증</span>
              </div>
              <div className="h-2.5 w-full rounded bg-slate-600" />
              <div className="h-2.5 w-2/3 rounded bg-slate-700 mt-1" />
              <div className="mt-2 h-12 rounded-lg bg-slate-700/60" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Gangnam Unnie style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="phone-frame w-[260px] sm:w-[280px] overflow-hidden"
      >
        <div className="h-6 bg-slate-800" />
        <div className="px-3 py-2 border-b border-slate-700/50 bg-cyan-900/20 flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-cyan-500/50" />
          <span className="text-xs font-medium text-slate-200">강남언니 리뷰</span>
        </div>
        <div className="p-3 bg-slate-900 min-h-[360px]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-slate-400">시술 후기</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
              베스트
            </span>
          </div>
          <div className="space-y-2">
            {["피부과 레이저", "리프팅 시술", "클렌징"].map((label, i) => (
              <div
                key={label}
                className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50"
              >
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-lg bg-slate-700 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="h-2.5 w-20 rounded bg-slate-600" />
                    <div className="flex gap-0.5 mt-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="w-3 h-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <div className="h-2 w-full rounded bg-slate-700 mt-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
