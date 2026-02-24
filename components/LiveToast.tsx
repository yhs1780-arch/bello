"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

const MESSAGES = [
  "방금 마포구 음식점에서 무료 진단을 신청했습니다.",
  "현재 12명의 원장님이 상담을 대기 중입니다.",
  "오늘 하루 1,024명이 BELLO의 솔루션을 확인했습니다.",
  "강남구 성형외과에서 컨설팅을 신청했습니다.",
  "현재 8명의 대표님이 포트폴리오를 열람 중입니다.",
  "어제 마포구 F&B 매장의 계약이 완료되었습니다.",
  "이번 달 100개 매체 시딩 TO가 3자리 남았습니다.",
  "방금 온라인 코스메틱 브랜드의 문의가 접수되었습니다.",
  "위례 샤브샤브 사장님이 BELLO와 상담을 진행 중입니다.",
  "이번 주 47건의 무료 진단 신청이 접수되었습니다.",
  "강남 피부과 원장님이 무료 매출진단을 요청했습니다.",
  "서초구 카페 프랜차이즈 상담이 오늘 오후 예정입니다.",
  "패션 쇼핑몰 대표님이 견적 문의를 남기셨습니다.",
  "현재 5곳의 F&B 업체가 계약 검토 중입니다.",
  "방금 홍대 인근 음식점에서 플레이스 최적화 문의가 들어왔습니다.",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function LiveToast() {
  const [message, setMessage] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const scheduleNext = () => {
      const delayMs = 10000 + Math.random() * 20000;
      timeoutRef.current = setTimeout(() => {
        setMessage(pickRandom(MESSAGES));
        setVisible(true);
        hideTimer = setTimeout(() => {
          setVisible(false);
          scheduleNext();
        }, 4000);
      }, delayMs);
    };

    const firstDelay = 10000 + Math.random() * 20000;
    timeoutRef.current = setTimeout(() => {
      setMessage(pickRandom(MESSAGES));
      setVisible(true);
      hideTimer = setTimeout(() => {
        setVisible(false);
        scheduleNext();
      }, 4000);
    }, firstDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed top-24 right-4 z-40 pointer-events-none sm:top-20 sm:right-6">
      <AnimatePresence>
        {visible && message && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
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
