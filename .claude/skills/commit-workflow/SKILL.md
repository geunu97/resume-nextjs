---
name: commit-workflow
description: 이 저장소(resume-nextjs)에서 사용자가 "커밋해줘"라고 요청할 때 항상 이 규칙을 따릅니다. 커밋 전 반드시 npm run export를 실행하고, 커밋 메시지는 이전 커밋의 "N차 수정 및 export" 패턴을 이어받아 다음 차수로 작성합니다.
---

# 커밋 규칙 (resume-nextjs)

이 저장소에서 커밋을 요청받으면 아래 순서를 예외 없이 따른다.

## 1. 커밋 전 필수: `npm run export`

- 커밋하기 전에 반드시 `npm run export`를 실행한다. (내부적으로 clean → build → `next export` → `shellwork.js` 순서로 동작 — `package.json`의 `preexport`/`postexport` 참고)
- export가 실패하면 원인을 먼저 해결한다. 실패한 상태로 커밋을 진행하지 않는다.
- export로 인해 변경된 산출물(`docs/` 등)도 커밋 대상에 포함시킨다.

## 2. 커밋 메시지 규칙: `N차 수정 및 export`

- 커밋 메시지는 항상 `N차 수정 및 export` 형식만 사용한다. 변경 내용 요약이나 다른 설명을 덧붙이지 않는다.
- `N`은 매번 `git log --oneline -5`로 가장 최근 커밋의 차수를 직접 확인한 뒤, 그다음 숫자로 정한다(예: 최근 커밋이 "21차 수정 및 export"이면 이번 커밋은 "22차 수정 및 export").
- 차수를 이전 대화 기록이나 기억에 의존해 추측하지 않는다. 항상 그 시점의 `git log`로 재확인한다.

## 3. 실행 순서

1. `npm run export` 실행 — 실패 시 중단하고 사용자에게 원인 보고
2. `git log --oneline -5`로 최근 차수 확인 후 다음 차수 계산
3. 변경된 파일을 `git add` (의도치 않은 파일이 섞이지 않았는지 `git status`로 확인)
4. `N차 수정 및 export` 메시지로 커밋
