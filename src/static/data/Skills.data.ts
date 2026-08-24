import type { ComponentType, FC } from "react";
import {
  Aws,
  Cplusplus,
  Css,
  Docker,
  Express,
  Fastify,
  Figma,
  Framer,
  Git,
  Html5,
  Insomnia,
  Javascript,
  Jest,
  Mongodb,
  Mysql,
  Nestjs,
  Nextdotjs,
  Nodedotjs,
  Postgresql,
  Postman,
  Prisma,
  React,
  Redux,
  Ruby,
  RubyOnRails,
  Sqlite,
  TailwindCss,
  Typescript,
  Vite,
  type SvgIconProps,
} from "@thesvg/react";
import {
  CircleEllipsis,
  Code,
  Database,
  Monitor,
  Settings,
  type LucideIcon,
} from "lucide-react";

import {
  DiaryTag,
  GraduationTag,
  ProjectsTag,
  StudyTag,
} from "@src/components/Skills/Tags";

export interface SkillItem {
  name: string;
  icon: ComponentType<SvgIconProps & { variant: any }>;
  tag: FC;
}

export interface SkillsData {
  title: string;
  icon: LucideIcon;
  items: SkillItem[];
}

export const SKILLS_DATA: SkillsData[] = [
  {
    title: "skills.skillsTitles.0",
    icon: Code,
    items: [
      {
        name: "HTML5",
        icon: Html5,
        tag: DiaryTag,
      },
      {
        name: "CSS3",
        icon: Css,
        tag: DiaryTag,
      },
      {
        name: "TypeScript",
        icon: Typescript,
        tag: DiaryTag,
      },
      {
        name: "JavaScript",
        icon: Javascript,
        tag: DiaryTag,
      },
      {
        name: "Ruby",
        icon: Ruby,
        tag: ProjectsTag,
      },
      {
        name: "C++",
        icon: Cplusplus,
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
        icon: React,
        tag: DiaryTag,
      },
      {
        name: "React Native",
        icon: React,
        tag: DiaryTag,
      },
      {
        name: "Next.js",
        icon: Nextdotjs,
        tag: StudyTag,
      },
      {
        name: "Vite",
        icon: Vite,
        tag: DiaryTag,
      },
      {
        name: "TailwindCSS",
        icon: TailwindCss,
        tag: DiaryTag,
      },
      {
        name: "Tailwind Variants",
        icon: TailwindCss,
        tag: DiaryTag,
      },
      {
        name: "Redux",
        icon: Redux,
        tag: ProjectsTag,
      },
      {
        name: "Framer",
        icon: Framer,
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
        icon: Nodedotjs,
        tag: DiaryTag,
      },
      {
        name: "Express",
        icon: Express,
        tag: DiaryTag,
      },
      {
        name: "Fastify",
        icon: Fastify,
        tag: DiaryTag,
      },
      {
        name: "NestJS",
        icon: Nestjs,
        tag: ProjectsTag,
      },
      {
        name: "RubyOnRails",
        icon: RubyOnRails,
        tag: ProjectsTag,
      },
      {
        name: "PrismaORM",
        icon: Prisma,
        tag: ProjectsTag,
      },
      {
        name: "Jest",
        icon: Jest,
        tag: DiaryTag,
      },
      {
        name: "Docker",
        icon: Docker,
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
        icon: Postgresql,
        tag: DiaryTag,
      },
      {
        name: "MongoDB",
        icon: Mongodb,
        tag: DiaryTag,
      },
      {
        name: "MySQL",
        icon: Mysql,
        tag: GraduationTag,
      },
      {
        name: "SQLite",
        icon: Sqlite,
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
        icon: Git,
        tag: DiaryTag,
      },
      {
        name: "AWS",
        icon: Aws,
        tag: StudyTag,
      },
      {
        name: "Insomnia",
        icon: Insomnia,
        tag: DiaryTag,
      },
      {
        name: "Postman",
        icon: Postman,
        tag: StudyTag,
      },
      {
        name: "Figma",
        icon: Figma,
        tag: DiaryTag,
      },
    ],
  },
];
