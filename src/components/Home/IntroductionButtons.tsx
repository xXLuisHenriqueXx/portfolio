import { tv } from "tailwind-variants";

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
  return (
    <div className={container()}>
      <p className={text()}>{homeData.introduction}</p>

      <div className={containerButtons()}>
        {homeData.buttons.map(({ label, variant, action }) => (
          <Button
            key={label}
            variant={variant}
            className={button()}
            onClick={action}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default IntroductionButtons;
