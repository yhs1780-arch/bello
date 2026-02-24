"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const FAQ_ITEMS = [
  {
    q: "의료법에 걸리지 않나요?",
    a: "BELLO는 과대·과장 광고를 하지 않습니다. 샤오홍슈·인스타에서는 ‘관광·체험·맛집’ 관점으로만 콘텐츠를 기획해, 병원을 직접 광고하지 않고도 자연스럽게 노출됩니다. 강남언니·바비톡 등 국내 채널도 실사용자 기반 리뷰만 시딩해 의료법을 준수합니다.",
  },
  {
    q: "중국인 환자 유치 진짜 되나요?",
    a: "네. 샤오홍슈 K-뷰티 관광 코스 스토리텔링으로 중국·동남아 등 해외 유입 사례가 많습니다. ‘한국 맛집 + 뷰티·시술 경험’을 한 스토리로 엮어 병원을 직접 광고하지 않고도 검색·추천 노출이 늘어납니다. 무료 진단으로 현재 채널 상태를 파악한 뒤 제안드립니다.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4 break-keep">자주 묻는 질문</h2>
        </ScrollReveal>
        <ScrollReveal className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="glass rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-slate-100 font-medium break-keep"
              >
                <span>Q. {item.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-2 break-keep">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
