"use client";

const ACCENT = "#FFD600";
const BG_DARK = "#0B0F1A";

export function UnifiedCTASection() {
  return (
    <section
      className="w-full py-6 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: ACCENT }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10">
        <div className="text-center lg:text-left order-2 lg:order-1 w-full">
          <p className="text-base sm:text-xl font-medium mb-1" style={{ color: BG_DARK }}>지금 맡기시면,</p>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 break-keep px-1" style={{ color: BG_DARK }}>
            다음 달 이 숫자가 우리 가게 얘기입니다.
          </h2>
          <p className="text-sm sm:text-lg opacity-90" style={{ color: BG_DARK }}>
            10분 무료 상담으로 맞춤 채널 조합 + 예상 성과 리포트 제공
          </p>
        </div>
        <div className="shrink-0 flex flex-col items-center lg:items-end gap-2 sm:gap-3 w-full lg:w-auto order-1 lg:order-2">
          <a
            href="#consulting-form"
            className="inline-flex items-center justify-center min-h-[48px] w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: BG_DARK }}
          >
            지금 무료 진단 받기 →
          </a>
          <p className="text-xs sm:text-sm font-medium text-center lg:text-right" style={{ color: BG_DARK }}>⚡ 월 선착순 15개 업체 한정</p>
          <p className="text-xs sm:text-sm opacity-90 text-center lg:text-right" style={{ color: BG_DARK }}>📞 상담 후 부담 없이 거절 가능</p>
        </div>
      </div>
    </section>
  );
}
