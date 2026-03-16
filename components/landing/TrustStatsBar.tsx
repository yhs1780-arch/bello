"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const STATS = [
  {
    value: "0원",
    valueRaw: 0,
    suffix: "원",
    title: "무의미한 광고비 낭비",
    desc: "매크로, 어뷰징 없이 진짜 고객만 타겟팅합니다.",
    animate: false,
  },
  {
    value: "+280%",
    valueRaw: 280,
    suffix: "%",
    title: "평균 매출 상승률",
    desc: "실제 진행 매장들의 검증된 매출 성장 지표입니다.",
    animate: true,
    prefix: "+",
  },
  {
    value: "97%",
    valueRaw: 97,
    suffix: "%",
    title: "압도적 재계약률",
    desc: "한 달만 해보면 압니다. 사장님들이 다시 찾는 이유.",
    animate: true,
    prefix: "",
  },
  {
    value: "30만 원",
    valueRaw: 300000,
    suffix: "",
    title: "맞춤 전략 리포트 무료",
    desc: "단 10분 진단으로 우리 매장 맞춤 전략을 무료 제공.",
    animate: false,
  },
];

function useCountUp(end: number, inView: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (!inView || hasAnimated) return;
    const startTime = Date.now();
    let rafId: number;
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * easeOut));
      if (progress >= 1) setHasAnimated(true);
      else rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [end, inView, duration, hasAnimated]);
  return value;
}

function StatBlock({
  stat,
  inView,
}: {
  stat: (typeof STATS)[number];
  inView: boolean;
}) {
  const animated = useCountUp(stat.animate ? stat.valueRaw : 0, inView, 2000);
  const displayValue = stat.animate
    ? `${stat.prefix || ""}${stat.valueRaw >= 10000 ? animated.toLocaleString() : animated}${stat.suffix}`
    : stat.value;

  return (
    <div className="flex flex-col items-center text-center py-5 sm:py-6 px-2">
      <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold tabular-nums text-[#FFD700]">
        {displayValue}
      </span>
      <span className="font-bold text-white text-sm sm:text-base mt-2">{stat.title}</span>
      <span className="text-slate-400 text-xs sm:text-[13px] mt-1 leading-snug max-w-[200px]">
        {stat.desc}
      </span>
    </div>
  );
}

export function TrustStatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
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
              <StatBlock stat={stat} inView={inView} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 pt-8 border-t border-white/10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
            지금 우리 매장의 문제점, 단 10분이면 진단 끝납니다.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-6 leading-relaxed">
            단순 문의도 환영합니다. 30만 원 상당의 &apos;우리 매장 맞춤 노출 전략 리포트&apos;를 무료로 받아보시고, 진짜 실력을 확인한 뒤에 결정하세요.
          </p>
          <Link
            href="#consulting-form"
            className="btn-cta-shimmer inline-flex items-center justify-center rounded-full bg-[#FFD700] text-black font-extrabold px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD700]/40"
          >
            지금 바로 무료 전략 리포트 받기 ➔
          </Link>
        </div>
      </div>
    </section>
  );
}
