"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition break-keep">
          <ArrowLeft className="w-4 h-4" />
          홈으로
        </Link>
        <h1 className="text-2xl font-bold text-white mb-6 break-keep">개인정보처리방침</h1>
        <div className="prose prose-invert prose-sm text-slate-400 space-y-6 break-keep">
          <p><strong className="text-slate-300">1. 개인정보의 처리 목적</strong> 벨로컴퍼니는 컨설팅 신청 및 서비스 제공, 마케팅 정보 안내를 목적으로 개인정보를 처리합니다.</p>
          <p><strong className="text-slate-300">2. 처리하는 개인정보 항목</strong> 이름, 연락처, 이메일, 업체명, 사이트 접속 기록(쿠키, IP 등).</p>
          <p><strong className="text-slate-300">3. 개인정보의 파기</strong> 원칙적으로 개인정보 처리 목적이 달성된 후(상담 종료 후 1년) 지체 없이 파기합니다.</p>
          <p><strong className="text-slate-300">4. 제3자 제공 및 위탁</strong> 회사는 이용자의 사전 동의 없이 개인정보를 외부에 제공하지 않습니다.</p>
          <p><strong className="text-slate-300">5. 이용자의 권리</strong> 이용자는 언제든지 등록된 개인정보의 조회, 수정, 삭제를 요청할 수 있습니다.</p>
          <p className="pt-2"><strong className="text-slate-300">개인정보 보호책임자:</strong> contact@bellocompany.com</p>
        </div>
      </div>
    </div>
  );
}
