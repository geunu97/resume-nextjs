import { IProject } from '../component/project/IProject';

const sideProject: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '우아한테크코스 프리코스',
      startedAt: '2023-11',
      endedAt: '2023-12',
      where: '(개인 프로젝트) 우아한형제들 주최 프론트엔드 교육 과정',
      skillKeywords: ['JavaScript', 'Jest'],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'JavaScript 문제 해결 능력·테스트 코드 작성·코드 품질 개선을 집중적으로 검증하는 프로그램으로, Jest 기반 단위 테스트를 작성해 안정적인 애플리케이션을 만드는 과정',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
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
      ],
    },
    {
      title: '@geunwoo/react-design-system',
      startedAt: '2023-06',
      endedAt: '2023-08',
      where: '(개인 프로젝트) React 기반 UI 컴포넌트 NPM 라이브러리 개발',
      skillKeywords: ['TypeScript', 'React', 'Storybook'],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'React 기반 UI 컴포넌트를 모듈화해 누구나 가져다 사용할 수 있도록 제작한 UI 라이브러리',
            },
            {
              content:
                '일관된 디자인 시스템을 제공해 개발 생산성을 높이고, Storybook 기반 문서화를 통해 재사용성·확장성을 강화한 개인 프로젝트',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Toast, Alert, Pagination, Loading, ProgressBar, Button 등 UI 컴포넌트 제공',
            },
            {
              content: 'Storybook 문서화 및 디자인 가이드 구축',
            },
            {
              content:
                '개발 서버 환경(dev 브랜치) 구축으로 메인 서버 배포 전 안정성 검증과 버전 관리 효율화',
            },
            {
              content: 'Github Actions 기반 CI/CD 자동화로 배포 반복 작업 최소화',
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
      ],
    },
    // {
    //   title: 'Sequence',
    //   startedAt: '2022-04',
    //   endedAt: '2022-07',
    //   where: '(팀 프로젝트) 동아리 홍보 및 소개 Web 서비스 개발',
    //   skillKeywords: ['TypeScript', 'React', 'Next.js', 'React Query'],
    //   descriptions: [
    //     {
    //       content: '소개',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         {
    //           content: '대학 동아리를 소개하고 홍보하기 위해 개발한 Web 서비스',
    //         },
    //       ],
    //     },
    //     {
    //       content: '기여 내용',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         {
    //           content:
    //             'Next.js 기반 SSR 아키텍처를 적용해 초기 렌더링 속도를 개선하고 SEO 효과를 강화',
    //         },
    //         {
    //           content: 'React Query 활용하여 서버 데이터 구조 분리 및 상태 관리',
    //         },
    //         {
    //           href: 'https://github.com/cbnu-sequence/sequence-web-front',
    //           content: 'https://github.com/cbnu-sequence/sequence-web-front',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default sideProject;
