import { useEffect, useRef } from "react";
import { tv } from "tailwind-variants";

import Squares from "../Squares";
import Greetings from "./Greetings";
import IntroductionButtons from "./IntroductionButtons";
import ScrollDown from "./ScrollDown";

import Me from "@src/assets/me.png";

const homeStyles = tv({
  slots: {
    container:
      "relative grid grid-cols-1 lg:grid-cols-2 place-items-center gap-y-4 lg:gap-y-0 w-full h-dvh pt-18 pb-8 px-5",
    containerContent: "flex flex-col items-center gap-y-4 z-10",
    image: "w-64 xl:w-92 2xl:w-md z-10",
    squares: "absolute inset-0 z-0",
  },
});

const { container, containerContent, image, squares } = homeStyles();

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
    <section ref={ref} id={"home"} className={container()}>
      <Squares
        direction="down"
        speed={0.05}
        squareSize={60}
        borderColor="rgba(123, 83, 238, 0.1)"
        hoverFillColor="rgba(123, 83, 238, 0.1)"
        className={squares()}
      />

      <article className={containerContent()}>
        <Greetings />

        <IntroductionButtons />
      </article>

      <img className={image()} src={Me} alt="Foto de Luis Henrique" />

      <ScrollDown />
    </section>
  );
};

export default Home;
