import { useState } from "react";
import { useTranslation } from "react-i18next";

import FadeIn from "@src/components/ui/animations/FadeIn";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import DesktopLinks from "./DesktopLinks";
import UserActions from "./UserActions";

import type { TActiveScreen } from "@src/App";
import { NAVBAR_DATA } from "@src/static/data/Navbar.data";

interface Props {
  activeScreen: TActiveScreen;
}

const Navbar = ({ activeScreen }: Props) => {
  const { t, i18n } = useTranslation();
  const { logo, links } = NAVBAR_DATA;

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isPortuguese = i18n.language === "pt-BR";

  const toggleLanguage = () => {
    const newLang = isPortuguese ? "en-US" : "pt-BR";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <FadeIn
      className="fixed top-0 left-0 right-0 flex flex-row justify-between items-center px-6 py-4 z-50"
      aria-role="navigation"
      aria-label={t("navbar-a11y.main")}
    >
      <Logo data={logo} />

      <DesktopLinks items={links} active={activeScreen} />
      <UserActions
        open={showMenu}
        setOpen={setShowMenu}
        toggleLanguage={toggleLanguage}
        isPortuguese={isPortuguese}
      />

      <MobileMenu
        open={showMenu}
        onClose={() => setShowMenu(false)}
        active={activeScreen}
        items={links}
      />
    </FadeIn>
  );
};

export default Navbar;
