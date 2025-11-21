import { useEffect, useRef } from "react";
import { tv } from "tailwind-variants";
import { useTranslation } from "react-i18next";

import Header from "../Header";
import SkillsList from "./SkillsList";

const skillsStyles = tv({
  slots: {
    container:
      "grid grid-cols-1 place-items-center gap-y-8 w-full py-12 px-5 bg-gradient-to-b from-card to-background",
  },
});

const { container } = skillsStyles();

interface ISkillsProps {
  setActiveScreen: (value: "skills") => void;
}

const Skills = ({ setActiveScreen }: ISkillsProps) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveScreen("skills");
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={"skills"}
      className={container()}
      aria-label={t("skills-a11y.section")}
    >
      <Header
        title={t("skills.header.title")}
        description={t("skills.header.description")}
      />

      <SkillsList />
    </section>
  );
};

export default Skills;
