"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Camera, Megaphone, TrendingUp } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "무료 상담 및 진단",
    desc: "업종과 현재 매장 상태를 꼼꼼히 체크합니다.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "맞춤형 기획",
    desc: "동네 상권과 주력 메뉴에 맞는 타겟팅 전략을 세웁니다.",
    icon: FileText,
  },
  {
    num: "03",
    title: "전담팀 세팅 및 촬영",
    desc: "전문 작가와 포토그래퍼가 퀄리티를 높입니다.",
    icon: Camera,
  },
  {
    num: "04",
    title: "본격 홍보 실행",
    desc: "어뷰징 없는 100% 안전한 방식으로 노출을 극대화합니다.",
    icon: Megaphone,
  },
  {
    num: "05",
    title: "결과 보고 및 최적화",
    desc: "투명한 리포트를 제공하고 다음 목표를 설정합니다.",
    icon: TrendingUp,
  },
];

function StepPlaceholder({ stepIndex }: { stepIndex: number }) {
  const placeholders = [
    { label: "진단 체크리스트", bars: [60, 85, 40, 90, 70] },
    { label: "타겟팅 전략", bars: [75, 90, 65, 80] },
    { label: "촬영·편집", bars: [88, 92, 78] },
    { label: "노출·실행", bars: [95, 82, 88, 91] },
    { label: "리포트·목표", bars: [70, 85, 90, 75, 80] },
  ];
  const { label, bars } = placeholders[stepIndex] ?? placeholders[0];
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-3 min-h-[80px] flex flex-col justify-end">
      <p className="text-[10px] text-slate-500 mb-2 uppercase tracking-wider">{label}</p>
      <div className="flex gap-1 items-end h-8">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
            className="flex-1 rounded-sm bg-[#FFD700]/30 min-h-[4px]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process-section"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center break-keep mb-12 sm:mb-16"
        >
          상담부터 매출 상승까지, 체계적인 5단계 시스템
        </motion.h2>

        {/* 수직 타임라인: 중앙 골드선 + 5개 포인트 */}
        <div className="relative">
          {/* 골드 세로선 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#FFD700]/60 to-transparent" />

          <div className="space-y-0">
            {STEPS.map(({ num, title, desc, icon: Icon }, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="relative flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 py-6 sm:py-8"
              >
                {/* 중앙 라인 위 반짝이는 포인트 */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                    className="w-4 h-4 rounded-full bg-[#FFD700] shadow-[0_0_12px_rgba(255,215,0,0.6)] ring-4 ring-slate-900/40"
                  />
                </div>

                {/* 카드: 데스크톱에서 좌/우 번갈아 */}
                <div
                  className={`flex-1 flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 min-w-0 ${i % 2 === 1 ? "sm:text-right" : ""}`}>
                    <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-6 h-full flex flex-col">
                      <div className={`flex items-center gap-3 mb-3 ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}`}>
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FFD700]/15 border border-[#FFD700]/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#FFD700]" />
                        </div>
                        <span className="text-sm font-bold text-[#FFD700]">Step {num}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 break-keep">{title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed break-keep">{desc}</p>
                    </div>
                  </div>
                  <div className={`w-full sm:w-40 lg:w-44 flex-shrink-0 ${i % 2 === 1 ? "sm:order-first" : ""}`}>
                    <StepPlaceholder stepIndex={i} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
