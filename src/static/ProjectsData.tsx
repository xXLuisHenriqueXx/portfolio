import { CheckCircle2, Loader } from "lucide-react";

import EmptyImage from "@src/assets/empty-image.jpg";
import {
  expo,
  figma,
  nextjs,
  react,
  sqlite,
  tailwindcss,
  typescript,
  vite,
} from "./SVGs";

const InProgressTag = () => (
  <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-primary/70 rounded-lg z-10 shadow-sm">
    <Loader className="w-3 h-3" />
    <p className="text-[10px] font-medium">Em andamento</p>
  </div>
);

const CompletedTag = () => (
  <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-projects/70 rounded-lg z-10 shadow-sm">
    <CheckCircle2 className="w-3 h-3" />
    <p className="text-[10px] font-medium">Concluído</p>
  </div>
);

const NewTag = () => (
  <div className="absolute top-4 left-4 flex flex-row items-center gap-x-2 p-2 bg-graduation/70 rounded-lg z-10 shadow-sm">
    <CheckCircle2 className="w-3 h-3" />
    <p className="text-[10px] font-medium">Novo</p>
  </div>
);

export const projectsData = [
  {
    id: 1,
    title: "ExpenseAssistant",
    type: "mobile",
    image: EmptyImage,
    link: "https://github.com/xXLuisHenriqueXx/expense_assistant",
    tag: InProgressTag,
    description:
      "Aplicativo para dispositivos móveis que ajuda a gerenciar despesas mensais. Permitindo adicionar, editar, excluir e visualizar despesas e contas bancárias, afim de facilitar o controle financeiro.",
    technologies: [
      {
        name: "React Native",
        icon: react,
      },
      {
        name: "Expo",
        icon: expo,
      },
      {
        name: "Typescript",
        icon: typescript,
      },
      {
        name: "SQLite",
        icon: sqlite,
      },
      {
        name: "Figma",
        icon: figma,
      },
    ],
    code: "https://github.com/xXLuisHenriqueXx/expense_assistant",
    demo: null,
    createDate: "31/01/2025",
  },
  {
    id: 2,
    title: "Descubra o CT",
    type: "web",
    image: EmptyImage,
    link: "https://github.com/xXLuisHenriqueXx/descubra",
    tag: CompletedTag,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam recusandae quibusdam sint vitae similique culpa reiciendis facere sequi, perferendis vero voluptatum optio? Autem laborum laboriosam voluptate placeat, nobis iusto.",
    technologies: [
      {
        name: "Vite",
        icon: vite,
      },
      {
        name: "React",
        icon: react,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcss,
      },
      {
        name: "Typescript",
        icon: typescript,
      },
      {
        name: "Figma",
        icon: figma,
      },
    ],
    code: null,
    demo: null,
    createDate: "2/09/2025",
  },
  {
    id: 3,
    title: "SaveTube",
    type: "web",
    image: EmptyImage,
    link: "https://github.com/xXLuisHenriqueXx/savetube",
    tag: NewTag,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam recusandae quibusdam sint vitae similique culpa reiciendis facere sequi, perferendis vero voluptatum optio? Autem laborum laboriosam voluptate placeat, nobis iusto.",
    technologies: [
      {
        name: "Next.js",
        icon: nextjs,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcss,
      },
      {
        name: "Typescript",
        icon: typescript,
      },
    ],
    code: null,
    demo: null,
    createDate: "17/05/2024",
  },
  {
    id: 4,
    title: "DevPizza",
    type: "web",
    image: EmptyImage,
    link: "https://github.com/xXLuisHenriqueXx/pizzaria_landing_page",
    tag: CompletedTag,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam recusandae quibusdam sint vitae similique culpa reiciendis facere sequi, perferendis vero voluptatum optio? Autem laborum laboriosam voluptate placeat, nobis iusto.",
    technologies: [
      {
        name: "Vite",
        icon: vite,
      },
      {
        name: "React",
        icon: react,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcss,
      },
      {
        name: "Typescript",
        icon: typescript,
      },
      {
        name: "Figma",
        icon: figma,
      },
    ],
    code: null,
    demo: null,
    createDate: "17/05/2024",
  },
  {
    id: 5,
    title: "PetShop Monico",
    type: "web",
    image: EmptyImage,
    link: "https://github.com/xXLuisHenriqueXx/petshop_frontend",
    tag: InProgressTag,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam recusandae quibusdam sint vitae similique culpa reiciendis facere sequi, perferendis vero voluptatum optio? Autem laborum laboriosam voluptate placeat, nobis iusto.",
    technologies: [
      {
        name: "Next.js",
        icon: nextjs,
      },
      {
        name: "TailwindCSS",
        icon: tailwindcss,
      },
      {
        name: "Typescript",
        icon: typescript,
      },
    ],
    code: null,
    demo: null,
    createDate: "18/07/2025",
  },
];
