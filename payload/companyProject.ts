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
              content: '기업 파트너사 대상 B2B JavaScript SDK 납품 중 10여 개 주요 업체 담당',
              descriptions: [
                {
                  content:
                    '담당 주요 협력사: LG Singlex, 한화오션, 테크빌교육, 방첩사, 나눔기술, 넥스가이드, 엘박스 등',
                },
              ],
            },
            {
              content: 'WebOffice SDK 기술 지원 및 품질 개선',
              descriptions: [
                {
                  content:
                    '고객사의 WebOffice 연동 과정에서 발생하는 기술적 문의·문서 호환성·렌더링 오류 등 CS 이슈 대응',
                },
                {
                  content: 'GS 인증 획득을 위한 제품 기능 검수 및 발견 이슈 전면 수정',
                },
                {
                  content:
                    'C++ 기반 WebAssembly 엔진 + React UI 구조에 대해, 엔진 이슈/UI 이슈 원인 분석(Triage)',
                },
                {
                  content:
                    '엔진 이슈 발생 시 API 동작 분석 → 엔진팀과 커뮤니케이션 → 패치 요청 및 검증',
                },
                {
                  content: 'UI 이슈는 React 레이어에서 직접 수정 및 기능 개선',
                  descriptions: [
                    {
                      content:
                        '단축키확대지원, 누름틀추가, Find/Replace/ReplaceAll API 등 기능 개발',
                    },
                    {
                      content:
                        'Google WebFont(NotoSansKR) 최적화: TTF → WOFF 로컬 저장, 평균 로딩 190ms → 6ms 개선',
                    },
                    {
                      content: '해외 고객사 대응을 위해 영문·러시아어 다국어 지원(i18n) 적용',
                    },
                  ],
                },
              ],
            },
            {
              content: 'SDK 기술 문서화·도구 개발',
              descriptions: [
                {
                  content: '기술 문의를 정리·단일화하기 위한 SDK MCP 제작',
                  descriptions: [
                    {
                      content: '월 CS 문의 50+건 → 30건, 약 40% 감소',
                      weight: 'MEDIUM',
                    },
                  ],
                },
                {
                  content: 'Docusaurus 기반 개발자 가이드 POC 구현',
                  descriptions: [
                    {
                      content: 'JSDoc 주석 기반 Markdown 변환 스크립트 개발로 문서 생성 자동화',
                    },
                  ],
                },
                {
                  content: 'Jira Open API 연동을 통한 배포 이력 자동화 구현',
                  descriptions: [
                    {
                      content: '기존 서버 빌드 자동화 파이프라인에 Jira Open API 연동',
                    },
                    {
                      content:
                        '배포 완료 시점에 해당 프로젝트/버전 기준 티켓 자동 생성 및 이력 기록',
                    },
                    {
                      content: '파트너사별 배포 로그 관리 효율화 및 수동 기록 작업 최소화',
                    },
                  ],
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
              content: 'KT PASS App',
              href: 'https://api.passoh.io/v1/deep-link/pass-kt?id=1',
              descriptions: [
                {
                  content: 'KT PASS 앱 내 WebView 연동을 통해 Intro 페이지에서 무료 가입 절차 구현',
                },
                {
                  content:
                    'WebView에서 앱과의 통신을 직접 확인하기 어려운 문제를 해결하기 위해, Chrome Extension을 활용한 Mock PASS 환경을 개발하여 KT PASS 무료가입 플로우 테스트의 효율성 향상 경험',
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
                {
                  content:
                    'PASS Web Editor와 Polaris WebOffice JavaScript SDK를 연동하여 문서 편집 기능을 웹 환경에서 구현',
                },
              ],
            },
            {
              content: 'KT/LGU+ PASS Web Info',
              href: 'https://passoh.io/join',
              descriptions: [
                {
                  content: '유료 구독 가입/서비스 해지/공지사항 화면 UI 및 API 통합 구현',
                },
                {
                  content:
                    '약관 상세, 이용약관, 개인정보처리방침 화면 Polaris WebOffice SDK 기반 구현',
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
          content:
            '유연근무제 환경에서 직원별 근무시간을 기준 시간(8시간)과 비교하여 초과/미달 시간을 자동 계산하는 Chrome Extension',
        },
        {
          content: 'Intranet-Working-Hours-Calculator',
          href:
            'https://github.com/geunu97/pub-po-side/tree/main/Intranet-Working-Hours-Calculator',
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
              content: '에러 핸들링 로직 중앙화로 코드 복잡성 개선 및 유지보수성 향상',
              descriptions: [
                {
                  content:
                    'react-query의 useErrorBoundary 옵션을 활용해 ErrorBoundary를 적용하여 상위 컴포넌트에서 에러를 일괄 관리, 하위 컴포넌트 예외를 효과적으로 처리하고 중복 로직을 제거해 코드의 간결성과 유지보수성 향상',
                },
              ],
            },
            {
              content: 'Figma 디자인을 기반으로 반응형 UI 퍼블리싱 및 다양한 뷰포트 대응',
            },
            {
              content: 'Swagger 명세 기반 CRUD 작업을 위한 API 연동',
            },
          ],
        },
      ],
    },
  ],
};

export default companyProject;
