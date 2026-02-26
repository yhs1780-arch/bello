"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { successCards } from "@/lib/data";
import { Plus } from "lucide-react";

const DUPLICATE = 2;

function Card({
  card,
  index,
}: {
  card: { title: string; desc: string; metric?: string };
  index: number;
}) {
  const [hover, setHover] = useState(false);
  return (
    <motion.article
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="shrink-0 snap-center w-[85vw] min-w-[280px] md:w-[350px] md:min-w-[350px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % successCards.length) * 0.05 }}
    >
      <motion.div
        className="glass rounded-2xl border border-white/10 p-6 h-full flex flex-col transition-shadow duration-300 min-h-[180px]"
        animate={{
          y: hover ? -6 : 0,
          boxShadow: hover ? "0 24px 48px -12px rgba(59, 130, 246, 0.2)" : "0 4px 24px -4px rgba(0,0,0,0.2)",
        }}
      >
        {card.metric && (
          <p className="text-blue-400 font-semibold text-sm mb-2 break-keep">{card.metric}</p>
        )}
        <h3 className="text-lg font-semibold text-white mb-2 break-keep">{card.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 break-keep">{card.desc}</p>
      </motion.div>
    </motion.article>
  );
}

export function DataDrivenSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const handleDragEnd = useCallback(() => setIsDragging(false), []);

  return (
    <section className="relative py-16 sm:py-20 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-8 sm:mb-14">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-slate-100 mb-3 sm:mb-4 break-keep">
            Data-Driven Success
          </h2>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            말보다 숫자로 보여드립니다.
            <br className="block md:hidden" />
            <br className="hidden md:block" />
            실제 매출·노출 데이터 기반 성공 사례입니다.
          </p>
        </ScrollReveal>
      </div>

      <div
        ref={scrollRef}
        className="w-full overflow-x-auto overflow-y-visible scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex flex-nowrap gap-4 sm:gap-6 pb-6"
          style={{
            paddingLeft: "max(1rem, env(safe-area-inset-left))",
            paddingRight: "max(1rem, env(safe-area-inset-right))",
          }}
        >
          {Array.from({ length: DUPLICATE }).map((_, copyIdx) =>
            successCards.map((card, i) => (
              <Card key={`${copyIdx}-${card.title}-${i}`} card={card} index={copyIdx * successCards.length + i} />
            ))
          )}
          <div className="w-8 md:w-12 shrink-0" aria-hidden />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex justify-center mt-6 sm:mt-10">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-slate-300 font-medium hover:bg-white/10 hover:text-white transition-all duration-300 break-keep"
            >
              더 많은 성공 사례 보기
              <Plus className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
