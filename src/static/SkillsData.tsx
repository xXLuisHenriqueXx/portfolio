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

const DiaryTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5">
      <RefreshCw className="w-2 h-2 text-primary" />
      <p className="p-0.75 bg-primary/25 rounded-sm text-[6px] font-semibold text-primary">
        # Uso diário
      </p>
    </div>
  );
};

const ProjectsTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5">
      <BriefcaseBusiness className="w-2 h-2 text-projects" />
      <p className="p-0.75 bg-projects/25 rounded-sm text-[6px] font-semibold text-projects">
        # Projetos
      </p>
    </div>
  );
};

const GraduationTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5">
      <GraduationCap className="w-2 h-2 text-graduation" />
      <p className="p-0.75 bg-graduation/25 rounded-sm text-[6px] font-semibold text-graduation">
        # Faculdade
      </p>
    </div>
  );
};

const StudyTag = () => {
  return (
    <div className="flex flex-row items-center gap-x-0.5">
      <Blocks className="w-2 h-2 text-study" />
      <p className="p-0.75 bg-study/25 rounded-sm text-[6px] font-semibold text-study">
        # Estudando
      </p>
    </div>
  );
};

export const skillsData = [
  {
    title: "Linguagens de programação",
    icon: Code,
    items: [
      {
        name: "HTML5",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
        tag: DiaryTag,
      },
      {
        name: "CSS3",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
        tag: DiaryTag,
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
        tag: DiaryTag,
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        tag: DiaryTag,
      },
      {
        name: "Ruby",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg",
        tag: ProjectsTag,
      },
      {
        name: "C++",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg",
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
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        tag: DiaryTag,
      },
      {
        name: "React Native",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        tag: DiaryTag,
      },
      {
        name: "ViteJS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        tag: DiaryTag,
      },
      {
        name: "TailwindCSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        tag: DiaryTag,
      },
      {
        name: "Framer Motion",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
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
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg",
        tag: DiaryTag,
      },
      {
        name: "Express",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        tag: DiaryTag,
      },
      {
        name: "Fastify",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain.svg",
        tag: DiaryTag,
      },
      {
        name: "NestJS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
        tag: ProjectsTag,
      },
      {
        name: "RubyOnRails",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain.svg",
        tag: ProjectsTag,
      },
      {
        name: "Docker",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg",
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
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
        tag: DiaryTag,
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg",
        tag: DiaryTag,
      },
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        tag: GraduationTag,
      },
      {
        name: "SQLite",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
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
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        tag: DiaryTag,
      },
      {
        name: "AWS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        tag: StudyTag,
      },
      {
        name: "Insomnia",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg",
        tag: DiaryTag,
      },
      {
        name: "Postman",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg",
        tag: StudyTag,
      },
      {
        name: "Figma",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        tag: DiaryTag,
      },
      {
        name: "Jest",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
        tag: DiaryTag,
      },
    ],
  },
];
