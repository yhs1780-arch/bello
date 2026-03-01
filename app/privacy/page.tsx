"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PRIVACY_FULL = `벨로컴퍼니(이하 [회사])는 고객님의 개인정보를 중요시하며, [정보통신망 이용 촉진 및 정보보호]에 관한 법률을 준수하고 있습니다.

1. 수집하는 개인정보 항목: 상호, 이름, 연락처, 이메일, 업체명, 문의내용 (수집방법: 홈페이지 상담 신청)

2. 개인정보의 수집 및 이용목적: 서비스 신청 및 이용에 따른 본인 확인, 마케팅 및 광고 활용, 서비스 제안

3. 개인정보의 보유 및 이용기간: 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. (상담 완료 후 1년 보관)

4. 파기절차 및 방법: 목적이 달성된 후 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법으로 삭제합니다.

5. 개인정보 제공 및 위탁: 회사는 이용자의 개인정보를 원칙적으로 외부에 제공하거나 위탁하지 않습니다. 단, 법령의 규정에 의거한 경우는 예외로 합니다.

6. 쿠키의 설치, 운영 및 거부: 회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다. 귀하는 웹브라우저 옵션을 설정함으로써 모든 쿠키를 허용하거나 거부할 수 있습니다.

7. 개인정보 보호책임자: contact@bellocompany.co.kr

본 방침은 2024년부터 시행됩니다.`;

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16 bg-slate-950 w-full max-w-full overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 min-w-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition break-keep"
        >
          <ArrowLeft className="w-4 h-4" />
          홈으로
        </Link>
        <h1 className="text-2xl font-bold text-white mb-6 break-keep">개인정보처리방침</h1>
        <div
          className="prose prose-invert prose-sm text-slate-400 break-keep max-h-[70vh] overflow-y-auto pr-2 rounded-lg border border-white/5 p-6 bg-slate-900/30"
          style={{ minHeight: "320px" }}
        >
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed m-0">
            {PRIVACY_FULL}
          </pre>
        </div>
      </div>
    </div>
  );
}
