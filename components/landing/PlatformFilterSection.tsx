"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TABS = [
  { id: "all", label: "전체" },
  { id: "medical", label: "병원/의료" },
  { id: "beauty", label: "뷰티/시술" },
  { id: "fnb", label: "F&B/식당" },
  { id: "health", label: "헬스/학원" },
  { id: "commerce", label: "커머스" },
];

const PLACEHOLDER_COUNT = 6;

export function PlatformFilterSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center break-keep mb-10 sm:mb-12"
        >
          사장님의 가게, 화면에 이렇게 매력적으로 보입니다.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all break-keep ${
                activeTab === tab.id
                  ? "bg-[#FFD700] text-[#0B1120]"
                  : "bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
            >
              <div className="w-full max-w-[180px] mx-auto bg-gray-800 aspect-[9/16] rounded-xl flex items-center justify-center border border-white/10">
                <span className="text-slate-500 text-xs">이미지 영역</span>
              </div>
              <p className="text-slate-500 text-xs mt-2 break-keep">
                전/후 비교 목업
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
