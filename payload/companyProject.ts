import { IProject } from '../component/project/IProject';
import findbackAward from '../asset/findback-award.jpg';

const companyProject: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Polaris WebOffice SDK',
      startedAt: '2024-06',
      where: '(폴라리스 오피스) WebOffice B2B 파트너사 연동 및 서비스 고도화 프론트엔드 개발',
      skillKeywords: ['WebAssembly', 'TypeScript', 'React', 'Redux', 'Sass', 'MCP'],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '웹 브라우저만으로 다양한 문서 포맷(Hwp, Word, Sheet, Slide)을 열람·편집할 수 있는 웹 기반 오피스 솔루션',
            },
            {
              content:
                'WebAssembly 기반 JavaScript SDK로 제공되어 그룹웨어, 기안기 등 다양한 환경에 통합/연동 가능',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '2025년 연간 사내 프로젝트 평가에서 최우수 프로젝트 선정',
            },
            {
              content: '웹오피스 상용화 레퍼런스 확대 - 60여개 고객사 납품 및 상용화',
            },
            {
              content: '웹오피스 매출 실적 475% 달성(2024년 4.1억 → 2025년 19.8억)',
            },

            {
              content: "폴라리스오피스, 서버리스 '웹오피스' GS인증 1등급 획득",
              href: 'https://www.hankyung.com/article/202504087237i',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'B2B 파트너사 SDK 납품 및 기술 지원을 통한 고객사 확대 기여',
              descriptions: [
                {
                  content:
                    '나눔기술(전북·삼성생명·RISE·가축위생방역본부 등), 방첩사, 래티스, 넥스가이드, 엘박스, 아이스크림미디어, 비인텍, 커리어넷, 한국도로공사(러너스하이), 법무법인 지평, 브레인벤쳐스, 가온아이(감사원 차세대 오아시스), LGU+ 웹하드/웍스, MG새마을금고, 천재교육, 외교부, 지엔기술(교육부), 전기안전공사(와이즈넛), 국가철도공단, 장애인체육회, IBK기업은행, 메일플러그 등 20여 개 고객사를 직접 담당해 기술 지원과 라이센스 갱신·관리를 수행',
                },
                {
                  content:
                    '방첩사·천재교육·MG새마을금고·나눔기술(삼성생명)·전기안전공사 등 주요 고객사는 기술 미팅과 현장 방문 지원을 직접 진행하며 관계를 관리',
                },
              ],
            },
            {
              content: 'WebAssembly 엔진과 React UI 레이어 간 이슈 분리 및 해결 프로세스 구축',
              descriptions: [
                {
                  content:
                    'C++ 기반 WebAssembly 엔진과 React UI가 결합된 아키텍처에서 발생하는 이슈의 원인을 정확히 파악하기 어려운 문제가 있었음. 엔진 레벨 이슈인지 UI 레벨 이슈인지 빠르게 판단할 수 있는 Triage 프로세스를 수립',
                },
                {
                  content:
                    'API 호출 시퀀스와 데이터 흐름을 추적하여 이슈 발생 지점을 식별하고, 엔진 이슈는 엔진팀과의 명확한 커뮤니케이션 프로토콜을 통해 패치 요청 및 검증 프로세스를 정립',
                },
              ],
            },
            {
              content: 'WebAssembly 메모리 관리 전략 수립 및 문서화',
              descriptions: [
                {
                  content:
                    'WASM은 GC가 없어 수동 메모리 관리가 필요하므로, 메모리 누수로 인한 성능 저하 및 크래시 위험이 있었음. 또한 JS와 WASM 간 데이터 전달 과정(문자열 수집 → 변환 → 메모리 배치 → 처리 → 해제)이 복잡하고 문서화되지 않아, 팀 내부 및 파트너사와의 협업 시 커뮤니케이션 비용이 증가하고 이슈 해결 속도가 느렸음',
                },
                {
                  content:
                    'JS에서 문자열/데이터 수집 → 데이터 변환 → Linear Memory 배치 → 포인터·길이 전달 → WASM 처리 → 포인터/버퍼 수거·해제의 과정을 문서화. 엔진/프론트 간 커뮤니케이션 프로토콜(입출력 규약, 메모리 소유권 및 해제 책임(alloc/free))을 명문화하여 가이드라인 수립',
                },
                {
                  content:
                    '문서화를 통해 메모리 누수 관련 이슈를 사전에 방지하고, 이슈 및 패치 검증 속도를 향상시켜 팀/파트너 간 협업 효율성 증대',
                },
                {
                  content:
                    '수립한 원칙을 실제로 적용해, 문서 인스턴스화 완료 후 더 이상 필요 없는 원본 WASM 바이너리(hwp 기준 약 22MB)를 ArrayBuffer.transfer()로 detach시켜 강제 회수하는 로직을 구현. 모듈 변수와 Emscripten 글루 코드가 동일 버퍼를 계속 참조해 단순 참조 제거만으로는 GC되지 않는 문제를 버퍼 자체 detach로 해결했으며, 재인스턴스화 시 바이너리를 다시 읽어야 하는 스레드(pthread) 빌드는 예외 처리해 안전성을 확보',
                },
              ],
            },
            {
              content: 'UI 레이어 기능 확장 및 해외 고객사 대응 다국어 지원',
              descriptions: [
                {
                  content:
                    '단축키 확대 지원, 누름틀 추가, Find/Replace/ReplaceAll API 등 React UI 레이어 기능을 직접 개발해 SDK 완성도를 높임',
                },
                {
                  content:
                    '해외 고객사 대응을 위해 영문·러시아어 다국어(i18n)를 적용해 비한국어권 고객사에서도 SDK를 도입할 수 있도록 지원',
                },
              ],
            },
            {
              content: 'Docusaurus 기반 개발자 가이드 POC 구현',
              descriptions: [
                {
                  content:
                    'JSDoc 주석을 Markdown으로 변환하는 스크립트를 개발해, 코드에 작성한 주석만으로 Docusaurus 기반 개발자 문서를 자동 생성하는 파이프라인을 검증(SDK MCP 도구 이전 단계의 문서화 접근)',
                },
              ],
            },
            {
              content: '폰트 로딩 병목 현상 해결을 통한 사용자 경험 개선',
              descriptions: [
                {
                  content:
                    'Google WebFont(NotoSansKR)를 CDN에서 동적으로 로드하는 방식으로 인해 평균 190ms의 로딩 지연이 발생하여, 특히 초기 렌더링 시 텍스트 깜빡임(FOUT) 현상이 사용자 경험을 저해',
                },
                {
                  content:
                    'TTF 포맷을 WOFF로 변환하여 파일 크기를 30% 감소시키고, 프로젝트 정적 자산으로 포함하여 빌드 시 함께 배포하는 방식으로 전환. 폰트가 필요한 시점에 이미 로드되어 있어 추가 네트워크 요청이 없도록 개선',
                },
                {
                  content:
                    '결과적으로 폰트 로딩 시간을 190ms에서 6ms로 약 97% 개선(31배 향상)하여 초기 렌더링 성능을 크게 향상',
                },
              ],
            },
            {
              content:
                'SDK MCP 도구와 Claude Code 스킬 기반 자동화로 문의 대응·코드 수정·라이선스 발급/배포 운영까지 13개 스킬 체계로 확장',
              descriptions: [
                {
                  content:
                    '월 50건 이상의 반복적인 기술 문의가 발생하여 개발팀의 업무 효율성이 저하되고 있었음. 문의 내용을 분석한 결과, 대부분이 SDK 사용법과 API 호출 방식에 대한 질문이었으며, 기존 문서가 분산되어 있어 찾기 어려운 구조였음',
                },
                {
                  content:
                    'SDK 가이드 문서를 SDK MCP(Model Context Protocol) 도구로 개발하여 Cursor, Claude 등 IDE와 MCP 설정을 통해 연동하고, 프롬프트 방식으로 SDK API 사용 예제와 설명을 즉시 확인할 수 있도록 개선. 개발자가 코드 작성 중 IDE 내에서 직접 SDK 문서를 참조하여 문서 검색 시간을 단축',
                },
                {
                  content:
                    '도구 도입 후 반복적인 SDK 사용법 문의 대응 부담이 눈에 띄게 줄어, 개발팀이 신규 기능 개발에 더 집중할 수 있는 환경 조성',
                },
                {
                  content:
                    'IDE 연동 이후에도 파트너사의 SDK 관련 문의는 Outlook 메일로 별도 접수되어, 이슈 신고면 메일 확인 후 정해진 양식에 맞춰 Jira 이슈를 수동으로 등록하고 코드 레벨에서 직접 원인을 파악해 수정·커밋하고, 단순 사용법 문의면 직접 답변을 작성해야 해서 대응 과정 전체가 여전히 수작업으로 남아있었고, 이후 라이선스 발급·배포 산출물 준비·문서 버전 관리 같은 반복 운영 업무도 동일하게 수작업으로 처리되고 있었음',
                },
                {
                  content:
                    'Claude Code Skill로 업무 절차를 문서화해 문의 유형·업무 성격별로 자동 분기하는 자동화 체계를 구축: (1) 문의 대응 — Outlook 메일을 Jira 이슈로 등록하거나(정해진 제목/본문 템플릿 적용), 과거 Q&A·코드 예제를 축적해온 사내 지식베이스 MCP를 우선 검색해 답변을 재사용하고 없으면 SDK API 소스 주석을 근거로 답변 초안을 작성한 뒤 Outlook 임시보관함에 저장, (2) 코드 수정 — Jira 코멘트 스레드에서 합의된 내용만 근거로 SDK 저장소 코드를 조사·수정하되, WASM 엔진(C++) 쪽 원인으로 판단되면 별도 private 엔진 저장소를 커밋 해시로 SDK 버전과 정확히 매칭해 읽기 전용으로만 참조, 엔진팀 반영이 실제로 확정된 경우에만 내부 빌드 산출물로 wasm 바이너리를 교체, (3) 배포·라이선스 운영 — 내부 라이선스 발급 API를 직접 호출해 운영/개발/테스트 라이선스별 만료일 규칙을 검증하며 발급하고, 고객 안내 메일 작성과 배포용 샘플 코드 준비·릴리즈 문서 버전 폴더 복사까지 이어서 처리',
                },
                {
                  content:
                    '메일 확인 → 문의/코드/배포 유형 판단 → 대응(Jira 등록·코드 수정·라이선스 발급 등) → 결과 회신으로 개별 처리하던 반복 업무를 13개 스킬로 표준화하고, 되돌리기 어려운 지점(main 브랜치 push, Jira/메일 발송, 라이선스 키 발급, wasm 바이너리 교체)마다 사용자 최종 승인을 거치도록 설계해 자동화 범위를 넓히면서도 오작동 위험 없이 안전하게 운영',
                },
              ],
            },
            {
              content: '배포 이력 관리 자동화를 통한 운영 효율성 향상',
              descriptions: [
                {
                  content:
                    '10여 개 파트너사에 대한 배포 이력을 수동으로 Jira에 기록하는 작업이 매 배포마다 반복되어 시간이 소모되고 누락 위험이 있었음. 특히 배포 버전과 이슈 추적 간의 연결이 명확하지 않아 문제 발생 시 원인 파악이 어려웠음',
                },
                {
                  content:
                    '기존 CI/CD 파이프라인에 Jira Open API를 연동하여 배포 완료 시점에 자동으로 프로젝트/버전 기준 티켓을 생성하고 배포 이력을 기록하도록 구현. 배포 로그와 Jira 이슈를 자동으로 연결하여 추적성 확보',
                },
                {
                  content:
                    '수동 작업 시간을 배포당 평균 15분에서 0분으로 단축하고, 배포 이력 누락을 완전히 방지하여 파트너사별 배포 로그 관리의 정확성과 효율성 향상',
                },
              ],
            },
            {
              content: '커밋 메시지 기반 시맨틱 버저닝 및 릴리즈 노트 자동화 구축',
              descriptions: [
                {
                  content:
                    'PR 머지 시 버전을 수동으로 결정하고, 파트너사에 전달할 릴리즈 노트를 별도로 작성해 배포해야 해서 버전 관리 기준이 일관되지 않고 릴리즈 노트 작성이 누락되거나 지연되는 경우가 있었음',
                },
                {
                  content:
                    'PR 머지 커밋 제목의 prefix(feat/fix/hotfix/patch/perf/refactor, BREAKING CHANGE)로 semver(major/minor/patch)를 자동 결정하고, 커밋 본문에 필수로 작성하는 public: 라인을 고객사향 릴리즈 노트 텍스트로 자동 추출해 GitHub Actions로 SharePoint 릴리즈 노트 문서에 게시하는 파이프라인을 구축',
                },
                {
                  content:
                    '버전 결정과 릴리즈 노트 작성·배포가 커밋 컨벤션만 지키면 자동으로 처리되도록 해, 개발자는 별도 버전 태깅이나 문서 작성 없이 코드 작업에 집중할 수 있게 되었고 파트너사도 항상 최신 릴리즈 노트를 확인할 수 있게 됨',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'PASS Office 부가서비스 (KT, LGU+, SKT)',
      startedAt: '2024-06',
      where:
        '(폴라리스 오피스) WebOffice SDK 기반 B2C 이동통신사 PASS 부가서비스 App/Web 프론트엔드 개발 (LGU+ PASS 2024.11 런칭, KT PASS 2025.10 런칭, SKT PASS 2026.06 런칭)',
      skillKeywords: ['TypeScript', 'React', 'Redux', 'Styled Components'],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'KT/LGU+/SKT 이동통신사 사용자 대상 문서 뷰어·편집 기반 B2C 부가서비스로, 하나의 PASS 계정으로 웹/모바일 환경에서 문서를 열람·편집 가능',
            },
            {
              content:
                'PASS App(모바일 앱)·PASS Web Editor(문서 편집)·PASS Info-site(가입·약관) 3개 서비스로 구성',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '오피스도우미 LGU+ 유료 출시 후, 8개월 만에 유료 구독 30,000명 확보',
            },
            {
              content: 'KT·LGU+에 이어 SKT PASS까지 2026년 6월 오픈하며 이동통신 3사 채널 확보',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '앱-웹 브릿지 프로토콜 설계',
              descriptions: [
                {
                  content:
                    '호스트 → 웹뷰는 JSON 메시지를 cmd/body 형태로, 웹뷰 → 호스트는 Android(window.Native[handler])/iOS(window.webkit.messageHandlers[handler].postMessage) 두 플랫폼을 하나의 인터페이스로 추상화한 브릿지 계층을 직접 설계하고 명세 문서화, 앱 개발 담당자와 지속적으로 협의하며 완성',
                },
                {
                  content:
                    '웹뷰 초기화 완료를 알리는 initComplete 핸드셰이크를 도입해 앱이 리스너 등록 전에 메시지를 보내 유실되는 레이스 컨디션을 방지하고, 플랫폼별로 특정 브릿지 API 지원 여부를 먼저 확인한 뒤에만 호출하는 가드(isBridgeApiAvailable)를 두어 미지원 환경에서의 예외를 방지',
                },
                {
                  content:
                    '로그인 토큰은 최초 발급(reqLoginToken/resLoginToken)과 만료 후 재발급(reReqLoginToken/reResLoginToken) 흐름을 분리해 설계하고, KT 추가로 페이로드가 string에서 {token, telecom} 객체로 바뀌는 과정에서 LG 구버전 SDK가 여전히 string으로 응답하는 상황을 런타임 타입 체크로 분기 처리해, 신규 스펙과 구버전 클라이언트를 함께 지원',
                },
                {
                  content:
                    '세션 검증처럼 응답이 필요한 비동기 브릿지 호출은 요청마다 고유 ID를 발급해 콜백 레지스트리에 등록해두고, 앱이 해당 ID와 함께 응답을 보내면 매칭되는 콜백을 찾아 실행하는 구조로 설계해, 여러 요청이 동시에 나가도 응답이 뒤섞이지 않도록 처리',
                },
              ],
            },
            {
              content: 'User-Agent 기반 통신사·앱 버전별 기능 게이팅 설계',
              descriptions: [
                {
                  content:
                    '웹은 배포 즉시 반영되지만 앱은 스토어 심사와 사용자 업데이트로 버전 보급 속도가 느려, 검증되지 않은 구버전 앱에 신규 기능이 그대로 노출되는 문제가 있었음',
                },
                {
                  content:
                    '앱이 플랫폼·통신사·버전 정보를 __pass_office_{platform}_{telecom}_{version} 형식으로 User-Agent에 실어 전달하도록 설계하고, 웹에서 이를 파싱해 특정 통신사의 특정 버전 이상에서만 기능을 노출하도록 구현(예: LGU+ PASS 자동연결 해제 안내 팝업의 "자동 해제" 버튼은 Android 0.0.24 이상에서만 노출). 통신사·버전 값은 선택 항목으로 설계해, 조건이 없거나 맞지 않아도 나머지 기능은 정상 동작하도록 안전하게 처리',
                },
              ],
            },
            {
              content: 'KT 유료가입 전 취약계층 확인 프로세스 개발',
              descriptions: [
                {
                  content:
                    '통신 복지 정책상 취약계층 사용자는 유료가입 전 별도 확인 절차가 필요해, 전용 브릿지(reqCheckVulnerableGroups/resCheckVulnerableGroups)로 앱에 취약계층 여부를 조회한 뒤 결과에 따라 가입 플로우를 분기하도록 구현',
                },
              ],
            },
            {
              content: 'SKT PASS 신규 서비스 런칭',
              descriptions: [
                {
                  content:
                    'KT·LGU+ 경험을 바탕으로 SKT 최초 런칭 단계부터 참여해, 딥링크 QR 진입, 웹 가입/해지, 유·무료 가입용 인트로 및 약관 상세 웹뷰 페이지까지 신규 화면 전체를 구현하고 SKT 환경에서의 Editor 로그인 검증 이슈에 대응해 3번째 이동통신사 채널을 확보',
                },
              ],
            },
            {
              content: 'KT PASS WebView 브릿지 테스트용 Mock 환경 구축',
              descriptions: [
                {
                  content:
                    'KT PASS 앱 내 WebView를 통한 무료 가입 플로우를 구현하는 과정에서, 앱과 WebView 간의 네이티브 브릿지 통신을 테스트하기 위해 매번 실제 PASS 앱을 설치하고 실행해야 하는 불편함이 있었음',
                },
                {
                  content:
                    'Chrome Extension을 활용하여 PASS 앱의 네이티브 API를 모킹하는 개발 환경을 구축. WebView에서 호출하는 브릿지 메서드를 Extension에서 인터셉트하여 실제 앱 없이도 전체 플로우를 검증할 수 있도록 개선',
                },
              ],
            },
            {
              content: 'PASS Web Editor 팝업 기반 로그인 및 세션 유지 구현',
              descriptions: [
                {
                  content:
                    '별도 팝업 창에서 로그인을 진행하고, 인증에 성공하면 쿠키로 세션을 유지한 채 기존 에디터 화면으로 자동 복귀하도록 구현해 편집 중이던 문서 컨텍스트를 끊지 않고 로그인을 처리',
                },
              ],
            },
            {
              content: 'Webpack 환경별 빌드 구조 개선을 통한 개발 효율성 향상',
              descriptions: [
                {
                  content:
                    '로그인 화면의 환경별 빌드(development/staging/production) 구조가 명확하지 않아, 개발/검증/상용 환경의 도메인과 API 서버를 수동으로 관리해야 하며 빌드 시 실수로 잘못된 환경 설정을 배포할 위험이 있었음',
                },
                {
                  content:
                    'Webpack을 적용하여 환경별 빌드 구조를 체계화하고, development/staging/production 환경에 따라 도메인과 API 서버를 자동으로 설정하도록 개선',
                },
              ],
            },
            {
              content: 'PASS Web Info 유료 구독 및 약관 확인 화면 구현',
              descriptions: [
                {
                  content:
                    '유료 구독 가입/서비스 해지/공지사항 화면을 구현하며, 사용자가 서비스 약관을 쉽게 확인할 수 있도록 Polaris WebOffice SDK를 활용하여 약관 상세, 이용약관, 개인정보처리방침 화면을 문서 뷰어 형태로 제공',
                },
              ],
            },
          ],
        },
        {
          content: '관련 링크',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'PASS Web Editor',
              href: 'https://editor.passoh.io/',
            },
            {
              content: 'PASS Web Info',
              href: 'https://passoh.io/join',
            },
          ],
        },
      ],
    },
    {
      title: 'FindBack — 전사 AI 바이브코딩 공모전 최우수상(1위)',
      startedAt: '2026-04',
      where:
        '(폴라리스오피스) 전사 AI 바이브코딩 공모전 개인 출품작 (자유주제, 임직원 전원 1인 1서비스 필수 제출)',
      skillKeywords: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'AI 코딩 에이전트'],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '분실 직후 흐릿해진 기억을 대화형 AI가 질문을 통해 되살려주고, 사진 한 장으로 등록하면 AI가 분실물과 습득물을 자동으로 매칭해주는 통합 플랫폼',
            },
            {
              content:
                '2주간(2026.04.20~04.30) 진행된 폴라리스오피스 전사 AI 바이브코딩 공모전에 자유주제로 개인 출품(팀 참여 불가, 1인 1서비스 필수 제출 규정)',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '전사 임직원 전원이 참가한 공모전에서 1차 심사(상위 10개 선정)와 2차 PT 심사를 통과해 최우수상(1위) 수상, 상금 100만원',
            },
            {
              content: '실제 서비스로 배포해 공개 운영 중',
            },
            {
              content: '사내 공식 유튜브 채널 쇼츠로 수상 소감 소개',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '"분실은 사용자가 가장 인지적으로 취약해지는 순간"이라는 문제 인식으로 대화형 AI 인터뷰 기반 기억 복원 컨셉을 기획',
              descriptions: [
                {
                  content:
                    '경찰청 통계 기준 전국에서 하루 평균 2,000건 이상의 유실물이 접수되지만 주인에게 돌아가는 비율은 약 60%에 그치는데, 기존 분실물 시스템(LOST112, 지하철 유실물센터 등)은 이용자가 직접 게시판을 검색해야 하는 단방향 구조이고 습득자에게는 신고할 유인이 없어 분실자·습득자 모두에게 불편한 구조라는 점을 문제로 정의',
                },
                {
                  content:
                    '검색 결과를 곧바로 보여주는 대신, 대화형 AI가 질문을 하나씩 던져 분실 당시의 동선과 기억을 스스로 복원하도록 만드는 진입 지점을 설계해, 심사 기준 중 가장 비중이 큰 "문제정의/차별성"(40%) 항목에서 높은 평가로 이어짐',
                },
              ],
            },
            {
              content:
                'AI 코딩 에이전트(Claude, Cursor)를 활용해 약 1주일 만에 Next.js·Supabase·OpenAI API 기반 풀스택 서비스를 프로덕션 수준으로 완성',
              descriptions: [
                {
                  content:
                    '사진 한 장으로 제목·카테고리·태그를 자동 채우는 이미지 분석, 소유자만 답할 수 있는 인증 질문 자동 생성, 제목 50%·태그 35%·설명 15% 가중치의 텍스트 유사도로 분실물·습득물을 자동 매칭하는 알림까지 5종의 AI 기능을 모두 실제 동작하는 API로 구현',
                },
                {
                  content:
                    'AI가 매칭·인증 질문까지는 자동 생성하되, 실제 본인 확인(정답 검증)은 게시글 작성자가 답변 내용을 직접 확인해 승인하도록 설계해, AI 판단만으로 소유권을 인정하지 않는 안전장치를 둠',
                },
              ],
            },
          ],
        },
        {
          content: '관련 링크',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'FindBack 서비스',
              href: 'https://findback-swart.vercel.app/',
            },
            {
              content: '수상 소감 유튜브 쇼츠',
              href: 'https://youtube.com/shorts/0HRJuQGnL3E',
            },
            {
              content: '수상 인증샷 (최우수상 상장)',
              href: findbackAward,
            },
          ],
        },
      ],
    },
    {
      title: '사내 근무시간 계산기 Chrome Extension 개발',
      startedAt: '2024-06',
      where: '(폴라리스 오피스) 업무 외 개인 시간을 활용한 사내용 Chrome Extension 개발',
      skillKeywords: ['JavaScript'],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '유연근무제 환경에서 매일 인트라넷 페이지에서 근무시간을 확인하고 기준 시간(8시간) 대비 초과/미달을 수동으로 계산하는 번거로움을 직접 느껴, 업무 외 개인 시간을 활용해 Chrome Extension을 제작',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '인트라넷 페이지의 근무시간 데이터를 자동으로 파싱해 기준 시간과 비교한 초과/미달 시간을 실시간으로 계산·표시',
            },
            {
              content:
                '본인의 반복적인 수동 계산 작업을 없애고, 같은 불편을 겪던 주변 동료 몇 명에게 공유해 함께 사용',
            },
          ],
        },
        {
          content: '관련 링크',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'GitHub 저장소',
              href:
                'https://github.com/geunu97/pub-po-side/tree/main/Intranet-Working-Hours-Calculator',
            },
          ],
        },
      ],
    },
    // {
    //   title: 'Pickle Sound',
    //   startedAt: '2024-02',
    //   endedAt: '2024-05',
    //   where: '(피클사운드) 음원 소유권 분할·투자·정산 음악 투자 플랫폼 Web 프론트엔드 개발',
    //   descriptions: [
    //     {
    //       content:
    //         'next-i18next 도입하여 URL 경로 기반 자동 언어 전환 구현, 한국어·영어·일본어 다국어 지원',
    //     },
    //     {
    //       content:
    //         'Swagger 명세 기반 상품 리스트 및 상세, 댓글, 마이페이지 CRUD 작업을 위한 API 연동',
    //     },
    //   ],
    // },
    {
      title: 'Fantoo',
      startedAt: '2023-04',
      endedAt: '2023-12',
      where: '(한류뱅크) 175개국 출시 글로벌 K-POP 팬덤 플랫폼 Web 프론트엔드 개발',
      skillKeywords: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Query', 'Sass'],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'K-POP 아티스트와 전세계 한류 팬을 잇는 글로벌 팬덤 플랫폼으로, 175개국에 출시되어 해외 한류 팬을 대상으로 실시간 번역·다국어 채팅·커뮤니티 기능을 제공',
            },
            {
              content:
                '한국 엔터테인먼트 콘텐츠(K-팝, 드라마, 영화 등)의 최신 소식·영상·커뮤니티 기능을 통합 제공',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '운영사 한류홀딩스(HRYU), 국내 스타트업 최초 나스닥 직상장 성공',
            },
            {
              content: "재직 기간 중 '대한민국 문화연예대상' K-POP 해외 공로상 수상",
              href: 'https://www.e2news.com/news/articleView.html?idxno=303553',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'next-i18next 기반 다국어 지원 구현',
              descriptions: [
                {
                  content:
                    'URL Path 기준으로 언어를 구분하는 next-i18next를 도입해 한국어·영어·일본어 3개 언어를 지원하고, 접속 경로에 따라 자동으로 언어가 전환되도록 구현해 175개국 대상 글로벌 서비스의 다국어 요구사항을 충족',
                },
              ],
            },
            {
              content: '메타데이터 최적화를 통한 Lighthouse SEO 점수 향상',
              descriptions: [
                {
                  content:
                    'Lighthouse SEO 점수가 74점으로 낮아 검색엔진 최적화가 부족했음. <meta>, <title>, <description> 태그가 최적화되지 않았고, 이미지에 alt 속성이 누락되어 검색엔진 인식도와 웹 접근성이 저하됨',
                },
                {
                  content:
                    'Lighthouse 경고·주의 메시지를 반영하여 <meta>, <title>, <description>을 최적화하고, 모든 이미지에 alt 속성을 적용하여 검색엔진 인식도와 웹 접근성 강화',
                },
                {
                  content:
                    'Lighthouse SEO 점수를 74점에서 86점으로 향상시켜 검색엔진 최적화와 웹 접근성 개선',
                },
              ],
            },
            {
              content: '에러 핸들링 중앙화를 통한 코드 품질 및 유지보수성 개선',
              descriptions: [
                {
                  content:
                    '각 컴포넌트에서 개별적으로 에러를 처리하는 방식으로 인해 중복 코드가 많고, 에러 처리 로직이 일관되지 않아 유지보수가 어려웠음. 또한 사용자에게 표시되는 에러 메시지도 통일되지 않아 UX가 저하됨',
                },
                {
                  content:
                    'react-query의 useErrorBoundary 옵션을 활용하여 ErrorBoundary 패턴을 도입. API 호출 실패 시 상위 ErrorBoundary에서 일괄 처리하도록 구조화하고, 각 컴포넌트의 중복된 try-catch 로직을 제거하여 코드 복잡성 감소',
                },
                {
                  content:
                    '에러 처리 로직을 중앙화해 컴포넌트마다 반복되던 try-catch 코드를 제거하고, 에러 발생 시 일관된 사용자 경험을 제공하며, 새로운 에러 케이스 추가 시 한 곳에서만 수정하면 되도록 유지보수성 향상',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default companyProject;
