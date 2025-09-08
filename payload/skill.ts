import { ISkill } from '../component/skill/ISkill';

const frontendCore: ISkill.Skill = {
  category: 'Frontend Core & Frontend Frameworks',
  items: [
    {
      title: 'HTML',
      level: 3,
    },
    {
      title: 'CSS',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'React',
      level: 3,
    },
    {
      title: 'Next.js',
      level: 2,
    },
  ],
};

const cssFrameworks: ISkill.Skill = {
  category: 'CSS Frameworks & Preprocessors',
  items: [
    {
      title: 'Styled Components',
      level: 2,
    },
    {
      title: 'Sass',
      level: 1,
    },
  ],
};

const stateManagement: ISkill.Skill = {
  category: 'State Management',
  items: [
    {
      title: 'Redux',
      level: 2,
    },
    {
      title: 'Recoil',
      level: 2,
    },
    {
      title: 'React Query',
      level: 2,
    },
  ],
};

const frontendDesignLibrary: ISkill.Skill = {
  category: 'UI Component & Documentation Tools',
  items: [
    {
      title: 'Storybook',
      level: 1,
    },
    {
      title: 'Docusaurus',
      level: 1,
    },
  ],
};

const buildTools: ISkill.Skill = {
  category: 'Build Tools & Bundlers',
  items: [
    {
      title: 'Webpack',
      level: 1,
    },
    {
      title: 'Rollup',
      level: 1,
    },
  ],
};

const testing: ISkill.Skill = {
  category: 'Testing',
  items: [
    {
      title: 'Jest',
      level: 1,
    },
  ],
};

const cicd: ISkill.Skill = {
  category: 'CI/CD & DevOps',
  items: [
    {
      title: 'GitHub Actions',
      level: 1,
    },
  ],
};

const developmentTools: ISkill.Skill = {
  category: 'Development Tools & Design Tools & Project Management Tools',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'GitHub',
    },
    {
      title: 'GitLab',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Cursor',
    },
    {
      title: 'Figma',
    },
    {
      title: 'Zeplin',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Notion',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    frontendCore,
    cssFrameworks,
    stateManagement,
    frontendDesignLibrary,
    buildTools,
    testing,
    cicd,
    developmentTools,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
