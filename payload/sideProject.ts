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
              content: '재사용 가능한 UI 컴포넌트 라이브러리 설계 및 개발',
              descriptions: [
                {
                  content:
                    '프로젝트마다 비슷한 UI 컴포넌트를 반복 구현하는 비효율성을 경험하고, 일관된 디자인 시스템과 재사용 가능한 컴포넌트 라이브러리의 필요성을 느낌',
                },
                {
                  content:
                    'TypeScript를 활용하여 타입 안정성을 확보하고, Toast, Alert, Pagination, Loading, ProgressBar, Button 등 UI 컴포넌트를 개발. 각 컴포넌트는 props 인터페이스를 명확히 정의하여 사용자가 쉽게 커스터마이징할 수 있도록 설계',
                },
                {
                  content:
                    'Storybook을 도입하여 컴포넌트의 다양한 상태와 사용 예제를 시각적으로 문서화. 개발자가 코드를 보지 않고도 컴포넌트의 동작을 확인하고 바로 사용할 수 있도록 개선하여 라이브러리 사용성 향상',
                },
              ],
            },
            {
              content: 'CI/CD 파이프라인 구축을 통한 배포 프로세스 자동화',
              descriptions: [
                {
                  content:
                    '초기에는 수동으로 빌드하고 npm에 배포하는 과정이 번거로웠으며, 실수로 잘못된 버전을 배포하거나 테스트 없이 배포하는 위험이 있었음',
                },
                {
                  content:
                    'Github Actions를 활용하여 CI/CD 파이프라인을 구축. 코드 푸시 시 dev 브랜치에서 안정성 검증 후 메인 브랜치로 병합하는 워크플로우를 설계하여 배포 전 품질 검증 프로세스 확립',
                },
              ],
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
