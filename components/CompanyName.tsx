"use client";

/**
 * 브랜드명 줄바꿈 방지: "벨로컴퍼니"가 "벨로컴퍼" / "니"로 끊기지 않도록 함.
 */
export function CompanyName({ className = "" }: { className?: string }) {
  return (
    <span className={`whitespace-nowrap ${className}`}>
      벨로컴퍼니
    </span>
  );
}

/** "벨로와"가 줄 중간에서 끊기지 않도록 */
export function CompanyShortWith({ suffix }: { suffix: string }) {
  return (
    <span className="whitespace-nowrap">
      벨로{suffix}
    </span>
  );
}
