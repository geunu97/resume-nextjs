import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Polaris WebOffice SDK',
      startedAt: '2024-06',
      where: '(폴라리스 오피스) B2B 파트너사 연동 및 서비스 고도화 프론트엔드 개발',
      descriptions: [
        {
          content: '리포트 이슈 개선을 통한 GS 인증 1등급 획득',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: "폴라리스오피스, 서버리스 '웹오피스' GS인증 1등급 획득",
              href: 'https://www.hankyung.com/article/202504087237i',
            },
          ],
        },
        {
          content:
            '50여 개 공공기관 및 기업 파트너사 대상 B2B JavaScript SDK 납품 중, 10여 개 주요 업체 담당',
          descriptions: [
            {
              content:
                '담당 주요 협력사: LG Singlex, 방첩사, 나눔기술(RISE, 전북특별자치도청, 가축위생방역지원본부), 넥스가이드, 래티스, 엘박스 등',
            },
            {
              content: '파트너사 리포트 이슈 및 문의 대응을 통한 SDK 안정성 및 서비스 품질 개선',
            },
          ],
        },
        {
          content:
            'C++ 기반 WebAssembly 엔진을 사용하는 React 환경에서 웹오피스 기능 API 개발 및 엔진 통신 대응',
        },
        {
          content: 'HWP/Word/Slide/Sheet 포맷별 기능/UX 개선',
          descriptions: [
            {
              content:
                'HWP 줄 간격 기능, 입력 기반 단축키(Ctrl+F) 구현, Find/Replace/ReplaceAll API 및 특정 메뉴 비활성화 처리 등 기능 개발',
            },
            {
              content: 'NotoEmoji 폰트 적용으로 이모지 입력 지원',
            },
            {
              content: 'react-i18n 기반 영어/러시아어 다국어 처리',
            },
            {
              content:
                'Google WebFont(NotoSansKR) 최적화: TTF → WOFF 로컬 저장, 평균 로딩 190ms → 6ms 개선',
            },
          ],
        },

        {
          content: 'Docusaurus 기반 개발자 가이드 POC 구현',
          descriptions: [
            {
              content: 'Polaris WebOffice SDK API 문서 자동화 및 구조화 검증',
            },
            {
              content: 'JSDoc 주석 기반 Markdown 변환 스크립트 개발로 문서 생성 자동화',
            },
            {
              content: 'Markdown 기반 문서 및 버전 관리 설계 경험',
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
              content: '배포 완료 시점에 해당 프로젝트/버전 기준 티켓 자동 생성 및 이력 기록',
            },
            {
              content: '파트너사별 배포 로그 관리 효율화 및 수동 기록 작업 최소화',
            },
          ],
        },
        {
          content: 'GitLab → GitHub 레포지토리 미러링 및 이전 작업 수행',
        },
      ],
    },
    {
      title: 'PASS Office 부가서비스 (KT, LGU+)',
      startedAt: '2024-06',
      where:
        '(폴라리스 오피스) Polaris Weboffice SDK 기반 이동통신사 PASS 부가서비스 App/Web 프론트엔드 개발',
      descriptions: [
        {
          content: 'LGU+ PASS 2024.11 런칭, KT PASS 2025.10~ 런칭 예정',
          weight: 'MEDIUM',
        },
        {
          content: 'KT PASS App',
          descriptions: [
            {
              content: 'KT PASS App WebView 연동 및 Intro 페이지 무료가입 플로우 구현',
              href: 'https://vf.passoh.io/webview/kt/intro',
            },
            {
              content: 'Chrome Extension 기반 Mock PASS 환경 개발로 테스트 효율성 향상', //  [(Github/사내 레포 링크)]
            },
          ],
        },
        {
          content: 'KT/LGU+ PASS Web Editor',
          descriptions: [
            {
              content: '로그인 화면 환경별(Webpack) 빌드 분리(staging/production) 구조 개선',
              href: 'https://editor.passoh.io/',
            },
            {
              content: '통신사 식별 헤더(pass-oh-telecom)를 기반으로 API 요청 라우팅 구현',
            },
          ],
        },
        {
          content: 'KT/LGU+ PASS Web Info',
          descriptions: [
            {
              content: '유료 구독 가입/서비스 해지/공지사항 화면 UI 및 API 통합 구현',
              href: 'https://vf.passoh.io/join',
            },
            {
              content: '약관 상세, 이용약관, 개인정보처리방침 화면 Polaris WebOffice SDK 기반 구현',
            },
          ],
        },
      ],
    },
    {
      title: '사내 생산성 도구 개발',
      startedAt: '2024-06',
      where: '(폴라리스 오피스) 사내 인트라넷 근무시간 계산기 Chrome Extension 개발',
      // descriptions: [
      //   {
      //     content: '깃허브',
      //   },
      // ],
    },
    {
      title: 'Pickle Sound',
      startedAt: '2024-02',
      endedAt: '2024-06',
      where: '(피클사운드) 음원 소유권 분할·투자·정산 음악 투자 플랫폼',
      descriptions: [
        {
          content:
            'next-i18next 도입하여 URL 경로 기반 자동 언어 전환 구현, 한국어·영어·일본어 다국어 지원',
        },
        {
          content:
            'Swagger 명세 기반 상품 리스트 및 상세, 댓글, 마이페이지 CRUD 작업을 위한 API 연동',
        },
      ],
    },
    {
      title: 'Fantoo',
      startedAt: '2023-04',
      endedAt: '2023-12',
      where: '(한류뱅크) K-팝, 드라마, 영화 등 한국 엔터테인먼트 콘텐츠 정보를 제공하는 플랫폼',
      descriptions: [
        {
          content: '코드 리팩터링 및 메타데이터 최적화를 통해 Lighthouse SEO 점수 74 -> 86점 향상',
          descriptions: [
            {
              content:
                'Lighthouse 경고·주의 메시지를 반영해 <meta>, <title>, <description>을 최적화하고, 모든 이미지에 alt 속성을 적용하여 검색엔진 인식도와 웹 접근성을 강화함',
            },
          ],
        },
        {
          content: '에러 핸들링 로직 중앙화로 코드 복잡성 개선 및 유지보수성 향상',
          descriptions: [
            {
              content:
                'react-query의 useErrorBoundary 옵션을 활용해 ErrorBoundary를 적용하여 상위 컴포넌트에서 에러를 일괄 관리, 하위 컴포넌트 예외를 효과적으로 처리하고 중복 로직을 제거해 코드의 간결성과 유지보수성을 높임',
            },
          ],
        },
        {
          content:
            'Figma 디자인 명세를 기반으로 웹 인터페이스를 퍼블리싱하고, 다양한 뷰포트에 대응하는 반응형 아키텍처 구현',
        },
        {
          content: '백오피스 UI 및 CRUD 기능 개발 및 API 연동',
        },
      ],
    },
    {
      title: 'Hash Routing 기반 Single Page Application',
      startedAt: '2024-02',
      endedAt: '2024-02',
      where:
        '(개인 프로젝트) 해시 라우팅과 커스텀 렌더링 추상화를 적용한 경량 싱글 페이지 애플리케이션',
      descriptions: [
        {
          content:
            'Vanilla JS로 hashchange 이벤트 기반 커스텀 라우터 설계, 해시 파싱·라우트 매칭·폴백 처리까지 포함한 경량 SPA 아키텍처 구현',
        },
        {
          content:
            'MSW(Mock Service Worker)와 더미 데이터 연동으로 API 의존성 제거 및 프론트엔드 중심 개발 환경 구축',
        },
        {
          content: 'Webpack 기반 번들링으로 최적화된 SPA 실행 환경 구현',
        },
        {
          href: 'https://github.com/geunu97/whatever-spa',
          content: 'https://github.com/geunu97/whatever-spa',
        },
      ],
    },
    {
      title: '우아한테크코스 프리코스',
      startedAt: '2023-11',
      endedAt: '2023-12',
      where: '(개인 프로젝트) 우아한형제들 주최 교육 과정',
      descriptions: [
        {
          content: 'JavaScript 과제 해결 및 Jest 기반 100+ 단위 테스트 작성',
        },
        {
          content: '크리스마스 프로모션',
          href: 'https://github.com/geunu97/javascript-christmas-6-geunu97',
        },
        {
          content: '로또게임',
          href: 'https://github.com/geunu97/javascript-lotto-6/tree/geunu97',
        },
        {
          content: '레이싱게임',
          href: 'https://github.com/geunu97/javascript-racingcar-6/tree/geunu97',
        },
        {
          content: '야구게임',
          href: 'https://github.com/geunu97/javascript-baseball-6',
        },
      ],
    },
    {
      title: '@geunwoo/react-design-system',
      startedAt: '2023-06',
      endedAt: '2023-08',
      where: '(개인 프로젝트) React 기반 UI 컴포넌트 NPM 라이브러리',
      descriptions: [
        {
          content: 'Storybook으로 문서화하여 재사용성과 접근성 강화',
        },
        {
          content:
            'Toast, Alert, Pagination, Loading, ProgressBar, Button 등 다양한 UI 컴포넌트 제공으로 개발 시간 단축과 디자인 일관성 확보',
        },
        {
          content:
            '개발 서버 환경(dev 브랜치) 구축으로 메인 서버 배포 전 안정성 검증과 버전 관리 효율화',
        },
        {
          content: 'Github Actions 기반 CI/CD 자동화로 배포 반복 작업 최소화',
        },
        {
          content: '향후 기업 환경에서 라이브러리 활용과 기존 시스템 이해에 기여할 수 있는 경험',
        },
        {
          href: 'https://www.npmjs.com/package/@geunwoo/react-design-system',
          content: 'https://www.npmjs.com/package/@geunwoo/react-design-system',
        },
        {
          href: 'https://github.com/geunu97/react-design-library',
          content: 'https://github.com/geunu97/react-design-library',
        },
      ],
    },
    {
      title: 'Community Board',
      startedAt: '2023-03',
      endedAt: '2023-03',
      where: '(개인 프로젝트) 온라인 커뮤니티 게시판 웹 서비스',
      descriptions: [
        {
          content: 'Next.js 기반으로 게시글과 댓글의 CRUD 기능 설계·구현',
        },
        {
          content:
            'SSR·SSG·StaticPaths를 적절히 활용하여 게시판·댓글은 getServerSideProps, 404/Error 페이지는 getStaticProps·getStaticPaths로 구현',
        },
        {
          content: 'TypeScript의 interface 상속과 제네릭 적용으로 타입 안정성과 확장성 확보',
        },
        {
          content: 'rem 단위와 미디어쿼리를 활용한 반응형 폰트 스케일링 적용',
        },
        {
          content: 'statusCode 기반 동적 라우팅으로 일관된 에러 처리 체계 마련',
        },
        {
          content: 'apis, components, hooks, utils 등으로 구조화해 가독성과 생산성 향상',
        },
        {
          href: 'https://github.com/geunu97/community',
          content: 'https://github.com/geunu97/community',
        },
      ],
    },
    {
      title: 'Sequence',
      startedAt: '2022-04',
      endedAt: '2022-07',
      where: '(팀 프로젝트) 동아리 홍보 및 소개를 목적으로 하는 웹 서비스',
      descriptions: [
        {
          content: 'Next.js의 SSR 기능 도입으로 초기 로딩 속도 개선 및 SEO 강화',
        },
        {
          content: 'React Query 활용 서버 데이터 구조 분리 및 상태 관리',
        },
        {
          href: 'https://github.com/cbnu-sequence/sequence-web-front',
          content: 'https://github.com/cbnu-sequence/sequence-web-front',
        },
      ],
    },
    // {
    //   title: '고양이 사진관',
    //   startedAt: '2022-03',
    //   endedAt: '2022-04',
    //   where: '무료 오픈 API를 이용한 고양이 사진 검색 사이트',
    //   descriptions: [
    //     {
    //       content: '첫 개발 프로젝트를 통해 프로그래밍 문법과 다양한 기능 구현 방법 습득',
    //     },
    //     {
    //       href: 'https://github.com/geunu97/Repository_React_Cat',
    //       content: 'https://github.com/geunu97/Repository_React_Cat',
    //     },
    //   ],
    // },
  ],
};

export default project;
