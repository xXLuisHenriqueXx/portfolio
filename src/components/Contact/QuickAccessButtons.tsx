import { tv } from "tailwind-variants";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import SpotlightCard from "../SpotlightCard";

const quickAccessButtonsStyles = tv({
  slots: {
    container: "flex flex-col gap-y-2 w-full max-w-4xl",
    containerItem:
      "bg-card hover:scale-[101%] w-full p-4 rounded-lg transition-all duration-300 cursor-pointer",
    containerContent: "flex flex-row items-center justify-between",
    containerText: "flex flex-row items-center gap-x-2",
    icon: "w-8 h-8 text-primary",
    title: "text-sm font-semibold",
    description:
      "max-w-[60%] text-[10px] font-medium text-foreground/75 text-wrap",
  },
});

const {
  container,
  containerItem,
  containerContent,
  containerText,
  icon,
  title,
  description,
} = quickAccessButtonsStyles();

const QuickAccessButtons = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const message = `Olá, gostaria de entrar em contato para contratar seus serviços.`;

  return (
    <div className={container()}>
      {[
        {
          name: "GitHub",
          description: "Clique para ver mais projetos meus",
          icon: FaGithub,
          href: "https://github.com/xXLuisHenriqueXx",
        },
        {
          name: "LinkedIn",
          description: "Clique para ver minhas postagens e certificados",
          icon: FaLinkedin,
          href: "https://www.linkedin.com/in/luis-henrique-cardoso-a2b833269/",
        },
        {
          name: "Whatsapp",
          description:
            "Clique para podermos ter um contato mais livre e rápido",
          icon: FaWhatsapp,
          href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
          )}`,
        },
      ].map((item) => (
        <SpotlightCard
          key={item.name}
          className={containerItem()}
          spotlightColor="rgba(123, 83, 238, 0.5)"
        >
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={containerContent()}
          >
            <div className={containerText()}>
              <item.icon className={icon()} />
              <p className={title()}>{item.name}</p>
            </div>
            <p className={description()}>{item.description}</p>
          </a>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default QuickAccessButtons;
