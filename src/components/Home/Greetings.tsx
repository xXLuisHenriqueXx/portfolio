import { useTranslation } from "react-i18next";

import SplitText from "@src/components/ui/SplitText";
import TextType from "@src/components/ui/TextType";

interface Props {
  items: string[];
}

const Greetings = ({ items }: Props) => {
  const { t } = useTranslation();

  return (
    <article className="flex flex-col items-center gap-y-4 text-center">
      <div className="text-foreground">
        <h2 className="text-xl md:text-2xl font-light">{t("home.hello")}</h2>

        <SplitText
          className="text-5xl md:text-6xl font-black text-start text-primary"
          tag="h1"
          text="LUIS HENRIQUE"
        />

        <h2 className="text-xl md:text-2xl font-light">
          {t("home.andIAm")}
          <TextType
            className="font-bold"
            text={items.map((key) => t(key))}
            typingSpeed={75}
            pauseDuration={1500}
            cursorCharacter="_"
          />
        </h2>
      </div>

      <p className="max-w-lg text-sm md:text-base font-light text-foreground/75">
        {t("home.introduction")}
      </p>
    </article>
  );
};

export default Greetings;
