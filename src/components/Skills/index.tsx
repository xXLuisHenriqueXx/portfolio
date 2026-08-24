import { useTranslation } from "react-i18next";

import Header from "@src/components/ui/Header";
import FadeIn from "@src/components/ui/animations/FadeIn";
import SkillsList from "./SkillsList";

import { SKILLS_DATA } from "@src/static/data/Skills.data";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-y-8 w-full py-20 px-6 bg-linear-to-b from-card to-background"
      aria-label={t("skills-a11y.section")}
    >
      <Header
        title={t("skills.header.title")}
        description={t("skills.header.description")}
      />

      <FadeIn
        className="flex flex-col items-center gap-y-8 w-full max-w-4xl"
        as="ul"
      >
        {SKILLS_DATA.map((skill) => (
          <SkillsList key={skill.title} data={skill} />
        ))}
      </FadeIn>
    </section>
  );
};

export default Skills;
