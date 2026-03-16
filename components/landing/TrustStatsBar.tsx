"use client";

import Link from "next/link";

const STATS = [
  {
    value: "0원",
    title: "무의미한 광고비 낭비",
    desc: "매크로, 어뷰징 없이 진짜 고객만 타겟팅합니다.",
  },
  {
    value: "+280%",
    title: "평균 매출 상승률",
    desc: "실제 진행 매장들의 검증된 매출 성장 지표입니다.",
  },
  {
    value: "97%",
    title: "압도적 재계약률",
    desc: "한 달만 해보면 압니다. 사장님들이 다시 찾는 이유.",
  },
  {
    value: "30만 원",
    title: "맞춤 전략 리포트 무료",
    desc: "단 10분 진단으로 우리 매장 맞춤 전략을 무료 제공.",
  },
];

function StatCard({ value, title, desc }: { value: string; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center py-5 sm:py-6 px-2">
      <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tabular-nums" style={{ color: "#FFD700" }}>
        {value}
      </span>
      <span className="font-bold text-white text-sm sm:text-base mt-2 block">{title}</span>
      <span className="text-slate-400 text-xs sm:text-[13px] mt-1 leading-snug max-w-[200px]">{desc}</span>
    </div>
  );
}

export function TrustStatsBar() {
  return (
    <section
      className="w-full py-10 sm:py-14 border-y border-white/10"
      style={{ backgroundColor: "#131929" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.title}
              className={i > 0 && i < 4 ? "md:border-l border-white/10" : ""}
            >
              <StatCard value={stat.value} title={stat.title} desc={stat.desc} />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 px-2">
            지금 우리 매장의 문제점, 단 10분이면 진단 끝납니다.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            단순 문의도 환영합니다. 30만 원 상당의 &apos;우리 매장 맞춤 노출 전략 리포트&apos;를 무료로 받아보시고, 진짜 실력을 확인한 뒤에 결정하세요.
          </p>
          <Link
            href="#consulting-form"
            className="btn-cta-gold inline-flex items-center justify-center rounded-full bg-[#FFD700] text-black font-extrabold px-8 py-4 text-base sm:text-lg shadow-lg"
          >
            지금 바로 무료 전략 리포트 받기 ➔
          </Link>
        </div>
      </div>
    </section>
  );
}
