import { IProject } from '../component/project/IProject';

const sideProject: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Picake',
      startedAt: '2025-09',
      where: '(사이드 프로젝트) 케이크·디저트 O2O 플랫폼 프론트엔드 개발 및 서비스 구축',
      skillKeywords: [
        'TypeScript',
        'React',
        'Next.js',
        'Zustand',
        'TanStack Query',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'Sentry',
        'PostHog',
        'AWS EC2',
        'AWS S3/CloudFront/Route53',
        'GitHub Actions',
      ],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '케이크·디저트 전문 매장을 검색하고 예약·주문하는 O2O 플랫폼으로, Flutter 앱(WebView 안에서 사용자 웹 구동)·판매자 웹·관리자 웹으로 구성되며 App Store·Google Play에 출시',
            },
            {
              content:
                '5인 사이드 프로젝트(기획 1·디자이너 1·프론트엔드 2·앱 1)에서 웹 3종의 프론트엔드를 분담했고, 백엔드·AWS 인프라는 AI 코딩 에이전트의 설계안을 검토·선택해 구축',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '주문 상태 변경 시 관련 화면 캐시를 상위 키 하나로 일괄 무효화하는 계층형 Query Key 팩토리 설계',
              descriptions: [
                {
                  content:
                    '마이페이지 목록·주문 상세가 같은 주문을 조회하는데, 결제완료·취소·환불로 상태가 바뀔 때마다 쿼리 키를 일일이 무효화하면 하나라도 빠질 때 특정 화면만 낡은 데이터를 보여주는 문제가 있었음',
                },
                {
                  content:
                    '도메인별로 all → detail/mypage 순으로 하위 키가 상위 키를 포함하게 구성해, 상위 키 하나만 무효화해도 하위 쿼리가 함께 갱신되도록 웹 전반에 적용',
                },
              ],
            },
            {
              content: '카카오맵 마커를 변경분만 갱신하는 diff 렌더링으로 모바일 터치 끊김 완화',
              descriptions: [
                {
                  content:
                    '지도를 이동할 때마다 마커를 전부 다시 그려 모바일 드래그·줌 중 터치가 끊기는 문제가 있었음',
                },
                {
                  content:
                    '마커를 스토어별(storeId)로 저장해 재사용하고 범위를 벗어난 것만 제거·새로 들어온 것만 추가하며, 드래그·줌 중에는 갱신을 건너뛰고 지도가 멈춘 뒤(idle) 디바운스로 반영',
                },
              ],
            },
            {
              content:
                '서비스 성격에 맞춰 사용자 웹은 Next.js(SSR), 판매자·관리자 웹은 Vite(CSR)로 프레임워크 이원화',
              descriptions: [
                {
                  content:
                    '사용자 웹은 SEO·초기 로딩이 필요해 SSR을, 로그인 후에만 쓰는 판매자·관리자 웹은 SEO가 불필요해 개발 속도와 빌드 단순함을 우선해 Vite를 선택',
                },
              ],
            },
            {
              content:
                '인프라 운영 부담을 줄이려 매니지드 서비스(App Runner + RDS)로 시작했으나 비용 부담이 커서, EC2 단일 서버(DB 포함)로 전환',
            },
            {
              content: '국세청·공정위 공공 API를 연동해 부적격 사업자의 스토어 등록을 차단',
              descriptions: [
                {
                  content:
                    '검증하지 않으면 존재하지 않거나 휴·폐업한 사업자도 스토어를 열 수 있어 플랫폼 신뢰도와 통신판매업 신고 의무 관련 리스크가 생겨, 스토어 생성 시 서버에서 진위확인·통신판매업 조회를 재검증하도록 구성',
                },
              ],
            },
            {
              content: 'PostHog·DB 통계를 함께 조회하는 사용성 데이터 리포트 Claude Code 루틴 개발',
              descriptions: [
                {
                  content:
                    'PostHog와 관리자 페이지를 매번 직접 접속해 확인하는 게 번거로워, 두 지표를 매일 자동 조회해 대시보드·Discord 리포트로 발행하도록 구성',
                },
              ],
            },
            // {
            //   content: '지도 스토어 카드에 사용자-스토어 간 거리 표시',
            //   descriptions: [
            //     {
            //       content:
            //         '판매자가 스토어 도로명·지번 주소를 등록할 때 주소 문자열만 저장하면 지도에서 거리 계산에 쓸 수 없어, 등록 시점에 Kakao 주소-좌표 변환 API로 해당 주소를 위도·경도로 미리 변환해 DB에 함께 저장',
            //     },
            //     {
            //       content:
            //         '이렇게 미리 저장해둔 스토어 좌표와 사용자 현재 좌표 간 실거리를 계산해 스토어 카드에 표시 - 지구를 완전한 구로 가정해 위도·경도 차이로부터 거리를 구하는 Haversine 공식을 사용하여 계산',
            //     },
            //   ],
            // },
            // {
            //   content: 'Consumer/Seller/Admin 3-way 인증 구조 설계',
            //   descriptions: [
            //     {
            //       content:
            //         'role 필드 하나로 세 클라이언트를 구분하는 단일 User 테이블 방식은 사용자·판매자·관리자별로 다른 스키마와 정책이 한 테이블에 뒤섞이고 role 검증을 모든 엔드포인트마다 개별적으로 챙겨야 해 실수로 다른 대상의 토큰이 통과할 위험이 있어, 세 종류의 클라이언트를 하나의 User 테이블이 아닌 완전히 분리된 모델(Consumer/Seller/Admin)로 설계',
            //     },
            //   ],
            // },
            // {
            //   content: '주문 알림 4채널 폴백 설계',
            //   descriptions: [
            //     {
            //       content:
            //         'Socket.io 연결은 앱이 백그라운드로 전환되면 끊기고, 알림 미동의·앱 미설치 사용자는 푸시 자체가 닿지 않아 주문 상태 변경을 못 받는 사각지대가 있었음',
            //     },
            //     {
            //       content:
            //         '주문 상태가 바뀔 때마다 인앱 알림 저장 → Socket.io 실시간 푸시(포그라운드) → FCM 푸시(백그라운드) → 카카오 알림톡 순으로 도달 채널을 계층화하도록 설계',
            //     },
            //   ],
            // },
            // {
            //   content: '백엔드(EC2)·프론트엔드(Vercel) 특성에 맞춘 배포 파이프라인 이원화',
            //   descriptions: [
            //     {
            //       content: 'NestJS 백엔드는 GitHub Actions 태그 트리거로 EC2에 배포',
            //     },
            //     {
            //       content:
            //         '3개 웹 서비스는 Vercel이 빌드·배포를 대신 처리하는 관리형 환경인 특성에 맞춰, GitHub Actions에서 태그를 파싱해 프로젝트·환경에 맞는 Vercel 프로젝트로 CLI 배포하도록 구성해 백엔드와 동일한 태그 기반 흐름으로 배포 트리거를 통일',
            //     },
            //   ],
            // },
            // {
            //   content: 'MCP 서버 연동과 반복 업무 Skill화로 AI 에이전트 활용 범위 확장',
            //   descriptions: [
            //     {
            //       content:
            //         'PostHog, Vercel, Sentry, AWS, Firebase, Solapi(알림톡) 등 외부 서비스를 MCP로 연동해, 반복 업무는 저장소 전용 Skill(슬래시 커맨드)로 표준화해 같은 절차로 수행하도록 구성',
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
              content: 'GitHub 저장소',
              href: 'https://github.com/ServicePlayground/picake',
            },
            {
              content: 'App Store',
              href: 'https://apps.apple.com/kr/app/picake/id6787681984',
            },
            {
              content: 'Google Play',
              href: 'https://play.google.com/store/apps/details?id=com.pickage.package',
            },
          ],
        },
      ],
    },
    // {
    //   title: '우아한테크코스 프리코스',
    //   startedAt: '2023-11',
    //   endedAt: '2023-12',
    //   where: '(개인 프로젝트) 우아한형제들 주최 프론트엔드 교육 과정',
    //   skillKeywords: ['JavaScript', 'Jest'],
    //   descriptions: [
    //     {
    //       content: '소개',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         {
    //           content:
    //             'JavaScript 문제 해결 능력·테스트 코드 작성·코드 품질 개선을 집중적으로 검증하는 프로그램으로, Jest 기반 단위 테스트를 작성해 안정적인 애플리케이션을 만드는 과정',
    //         },
    //       ],
    //     },
    //     {
    //       content: '기여 내용',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         {
    //           content: 'JavaScript 문제 해결 능력 향상 및 테스트 코드 작성 역량 강화',
    //           descriptions: [
    //             {
    //               content:
    //                 'JavaScript 기반 애플리케이션 개발 시 테스트 코드 작성 경험이 부족하여 코드 품질 검증이 어려웠고, 문제 해결 능력을 체계적으로 검증할 수 있는 환경이 필요했음',
    //             },
    //             {
    //               content:
    //                 '크리스마스 프로모션, 로또게임, 레이싱게임, 야구게임 등 4개의 JavaScript 과제를 해결하고, Jest 기반 100개 이상의 단위 테스트를 작성하여 코드 안정성과 품질을 검증',
    //             },
    //             {
    //               content:
    //                 '테스트 코드 작성 역량을 강화하고, 문제 해결 능력을 체계적으로 검증하여 안정적인 애플리케이션 개발 기반 마련',
    //             },
    //           ],
    //         },
    //         {
    //           content: '크리스마스 프로모션',
    //           href: 'https://github.com/geunu97/javascript-christmas-6-geunu97',
    //         },
    //         {
    //           content: '로또게임',
    //           href: 'https://github.com/geunu97/javascript-lotto-6/tree/geunu97',
    //         },
    //         {
    //           content: '레이싱게임',
    //           href: 'https://github.com/geunu97/javascript-racingcar-6/tree/geunu97',
    //         },
    //         {
    //           content: '야구게임',
    //           href: 'https://github.com/geunu97/javascript-baseball-6',
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      title: '@geunwoo/react-design-system',
      startedAt: '2023-06',
      endedAt: '2023-08',
      where: 'React 기반 UI 컴포넌트 npm 라이브러리 개발',
      skillKeywords: ['TypeScript', 'React', 'Rollup', 'Storybook'],
      descriptions: [
        {
          content: '프로젝트 소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '컴포넌트 라이브러리 구축·배포 경험을 쌓기 위한 학습 프로젝트로, UI 컴포넌트를 Atomic Design 기반 구조(atoms·molecules·organisms)로 설계해 npm에 배포',
            },
          ],
        },
        {
          content: '기여 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '정적 import/export 구조인 ESM으로 번들해, 사용하지 않는 컴포넌트를 소비 측에서 제외(트리쉐이킹)할 수 있도록 구성',
            },
            {
              content:
                'GitHub Actions와 semantic-release로 버전 산정부터 npm 배포까지 자동화 (v2.2.7까지 배포, 최근 1년 1,500+ 다운로드)',
            },
          ],
        },
        {
          content: '관련 링크',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'npm 패키지',
              href: 'https://www.npmjs.com/package/@geunwoo/react-design-system',
            },
            {
              content: 'GitHub 저장소',
              href: 'https://github.com/geunu97/react-design-library',
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
