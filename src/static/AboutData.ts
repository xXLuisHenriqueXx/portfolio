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
    "about.paragraphs.0",
    "about.paragraphs.1",
    "about.paragraphs.2",
    "about.paragraphs.3",
    "about.paragraphs.4",
  ],
  ticket: [
    {
      title: "2+",
      subtitle: "about.ticket.experience",
    },
    {
      title: "16+",
      subtitle: "about.ticket.tools",
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
      name: "about.certificates.aws.name",
      duration: "09/06/2025 - 09/06/2028",
      description: "about.certificates.aws.description",
    },
  ],
};
