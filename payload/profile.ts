import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박근우 (Park Geunwoo)',
  },
  contact: [
    {
      title: 'olo90632951@gmail.com',
      link: 'mailto:olo90632951@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-9001-1211',
      icon: faPhone,
      // badge: true,
    },
    {
      link: 'https://github.com/geunu97',
      icon: faGithub,
    },
  ],
};

export default profile;
