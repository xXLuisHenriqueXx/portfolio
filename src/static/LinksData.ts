import {
  type LucideIcon,
  Home,
  BookOpen,
  Settings,
  Folder,
  Mail,
} from "lucide-react";

interface ILinksData {
  id: string;
  text: string;
  action: () => void;
  icon: LucideIcon;
}

export const linksData: ILinksData[] = [
  {
    id: "home",
    text: "Home",
    icon: Home,
    action: () =>
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "about",
    text: "Sobre",
    icon: BookOpen,
    action: () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "skills",
    text: "Habilidades",
    icon: Settings,
    action: () =>
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "projects",
    text: "Projetos",
    icon: Folder,
    action: () =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "contact",
    text: "Contato",
    icon: Mail,
    action: () =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
];
