import {
  CircleEllipsis,
  Code,
  Database,
  Monitor,
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
  prisma,
  react,
  ruby,
  rubyonrails,
  sqlite,
  styledComponents,
  tailwindcss,
  typescript,
  vite,
  zustand,
} from "./SVGs";
import {
  DiaryTag,
  GraduationTag,
  ProjectsTag,
  StudyTag,
} from "@src/components/Skills/Tags";

import type { ISkillsProps } from "@src/common/interfaces/Skills.interface";

export const skillsData: ISkillsProps[] = [
  {
    title: "skills.skillsTitles.0",
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
    title: "skills.skillsTitles.1",
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
        name: "Tailwind Variants",
        icon: tailwindcss,
        tag: DiaryTag,
      },
      {
        name: "Styled-Components",
        icon: styledComponents,
        tag: DiaryTag,
      },
      {
        name: "Zustand",
        icon: zustand,
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
    title: "skills.skillsTitles.2",
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
        name: "PrismaORM",
        icon: prisma,
        tag: ProjectsTag,
      },
      {
        name: "Jest",
        icon: jest,
        tag: DiaryTag,
      },
      {
        name: "Docker",
        icon: docker,
        tag: DiaryTag,
      },
    ],
  },
  {
    title: "skills.skillsTitles.3",
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
    title: "skills.skillsTitles.4",
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
    ],
  },
];
