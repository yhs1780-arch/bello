"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Building2, User, Hash, ArrowRight } from "lucide-react";
import { BelloLogo } from "./BelloLogo";

const COMPANY = {
  name: "벨로컴퍼니",
  nameEn: "BELLO COMPANY",
  ceo: "한민영",
  bizNo: "184-14-01696",
  address: "전라남도 화순군 동복면 만수동길 58",
  openDate: "2022년 3월 15일",
  email: "ccoma2522@naver.com",
  phone: "010-6409-9549",
};

export function Footer() {
  return (
    <footer id="footer" className="relative w-full max-w-full overflow-hidden border-t border-white/10 bg-[#0B0F1A]">
      {/* 상단 CTA 밴드 */}
      <div className="border-b border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-sm sm:text-base">
                지금 바로, 우리 가게 맞춤 전략을 받아보세요
              </p>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                무료 상담 · 수수료 0% · 10분 내 응답
              </p>
            </div>
            <Link
              href="#consulting-form"
              className="inline-flex items-center gap-2 rounded-xl font-bold text-sm px-5 py-3 bg-[#FFD600] text-[#0B0F1A] hover:bg-[#FFE44D] transition-colors shrink-0"
            >
              무료 전략 받기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* 브랜드 + 소개 */}
          <div className="lg:col-span-5">
            <BelloLogo className="inline-block mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6 break-keep">
              데이터로 증명하는 압도적 실행력.
              <br />
              기획부터 실행까지 빈틈없는 다이렉트 솔루션, BELLO.
            </p>
            <dl className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD600]/80" />
                <div>
                  <dt className="text-slate-500 text-xs font-medium mb-0.5">상호</dt>
                  <dd className="text-slate-200 font-medium">{COMPANY.name} ({COMPANY.nameEn})</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD600]/80" />
                <div>
                  <dt className="text-slate-500 text-xs font-medium mb-0.5">대표</dt>
                  <dd className="text-slate-300">대표이사 {COMPANY.ceo}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Hash className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD600]/80" />
                <div>
                  <dt className="text-slate-500 text-xs font-medium mb-0.5">사업자등록번호</dt>
                  <dd className="text-slate-300">{COMPANY.bizNo}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD600]/80" />
                <div>
                  <dt className="text-slate-500 text-xs font-medium mb-0.5">사업장 소재지</dt>
                  <dd className="text-slate-300 break-keep">{COMPANY.address}</dd>
                </div>
              </div>
              <p className="text-slate-500 text-xs pl-7">
                개업 {COMPANY.openDate} · 광고 대행업
              </p>
            </dl>
          </div>

          {/* 연락처 + 서비스 */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-8 sm:gap-12">
            <div>
              <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">연락처</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-[#FFD600] transition-colors text-sm"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#FFD600]/70" />
                  </span>
                  {COMPANY.email}
                </a>
                <a
                  href={`tel:${COMPANY.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-[#FFD600] transition-colors text-sm"
                >
                  <span className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#FFD600]/70" />
                  </span>
                  {COMPANY.phone}
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">서비스</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/beauty" className="text-sm text-slate-300 hover:text-[#FFD600] transition-colors w-fit">
                  뷰티/의료
                </Link>
                <Link href="/local" className="text-sm text-slate-300 hover:text-[#FFD600] transition-colors w-fit">
                  F&B/로컬
                </Link>
                <Link href="/commerce" className="text-sm text-slate-300 hover:text-[#FFD600] transition-colors w-fit">
                  커머스/온라인
                </Link>
                <Link href="/cases" className="text-sm text-slate-300 hover:text-[#FFD600] transition-colors w-fit font-medium">
                  성과 사례 30+
                </Link>
              </nav>
            </div>
          </div>

          {/* 빈 공간 또는 추가 콘텐츠 */}
          <div className="lg:col-span-3 hidden lg:block" />
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition">
              이용약관
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition">
              개인정보처리방침
            </Link>
          </div>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            © {new Date().getFullYear()} {COMPANY.name} ({COMPANY.nameEn}). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


