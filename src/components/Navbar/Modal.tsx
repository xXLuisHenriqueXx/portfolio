import { memo } from "react";
import { tv } from "tailwind-variants";
import { AnimatePresence, motion } from "framer-motion";

import { Card, CardContent } from "@src/components/ui/card";

import { navbarData } from "@src/static/NavbarData";

const modalStyles = tv({
  slots: {
    container: "",
    containerContent: "flex flex-col",
    containerLink:
      "relative flex flex-row items-center gap-x-4 w-full rounded-md hover:text-primary transition-all duration-200 cursor-pointer px-6 py-4 pr-8 text-base text-nowrap",
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
    <AnimatePresence>
      {showModal && (
        <motion.div
          id="mobile-menu"
          className={container({ showModal })}
          initial={{ translateY: -100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: -100, opacity: 0 }}
          transition={{ duration: 0.25, type: "spring" }}
          role="menu"
          aria-label="Mobile navigation"
        >
          <Card>
            <CardContent className={containerContent()}>
              {navbarData.links.map(({ id, text, icon: Icon, action }) => (
                <li key={id}>
                  <button
                    className={containerLink({
                      activeScreen: activeScreen === id,
                    })}
                    onClick={action}
                    role="menuitem"
                  >
                    <Icon size={16} />
                    {text}

                    {activeScreen === id && <span className={dot()} />}
                  </button>
                </li>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Modal);
