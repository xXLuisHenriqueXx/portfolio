import { useTranslation } from "react-i18next";
import {
  Fastify,
  Nestjs,
  Nextdotjs,
  Nodedotjs,
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
import FormEmail from "./FormEmail";
import QuickAccessButtons from "./QuickAccessButtons";

import { CONTACT_DATA } from "@src/static/data/Contact.data";

const Contact = () => {
  const { t } = useTranslation();
  const { buttons } = CONTACT_DATA;

  return (
    <section
      id="contact"
      className="flex flex-col gap-y-8 items-center w-full py-20 px-6"
      aria-label={t("contact-a11y.section")}
    >
      <Header
        title={t("contact.header.title")}
        description={t("contact.header.description")}
      />

      <FadeIn className="relative flex flex-row items-center justify-center gap-x-4 w-full max-w-5xl">
        <div className="relative flex flex-col items-center gap-y-4 w-full">
          <FormEmail />

          <div className="flex flex-row items-center justify-center gap-x-2 w-1/4">
            <Separator />
            <p className="shrink-0 text-sm text-foreground/50">
              Ou acesse minhas redes
            </p>
            <Separator />
          </div>

          <QuickAccessButtons items={buttons} />
        </div>

        <div className="relative hidden lg:flex flex-col items-center justify-center w-full h-125 overfl-yow-hidden">
          <div className="absolute size-64 bg-primary/25 rounded-full animate-pulse blur-2xl"></div>

          <OrbitingCircles iconSize={44} radius={200}>
            <React aria-hidden />
            <Typescript aria-hidden />
            <TailwindCss aria-hidden />
            <Nextdotjs aria-hidden />
            <Nodedotjs aria-hidden />
          </OrbitingCircles>
          <OrbitingCircles iconSize={36} radius={120} reverse speed={2}>
            <Fastify />
            <Nestjs />
            <Postgresql />
            <Prisma />
          </OrbitingCircles>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;
