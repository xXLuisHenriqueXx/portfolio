import type { ComponentType } from "react";
import { Github, Linkedin, Whatsapp, type SvgIconProps } from "@thesvg/react";

export interface ContactButton {
  name: string;
  icon: ComponentType<SvgIconProps & { variant: any }>;
  href: string;
}

interface ContactData {
  buttons: ContactButton[];
}

const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
const message = `Olá, gostaria de entrar em contato para contratar seus serviços de desenvolvimento.`;

export const CONTACT_DATA: ContactData = {
  buttons: [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/xXLuisHenriqueXx",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/luis-henrique-cardoso-a2b833269/",
    },
    {
      name: "Whatsapp",
      icon: Whatsapp,
      href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    },
  ],
};
