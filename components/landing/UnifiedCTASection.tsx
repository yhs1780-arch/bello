"use client";

const ACCENT = "#FFD600";
const BG_DARK = "#0B0F1A";

export function UnifiedCTASection() {
  return (
    <section
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: ACCENT }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="text-center lg:text-left">
          <p className="text-lg sm:text-xl font-medium mb-1" style={{ color: BG_DARK }}>지금 맡기시면,</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 break-keep" style={{ color: BG_DARK }}>
            다음 달 이 숫자가 우리 가게 얘기입니다.
          </h2>
          <p className="text-base sm:text-lg opacity-90" style={{ color: BG_DARK }}>
            10분 무료 상담으로 맞춤 채널 조합 + 예상 성과 리포트 제공
          </p>
        </div>
        <div className="shrink-0 flex flex-col items-center lg:items-end gap-3">
          <a
            href="#consulting-form"
            className="inline-block px-8 py-4 rounded-xl font-bold text-lg text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: BG_DARK }}
          >
            지금 무료 진단 받기 →
          </a>
          <p className="text-sm font-medium" style={{ color: BG_DARK }}>⚡ 월 선착순 15개 업체 한정</p>
          <p className="text-sm opacity-90" style={{ color: BG_DARK }}>📞 상담 후 부담 없이 거절 가능</p>
        </div>
      </div>
    </section>
  );
}
