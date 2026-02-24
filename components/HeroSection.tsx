"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BelloLogo } from "./BelloLogo";
import { AnimatedCounter } from "./AnimatedCounter";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.08),transparent)] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <BelloLogo className="text-xl" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-blue-400 text-sm font-medium tracking-wide mb-4 break-keep"
        >
          기획부터 실행까지, 빈틈없는 다이렉트 솔루션
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 break-keep"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-blue-200 bg-clip-text text-transparent">
            데이터로 증명하는 압도적 실행력,
          </span>
          <br className="hidden md:block" />
          <span className="text-white">BELLO</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed break-keep"
        >
          마케팅 비용만 소진하고 계십니까?
          <br className="hidden md:block" />
          BELLO는 로직에 대한 완벽한 이해와 100% 실제 인력 인프라를 바탕으로,
          <br className="hidden md:block" />
          브랜드의 가치를 실제 &apos;매출&apos;이라는 숫자로 번역합니다.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="#consulting-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.5)] bg-gradient-to-r from-blue-600 to-blue-500 border border-white/10"
          >
            BELLO 무료 매장 진단받기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
        <AnimatedCounter />
      </div>
    </section>
  );
}
