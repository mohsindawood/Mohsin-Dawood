import { SiExpress, SiPrisma, SiNextdotjs } from 'react-icons/si';
import { LuFramer } from 'react-icons/lu';

// Languages
import HtmlSvg from '../../../public/icons/html.svg';
import CsssSvg from '../../../public/icons/css.svg';
import SassSvg from '../../../public/icons/sass.svg';
import JavascriptSvg from '../../../public/icons/javascript.svg';
import TypescriptSvg from '../../../public/icons/typescript.svg';

// Libraries
import ReactjsSvg from '../../../public/icons/reactjs.svg';
import ReactRouterSvg from '../../../public/icons/react-router.png';
import ReduxSvg from '../../../public/icons/redux.svg';
import TailwindcssSvg from '../../../public/icons/tailwindcss.svg';
import MuiSvg from '../../../public/icons/mui.svg';
import ViteSvg from '../../../public/icons/vite.svg';

// Backend
import NodejsSvg from '../../../public/icons/nodejs.svg';

// Database and ORMS
import MongoDBSvg from '../../../public/icons/mongodb.svg';
import PostgressSvg from '../../../public/icons/postgresql.svg';

// Tools and Tech
import GitSvg from '../../../public/icons/git.svg';
import DockerSvg from '../../../public/icons/docker.svg';
import AwsSvg from '../../../public/icons/aws.svg';
import PostmanSvg from '../../../public/icons/postman.svg';

export const SKILLS_DATA = [
  {
    sectionName: 'Languages',
    skills: [
      {
        name: 'HTML',
        icon: HtmlSvg,
      },
      {
        name: 'CSS',
        icon: CsssSvg,
      },
      {
        name: 'SASS',
        icon: SassSvg,
      },
      {
        name: 'Javascript',
        icon: JavascriptSvg,
      },
      {
        name: 'Typescript',
        icon: TypescriptSvg,
      },
    ],
  },
  {
    sectionName: 'Libraries and Frameworks',
    skills: [
      {
        name: 'Reactjs',
        icon: ReactjsSvg,
      },
      {
        name: 'Nextjs',
        icon: <SiNextdotjs size={32} />,
        isIcon: true,
      },
      {
        name: 'React Router Dom',
        icon: ReactRouterSvg,
      },
      {
        name: 'Redux',
        icon: ReduxSvg,
      },
      {
        name: 'Tailwindcss',
        icon: TailwindcssSvg,
      },
      {
        name: 'MUI',
        icon: MuiSvg,
      },
      {
        name: 'Framer motion',
        icon: <LuFramer size={32} />,
        isIcon: true,
      },
      {
        name: 'Vite',
        icon: ViteSvg,
      },
    ],
  },
  {
    sectionName: 'Backend',
    skills: [
      {
        name: 'Nodejs',
        icon: NodejsSvg,
      },
      {
        name: 'Express',
        icon: <SiExpress size={32} />,
        isIcon: true,
      },
    ],
  },
  {
    sectionName: 'Databases and ORMs',
    skills: [
      {
        name: 'MongoDB',
        icon: MongoDBSvg,
      },
      {
        name: 'Postgress',
        icon: PostgressSvg,
      },
      {
        name: 'Prisma',
        icon: <SiPrisma size={32} />,
        isIcon: true,
      },
    ],
  },
  {
    sectionName: 'Tools and Technologies',
    skills: [
      {
        name: 'Git',
        icon: GitSvg,
      },
      {
        name: 'Docker',
        icon: DockerSvg,
      },
      {
        name: 'AWS',
        icon: AwsSvg,
      },
      {
        name: 'Postman',
        icon: PostmanSvg,
      },
    ],
  },
];
