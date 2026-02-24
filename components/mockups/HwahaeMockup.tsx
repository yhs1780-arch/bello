"use client";

import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

export function HwahaeMockup() {
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

      <div className="p-3 bg-slate-900 min-h-[420px]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-pink-500/30 flex items-center justify-center">
            <Award className="w-4 h-4 text-pink-400" />
          </div>
          <div>
            <div className="h-3 w-20 rounded bg-slate-600" />
            <div className="h-2 w-28 rounded bg-slate-700 mt-1" />
          </div>
        </div>

        <div className="rounded-xl border border-slate-700/50 bg-slate-800/80 overflow-hidden">
          <div className="p-3 border-b border-slate-700/50 bg-pink-500/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-pink-300">
                스킨케어 랭킹
              </span>
              <span className="px-1.5 py-0.5 rounded bg-pink-500/30 text-white text-[10px] font-bold">
                1위
              </span>
            </div>
          </div>
          <div className="p-3 space-y-3">
            {[
              { rank: 1, name: "세럼 A", tag: "실사용자 리뷰 2,340" },
              { rank: 2, name: "크림 B", tag: "실사용자 리뷰 1,890" },
              { rank: 3, name: "토너 C", tag: "실사용자 리뷰 1,562" },
            ].map((item, i) => (
              <div
                key={item.rank}
                className={`flex gap-3 p-2 rounded-lg ${
                  i === 0
                    ? "bg-pink-500/10 border border-pink-500/20"
                    : "bg-slate-800/50"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold shrink-0 ${
                    i === 0 ? "bg-pink-500 text-white" : "bg-slate-600 text-slate-400"
                  }`}
                >
                  {item.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-200">
                    {item.name}
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-[10px] text-slate-500">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
