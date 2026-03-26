import { redirect } from "next/navigation";

const CODE_TO_SOURCE: Record<string, string> = {
  insta: "instagram",
  instagram: "instagram",
  naver: "naver",
  kakao: "kakao",
  youtube: "youtube",
  tiktok: "tiktok",
  당근: "danggeun",
  danggeun: "danggeun",
};

export default function ShortLinkPage({
  params,
}: {
  params: { code: string };
}) {
  const codeRaw = params.code ?? "";
  const code = String(codeRaw).trim().toLowerCase();

  // `src` 값은 ConsultingForm에서 `src`/`utm_source`로 리드 출처를 잡습니다.
  const src = CODE_TO_SOURCE[code] ?? code;

  // GA4/폼에 남길 "폼 요청 경로" (사용자가 클릭한 짧은 링크 경로)
  const origin = `/i/${code}`;

  redirect(
    `/?src=${encodeURIComponent(src)}&origin=${encodeURIComponent(origin)}#consulting-form`,
  );
}

