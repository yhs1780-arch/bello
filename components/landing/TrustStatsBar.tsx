"use client";

import { useRef, useEffect, useState } from "react";

const STATS = [
  { end: 300, suffix: "+", label: "월간 관리 매장" },
  { end: 0, suffix: "%", label: "수수료" },
  { end: 97, suffix: "%", label: "재계약률" },
  { end: 10000, suffix: "+", label: "누적 캠페인" },
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

function StatItem({ end, suffix, label, inView }: { end: number; suffix: string; label: string; inView: boolean }) {
  const value = useCountUp(end, inView, 2000);
  return (
    <div className="flex flex-col items-center py-4 sm:py-6">
      <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFD700] tabular-nums">
        {end >= 10000 ? value.toLocaleString() : value}
        {suffix}
      </span>
      <span className="text-slate-400 text-xs sm:text-sm mt-1">{label}</span>
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
    <section ref={ref} className="w-full py-6 sm:py-8 border-y border-white/10" style={{ backgroundColor: "#131929" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={i > 0 && i < 4 ? "md:border-l border-white/10" : ""}>
              <StatItem end={stat.end} suffix={stat.suffix} label={stat.label} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
