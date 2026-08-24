export interface HomeButton {
  label: string;
  variant: "outline" | "gradient";
  action: () => void;
}

interface HomeData {
  roles: string[];
  buttons: HomeButton[];
}

export const HOME_DATA: HomeData = {
  roles: [
    "home.roles.frontend",
    "home.roles.mobile",
    "home.roles.backend",
    "home.roles.fullstack",
    "home.roles.freelancer",
  ],
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
};
