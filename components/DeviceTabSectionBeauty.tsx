"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Stethoscope, MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const TABS = [
  { id: "xiaohongshu", label: "샤오홍슈", icon: Camera },
  { id: "gangnam", label: "강남언니", icon: Stethoscope },
  { id: "babitalk", label: "바비톡", icon: MessageCircle },
];

const CONTENTS: Record<string, { title: string; desc: string }> = {
  xiaohongshu: { title: "샤오홍슈 K-뷰티 관광 코스", desc: "의료법 리스크 제로. 맛집+관광+뷰티를 엮은 체류형 관광 코스 기획." },
  gangnam: { title: "강남언니", desc: "알고리즘을 태우는 실사용자 기반 리얼 리뷰 시딩. 신규 내원·예약 전환." },
  babitalk: { title: "바비톡", desc: "뷰티·의료 베스트 리뷰. 실인력 기반 별점·후기로 검색 상위 유지." },
};

export function DeviceTabSectionBeauty() {
  const [active, setActive] = useState("xiaohongshu");
  const content = CONTENTS[active];

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 break-keep">플랫폼별 실행 역량</h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            샤오홍슈·강남언니·바비톡 등 뷰티·의료 채널을 한 팀에서 설계·실행합니다.
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
                    active === tab.id ? "bg-white/10 border-amber-500/50 text-white shadow-lg shadow-amber-500/10" : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"
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
