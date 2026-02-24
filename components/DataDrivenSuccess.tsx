"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const CARDS = [
  {
    src: "/magok.jpg",
    alt: "마곡 한식집",
    title: "마곡 한식집",
    desc: "오픈 전부터 세팅, 월 매출 6,018만 원 증가",
  },
  {
    src: "/wirye.jpg",
    alt: "위례 샤브샤브",
    title: "위례 샤브샤브",
    desc: "최고 매출 달성, 4,874만 원 수직 상승",
  },
  {
    src: "/graph.png",
    alt: "꾸준한 마케팅 효과",
    title: "꾸준한 마케팅 효과",
    desc: "장사가 안 될 때 하는 마케팅은 늦습니다. 꾸준한 노출의 힘",
  },
];

function DataCard({ card, delay }: { card: (typeof CARDS)[0]; delay: number }) {
  const [imgError, setImgError] = useState(false);
  return (
    <ScrollReveal delay={delay}>
      <motion.article
        className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-amber-500/5"
        whileHover={{ y: -4 }}
      >
        <div className="relative aspect-[4/3] bg-slate-800/50">
          {!imgError ? (
            <Image
              src={card.src}
              alt={card.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm break-keep">
              {card.title}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <h3 className="text-lg font-semibold text-white break-keep">{card.title}</h3>
            <p className="text-sm text-slate-300 mt-1 break-keep">{card.desc}</p>
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}

export function DataDrivenSuccess() {
  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 font-[var(--font-heading)] leading-tight break-keep">
            말보다 숫자로 보여드립니다
          </h2>
          <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
            실제 매출·노출 데이터를 담은 Data-Driven Success.
            <br className="hidden md:block" />
            로컬 이미지로 검증된 결과만 공개합니다.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <DataCard key={card.title} card={card} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
