"use client";

import { motion } from "framer-motion";

const PAINS = [
  { emoji: "💸", title: "높은 대행 수수료", text: "예산은 적은데 수수료만 떼이나요?" },
  { emoji: "🤖", title: "기계적 공장식 운영", text: "매장 상황을 무시한 똑같은 방식" },
  { emoji: "📉", title: "알맹이 없는 보고서", text: "숫자만 잔뜩, 다음 액션이 없는 결과" },
  { emoji: "🤷‍♂️", title: "엉뚱한 진단", text: "중요한 메뉴 놔두고 쓸데없는 키워드 타겟팅" },
  { emoji: "🐢", title: "답답한 소통", text: "당일 수정 불가, 연락 안 되는 담당자" },
  { emoji: "🚨", title: "비전문가의 1인 작업", text: "한 명이 전부 다 해서 떨어지는 퀄리티" },
];

export function PainSection() {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#0B0F1A" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep mb-8 sm:mb-12"
        >
          광고비는 계속 쓰는데, 왜 매출은 그대로일까요?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PAINS.map(({ emoji, title, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-t-[3px] hover:border-t-[#FFD600] transition-all text-center"
            >
              <span className="text-2xl sm:text-3xl block mb-3" role="img" aria-hidden>
                {emoji}
              </span>
              <h3 className="text-slate-200 font-semibold text-sm sm:text-base mb-1 break-keep">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed break-keep">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 p-5 sm:p-7 rounded-2xl text-center"
          style={{ backgroundColor: "#FFD600" }}
        >
          <p className="text-black font-bold text-xl sm:text-2xl lg:text-[24px] leading-snug break-keep">
            벨로컴퍼니는 이 6가지 문제를
            <br />
            하나도 하지 않습니다.
          </p>
          <p className="text-black text-base sm:text-lg mt-2 break-keep">
            아래에서 실행 구조를 확인하세요 ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
