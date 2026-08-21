import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Expo,
  Fastify,
  Nestjs,
  Nextdotjs,
  Postgresql,
  Prisma,
  React,
  TailwindCss,
  Typescript,
} from "@thesvg/react";

import Header from "@src/components/ui/Header";
import { Separator } from "@src/components/ui/Separator";
import { OrbitingCircles } from "@src/components/ui/OrbitingCircles";
import FadeIn from "@src/components/ui/animations/FadeIn";
import SlideIn from "@src/components/ui/animations/SlideIn";
import FormEmail from "./FormEmail";
import QuickAccessButtons from "./QuickAccessButtons";

import { CONTACT_DATA } from "@src/static/data/Contact.data";

interface Props {
  setActiveScreen: (value: "contact") => void;
}

const Contact = ({ setActiveScreen }: Props) => {
  const { t } = useTranslation();
  const { buttons } = CONTACT_DATA;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("contact");
      },
      { threshold: 0.5 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="flex flex-col gap-y-8 items-center w-full py-20 px-6"
      aria-label={t("contact-a11y.section")}
    >
      <Header
        title={t("contact.header.title")}
        description={t("contact.header.description")}
      />

      <FadeIn className="relative flex flex-row items-center justify-center gap-x-4 w-full max-w-5xl">
        <SlideIn
          className="relative flex flex-col items-center gap-4 w-full"
          direction="left"
        >
          <FormEmail />

          <div className="flex flex-row items-center justify-center gap-x-2 w-1/4">
            <Separator />
            <p className="shrink-0 text-sm text-foreground/50">
              Ou acesse minhas redes
            </p>
            <Separator />
          </div>

          <QuickAccessButtons items={buttons} />
        </SlideIn>

        <SlideIn
          className="relative hidden lg:flex flex-col items-center justify-center w-full h-125 overflow-hidden"
          direction="right"
        >
          <OrbitingCircles iconSize={36}>
            <React aria-hidden />
            <Typescript aria-hidden />
            <TailwindCss aria-hidden />
            <Nextdotjs aria-hidden />
            <Expo aria-hidden />
          </OrbitingCircles>
          <OrbitingCircles iconSize={32} radius={100} reverse speed={2}>
            <Fastify />
            <Nestjs />
            <Postgresql />
            <Prisma />
          </OrbitingCircles>
        </SlideIn>
      </FadeIn>
    </section>
  );
};

export default Contact;
