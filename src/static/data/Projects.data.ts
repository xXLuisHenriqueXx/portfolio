import type { ComponentType, FC } from "react";
import {
  Expo,
  Figma,
  Nextdotjs,
  Nodedotjs,
  Python,
  React,
  Sqlite,
  TailwindCss,
  Typescript,
  Vite,
  type SvgIconProps,
} from "@thesvg/react";
import {
  CompletedTag,
  InProgressTag,
  NewTag,
} from "@src/components/Projects/Tags";

import DescubraOCT from "@src/assets/descubraoct.png";
import SaveTube from "@src/assets/savetube.png";
import PetShopMonito from "@src/assets/petshop_monito.png";

export interface ProjectButton {
  label: string;
  value: string;
}

export interface ProjectTechnology {
  name: string;
  icon: ComponentType<SvgIconProps & { variant: any }>;
}

export interface ProjectItem {
  id: number;
  title: string;
  type: string;
  image: string | null;
  tag: FC;
  description: string[];
  technologies: ProjectTechnology[];
  code: string | null;
  demo: string | null;
  createDate: string;
}

interface ProjectsData {
  buttons: ProjectButton[];
  projects: ProjectItem[];
}

export const PROJECTS_DATA: ProjectsData = {
  buttons: [
    { label: "projects.filter.all", value: "" },
    { label: "projects.filter.web", value: "web" },
    { label: "projects.filter.mobile", value: "mobile" },
  ],
  projects: [
    {
      id: 1,
      title: "Expense Assistant",
      type: "mobile",
      image: null,
      tag: InProgressTag,
      description: [
        "projects.expense-assistant.description.0",
        "projects.expense-assistant.description.1",
      ],
      technologies: [
        {
          name: "React Native",
          icon: React,
        },
        {
          name: "Expo",
          icon: Expo,
        },
        {
          name: "Typescript",
          icon: Typescript,
        },
        {
          name: "TailwindCSS",
          icon: TailwindCss,
        },
        {
          name: "SQLite",
          icon: Sqlite,
        },
        {
          name: "Figma",
          icon: Figma,
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
      image: DescubraOCT,
      tag: CompletedTag,
      description: [
        "projects.descubra-ct.description.0",
        "projects.descubra-ct.description.1",
      ],
      technologies: [
        {
          name: "Vite",
          icon: Vite,
        },
        {
          name: "React",
          icon: React,
        },
        {
          name: "Typescript",
          icon: Typescript,
        },
        {
          name: "TailwindCSS",
          icon: TailwindCss,
        },
        {
          name: "Figma",
          icon: Figma,
        },
        {
          name: "Python",
          icon: Python,
        },
      ],
      code: "https://github.com/xXLuisHenriqueXx/descubra/tree/feat/integration",
      demo: null,
      createDate: "02/09/2025",
    },
    {
      id: 3,
      title: "SaveTube",
      type: "web",
      image: SaveTube,
      tag: NewTag,
      description: ["projects.save-tube.description.0"],
      technologies: [
        {
          name: "Next.js",
          icon: Nextdotjs,
        },
        {
          name: "TailwindCSS",
          icon: TailwindCss,
        },
        {
          name: "Typescript",
          icon: Typescript,
        },
        {
          name: "Node.js",
          icon: Nodedotjs,
        },
      ],
      code: "https://github.com/xXLuisHenriqueXx/savetube",
      demo: null,
      createDate: "17/05/2024",
    },
    {
      id: 4,
      title: "Dev Pizza",
      type: "web",
      image: null,
      tag: CompletedTag,
      description: [
        "projects.dev-pizza.description.0",
        "projects.dev-pizza.description.1",
      ],
      technologies: [
        {
          name: "Vite",
          icon: Vite,
        },
        {
          name: "React",
          icon: React,
        },
        {
          name: "TailwindCSS",
          icon: TailwindCss,
        },
        {
          name: "Typescript",
          icon: Typescript,
        },
        {
          name: "Figma",
          icon: Figma,
        },
      ],
      code: "https://github.com/xXLuisHenriqueXx/pizzaria_landing_page",
      demo: "https://xxluishenriquexx.github.io/pizzaria_landing_page/",
      createDate: "17/05/2024",
    },
    {
      id: 5,
      title: "PetShop Monico Frontend",
      type: "web",
      image: PetShopMonito,
      tag: InProgressTag,
      description: [
        "projects.petshop-monito.description.0",
        "projects.petshop-monito.description.1",
      ],
      technologies: [
        {
          name: "Next.js",
          icon: Nextdotjs,
        },
        {
          name: "TailwindCSS",
          icon: TailwindCss,
        },
        {
          name: "Typescript",
          icon: Typescript,
        },
      ],
      code: "https://github.com/xXLuisHenriqueXx/petshop_frontend",
      demo: null,
      createDate: "18/07/2025",
    },
  ],
};
