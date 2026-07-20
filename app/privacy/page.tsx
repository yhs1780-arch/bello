"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PRIVACY_FULL = `벨로컴퍼니(이하 「회사」)는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하고 이와 관련한 고충을 신속·원활하게 처리하기 위해 다음과 같이 개인정보처리방침을 수립·공개합니다.

■ 1. 수집하는 개인정보 항목 및 수집 방법

(1) 홈페이지 무료 컨설팅·상담 신청 시 [필수]
  · 성함, 소재지, 업종, 운영기간, 연락처, 상호명, 네이버플레이스 주소(또는 미등록 여부)
  · 한 달 평균 마케팅 비용(또는 예산), 월 평균 매출 구간, 진행 중인 마케팅 채널
  · 지금 가장 큰 고민, 상담 편한 시간

(2) 서비스 이용 과정에서 자동 수집될 수 있는 항목
  · 유입 경로(광고·링크 출처), 접속 요청 경로, 쿠키, 접속 IP, 브라우저 정보 등

(3) 수집 방법
  · 홈페이지 상담 신청 폼, 이메일·전화·카카오톡 등 상담 채널

■ 2. 개인정보의 수집·이용 목적

  · 무료 컨설팅·마케팅 진단 신청 접수 및 본인 확인
  · 업종·매장 현황 분석 및 맞춤 노출·마케팅 전략 제안
  · 상담 일정 조율, 견적·서비스 안내 및 문의 응대
  · 서비스 품질 개선 및 내부 통계(식별 불가 형태)

■ 3. 개인정보의 보유 및 이용 기간

  · 원칙: 상담·문의 처리 목적 달성 후 1년 보관
  · 예외: 전자상거래 등에서의 소비자 보호에 관한 법률, 국세기본법 등 관련 법령에 따라 보관이 필요한 경우 해당 법령에서 정한 기간까지 보관
  · 보유 기간 경과 또는 목적 달성 시 지체 없이 파기

■ 4. 개인정보의 파기 절차 및 방법

  · 파기 절차: 보유 기간 경과·처리 목적 달성 후 내부 방침에 따라 파기
  · 파기 방법: 전자적 파일은 복구·재생 불가능한 방법으로 삭제, 출력물은 분쇄 또는 소각

■ 5. 개인정보의 제3자 제공

  · 회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
  · 다만, 이용자의 사전 동의가 있거나 법령에 특별한 규정이 있는 경우에 한해 제공할 수 있습니다.

■ 6. 개인정보 처리 위탁

  · 문의 접수·알림 전달을 위해 Formspree(미국, Formspree Inc.) 등 전자문의 처리 서비스를 이용할 수 있습니다.
  · 위탁 시 개인정보가 안전하게 관리되도록 계약·관리·감독을 실시합니다.

■ 7. 이용자의 권리·의무 및 행사 방법

  · 이용자는 언제든지 개인정보 열람·정정·삭제·처리정지·동의 철회를 요청할 수 있습니다.
  · 요청은 이메일(ccoma2522@naver.com) 또는 전화(010-6409-9549)로 가능하며, 회사는 지체 없이 조치합니다.

■ 8. 쿠키(Cookie)의 운용

  · 회사는 서비스 이용 편의 및 통계 분석을 위해 쿠키를 사용할 수 있습니다.
  · 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 일부 서비스 이용에 제한이 있을 수 있습니다.

■ 9. 개인정보의 안전성 확보 조치

  · 접근 권한 관리, 암호화 저장, 접속 기록 보관, 내부 관리 계획 수립 등 법령이 요구하는 보호 조치를 시행합니다.

■ 10. 개인정보 보호책임자

  · 담당: 벨로컴퍼니 개인정보보호 담당
  · 연락처: ccoma2522@naver.com / 010-6409-9549
  · 사업장 소재지: 서울특별시 강남구 테헤란로 521

■ 11. 개인정보처리방침 변경

  · 본 방침은 2026년 7월 21일부터 시행합니다.
  · 내용 추가·삭제·수정 시 홈페이지 공지를 통해 안내합니다.`;

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
