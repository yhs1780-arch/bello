"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { end: 100, suffix: "억+", label: "월간 마케팅 취급액" },
  { end: 2000, suffix: "명+", label: "각 분야별 전문 투입 인력" },
  { end: 10000, suffix: "건+", label: "누적 진행 성공 캠페인" },
  { end: 3, suffix: "개 지사", label: "서울·전북·전남 지사" },
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

function StatCard({ end, suffix, label, inView, delay }: { end: number; suffix: string; label: string; inView: boolean; delay: number }) {
  const value = useCountUp(end, inView, 2000);
  const display = end >= 1000 ? value.toLocaleString() : value;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-xl sm:rounded-2xl bg-white/[0.06] backdrop-blur-md border border-[#FFD700]/25 p-4 sm:p-5 flex flex-col justify-center hover:border-[#FFD700]/40 transition-colors"
    >
      <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#FFD700] tabular-nums tracking-tight">
        {display}{suffix}
      </p>
      <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2 break-keep leading-snug">{label}</p>
    </motion.div>
  );
}

export function CompanyIntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="company-intro"
      ref={ref}
      className="relative w-full py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5"
      style={{ backgroundColor: "#0B1120" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
          <div className="lg:pr-4">
            <p className="text-[#FFD700] text-xs font-semibold uppercase tracking-wider mb-3">
              데이터로 증명하는 압도적 실행력
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-[2.25rem] font-bold text-white leading-snug break-keep mb-4">
              우리는 말뿐인 &apos;대행사&apos;가 아니라,
              <br />
              진짜 성과를 만드는 &apos;초대형 실행팀&apos;입니다.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed break-keep max-w-lg">
              수많은 대행사들이 결국 벨로컴퍼니를 찾습니다. 하청에 하청을 거치는 거품을 걷어내고, 사장님과 다이렉트로 만나 최고의 퍼포먼스를 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                inView={inView}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
