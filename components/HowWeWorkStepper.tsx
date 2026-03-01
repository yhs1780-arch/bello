"use client";

import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Users, FileBarChart } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const STEPS = [
  { icon: MessageSquare, title: "맞춤 컨설팅", desc: "고객 목표·현황 분석 및 플랫폼·예산 맞춤 제안" },
  { icon: Lightbulb, title: "로직 분석 및 기획", desc: "100+ 매체 알고리즘 분석 후 캠페인 설계" },
  { icon: Users, title: "인프라 투입 및 실행", desc: "실사용자 풀 투입, 어뷰징 0% 실행" },
  { icon: FileBarChart, title: "데이터 리포트 제공", desc: "주기적 리포팅 및 피드백 기반 최적화" },
];

export function HowWeWorkStepper() {
  return (
    <section className="relative w-full max-w-full overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
      <div className="max-w-5xl mx-auto min-w-0">
        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-100 mb-3 sm:mb-4 break-keep">
            How We Work
          </h2>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            클라이언트에게 전문성을 어필하기 위한
            <br className="block md:hidden" />
            <br className="hidden md:block" />
            단계별 업무 프로세스입니다.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 min-w-0">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                  <div className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center mb-4 hover:-translate-y-1 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-blue-400/90">0{i + 1}</span>
                    <h3 className="text-lg font-semibold text-white break-keep">{step.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed break-keep">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
