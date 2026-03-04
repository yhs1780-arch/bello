"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "정말로 손님이 늘어날까요?",
    a: "100% 실제 반응을 모아 홍보합니다. 97%의 높은 재계약률이 증명합니다.",
  },
  {
    q: "효과를 보려면 얼마나 걸리나요?",
    a: "업종에 따라 다르지만 보통 2~4주 내에 뚜렷한 변화를 확인하실 수 있습니다.",
  },
  {
    q: "계약은 어떻게 진행되나요?",
    a: "매장 진단 후 꼭 필요한 맞춤형 플랜만 제안해 드립니다. 필요한 채널만 선택하실 수 있습니다.",
  },
  {
    q: "가게에 피해가 가는 일은 없나요?",
    a: "계정이 멈추거나 정보가 지워지는 불법 꼼수는 절대 쓰지 않으니 안심하셔도 됩니다.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-white text-center break-keep mb-10 sm:mb-12"
        >
          자주 묻는 질문
        </motion.h2>
        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-white font-medium break-keep"
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
        </div>
      </div>
    </section>
  );
}
