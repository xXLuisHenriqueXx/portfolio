import { tv } from "tailwind-variants";

import SkillItem from "./SkillItem";

import { skillsData } from "@src/static/SkillsData";

const skillsStyles = tv({
  slots: {
    container: "grid grid-cols-1 md:place-items-center gap-8 max-w-full",
  },
});

const { container } = skillsStyles();

const SkillsList = () => {
  return (
    <article className={container()}>
      {skillsData.map((skill, index) => (
        <SkillItem key={index} data={skill} index={index} />
      ))}
    </article>
  );
};

export default SkillsList;
