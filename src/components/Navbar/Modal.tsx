import { tv } from "tailwind-variants";

import { Card, CardContent } from "@src/components/ui/card";

import { navbarData } from "@src/static/NavbarData";

const modalStyles = tv({
  slots: {
    container: "",
    containerContent: "flex flex-col",
    containerLink:
      "relative flex flex-row items-center gap-x-4 rounded-md hover:text-primary transition-all duration-300 cursor-pointer px-6 py-4 pr-8 text-base text-nowrap",
    dot: "absolute right-4 w-2 h-2 bg-primary rounded-full",
  },
  variants: {
    showModal: {
      true: { container: "absolute top-16 right-4" },
      false: { container: "hidden" },
    },
    activeScreen: {
      true: { containerLink: "bg-primary/10 font-semibold text-primary" },
      false: { containerLink: "font-medium text-primary-text" },
    },
  },
});

const { container, containerContent, containerLink, dot } = modalStyles();

interface IModalProps {
  showModal: boolean;
  activeScreen: string;
}

const Modal = ({ showModal, activeScreen }: IModalProps) => {
  return (
    <Card className={container({ showModal })}>
      <CardContent className={containerContent()}>
        {navbarData.links.map(({ id, text, icon: Icon, action }) => (
          <li
            key={id}
            className={containerLink({ activeScreen: activeScreen === id })}
            onClick={action}
          >
            <Icon size={16} />
            <p>{text}</p>

            {activeScreen === id && <span className={dot()} />}
          </li>
        ))}
      </CardContent>
    </Card>
  );
};

export default Modal;
