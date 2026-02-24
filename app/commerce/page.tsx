"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { DeviceTabSectionCommerce } from "@/components/DeviceTabSectionCommerce";
import { BelloLogo } from "@/components/BelloLogo";
import { commerceTestimonialsFull } from "@/lib/data";

export default function CommercePage() {
  return (
    <div className="min-h-screen pt-16 bg-slate-950">
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <BelloLogo className="mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-blue-400/90 text-sm font-medium tracking-wide uppercase mb-4 break-keep"
          >
            커머스 · 온라인
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight mb-6 font-[var(--font-heading)] break-keep"
          >
            리뷰가 없으면 전환도 안 됩니다.
            <br className="hidden md:block" />
            <span className="text-amber-400">첫 페이지 노출을 만드는</span> 압도적 리뷰 시딩.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed break-keep"
          >
            스마트스토어·쿠팡·화해에서 매크로 없이 실사용자 포토 리뷰만 쌓아 1페이지 진입과 ROAS를 올린 사례를 그대로 적용해 드립니다.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-10">
            <Link href="/#consulting-form" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
              BELLO 무료 매장 진단받기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 대표님 팩트폭행 */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="glass rounded-2xl border border-amber-500/20 p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 break-keep">
              상세페이지 예쁘게 만들면 뭐합니까? 첫 페이지 노출이 안 되는데.
            </h2>
            <p className="text-slate-400 leading-relaxed break-keep">
              리뷰가 없으면 검색에도 안 나오고 전환율도 바닥입니다. 매크로·어뷰징은 제재만 부르고, 대행사는 단가만 올라갑니다. BELLO는 실사용자 풀로만 포토 리뷰와 별점을 쌓아, 1페이지 진입과 CVR·ROAS를 동시에 올리는 실행만 합니다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 맞춤형 전략 */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 break-keep">맞춤형 전략</h2>
            <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
              스마트스토어·쿠팡 타겟 포토 리뷰 작업, 화해·글로우픽 뷰티 앱 랭킹 진입 시딩까지 한 팀에서 설계합니다.
            </p>
          </ScrollReveal>
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-2 break-keep">채널별 1페이지·랭킹</h3>
              <p className="text-slate-400 text-sm leading-relaxed break-keep">
                쿠팡 베스트·화해 랭킹·스마트스토어 만점 등 채널별 목표에 맞춰 실사용자 포토 리뷰 시딩. 제재 리스크 없이 장기 운영.
              </p>
            </div>
            <div className="glass rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-2 break-keep">CVR·ROAS 극대화</h3>
              <p className="text-slate-400 text-sm leading-relaxed break-keep">
                실구매 기반 고퀄리티 리뷰로 클릭→구매 전환을 끌어올립니다. 대행사 마진 없이 실행사 다이렉트로 단가·품질 모두 확보.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DeviceTabSectionCommerce />

      <TestimonialCarousel items={commerceTestimonialsFull} title="고객 후기" subtitle="커머스·온라인 실제 고객사가 남긴 후기입니다." />

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-300 mb-2 text-base font-medium">1페이지·CVR을 제재 없이 올리고 싶다면</p>
            <p className="text-slate-400 mb-6 text-sm">현재 노출·전환 상태를 무료로 진단해 드린 뒤, 채널에 맞는 리뷰 시딩 플랜을 제안합니다.</p>
            <Link href="/#consulting-form" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
              무료 매장 진단받기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
