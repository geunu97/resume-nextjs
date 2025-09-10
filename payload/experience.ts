import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true, // 기간이 안맞음
  list: [
    {
      title: '폴라리스 오피스',
      positions: [
        {
          title: 'WebOffice / 프론트엔드 개발자',
          startedAt: '2024-06',
          descriptions: [
            '공공기관 및 기업 파트너사 대상 B2B JavaScript SDK 납품 및 리포트 이슈 대응',
            '문서 편집 API 및 포맷별 기능 고도화를 통한 서비스 품질 개선',
            'JSDoc 기반 SDK 가이드 문서 자동화로 개발자 경험(DX) 향상',
            'Jira Open API 연동을 통한 이슈 티켓 생성 자동화 및 협업 효율화',
          ],
          skillKeywords: ['WebAssembly', 'JavaScript', 'Typescript', 'React', 'Redux', 'Sass'],
        },
        {
          title: 'WebOffice SDK 기반 PASS Office 부가서비스 (KT, LGU+) / 프론트엔드 개발자',
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
          skillKeywords: ['JavaScript'],
        },
      ],
    },
    {
      title: '피클사운드',
      positions: [
        {
          title: '프리랜서 프론트엔드 개발자',
          startedAt: '2024-02',
          endedAt: '2024-05',
          descriptions: [
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
          title: '개발팀 프론트엔드 개발자',
          startedAt: '2023-04',
          endedAt: '2023-12',
          descriptions: [
            '코드 리팩터링 및 메타데이터 최적화로 SEO 점수 향상과 접근성 개선',
            'ErrorBoundary 적용을 통한 에러 핸들링 중앙화',
            'UI 퍼블리싱 및 반응형 웹 구현',
            '백오피스 UI 및 CRUD·API 연동',
          ],
          skillKeywords: ['TypeScript', 'React', 'Next.js', 'Redux', 'React Query', 'Sass'],
        },
      ],
    },
  ],
};

export default experience;
