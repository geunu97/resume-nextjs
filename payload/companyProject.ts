import { IProject } from '../component/project/IProject';

const companyProject: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Polaris WebOffice SDK',
      startedAt: '2024-06',
      where: '(폴라리스 오피스) WebOffice B2B 파트너사 연동 및 서비스 고도화 프론트엔드 개발',
      skillKeywords: ['WebAssembly', 'TypeScript', 'React', 'Redux', 'Styled Components'],
      descriptions: [
        {
          content: '제품 소개',
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
          content: '제품 주요 성과',
          weight: 'MEDIUM',
          descriptions: [
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
                    '10여 개 주요 파트너사(LG Singlex, 한화오션, 테크빌교육, 방첩사, 나눔기술, 넥스가이드, 엘박스 등)의 WebOffice SDK 연동 프로젝트를 담당하며, 각 고객사의 기술 스택과 요구사항에 맞춘 커스터마이징 및 통합 지원',
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
                    'API 호출 시퀀스와 데이터 흐름을 추적하여 이슈 발생 지점을 식별하고, 엔진 이슈는 엔진팀과의 명확한 커뮤니케이션 프로토콜을 통해 패치 요청 및 검증 프로세스를 정립. UI 이슈는 React 레이어에서 직접 수정하여 응답 속도 개선',
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
                    'TTF 포맷을 WOFF로 변환하여 파일 크기를 30% 감소시키고, 로컬 저장소에 캐싱하는 방식으로 전환. 폰트가 필요한 시점에 이미 로드되어 있어 추가 네트워크 요청이 없도록 개선',
                },
                {
                  content:
                    '결과적으로 폰트 로딩 시간을 190ms에서 6ms로 약 97% 개선(31배 향상)하여 초기 렌더링 성능을 크게 향상',
                },
              ],
            },
            {
              content: '데이터 기반 CS 문의 감소를 위한 SDK MCP 도구 개발',
              descriptions: [
                {
                  content:
                    '월 50건 이상의 반복적인 기술 문의가 발생하여 개발팀의 업무 효율성이 저하되고 있었음. 문의 내용을 분석한 결과, 대부분이 SDK 사용법과 API 호출 방식에 대한 질문이었으며, 기존 문서가 분산되어 있어 찾기 어려운 구조였음',
                },
                {
                  content:
                    'SDK MCP(Model Context Protocol) 도구를 개발하여 Cursor, Claude 등 IDE와 MCP 설정을 통해 연동하고, 프롬프트 방식으로 SDK API 사용 예제와 설명을 즉시 확인할 수 있도록 개선. 개발자가 코드 작성 중 IDE 내에서 직접 SDK 문서를 참조하여 문서 검색 시간을 단축',
                },
                {
                  content:
                    '도구 도입 후 월 CS 문의가 50건에서 30건으로 40% 감소하여, 개발팀이 신규 기능 개발에 더 집중할 수 있는 환경을 조성',
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
                    '수동 작업 시간을 배포당 평균 15분에서 0분으로 단축하고, 배포 이력 누락을 완전히 방지하여 파트너사별 배포 로그 관리의 정확성과 효율성을 크게 향상',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'PASS Office 부가서비스 (KT, LGU+)',
      startedAt: '2024-06',
      where:
        '(폴라리스 오피스) Weboffice SDK 기반 B2C 이동통신사 PASS 부가서비스 App/Web 프론트엔드 개발 (LGU+ PASS 2024.11 런칭, KT PASS 2025.10 런칭)',
      skillKeywords: ['TypeScript', 'React', 'Redux', 'Styled Components'],
      descriptions: [
        {
          content: '제품 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'KT/LGU+ 이동통신사 사용자 대상 문서 뷰어·편집 기반 B2C 부가서비스로, 하나의 PASS 계정으로 웹/모바일 환경에서 문서를 열람·편집 가능',
            },
            {
              content: 'PASS App, PASS Web Editor, PASS Info-site 3개 채널로 운영',
            },
          ],
        },
        {
          content: '제품 주요 성과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '오피스도우미 LGU+ 유료 출시 후, 8개월 만에 유료 구독 30,000명 확보(월 매출 1.5억 수준)',
            },
            {
              content: 'SKT 2026년 상반기 오픈 일정 논의 중',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'KT PASS App WebView 연동 및 개발 생산성 향상을 위한 Mock 환경 구축',
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
              content: 'KT/LGU+ PASS Web Editor',
              href: 'https://editor.passoh.io/',
              descriptions: [
                {
                  content:
                    'Web Editor에서 새 팝업 기반 로그인 기능을 구현하여, 사용자가 인증에 성공하면 쿠키를 통해 세션을 유지하며 기존 에디터 화면으로 돌아가도록 처리',
                },
                {
                  content:
                    'Webpack을 적용하여 로그인 화면의 환경별 빌드(development/staging/production) 구조를 개선하고, 개발/검증/상용 환경의 도메인과 API 서버를 효율적으로 관리',
                },
              ],
            },
            {
              content: 'PASS Web Info 유료 구독 및 약관 확인 화면 구현',
              href: 'https://passoh.io/join',
              descriptions: [
                {
                  content:
                    '유료 구독 가입/서비스 해지/공지사항 화면을 구현하며, 사용자가 서비스 약관을 쉽게 확인할 수 있도록 Polaris WebOffice SDK를 활용하여 약관 상세, 이용약관, 개인정보처리방침 화면을 문서 뷰어 형태로 제공',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: '사내 생산성 도구 개발',
      startedAt: '2024-06',
      where: '(폴라리스 오피스) 사내 인트라넷 근무시간 계산기 Chrome Extension 개발',
      skillKeywords: ['JavaScript'],
      descriptions: [
        {
          content: '사내 인트라넷 근무시간 계산 자동화를 통한 업무 효율성 개선',
          descriptions: [
            {
              content:
                '유연근무제 환경에서 직원들이 매일 인트라넷에서 근무시간을 확인하고 수동으로 계산하는 과정이 번거로웠으며, 기준 시간(8시간) 대비 초과/미달 시간을 정확히 파악하기 어려운 문제가 있었음',
            },
            {
              content:
                'Chrome Extension을 개발하여 인트라넷 페이지의 근무시간 데이터를 자동으로 파싱하고, 기준 시간과 비교하여 초과/미달 시간을 실시간으로 계산하여 표시. 매일 반복되는 수동 계산 작업을 자동화',
            },
            {
              content:
                '사내 직원들의 근무시간 관리 효율성을 향상시키고, 계산 오류를 방지하여 정확한 근무시간 파악이 가능하도록 개선',
            },
            {
              content: 'Intranet-Working-Hours-Calculator',
              href:
                'https://github.com/geunu97/pub-po-side/tree/main/Intranet-Working-Hours-Calculator',
            },
          ],
        },
      ],
    },
    {
      title: 'Fantoo',
      startedAt: '2023-04',
      endedAt: '2023-12',
      where: '(한류뱅크) 한국 엔터테인먼트 콘텐츠 정보 제공 플랫폼 Web 프론트엔드 개발',
      skillKeywords: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'React Query', 'Sass'],
      descriptions: [
        {
          content: '제품 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'K-팝, 드라마, 영화 등 한류 콘텐츠의 최신 소식·영상·커뮤니티 기능을 통합 제공하는 글로벌 서비스',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '웹 사용자 서비스(FE) 및 백오피스(Admin) Web 시스템 UI/기능 개발',
            },
            {
              content: 'next-i18next 기반 URL Path 자동 언어 전환 구현(한국어·영어·일본어 지원)',
            },
            {
              content:
                '코드 리팩터링 및 메타데이터 최적화를 통해 Lighthouse SEO 점수 74 -> 86점 향상',
              descriptions: [
                {
                  content:
                    'Lighthouse 경고·주의 메시지를 반영해 <meta>, <title>, <description>을 최적화하고, 모든 이미지에 alt 속성을 적용하여 검색엔진 인식도와 웹 접근성 강화',
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
                    'react-query의 useErrorBoundary 옵션을 활용하여 ErrorBoundary 패턴을 도입. API 호출 실패 시 상위 ErrorBoundary에서 일괄 처리하도록 구조화하고, 각 컴포넌트의 중복된 try-catch 로직을 제거하여 코드 복잡성을 감소',
                },
                {
                  content:
                    '에러 처리 로직을 중앙화하여 코드 라인 수를 감소시키고, 에러 발생 시 일관된 사용자 경험을 제공하며, 새로운 에러 케이스 추가 시 한 곳에서만 수정하면 되도록 유지보수성 크게 향상',
                },
              ],
            },
            {
              content: '웹 사용자 서비스 및 백오피스 시스템 개발',
              descriptions: [
                {
                  content:
                    'Figma 디자인을 기반으로 반응형 UI를 구현하여 다양한 뷰포트에서 일관된 사용자 경험을 제공하고, Swagger 명세를 기반으로 API 연동을 체계적으로 진행하여 타입 안정성과 개발 효율성 확보',
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
