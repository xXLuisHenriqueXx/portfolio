import { useMemo, useState } from "react";
import { tv } from "tailwind-variants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sun, X } from "lucide-react";

import { Button } from "../ui/button";
import Modal from "./Modal";

import type { TActiveScreen } from "@src/App";

import { navbarData } from "@src/static/NavbarData";
import FlagBr from "@src/assets/flag-br.svg";
import FlagUs from "@src/assets/flag-us.svg";

const navbarStyles = tv({
  slots: {
    container:
      "fixed top-0 left-0 right-0 flex flex-row justify-between items-center p-5 lg:px-8 z-50",
    containerLinksGroup:
      "hidden lg:flex flex-row items-center gap-x-6 px-4 py-2 bg-background/75 rounded-xl",
    containerLink:
      "relative flex flex-row items-center justify-center hover:px-4 hover:py-2 text-sm hover:text-primary transition-all duration-200 cursor-pointer",
    containerButtonsGroup: "flex flex-row items-center gap-x-2",
    image: "cursor-pointer",
    icon: "w-4 h-4 lg:w-6 lg:h-6",
    bottomBar: "absolute -bottom-0.5 w-6 h-1 bg-primary rounded-full",
  },
  variants: {
    activeScreen: {
      true: {
        containerLink:
          "px-4 py-2 rounded-md bg-primary/10 font-semibold text-primary",
      },
      false: { containerLink: "font-medium text-primary-text" },
    },
  },
});

const {
  container,
  containerLinksGroup,
  containerLink,
  containerButtonsGroup,
  image,
  icon,
  bottomBar,
} = navbarStyles();

interface INavbarProps {
  activeScreen: TActiveScreen;
}

const Navbar = ({ activeScreen }: INavbarProps) => {
  const [isPortuguese, setIsPortuguese] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const languageButtonData = useMemo(() => {
    if (isPortuguese) {
      return { image: FlagBr, text: "PT" };
    } else {
      return { image: FlagUs, text: "US" };
    }
  }, [isPortuguese]);

  return (
    <motion.nav
      className={container()}
      initial={{ translateY: -100, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      role="navigation"
      aria-label="Main"
    >
      <button
        className={image()}
        onClick={navbarData.logo.action}
        aria-label="Go to home"
      >
        <img src={navbarData.logo.src} alt="Logo LH" loading="lazy" />
      </button>

      <ul className={containerLinksGroup()}>
        {navbarData.links.map(({ id, text, action }) => {
          const isActive = activeScreen === id;

          return (
            <li key={id}>
              <button
                className={containerLink({ activeScreen: isActive })}
                onClick={action}
                aria-current={isActive ? "page" : undefined}
              >
                {text}

                {isActive && <span className={bottomBar()} />}
              </button>
            </li>
          );
        })}
      </ul>

      <ul className={containerButtonsGroup()}>
        <Button
          variant="outline"
          size={"sm"}
          onClick={() => setIsPortuguese(!isPortuguese)}
          aria-label={`Change language to ${
            isPortuguese ? "English" : "Portuguese"
          }`}
        >
          <img
            className={icon()}
            src={languageButtonData.image}
            alt={isPortuguese ? "Brazil flag" : "USA flag"}
            loading="lazy"
          />

          {languageButtonData.text}
        </Button>

        <Button
          variant={"outline"}
          className="size-8"
          aria-label="Toggle dark mode"
        >
          <Sun />
        </Button>

        <Button
          variant={"default"}
          className="relative lg:hidden size-8"
          onClick={() => setShowModal(!showModal)}
          aria-label={showModal ? "Close menu" : "Open menu"}
          aria-expanded={showModal}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {showModal ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        <Modal showModal={showModal} activeScreen={activeScreen} />
      </ul>
    </motion.nav>
  );
};

export default Navbar;
