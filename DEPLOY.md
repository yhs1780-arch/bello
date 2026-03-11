# Netlify 프리뷰 → 프로덕션 배포 가이드

벨로컴퍼니 홈페이지를 **Netlify 프리뷰 도메인**에서 먼저 테스트한 뒤, **bellocompany.co.kr** 프로덕션에 반영하는 흐름입니다.

---

## 0. Git 원격 저장소 (bello / bellodev)

이 프로젝트는 **두 개의 GitHub 원격**을 사용합니다.

| 원격 이름 | 저장소 | 용도 |
|-----------|--------|------|
| **origin** | https://github.com/yhs1780-arch/bello | 기존 메인(프로덕션). bellocompany.co.kr 배포용 |
| **bellodev** | https://github.com/yhs1780-arch/bellodev | 수정·QA 먼저 반영하는 데모/개발용 |

**일반 푸시** (현재 `main`은 `origin` 추적):

```bash
git push origin main
```

**데모(bellodev) 저장소로 푸시** (수정사항을 먼저 bellodev에 올릴 때):

```bash
git push bellodev main
```

- bello는 그대로 두고, 수정·검증은 bellodev에서 진행한 뒤 문제 없을 때만 bello(또는 origin)에 반영하는 흐름에 사용할 수 있습니다.
- **자세한 단계별 설명(초보자용)**은 프로젝트 루트의 **`워크플로우_가이드.md`** 를 참고하세요.

---

## 1. 흐름 요약

```
[개발] → Git 푸시 (브랜치 또는 PR)
    → Netlify가 자동으로 "프리뷰 URL" 배포 (예: https://deploy-preview-12--벨로사이트.netlify.app)
    → 해당 URL에서 테스트 및 수정
[확인 완료] → main(또는 프로덕션 브랜치)에 머지
    → Netlify가 자동으로 bellocompany.co.kr(프로덕션) 배포
```

- **프리뷰 URL**: Netlify가 주는 임의 도메인 (PR당 또는 브랜치당 1개)
- **프로덕션 URL**: bellocompany.co.kr (커스텀 도메인 연결된 사이트)

---

## 2. Netlify 사이트 설정 (최초 1회)

### 2-1. 저장소 연결

1. [Netlify](https://app.netlify.com) 로그인 후 **Add new site → Import an existing project**
2. GitHub/GitLab 등에서 이 저장소 선택 후 연결
3. **Production branch**를 `main`(또는 사용 중인 메인 브랜치)으로 설정

### 2-2. 빌드 설정 (netlify.toml 사용 시)

프로젝트에 `netlify.toml`이 있으면 Netlify가 자동으로 다음을 사용합니다.

- **Build command**: `npm run build`
- **Node 버전**: 18 (netlify.toml의 `NODE_VERSION`)
- **프로덕션 환경 변수**: `SITE_URL=https://bellocompany.co.kr` (netlify.toml의 `[context.production.environment]`)

Netlify 대시보드에서 수동으로 바꾸고 싶다면:

- **Site settings → Build & deploy → Environment** 에서
  - **Production** 컨텍스트에 변수 추가: `SITE_URL` = `https://bellocompany.co.kr`
  - **Deploy previews** / **Branch deploys**에는 `SITE_URL`을 넣지 않음 (넣지 않으면 `DEPLOY_PRIME_URL`이 사용됨)

### 2-3. 프로덕션 도메인(bellocompany.co.kr) 연결

- **Site settings → Domain management → Custom domains** 에서 `bellocompany.co.kr` 추가
- Netlify가 안내하는 대로 DNS(CNAME 또는 A 레코드) 설정

---

## 3. 환경별 동작

| 구분           | SITE_URL 사용 값                    | 검색엔진(robots) | 용도       |
|----------------|-------------------------------------|-------------------|------------|
| 로컬           | `.env.local`의 SITE_URL 또는 기본값 | -                 | 개발       |
| Netlify 프리뷰 | `DEPLOY_PRIME_URL` (자동)           | noindex           | 테스트용   |
| Netlify 프로덕션 | `SITE_URL` (netlify.toml 또는 대시보드) | index 허용        | bellocompany.co.kr |

- **프리뷰**에서는 메타 태그의 `robots`가 **noindex**로 설정되어, 검색엔진에 노출되지 않습니다.
- **프로덕션**에서만 `robots.txt`에서 크롤링 허용, sitemap 링크가 노출됩니다.

---

## 4. 파일/설정 정리

### 4-1. 프로젝트 내 설정

- **`app/lib/site.ts`**  
  - `getSiteUrl()`: `SITE_URL` → `DEPLOY_PRIME_URL` → `https://bellocompany.co.kr` 순으로 사용
  - `isProductionSite()`: URL에 `bellocompany.co.kr` 포함 여부로 프로덕션 판단

- **`app/layout.tsx`**  
  - `metadataBase`, `openGraph.url`, `alternates.canonical`, `robots` 등이 `getSiteUrl()` / `isProductionSite()` 기준으로 동작

- **`app/robots.ts`**  
  - 프로덕션: 기존처럼 allow/sitemap  
  - 비프로덕션: 전체 disallow(noindex 효과)

- **`app/sitemap.ts`**  
  - 현재 배포 URL 기준으로 sitemap 생성 (프리뷰면 프리뷰 URL)

- **`netlify.toml`**  
  - 빌드 커맨드, Node 버전, **프로덕션**에서만 `SITE_URL=https://bellocompany.co.kr` 설정

- **`.env.example`**  
  - `SITE_URL` 설명 추가 (로컬/Netlify 용도)

### 4-2. 로컬에서 프리뷰와 비슷하게 쓰고 싶을 때

`.env.local`에 다음처럼 넣으면 로컬도 “프리뷰처럼” noindex로 동작합니다.

```bash
# 프리뷰처럼 테스트할 때 (noindex)
SITE_URL=http://localhost:3000
```

---

## 5. 일상적인 작업 순서

1. **기능/수정 작업** 후 커밋
2. **PR 생성** (또는 테스트용 브랜치 푸시)
3. Netlify가 **Deploy preview** 생성 → PR 또는 브랜치마다 **프리뷰 URL** 부여
4. 해당 **프리뷰 URL**에서 확인 후 수정 반복
5. **문제 없으면 main(프로덕션 브랜치)에 머지**
6. Netlify가 **Production deploy** 실행 → **bellocompany.co.kr**에 반영

---

## 6. 참고

- Netlify 프리뷰 URL 형식: `https://<branch>--<site-name>.netlify.app` 또는 `https://deploy-preview-<PR번호>--<site-name>.netlify.app`
- `DEPLOY_PRIME_URL`은 Netlify가 빌드 시 자동으로 넣어 주는 변수이므로, 별도 설정 없이 프리뷰마다 해당 배포 URL이 사용됩니다.
- 프로덕션에서만 `SITE_URL`을 `https://bellocompany.co.kr`로 두면, 메타/OG/canonical/sitemap/robots가 모두 프로덕션 도메인 기준으로 동작합니다.
