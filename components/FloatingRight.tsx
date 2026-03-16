"use client";

import { Chatbot } from "./Chatbot";

/** 우측 하단 플로팅: 챗봇 (비용·진행절차·견적 문의 대화형) */
export function FloatingRight() {
  return (
    <div
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]"
      aria-label="챗봇 상담"
    >
      <Chatbot />
    </div>
  );
}
