import SkillItem from "./SkillItem";

import { skillsData } from "@src/static/SkillsData";

const SkillsList = () => {
  return (
    <article className="grid grid-cols-1 md:place-items-center gap-8  max-w-full">
      {skillsData.map((skill, index) => (
        <SkillItem key={index} data={skill} index={index} />
      ))}
    </article>
  );
};

export default SkillsList;
