"use client";

const MEDIA_NAMES = [
  "매일경제",
  "머니투데이",
  "이데일리",
  "아이뉴스24",
  "스타트업투데이",
  "뉴스1",
];

export function MediaExposureBanner() {
  return (
    <section
      className="relative w-full py-4 sm:py-5 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/5"
      style={{ backgroundColor: "#131929" }}
      aria-label="벨로컴퍼니가 소개된 언론"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 min-w-0">
        <p className="text-slate-500 text-xs sm:text-sm font-medium shrink-0">
          벨로컴퍼니가 소개된 곳
        </p>
        <div
          className="flex flex-wrap items-center justify-center sm:justify-end gap-x-2 sm:gap-x-3 gap-y-1 text-slate-400 font-serif text-sm sm:text-base font-semibold"
          style={{ opacity: 0.6 }}
        >
          {MEDIA_NAMES.map((name, i) => (
            <span key={name} className="flex items-center gap-x-2 sm:gap-x-3">
              {i > 0 && <span className="text-slate-600">|</span>}
              <span>{name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
