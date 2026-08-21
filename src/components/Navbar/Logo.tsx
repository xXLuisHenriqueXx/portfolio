import { useTranslation } from "react-i18next";

import { Button } from "@src/components/ui/Button";

import type { NavbarLogo } from "@src/static/NavbarData";

interface Props {
  data: NavbarLogo;
}

const Logo = ({ data }: Props) => {
  const { t } = useTranslation();

  return (
    <Button
      variant="ghost"
      onClick={data.action}
      aria-label={t("navbar-a11y.goHome")}
    >
      <img src={data.src} alt={t("navbar-a11y.logoAlt")} />
    </Button>
  );
};

export default Logo;
