import type { FC } from "react";
import type { LucideIcon } from "lucide-react";

import type { IconProps } from "@src/static/SVGs";

interface ISkillItemProps {
  name: string;
  icon: FC<IconProps>;
  tag: FC;
}

export interface ISkillsProps {
  title: string;
  icon: LucideIcon;
  items: ISkillItemProps[];
}
