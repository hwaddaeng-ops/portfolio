# Portfolio — 이화윤 UI/UX 디자이너

개인 포트폴리오 웹사이트와 Claude Code 작업 환경을 모아 둔 저장소입니다.
설치할 것 없이 `portfolio/index.html`을 브라우저로 열면 바로 볼 수 있어요.

## 📁 폴더 구조

```
claude-workspace/
├── README.md               ← 지금 보고 있는 안내 파일
├── CLAUDE.md               ← Claude Code 작업 지침 (보안 규칙·소통 방식)
├── SECURITY.md             ← 키 노출 시 비상 매뉴얼
├── .env.example            ← 환경변수 이름만 적힌 빈 양식
├── .gitignore              ← Git에 올리지 않을 파일 목록
├── vercel.json             ← Vercel 배포 설정 (portfolio 폴더만 공개)
├── .vercelignore           ← Vercel에 올리지 않을 파일 목록
│
├── portfolio/              ← 포트폴리오 웹사이트
│   ├── index.html          ← 메인 페이지 (밝은 버전, 첫 버전)
│   ├── index-dark.html     ← 메인 페이지 (다크 에디토리얼 버전)
│   ├── css/
│   │   ├── style.css       ← 다크 버전·서브페이지 공통 스타일
│   │   └── sub.css         ← 작업물 서브페이지 전용 스타일
│   ├── js/
│   │   ├── main.js         ← 다크 버전 동작 (스크롤 헤더, KPI 숫자 카운터)
│   │   └── sub.js          ← 서브페이지 동작 (이미지 크게 보기)
│   ├── images/
│   │   └── hero.jpg        ← 밝은 버전 첫 화면 배경 사진
│   └── works/              ← 작업물 서브페이지 29개
│       ├── db-open-api.html
│       ├── forb-detail.html
│       ├── …
│       └── images/
│           └── <페이지 이름>/
│               ├── 01.jpg  ← 원본 이미지 (크게 보기용)
│               └── view/
│                   └── 01.jpg  ← 화면용 고화질 축소본
│
├── tasks/
│   ├── todo.md             ← 할 일 체크리스트
│   └── progress.md         ← 한 일 기록 (덧붙이기만 함)
│
└── docs/                   ← 개인 문서 (Git에 올리지 않음, 내 PC에만 보관)
```

## 🖼️ 작업물 서브페이지 (29개)

| 분류 | 페이지 |
|---|---|
| 금융·솔루션 | DB금융투자-OPEN API · 나무 기술 VDI · 솔루션_온사이트모듈 · 스마트 원격진단 랜딩페이지 |
| 앱 | 카시트 온도 조절 앱 · 동인기연_생산실적앱 · 경복산악회 커뮤니케이션 앱 |
| 쇼핑몰 | forb shop · forb shop2 · Timbuk2 · RYAN · RYAN pet · 골프치트키 · 아이뷰티랩 · 라파브리끄 |
| 리빙픽 | 리빙픽_메인 · 리빙픽_서브 · 상세페이지_리빙픽 · 프로모션_리빙픽 |
| 상세페이지 | 포브 · 리안 · 리안펫 · 팀텍스 · 팀벅2 |
| 프로모션 | 포브 · 리안 · 팀텍스 · 팀벅2 · LFmall |

## 🔒 올리지 않는 파일

`.gitignore`로 아래 파일은 GitHub에 올라가지 않게 막아 두었어요.

- **비밀 정보:** `.env`, `*.key`, `*.pem`, `id_rsa*`, `*credentials*`, `*secret*`
- **개인정보:** `docs/` 안의 프로필 문서
- **백업·임시 파일:** `*.bak`, `*.tmp`, `*.log`
- **설치 파일·편집기 설정:** `node_modules/`, `.vscode/`, `.idea/`

환경변수가 필요하면 `.env.example`을 복사해 `.env`를 만들고 값을 채워 넣으세요. `.env`는 절대 공유하지 마세요.

## 🚀 Vercel 배포

**사이트 주소:** https://hwayoun-portfolio.vercel.app

빌드 과정이 없는 정적 사이트라서 설정은 `vercel.json`에 다 들어 있어요. Vercel 화면에서 따로 바꿀 것은 없어요.

**배포 설정 (`vercel.json`)**

- **공개 범위:** `portfolio/` 폴더만 웹에 올라가요. CLAUDE.md·tasks·docs·`.env`는 공개되지 않아요.
- **첫 화면:** 주소로 들어오면 다크 버전(`/index-dark.html`)으로 이동해요. 밝은 버전은 `/index.html`로 볼 수 있어요.
- **보안 헤더:** 다른 사이트가 내 페이지를 몰래 품기(iframe), 파일 종류 속이기를 막아요.

**처음 배포하는 방법 (GitHub 연결)**

1. [vercel.com](https://vercel.com)에 GitHub 계정(hwaddaeng-ops)으로 로그인
2. **Add New… → Project** 선택
3. 저장소 목록에서 `portfolio` 옆 **Import** 클릭
   - 비공개 저장소라 목록에 없으면 **Adjust GitHub App Permissions**에서 `portfolio` 저장소 접근 허용
4. 설정 화면은 그대로 두기
   - Framework Preset: **Other**
   - Root Directory: **`./`** (바꾸지 않기 — 바꾸면 `vercel.json`이 무시돼요)
5. **Deploy** 클릭 → 1분쯤 뒤 `https://<프로젝트이름>.vercel.app` 주소가 생겨요

**그다음부터는** GitHub `main` 브랜치에 푸시할 때마다 Vercel이 자동으로 다시 배포해요.

**배포 전 내 PC에서 미리 보기**

```
python -m http.server 8765 --directory portfolio
```

브라우저에서 http://127.0.0.1:8765/index-dark.html 열기 (끄려면 터미널에서 Ctrl+C)

> 참고: 웹에 올리면 이메일 주소(연락처)는 누구나 볼 수 있어요.

## 🛠️ 사용 기술

HTML5 · CSS3 · JavaScript (프레임워크 없이 정적 페이지)
