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
        <div className="prose prose-invert prose-sm text-slate-400 space-y-4 break-keep">
          <p>벨로컴퍼니는 이용자의 개인정보를 보호하며, 관련 법령을 준수합니다.</p>
          <p>수집 항목: 이름, 연락처, 이메일(선택), 업체명(선택), 문의 내용</p>
          <p>보유 기간: 상담 완료 후 1년 (법령에 따라 보관 시 해당 기간)</p>
          <p>문의: contact@example.com</p>
        </div>
      </div>
    </div>
  );
}
