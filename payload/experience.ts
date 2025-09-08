import { IExperience } from '../component/experience/IExperience';

// 기간 안 맞음
const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '폴라리스 오피스',
      positions: [
        {
          title: 'Polaris WebOffice / 프론트엔드 개발자',
          startedAt: '2024-06',
          descriptions: [
            '공공기관 및 기업 파트너사 대상 B2B JavaScript SDK 납품 및 리포트 이슈 대응',
            '문서 편집 API 및 포맷별 기능 고도화를 통한 서비스 품질 개선',
            '리포트 이슈 수정으로 GS 인증 시험 1등급 획득',
            'JSDoc 기반 SDK 가이드 문서 자동화로 개발자 경험(DX) 향상',
            'Jira Open API 연동을 통한 이슈 티켓 생성 자동화 및 협업 효율화',
          ],
          skillKeywords: ['WebAssembly', 'Typescript', 'React', 'Redux', 'Sass'],
        },
        {
          title: 'Polaris WebOffice SDK 기반 PASS Office 부가서비스 (KT, LGU+) / 프론트엔드 개발자',
          startedAt: '2024-06',
          descriptions: [
            'KT / LGU+ PASS App·Web·소개페이지 등 멀티 채널 서비스 개발',
            'App-Web Bridge 통신 구조 설계 및 구현',
            'Intro 페이지 무료가입 플로우에서 App과 Web 간 데이터 연동 처리',
            'Chrome Extension 기반 Mock PASS 환경 구축으로 개발·검증 효율성 향상',
            '환경별(Webpack) 빌드 분리 및 배포 프로세스 개선을 통한 운영 안정화',
            '로그인, 공지사항, 가입/해지 등 핵심 사용자 플로우 화면 개발',
          ],
          skillKeywords: ['WebAssembly', 'JavaScript', 'React', 'Redux', 'Sass'],
        },
        {
          title: '내부 생산성 도구 개발',
          startedAt: '2024-06',
          descriptions: ['사내 인트라넷 근무시간 계산기 Chrome Extension 개발'],
          skillKeywords: ['Typescript', 'React', 'Redux', 'Sass'],
        },
      ],
    },
    {
      title: '피클사운드',
      positions: [
        {
          title: '음원 소유권을 분할·투자·정산 음악 투자 플랫폼 / 프리랜서 프론트엔드 개발',
          startedAt: '2024-02',
          endedAt: '2024-06',
          descriptions: [
            '백엔드 API 미완성 단계에서의 협업 효율화를 위한 MSW를 활용한 Mock API 환경 구축',
            '사용자 Role 기반 접근 제어 및 마이페이지 보안 강화',
            '다국어 지원 체계 도입으로 글로벌 사용자 경험 개선',
            'Swagger 기반 API 연동을 통한 CRUD 기능 구현',
          ],
          skillKeywords: ['TypeScript', 'React', 'Next.js', 'Redux', 'Sass'],
        },
      ],
    },
    {
      title: '한류뱅크',
      positions: [
        {
          title:
            '한국 엔터테인먼트 콘텐츠(K-팝, 드라마, 영화 등) 관련 정보 제공 플랫폼 / 프론트엔드 개발자',
          startedAt: '2023-04',
          endedAt: '2023-12',
          descriptions: [
            '코드 리팩터링을 통한 SEO 및 웹 접근성 개선',
            '에러 핸들링 구조 중앙화로 코드 품질 및 유지보수성 향상',
            'Figma 기반 UI 퍼블리싱 및 반응형 웹 아키텍처 구현',
            '관리자페이지 화면 개발',
          ],
          skillKeywords: ['TypeScript', 'React', 'Next.js', 'Redux', 'Sass'],
        },
      ],
    },
  ],
};

export default experience;
