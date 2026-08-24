import { useTranslation } from "react-i18next";

import { Separator } from "@src/components/ui/Separator";
import FadeIn from "@src/components/ui/animations/FadeIn";
import Text from "./Text";
import Ticket from "./Ticket";
import Tools from "./Tools";
import Certificates from "./Certificates";

import { ABOUT_DATA } from "@src/static/data/About.data";

const About = () => {
  const { t } = useTranslation();
  const { paragraphs, ticket, tools, certificates } = ABOUT_DATA;

  return (
    <section
      id={"about"}
      className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center self-center gap-8 w-full max-w-7xl py-20 px-6"
      aria-label={t("about-a11y.section")}
    >
      <FadeIn className="flex flex-1 flex-col gap-y-8">
        <Text items={paragraphs} />
      </FadeIn>

      <Separator className="lg:hidden" aria-hidden />

      <FadeIn className="flex flex-1 flex-col gap-y-8">
        <Ticket items={ticket} />
        <Tools items={tools} />
        <Certificates items={certificates} />
      </FadeIn>
    </section>
  );
};

export default About;
