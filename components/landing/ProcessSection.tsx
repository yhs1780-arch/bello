"use client";

import { motion } from "framer-motion";
import { MessageSquare, Target, Zap, BarChart3 } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "상담 · 진단",
    desc: "무료 상담으로 업종·매장 상태를 꼼꼼히 파악합니다.",
    icon: MessageSquare,
  },
  {
    num: "02",
    title: "기획 · 촬영",
    desc: "동네 상권에 맞는 전략 수립 후, 전담팀이 촬영·콘텐츠를 제작합니다.",
    icon: Target,
  },
  {
    num: "03",
    title: "실행 · 노출",
    desc: "어뷰징 없이 안전하게 노출을 극대화해 손님이 찾아오게 합니다.",
    icon: Zap,
  },
  {
    num: "04",
    title: "보고 · 최적화",
    desc: "투명한 리포트와 함께 다음 목표를 정하고 지속 개선합니다.",
    icon: BarChart3,
  },
];

export function ProcessSection() {
  return (
    <section
      id="process-section"
      className="relative w-full py-10 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center break-keep mb-2 sm:mb-3"
        >
          어떻게 진행되나요?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-sm sm:text-base text-center mb-10 sm:mb-12 break-keep"
        >
          상담부터 매출 반영까지, 4단계로 간단 명료하게 진행합니다.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {STEPS.map(({ num, title, desc, icon: Icon }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-6 flex gap-4 sm:gap-5 items-start text-left"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFD700]/15 border border-[#FFD700]/30 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#FFD700]" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-bold text-[#FFD700] tracking-wide">Step {num}</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-1.5 break-keep">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed break-keep">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
