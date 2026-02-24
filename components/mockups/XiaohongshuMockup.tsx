"use client";

import { motion } from "framer-motion";

export function XiaohongshuMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="phone-frame w-[280px] sm:w-[320px] overflow-hidden"
    >
      {/* Notch */}
      <div className="h-7 bg-slate-800 flex items-center justify-center">
        <div className="w-20 h-5 rounded-full bg-slate-900" />
      </div>

      {/* App header - Xiaohongshu style */}
      <div className="px-4 py-3 border-b border-slate-700/50 bg-slate-800/80 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
          小
        </div>
        <div className="flex-1">
          <div className="h-2 w-16 rounded bg-slate-600" />
          <div className="h-1.5 w-24 rounded bg-slate-700 mt-1" />
        </div>
      </div>

      {/* Feed - #1 ranking post */}
      <div className="p-3 bg-slate-900 min-h-[420px]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
          <div className="flex-1">
            <div className="h-3 w-20 rounded bg-slate-600" />
            <div className="h-2 w-28 rounded bg-slate-700 mt-1" />
          </div>
          <div className="px-2 py-0.5 rounded bg-red-500/80 text-white text-[10px] font-bold">
            #1
          </div>
        </div>

        {/* Post image area - Korea food + beauty */}
        <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50">
          <div className="aspect-[4/3] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-900/40 via-slate-800 to-amber-900/30" />
            <div className="absolute bottom-2 left-2 right-2 flex gap-2">
              <span className="px-2 py-0.5 rounded bg-black/50 text-white text-[10px]">
                서울 맛집
              </span>
              <span className="px-2 py-0.5 rounded bg-black/50 text-white text-[10px]">
                K뷰티
              </span>
            </div>
            <div className="absolute top-2 right-2 w-6 h-6 rounded bg-white/20 flex items-center justify-center text-white text-xs">
              ♥
            </div>
          </div>
        </div>

        <div className="mt-2 space-y-1">
          <div className="h-2.5 w-full rounded bg-slate-700" />
          <div className="h-2.5 w-3/4 rounded bg-slate-700" />
        </div>

        <div className="mt-3 flex gap-2">
          <div className="h-6 w-14 rounded-full bg-slate-700" />
          <div className="h-6 w-14 rounded-full bg-slate-700" />
          <div className="h-6 w-14 rounded-full bg-slate-700" />
        </div>

        {/* Second post preview */}
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-600 shrink-0" />
            <div className="flex-1">
              <div className="h-2 w-16 rounded bg-slate-600" />
              <div className="h-12 w-full rounded-lg bg-slate-700/80 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
