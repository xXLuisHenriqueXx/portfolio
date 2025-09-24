import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import SpotlightCard from "../SpotlightCard";

const QuickAccessButtons = () => {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const message = `Olá, gostaria de entrar em contato para contratar seus serviços.`;

  return (
    <div className="flex flex-col gap-y-2 w-full">
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
          className="bg-card hover:scale-[101%] w-full p-4 rounded-lg transition-all duration-300 cursor-pointer"
          spotlightColor="rgba(123, 83, 238, 0.5)"
        >
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-between"
          >
            <div className="flex flex-row items-center gap-x-2">
              <item.icon className="w-8 h-8 fill-primary" />
              <p className="text-sm font-semibold">{item.name}</p>
            </div>
            <p className="max-w-[60%] text-[10px] font-medium text-foreground/75 text-wrap">
              {item.description}
            </p>
          </a>
        </SpotlightCard>
      ))}
    </div>
  );
};

export default QuickAccessButtons;
