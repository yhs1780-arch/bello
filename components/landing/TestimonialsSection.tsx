"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  "F&B": { bg: "#FF6F0F22", color: "#FF6F0F" },
  "뷰티": { bg: "#FF6B9D22", color: "#FF6B9D" },
  "의료": { bg: "#03C75A22", color: "#03C75A" },
  "커머스": { bg: "#E8003D22", color: "#E8003D" },
  "헬스": { bg: "#6366F122", color: "#6366F1" },
  "기타": { bg: "#9CA3AF22", color: "#9CA3AF" },
};

const REVIEWS: { tag: string; text: string; name: string }[] = [
  { tag: "F&B", text: "동네 상권이라 걱정했는데, 알아서 지역 주민들에게 저희 가게를 알려주셔서 지금은 매일 저녁 예약이 꽉 찹니다.", name: "마곡 한식당 사장님" },
  { tag: "F&B", text: "홈페이지나 마케팅은 하나도 모르는데, 전부 맡아서 해주시니 저희는 요리에만 집중할 수 있어 너무 든든합니다.", name: "위례 샤브샤브 대표" },
  { tag: "의료", text: "단순 문의가 아니라 실제로 병원에 방문하시고 결제까지 이어지는 진짜 환자분들이 크게 늘었습니다.", name: "강남 성형외과 원장" },
  { tag: "커머스", text: "제품의 장점을 실제 사용자들의 진정성 있는 후기로 풀어주셔서, 신제품인데도 주문량이 엄청납니다.", name: "코스메틱 브랜드 대표" },
  { tag: "뷰티", text: "주변 미용실 경쟁이 치열한데, 동네에서 머리 잘하는 곳으로 확실하게 소문을 내주셨어요.", name: "프랜차이즈 미용실 원장" },
  { tag: "의료", text: "샤오홍슈 같은 해외 플랫폼을 활용한 맞춤 스토리텔링 덕분에 중국인 고객들의 방문이 3배 이상 뛰었습니다.", name: "청담 피부과 원장" },
  { tag: "커머스", text: "관심사가 비슷한 사람들을 모은 소통방을 만들어주신 덕분에 우리 브랜드의 찐팬 1,000명이 순식간에 생겼습니다.", name: "건강기능식품 대표" },
  { tag: "헬스", text: "신학기 원생 모집이 막막했는데, 학부모님들 사이에서 자연스럽게 입소문이 나게 만들어 주셨습니다.", name: "분당 수학학원 원장" },
  { tag: "기타", text: "비수기라 렌터카 예약이 텅 비었었는데, 여행 준비 단계의 고객들에게 딱 맞춰 노출해주셔서 매출을 방어했습니다.", name: "제주 렌터카 업체" },
  { tag: "의료", text: "어렵고 무서운 치과 치료에 대한 걱정을 덜어주는 따뜻한 정보 덕분에 임플란트 상담이 매일 들어옵니다.", name: "압구정 치과 원장" },
  { tag: "커머스", text: "뷰티에 관심 많은 분들과 직접 소통하는 커뮤니티가 활성화되니, 광고비 없이도 재구매율이 쑥쑥 오릅니다.", name: "비건 화장품 마케터" },
  { tag: "기타", text: "인테리어 시공 퀄리티를 지역 주민들에게 제대로 보여주셔서, 아파트 입주민들의 단체 시공 문의가 쏟아집니다.", name: "수원 인테리어 대표" },
  { tag: "커머스", text: "낚시 용품 신제품을 냈는데, 낚시 매니아들이 모여있는 공간에 자연스럽게 스며들어 초도 물량이 완판됐습니다.", name: "아웃도어 브랜드 대표" },
  { tag: "의료", text: "체형 교정 후기가 꼼꼼하게 퍼지면서, 통증으로 고생하시던 분들의 예약 대기가 생길 정도입니다.", name: "강남 한의원 원장" },
  { tag: "F&B", text: "예쁜 카페 인테리어가 소셜 미디어를 타고 퍼지면서 주말에는 전국에서 찾아오는 핫플이 되었습니다.", name: "부산 해운대 카페 사장님" },
  { tag: "헬스", text: "필라테스 오픈 전부터 지역 주민들과 친근하게 소통해주신 덕분에 첫 달부터 회원 모집을 끝냈습니다.", name: "송파구 필라테스 원장" },
  { tag: "커머스", text: "까다로운 수제 간식 재료를 투명하게 공개하는 전략으로 반려인들의 굳건한 신뢰를 얻었습니다.", name: "반려동물 간식 쇼핑몰" },
  { tag: "기타", text: "집중이 잘 되는 면학 분위기가 학생들 사이에서 알려지며 시험기간 전 좌석이 매진되었습니다.", name: "판교 스터디카페 사장님" },
  { tag: "F&B", text: "기념일에 가기 좋은 와인바로 확실하게 자리 잡아서 연인들의 주말 예약이 줄을 잇고 있습니다.", name: "이태원 와인바 사장님" },
  { tag: "뷰티", text: "남성분들도 쉽게 따라 할 수 있는 피부 관리 팁을 제공해주셔서 화장품 구매 장벽이 확 낮아졌습니다.", name: "남성 화장품 스타트업" },
  { tag: "뷰티", text: "동네 반려인들 사이에서 원장님의 꼼꼼한 케어가 화제가 되며 애견 미용 단골이 꽉 찼습니다.", name: "일산 애견 미용실" },
  { tag: "F&B", text: "저희 시그니처 빵 사진이 먹음직스럽게 퍼지면서 전국 단위로 택배 주문이 폭주하고 있습니다.", name: "대구 대형 베이커리" },
  { tag: "헬스", text: "시설의 청결함과 전문성을 강조해주셔서 운동을 망설이던 분들의 첫 등록이 크게 늘었습니다.", name: "프리미엄 요가 스튜디오" },
  { tag: "F&B", text: "근처에서 맛집을 찾는 분들의 지도 앱에 우리 가게가 가장 먼저 보이게 세팅해주셔서 웨이팅이 일상이 됐습니다.", name: "건대 고깃집" },
  { tag: "커머스", text: "옷의 핏과 재질을 칭찬하는 생생한 후기가 쌓이면서 단일 품목 주간 완판을 기록했습니다.", name: "여성 의류 쇼핑몰" },
  { tag: "의료", text: "해외 환자 유치에 막막했는데, 외국인들이 주로 쓰는 SNS에 K-뷰티 코스로 소개되며 큰 효과를 봤습니다.", name: "명동 성형외과" },
];

const INITIAL_COUNT = 6;

function getInitial(name: string): string {
  const trim = name.trim();
  if (!trim) return "?";
  return trim[0];
}

export function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayList = showAll ? REVIEWS : REVIEWS.slice(0, INITIAL_COUNT);

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-[20px] border border-[#FFD600] text-[#FFD600] text-xs font-medium">
            실제 진행 고객사 300+ 곳의 생생한 후기
          </span>
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white text-center break-keep mb-2">
          고객 후기
        </h2>
        <p className="text-slate-400 text-center text-sm sm:text-base mb-10 break-keep">
          업종도 지역도 달랐지만, 결과는 같았습니다
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayList.map((r, i) => {
            const tagStyle = TAG_STYLES[r.tag] || TAG_STYLES["기타"];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 border border-transparent transition-all duration-200 hover:border-[#FFD600] hover:-translate-y-1"
                style={{ backgroundColor: "#131929" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                    style={{ backgroundColor: tagStyle.bg, color: tagStyle.color }}
                  >
                    {r.tag}
                  </span>
                  <span className="text-[#FFD600] text-xs">★★★★★</span>
                </div>
                <blockquote className="relative mt-4 mb-4">
                  <span className="block text-[32px] leading-none text-[#FFD600] mb-2">&ldquo;</span>
                  <p className="text-[14px] leading-relaxed text-[#D1D5DB] pl-0">{r.text}</p>
                </blockquote>
                <div className="border-t border-[#1e2d45] my-4" />
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[#FFD600] font-bold text-sm shrink-0"
                    style={{ backgroundColor: "#374151" }}
                  >
                    {getInitial(r.name)}
                  </div>
                  <p className="text-[13px] text-[#9CA3AF] truncate">{r.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {!showAll && REVIEWS.length > INITIAL_COUNT && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-lg border border-[#374151] text-[#9CA3AF] text-sm font-medium transition-colors hover:bg-white/5"
            >
              후기 더보기 +
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
