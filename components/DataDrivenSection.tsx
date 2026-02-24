"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { successCards } from "@/lib/data";
import { Plus } from "lucide-react";

const CARD_WIDTH = 320;
const GAP = 24;
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
      className="shrink-0 snap-center"
      style={{ width: CARD_WIDTH }}
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
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 break-keep">
            Data-Driven Success
          </h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            말보다 숫자로 보여드립니다.
            <br className="hidden md:block" />
            실제 매출·노출 데이터 기반 성공 사례입니다.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ paddingLeft: "max(1rem, env(safe-area-inset-left))", paddingRight: "max(1rem, env(safe-area-inset-right))" }}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchEnd={handleDragEnd}
          >
            {Array.from({ length: DUPLICATE }).map((_, copyIdx) =>
              successCards.map((card, i) => (
                <Card key={`${copyIdx}-${card.title}-${i}`} card={card} index={copyIdx * successCards.length + i} />
              ))
            )}
          </div>
          <div className="flex justify-center mt-10">
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
