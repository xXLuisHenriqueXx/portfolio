import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

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
    <motion.article
      className={container()}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      viewport={{ once: true }}
    >
      {skillsData.map((skill) => (
        <SkillItem key={skill.title} data={skill} />
      ))}
    </motion.article>
  );
};

export default SkillsList;
