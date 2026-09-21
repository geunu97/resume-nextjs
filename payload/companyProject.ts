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
              content: '웹오피스 SDK 상용화 레퍼런스 확대 - 60여 개 파트너사 납품 및 상용화',
            },
            {
              content: '웹오피스 SDK 매출 약 4.8배 성장(2024년 4.1억 → 2025년 19.8억)',
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
                '60여 개 파트너사 중 나눔기술(삼성생명)·IBK기업은행·한국도로공사 등 20여 곳의 기술 지원 및 라이선스 갱신·관리를 직접 담당',
            },
            {
              content:
                'MG새마을금고·국가철도공단 등 주요 파트너사는 기술 미팅과 현장 방문까지 진행하며 관계 관리',
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
                    '메일은 초안 작성까지만, main push는 금지, PR 머지·라이선스 발급은 승인 후에만 진행하도록 제한하고, 단순 반복 요청은 여러 터미널 세션에서 병렬로 처리해 복잡한 개발 작업에 시간을 투자할 수 있도록 개선',
                },
              ],
            },
            {
              content:
                '폰트 다운로드 시간 약 85% 단축(1.03초 → 0.15초)으로 웹오피스 SDK 로딩 지연 개선',
              descriptions: [
                {
                  content:
                    '외부 파트너사가 웹오피스 SDK 로딩 지연의 원인으로 기본 제공 TTF 폰트를 지목해 개선을 요청했고, Chrome 개발자도구 네트워크 탭으로 폰트당 평균 약 7.7MB, 다운로드 약 1.03초가 걸리는 것을 확인',
                },
                {
                  content:
                    'WOFF2 포맷으로 전환해 폰트 크기를 평균 약 44% 줄이고(약 4.3MB) 다운로드 시간을 약 0.15초로 단축',
                },
              ],
            },
            {
              content:
                '배포 이력 기록 자동화로 배포당 수동 작업(빌드 완료 확인·Jira 기록) 약 15분 → 0분 단축',
              descriptions: [
                {
                  content:
                    '10여 개 파트너사의 배포마다 빌드가 끝날 때까지 완료 여부를 확인하다가 Jira에 이력을 수동으로 기록해야 해 시간이 들고 누락 위험이 있었으며, 배포 버전과 이슈의 연결이 불명확해 문제 발생 시 원인 파악이 어려웠음',
                },
                {
                  content:
                    '사내 SDK 빌드·배포 플랫폼에 Jira Open API 연동 기능을 개발해, 배포가 끝나면 프로젝트·버전별 티켓을 생성하고 배포 로그와 이슈를 연결, 이력 누락을 막고 버전별로 이슈를 추적할 수 있도록 구현',
                },
              ],
            },
            {
              content:
                '다른 도메인(CDN)에서 SDK를 불러와도 동작하도록 iframe Cross-Origin 문제 해결',
              descriptions: [
                {
                  content:
                    '웹오피스 SDK는 iframe으로 삽입되는데, SDK를 CDN으로 다른 도메인에서 불러오면 부모 페이지와 출처가 달라 동일 출처 정책(Same-Origin Policy)으로 상호작용이 막혀 정상 동작하지 않는 문제를 사내 서비스 적용 중 발견',
                },
                {
                  content:
                    'iframe에 다른 도메인 주소를 연결하는 대신 srcdoc에 기본 HTML 구조를 직접 주입해 부모 페이지와 같은 출처로 동작하게 하고, 같은 도메인 서빙·CDN 로드 모두에서 SDK와 프린트 기능이 정상 동작함을 확인',
                },
              ],
            },
            {
              content:
                '타사 문서 편집 프로그램에서 복사한 내용이 붙여넣기 후에도 깨지지 않도록 변환 모듈을 SDK에 연동',
              descriptions: [
                {
                  content:
                    '파트너사 요청으로, 표 폭이 넓어지는 등 레이아웃이 깨지던 붙여넣기 문제를 엔진팀의 변환(WASM) 모듈을 SDK에 연동하고 복사한 HTML 데이터를 모듈에 전달해 반환된 XML로 붙여넣도록 구현해 해결',
                },
              ],
            },
            {
              content: '월 10건 이상의 오피스 기능·API를 지속 개발해 SDK 고도화',
              descriptions: [
                {
                  content:
                    '편집 UI: 문단 간격, 구역 설정, 누름틀 등을 문서 처리 엔진 API로 값을 조회해 보여주고 설정 값을 엔진에 전달하도록 구현하고, 단축키 지원을 확대',
                },
                {
                  content:
                    'SDK API: 찾기·바꾸기, 셀 병합·해제 등 엔진 기능을 외부 서비스에서 호출할 수 있는 API로 제공',
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
        '(폴라리스오피스) 웹오피스 SDK 기반 B2C 이동통신사 PASS 부가서비스의 앱 내 WebView 및 웹 프론트엔드 개발',
      skillKeywords: ['TypeScript', 'React', 'Redux', 'Styled-components'],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'LGU+·KT·SKT 이동통신사 가입자가 문서를 열람·편집할 수 있는 B2C 부가서비스로, PASS App(모바일)과 PASS Web Editor(웹)에서 PASS 계정 하나로 동일하게 이용 가능',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'LGU+ PASS Office 유료 출시 후, 8개월 만에 유료 구독 3만 명 확보',
            },
            {
              content:
                'LGU+(2024.12)·KT(2025.10)에 이어 SKT PASS Office(2026.06)까지 오픈하며 이동통신 3사 채널 확보',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '구버전 앱에서 신규 기능이 노출되지 않도록 통신사·앱 버전별 기능 노출 제어',
              descriptions: [
                {
                  content:
                    '신규 기능(자동연결 해제 팝업)은 출시 직전 앱에서 먼저 확인해야 했지만, 서비스 중인 구버전 앱과 같은 상용 도메인을 쓰고 있어 도메인만으로는 앱 버전별로 기능 노출을 나눌 수 없었음',
                },
                {
                  content:
                    '앱 개발 담당자와 플랫폼·통신사·버전 정보를 User-Agent에 담아 전달하는 규약을 정하고, 웹에서 이를 읽어 특정 통신사의 특정 버전 이상에서만 기능을 노출하도록 구현해 상용 도메인에 배포해도 구버전 앱에는 기능이 노출되지 않도록 차단',
                },
              ],
            },
            {
              content:
                '도메인이 분리된 환경에서도 에디터 로그인이 유지되도록 팝업 기반 로그인 연동 구현',
              descriptions: [
                {
                  content:
                    '로그인 도메인이 여러 도메인·통신사에서 공통으로 쓰이도록 에디터 도메인과 분리되어 있어, 로그인 쿠키를 에디터와 공유할 수 없어 에디터 화면에서 그대로 로그인할 수 없었음',
                },
                {
                  content:
                    '에디터에서 팝업으로 로그인 페이지를 띄우고, 로그인 완료 후 postMessage로 토큰을 에디터에 전달하면 에디터가 서버 검증 API를 호출해, 검증에 성공하면 서버가 설정하는 쿠키로 로그인이 유지되도록 연동하고 팝업을 닫아 원래 열람하려던 에디터 화면으로 자동 진입',
                },
              ],
            },
            {
              content: 'LGU+·KT·SKT 3사 공통 앱-웹 브릿지 기능 확장 및 명세 작성',
              descriptions: [
                {
                  content:
                    'window 함수 호출 방식과 cmd/body JSON 메시지 형식을 따르는 기존 브릿지 구조에 맞춰, 웹이 앱에 정보를 요청하고 앱이 응답하는 기능별 브릿지를 추가 구현(예: 사용자의 취약계층 여부에 따른 팝업 노출)',
                },
                {
                  content: '명세를 작성·문서화하고 앱 개발 담당자와 지속적으로 협의해 완성',
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
              content:
                '실제 앱 없이도 WebView 브릿지를 테스트할 수 있도록 Chrome Extension 기반 Mock 환경 구축',
              descriptions: [
                {
                  content:
                    'KT PASS WebView 무료 가입 플로우를 개발하며, 브릿지를 테스트할 때마다 실제 PASS 앱을 설치·실행해야 하는 불편이 있었음',
                },
                {
                  content:
                    '앱이 window에 노출하는 것과 같은 핸들러를 Chrome Extension이 미리 주입해, 웹이 호출하면 사용자 정보 등 앱 응답을 대신 돌려주도록 구현',
                },
              ],
            },
            {
              content: 'SKT PASS 신규 채널 WebView·웹 화면 구현',
              descriptions: [
                {
                  content:
                    'LGU+·KT에서 쓰던 브릿지, 팝업 로그인 등의 구조를 재사용해 앱 내 인트로/약관 WebView 화면과 웹 로그인, 웹 가입/해지 화면을 구현',
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
      ],
    },
    {
      title: 'FindBack',
      startedAt: '2026-04',
      endedAt: '2026-04',
      where: '(폴라리스오피스) 전사 AI 바이브코딩 공모전 개인 출품작 (자유주제)',
      skillKeywords: ['TypeScript', 'Next.js', 'Supabase', 'OpenAI API'],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '기존 분실물 시스템의 한계를 보완하는 AI 분실물·습득물 통합 플랫폼',
            },
            {
              content:
                '검색 부담 → 사진 기반 자동 매칭, 흐릿한 기억 → AI 질문으로 떠올리기, 약한 신고 동기 → 사례금 금액 표시, 주인 확인의 어려움 → 습득자만 아는 정보 기반 소유자 인증 질문',
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                "전사 임직원 160여 명이 참가한 2주간의 공모전에서 '문제 해결력과 창의적인 아이디어'로 최우수상(1위) 수상",
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'AI 코딩 에이전트를 활용해 기획부터 구현까지 개인으로 수행',
              descriptions: [
                {
                  content:
                    '직접 기획하고 Next.js·Supabase·OpenAI API 기반으로 대화형 기억 떠올리기, 사진 기반 이미지 분석, 소유자 인증 질문 생성, 제목·태그·설명 가중치 기반 유사 매칭 알림까지 AI 기능 4종을 모두 실제 동작하도록 구현',
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
              content: '최우수상 상장',
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
                '유연근무제 환경에서 월 필수 근로시간 대비 초과·부족 시간을 매번 수동으로 계산하는 번거로움을 직접 느껴 Chrome Extension을 제작',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '인트라넷 근무시간 표 읽기(content script) → 저장(service worker) → 팝업 표시(popup)로 구성해, 남은 영업일을 하루 8시간으로 채웠을 때의 월 필수 근로시간 대비 초과·부족 시간을 계산·표시',
            },
            {
              content: '같은 불편을 겪던 동료들과 공유해 함께 사용',
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
      where: '(한류뱅크) 글로벌 K-POP 팬덤 플랫폼 웹 프론트엔드 개발',
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
              content: "175개국에 출시된 모바일 앱 '팬투'의 웹 전용 버전 (오픈 전 종료)",
            },
          ],
        },
        {
          content: '주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '운영사 한류홀딩스(HRYU), 국내 스타트업 최초 나스닥 직상장(2023.08)',
              href: 'https://edaily.co.kr/News/Read?mediaCodeNo=257&newsId=02007366635703712',
            },
            {
              content: "한류뱅크 팬투, '대한민국 문화연예대상' K-POP 해외 공로상 수상(2023.11)",
              href: 'https://www.e2news.com/news/articleView.html?idxno=303553',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Figma 기반 커뮤니티 목록·상세 페이지 UI 개발',
            },
            {
              content: '관리자 페이지 UI 개발 및 Swagger 명세 기반 API 연동',
            },
            {
              content:
                'Next.js i18n 라우팅과 next-i18next로 URL 경로(/en 등) 기반 다국어 지원 구현',
            },
            {
              content:
                'Lighthouse 경고 항목 중 점수 영향이 큰 페이지별 title·meta description과 이미지 alt를 수정해 SEO 74점 → 86점 개선',
            },
            // {
            //   content: '에러 핸들링 중앙화를 통한 코드 품질 및 유지보수성 개선',
            //   descriptions: [
            //     {
            //       content:
            //         '컴포넌트마다 개별 try-catch로 에러를 처리해 중복 코드와 일관되지 않은 에러 UX가 발생하던 것을, react-query의 useErrorBoundary를 활용한 ErrorBoundary 패턴으로 중앙화해 중복 코드를 제거하고 일관된 에러 경험과 유지보수성을 확보',
            //     },
            //   ],
            // },
          ],
        },
      ],
    },
  ],
};

export default companyProject;
