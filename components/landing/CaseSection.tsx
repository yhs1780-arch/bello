"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const KPI = [
  { value: "10,000+", label: "누적 캠페인", sub: "실패 데이터도 반영" },
  { value: "280%", label: "평균 매출 상승", sub: "단순 노출이 아닌 매출 기준" },
  { value: "97%", label: "재계약률", sub: "성과 없으면 재계약도 없습니다" },
];

const CASES = [
  { name: "OO한의원", period: "4주차", rank: "22위 → 12위", result: "길찾기 및 전화 문의 대폭 상승" },
  { name: "OO치과", period: "3주차", rank: "11위 → 5위", result: "네이버 예약률 급증" },
  { name: "OO헬스장", period: "5주차", rank: "14위 → 8위", result: "동네 노출 및 방문 상담 증가" },
];

export function CaseSection() {
  return (
    <section id="case-section" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#0B0F1A" }}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep mb-2"
        >
          긴말하지 않겠습니다. 단 몇 주 만에 만들어낸 사장님들의 성과입니다.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-center text-sm sm:text-base mb-10 break-keep"
        >
          상세 캡처 자료는 상담 시 투명하게 공개드립니다
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {KPI.map(({ value, label, sub }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-4 px-4 rounded-xl bg-white/5 border border-white/10"
            >
              <p className="text-xl sm:text-2xl font-bold text-[#FFD700]">{value}</p>
              <p className="text-slate-300 text-sm font-medium mt-0.5">{label}</p>
              <p className="text-slate-500 text-xs mt-1">{sub}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#FFD600]/30 transition-colors"
              style={{
                background: "linear-gradient(145deg, rgba(8,35,42,0.72) 0%, rgba(8,22,37,0.86) 100%)",
                borderColor: "rgba(16,185,129,0.26)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 16px 34px rgba(2,12,27,0.35)",
              }}
            >
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/20 mb-3">
                업종
              </span>
              <h3 className="text-white font-bold text-lg">{c.name}</h3>
              <p className="text-slate-400 text-sm mt-1">진행 기간: {c.period}</p>
              <p className="text-white font-semibold mt-2">
                순위 변화: <span className="text-[#FFD600]">{c.rank}</span>
              </p>
              <p className="text-slate-300 text-sm mt-1">{c.result}</p>
              <Link href="/cases" className="text-[#FFD600] text-sm font-medium mt-4 inline-block hover:underline">
                상세 보기 →
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/cases"
            className="text-[#FFD600] font-semibold hover:underline break-keep"
          >
            벨로컴퍼니의 압도적 성과 사례 30+ 더보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
