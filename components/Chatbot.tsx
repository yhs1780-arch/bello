"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { CompanyName } from "./CompanyName";

type Message = { role: "bot" | "user"; text: string };

const GREETING_TEXT = "안녕하세요, 벨로컴퍼니입니다. 무료 매출진단·비용·진행 절차·플랫폼별 견적이 궁금하시면 말씀해 주세요.";
const BOT_REPLIES: Record<string, string> = {
  비용: "비용은 플랫폼, 목표 건수, 기간에 따라 맞춤 견적을 드립니다. 대행 수수료 없이 실행 단가만 적용됩니다. 무료 매출진단은 하단 '무료 매출진단 받기' 폼을 이용해 주세요.",
  "매출진단": "무료 매출진단은 하단 '무료 매출진단 받기' 폼에서 이름·연락처·이메일·업종을 남겨 주시면 담당자가 매출 구조와 개선 포인트를 분석해 연락드립니다.",
  견적: "맞춤 견적이 필요하시면 페이지 하단 '문의 폼'에서 이름·연락처·이메일·업종·문의 내용을 남겨 주세요. 빠르게 확인 후 연락드리겠습니다.",
  진행: "진행 절차는 ① 상담 및 목표 설정 → ② 플랫폼·캠페인 기획 → ③ 실사용자 풀 매칭 및 실행 → ④ 주기적 리포팅 및 피드백입니다. 보통 2주 내 착수 가능합니다.",
  절차: "진행 절차는 ① 상담 및 목표 설정 → ② 플랫폼·캠페인 기획 → ③ 실사용자 풀 매칭 및 실행 → ④ 주기적 리포팅 및 피드백입니다. 보통 2주 내 착수 가능합니다.",
  문의: "문의하신 내용은 하단 Footer의 문의 폼(이름·연락처·이메일·업종·문의 내용)으로 남겨 주시면 담당자가 확인 후 연락드립니다.",
  기본: "관련해서는 하단 '문의 폼'에서 구체적인 내용을 남겨 주시면 담당자가 확인 후 맞춤 안내를 드리겠습니다. 비용·진행 절차는 위에서 안내해 드린 내용을 참고해 주세요.",
};

function getReply(input: string): string {
  const lower = input.replace(/\s/g, "").toLowerCase();
  if (/매출진단|진단/.test(lower)) return BOT_REPLIES["매출진단"];
  if (/비용|얼마|가격|단가/.test(lower)) return BOT_REPLIES.비용;
  if (/견적|quote/.test(lower)) return BOT_REPLIES.견적;
  if (/진행|절차|과정|스텝/.test(lower)) return BOT_REPLIES.진행;
  if (/문의|연락|상담/.test(lower)) return BOT_REPLIES.문의;
  return BOT_REPLIES.기본;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: GREETING_TEXT }]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: getReply(text) }]);
    }, 600);
  };

  const quickReplies = ["무료 매출진단", "비용 문의", "진행 절차"];

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
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed bottom-20 right-6 z-50 w-[calc(100vw-3rem)] max-w-md h-[520px] rounded-2xl glass-strong border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/20">
                  <Bot className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    <span className="whitespace-nowrap">벨로컴퍼니</span> 상담
                  </h3>
                  <p className="text-xs text-slate-400">무료 매출진단·비용·견적 문의</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-blue-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-white/10 text-slate-200 rounded-bl-md border border-white/5"
                    }`}
                  >
                    {i === 0 && msg.role === "bot" ? (
                      <>
                        안녕하세요, <CompanyName />입니다. 무료 매출진단·비용·진행 절차·플랫폼별 견적이 궁금하시면 말씀해 주세요.
                      </>
                    ) : (
                      msg.text
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-lg bg-slate-600 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                {quickReplies.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      setInput(label);
                      inputRef.current?.focus();
                    }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-slate-200 hover:bg-white/15 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}

            <div className="p-4 border-t border-white/10 shrink-0 space-y-2">
              <a
                href="#footer"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" }), 100);
                }}
                className="block text-center py-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
              >
                문의 폼에서 상세 문의하기
              </a>
              <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="메시지를 입력하세요"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
              />
              <button
                type="button"
                onClick={send}
                className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shrink-0"
                aria-label="전송"
              >
                <Send className="w-5 h-5" />
              </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        aria-label="챗봇 열기"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </>
  );
}
