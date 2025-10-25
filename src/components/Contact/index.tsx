import { useEffect, useRef } from "react";
import { tv } from "tailwind-variants";

import Header from "../Header";
import FormEmail from "./FormEmail";
import QuickAccessButtons from "./QuickAccessButtons";

const contactStyles = tv({
  slots: {
    container:
      "flex flex-col gap-y-8 items-center w-full py-12 px-5 bg-gradient-to-b from-card to-[#1B142F]",
    containerContent:
      "grid grid-cols-1 xl:grid-cols-2 place-items-center xl:place-items-start gap-8 w-full max-w-7xl",
  },
});

const { container, containerContent } = contactStyles();

interface IContactProps {
  setActiveScreen: (value: "contact") => void;
}

const Contact = ({ setActiveScreen }: IContactProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveScreen("contact");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section ref={ref} id={"contact"} className={container()}>
      <Header
        title="MEUS CONTATOS"
        description="Abaixo você pode entrar em contato comigo, estou sempre aberto a
        propostas. Me chame para combinarmos nosso próximo projeto!"
      />

      <div className={containerContent()}>
        <FormEmail />

        <QuickAccessButtons />
      </div>
    </section>
  );
};

export default Contact;
