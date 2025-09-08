import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Meta Recoil',
      descriptions: [
        {
          content: '공식 문서 번역 작업',
        },
        {
          content: 'Contributor',
        },
        {
          content:
            'Recoil 공식 문서를 읽다가 번역되지 않은 페이지를 발견했습니다. GitHub 저장소를 살펴보았더니, 원본 문서 경로에는 useRecoilTransaction_UNSTABLE.md 파일이 있었지만, 한국어 문서 경로에는 해당 파일이 없었던 것이 원인이였습니다. 이를 발견한 계기로, 해당 파일을 새로 만들어 문서를 번역했습니다.',
        },
        {
          content: 'https://github.com/facebookexperimental/Recoil/pull/2002',
          href: 'https://github.com/facebookexperimental/Recoil/pull/2002',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/facebookexperimental/Recoil.svg?style=popout',
        },
      ],
    },
    {
      title: 'Interview_Question_for_Beginner',
      descriptions: [
        {
          content: '내용 수정',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/jbee37142/Interview_Question_for_Beginner/pull/193',
          href: 'https://github.com/jbee37142/Interview_Question_for_Beginner/pull/193',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/jbee37142/Interview_Question_for_Beginner.svg?style=popout',
        },
      ],
    },
    {
      title: 'ko.javascript.info',
      descriptions: [
        {
          content: '오타 수정',
        },
        {
          content: 'Contributor',
        },
        {
          content: 'https://github.com/javascript-tutorial/ko.javascript.info',
          href: 'https://github.com/javascript-tutorial/ko.javascript.info',
        },
        {
          content: 'Github Stars: ',
          postImage:
            'https://img.shields.io/github/stars/javascript-tutorial/ko.javascript.info.svg?style=popout',
        },
      ],
    },
  ],
};

export default openSource;
