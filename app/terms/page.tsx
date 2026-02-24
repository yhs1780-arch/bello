"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition break-keep">
          <ArrowLeft className="w-4 h-4" />
          홈으로
        </Link>
        <h1 className="text-2xl font-bold text-white mb-6 break-keep">이용약관</h1>
        <div className="prose prose-invert prose-sm text-slate-400 space-y-4 break-keep">
          <p>벨로컴퍼니(이하 &quot;회사&quot;)가 제공하는 서비스의 이용과 관련한 사항을 규정합니다.</p>
          <p>본 약관은 서비스 이용 시 적용되며, 회사는 필요한 경우 약관을 개정할 수 있습니다.</p>
          <p>문의: contact@example.com</p>
        </div>
      </div>
    </div>
  );
}
