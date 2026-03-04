"use client";

const LINE1 = [
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
  "배달의민족",
];

const LINE2 = [
  "배달의민족",
  "캐치테이블",
  "블라인드",
  "무신사",
  "에어비앤비",
  "요기요",
  "쿠팡",
  "스마트스토어",
  "카카오맵",
  "샤오홍슈",
  "당근마켓",
  "화해",
  "강남언니",
  "바비톡",
  "네이버 플레이스",
];

const BULLET = "•";

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const list = [...items, ...items];
  return (
    <div className="overflow-hidden marquee-mask">
      <div
        className={`flex w-max items-center ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ gap: "1.5rem" }}
      >
        {list.map((name, i) => (
          <span key={i} className="flex-shrink-0 flex items-center gap-[1.5rem] whitespace-nowrap text-lg md:text-xl font-semibold text-slate-400">
            <span className={i % 5 === 0 ? "text-[#FFD700]/90" : "text-slate-400"}>{name}</span>
            <span className="text-[#FFD700]/40 select-none">{BULLET}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function PlatformMarquee() {
  return (
    <section className="relative w-full py-6 sm:py-8 overflow-hidden bg-[#0B1120] border-y border-white/5">
      <div className="flex flex-col gap-y-6">
        <MarqueeRow items={LINE1} />
        <MarqueeRow items={LINE2} reverse />
      </div>
    </section>
  );
}
