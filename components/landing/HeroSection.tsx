"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* 깊이감 있는 그라데이션 배경 */}
      <div className="absolute inset-0 bg-mesh opacity-80 animate-hero-gradient" />
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-24 h-72 w-72 rounded-full bg-yellow-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-140px] right-10 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        {/* 좌측: 카피 & CTA */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-200 shadow-sm backdrop-blur-md">
            <span className="text-base">✨</span>
            <span className="tracking-tight">월 매출 100억 실행사의 압도적 퍼포먼스</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            말뿐인 대행사에 지치셨습니까?
            <br />
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
              결과로 증명하는 1% 실행팀
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 md:text-xl">
            하청에 하청을 거치는 거품을 뺐습니다.
            <br />
            기획부터 촬영, 배포까지 100% 직접 실행하여 사장님의 매장을 지역 1등으로 만듭니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="#consulting-form"
              data-cta="free_diagnosis"
              className="btn-gold-shimmer relative inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-sm font-bold text-black shadow-[0_18px_45px_rgba(250,204,21,0.45)] transition-transform hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#FFD700,#FDB931)" }}
            >
              무료 진단 받기
            </Link>
            <Link
              href="#case-section"
              data-cta="case_section"
              className="inline-flex items-center justify-center rounded-xl border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-100 transition-colors hover:bg-white/5"
            >
              성과 사례 보기
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400 lg:justify-start">
            <span>✔ 300+ 월간 관리 매장</span>
            <span className="hidden text-gray-600 sm:inline">|</span>
            <span>✔ 97% 재계약률</span>
            <span className="hidden text-gray-600 sm:inline">|</span>
            <span>✔ 0% 대행 수수료</span>
          </div>
        </div>

        {/* 우측: 플로팅 성과 카드 UI */}
        <div className="relative flex h-[300px] sm:h-[340px] items-center justify-center lg:h-[380px]">
          {/* 베이스 플로팅 패널 */}
          <div className="glass relative h-full w-full max-w-sm sm:max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_30px_120px_rgba(15,23,42,0.9)] backdrop-blur-2xl">
            <div className="mb-5 flex items-center justify-between text-xs text-slate-300">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                라이브 캠페인 대시보드
              </span>
              <span className="text-[10px] text-slate-400">실시간 업데이트</span>
            </div>

            {/* 중앙: 매출 그래프 카드 */}
            <div className="animate-float-medium glass-strong relative mx-auto w-[88%] rounded-2xl px-4 py-4">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-200">
                <span className="font-semibold">월 매출 추이</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">+280% 상승</span>
              </div>
              <div className="relative h-24 sm:h-28 overflow-hidden rounded-xl bg-slate-900/80">
                {/* 가짜 그래프 라인들 */}
                <div className="absolute inset-x-3 bottom-3 h-20">
                  <div className="absolute inset-x-0 top-1 h-px bg-slate-800/80" />
                  <div className="absolute inset-x-0 top-1/2 h-px bg-slate-800/60" />
                  <div className="absolute inset-x-0 bottom-1 h-px bg-slate-800/40" />
                  <svg
                    viewBox="0 0 160 80"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#FACC15" />
                        <stop offset="100%" stopColor="#FDBA74" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M4 70 C 24 62, 36 54, 52 58 C 70 64, 78 40, 96 36 C 114 32, 122 26, 144 18"
                      fill="none"
                      stroke="url(#hero-line)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M4 70 C 24 62, 36 54, 52 58 C 70 64, 78 40, 96 36 C 114 32, 122 26, 144 18 L 160 80 L 0 80 Z"
                      fill="url(#hero-line)"
                      opacity="0.15"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
                <span>실행 전 대비</span>
                <span className="font-semibold text-emerald-300">매출 지표 +280% / 4주</span>
              </div>
            </div>

            {/* 좌측 상단: 모바일 알림 카드 */}
            <div className="animate-float-slow glass absolute -left-4 top-4 w-36 sm:w-44 -translate-y-2 rounded-2xl border border-white/15 bg-slate-900/80 px-3 py-3 text-[11px] text-slate-100 shadow-lg">
              <div className="mb-1.5 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6F0F] text-xs font-bold text-white">
                  당
                </div>
                <span className="text-[10px] text-slate-400">방금 전 · 당근마켓</span>
              </div>
              <p className="leading-snug">
                <span className="font-semibold text-white">동네 주민 12명</span>이
                <br />
                단골을 새로 맺었습니다.
              </p>
            </div>

            {/* 우측 하단: 네이버 플레이스 랭킹 카드 */}
            <div className="animate-float-fast glass absolute -right-2 bottom-3 w-40 sm:w-48 translate-y-2 rounded-2xl border border-white/15 bg-slate-900/85 px-3 py-3 text-[11px] text-slate-100 shadow-xl">
              <div className="mb-2 rounded-full bg-[#03C75A] px-3 py-1 text-[10px] font-semibold text-black">
                NAVER 플레이스 · 지역 검색
              </div>
              <p className="text-xs font-semibold text-white">홍대 맛집 검색 1위 고정</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-[11px] text-slate-300">지난 90일 유지</span>
                <span className="text-[11px] text-[#FFD700]">★★★★★ 4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

