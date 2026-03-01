"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";

const AGENCY_ITEMS = [
  "하청에 하청을 거치는 불투명한 중간 마진",
  "당일 수정 불가, 한 세월 걸리는 핑퐁 소통",
  "실사용자인지 매크로인지 알 수 없는 블랙박스 로직",
  "문제 발생 시 책임 떠넘기기",
];

const BELLO_ITEMS = [
  "대행사 마진 ZERO, 실행사 다이렉트 합리적 단가",
  "전담 매니저 배정으로 10분 이내 즉각 피드백",
  "100% 실제 유저 기반, 어뷰징(블라인드) 리스크 0%",
  "로직 변화에 맞춘 선제적 대응 및 투명한 리포트 제공",
];

const METRICS = [
  { value: "0원", label: "중간 마진" },
  { value: "3배 UP", label: "피드백 속도" },
  { value: "0건", label: "어뷰징 제재" },
];

export function ComparisonTable() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative w-full max-w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto min-w-0">
        {/* [1] 섹션 헤더 */}
        <motion.div
          className="text-center mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-5 break-keep">
            왜 수많은 브랜드가 대행사를 버리고 BELLO를 선택할까요?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            불투명한 수수료, 느린 소통, 어뷰징 리스크. 이제 BELLO가 마케팅 생태계의 거품을 걷어냅니다.
          </p>
        </motion.div>

        {/* [2] Split VS 카드 */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 min-w-0">
          {/* 중앙 VS 뱃지 (PC에서만 카드 사이에) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.span
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
              className="w-14 h-14 rounded-full bg-slate-800 border-2 border-white/20 flex items-center justify-center text-white font-bold text-sm shadow-xl"
            >
              VS
            </motion.span>
          </div>

          {/* 모바일용 VS (상단) */}
          <div className="flex lg:hidden justify-center -mb-2">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/20 flex items-center justify-center text-white font-bold text-xs"
            >
              VS
            </motion.span>
          </div>

          {/* 왼쪽 카드 - 기존 대행사 */}
          <motion.div
            className="relative flex-1 min-w-0 rounded-2xl border border-gray-800 bg-slate-900/50 p-5 sm:p-6 lg:p-8 overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30">
                주의
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-300 mb-6 pr-16 break-keep">
              기존 대행사 구조
            </h3>
            <ul className="space-y-4">
              {AGENCY_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed break-keep">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 오른쪽 카드 - BELLO (스크롤 시 scale-105) */}
          <motion.div
            className="relative flex-1 min-w-0 rounded-2xl border border-blue-500/50 bg-blue-900/20 p-5 sm:p-6 lg:p-8 overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-500/30 text-blue-300 border border-blue-500/50">
                BEST
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-6 pr-16 break-keep">
              BELLO 다이렉트 실행
            </h3>
            <ul className="space-y-4">
              {BELLO_ITEMS.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200 text-sm leading-relaxed break-keep">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* [3] 하단 신뢰도 메트릭 */}
        <motion.div
          className="grid grid-cols-3 gap-4 mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {METRICS.map((m, i) => (
            <div
              key={i}
              className="glass rounded-xl border border-white/10 px-4 py-5 text-center"
            >
              <p className="text-xl sm:text-2xl font-bold text-white break-keep">
                {m.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 break-keep">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
