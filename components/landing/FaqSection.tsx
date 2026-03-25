"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import type { ReactNode } from "react";

type FAQItem = { q: string; a: ReactNode };

const FAQ_ITEMS: FAQItem[] = [
  {
    q: "정말로 손님이 늘어날까요?",
    a: (
      <>
        100% 실제 반응을 모아 홍보합니다. 97%의 높은 재계약률이 증명합니다.
        <br />
        성과가 없으면 저희도 재계약을 받을 수 없습니다.
      </>
    ),
  },
  {
    q: "효과를 보려면 얼마나 걸리나요?",
    a: "대부분 실행 시작 후 2~3주 내 순위 변화가 감지되고, 4주차부터 전화 문의·예약 증가를 체감하십니다. 업종과 현재 매장 상태에 따라 다를 수 있어 무료 상담 시 예상 일정을 함께 안내드립니다.",
  },
  {
    q: "계약은 어떻게 진행되나요?",
    a: (
      <>
        무료 상담 → 매장 진단 → 맞춤 전략 제안 → 계약 순서로 진행됩니다.
        <br />
        장기 계약 강요는 없으며, 월 단위로 진행해 성과를 확인하며 연장 여부를 결정하실 수 있습니다.
      </>
    ),
  },
  {
    q: "가게에 피해가 가는 일은 없나요?",
    a: "계정 정지 위험이 있는 불법 프로그램을 절대 사용하지 않습니다. 100% 실제 반응 기반의 안전한 방식으로만 운영하며, 네이버 정책 변화도 실시간 모니터링합니다.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5 overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center break-keep mb-2">
          자주 묻는 질문
        </h2>
        <p className="text-slate-400 text-center text-sm mb-10 break-keep">
          상담 전 가장 많이 물어보시는 질문들입니다
        </p>
        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 min-h-[48px] text-left text-white font-medium text-sm sm:text-base break-keep"
              >
                <span>Q. {item.q}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: 500, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
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
        </div>
      </div>
    </section>
  );
}
