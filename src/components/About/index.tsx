import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { Separator } from "@src/components/ui/Separator";
import SlideIn from "@src/components/ui/animations/SlideIn";
import FadeIn from "@src/components/ui/animations/FadeIn";
import Text from "./Text";
import Ticket from "./Ticket";
import Tools from "./Tools";
import Certificates from "./Certificates";

import { ABOUT_DATA } from "@src/static/data/About.data";

interface Props {
  setActiveScreen: (value: "about") => void;
}

const About = ({ setActiveScreen }: Props) => {
  const { t } = useTranslation();
  const { paragraphs, ticket, tools, certificates } = ABOUT_DATA;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("about");
      },
      { threshold: 0.5 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={"about"}
      className="relative grid grid-cols-1 lg:grid-cols-2 place-items-center self-center gap-8 w-full max-w-7xl py-20 px-6"
      aria-label={t("about-a11y.section")}
    >
      <Text items={paragraphs} />

      <Separator className="lg:hidden" aria-hidden />

      <SlideIn direction="right">
        <FadeIn className="flex flex-1 flex-col gap-y-8">
          <Ticket items={ticket} />
          <Tools items={tools} />
          <Certificates items={certificates} />
        </FadeIn>
      </SlideIn>
    </section>
  );
};

export default About;
