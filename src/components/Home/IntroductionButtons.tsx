import { tv } from "tailwind-variants";

import { Button } from "../ui/button";

const introductionButtonsStyles = tv({
  slots: {
    container: "flex flex-col items-center gap-y-8",
    containerButtons: "grid grid-cols-1 gap-y-2 w-full max-w-xl",
    button: "py-4 text-xs lg:text-sm 2xl:text-base",
    text: "max-w-[80%] text-xs lg:text-sm 2xl:text-base font-light text-foreground/75 text-center",
  },
});

const { container, containerButtons, button, text } =
  introductionButtonsStyles();

const IntroductionButtons = () => {
  return (
    <div className={container()}>
      <p className={text()}>
        Desenvolvedor FullSatck Web e Mobile, dedicado a criar soluções
        elegantes e eficientes que melhoram a vida das pessoas.
      </p>

      <div className={containerButtons()}>
        <Button variant={"outline"} className={button()}>
          Meus projetos
        </Button>
        <Button variant={"outline"} className={button()}>
          Contato
        </Button>
        <Button variant={"gradient"} className={button()}>
          Baixar CV
        </Button>
      </div>
    </div>
  );
};

export default IntroductionButtons;
