"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot, User } from "lucide-react";
import { CompanyName } from "./CompanyName";

type Message = { role: "bot" | "user"; text: string };

const GREETING_TEXT = "안녕하세요, 벨로컴퍼니입니다. 궁금한 점을 아래 버튼에서 선택해 주세요.";

const FAQ_CHIPS: { label: string; answer: string }[] = [
  {
    label: "비용/단가 문의",
    answer:
      "비용은 플랫폼(네이버 플레이스, 샤오홍슈, 쿠팡 등), 목표 건수, 기간에 따라 맞춤 견적을 드립니다. 대행 수수료 없이 실행 단가만 적용됩니다. 무료 매출진단은 하단 '무료 컨설팅 신청' 폼을 이용해 주세요.",
  },
  {
    label: "마케팅 진행 절차",
    answer:
      "진행 절차는 ① 상담 및 목표 설정 → ② 플랫폼·캠페인 기획 → ③ 실사용자 풀 매칭 및 실행 → ④ 주기적 리포팅 및 피드백입니다. 보통 2주 내 착수 가능합니다.",
  },
  {
    label: "어떤 플랫폼이 가능한가요?",
    answer:
      "네이버 플레이스, 바비톡·강남언니·화해, 당근마켓, 샤오홍슈, 카카오맵, 스마트스토어, 쿠팡, 요기요, 에어비앤비, 무신사, 블라인드, 캐치테이블 등 국내외 100+ 매체 로직을 보유하고 있습니다. 업종에 맞는 플랫폼을 제안해 드립니다.",
  },
  {
    label: "계약 기간이 있나요?",
    answer:
      "캠페인 목표와 예산에 따라 유연하게 설정 가능합니다. 단기(1~3개월)부터 장기 연간 계약까지 맞춤 제안드리며, 별도 서면 계약 시 구체적인 기간이 정해집니다.",
  },
  {
    label: "어뷰징/블라인드 걱정은 없나요?",
    answer:
      "BELLO는 100% 실제 유저 기반으로 실행합니다. 어뷰징(블라인드) 리스크 0%를 원칙으로 하며, 플랫폼 정책에 맞춘 안전한 시딩만 진행합니다.",
  },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: "bot", text: GREETING_TEXT }]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMessages([{ role: "bot", text: GREETING_TEXT }]);
  };

  const onChipClick = (label: string, answer: string) => {
    setMessages((m) => [...m, { role: "user", text: label }]);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: answer }]);
    }, 400);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
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
                  <h3 className="font-semibold text-white break-keep">
                    <span className="whitespace-nowrap"><CompanyName /></span> 상담
                  </h3>
                  <p className="text-xs text-slate-400 break-keep">무료 매출진단·비용·견적 문의</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
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
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm break-keep ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-white/10 text-slate-200 rounded-bl-md border border-white/5"
                    }`}
                  >
                    {i === 0 && msg.role === "bot" ? (
                      <>
                        안녕하세요, <CompanyName />입니다. 궁금한 점을 아래 버튼에서 선택해 주세요.
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

            <div className="px-4 pb-4 pt-2 border-t border-white/10 shrink-0 flex flex-wrap gap-2">
              {FAQ_CHIPS.map(({ label, answer }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => onChipClick(label, answer)}
                  className="px-3 py-2 rounded-full text-xs font-medium bg-white/10 border border-white/10 text-slate-200 hover:bg-white/15 hover:border-white/20 transition-colors break-keep"
                >
                  {label}
                </button>
              ))}
              <a
                href="#consulting-form"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => document.getElementById("consulting-form")?.scrollIntoView({ behavior: "smooth" }), 100);
                }}
                className="w-full mt-2 block text-center py-2 text-xs text-blue-400 hover:text-blue-300 transition-colors break-keep"
              >
                문의 폼에서 상세 문의하기
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={handleOpen}
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
