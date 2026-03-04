"use client";

import { Quote, Star } from "lucide-react";
import { mainPageTestimonials26 } from "@/lib/data";

/** 무한 가로 스크롤 고객 후기 (5점 별점, 느린 속도) */
export function TestimonialMarquee() {
  const list = mainPageTestimonials26;
  const duplicated = [...list, ...list];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-slate-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center break-keep">
          고객 후기
        </h2>
        <p className="text-slate-400 text-center mt-2 break-keep">
          F&B·뷰티·의료·커머스 등 실제 진행한 고객사가 남긴 후기입니다.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-testimonial-marquee hover:[animation-play-state:paused]">
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] sm:w-[380px] mx-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-6"
            >
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-[#FFD700] text-[#FFD700] shrink-0"
                    aria-hidden
                  />
                ))}
              </div>
              <Quote className="w-5 h-5 text-[#FFD700]/50 mb-2 shrink-0" />
              <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed break-keep line-clamp-4">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] font-semibold text-xs shrink-0">
                  {t.initial}
                </div>
                <p className="text-slate-400 text-xs truncate break-keep">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
