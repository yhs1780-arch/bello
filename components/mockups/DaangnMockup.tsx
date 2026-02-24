"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function DaangnMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="phone-frame w-[280px] sm:w-[300px] overflow-hidden"
    >
      <div className="h-6 bg-slate-800" />
      <div className="px-3 py-2 border-b border-slate-700/50 bg-orange-900/20 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-orange-500/50 flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 text-orange-300" />
        </div>
        <span className="text-xs font-medium text-slate-200">당근마켓 단골</span>
      </div>
      <div className="p-3 bg-slate-900 min-h-[380px]">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs text-slate-400">우리 동네 단골 랭킹</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300">
            마포구
          </span>
        </div>
        <div className="space-y-2">
          {[
            { rank: 1, name: "맛집 A", count: "단골 340" },
            { rank: 2, name: "카페 B", count: "단골 218" },
            { rank: 3, name: "미용실 C", count: "단골 195" },
          ].map((item, i) => (
            <div
              key={item.rank}
              className={`flex items-center gap-3 p-3 rounded-xl ${
                i === 0
                  ? "bg-orange-500/10 border border-orange-500/30"
                  : "bg-slate-800/80 border border-slate-700/50"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i === 0 ? "bg-orange-500 text-white" : "bg-slate-600 text-slate-400"
                }`}
              >
                {item.rank}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-slate-200">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-500">{item.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
