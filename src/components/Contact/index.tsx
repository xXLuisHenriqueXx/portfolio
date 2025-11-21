import { useEffect, useRef } from "react";
import { tv } from "tailwind-variants";
import { useTranslation } from "react-i18next";

import Header from "../Header";
import FormEmail from "./FormEmail";
import QuickAccessButtons from "./QuickAccessButtons";

const contactStyles = tv({
  slots: {
    container:
      "flex flex-col gap-y-8 items-center w-full py-12 px-5 bg-gradient-to-b from-card to-background",
    containerContent:
      "grid grid-cols-1 xl:grid-cols-2 place-items-center xl:place-items-start gap-8 w-full max-w-7xl",
  },
});

const { container, containerContent } = contactStyles();

interface IContactProps {
  setActiveScreen: (value: "contact") => void;
}

const Contact = ({ setActiveScreen }: IContactProps) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("contact");
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={"contact"}
      className={container()}
      aria-label={t("contact-a11y.section")}
    >
      <Header
        title={t("contact.header.title")}
        description={t("contact.header.description")}
      />

      <div className={containerContent()}>
        <FormEmail />

        <QuickAccessButtons />
      </div>
    </section>
  );
};

export default Contact;
