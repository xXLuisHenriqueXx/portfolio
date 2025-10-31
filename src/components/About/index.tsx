import { useEffect, useRef } from "react";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

import { Separator } from "../ui/separator";
import AboutText from "./AboutText";
import TicketInfo from "./TicketInfo";
import Tools from "./Tools";
import Certificates from "./Certificates";

const aboutStyles = tv({
  slots: {
    container:
      "relative grid grid-cols-1 lg:grid-cols-2 place-items-center self-center gap-y-8 lg:gap-y-0 lg:gap-x-14 w-full max-w-7xl py-12 px-5",
    containerContent: "flex flex-col gap-y-8 w-full max-w-xl",
    separator: "lg:hidden",
  },
});

const { container, containerContent, separator } = aboutStyles();

interface IAboutProps {
  setActiveScreen: (value: "about") => void;
}

const About = ({ setActiveScreen }: IAboutProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveScreen("about");
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
    <section ref={ref} id={"about"} className={container()}>
      <AboutText />

      <Separator className={separator()} />

      <motion.article
        className={containerContent()}
        initial={{ translateX: 200, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <TicketInfo />

        <Tools />

        <Certificates />
      </motion.article>
    </section>
  );
};

export default About;
