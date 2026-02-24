"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { platforms } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VISIBLE = 3;
const AUTO_INTERVAL = 5000;

export function PlatformCarousel() {
  const [index, setIndex] = useState(0);
  const total = Math.ceil(platforms.length / VISIBLE);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_INTERVAL);
    return () => clearInterval(t);
  }, [total]);

  const slice = platforms.slice(index * VISIBLE, index * VISIBLE + VISIBLE);

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 font-[var(--font-heading)]">
            플랫폼별 실행 역량
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            100개 플랫폼, 클라이언트가 원하면 다 가능합니다. 네이버·카카오·쿠팡·틱톡 등
            실사용자 기반 실행만 제공합니다.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {slice.map((p) => (
                    <div
                      key={p.name}
                      className={`glass rounded-2xl p-6 border ${p.border} hover:border-white/15 transition-colors h-full`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br ${p.color} border border-white/5 mb-4`}
                      >
                        <p.icon className="w-5 h-5 text-slate-200" />
                        <span className="text-xs font-semibold text-slate-200">{p.name}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {p.name}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + total) % total)}
                className="p-2 rounded-xl bg-white/10 border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="이전"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-6 bg-blue-500" : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`슬라이드 ${i + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % total)}
                className="p-2 rounded-xl bg-white/10 border border-white/10 text-slate-300 hover:text-white hover:bg-white/15 transition-colors"
                aria-label="다음"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
