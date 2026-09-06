# CLAUDE.md

이 저장소(resume-nextjs) 작업 시 지켜야 할 규칙.

## 이력서 관련 작업 전 스킬 사용 여부 확인

이력서 검토·작성·수정 관련 요청("이력서 리뷰해줘", "이 항목 다듬어줘", "지원할 회사에 맞게 조정해줘" 등)을 받으면, 실제 작업(파일 Read/Edit 등)에 들어가기 전에 항상 아래 순서로 먼저 물어본다.

1. 스킬을 사용할지 말지 (스킬 없이 그냥 대화로 진행할지)
2. 사용한다면 이 프로젝트에 이미 설치된 `resume-guideline` 스킬을 쓸지, 외부 스킬을 쓸지
3. 외부 스킬을 쓴다면 아래 중 어느 레인을 쓸지
   - **레인 A**: `tailored-resume-generator` 단독 — 빠르게 한 번에 초안 생성
   - **레인 B**: `resume-bullet-writer` → `resume-tailor` → `resume-formatter` 조합 — 마스터 이력서를 정교하게 관리

4개 외부 스킬(resume-formatter, resume-bullet-writer, resume-tailor, tailored-resume-generator)은 이 저장소의 `.claude/skills/`에 프로젝트 전용으로 설치되어 있다(2026-08-13). 설치 여부는 시간이 지나면 바뀔 수 있으니 확실하지 않으면 `ls .claude/skills/`로 먼저 확인한다.

## 그 외 이 저장소에서 쓰는 스킬

이력서 콘텐츠(위 스킬들) 외에도 `.claude/skills/`에 아래 스킬들이 있다. 관련 요청이 오면 먼저 확인한다.

- `commit-workflow` — 이 저장소에서 커밋을 요청받았을 때
- `picake-reference` — picake 프로젝트 참고를 요청받았을 때
- `sdk-reference` — Polaris WebOffice SDK 업무 사실을 참고해야 할 때
- `job-playbook` — "이직 플레이북" Artifact를 조회·수정할 때. 이력서는 이 저장소가 다루는 더 큰 이직 준비 여정의 한 조각이고, 전체 로드맵·기업 리서치·지원 전략은 이 스킬이 관리한다.
- `job-scouting` — 매일 실행되는 채용공고 스카우팅 클라우드 루틴(claude.ai/code/routines)이 따르는 절차. 애그리게이터·회사별 채용페이지 대상 목록, SPA 폴백 전략, 적합도 판단 기준, 디스코드 보고 형식을 담고 있다. **주의**: 이 저장소는 public이므로 디스코드 웹훅 URL 등 민감정보는 이 스킬 파일에 절대 커밋하지 않는다(루틴 프롬프트 쪽에만 보관).
