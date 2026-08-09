---
name: wasm-build-update
description: 내부 빌드 공유폴더(\\172.25.0.50\embider\ColdDragon\WASM_TEST\PolarisOffice8.0_PR.IntX_Weboffice)에 새로 올라온 엔진 wasm/js 빌드 결과물을 이 SDK 저장소의 src/assets/wasm/{format}/libpolarisoffice.js·wasm 로 교체할 때 쓰는 스킬입니다. 사용자가 "wasm 업데이트해줘", "빌드 서버에서 최신 wasm 가져와줘", "libpolarisoffice 파일 교체해줘", "엔진 바이너리 갱신해줘", 커밋 해시(예: 73cc600)를 언급하며 "이 빌드로 교체해줘" 라고 할 때 사용하세요. C++ 엔진 소스 코드 자체를 읽고 싶은 것이면 이 스킬이 아니라 `engine-source-reference`를 사용하세요 — 이 스킬은 이미 컴파일된 바이너리를 복사/교체하는 것만 다룹니다.
---

# WASM 빌드 바이너리 교체

내부망 빌드 공유폴더에 올라온 엔진 wasm/js 산출물을 이 SDK 저장소로 가져와 기존 바이너리를 교체하는 스킬입니다.

## 배경

- **원본(빌드 공유폴더) 루트**: `\\172.25.0.50\embider\ColdDragon\WASM_TEST\PolarisOffice8.0_PR.IntX_Weboffice`
- 루트 바로 아래에는 빌드마다 `YYYY-MM-DD-HH.mm.ss-{커밋해시7자리}` 형식의 폴더가 있습니다 (예: `2026-07-30-12.07.50-73cc600`). 이 커밋해시는 `engine-source-reference` 스킬에서 다루는 엔진 저장소(`PolarisOfficeRnD/PolarisOffice8.0`, `PR/IntX_Weboffice` 브랜치)의 커밋과 대응되고, 이 SDK의 과거 커밋 메시지(`fix: WO-XXXX hwp wasm IntX_Weboffice 73cc600 업데이트`)에 남는 해시와도 같은 값입니다.
- 그 아래 구조는 `make\{format}\WEBOFFICE_EDIT_API={yes|no}\Release\libpolarisoffice.js` / `libpolarisoffice.wasm` 입니다.
  - `{format}`은 `hwp`/`word`/`sheet`/`slide` 중 하나.
  - **주의**: 빌드 폴더마다 들어있는 `{format}` × `EDIT_API={yes|no}` 조합이 전부 다릅니다. 확인해보면 어떤 빌드는 `hwp`의 `EDIT_API=yes` 하나만 존재하는 등, 그때 수정한 포맷만 들어있는 경우가 많습니다. **폴더 구조를 절대 미리 추정하지 말고 매번 실제로 나열해서 확인하세요.**
  - THREAD(멀티스레드) 빌드가 별도로 존재하는지도 빌드마다 다릅니다 — 있으면 사용자에게 함께 교체할지 물어보세요 (아래 참고).
- **목적지(이 저장소)**:
  - 일반 빌드: `src/assets/wasm/{format}/libpolarisoffice.js`, `src/assets/wasm/{format}/libpolarisoffice.wasm`
  - THREAD 빌드: `src/assets/wasm_pthread/{format}/libpolarisoffice_THREAD.js`, `libpolarisoffice_THREAD.wasm` (+ `libpolarisoffice_THREAD.worker.js`)
  - 파일명은 이미 고정되어 있으므로(버전 넘버가 파일명에 안 들어감) 그대로 같은 이름으로 덮어쓰면 됩니다.

## 네트워크 경로 접근 시 주의

이 저장소 환경은 Windows이며 UNC 경로(`\\172.25.0.50\...`)는 **PowerShell 도구**로 접근해야 합니다. Bash 도구(Git Bash)로 UNC 경로를 그대로 넘기면 `\\172.25.0.50\...`가 `C:\172.25.0.50\...`처럼 잘못 해석되어 실패합니다. 따라서 원본 폴더 탐색·복사는 PowerShell 도구(`Get-ChildItem`, `Copy-Item`, `Test-Path`)를 사용하세요.

## 절차

### 1. 대상 빌드 폴더 및 포맷 확정

사용자가 이미 정확한 빌드 폴더 경로(또는 커밋해시)를 알려줬으면 그걸 그대로 씁니다. 그렇지 않으면:

```powershell
Get-ChildItem '\\172.25.0.50\embider\ColdDragon\WASM_TEST\PolarisOffice8.0_PR.IntX_Weboffice' | Sort-Object LastWriteTime -Descending | Select-Object Name, LastWriteTime
```

최근 순으로 목록을 보여주고 **사용자에게 어떤 빌드를 쓸지 반드시 확인받습니다.** 임의로 "가장 최신 것"을 선택해서 진행하지 마세요 — 최신 빌드가 아직 검증 전이거나, 사용자가 특정 커밋(예: 특정 Jira 이슈 수정분)을 지정하려는 경우가 많습니다.

**이때 업데이트할 포맷(`hwp`/`word`/`sheet`/`slide`, 복수 가능)도 반드시 함께 물어보세요.** 이 스킬이 `issue-code-fix` 스킬 등에서 이어서 호출되어 특정 Jira 이슈나 문서 포맷이 대화에 이미 언급돼 있어도, 그 포맷이 이번에 교체할 포맷이라고 임의로 단정하지 마세요 — 해당 빌드에 그 포맷 산출물이 아예 없을 수도 있고, 사용자가 다른 포맷까지 함께 교체하고 싶을 수도 있습니다. 반드시 사용자의 명시적 답을 받은 뒤 다음 단계로 진행하세요.

### 2. EDIT_API 옵션 / THREAD 여부 확정

선택한 빌드 폴더의 `make` 하위를 재귀적으로 나열해서, 1단계에서 확정한 포맷들의 실제 존재 조합을 확인합니다:

```powershell
Get-ChildItem '<선택한 빌드 폴더>\make' -Recurse | Select-Object -ExpandProperty FullName
```

- 1단계에서 사용자가 지정한 포맷이 목록에 없으면 즉시 알리고, 계속 진행할지(다른 포맷으로) 다시 확인받으세요 — 조용히 다른 포맷으로 대체하지 마세요.
- 해당 포맷에 대해 `EDIT_API={yes|no}` × (THREAD 여부) 조합이 여러 개 나오면 **항상** 어떤 걸 적용할지 사용자에게 확인받습니다 (하나뿐이어도 이 저장소가 현재 어떤 옵션을 쓰고 있는지 파일명만으로는 알 수 없으므로, 사용자가 이미 "yes/no"까지 지정하지 않았다면 확인 없이 넘어가지 마세요).

### 3. 원본 파일 존재 확인

```powershell
Test-Path '<빌드 폴더>\make\<format>\WEBOFFICE_EDIT_API=<yes|no>\Release\libpolarisoffice.js'
Test-Path '<빌드 폴더>\make\<format>\WEBOFFICE_EDIT_API=<yes|no>\Release\libpolarisoffice.wasm'
```

둘 다 없으면 그대로 사용자에게 알리고 중단합니다 (추정으로 다른 폴더를 뒤지지 마세요).

### 4. 교체 전 저장소 상태 확인

```bash
git status -- src/assets/wasm src/assets/wasm_pthread
```

기존에 커밋되지 않은 변경이 이미 있으면 사용자에게 먼저 알립니다 (덮어쓰면 그 변경이 섞일 수 있음).

### 5. 파일 복사 (덮어쓰기)

PowerShell로 복사합니다 (Bash의 cp는 UNC 경로에서 문제가 될 수 있어 지양):

```powershell
Copy-Item '<빌드 폴더>\make\<format>\WEBOFFICE_EDIT_API=<yes|no>\Release\libpolarisoffice.js'   'src\assets\wasm\<format>\libpolarisoffice.js' -Force
Copy-Item '<빌드 폴더>\make\<format>\WEBOFFICE_EDIT_API=<yes|no>\Release\libpolarisoffice.wasm' 'src\assets\wasm\<format>\libpolarisoffice.wasm' -Force
```

THREAD 빌드도 함께 교체하기로 했다면 `src\assets\wasm_pthread\<format>\` 쪽 파일들도 동일하게 복사합니다.

### 6. 결과 확인

```bash
git status
git diff --stat -- src/assets/wasm src/assets/wasm_pthread
```

바이너리 파일 크기 변화 등을 보여주고 사용자에게 의도한 파일이 맞는지 확인받습니다.

### 7. 커밋은 사용자 승인 후에만

이 스킬은 **파일 교체까지만** 하고, 커밋/푸시는 하지 않습니다. 사용자가 커밋을 요청하면 `github-workflow` 스킬을 따르세요 — 이 저장소의 과거 커밋 메시지 컨벤션은 다음과 같으므로, 커밋 메시지를 작성할 때 참고합니다 (Jira 티켓 번호(`WO-XXXX`)는 사용자에게 확인):

```
fix: WO-XXXX {format} wasm IntX_Weboffice {커밋해시7자리} 업데이트
```

## 절대 하지 말 것

- 빌드 폴더/포맷/옵션을 사용자 확인 없이 임의로 추정해서 진행하지 않습니다 (빌드마다 들어있는 조합이 매번 다름).
- UNC 경로 탐색·복사에 Bash를 쓰지 않습니다 (경로가 깨짐).
- 파일 교체 후 사용자 승인 없이 자동으로 커밋/푸시하지 않습니다.
