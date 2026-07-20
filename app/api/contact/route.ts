import { NextResponse } from "next/server";
import { FORM_FIELD_LABELS } from "@/lib/consultingFormConfig";

type ContactBody = {
  name?: string;
  location?: string;
  industry?: string;
  operatingPeriod?: string;
  contact?: string;
  companyName?: string;
  naverPlaceUrl?: string;
  marketingBudget?: string;
  monthlySalesRange?: string;
  activeChannels?: string | string[];
  mainConcern?: string;
  preferredContactTime?: string;
  leadSource?: string;
  leadOrigin?: string;
};

function channelsText(v: string | string[] | undefined) {
  if (Array.isArray(v)) return v.join(", ");
  return v ?? "";
}

/**
 * 문의 폼 제출 API (보조 경로)
 * - 화면 폼은 Formspree로 직접 전송합니다.
 * - FORMSPREE_ENDPOINT 가 있으면 동일 필드명(한글 라벨)으로 Formspree에 전달합니다.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const {
      name,
      location,
      industry,
      operatingPeriod,
      contact,
      companyName,
      naverPlaceUrl,
      marketingBudget,
      monthlySalesRange,
      activeChannels,
      mainConcern,
      preferredContactTime,
      leadSource,
      leadOrigin,
    } = body;

    const payload: Record<string, string> = {
      [FORM_FIELD_LABELS.name]: name || "",
      [FORM_FIELD_LABELS.location]: location || "",
      [FORM_FIELD_LABELS.industry]: industry || "",
      [FORM_FIELD_LABELS.operatingPeriod]: operatingPeriod || "",
      [FORM_FIELD_LABELS.contact]: contact || "",
      [FORM_FIELD_LABELS.companyName]: companyName || "",
      [FORM_FIELD_LABELS.naverPlaceUrl]: naverPlaceUrl || "",
      [FORM_FIELD_LABELS.marketingBudget]: marketingBudget || "",
      [FORM_FIELD_LABELS.monthlySalesRange]: monthlySalesRange || "",
      [FORM_FIELD_LABELS.activeChannels]: channelsText(activeChannels),
      [FORM_FIELD_LABELS.mainConcern]: mainConcern || "",
      [FORM_FIELD_LABELS.preferredContactTime]: preferredContactTime || "",
      [FORM_FIELD_LABELS.leadSource]: leadSource || "",
      [FORM_FIELD_LABELS.leadOrigin]: leadOrigin || "",
      _subject: `[BELLO] 무료 컨설팅 신청 - ${companyName || name || "신규 문의"}`,
    };

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Formspree error:", text);
        return NextResponse.json({ ok: false, error: "전송 실패" }, { status: 500 });
      }
    } else {
      console.log("[BELLO 문의]", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ ok: false, error: "서버 오류" }, { status: 500 });
  }
}
