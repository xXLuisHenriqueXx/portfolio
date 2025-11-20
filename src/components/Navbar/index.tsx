import { useState } from "react";
import { tv } from "tailwind-variants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sun, X } from "lucide-react";

import { Button } from "../ui/button";
import Modal from "./Modal";

import type { TActiveScreen } from "@src/App";

import { navbarData } from "@src/static/NavbarData";
import FlagBr from "@src/assets/flag-br.svg";
import FlagUs from "@src/assets/flag-us.svg";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  const [showModal, setShowModal] = useState<boolean>(false);

  const isPortuguese = i18n.language === "pt-BR";

  const toggleLanguage = () => {
    const newLang = isPortuguese ? "en-US" : "pt-BR";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <motion.nav
      className={container()}
      initial={{ translateY: -100, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring" }}
      role="navigation"
      aria-label={t("navbar-a11y.main")}
    >
      <button
        className={image()}
        onClick={navbarData.logo.action}
        aria-label={t("navbar-a11y.goHome")}
      >
        <img
          src={navbarData.logo.src}
          alt={t("navbar-a11y.logoAlt")}
          loading="lazy"
        />
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
                {t(text)}

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
          onClick={toggleLanguage}
          aria-label={
            isPortuguese
              ? t("navbar-a11y.toggleLanguagePt")
              : t("navbar-a11y.toggleLanguageEn")
          }
        >
          <img
            className={icon()}
            src={isPortuguese ? FlagBr : FlagUs}
            alt={
              isPortuguese
                ? t("navbar-a11y.flags.pt")
                : t("navbar-a11y.flags.us")
            }
            loading="lazy"
          />

          {isPortuguese ? "PT" : "EN"}
        </Button>

        <Button
          variant={"outline"}
          className="size-8"
          aria-label={t("navbar-a11y.toggleTheme")}
        >
          <Sun aria-hidden />
        </Button>

        <Button
          variant={"default"}
          className="relative lg:hidden size-8"
          onClick={() => setShowModal(!showModal)}
          aria-label={
            showModal ? t("navbar-a11y.closeMenu") : t("navbar-a11y.openMenu")
          }
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
                <X className="w-5 h-5" aria-hidden />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Menu className="w-5 h-5" aria-hidden />
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
