"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getCaseById } from "@/lib/casesData";

export default function CaseDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const item = getCaseById(id);

  if (!item || Number.isNaN(id)) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-16 bg-[#0B1120] w-full max-w-full overflow-x-hidden">
      {/* 대표 이미지: 가로로 넓게 꽉 차게 */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[3/1] overflow-hidden bg-slate-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
      </div>

      <article className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 -mt-24 sm:-mt-32 z-10">
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#FFD700] mb-8 transition-colors break-keep"
        >
          <ArrowLeft className="w-4 h-4" />
          성과 사례 목록으로
        </Link>

        {/* 플랫폼 뱃지 */}
        <span className="inline-block bg-black/70 backdrop-blur-md text-[#FFD700] px-4 py-2 rounded-full text-sm font-bold mb-4 break-keep">
          {item.badge}
        </span>

        {/* 제목(H1) */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 break-keep leading-snug">
          {item.title}
        </h1>

        {/* 성과 하이라이트(H2 - 골드) */}
        <h2 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-10 break-keep">
          {item.metrics}
        </h2>

        {/* 본문: 문제점 / 해결책 / 실행 결과 */}
        <div className="space-y-10 text-slate-300">
          <section>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 break-keep">
              <span role="img" aria-hidden>🚨</span> [문제점 진단]
            </h3>
            <p className="leading-relaxed break-keep">
              &ldquo;{item.problem}&rdquo;
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 break-keep">
              <span role="img" aria-hidden>💡</span> [벨로의 해결책]
            </h3>
            <p className="leading-relaxed break-keep">
              &ldquo;{item.solution}&rdquo;
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2 break-keep">
              <span role="img" aria-hidden>📈</span> [실행 결과]
            </h3>
            <p className="leading-relaxed break-keep">
              &ldquo;{item.result}&rdquo;
            </p>
          </section>
        </div>

        <div className="mt-14 pt-10 border-t border-white/10">
          <Link
            href="/#consulting-form"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FFD700] text-[#0B1120] font-semibold hover:bg-[#FFE44D] transition-colors break-keep"
          >
            우리 가게도 무료 진단받기
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </article>
    </div>
  );
}
