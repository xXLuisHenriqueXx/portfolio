import SkillItem from "./SkillItem";

import { skillsData } from "@src/static/SkillsData";

const SkillsList = () => {
  return (
    <article className="flex flex-col gap-y-4 max-w-full">
      {skillsData.map((skill, index) => (
        <SkillItem key={index} data={skill} index={index} />
      ))}
    </article>
  );
};

export default SkillsList;
