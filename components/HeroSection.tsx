"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BelloLogo } from "./BelloLogo";
import { AnimatedCounter } from "./AnimatedCounter";

const SLIDES = [
  {
    id: "performance",
    headline: "압도적 숫자로 증명하는 퍼포먼스",
    lines: [
      "월 매출 +6,018만 원 상승 (마곡 한식당)",
      "최고 매출 경신 (위례 샤브샤브)",
    ],
    bg: "bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(59,130,246,0.12),transparent_60%)]",
    overlay: "bg-[linear-gradient(180deg,transparent_0%,rgba(2,6,23,0.4)_50%,#020617_100%)]",
  },
  {
    id: "expertise",
    headline: "플레이스 최적화의 기준, BELLO",
    lines: [
      "'체류시간+트래픽+저장하기' 실제 사용자 기반 로직으로",
      "1페이지 점령.",
    ],
    bg: "bg-[radial-gradient(ellipse_70%_70%_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]",
    overlay: "bg-[linear-gradient(180deg,transparent_0%,rgba(2,6,23,0.5)_60%,#020617_100%)]",
  },
  {
    id: "award",
    headline: "2024년 고객 만족 브랜드 대상 수상",
    lines: [
      "데이터로 입증된 실제 매출 상승 효과,",
      "업계 1위의 품격",
    ],
    bg: "bg-[radial-gradient(ellipse_60%_60%_at_20%_80%,rgba(251,191,36,0.08),transparent_50%),radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]",
    overlay: "bg-[linear-gradient(180deg,transparent_0%,rgba(2,6,23,0.5)_70%,#020617_100%)]",
  },
];

const INTERVAL_MS = 6000;

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.06),transparent)] pointer-events-none" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={SLIDES[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${SLIDES[index].bg}`}
        />
      </AnimatePresence>
      <div className={`absolute inset-0 pointer-events-none ${SLIDES[index].overlay}`} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <BelloLogo className="text-lg sm:text-xl break-keep" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={SLIDES[index].id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white break-keep">
              {SLIDES[index].headline}
            </h1>
            <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
              {SLIDES[index].lines.map((line, i) => (
                <p key={i} className="text-base sm:text-lg lg:text-xl text-slate-300 break-keep">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
        >
          <Link
            href="#consulting-form"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] bg-gradient-to-r from-blue-600 to-blue-500 border border-white/10 animate-pulse break-keep"
          >
            무료 매장 진단받기
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
        </motion.div>

        <AnimatedCounter />
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-blue-500" : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
