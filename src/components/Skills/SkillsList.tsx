import { tv } from "tailwind-variants";

import SkillItem from "./SkillItem";

import { skillsData } from "@src/static/SkillsData";

const skillsStyles = tv({
  slots: {
    container:
      "grid grid-cols-1 md:place-items-center gap-8 w-full max-w-xl lg:max-w-4xl",
  },
});

const { container } = skillsStyles();

const SkillsList = () => {
  return (
    <article className={container()}>
      {skillsData.map((skill) => (
        <SkillItem key={skill.title} data={skill} />
      ))}
    </article>
  );
};

export default SkillsList;
