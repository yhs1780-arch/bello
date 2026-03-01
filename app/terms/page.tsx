"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16 bg-slate-950 w-full max-w-full overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-w-0">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition break-keep">
          <ArrowLeft className="w-4 h-4" />
          홈으로
        </Link>
        <h1 className="text-2xl font-bold text-white mb-6 break-keep">이용약관</h1>
        <div className="prose prose-invert prose-sm text-slate-400 space-y-6 break-keep">
          <p><strong className="text-slate-300">제1조 (목적)</strong> 본 약관은 벨로컴퍼니(이하 &quot;회사&quot;)가 제공하는 디지털 마케팅 서비스 및 웹사이트 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
          <p><strong className="text-slate-300">제2조 (서비스의 제공)</strong> 회사는 무료 마케팅 진단, 플레이스 최적화, 바이럴 마케팅 등의 B2B 서비스를 제공하며, 구체적인 계약 사항은 별도의 서면 계약에 따릅니다.</p>
          <p><strong className="text-slate-300">제3조 (이용자의 의무)</strong> 이용자는 컨설팅 신청 시 허위 정보를 기재해서는 안 되며, 회사의 영업 방해 및 지적재산권을 침해하는 행위를 금합니다.</p>
          <p><strong className="text-slate-300">제4조 (면책조항)</strong> 회사는 천재지변, 플랫폼(네이버, 메타 등)의 정책 변경 등 불가항력적 사유로 인한 서비스 장애 및 노출 순위 변동에 대해 책임을 지지 않습니다.</p>
        </div>
      </div>
    </div>
  );
}
