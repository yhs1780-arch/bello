"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BelloLogo } from "./BelloLogo";

export function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/5 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <BelloLogo />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8 break-keep">
              데이터로 증명하는 압도적 실행력. 기획부터 실행까지 빈틈없는 다이렉트 솔루션, BELLO.
            </p>
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors break-keep">
                <Mail className="w-4 h-4 shrink-0" />
                contact@example.com
              </a>
              <a href="tel:02-1234-5678" className="flex items-center gap-2 hover:text-blue-400 transition-colors break-keep">
                <Phone className="w-4 h-4 shrink-0" />
                02-1234-5678
              </a>
              <span className="flex items-center gap-2 break-keep">
                <MapPin className="w-4 h-4 shrink-0" />
                서울시 강남구 테헤란로 123
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Link href="/beauty" className="text-sm text-slate-400 hover:text-slate-200 transition-colors break-keep">
              뷰티/의료
            </Link>
            <Link href="/local" className="text-sm text-slate-400 hover:text-slate-200 transition-colors break-keep">
              F&B/로컬
            </Link>
            <Link href="/commerce" className="text-sm text-slate-400 hover:text-slate-200 transition-colors break-keep">
              커머스/온라인
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
        <p className="text-xs text-slate-500 mt-4 break-keep">
          © {new Date().getFullYear()}{" "}
          <span className="whitespace-nowrap">벨로컴퍼니</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
