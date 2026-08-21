import { useTranslation } from "react-i18next";
import { Menu, Sun, X } from "lucide-react";

import { Button } from "@src/components/ui/Button";

import FlagBr from "@src/assets/flag-br.svg";
import FlagUs from "@src/assets/flag-us.svg";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggleLanguage: () => void;
  isPortuguese: boolean;
}

const UserActions = ({
  open,
  setOpen,
  toggleLanguage,
  isPortuguese,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row items-center gap-x-2">
      <Button
        variant="outline"
        onClick={toggleLanguage}
        aria-label={
          isPortuguese
            ? t("navbar-a11y.toggleLanguagePt")
            : t("navbar-a11y.toggleLanguageEn")
        }
      >
        <img
          className="size-4"
          src={isPortuguese ? FlagBr : FlagUs}
          alt={
            isPortuguese ? t("navbar-a11y.flags.pt") : t("navbar-a11y.flags.us")
          }
        />
        {isPortuguese ? "PT" : "EN"}
      </Button>

      <Button
        variant="outline"
        onClick={() => document.body.classList.toggle("dark")}
        aria-label={t("navbar-a11y.toggleTheme")}
      >
        <Sun aria-hidden />
      </Button>

      <Button
        className="lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label={
          open ? t("navbar-a11y.closeMenu") : t("navbar-a11y.openMenu")
        }
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {!open ? <Menu aria-hidden /> : <X aria-hidden />}
      </Button>
    </div>
  );
};

export default UserActions;
