"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { references } from "@/lib/data";
import type { ReferenceCard } from "@/lib/data";
import { BelloLogo } from "./BelloLogo";
import { TrendingUp, Utensils, MapPin, MessageCircle, BookOpen } from "lucide-react";

function ReferenceVisual({ card }: { card: ReferenceCard }) {
  const base = "rounded-xl overflow-hidden border border-white/10 bg-slate-800/80";
  switch (card.visual) {
    case "sales":
      return (
        <div className={`${base} p-4`}>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <span className="text-xs text-slate-400">매출 성장</span>
          </div>
          <div className="h-16 flex gap-2 items-end">
            {[2, 3, 4, 5, 6, 8].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-slate-600"
                style={{ height: `${h * 12}px` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10px] text-slate-400">
            <span>2024.05</span>
            <span>2025.03</span>
          </div>
        </div>
      );
    case "shabu":
      return (
        <div className={`${base} p-3`}>
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-4 h-4 text-rose-400" />
            <span className="text-xs text-slate-400">위례 샤브샤브</span>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 p-2 rounded-lg bg-slate-700/50">
              <div className="text-[10px] text-slate-500">2024.05</div>
              <div className="text-xs font-semibold text-emerald-400">3,719만원</div>
            </div>
            <div className="flex-1 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="text-[10px] text-slate-500">2025.03</div>
              <div className="text-xs font-semibold text-emerald-400">8,594만원</div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-emerald-400 font-medium">+4,874만원</div>
        </div>
      );
    case "magok":
      return (
        <div className={`${base} p-3`}>
          <div className="flex items-center gap-2 mb-2">
            <Utensils className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-slate-400">마곡 한식집</span>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 p-2 rounded-lg bg-slate-700/50">
              <div className="text-[10px] text-slate-500">2024.07</div>
              <div className="text-xs font-semibold text-emerald-400">3,607만원</div>
            </div>
            <div className="flex-1 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="text-[10px] text-slate-500">2025.05</div>
              <div className="text-xs font-semibold text-emerald-400">9,625만원</div>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-slate-400">리뷰 1,435 · 블로그 123</div>
        </div>
      );
    case "daangn":
      return (
        <div className={`${base} p-3`}>
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-4 h-4 text-orange-400" />
            <span className="text-xs text-slate-400">당근 동네생활</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full rounded bg-slate-600" />
            <div className="h-2 w-3/4 rounded bg-slate-600" />
            <div className="text-[10px] text-orange-400">병원 경험담 · 단골 추천</div>
          </div>
        </div>
      );
    case "seokmodo":
      return (
        <div className={`${base} p-3`}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-green-400" />
            <span className="text-xs text-slate-400">석모도 맛집</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded bg-green-500/30 text-green-300 text-[10px] font-bold">상위노출</span>
              <span className="text-[10px] text-slate-400">23일째</span>
            </div>
            <div className="h-2 w-full rounded bg-slate-600" />
          </div>
        </div>
      );
    default:
      return <div className={`${base} p-3 h-20`} />;
  }
}

export function ReferenceSection() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % references.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <BelloLogo className="opacity-80" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 font-[var(--font-heading)] leading-tight">
            말보다 숫자로 보여드립니다
          </h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            위례 샤브샤브·마곡 한식·석모도 맛집·당근 동네생활까지, 실제 진행한 채널과 매출·노출 수치를 그대로 공개합니다. 같은 전략을 우리 매장에도 적용할 수 있는지, 레퍼런스로 판단하실 수 있습니다.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <div className="flex overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                {references.map((card, i) =>
                  i === current ? (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.3 }}
                      className="w-full glass rounded-2xl border border-white/10 p-6 lg:p-8 flex flex-col lg:flex-row gap-6 items-center"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-amber-400">{card.platform}</span>
                        <h3 className="text-lg lg:text-xl font-semibold text-white mt-1">{card.title}</h3>
                        <p className="text-emerald-400/90 text-sm font-medium mt-2">{card.metric}</p>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{card.sub}</p>
                      </div>
                      <div className="w-full max-w-[280px] shrink-0">
                        <ReferenceVisual card={card} />
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {references.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-amber-500" : "w-2 bg-white/30 hover:bg-white/50"}`}
                  aria-label={`레퍼런스 ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
