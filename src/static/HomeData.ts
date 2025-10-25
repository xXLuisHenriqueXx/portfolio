import type { IHomeDataProps } from "@src/common/interfaces/Home.interface";
import Me from "@src/assets/me.png";

export const homeData: IHomeDataProps = {
  experiences: [
    "Desenvolvedor Web",
    "Desenvolvedor Mobile",
    "Desenvolvedor FullStack",
  ],
  introduction:
    "Desenvolvedor FullSatck Web e Mobile, dedicado a criar soluções elegantes e eficientes que melhoram a vida das pessoas.",
  buttons: [
    {
      label: "Meus projetos",
      variant: "outline",
      action: () =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Contato",
      variant: "outline",
      action: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Baixar CV",
      variant: "gradient",
      action: () => {},
    },
  ],
  image: Me,
};
