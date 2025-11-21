import { tv } from "tailwind-variants";
import { useTranslation } from "react-i18next";

import SplitText from "../SplitText";
import TextType from "../TextType";

import { homeData } from "@src/static/HomeData";

const greetingsStyles = tv({
  slots: {
    container: "flex flex-col -gap-y-2",
    title:
      "text-4xl lg:text-5xl 2xl:text-6xl font-black text-start text-primary",
    subtitle:
      "text-base lg:text-xl 2xl:text-2xl font-light text-foreground text-center",
    highlight: "font-bold",
  },
});

const { container, title, subtitle, highlight } = greetingsStyles();

const Greetings = () => {
  const { t } = useTranslation();

  return (
    <div className={container()}>
      <h2 className={subtitle()}>{t("home.hello")}</h2>

      <SplitText
        tag="h1"
        text="LUIS HENRIQUE"
        className={title()}
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
      />

      <h2 className={subtitle()}>
        {t("home.andIAm")}
        <TextType
          className={highlight()}
          text={homeData.experiences.map((key) => t(key))}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </h2>
    </div>
  );
};

export default Greetings;
