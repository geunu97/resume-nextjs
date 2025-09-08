import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Recoil',
      descriptions: [
        {
          content: '공식 문서 번역 작업',
        },
        {
          content: 'Contributor',
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
          content: '문서 내용 수정',
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
    // {
    //   title: 'ko.javascript.info',
    //   descriptions: [
    //     {
    //       content: '문서 오타 수정',
    //     },
    //     {
    //       content: 'Contributor',
    //     },
    //     {
    //       content: 'https://github.com/javascript-tutorial/ko.javascript.info',
    //       href: 'https://github.com/javascript-tutorial/ko.javascript.info',
    //     },
    //     {
    //       content: 'Github Stars: ',
    //       postImage:
    //         'https://img.shields.io/github/stars/javascript-tutorial/ko.javascript.info.svg?style=popout',
    //     },
    //   ],
    // },
  ],
};

export default openSource;
