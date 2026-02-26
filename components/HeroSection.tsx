"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BelloLogo } from "./BelloLogo";
import { AnimatedCounter } from "./AnimatedCounter";

const SLIDES = [
  {
    id: "brand",
    headline: "빈 테이블을 웨이팅으로 채우는 실행력, BELLO",
    sub: "프로페셔널한 팀과 함께하는 다이렉트 마케팅",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
  },
  {
    id: "performance",
    headline: "데이터로 증명하는 우상향 그래프",
    sub: "실제 매출·노출 데이터 기반 퍼포먼스 마케팅",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  },
  {
    id: "local",
    headline: "우리 동네 1등 매장의 비밀",
    sub: "네이버 플레이스·지도 1위 노출, 체류시간·저장하기 로직",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80",
  },
  {
    id: "global",
    headline: "국경을 넘는 K-뷰티 관광 코스 기획",
    sub: "샤오홍슈·글로벌 뷰티 앱 시딩",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80",
  },
  {
    id: "award",
    headline: "업계 1위, 2024 브랜드 대상 수상",
    sub: "데이터로 입증된 실제 매출 상승 효과",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80",
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={SLIDES[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${SLIDES[index].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-slate-950" />
        </motion.div>
      </AnimatePresence>

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
            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-slate-300 break-keep">
              {SLIDES[index].sub}
            </p>
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
