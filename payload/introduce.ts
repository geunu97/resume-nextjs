import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '약 3년의 프론트엔드 개발 경력을 보유하고 있으며, 서비스 UI/UX 개선과 웹 기반 복잡 기능 구현 경험을 쌓아왔습니다.',
    '한류뱅크(2023.04 ~ 2023.12)에서는 JavaScript, TypeScript, React, Next.js를 기반으로 ‘팬투(Fantoo)’ 웹의 프론트엔드를 개발했습니다. 단순 기능 개발을 넘어 기획·디자인·백엔드팀과 긴밀히 협력하며 UI/UX 개선과 안정적인 사용자 경험 제공에 기여했습니다.',
    '폴라리스오피스(2024.06 ~ 현재)에서는 WebAssembly 기반의 WebOffice JavaScript SDK 개발을 담당하며 문서 편집 기능의 구조 개선과 기능 고도화를 수행했고, 해당 SDK는 60여 개 파트너사에 납품되어 매출 475% 성장을 기록했습니다. 또한 LGU+/KT/SKT PASS Office 프로젝트에서 B2C용 WebView 환경을 구축하고 Native-Web 브릿지를 구현했으며, 해당 서비스는 출시 8개월 만에 유료 구독자 3만 명을 확보했습니다.',
    '회사 업무 외에도 사이드 프로젝트 ‘Picake’를 통해 프론트엔드 3개 웹 서비스는 물론 백엔드(NestJS)와 AWS 인프라 설계까지 직접 맡아, 전체 1,000여 커밋 중 80% 이상을 작성했습니다. AI 코딩 에이전트를 적극 활용한 개발 생산성 향상에도 관심이 많으며, 프론트엔드를 넘어 서비스 전체를 설계하고 완성하는 경험을 통해 지속적으로 성장하고 있습니다.',
  ],
  sign: 'Geunwoo',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
