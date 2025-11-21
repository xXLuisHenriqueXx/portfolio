import { useMemo } from "react";
import { tv } from "tailwind-variants";
import { useTranslation } from "react-i18next";

import { Button } from "../ui/button";
import { homeData } from "@src/static/HomeData";

const introductionButtonsStyles = tv({
  slots: {
    container: "flex flex-col items-center gap-y-8",
    containerButtons: "grid grid-cols-1 gap-y-2 w-full max-w-xl",
    button: "py-4 text-xs lg:text-sm 2xl:text-base",
    text: "max-w-[80%] text-xs lg:text-sm 2xl:text-base font-light text-foreground/75 text-center",
  },
});

const { container, containerButtons, button, text } =
  introductionButtonsStyles();

const IntroductionButtons = () => {
  const { t } = useTranslation();

  const Buttons = useMemo(
    () =>
      homeData.buttons.map(({ label, variant, action }) => (
        <Button
          key={label}
          variant={variant}
          className={button()}
          onClick={action}
          aria-label={`${t("home-a11y.goTo")} ${label}`}
        >
          {t(label)}
        </Button>
      )),
    [homeData.buttons, t]
  );

  return (
    <div className={container()}>
      <p className={text()}>{t(homeData.introduction)}</p>

      <div className={containerButtons()}>{Buttons}</div>
    </div>
  );
};

export default IntroductionButtons;
