import { useTranslation } from "react-i18next";

import { Button } from "@src/components/ui/Button";

import type { HomeButton } from "@src/static/data/Home.data";

interface Props {
  items: HomeButton[];
}

const IntroductionButtons = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-2 w-full max-w-xl">
      {items.map(({ label, variant, action }) => (
        <Button
          key={label}
          variant={variant}
          onClick={action}
        >
          {t(label)}
        </Button>
      ))}
    </div>
  );
};

export default IntroductionButtons;
