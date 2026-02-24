"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

export function NaverPlaceMockup() {
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
          <MapPin className="w-3.5 h-3.5 text-green-300" />
        </div>
        <span className="text-xs font-medium text-slate-200">네이버 플레이스</span>
      </div>
      <div className="p-3 bg-slate-900 min-h-[380px]">
        <div className="h-8 w-3/4 rounded bg-slate-700 mb-4" />
        <div className="space-y-3">
          {[
            { rank: 1, name: "우리식당", score: "4.9", review: "128" },
            { rank: 2, name: "맛있는집", score: "4.8", review: "95" },
            { rank: 3, name: "동네카페", score: "4.7", review: "72" },
          ].map((item, i) => (
            <div
              key={item.rank}
              className={`flex gap-3 p-3 rounded-xl border ${
                i === 0
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-slate-800/80 border-slate-700/50"
              }`}
            >
              <div
                className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                  i === 0 ? "bg-green-500 text-white" : "bg-slate-600 text-slate-400"
                }`}
              >
                {item.rank}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-200">
                    {item.name}
                  </span>
                  <span className="flex items-center gap-0.5 text-amber-400 text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    {item.score}
                  </span>
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  리뷰 {item.review} · 1페이지 노출
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
