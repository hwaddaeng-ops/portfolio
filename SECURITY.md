# 🚨 비상 매뉴얼 — 키 노출 의심 시

> 키가 노출된 것 같으면 **고민하지 말고 바로** 이 순서대로 하세요.
> 원칙: **① 폐기 → ② 재발급 → ③ `.env` 교체 → ④ 사용 이력 확인**
> 노출된 키는 지워도 이미 누군가 복사했을 수 있어요. **반드시 폐기**해야 안전합니다.

---

## 0. 먼저 확인: 어떤 키가 노출됐나?

| 키 | 어디에 쓰나 | `.env` 이름 |
|---|---|---|
| OpenRouter API 키 | AI 호출 (돈이 나감!) | `OPENROUTER_API_KEY` |
| WordPress 앱 비밀번호 | 블로그 글쓰기 | `WORDPRESS_APP_PASSWORD` |
| GitHub 개인 토큰 | GitHub 저장소 접근 | `GITHUB_TOKEN` |

노출 경로 예시: GitHub에 올림 / 채팅·메일에 붙여넣음 / 화면 공유 / 스크린샷

---

## 1. OpenRouter API 키 (가장 급함 — 요금 피해)

1. **폐기:** openrouter.ai 로그인 → Settings → Keys → 노출된 키 **Delete**
2. **재발급:** 같은 화면에서 Create Key → 새 키 복사
3. **교체:** `.env`의 `OPENROUTER_API_KEY=` 뒤에 새 키 붙여넣기
4. **이력 확인:** Activity(사용 내역) 화면에서 내가 안 쓴 호출이 있는지 확인
5. (추천) 키에 **사용 한도(credit limit)** 걸어두기

## 2. WordPress 앱 비밀번호

1. **폐기:** WordPress 관리자 → 사용자 → 프로필 → 애플리케이션 비밀번호 → 해당 항목 **취소(Revoke)**
2. **재발급:** 같은 곳에서 새 이름으로 다시 만들기
3. **교체:** `.env`의 `WORDPRESS_APP_PASSWORD=` 교체
4. **이력 확인:** 글·페이지·사용자 목록에 모르는 변경이 있는지 확인
5. 로그인 비밀번호도 같이 노출됐다면 **로그인 비밀번호도 변경**

## 3. GitHub 개인 토큰 (`ghp_***`)

1. **폐기:** github.com → 오른쪽 위 프로필 → Settings → Developer settings → Personal access tokens → 해당 토큰 **Delete**
2. **재발급:** 같은 화면에서 Generate new token → 꼭 필요한 권한만 체크 → **만료일 설정**
3. **교체:** `.env`의 `GITHUB_TOKEN=` 교체
4. **이력 확인:** Settings → Security log 에서 모르는 활동 확인, 저장소에 모르는 커밋이 있는지 확인
5. 참고: GitHub는 공개 저장소에 올라간 `ghp_` 토큰을 자동으로 찾아 폐기하고 메일로 알려주기도 해요

---

## 4. GitHub에 올라갔다면 추가로

- 파일을 지우고 다시 올려도 **기록(history)에 남아 있어요.** → 그래서 위의 **폐기가 필수**
- 기록에서 지우는 작업은 위험하니 Claude에게 단계별로 물어보면서 진행

## 5. 예방 체크

- [ ] `.env`는 `.gitignore`에 들어 있나?
- [ ] 코드에 키를 직접 적지 않았나? (항상 환경변수 사용)
- [ ] 채팅·스크린샷에 키가 보이지 않나? (보여줄 땐 `sk-or-v1-***` 처럼 가리기)
