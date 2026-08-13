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
