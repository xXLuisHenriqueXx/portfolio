import { useEffect, useRef } from "react";

import Squares from "../Squares";
import Greetings from "./Greetings";
import IntroductionButtons from "./IntroductionButtons";
import ScrollDown from "./ScrollDown";

import Me from "@src/assets/me.png";

interface IHomeProps {
  setActiveScreen: (value: "home") => void;
}

const Home = ({ setActiveScreen }: IHomeProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveScreen("home");
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
      id={"home"}
      className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-4 w-full h-screen pt-18 pb-9 px-5"
    >
      <Squares
        direction="down"
        speed={0.05}
        squareSize={60}
        borderColor="rgba(123, 83, 238, 0.1)"
        hoverFillColor="rgba(123, 83, 238, 0.1)"
        className="absolute inset-0 z-0"
      />

      <article className="relative flex flex-col items-center gap-y-4 z-10">
        <Greetings />

        <IntroductionButtons />
      </article>

      <img
        className="relative w-64 xl:w-92 z-10"
        src={Me}
        alt="Foto de Luis Henrique"
      />

      <ScrollDown />
    </section>
  );
};

export default Home;
