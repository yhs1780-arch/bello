"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Building2, User, Hash } from "lucide-react";
import { BelloLogo } from "./BelloLogo";

/** 사업자등록증 기반 회사 정보 */
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
    <footer id="footer" className="relative w-full max-w-full overflow-hidden border-t border-white/5 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <BelloLogo className="inline-block mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6 break-keep">
              데이터로 증명하는 압도적 실행력. 기획부터 실행까지 빈틈없는 다이렉트 솔루션, BELLO.
            </p>
            <dl className="flex flex-col gap-2 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <Building2 className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD700]/70" />
                <div>
                  <dt className="sr-only">상호</dt>
                  <dd className="font-medium text-slate-300">{COMPANY.name} (BELLO COMPANY)</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <User className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD700]/70" />
                <div>
                  <dt className="sr-only">대표</dt>
                  <dd>대표이사 {COMPANY.ceo}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Hash className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD700]/70" />
                <div>
                  <dt className="sr-only">사업자등록번호</dt>
                  <dd>사업자등록번호 {COMPANY.bizNo}</dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD700]/70" />
                <div>
                  <dt className="sr-only">사업장 소재지</dt>
                  <dd className="break-keep">{COMPANY.address}</dd>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs">
                <span>개업 {COMPANY.openDate}</span>
                <span className="text-slate-600">·</span>
                <span>광고 대행업</span>
              </div>
            </dl>
            <div className="flex flex-col gap-3 text-sm text-slate-400 mt-6">
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-[#FFD700] transition-colors break-keep">
                <Mail className="w-4 h-4 shrink-0" />
                {COMPANY.email}
              </a>
              <a href={`tel:${COMPANY.phone.replace(/-/g, "")}`} className="flex items-center gap-2 hover:text-[#FFD700] transition-colors break-keep">
                <Phone className="w-4 h-4 shrink-0" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">서비스</p>
            <Link href="/beauty" className="text-sm text-slate-400 hover:text-[#FFD700] transition-colors break-keep">
              뷰티/의료
            </Link>
            <Link href="/local" className="text-sm text-slate-400 hover:text-[#FFD700] transition-colors break-keep">
              F&B/로컬
            </Link>
            <Link href="/commerce" className="text-sm text-slate-400 hover:text-[#FFD700] transition-colors break-keep">
              커머스/온라인
            </Link>
            <Link href="/cases" className="text-sm text-slate-400 hover:text-[#FFD700] transition-colors break-keep">
              성과 사례 30+
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition break-keep">
            이용약관
          </Link>
          <span className="text-slate-600">|</span>
          <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition break-keep">
            개인정보처리방침
          </Link>
        </div>
        <p className="text-xs text-slate-500 mt-4 text-center break-keep">
          © {new Date().getFullYear()} {COMPANY.name} ({COMPANY.nameEn}). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
