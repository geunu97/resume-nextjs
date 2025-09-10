import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true, // 기간이 안맞음
  list: [
    {
      title: '폴라리스 오피스',
      positions: [
        {
          title: 'WebOffice JavaScript SDK / 프론트엔드 개발자',
          startedAt: '2024-06',
          descriptions: [
            '공공기관 및 기업 파트너사 대상 Polaris WebOffice SDK Web 프론트엔드 개발',
            '파트너사 리포트 이슈 대응 및 문서 편집 API 및 포맷별 기능 고도화를 통한 SDK 서비스 품질 개선',
          ],
          skillKeywords: ['WebAssembly', 'JavaScript', 'Typescript', 'React', 'Redux', 'Sass'],
        },
        {
          title: 'WebOffice SDK 기반 PASS Office 부가서비스 (KT, LGU+) / 프론트엔드 개발자',
          startedAt: '2024-06',
          descriptions: [
            'PASS App-WebView Bridge 통신 구조 설계 및 구현',
            'PASS Web 가입/해지, 공지사항 플로우 화면 개발 및 코드 개선',
          ],
          skillKeywords: ['JavaScript', 'TypeScript', 'React', 'Redux', 'Sass'],
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
            '음원 투자 플랫폼 (5~10명)',
            '상품 리스트·상세, 댓글, 마이페이지 프론트엔드 개발',
          ],
          skillKeywords: ['JavaScript', 'React', 'Next.js', 'Redux', 'Sass'],
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
            '한류 컨텐츠 기반 스타트업 (40~60명, 개발팀 15~20명)',
            'Fantoo 백오피스 프론트엔드 개발',
            'UI/UX 구현, CRUD 기능 개발, API 연동, 코드 리팩터링 및 기능 개선 담당',
          ],
          skillKeywords: [
            'JavaScript',
            'TypeScript',
            'React',
            'Next.js',
            'Redux',
            'React Query',
            'Sass',
          ],
        },
      ],
    },
  ],
};

export default experience;
