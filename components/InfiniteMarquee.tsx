"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "네이버 플레이스",
  "바비톡",
  "강남언니",
  "화해",
  "당근마켓",
  "샤오홍슈",
  "카카오맵",
  "스마트스토어",
  "쿠팡",
  "요기요",
  "에어비앤비",
  "무신사",
  "블라인드",
  "캐치테이블",
];

function Row({ items, direction }: { items: string[]; direction: "ltr" | "rtl" }) {
  const copy = [...items, ...items];
  const keyframes = direction === "ltr" ? ["0%", "-50%"] : ["-50%", "0%"];
  return (
    <div className="flex w-full max-w-full overflow-hidden border-y border-white/5 py-4 min-w-0">
      <motion.div
        className="flex shrink-0 gap-6 md:gap-10"
        style={{ width: "max-content" }}
        animate={{ x: keyframes as [string, string] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {copy.map((label, i) => (
          <span
            key={`${i}-${label}`}
            className="text-sm md:text-base font-semibold text-white/20 whitespace-nowrap break-keep"
          >
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function InfiniteMarquee() {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-slate-950/80 border-y border-white/5">
      <Row items={ITEMS} direction="ltr" />
      <Row items={[...ITEMS].reverse()} direction="rtl" />
    </section>
  );
}
