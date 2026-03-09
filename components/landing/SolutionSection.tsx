"use client";

import { motion } from "framer-motion";
import { Percent, MessageCircle, Shield, BarChart3, ClipboardCheck, Users } from "lucide-react";

const REASONS = [
  {
    icon: Percent,
    title: "수수료 0% 직접 실행",
    desc: "중간 마진 없이 꼭 필요한 곳에만 예산을 집중합니다.",
  },
  {
    icon: MessageCircle,
    title: "10분 내 빠른 피드백",
    desc: "1:1 전담 직원이 배정되어 답답함 없이 즉각 소통합니다.",
  },
  {
    icon: Shield,
    title: "100% 안전한 운영",
    desc: "계정이 정지될 위험이 있는 불법 프로그램은 절대 쓰지 않습니다.",
  },
  {
    icon: BarChart3,
    title: "발 빠른 대응 및 투명한 보고",
    desc: "매체 변화를 빠르게 파악하고, 숨김없이 결과를 공유합니다.",
  },
  {
    icon: ClipboardCheck,
    title: "정확한 진단 및 체크리스트",
    desc: "지금 당장 사장님이 매장에서 해야 할 행동을 짚어드립니다.",
  },
  {
    icon: Users,
    title: "분야별 전담팀 분업",
    desc: "전문 촬영팀, 작가진, 운영팀이 퀄리티 높은 결과물을 만듭니다.",
  },
];

export function SolutionSection() {
  return (
    <section className="relative w-full py-10 sm:py-20 lg:py-24 px-3 sm:px-6 lg:px-8 bg-slate-900/40 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto min-w-0">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep mb-8 sm:mb-16"
        >
          벨로컴퍼니의 &apos;실행 구조&apos;는 시작부터 다릅니다.
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 hover:border-amber-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFD700]/20 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#FFD700]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 break-keep">{title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed break-keep">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
