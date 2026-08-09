---
name: sdk-sample-setup
description: 업체(외부)에 배포하는 Polaris Web Office SDK 샘플 zip을 SharePoint에서 버전별로 받아와 로컬에서 그대로 열어볼 수 있게 준비하는 스킬입니다. 사용자가 정확히 "샘플코드 만들어줘" 또는 "sample코드 만들어줘"라고 할 때 실행하세요 (코드 스니펫을 즉석에서 지어내 달라는 요청이 아니라, 실제 배포용 zip을 다운로드/재구성하는 작업입니다). 버전을 먼저 물어본 뒤, SharePoint(`i-Drive-PolarisWebOffice` 사이트 `PolarisWebOffice/릴리즈` 폴더)에서 해당 버전 zip을 받아 압축을 풀고, `source` 폴더를 `sample` 폴더 밑으로 옮겨 이름을 `polaris`로 바꾼 뒤 이 저장소의 `.claude/local/sample-code/`에 둡니다. 실행할 때마다 기존 결과물은 지우고 새로 만듭니다.
---

# SDK 샘플(업체 배포용) 로컬 준비

업체에 그대로 배포되는 Polaris Web Office SDK 샘플 zip을 SharePoint에서 받아, 로컬에서 열어볼 수 있는 형태로 압축 해제/재구성하는 스킬입니다. 파일 내용은 손대지 않고, `sample/index.html`이 기대하는 폴더 구조를 맞추기 위한 이동+이름변경만 수행합니다.

## 배경

- **원본 위치**: SharePoint 사이트 `i-Drive-PolarisWebOffice` 문서 라이브러리의 `PolarisWebOffice/릴리즈` 폴더. 사용자가 준 폴더 링크(`https://infrawareo365.sharepoint.com/:f:/s/i-Drive-PolarisWebOffice/IgBiTnjX7EbFRICofD6ukk9OAcg2j1SZDEkA9XixbCApT00`)가 가리키는 곳이 이 폴더로 확인됨(2026-08-05, 폴더 안 zip 파일명들이 사용자 설명("버전 별로 존재")과 정확히 일치).
  - 이 폴더는 **버전마다 하위 폴더가 아니라 zip 파일**(`v1.4.36.zip` 등)로 구분되어 있음. "폴더를 다운로드"가 아니라 "해당 버전 zip 파일을 다운로드"로 이해하고 진행한다.
  - 검증된 Graph id (오래돼서 안 맞으면 재조회):
    - siteId(경로 조회용): `infrawareo365.sharepoint.com` / `sites/i-Drive-PolarisWebOffice`
    - site id: `infrawareo365.sharepoint.com,6092d6cc-15a7-477f-a593-ff59d72bc7d1,b03dc095-5f38-48c4-9f30-5781c0534af5`
    - drive(문서 라이브러리) id: `b!zNaSYKcVf0elk_9Z1yvH0ZXAPbA4X8RInzBXgcBTSvVeoXDlHGVFTKEo1eDnuknc`
    - `릴리즈` 폴더 driveItemId: `01SD2O3JTCJZ4NP3CGYVCIBKD4H2XJET2O` (경로 `PolarisWebOffice/릴리즈`, 콜론 경로로도 재조회 가능: `mcp__outlook__get-drive-item(driveId=<위 drive id>, driveItemId="root:/PolarisWebOffice/릴리즈:")`)
- **zip 내부 구조** (v1.4.36 기준 실제 다운로드해서 확인함): 최상위에 `sample/`(`index.html`, `index.js`), `source/`(`polaris.weboffice.js` + 엔진 static 리소스, 실제 SDK 런타임), `document/`(개발자 가이드 PDF) 세 폴더가 있다.
  - `sample/index.html`은 `<script src="./polaris/polaris.weboffice.js"></script>`로 참조한다. 즉 그대로 압축만 풀면 안 되고, **`source` 폴더를 `sample/` 밑으로 옮기고 이름을 `polaris`로 바꿔야** `sample/index.html`이 정상적으로 SDK를 로드한다 — 사용자가 요청한 절차와 정확히 일치하며 실제로 검증됨.
  - `document/` 폴더(PDF 가이드)는 그대로 둔다. 요청받은 작업은 `source`→`sample/polaris` 이동/이름변경뿐이다.
- **최종 위치**: 이 저장소의 `.claude/local/sample-code/` (고정 경로). `.claude/`는 이미 `.gitignore` 대상이라 커밋될 걱정이 없다([[project-claude-local-only]]). **실행할 때마다 이 폴더를 통째로 지우고 새로 만든다** — 이전 버전 잔재가 섞이지 않도록.

## 사전 확인

- `mcp__outlook__get-sharepoint-site-by-path` 등 SharePoint 도구가 로드돼 있는지 확인(`ToolSearch`로 로드). 실패하면 [[sharepoint-version-folder-copy]] 스킬의 "사전 확인" 절을 참고.

## 절차

### 1. 버전 확인

사용자 요청에 버전이 이미 명시돼 있으면(예: "1.4.36 샘플코드 만들어줘") 그 버전을 그대로 쓴다. 없으면 목록을 조회해서 사용자에게 물어본다 — **"최신"을 임의로 짐작해서 진행하지 않는다.**

```
mcp__outlook__list-folder-files(driveId=<drive id>, driveItemId="01SD2O3JTCJZ4NP3CGYVCIBKD4H2XJET2O", select="id,name", top=99)
```

- 파일명이 `v{major}.{minor}.{patch}.zip` 형식인 것만 정식 버전 후보로 사용자에게 보여준다. `-WO-`, `-log`, `-test`, `-comparer` 등 접미사가 붙은 파일은 임시/테스트 빌드이므로, 사용자가 그 정확한 이름을 콕 집어 요청하지 않는 한 후보에서 제외한다.
- 사용자가 고른 버전이 목록에 없으면 바로 알리고 중단한다 (버전 번호나 파일명을 지어내지 않는다).

### 2. 다운로드

```
mcp__outlook__get-download-url(target="/drives/<drive id>/items/<선택한 zip의 driveItemId>/content")
```

응답의 `downloadUrl`은 인증 헤더 없이 바로 받을 수 있는 pre-authenticated URL이다. 스크래치패드에 받는다(저장소 안에 바로 받지 않음):

```bash
curl -sL -o "<스크래치패드>/<버전>.zip" "<downloadUrl>"
```

응답에 같이 온 `size` 값과 실제 다운로드된 파일 크기(`ls -la`)가 일치하는지 확인한다. 안 맞으면 재다운로드한다.

### 3. 기존 결과물 정리 + 압축 해제

프로젝트 루트에서 실행(경로는 항상 아래 리터럴 상대경로 그대로 — 다른 경로로 확장해서 지우지 않는다):

```bash
rm -rf .claude/local/sample-code
mkdir -p .claude/local/sample-code
unzip -q "<스크래치패드>/<버전>.zip" -d .claude/local/sample-code
```

### 4. `source` → `sample/polaris` 이동 + 이름변경

```bash
mv .claude/local/sample-code/source .claude/local/sample-code/sample/polaris
```

이동 후 `.claude/local/sample-code/sample/polaris/polaris.weboffice.js` 파일이 실제로 존재하는지 확인한다(`sample/index.html`이 참조하는 정확한 경로).

### 5. 라이선스 키 삽입 여부 확인 (선택)

`sample/index.js`의 `PolarisWebOffice('weboffice_container', config)` 호출부(약 `const config = { documentType, viewMode, extraFonts, watermark, ... }`)에는 기본적으로 `licenseKey` 필드가 없다 — 라이선스 없이 켜면 SDK가 정상 동작하지 않을 수 있다. **매번 사용자에게 라이선스 키를 넣을지 먼저 물어본다.**

- 사용자가 이미 이번 요청에 실제 키 값을 함께 줬다면 다시 묻지 않고 그 값을 바로 쓴다.
- 물어봐서 "넣어줘"라고 하는데 값을 안 줬다면, 값을 지어내지 말고 사용자에게 키 값을 요청한다.
- 적용 위치: `config` 객체에 `licenseKey: "<값>"` 필드를 추가한다(watermark 등 기존 필드 옆에 나란히).

```js
const config = {
    documentType: documentType,
    viewMode: viewMode,
    extraFonts: extraFonts,
    watermark: 'TEST PAGE',
    licenseKey: "<사용자가 준 값>",
    ...
};
```

**라이선스 키는 민감정보다 — 절대 외부로 노출되지 않게 다룬다:**
- 이 SKILL.md 파일이나 다른 커밋되는 파일에 실제 키 값을 절대 적어두지 않는다. 매번 사용자에게 새로 받거나, 사용자가 이번 대화에서 준 값만 그 자리에서 쓴다.
- 오직 이미 gitignore 대상인 `.claude/local/sample-code/sample/index.js`에만 값을 써넣는다 (프로젝트의 다른 추적 파일에는 절대 쓰지 않는다).
- 외부로 전송되는 도구 호출(예: Artifact 공개, 메일 발송, 외부 API)에 이 값을 포함하지 않는다.

### 6. 스크래치패드 정리

```bash
rm -f "<스크래치패드>/<버전>.zip"
```

### 7. 결과 보고

최종 경로(`.claude/local/sample-code/sample/`)를 사용자에게 알려주고, 아래 "더 나은 확인 방법"을 함께 안내한다.

## 더 나은 확인 방법

`sample/index.html`을 `file://`로 그냥 더블클릭해서 열면, `polaris.weboffice.js`가 내부적으로 wasm/리소스를 `fetch()`로 불러오는 과정이 브라우저의 로컬 파일 CORS 제약에 막혀 정상 동작하지 않을 가능성이 높다(실제 업체 환경에서는 항상 웹서버로 서빙되는 상태로 쓰인다). 그대로 두되 실제 동작까지 확인하고 싶다면, 압축을 푼 `sample` 폴더를 간단한 정적 서버로 띄워서 여는 걸 권장한다고 사용자에게 안내한다:

```bash
npx --yes serve .claude/local/sample-code/sample
# 또는
python -m http.server 8080 --directory .claude/local/sample-code/sample
```

이후 브라우저로 `http://localhost:<port>` 접속. **서버 실행은 백그라운드 프로세스를 새로 띄우는 일이므로 사용자 승인 후에만 한다** — 이 스킬은 파일 준비까지만 하고 서버를 알아서 띄우지 않는다.

## 절대 하지 말 것

- 버전을 사용자 확인 없이 임의로 정하지 않는다(특히 "최신"이라고 짐작하지 않는다).
- `.claude/local/sample-code` 이외의 경로에 `rm -rf`를 실행하지 않는다.
- `document/`(PDF 가이드) 등 `source`/`sample` 밖의 내용은 건드리지 않는다 — 요청받은 것은 `source`→`sample/polaris` 이동/이름변경뿐이다.
- 이 zip은 업체에 배포되는 산출물 그대로이므로, `sample`/`polaris` 내부 파일 내용 자체를 수정하지 않는다(경로 구조만 맞춘다). **단, 사용자가 명시적으로 요청한 라이선스 키 삽입(`config.licenseKey` 추가/교체)만은 예외로 허용한다.**
- 사용자 승인 없이 정적 서버 등 백그라운드 프로세스를 자동으로 실행하지 않는다.
- 라이선스 키 값을 SKILL.md 등 커밋되는 파일에 적어두거나, 외부로 전송되는 어떤 호출에도 포함시키지 않는다 — gitignore된 `sample-code` 사본 안에만 쓴다.
