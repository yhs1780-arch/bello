"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { casesData, CASE_FILTER_TABS, type CaseFilterCategory } from "@/lib/casesData";

export default function CasesPage() {
  const [filter, setFilter] = useState<CaseFilterCategory>("전체");

  const filtered = useMemo(() => {
    if (filter === "전체") return casesData;
    return casesData.filter((c) => c.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen pt-16 bg-[#0B1120] w-full max-w-full overflow-x-hidden">
      <section className="relative w-full max-w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto min-w-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#FFD700] mb-8 transition-colors break-keep"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 sm:mb-10"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 break-keep">
              압도적 성과 사례 30+
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl break-keep">
              플랫폼별·업종별 실제 진행 사례입니다. 숫자와 전략으로 증명합니다.
            </p>
          </motion.div>

          {/* 플랫폼 필터: 선택 시 골드·비선택 시 네이비 테두리 */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
            {CASE_FILTER_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all break-keep ${
                  filter === tab
                    ? "bg-[#FFD700] text-black font-bold"
                    : "border border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 카드 그리드: 1열 → md 2열 → lg 3열, gap-6 */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <Link key={item.id} href={`/cases/${item.id}`}>
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ delay: Math.min(i * 0.03, 0.3) }}
                    className="group rounded-2xl overflow-hidden bg-[#111827] border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
                  >
                    {/* 이미지 영역: 비율 4:3 고정, 상단만 라운드 */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl bg-slate-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt=""
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#FFD700] px-3 py-1 rounded-full text-sm font-bold break-keep">
                        {item.badge}
                      </span>
                    </div>

                    {/* 텍스트 영역: 짙은 네이비, 하단만 라운드 */}
                    <div className="bg-[#111827] p-6 rounded-b-2xl">
                      <h4 className="text-[#FFD700] font-bold mb-2 break-keep">
                        {item.metrics}
                      </h4>
                      <h3 className="text-white font-bold line-clamp-2 break-keep leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mt-3 break-keep leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-slate-500 text-xs mt-3 break-keep">
                        클릭하면 상세 분석 보기
                      </p>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-12 break-keep">
              해당 플랫폼 사례가 없습니다.
            </p>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-14 sm:mt-16 text-center"
          >
            <Link
              href="/#consulting-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold hover:bg-[#FFE44D] transition-colors break-keep"
            >
              우리 가게도 진단받기
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
