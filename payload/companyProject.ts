import { IProject } from '../component/project/IProject';
import findbackAward from '../asset/findback-award.jpg';

const companyProject: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Polaris WebOffice SDK',
      startedAt: '2024-06',
      where: '(폴라리스오피스) 웹오피스 SDK B2B 파트너사 연동 및 서비스 고도화 프론트엔드 개발',
      skillKeywords: ['TypeScript', 'WebAssembly', 'React', 'Redux', 'Sass'],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '웹 브라우저만으로 다양한 문서 포맷(Hwp, Word, Sheet, Slide)을 열람·편집할 수 있는 웹 기반 오피스 솔루션',
            },
            {
              content:
                'WebAssembly 기반 JavaScript SDK로 제공되어 그룹웨어, 전자결재(기안) 시스템 등 다양한 환경에 통합/연동 가능',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '2025년 연간 사내 프로젝트 평가에서 최우수 프로젝트(1위) 선정',
            },
            {
              content: '웹오피스 SDK 상용화 레퍼런스 확대 - 60여 개 고객사 납품 및 상용화',
            },
            {
              content: '웹오피스 SDK 매출 실적 483% 달성(2024년 4.1억 → 2025년 19.8억)',
            },

            {
              content: "폴라리스오피스, 서버리스 '웹오피스' GS인증 1등급 획득",
              href: 'https://www.hankyung.com/article/202504087237i',
            },
          ],
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '60여 개 파트너사 중 나눔기술(삼성생명)·IBK기업은행·한국도로공사 등 20여 개 고객사의 기술 지원 및 라이선스 갱신·관리를 직접 담당',
            },
            {
              content:
                'MG새마을금고·국가철도공단 등 주요 고객사는 기술 미팅과 현장 방문까지 진행하며 관계 관리',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'SDK 문의 대응·운영 업무를 Claude Code 스킬 15개로 자동화',
              descriptions: [
                {
                  content:
                    'Outlook 메일로 접수돼 전부 수작업이던 업무(원인 분석·답변 초안 → 이슈 등록 → 코드 수정 → 라이선스 발급·배포 준비)를 절차별 작업 지침(스킬)으로 만들고 Jira·Outlook·GitHub를 MCP로 연동해, AI가 준비하면 본인은 검토만 하도록 자동화',
                },
                {
                  content:
                    '월 50건 이상 들어오는 문의 대다수가 과거 질문과 겹쳐 매번 API 소스와 본인·동료의 과거 답장 메일을 뒤지던 것을, 팀 Confluence 위키의 과거 Q&A를 먼저 검색해 답하도록 바꾸고 새 문의는 위키에 기록해 지식이 누적되도록 구성',
                },
                {
                  content:
                    '메일은 초안 작성까지만, main push는 금지, PR 머지·라이선스 발급은 승인 후에만 진행하도록 제한',
                },
                {
                  content:
                    '동시에 몰리는 문의·발급 요청은 여러 터미널 세션에서 병렬로 처리해, 복잡한 개발 작업에 시간을 투자할 수 있게 됨',
                },
              ],
            },
            {
              content: '폰트 로딩 병목 현상 해결을 통한 사용자 경험 개선',
              descriptions: [
                {
                  content:
                    '외부 파트너사로부터 웹오피스 SDK 로딩이 느리다는 문의를 받아 확인한 결과, SDK가 기본 제공하는 TTF 폰트의 다운로드 지연이 원인이었음(Chrome 개발자도구 네트워크 탭 측정 기준 폰트당 평균 약 7.7MB, 약 1.03초 소요)',
                },
                {
                  content:
                    '해당 폰트를 WOFF2 포맷으로 전환해 제공하도록 개선한 결과, 폰트 파일 크기가 평균 약 45% 감소(약 7.7MB → 약 4.3MB)하고 로딩 시간이 평균 약 1.03초에서 약 0.15초로 약 86% 단축(약 7배 향상)',
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
              content: 'iframe 기반 SDK 임베드 시 Cross-Origin 문제 해결',
              descriptions: [
                {
                  content:
                    '웹오피스 SDK는 iframe 형태로 제공되어 외부 서비스가 라이브러리로 초기화하면 iframe 태그로 삽입되는 구조. 사내 B2C 웹오피스 서비스에 적용하는 과정에서, SDK가 삽입되는 부모 페이지와 iframe의 도메인이 다르면(Cross-Origin) 정상 동작하지 않는 문제를 발견',
                },
                {
                  content:
                    '브라우저의 동일 출처 정책(Same-Origin Policy)으로 인해 iframe.src에 다른 도메인의 URL을 직접 지정하면 부모-iframe 간 상호작용이 제한됨을 확인',
                },
                {
                  content:
                    '1차로 iframe.src를 지정하지 않아(about:blank) 부모와 동일 출처를 맞추는 방식으로 해결했으나, 이 경우 base URL이 부모 페이지 기준으로 잡혀 SDK 내부에서 상대경로로 새 창을 열던 프린트 기능이 깨지는 문제가 새로 발생. iframe.srcdoc으로 HTML을 직접 주입하는 방식으로 다시 전환해 두 문제를 모두 해결. 수정 이후 동일 도메인에서 직접 서빙하는 경우와 다른 도메인에서 불러오는 경우 모두 SDK와 프린트 기능이 정상 동작함을 확인',
                },
              ],
            },
            {
              content: '신규 포맷 호환을 위한 변환(converter) WASM 모듈 SDK 연동',
              descriptions: [
                {
                  content:
                    '특정 문서 편집 프로그램 전용 서식의 붙여넣기 호환을 위해 엔진팀이 별도 변환(converter) WASM 모듈을 신규로 빌드하면, 웹오피스 SDK 로드 시점에 이 모듈이 함께 로드되도록 연동',
                },
                {
                  content:
                    '붙여넣기 시 원본 데이터를 모듈 API에 인자로 전달해 파싱된 결과를 반환받아 기존 편집 파이프라인에 반영하는 흐름을 구현',
                },
              ],
            },
            {
              content: '월 10건 이상 규모의 API·UI 기능 지속 개발로 SDK 완성도 제고',
              descriptions: [
                {
                  content:
                    '단축키 확대 지원, 누름틀 추가, 문단 간격 기능 지원, Find/Replace/ReplaceAll API 등을 월 10건 이상 규모로 지속 개발',
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
              content: '제품 소개',
              href: 'https://polarisoffice-enterprise.com/ko/product/web-office/',
            },
            {
              content: '고객 사례',
              href: 'https://polarisoffice-enterprise.com/ko/case/',
            },
          ],
        },
      ],
    },
    {
      title: 'PASS Office 부가서비스 (LGU+, KT, SKT)',
      startedAt: '2024-06',
      where:
        '(폴라리스오피스) 웹오피스 SDK 기반 B2C 이동통신사 PASS 부가서비스의 App 내 WebView 및 Web 프론트엔드 개발 (LGU+ PASS 2024.11 런칭, KT PASS 2025.10 런칭, SKT PASS 2026.06 런칭)',
      skillKeywords: ['TypeScript', 'React', 'Redux', 'Styled-components'],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'LGU+·KT·SKT 이동통신사 사용자 대상 문서 열람·편집 기반 B2C 부가서비스로, PASS 계정 하나로 웹/모바일 환경에서 동일하게 이용 가능',
            },
            {
              content: 'PASS App(모바일 앱)과 PASS Web Editor(웹)로 구성',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'LGU+ PASS 유료 출시 후, 8개월 만에 유료 구독 30,000명 확보',
            },
            {
              content: 'LGU+·KT에 이어 SKT PASS까지 2026년 6월 오픈하며 이동통신 3사 채널 확보',
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
                    '호스트 → 웹뷰는 cmd/body 구조의 JSON 메시지로 전달하고, 웹뷰 → 호스트는 Android(window.Native[handler])와 iOS(window.webkit.messageHandlers[handler].postMessage)를 하나의 인터페이스로 추상화한 브릿지 계층을 통해 호출하도록 설계. 이 명세를 문서화하고 앱 개발 담당자와 지속적으로 협의하며 완성',
                },
              ],
            },
            // {
            //   content: 'KT 유료가입 전 취약계층 확인 프로세스 개발',
            //   descriptions: [
            //     {
            //       content:
            //         '통신 복지 정책상 취약계층 사용자는 유료가입 전 별도 확인 절차가 필요해, 전용 브릿지(reqCheckVulnerableGroups/resCheckVulnerableGroups)로 앱에 취약계층 여부를 조회한 뒤 결과에 따라 가입 플로우를 분기하도록 구현',
            //     },
            //   ],
            // },
            {
              content: 'User-Agent 기반 통신사·앱 버전별 기능 게이팅 설계',
              descriptions: [
                {
                  content:
                    '웹은 배포 즉시 반영되지만 앱은 스토어 심사와 사용자 업데이트로 버전 보급 속도가 느려, 검증되지 않은 구버전 앱에 신규 기능이 그대로 노출되는 문제가 있었음',
                },
                {
                  content:
                    '앱이 플랫폼·통신사·버전 정보를 User-Agent에 실어 전달하는 규약을 설계하고, 웹에서 이를 파싱해 특정 통신사의 특정 버전 이상에서만 기능을 노출하도록 구현(예: LGU+ PASS 자동연결 해제 안내 팝업은 해당 기능이 검증된 Android 앱 버전 이상에서만 노출)',
                },
              ],
            },
            {
              content: 'PASS Web Editor 팝업 기반 로그인 및 세션 유지 구현',
              descriptions: [
                {
                  content:
                    '로그인 도메인과 에디터 도메인이 달라 쿠키(세션)를 공유할 수 없는 환경이라, 에디터 화면에서 그대로 로그인을 처리할 수 없었음',
                },
                {
                  content:
                    '에디터 화면에서 별도 팝업으로 로그인 페이지를 띄우고, 로그인 완료 후 postMessage로 토큰을 에디터 도메인에 전달. 전달받은 토큰으로 서버 검증 API를 호출하고 결과를 쿠키에 저장해 세션을 유지하도록 구현하며, 검증 완료 후 팝업을 닫고 원래 열람하려던 에디터 화면으로 자동 진입하도록 처리',
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
              content: 'SKT PASS 신규 채널 런칭 대응',
              descriptions: [
                {
                  content:
                    'LGU+·KT에서 구축한 브릿지 프로토콜·User-Agent 게이팅·팝업 로그인 구조를 그대로 재사용해, 별도 아키텍처 설계 없이 웹 가입/해지·인트로/약관 웹뷰 구현과 통신사 선택 분기만으로 SKT PASS 신규 채널을 빠르게 확보',
                },
              ],
            },
            // {
            //   content: 'PASS Web Info 유료 구독 및 약관 확인 화면 구현',
            //   descriptions: [
            //     {
            //       content:
            //         '유료 구독 가입/서비스 해지/공지사항 화면을 구현하며, 사용자가 서비스 약관을 쉽게 확인할 수 있도록 Polaris WebOffice SDK를 활용하여 약관 상세, 이용약관, 개인정보처리방침 화면을 문서 뷰어 형태로 제공',
            //     },
            //   ],
            // },
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
          ],
        },
      ],
    },
    {
      title: 'FindBack',
      startedAt: '2026-04',
      where: '(폴라리스오피스) 전사 AI 바이브코딩 공모전 개인 출품작 (자유주제)',
      skillKeywords: ['TypeScript', 'Next.js', 'Supabase', 'OpenAI API'],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '분실 직후 흐릿해진 기억을 대화형 AI가 질문을 통해 되살려주고, 사진 한 장으로 등록하면 AI가 분실물과 습득물을 자동으로 매칭해주는 통합 플랫폼',
            },
            {
              content:
                '2주간(2026.04.20~04.30) 진행된 폴라리스오피스 전사 AI 바이브코딩 공모전에 자유주제로 개인 출품',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '전사 임직원 160여 명이 참가한 공모전에서 최우수상(1위) 수상',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '"분실은 사용자가 가장 인지적으로 취약해지는 순간"이라는 문제 인식으로 대화형 AI 인터뷰 "TraceAI"를 기획',
              descriptions: [
                {
                  content:
                    '국내에서 매년 보고되는 분실물은 1,000만 건이 넘지만 주인에게 돌아가는 비율은 30~40%대에 그치는데, 기존 분실물 시스템(LOST112, 지하철 유실물센터 등)은 이용자가 직접 게시판을 검색해야 하는 단방향 구조이고 습득자에게는 신고할 유인이 없어 분실자·습득자 모두에게 불편한 구조라는 점을 문제로 정의',
                },
                {
                  content:
                    '검색 결과를 곧바로 보여주는 대신, TraceAI가 질문을 하나씩 던져 분실 당시의 동선과 기억을 스스로 복원하도록 만드는 진입 지점을 설계',
                },
              ],
            },
            {
              content: 'AI 코딩 에이전트를 활용해 Next.js·Supabase·OpenAI API 기반 서비스를 완성',
              descriptions: [
                {
                  content:
                    'TraceAI 대화형 기억 복원, 사진 기반 이미지 분석, 소유자 인증 질문 생성, 게시글 유사 매칭 알림까지 4종의 AI 기능을 모두 실제 동작하도록 구현',
                },
                {
                  content:
                    '유사 매칭 알림은 제목 50%·태그 35%·설명 15% 가중치의 키워드 유사도로 점수를 계산해, 임계값을 넘는 경우에만 자동 발송',
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
              content: '수상 소감 유튜브 쇼츠',
              href: 'https://youtube.com/shorts/0HRJuQGnL3E',
            },
            {
              content: '수상 인증샷',
              href: findbackAward,
            },
          ],
        },
      ],
    },
    {
      title: '근무시간 계산기',
      startedAt: '2024-06',
      where: '(폴라리스오피스) 사내용 근무시간 계산기 Chrome Extension 개발',
      skillKeywords: ['JavaScript'],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '유연근무제 환경에서 매일 인트라넷 페이지에서 근무시간을 확인하고 기준 시간(8시간) 대비 초과/미달을 수동으로 계산하는 번거로움을 직접 느껴 Chrome Extension을 제작',
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
                '반복적인 수동 계산 작업을 없애고, 같은 불편을 겪던 주변 동료들에게 공유해 함께 사용',
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
      where: '(한류뱅크) 글로벌 K-POP 팬덤 플랫폼 Web 프론트엔드 개발',
      skillKeywords: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'React Query',
        'Styled-components',
      ],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'K-POP 아티스트와 전세계 한류 팬을 잇는 글로벌 팬덤 플랫폼으로, 175개국에 출시되어 한국 엔터테인먼트 콘텐츠(K-팝, 드라마, 영화 등)의 최신 소식과 영상을 제공',
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
              content: "'대한민국 문화연예대상' K-POP 해외 공로상 수상",
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
                    'URL Path 기준으로 언어를 구분하는 next-i18next를 도입해 접속 경로에 따라 자동으로 언어가 전환되도록 구현해 글로벌 서비스의 다국어 요구사항을 충족',
                },
              ],
            },
            {
              content: '메타데이터 최적화를 통한 Lighthouse SEO 점수 향상 (74점 → 86점)',
              descriptions: [
                {
                  content:
                    '<meta>, <title>, <description> 태그 미최적화와 이미지 alt 속성 누락으로 낮았던 SEO 점수를, 태그 최적화와 전체 이미지 alt 속성 적용으로 개선해 검색엔진 인식도와 웹 접근성을 강화',
                },
              ],
            },
            {
              content: '에러 핸들링 중앙화를 통한 코드 품질 및 유지보수성 개선',
              descriptions: [
                {
                  content:
                    '컴포넌트마다 개별 try-catch로 에러를 처리해 중복 코드와 일관되지 않은 에러 UX가 발생하던 것을, react-query의 useErrorBoundary를 활용한 ErrorBoundary 패턴으로 중앙화해 중복 코드를 제거하고 일관된 에러 경험과 유지보수성을 확보',
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
