import type { IHomeProps } from "@src/common/interfaces/Home.interface";
import Me from "@src/assets/me.png";

export const homeData: IHomeProps = {
  experiences: [
    "home.experiences.frontend",
    "home.experiences.mobile",
    "home.experiences.backend",
    "home.experiences.fullstack",
    "home.experiences.freelancer",
  ],
  introduction: "home.introduction",
  buttons: [
    {
      label: "home.buttons.projects",
      variant: "outline",
      action: () =>
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "home.buttons.contact",
      variant: "outline",
      action: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "home.buttons.resume",
      variant: "gradient",
      action: () => {},
    },
  ],
  image: Me,
};
