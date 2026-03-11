"use client";

import { motion } from "framer-motion";

const COMPARISON_ROWS: { label: string; general: string; bello: string; generalIcon: string; belloIcon: string }[] = [
  { label: "수수료 구조", general: "광고비의 15~30%", bello: "수수료 0%", generalIcon: "❌", belloIcon: "✅" },
  { label: "담당자 소통", general: "2~3일 후 답변", bello: "10분 내 응답", generalIcon: "⚠️", belloIcon: "✅" },
  { label: "작업 방식", general: "하청 외주 다수", bello: "전 과정 직접 실행", generalIcon: "❌", belloIcon: "✅" },
  { label: "계약 형태", general: "6개월~1년 장기", bello: "월 단위 자유 계약", generalIcon: "⚠️", belloIcon: "✅" },
  { label: "프로그램 사용", general: "자동화 툴 의존", bello: "100% 안전 수동 운영", generalIcon: "❌", belloIcon: "✅" },
  { label: "보고 방식", general: "월 1회 형식 보고", bello: "실시간 투명 공유", generalIcon: "⚠️", belloIcon: "✅" },
  { label: "진단 방식", general: "패키지 강요", bello: "업종별 맞춤 전략", generalIcon: "❌", belloIcon: "✅" },
  { label: "재계약률", general: "업계 평균 60%", bello: "97%", generalIcon: "⚠️", belloIcon: "✅" },
];

export function ComparisonSection() {
  return (
    <section className="relative w-full py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900/40 border-y border-white/5">
      <div className="max-w-5xl mx-auto min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center break-keep mb-2"
        >
          왜 수많은 대행사 중에서 벨로컴퍼니인가요?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-slate-400 text-sm sm:text-base text-center mb-8 sm:mb-12"
        >
          직접 비교해보세요
        </motion.p>

        {/* 데스크톱: 테이블 / 모바일: 카드만 표시 */}
        <div className="hidden sm:block overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scroll-touch scrollbar-hide">
          <div className="min-w-[640px] max-w-full">
            <table className="w-full border-collapse rounded-xl overflow-hidden border border-white/10">
              <thead>
                <tr>
                  <th className="bg-white/5 text-slate-300 text-left py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b border-white/10">
                    항목
                  </th>
                  <th className="bg-white/5 text-slate-400 py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b border-white/10">
                    일반 대행사
                  </th>
                  <th className="bg-[#FFD600] text-black py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm font-bold border-b border-[#FFD600]/80">
                    벨로컴퍼니
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <motion.tr
                    key={row.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-slate-300 text-xs sm:text-sm bg-white/[0.02]">
                      {row.label}
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-slate-400 text-xs sm:text-sm">
                      <span className="mr-1.5">{row.generalIcon}</span>
                      {row.general}
                    </td>
                    <td className="py-3 sm:py-4 px-3 sm:px-4 text-white text-xs sm:text-sm font-medium bg-[#FFD600]/10">
                      <span className="mr-1.5">{row.belloIcon}</span>
                      {row.bello}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 모바일: 카드형 세로 배치 */}
        <div className="sm:hidden mt-0 space-y-3">
          {COMPARISON_ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 overflow-hidden bg-white/5"
            >
              <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 font-medium text-slate-300 text-sm">
                {row.label}
              </div>
              <div className="grid grid-cols-2 gap-0">
                <div className="px-4 py-3 border-r border-white/10 text-slate-400 text-xs">
                  <span className="block font-medium text-slate-500 mb-0.5">일반 대행사</span>
                  <span>{row.generalIcon} {row.general}</span>
                </div>
                <div className="px-4 py-3 bg-[#FFD600]/10 text-white text-xs font-medium">
                  <span className="block text-[#FFD600] font-semibold mb-0.5">벨로컴퍼니</span>
                  <span>{row.belloIcon} {row.bello}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
