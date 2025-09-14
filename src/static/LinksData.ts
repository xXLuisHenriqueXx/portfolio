import {
  type LucideIcon,
  Home,
  BookOpen,
  Settings,
  Folder,
  Mail,
} from "lucide-react";

interface ILinksData {
  id: number;
  text: string;
  label?: string;
  action?: () => void;
  icon: LucideIcon;
}

export const linksData: ILinksData[] = [
  {
    id: 1,
    text: "Home",
    icon: Home,
  },
  {
    id: 2,
    text: "Sobre",
    icon: BookOpen,
  },
  {
    id: 3,
    text: "Habilidades",
    icon: Settings,
  },
  {
    id: 4,
    text: "Projetos",
    icon: Folder,
  },
  {
    id: 5,
    text: "Contato",
    icon: Mail,
  },
];
