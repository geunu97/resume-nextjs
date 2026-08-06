import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '약 3년간 프론트엔드 개발자로 일하며, WebAssembly 기반 SDK 개발로 매출 475% 성장에 기여하고 SDK MCP 도구로 CS 문의를 40% 줄였습니다.',
    '한류뱅크(2023.04 ~ 2023.12)에서는 JavaScript, TypeScript, React, Next.js를 기반으로 ‘팬투(Fantoo)’ 웹의 프론트엔드를 개발했습니다. 단순 기능 개발을 넘어 기획·디자인·백엔드팀과 긴밀히 협력하며 Lighthouse SEO 점수를 74점에서 86점으로 끌어올리는 등 UI/UX와 사용자 경험을 실질적으로 개선했습니다.',
    '폴라리스오피스(2024.06 ~ 현재)에서는 WebAssembly 기반의 WebOffice JavaScript SDK 개발을 담당하며 문서 편집 기능의 구조 개선과 기능 고도화를 수행했고, 해당 SDK는 60여 개 파트너사에 납품되어 매출 475% 성장을 기록했습니다. 반복적인 SDK 기술 문의 대응을 위해 IDE 연동 SDK MCP 도구를 구축해 월 CS 문의를 40% 감소시켰고, 이후 Claude Code 기반 13개 업무 자동화 스킬 체계로 문의 대응·코드 수정·라이선스 발급까지 확장했습니다. 또한 LGU+/KT/SKT PASS Office 프로젝트에서 B2C용 WebView 환경을 구축하고 Native-Web 브릿지를 구현했으며, 이 중 LGU+ 오피스도우미 유료 서비스는 출시 8개월 만에 유료 구독자 3만 명을 확보했습니다.',
    '회사 업무 외에도 사이드 프로젝트 ‘Picake’에서 프론트엔드 개발자 1명과 3개 웹 서비스를 함께 개발하고 백엔드(NestJS)·AWS 인프라 설계·구축은 전담해, 전체 커밋의 80% 이상을 작성했습니다. 개인 프로젝트에서도 AI 코딩 에이전트를 적극 활용하며, 2026년 사내 전사 AI 바이브코딩 공모전(임직원 전원 참가)에 분실물 매칭 서비스 ‘FindBack’으로 참가해 최우수상(1위)을 수상했습니다. 프론트엔드를 넘어 서비스 전체를 설계하고 완성하는 경험을 통해 지속적으로 성장하고 있습니다.',
  ],
  sign: 'Geunwoo',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
