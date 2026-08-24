import { useTranslation } from "react-i18next";

import { Button } from "@src/components/ui/Button";

import type { HomeButton } from "@src/static/data/Home.data";

interface Props {
  items: HomeButton[];
}

const IntroductionButtons = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-col gap-y-2 w-full max-w-xl">
      {items.map(({ label, variant, action }) => (
        <Button
          key={label}
          variant={variant}
          onClick={action}
          aria-label={`${t("home-a11y.goTo")} ${label}`}
        >
          {t(label)}
        </Button>
      ))}
    </ul>
  );
};

export default IntroductionButtons;
