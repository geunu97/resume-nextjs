---
name: sharepoint-version-folder-copy
description: 팀 SharePoint(Teams 채널) 문서 라이브러리에 있는 버전 폴더(예 v1.4.35)를 복사해서 새 버전 이름(예 v1.4.36)으로 만들고, 필요하면 복사본 안의 특정 파일을 정리(삭제)하거나 파일명 속 버전 문자열을 새 버전으로 바꿀 때 쓰는 스킬입니다. 사용자가 "버전 폴더 복사해줘", "v1.4.35를 v1.4.36으로 복사해서 만들어줘", "새 폴더에서 pdf 파일 지워줘", "남아있는 파일명도 폴더 버전에 맞게 바꿔줘", "sharepoint에 새 버전 폴더 만들어줘" 라고 할 때 사용하세요. 이 라이브러리는 로컬 PC에 동기화되어 있지 않으므로 파일 탐색기가 아니라 Outlook MCP(ms-365-mcp-server)의 SharePoint/Graph API 도구로만 처리합니다.
---

# SharePoint 버전 폴더 복사/이름변경

Teams 채널의 SharePoint 문서 라이브러리에 있는 버전 폴더를 복사하고 새 버전명으로 이름을 바꾸는 스킬입니다. 팀 전체가 보는 공유 경로이므로 로컬에 복사본을 만드는 것으로는 대체할 수 없고, 실제 SharePoint 라이브러리에서 작업해야 합니다.

## 배경

- 자주 쓰는 대상 사이트: `infrawareo365.sharepoint.com` / `sites/msteams_1ac65a` (선행사업팀, 표시명 다름 — Teams 채널명은 "웹오피스 개발 채널")
- 자주 쓰는 문서 라이브러리 하위 경로: `웹오피스 개발 채널/10. automation/03. guides` — 그 아래 `v1.2.90`, `v1.4.34`, `v1.4.35` … 같은 버전 폴더들이 나열되어 있음.
- 각 버전 폴더 안에는 보통 파일 4개가 들어있다: `Polaris Web Office SDK Developer's Guide v{버전}(HWP).docx`/`.pdf`, `...(MS Office Format).docx`/`.pdf`. 복사본을 만든 뒤 pdf 2개만 지워달라는 요청이 자주 온다 (docx는 유지). 파일명 안의 버전 문자열(`v1.4.35` 등)은 복사해도 자동으로 안 바뀐다 — 이어서 "파일명도 폴더 버전에 맞게 바꿔줘" 라는 요청이 따라오는 경우가 많으므로, 명시적으로 바꿔달라는 요청이 없으면 그대로 두되 남아있음을 사용자에게 알려준다.
- 이 라이브러리는 **로컬 OneDrive 동기화 대상이 아님** (PC의 `OneDrive - Infraware Inc` 아래에 대응 폴더 없음, 확인됨). 따라서 PowerShell/Bash로 로컬 파일 복사를 시도하지 말고 반드시 Graph API(=outlook MCP 도구)로 처리합니다.
- 사이트/경로가 매번 같다는 보장은 없으므로, 사용자가 다른 SharePoint 링크(`.../sites/{site}/...`)를 주면 그 링크에서 site path와 폴더 경로를 파싱해서 사용합니다. URL의 `id=` 쿼리 파라미터가 percent-encoding된 전체 서버 상대 경로를 담고 있는 경우가 많습니다 (예: `%2Fsites%2Fmsteams_1ac65a%2FShared%20Documents%2F...`).

## 사전 확인

- `mcp__outlook__get-sharepoint-site-by-path` 같은 SharePoint 사이트 도구가 로드되어 있는지 확인 (`ToolSearch`로 로드). 이 도구들은 outlook MCP 서버가 `work`(또는 `search`) preset으로 떠 있어야 노출된다. 만약 호출이 권한/스코프 오류로 실패하면, `.mcp.json`의 outlong 서버 args에 `work` preset이 포함되어 있는지, 그리고 `Sites.Read.All`/`Sites.ReadWrite.All` 동의가 되어 있는지 확인하고 재인증을 요청한다 (재시작+동의 필요할 수 있음).
- 원본 버전 폴더와 목표 이름을 사용자에게 반드시 명확히 확인한다 (예: "v1.4.35 → v1.4.36 맞나요?"). 버전 번호를 추측해서 진행하지 않는다.

## 절차

### 1. 사이트 ID 확인

```
mcp__outlook__get-sharepoint-site-by-path(siteId="infrawareo365.sharepoint.com", path="sites/msteams_1ac65a")
```

응답의 `id` 필드(`infrawareo365.sharepoint.com,{site-guid},{web-guid}` 형식)를 이후 단계의 `siteId`로 사용한다.

### 2. 문서 라이브러리 drive ID 확인

```
mcp__outlook__list-sharepoint-site-drives(siteId=<위 site id>)
```

`name: "문서"` (webUrl이 `.../Shared Documents`로 끝나는 항목)가 보통 우리가 찾는 라이브러리다. 사이트에 라이브러리가 여러 개면 사용자가 준 링크의 `Shared%20Documents`/다른 라이브러리명과 대조해서 고른다. 이 drive의 `id`를 이후 단계의 `driveId`로 사용한다.

### 3. 버전 폴더들이 있는 상위 폴더 ID 확인

콜론 경로 문법이 동작한다 (검증됨):

```
mcp__outlook__get-drive-item(driveId=<drive id>, driveItemId="root:/웹오피스 개발 채널/10. automation/03. guides:")
```

경로는 한글/공백 포함 그대로 넣으면 된다 (URL 인코딩 불필요). 응답의 `id`가 이 폴더의 `driveItemId`.

### 4. 폴더 목록에서 원본 버전 폴더 확인 + 목표 이름 중복 확인

```
mcp__outlook__list-folder-files(driveId=<drive id>, driveItemId=<3번 폴더 id>, select="id,name,folder", top=99)
```

- 원본 폴더(예 `v1.4.35`)의 `id`를 찾는다. 없으면 사용자에게 알리고 중단.
- **목표 이름(예 `v1.4.36`)이 이미 존재하는지 반드시 확인한다.** 이미 있으면 사용자 확인 없이 덮어쓰지 말고 중단 후 알린다.

### 5. 복사 + 이름변경 (한 번에)

`copy-drive-item`의 body에 `name`을 함께 넘기면 복사와 동시에 새 이름을 지정할 수 있다 (별도로 `move-rename-onedrive-item`을 쓸 필요 없음):

```
mcp__outlook__copy-drive-item(
  driveId=<drive id>,
  driveItemId=<원본 버전 폴더 id, 예 v1.4.35의 id>,
  body={
    "parentReference": { "driveId": <drive id>, "id": <3번 폴더 id> },
    "name": "<목표 버전 이름, 예 v1.4.36>"
  }
)
```

- 이 작업은 비동기(202 Accepted + Location 헤더로 job 모니터 URL)로 처리될 수 있다. 응답에 즉시 결과가 없으면 잠시 후 4번의 `list-folder-files`를 다시 호출해서 새 폴더가 생겼는지, child 개수가 원본과 같은지 확인한다.
- 큰 폴더(하위 파일이 많음)는 복사가 끝나기까지 시간이 걸릴 수 있으니, 바로 안 보이면 몇 초 후 다시 확인해본다.

### 6. (선택) 복사본 내부 파일 정리 — 예: pdf 2개 삭제

사용자가 복사본 안의 특정 파일(예: pdf만 삭제, docx는 유지)을 정리해달라고 하면:

```
mcp__outlook__list-folder-files(driveId=<drive id>, driveItemId=<새로 만든 버전 폴더 id>, select="id,name,file,folder")
```

- 응답으로 실제 파일 목록과 각 파일의 `id`를 확인한다. **확장자/이름으로 지울 대상이 사용자가 말한 것과 정확히 일치하는지 먼저 눈으로 확인**하고, 애매하면(예: 개수가 다르거나 이름이 예상과 다르면) 진행 전에 사용자에게 확인한다.
- 확인된 각 파일에 대해 삭제 실행:

```
mcp__outlook__delete-onedrive-file(driveId=<drive id>, driveItemId=<지울 파일 id>)
```

- 삭제는 원본 버전 폴더(예 `v1.4.35`)가 아니라 **반드시 새로 복사한 폴더(예 `v1.4.36`) 안의 파일 id**로만 실행한다 — id를 헷갈리면 원본이 손상될 수 있다.
- 삭제 후 같은 폴더를 다시 `list-folder-files`로 조회해서 의도한 파일만 사라지고 남겨야 할 파일(docx 등)은 그대로인지 확인한다.

### 7. (선택) 남은 파일명의 버전 문자열을 새 버전으로 변경

사용자가 남은 파일들의 이름도 새 폴더 버전에 맞게 바꿔달라고 하면, `move-rename-onedrive-item`으로 이름만 바꾼다 (부모 폴더는 그대로이므로 `parentReference` 없이 `name`만 넘기면 됨):

```
mcp__outlook__move-rename-onedrive-item(
  driveId=<drive id>,
  driveItemId=<바꿀 파일 id>,
  body={ "name": "<파일명에서 구버전 문자열을 새 버전으로 치환한 이름>" }
)
```

- 6번에서 조회한 파일 목록을 기준으로, 파일명에 들어있는 **구버전 문자열(예 `v1.4.35`)만 새 버전 문자열(예 `v1.4.36`)로 치환**하고 나머지 이름(`(HWP)`, `(MS Office Format)` 등)과 확장자는 그대로 유지한다. 파일명을 임의로 다시 짓지 않는다.
- 파일마다 한 번씩 호출해야 한다 (일괄 rename API 없음).
- 변경 전 파일명 목록을 사용자에게 보여주고 "이 이름들을 이렇게 바꾸면 되나요?" 식으로 애매하면 확인한 뒤 진행한다 — 특히 파일명 포맷이 예상(`... v{버전}(...).ext`)과 다르면 임의로 치환하지 말고 사용자에게 정확한 새 이름을 물어본다.
- 변경 후 같은 폴더를 `list-folder-files`로 다시 조회해서 이름이 의도대로 바뀌었는지 확인한다.

### 8. 결과 확인 및 보고

새로 생긴 폴더의 `webUrl`과 최종 파일 목록을 사용자에게 보여주고, 의도한 대로(복사/이름변경/파일 정리) 처리되었음을 보고한다.

## 절대 하지 말 것

- 로컬 파일 시스템(PowerShell/Bash)로 복사를 시도하지 않는다 — 이 라이브러리는 로컬에 동기화되어 있지 않다.
- 목표 이름의 폴더가 이미 존재하는데 사용자 확인 없이 덮어쓰지 않는다.
- 원본 버전/목표 버전 이름을 사용자 확인 없이 임의로 추측해서 진행하지 않는다.
- 파일 삭제는 되돌리기 번거로운 작업이다 — 원본 폴더의 파일을 지우지 않도록 driveItemId가 새 복사본 폴더 소속인지 반드시 재확인하고, 지울 파일 목록이 사용자가 말한 것과 정확히 맞는지 확인 후 실행한다.
- 파일명 rename도 원본 폴더(예 `v1.4.35`)의 파일 id가 아니라 반드시 새 복사본 폴더 안의 파일 id로만 실행한다. 버전 문자열 치환 외에 파일명의 나머지 부분을 임의로 바꾸지 않는다.
