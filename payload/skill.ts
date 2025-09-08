import { ISkill } from '../component/skill/ISkill';

const frontend: ISkill.Skill = {
  category: 'Frontend Fundamentals',
  items: [
    {
      title: 'HTML',
    },
    {
      title: 'CSS',
    },
    {
      title: 'Webpack',
    },
    {
      title: 'Javascript',
    },
    {
      title: 'Typescript',
    },
  ],
};

const cssFrameworks: ISkill.Skill = {
  category: 'CSS Frameworks/CSS Preprocessors',
  items: [
    {
      title: 'Bootstrap',
    },
    {
      title: 'Tailwind CSS',
    },
    {
      title: 'Sass',
    },
    {
      title: 'Styled-Component',
    },
    {
      title: 'Storybook',
    },
  ],
};

const javascriptFrameworks: ISkill.Skill = {
  category: 'Javascript Frameworks/Libraries',
  items: [
    {
      title: 'React',
    },
    {
      title: 'Next.js',
    },
  ],
};

const packageManagers: ISkill.Skill = {
  category: 'Package Managers',
  items: [
    {
      title: 'npm',
    },
    {
      title: 'yarn',
    },
    {
      title: 'pnpm',
    },
  ],
};

const stateManagementLibraries: ISkill.Skill = {
  category: 'State Management Libraries',
  items: [
    {
      title: 'Redux',
    },
    {
      title: 'Recoil',
    },
    {
      title: 'React-Query',
    },
  ],
};

const ciCd: ISkill.Skill = {
  category: 'CI/CD',
  items: [
    {
      title: 'GitHub Actions',
    },
  ],
};

const jest: ISkill.Skill = {
  category: 'Testing',
  items: [
    {
      title: 'Jest',
    },
  ],
};

const developmentTools: ISkill.Skill = {
  category: 'Development Tools',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'VSCode',
    },
    {
      title: 'Webpack',
    },
    {
      title: 'Rollup',
    },
  ],
};

const communicationTools: ISkill.Skill = {
  category: 'Project Management',
  items: [
    {
      title: 'Dooray',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Microsoft Teams',
    },
    {
      title: 'Microsoft Outlook',
    },
    {
      title: 'Microsoft Office365',
    },
  ],
};

// 자신 없으면 과감히 빼도 좋다!
const skill: ISkill.Payload = {
  disable: false,
  skills: [
    frontend,
    jest,
    cssFrameworks,
    javascriptFrameworks,
    packageManagers,
    stateManagementLibraries,
    ciCd,
    developmentTools,
    communicationTools,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
