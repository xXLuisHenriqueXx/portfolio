import { Button } from "../ui/button";

const IntroductionButtons = () => {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <p className="max-w-[80%] text-xs lg:text-sm 2xl:text-base font-light text-foreground/75 text-center">
        Desenvolvedor FullSatck Web e Mobile, dedicado a criar soluções
        elegantes e eficientes que melhoram a vida das pessoas.
      </p>

      <div className="grid grid-cols-1 gap-y-2 w-full max-w-xl">
        <Button
          variant={"outline"}
          className="py-4 text-xs lg:text-sm 2xl:text-base"
        >
          Meus projetos
        </Button>
        <Button
          variant={"outline"}
          className="py-4 text-xs lg:text-sm 2xl:text-base"
        >
          Contato
        </Button>
        <Button
          variant={"gradient"}
          className="py-4 text-xs lg:text-sm 2xl:text-base"
        >
          Baixar CV
        </Button>
      </div>
    </div>
  );
};

export default IntroductionButtons;
