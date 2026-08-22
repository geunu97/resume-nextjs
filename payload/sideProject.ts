import { IProject } from '../component/project/IProject';

const sideProject: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Picake',
      startedAt: '2025-09',
      where: '디저트 전문점 주문·예약 O2O 플랫폼 - 프론트엔드·백엔드·인프라 개발',
      skillKeywords: [
        'Next.js',
        'React',
        'TypeScript',
        'Zustand',
        'TanStack Query',
        'NestJS',
        'Prisma',
        'PostgreSQL',
        'Socket.io',
        'Sentry',
        'PostHog',
        'AWS EC2',
        'AWS S3',
        'AWS CloudFront',
        'AWS Route53',
        'GitHub Actions',
      ],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '케이크·디저트 전문 매장을 검색하고 예약·주문할 수 있는 O2O 플랫폼으로, 사용자 앱(Flutter, WebView 기반)·판매자 웹·관리자 웹으로 구성된 Yarn Berry 모노레포',
            },
            {
              content:
                '기획 1명, 디자이너 1명, 프론트엔드 개발자 1명, 앱 개발자 1명과 함께한 5인 사이드 프로젝트로, 출시를 앞두고 앱 심사 진행 중',
            },
            {
              content: '3개 웹 서비스(User/Seller/Admin)의 프론트엔드를 분담해 함께 개발',
            },
            {
              content:
                'AI 코딩 에이전트를 활용해 백엔드·AWS 인프라 설계·구축을 전담하며 전체 커밋의 약 75%를 작성',
            },
          ],
        },
        {
          content: '기여 내용 - AI 에이전트 활용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'MCP 서버 연동과 반복 업무 Skill화로 AI 에이전트 활용 범위 확장',
              descriptions: [
                {
                  content:
                    'PostHog, Vercel, Sentry, AWS, Firebase, Solapi(알림톡) 등 외부 서비스를 MCP로 연동해, 반복 업무는 저장소 전용 Skill(슬래시 커맨드)로 표준화해 같은 절차로 수행하도록 구성',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 프론트엔드',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'User/Seller 프레임워크 이원화 및 동적 OG/SEO 메타데이터 생성 - Next.js vs Vite',
              descriptions: [
                {
                  content:
                    '사용자 웹은 SEO·초기 로딩 성능이 필요해 Next.js(SSR)로, 판매자 관리 웹은 로그인 후에만 쓰는 내부 도구라 SEO가 불필요해 Vite 기반 SPA로 프레임워크를 분리. 관리자 도구는 HMR 기반 개발 속도와 빌드 단순함을 우선하는 트레이드오프를 선택',
                },
                {
                  content:
                    '이 SSR 선택은 상품·스토어 링크를 카카오톡·SNS로 공유할 때도 이어짐 - JS를 실행하지 않는 메신저 크롤러도 정확한 미리보기를 그리도록, generateMetadata로 서버사이드에서 상품·스토어 데이터를 조회해 OpenGraph/Twitter 카드 메타데이터를 동적으로 생성',
                },
              ],
            },
            {
              content: '계층형 Query Key 팩토리로 캐시 무효화 구조 설계',
              descriptions: [
                {
                  content:
                    '주문은 마이페이지 목록·예정 주문 카드·주문 상세 등 여러 화면에서 동시에 조회되는데, 결제완료·취소·환불 등 주문 상태가 바뀌는 뮤테이션마다 관련 화면의 쿼리 키를 일일이 나열해 무효화하면 하나라도 빠뜨렸을 때 특정 화면만 낡은 데이터를 보여주는 문제가 있었음',
                },
                {
                  content:
                    '도메인별로 전체(all) → 상세(detail)/목록(mypage) 순으로 하위 키가 상위 키를 포함하도록 쿼리 키 팩토리를 구성해, 뮤테이션 성공 시 상위 키 하나만 무효화해도 하위 쿼리가 함께 갱신되는 계단식 무효화 구조를 앱 전반에 일관되게 적용',
                },
              ],
            },
            {
              content: '카카오맵 마커 렌더링 성능 최적화',
              descriptions: [
                {
                  content:
                    '카카오맵 마커는 storeId를 키로 하는 Map 자료구조로 관리해 지도 이동마다 전체 재생성 대신 범위를 벗어난 항목만 제거·새로 들어온 항목만 추가하는 diff 렌더링을 구현하고, 드래그·줌 제스처 중에는 마커 DOM 갱신을 보류했다가 idle 이벤트 발생 시 디바운스 처리해 모바일 환경의 터치 끊김 현상을 해결',
                },
              ],
            },
            {
              content: '지도 스토어 카드에 사용자 위치 기반 거리 표시',
              descriptions: [
                {
                  content:
                    '지도에서 스토어를 고를 때 실제로 얼마나 가까운지 판단할 근거가 없어, 사용자 현재 좌표와 스토어 좌표 간 실거리를 계산해 스토어 카드에 노출하기로 결정',
                },
                {
                  content:
                    '판매자가 카카오 우편번호 검색 팝업으로 도로명·지번 주소를 등록할 때 주소 문자열만 저장하면 지도에서 거리 계산에 쓸 수 없어, 등록 시점에 Kakao 주소-좌표 변환 API로 해당 주소를 위도·경도로 미리 변환해 DB에 함께 저장. 사용자가 지도를 조회할 때마다 외부 API를 호출하지 않고 저장된 좌표만으로 즉시 거리 계산이 가능하도록 사전 변환·저장 방식을 선택',
                },
                {
                  content:
                    '두 좌표 간 최단 거리는 지구를 평면이 아닌 구로 가정해 위도·경도 차이로부터 거리를 구하는 Haversine 공식으로 계산해 스토어 카드에 노출',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 백엔드 · 인프라',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Consumer/Seller/Admin 3-way 인증 구조 설계',
              descriptions: [
                {
                  content:
                    '세 종류의 클라이언트를 하나의 User 테이블과 role 구분이 아닌 완전히 분리된 모델(Consumer/Seller/Admin)로 설계하고, JWT에 대상(audience)과 토큰 타입(access/refresh 등)을 함께 서명해 하나의 인증 가드가 대상별·토큰 타입별 접근을 함께 검증하도록 구성',
                },
                {
                  content:
                    'JWT 페이로드는 최소 정보만 서명하고, 요청마다 계정 활성 상태·판매자 인증 상태 등을 DB에서 다시 조회하도록 판단. 완전한 무상태(stateless) 대신 약간의 조회 비용을 감수해 계정 정지·권한 변경이 토큰 만료를 기다리지 않고 즉시 반영되도록 트레이드오프를 결정',
                },
              ],
            },
            {
              content: '사업자등록번호·통신판매업 진위확인 외부 공공데이터 API 연동',
              descriptions: [
                {
                  content:
                    '판매자가 스토어를 개설할 때 사업자등록번호·통신판매업 신고 여부를 검증하지 않으면, 실제 존재하지 않거나 이미 휴·폐업한 사업자도 스토어를 열 수 있어 플랫폼 신뢰도와 법적 리스크(전자상거래법상 통신판매업 신고 의무)로 이어지는 문제가 있었음',
                },
                {
                  content:
                    '국세청 사업자등록정보 진위확인 API와 공정거래위원회 통신판매사업자 등록상세조회 API를 연동해, 사업자등록번호 불일치·휴폐업 상태·조회 결과 없음 등의 사유로 정상 영업 상태가 아니면 스토어 등록 자체를 차단하도록 설계',
                },
              ],
            },
            {
              content: '주문 알림 4채널 폴백 설계',
              descriptions: [
                {
                  content:
                    '주문 상태가 바뀔 때마다 인앱 알림 저장 → Socket.io 실시간 푸시(포그라운드) → FCM 푸시(백그라운드) → 카카오 알림톡(앱 미설치·미연동 사용자) 순으로 도달 채널을 계층화하도록 설계',
                },
              ],
            },
            {
              content: '백엔드(EC2)·프론트엔드(Vercel) 특성에 맞춘 배포 파이프라인 이원화',
              descriptions: [
                {
                  content:
                    'NestJS 백엔드는 GitHub Actions 태그 트리거로 EC2에 배포하며, DB·서버 백업 → Prisma 마이그레이션(배포 중 실패(P3009) 시 자동 감지·롤백 처리 후 재시도) → PM2 재시작 → 로컬/공인 도메인 헬스체크 순으로 진행하고, trap으로 배포 스크립트 실패를 감지해 직전 백업으로 자동 롤백. SSL 인증서 만료 여부까지 함께 점검해 결과를 Discord로 통지',
                },
                {
                  content:
                    '3개 웹 서비스는 Vercel의 기본 Git 연동 자동배포를 끄고, GitHub Actions에서 태그(예: web-user/production)를 파싱해 프로젝트·환경에 맞는 Vercel 프로젝트로 CLI 배포(vercel pull → build → deploy --prebuilt)하도록 구성해 백엔드와 동일한 태그 기반 흐름으로 배포 트리거를 통일. 모노레포 구조상 앱 서브디렉토리에서 CLI를 실행하면 rootDirectory 경로가 중복되어 빌드가 실패하는 문제를 겪어, 저장소 루트에서 실행하도록 조정',
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
              content: 'GitHub 저장소',
              href: 'https://github.com/ServicePlayground/picake',
            },
            {
              content: '판매자 웹 (로그인 필요)',
              href: 'https://seller.picakes.com',
            },
            {
              content: '관리자 웹 (로그인 필요)',
              href: 'https://admin.picakes.com',
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
      where: 'React 기반 UI 컴포넌트 NPM 라이브러리 개발',
      skillKeywords: ['TypeScript', 'React', 'Rollup', 'Storybook'],
      descriptions: [
        {
          content: '소개',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'React 기반 UI 컴포넌트를 atoms/molecules/organisms 계층 구조로 설계해 Rollup으로 번들링하고 npm에 배포한 개인 UI 라이브러리',
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
                    'TypeScript로 Button·Label·Loading·ProgressBar(atoms), Toast·Alert·Pagination(molecules), Header(organisms) 등 UI 컴포넌트를 개발하고 Storybook으로 문서화. 각 컴포넌트는 props 인터페이스를 정의해 커스터마이징이 쉽도록 설계',
                },
                {
                  content:
                    'CommonJS는 동적 require 구조라 정적 분석이 불가능해 트리쉐이킹이 되지 않는 반면 ESM은 정적 import/export 구조로 트리쉐이킹이 가능해, Rollup으로 ESM 전용 번들을 구성해 사용하지 않는 컴포넌트는 최종 번들에서 제외되도록 배포',
                },
              ],
            },
            {
              content: 'CI/CD 파이프라인 구축을 통한 배포 프로세스 자동화',
              descriptions: [
                {
                  content:
                    'GitHub Actions에 semantic-release를 연동해 Conventional Commits 기반으로 버전을 자동 산정하고 npm 배포까지 자동화(main=정식 버전, dev=@dev 프리릴리즈). 이 자동화 파이프라인을 통해 v2.2.7까지 버전을 배포했고, 최근 1년 1,300+ 다운로드를 기록',
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
