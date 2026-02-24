import { NextResponse } from "next/server";

/**
 * 문의 폼 제출 API
 * - 환경 변수 FORMSPREE_ENDPOINT 가 있으면: Formspree로 전달 → 이메일로 알림 수신
 *   (https://formspree.io 가입 후 폼 생성하면 endpoint URL 발급)
 * - 없으면: 200만 반환 (나중에 DB/이메일 연동 시 여기에 로직 추가)
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, email, company, concern } = body as {
      name?: string;
      contact?: string;
      email?: string;
      company?: string;
      concern?: string;
    };

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "",
          contact: contact || "",
          email: email || "",
          company: company || "",
          concern: concern || "",
          _subject: `[BELLO] 무료 컨설팅 신청 - ${name || "이름 없음"}`,
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Formspree error:", text);
        return NextResponse.json({ ok: false, error: "전송 실패" }, { status: 500 });
      }
    } else {
      // 개발/테스트: 콘솔에만 출력. 실제 배포 시 FORMSPREE_ENDPOINT 설정 또는 아래에 DB 저장/이메일 발송 추가
      console.log("[BELLO 문의]", { name, contact, email, company, concern });
      // 예: DB 저장 시 → await db.contact.create({ data: { name, contact, ... } });
      // 예: 이메일 발송 시 → await sendEmail({ to: process.env.CONTACT_EMAIL, ... });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ ok: false, error: "서버 오류" }, { status: 500 });
  }
}
