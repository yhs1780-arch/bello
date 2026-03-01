"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function useCountUp(end: number, duration = 2.2, start = 0) {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 2);
      setCount(Math.round(start + (end - start) * easeOut));
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [end, duration, start]);
  return count;
}

const STATS = [
  { label: "누적 진행 캠페인", value: 1500, suffix: "+" },
  { label: "보유 플랫폼 인프라", value: 100, suffix: "+" },
  { label: "어뷰징 발생", value: 0, suffix: "%" },
];

export function AnimatedCounter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 pt-10 sm:pt-16 md:pt-24 min-w-0 max-w-full"
    >
      {STATS.map((stat, i) => (
        <Stat key={stat.label} {...stat} delay={i * 0.1} />
      ))}
    </motion.div>
  );
}

function Stat({ label, value, suffix, delay }: { label: string; value: number; suffix: string; delay: number }) {
  const count = useCountUp(value, 2.2, 0);
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
        className="text-2xl md:text-4xl font-bold text-white break-keep"
      >
        {count.toLocaleString()}
        {suffix}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.5 }}
        className="text-xs md:text-sm text-slate-400 mt-1 break-keep"
      >
        {label}
      </motion.p>
    </div>
  );
}
