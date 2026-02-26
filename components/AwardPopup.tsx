"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award } from "lucide-react";

const STORAGE_KEY = "bello-award-popup-dismissed";
const DELAY_MS = 5000;
const SCROLL_TRIGGER_RATIO = 0.25;

function getTodayKey() {
  return new Date().toDateString();
}

function wasDismissedToday(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === getTodayKey();
  } catch {
    return false;
  }
}

function setDismissedToday() {
  try {
    localStorage.setItem(STORAGE_KEY, getTodayKey());
  } catch {}
}

export function AwardPopup() {
  const [visible, setVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const hasShownRef = useRef(false);

  const tryShow = useCallback(() => {
    if (hasShownRef.current || wasDismissedToday()) return;
    hasShownRef.current = true;
    setVisible(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(tryShow, DELAY_MS);
    return () => clearTimeout(timer);
  }, [tryShow]);

  useEffect(() => {
    const onScroll = () => {
      if (hasShownRef.current || wasDismissedToday()) return;
      const ratio = window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      if (ratio >= SCROLL_TRIGGER_RATIO) {
        hasShownRef.current = true;
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClose = () => {
    if (dontShowAgain) setDismissedToday();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            style={{
              background: "linear-gradient(165deg, #0f172a 0%, #020617 50%, #0c1222 100%)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 25px 50px -12px rgba(0,0,0,0.5), 0 0 80px -20px rgba(251,191,36,0.15), 0 0 40px -10px rgba(59,130,246,0.2)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-blue-500/10 pointer-events-none" />
            <div className="relative p-6 sm:p-8">
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400/20 to-blue-500/20 border border-amber-400/20 mb-6">
                  <Award className="w-8 h-8 text-amber-400/90" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 break-keep">
                  2024 대한민국 퍼스트 브랜드 대상 수상
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep mb-6">
                  데이터로 입증된 실제 매출 상승 효과,
                  <br className="block md:hidden" />
                  업계 1위의 품격
                </p>

                <label className="flex items-center gap-2 cursor-pointer mb-6 break-keep">
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-500/50"
                  />
                  <span className="text-xs sm:text-sm text-slate-400">오늘 하루 다시 보지 않기</span>
                </label>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-medium transition-colors break-keep"
                >
                  닫기
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
