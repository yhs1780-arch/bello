"use client";

import { motion } from "framer-motion";

const GREEN = "#4ADE80";

type Milestone = {
  week: string;
  title: string;
  focus: string;
  metrics: string[];
  kpi: string;
  kpiColor: string;
};

const MILESTONES: Milestone[] = [
  {
    week: "WEEK 1",
    title: "진단 & 전략 설계",
    focus: "현재 매장 상태를 수치화하고, 바로 성과 나는 구간부터 설계합니다.",
    metrics: ["경쟁사 상위노출 구조 분석", "핵심 메뉴/키워드 재정렬", "채널별 목표 KPI 설정"],
    kpi: "세팅 완료 평균 7일",
    kpiColor: "#9CA3AF",
  },
  {
    week: "WEEK 2",
    title: "실행 집중 구간",
    focus: "콘텐츠와 운영을 동시 집행해 유입량을 빠르게 끌어올립니다.",
    metrics: ["블로그/카페/숏폼 동시 배포", "리뷰 볼륨 증대 운영", "문의 전환 동선 최적화"],
    kpi: "콘텐츠 평균 14건 집행",
    kpiColor: "#9CA3AF",
  },
  {
    week: "WEEK 3",
    title: "상승 가시화",
    focus: "검색/피드/지도에서 순위와 노출 변화가 눈에 보이기 시작합니다.",
    metrics: ["상위권 노출 포인트 다수 확보", "문의/예약 로그 증가", "부정 지표 즉시 보정"],
    kpi: "평균 순위 변화 -8위",
    kpiColor: GREEN,
  },
  {
    week: "WEEK 4",
    title: "매출 체감 구간",
    focus: "유입이 실제 상담/예약/주문으로 전환되는 구간입니다.",
    metrics: ["전화·DM·예약 전환 상승", "운영 리스크 제어", "다음 달 확장 플랜 제시"],
    kpi: "평균 문의 +847%",
    kpiColor: "#FFD600",
  },
  {
    week: "SCALE",
    title: "지속 성장 최적화",
    focus: "성과가 난 구간을 고정하고, 채널 확장으로 성장 곡선을 유지합니다.",
    metrics: ["월간 리포트 기반 재투자", "알고리즘 변화 선제 대응", "재계약/지인추천 구조화"],
    kpi: "재계약률 97%",
    kpiColor: GREEN,
  },
];

export function TimelineSection() {
  return (
    <section id="timeline-section" className="relative w-full overflow-hidden py-16 sm:py-20" style={{ backgroundColor: "#0A0F1C" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-center font-extrabold text-white" style={{ fontSize: "clamp(30px, 4.2vw, 48px)" }}>
          계약 후 4주, 실제로 이렇게 달라집니다
        </h2>
        <p className="text-center mt-3" style={{ fontSize: 15, color: "#7B879E" }}>
          벨로컴퍼니 진행 사례 평균 데이터
        </p>

        <div className="relative mt-10">
          <div className="hidden lg:block absolute left-4 right-4 top-10 h-px bg-gradient-to-r from-transparent via-[#2A3347] to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 xl:gap-3">
            {MILESTONES.map((step, i) => (
            <motion.div
              key={step.week}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative group"
            >
              <div
                className="rounded-2xl h-full border border-[#1E2A43] bg-[#111A2F] p-5 flex flex-col transition-all duration-200 group-hover:border-[#FFD600]/70 group-hover:-translate-y-1"
                style={{
                  boxShadow: "0 18px 42px rgba(0,0,0,0.34)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-wider text-[#FFD600] bg-[#FFD600]/10 border border-[#FFD600]/30 rounded-full px-2.5 py-1">
                    {step.week}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#4ADE80]" />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">
                  {step.title}
                </h3>
                <p className="text-[13px] text-slate-400 leading-relaxed mb-4 min-h-[58px]">{step.focus}</p>
                <ul className="space-y-2 flex-1">
                  {step.metrics.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#4ADE80] shrink-0" />
                      <span className="text-[13px] text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-[#26344F]">
                  <p className="text-sm font-extrabold" style={{ color: step.kpiColor }}>
                    {step.kpi}
                  </p>
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
