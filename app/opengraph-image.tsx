import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "벨로컴퍼니 | 마케팅 실행사 · 네이버플레이스·광고·바이럴 마케팅";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B0F1A 0%, #111827 50%, #0B1120 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* 상단 골드 라인 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#FFD600",
          }}
        />
        {/* 로고/타이틀 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-2px",
              marginBottom: 16,
            }}
          >
            BELLO <span style={{ color: "#FFD600" }}>벨로컴퍼니</span>
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#FFD600",
              marginBottom: 24,
              letterSpacing: "-0.5px",
            }}
          >
            마케팅 실행사
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#9CA3AF",
              marginBottom: 40,
            }}
          >
            네이버플레이스 · 광고 · 바이럴 마케팅
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 22,
              color: "#6B7280",
            }}
          >
            <span>수수료 0%</span>
            <span>·</span>
            <span>매출로 증명</span>
          </div>
        </div>
        {/* 하단 서브 */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "#4B5563",
          }}
        >
          bellocompany.co.kr
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
