# 플랫폼별 모바일 노출 예시 이미지

아래 6개 파일을 이 폴더에 넣으면 섹션에 표시됩니다.  
**세로형 앱 캡처**를 권장합니다 (비율 9:16).

| 파일명 | 용도 |
|--------|------|
| `mockup-naver.png` | 네이버 1위 노출 |
| `mockup-danggeun.png` | 당근마켓 조회수 폭발 |
| `mockup-insta.png` | 인스타그램 릴스 바이럴 |
| `mockup-xiaohongshu.png` | 샤오홍슈 중국인 반응 |
| `mockup-baemin.png` | 배민 랭킹 1위 |
| `mockup-blog.png` | 네이버 블로그 파급력 |

파일이 없으면 "이미지 적용 대기중"이 표시됩니다.

---

## 네이버·카카오톡 링크 공유 시 대표 이미지 (OG 이미지)

- **현재 설정**: `app/layout.tsx`에서 `/showcase/showcase-naver-1st.png`를 사용 중입니다.
- **커스텀 이미지**로 바꾸려면:
  1. **회사 대표/바이럴용 이미지**를 준비합니다 (가로 1200px × 세로 630px 권장).
  2. `public/images/og-image.jpg`로 저장한 뒤, `app/layout.tsx`의 `openGraph.images[0].url`과 `twitter.images[0]`을 `"/images/og-image.jpg"`로 수정합니다.
- 또는 `public/showcase/showcase-naver-1st.png` 파일을 같은 비율의 원하는 이미지로 **덮어쓰기**해도 됩니다.
