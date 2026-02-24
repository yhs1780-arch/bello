"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export function CatchtableMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="phone-frame w-[280px] sm:w-[300px] overflow-hidden"
    >
      <div className="h-7 bg-slate-800 flex items-center justify-center">
        <div className="w-20 h-5 rounded-full bg-slate-900" />
      </div>

      <div className="p-4 bg-slate-900 min-h-[400px]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-amber-500/30 flex items-center justify-center">
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="h-3 w-24 rounded bg-slate-600" />
            <div className="h-2 w-32 rounded bg-slate-700 mt-1" />
          </div>
        </div>

        <div className="rounded-xl border border-slate-700/50 bg-slate-800/80 overflow-hidden">
          <div className="p-4 border-b border-slate-700/50">
            <div className="h-4 w-28 rounded bg-slate-600" />
            <div className="mt-2 h-3 w-full rounded bg-slate-700" />
            <div className="mt-1 h-3 w-2/3 rounded bg-slate-700" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between py-2">
              <span className="text-xs text-slate-400">대기 순번</span>
              <span className="text-sm font-semibold text-amber-400">12팀</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-700 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                style={{ width: "60%" }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-slate-500">
              <span>0</span>
              <span>예상 30분</span>
            </div>
          </div>
          <div className="p-3 bg-slate-800/50 border-t border-slate-700/50">
            <div className="h-9 w-full rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 text-sm font-medium">
              웨이팅 등록
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-xs text-slate-400">
            <span>오늘 웨이팅</span>
            <span className="text-slate-300">47팀</span>
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>이번 주 방문 리뷰</span>
            <span className="text-slate-300">23건</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
