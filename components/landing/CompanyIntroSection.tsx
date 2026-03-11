"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { end: 3, suffix: "억+", label: "월간 마케팅 취급액", format: (n: number) => `${n}억+` },
  { end: 25, suffix: "명+", label: "각 분야별 전문 투입 인력", format: (n: number) => `${n.toLocaleString()}명+` },
  { end: 10000, suffix: "건+", label: "누적 진행 성공 캠페인", format: (n: number) => `${n.toLocaleString()}건+` },
  { end: 3, suffix: "개 지사", label: "서울(본사) · 전북 · 전남 지사 운영", format: (n: number) => `${n}개 지사` },
];

function useCountUpWhenInView(end: number, inView: boolean, duration = 2) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round((end - 0) * easeOut));
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [end, inView, duration]);
  return count;
}

function StatCard({
  end,
  label,
  format,
  inView,
  delay,
}: {
  end: number;
  label: string;
  format: (n: number) => string;
  inView: boolean;
  delay: number;
}) {
  const count = useCountUpWhenInView(end, inView, 2);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      className="rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-[#FFD700]/20 p-4 sm:p-6 flex flex-col justify-center"
    >
      <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#FFD700] tabular-nums tracking-tight">
        {format(count)}
      </p>
      <p className="text-slate-400 text-xs sm:text-sm mt-1 sm:mt-2 break-keep leading-snug">{label}</p>
    </motion.div>
  );
}

export function CompanyIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.2 });

  return (
    <section
      id="company-intro"
      ref={sectionRef}
      className="relative w-full py-10 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 배경: 짙은 네이비 + 미세 골드 메쉬/점 패턴 */}
      <div
        className="absolute inset-0 bg-[#0B1120]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 100% 80% at 20% 50%, rgba(255,215,0,0.04) 0%, transparent 50%),
            radial-gradient(ellipse 80% 100% at 80% 50%, rgba(255,215,0,0.03) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 1px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 24px 24px",
        }}
      />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, rgba(255,215,0,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-7xl mx-auto min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* 좌측: 타이틀 및 철학 (모바일에서 먼저 노출) */}
          <div className="space-y-4 sm:space-y-8 order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-xl sm:text-2xl lg:text-4xl xl:text-[2.5rem] font-bold text-white leading-snug sm:leading-tight break-keep"
            >
              우리는 말뿐인 &apos;대행사&apos;가 아니라, 진짜 성과를 만드는 &apos;초대형 실행팀&apos;입니다.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed break-keep"
            >
              수많은 대행사들이 결국 벨로컴퍼니를 찾습니다. 하청에 하청을 거치는 거품을 완전히 걷어내고, 사장님과 다이렉트로 만나 가장 합리적인 비용으로 최고의 퍼포먼스를 제공합니다.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#FFD700]/90 text-sm sm:text-base font-medium italic border-l-2 border-[#FFD700]/50 pl-4 break-keep"
            >
              데이터로 증명하는 압도적 실행력 — BELLO COMPANY
            </motion.p>
          </div>

          {/* 우측: 2x2 스탯 그리드 (모바일에서 먼저 노출) */}
          <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-5 order-1 lg:order-2">
            {STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                end={stat.end}
                label={stat.label}
                format={stat.format}
                inView={isInView}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
