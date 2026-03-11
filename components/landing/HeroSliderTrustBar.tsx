"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Store, Shield, Users, CheckCircle } from "lucide-react";

const SLIDES = [
  {
    id: "result",
    h1: "성과로 증명하는 진짜 실행사, 벨로컴퍼니",
    sub: "대행 수수료 없이, 노출부터 예약까지 책임집니다.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80",
  },
  {
    id: "problem",
    h1: "광고비는 쓰는데, 왜 손님은 그대로일까요?",
    sub: "우리 가게의 진짜 문제점부터 짚어드립니다.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  },
  {
    id: "scale",
    h1: "네이버부터 배달앱, 병원 앱까지 한 번에",
    sub: "100여 개 플랫폼 직접 운영. 한 곳에 믿고 맡기세요.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
  },
  {
    id: "empty",
    h1: "파리 날리던 빈 테이블, 방치하지 마세요.",
    sub: "손님이 매장을 가장 먼저 찾고 방문하게 세팅합니다.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
  },
  {
    id: "trust",
    h1: "실제 매출이 오르는 구조를 만듭니다",
    sub: "한 번의 반짝임이 아닌, 꾸준히 손님이 찾아오는 실행.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80",
  },
];

const TRUST_ITEMS = [
  { icon: Store, text: "월간 관리 매장 300+ 곳" },
  { icon: Shield, text: "수수료 0% 직영 운영" },
  { icon: Users, text: "사진·글·운영 분업" },
  { icon: CheckCircle, text: "안전한 로직 운영" },
];

const INTERVAL_MS = 5500;

const HERO_STATS = [
  { end: 300, suffix: "+", label: "월간 관리 매장" },
  { end: 0, suffix: "%", label: "수수료" },
  { end: 97, suffix: "%", label: "재계약률" },
  { end: 10000, suffix: "+", label: "누적 캠페인" },
];

function useCountUp(end: number, inView: boolean, duration = 2000) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * easeOut));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [end, inView, duration]);
  return value;
}

function HeroStat({ end, suffix, label, inView, delay }: { end: number; suffix: string; label: string; inView: boolean; delay: number }) {
  const value = useCountUp(end, inView, 2000);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex flex-col items-center"
    >
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FFD700] tabular-nums">
        {value >= 10000 ? value.toLocaleString() : value}{suffix}
      </span>
      <span className="text-slate-400 text-xs sm:text-sm mt-0.5">{label}</span>
    </motion.div>
  );
}

export function HeroSliderTrustBar() {
  const [index, setIndex] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full max-w-full min-h-[100dvh] sm:min-h-[100svh] flex flex-col overflow-hidden pt-[max(3.5rem,env(safe-area-inset-top))] sm:pt-16 pb-0">
      {/* 배경 그라디언트 애니메이션 (5~10초 주기) */}
      <div
        className="absolute inset-0 animate-hero-gradient opacity-90"
        style={{
          background: "linear-gradient(135deg, #0B0F1A 0%, #0d1a2e 50%, #0B0F1A 100%)",
          backgroundSize: "200% 200%",
        }}
        aria-hidden
      />
      {/* 배경 슬라이더 + 어두운 오버레이 */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
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
            <div className="absolute inset-0 bg-[#0B1120]/75 bg-gradient-to-b from-black/50 via-black/40 to-[#0B1120]" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-w-0 py-8 sm:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={SLIDES[index].id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-[26px] min-[380px]:text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight text-white break-keep px-0">
              {SLIDES[index].h1}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 break-keep max-w-2xl mx-auto px-1">
              {SLIDES[index].sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* 숫자 카운터 4개: 데스크톱 가로 4개 / 모바일 2x2 */}
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-3xl mx-auto pt-6 sm:pt-8">
          {HERO_STATS.map((stat, i) => (
            <HeroStat
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              inView={statsInView}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* 항상 보이는 CTA 버튼 2개 */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8"
        >
          <Link
            href="#consulting-form"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg bg-[#FFD700] text-[#0B1120] hover:bg-[#FFE44D] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-5px_rgba(255,215,0,0.5)] border border-amber-400/30 break-keep"
          >
            무료 진단 받기
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
          <Link
            href="#case-section"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold text-base bg-white/10 text-white border border-white/20 hover:bg-white/15 transition-all duration-300 break-keep"
          >
            성과 사례 보기
          </Link>
        </motion.div>

        <div className="absolute bottom-[max(5rem,calc(env(safe-area-inset-bottom)+4rem))] sm:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#FFD700]" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {TRUST_ITEMS.map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center justify-center gap-2 sm:gap-3 text-slate-200">
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FFD700]/15 flex items-center justify-center">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-medium break-keep">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
