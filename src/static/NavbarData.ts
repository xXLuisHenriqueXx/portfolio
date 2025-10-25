import { BookOpen, Folder, Home, Mail, Settings } from "lucide-react";

import type { INavbarProps } from "@src/common/interfaces/Navbar.interface";
import Icon from "@src/assets/icon.svg";

export const navbarData: INavbarProps = {
  logo: {
    src: Icon,
    action: () =>
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
  },
  links: [
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
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "skills",
      text: "Habilidades",
      icon: Settings,
      action: () =>
        document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" }),
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
  ],
};
