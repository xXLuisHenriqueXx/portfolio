import type { LucideIcon } from "lucide-react";

interface ILogoProps {
  src: string;
  action: () => void;
}

interface ILinksProps {
  id: string;
  text: string;
  action: () => void;
  icon: LucideIcon;
}

export interface INavbarProps {
  logo: ILogoProps;
  links: ILinksProps[];
}
