import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '약 3년간 프론트엔드 개발자로 일하며 서비스를 만들고 확장해 매출과 사용자 규모로 성과를 증명해왔고, 최근에는 AI 코딩 에이전트를 업무와 개발 전반에 적극 활용해 일하는 방식을 확장해가고 있습니다.',
    '폴라리스오피스(2024.06 ~ 현재)에서는 WebAssembly 기반의 WebOffice JavaScript SDK를 개발해 문서 편집 기능의 구조를 개선하고 고도화했으며, 해당 SDK는 60여 개 파트너사에 납품되어 매출 475% 성장을 기록했습니다. 반복적인 SDK 기술 문의에 대응하기 위해 SDK MCP 도구를 구축했고, 이후 Claude Code 기반 13개 업무 자동화 스킬 체계로 문의 대응·코드 수정·라이선스 발급까지 확장했습니다.',
    '이 SDK를 기반으로 LGU+/KT/SKT PASS Office B2C 서비스의 WebView 환경과 Native-Web 브릿지를 구축했으며, 이 중 LGU+ PASS Office 유료 서비스는 출시 8개월 만에 유료 구독자 3만 명을 확보했습니다.',
    '2026년 진행된 전사 AI 바이브코딩 공모전(임직원 전원 160여 명 참가)에는 AI 코딩 에이전트로 약 1주일 만에 완성한 분실물 매칭 서비스 ‘FindBack’으로 참가해 최우수상(1위)을 수상했습니다.',
    '회사 업무 외에도 사이드 프로젝트 ‘Picake’에서 프론트엔드 개발자 1명과 3개 웹 서비스를 함께 개발하고, AI 코딩 에이전트를 활용해 방향성은 직접 판단하며 백엔드(NestJS)·AWS 인프라 세부 구현까지 전담해 전체 커밋의 80% 이상을 작성했습니다.',
  ],
  sign: 'Geunwoo',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
