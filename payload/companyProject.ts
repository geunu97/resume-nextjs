import { IProject } from '../component/project/IProject';
import findbackAward from '../asset/findback-award.jpg';

const companyProject: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Polaris WebOffice SDK',
      startedAt: '2024-06',
      where: '(폴라리스오피스) WebOffice B2B 파트너사 연동 및 서비스 고도화 프론트엔드 개발',
      skillKeywords: ['WebAssembly', 'TypeScript', 'React', 'Redux', 'Sass'],
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
                    '나눔기술(삼성생명), 엘박스, IBK기업은행, 한국도로공사 등 20여 개 고객사를 직접 담당해 기술 지원과 라이센스 갱신·관리를 수행',
                },
                {
                  content:
                    '천재교육·MG새마을금고·한국철도공사 등 주요 고객사는 기술 미팅과 현장 방문 지원을 직접 진행하며 관계를 관리',
                },
              ],
            },
            {
              content:
                'SDK MCP 도구와 Claude Code 스킬 기반 자동화로 문의 대응·코드 수정·라이선스 발급/배포 운영까지 13개 스킬 체계로 확장',
              descriptions: [
                {
                  content:
                    'SDK 가이드 문서를 SDK MCP(Model Context Protocol) 도구로 개발해 코드 작성 중 문서 검색 부담을 해소',
                  descriptions: [
                    {
                      content:
                        '월 50건 이상 발생하는 SDK 사용법·API 호출 방식 문의 대다수가 과거 유사 질문과 겹쳤지만, 매번 개발자가 직접 코드를 찾아 확인하고 답변을 새로 작성해야 해서 반복적인 수작업 부담이 컸음',
                    },
                    {
                      content:
                        'Claude Code(CLI)에 MCP로 연동해 프롬프트 방식으로 SDK API 사용 예제와 설명을 즉시 확인할 수 있도록 구현. 별도로 문서를 찾아보지 않고 코드 작성 중 바로 참조할 수 있게 되어 검색 시간을 단축',
                    },
                  ],
                },
                {
                  content:
                    'MCP 연동 이후에도 남아있던 문의 대응·코드 수정·배포 운영 전 과정을 Claude Code Skill 13개로 자동화',
                  descriptions: [
                    {
                      content:
                        '파트너사의 SDK 관련 문의는 Outlook 메일로 별도 접수되어, 이슈 신고면 메일 확인 후 정해진 양식에 맞춰 Jira 이슈를 수동으로 등록하고 코드 레벨에서 직접 원인을 파악해 수정·커밋하고, 단순 사용법 문의면 직접 답변을 작성해야 해서 대응 과정 전체가 여전히 수작업으로 남아있었고, 이후 라이선스 발급·배포 산출물 준비·문서 버전 관리 같은 반복 운영 업무도 동일하게 수작업으로 처리되고 있었음',
                    },
                    {
                      content:
                        '문의 대응 — 메일 유형에 따라 Jira 이슈 등록 또는 답변 초안 작성으로 자동 분기',
                      descriptions: [
                        {
                          content:
                            '이슈 신고 메일은 정해진 제목·본문 템플릿에 맞춰 Jira 이슈로 등록',
                        },
                        {
                          content:
                            '단순 사용법 문의는 코드 작성 중 문서 검색에 쓰던 SDK MCP 도구를 과거 Q&A·코드 예제가 쌓인 지식베이스로 함께 확장해 우선 검색하여 답변을 재사용하고, 없으면 SDK API 소스 주석을 근거로 답변 초안을 작성해 Outlook 임시보관함에 저장 — 하나의 MCP 인프라를 코딩 중 문서 검색과 고객 대응 자동화 양쪽의 기반으로 재사용',
                        },
                      ],
                    },
                    {
                      content:
                        '코드 수정 — Jira 코멘트 스레드에서 합의된 내용만 근거로 SDK 저장소 코드를 조사·수정',
                      descriptions: [
                        {
                          content:
                            'WASM 엔진(C++) 쪽 원인으로 판단되면 별도 private 엔진 저장소를 커밋 해시로 SDK 버전과 정확히 매칭해 읽기 전용으로만 참조하고, 엔진팀 반영이 실제로 확정된 경우에만 내부 빌드 산출물로 wasm 바이너리를 교체',
                        },
                      ],
                    },
                    {
                      content:
                        '배포·라이선스 운영 — 라이선스 발급부터 고객 안내, 배포 산출물 준비까지 이어서 처리',
                      descriptions: [
                        {
                          content:
                            '내부 라이선스 발급 API를 직접 호출해 운영/개발/테스트 라이선스별 만료일 규칙을 검증하며 발급하고, 고객 안내 메일 작성과 배포용 샘플 코드 준비·릴리즈 문서 버전 폴더 복사까지 처리',
                        },
                      ],
                    },
                    {
                      content:
                        '되돌리기 어려운 지점(main 브랜치 push, Jira·메일 발송, 라이선스 키 발급)마다 사용자 최종 승인을 거치도록 설계해, 자동화 범위를 넓히면서도 오작동 위험 없이 안전하게 운영',
                    },
                    {
                      content:
                        '절차가 스킬 단위로 표준화되면서, 서로 다른 문의·이슈가 동시에 들어오거나 같은 유형의 처리가 여러 건 밀려도 여러 세션에서 해당 스킬을 병렬로 실행해 대응 가능',
                    },
                  ],
                },
              ],
            },
            {
              content: '폰트 로딩 병목 현상 해결을 통한 사용자 경험 개선',
              descriptions: [
                {
                  content:
                    '외부 파트너사로부터 웹오피스 로딩이 느리다는 문의를 받아 확인한 결과, SDK가 기본 제공하는 TTF 폰트의 다운로드 지연이 원인이었음(Chrome 개발자도구 네트워크 탭 측정 기준 폰트당 평균 약 7.7MB, 약 1.03초 소요)',
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
                    'iframe.src를 지정하지 않아 부모와 동일 출처로 유지한 뒤, 그 위에 필요한 하위 요소들을 직접 주입하는 방식으로 전환해 문제를 해결. 수정 이후 동일 도메인에서 직접 서빙하는 경우와 다른 도메인에서 불러오는 경우 모두 정상 동작을 확인',
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
                    '단축키 확대 지원, 누름틀 추가, 문단 간격 기능 지원, Find/Replace/ReplaceAll API 등 오피스 기능 추가·수정, 버그 수정, API 추가·오류 수정을 월 10건 이상 규모로 지속 개발하며 SDK 완성도를 높임',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'PASS Office 부가서비스 (LGU+, KT, SKT)',
      startedAt: '2024-06',
      where:
        '(폴라리스오피스) WebOffice SDK 기반 B2C 이동통신사 PASS 부가서비스의 App 내 WebView 및 Web 프론트엔드 개발 (LGU+ PASS 2024.11 런칭, KT PASS 2025.10 런칭, SKT PASS 2026.06 런칭)',
      skillKeywords: ['TypeScript', 'React', 'Redux', 'Styled Components'],
      descriptions: [
        {
          content: '소개',
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
                {
                  content:
                    '웹뷰 초기화 완료를 앱에 알리는 핸드셰이크를 도입해 앱이 리스너 등록 전에 메시지를 보내 유실되는 레이스 컨디션을 방지하고, 플랫폼별 브릿지 API 지원 여부를 먼저 확인한 뒤에만 호출하도록 가드를 두어 미지원 환경에서의 예외를 방지',
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
                    '앱이 플랫폼·통신사·버전 정보를 User-Agent에 실어 전달하는 규약을 설계하고, 웹에서 이를 파싱해 특정 통신사의 특정 버전 이상에서만 기능을 노출하도록 구현(예: LGU+ PASS 자동연결 해제 안내 팝업은 해당 기능이 검증된 Android 앱 버전 이상에서만 노출). 통신사·버전 값은 선택 항목으로 설계해, 조건이 없거나 맞지 않아도 나머지 기능은 정상 동작하도록 안전하게 처리',
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
      skillKeywords: ['Next.js', 'TypeScript', 'Supabase', 'OpenAI API'],
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
              content:
                'AI 코딩 에이전트를 활용해 약 1주일 만에 Next.js·Supabase·OpenAI API 기반 풀스택 서비스를 완성',
              descriptions: [
                {
                  content:
                    'TraceAI 대화형 기억 복원, 사진 기반 이미지 자동 분석, 소유자 인증 질문 자동 생성, 반대 유형 게시글 유사 매칭 알림, 리포트 완료 후 유사 게시글 자동 추천까지 5종의 AI 기능을 모두 실제 동작하는 API로 구현',
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
      where: '(폴라리스오피스) 업무 외 개인 시간을 활용한 사내용 Chrome Extension 개발',
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
        'styled-components',
      ],
      descriptions: [
        {
          content: '소개',
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
