import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '약 3년간 프론트엔드 개발자로 일하며 서비스를 만들고 확장해 매출과 사용자 규모 성장에 기여해왔고, 최근에는 AI 코딩 에이전트를 업무와 개발 전반에 적극 활용해 일하는 방식을 확장해가고 있습니다.',
    '폴라리스오피스(2024.06 ~ 현재)에서는 WebAssembly 기반의 웹오피스(WebOffice) JavaScript SDK의 프론트엔드 개발을 맡아 오피스 기능과 API를 지속 개발하고 파트너사 연동 이슈를 해결했으며, 해당 SDK는 60여 개 파트너사에 납품되어 매출 483% 성장을 기록했습니다. 파트너사 문의 대응·라이선스 발급 같은 단순 반복 업무는 AI에게 절차를 알려주는 작업 지침(Claude Code 스킬) 15개로 자동화했습니다.',
    '이 SDK를 기반으로 LGU+/KT/SKT PASS Office B2C 서비스의 WebView와 웹 프론트엔드를 개발했으며, 이 중 LGU+ PASS Office 유료 서비스는 출시 8개월 만에 유료 구독자 3만 명을 확보했습니다.',
    '2026년 전사 AI 바이브코딩 공모전(임직원 160여 명 참가)에는 AI 코딩 에이전트로 기획부터 구현까지 개인으로 완성한 분실물·습득물 통합 플랫폼 ‘FindBack’으로 참가해 최우수상(1위)을 수상했습니다.',
    '회사 업무 외에도 사이드 프로젝트 ‘Picake’에서 프론트엔드 개발자 1명과 3개 웹 서비스를 함께 개발하고, AI 코딩 에이전트를 활용해 백엔드(NestJS)·AWS 인프라까지 구축했습니다.',
  ],
  sign: 'Geunwoo',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
