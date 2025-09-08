import { IProject } from '../component/project/IProject';

// 링크 첨부할 수 있으면 첨부하기
// 말 길어서 좋을꺼 없음, 핵심만 전달, 딱 그냥 끊어서 전달
const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Polaris WebOffice SDK',
      startedAt: '2024-06',
      where: 'B2B 파트너사 연동 및 서비스 고도화 프론트엔드 개발',
      descriptions: [
        {
          content: '포맷별 기능 API 개발 및 리포트 이슈 대응을 통해 GS 인증 시험 1등급 획득', // [(관련기사/공식 인증서 링크)]
          weight: 'MEDIUM',
        },
        {
          content: '20여 개 파트너사 대상 SDK 납품 (HWP, Word, Slide, Sheet 포맷)',
          descriptions: [
            {
              content:
                '주요 협력사: 나눔기술(RISE, 전북특별자치도청, 가축위생방역지원본부), 넥스가이드, 래티스, LG Singlex, 엘박스 등', // [(파트너사 보도자료/공식 레퍼런스)]
            },
          ],
        },
        {
          content: '외부 파트너사 리포트 이슈 대응 및 기능 개선 (타 오피스 대비 미지원 기능 보완)',
        },
        {
          content: 'Docusaurus 기반 개발자 가이드 문서 자동화', // [(Docs 사이트 링크)]
        },
        {
          content: 'Jira Open API 연동으로 파트너사별 티켓 자동 생성 및 이슈 관리 효율화',
        },
      ],
    },
    {
      title: 'PASS Office 부가서비스 (KT, LGU+)',
      startedAt: '2024-06',
      where:
        'Polaris Weboffice SDK 기반 국내 이동통신사 PASS App/Web/소개페이지에 Polaris WebOffice 기반 부가서비스 프론트엔드 개발',
      descriptions: [
        {
          content: 'KT PASS App WebView 연동',
          descriptions: [
            {
              content: 'Intro 페이지 무료가입 플로우 구현 (App-웹 간 Bridge 통신)', // [(PASS 공식 소개페이지 링크)]
            },
            {
              content: 'Chrome Extension 기반 Mock PASS 환경 개발로 테스트 효율성 향상', //  [(Github/사내 레포 링크)]
            },
          ],
        },
        {
          content: 'KT PASS Web',
          descriptions: [
            {
              content: '환경별(Webpack) 빌드 분리(staging/production) 및 배포 구조 최적화', //  [(개발자 블로그/기술 발표자료)]
            },
          ],
        },
        {
          content: 'LGU+ PASS Web',
          descriptions: [
            {
              content: 'WebOffice SDK React 연동을 통한 문서 편집기(Web Editor) 제공', //  [(서비스 소개 링크)]
            },
            {
              content: '로그인 화면 개발',
            },
          ],
        },
        {
          content: 'LGU+ PASS 소개페이지',
          descriptions: [
            {
              content: '공지사항, 가입/해지 페이지 개발', //  [(서비스 페이지 링크)]
            },
          ],
        },
      ],
    },
    {
      title: '사내 생산성 도구 개발',
      startedAt: '2024-06',
      where: '',
      descriptions: [
        {
          content: '인트라넷 근무시간 계산기 Chrome Extension 개발', // → 근무시간 집계 자동화 [(Chrome Web Store 링크 또는 사내 배포 문서)]
        },
      ],
    },
    {
      title: '음원 소유권 분할·투자·정산 음악 투자 플랫폼 프론트엔드 개발',
      startedAt: '2024-02',
      endedAt: '2024-06',
      where: '프리랜서 프론트엔드 개발',
      descriptions: [
        {
          content: '미완성 API로 인한 협업 시간 소모 최소화',
          descriptions: [
            {
              content:
                '협업 과정에서 프리랜서 프로젝트로 진행된 프로덕트의 특성상, 백엔드 개발자와의 작업 시간대가 상이한 경우가 잦았습니다. 이로 인해 API 작업이 완료되지 않은 상태에서 컴포넌트 제작이 끝나는 상황이 발생하였고, 이는 API 연동 과정을 별도로 요구하게 만들며 불필요한 시간 소모를 초래했습니다. 이 문제를 해결하기 위해 MSW를 활용한 Mock API를 구현하여, 이러한 시간 소모를 줄였습니다.',
            },
          ],
        },
        {
          content: '마이페이지 접근 권한 관리에 있어서 인증되지 않은 사용자의 접근 문제 해결',
          descriptions: [
            {
              content:
                '로그인 상태 및 사용자 Role 기반의 네비게이션 가드를 도입하여, 아티스트와 일반 회원의 접근을 세분화하고 보안을 강화했습니다.',
            },
          ],
        },
        {
          content: '다국어 지원이 미흡하여 사용자 경험이 제한되는 문제 해결',
          descriptions: [
            {
              content:
                'next-i18next를 도입하여 URL 경로 기반으로 언어 전환을 자동화함으로써, 한국어, 영어, 일본어 간의 원활한 번역 적용을 구현했습니다.',
            },
          ],
        },
        {
          content:
            'Swagger 명세를 활용하여 마이페이지의 CRUD 작업을 위한 오픈 API 엔드포인트와의 통합 구현',
        },
      ],
    },
    {
      title:
        'K-팝 아이돌, 드라마, 영화 등 한국의 엔터테인먼트 콘텐츠와 관련된 다양한 정보 제공 플랫폼 프론트엔드 개발',
      startedAt: '2023-04',
      endedAt: '2023-12',
      where: '한국 엔터테인먼트 콘텐츠(K-팝, 드라마, 영화 등) 관련 정보 제공 서비스 개발 참여',
      descriptions: [
        {
          content: '코드 리팩터링을 진행하여 Lighthouse SEO 점수 개선',
          descriptions: [
            {
              content:
                'Lighthouse에서 제공하는 경고 및 주의 메시지를 바탕으로 한 세부적인 수정 작업을 진행했습니다. 각 페이지의 <meta>, <title>, <description>를 최적화하여 검색 엔진에서의 웹사이트 인식도를 높였습니다. 또한, 모든 이미지에 alt 속성을 추가하여 웹 접근성을 개선하고, 검색 엔진이 이미지의 내용을 더 잘 이해할 수 있도록 했습니다. 이러한 변경을 통해 웹사이트의 SEO 점수가 70점에서 88점까지 향상되었습니다.',
            },
          ],
        },
        {
          content: '코드베이스 내에서 반복적인 에러 핸들링으로 인한 복잡성 개선',
          descriptions: [
            {
              content:
                '반복적으로 사용되던 에러 핸들링 로직으로 인해 코드의 복잡성이 증가하는 문제가 있었습니다. 이를 해결하기 위해, React의 Error Boundary를 활용하여 상위 컴포넌트에서 에러 핸들링을 중앙화했습니다. 이 방법을 통해, 하위 컴포넌트에서 발생할 수 있는 다양한 에러를 상위 레벨에서 효과적으로 캐치하고 관리할 수 있게 되었습니다. 결과적으로, 에러 관리 로직의 중복을 제거하고 코드의 간결성을 향상시킬 수 있었습니다.',
            },
          ],
        },
        {
          content:
            'Figma 디자인 명세를 기반으로 웹 인터페이스를 퍼블리싱하고, 다양한 뷰포트에 대응하는 반응형 아키텍처 구현',
        },
      ],
    },
    {
      title: 'Hash Routing 기반 Single Page Application',
      startedAt: '2024-02',
      endedAt: '2024-02',
      where: '해시 라우팅과 커스텀 렌더링 추상화를 적용한 경량 싱글 페이지 애플리케이션',
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
      where: '우아한형제들 주최 교육 과정',
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
      where: 'React 기반 UI 컴포넌트 NPM 라이브러리',
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
      where: '온라인 커뮤니티 게시판 웹 서비스',
      descriptions: [
        {
          content: 'Next.js 기반으로 게시글과 댓글의 CRUD 기능을 설계·구현',
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
      where: '동아리 홍보 및 소개를 목적으로 하는 웹 서비스',
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
