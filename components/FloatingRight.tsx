"use client";

import { StickyCta } from "./StickyCta";
import { Chatbot } from "./Chatbot";

/** 우측 하단 플로팅: 무료 전략 받기 + 챗봇 */
export function FloatingRight() {
  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]"
      aria-label="상담 신청 및 문의"
    >
      <StickyCta />
      <Chatbot />
    </div>
  );
}
