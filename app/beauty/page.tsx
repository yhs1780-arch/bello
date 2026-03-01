"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { DeviceTabSectionBeauty } from "@/components/DeviceTabSectionBeauty";
import { TestimonialCarouselBeauty } from "@/components/TestimonialCarouselBeauty";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BelloLogo } from "@/components/BelloLogo";
import { CompanyShortWith } from "@/components/CompanyName";

export default function BeautyPage() {
  return (
    <div className="min-h-screen pt-16 bg-slate-950 w-full max-w-full overflow-x-hidden">
      <section className="relative w-full max-w-full py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="relative z-10 max-w-4xl mx-auto text-center min-w-0">
          <BelloLogo className="mb-6" />
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-amber-400/90 text-sm font-medium uppercase mb-4 break-keep">
            뷰티 · 의료
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-100 leading-tight mb-4 sm:mb-6 font-[var(--font-heading)] break-keep">
            의료법 리스크는 완벽히 차단하고,
            <br className="hidden md:block" />
            <span className="text-amber-400">해외·국내 환자를</span> 동시에 끌어옵니다.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed break-keep">
            광고 표현이 까다로운 성형·피부·뷰티 시술 병원을 위해, 샤오홍슈·인스타 K-뷰티 관광 코스와 강남언니·바비톡 실사용자 리뷰를 한 팀에서 설계합니다.
            <br className="hidden md:block" />
            리스크 없이 노출과 예약을 동시에 올리고 싶다면 <CompanyShortWith suffix="와" /> 방향부터 맞춰보시면 됩니다.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-10">
            <Link href="/#consulting-form" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5">
              BELLO 무료 매장 진단받기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 원장님 팩트폭행 */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="glass rounded-2xl border border-amber-500/20 p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 break-keep">
              원장님, 불법 리뷰 작업으로 병원 문 닫으실 겁니까?
            </h2>
            <p className="text-slate-400 leading-relaxed break-keep">
              무분별한 매크로·허위 리뷰는 포털 제재와 브랜드 이미지 추락으로 이어집니다. BELLO는 의료법을 지키는 선에서 100% 실사용자·합법 인력만 투입해, 해외·국내 채널을 한 팀에서 기획·실행합니다. 리스크 없이 노출과 예약을 동시에 올리려면 방향부터 맞춰보시면 됩니다.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 맞춤형 전략 Bento Box */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-4 break-keep">맞춤형 전략</h2>
            <p className="text-slate-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed break-keep">
              글로벌·로컬 채널을 한 번에 설계합니다.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="glass rounded-2xl border border-white/10 p-6 lg:p-8 lg:row-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 border border-white/10">
                    <Globe className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white break-keep">글로벌</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed break-keep">
                  의료법 리스크 제로. K-뷰티+맛집+관광을 엮은 샤오홍슈 체류형 관광 코스 기획. 과대·과장 없이 관광·체험 관점으로만 구성해 중국·동남아 환자 유입과 브랜드 인지도를 동시에 늘립니다.
                </p>
              </div>
              <div className="glass rounded-2xl border border-white/10 p-6 lg:p-8 lg:row-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 border border-white/10">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white break-keep">로컬</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed break-keep">
                  강남언니, 바비톡 알고리즘을 태우는 실제 유저 기반 리얼 후기 시딩. 매크로가 아닌 실사용자 풀만 활용해 별점·후기를 쌓고, 검색 상위 노출과 예약 전환을 동시에 올립니다.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DeviceTabSectionBeauty />

      <TestimonialCarouselBeauty />

      <FaqAccordion />

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-300 mb-2 text-base font-medium">해외·국내 채널을 한 번에 설계하고, 의료법을 지키는 전략이 필요하다면</p>
            <p className="text-slate-400 mb-6 text-sm">현재 노출·예약 상태를 무료로 진단해 드린 뒤, 병원에 맞는 플랜을 제안합니다.</p>
            <Link href="/#consulting-form" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium hover:from-amber-500 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-0.5">
              BELLO 무료 매장 진단받기
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
