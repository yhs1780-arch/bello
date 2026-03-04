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

          {/* 필터 탭 */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
            {CASE_FILTER_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all break-keep ${
                  filter === tab
                    ? "bg-[#FFD700] text-[#0B1120]"
                    : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 3열 블로그 카드 그리드 */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ delay: Math.min(i * 0.03, 0.3) }}
                  className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-[#FFD700]/30 hover:bg-white/[0.07] transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/60 text-xs font-medium text-white backdrop-blur-sm break-keep">
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2 break-keep leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-[#FFD700] text-sm font-semibold mb-2 break-keep">
                      {item.metrics}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 break-keep">
                      {item.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-12 break-keep">
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
