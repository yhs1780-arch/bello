"use client";

import { motion } from "framer-motion";
import { MapPin, Stethoscope, MessageCircle, Truck, ShoppingBag } from "lucide-react";

const SERVICES = [
  {
    color: "bg-blue-500",
    label: "네이버 완전 정복",
    desc: "지도(플레이스), 블로그, 이웃 카페, 예약",
    icon: MapPin,
  },
  {
    color: "bg-red-500",
    label: "의료·뷰티 필수 앱",
    desc: "강남언니, 바비톡, 굿닥",
    icon: Stethoscope,
  },
  {
    color: "bg-purple-500",
    label: "동네 입소문 확산",
    desc: "당근마켓, 동네 맘카페, 지역 커뮤니티",
    icon: MessageCircle,
  },
  {
    color: "bg-orange-500",
    label: "배달앱 랭킹 관리",
    desc: "배달의민족, 요기요, 쿠팡이츠",
    icon: Truck,
  },
  {
    color: "bg-green-500",
    label: "쇼핑몰 리뷰 관리",
    desc: "쿠팡, 스마트스토어, 화해",
    icon: ShoppingBag,
  },
];

export function ServiceCategorySection() {
  return (
    <section id="service-category" className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center break-keep mb-4"
        >
          우리 가게에 꼭 맞는 매체만 골라서 집중 공략합니다.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-amber-400/90 text-sm sm:text-base mb-12 break-keep"
        >
          무조건 패키지 강요 X, 필요한 채널만 선택 가능
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES.map(({ color, label, desc, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors flex items-start gap-4"
            >
              <span className={`flex-shrink-0 w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                <Icon className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 break-keep">{label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed break-keep">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
