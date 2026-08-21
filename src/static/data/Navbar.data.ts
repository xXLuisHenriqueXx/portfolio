import {
  BookOpen,
  Folder,
  Home,
  Mail,
  Settings,
  type LucideIcon,
} from "lucide-react";

import Icon from "@src/assets/icons/icon.svg";

export interface NavbarLogo {
  src: string;
  action: () => void;
}

export interface NavbarLink {
  id: string;
  text: string;
  action: () => void;
  icon: LucideIcon;
}

export interface NavbarData {
  logo: NavbarLogo;
  links: NavbarLink[];
}

export const NAVBAR_DATA: NavbarData = {
  logo: {
    src: Icon,
    action: () =>
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
  },
  links: [
    {
      id: "home",
      text: "navbar.nav.home",
      icon: Home,
      action: () =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "about",
      text: "navbar.nav.about",
      icon: BookOpen,
      action: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "skills",
      text: "navbar.nav.skills",
      icon: Settings,
      action: () =>
        document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "projects",
      text: "navbar.nav.projects",
      icon: Folder,
      action: () =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      id: "contact",
      text: "navbar.nav.contact",
      icon: Mail,
      action: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ],
};
