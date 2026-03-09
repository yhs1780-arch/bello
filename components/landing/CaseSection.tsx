"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, X, ArrowRight } from "lucide-react";

const KPI = [
  { label: "누적 캠페인", value: "10,000+" },
  { label: "평균 매출 상승", value: "280%" },
  { label: "재계약률", value: "97%" },
];

const CASES = [
  {
    id: 1,
    name: "OO한의원",
    main: "22위 → 12위 수직 상승 (진행 4주 차)",
    sub: "길찾기 및 전화 문의 대폭 상승",
    detail: "한의원 특성에 맞춰 네이버 플레이스 키워드와 메뉴 구성부터 손봤습니다. 4주 만에 순위가 크게 올라 길찾기·전화 문의가 눈에 띄게 늘었습니다.",
  },
  {
    id: 2,
    name: "OO치과",
    main: "11위 → 5위 쾌속 달성 (진행 3주 차)",
    sub: "네이버 예약률 급증",
    detail: "예약 버튼 노출과 리뷰 관리에 집중한 결과, 3주 만에 상위권 진입과 함께 네이버 예약 문의가 크게 증가했습니다.",
  },
  {
    id: 3,
    name: "OO헬스장",
    main: "14위 → 8위 안전하게 안착 (진행 5주 차)",
    sub: "동네 노출 및 방문 상담 증가",
    detail: "지역 검색어와 사진·운영 팀이 협업해 동네에서 우리 헬스장이 더 잘 보이도록 세팅했습니다. 방문 상담이 늘어났습니다.",
  },
];

export function CaseSection() {
  const [modalCase, setModalCase] = useState<typeof CASES[0] | null>(null);

  return (
    <section id="case-section" className="relative w-full py-10 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 bg-[#0B1120] overflow-hidden">
      <div className="max-w-6xl mx-auto min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep mb-6 sm:mb-8"
        >
          긴말하지 않겠습니다. 단 몇 주 만에 만들어낸 사장님들의 성과입니다.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-2 sm:gap-6 mb-8 sm:mb-16"
        >
          {KPI.map(({ label, value }, i) => (
            <div
              key={i}
              className="text-center py-3 sm:py-4 px-1 sm:px-2 rounded-lg sm:rounded-xl bg-white/5 border border-white/10"
            >
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#FFD700] tabular-nums">{value}</p>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5 sm:mt-1 break-keep">{label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
          {CASES.map((c, i) => (
            <motion.button
              key={c.id}
              type="button"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setModalCase(c)}
              className="text-left p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 hover:border-emerald-500/40 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold text-white">{c.name}</span>
              </div>
              <p className="text-white font-medium text-sm sm:text-base mb-1 break-keep">{c.main}</p>
              <p className="text-slate-400 text-sm break-keep">{c.sub}</p>
              <p className="text-slate-500 text-xs mt-3 break-keep">클릭하면 상세 보기</p>
            </motion.button>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8 sm:mt-10 break-keep">
          ※ 상세한 성과 캡처 화면 및 전후 비교 자료는 상담 시 투명하게 공개해 드립니다.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-16 flex justify-center"
        >
          <Link
            href="/cases"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-[#FFD700] bg-transparent text-[#FFD700] font-bold text-sm sm:text-lg hover:bg-[#FFD700]/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-5px_rgba(255,215,0,0.3)] break-keep"
          >
            <span className="relative">
              벨로컴퍼니의 압도적 성과 사례 30+ 더보기
            </span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {modalCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalCase(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-white/10 rounded-2xl p-5 sm:p-8 max-w-md w-full shadow-2xl mx-2 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white break-keep">{modalCase.name}</h3>
                <button
                  type="button"
                  onClick={() => setModalCase(null)}
                  className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[#FFD700] font-medium mb-2 break-keep">{modalCase.main}</p>
              <p className="text-slate-400 text-sm mb-4 break-keep">{modalCase.sub}</p>
              <p className="text-slate-300 text-sm leading-relaxed break-keep">{modalCase.detail}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
