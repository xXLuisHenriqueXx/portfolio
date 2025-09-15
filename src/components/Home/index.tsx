import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

import Me from "@src/assets/me.png";
import Squares from "../Squares";
import SplitText from "../SplitText";
import TextType from "../TextType";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <section className="relative grid grid-cols-1 place-items-center gap-y-4 w-full min-h-screen pt-18 pb-9 px-5">
      <Squares
        direction="down"
        speed={0.05}
        squareSize={60}
        borderColor="rgba(123, 83, 238, 0.1)"
        hoverFillColor="rgba(123, 83, 238, 0.1)"
        className="absolute inset-0 z-0"
      />

      <article className="relative flex flex-col items-center gap-y-4 z-10">
        <div className="flex flex-col -gap-y-2">
          <h2 className="text-base font-light text-foreground text-center">
            Olá, me chamo
          </h2>

          <SplitText
            text="LUIS HENRIQUE"
            className="text-4xl font-black text-start text-primary"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          <h2 className="text-base font-light text-foreground text-center">
            e sou{" "}
            <TextType
              className="font-bold"
              text={[
                "Desenvolvedor Web",
                "Desenvolvedor Mobile",
                "Desenvolvedor FullSatck",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />
          </h2>
        </div>

        <div className="flex flex-col items-center gap-y-8">
          <p className="text-xs font-light text-foreground/75 text-center">
            Desenvolvedor FullSatck Web e Mobile, dedicado a criar soluções
            elegantes e eficientes que melhoram a vida das pessoas.
          </p>

          <div className="grid grid-cols-1 gap-y-2 w-full">
            <Button variant={"outline"} className="text-xs">
              Meus projetos
            </Button>
            <Button variant={"outline"} className="text-xs">
              Contato
            </Button>
            <Button variant={"gradient"} className="text-xs">
              Baixar CV
            </Button>
          </div>
        </div>
      </article>

      <img
        className="relative w-64 z-10"
        src={Me}
        alt="Foto de Luis Henrique"
      />

      <article className="flex flex-col items-center justify-center gap-y-2 z-10">
        <motion.div
          animate={{ translateY: [0, 2, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <ArrowDownCircle
            className="w-6 h-6 text-foreground/75"
            strokeWidth={1}
          />
        </motion.div>

        <p className="text-xs font-medium text-foreground/75">
          Role para baixo
        </p>
      </article>
    </section>
  );
};

export default Home;
