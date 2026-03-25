"use client";

import { motion } from "framer-motion";
import { Percent, MessageCircle, Shield, BarChart3, ClipboardCheck, Users } from "lucide-react";

const REASONS = [
  { icon: Percent, title: "수수료 0% 직접 실행", desc: "중간 마진 없이 꼭 필요한 곳에만 예산을 집중합니다." },
  { icon: MessageCircle, title: "10분 내 빠른 피드백", desc: "1:1 전담 직원이 배정되어 답답함 없이 즉각 소통합니다." },
  { icon: Shield, title: "100% 안전한 운영", desc: "계정이 정지될 위험이 있는 불법 프로그램은 절대 쓰지 않습니다." },
  { icon: BarChart3, title: "발 빠른 대응 및 투명한 보고", desc: "매체 변화를 빠르게 파악하고, 숨김없이 결과를 공유합니다." },
  { icon: ClipboardCheck, title: "정확한 진단 및 체크리스트", desc: "지금 당장 사장님이 매장에서 해야 할 행동을 짚어드립니다." },
  { icon: Users, title: "분야별 전담팀 분업", desc: "전문 촬영팀, 작가진, 운영팀이 퀄리티 높은 결과물을 만듭니다." },
];

export function SolutionSection() {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5 overflow-hidden bg-[#0A1020]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,214,0,0.08),transparent_28%),radial-gradient(circle_at_80%_85%,rgba(34,197,94,0.10),transparent_32%)]" />
      <div className="relative max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm text-amber-300/90 font-semibold tracking-[0.12em] mb-3"
        >
          BELLO EXECUTION SYSTEM
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep mb-8 sm:mb-12"
        >
          벨로컴퍼니의 실행 구조는 시작부터 다릅니다
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(145deg, rgba(18,25,46,0.92) 0%, rgba(9,14,30,0.92) 100%)",
                borderColor: "rgba(255,214,0,0.20)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 30px rgba(2,6,23,0.35)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_80%_20%,rgba(255,214,0,0.08),transparent_45%)]" />
              <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-amber-300/30 bg-amber-300/10">
                <Icon className="w-5 h-5 text-[#FFD700]" />
              </div>
              <h3 className="relative text-lg font-bold text-white mb-2 break-keep">{title}</h3>
              <p className="relative text-slate-300 text-sm leading-relaxed break-keep">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
