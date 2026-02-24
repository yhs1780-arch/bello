"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

const MESSAGES = [
  "방금 마포구 음식점에서 무료 진단을 신청했습니다.",
  "현재 12명의 원장님이 상담을 대기 중입니다.",
  "오늘 하루 1,024명이 BELLO의 솔루션을 확인했습니다.",
  "강남 성형외과에서 무료 컨설팅을 신청했습니다.",
  "이번 주 47건의 무료 진단 신청이 접수되었습니다.",
  "위례 샤브샤브 사장님이 BELLO와 상담을 진행 중입니다.",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function LiveToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => {
      setMessage(pickRandom(MESSAGES));
      setVisible(true);
      const hideTimer = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(hideTimer);
    };

    const firstDelay = 5000 + Math.random() * 5000;
    const interval = 5000 + Math.random() * 5000;

    const t1 = setTimeout(show, firstDelay);
    const t2 = setInterval(show, interval);

    return () => {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, []);

  return (
    <div className="fixed bottom-20 left-4 z-40 pointer-events-none sm:bottom-6">
      <AnimatePresence>
        {visible && message && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/10 shadow-xl max-w-[min(320px,calc(100vw-2rem))]"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 shrink-0">
              <Bell className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-snug break-keep">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
