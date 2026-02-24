"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Store, Sparkles, Shirt } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const TABS = [
  { id: "coupang", label: "쿠팡", icon: ShoppingBag },
  { id: "smartstore", label: "스마트스토어", icon: Store },
  { id: "hwahae", label: "화해", icon: Sparkles },
  { id: "musinsa", label: "무신사", icon: Shirt },
];

const CONTENTS: Record<string, { title: string; desc: string }> = {
  coupang: { title: "쿠팡 베스트·포토 리뷰", desc: "실구매 기반 포토 리뷰 시딩으로 1페이지 진입·ROAS 상승." },
  smartstore: { title: "스마트스토어", desc: "만점 유지·리뷰 시딩으로 검색 상위·전환율 동시 확보." },
  hwahae: { title: "화해·글로우픽", desc: "뷰티 앱 랭킹 진입 시딩. 코스메틱·스킨케어 타겟." },
  musinsa: { title: "무신사", desc: "패션·스트릿웨어 타겟 포토 리뷰로 브랜드 인지도 상승." },
};

export function DeviceTabSectionCommerce() {
  const [active, setActive] = useState("coupang");
  const content = CONTENTS[active];

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 break-keep">플랫폼별 실행 역량</h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            쿠팡·스마트스토어·화해·무신사 등 커머스 채널을 한 팀에서 설계·실행합니다.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-left transition-all duration-300 break-keep ${
                    active === tab.id ? "bg-white/10 border-blue-500/50 text-white shadow-lg shadow-blue-500/10" : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                  }`}
                >
                  <tab.icon className="w-5 h-5 shrink-0" />
                  {tab.label}
                </button>
              ))}
            </div>
            <motion.div className="relative shrink-0 order-1 lg:order-2" initial={false}>
              <div className="rounded-[2.5rem] border-[10px] border-slate-700 bg-slate-900 shadow-2xl overflow-hidden w-[280px] sm:w-[320px] aspect-[9/19]">
                <div className="h-full flex flex-col bg-slate-800/50 p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col justify-center"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 break-keep">{content.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed break-keep">{content.desc}</p>
                      <div className="mt-6 grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="aspect-square rounded-xl bg-white/10 border border-white/10" />
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
