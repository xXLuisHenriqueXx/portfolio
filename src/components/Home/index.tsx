import { useEffect, useRef } from "react";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

import Squares from "../Squares";
import Greetings from "./Greetings";
import IntroductionButtons from "./IntroductionButtons";
import ScrollDown from "./ScrollDown";

import { homeData } from "@src/static/HomeData";

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
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("home");
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={"home"}
      className={container()}
      aria-label="Home section"
    >
      <Squares
        direction="down"
        speed={0.05}
        squareSize={60}
        borderColor="rgba(123, 83, 238, 0.1)"
        hoverFillColor="rgba(123, 83, 238, 0.1)"
        className={squares()}
        aria-hidden
      />

      <motion.article
        className={containerContent()}
        initial={{ translateX: -200, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <Greetings />

        <IntroductionButtons />
      </motion.article>

      <motion.img
        className={image()}
        initial={{ translateX: 200, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 1.5, type: "spring" }}
        viewport={{ once: true }}
        src={homeData.image}
        alt="Foto de Luis Henrique"
        loading="lazy"
        decoding="async"
      />

      <ScrollDown />
    </section>
  );
};

export default Home;
