"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { mainPageTestimonials26 } from "@/lib/data";

const AUTO_INTERVAL_MS = 3000;

/** 자동 스크롤 캐러셀 + dot 인디케이터 + 좌우 화살표, 호버 시 일시 정지 */
export function TestimonialMarquee() {
  const list = mainPageTestimonials26;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % list.length);
  }, [list.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + list.length) % list.length);
  }, [list.length]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(goNext, AUTO_INTERVAL_MS);
    return () => clearInterval(t);
  }, [isPaused, goNext]);

  return (
    <section
      className="relative w-full py-12 sm:py-20 lg:py-24 overflow-hidden border-y border-white/5"
      style={{ backgroundColor: "rgba(19,25,41,0.6)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 뱃지 */}
        <p className="text-center mb-4 sm:mb-6">
          <span className="inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-[#FFD700]/40 text-[#FFD700]/90 bg-[#FFD700]/5">
            실제 진행 고객사 300+ 곳의 생생한 후기
          </span>
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep">
          고객 후기
        </h2>
        <p className="text-slate-400 text-center mt-1 sm:mt-2 text-sm sm:text-base break-keep mb-8 sm:mb-12">
          F&B·뷰티·의료·커머스 등 실제 진행한 고객사가 남긴 후기입니다.
        </p>

        {/* 캐러셀 컨테이너 */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={goPrev}
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="이전 후기"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="flex-1 min-w-0 max-w-2xl mx-auto">
            <div
              className="rounded-xl sm:rounded-2xl border border-white/10 p-5 sm:p-8 transition-[border-color] duration-200 hover:border-t-[3px] hover:border-t-[#FFD700]"
              style={{ backgroundColor: "#131929" }}
            >
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#FFD700] mb-4 shrink-0" aria-hidden />
              <blockquote className="text-slate-200 text-base sm:text-lg leading-relaxed break-keep italic">
                &ldquo;{list[index].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-[#FFD700] font-bold text-sm sm:text-base shrink-0 bg-[#FFD700]/15">
                  {list[index].initial}
                </div>
                <p className="text-slate-400 text-sm sm:text-base truncate break-keep">{list[index].name}</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="다음 후기"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dot indicator */}
        <div className="flex items-center justify-center gap-1 sm:gap-1.5 mt-6 sm:mt-8 flex-wrap max-w-full">
          {list.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-300 shrink-0 ${
                i === index ? "w-5 h-2 bg-[#FFD700]" : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`후기 ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
