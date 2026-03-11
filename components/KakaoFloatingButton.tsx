"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * 카카오톡 채널 플로팅 버튼
 * 실제 배포 시 아래 KAKAO_CHANNEL_URL의 [채널ID]를 실제 카카오 채널 ID로 교체하세요.
 * 예: https://pf.kakao.com/_xabcd
 */
const KAKAO_CHANNEL_URL = "#"; // TODO: 실제 채널 ID 적용 시 예) "https://pf.kakao.com/_xabcd"

export function KakaoFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative group">
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className="absolute bottom-full right-0 mb-2 px-3 py-2 rounded-lg bg-slate-800 text-white text-xs font-medium whitespace-nowrap shadow-lg border border-white/10"
        >
          카카오로 빠른 상담
        </motion.div>
      )}
      <a
        href={KAKAO_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="카카오로 빠른 상담"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow shrink-0"
        style={{ backgroundColor: "#FEE500" }}
      >
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#191919]"
          aria-hidden
        >
          <path
            d="M14 2C7.373 2 2 6.477 2 12c0 4.2 2.8 7.9 6.9 9.9l-1.8 5.6c-.1.4.3.7.7.5l6.2-4.2c.8.1 1.7.2 2.6.2 6.627 0 12-4.477 12-10S20.627 2 14 2z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
