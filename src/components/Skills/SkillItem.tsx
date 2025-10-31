import { tv } from "tailwind-variants";
import { motion } from "framer-motion";

import SpotlightCard from "../SpotlightCard";

import type { ISkillsProps } from "@src/common/interfaces/Skills.interface";

const skillItemStyles = tv({
  slots: {
    container: "flex flex-col gap-y-2 lg:gap-y-4 w-full",
    containerHeader: "flex flex-row items-center gap-x-2",
    containerIcon: "p-2 border border-primary rounded-md",
    containerContent: "relative flex flex-row gap-x-2 overflow-x-auto",
    containerItem:
      "flex shrink-0 flex-col items-center justify-center gap-y-2 lg:gap-y-4 w-24 lg:w-38 p-2 lg:p-4 bg-card rounded-md hover:scale-[97.5%] transition-all duration-300 cursor-pointer",
    containerItemIconText: "flex flex-col items-center gap-y-1 lg:gap-y-2",
    icon: "w-3 h-3 lg:w-6 lg:h-6 text-primary",
    iconItem: "w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10",
    line: "w-full h-[1px] bg-primary",
    title: "text-[10px] xl:text-xs 2xl:text-sm font-semibold text-nowrap",
    nameText: "text-[8px] lg:text-[10px] 2xl:text-xs font-semibold",
  },
});

const {
  container,
  containerHeader,
  containerIcon,
  containerContent,
  containerItem,
  containerItemIconText,
  icon,
  iconItem,
  line,
  title,
  nameText,
} = skillItemStyles();

interface SkillItemProps {
  data: ISkillsProps;
}
const SkillItem = ({ data }: SkillItemProps) => {
  return (
    <div className={container()}>
      <div className={containerHeader()}>
        <div className={containerIcon()}>
          <data.icon className={icon()} />
        </div>

        <h2 className={title()}>{data.title}</h2>

        <span className={line()} />
      </div>

      <div className={containerContent()}>
        {data.items.map(({ name, icon: Icon, tag: Tag }, index) => (
          <motion.div
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
            <SpotlightCard
              className={containerItem()}
              spotlightColor="rgba(123, 83, 238, 0.25)"
            >
              <div className={containerItemIconText()}>
                <Icon className={iconItem()} />

                <p className={nameText()}>{name}</p>
              </div>

              <Tag />
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
