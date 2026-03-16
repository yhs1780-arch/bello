\"use client\";

import Link from \"next/link\";
import Image from \"next/image\";
import { useState } from \"react\";

export function HeroSection() {
  const [imgErr, setImgErr] = useState(false);

  return (
    <section
      className=\"relative overflow-hidden\"
      style={{ backgroundColor: \"#070B16\", paddingTop: 84, paddingBottom: 72 }}
    >
      {/* 배경 레이어 */}
      <div className=\"absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,214,0,0.10),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#070B16_0%,#091227_100%)]\" />
      <div
        className=\"absolute inset-0 opacity-[0.03]\"
        style={{
          backgroundImage: `url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")`,
        }}
      />

      <div
        className=\"relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 items-center max-w-[1240px] mx-auto gap-10 lg:gap-14\"
        style={{ padding: \"0 40px\" }}
      >
        {/* 좌측 텍스트 */}
        <div className=\"text-center lg:text-left\">
          <span
            className=\"inline-flex items-center gap-2 border rounded-[30px] font-semibold mb-5\"
            style={{ borderWidth: \"1.5px\", borderColor: \"#FFD600\", color: \"#FFD600\", padding: \"8px 18px\", fontSize: 13 }}
          >
            📞 상담 후 평균 4주, 매출이 달라집니다
          </span>
          <h1
            className=\"font-black text-white leading-tight mb-4 break-keep\"
            style={{ fontSize: \"clamp(38px, 5.2vw, 66px)\", lineHeight: 1.1, letterSpacing: \"-1px\" }}
          >
            광고비만 쓰던 매장을
            <br />
            <span className=\"text-[#FFD600]\">매출이 터지는 매장</span>으로
          </h1>
          <p className=\"mb-6 break-keep\" style={{ fontSize: 17, color: \"#A3AEC2\", lineHeight: 1.7 }}>
            사장님이 원하는 건 노출이 아니라 매출입니다.
            <br />
            벨로컴퍼니는 기획부터 실행까지 직접 운영해 결과로 증명합니다.
          </p>
          <div className=\"grid grid-cols-2 sm:grid-cols-4 gap-2 mb-7\">
            {[
              [\"300+\", \"월간 관리 매장\"],
              [\"0%\", \"수수료\"],
              [\"97%\", \"재계약률\"],
              [\"10,000+\", \"누적 캠페인\"],
            ].map(([value, label]) => (
              <div key={label} className=\"rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-left\">
                <p className=\"text-[#FFD600] font-extrabold text-lg leading-none\">{value}</p>
                <p className=\"text-slate-400 text-[11px] mt-1\">{label}</p>
              </div>
            ))}
          </div>
          <div className=\"flex gap-3 flex-wrap mb-5\">
            <Link
              href=\"#consulting-form\"
              className=\"inline-flex items-center justify-center rounded-[10px] font-bold cursor-pointer border-0\"
              style={{ background: \"#FFD600\", color: \"#000\", fontSize: 16, padding: \"15px 30px\" }}
            >
              무료 진단 받기
            </Link>
            <Link
              href=\"#case-section\"
              className=\"inline-flex items-center justify-center rounded-[10px] font-semibold cursor-pointer\"
              style={{ background: \"transparent\", color: \"#fff\", fontSize: 16, padding: \"15px 24px\", border: \"1.5px solid #3A475F\" }}
            >
              성과 사례 보기 →
            </Link>
          </div>
          <div className=\"flex gap-4 flex-wrap\" style={{ fontSize: 13, color: \"#6B7280\" }}>
            <span>✅ 상담 무료</span>
            <span>✅ 계약 강요 없음</span>
            <span>✅ 10분이면 충분</span>
          </div>
        </div>

        {/* 우측 목업 카드 — 이미지 비율 유지, 매출·실방문자 강조 */}
        <div className=\"relative w-full flex justify-center lg:justify-end\">
          <div className=\"relative w-full max-w-[520px]\">
            <p className=\"absolute left-0 -top-6 text-xs\" style={{ fontSize: 12, color: \"#9CA3AF\" }}>
              벨로컴퍼니 실행 후 4주차
            </p>
            <div
              className=\"bg-white rounded-[20px] overflow-hidden w-full\"
              style={{ boxShadow: \"0 35px 90px rgba(0,0,0,0.65)\" }}
            >
              <div className=\"text-white font-bold text-sm flex items-center\" style={{ background: \"#03C75A\", padding: \"12px 16px\" }}>
                NAVER 플레이스
              </div>
              <div className=\"relative w-full overflow-hidden\" style={{ aspectRatio: \"16/10\", minHeight: 200, backgroundColor: \"#1a1a1a\" }}>
                {imgErr ? (
                  <div className=\"w-full h-full bg-gray-300\" />
                ) : (
                  <>
                    <Image
                      src=\"/images/hero-gopchang.png\"
                      alt=\"홍대 곱창집 그릴\"
                      fill
                      className=\"object-contain\"
                      sizes=\"(max-width: 1024px) 100vw, 520px\"
                      onError={() => setImgErr(true)}
                    />
                    {/* 우하단 제미나이 로고/워터마크 완전 가리기 */}
                    <div
                      className=\"absolute inset-0 pointer-events-none\"
                      style={{
                        background: \"radial-gradient(ellipse 100% 80% at 100% 100%, #0f0f0f 0%, #141414 25%, rgba(20,20,20,0.85) 45%, rgba(10,10,10,0.4) 65%, transparent 85%)\",
                      }}
                    />
                  </>
                )}
                <span
                  className=\"absolute rounded-[20px] text-black font-bold text-xs\"
                  style={{ top: 10, right: 10, background: \"#FFD600\", padding: \"4px 10px\" }}
                >
                  🥇 홍대 곱창 검색 1위
                </span>
              </div>
              <div className=\"px-5 py-3\" style={{ padding: \"14px 20px\" }}>
                <h3 className=\"font-bold text-[#111]\" style={{ fontSize: 17 }}>홍대 OO곱창집</h3>
                <p className=\"text-sm mt-0.5\">
                  <span className=\"text-[#FFD600]\">★★★★★ 4.9</span> <span className=\"text-[#666]\">(리뷰 2,180개)</span>
                </p>
                <div className=\"border-t border-[#f0f0f0] pt-2.5 mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center\">
                  <div>
                    <p className=\"font-extrabold text-[#111]\" style={{ fontSize: 17 }}>5,240회</p>
                    <p className=\"text-[11px] text-[#888]\">월 클릭</p>
                  </div>
                  <div>
                    <p className=\"font-extrabold text-[#111]\" style={{ fontSize: 17 }}>128건</p>
                    <p className=\"text-[11px] text-[#888]\">전화문의</p>
                  </div>
                  <div>
                    <p className=\"font-extrabold text-[#111]\" style={{ fontSize: 17 }}>2,410회</p>
                    <p className=\"text-[11px] text-[#888]\">길찾기</p>
                  </div>
                  <div className=\"col-span-2 sm:col-span-1\">
                    <p className=\"font-extrabold text-[#03C75A]\" style={{ fontSize: 17 }}>+156명</p>
                    <p className=\"text-[11px] text-[#888]\">실방문</p>
                  </div>
                </div>
                <div className=\"mt-3 pt-3 border-t border-[#e5e7eb] flex items-center justify-between gap-2\">
                  <span className=\"text-[13px] font-bold text-[#111]\">매출 전환 (4주차 기준)</span>
                  <span className=\"text-[16px] font-extrabold text-[#03C75A]\">+280%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

