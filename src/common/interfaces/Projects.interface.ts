import type { FC } from "react";

import type { IconProps } from "@src/static/SVGs";

interface IButtonProps {
  label: string;
  value: string;
}

interface ITechnologyProps {
  name: string;
  icon: FC<IconProps>;
}

export interface IProjectProps {
  id: number;
  title: string;
  type: string;
  image: string;
  tag: FC;
  description: string[];
  technologies: ITechnologyProps[];
  code: string | null;
  demo: string | null;
  createDate: string;
}

export interface IProjectsProps {
  buttons: IButtonProps[];
  projects: IProjectProps[];
}
