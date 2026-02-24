"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, HelpCircle, DollarSign, ListOrdered } from "lucide-react";

const faqItems = [
  {
    q: "비용은 어떻게 산정되나요?",
    a: "플랫폼(네이버 플레이스, 샤오홍슈, 쿠팡 등), 목표 건수, 기간에 따라 맞춤 견적을 드립니다. 대행 수수료 없이 실행 단가만 적용됩니다.",
    icon: DollarSign,
  },
  {
    q: "진행 절차는 어떻게 되나요?",
    a: "1) 상담 및 목표 설정 → 2) 플랫폼·캠페인 기획 → 3) 실사용자 풀 매칭 및 실행 → 4) 주기적 리포팅 및 피드백. 보통 2주 내 착수 가능합니다.",
    icon: ListOrdered,
  },
];

export function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-md rounded-2xl glass-strong border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <HelpCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">비용·진행 절차 FAQ</h3>
                  <p className="text-xs text-slate-400">궁금한 점을 빠르게 확인하세요</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="flex gap-3">
                    <item.icon className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white text-sm mb-1">
                        {item.q}
                      </p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/5">
              <p className="text-xs text-slate-500 mb-2">
                맞춤 견적이 필요하시면 하단 Footer의 문의 폼을 이용해 주세요.
              </p>
              <a
                href="#footer"
                onClick={() => setOpen(false)}
                className="block text-center py-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                문의 폼으로 이동
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        aria-label="챗봇 열기"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </>
  );
}
