---
name: engine-source-reference
description: 이 SDK가 내부적으로 사용하는 오피스 엔진(WASM으로 컴파일되기 전의 C++ 소스)의 실제 구현 코드를 참고해야 할 때 쓰는 스킬입니다. 예를 들어 "엔진 내부 동작이 궁금해", "IInitScreen 함수 엔진쪽 구현 봐줘", "이 버그가 엔진 문제인지 확인해줘", "IntX_Weboffice 코드 참고해줘" 같은 요청에 사용하세요. 엔진 소스는 이 SDK 저장소가 아니라 별도 private GitHub 저장소(PolarisOfficeRnD/PolarisOffice8.0, PR/IntX_Weboffice 브랜치)에 있으며, GitHub MCP를 통해 읽기 전용으로만 조회합니다 (코드 수정 절대 금지).
---

# 엔진 소스 참고 (PolarisOffice8.0 / PR_IntX_Weboffice)

## 배경

이 SDK 저장소(`polaris-weboffice/sdk`)에는 오피스 엔진이 **미리 컴파일된 WASM 바이너리**로만 들어 있습니다 (`src/assets/wasm/{hwp,word,slide,sheet}/libpolarisoffice.js`, `src/assets/wasm_pthread/...`). 이 바이너리를 만드는 실제 C++ 엔진 소스는 이 저장소에 없고, 별도 private 저장소에 있습니다.

- **저장소**: `https://github.com/PolarisOfficeRnD/PolarisOffice8.0`
- **기준 브랜치**: `PR/IntX_Weboffice`
- **접근 방법**: `.mcp.json`에 등록된 GitHub 공식 원격 MCP(`github`, OAuth 로그인)의 `mcp__github__*` 툴 사용. 최초 사용 시 브라우저에서 GitHub 로그인/인가가 필요할 수 있습니다.

**이 스킬은 참고(읽기 전용) 목적입니다. 이 스킬을 통해 조회한 엔진 저장소에는 절대 커밋/푸시/PR 등 쓰기 작업을 하지 마세요.**

## SDK ↔ 엔진 연결 구조

SDK 쪽 코드(`src/weboffice/base/engine/core/CoreFunctions.ts`, `CoreCallbacks.ts`, `OCXCoreFunctions.ts` 등)는 emscripten의 `ccall`/`cwrap`을 통해 `I`로 시작하는 이름의 엔진 함수를 직접 호출합니다.

```ts
// 예시 (CoreFunctions.ts)
CoreModule.ccall('IGetFontColor', ...)
worker.initScreen(...) // 내부적으로 'IInitScreen' 호출
```

즉 `IInitScreen`, `ISaveDocument`, `IGetFontColor`, `ISetParaAttribute` 같은 이름들이 SDK와 엔진 사이의 실제 API 경계이며, 이 함수들의 실제 구현부(로직/버그 원인)는 엔진 저장소의 C++ 코드에 있습니다.

- SDK 쪽에서 특정 기능(예: 그룹 이미지 좌우대칭)을 호출할 때 어떤 `IXxx` 함수를 쓰는지는 `src/weboffice/base/engine/core/CoreFunctions.ts`, `CoreCallbacks.ts`를 먼저 grep해서 찾으세요.
- 문서 포맷별(hwp/word/slide/sheet) 엔진 동작 차이가 있을 수 있으니, 어떤 포맷에서 발생한 이슈인지 확인 후 엔진 저장소에서도 해당 포맷 관련 코드를 우선 탐색하세요.

## 엔진 커밋 버전 확인 방법

이 SDK 저장소의 커밋 히스토리에는 wasm 바이너리를 업데이트할 때마다 엔진 저장소의 커밋 해시가 커밋 메시지에 그대로 남습니다:

```
fix: WO-5513 hwp wasm IntX_Weboffice 73cc600 업데이트 (#515)
fix: WO-5508 hwp wasm IntX_Weboffice c7ab5e9 업데이트 (#502)
```

현재 SDK에 들어 있는 wasm 바이너리가 엔진 저장소의 정확히 어느 커밋에서 왔는지 알고 싶다면:

```bash
git log --oneline -- src/assets/wasm/{hwp,word,slide,sheet}/libpolarisoffice.js src/assets/wasm_pthread
```

로 가장 최근 업데이트 커밋 메시지를 확인하고, 그 안의 해시(예: `73cc600`)를 `PR/IntX_Weboffice` 브랜치에서 찾아 그 시점 기준 코드를 참고하면 SDK와 정확히 일치하는 엔진 코드를 볼 수 있습니다. (특별한 지시가 없으면 브랜치 최신 커밋 기준으로 참고해도 무방합니다.)

## 사용 절차

1. 먼저 SDK 쪽 코드(`src/weboffice/base/engine/`)에서 관련 `IXxx` 함수명이나 기능 키워드를 찾습니다.
2. `mcp__github__*` 툴로 `PolarisOfficeRnD/PolarisOffice8.0` 저장소, `PR/IntX_Weboffice` 브랜치를 대상으로 코드 검색/파일 조회를 합니다 (예: 함수명으로 코드 검색, 특정 경로 파일 조회).
3. 필요하면 위 방법으로 확인한 엔진 커밋 해시를 기준으로 조회해 SDK 버전과 정확히 맞춥니다.
4. 찾은 엔진 코드를 바탕으로 원인 분석/설명을 제공하되, **엔진 저장소에는 어떤 변경도 가하지 않습니다.**
