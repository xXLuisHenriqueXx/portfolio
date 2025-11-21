import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import type { IContactProps } from "@src/common/interfaces/Contact.interface";

const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
const message = `Olá, gostaria de entrar em contato para contratar seus serviços de desenvolvimento.`;

export const contactData: IContactProps = {
  buttons: [
    {
      name: "GitHub",
      description: "contact.buttons.github",
      icon: FaGithub,
      href: "https://github.com/xXLuisHenriqueXx",
    },
    {
      name: "LinkedIn",
      description: "contact.buttons.linkedin",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/luis-henrique-cardoso-a2b833269/",
    },
    {
      name: "Whatsapp",
      description: "contact.buttons.whatsapp",
      icon: FaWhatsapp,
      href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    },
  ],
};
