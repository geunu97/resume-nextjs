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
        'Kakao Map',
        'OAuth',
        'JWT',
        'FCM',
        'Axios',
        'PM2',
        'react-error-boundary',
        'Yarn Berry',
        'Cursor',
        'Claude Code',
        'MCP',
        'Vite',
        'Shadcn/ui',
        'Tailwind CSS',
        'Nginx',
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
              content:
                '프론트엔드 개발자 1명과 3개 웹 서비스(User/Seller/Admin)를 정해진 담당 구분 없이 그때그때 남은 작업을 맡아 함께 개발하고, 백엔드와 AWS 인프라 설계·구축은 전담하며 전체 커밋의 80% 이상을 작성',
            },
          ],
        },
        {
          content: '기여 내용 - AI 코딩 에이전트 (Claude Code) 활용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'MCP(Model Context Protocol) 서버 연동으로 에이전트 작업 범위 확장',
              descriptions: [
                {
                  content:
                    'PostHog, Vercel, Sentry, AWS, Firebase, Kakao, GCP, Solapi(알림톡), Google Sheets/Docs 등 팀이 사용하는 9개 외부 서비스를 .mcp.json으로 연동해, AI 에이전트가 대화 중에 대시보드·로그·인프라 상태를 직접 조회하고 조작할 수 있도록 구성',
                },
              ],
            },
            {
              content: '반복 업무를 저장소 전용 Skill(슬래시 커맨드)로 정의해 워크플로우 표준화',
              descriptions: [
                {
                  content:
                    '커밋 컨벤션 검증, 태그 기반 배포(직전 태그 조회 → 버전 자동 산정 → 사용자 확인 후 태그 push), PR 생성(브랜치·담당자를 매번 사용자에게 확인한 뒤 diff를 분석해 제목·본문 자동 작성), 소셜 로그인·카카오 알림톡 템플릿 등 기존 패턴 재사용, 앱 딥링크 설정, 법적 고지사항(약관·사업자정보) 반영, iOS 앱스토어 심사 대응까지 8개 skill을 직접 설계해, 팀원 누구나 같은 절차로 반복 작업을 수행하도록 표준화',
                },
              ],
            },
            {
              content: '코드 변경 시 문서 자동 동기화 파이프라인 설계',
              descriptions: [
                {
                  content:
                    '기능 개발·버그 수정 작업을 마칠 때마다 별도 요청 없이도 변경 내용과 관련된 README/docs를 에이전트가 스스로 찾아 최신화하는 docs-sync skill과, 특정 변경과 무관하게 문서 전체를 코드베이스 기준으로 재점검하는 docs-refresh skill을 분리 설계해 문서와 코드 간 드리프트를 최소화',
                },
              ],
            },
            {
              content: '행동 데이터 + DB 데이터를 통합하는 AI 리포팅 워크플로우 구축',
              descriptions: [
                {
                  content:
                    'PostHog(페이지뷰·전환 퍼널 등 행동 데이터)와 백엔드 관리자 통계 API(회원·주문·매출 등 DB 데이터)를 하나의 요청으로 함께 조회해 대시보드로 시각화하는 data-report skill을 설계. 예약·회원가입·검색 등 8개 핵심 전환 퍼널의 이벤트 순서를 정의하고, 실제 수집된 이벤트와 DB 지표를 상호 대조해 트래킹 누락 가능성을 자동으로 짚어주는 검증 로직까지 포함',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 프론트엔드 (WebView · 앱 연동)',
          weight: 'MEDIUM',
          descriptions: [
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
              content: 'Google/Kakao/Apple OAuth 인증 플로우 구현',
              descriptions: [
                {
                  content:
                    '소셜 로그인 버튼 클릭 시 Google/Kakao/Apple 인가 페이지로 리다이렉트하고, 콜백 페이지에서 인가 코드를 받아 백엔드 로그인/회원가입 API를 호출해 JWT를 발급받는 흐름을 구현. 발급받은 토큰은 아래(인증 상태 Zustand 스토어)에서 설계한 스토어에 저장해 이후 요청의 Authorization 헤더에 포함',
                },
                {
                  content:
                    'Apple 로그인은 Google/Kakao와 인증 방식이 달라 별도 구현이 필요했음. client_secret이 고정 문자열이 아니라 매 요청 직전 서버가 직접 서명하는 JWT(ES256)라는 점, access_token으로 별도 사용자 정보를 조회하는 대신 토큰 교환 응답에 함께 오는 id_token(JWT)을 Apple JWKS로 검증해 사용자 식별값·이메일을 추출한다는 점이 Google/Kakao와 달라, 이 차이를 반영해 별도 서비스로 분리 구현. 회원 탈퇴 시 Apple 가이드라인(5.1.1(v))이 요구하는 토큰 revoke 호출을 위해 refresh_token을 암호화해 별도 보관',
                },
              ],
            },
            {
              content:
                'App Store 심사 반려 대응 - Apple 로그인 이름 재입력 요구·상품 없는 지역 노출 버그 원인 진단 및 수정',
              descriptions: [
                {
                  content:
                    '"Apple 로그인 후 인증 프레임워크가 이미 제공한 이름을 다시 입력하도록 요구한다"는 가이드라인 4 반려에 대해, OAuth authorize URL이 scope=email만 요청해 Apple의 user(이름) 객체를 아예 받지 못한 것이 원인임을 특정. scope를 name email로 변경하고, Apple이 최초 인가 1회 한정으로 form_post 바디에 실어 보내는 user JSON을 콜백 Route Handler에서 파싱해 회원가입 화면까지 전달하도록 수정해 이름 필드를 미리 채우도록 개선',
                },
                {
                  content:
                    '"데모 계정에 미리 채워진 콘텐츠가 없어 앱을 확인할 수 없다"는 가이드라인 2.1(a) 반려에 대해, 실기기로 재현해 어느 지역을 선택해도 상품 목록이 비어 있는 것을 확인. 지역 활성 여부를 판정하는 백엔드 로직이 노출 가능한 상품 존재 여부는 확인하지 않고 스토어 등록 여부만으로 판정하고 있던 것이 원인임을 찾아, 노출 중인 상품이 1개 이상인 스토어가 있어야만 지역이 활성으로 집계되도록 조건을 추가해 프론트엔드 지역 선택 목록·GPS 자동 매칭 양쪽에 반영',
                },
              ],
            },
            {
              content: 'FCM 푸시 토큰 등록/해제 브릿지 설계',
              descriptions: [
                {
                  content:
                    '앱에서 발급한 FCM 토큰을 로그인/로그아웃 시점에 네이티브 브릿지로 전달해 서버에 등록·삭제하도록 구현하고, 네이티브 콜백이 인증 상태 변경 전후로 도착할 수 있는 타이밍 이슈를 막기 위해 콜백 수신 시 인증 상태를 재검증한 뒤에만 처리하도록 가드를 추가',
                },
              ],
            },
            {
              content:
                '카카오 알림톡 → 앱 딥링크 연동 (Android: Digital Asset Links / iOS: 커스텀 URL 스킴으로 전환)',
              descriptions: [
                {
                  content:
                    '주문 상세보기·리뷰 작성하기 등 알림톡 버튼 클릭 시 앱으로 바로 진입하도록, Android는 assetlinks.json(Digital Asset Links)과 intent-filter autoVerify로 검증 파일을 구성해 실제 값까지 채워 적용 완료',
                },
                {
                  content:
                    'iOS는 최초 apple-app-site-association(AASA) 기반 Universal Links로 구현했으나, Universal Links로 앱이 열린 직후 웹뷰 네비게이션 시점에 iOS가 앱을 백그라운드로 내리고 Safari를 다시 띄우는 자체 동작이 있음을 확인해 AASA를 빈 값으로 되돌려 Universal Links를 비활성화',
                },
                {
                  content:
                    '대신 /order/*, /mypage/order, /mypage/reviews/write 진입 시 마운트되는 브릿지 컴포넌트를 추가해 현재 경로+쿼리를 커스텀 스킴(picake://)으로 즉시 리다이렉트하도록 전환. iOS 사파리가 iframe을 통한 커스텀 스킴 호출은 차단하지만 location.href 방식은 허용한다는 점을 확인해 이 방식을 채택했고, 앱 미설치 기기에서는 navigation이 조용히 무시되고 기존 웹페이지가 그대로 남아 에러 없이 폴백',
                },
              ],
            },
            {
              content: '위치 정보 요청 - 네이티브 브릿지 · 브라우저 API 이중 구현',
              descriptions: [
                {
                  content:
                    'WebView 환경에서는 네이티브 브릿지로 위치를 요청하고 일반 브라우저에서는 navigator.geolocation을 직접 호출하는 이중 경로를 구현. 사용자가 직접 위치 버튼을 눌러 요청한 경우에만 권한 거부 안내 모달을 노출하고, 백그라운드 자동 요청은 실패 시 조용히 기본 위치(서울 강남구)로 폴백',
                },
              ],
            },
            {
              content: '커스텀 URL 스킴으로 외부 앱 딥링크 연동',
              descriptions: [
                {
                  content:
                    '카카오맵·네이버맵·토스 같은 외부 앱 스킴(kakaomap://, nmap://, supertoss://)은 WebView 안에서 일반 링크로 열면 실패해, Flutter WebView의 URL 인터셉터가 인식하도록 apps:// 접두사로 감싸는 유틸을 구현. 현재는 QA 페이지에서 지도 좌표 기반 외부 앱 실행을 검증한 상태',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 프론트엔드 (상태관리 · 데이터 페칭)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '인증 상태 Zustand 스토어 설계 (persist + hydration)',
              descriptions: [
                {
                  content:
                    'persist 미들웨어의 partialize로 localStorage에 저장할 값을 토큰 등 필요한 값만으로 제한하고, hasHydrated 플래그로 서버 렌더링과 클라이언트 하이드레이션 사이의 인증 상태 불일치(로그인 화면 깜빡임)를 방지하는 훅을 별도로 구현',
                },
                {
                  content:
                    'Axios 인터셉터·Socket 서비스 등 React 컴포넌트 밖의 코드에서는 훅 대신 getState()로 스토어에 직접 접근하도록 통일해, 인증 토큰을 참조하는 모든 위치에서 일관된 접근 방식을 유지',
                },
              ],
            },
            {
              content: '전역 Alert/Confirm 스토어로 다이얼로그 호출 단순화',
              descriptions: [
                {
                  content:
                    'Alert·Confirm 모달을 Zustand 스토어로 만들어 어느 컴포넌트에서도 props 전달 없이 호출할 수 있도록 구성하고, Axios 인터셉터·Socket 서비스처럼 React 컴포넌트가 아닌 코드에서는 getState()로 직접 접근해 다이얼로그를 띄우도록 통일',
                },
              ],
            },
            {
              content: '알림 설정 변경에 낙관적 업데이트(Optimistic Update) 적용',
              descriptions: [
                {
                  content:
                    'onMutate에서 진행 중인 쿼리를 취소하고 이전 캐시를 스냅샷한 뒤 낙관적으로 값을 갱신하고, 실패 시 onError에서 스냅샷으로 롤백, 성공 시 서버 응답으로 재조정하는 패턴을 구현해 서버 응답을 기다리지 않고도 즉각적인 UI 반응성을 제공',
                },
              ],
            },
            {
              content: '계층형 Query Key 팩토리로 캐시 무효화 구조 설계',
              descriptions: [
                {
                  content:
                    '도메인별로 전체 → 목록/상세 순으로 하위 키가 상위 키를 포함하도록 구성해, 상위 키 하나만 무효화해도 하위 쿼리가 함께 갱신되는 계단식 무효화 구조를 앱 전반에 일관되게 적용',
                },
              ],
            },
            {
              content: '무한 스크롤 공통 처리 - 관찰자 훅 재사용 및 경계 데이터 정합성',
              descriptions: [
                {
                  content:
                    'IntersectionObserver로 목록 하단 도달을 감지해 다음 페이지를 불러오는 훅을 만들어 좋아요·리뷰·채팅·주문·최근 본 상품 등 12곳에서 재사용',
                },
                {
                  content:
                    '커서 기반 페이지네이션 중 서버에 새 아이템이 추가되어 페이지 경계에서 항목이 밀리는 경우를 대비해, InfiniteData의 여러 페이지를 평탄화한 뒤 id 기준으로 중복 제거하는 유틸을 구현',
                },
              ],
            },
            {
              content: '위치 기반 지역 필터 - 화면 표시 단위와 쿼리 파라미터 분리 설계',
              descriptions: [
                {
                  content:
                    '시/도 → 시/군/구 2단계 지역 선택 UI를 설계하고, 인구가 적은 군 단위는 "화천·양구·철원"처럼 인접 지역끼리 하나의 선택지로 묶어 노출하되, 선택 결과는 백엔드 조회 조건에 맞춰 "시도:시군구" 형식의 문자열로 직렬화해 전달하도록 화면 표시 단위(그룹)와 실제 쿼리 파라미터 포맷을 분리해 설계',
                },
                {
                  content:
                    'Kakao 역지오코딩으로 사용자 현재 위치를 지역과 자동 매칭하고, 매칭되는 후보가 없으면 Haversine 공식으로 사용자 좌표와 후보 지역 중심 좌표 간 거리를 계산해 가장 가까운 지역을 추천하는 폴백 로직을 구현. 최종 선택된 지역을 TanStack Query 캐시 키에 반영해 홈 화면 상품 목록을 지역이 바뀔 때만 다시 조회',
                },
              ],
            },
            {
              content: '결제 대기 카운트다운 - ref 기반 파생 상태 관리',
              descriptions: [
                {
                  content:
                    '입금 대기 주문의 남은 시간을 초 단위로 표시하는 카운트다운을 구현하며, 별도 마감 시각 필드가 없는 주문은 입금 요청 시각+12시간으로 폴백 계산. setInterval 콜백이 stale closure로 오래된 마감 시각을 참조하지 않도록 ref에 최신 마감 시각을 저장해 참조하고, 마감 시각에 도달하면 인터벌을 스스로 정리하도록 구현',
                },
              ],
            },
            {
              content: 'Socket.io 실시간 이벤트를 TanStack Query 캐시 무효화와 연동',
              descriptions: [
                {
                  content:
                    '채팅과는 별개로 주문 알림 전용 Socket.io 채널을 구독해, 수신한 알림 데이터를 소켓 콜백에서 직접 캐시에 patch하는 대신 알림 목록·안읽음 카운트 쿼리 키를 invalidate하는 방식을 선택. 소켓 페이로드와 REST 응답 스키마가 어긋날 가능성을 없애고 항상 서버 응답 기준으로 최신 상태를 유지하도록 트레이드오프를 결정',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 프론트엔드 (Next.js)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '상품·스토어 상세 페이지 동적 OG/SEO 메타데이터 생성',
              descriptions: [
                {
                  content:
                    'generateMetadata에서 서버사이드로 상품·스토어 데이터를 조회해 OpenGraph/Twitter 카드 메타데이터를 동적으로 생성하고, HTML 태그 제거 후 160자로 자르는 설명 요약·가격 포맷팅·데이터가 없을 때의 404 메타데이터 폴백을 공통 유틸로 분리',
                },
              ],
            },
            {
              content: 'Kakao 역지오코딩 서버 프록시 Route Handler',
              descriptions: [
                {
                  content:
                    'Kakao 역지오코딩 호출을 클라이언트에서 직접 하지 않고 Next.js Route Handler를 통해 서버에서 대신 호출하도록 구성해, 요청 파라미터 검증과 업스트림 에러 처리를 서버 단에서 일괄 관리',
                },
              ],
            },
            {
              content: 'Next.js 15 클라이언트 라우터 캐시(staleTimes) 튜닝',
              descriptions: [
                {
                  content:
                    '기본값(dynamic 0초)으로는 WebView 탭 전환·뒤로가기마다 서버 왕복이 발생해 전환이 느리게 느껴지는 문제를, staleTimes 설정으로 최근 방문 페이지를 캐시에서 즉시 복원하도록 개선(데이터 최신성은 TanStack Query staleTime으로 별도 관리)',
                },
              ],
            },
            {
              content: 'next.config 레벨 배포·성능 트레이드오프 조정',
              descriptions: [
                {
                  content:
                    'Sentry 소스맵 업로드는 별도 auth token 설정이 필요해 우선 비활성화해두고, remotePatterns로 허용 이미지 호스트를 제한하며, SVGR 웹팩 설정을 추가해 SVG를 컴포넌트처럼 import해 사용하도록 구성',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 프론트엔드 (에러 · 로딩 처리)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '판매자 스토어 등록 3단계 마법사 - 단계별 상태 보존',
              descriptions: [
                {
                  content:
                    '사업자등록번호 진위확인 API → 통신판매업 등록상세 조회 API → 스토어 정보 입력으로 이어지는 3단계 폼을 설계하고, 각 단계에서 조회한 값은 상태로 보존해 뒤로가기·재시도 시에도 다시 입력하지 않도록 처리. 두 외부 정부 API가 반환하는 서로 다른 실패 코드(등록번호 불일치, 폐업 상태, 조회 결과 없음 등)는 백엔드가 사용자용 메시지로 매핑해 내려주고, 프론트는 이를 그대로 노출',
                },
                {
                  content:
                    '마지막 단계인 스토어 정보 입력에는 카카오 우편번호 검색 API를 연동해 도로명·지번 주소와 위도·경도를 함께 저장하도록 구성, 이후 사용자 웹의 거리 표시·지역 필터가 참조하는 위치 데이터의 원천으로 사용',
                },
              ],
            },
            {
              content: 'Sentry 리포팅 노이즈 필터링',
              descriptions: [
                {
                  content:
                    '4xx 에러는 사용자 입력에 의한 정상적인 분기로 보고 Sentry에 보내지 않고, 5xx·네트워크 오류만 리포팅하도록 필터링해 노이즈를 줄이고, 이 기준을 백엔드 정책과 동일하게 맞춰 프론트-백엔드 모니터링 일관성을 유지',
                },
              ],
            },
            {
              content: 'Axios 인터셉터에서 업로드 관련 엣지케이스 처리',
              descriptions: [
                {
                  content:
                    'FormData로 파일을 업로드할 때 Content-Type을 수동 설정하면 multipart boundary가 누락되는 문제가 있어, FormData 요청에서는 헤더를 제거해 브라우저가 boundary를 포함한 Content-Type을 자동 설정하도록 인터셉터에서 처리',
                },
              ],
            },
            {
              content: '에러 메시지 정규화 유틸',
              descriptions: [
                {
                  content:
                    '백엔드 응답이 data.data.message / data.message / message 등 여러 형태로 오는 것을 하나의 헬퍼로 정규화해, 거의 모든 mutation의 onError에서 재사용',
                },
              ],
            },
            {
              content: '전역 렌더링 에러와 컴포넌트 트리 에러의 이원화 처리',
              descriptions: [
                {
                  content:
                    'Next.js 루트 레이아웃 렌더링 에러는 global-error.tsx에서, 컴포넌트 트리 내부 에러는 react-error-boundary 기반 ErrorBoundaryProvider에서 각각 캡처해 Sentry로 전송하도록 분리',
                },
              ],
            },
            {
              content: 'PostHog 이벤트 텍소노미 정리 및 URL 민감정보 자동 제거',
              descriptions: [
                {
                  content:
                    'engage_(진입·조작)/success_(완료) 접두어로 이벤트명 규칙을 통일하고, 홈·검색과 지도가 공유하던 필터 이벤트(success_filter_apply, engage_filter_open)를 지도 전용 이벤트(success_map_filter_apply, engage_map_filter_open)로 분리 — 지도는 정렬(sort_type) 개념이 없어 같은 이벤트명 아래 서로 다른 스키마가 섞이는 문제를 방지',
                },
                {
                  content:
                    'posthog-js가 모든 이벤트에 $current_url/$referrer를 자동으로 붙여, 페이지뷰 캡처 호출만 고쳐서는 OAuth 콜백·가입 화면에 머무는 동안 발생하는 다른 커스텀 이벤트의 URL까지는 막을 수 없다는 점을 확인. before_send 훅으로 전송 직전 모든 이벤트를 가로채 OAuth code·이메일 등 민감 쿼리파라미터를 제거하고 /auth/* 경로는 쿼리스트링 전체를 제거하도록 구성했고, 해당 경로 진입 중에는 세션 리플레이도 함께 비활성화',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 프론트엔드 (기술 스택 선택 · 마이그레이션)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'User/Seller 프레임워크 이원화 - Next.js vs Vite',
              descriptions: [
                {
                  content:
                    '사용자 웹은 SEO·초기 로딩 성능이 중요해 Next.js(App Router, SSR)로, 판매자 관리 웹은 로그인 후에만 접근하는 내부 도구라 SEO가 불필요해 Vite 기반 React SPA로 의도적으로 프레임워크를 분리. 관리자 도구는 SSR 없이 HMR 기반 개발 속도와 빌드 단순함을 우선하는 트레이드오프를 선택',
                },
              ],
            },
            {
              content: 'Material-UI → Shadcn/ui 전면 마이그레이션',
              descriptions: [
                {
                  content:
                    '판매자 웹의 UI 라이브러리를 npm 패키지 방식인 Material-UI에서, 컴포넌트 코드를 프로젝트에 직접 복사해 소유권을 갖는 Shadcn/ui(Radix UI + Tailwind CSS)로 전면 교체. 자유로운 커스터마이징과 번들 크기 최적화를 목표로 29개 컴포넌트·페이지(23개 파일, 52회 import)를 마이그레이션 완료',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 백엔드 · 인프라 (전제)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '프론트엔드가 핵심 역할이라, 백엔드·인프라는 AI 코딩 에이전트(Cursor, Claude Code)를 적극 활용해 아키텍처·데이터 모델·운영 정책 등 방향성 결정에 집중하고 세부 구현은 AI로 진행(AI 에이전트 활용 방식 자체는 위 "AI 코딩 에이전트 (Claude Code) 활용" 참고). 아래 항목들은 그 판단 기준과 설계 의도를 정리한 것',
            },
            {
              content:
                'NestJS + Prisma + PostgreSQL 기반 Consumer/Seller/Admin 3-way API 서버(인증·상품·주문·채팅·알림 등 25개 도메인 모듈)와 AWS(EC2, S3, CloudFront, Route53) 인프라를 구성',
            },
            {
              content: 'Yarn Berry PnP → node_modules 방식 전환',
              descriptions: [
                {
                  content:
                    'Yarn Berry의 PnP 모드로 모노레포를 시작했으나 Prisma generate가 postinstall 시점에 실패하고 IDE 타입 인식도 불안정해지는 호환성 문제를 겪어, nodeLinker를 node-modules 방식으로 전환. Workspace Hoisting으로 공통 의존성은 루트에, 앱별 고유 의존성은 각 워크스페이스에 설치되도록 정리해 개발 도구 호환성과 빌드 안정성을 확보',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 백엔드 · 인프라 (인증 · API 아키텍처)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Consumer/Seller/Admin 3-way 인증 구조 설계',
              descriptions: [
                {
                  content:
                    '세 종류의 클라이언트를 하나의 User 테이블과 role 구분이 아닌 완전히 분리된 모델(Consumer/Seller)로 설계하고, JWT에 대상(audience)과 토큰 타입(access/refresh 등)을 함께 서명해 하나의 인증 가드가 대상별·토큰 타입별 접근을 함께 검증하도록 구성',
                },
                {
                  content:
                    'JWT 페이로드는 최소 정보만 서명하고, 요청마다 계정 활성 상태·판매자 인증 상태 등을 DB에서 다시 조회하도록 판단. 완전한 무상태(stateless) 대신 약간의 조회 비용을 감수해 계정 정지·권한 변경이 토큰 만료를 기다리지 않고 즉시 반영되도록 트레이드오프를 결정',
                },
              ],
            },
            {
              content: '전역 점검 모드(Maintenance Guard) 설계',
              descriptions: [
                {
                  content:
                    '환경변수 하나로 API·WebSocket 트래픽 전체를 즉시 503으로 차단할 수 있는 전역 가드를 Rate Limit 가드보다 앞순위로 배치해, 장애·긴급 점검 시 배포 없이 즉시 서비스를 내릴 수 있는 운영 레버를 마련',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 백엔드 · 인프라 (데이터 모델링)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '영업 캘린더·상품 옵션 데이터를 JSON으로 모델링',
              descriptions: [
                {
                  content:
                    '판매자가 자유롭게 수정하는 영업 캘린더 예외(날짜별 휴무/영업시간)와 상품의 사이즈·맛 옵션을, 카디널리티가 낮고 관계형 조회 필요성이 크지 않다고 판단해 별도 테이블 대신 JSON 컬럼으로 모델링해 스키마 변경 없이 옵션 구성을 유연하게 확장',
                },
              ],
            },
            {
              content: '주문 스냅샷 패턴으로 주문 이력 불변성 확보',
              descriptions: [
                {
                  content:
                    '주문 시점의 스토어명·상품명·상품 이미지·선택한 사이즈/맛 옵션명과 가격을 주문 데이터에 그대로 복사해 저장하도록 설계해, 이후 판매자가 상품·옵션을 수정·삭제해도 과거 주문 내역이 바뀌지 않도록 함',
                },
              ],
            },
            {
              content: '자동화 배치 쿼리에 맞춘 복합 인덱스 설계',
              descriptions: [
                {
                  content:
                    '결제 대기 만료 처리, 픽업 리마인더 발송 등 주기 배치가 실제로 사용하는 조회 조건(주문 상태+마감 시각, 주문 상태+픽업일+리마인더 발송 여부)에 맞춰 복합 인덱스를 설계해 범용 인덱스 대신 쿼리 패턴 기준으로 구성',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 백엔드 · 인프라 (주문 · 예약 도메인)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '주문 상태 전이 허용 규칙(상태 머신) 설계',
              descriptions: [
                {
                  content:
                    '예약 요청부터 픽업 완료까지 10단계 주문 상태를, 단순 필드 업데이트가 아니라 "각 상태로 전이 가능한 이전 상태 목록"을 명시한 허용 규칙으로 설계(예: 노쇼 처리는 픽업 대기 상태에서만 가능). 판매자가 비즈니스 규칙에 어긋나는 상태 변경을 시도하면 API 단에서 차단',
                },
              ],
            },
            {
              content: '주문 자동화 배치 설계',
              descriptions: [
                {
                  content:
                    '결제 대기 시간 초과 시 자동 취소, 픽업 시각 도래 시 상태 전환, 픽업 24시간 전 리마인더 발송을 주기 배치로 자동화하도록 설계해 판매자·운영자의 수동 상태 관리 부담을 제거',
                },
              ],
            },
            {
              content: '영업 캘린더 변경 시 주문 충돌 방지 정책 설계 (백엔드 권한 소스)',
              descriptions: [
                {
                  content:
                    '판매자가 영업시간·휴무일을 저장하기 전에, 예약~픽업 대기 상태의 모든 주문을 대상으로 변경될 캘린더에서도 픽업 시각이 유효한지 검증하고, 충돌하는 주문이 하나라도 있으면 구조화된 에러 코드와 함께 저장 자체를 거부하도록 설계. 프론트에서는 동일 규칙으로 저장 전 미리 안내하지만, 최종 판단 권한은 백엔드에 두는 것으로 결정',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 백엔드 · 인프라 (알림 시스템)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '주문 알림 4채널 폴백 설계',
              descriptions: [
                {
                  content:
                    '주문 상태가 바뀔 때마다 인앱 알림 저장 → Socket.io 실시간 푸시(포그라운드) → FCM 푸시(백그라운드) → 카카오 알림톡(앱 미설치·미연동 사용자) 순으로 도달 채널을 계층화하도록 설계',
                },
                {
                  content:
                    '카카오 알림톡 발송 실패는 앞선 채널이 이미 성공했으므로 예외를 던지지 않고 로깅만 하도록 결정하고, 알림톡 실패 시 자동으로 유료 SMS로 대체 발송되는 옵션은 의도적으로 비활성화해 예상치 못한 과금을 방지',
                },
              ],
            },
            {
              content: 'Socket.io 채팅 게이트웨이 인증 설계',
              descriptions: [
                {
                  content:
                    'WebSocket 연결 시점에 HTTP 인증과 동일한 JWT 시크릿으로 별도의 검증 로직을 구성하고, 점검 모드 여부를 연결 수락 전에 먼저 확인하도록 구성. 사용자당 여러 기기·탭에서 동시 접속할 수 있도록 커넥션을 Map 구조로 추적',
                },
              ],
            },
            {
              content: '채팅 하이브리드 아키텍처 - WebSocket 전송 + REST 영속성',
              descriptions: [
                {
                  content:
                    '메시지 전송은 WebSocket으로 처리해 실시간성을 확보하되, 저장은 반드시 서버에서 DB 커밋 후 브로드캐스트하도록 설계해 연결이 끊겨도 메시지가 유실되지 않도록 함. 목록 조회·페이지네이션은 REST API로 분리해, 재연결 시 REST로 이전 메시지를 복구할 수 있도록 안정성과 실시간성을 함께 확보',
                },
                {
                  content:
                    '현재는 서버 인스턴스 1대로 운영 중이라 커넥션 정보를 인메모리 Map으로 관리하지만, 인스턴스를 2대 이상으로 확장하면 서버 간 WebSocket 세션 공유와 메시지 브로드캐스트가 끊기는 문제가 발생한다는 점을 미리 파악해, Redis Pub/Sub 기반 Socket.io Adapter 도입 시점과 방식을 사전에 설계 문서로 정리',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 백엔드 · 인프라 (에러 모니터링 · 로깅)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'responseId 기반 에러 추적 체계',
              descriptions: [
                {
                  content:
                    '모든 에러 응답에 고유 responseId를 부여해 클라이언트 응답과 Sentry 태그에 동일한 값을 함께 실어 보내도록 설계. 사용자 문의가 들어오면 화면에 노출된 responseId 하나만으로 Sentry 대시보드에서 해당 에러를 바로 검색·추적할 수 있도록 구성',
                },
              ],
            },
            {
              content: '민감정보 자동 마스킹 유틸(SensitiveDataUtil)',
              descriptions: [
                {
                  content:
                    '로그·Sentry로 전송되기 전에 이메일·전화번호·인증 토큰 등을 정규식 기반으로 자동 마스킹하는 유틸을 전역 예외 필터에 적용해, 에러 리포팅 과정에서 개인정보가 그대로 노출되지 않도록 구성',
                },
              ],
            },
            {
              content: '환경별 로깅 · Sentry 전송 전략 차등 적용',
              descriptions: [
                {
                  content:
                    'development는 콘솔 로깅만, staging은 콘솔 로깅+Sentry, production은 콘솔 로깅을 꺼서 성능을 최적화하고 Sentry로만 에러를 확인하도록 환경별로 동작을 분리. Sentry는 tracesSampleRate를 0으로 설정해 Transaction 추적은 비활성화하고 에러 이벤트만 전송하도록 구성해 비용을 절감',
                },
              ],
            },
          ],
        },
        {
          content: '기여 내용 - 백엔드 · 인프라 (배포 · 운영)',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '자동 롤백을 포함한 배포 파이프라인 설계',
              descriptions: [
                {
                  content:
                    'GitHub Actions 태그 트리거로 EC2에 배포하며, 마이그레이션 전 DB 백업 → PM2 프로세스 재시작 → 로컬/공인 도메인 헬스체크 순차 확인 → 실패 시 직전 백업으로 자동 롤백하는 흐름을 설계. 디스크 여유에 따라 백업 보관 개수를 조절하도록 함',
                },
                {
                  content:
                    'Prisma 마이그레이션이 배포 중 실패(P3009)하는 경우를 대비해, 실패한 마이그레이션을 자동으로 감지하고 롤백 처리한 뒤 재시도하도록 배포 스크립트에 복구 로직을 포함. SSL 인증서 만료 여부까지 배포 파이프라인에서 함께 점검하고 Discord로 결과를 통지',
                },
              ],
            },
            {
              content: 'Nginx 리버스 프록시 - WebSocket 업그레이드 · 헬스체크 분리',
              descriptions: [
                {
                  content:
                    'EC2 앞단에 Nginx를 두어 80/443 포트로 요청을 받아 백엔드로 프록시하도록 구성. Socket.IO 경로는 별도 location 블록으로 분리해 Upgrade/Connection 헤더와 장시간 타임아웃을 전용 설정하고, 헬스체크 경로는 접근 로그에서 제외해 배포 파이프라인의 상태 확인 트래픽이 로그를 채우지 않도록 함',
                },
              ],
            },
            {
              content: 'staging/production 환경 분리 및 웹 3개 서비스 CI/CD',
              descriptions: [
                {
                  content:
                    'GitHub Actions 기반 태그 트리거 CI/CD로 백엔드(EC2)·3개 웹 서비스(Vercel)의 staging/production 배포를 환경별로 분리해 자동화',
                },
                {
                  content:
                    'Vercel의 기본 Git 연동 자동배포는 비활성화하고, GitHub Actions에서 Vercel CLI(vercel pull → vercel build --prod → vercel deploy --prebuilt --prod)를 태그 푸시 시 직접 실행하는 방식으로 전환해 웹 3개 서비스의 배포 트리거를 백엔드와 동일한 태그 기반 흐름으로 통일. 모노레포 구조상 앱 서브디렉토리에서 CLI를 실행하면 rootDirectory 경로가 중복되어 빌드가 실패하는 문제를 겪어, 저장소 루트에서 실행하도록 조정',
                },
              ],
            },
            {
              content: '운영 안정성을 위한 보조 설계',
              descriptions: [
                {
                  content:
                    'Rate Limit 가드를 점검 모드 가드 다음 순서로 배치하고, 주문·좋아요·소셜 계정 연동 등 여러 단계로 이뤄지는 쓰기 작업 17개 파일(29곳)에 Prisma 트랜잭션을 적용해 부분 실패를 방지. 헬스체크 엔드포인트는 인증·인터셉터를 우회하도록 별도 등록해 배포 파이프라인의 상태 확인에 안정적으로 응답하도록 구성',
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
