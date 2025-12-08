import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '약 2년의 프론트엔드 개발 경력을 보유하고 있으며, 서비스 UI/UX 개선과 웹 기반 복잡 기능 구현 경험을 쌓아왔습니다.',
    '한류뱅크(2023.04 ~ 2023.12)에서는 JavaScript, TypeScript, React, Next.js를 기반으로 ‘팬투(Fantoo)’ 앱의 프론트엔드를 개발했습니다. 단순 기능 개발을 넘어 기획·디자인·백엔드팀과 긴밀히 협력하며 UI/UX 개선과 안정적인 사용자 경험 제공에 기여했습니다.',
    '폴라리스오피스(2024.06 ~ 현재)에서는 WebAssembly 기반의 WebOffice JavaScript SDK 개발을 담당하며 문서 편집 기능의 구조 개선과 기능 고도화를 수행했습니다. 또한 LGU+/KT PASS Office 프로젝트에서 B2C용 WebView 환경을 구축하고, Native-Web 브릿지를 구현하며 크로스 플랫폼 사용자 경험을 최적화했습니다.',
    '프로젝트를 수행하면서 기술적 완성도뿐 아니라 협업, 사용자 요구 분석, 비즈니스 적합성을 함께 고려하는 개발 방식을 지향해 왔습니다. 새로운 기술을 탐구하고 적용하는 데 적극적이며, 확장성과 유지보수성을 고려한 구조적 접근을 통해 지속적인 성장을 목표로 하고 있습니다.',
  ],
  sign: 'Geunwoo',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
