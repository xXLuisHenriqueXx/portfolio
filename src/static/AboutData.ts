import type { IAboutProps } from "@src/common/interfaces/About.interface";
import {
  aws,
  docker,
  express,
  fastify,
  figma,
  git,
  jest,
  mongodb,
  nestjs,
  nextjs,
  node,
  postgresql,
  prisma,
  react,
  rubyonrails,
  styledComponents,
  tailwindcss,
  typescript,
  zustand,
} from "./SVGs";

import AWS from "@src/assets/aws.png";

export const aboutData: IAboutProps = {
  paragraphs: [
    "Olá! Eu sou Luis Henrique Cardoso, Desenvolvedor Full Stack e Mobile, apaixonado por criar soluções web e mobile robustas, escaláveis e centradas na melhor experiência do usuário. Meu trabalho abrange todo o ciclo de desenvolvimento, desde a concepção visual até a implementação de interfaces modernas, responsivas e bem estruturadas.",
    "No frontend, atuo com React, React Native, Next.js e TypeScript, utilizando TailwindCSS, Tailwind Variants e Styled-Components para garantir consistência visual e interfaces elegantes. Para gerenciamento de estado e performance, emprego Zustand, criando aplicações interativas e eficientes.",
    "No backend, desenvolvo com Node.js, Express, Fastify, NestJS e Ruby on Rails, aplicando Prisma ORM para um mapeamento seguro e eficiente do banco de dados. Todos os projetos são containerizados com Docker, garantindo portabilidade e ambientes bem configurados. Para testes, utilizo Jest, garantindo qualidade e confiabilidade no código.",
    "Trabalho com bancos de dados PostgreSQL e MongoDB, aplicando melhores práticas de modelagem e performance. O versionamento de código é feito com Git, enquanto o design de interfaces é planejado no Figma. Toda a infraestrutura em nuvem é gerenciada com AWS, permitindo escalabilidade e otimização de custos.",
    "Com esse conjunto de tecnologias, consigo entregar aplicações performáticas, escaláveis e de alta qualidade, sempre priorizando a experiência do usuário, boas práticas de desenvolvimento e soluções inovadoras.",
  ],
  ticket: [
    {
      title: "2+",
      subtitle: "anos de experiência",
    },
    {
      title: "16+",
      subtitle: "tecnologias dominadas",
    },
  ],
  tools: [
    {
      name: "React",
      icon: react,
    },
    {
      name: "React Native",
      icon: react,
    },
    {
      name: "Next.js",
      icon: nextjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "TailwindCSS",
      icon: tailwindcss,
    },
    {
      name: "Tailwind Variants",
      icon: tailwindcss,
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
      name: "Node.js",
      icon: node,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Fastify",
      icon: fastify,
    },
    {
      name: "NestJS",
      icon: nestjs,
    },
    {
      name: "RubyOnRails",
      icon: rubyonrails,
    },
    {
      name: "PrismaORM",
      icon: prisma,
    },
    {
      name: "Jest",
      icon: jest,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "AWS",
      icon: aws,
    },
  ],
  certificates: [
    {
      image: AWS,
      name: "AWS Certified Cloud Practitioner - CFL-02",
      duration: "09/06/2025 - 09/06/2028",
      description:
        "Certificação que adquiri durante meu estágio na Compass UOL.",
    },
  ],
};
