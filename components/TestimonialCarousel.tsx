"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";
import { BelloLogo } from "./BelloLogo";
import { CompanyShortWith } from "./CompanyName";

const AUTO_MS = 3000;
const DRAG_THRESHOLD = 50;

type TestimonialItem = { quote: string; name: string; role: string; company: string; initial: string };

export function TestimonialCarousel({
  items = testimonials,
  title = "고객 후기",
  subtitle,
}: {
  items?: TestimonialItem[];
  title?: string;
  subtitle?: React.ReactNode;
}) {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);
  const n = items.length;

  const go = useCallback((dir: number) => {
    setCurrent((c) => (c + dir + n) % n);
  }, [n]);

  useEffect(() => {
    if (isDragging) return;
    const t = setInterval(() => go(1), AUTO_MS);
    return () => clearInterval(t);
  }, [go, isDragging]);

  const handleDragEnd = useCallback((_: unknown, info: PanInfo) => {
    setIsDragging(false);
    const offset = info.offset.x;
    if (offset < -DRAG_THRESHOLD) go(1);
    else if (offset > DRAG_THRESHOLD) go(-1);
    animate(dragX, 0, { type: "tween", duration: 0.2 });
  }, [go, dragX]);

  const getIdx = (offset: number) => (current + offset + n) % n;

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 font-[var(--font-heading)] leading-tight break-keep">
            {title}
          </h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            {subtitle ?? (
              <>
                F&B·뷰티·의료·커머스 등 실제 진행한 고객사가 남긴 후기입니다.
                <br className="hidden md:block" />
                <CompanyShortWith suffix="와" /> 함께했을 때 어떤 변화가 오는지 참고하실 수 있습니다.
              </>
            )}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr_1fr] gap-3 md:gap-6 items-stretch min-h-[300px] md:min-h-[340px]">
            {[-1, 0, 1].map((offset) => {
              const idx = getIdx(offset);
              const t = items[idx];
              const isCenter = offset === 0;
              return (
                <motion.div
                  key={`${idx}-${offset}`}
                  className={`flex flex-col rounded-2xl border backdrop-blur-md p-4 md:p-8 transition-all duration-300 ${
                    isCenter
                      ? "bg-white/10 border-white/20 shadow-xl shadow-amber-500/5 ring-2 ring-amber-500/20 cursor-grab active:cursor-grabbing"
                      : "bg-white/5 border-white/10 cursor-pointer hover:bg-white/[0.07]"
                  } ${!isCenter ? "hidden sm:flex" : ""}`}
                  style={
                    isCenter
                      ? {
                          scale: 1,
                          opacity: 1,
                          zIndex: 10,
                          x: dragX,
                        }
                      : {
                          scale: 0.9,
                          opacity: 0.5,
                          zIndex: 0,
                        }
                  }
                  drag={isCenter ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  onClick={() => !isCenter && go(offset)}
                >
                  <Quote className={`text-amber-500/50 shrink-0 ${isCenter ? "w-8 h-8 mb-3" : "w-5 h-5 mb-2"}`} />
                  <blockquote
                    className={`text-slate-200 leading-relaxed flex-1 break-keep ${
                      isCenter ? "text-sm md:text-base line-clamp-6" : "text-xs line-clamp-4"
                    }`}
                  >
                    {t.quote}
                  </blockquote>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5 shrink-0">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-semibold text-xs">
                      {t.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-white text-xs truncate break-keep">{t.name} {t.role}</p>
                      <p className="text-amber-400/90 text-[10px] truncate break-keep">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              type="button"
              onClick={() => go(-1)}
              className="p-2.5 rounded-xl bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              aria-label="이전"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-slate-400 min-w-[3rem] text-center break-keep">
              {current + 1} / {n}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="p-2.5 rounded-xl bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              aria-label="다음"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>

        <div className="mt-6 flex justify-center">
          <BelloLogo className="opacity-60" />
        </div>
      </div>
    </section>
  );
}
