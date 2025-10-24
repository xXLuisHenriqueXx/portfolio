import {
  Blocks,
  BriefcaseBusiness,
  CircleEllipsis,
  Code,
  Database,
  GraduationCap,
  Monitor,
  RefreshCw,
  Settings,
} from "lucide-react";

import {
  aws,
  cplusplus,
  css,
  docker,
  express,
  fastify,
  figma,
  framermotion,
  git,
  html,
  insomnia,
  javascript,
  jest,
  mongodb,
  mysql,
  nestjs,
  nextjs,
  node,
  postgresql,
  postman,
  react,
  ruby,
  rubyonrails,
  sqlite,
  tailwindcss,
  typescript,
  vite,
} from "./SVGs";

const DiaryTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <RefreshCw className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-primary" />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-primary/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-primary">
        # Uso diário
      </p>
    </div>
  );
};

const ProjectsTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <BriefcaseBusiness className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-projects" />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-projects/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-projects">
        # Projetos
      </p>
    </div>
  );
};

const GraduationTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <GraduationCap className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-graduation" />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-graduation/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-graduation">
        # Faculdade
      </p>
    </div>
  );
};

const StudyTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5 lg:gap-x-1">
      <Blocks className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 text-study" />
      <p className="p-0.75 lg:p-1 2xl:p-2 bg-study/25 rounded-sm text-[6px] lg:text-[8px] 2xl:text-[10px] font-semibold text-study">
        # Estudando
      </p>
    </div>
  );
};

export const skillsData = [
  {
    title: "Linguagens",
    icon: Code,
    items: [
      {
        name: "HTML5",
        icon: html,
        tag: DiaryTag,
      },
      {
        name: "CSS3",
        icon: css,
        tag: DiaryTag,
      },
      {
        name: "TypeScript",
        icon: typescript,
        tag: DiaryTag,
      },
      {
        name: "JavaScript",
        icon: javascript,
        tag: DiaryTag,
      },
      {
        name: "Ruby",
        icon: ruby,
        tag: ProjectsTag,
      },
      {
        name: "C++",
        icon: cplusplus,
        tag: GraduationTag,
      },
    ],
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: [
      {
        name: "React",
        icon: react,
        tag: DiaryTag,
      },
      {
        name: "React Native",
        icon: react,
        tag: DiaryTag,
      },
      {
        name: "Next.js",
        icon: nextjs,
        tag: StudyTag,
      },
      {
        name: "ViteJS",
        icon: vite,
        tag: DiaryTag,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcss,
        tag: DiaryTag,
      },
      {
        name: "Framer Motion",
        icon: framermotion,
        tag: DiaryTag,
      },
    ],
  },
  {
    title: "Backend",
    icon: Settings,
    items: [
      {
        name: "Node.js",
        icon: node,
        tag: DiaryTag,
      },
      {
        name: "Express",
        icon: express,
        tag: DiaryTag,
      },
      {
        name: "Fastify",
        icon: fastify,
        tag: DiaryTag,
      },
      {
        name: "NestJS",
        icon: nestjs,
        tag: ProjectsTag,
      },
      {
        name: "RubyOnRails",
        icon: rubyonrails,
        tag: ProjectsTag,
      },
      {
        name: "Docker",
        icon: docker,
        tag: DiaryTag,
      },
    ],
  },
  {
    title: "Bancos de dados",
    icon: Database,
    items: [
      {
        name: "PostgreSQL",
        icon: postgresql,
        tag: DiaryTag,
      },
      {
        name: "MongoDB",
        icon: mongodb,
        tag: DiaryTag,
      },
      {
        name: "MySQL",
        icon: mysql,
        tag: GraduationTag,
      },
      {
        name: "SQLite",
        icon: sqlite,
        tag: ProjectsTag,
      },
    ],
  },
  {
    title: "Outros",
    icon: CircleEllipsis,
    items: [
      {
        name: "Git",
        icon: git,
        tag: DiaryTag,
      },
      {
        name: "AWS",
        icon: aws,
        tag: StudyTag,
      },
      {
        name: "Insomnia",
        icon: insomnia,
        tag: DiaryTag,
      },
      {
        name: "Postman",
        icon: postman,
        tag: StudyTag,
      },
      {
        name: "Figma",
        icon: figma,
        tag: DiaryTag,
      },
      {
        name: "Jest",
        icon: jest,
        tag: DiaryTag,
      },
    ],
  },
];
