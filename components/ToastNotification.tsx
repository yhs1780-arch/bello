"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ALERTS = [
  {
    title: "신규 상담 신청",
    message: "방금 강남 피부과 원장님이 무료 전략을 신청하셨습니다",
    time: "방금 전",
  },
  {
    title: "실시간 현황 업데이트",
    message: "조금 전 마포구 카페 사장님 계정의 플레이스 노출이 상승했습니다",
    time: "1분 전",
  },
  {
    title: "신규 상담 신청",
    message: "방금 분당 학원 원장님이 채널 전략 상담을 신청하셨습니다",
    time: "방금 전",
  },
  {
    title: "성과 리포트 도착",
    message: "역삼 헬스장 4주차 리포트가 업데이트되었습니다",
    time: "2분 전",
  },
  {
    title: "신규 문의 접수",
    message: "홍대 네일샵 원장님이 인스타 실행 전략을 요청하셨습니다",
    time: "방금 전",
  },
];

const INITIAL_DELAY = 5000;
const NOTIFY_DURATION = 4000;
const NOTIFY_INTERVAL = 15000;
const EXIT_ANIMATION_MS = 350;

export function ToastNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const visibleStartRef = useRef(0);
  const remainingVisibleMsRef = useRef(NOTIFY_DURATION);

  const clearAllTimers = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    if (nextTimerRef.current) clearTimeout(nextTimerRef.current);
    if (startTimerRef.current) clearTimeout(startTimerRef.current);
    hideTimerRef.current = null;
    nextTimerRef.current = null;
    startTimerRef.current = null;
  }, []);

  const scheduleHide = useCallback((ms: number) => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      nextTimerRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % ALERTS.length);
        remainingVisibleMsRef.current = NOTIFY_DURATION;
        visibleStartRef.current = Date.now();
        setVisible(true);
        scheduleHide(NOTIFY_DURATION);
      }, NOTIFY_INTERVAL + EXIT_ANIMATION_MS);
    }, ms);
  }, []);

  useEffect(() => {
    if (dismissed) {
      clearAllTimers();
      setVisible(false);
      return;
    }

    startTimerRef.current = setTimeout(() => {
      remainingVisibleMsRef.current = NOTIFY_DURATION;
      visibleStartRef.current = Date.now();
      setVisible(true);
      scheduleHide(NOTIFY_DURATION);
    }, INITIAL_DELAY);

    return () => clearAllTimers();
  }, [dismissed, clearAllTimers, scheduleHide]);

  const handleMouseEnter = () => {
    if (!visible || dismissed) return;
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    const elapsed = Date.now() - visibleStartRef.current;
    remainingVisibleMsRef.current = Math.max(200, remainingVisibleMsRef.current - elapsed);
  };

  const handleMouseLeave = () => {
    if (!visible || dismissed) return;
    visibleStartRef.current = Date.now();
    scheduleHide(remainingVisibleMsRef.current);
  };

  const handleClose = () => {
    clearAllTimers();
    setVisible(false);
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="fixed right-5 z-[9999] hidden min-[481px]:block pointer-events-none" style={{ top: 76 }}>
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={index}
            initial={{ x: 56, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-xl flex gap-3 items-start w-[340px] relative pointer-events-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              background: "#1a2035",
              border: "1px solid #2a3347",
              borderLeft: "4px solid #FFD600",
              padding: "16px 20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="알림 닫기"
              className="absolute top-2.5 right-2.5 w-6 h-6 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              ✕
            </button>
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
              style={{ background: "rgba(255,214,0,0.13)" }}
            >
              🔔
            </div>
            <div className="min-w-0 flex-1 pr-6">
              <p className="font-bold mb-1.5" style={{ fontSize: 14, color: "#FFD600" }}>
                {ALERTS[index].title}
              </p>
              <p className="leading-snug" style={{ fontSize: 15, color: "#E5E7EB", lineHeight: 1.5 }}>
                {ALERTS[index].message}
              </p>
              <p className="mt-1.5" style={{ fontSize: 13, color: "#6B7280" }}>
                {ALERTS[index].time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
