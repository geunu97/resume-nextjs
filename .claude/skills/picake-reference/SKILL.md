---
name: picake-reference
description: 사용자가 "picake"(피케이크) 프로젝트를 언급하며 참고/반영을 요청할 때 항상 이 규칙을 따릅니다. 로컬 파일시스템이 아니라 GitHub 저장소(ServicePlayground/picake) 기준으로 확인하고, 어느 브랜치를 볼지 항상 먼저 물어봅니다.
---

# Picake 프로젝트 참고 규칙

사용자가 "picake 참고해줘", "picake 프로젝트 업데이트했어" 등으로 picake 프로젝트를 언급하면 아래 순서를 예외 없이 따른다.

## 1. 기준 저장소

- picake는 로컬 디렉터리를 찾지 않는다. **항상 GitHub 저장소 `ServicePlayground/picake`를 기준**으로 확인한다. (Yarn Berry 기반 모노레포, 사용자/판매자/관리자용 웹 통합 주문 관리 시스템)
- `gh` CLI로 조회한다 (`gh api`, `gh repo view`, `gh pr list` 등 — 로컬 clone이 없으면 API로 커밋/파일 내용을 조회).
- 로컬에 picake 관련 디렉터리가 있어도 임의로 그걸 기준으로 삼지 않는다. 사용자가 명시적으로 특정 로컬 경로를 지정한 경우에만 로컬을 본다.

## 2. 브랜치는 항상 먼저 물어본다

- picake 저장소의 커밋/변경 이력을 참고해야 하는 작업이면, 조회 전에 **반드시 사용자에게 브랜치를 확인**한다. 임의로 기본 브랜치(main)를 가정하고 진행하지 않는다.
- 질문 예시: "어느 브랜치를 기준으로 볼까요? (main / staging / 기타)"
- AskUserQuestion 도구로 물어보되, 선택지는 최소 `main`, `staging`, `기타(직접 입력)`를 포함한다.
- 이미 같은 대화에서 브랜치를 확인했다면 재질문하지 않고 그 브랜치를 계속 사용한다. 단, 새로운 대화(세션)에서는 다시 물어본다.

## 3. 조회 방법

- 최근 커밋: `gh api repos/ServicePlayground/picake/commits?sha=<branch>&since=<ISO8601>`
- 특정 기간 커밋 상세: `gh api repos/ServicePlayground/picake/commits/<sha>` (파일 변경 목록 포함)
- 커밋 로그를 사람이 읽기 쉽게 보려면 `gh api ... --jq` 로 필요한 필드만 추출한다.
- 이력서에 반영할 때는 이 저장소의 `[[resume-guideline]]`을 따른다 — 근거 없는 수치·과장 금지, 본인 기여 범위 확인 등.

## 4. 이력서 반영 시 주의

- picake 커밋 로그만으로 본인 기여인지 팀 기여인지 판단하기 어려우면 사용자에게 확인한다.
- 커밋 메시지가 불충분하면(예: "fix", "update") 실제 diff를 열어 무엇이 바뀌었는지 확인한 뒤 반영한다.
