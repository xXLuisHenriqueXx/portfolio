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
import type { IProjectsProps } from "@src/common/interfaces/Projects.interface";

export const projectsData: IProjectsProps = {
  buttons: [
    { label: "Todos", value: "" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
  ],
  projects: [
    {
      id: 1,
      title: "Expense Assistant",
      type: "mobile",
      image: EmptyImage,
      tag: InProgressTag,
      description: [
        "Aplicativo mobile desenvolvido para auxiliar no controle financeiro pessoal, permitindo registrar, editar, excluir e acompanhar despesas mensais, além de gerenciar contas bancárias de forma prática.",
        "A ferramenta oferece uma visão organizada dos gastos, facilitando o planejamento e a tomada de decisões financeiras no dia a dia.",
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
      image: EmptyImage,
      tag: CompletedTag,
      description: [
        "Site desenvolvido para apresentar disciplinas e cursos de uma instituição de ensino superior, oferecendo uma plataforma intuitiva para auxiliar potenciais alunos a explorarem e descobrirem graduações de interesse.",
        "Com interface SPA moderna e um agente de IA integrado com conhecimento completo sobre a instituição, o site facilita a busca por informações, orienta decisões e melhora a experiência do usuário na escolha do curso ideal.",
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
      image: EmptyImage,
      tag: NewTag,
      description: [
        "Site desenvolvido como projeto de estudo da ferramenta ytdl-core em conjunto com o framework Next.js, oferecendo uma interface moderna e intuitiva para download de vídeos e áudios do YouTube, com opções de personalização de qualidade e formato, proporcionando uma experiência prática e eficiente para o usuário.",
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
        "Site desenvolvido para simular uma pizzaria fictícia, oferecendo uma interface moderna e intuitiva onde o usuário pode conhecer a pizzaria, visualizar o catálogo completo de produtos (pizzas e bebidas), adicionar itens ao carrinho e finalizar a compra de forma prática.",
        "O sistema conta com validações para garantir robustez durante o processo de pedido, permite o cadastro do endereço e envia automaticamente os dados do pedido diretamente para o WhatsApp.",
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
      demo: null,
      createDate: "17/05/2024",
    },
    {
      id: 5,
      title: "PetShop Monico Frontend",
      type: "web",
      image: EmptyImage,
      tag: InProgressTag,
      description: [
        "Site desenvolvido para simular um petshop fictício, oferecendo uma interface moderna e intuitiva que permite ao usuário explorar o petshop, visualizar o catálogo completo de produtos (animais e acessórios) com sistema avançado de busca e filtros, acompanhar campanhas de adoção, adicionar itens ao carrinho e finalizar a compra de forma prática e segura.",
        "O site inclui funcionalidades de navegação fluida, organização eficiente de produtos e atenção à experiência do usuário, tornando a interação mais agradável e informativa.",
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
