"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { MapPin, MessageCircle, Camera, Star } from "lucide-react";

const TABS = [
  { id: "naver", label: "네이버 플레이스", icon: MapPin, color: "text-green-400" },
  { id: "daangn", label: "당근마켓", icon: MessageCircle, color: "text-orange-400" },
  { id: "xiaohongshu", label: "샤오홍슈", icon: Camera, color: "text-red-400" },
  { id: "commerce", label: "커머스 리뷰", icon: Star, color: "text-amber-400" },
];

const CONTENTS: Record<string, { title: string; desc: string }> = {
  naver: {
    title: "네이버 플레이스",
    desc: "영수증·예약 기반 리뷰로 검색 1페이지 안착. 블라인드 리스크 제로화.",
  },
  daangn: {
    title: "당근마켓·동네생활",
    desc: "단골 랭킹·경험담 바이럴로 지역 신뢰도와 오프라인 유입을 동시에.",
  },
  xiaohongshu: {
    title: "샤오홍슈 K-뷰티",
    desc: "관광 코스 스토리텔링으로 의료법 준수하며 해외 환자 유입.",
  },
  commerce: {
    title: "커머스 리뷰 시딩",
    desc: "화해·쿠팡·스마트스토어 실사용자 포토 리뷰로 1페이지·ROAS 상승.",
  },
};

export function DeviceTabSection() {
  const [active, setActive] = useState("naver");
  const content = CONTENTS[active];

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 break-keep">
            핵심 전략
          </h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            타겟이 있는 모든 곳에 BELLO의 인프라가 있습니다.
            <br className="hidden md:block" />
            국내외 100+ 매체 로직 완벽 분석 및 브랜드 타겟 맞춤형 매체 믹스 설계.
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
                    active === tab.id
                      ? "bg-white/10 border-blue-500/50 text-white shadow-lg shadow-blue-500/10"
                      : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                  }`}
                >
                  <tab.icon className={`w-5 h-5 shrink-0 ${active === tab.id ? tab.color : ""}`} />
                  {tab.label}
                </button>
              ))}
            </div>
            <motion.div
              className="relative shrink-0 order-1 lg:order-2"
              initial={false}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
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
                      <h3 className="text-lg font-semibold text-white mb-2 break-keep">
                        {content.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed break-keep">
                        {content.desc}
                      </p>
                      <div className="mt-6 grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="aspect-square rounded-xl bg-white/10 border border-white/10"
                          />
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
