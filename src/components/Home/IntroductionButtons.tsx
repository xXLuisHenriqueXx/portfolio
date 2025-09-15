import { Button } from "../ui/button";

const IntroductionButtons = () => {
  return (
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
  );
};

export default IntroductionButtons;
