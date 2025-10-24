import { Separator } from "../ui/separator";

import AboutText from "./AboutText";
import TicketInfo from "./TicketInfo";
import Tools from "./Tools";
import Certificates from "./Certificates";
import { useEffect, useRef } from "react";

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
    <section
      ref={ref}
      id={"about"}
      className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center self-center gap-y-8 lg:gap-y-0 lg:gap-x-14 w-full max-w-7xl pt-12 pb-9 px-5"
    >
      <AboutText />

      <Separator className="lg:hidden" />

      <article className="flex flex-col gap-y-8 w-full">
        <TicketInfo />

        <Tools />

        <Certificates />
      </article>
    </section>
  );
};

export default About;
