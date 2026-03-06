"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  getShowcaseItemsForTab,
  SHOWCASE_TABS,
  type ShowcaseCategoryId,
} from "@/lib/showcaseFilterData";

export function PlatformFilterSection() {
  const [activeTab, setActiveTab] = useState<ShowcaseCategoryId>("all");
  const displayedItems = getShowcaseItemsForTab(activeTab);

  return (
    <section className="relative w-full py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep mb-6 sm:mb-12"
        >
          사장님의 가게, 화면에 이렇게 매력적으로 보입니다.
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
          {SHOWCASE_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all break-keep ${
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {displayedItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full max-w-[200px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* 하단 어둡게 처리해 오버레이 텍스트 가독성 확보 */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 35%, transparent 65%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-semibold text-[#FFD700] drop-shadow-lg line-clamp-1 break-keep">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/95 drop-shadow-md line-clamp-1 break-keep mt-1">
                    {item.sub}
                  </p>
                </div>
              </div>
              <p className="text-slate-500 text-[10px] sm:text-xs mt-2 text-center break-keep px-1">
                전/후 비교·실제 진행 사례
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
