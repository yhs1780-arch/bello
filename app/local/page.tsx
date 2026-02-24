"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { DeviceTabSectionLocal } from "@/components/DeviceTabSectionLocal";
import { BelloLogo } from "@/components/BelloLogo";
import { localTestimonialsFull } from "@/lib/data";

export default function LocalPage() {
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
            F&B · 로컬
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 leading-tight mb-6 font-[var(--font-heading)] break-keep"
          >
            리뷰·플레이스 없이 검색도 안 나오는 가게?
            <br className="hidden md:block" />
            <span className="text-amber-400">빈 테이블을 웨이팅으로</span> 채워드립니다.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed break-keep"
          >
            매크로 없이 실방문·실이용만으로 플레이스 순위와 웨이팅을 올리고, 위례 샤브·마곡 한식·석모도 맛집처럼 검색 1페이지·입소문을 동시에 잡은 사례를 그대로 적용해 드립니다.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-10">
            <Link href="/#consulting-form" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
              BELLO 무료 매장 진단받기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 사장님 팩트폭행 */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="glass rounded-2xl border border-amber-500/20 p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 break-keep">
              맛만 있으면 언젠가 대박 날 거라는 착각.
            </h2>
            <p className="text-slate-400 leading-relaxed break-keep">
              당근마켓 찔러보기식 광고만으로는 검색 1페이지에 안 나옵니다. 플레이스·리뷰·웨이팅이 없으면 지역 고객이 찾아오지 못하고, 매크로로 올리면 블라인드·제재로 가게 이미지가 추락합니다. BELLO는 실방문·실이용 기반으로만 순위와 입소문을 쌓아, 줄 서는 핫플로 만드는 실행만 합니다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 맞춤형 퍼널 Step UI */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 break-keep">맞춤형 퍼널 전략</h2>
            <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
              노출 → 전환 → 유지까지 한 흐름으로 설계합니다.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: 1, title: "노출", desc: "당근 동네생활 침투 및 네이버 1페이지 장악" },
                { step: 2, title: "전환", desc: "블로그·영수증 리얼 리뷰로 방문 결심 유도" },
                { step: 3, title: "유지", desc: "캐치테이블 웨이팅 단골 락인(Lock-in)" },
              ].map((item, i) => (
                <div key={item.step} className="relative">
                  {i < 2 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-white/10" />}
                  <div className="glass rounded-2xl border border-white/10 p-6 h-full">
                    <span className="inline-flex w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 font-bold items-center justify-center text-lg mb-4">{item.step}</span>
                    <h3 className="text-lg font-semibold text-white mb-2 break-keep">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed break-keep">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DeviceTabSectionLocal />

      <TestimonialCarousel items={localTestimonialsFull} subtitle="F&B·로컬 실제 고객사가 남긴 후기입니다." />

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-300 mb-2 text-base font-medium">플레이스·리뷰·웨이팅을 제재 없이 올리고 싶다면</p>
            <p className="text-slate-400 mb-6 text-sm">현재 노출·매출 상태를 무료로 진단해 드린 뒤, 가게에 맞는 실행 플랜을 제안합니다.</p>
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
