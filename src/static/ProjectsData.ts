import {
  expo,
  figma,
  nextjs,
  node,
  python,
  react,
  sqlite,
  styledComponents,
  tailwindcss,
  typescript,
  vite,
  zustand,
} from "./SVGs";
import {
  CompletedTag,
  InProgressTag,
  NewTag,
} from "@src/components/Projects/Tags";

import EmptyImage from "@src/assets/empty-image.jpg";
import DescubraOCT from "@src/assets/descubraoct.png";
import SaveTube from "@src/assets/savetube.png";
import PetShopMonito from "@src/assets/petshop_monito.png";
import type { IProjectsProps } from "@src/common/interfaces/Projects.interface";

export const projectsData: IProjectsProps = {
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
      image: EmptyImage,
      tag: InProgressTag,
      description: [
        "projects.expense-assistant.description.0",
        "projects.expense-assistant.description.1",
      ],
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
          name: "Styled-Components",
          icon: styledComponents,
        },
        {
          name: "Zustand",
          icon: zustand,
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
      image: DescubraOCT,
      tag: CompletedTag,
      description: [
        "projects.descubra-ct.description.0",
        "projects.descubra-ct.description.1",
      ],
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
          name: "Typescript",
          icon: typescript,
        },
        {
          name: "TailwindCSS",
          icon: tailwindcss,
        },
        {
          name: "Figma",
          icon: figma,
        },
        {
          name: "Python",
          icon: python,
        },
      ],
      code: "https://github.com/xXLuisHenriqueXx/descubra/tree/feat/integration",
      demo: null,
      createDate: "2/09/2025",
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
        {
          name: "Node.js",
          icon: node,
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
      image: EmptyImage,
      tag: CompletedTag,
      description: [
        "projects.dev-pizza.description.0",
        "projects.dev-pizza.description.1",
      ],
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
      code: "https://github.com/xXLuisHenriqueXx/petshop_frontend",
      demo: null,
      createDate: "18/07/2025",
    },
  ],
};
