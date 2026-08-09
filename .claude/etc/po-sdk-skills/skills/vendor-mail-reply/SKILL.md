---
name: vendor-mail-reply
description: Outlook으로 받은 업체(고객사/파트너)의 SDK 기술 문의 메일에 답장 초안을 작성할 때 쓰는 스킬입니다. 사용자가 메일을 붙여넣거나(forward) 발신자/제목으로 지목하며 "이 메일 답장 초안 써줘", "이 문의 어떻게 답해야 해?", "이 질문에 뭐라고 답장하지?" 라고 할 때 사용하세요. 과거 Q&A/코드 예제 히스토리(webpo-guide-mcp) → 배포용 API 소스 주석 순으로 참고해서 답을 만듭니다. 버그 리포트/이슈를 Jira에 등록하는 것이 목적이면 이 스킬이 아니라 `mail-to-jira-issue`를 사용하세요. 문의에 답장 문구가 아니라 실제 코드 수정까지 필요하면 이 스킬이 아니라 `issue-code-fix`를 사용하세요.
---

# 업체 문의 메일 답장 (SDK 기술 문의)

Outlook으로 받은 업체 기술 문의 메일에 답장 초안을 작성하는 스킬입니다. **이 스킬은 초안 작성까지만 하며, 실제 메일 발송은 절대 하지 않습니다.**

## 절대 규칙

**`mcp__outlook__send-mail`, `mcp__outlook__send-draft-message`, `mcp__outlook__create-reply-draft` 등 발송/초안생성 계열 Outlook 도구를 호출하지 마세요.** 답장 내용은 대화 안에 텍스트로 제시하고, 실제 발송은 항상 사용자가 Outlook에서 직접 합니다. 사용자가 "그냥 보내줘"라고 명시적으로 요청해도, 발송 자동화는 이 스킬의 범위 밖이라는 점을 알리고 초안만 제공하세요.

## 워크플로우

### 1. 대상 메일 특정

`mail-to-jira-issue` 스킬과 동일한 방식입니다:
- 메일 내용을 대화에 직접 붙여넣거나 전달(forward)함 → 그대로 사용
- 발신자/제목/기간으로 설명함 → `mcp__outlook__list-mail-messages` 또는 `mcp__outlook__list-mail-folder-messages`로 `$search`(KQL, 큰따옴표로 감싸기) 또는 `$filter`로 검색
- 특정 메일 ID를 알려줌 → `mcp__outlook__get-mail-message`로 직접 조회

여러 건이 검색되면 반드시 사용자에게 후보를 보여주고 확인받으세요.

문의 내용에서 **어떤 포맷(HWP/WORD/SHEET/SLIDE)** 에 대한 질문인지, 애매하면 공통(common) 질문인지 먼저 판단하세요. 이후 단계에서 계속 이 판단을 기준으로 검색 범위를 좁힙니다.

### 2. 1순위 — 과거 히스토리 확인 (`webpo-guide-mcp`)

이 문의가 **단답형**인지 **여러 API를 조합해야 하는 복합 답변**(코드 예제)이 필요한지 먼저 가늠하고, 아래 도구로 과거 기록을 찾습니다:

- 단답형 문의 → `mcp__guide-mcp__search_qa({ format, query })`
- 코드 조합이 필요해 보이는 문의(순회/반복/여러 API 연쇄 호출 등) → `mcp__guide-mcp__search_cookbook({ format, query })`
- 어느 쪽인지 애매하면 둘 다 확인하세요. `query`를 생략하면 해당 포맷의 전체 기록이 반환되니, 문의 핵심 키워드로 먼저 좁혀보고 안 나오면 생략해서 전체를 훑어도 됩니다.
- **주의**: `search_cookbook`/`record_cookbook`의 `format`은 `hwp`/`word`/`sheet`/`slide`만 지원하고 `common`은 없습니다(코드 예제는 항상 특정 포맷에 종속). 문의를 "공통(common)"으로 판단했는데 코드 조합형 답변이 필요하면, `common`으로 호출하지 말고 실제 예제 코드가 적용되는 포맷(예: HWP 문서로 시연했다면 `hwp`)을 골라 조회/기록하세요.

여기서 유사한 과거 문의·답변(또는 코드 예제)을 찾으면 그 내용을 우선 재사용합니다. **`cookbook`에서 찾은 코드는 절대 요약하거나 손대지 말고 그대로 재사용하세요** — 동작이 미묘하게 바뀔 수 있습니다.

찾지 못했거나 애매하면, 보조 수단으로 Outlook 보낸 편지함에서 관련 키워드로 과거 답장을 검색해보세요 (`mcp__outlook__list-mail-folder-messages` 등으로 Sent Items 검색). 히스토리가 아직 얇은 초기에는 이 Outlook 검색이 사실상 주요 수단이 되고, 기록이 쌓일수록 자연스럽게 덜 필요해집니다.

### 3. 2순위 — API 소스 주석 확인

이 SDK 저장소는 아래 파일들의 JSDoc(`@param`/`@returns`/`@example`)을 기반으로 외부에 배포하는 API PDF 문서(`polaris-weboffice-{hwp,word,slide,sheet}-api.pdf`)를 생성합니다. 즉 이 파일들이 실제로 고객에게 전달되는 API 스펙 그 자체이므로, 문의에 나온 API/기능이 어떻게 동작해야 하는지는 여기서 정확히 확인할 수 있습니다.

- HWP: `src/weboffice/hwp/api/HwpAPI.ts`, `HwpViewAPI.ts`
- WORD: `src/weboffice/word/api/WordAPI.ts`, `WordViewAPI.ts`
- SHEET: `src/weboffice/sheet/api/SheetAPI.ts`, `SheetViewAPI.ts`
- SLIDE: `src/weboffice/slide/api/SlideAPI.ts`, `SlideViewAPI.ts`
- 공통: `src/weboffice/base/api/CommonAPI.ts`, `src/weboffice/base/api/define.ts`

관련 메서드를 찾아 JSDoc 설명과 예제를 그대로 답변 근거로 사용하세요. (`webpo-guide-mcp`에는 더 이상 SDK 소개/설정/API 레퍼런스 문서가 없습니다 — 그 내용은 여기 JSDoc이 원본이므로 중복 보관하지 않습니다.)

### 4. 그래도 확인이 안 될 때

엔진(WASM 내부, C++) 동작 자체가 원인으로 의심되면 `engine-source-reference` 스킬을 참고해서 엔진 소스(private 저장소 `PolarisOfficeRnD/PolarisOffice8.0`, `PR/IntX_Weboffice` 브랜치)를 확인하세요. 그래도 원인이 불명확하면 추측성 답변을 만들지 말고, "확인 후 회신 예정"으로 안내하는 초안을 제시하고 사용자에게 알리세요.

### 5. 답장 초안 제시

제목과 본문을 대화창에 텍스트로 제시합니다. 정중하고 간결한 톤으로, 실제 사용한 근거(API 이름, 과거 사례 등)를 답변 안에 자연스럽게 녹여 씁니다. 코드 예제를 그대로 인용했다면 코드도 답장 본문에 포함하세요. **발송은 하지 않습니다.**

### 6. 기록 여부 확인

초안을 제시한 후 이렇게 물어보세요: "이 내용 나중에 참고하도록 기록할까요?"

사용자가 승인하면, 답변 성격에 맞는 도구를 호출합니다 (날짜는 서버가 자동으로 채우므로 신경 쓸 필요 없음):

- **단답형 답변** → `mcp__guide-mcp__record_qa({ format, vendor, question, answer, reference? })`
- **코드 조합/복합 답변** → `mcp__guide-mcp__record_cookbook({ format, title, situation, code, note? })` — `code`는 실제로 보낸 코드를 그대로 전달하고 요약하지 마세요.

기록 전에 `search_qa`/`search_cookbook`으로 이미 매우 비슷한 항목이 있는지 한 번 더 확인하고, 있으면 새로 추가하지 말고 사용자에게 기존 항목을 갱신할지 물어보세요(현재 도구는 추가만 지원하므로 갱신이 필요하면 해당 포맷 파일을 직접 `Read`/`Edit`해서 기존 항목을 고치면 됩니다).
