import type { ComponentType } from "react";
import {
  Aws,
  Docker,
  Fastify,
  Figma,
  Git,
  Jest,
  Mongodb,
  Nestjs,
  Nextjs,
  Nodedotjs,
  Postgresql,
  Prisma,
  React,
  TailwindCss,
  Typescript,
  type SvgIconProps,
} from "@thesvg/react";

import AWS from "@src/assets/aws.png";

export interface AboutTicket {
  title: string;
  subtitle: string;
}

export interface AboutTool {
  name: string;
  icon: ComponentType<SvgIconProps & { variant: any }>;
}

export interface AboutCertificate {
  image: string;
  name: string;
  duration: string;
  description: string;
}

interface IAboutProps {
  paragraphs: string[];
  ticket: AboutTicket[];
  tools: AboutTool[];
  certificates: AboutCertificate[];
}

export const ABOUT_DATA: IAboutProps = {
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
      icon: React,
    },
    {
      name: "React Native",
      icon: React,
    },
    {
      name: "Next.js",
      icon: Nextjs,
    },
    {
      name: "TypeScript",
      icon: Typescript,
    },
    {
      name: "TailwindCSS",
      icon: TailwindCss,
    },
    {
      name: "Node.js",
      icon: Nodedotjs,
    },
    {
      name: "Fastify",
      icon: Fastify,
    },
    {
      name: "NestJS",
      icon: Nestjs,
    },
    {
      name: "PrismaORM",
      icon: Prisma,
    },
    {
      name: "Jest",
      icon: Jest,
    },
    {
      name: "Docker",
      icon: Docker,
    },
    {
      name: "Git",
      icon: Git,
    },
    {
      name: "PostgreSQL",
      icon: Postgresql,
    },
    {
      name: "MongoDB",
      icon: Mongodb,
    },
    {
      name: "Figma",
      icon: Figma,
    },
    {
      name: "AWS",
      icon: Aws,
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
